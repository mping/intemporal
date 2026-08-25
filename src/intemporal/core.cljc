(ns intemporal.core
  #?(:cljs
     (:require-macros
      [intemporal.internal.error :as error]
      [intemporal.internal.logging :as log]
      [net.cgrand.macrovich :as macros]))
  (:require
   [intemporal.internal.activity :as a]
   [intemporal.internal.clock :as clock]
   [intemporal.internal.context :as ctx]
   [intemporal.internal.domain :as domain]
   [intemporal.internal.error :as error]
   [intemporal.internal.execution :as exec]
   [intemporal.internal.logging :as log]
   [intemporal.internal.macros :as im]
   [intemporal.internal.runtime :as runtime]
   [intemporal.internal.workflow-registry :as wreg]
   [intemporal.observer :as obs]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   #?@(:clj
       [[intemporal.tracing :as tracing]
        [net.cgrand.macrovich :as macros]
        [steffan-westcott.clj-otel.context :as octx]]

       :cljs
       [[promesa.core :as prom]])))

;; ============================================================================
;; Core Workflow Operations
;; ============================================================================

;; Public constructor for the retry-policy data consumed by `stub`.  Keeping the
;; implementation in the activity namespace avoids duplicating its backoff and
;; retryability semantics while making the documented workflow API explicit.
(def make-retry-policy a/make-retry-policy)

(defn- schedule-activity!
  "Emit an :activity-scheduled pending event and throw the suspension that hands
   control back to the engine. Called from stub when an activity needs to run
   (first execution or re-execution after interruption/rejection).

   `attempt-state` is the retry budget history records as already spent — nil on
   first execution. The engine resumes from it, so a crash mid-retry cannot grant
   more attempts than the original policy."
  [ctx activity-name seq-num args effective-timeout effective-retry attempt-state]
  (let [scheduled-event {:event-type    :activity-scheduled
                         :seq           seq-num
                         :activity-name activity-name
                         :args          (vec args)
                         :timeout-ms    effective-timeout
                         :retry-policy  (when effective-retry
                                          {:max-attempts (:max-attempts effective-retry)
                                           :backoff-ms   (:backoff-ms effective-retry)})
                         :timestamp     (ctx/current-time-ms)}]
    (ctx/add-pending-event! scheduled-event)
    (ctx/notify-observer obs/on-activity-scheduled
                         (:workflow-id ctx) seq-num activity-name (vec args))
    (log/infof "Scheduling activity suspension")
    (throw (error/make-suspension :activity {:seq           seq-num
                                             :activity-name activity-name
                                             :args          (vec args)
                                             :timeout-ms    effective-timeout
                                             :retry-policy  effective-retry
                                             :attempt-state attempt-state}))))

(defn stub
  "Create a stubbed version of an activity function for use in workflows.
   Options:
   - :timeout-ms    timeout for this activity (overrides registered default)
   - :retry-policy  retry policy for this activity (overrides registered default)"
  [activity-fn & {:keys [timeout-ms retry-policy]}]
  (let [ctx (ctx/current-context)
        registry (:registry ctx)
        activity-name (a/ensure-registered! registry activity-fn)
        activity-info (a/get-activity-info registry activity-name)
        effective-timeout (or timeout-ms (:timeout-ms activity-info))
        effective-retry (or retry-policy (:retry-policy activity-info))]
    (fn [& args]
      (let [seq-num (ctx/next-seq!)]            ;; next-seq! already checks cancellation
        (log/with-mdc {:activity activity-name :seqnum seq-num}
          (let [workflow-id     (:workflow-id ctx)
                existing        (ctx/history-event :activity-completed seq-num)
                existing-failed (ctx/history-event :activity-failed seq-num)
                err             (some-> (:error existing-failed) (error/map->exception))
                interrupted?    (boolean (some-> err (error/interruption?)))
                rejected?       (boolean (some-> err (error/rejection?)))]
            ;; Replay determinism check: the cached event at this seq must belong
            ;; to THIS activity. A mismatch means the workflow code changed (or is
            ;; non-deterministic) since the history was recorded — returning the
            ;; other activity's cached result would be silent corruption.
            (when-let [recorded (:activity-name (or existing existing-failed))]
              (when (not= recorded activity-name)
                (throw (ex-info (str "Replay non-determinism detected: history records activity "
                                     (pr-str recorded) " at seq " seq-num
                                     ", but the workflow now calls " (pr-str activity-name)
                                     ". Workflow code must be deterministic across replays.")
                                {:error/type    ::non-deterministic-replay
                                 :workflow-id   workflow-id
                                 :seq           seq-num
                                 :recorded      recorded
                                 :activity-name activity-name}))))
            (cond
              ;; Replay: return cached result
              existing
              (do
                (log/infof "Found existing result for activity: %s" (pr-str (:result existing)))
                (:result existing))

              ;; Replay: rethrow cached failure (not an interruption or rejection,
              ;; which need to be re-executed rather than replayed as an error)
              (and existing-failed (not interrupted?) (not rejected?))
              (do
                (log/infof "Found existing error for activity")
                (throw err))

              ;; Execute: activity needs to run (first time, or re-run after
              ;; interruption/rejection — both cases schedule the same way)
              :else
              (do
                (when interrupted? (log/infof "Activity was interrupted: rescheduling"))
                (when rejected?    (log/infof "Activity execution was rejected: rescheduling"))
                ;; Recover what earlier drives already spent on this activity, so
                ;; the engine continues the retry sequence instead of restarting
                ;; it. Interruptions and rejections record no attempt, so a
                ;; reschedule for those carries the budget across untouched.
                ;;
                ;; Scheduling here is unconditional even mid-backoff: whether the
                ;; next attempt is DUE is the engine's call, not the body's. The
                ;; body must keep throwing the same `:activity` suspension shape
                ;; on every pass, because `async` re-derives an incomplete async
                ;; from exactly this suspension (core.cljc `existing-started`) —
                ;; a different one there would enqueue an activity with no name.
                (schedule-activity! (ctx/current-context)
                                    activity-name seq-num args
                                    effective-timeout effective-retry
                                    (ctx/attempt-state seq-num))))))))))

;; ============================================================================
;; Async Support
;; ============================================================================

;; Handle returned by `async`. Holds the sequence number of the async operation so
;; `join` / `join-all` / `join-any` can locate its completion event in the history.
;; Treat as an opaque token — only the intemporal engine reads :seq-num directly.
(defrecord AsyncHandle [seq-num])

(defn- runtime-failure?
  "True when a recorded `:async-failed` / `:activity-failed` error describes an
   INFRASTRUCTURE condition rather than a workflow outcome:

   - `:activity-interrupted` — engine shutdown interrupted the activity mid-flight;
   - `:rejected` — the executor refused to accept the activity because it was
     saturated or closing.

   Neither is something the workflow did; both must be RE-RUN on the next pass,
   exactly as the synchronous `stub` already does. Replaying them as durable
   failures turns a routine engine shutdown into a permanently failed workflow."
  [failed-event]
  (boolean
    (when-let [err (some-> (:error failed-event) (error/map->exception))]
      (or (error/interruption? err)
          (error/rejection? err)))))

(defn async
  "Schedule an activity call for parallel (out-of-band) execution.
   `thunk` must contain exactly one `stub` call (the activity to run asynchronously).

   Returns an `AsyncHandle` immediately. The activity is batched with other pending
   async operations and executed in parallel by the engine before the next workflow
   loop iteration. Use `join`, `join-all`, or `join-any` to wait for the result.

   Replay-safe: on resume the thunk is NOT re-invoked; the engine replays the cached
   completion or failure event and advances the sequence counter appropriately."
  [thunk]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        existing-completed (ctx/history-event :async-completed seq-num)
        existing-failed (ctx/history-event :async-failed seq-num)
        existing-started (ctx/history-event :async-started seq-num)
        runtime-failed?   (runtime-failure? existing-failed)]
    (cond
      ;; Already completed - advance seq past consumed numbers during replay
      existing-completed
      (do
        ;; Advance seq counter to skip past all seqs consumed by this async
        (ctx/update-seq! existing-completed)
        (log/tracef "Async already succeeded advancing sequence number")
        (->AsyncHandle seq-num))

      ;; Already failed - advance seq past consumed numbers during replay.
      ;; NOT for infrastructure failures (interrupt / executor rejection): those
      ;; fall through to `existing-started` below, which re-enqueues the activity
      ;; so it actually runs, mirroring the synchronous stub's reschedule.
      (and existing-failed (not runtime-failed?))
      (do
        (ctx/update-seq! existing-failed)
        (log/infof "Async already failed advancing sequence number")
        (->AsyncHandle seq-num))

      ;; Already started but not usefully completed: re-skip the activity seq
      ;; consumed inside the thunk (the event carries it as :last-seq), then
      ;; re-enqueue the activity from its persisted :activity-scheduled event so it
      ;; actually runs - the first pass may have crashed (or suspended on a
      ;; timer/signal, which used to drop the pending batch) before the activity
      ;; executed, or the activity was interrupted / rejected (runtime-failed?).
      existing-started
      (let [;; (inc seq-num) covers pre-:last-seq histories: thunks contain exactly
            ;; one stub call, so the activity seq is handle-seq + 1.
            activity-seq (or (:last-seq existing-started) (inc seq-num))
            scheduled    (ctx/history-event :activity-scheduled activity-seq)
            ;; Re-invoke the thunk. Two things it produces cannot be recovered from
            ;; history: the activity must be REGISTERED in this process's registry
            ;; (`stub` does that, and the engine can only look activities up by
            ;; name — a resumed process starts with an empty registry, so a purely
            ;; history-derived re-enqueue fails with "Activity not found"), and the
            ;; full retry policy, whose :retryable-fn is a function and was never
            ;; serialized onto the :activity-scheduled event. Re-running is safe
            ;; here: this branch only runs when the activity has NOT completed, so
            ;; nothing durable resulted from the previous attempt, and the thunk is
            ;; workflow code — its side effects live inside the stubbed activity,
            ;; which suspends before executing anything.
            live         (try
                           (thunk)
                           nil
                           (catch #?(:clj Throwable :cljs :default) e
                             (if (error/suspension? e)
                               (error/suspension-data e)
                               (throw e))))
            src          (or live scheduled)]
        ;; Backstop for a thunk that did not suspend (nothing to re-run): realign
        ;; the counter with the seqs the first pass consumed. A no-op when the
        ;; thunk did suspend, since `stub`'s next-seq! already advanced it.
        (ctx/update-seq! (assoc existing-started :last-seq activity-seq))
        (if src
          (do
            (log/infof "Async already started; re-enqueueing activity %s" (:activity-name src))
            (ctx/add-pending-async! {:handle-seq    seq-num
                                     :activity-name (:activity-name src)
                                     :activity-seq  (or (:seq live) activity-seq)
                                     :args          (:args src)
                                     :timeout-ms    (:timeout-ms src)
                                     :retry-policy  (:retry-policy src)
                                     ;; Read straight from history rather than
                                     ;; from `src`: `scheduled` is an
                                     ;; :activity-scheduled event, which has
                                     ;; never carried the attempt state.
                                     :attempt-state (ctx/attempt-state
                                                      (or (:seq live) activity-seq))}))
          (log/warnf "Async started at seq %s but no :activity-scheduled found; waiting" seq-num))
        (->AsyncHandle seq-num))

      ;; Need to start - record and try to capture what activity it needs
      :else
      (let [start-seq seq-num
            ;; The :async-started event is recorded once the thunk's fate is known:
            ;; on activity suspension it carries the activity seq as :last-seq so
            ;; the replay branch above can re-skip it and re-enqueue the activity.
            record-started! (fn [last-seq]
                              (ctx/add-pending-event! (cond-> {:event-type :async-started
                                                               :seq        start-seq
                                                               :timestamp  (ctx/current-time-ms)}
                                                        last-seq (assoc :last-seq last-seq)))
                              (ctx/notify-observer obs/on-async-started (:workflow-id ctx) start-seq))]
        ;; Try to execute the thunk to see what activity it wants
        (try
          (log/tracef "Invoking Async thunk")
          (let [result (thunk)
                ;; Capture the last seq number after thunk execution
                end-seq (dec @(:seq-counter (ctx/current-context)))]
            ;; If thunk completes synchronously (pure computation - first run only),
            ;; record the start, then the completion event with the seq range
            (record-started! nil)
            (ctx/add-pending-event! {:event-type :async-completed
                                     :seq        start-seq
                                     :last-seq   end-seq
                                     :result     result
                                     :timestamp  (ctx/current-time-ms)})
            (ctx/notify-observer obs/on-async-completed (:workflow-id ctx) start-seq result)
            (log/tracef "Async completed successfully with result %s" result)
            (->AsyncHandle start-seq))
          (catch #?(:clj Throwable :cljs :default) e
            (if (error/suspension? e)
              ;; The thunk suspended on an activity - capture it for parallel execution
              (let [suspension-info (error/suspension-data e)
                    activity-name (:activity-name suspension-info)
                    activity-seq  (:seq suspension-info)]
                (log/tracef "Async suspended activity %s" activity-name)
                (record-started! activity-seq)
                (ctx/add-pending-async! {:handle-seq    start-seq
                                         :activity-name activity-name
                                         :activity-seq  activity-seq
                                         :args          (:args suspension-info)
                                         :timeout-ms    (:timeout-ms suspension-info)
                                         :retry-policy  (:retry-policy suspension-info)
                                         ;; What earlier drives already spent on
                                         ;; this activity, so the engine resumes
                                         ;; the retry sequence rather than
                                         ;; restarting it.
                                         :attempt-state (ctx/attempt-state activity-seq)})
                ;; Return handle - we'll batch execute later
                (->AsyncHandle start-seq))
              ;; else
              (do
                (log/tracef e "Async failed")
                (throw e)))))))))

(defn join
  "Wait for an async handle to complete.
   Throws if the async operation failed."
  [handle]
  (ctx/check-cancelled!)
  (let [handle-seq (:seq-num handle)
        completed (ctx/history-event :async-completed handle-seq)
        failed (ctx/history-event :async-failed handle-seq)]
    (cond
      completed
      (:result completed)

      ;; An infrastructure failure (interrupt / rejection) is NOT a resolution:
      ;; `async` has already re-enqueued the activity for this pass, so suspend
      ;; and let handle-suspension flush the batch. Throwing here instead would
      ;; durably fail the workflow for a routine engine stop.
      (and failed (not (runtime-failure? failed)))
      (throw (error/async-failed-exception handle-seq (:error failed)))

      :else
      (throw (error/make-suspension :join-pending {:handle-seq handle-seq})))))

(defn join-all
  "Wait for multiple async handles to complete.
   Returns a vector of results in the same order as handles.
   Throws if any async operation failed."
  [handles]
  (mapv join handles))

(defn join-any
  "Wait for any of the async handles to complete.
   Returns {:index idx :result result} for the first completed.
   Note: In deterministic replay, this will always return the same result."
  [handles]
  (ctx/check-cancelled!)
  (let [seq-num (ctx/next-seq!)
        existing (ctx/history-event :join-any-completed seq-num)]
    (if existing
      {:index (:index existing)
       :result (:result existing)}
      ;; Check if any are already complete
      (let [completed-idx (first
                            (keep-indexed
                              (fn [idx handle]
                                  (when (ctx/history-event :async-completed (:seq-num handle))
                                    idx))
                              handles))]
        (cond
          completed-idx
          (let [result (join (nth handles completed-idx))]
            (ctx/add-pending-event! {:event-type :join-any-completed
                                     :seq seq-num
                                     :index completed-idx
                                     :result result
                                     :timestamp (ctx/current-time-ms)})
            {:index completed-idx :result result})

          ;; Every handle already failed *for real*: no completion can ever arrive,
          ;; so fail deterministically (recorded events, stable across replays)
          ;; instead of suspending forever. Handles whose failure is only an
          ;; interrupt/rejection don't count — `async` re-enqueued those, so a
          ;; completion is still coming.
          (every? (fn [h]
                    (let [failed (ctx/history-event :async-failed (:seq-num h))]
                      (and failed (not (runtime-failure? failed)))))
                  handles)
          (let [failed (ctx/history-event :async-failed (:seq-num (first handles)))]
            (throw (error/async-failed-exception (:seq-num (first handles)) (:error failed))))

          :else
          (throw (error/make-suspension :join-any-pending
                                        {:seq seq-num
                                         :handle-seqs (mapv :seq-num handles)})))))))

;; ============================================================================
;; Signals
;; ============================================================================

(defn wait-for-signal
  "Wait for a signal with the given name.
   Returns the signal payload when received.

   `signal-name` is coerced with `str`, so every store sees the same type — see
   `send-signal` for why."
  [signal-name]
  (ctx/check-cancelled!)
  (let [signal-name (str signal-name)
        seq-num (ctx/next-seq!)
        existing (ctx/history-event :signal-received seq-num)]
    (if existing
      (:payload existing)
      (throw (error/make-suspension :wait-signal {:seq seq-num
                                                  :signal-name signal-name})))))

(defn wait-for-signal-with-timeout
  "Wait for a signal with timeout.
   Returns {:received true :payload ...} or {:received false} on timeout.

   `signal-name` is coerced with `str` — see `send-signal`."
  [signal-name timeout-ms]
  (ctx/check-cancelled!)
  (let [signal-name (str signal-name)
        seq-num (ctx/next-seq!)
        existing (ctx/history-event :signal-wait-completed seq-num)]
    (if existing
      (if (:received existing)
        {:received true :payload (:payload existing)}
        {:received false})
      ;; Reuse the deadline from a prior :signal-wait-scheduled event if one was
      ;; already persisted for this seq (mirrors sleep's :timer-scheduled reuse).
      ;; Recomputing (now + timeout-ms) on every replay would push the deadline
      ;; later on each resume/re-drive — a crash-resumed or normally re-polled
      ;; wait could then never reliably time out.
      (let [prior    (ctx/history-event :signal-wait-scheduled seq-num)
            deadline (or (:deadline prior) (+ (ctx/current-time-ms) timeout-ms))]
        (when-not prior
          (ctx/add-pending-event! {:event-type :signal-wait-scheduled
                                   :seq seq-num
                                   :signal-name signal-name
                                   :deadline deadline
                                   :timestamp (ctx/current-time-ms)}))
        (throw (error/make-suspension :wait-signal-timeout
                                      {:seq seq-num
                                       :signal-name signal-name
                                       :timeout-ms timeout-ms
                                       :deadline deadline}))))))

;; ============================================================================
;; Timers
;; ============================================================================

(defn sleep
  "Sleep for specified milliseconds"
  [ms]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        existing (ctx/history-event :timer-fired seq-num)]
    (if existing
      nil
      ;; Reuse the fire-at from a prior :timer-scheduled event if one was already
      ;; persisted for this seq. Recomputing (now + ms) on every replay would push
      ;; the deadline later on each resume (drift) and make a crash-resumed sleep
      ;; never reliably fire. The fire time must be deterministic across replays.
      (let [prior   (ctx/history-event :timer-scheduled seq-num)
            fire-at (or (:fire-at prior) (+ (ctx/current-time-ms) ms))]
        (when-not prior
          (ctx/add-pending-event! {:event-type :timer-scheduled
                                   :seq seq-num
                                   :fire-at fire-at
                                   :duration-ms ms
                                   :timestamp (ctx/current-time-ms)})
          (ctx/notify-observer obs/on-timer-scheduled (:workflow-id ctx) seq-num fire-at))
        (throw (error/make-suspension :timer {:seq seq-num
                                              :fire-at fire-at}))))))
;; ============================================================================
;; Child Workflows
;; ============================================================================

(declare run-child-workflow-async)

(defn run-child-workflow
  "Schedule a durable child workflow and wait for its result. Synchronous and
   asynchronous children share the same claimed execution path; the only
   difference is whether the returned handle is joined immediately."
  [child-workflow-fn args & {:keys [child-id parent-close-policy]
                             :or   {parent-close-policy :terminate}}]
  (join (run-child-workflow-async child-workflow-fn args
                                  :child-id child-id
                                  :parent-close-policy parent-close-policy)))

(defn- schedule-independent-child!
  "Declare an independent child as replay output.

   The workflow body never writes a child row or parent link.  The engine folds
   this declaration and the parent :child-workflow-scheduled event into one
   transition after the pass suspends, so neither side can become visible alone.
   Once replay observes that marker it emits nothing further."
  [parent-id seq-num child-wf-id child-workflow-fn args policy]
  (let [workflow-context (ctx/current-context)]
    (when-not (ctx/history-event :child-workflow-scheduled seq-num)
      (let [fn-name (wreg/register-workflow! child-workflow-fn)]
        (swap! (:pending-creations workflow-context) conj
               {:workflow-id child-wf-id
                :owner-id (:owner-id workflow-context)
                :parent {:workflow-id parent-id
                         :seq seq-num
                         :policy policy}
                :started-event {:event-type :workflow-started
                                :seq -1
                                :workflow-id child-wf-id
                                :workflow-fn-name fn-name
                                :args (vec args)
                                :parent-id parent-id
                                :parent-seq seq-num
                                :timestamp (ctx/current-time-ms)}})
        (ctx/add-pending-event! {:event-type        :child-workflow-scheduled
                                 :seq               seq-num
                                 :child-workflow-id child-wf-id
                                 :workflow-fn-name  fn-name
                                 :args              (vec args)
                                 :timestamp         (ctx/current-time-ms)})
        (ctx/notify-observer obs/on-child-workflow-scheduled parent-id seq-num child-wf-id fn-name (vec args))))
    child-wf-id))

(defn- schedule-child!
  "Allocate one child operation and return both public representations."
  [child-workflow-fn args child-id parent-close-policy]
  (ctx/check-cancelled!)
  (assert (domain/parent-close-policies parent-close-policy)
          (str "Invalid :parent-close-policy " parent-close-policy))
  (let [workflow-context (ctx/current-context)
        seq-num          (ctx/next-seq!)
        parent-id        (:workflow-id workflow-context)
        child-wf-id      (or child-id (str parent-id "/child-" seq-num))]
    (schedule-independent-child! parent-id seq-num child-wf-id
                                 child-workflow-fn args parent-close-policy)
    {:workflow-id child-wf-id
     :handle      (->AsyncHandle seq-num)}))

(defn run-child-workflow-async
  "Start `child-workflow-fn` as an INDEPENDENT child workflow and return an
   AsyncHandle immediately — the parent continues running in parallel and can
   `join` the handle later to retrieve the child's result.

   Every child is a first-class persisted workflow with its own ownership claim
   and lifecycle. The parent is woken durably when the child terminates.

   Options:
   - :child-id              custom child workflow id (default: <parent-id>/child-<seq>)
   - :parent-close-policy   what happens to this child WHEN THE PARENT CLOSES
                            (success, failure, or cancellation). Mirrors Temporal's
                            ParentClosePolicy; only ever affects the child, never the
                            parent's own outcome. Default :terminate.

   Policies (Temporal-aligned):
   - :terminate      (default) — forcefully stop the child immediately, no cleanup;
                                 the child ends in the :terminated state.
   - :cascade-cancel           — request cancellation of the child; a driven child
                                 observes it and may compensate, ending :cancelled.
   - :abandon                  — leave the child running independently (fire-and-forget)."
  [child-workflow-fn args & {:keys [child-id parent-close-policy]
                             :or   {parent-close-policy :terminate}}]
  (:handle (schedule-child! child-workflow-fn args child-id parent-close-policy)))

(defn run-child-workflow-detached
  "Fire-and-forget variant of `run-child-workflow-async`: schedule an independent
   child and return its workflow id without any joinable handle. For work that
   should outlive the parent, pass :parent-close-policy :abandon (the default here,
   like async, is :terminate — Temporal's default — which stops the child when the
   parent closes).

   Options: same as `run-child-workflow-async`."
  [child-workflow-fn args & {:keys [child-id parent-close-policy]
                             :or   {parent-close-policy :terminate}}]
  (:workflow-id (schedule-child! child-workflow-fn args child-id parent-close-policy)))

;; ============================================================================
;; Public API
;; ============================================================================

(declare submit-workflow await-workflow)

(defn- running-engine?
  "True only while an engine can claim and drive workflows."
  [engine]
  (boolean (some-> (:engine-running? engine) deref)))

(defn start-workflow
  "Persist a workflow and wait for the running engine to produce its terminal
   result. All execution goes through claim-runnable!; the caller never drives
   workflow code directly."
  [engine workflow-fn args & {:keys [workflow-id protocols max-iterations]
                              :or {max-iterations 1000}}]
  #?(:clj
     (doseq [[proto impl] protocols]
       (a/register-protocol-activities! (:registry engine) proto impl)))
  #?(:cljs
     (when protocols
       (swap! (:protocols engine) merge protocols)))
  (when-not (running-engine? engine)
    (throw (ex-info "start-workflow requires a running workflow engine"
                    {:engine-status :stopped})))
  (let [{:keys [workflow-id]}
        (submit-workflow engine workflow-fn args
                         :workflow-id workflow-id
                         :max-iterations max-iterations)]
    (await-workflow engine workflow-id)))

(defn submit-workflow
  "Persist a RUNNABLE workflow and return {:workflow-id id} immediately.
   The engine claims and executes it; observe it with await-workflow or status APIs.

   Options: :workflow-id (default: random uuid)."
  [{:keys [store owner-id] :as engine} workflow-fn args
   & {:keys [workflow-id max-iterations] :or {max-iterations 1000}}]
  (when-not (running-engine? engine)
    (throw (ex-info "submit-workflow requires a running workflow engine"
                    {:workflow-id workflow-id})))
  (let [wid (or workflow-id (str (random-uuid)))
        workflow-name (wreg/register-workflow! workflow-fn)
        ;; Open the root span here and keep it live in the registry: every claimed
        ;; drive in this process reuses it, and the terminal drive ends it. Its
        ;; traceparent lets a drive in another process link to the same trace.
        tracecontext #?(:clj (when (:enable-telemetry engine)
                               (tracing/ctx->tracecontext
                                 (tracing/ensure-workflow-span! wid workflow-name nil)))
                        :cljs nil)
        started-event
        (cond-> {:event-type       :workflow-started
                 :seq              -1 ;; fixed sentinel, see schedule-independent-child!
                 :workflow-id      wid
                 :workflow-fn-name workflow-name
                 :args             (vec args)
                 :max-iterations   max-iterations
                 :timestamp        (clock/now-ms)}
          tracecontext (assoc :tracecontext tracecontext))
        creation {:workflow-id wid
                  :owner-id owner-id
                  :started-event started-event}
        {:keys [create-status]} (p/create-workflow! store creation)]
    (case create-status
          :created
          (do
            ;; submit IS the start of an engine-driven workflow, so observe
            ;; the start once — the engine only resumes durable work after this
            ;; point.
            (when-let [observer (get engine :observer)]
              (obs/on-workflow-started observer wid workflow-name (vec args)))
            {:workflow-id wid})

          :exists
          {:workflow-id wid}

          :conflict
          (throw (ex-info "Workflow ID is already bound to a different creation"
                          {:error/type ::workflow-id-conflict
                           :workflow-id wid
                           :workflow-fn-name workflow-name
                           :args (vec args)})))))

(defn- terminal-result
  "Reconstruct the public result from the persisted terminal event."
  [store workflow-id]
  (let [status (p/get-workflow-status store workflow-id)
        terminal (some #(when (domain/terminal-event? %) %)
                       (p/load-history store workflow-id))]
    (cond-> {:status status :workflow-id workflow-id}
      (= :completed status) (assoc :result (:result terminal))
      (#{:failed :cancelled :terminated} status) (assoc :error (:error terminal)))))

(defn- terminal-event-in-history? [history]
  (boolean (some domain/terminal-event? history)))

(defn- terminal-history?
       [store workflow-id]
       (terminal-event-in-history? (p/load-history store workflow-id)))

(defn await-workflow
  "Wait until the workflow reaches a terminal state (:completed, :failed,
   :cancelled, :terminated) and return a map that always includes :workflow-id
   and :status (plus :result for completion or :error for other terminals), or
   {:status :timeout :workflow-id …} if the deadline elapses first.
   A briefly :not-found id (still starting) is tolerated.

   On the JVM this BLOCKS and returns the map; on ClojureScript it returns a
   promesa promise of the map. The engine must be progressing the
   workflow. Options: :poll-ms (default 50), :timeout-ms (default 30000)."
  [{:keys [store] :as engine} workflow-id & {:keys [poll-ms timeout-ms]
                                             :or   {poll-ms 50 timeout-ms 30000}}]
  (when-not (running-engine? engine)
    (throw (ex-info "await-workflow requires a running workflow engine"
                    {:workflow-id workflow-id})))
  #?(:clj
     (let [deadline (+ (System/currentTimeMillis) timeout-ms)]
       (loop []
         (let [st (p/get-workflow-status store workflow-id)]
           (cond
             (and (domain/terminal-status? st)
                  (terminal-history? store workflow-id)) (terminal-result store workflow-id)
             (> (System/currentTimeMillis) deadline) {:status :timeout :workflow-id workflow-id}
             :else (do (Thread/sleep (long poll-ms)) (recur))))))
     :cljs
     (let [deadline (+ (js/Date.now) timeout-ms)]
       (letfn [(step []
                 (let [st (p/get-workflow-status store workflow-id)]
                   (cond
                     (and (domain/terminal-status? st)
                          (terminal-history? store workflow-id))
                     (prom/resolved (terminal-result store workflow-id))
                     (> (js/Date.now) deadline) (prom/resolved {:status :timeout :workflow-id workflow-id})
                     :else (prom/then (prom/delay poll-ms) (fn [_] (step))))))]
         (step)))))

(defn- drive-claim!
  "Resolve and execute one claim returned by `claim-runnable!`. This is the only
  entry point that calls the replay engine."
  [{:keys [store] :as engine} {:keys [workflow-id wake-version]}]
  (let [snapshot (p/load-snapshot store workflow-id)
        history (:history snapshot)
        started (some #(when (= :workflow-started (:event-type %)) %) history)]
    (when-not started
      (throw (ex-info "Cannot drive: no :workflow-started event in history"
                      {:error/type ::no-started-event :workflow-id workflow-id})))
    (if (terminal-event-in-history? history)
      #?(:clj  (terminal-result store workflow-id)
         :cljs (prom/resolved (terminal-result store workflow-id)))
      (let [workflow-fn (wreg/resolve-workflow (:workflow-fn-name started))
            observer    (:observer engine)
            run          #(exec/drive-fsm!
                            engine workflow-id workflow-fn (vec (:args started))
                            {:observer observer
                             :max-iterations (or (:max-iterations started) 1000)
                             :wake-version wake-version})]
        (when observer
          (obs/on-workflow-resumed observer workflow-id))
        #?(:clj
           (if-let [span-ctx (and (:enable-telemetry engine)
                                  (or (tracing/active-span workflow-id)
                                      (tracing/ensure-workflow-span!
                                        workflow-id
                                        (:workflow-fn-name started)
                                        (tracing/tracecontext->ctx
                                          (:tracecontext started)))))]
             (try
               (octx/with-context! span-ctx (run))
               (catch Throwable e
                 (tracing/finish-workflow-span! workflow-id e)
                 (throw e)))
             (run))
           :cljs
           (run))))))

(defn resume-workflow
  "Durably wake a submitted workflow and wait for it to terminate. Workflow
   execution itself always happens through an engine claim."
  [{:keys [store] :as engine} workflow-id]
  (when-not (running-engine? engine)
    (throw (ex-info "resume-workflow requires a running workflow engine"
                    {:engine-status :stopped :workflow-id workflow-id})))
  (p/wake! store workflow-id)
  (await-workflow engine workflow-id))

#?(:clj
   (defn- start-engine-loop
     "Start the engine-owned background scheduling loop. The durable scheduling scan claims only
      RUNNABLE or due WAITING workflows and changes them to RUNNING atomically.
      Indefinite waits therefore consume no poll/replay work.

      Use a STABLE owner-id per pod (e.g. StatefulSet ordinal / config) so a
      crashed pod reclaims its own work on restart. Returns a 0-arg stop fn that
      releases this owner's workflows (so other pods can pick them up).

      The workflow function must be registered in this process (start-workflow
      registers it automatically; a fresh process must register its workflow vars
      at startup).

      Options:
        :owner-id             stable id for this engine
        :poll-ms              poll interval (default 10)
        :batch-size           max workflows claimed per poll (default 100)
        :workflow-concurrency max concurrently driven workflows (default 4)"
     [{:keys [store] :as engine}
      & {:keys [owner-id poll-ms batch-size workflow-concurrency]
         :or   {owner-id (str (random-uuid)) poll-ms 10 batch-size 100
                workflow-concurrency 4}}]
     (let [running (atom true)
           _       (p/recover-running! store owner-id)
           permits (java.util.concurrent.Semaphore. (int workflow-concurrency))
           drives  (java.util.concurrent.Executors/newFixedThreadPool
                     (int workflow-concurrency))
           ;; Workflows this process cannot resume: wf-id -> workflow-fn-name
           ;; (or nil when history has no start event). Their RUNNING state keeps
           ;; them out of the ready queue; once a registration appears we requeue
           ;; exactly that workflow.
           unresumable (atom {})
           requeue-registered! (fn []
                                 (doseq [[wf-id wf-name] @unresumable
                                         :when (and wf-name (wreg/registered? wf-name))]
                                   (swap! unresumable dissoc wf-id)
                                   (p/requeue-running! store wf-id owner-id)))
           process-one (fn [{:keys [workflow-id] :as claim}]
                         (try
                           (let [result (drive-claim! engine claim)]
                             (when (= :interrupted (:status result))
                               (p/requeue-running! store workflow-id owner-id)))
                           (catch Throwable t
                             (let [etype (:error/type (ex-data t))]
                               (if (or (wreg/not-registered? t) (= ::no-started-event etype))
                                 (do
                                   (swap! unresumable assoc workflow-id (:workflow-name (ex-data t)))
                                   (log/warnf "Engine %s: workflow %s is not resumable here (%s); holding until its fn is registered"
                                              owner-id workflow-id (ex-message t)))
                                 (do
                                   (p/requeue-running! store workflow-id owner-id)
                                   (log/warnf t "Engine %s failed resuming %s" owner-id workflow-id)))))
                           (finally
                             (.release permits))))
           ;; Exponential backoff on consecutive poll failures so a downed
           ;; database doesn't get hammered (and the logs flooded).
           max-backoff-ms (* poll-ms 60)
           backoff-ms     (atom (long poll-ms))
           thread (Thread.
                    ^Runnable
                    (fn []
                      (while @running
                        (try
                          (requeue-registered!)
                          (let [capacity (min batch-size (.availablePermits permits))
                                claims   (if (pos? capacity)
                                           (p/claim-runnable! store owner-id capacity
                                                              (clock/now-ms))
                                           [])]
                            (reset! backoff-ms (long poll-ms))
                            (doseq [claim claims :while @running]
                              (.acquire permits)
                              (.submit drives ^Runnable #(process-one claim)))
                            ;; Always yield between scans: claimed work runs elsewhere,
                            ;; and an empty/at-capacity engine must never hot-spin.
                            (Thread/sleep (long poll-ms)))
                          (catch InterruptedException _ (reset! running false))
                          (catch Throwable t
                            (let [wait @backoff-ms]
                              (log/warnf t "Engine %s loop error; backing off %dms" owner-id wait)
                              (Thread/sleep wait)
                              (swap! backoff-ms #(min max-backoff-ms (* 2 %)))))))))]
       (doto thread
         (.setDaemon true)
         (.setName (str "intemporal-engine-" owner-id))
         (.start))
       (fn stop-engine [grace-period-secs]
         (reset! running false)
         (.interrupt thread)
         (.join thread (long (+ poll-ms 1000)))
         (.shutdown drives)
         (when-not (.awaitTermination drives (long grace-period-secs)
                     java.util.concurrent.TimeUnit/SECONDS)
           (.shutdownNow drives)
           (.awaitTermination drives 1 java.util.concurrent.TimeUnit/SECONDS))
         (p/release-owner! store owner-id)))))

#?(:cljs
   (defn- start-engine-loop
     "ClojureScript engine-owned recovery loop. Each tick atomically claims only RUNNABLE
      or due WAITING workflows and drives a bounded promise batch. The next tick
      starts after the batch settles.

      The workflow function must be registered in this process (start-workflow
      registers it automatically; otherwise register workflow vars at startup).

      Options:
        :owner-id             stable id for this engine
        :poll-ms              poll interval (default 10)
        :batch-size           max workflows claimed per poll (default 100)
        :workflow-concurrency max concurrent promise drives (default 4)"
     [{:keys [store] :as engine}
      & {:keys [owner-id poll-ms batch-size workflow-concurrency unref-timers?]
         :or   {owner-id (str (random-uuid)) poll-ms 10 batch-size 100
                workflow-concurrency 4 unref-timers? false}}]
     (let [running     (atom true)
           timer       (atom nil)
           _           (p/recover-running! store owner-id)
           ;; Workflows this process cannot resume: wf-id -> workflow-fn-name (or
           ;; nil when the history has no :workflow-started event). Skipped — NOT
           ;; terminated — and retried once their fn shows up in the registry.
           unresumable (atom {})
           requeue-registered!
           (fn []
             (doseq [[wf-id wf-name] @unresumable
                     :when (and wf-name (wreg/registered? wf-name))]
               (swap! unresumable dissoc wf-id)
               (p/requeue-running! store wf-id owner-id)))
           on-fail     (fn [wf-id e]
                         (if (or (wreg/not-registered? e)
                                 (= ::no-started-event (:error/type (ex-data e))))
                           (do
                             (swap! unresumable assoc wf-id (:workflow-name (ex-data e)))
                             (log/warnf "Engine %s: workflow %s is not resumable here (%s); skipping until its fn is registered"
                                        owner-id wf-id (ex-message e)))
                           (do
                             (p/requeue-running! store wf-id owner-id)
                             (log/warnf "Engine %s failed resuming %s: %s" owner-id wf-id e))))
           set-timeout (fn [f delay]
                         (let [t (js/setTimeout f delay)]
                           (when (and unref-timers? (fn? (.-unref t)))
                             (.unref t))
                           t))
           process-one (fn [{:keys [workflow-id] :as claim}]
                         ;; A drive can throw synchronously (e.g. fn not
                         ;; registered) or reject async; swallow both so one bad
                         ;; workflow never stalls the scan.
                         (try
                           (-> (drive-claim! engine claim)
                               (prom/then (fn [result]
                                            (when (= :interrupted (:status result))
                                              (p/requeue-running! store workflow-id owner-id))
                                            result))
                               (prom/catch (fn [e] (on-fail workflow-id e) nil)))
                           (catch :default e
                             (on-fail workflow-id e)
                             (prom/resolved nil))))]
       (letfn [(schedule-next []
                 (when @running
                   (reset! timer (set-timeout tick poll-ms))))
               (tick []
                 (when @running
                   (try
                     (requeue-registered!)
                     (let [limit  (min batch-size workflow-concurrency)
                           claims (p/claim-runnable! store owner-id limit
                                                     (clock/now-ms))]
                       (-> (prom/all (mapv process-one claims))
                           (prom/then    (fn [_] (schedule-next)))
                           (prom/catch   (fn [_] (schedule-next)))))
                     (catch :default e
                       (log/warnf "Engine %s loop error: %s" owner-id e)
                       (schedule-next)))))]
         (reset! timer (set-timeout tick 0))
         (fn stop-engine [_grace-period-secs]
           (reset! running false)
           (when-let [t @timer] (js/clearTimeout t))
           (p/release-owner! store owner-id))))))

(defn send-signal
  "Send a signal to a workflow.

   Arguments:
   - store: workflow store implementation
   - workflow-id: Target workflow ID
   - signal-name: Name of the signal
   - payload: Signal payload data

   Options:
   - :signal-id - Custom signal ID for idempotency"
  [store workflow-id signal-name payload & {:keys [signal-id]}]
  ;; Normalize the signal name at the API boundary so all three stores agree on
  ;; its type. Untouched, a keyword name behaves differently per store: FDB's
  ;; tuple encoder demotes it to its `name`, JDBC would try to bind a keyword as
  ;; a SQL parameter, and InMemory keeps it as a distinct map key.
  ;;
  ;; `str`, not `name`: (str :approve) is ":approve" and (str "approve") is
  ;; "approve", so a keyword and a like-named string stay DIFFERENT signals.
  ;; `name` would collapse them and silently deliver one caller's signal to
  ;; another's waiter.
  (let [signal-name (str signal-name)
        status      (p/get-workflow-status store workflow-id)]
    (when-not (= status :running)
      (throw (ex-info "Cannot send signal: workflow is not active"
                      {:workflow-id workflow-id :status status})))
    (let [id (or signal-id (str (random-uuid)))]
      (log/with-mdc {:workflow-id workflow-id}
        ;; The FSM inbox owns idempotency, FIFO queue allocation, and the
        ;; lost-wake transition.
        (let [{:keys [signal-status] :as result}
              (p/add-signal! store workflow-id signal-name
                             {:signal-id id :id id :payload payload})]
          (when (= :conflict signal-status)
            (throw (ex-info "Signal ID was already used with a different payload"
                            {:error/type ::signal-id-conflict
                             :workflow-id workflow-id :signal-id id})))
          (when (#{:terminal :not-found} signal-status)
            (throw (ex-info "Cannot send signal: workflow is not active"
                            {:workflow-id workflow-id :status signal-status}))))
        (log/debugf "Adding signal %s" signal-name))
      {:signal-id id})))

(defn cancel-workflow
  "Cancel a running workflow.
   The workflow is cancelled at the next suspension point. If it is currently
   suspended (e.g. waiting on a signal), the durable wake transition forces it to re-enter its
   loop so it observes the cancellation flag rather than waiting forever.

   Parent-close policies are applied by the single terminal transition, after
   the workflow has actually reached :cancelled.  A cancellation request itself
   therefore remains a wake-and-replay operation rather than a second,
   out-of-band cross-workflow write path."
  [store workflow-id]
  (log/with-mdc {:workflow-id workflow-id}
    (let [status (p/get-workflow-status store workflow-id)]
      (cond
        (= :not-found status)
        (throw (ex-info "Cannot cancel workflow: workflow is not active"
                        {:workflow-id workflow-id :status status}))

        (domain/terminal-status? status)
        (log/debugf "Cancelling workflow that is already in terminal state %s, skipping" status)

        :else
        (do
          ;; request-cancel! is one durable transition: record the request,
          ;; advance wake-version, and make a WAITING workflow RUNNABLE.
          (p/request-cancel! store workflow-id)
          (log/debugf "Cancelling workflow")))))
  {:cancelled true :workflow-id workflow-id})

(defn get-workflow-history
  "Get the history of a workflow"
  [store workflow-id]
  (p/load-history store workflow-id))

(defn get-workflow-result
  "Get the final result of a completed workflow, or nil if not completed"
  [store workflow-id]
  (let [history (p/load-history store workflow-id)
        completed (->> history
                       (filter #(= (:event-type %) :workflow-completed))
                       first)]
    (when completed
      (:result completed))))

(defmacro stub-protocol
  "Stub a protocol definition by looking up its methods and wrapping them in activities.
   Requires that the protocol implementation was passed to start-workflow via :protocols."
  [proto & opts]
  `(im/stub-protocol ~proto ~@opts))

(defmacro defn-workflow
  "Like `defn`, but also registers the function in the workflow registry under its
   qualified name at load time, so it can be resumed by id (by the recovery engine
   or a restarted/other process) without a manual `register-workflow!` call.
   Accepts the same forms as `defn`; works in Clojure and ClojureScript."
  [name & fdecl]
  `(im/defn-workflow ~name ~@fdecl))

;; ============================================================================
;; Saga / Compensations
;; ============================================================================

(defn suspension?
  "True if `e` is an internal workflow suspension (the engine's normal control
   flow for activities, timers, signals, etc.). Mainly needed in ClojureScript,
   where every throwable is a js/Error and `(catch :default e)` catches
   suspensions too - a saga catch there must rethrow them via this predicate.
   On the JVM suspensions subclass Error, so `(catch Exception e)` already
   excludes them and no guard is needed. See `saga`."
  [e]
  (error/suspension? e))

(defn saga
  "Create a saga: a handle that collects compensation thunks for the steps a
   workflow has completed. Register compensations as you go with
   `add-compensation`, and run them with `compensate` from a catch block.

   Both real failures and workflow cancellation flow through the catch (so this
   rolls back in either case); the engine's normal control-flow suspensions do
   not. On the JVM, catch `Exception` - suspensions subclass Error and are
   excluded automatically. On ClojureScript, catch `js/Error` - suspensions use
   a non-js/Error type and are excluded in the same way:

   (let [s (saga)]
     (try
       (let [h (book-hotel order)
             _ (add-compensation s #(cancel-hotel h))]
         (charge-card order))
       (catch #?(:clj Exception :cljs js/Error) e
         (compensate s)             ;; rolls back completed steps, LIFO
         (throw e))))"
  []
  {::compensations (atom [])})

(defn add-compensation
  "Register a 0-arg compensation thunk on `saga`. Compensations run in reverse
   registration order (LIFO) when `compensate` is called. The thunk should call
   activity stubs (closing over the step's result) so it is durable / replay-safe.
   Register a step's compensation only after the step succeeds, so a step that
   never completed registers nothing to undo."
  [saga thunk]
  (swap! (::compensations saga) conj thunk))

(defn compensate
  "Run `saga`'s registered compensations in reverse (LIFO). Real errors from a
   compensation are logged and skipped (best-effort rollback); a suspension (a
   compensating activity running for the first time) is rethrown so the engine
   schedules and resumes it - on replay already-run compensations return cached
   results."
  [saga]
  (let [comps @(::compensations saga)]
    (when (seq comps)
      (ctx/notify-observer obs/on-compensation-started (ctx/current-workflow-id)))
    ;; Suppress the cancellation check so compensating activities can run even
    ;; when this rollback was triggered by a cancellation (the cancel exception
    ;; was already caught by the user before calling compensate).
    (ctx/set-compensating! true)
    (try
      (doseq [c (reverse comps)]
        (try
          (c)
          (catch #?(:clj Throwable :cljs :default) t
            (when (error/suspension? t) (throw t))
            (ctx/notify-observer obs/on-compensation-failed
                                 (ctx/current-workflow-id) (error/throwable->map t))
            (log/warnf "Compensation failed, continuing: %s" (ex-message t)))))
      (finally
        (ctx/set-compensating! false)))
    (when (seq comps)
      (ctx/notify-observer obs/on-compensation-completed (ctx/current-workflow-id)))))

;; ============================================================================
;; Convenience Functions
;; ============================================================================

(def ^:const default-activity-timeout-ms 30000)
(def ^:private default-shutdown-grace-secs 5)

(defn start-engine
  "Create and start a complete workflow engine. The returned engine owns one
   durable scheduler and its activity executor; close both with
   shutdown-engine.

   Options:
   - :store - workflow store implementation
   - :threads - Cap on concurrently executing activities (default: unbounded,
     i.e. one virtual thread per activity). When set, a saturated executor
     applies backpressure: submits wait for a slot rather than running the
     activity on the drive thread. Only a closing executor (or a wait longer
     than :default-timeout-ms) rejects, and rejected activities are rescheduled
     on a later pass. Ignored in ClojureScript.
   - :queue-capacity - Wait-queue depth when :threads is set (default: 8x :threads)
   - :submit-timeout-ms - Maximum saturated executor submission wait (JVM only)
   - :default-timeout-ms - Default activity timeout (default: 30000)
   - :owner-id - Required stable engine identity. Supply the same unique identity
     after a process restart to recover its owned work. One owner must identify
     only one live engine.
   - :poll-ms - Durable scheduling poll interval (default: 10)
   - :batch-size - Maximum claims per poll (default: 100)
   - :workflow-concurrency - Maximum concurrent claimed drives (default: 4)
   - :protocols - Protocol implementation map installed before recovery starts
   - :enable-logging - Retain observer events in :log (default: false)
   - :enable-telemetry - Enable OpenTelemetry tracing (default: true, JVM only)
   - :observer - Additional observer instance, composed on top of built-in observers"
  [& {:keys [store threads queue-capacity submit-timeout-ms default-timeout-ms
             owner-id poll-ms batch-size workflow-concurrency protocols
             enable-logging enable-telemetry observer unref-timers?]
      :or {store (store/create-store)
           default-timeout-ms  default-activity-timeout-ms
           batch-size 100
           workflow-concurrency 4
           enable-logging false
           enable-telemetry true
           protocols {}}}]
  (when-not (and (string? owner-id) (seq owner-id))
    (throw (ex-info "start-engine requires a non-empty explicit :owner-id"
                    {:owner-id owner-id})))
  (let [registry (a/make-registry)
        _ #?(:clj (doseq [[proto impl] protocols]
                    (a/register-protocol-activities! registry proto impl))
             :cljs nil)
        protocol-registry #?(:clj nil :cljs (atom protocols))
        log-atom (when enable-logging (atom []))
        logging-observer (when enable-logging (obs/make-logging-observer log-atom))
        composite-observer (obs/make-composite-observer [logging-observer observer])
        executor (runtime/make-vthreads-executor registry
                   :max-concurrent threads
                   :queue-capacity queue-capacity
                   :submit-timeout-ms submit-timeout-ms
                   :default-timeout-ms default-timeout-ms)
        engine-stop (atom nil)
        engine-running? (atom true)
        poll-ms (or poll-ms 10)
        base-engine {:store store
                     :executor executor
                     :registry registry
                     :observer composite-observer
                     :owner-id owner-id
                     :engine-running? engine-running?
                     :internal-engine-stop engine-stop
                     ;; OpenTelemetry tracing is wired at claimed-drive, child-workflow,
                     ;; and activity/timer boundaries rather than via an observer.
                     :enable-telemetry #?(:clj enable-telemetry :cljs false)
                     :log (when enable-logging log-atom)}
        engine #?(:clj base-engine
                  :cljs (assoc base-engine :protocols protocol-registry))]
    (try
      (reset! engine-stop
              #?(:clj
                 (start-engine-loop engine
                                    :owner-id owner-id
                                    :poll-ms poll-ms
                                    :batch-size batch-size
                                    :workflow-concurrency workflow-concurrency)
                 :cljs
                 (start-engine-loop engine
                                    :owner-id owner-id
                                    :poll-ms poll-ms
                                    :batch-size batch-size
                                    :workflow-concurrency workflow-concurrency
                                    :unref-timers? (if (nil? unref-timers?)
                                                     true
                                                     unref-timers?))))
      (catch #?(:clj Throwable :cljs :default) e
        (reset! engine-running? false)
        (p/shutdown-executor executor 0)
        (throw e)))
    engine))

(defn shutdown-engine
  "Stop polling, allow claimed JVM workflow drives up to grace-period-secs to
   finish, interrupt remaining drives, release ownership, and then stop the
   activity executor. ClojureScript cancels future polls immediately because its
   promise runtime cannot interrupt an in-flight callback. The default JVM grace
   period is 5 seconds; pass 0 for immediate interruption."
  ([{:keys [executor] :as engine}]
   (shutdown-engine engine default-shutdown-grace-secs))
  ([{:keys [executor internal-engine-stop engine-running?]} grace-period-secs]
   (log/infof "Shutting down engine")
   (when engine-running? (reset! engine-running? false))
   (when-let [stop-engine (some-> internal-engine-stop deref)]
     (stop-engine grace-period-secs)
     (reset! internal-engine-stop nil))
   (p/shutdown-executor executor grace-period-secs)))

(defmacro with-workflow-engine
  "Execute body with a workflow engine, ensuring cleanup.

   Usage:
   (with-workflow-engine [engine {:threads 4}]
     (start-workflow (:store engine) ...))"
  [[binding opts] & body]
  (macros/case
    :clj
    `(let [~binding (start-engine ~@(mapcat identity opts))]
       (try
         ~@body
         (finally
           (shutdown-engine ~binding))))
    :cljs
    ;; In CLJS, try/finally is synchronous so shutdown-engine fires before the
    ;; async body resolves, cancelling pending timers/activities.
    ;; Returns a promise with shutdown chained via p/finally.
    ;; with-result owns the t/async boundary and chains done# after assertions.
    `(let [~binding (start-engine ~@(mapcat identity opts))]
       (-> (do ~@body)
           (promesa.core/finally
             (fn []
               (shutdown-engine ~binding)))))))
