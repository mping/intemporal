(ns intemporal.internal.fns.start-workflow
  (:require [intemporal.internal.execution :as exec]
            [intemporal.internal.logging :as log]
            [intemporal.internal.activity :as a]
            [intemporal.internal.workflow-registry :as wreg]
            [intemporal.protocol :as p]
            [intemporal.utils :as utils])
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
    (let [wf-name (wreg/register-workflow! workflow-fn)]
     (log/with-mdc {:workflow-id wf-id}
      (p/save-event store wf-id {:event-type :workflow-started
                                 :workflow-id wf-id
                                 :workflow-fn-name wf-name
                                 :args (vec args)
                                 :timestamp (utils/current-time-ms)})
      (when observer
        (p/on-workflow-started observer wf-id args))
      (log/info "Workflow started")
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
          (throw e)))))))
