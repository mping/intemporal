(ns intemporal.internal.fns.start-workflow
  (:require [intemporal.internal.execution :as exec]
            [intemporal.internal.logging :as log]
            [intemporal.protocol :as p]
            [intemporal.utils :as utils]
            [promesa.core :as prom])
  (:require-macros [intemporal.internal.logging :as log]))

(defn- waiting-status? [result]
  (#{:waiting-timer :waiting-signal :waiting-signal-timeout :waiting-async}
   (:status result)))

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
    (p/save-event store wf-id {:event-type :workflow-started
                               :workflow-id wf-id
                               :args        (vec args)
                               :timestamp   (utils/current-time-ms)})
    (when observer
      (p/on-workflow-started observer wf-id args))
    (log/info "Workflow started")
    (let [d (prom/deferred)]
      (letfn [(run-step []
                (-> (exec/run-workflow-internal engine wf-id workflow-fn args
                      {:observer       observer
                       :max-iterations max-iterations
                       :wake-fn        run-step})
                    (prom/then (fn [result]
                                 (when-not (waiting-status? result)
                                   (prom/resolve! d result))))
                    (prom/catch js/Error
                      (fn [e]
                        (prom/reject! d e)))))]
        (run-step)
        d))))


(defn start-workflow-async
  "Start a workflow execution without blocking.
   CLJS-compatible: returns immediately after the first execution step.

   When the workflow eventually completes (possibly after multiple
   timer/signal wake cycles), calls on-complete with the result map.

   Arguments:
   - engine: same as start-workflow
   - workflow-fn: The workflow function to execute
   - args: Arguments to pass to workflow-fn

   Options (same as start-workflow, plus):
   - :workflow-id - Custom workflow ID (default: random UUID)
   - :observer - IWorkflowObserver for monitoring
   - :max-iterations - Maximum replay iterations (default: 1000)
   - :on-complete - fn of one arg [result], called when workflow finishes.
                    If nil, result is silently discarded on completion.

   Returns the initial execution result (may be :waiting-* if suspended)."
  [{:keys [store] :as engine} workflow-fn args
   & {:keys [workflow-id observer max-iterations on-complete]
      :or   {max-iterations 1000}}]
  (let [wf-id    (or workflow-id (str (random-uuid)))
        observer (or observer (get engine :observer))
        wake-fn  (fn wake-fn-impl []
                   (log/with-mdc {:workflow-id wf-id}
                     (when observer (p/on-workflow-resumed observer wf-id))
                     (log/debugf "Waking workflow for resume")
                     (-> (exec/run-workflow-internal engine wf-id workflow-fn args
                                                     {:observer       observer
                                                      :max-iterations max-iterations
                                                      :wake-fn        wake-fn-impl})
                         (prom/then (fn [result]
                                      (when (and on-complete (not (waiting-status? result)))
                                        (on-complete result))))
                         (prom/catch js/Error
                           (fn [e]
                             (when on-complete
                               (on-complete {:status :failed :error e})))))))]
    (log/with-mdc {:workflow-id wf-id}
      (p/save-event store wf-id {:event-type  :workflow-started
                                 :workflow-id wf-id
                                 :args        (vec args)
                                 :timestamp   (utils/current-time-ms)})
      (when observer (p/on-workflow-started observer wf-id args))
      (log/info "Workflow started (async)")
      (-> (exec/run-workflow-internal engine wf-id workflow-fn args
                                      {:observer       observer
                                       :max-iterations max-iterations
                                       :wake-fn        wake-fn})
          (prom/then (fn [result]
                       (when (and on-complete (not (waiting-status? result)))
                         (on-complete result))
                       result))
          (prom/catch js/Error
            (fn [e]
              (log/warnf e "Caught exception during async workflow start")
              (let [err-result {:status :failed :error e}]
                (when on-complete (on-complete err-result))
                (prom/rejected e))))))))
