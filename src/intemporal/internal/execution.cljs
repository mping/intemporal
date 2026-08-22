(ns intemporal.internal.execution
  (:require-macros
   [intemporal.internal.context :refer [blet bthen]]
   [intemporal.internal.execution :refer [-notify]]
   [intemporal.internal.logging :as log])
  (:require
   [intemporal.internal.activity :as a]
   [intemporal.internal.context :as ctx]
   [intemporal.internal.error :as error]
   [intemporal.internal.logging :as log]
   [intemporal.protocol :as p]
   [intemporal.utils :as utils]
   [promesa.core :as prom]))

;; ============================================================================
;; Workflow Execution Engine
;; ============================================================================

(defn execute-workflow-fn [workflow-fn args]
  ;; Capture context so async callbacks (from p/let, etc.) can access it
  ;; after the dynamic binding scope has exited
  (let [ctx            (ctx/current-context)
        pending-asyncs (:pending-asyncs ctx)
        pending-events (:pending-events ctx)
        wrap-ctx       (fn [f]
                         (fn [v]
                           (binding [ctx/*workflow-context* ctx]
                             (f v))))]
    (try
      (let [result (apply workflow-fn args)]
        (if (prom/promise? result)
          ;; Workflow returned a Promise (e.g. from p/let) - resolve it.
          ;; Re-bind context in callbacks so that any code inside the promise
          ;; chain (e.g. stub calls inside p/let) can access the workflow context.
          (-> result
              (bthen (fn [resolved]
                       {:status :completed
                        :result resolved
                        :pending-asyncs @pending-asyncs
                        :pending-events @pending-events}))
              (prom/catch (wrap-ctx
                            (fn [e]
                              (cond
                                (error/suspension? e)
                                {:status :suspended
                                 :suspension-type (error/suspension-type e)
                                 :suspension-data (error/suspension-data e)
                                 :pending-asyncs @pending-asyncs
                                 :pending-events @pending-events}

                                (error/cancelled-exception? e)
                                {:status :cancelled
                                 :pending-events @pending-events}

                                :else
                                ;; Real failure. Saga rollback happens inside the
                                ;; body (user's catch -> intemporal/compensate); a
                                ;; suspending compensation surfaces above as a
                                ;; suspension so the loop schedules + resumes it.
                                {:status :failed
                                 :error e
                                 :pending-events @pending-events})))))
          ;; Synchronous result
          {:status :completed
           :result result
           :pending-asyncs @pending-asyncs
           :pending-events @pending-events}))
      (catch :default e
        (cond
          (error/suspension? e)
          {:status :suspended
           :suspension-type (error/suspension-type e)
           :suspension-data (error/suspension-data e)
           :pending-asyncs @pending-asyncs
           :pending-events @pending-events}

          (error/cancelled-exception? e)
          {:status :cancelled
           :pending-events @pending-events}

          :else
          {:status :failed
           :error e
           :pending-events @pending-events})))))

(defn- record-attempt!
  "Persist one consumed retry attempt (kimi.md X8). Written BEFORE anything waits
   on the backoff — the window a crash lands in — so both the count and the
   deadline survive the drive that spent them."
  [store workflow-id seq-num activity-name attempt error-map duration-ms will-retry? retry-at]
  (log/debugf "Recording attempt %d (will-retry: %s, retry-at: %s)" attempt will-retry? retry-at)
  (p/save-event store workflow-id
                (a/attempt-failed-event seq-num activity-name attempt
                                        error-map duration-ms will-retry? retry-at)))

(defn run-attempt
  "Run ONE attempt of an activity and record its outcome. Returns a promise. The
   retry LOOP is the drive loop's job now, not this function's (kimi.md X8): a
   backoff is a durable suspension, so nothing here ever waits.

   Starts at the attempt after the last one history records (`attempt-state`,
   recovered by `stub`) and resolves to one of:
     {:status :success ...}          -> caller writes :activity-completed
     {:status :failed ...}           -> caller writes :activity-failed (terminal)
     {:status :retry-scheduled ...}  -> nothing terminal; the recorded :retry-at
                                        is when the body may try again"
  [executor activity-name args timeout-ms retry-policy observer workflow-id seq-num
   attempt-state record-attempt!]
  (let [attempt (a/next-attempt attempt-state)
        start   (utils/current-time-ms)]
    (-notify p/on-activity-started observer workflow-id seq-num activity-name)
    (log/infof "Executing activity (attempt %d)" attempt)
    (-> (blet [result (p/execute-activity executor activity-name args timeout-ms)
               duration (- (utils/current-time-ms) start)]
          (-notify p/on-activity-completed observer workflow-id seq-num activity-name result duration)
          (log/infof "Activity succeeded (attempt %d), result: %s" attempt result)
          {:status   :success
           :result   result
           :duration duration
           :attempts attempt})
        (prom/catch js/Error
          (fn [e]
            (let [duration (- (utils/current-time-ms) start)
                  error-map (error/throwable->map e)]
              (-notify p/on-activity-failed observer workflow-id seq-num activity-name error-map duration)
              (log/warnf e "Activity failed (attempt %d)" attempt)
              {:status    :retry-or-fail
               :error     error-map
               :exception e
               :duration  duration})))
        (bthen
          (fn [exec-result]
            (case (:status exec-result)
              :success
              exec-result

              :retry-or-fail
              (let [infra?   (a/infrastructure-failure? (:exception exec-result))
                    retry?   (boolean (and retry-policy (not infra?)
                                           (a/should-retry? retry-policy (:exception exec-result) attempt)))
                    retry-at (a/retry-at retry-policy attempt retry?)]
                ;; Infrastructure failures are re-executed rather than replayed,
                ;; so they must not spend the budget (a/infrastructure-failure?)
                ;; — they fall through to a terminal :activity-failed carrying the
                ;; infra kind, which is what makes `stub` reschedule.
                (when-not infra?
                  (record-attempt! attempt (:error exec-result) (:duration exec-result) retry? retry-at))
                (if retry?
                  {:status :retry-scheduled :retry-at retry-at :attempts attempt}
                  {:status   :failed
                   :error    (:error exec-result)
                   :duration (:duration exec-result)
                   :attempts attempt}))))))))

(defn- continue-decision [] {:op :continue})

(defn- park-decision
  ([reason events] (park-decision reason events nil))
  ([reason events next-run-at]
   {:op :park
    :reason reason
    :events (vec events)
    :next-run-at next-run-at}))

(defn park-until-retry!
  "Return a durable park command for an activity retry deadline."
  [workflow-id seq retry-at observer]
  (log/infof "Activity retry at seq %s due in %sms; suspending"
             seq (max 0 (- retry-at (utils/current-time-ms))))
  (-notify p/on-timer-scheduled observer workflow-id seq retry-at)
  (park-decision :retry [] retry-at))

(defn process-pending-activity
  "Run (at most) one attempt of the suspended activity and record its outcome.
   Returns a promise.

   Whether an attempt may run at all is decided HERE rather than in the workflow
   body: `stub` always schedules, and the engine owns the retry clock. That keeps
   the body's suspension shape stable for `async`, which re-derives an incomplete
   async from it, and it means any re-drive — a worker poll, an unrelated signal,
   a cancel — re-parks instead of running the attempt early."
  [store executor workflow-id
   {:keys [seq activity-name args timeout-ms retry-policy attempt-state]
    :as suspension-data}
   pending-events observer]
  (log/with-mdc {:activity activity-name :seqnum seq}
    ;; Save pending events on EVERY path, including the parking ones: `stub` will
    ;; re-emit :activity-scheduled next pass, but the async re-enqueue reads it
    ;; back out of history, so it must be durable before we park.
    (p/save-events store workflow-id pending-events)
    (if (a/retry-pending? attempt-state)
      (prom/resolved
        (park-until-retry! workflow-id seq (:retry-at attempt-state) observer))
      (blet [exec-result (if (a/retry-budget-spent? attempt-state)
                           ;; A previous drive spent the last attempt the
                           ;; policy allowed and crashed before recording
                           ;; the outcome. Running the activity again here
                           ;; would exceed :max-attempts, so finalize from
                           ;; the recorded error.
                           (do
                             (log/infof "Retry budget already spent after %d attempt(s); failing from recorded attempt"
                                        (:attempts attempt-state))
                             {:status   :failed
                              :error    (:error attempt-state)
                              :attempts (:attempts attempt-state)})
                           (run-attempt executor activity-name args timeout-ms
                                        retry-policy observer workflow-id seq
                                        attempt-state
                                        (partial record-attempt! store workflow-id seq activity-name)))]
        (if (= :retry-scheduled (:status exec-result))
          (park-until-retry! workflow-id seq (:retry-at exec-result) observer)
          (let [success? (= :success (:status exec-result))
                event    (cond-> {:event-type    (if success? :activity-completed :activity-failed)
                                  :seq           seq
                                  :activity-name activity-name
                                  :result        (:result exec-result)
                                  :duration-ms   (:duration exec-result)
                                  :attempts      (:attempts exec-result)
                                  :timestamp     (utils/current-time-ms)}
                           success? (assoc :result (:result exec-result))
                           (not success?) (assoc :error (:error exec-result)))]
            (p/save-event store workflow-id event)
            (continue-decision)))))))

;; ============================================================================
;; Async batches: the ENGINE owns the retry loop (kimi.md X8)
;; ============================================================================
;;
;; The executor used to retry internally, with no store, workflow-id or seq in
;; scope — so an async retry could never be recorded and every crash restarted
;; its count at 1. Now the executor runs each activity exactly once and
;; everything below decides whether to retry, exactly as the sequential path
;; does, using the same `intemporal.internal.activity` helpers.

(defn due-asyncs
  "The pending asyncs whose activity may run right now: everything except the
   ones still serving a recorded retry backoff."
  [pending-asyncs]
  (remove #(a/retry-pending? (:attempt-state %)) pending-asyncs))

(defn earliest-async-retry
  "The soonest instant any backing-off async becomes due, or nil if none is."
  [pending-asyncs]
  (->> pending-asyncs
       (keep #(when (a/retry-pending? (:attempt-state %))
                (:retry-at (:attempt-state %))))
       (reduce (fn [a b] (if a (min a b) b)) nil)))

(defn- with-async-retry-deadline [pending-asyncs decision]
  (if (and (= :park (:op decision)) (= :async (:reason decision)))
    (assoc decision :next-run-at (earliest-async-retry pending-asyncs))
    decision))

(defn- async-terminal-failure-events
  "The events that resolve an async handle as failed."
  [{:keys [activity-name activity-seq handle-seq]} error attempt now workflow-id observer]
  (-notify p/on-async-failed observer workflow-id handle-seq error)
  (log/tracef "Got completion event: activity failed, error: %s" error)
  [{:event-type    :activity-failed
    :seq           activity-seq
    :activity-name activity-name
    :error         error
    :attempts      attempt
    :timestamp     now}
   {:event-type :async-failed
    :seq        handle-seq
    :last-seq   activity-seq
    :error      error
    :timestamp  now}])

(defn- async-completion-events
  "History for one finished async attempt. A retry that is merely SCHEDULED
   writes only the attempt record: no :async-completed / :async-failed, so the
   handle stays pending and `join` keeps parking until the retries resolve."
  [{:keys [activity-name activity-seq handle-seq retry-policy attempt-state] :as async-info}
   result now workflow-id observer drain?]
  (log/with-mdc {:activity activity-name :seqnum activity-seq}
    (if (= :success (:status result))
      (do
        (-notify p/on-async-completed observer workflow-id handle-seq (:result result))
        (log/tracef "Got completion event: activity succeeded, result: %s" result)
        [{:event-type    :activity-completed
          :seq           activity-seq
          :activity-name activity-name
          :result        (:result result)
          :duration-ms   (:duration result)
          :attempts      (a/next-attempt attempt-state)
          :timestamp     now}
         {:event-type :async-completed
          :seq        handle-seq
          :last-seq   activity-seq
          :result     (:result result)
          :timestamp  now}])
      (let [attempt   (a/next-attempt attempt-state)
            error     (:error result)
            ;; Classify from the LIVE exception the executor hands back, not from
            ;; the serialized map: a user :retryable-fn is written against an
            ;; exception and would silently answer false for a map, so async
            ;; activities would never retry.
            exception (:exception result)
            infra?    (a/infrastructure-failure? exception)
            retry?    (boolean (and retry-policy (not infra?) (not drain?)
                                    (a/should-retry? retry-policy exception attempt)))
            retry-at  (a/retry-at retry-policy attempt retry?)]
        (cond
          retry?
          (do
            (log/infof "Async activity failed (attempt %d); retrying at %s" attempt retry-at)
            [(a/attempt-failed-event activity-seq activity-name attempt
                                     error (:duration result) true retry-at)])

          ;; Infrastructure failures consume no budget: `async` re-enqueues them
          ;; from the :activity-failed kind (X6/E4/X4), so record no attempt.
          infra?
          (async-terminal-failure-events async-info error attempt now workflow-id observer)

          :else
          (into [(a/attempt-failed-event activity-seq activity-name attempt
                                         error (:duration result) false nil)]
                (async-terminal-failure-events async-info error attempt now workflow-id observer)))))))

(defn- spent-budget-events
  "Resolve an async whose recorded attempt was granted no retry but whose outcome
   never got written (a crash in between). Re-running it would spend an attempt
   the policy never granted — the same guard the sequential path applies."
  [{:keys [attempt-state] :as async-info} now workflow-id observer]
  (log/infof "Async retry budget already spent after %d attempt(s); failing from recorded attempt"
             (:attempts attempt-state))
  (async-terminal-failure-events async-info (:error attempt-state) (:attempts attempt-state)
                                 now workflow-id observer))

(defn process-pending-asyncs-parallel
  "Run the DUE pending asyncs and record their outcomes. Returns a promise of
   :continue. Asyncs still serving a retry backoff are skipped; arming their
   timers is the caller's job.

   `drain?` is the finalization path: the workflow body has already completed, so
   these handles are un-joined and their results discarded. Waiting out a backoff
   would only stall completion, so everything runs now and nothing is retried."
  ([store executor workflow-id pending-asyncs pending-events observer]
   (process-pending-asyncs-parallel store executor workflow-id pending-asyncs pending-events
                                    observer false))
  ([store executor workflow-id pending-asyncs pending-events observer drain?]
   (if-not (seq pending-asyncs)
     (prom/resolved (continue-decision))
     (do
       ;; Save all pending events first
       (p/save-events store workflow-id pending-events)

       (let [{spent true eligible false} (group-by #(a/retry-budget-spent? (:attempt-state %))
                                                   pending-asyncs)
             runnable (vec (if drain? eligible (due-asyncs eligible)))
             now      (utils/current-time-ms)
             spent-events (mapcat #(spent-budget-events % now workflow-id observer) spent)]
         (if-not (seq runnable)
           (do
             (when (seq spent-events)
               (p/save-events store workflow-id spent-events))
             (prom/resolved (continue-decision)))
           (do
             ;; One attempt each: whether to retry is decided here, from the
             ;; durable attempt record, never inside the executor.
             (log/infof "Executing %d activities in parallel via executor %s" (count runnable) executor)
             (blet [results (p/execute-activities-parallel executor runnable)]
               (let [events (mapcat #(async-completion-events %1 %2 now workflow-id observer drain?)
                                    runnable results)]
                 (p/save-events store workflow-id (concat spent-events events))
                 (continue-decision))))))))))

(defn process-timer [store workflow-id suspension-data pending-events observer]
  (let [{:keys [seq fire-at]} suspension-data
        now (utils/current-time-ms)]
    (if (>= now fire-at)
      (do
        (p/save-events store workflow-id pending-events)
        (when-not (p/find-event store workflow-id :timer-fired seq)
          (p/save-event store workflow-id {:event-type :timer-fired
                                           :seq seq
                                           :timestamp now})
          (-notify p/on-timer-fired observer workflow-id seq))
        (continue-decision))
      (park-decision :timer pending-events fire-at))))

(defn process-signal [store workflow-id suspension-data pending-events observer]
  (let [{:keys [seq signal-name]} suspension-data
        save-received (fn [signal-data]
                        (p/save-event store workflow-id {:event-type  :signal-received
                                                         :seq         seq
                                                         :signal-name signal-name
                                                         :signal-id   (:id signal-data)
                                                         :payload     (:payload signal-data)
                                                         :timestamp   (utils/current-time-ms)})
                        (-notify p/on-signal-received observer workflow-id signal-name (:payload signal-data)))]
    (if-let [signal-data (p/consume-signal store workflow-id signal-name)]
      (do
        (p/save-events store workflow-id pending-events)
        (save-received signal-data)
        (continue-decision))
      (park-decision :signal pending-events))))

(defn process-signal-with-timeout [store workflow-id suspension-data
                                   pending-events observer]
  (let [{:keys [seq signal-name deadline]} suspension-data
        now (utils/current-time-ms)
        save-completed (fn [signal-data?]
                         (let [event (cond-> {:event-type  :signal-wait-completed
                                              :seq         seq
                                              :received    (some? signal-data?)
                                              :signal-name signal-name
                                              :timestamp   (utils/current-time-ms)}
                                       (some? signal-data?) (assoc :payload (:payload signal-data?)))]
                           (p/save-event store workflow-id event)
                           (when signal-data?
                             (-notify p/on-signal-received observer workflow-id signal-name (:payload signal-data?)))))]
    (if-let [signal-data (p/consume-signal store workflow-id signal-name)]
      (do
        (p/save-events store workflow-id pending-events)
        (save-completed signal-data)
        (continue-decision))
      (if (>= now deadline)
        (do
          (p/save-events store workflow-id pending-events)
          (save-completed nil)
          (continue-decision))
        (park-decision :signal-timeout pending-events deadline)))))

(defn process-join-pending
  "Handle a :join-pending suspension. handle-suspension flushes the pending-asyncs
   batch before dispatching, so this only runs with no batch asyncs left (a join
   whose completion already exists, or an independent child join). Re-enter
   (:continue) when the handle resolved, else wait for it."
  [store workflow-id suspension-data pending-events observer]
  (let [{:keys [handle-seq]} suspension-data
        completed (p/find-event store workflow-id :async-completed handle-seq)
        failed    (p/find-event store workflow-id :async-failed handle-seq)]
    ;; Check if the handle is now complete. Use the passed-in store/workflow-id:
    ;; handle-suspension runs outside the dynamic workflow-context binding, so
    ;; (ctx/current-store) would throw here.
    (prom/resolved
      (if (or completed failed)
        (do
          (p/save-events store workflow-id pending-events)
          (continue-decision))
        (park-decision :async pending-events)))))

;; ============================================================================
;; Helper Functions for Workflow Execution
;; ============================================================================

(defn make-workflow-context
  "Create workflow execution context from history."
  [workflow-id history store registry observer & {:keys [protocols]}]
  (cond-> {;; Write-once pass snapshot — never swap it: :history-index is derived
           ;; from this exact vector and would silently desync.
           :history (atom history)
           ;; Built once per pass — plain map, no deref at the call site.
           :history-index (ctx/index-history history)
           :workflow-id workflow-id
           :seq-counter (atom 0)
           :pending-events (atom [])
           :pending-asyncs (atom [])
           :compensating? (atom false)
           :store store
           :registry registry
           :observer observer}
    protocols (assoc :protocols protocols)))

;; ============================================================================
;; Tier 2: independent child workflows — parent/child lifecycle linkage
;; (mirrors execution.clj; store ops on InMemoryStore are synchronous in CLJS)
;; ============================================================================

(def ^:private terminal-status? #{:completed :failed :cancelled :terminated})

(defn- next-terminal-seq
  "Deterministic :seq for a terminal control event (:workflow-completed/-failed/
   -cancelled/-terminated): one past the highest seq recorded for `workflow-id`.
   A8: every event now carries a real seq — this keeps terminal events sorting
   after every real op and re-finalization idempotent under a (workflow_id,
   seq, event_type) upsert key, instead of relying on an absent seq.
   :workflow-started always seeds -1 (core.cljc), so an empty-bodied workflow
   still gets a distinct terminal seq (0). Uses `p/max-seq` rather than a full
   `load-history` (InMemoryStore is the only CLJS store today, so both are O(n)
   in-process, but this keeps CLJ/CLJS symmetric for future stores)."
  [store workflow-id]
  (inc (or (p/max-seq store workflow-id) -1)))

(defn- parent-link [store workflow-id]
  (let [started (->> (p/load-history store workflow-id)
                     (filter #(= :workflow-started (:event-type %)))
                     first)]
    (when (:parent-id started)
      {:parent-id  (:parent-id started)
       :parent-seq (:parent-seq started)})))

(defn- notify-parent-terminal
  "Record a child's terminal outcome in the parent's history (a :child-workflow-*
   event plus an :async-* alias so `join` resolves) and wake the parent. Idempotent."
  [store workflow-id completed? payload]
  (when-let [{:keys [parent-id parent-seq]} (parent-link store workflow-id)]
    (let [now     (utils/current-time-ms)
          already (or (p/find-event store parent-id :child-workflow-completed parent-seq)
                      (p/find-event store parent-id :child-workflow-failed parent-seq))]
      (when-not already
        (let [child-ev (cond-> {:event-type        (if completed? :child-workflow-completed :child-workflow-failed)
                                :seq               parent-seq
                                :child-workflow-id workflow-id
                                :timestamp         now}
                         completed?       (assoc :result payload)
                         (not completed?) (assoc :error payload))
              async-ev (cond-> {:event-type (if completed? :async-completed :async-failed)
                                :seq        parent-seq
                                :last-seq   parent-seq
                                :timestamp  now}
                         completed?       (assoc :result payload)
                         (not completed?) (assoc :error payload))]
          (p/save-events-and-wake! store parent-id [child-ev async-ev]))))))

(defn- has-children? [store workflow-id]
  (boolean (some #(= :child-workflow-scheduled (:event-type %))
                 (p/load-history store workflow-id))))

(defn enforce-close-policies!
  "Apply each child's :parent-close-policy when `workflow-id` closes (acts on
   CHILDREN only): :cascade-cancel sets the cancel flag + wakes (graceful, ends
   :cancelled); :terminate writes a terminal :workflow-terminated event (forceful,
   ends :terminated); :abandon leaves the child running. Recurses into each closed
   child's children (a closed workflow won't re-run its finalizer under worker
   drive). Idempotent. Store ops are synchronous on InMemoryStore in CLJS."
  [store workflow-id]
  (when (has-children? store workflow-id)
    (doseq [{:keys [child-id status policy]} (p/list-children store workflow-id)]
      (when-not (terminal-status? status)
        (case policy
          ;; mark-cancelled atomically wakes a child parked on a timer, so it can
          ;; observe cancellation immediately rather than at the old deadline.
          :cascade-cancel (do (p/mark-cancelled store child-id)
                              (enforce-close-policies! store child-id))
          :terminate      (do (p/save-event store child-id
                                            {:event-type  :workflow-terminated
                                             :seq         (next-terminal-seq store child-id)
                                             :workflow-id child-id
                                             :timestamp   (utils/current-time-ms)})
                              (p/wake-workflow store child-id)
                              (enforce-close-policies! store child-id))
          nil)))))

(defn- finish-workflow!
  [store workflow-id pending-events status payload observer]
  (p/save-events store workflow-id pending-events)
  (let [completed? (= :completed status)
        event      (cond-> {:event-type (case status
                                          :completed :workflow-completed
                                          :cancelled :workflow-cancelled
                                          :failed :workflow-failed)
                            :seq (next-terminal-seq store workflow-id)
                            :timestamp (utils/current-time-ms)}
                     completed? (assoc :result payload)
                     (not completed?) (assoc :error payload))]
    (p/save-event store workflow-id event)
    (case status
      :completed (-notify p/on-workflow-completed observer workflow-id payload)
      :cancelled (-notify p/on-workflow-cancelled observer workflow-id)
      :failed    (-notify p/on-workflow-failed observer workflow-id payload))
    (enforce-close-policies! store workflow-id)
    (notify-parent-terminal store workflow-id completed? payload)
    (cond-> {:status status :workflow-id workflow-id}
      completed? (assoc :result payload)
      (not completed?) (assoc :error payload))))

(defn finalize-completed
  [store executor workflow-id pending-asyncs pending-events result observer]
  (blet [_ (when (seq pending-asyncs)
             (process-pending-asyncs-parallel store executor workflow-id
               pending-asyncs pending-events observer true))]
    (finish-workflow! store workflow-id
                      (if (seq pending-asyncs) [] pending-events)
                      :completed result observer)))

(defn finalize-cancelled
  "Save a dedicated cancellation event and return the cancelled result.
   The history event is :workflow-cancelled (a first-class terminal state), so
   history and the derived status agree rather than recording cancellation as a
   failure."
  [store workflow-id pending-events observer]
  (let [error-map {:type "clojure.lang.ExceptionInfo"
                   :message "Workflow cancelled"
                   :data {:workflow-id workflow-id}}]
    (finish-workflow! store workflow-id pending-events :cancelled error-map observer)))

(defn finalize-failed
  "Save failure event and return result."
  [store workflow-id pending-events error observer]
  (finish-workflow! store workflow-id pending-events :failed
                    (error/throwable->map error) observer))

(defn run-once
  "Internal: Execute a side-effect thunk only once (not on replay).
   Uses a special event marker to track execution.

   This is an internal implementation detail and should not be exposed to users.
   Users should wrap side effects in activities for proper determinism.

   This can be used to eg run logging statements, etc"
  [thunk]
  (ctx/check-cancelled!)
  (let [seq-num (ctx/next-seq!)
        existing (ctx/history-event :run-once-completed seq-num)]
    (if existing
      ;; Replay: already executed, return cached result
      (:result existing)
      ;; First time: execute thunk and save result
      (let [result (thunk)]
        (ctx/add-pending-event! {:event-type :run-once-completed
                                 :seq seq-num
                                 :result result
                                 :timestamp (utils/current-time-ms)})
        result))))

(defn- handle-suspension
  "Turn a workflow suspension into a promised continue/park decision."
  [{:keys [store executor]} workflow-id suspension-type suspension-data
   pending-asyncs pending-events observer]
  (-notify p/on-workflow-suspended observer workflow-id suspension-type)
  (if (seq (due-asyncs pending-asyncs))
    (process-pending-asyncs-parallel store executor workflow-id
                                     pending-asyncs pending-events observer)
    (bthen
      (prom/resolved
        (case suspension-type
          :activity (process-pending-activity store executor workflow-id
                                              suspension-data pending-events observer)
          :timer (process-timer store workflow-id suspension-data pending-events observer)
          :wait-signal (process-signal store workflow-id suspension-data pending-events observer)
          :wait-signal-timeout (process-signal-with-timeout
                                 store workflow-id suspension-data pending-events observer)
          :join-pending (process-join-pending store workflow-id
                                              suspension-data pending-events observer)
          :join-any-pending
          (let [{:keys [handle-seqs]} suspension-data]
            (if (or (some #(p/find-event store workflow-id :async-completed %) handle-seqs)
                    (every? #(p/find-event store workflow-id :async-failed %) handle-seqs))
              (do (p/save-events store workflow-id pending-events)
                  (continue-decision))
              (park-decision :async pending-events)))))
      (fn [decision]
        (with-async-retry-deadline pending-asyncs decision)))))

(defn- replay-once
  [{:keys [store registry protocols]} workflow-id workflow-fn args observer]
  (let [history (p/load-history store workflow-id)
        context (make-workflow-context workflow-id history store registry observer
                                       :protocols protocols)]
    (binding [ctx/*workflow-context* context]
      (execute-workflow-fn workflow-fn args))))

(defn- suspension-outcome!
  [engine workflow-id exec-result expected-wake-version observer]
  (blet [decision (handle-suspension engine
                                     workflow-id
                                     (:suspension-type exec-result)
                                     (:suspension-data exec-result)
                                     (:pending-asyncs exec-result)
                                     (:pending-events exec-result)
                                     observer)]
    (when (and observer (= :continue (:op decision)))
      (p/on-workflow-resumed observer workflow-id))
    (if (= :continue (:op decision))
      {:op :continue :wake-version expected-wake-version}
      (let [{:keys [park-status wake-version]}
            (p/park-workflow! (:store engine) workflow-id
                              expected-wake-version
                              (:events decision)
                              (:next-run-at decision))]
        (case park-status
          :wake-raced {:op :continue :wake-version wake-version}
          :parked {:op :return
                   :value {:status :parked
                           :reason (:reason decision)
                           :workflow-id workflow-id}}
          :terminal {:op :return
                     :value {:status (p/get-workflow-status (:store engine) workflow-id)
                             :workflow-id workflow-id}}
          :not-running {:op :return
                        :value {:status :interrupted
                                :workflow-id workflow-id}})))))

(defn drive-workflow!
  "Replay one claimed workflow until it terminates, parks, or is interrupted."
  [{:keys [store executor] :as engine} workflow-id workflow-fn args
   {:keys [observer max-iterations wake-version]
    :or {max-iterations 1000}}]
  (when (nil? wake-version)
    (throw (ex-info "A claimed drive requires a wake-version"
                    {:workflow-id workflow-id})))
  #_{:clj-kondo/ignore [:loop-without-recur]}
  (prom/loop [iteration 0
              expected-wake-version wake-version]
    (cond
      (>= iteration max-iterations)
      (do
        (log/warnf "Workflow %s exceeded replay budget of %d iterations"
                   workflow-id max-iterations)
        (finalize-failed store workflow-id []
                         (ex-info "Replay budget exceeded"
                                  {:workflow-id workflow-id :iterations iteration})
                         observer))

      (p/shutdown? executor)
      (do
        (log/infof "Executor shutting down, interrupting workflow drive")
        {:status :interrupted :workflow-id workflow-id})

      :else
      (blet [exec-result (replay-once engine workflow-id workflow-fn args observer)]
        (log/debugf "Workflow function executed, got: %s" (:status exec-result))
        (case (:status exec-result)
          :completed
          (finalize-completed store executor workflow-id
                              (:pending-asyncs exec-result)
                              (:pending-events exec-result)
                              (:result exec-result)
                              observer)

          :cancelled
          (finalize-cancelled store workflow-id (:pending-events exec-result) observer)

          :suspended
          (blet [{:keys [op wake-version value]}
                 (suspension-outcome! engine workflow-id exec-result
                                      expected-wake-version observer)]
            (if (= :continue op)
              #_{:clj-kondo/ignore [:invalid-arity]}
              (prom/recur (inc iteration) wake-version)
              value))

          :failed
          (finalize-failed store workflow-id
                           (:pending-events exec-result)
                           (:error exec-result)
                           observer))))))
