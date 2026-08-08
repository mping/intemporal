(ns intemporal.core
  (:require [intemporal.internal.error :as error]
            [intemporal.internal.context :as ctx]
            [intemporal.internal.activity :as a]
            [intemporal.internal.runtime :as runtime]
            [intemporal.internal.execution :as exec]
            [intemporal.internal.logging :as log]
            [intemporal.internal.fns.start-workflow :as sw]
            [intemporal.internal.workflow-registry :as wreg]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [intemporal.observer :as obs]
            [intemporal.utils :as utils]
            [intemporal.internal.macros :as im]
            #?@(:clj  [[intemporal.tracing :as tracing]
                       [steffan-westcott.clj-otel.context :as octx]])
            #?@(:cljs [[promesa.core :as prom]]))
  #?(:clj  (:require [net.cgrand.macrovich :as macros])
     :cljs (:require-macros [net.cgrand.macrovich :as macros]
                            [intemporal.internal.logging :as log]
                            [intemporal.internal.error :as error])))

;; ============================================================================
;; Core Workflow Operations
;; ============================================================================

(defn- schedule-activity!
  "Emit an :activity-scheduled pending event and throw the suspension that hands
   control back to the engine. Called from stub when an activity needs to run
   (first execution or re-execution after interruption/rejection)."
  [ctx activity-name seq-num args effective-timeout effective-retry]
  (let [scheduled-event {:event-type    :activity-scheduled
                         :seq           seq-num
                         :activity-name activity-name
                         :args          (vec args)
                         :timeout-ms    effective-timeout
                         :retry-policy  (when effective-retry
                                          {:max-attempts (:max-attempts effective-retry)
                                           :backoff-ms   (:backoff-ms effective-retry)})
                         :timestamp     (utils/current-time-ms)}]
    (ctx/add-pending-event! scheduled-event)
    (ctx/notify-observer p/on-activity-scheduled
                         (:workflow-id ctx) seq-num activity-name (vec args))
    (log/infof "Scheduling activity suspension")
    (throw (error/make-suspension :activity {:seq           seq-num
                                             :activity-name activity-name
                                             :args          (vec args)
                                             :timeout-ms    effective-timeout
                                             :retry-policy  effective-retry}))))

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
          (let [store           (ctx/current-store)
                workflow-id     (ctx/current-workflow-id)
                existing        (p/find-event store workflow-id :activity-completed seq-num)
                existing-failed (p/find-event store workflow-id :activity-failed seq-num)
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
                (schedule-activity! (ctx/current-context)
                                    activity-name seq-num args
                                    effective-timeout effective-retry)))))))))

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

   - `:activity-interrupted` — a worker stop / engine shutdown interrupted the
     activity mid-flight (X6/E4);
   - `:rejected` — the executor refused to accept the activity because it was
     saturated or closing (X4).

   Neither is something the workflow did; both must be RE-RUN on the next pass,
   exactly as the synchronous `stub` already does. Replaying them as durable
   failures turns a routine `stop-worker` into a permanently failed workflow."
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
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing-completed (p/find-event store workflow-id :async-completed seq-num)
        existing-failed (p/find-event store workflow-id :async-failed seq-num)
        existing-started (p/find-event store workflow-id :async-started seq-num)
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
      ;; so it actually runs, mirroring the sync `stub`'s reschedule (X6/E4/X4).
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
            scheduled    (p/find-event store workflow-id :activity-scheduled activity-seq)
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
                                     :retry-policy  (:retry-policy src)}))
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
                                                               :timestamp  (utils/current-time-ms)}
                                                        last-seq (assoc :last-seq last-seq)))
                              (ctx/notify-observer p/on-async-started (:workflow-id ctx) start-seq))]
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
                                     :timestamp  (utils/current-time-ms)})
            (ctx/notify-observer p/on-async-completed (:workflow-id ctx) start-seq result)
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
                                         :retry-policy  (:retry-policy suspension-info)})
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
  (let [ctx (ctx/current-context)
        handle-seq (:seq-num handle)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        completed (p/find-event store workflow-id :async-completed handle-seq)
        failed (p/find-event store workflow-id :async-failed handle-seq)]
    (cond
      completed
      (:result completed)

      ;; An infrastructure failure (interrupt / rejection) is NOT a resolution:
      ;; `async` has already re-enqueued the activity for this pass, so suspend
      ;; and let handle-suspension flush the batch. Throwing here instead would
      ;; durably fail the workflow for a routine worker stop (X6/E4/X4).
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
  (let [ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing (p/find-event store workflow-id :join-any-completed seq-num)]
    (if existing
      {:index (:index existing)
       :result (:result existing)}
      ;; Check if any are already complete
      (let [completed-idx (first
                            (keep-indexed
                               (fn [idx handle]
                                   (when (p/find-event store workflow-id :async-completed (:seq-num handle))
                                       idx))
                               handles))]
        (cond
          completed-idx
          (let [result (join (nth handles completed-idx))]
            (ctx/add-pending-event! {:event-type :join-any-completed
                                     :seq seq-num
                                     :index completed-idx
                                     :result result
                                     :timestamp (utils/current-time-ms)})
            {:index completed-idx :result result})

          ;; Every handle already failed *for real*: no completion can ever arrive,
          ;; so fail deterministically (recorded events, stable across replays)
          ;; instead of suspending forever. Handles whose failure is only an
          ;; interrupt/rejection don't count — `async` re-enqueued those, so a
          ;; completion is still coming.
          (every? (fn [h]
                    (let [failed (p/find-event store workflow-id :async-failed (:seq-num h))]
                      (and failed (not (runtime-failure? failed)))))
                  handles)
          (let [failed (p/find-event store workflow-id :async-failed (:seq-num (first handles)))]
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
        ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing (p/find-event store workflow-id :signal-received seq-num)]
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
        ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing (p/find-event store workflow-id :signal-wait-completed seq-num)]
    (if existing
      (if (:received existing)
        {:received true :payload (:payload existing)}
        {:received false})
      ;; Reuse the deadline from a prior :signal-wait-scheduled event if one was
      ;; already persisted for this seq (mirrors sleep's :timer-scheduled reuse).
      ;; Recomputing (now + timeout-ms) on every replay would push the deadline
      ;; later on each resume/re-drive — a crash-resumed (or worker-repolled, E1)
      ;; wait could then never reliably time out.
      (let [prior    (p/find-event store workflow-id :signal-wait-scheduled seq-num)
            deadline (or (:deadline prior) (+ (utils/current-time-ms) timeout-ms))]
        (when-not prior
          (ctx/add-pending-event! {:event-type :signal-wait-scheduled
                                   :seq seq-num
                                   :signal-name signal-name
                                   :deadline deadline
                                   :timestamp (utils/current-time-ms)}))
        (throw (error/make-suspension :wait-signal-timeout
                                      {:seq seq-num
                                       :signal-name signal-name
                                       :timeout-ms timeout-ms
                                       :deadline deadline}))))))

;; ================================================================
;; ============
;; Timers
;; ============================================================================

(defn sleep
  "Sleep for specified milliseconds"
  [ms]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing (p/find-event store workflow-id :timer-fired seq-num)]
    (if existing
      nil
      ;; Reuse the fire-at from a prior :timer-scheduled event if one was already
      ;; persisted for this seq. Recomputing (now + ms) on every replay would push
      ;; the deadline later on each resume (drift) and make a crash-resumed sleep
      ;; never reliably fire. The fire time must be deterministic across replays.
      (let [prior   (p/find-event store workflow-id :timer-scheduled seq-num)
            fire-at (or (:fire-at prior) (+ (utils/current-time-ms) ms))]
        (when-not prior
          (ctx/add-pending-event! {:event-type :timer-scheduled
                                   :seq seq-num
                                   :fire-at fire-at
                                   :duration-ms ms
                                   :timestamp (utils/current-time-ms)})
          (ctx/notify-observer p/on-timer-scheduled (:workflow-id ctx) seq-num fire-at))
        (throw (error/make-suspension :timer {:seq seq-num
                                              :fire-at fire-at}))))))
;; ============================================================================
;; Child Workflows
;; ============================================================================

(defn run-child-workflow
  "Synchronously run another workflow as a child workflow.
   The child workflow has its own history but is tracked by the parent."
  [child-workflow-fn args & {:keys [child-id]}]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        child-wf-id (or child-id (str (:workflow-id ctx) "/child-" seq-num))
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing (p/find-event store workflow-id :child-workflow-completed seq-num)
        existing-failed (p/find-event store workflow-id :child-workflow-failed seq-num)
        runtime-failed?  (runtime-failure? existing-failed)]
    (cond
      existing
      (:result existing)

      ;; Same rule as `stub` / `async` (X6): a child whose recorded failure is an
      ;; infrastructure condition is re-scheduled, not replayed as an outcome.
      (and existing-failed (not runtime-failed?))
      (throw (error/map->exception (:error existing-failed)))

      :else
      (let [scheduled-event {:event-type        :child-workflow-scheduled
                             :seq               seq-num
                             :child-workflow-id child-wf-id
                             :args              (vec args)
                             :timestamp         (utils/current-time-ms)}]
        (ctx/add-pending-event! scheduled-event)
        (ctx/notify-observer p/on-child-workflow-scheduled workflow-id seq-num child-wf-id (wreg/workflow-name child-workflow-fn) (vec args))
        (throw (error/make-suspension :child-workflow
                                      {:seq               seq-num
                                       :child-workflow-id child-wf-id
                                       :workflow-fn       child-workflow-fn
                                       :args              args}))))))

(def ^:private parent-close-policies #{:cascade-cancel :abandon :terminate})

(defn- schedule-independent-child!
  "Create a child as an independent, claimable workflow (Tier 2): seed its
   :workflow-started event (so the worker scan can resolve+run it by id and wake
   the parent on completion), record the parent->child link for close-policy
   enumeration, and persist the parent's :child-workflow-scheduled marker.
   Idempotent across parent replay/crash: guarded by the parent's scheduled
   marker and the child's existing history. Returns the child workflow id."
  [parent-id seq-num child-wf-id child-workflow-fn args policy]
  (let [store (ctx/current-store)]
    ;; If we already scheduled this child (replay), do nothing structural.
    (when-not (p/find-event store parent-id :child-workflow-scheduled seq-num)
      (let [fn-name (wreg/register-workflow! child-workflow-fn)]
        ;; Seed the child's own history once (crash-safe: parent may re-run this
        ;; if it died before flushing the scheduled marker).
        (when (empty? (p/load-history store child-wf-id))
          ;; If the parent has a live span (telemetry on), open the child's span
          ;; under it now and persist the child's traceparent, so the child's own
          ;; worker resumes nest under the parent trace. JVM only.
          (let [child-tc #?(:clj (when-let [parent-ctx (tracing/active-span parent-id)]
                                   (tracing/ctx->tracecontext
                                    (tracing/ensure-workflow-span! child-wf-id fn-name parent-ctx)))
                            :cljs nil)]
            (p/save-event store child-wf-id
                          (cond-> {:event-type       :workflow-started
                                   ;; A8: every event carries a real :seq. -1 is a
                                   ;; fixed sentinel below any op seq (which start
                                   ;; at 0), so :workflow-started always sorts
                                   ;; first (FDB) and never collides with the
                                   ;; deterministic terminal-event seq.
                                   :seq              -1
                                   :workflow-id      child-wf-id
                                   :workflow-fn-name fn-name
                                   :args             (vec args)
                                   ;; parent linkage, read by the child's finalizers to
                                   ;; write the parent's completion event and wake it.
                                   :parent-id        parent-id
                                   :parent-seq       seq-num
                                   :timestamp        (utils/current-time-ms)}
                            child-tc (assoc :tracecontext child-tc)))))
        (p/link-child! store parent-id seq-num child-wf-id policy)
        (ctx/add-pending-event! {:event-type        :child-workflow-scheduled
                                 :seq               seq-num
                                 :child-workflow-id child-wf-id
                                 :workflow-fn-name  fn-name
                                 :args              (vec args)
                                 :timestamp         (utils/current-time-ms)})
        (ctx/notify-observer p/on-child-workflow-scheduled parent-id seq-num child-wf-id fn-name (vec args))))
    child-wf-id))

(defn run-child-workflow-async
  "Start `child-workflow-fn` as an INDEPENDENT child workflow and return an
   AsyncHandle immediately — the parent continues running in parallel and can
   `join` the handle later to retrieve the child's result.

   Unlike the synchronous `run-child-workflow`, the child becomes a first-class
   persisted workflow with its own ownership claim and lifecycle, so it may itself
   suspend (signals/timers) without blocking the parent. The parent is re-resumed
   by the worker scan when the child terminates.

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
  (ctx/check-cancelled!)
  (assert (parent-close-policies parent-close-policy)
          (str "Invalid :parent-close-policy " parent-close-policy))
  (let [ctx         (ctx/current-context)
        seq-num     (ctx/next-seq!)
        parent-id   (:workflow-id ctx)
        child-wf-id (or child-id (str parent-id "/child-" seq-num))]
    (schedule-independent-child! parent-id seq-num child-wf-id
                                 child-workflow-fn args parent-close-policy)
    (->AsyncHandle seq-num)))

(defn run-child-workflow-detached
  "Fire-and-forget variant of `run-child-workflow-async`: schedule an independent
   child and return its workflow id without any joinable handle. For work that
   should outlive the parent, pass :parent-close-policy :abandon (the default here,
   like async, is :terminate — Temporal's default — which stops the child when the
   parent closes).

   Options: same as `run-child-workflow-async`."
  [child-workflow-fn args & {:keys [child-id parent-close-policy]
                             :or   {parent-close-policy :terminate}}]
  (ctx/check-cancelled!)
  (assert (parent-close-policies parent-close-policy)
          (str "Invalid :parent-close-policy " parent-close-policy))
  (let [ctx         (ctx/current-context)
        seq-num     (ctx/next-seq!)
        parent-id   (:workflow-id ctx)
        child-wf-id (or child-id (str parent-id "/child-" seq-num))]
    (schedule-independent-child! parent-id seq-num child-wf-id
                                 child-workflow-fn args parent-close-policy)
    child-wf-id))

;; ============================================================================
;; Public API
;; ============================================================================

(defn start-workflow
  "Start a workflow execution.

   Arguments:
   - engine: should have:
     - store: IStore implementation for persistence
     - executor: IActivityExecutor for running activities
     - scheduler: IScheduler for timers
     - registry: Activity registry atom
   - workflow-fn: The workflow function to execute
   - args: Arguments to pass to workflow-fn

   Options:
   - :workflow-id - Custom workflow ID (default: random UUID)
   - :observer - IWorkflowObserver for monitoring
   - :max-iterations - Maximum replay iterations (default: 1000)

   Returns the result map on JVM (blocking). Returns a js/Promise on ClojureScript."
  [engine workflow-fn args & opts]
  (apply sw/start-workflow engine workflow-fn args opts))


(def ^:private terminal-status? #{:completed :failed :cancelled :terminated})

(defn submit-workflow
  "Submit a workflow for execution BY A WORKER (start-worker) and return
   {:workflow-id id} immediately — does NOT run it on the caller. Registers the
   workflow fn and persists its :workflow-started event so the ownership scan picks
   it up; observe via get-workflow-status / await-workflow / get-workflow-result.

   Unlike start-workflow (which drives the workflow in a blocking loop on the
   caller), this is the correct entry point when a worker is running: running both
   start-workflow and a worker on the same id would double-drive it.

   Options: :workflow-id (default: random uuid)."
  [{:keys [store] :as engine} workflow-fn args & {:keys [workflow-id]}]
  (let [wid (or workflow-id (str (random-uuid)))
        workflow-name (wreg/register-workflow! workflow-fn)
        ;; Worker-driven workflows are only ever resumed (never start-workflow'd),
        ;; so open the root span here and keep it live in the registry: every
        ;; worker resume in this process reuses it (one span), and the terminal
        ;; resume ends it. Its traceparent is persisted so a resume in another
        ;; process links via :tracecontext (see resume-workflow). JVM only.
        tracecontext #?(:clj (when (:enable-telemetry engine)
                               (tracing/ctx->tracecontext
                                (tracing/ensure-workflow-span! wid workflow-name nil)))
                        :cljs nil)]
    (p/save-event store wid (cond-> {:event-type       :workflow-started
                                     :seq              -1 ;; A8: fixed sentinel, see schedule-independent-child!
                                     :workflow-id      wid
                                     :workflow-fn-name workflow-name
                                     :args             (vec args)
                                     :timestamp        (utils/current-time-ms)}
                              tracecontext (assoc :tracecontext tracecontext)))
    ;; submit IS the start of a worker-driven workflow (the worker only ever
    ;; resumes), so observe the start here — once — to create its root span.
    (when-let [observer (get engine :observer)]
      (p/on-workflow-started observer wid workflow-name (vec args)))
    {:workflow-id wid}))

(defn- terminal-result
  "Status + result map for a (presumed terminal) workflow. :result is nil unless
   the workflow completed."
  [store workflow-id]
  {:status (p/get-workflow-status store workflow-id)
   :result (->> (p/load-history store workflow-id)
                (filter #(= :workflow-completed (:event-type %)))
                first
                :result)})

(defn await-workflow
  "Wait until the workflow reaches a terminal state (:completed, :failed,
   :cancelled, :terminated) and return {:status … :result …} (:result is nil for
   non-completed terminals), or {:status :timeout} if the deadline elapses first.
   A briefly :not-found id (still starting) is tolerated.

   On the JVM this BLOCKS and returns the map; on ClojureScript it returns a
   promesa promise of the map. A worker (or other driver) must be progressing the
   workflow. Options: :poll-ms (default 50), :timeout-ms (default 30000)."
  [{:keys [store]} workflow-id & {:keys [poll-ms timeout-ms]
                                  :or   {poll-ms 50 timeout-ms 30000}}]
  #?(:clj
     (let [deadline (+ (System/currentTimeMillis) timeout-ms)]
       (loop []
         (let [st (p/get-workflow-status store workflow-id)]
           (cond
             (terminal-status? st)                   (terminal-result store workflow-id)
             (> (System/currentTimeMillis) deadline) {:status :timeout :workflow-id workflow-id}
             :else (do (Thread/sleep (long poll-ms)) (recur))))))
     :cljs
     (let [deadline (+ (js/Date.now) timeout-ms)]
       (letfn [(step []
                 (let [st (p/get-workflow-status store workflow-id)]
                   (cond
                     (terminal-status? st)      (prom/resolved (terminal-result store workflow-id))
                     (> (js/Date.now) deadline) (prom/resolved {:status :timeout :workflow-id workflow-id})
                     :else (prom/then (prom/delay poll-ms) (fn [_] (step))))))]
         (step)))))

(defn resume-workflow
  "Resume a waiting workflow (e.g., after signal delivery or timer).

   1-arity: (resume-workflow engine workflow-id)
     Resolves the workflow function and original args from the :workflow-started event
     stored in history. Requires the workflow fn to have been registered in this process
     via start-workflow (or manually via the workflow registry). Throws if not found.

   4-arity: (resume-workflow engine workflow-id workflow-fn args & opts)
     Resumes with explicitly supplied function and args. The workflow replays its history
     to reconstruct state, skipping already-completed activities.

   Options (4-arity):
   - :observer        IWorkflowObserver for monitoring/tracing
   - :max-iterations  Maximum replay loop iterations before aborting (default: 1000)"
  ([{:keys [store] :as engine} workflow-id]
   ;; Resolve fn + args from the :workflow-started event via the workflow
   ;; registry (improvements.md §B3). Requires the workflow fn to have been
   ;; registered in this process (start-workflow does so automatically; a
   ;; restarted/other process must register its workflow vars at startup).
   (let [history (p/load-history store workflow-id)
         started (first (filter #(= :workflow-started (:event-type %)) history))]
     (when-not started
       ;; :error/type lets the recovery worker classify this as permanently
       ;; unresumable-by-id (e.g. a legacy sync-child history) and skip it.
       (throw (ex-info "Cannot resume: no :workflow-started event in history"
                       {:error/type  ::no-started-event
                        :workflow-id workflow-id})))
     ;; resolve-workflow throws a descriptive ex-info ({:error/type ::wreg/not-
     ;; registered}) if the fn is not registered in this process. IMPORTANT: an
     ;; unresolvable workflow is NOT terminated here — this process may simply be
     ;; missing a registration another pod has (or that arrives later), and
     ;; destroying the workflow for that would be unrecoverable. Callers (the
     ;; recovery worker) classify the exception via wreg/not-registered? and skip
     ;; the workflow until its fn is registered.
     (let [wf-name (:workflow-fn-name started)
           wf-fn   (wreg/resolve-workflow wf-name)]
       (log/infof "Resuming workflow %s" workflow-id)
       (resume-workflow engine workflow-id wf-fn (vec (:args started))))))
  ([{:keys [store executor scheduler registry] :as engine} workflow-id workflow-fn args
    & {:keys [observer max-iterations]
       :or {max-iterations 1000}}]
   ;; Worker-driven workflows resume via the 1-arity, which passes no :observer;
   ;; fall back to the engine's so worker drives still emit telemetry.
   (let [observer (or observer (get engine :observer))]
     (when observer
       (p/on-workflow-resumed observer workflow-id))
     (let [run #(exec/run-workflow-internal engine workflow-id workflow-fn args
                                            {:observer observer
                                             :max-iterations max-iterations})]
       #?(:clj
          ;; Reuse this workflow's live span across resumes so it stays a single
          ;; span. Registry miss = cold/cross-process resume: rehydrate the parent
          ;; from the persisted :tracecontext and open one linked span. The span is
          ;; ended by the terminal finalizer (finalize-*/enforce-close-policies!),
          ;; not here, so a resume that just re-suspends keeps it open; the catch is
          ;; only a safety net for an unexpected throw.
          (if-let [span-ctx (and (:enable-telemetry engine)
                                 (or (tracing/active-span workflow-id)
                                     (let [started (->> (p/load-history store workflow-id)
                                                        (filter #(= :workflow-started (:event-type %)))
                                                        first)]
                                       (tracing/ensure-workflow-span!
                                        workflow-id
                                        (:workflow-fn-name started)
                                        (tracing/tracecontext->ctx (:tracecontext started))))))]
            (try
              (octx/with-context! span-ctx (run))
              (catch Throwable e
                (tracing/finish-workflow-span! workflow-id e)
                (throw e)))
            (run))
          :cljs
          (run))))))

#?(:clj
   (defn start-worker
     "Start a background recovery worker (Phase C, ownership model). Each poll it
      lists the non-terminal workflows this owner may run — its own plus any
      unowned (`owner = owner-id OR owner IS NULL`) — claims each by stamping
      ownership, and resumes it by id. This is the cross-pod wake AND the crash
      recovery: the first poll re-picks this owner's orphaned workflows, and a
      later poll re-resumes a signalled/cancelled one (replay consumes the
      signal / observes the cancellation). Workflows are resumed sequentially on
      the poll thread, so neither cross-pod nor intra-pod double-execution occurs.

      Use a STABLE owner-id per pod (e.g. StatefulSet ordinal / config) so a
      crashed pod reclaims its own work on restart. Returns a 0-arg stop fn that
      releases this owner's workflows (so other pods can pick them up).

      The worker resumes via resume-workflow [engine workflow-id], so the workflow
      function must be registered in this process (start-workflow registers it
      automatically; a fresh process must register its workflow vars at startup).

      Options:
        :owner-id    stable id for this worker (default: random uuid)
        :poll-ms     poll interval (default 500)
        :batch-size  max workflows scanned per poll (default 100)"
     [{:keys [store] :as engine}
      & {:keys [owner-id poll-ms batch-size]
         :or   {owner-id (str (random-uuid)) poll-ms 500 batch-size 100}}]
     (let [running (atom true)
           ;; Workflows this process cannot resume: wf-id -> workflow-fn-name
           ;; (or nil when the history has no :workflow-started event). They are
           ;; skipped — NOT terminated (another pod, or a later registration in
           ;; this one, may still run them) — and retried automatically once
           ;; their fn shows up in the registry.
           unresumable (atom {})
           skip?
           (fn [wf-id]
             (let [[known? wf-name] (find @unresumable wf-id)]
               (if-not known?
                 false
                 (if (and wf-name (wreg/registered? wf-name))
                   (do (swap! unresumable dissoc wf-id) false)  ; fn arrived: retry
                   true))))
           process-one
           (fn [wf-id]
             (when (and (not (skip? wf-id))
                        (p/claim-owner store wf-id owner-id))
               (try
                 (resume-workflow engine wf-id)
                 (catch Throwable t
                   (let [etype (:error/type (ex-data t))]
                     (if (or (wreg/not-registered? t) (= ::no-started-event etype))
                       (do
                         (swap! unresumable assoc wf-id (:workflow-name (ex-data t)))
                         (log/warnf "Worker %s: workflow %s is not resumable here (%s); skipping until its fn is registered"
                                    owner-id wf-id (ex-message t)))
                       (log/warnf t "Worker %s failed resuming %s" owner-id wf-id)))))))
           ;; Exponential backoff on consecutive poll failures so a downed
           ;; database doesn't get hammered (and the logs flooded). Resets to
           ;; poll-ms after any successful list-pending query.
           max-backoff-ms (* poll-ms 60)
           backoff-ms     (atom (long poll-ms))
           thread
           (Thread.
             ^Runnable
             (fn []
               (while @running
                 (try
                   (let [ids (p/list-pending store owner-id batch-size)]
                     (reset! backoff-ms (long poll-ms))   ; healthy query: reset backoff
                     (if (seq ids)
                       (doseq [wf-id ids :while @running]
                         (process-one wf-id))
                       (Thread/sleep (long poll-ms))))
                   (catch InterruptedException _ (reset! running false))
                   (catch Throwable t
                     (let [wait @backoff-ms]
                       (log/warnf t "Worker %s loop error; backing off %dms" owner-id wait)
                       (Thread/sleep wait)
                       (swap! backoff-ms #(min max-backoff-ms (* 2 %)))))))))]
       (doto thread
         (.setDaemon true)
         (.setName (str "intemporal-worker-" owner-id))
         (.start))
       (fn stop-worker []
         (reset! running false)
         ;; Graceful first: let the loop observe @running=false on its own — the
         ;; poll sleep is at most poll-ms and an in-flight resume must be allowed
         ;; to COMPLETE. Interrupting immediately (as before) could abort a store
         ;; write mid-persist AFTER side effects ran (e.g. an activity executed
         ;; but its :activity-completed never saved), forcing a re-execution on
         ;; the next resume. Interrupt only as a last resort for a stuck resume;
         ;; the drive loop treats interrupt-driven errors as suspensions (#7).
         (.join thread (long (+ poll-ms 5000)))
         (when (.isAlive thread)
           (.interrupt thread)
           (.join thread (long poll-ms)))
         (p/release-owner store owner-id)))))

#?(:cljs
   (defn start-worker
     "ClojureScript recovery worker — the ownership-scan drive that runs
      independent child workflows in a single-process CLJS runtime (there is no
      thread pool). Each tick scans list-pending and resumes every due, claimed
      workflow sequentially through the promise chain; JS is single-threaded so
      no intra-pod double-execution occurs. The next tick is scheduled only after
      the current batch settles. Returns a 0-arg stop fn that halts polling and
      releases this owner's workflows.

      Resumes via resume-workflow [engine workflow-id], so the workflow function
      must be registered in this process (start-workflow registers it
      automatically; otherwise register the workflow vars at startup).

      Options:
        :owner-id    stable id for this worker (default: random uuid)
        :poll-ms     poll interval (default 50)
        :batch-size  max workflows scanned per poll (default 100)"
     [{:keys [store] :as engine}
      & {:keys [owner-id poll-ms batch-size]
         :or   {owner-id (str (random-uuid)) poll-ms 50 batch-size 100}}]
     (let [running     (atom true)
           timer       (atom nil)
           ;; Workflows this process cannot resume: wf-id -> workflow-fn-name (or
           ;; nil when the history has no :workflow-started event). Skipped — NOT
           ;; terminated — and retried once their fn shows up in the registry.
           unresumable (atom {})
           skip?       (fn [wf-id]
                         (let [[known? wf-name] (find @unresumable wf-id)]
                           (if-not known?
                             false
                             (if (and wf-name (wreg/registered? wf-name))
                               (do (swap! unresumable dissoc wf-id) false)
                               true))))
           on-fail     (fn [wf-id e]
                         (if (or (wreg/not-registered? e)
                                 (= ::no-started-event (:error/type (ex-data e))))
                           (do
                             (swap! unresumable assoc wf-id (:workflow-name (ex-data e)))
                             (log/warnf "Worker %s: workflow %s is not resumable here (%s); skipping until its fn is registered"
                                        owner-id wf-id (ex-message e)))
                           (log/warnf "Worker %s failed resuming %s: %s" owner-id wf-id e)))
           process-one (fn [wf-id]
                         ;; resume-workflow can throw synchronously (e.g. fn not
                         ;; registered) or reject async; swallow both so one bad
                         ;; workflow never stalls the scan.
                         (try
                           (-> (resume-workflow engine wf-id)
                               (prom/catch (fn [e]
                                             (on-fail wf-id e)
                                             nil)))
                           (catch :default e
                             (on-fail wf-id e)
                             (prom/resolved nil))))]
       (letfn [(schedule-next []
                 (when @running
                   (reset! timer (js/setTimeout tick poll-ms))))
               (tick []
                 (when @running
                   (try
                     (let [ids (p/list-pending store owner-id batch-size)]
                       (-> (reduce (fn [pchain wf-id]
                                     (prom/then pchain
                                                (fn [_]
                                                  (if (and @running
                                                           (not (skip? wf-id))
                                                           (p/claim-owner store wf-id owner-id))
                                                    (process-one wf-id)
                                                    (prom/resolved nil)))))
                                   (prom/resolved nil)
                                   ids)
                           (prom/then    (fn [_] (schedule-next)))
                           (prom/catch   (fn [_] (schedule-next)))))
                     (catch :default e
                       (log/warnf "Worker %s loop error: %s" owner-id e)
                       (schedule-next)))))]
         (reset! timer (js/setTimeout tick 0))
         (fn stop-worker []
           (reset! running false)
           (when-let [t @timer] (js/clearTimeout t))
           (p/release-owner store owner-id))))))

(defn send-signal
  "Send a signal to a workflow.

   Arguments:
   - store: IStore implementation
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
        (p/add-signal store workflow-id signal-name {:id id :payload payload})
        (log/debugf "Adding signal %s" signal-name))
      {:signal-id id})))

(defn cancel-workflow
  "Cancel a running workflow.
   The workflow is cancelled at the next suspension point. If it is currently
   suspended (e.g. waiting on a signal), wake-workflow forces it to re-enter its
   loop so it observes the cancellation flag rather than waiting forever.

   Applies each child's :parent-close-policy via `enforce-close-policies!` — done
   here, not only in the parent's finalizer, because under the worker/ownership-scan
   model a cancelled workflow is excluded from list-pending and so never re-runs to
   execute its finalizer; the policy must be applied at cancel time."
  [store workflow-id]
  (log/with-mdc {:workflow-id workflow-id}
    (let [status (p/get-workflow-status store workflow-id)]
      (if (terminal-status? status)
        (log/debugf "Cancelling workflow that is already in terminal state %s, skipping" status)
        (do
          (p/mark-cancelled store workflow-id)
          ;; Make the workflow immediately due for the ownership scan (it may be
          ;; sleeping with a future wake-at): a worker must re-drive it so the
          ;; body observes the cancel flag, runs any saga compensation, and the
          ;; terminal :workflow-cancelled event is written.
          (p/set-wake-at store workflow-id nil)
          (p/wake-workflow store workflow-id)
          (log/debugf "Cancelling workflow")
          (exec/enforce-close-policies! store workflow-id)))))
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
   qualified name at load time, so it can be resumed by id (by the recovery worker
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
      (ctx/notify-observer p/on-compensation-started (ctx/current-workflow-id)))
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
            (ctx/notify-observer p/on-compensation-failed
                                 (ctx/current-workflow-id) (error/throwable->map t))
            (log/warnf "Compensation failed, continuing: %s" (ex-message t)))))
      (finally
        (ctx/set-compensating! false)))
    (when (seq comps)
      (ctx/notify-observer p/on-compensation-completed (ctx/current-workflow-id)))))

;; ============================================================================
;; Convenience Functions
;; ============================================================================

(def ^:const default-scheduler-threads   2)
(def ^:const default-activity-timeout-ms 30000)

(defn make-workflow-engine
  "Create a complete workflow engine with all components.
   Returns a map with :store, :executor, :scheduler, :registry, and :observer.

   Options:
   - :store - instance of protocols/IStore
   - :threads - Cap on concurrently executing activities (default: unbounded,
     i.e. one virtual thread per activity). When set, a saturated executor
     applies backpressure: submits wait for a slot rather than running the
     activity on the drive thread. Only a closing executor (or a wait longer
     than :default-timeout-ms) rejects, and rejected activities are rescheduled
     on a later pass. Ignored in ClojureScript.
   - :queue-capacity - Wait-queue depth when :threads is set (default: 8x :threads)
   - :scheduler-threads - Number of scheduler threads (default: 2)
   - :default-timeout-ms - Default activity timeout (default: 30000)
   - :enable-logging - Enable logging observer (default: true)
   - :enable-telemetry - Enable OpenTelemetry tracing (default: true, JVM only)
   - :observer - Additional observer instance, composed on top of built-in observers"
  [& {:keys [store threads queue-capacity scheduler-threads default-timeout-ms enable-logging enable-telemetry observer]
      :or {store (store/create-store)
           scheduler-threads   default-scheduler-threads
           default-timeout-ms  default-activity-timeout-ms
           enable-logging true
           enable-telemetry true}}]
  (let [registry (a/make-registry)
        log-atom (when enable-logging (atom []))
        logging-observer (when enable-logging (obs/make-logging-observer log-atom))
        composite-observer (obs/make-composite-observer [logging-observer observer])]
    {:store store
     ;; E7: this used to pass :threads, which make-vthreads-executor does not
     ;; destructure — the bound was silently dropped and every engine ran an
     ;; unbounded executor. Pass the name the executor actually reads.
     :executor (runtime/make-vthreads-executor registry
                                       :max-concurrent threads
                                       :queue-capacity queue-capacity
                                       :default-timeout-ms default-timeout-ms)
     :scheduler (runtime/make-scheduler :threads scheduler-threads)
     :registry registry
     :observer composite-observer
     ;; OpenTelemetry tracing is wired at execution boundaries (start-workflow,
     ;; resume-workflow, process-child-workflow, runtime activity/timer submit)
     ;; rather than via an observer; this flag gates it. JVM only.
     :enable-telemetry #?(:clj enable-telemetry :cljs false)
     :log (when enable-logging log-atom)}))

(defn shutdown-engine
  "Shutdown all components of a workflow engine"
  ([{:keys [executor scheduler] :as engine}]
   (shutdown-engine engine 0))
  ([{:keys [executor scheduler]} grace-period-secs]
   (log/infof "Shutting down engine")
   (p/shutdown-executor executor grace-period-secs)
   (p/shutdown-scheduler scheduler grace-period-secs)))

(defmacro with-workflow-engine
  "Execute body with a workflow engine, ensuring cleanup.

   Usage:
   (with-workflow-engine [engine {:threads 4}]
     (start-workflow (:store engine) ...))"
  [[binding opts] & body]
  (macros/case
    :clj
    `(let [~binding (make-workflow-engine ~@(mapcat identity opts))]
       (try
         ~@body
         (finally
           (shutdown-engine ~binding))))
    :cljs
    ;; In CLJS, try/finally is synchronous so shutdown-engine fires before the
    ;; async body resolves, cancelling pending timers/activities.
    ;; Returns a promise with shutdown chained via p/finally.
    ;; with-result owns the t/async boundary and chains done# after assertions.
    `(let [~binding (make-workflow-engine ~@(mapcat identity opts))]
       (-> (do ~@body)
           (promesa.core/finally
             (fn []
               (shutdown-engine ~binding)))))))
