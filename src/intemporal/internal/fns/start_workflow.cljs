(ns intemporal.internal.fns.start-workflow
  (:require [intemporal.internal.execution :as exec]
            [intemporal.internal.logging :as log]
            [intemporal.internal.workflow-registry :as wreg]
            [intemporal.protocol :as p]
            [intemporal.utils :as utils]
            [promesa.core :as prom])
  (:require-macros [intemporal.internal.logging :as log]
                   [intemporal.internal.context :refer [bthen]]))

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
   & {:keys [workflow-id observer max-iterations protocols]
      :or   {max-iterations 1000}}]
  (let [engine           (cond-> engine
                                         protocols (assoc :protocols protocols))
        wf-id            (or workflow-id (str (random-uuid)))
        workflow-fn-name (wreg/register-workflow! workflow-fn)
        observer         (or observer (get engine :observer))]
    (p/save-event store wf-id {:event-type       :workflow-started
                               :seq              -1 ;; A8: fixed sentinel below every op seq
                               :workflow-id      wf-id
                               :workflow-fn-name workflow-fn-name
                               :args             (vec args)
                               :timestamp        (utils/current-time-ms)})
    (when observer
      (p/on-workflow-started observer wf-id workflow-fn-name args))
    (log/info "Workflow started")
    (let [d (prom/deferred)
          ;; Serialize execution (mirrors the JVM wake-q): a wake that arrives
          ;; while a drive is in flight must NOT start a second, interleaved
          ;; run-workflow-internal chain for the same workflow (which could
          ;; re-execute activities). It just flags pending-wake; the in-flight
          ;; drive re-runs once when it settles. JS is single-threaded, so the
          ;; flag checks/sets below never race.
          running?      (atom false)
          pending-wake? (atom false)]
      (letfn [(run-step []
                (if @running?
                  (reset! pending-wake? true)
                  (do
                    (reset! running? true)
                    (-> (exec/run-workflow-internal engine wf-id workflow-fn args
                                                    {:observer       observer
                                                     :max-iterations max-iterations
                                                     :wake-fn        run-step})
                        (bthen (fn [result]
                                 (reset! running? false)
                                 (cond
                                   (not (waiting-status? result))
                                   (prom/resolve! d result)

                                   ;; A wake arrived during this drive: coalesce
                                   ;; into one re-run.
                                   @pending-wake?
                                   (do (reset! pending-wake? false)
                                       (run-step)))))
                        (prom/catch
                          (fn [e]
                            (reset! running? false)
                            (prom/reject! d e)))))))]
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
   & {:keys [workflow-id observer max-iterations on-complete protocols]
      :or   {max-iterations 1000}}]
  (let [engine   (cond-> engine
                         protocols (assoc :protocols protocols))
        wf-id    (or workflow-id (str (random-uuid)))
        workflow-fn-name (wreg/register-workflow! workflow-fn)
        observer (or observer (get engine :observer))
        ;; Serialize wakes (see start-workflow): never two in-flight drives for
        ;; the same workflow; a wake during a drive coalesces into one re-run.
        running?      (atom false)
        pending-wake? (atom false)
        wake-fn  (fn wake-fn-impl []
                   (if @running?
                     (reset! pending-wake? true)
                     (log/with-mdc {:workflow-id wf-id}
                       (when observer (p/on-workflow-resumed observer wf-id))
                       (log/debugf "Waking workflow for resume")
                       (reset! running? true)
                       (-> (exec/run-workflow-internal engine wf-id workflow-fn args
                                                       {:observer       observer
                                                        :max-iterations max-iterations
                                                        :wake-fn        wake-fn-impl})
                           (bthen (fn [result]
                                    (reset! running? false)
                                    (cond
                                      (not (waiting-status? result))
                                      (when on-complete (on-complete result))

                                      @pending-wake?
                                      (do (reset! pending-wake? false)
                                          (wake-fn-impl)))))
                           (prom/catch js/Error
                             (fn [e]
                               (reset! running? false)
                               (when on-complete
                                 (on-complete {:status :failed :error e}))))))))]
    (log/with-mdc {:workflow-id wf-id}
      (p/save-event store wf-id {:event-type       :workflow-started
                                 :seq              -1 ;; A8: fixed sentinel below every op seq
                                 :workflow-id      wf-id
                                 :workflow-fn-name workflow-fn-name
                                 :args             (vec args)
                                 :timestamp        (utils/current-time-ms)})
      (when observer (p/on-workflow-started observer wf-id workflow-fn-name args))
      (log/info "Workflow started (async)")
      ;; The initial drive participates in the same running?/pending-wake? guard
      ;; so a wake firing during it queues a re-run instead of interleaving a
      ;; second execution chain.
      (reset! running? true)
      (-> (exec/run-workflow-internal engine wf-id workflow-fn args
                                      {:observer       observer
                                       :max-iterations max-iterations
                                       :wake-fn        wake-fn})
          (bthen (fn [result]
                   (reset! running? false)
                   (cond
                     (not (waiting-status? result))
                     (when on-complete (on-complete result))

                     @pending-wake?
                     (do (reset! pending-wake? false)
                         (wake-fn)))
                   result))
          (prom/catch js/Error
            (fn [e]
              (reset! running? false)
              (log/warnf e "Caught exception during async workflow start")
              (let [err-result {:status :failed :error e}]
                (when on-complete (on-complete err-result))
                (prom/rejected e))))))))
