(ns intemporal.internal.fns.start-workflow
  (:require [intemporal.internal.execution :as exec]
            [intemporal.internal.logging :as log]
            [intemporal.protocol :as p]
            [intemporal.utils :as utils]))

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
   - :max-iterations - Maximum replay iterations (default: 1000)"
  [{:keys [store executor scheduler registry] :as engine} workflow-fn args
   & {:keys [workflow-id observer max-iterations]
      :or {max-iterations 1000}}]
  (let [wf-id (or workflow-id (str (random-uuid)))
        resume-promise-atom (atom nil)
        observer (or observer (get engine :observer))
        wake-fn (fn wake-fn-impl []
                  (log/with-mdc {:workflow-id wf-id}
                    (try
                      (when observer
                        (p/on-workflow-resumed observer wf-id))
                      (log/debugf "Waking workflow for resume")
                      (let [old-promise @resume-promise-atom
                            new-promise (promise)
                            result (exec/run-workflow-internal engine wf-id workflow-fn args
                                                         {:observer observer
                                                          :max-iterations max-iterations
                                                          :wake-fn wake-fn-impl})]
                        (reset! resume-promise-atom new-promise)
                        (deliver old-promise result))
                      (catch Exception e
                        (when-let [p @resume-promise-atom]
                          (deliver p {:status :failed :error e}))))))]

    (log/with-mdc {:workflow-id wf-id}
      ;; Initialize with first promise
      (reset! resume-promise-atom (promise))
      (p/save-event store wf-id {:event-type :workflow-started
                                 :workflow-id wf-id
                                 :args (vec args)
                                 :timestamp (utils/current-time-ms)})
      (when observer
        (p/on-workflow-started observer wf-id args))
      (log/info "Workflow started")
      (try
        ;; Execute initial workflow run
        (let [initial-result (exec/run-workflow-internal engine wf-id workflow-fn args
                                                   {:observer observer
                                                    :max-iterations max-iterations
                                                    :wake-fn wake-fn})]
          ;; Loop to handle multiple wait cycles
          (loop [result initial-result]
            (log/infof "Got result %s with status %s" (:result initial-result) (:status initial-result))
            (if (#{:waiting-timer :waiting-signal :waiting-signal-timeout :waiting-async} (:status result))
              (do
                (log/infof "Workflow waiting for promise: %s" (:status result))
                (let [next-promise @resume-promise-atom
                      next-result  @next-promise]
                  (recur next-result)))
              result)))
        (catch Exception e
          (log/warnf e "Caught exception")
          (throw e))))))
