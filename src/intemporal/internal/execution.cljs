(ns intemporal.internal.execution
  (:require [intemporal.internal.activity :as a]
            [intemporal.internal.context :as ctx]
            [intemporal.internal.error :as error]
            [intemporal.internal.logging :as log]
            [intemporal.utils :as utils]
            [intemporal.protocol :as p]
            [promesa.core :as prom])
  (:require-macros [intemporal.internal.logging :as log]
                   [intemporal.internal.execution :refer [-notify]]
                   [intemporal.internal.context :refer [blet bthen]]))

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

(defn park-until-retry!
  "Park the workflow until a recorded retry comes due, instead of waiting the
   backoff out inside the handler. Returns the `{:action :wake-at}` shape so the
   drive loop persists the deadline: `wake-at` is what lets a worker on ANY pod
   pick the workflow up when it is due, and skip it until then.

   The timer is only for the in-process driver, which parks on a deferred and has
   no poll to fall back on — a drive with no `wake-fn` (a worker resume) relies
   entirely on `wake-at`, so arming there would just leak a dead timer for the
   length of every backoff.

   Deliberately NOT `process-timer`: that writes a :timer-fired event, and this
   seq belongs to the activity, not to a timer. The callback only wakes."
  [scheduler workflow-id seq retry-at wake-fn observer]
  (log/infof "Activity retry at seq %s due in %sms; suspending"
             seq (max 0 (- retry-at (utils/current-time-ms))))
  (when wake-fn
    (-notify p/on-timer-scheduled observer workflow-id seq retry-at)
    (p/schedule-timer scheduler workflow-id seq retry-at (fn [] (wake-fn))))
  {:action :wait-retry :wake-at retry-at})

(defn process-pending-activity
  "Run (at most) one attempt of the suspended activity and record its outcome.
   Returns a promise.

   Whether an attempt may run at all is decided HERE rather than in the workflow
   body: `stub` always schedules, and the engine owns the retry clock. That keeps
   the body's suspension shape stable for `async`, which re-derives an incomplete
   async from it, and it means any re-drive — a worker poll, an unrelated signal,
   a cancel — re-parks instead of running the attempt early."
  [store scheduler executor workflow-id
   {:keys [seq activity-name args timeout-ms retry-policy attempt-state]
    :as suspension-data}
   pending-events wake-fn observer inline-retry-backoff?]
  (log/with-mdc {:activity activity-name :seqnum seq}
    ;; Save pending events on EVERY path, including the parking ones: `stub` will
    ;; re-emit :activity-scheduled next pass, but the async re-enqueue reads it
    ;; back out of history, so it must be durable before we park.
    (p/save-events store workflow-id pending-events)
    (letfn [(step [state]
              (if (a/retry-pending? state)
                (if inline-retry-backoff?
                  ;; This drive cannot be woken (an inline sync-child drive has no
                  ;; wake-fn and no ownership row), so parking would strand it.
                  ;; Waits to the PERSISTED deadline, never a freshly computed
                  ;; backoff, so a resumed child serves out the remainder rather
                  ;; than starting over.
                  (-> (prom/delay (max 0 (- (:retry-at state) (utils/current-time-ms))))
                      (bthen (fn [_] (step (dissoc state :retry-at)))))
                  (prom/resolved
                    (park-until-retry! scheduler workflow-id seq (:retry-at state) wake-fn observer)))
                (blet [exec-result (if (a/retry-budget-spent? state)
                                     ;; A previous drive spent the last attempt the
                                     ;; policy allowed and crashed before recording
                                     ;; the outcome. Running the activity again here
                                     ;; would exceed :max-attempts, so finalize from
                                     ;; the recorded error.
                                     (do
                                       (log/infof "Retry budget already spent after %d attempt(s); failing from recorded attempt"
                                                  (:attempts state))
                                       {:status   :failed
                                        :error    (:error state)
                                        :attempts (:attempts state)})
                                     (run-attempt executor activity-name args timeout-ms
                                                  retry-policy observer workflow-id seq
                                                  state
                                                  (partial record-attempt! store workflow-id seq activity-name)))]
                  (if (= :retry-scheduled (:status exec-result))
                    ;; A scheduled retry is not an outcome: writing :activity-failed
                    ;; here would make `stub` replay it as a durable failure on the
                    ;; next pass. The recorded attempt carries everything the retry
                    ;; needs, so park on it directly rather than burning a replay
                    ;; pass to rediscover it.
                    (step {:attempts   (:attempts exec-result)
                           :will-retry true
                           :retry-at   (:retry-at exec-result)})
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
                      :continue)))))]
      (step attempt-state))))

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

(defn arm-async-retry-timers!
  "Wake this workflow when each backing-off async comes due. Without this the
   in-process driver would park on `:wait-async` forever: `process-join-pending`
   arms nothing, and a retry deadline has no other waker. Timers are keyed
   [wf, activity-seq] and `schedule-timer` is idempotent, so re-arming on every
   pass is free. Only for drives that HAVE a `wake-fn` — a worker resume has none
   and is woken by `wake-at` instead."
  [scheduler workflow-id pending-asyncs wake-fn]
  (when wake-fn
    (doseq [{:keys [activity-seq attempt-state]} pending-asyncs
            :when (a/retry-pending? attempt-state)]
      (p/schedule-timer scheduler workflow-id activity-seq (:retry-at attempt-state)
                        (fn [] (wake-fn))))))

(defn earliest-async-retry
  "The soonest instant any backing-off async becomes due, or nil if none is."
  [pending-asyncs]
  (->> pending-asyncs
       (keep #(when (a/retry-pending? (:attempt-state %))
                (:retry-at (:attempt-state %))))
       (reduce (fn [a b] (if a (min a b) b)) nil)))

(defn- with-async-retry-deadline
  "Give a bare `:wait-async` action the deadline of the soonest backing-off async.

   `:wait-async` normally means \"eligible whenever\" (wake-at nil), which is right
   for a handle waiting on a running activity but wrong for one waiting on a
   clock: a worker would re-drive — and fully replay — the workflow on every poll
   for the whole backoff, crowding out other work in the same `list-pending`
   window. Anything that already carries its own deadline is passed through."
  [pending-asyncs action]
  (if (= :wait-async action)
    (if-let [due (earliest-async-retry pending-asyncs)]
      {:action :wait-async :wake-at due}
      action)
    action))

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
     (prom/resolved :continue)
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
             (prom/resolved :continue))
           (do
             ;; One attempt each: whether to retry is decided here, from the
             ;; durable attempt record, never inside the executor.
             (log/infof "Executing %d activities in parallel via executor %s" (count runnable) executor)
             (blet [results (p/execute-activities-parallel executor runnable)]
               (let [events (mapcat #(async-completion-events %1 %2 now workflow-id observer drain?)
                                    runnable results)]
                 (p/save-events store workflow-id (concat spent-events events))
                 :continue)))))))))

(defn process-timer [store scheduler workflow-id suspension-data pending-events
                      wake-fn observer]
  (let [{:keys [seq fire-at]} suspension-data
        now (utils/current-time-ms)
        ;; Idempotent fire: both the scheduler callback and a worker-scan resume
        ;; at/after fire-at can reach this point for the same [wf, seq]; only
        ;; record :timer-fired once. (Mirrors execution.clj.)
        fire! (fn []
                (when-not (p/find-event store workflow-id :timer-fired seq)
                  (p/save-event store workflow-id {:event-type :timer-fired
                                                   :seq        seq
                                                   :timestamp  (utils/current-time-ms)})
                  (-notify p/on-timer-fired observer workflow-id seq)))]
    ;; Save pending events
    (p/save-events store workflow-id pending-events)
    (if (>= now fire-at)
      (do
        (fire!)
        :continue)
      ;; ELSE Schedule timer and return wait status
      (do
        (p/schedule-timer scheduler workflow-id seq fire-at
                          (fn []
                            (fire!)
                            (when wake-fn (wake-fn))))
        :wait-timer))))

(defn process-signal [store workflow-id suspension-data pending-events wake-fn observer]
  (let [{:keys [seq signal-name]} suspension-data
        save-received (fn [signal-data]
                        (p/save-event store workflow-id {:event-type  :signal-received
                                                         :seq         seq
                                                         :signal-name signal-name
                                                         :signal-id   (:id signal-data)
                                                         :payload     (:payload signal-data)
                                                         :timestamp   (utils/current-time-ms)})
                        (-notify p/on-signal-received observer workflow-id signal-name (:payload signal-data)))]
    ;; Save pending events
    (p/save-events store workflow-id pending-events)
    ;; Register the wake callback FIRST, then check for an already-available
    ;; signal (fixes bug 2.1: a signal arriving between the consume-check and
    ;; the registration could previously be lost). consume-signal is atomic in
    ;; every store, so exactly one of {the inline check below, the callback}
    ;; consumes the signal — the other observes nil and no-ops. The callback
    ;; only wakes if it was the one that consumed, so the inline :continue path
    ;; never double-executes the workflow.
    (p/register-signal-callback store workflow-id signal-name
                               (fn []
                                 (when-let [signal-data (p/consume-signal store workflow-id signal-name)]
                                   (save-received signal-data)
                                   (p/unregister-signal-callback store workflow-id signal-name)
                                   (when wake-fn (wake-fn)))))
    (if-let [signal-data (p/consume-signal store workflow-id signal-name)]
      ;; We won the race inline: handle the signal and continue synchronously.
      (do
        (p/unregister-signal-callback store workflow-id signal-name)
        (save-received signal-data)
        :continue)
      ;; No signal yet: stay suspended; the armed callback will wake us.
      :wait-signal)))

(defn process-signal-with-timeout [store scheduler workflow-id suspension-data
                                    pending-events wake-fn observer]
  (let [{:keys [seq signal-name deadline]} suspension-data
        now (utils/current-time-ms)
        ;; Exactly-one-writer guard for THIS suspension pass (mirrors the clj
        ;; engine): timer and signal callbacks interleave via the event loop and
        ;; each would write a conflicting :signal-wait-completed at the same seq.
        ;; The find-event check additionally covers a callback left armed by a
        ;; previous resume pass (which closes over its own claimed atom).
        claimed (atom false)
        save-completed (fn [signal-data?]
                         (if (p/find-event store workflow-id :signal-wait-completed seq)
                           ;; Wait already recorded. If we consumed a signal
                           ;; anyway, requeue it so it isn't silently lost.
                           (when signal-data?
                             (p/add-signal store workflow-id signal-name signal-data?))
                           (do
                             (p/save-event store workflow-id
                                           (cond-> {:event-type  :signal-wait-completed
                                                    :seq         seq
                                                    :received    (some? signal-data?)
                                                    :signal-name signal-name
                                                    :timestamp   (utils/current-time-ms)}
                                                   (some? signal-data?) (assoc :payload (:payload signal-data?))))
                             (when signal-data?
                               (-notify p/on-signal-received observer workflow-id signal-name (:payload signal-data?))))))]
    (p/save-events store workflow-id pending-events)
    ;; Check if signal already available
    (if-let [signal-data (p/consume-signal store workflow-id signal-name)]
      (do
        (save-completed signal-data)
        :continue)
      ;; ELSE Check if already timed out
      (if (>= now deadline)
        (do
          (save-completed nil)
          :continue)
        ;; Register signal callback FIRST (mirrors the process-signal fix for bug 2.1):
        ;; a signal arriving between the consume-check above and the timer firing would
        ;; otherwise be silently lost. With the callback armed, exactly one of {the
        ;; timer callback, the signal callback} wins the atomic consume-signal race.
        (do
          (p/register-signal-callback store workflow-id signal-name
                                      (fn []
                                        (when-let [signal-data (p/consume-signal store workflow-id signal-name)]
                                          (if (compare-and-set! claimed false true)
                                            (do
                                              (p/unregister-signal-callback store workflow-id signal-name)
                                              (p/cancel-timer scheduler workflow-id seq)
                                              (save-completed signal-data)
                                              (when wake-fn (wake-fn)))
                                            ;; Lost the race to the timer: the wait
                                            ;; already completed as a timeout, so
                                            ;; requeue the signal for a later wait.
                                            (p/add-signal store workflow-id signal-name signal-data)))))
          (p/schedule-timer scheduler workflow-id seq deadline
                            (fn []
                              (p/unregister-signal-callback store workflow-id signal-name)
                              (when (compare-and-set! claimed false true)
                                (let [signal-data? (p/consume-signal store workflow-id signal-name)]
                                  (save-completed signal-data?)))
                              (when wake-fn (wake-fn))))
          :wait-signal-timeout)))))

(defn process-join-pending
  "Handle a :join-pending suspension. handle-suspension flushes the pending-asyncs
   batch before dispatching, so this only runs with no batch asyncs left (a join
   whose completion already exists, or an independent child join). Re-enter
   (:continue) when the handle resolved, else wait for it."
  [store workflow-id suspension-data pending-events observer]
  (let [{:keys [handle-seq]} suspension-data]
    (when (seq pending-events)
      (p/save-events store workflow-id pending-events))
    ;; Check if the handle is now complete. Use the passed-in store/workflow-id:
    ;; handle-suspension runs outside the dynamic workflow-context binding, so
    ;; (ctx/current-store) would throw here.
    (let [completed (p/find-event store workflow-id :async-completed handle-seq)
          failed    (p/find-event store workflow-id :async-failed handle-seq)]
      (prom/resolved
        (if (or completed failed)
          :continue
          :wait-async)))))

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
          (p/save-events store parent-id [child-ev async-ev])))
      (p/set-wake-at store parent-id nil)
      (p/wake-workflow store parent-id))))

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
          ;; set-wake-at nil mirrors cancel-workflow: a child parked on a timer
          ;; has wake-at pinned to that timer's fire-at, which would otherwise
          ;; leave it excluded from list-pending (worker resumes carry no
          ;; wake-fn) until the ORIGINAL deadline, not this cancellation.
          :cascade-cancel (do (p/mark-cancelled store child-id)
                              (p/set-wake-at store child-id nil)
                              (p/wake-workflow store child-id)
                              (enforce-close-policies! store child-id))
          :terminate      (do (p/save-event store child-id
                                            {:event-type  :workflow-terminated
                                             :seq         (next-terminal-seq store child-id)
                                             :workflow-id child-id
                                             :timestamp   (utils/current-time-ms)})
                              (p/wake-workflow store child-id)
                              (enforce-close-policies! store child-id))
          nil)))))

(defn finalize-completed
  "Save completion events and return result. Returns a promise."
  [store executor workflow-id pending-asyncs pending-events result observer]
  ;; Drain mode: these asyncs are un-joined (their results are discarded), so a
  ;; retry backoff must not be waited out — and skipping them would abandon the
  ;; work entirely, since this is the last time anything looks at them.
  (blet [_ (if (seq pending-asyncs)
                 (process-pending-asyncs-parallel store executor workflow-id
                                                  pending-asyncs pending-events observer true)
                 (do
                   (when (seq pending-events)
                     (p/save-events store workflow-id pending-events))
                   nil))]
    (p/save-event store workflow-id {:event-type :workflow-completed
                                     :seq        (next-terminal-seq store workflow-id)
                                     :result     result
                                     :timestamp  (utils/current-time-ms)})
    (-notify p/on-workflow-completed observer workflow-id result)
    (enforce-close-policies! store workflow-id)
    (notify-parent-terminal store workflow-id true result)
    {:status :completed
     :workflow-id workflow-id
     :result result}))

(defn finalize-cancelled
  "Save a dedicated cancellation event and return the cancelled result.
   The history event is :workflow-cancelled (a first-class terminal state), so
   history and the derived status agree rather than recording cancellation as a
   failure."
  [store workflow-id pending-events observer]
  (p/save-events store workflow-id pending-events)
  (let [error-map {:type "clojure.lang.ExceptionInfo"
                   :message "Workflow cancelled"
                   :data {:workflow-id workflow-id}}]
    (p/save-event store workflow-id {:event-type :workflow-cancelled
                                     :seq        (next-terminal-seq store workflow-id)
                                     :error error-map
                                     :timestamp  (utils/current-time-ms)})
    (-notify p/on-workflow-cancelled observer workflow-id)
    ;; Tier 2: cascade to children and surface cancellation to the parent.
    (enforce-close-policies! store workflow-id)
    (notify-parent-terminal store workflow-id false error-map)
    {:status :cancelled
     :workflow-id workflow-id
     :error error-map}))

(defn finalize-failed
  "Save failure event and return result."
  [store workflow-id pending-events error observer]
  (p/save-events store workflow-id pending-events)
  (let [error-map (error/throwable->map error)]
    (p/save-event store workflow-id {:event-type :workflow-failed
                                     :seq        (next-terminal-seq store workflow-id)
                                     :error      error-map
                                     :timestamp  (utils/current-time-ms)})
    (-notify p/on-workflow-failed observer workflow-id error-map)
    ;; Tier 2: enforce close policy on children, then propagate failure to parent.
    (enforce-close-policies! store workflow-id)
    (notify-parent-terminal store workflow-id false error-map)
    {:status :failed
     :workflow-id workflow-id
     :error error-map}))

(defn action->result
  "Convert action keyword to workflow result map."
  [action workflow-id]
  (case action
    :wait-signal {:status :waiting-signal
                  :workflow-id workflow-id}
    :wait-signal-timeout {:status :waiting-signal-timeout
                          :workflow-id workflow-id}
    :wait-timer {:status :waiting-timer
                 :workflow-id workflow-id}
    ;; A retry backoff IS a clock wait, so it reports the existing
    ;; :waiting-timer status rather than inventing one: every consumer of the
    ;; waiting statuses (both drivers, the sync-child backstop) already handles
    ;; it correctly, and a new status would have to be added to each by hand.
    :wait-retry {:status :waiting-timer
                 :workflow-id workflow-id}
    :wait-async {:status :waiting-async
                 :workflow-id workflow-id}
    ;; :continue should not reach here
    nil))

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

(defn run-workflow-internal
  "Main workflow execution loop - orchestrates replay and execution.

   Refactored for clarity into three concerns:
   1. Execution: Run workflow function with context (execute-workflow-fn)
   2. Suspension handling: Dispatch to appropriate handlers (handle-suspension)
   3. Finalization: Save events and return results (finalize-* functions)

   Returns a promise of a map with :status and :workflow-id, plus :result (on success) or :error (on failure)."
  [{:keys [store executor scheduler registry] :as engine} workflow-id workflow-fn args
   {:keys [observer max-iterations wake-fn]
    :or {max-iterations 1000}}]
  ;; handle-suspension and process-child-workflow are mutually recursive
  ;; (handle-suspension -> process-child-workflow -> run-workflow-internal ->
  ;; handle-suspension), so they are nested here rather than defined at the top
  ;; level, where no linear ordering could satisfy both call directions.
  (letfn [(process-child-workflow [{:keys [store executor scheduler registry] :as engine} workflow-id
                                    suspension-data pending-events observer]
            (let [{:keys [seq child-workflow-id workflow-fn args]} suspension-data]
              (p/save-events store workflow-id pending-events)
              ;; This drive is inline and has no wake-fn, so a retry that parked would
              ;; strand the child — and the backstop below would durably fail it for
              ;; "cannot suspend". Flag it on the engine (already threaded everywhere, so
              ;; it reaches grandchildren too) to wait instead. (Mirrors execution.clj.)
              (-> (run-workflow-internal (assoc engine :inline-retry-backoff? true)
                                         child-workflow-id workflow-fn args
                                         {:observer observer :max-iterations 1000})
                  (bthen
                    (fn [result]
                      (if (= :completed (:status result))
                        (do
                          (p/save-event store workflow-id {:event-type        :child-workflow-completed
                                                           :seq               seq
                                                           :child-workflow-id child-workflow-id
                                                           :result            (:result result)
                                                           :timestamp         (utils/current-time-ms)})
                          (log/infof "Child workflow with id %s completed" child-workflow-id)
                          :continue)
                        (do
                          ;; A sync child that SUSPENDED is unsupported — recorded as failed
                          ;; in the parent. Also terminalize the CHILD's own history so it
                          ;; doesn't linger as a non-terminal, unresumable row for the
                          ;; ownership scan. (Mirrors execution.clj.)
                          (when (#{:waiting-signal :waiting-signal-timeout :waiting-timer :waiting-async}
                                 (:status result))
                            (p/save-event store child-workflow-id
                                          {:event-type  :workflow-failed
                                           :seq         (next-terminal-seq store child-workflow-id)
                                           :workflow-id child-workflow-id
                                           :error       {:type    "ExceptionInfo"
                                                         :message (str "Synchronous child workflows cannot suspend (" (:status result) "); use run-child-workflow-async")
                                                         :data    {:child-workflow-id child-workflow-id
                                                                   :status            (:status result)}}
                                           :timestamp   (utils/current-time-ms)}))
                          (p/save-event store workflow-id {:event-type        :child-workflow-failed
                                                           :seq               seq
                                                           :child-workflow-id child-workflow-id
                                                           :error             (or (:error result)
                                                                                  {:status (:status result)
                                                                                   :message (str "Child workflow ended with status: " (:status result))})
                                                           :timestamp         (utils/current-time-ms)})
                          (log/infof "Child workflow with id %s failed, status: %s, error: %s" child-workflow-id (:status result) (:error result))
                          :continue))))
                  (prom/catch js/Error
                    (fn [e]
                      (p/save-event store workflow-id {:event-type        :child-workflow-failed
                                                       :seq               seq
                                                       :child-workflow-id child-workflow-id
                                                       :error             (error/throwable->map e)
                                                       :timestamp         (utils/current-time-ms)})
                      (log/warnf e "Error while executing child workflow with id %s" child-workflow-id)
                      :continue)))))

          (handle-suspension
            ;; Dispatch suspension to appropriate handler based on type.
            ;; Returns a promise of `:continue`, a `:wait-*` keyword, or a
            ;; `{:action :wake-at}` map for a wait whose deadline only the handler knows.
            ;;
            ;; The engine's `:inline-retry-backoff?` marks a drive that cannot be woken (an
            ;; inline sync-child drive), for which a retry backoff is waited out rather than
            ;; parked on.
            [engine workflow-id suspension-type suspension-data pending-asyncs pending-events wake-fn observer]
            (let [{:keys [store executor scheduler inline-retry-backoff?]} engine
                  pending-asyncs-list pending-asyncs
                  pending-events-list pending-events]
              (-notify p/on-workflow-suspended observer workflow-id suspension-type)

              ;; Flush the pending async batch BEFORE any suspension dispatch: the batch
              ;; must run regardless of what the workflow suspended on (a timer/signal/child
              ;; suspension used to drop it, orphaning the async's activity forever).
              ;; Returns :continue so the loop re-runs the pass and the original suspension
              ;; re-arises with an empty batch. (Mirrors execution.clj.)
              ;;
              ;; Only the asyncs that are actually DUE count as a batch: one still serving a
              ;; retry backoff must not be run early, and must not make this look like work
              ;; either — returning :continue with nothing to run would spin the pass (and
              ;; the replay budget) until its deadline. With nothing due we fall through to
              ;; the real suspension, so an unrelated activity in the same pass still gets
              ;; to run instead of parking behind the backoff.
              (arm-async-retry-timers! scheduler workflow-id pending-asyncs-list wake-fn)
              (if (seq (due-asyncs pending-asyncs-list))
                (blet [_ (process-pending-asyncs-parallel store executor workflow-id
                                                          pending-asyncs-list
                                                          pending-events-list
                                                          observer)]
                  :continue)
                ;; prom/resolved flattens a thenable, so this handles both the branches
                ;; that return a promise and the ones that return a bare keyword.
                (bthen
                  (prom/resolved
                    (case suspension-type
                      :activity
                      (process-pending-activity store scheduler executor workflow-id
                                                suspension-data
                                                pending-events-list
                                                wake-fn
                                                observer
                                                inline-retry-backoff?)

                      :timer
                      (prom/resolved
                        (process-timer store scheduler workflow-id
                                       suspension-data
                                       pending-events-list
                                       wake-fn
                                       observer))

                      :wait-signal
                      (prom/resolved
                        (process-signal store workflow-id
                                        suspension-data
                                        pending-events-list
                                        wake-fn
                                        observer))

                      :wait-signal-timeout
                      (prom/resolved
                        (process-signal-with-timeout store scheduler workflow-id
                                                     suspension-data
                                                     pending-events-list
                                                     wake-fn
                                                     observer))

                      :join-pending
                      (process-join-pending store workflow-id
                                            suspension-data
                                            pending-events-list
                                            observer)

                      :join-any-pending
                      ;; No batch asyncs to run: the handles are pending independent child
                      ;; workflows. Re-enter (:continue) only when join-any can actually
                      ;; resolve — some handle completed, or all failed — otherwise WAIT for a
                      ;; child's notify-parent-terminal wake instead of hot-spinning the loop
                      ;; through the replay budget. (Mirrors execution.clj.)
                      (do
                        (when (seq pending-events-list)
                          (p/save-events store workflow-id pending-events-list))
                        (let [{:keys [handle-seqs]} suspension-data]
                          (prom/resolved
                            (if (or (some #(p/find-event store workflow-id :async-completed %) handle-seqs)
                                    (every? #(p/find-event store workflow-id :async-failed %) handle-seqs))
                              :continue
                              :wait-async))))

                      :child-workflow
                      (process-child-workflow engine
                                              workflow-id
                                              suspension-data
                                              pending-events-list
                                              observer)))
                  ;; then
                  (fn [action] (with-async-retry-deadline pending-asyncs-list action))))))]
    #_{:clj-kondo/ignore [:loop-without-recur]}
    (prom/loop [iteration 0]
      (if (>= iteration max-iterations)
        ;; Replay budget exhausted (e.g. a non-terminating workflow loop). Persist a
        ;; terminal :workflow-failed event so the workflow becomes resolvable instead
        ;; of staying "running" forever with an un-recorded exception thrown out of
        ;; the loop.
        (do
          (log/warnf "Workflow %s exceeded replay budget of %d iterations" workflow-id max-iterations)
          (finalize-failed store workflow-id []
                           (ex-info "Replay budget exceeded"
                                    {:workflow-id workflow-id :iterations iteration})
                           observer))
        (do
          (log/debugf "Internal loop %d of %d" iteration max-iterations)

          ;; Check if executor is shutting down - stop processing to avoid endless rejections
          (if (p/shutdown? executor)
            (do
              (log/infof "Executor shutting down, suspending workflow")
              {:status :suspended
               :workflow-id workflow-id})

            (let [history     (p/load-history store workflow-id)
                  ctx         (make-workflow-context workflow-id history store registry observer
                                                     :protocols (:protocols engine))
                  exec-result (binding [ctx/*workflow-context* ctx]
                                (log/debugf "Executing workflow function %s..." workflow-fn)
                                (execute-workflow-fn workflow-fn args))
                    dispatch (fn [exec-result]
                               (log/debugf "Workflow function executed, got: %s" (:status exec-result))
                               (case (:status exec-result)
                                 :completed
                                 (finalize-completed store executor workflow-id
                                                     (:pending-asyncs exec-result)
                                                     (:pending-events exec-result)
                                                     (:result exec-result)
                                                     observer)

                                 :cancelled
                                 ;; Cancellation surfaced from the body (a stub's
                                 ;; check-cancelled!). Any saga rollback already ran
                                 ;; inside the user's catch before the cancel exception
                                 ;; was rethrown, so just finalize.
                                 (finalize-cancelled store workflow-id
                                                     (:pending-events exec-result)
                                                     observer)

                                 :suspended
                                 (do
                                   ;; Arm the generic wake callback BEFORE the suspension
                                   ;; handler runs its eligibility checks: a completion/wake
                                   ;; landing between a handler's check and a post-hoc
                                   ;; registration would be dropped (X5, the async/child-join
                                   ;; lost-wake window — same TOCTOU class as bug 2.1 for
                                   ;; signals). Anything that completed before this
                                   ;; registration is observed by the handler's own checks;
                                   ;; anything completing after fires this callback.
                                   ;; Re-registration each pass simply overwrites.
                                   ;; (Mirrors execution.clj.)
                                   (when wake-fn
                                     (p/register-wake-callback store workflow-id wake-fn))
                                   (blet [outcome (handle-suspension engine
                                                                     workflow-id
                                                                     (:suspension-type exec-result)
                                                                     (:suspension-data exec-result)
                                                                     (:pending-asyncs exec-result)
                                                                     (:pending-events exec-result)
                                                                     wake-fn
                                                                     observer)]
                                     ;; A handler returns a bare action keyword, or a
                                     ;; {:action :wake-at} map when the deadline it waited
                                     ;; on is one only the handler knows (a retry backoff is
                                     ;; computed while running the attempt, so it is not in
                                     ;; the suspension the body threw). (Mirrors execution.clj.)
                                     (let [action (if (map? outcome) (:action outcome) outcome)]
                                       (when (and observer (= action :continue))
                                         (p/on-workflow-resumed observer workflow-id))

                                       (if (= action :continue)
                                         (prom/recur (inc iteration))
                                         (do
                                           ;; C2: record when this workflow next needs attention.
                                           (let [sd (:suspension-data exec-result)
                                                 wake-at (if (map? outcome)
                                                           (:wake-at outcome)
                                                           (case action
                                                             :wait-timer          (:fire-at sd)
                                                             :wait-signal-timeout (:deadline sd)
                                                             nil))]
                                             (p/set-wake-at store workflow-id wake-at))
                                           (action->result action workflow-id))))))

                                 :failed
                                 (finalize-failed store workflow-id
                                                  (:pending-events exec-result)
                                                  (:error exec-result)
                                                  observer)))]
                ;; exec-result may be a Promise if workflow-fn returned a Promise (e.g. from p/let)
                (if (prom/promise? exec-result)
                  (bthen exec-result dispatch)
                  (dispatch exec-result))))))))) ; close inner (if shutdown? let), outer (do), budget (if) and letfn
