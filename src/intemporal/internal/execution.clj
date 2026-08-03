(ns intemporal.internal.execution
  (:require [intemporal.internal.activity :as a]
            [intemporal.internal.context :as ctx]
            [intemporal.internal.error :as error]
            [intemporal.internal.logging :as log]
            [intemporal.tracing :as tracing]
            [intemporal.utils :as utils]
            [intemporal.protocol :as p]
            [steffan-westcott.clj-otel.context :as octx])
  (:import (java.util.concurrent RejectedExecutionException)))

;; ============================================================================
;; Workflow Execution Engine
;; ============================================================================

(defmacro ^:private -notify
  "Utility macro to dispatch events to an observer"
  [proto-fn observer & args]
  `(when ~observer
     (~proto-fn ~observer ~@args)))

(defn execute-workflow-fn [workflow-fn args]
  (try
    {:status :completed
     :result (apply workflow-fn args)
     :pending-asyncs @(:pending-asyncs (ctx/current-context))
     :pending-events @(:pending-events (ctx/current-context))}
    (catch Throwable e
      (cond
        (error/suspension? e)
        {:status :suspended
         :suspension-type (error/suspension-type e)
         :suspension-data (error/suspension-data e)
         :pending-asyncs @(:pending-asyncs (ctx/current-context))
         :pending-events @(:pending-events (ctx/current-context))}

        (error/cancelled-exception? e)
        {:status :cancelled
         :pending-events @(:pending-events (ctx/current-context))}

        :else
        ;; Real failure. Any saga rollback happens inside the workflow body (the
        ;; user's catch calls intemporal/compensate); a compensating activity that
        ;; suspends throws out of compensate and arrives here as a suspension,
        ;; caught above, so the loop schedules + resumes it.
        {:status :failed
         :error e
         :pending-events @(:pending-events (ctx/current-context))}))))

(defn- attempt-once
  "Execute an activity exactly once.
   Returns {:status :success ...}, {:status :rejected ...}, or {:status :retryable-error ...}.
   Rejection is never retried; retryable-error is subject to the caller's policy."
  [executor activity-name args timeout-ms observer workflow-id seq-num attempt]
  (let [start (utils/current-time-ms)]
    (-notify p/on-activity-started observer workflow-id seq-num activity-name)
    (log/infof "Executing activity via executor %s (attempt %d)" executor attempt)
    (try
      (let [result   (p/execute-activity executor activity-name args timeout-ms)
            duration (- (utils/current-time-ms) start)]
        (-notify p/on-activity-completed observer workflow-id seq-num activity-name result duration)
        (log/infof "Activity succeeded (attempt %d), result: %s" attempt result)
        {:status :success :result result :duration duration :attempts attempt})
      (catch RejectedExecutionException e
        (let [duration  (- (utils/current-time-ms) start)
              error     (error/activity-rejected-exception activity-name e)
              error-map (error/throwable->map error)]
          (-notify p/on-activity-failed observer workflow-id seq-num activity-name error-map duration)
          (log/warnf e "Activity execution rejected")
          {:status :rejected :error error-map :duration duration}))
      (catch Exception e
        (let [duration  (- (utils/current-time-ms) start)
              error-map (error/throwable->map e)]
          (-notify p/on-activity-failed observer workflow-id seq-num activity-name error-map duration)
          (log/warnf e "Activity failed (attempt %d)" attempt)
          {:status :retryable-error :error error-map :exception e :duration duration})))))

(defn execute-with-retry
  "Execute an activity, retrying according to retry-policy (nil = no retry)."
  [executor activity-name args timeout-ms retry-policy observer workflow-id seq-num]
  (loop [attempt 1]
    (let [result (attempt-once executor activity-name args timeout-ms observer workflow-id seq-num attempt)]
      (case (:status result)
        :success        result
        :rejected       (assoc result :status :failed)
        :retryable-error
        (if (and retry-policy (a/should-retry? retry-policy (:exception result) attempt))
          (let [backoff (a/calculate-backoff retry-policy attempt)]
            (log/debugf "Activity sleeping %dms before retrying (attempt %d)" backoff attempt)
            (Thread/sleep backoff)
            (recur (inc attempt)))
          (-> result (assoc :status :failed) (dissoc :exception)))))))

(defn process-pending-activity [store executor workflow-id
                                {:keys [seq activity-name args timeout-ms retry-policy] :as suspension-data}
                                pending-events observer]
  (log/with-mdc {:activity activity-name :seqnum seq}
    (let [exec-result (execute-with-retry executor activity-name args timeout-ms
                                          retry-policy observer workflow-id seq)]
      ;; Save all pending events first
      (p/save-events store workflow-id pending-events)
      ;; Then save the completion or failure
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
        :continue))))

(defn process-pending-asyncs-parallel
  "Process all pending async operations in parallel"
  [store executor workflow-id pending-asyncs pending-events observer]
  (when (seq pending-asyncs)
    ;; Save all pending events first
    (p/save-events store workflow-id pending-events)

    ;; Execute all activities in parallel
    ;; Pass complete async-info including retry-policy, activity-seq, handle-seq
    (log/infof "Executing %d activities in parallel via executor %s" (count pending-asyncs) executor)
    (let [results (p/execute-activities-parallel executor pending-asyncs)
          now (utils/current-time-ms)

          ;; Create completion events for both activities and async handles
          completion-events (mapcat (fn [{:keys [activity-name activity-seq] :as async-info} result]
                                      (log/with-mdc {:activity activity-name :seqnum activity-seq}
                                        (if (= :success (:status result))
                                          (do
                                            (-notify p/on-async-completed observer workflow-id (:handle-seq async-info) (:result result))
                                            (log/tracef "Got completion event: activity succeeded, result: %s" result))
                                          (do
                                            (-notify p/on-async-failed observer workflow-id (:handle-seq async-info) (:error result))
                                            (log/tracef "Got completion event: activity failed, error: %s" (:error result))))
                                        (if (= :success (:status result))
                                          [{:event-type    :activity-completed
                                            :seq           (:activity-seq async-info)
                                            :activity-name (:activity-name async-info)
                                            :result        (:result result)
                                            :duration-ms   (:duration result)
                                            :timestamp     now}
                                           {:event-type :async-completed
                                            :seq        (:handle-seq async-info)
                                            :last-seq   (:activity-seq async-info)
                                            :result     (:result result)
                                            :timestamp  now}]
                                          ;; else
                                          [{:event-type    :activity-failed
                                            :seq           (:activity-seq async-info)
                                            :activity-name (:activity-name async-info)
                                            :error         (:error result)
                                            :timestamp     now}
                                           {:event-type :async-failed
                                            :seq        (:handle-seq async-info)
                                            :last-seq   (:activity-seq async-info)
                                            :error      (:error result)
                                            :timestamp  now}])))
                                    pending-asyncs results)]
      (p/save-events store workflow-id completion-events)))
  :continue)

(defn process-timer [store scheduler workflow-id suspension-data pending-events
                      wake-fn observer]
  (let [{:keys [seq fire-at]} suspension-data
        now (utils/current-time-ms)
        ;; Idempotent fire: both the in-process scheduler callback and a
        ;; worker-scan resume at/after fire-at can reach this point for the same
        ;; [wf, seq]; only record :timer-fired once.
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
        ;; Exactly-one-writer guard for THIS suspension pass: the timer callback
        ;; and the signal callback can both be in flight around the deadline
        ;; (cancel-timer cannot stop an already-running timer task), and each
        ;; would write a :signal-wait-completed at the same seq with a different
        ;; :received — replayed differently per store. The CAS picks one writer;
        ;; the find-event check additionally covers a callback left armed by a
        ;; PREVIOUS resume pass (which closes over its own claimed atom).
        claimed (atom false)
        save-completed (fn [signal-data?]
                         (if (p/find-event store workflow-id :signal-wait-completed seq)
                           ;; Wait already recorded (by the other callback / an
                           ;; earlier pass). If we consumed a signal anyway, put
                           ;; it back so it isn't silently lost.
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
    ;; (ctx/current-store) would throw "Not in workflow context" here.
    (let [completed (p/find-event store workflow-id :async-completed handle-seq)
          failed    (p/find-event store workflow-id :async-failed handle-seq)]
      (if (or completed failed)
        :continue
        :wait-async))))

;; ============================================================================
;; Helper Functions for Workflow Execution
;; ============================================================================

(defn make-workflow-context
  "Create workflow execution context from history."
  [workflow-id history store registry observer]
  {:history (atom history)
   :workflow-id workflow-id
   :seq-counter (atom 0)
   :pending-events (atom [])
   :pending-asyncs (atom [])
   :compensating? (atom false)
   :store store
   :registry registry
   :observer observer})

;; ============================================================================
;; Tier 2: independent child workflows — parent/child lifecycle linkage
;; ============================================================================

(declare finalize-failed)

(def ^:private terminal-status? #{:completed :failed :cancelled :terminated})

(defn- next-terminal-seq
  "Deterministic :seq for a terminal control event (:workflow-completed/-failed/
   -cancelled/-terminated): one past the highest seq recorded for `workflow-id`.
   A8: every event now carries a real seq — this keeps terminal events sorting
   after every real op (FDB) and re-finalization idempotent under the
   (workflow_id, seq, event_type) upsert key (JDBC), instead of relying on a
   NULL/wall-clock seq. :workflow-started always seeds -1 (core.cljc), so an
   empty-bodied workflow still gets a distinct terminal seq (0). Uses
   `p/max-seq` rather than a full `load-history` — each store serves it from an
   index instead of loading/deserializing the whole history."
  [store workflow-id]
  (inc (or (p/max-seq store workflow-id) -1)))

(defn- parent-link
  "If `workflow-id` is an independent child, return {:parent-id :parent-seq} read
   from its seeded :workflow-started event; nil for a top-level workflow."
  [store workflow-id]
  (let [started (->> (p/load-history store workflow-id)
                     (filter #(= :workflow-started (:event-type %)))
                     first)]
    (when (:parent-id started)
      {:parent-id  (:parent-id started)
       :parent-seq (:parent-seq started)})))

(defn- notify-parent-terminal
  "When `workflow-id` is a child, record its terminal outcome in the PARENT's
   history (a :child-workflow-completed/-failed event plus an :async-completed/
   -failed alias so the existing `join` resolves it) and wake the parent so the
   ownership scan re-resumes it. Idempotent — guarded by the parent's events."
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
      ;; Eligible now + force re-entry of the parent's loop.
      (p/set-wake-at store parent-id nil)
      (p/wake-workflow store parent-id))))

(defn- has-children?
  "Cheap guard (uses only the always-present load-history) so the Tier 2
   close-policy path — and the list-children store method it needs — is touched
   ONLY for workflows that actually scheduled an independent child. Keeps every
   non-Tier-2 workflow, on every store, on the original code path."
  [store workflow-id]
  (boolean (some #(= :child-workflow-scheduled (:event-type %))
                 (p/load-history store workflow-id))))

(defn enforce-close-policies!
  "Apply each child's :parent-close-policy when `workflow-id` closes (Temporal's
   ParentClosePolicy — acts on CHILDREN only, never changes this workflow's outcome):
     :cascade-cancel — request cancellation (set the cancel flag + wake; a driven
                       child observes it and can compensate, ending :cancelled);
     :terminate      — forcefully stop now: write a terminal :workflow-terminated
                       event (no replay/cleanup), child ends :terminated;
     :abandon        — leave the child running.
   Recurses into each closed child's own children: under the worker/ownership-scan
   model a closed workflow is excluded from list-pending and never re-runs its
   finalizer, so the whole subtree must be enforced here, at close time. Idempotent."
  [store workflow-id]
  (when (has-children? store workflow-id)
    (doseq [{:keys [child-id status policy]} (p/list-children store workflow-id)]
      (when-not (terminal-status? status)
        (case policy
          ;; The child's status flips to :cancelled/:terminated here (flag/event)
          ;; and it may never be driven through its own finalizer, so end its
          ;; live span now (idempotent if a driven finalizer also ends it).
          :cascade-cancel (do (p/mark-cancelled store child-id)
                              (p/wake-workflow store child-id)
                              (tracing/finish-workflow-span! child-id {:message "cancelled (parent closed)"})
                              (enforce-close-policies! store child-id))
          :terminate      (do (p/save-event store child-id
                                            {:event-type  :workflow-terminated
                                             :seq         (next-terminal-seq store child-id)
                                             :workflow-id child-id
                                             :timestamp   (utils/current-time-ms)})
                              (p/wake-workflow store child-id)
                              (tracing/finish-workflow-span! child-id {:message "terminated (parent closed)"})
                              (enforce-close-policies! store child-id))
          ;; :abandon (or anything unknown) — leave the child running
          nil)))))

(defn finalize-completed
  "Save completion events and return result."
  [store executor workflow-id pending-asyncs pending-events result observer]
  ;; Process any remaining pending asyncs before completing
  (when (seq pending-asyncs)
    (process-pending-asyncs-parallel store executor workflow-id
                                     pending-asyncs
                                     pending-events
                                     observer))
  (when (and (empty? pending-asyncs)
             (seq pending-events))
    (p/save-events store workflow-id pending-events))
  (p/save-event store workflow-id {:event-type :workflow-completed
                                   :seq        (next-terminal-seq store workflow-id)
                                   :result     result
                                   :timestamp  (utils/current-time-ms)})
  (-notify p/on-workflow-completed observer workflow-id result)
  ;; Tier 2: apply parent-close-policy to still-running children, then (if this
  ;; workflow is itself a child) record the result in the parent and wake it.
  (enforce-close-policies! store workflow-id)
  (notify-parent-terminal store workflow-id true result)
  (tracing/finish-workflow-span! workflow-id nil)
  {:status :completed
   :workflow-id workflow-id
   :result result})

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
    ;; Tier 2: cascade to children, and surface this cancellation to the parent
    ;; as a child failure (Temporal treats child cancellation as a parent failure).
    (enforce-close-policies! store workflow-id)
    (notify-parent-terminal store workflow-id false error-map)
    (tracing/finish-workflow-span! workflow-id error-map)
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
    (tracing/finish-workflow-span! workflow-id error-map)
    {:status :failed
     :workflow-id workflow-id
     :error error-map}))

(defn- interrupt-error?
  "True when `e` is (or wraps, anywhere in its cause chain) an interruption, or
   the current thread has been interrupted. Such errors are INFRASTRUCTURE
   conditions (worker stop / engine shutdown interrupting an in-flight drive) —
   the workflow must be left suspended for a later resume, never durably
   finalized as :failed because of them."
  [e]
  (or (.isInterrupted (Thread/currentThread))
      (loop [t e]
        (cond
          (nil? t) false
          (instance? InterruptedException t) true
          :else (recur (.getCause ^Throwable t))))))

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
    :wait-async {:status :waiting-async
                 :workflow-id workflow-id}
    ;; :continue should not reach here
    nil))

(declare process-child-workflow)

(defn handle-suspension
  "Dispatch suspension to appropriate handler based on type.
   Returns action keyword: :continue or :wait-*"
  [engine workflow-id suspension-type suspension-data pending-asyncs pending-events wake-fn observer]
  (let [{:keys [store executor scheduler]} engine
        pending-asyncs-list pending-asyncs
        pending-events-list pending-events]
    (-notify p/on-workflow-suspended observer workflow-id suspension-type)

    ;; Flush the pending async batch BEFORE any suspension dispatch: the batch
    ;; must run regardless of what the workflow suspended on (a timer/signal/child
    ;; suspension used to drop it, orphaning the async's activity forever).
    ;; Returns :continue so the loop re-runs the pass and the original suspension
    ;; re-arises with an empty batch.
    (if (seq pending-asyncs-list)
      (do
        (process-pending-asyncs-parallel store executor workflow-id
                                         pending-asyncs-list
                                         pending-events-list
                                         observer)
        :continue)
      (case suspension-type
        :activity
        (process-pending-activity store executor workflow-id
                                  suspension-data
                                  pending-events-list
                                  observer)

        :timer
        (process-timer store scheduler workflow-id
                       suspension-data
                       pending-events-list
                       wake-fn
                       observer)

        :wait-signal
        (process-signal store workflow-id
                        suspension-data
                        pending-events-list
                        wake-fn
                        observer)

        :wait-signal-timeout
        (process-signal-with-timeout store scheduler workflow-id
                                     suspension-data
                                     pending-events-list
                                     wake-fn
                                     observer)

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
        ;; through the replay budget.
        (do
          (when (seq pending-events-list)
            (p/save-events store workflow-id pending-events-list))
          (let [{:keys [handle-seqs]} suspension-data]
            (if (or (some #(p/find-event store workflow-id :async-completed %) handle-seqs)
                    (every? #(p/find-event store workflow-id :async-failed %) handle-seqs))
              :continue
              :wait-async)))

        :child-workflow
        (process-child-workflow engine
                                workflow-id
                                suspension-data
                                pending-events-list
                                observer)))))


(defn run-once
  "Internal: Execute a side-effect thunk only once (not on replay).
   Uses a special event marker to track execution.

   This is an internal implementation detail and should not be exposed to users.
   Users should wrap side effects in activities for proper determinism.

   This can be used to eg run logging statements, etc"
  [thunk]
  (ctx/check-cancelled!)
  (let [seq-num (ctx/next-seq!)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing (p/find-event store workflow-id :run-once-completed seq-num)]
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

   Returns a map with :status and :workflow-id, plus :result (on success) or :error (on failure)."
  [{:keys [store executor scheduler registry] :as engine} workflow-id workflow-fn args
   {:keys [observer max-iterations wake-fn]
    :or {max-iterations 1000}}]
  (loop [iteration 0]
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
                ctx         (make-workflow-context workflow-id history store registry observer)
                exec-result (binding [ctx/*workflow-context* ctx]
                              (log/debugf "Executing workflow function %s..." workflow-fn)
                              (execute-workflow-fn workflow-fn args))]

              (log/debugf "Workflow function executed, got: %s" (:status exec-result))
              (case (:status exec-result)
                :completed
                (finalize-completed store executor workflow-id
                                    (:pending-asyncs exec-result)
                                    (:pending-events exec-result)
                                    (:result exec-result)
                                    observer)

                :cancelled
                ;; Cancellation surfaced from the body (a stub's check-cancelled!).
                ;; Any saga rollback already ran inside the user's catch before the
                ;; cancel exception was rethrown, so just finalize.
                (finalize-cancelled store workflow-id
                                    (:pending-events exec-result)
                                    observer)

                :suspended
                (do
                  ;; Arm the generic wake callback BEFORE the suspension handler
                  ;; runs its eligibility checks: a completion/wake landing between
                  ;; a handler's check and a post-hoc registration would be dropped
                  ;; (X5, the async/child-join lost-wake window — same TOCTOU class
                  ;; as bug 2.1 for signals). Anything that completed before this
                  ;; registration is observed by the handler's own checks; anything
                  ;; completing after fires this callback. An external actor (e.g.
                  ;; cancel-workflow) can thus always force this workflow to
                  ;; re-enter its loop. Re-registration each pass simply overwrites.
                  (when wake-fn
                    (p/register-wake-callback store workflow-id wake-fn))
                  (let [action (handle-suspension engine
                                                  workflow-id
                                                  (:suspension-type exec-result)
                                                  (:suspension-data exec-result)
                                                  (:pending-asyncs exec-result)
                                                  (:pending-events exec-result)
                                                  wake-fn
                                                  observer)]
                    (when (and observer (= action :continue))
                      (p/on-workflow-resumed observer workflow-id))

                    (if (= action :continue)
                      (recur (inc iteration))
                      (do
                        ;; C2: record when this workflow next needs attention so the
                        ;; ownership scan can skip it until due. Timer waits carry a
                        ;; clock deadline; signal/async waits are always eligible (nil).
                        (let [sd (:suspension-data exec-result)
                              wake-at (case action
                                        :wait-timer          (:fire-at sd)
                                        :wait-signal-timeout (:deadline sd)
                                        nil)]
                          (p/set-wake-at store workflow-id wake-at))
                        (action->result action workflow-id)))))

                :failed
                ;; Interrupt-driven "failures" (worker stop / engine shutdown
                ;; interrupting a store read inside the body) are infrastructure
                ;; conditions, not workflow outcomes: leave the workflow
                ;; suspended for a later resume instead of durably failing it.
                (if (interrupt-error? (:error exec-result))
                  (do
                    (log/infof "Workflow drive interrupted; suspending without finalizing")
                    {:status :suspended
                     :workflow-id workflow-id})
                  (finalize-failed store workflow-id
                                   (:pending-events exec-result)
                                   (:error exec-result)
                                   observer)))))))))

(defn process-child-workflow [{:keys [store executor scheduler registry] :as engine} workflow-id
                               suspension-data pending-events observer]
  (let [{:keys [seq child-workflow-id workflow-fn args]} suspension-data
        ;; Child span nested under the parent's current span (the child runs
        ;; inline on this thread, so (octx/current) is the parent root span).
        ;; Registered + ended at each exit below with the child's terminal status.
        child-ctx (when (:enable-telemetry engine)
                    (tracing/ensure-workflow-span! child-workflow-id
                                                   (str "child " child-workflow-id)
                                                   (octx/current)))]
    (p/save-events store workflow-id pending-events)
    ;; Execute child workflow synchronously for now
    ;; In a real implementation, this could be async
    (try
      (let [result (octx/with-context! (or child-ctx (octx/current))
                     (run-workflow-internal engine
                                            child-workflow-id workflow-fn args
                                            {:observer observer
                                             :max-iterations 1000}))]
        (if (= :completed (:status result))
          (do
            (p/save-event store workflow-id {:event-type        :child-workflow-completed
                                             :seq               seq
                                             :child-workflow-id child-workflow-id
                                             :result            (:result result)
                                             :timestamp         (utils/current-time-ms)})
            (log/infof "Child workflow with id %s completed" child-workflow-id)
            (tracing/finish-workflow-span! child-workflow-id nil)
            :continue)
          ;; ELSE
          (let [child-error (or (:error result)
                                {:status (:status result)
                                 :message (str "Child workflow ended with status: " (:status result))})]
            ;; A sync child that SUSPENDED (waiting on a signal/timer/async) is
            ;; unsupported — it is recorded as failed in the parent. Also write a
            ;; terminal event to the CHILD's own history: without it the child
            ;; lingers as a non-terminal row with no :workflow-started event,
            ;; which the ownership scan lists (and fails to resume) forever.
            (when (#{:waiting-signal :waiting-signal-timeout :waiting-timer :waiting-async}
                   (:status result))
              (p/save-event store child-workflow-id
                            {:event-type  :workflow-failed
                             :seq         (next-terminal-seq store child-workflow-id)
                             :workflow-id child-workflow-id
                             :error       {:type    "clojure.lang.ExceptionInfo"
                                           :message (str "Synchronous child workflows cannot suspend (" (:status result) "); use run-child-workflow-async")
                                           :data    {:child-workflow-id child-workflow-id
                                                     :status            (:status result)}}
                             :timestamp   (utils/current-time-ms)}))
            (p/save-event store workflow-id {:event-type        :child-workflow-failed
                                             :seq               seq
                                             :child-workflow-id child-workflow-id
                                             :error             child-error
                                             :timestamp         (utils/current-time-ms)})
            (log/infof "Child workflow with id %s failed, status: %s, error: %s" child-workflow-id (:status result) (:error result))
            (tracing/finish-workflow-span! child-workflow-id child-error)
            :continue)))
      (catch Exception e
        (p/save-event store workflow-id {:event-type        :child-workflow-failed
                                         :seq               seq
                                         :child-workflow-id child-workflow-id
                                         :error             (error/throwable->map e)
                                         :timestamp         (utils/current-time-ms)})
        (log/warnf e "Error while executing child workflow with id %s" child-workflow-id)
        (tracing/finish-workflow-span! child-workflow-id e)
        :continue))))