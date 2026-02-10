(ns intemporal.internal.fns.start-workflow
  (:require [intemporal.internal.execution :as exec]
            [intemporal.internal.logging :as log]
            [intemporal.protocol :as p]
            [intemporal.utils :as utils])
  (:require-macros [intemporal.internal.logging :as log]))

(defn start-workflow
  "Start a workflow execution. Returns a js/Promise that resolves with the result map.

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
  [{:keys [store] :as engine} workflow-fn args
   & {:keys [workflow-id observer max-iterations]
      :or {max-iterations 1000}}]
  (let [wf-id    (or workflow-id (str (random-uuid)))
        observer (or observer (get engine :observer))]
    (js/Promise.
      (fn [resolve reject]
        (letfn [(run-step []
                  (try
                    (let [result (exec/run-workflow-internal engine wf-id workflow-fn args
                                   {:observer        observer
                                    :max-iterations  max-iterations
                                    :wake-fn         run-step})]
                      (when-not (#{:waiting-timer :waiting-signal
                                   :waiting-signal-timeout :waiting-async}
                                  (:status result))
                        (resolve result)))
                    (catch js/Error e
                      (reject e))))]
          (p/save-event store wf-id {:event-type :workflow-started
                                     :workflow-id wf-id
                                     :args        (vec args)
                                     :timestamp   (utils/current-time-ms)})
          (when observer
            (p/on-workflow-started observer wf-id args))
          (log/info "Workflow started")
          (run-step))))))
