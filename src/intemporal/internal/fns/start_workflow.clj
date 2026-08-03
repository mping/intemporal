(ns intemporal.internal.fns.start-workflow
  (:require [intemporal.internal.execution :as exec]
            [intemporal.internal.logging :as log]
            [intemporal.internal.activity :as a]
            [intemporal.internal.workflow-registry :as wreg]
            [intemporal.protocol :as p]
            [intemporal.tracing :as tracing]
            [intemporal.utils :as utils]
            [steffan-westcott.clj-otel.context :as octx])
  (:import [java.util.concurrent LinkedBlockingQueue]))

(def ^:private waiting-statuses
  #{:waiting-timer :waiting-signal :waiting-signal-timeout :waiting-async})

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
   - :protocols - Map of {Protocol Implementation} to register activities"
  [{:keys [store executor scheduler registry] :as engine} workflow-fn args
   & {:keys [workflow-id observer max-iterations protocols]
      :or {max-iterations 1000}}]
  (doseq [[proto impl] protocols]
    (a/register-protocol-activities! registry proto impl))
  (let [wf-id    (or workflow-id (str (random-uuid)))
        workflow-fn-name (wreg/register-workflow! workflow-fn)
        observer (or observer (get engine :observer))
        ;; Wake channel. wake-fn (invoked from store signal/timer callbacks and
        ;; from cancel-workflow via wake-workflow) only enqueues a token — it
        ;; never runs execution itself. All run-workflow-internal calls happen
        ;; on THIS thread, in the loop below. This:
        ;;  (a) makes the wake edge-safe: a wake that fires while the workflow
        ;;      is still suspending sits in the queue and is observed by the
        ;;      next take, instead of racing a resume-promise handshake; and
        ;;  (b) prevents two threads from executing the same workflow at once.
        wake-q   (LinkedBlockingQueue.)
        run-once (fn []
                   (exec/run-workflow-internal engine wf-id workflow-fn args
                                               {:observer       observer
                                                :max-iterations max-iterations
                                                :wake-fn        (fn wake-fn []
                                                                  (when observer
                                                                    (p/on-workflow-resumed observer wf-id))
                                                                  (.offer wake-q :wake))}))]
    ;; Record the workflow function under its stable name so the workflow can be
    ;; resumed later by id alone (resume-workflow [engine wf-id]); the name is
    ;; stored in the :workflow-started event below. (improvements.md §B3)
    (log/with-mdc {:workflow-id wf-id}
      ;; Root workflow span (JVM only). Created before save-event so its W3C
      ;; traceparent is persisted on the :workflow-started event; the whole wake-q
      ;; loop runs with it current so all nested spans parent under it. Registered
      ;; in the live-span registry (keyed by wf-id) and ended at the terminal
      ;; result so it represents the workflow as a single span.
      (let [span-ctx     (when (:enable-telemetry engine)
                           (tracing/ensure-workflow-span! wf-id workflow-fn-name nil))
            tracecontext (when span-ctx (tracing/ctx->tracecontext span-ctx))
            run-loop     (fn []
                           (try
                             (loop [result (run-once)]
                               (log/infof "Got result %s with status %s" (:result result) (:status result))
                               (if (waiting-statuses (:status result))
                                 (do
                                   (log/infof "Workflow waiting: %s" (:status result))
                                   ;; Block until woken. A token enqueued before this take (signal
                                   ;; arrived during suspension setup) returns immediately — no edge
                                   ;; is lost. Drain any extra tokens so one re-run covers coalesced
                                   ;; wakes; a wake arriving during the re-run queues for next take.
                                   (.take wake-q)
                                   (.clear wake-q)
                                   (recur (run-once)))
                                 result))
                             (catch Exception e
                               (log/warnf e "Caught exception")
                               (throw e))))]
        (p/save-event store wf-id (cond-> {:event-type :workflow-started
                                           :seq -1 ;; A8: fixed sentinel below every op seq
                                           :workflow-id wf-id
                                           :workflow-fn-name workflow-fn-name
                                           :args (vec args)
                                           :timestamp (utils/current-time-ms)}
                                    tracecontext (assoc :tracecontext tracecontext)))
        (when observer
          (p/on-workflow-started observer wf-id workflow-fn-name args))
        (log/info "Workflow started")
        ;; The span is ended by the terminal finalizer (finalize-* runs inside the
        ;; loop); the catch is only a safety net for an unexpected throw.
        (if span-ctx
          (try
            (octx/with-context! span-ctx (run-loop))
            (catch Throwable e
              (tracing/finish-workflow-span! wf-id e)
              (throw e)))
          (run-loop))))))
