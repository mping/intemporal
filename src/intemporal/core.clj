(ns intemporal.core
  (:require [intemporal.internal.error :as error]
            [intemporal.internal.context :as ctx]
            [intemporal.internal.activity :as a]
            [intemporal.internal.runtime :as runtime]
            [intemporal.internal.execution :as exec]
            [intemporal.internal.logging :as log]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [intemporal.observer :as obs]))

;; ============================================================================
;; Core Workflow Operations
;; ============================================================================

(defn stub
  "Create a stubbed version of an activity function for use in workflows.
   Options:
   - :timeout-ms - timeout for this activity (overrides default)
   - :retry-policy - retry policy for this activity"
  [activity-fn & {:keys [timeout-ms retry-policy]}]
  (let [ctx (ctx/current-context)
        registry (:registry ctx)
        activity-name (a/ensure-registered! registry activity-fn)
        activity-info (a/get-activity-info registry activity-name)
        effective-timeout (or timeout-ms (:timeout-ms activity-info))
        effective-retry (or retry-policy (:retry-policy activity-info))]
    (fn [& args]
      (log/with-mdc {:activity activity-name}

        (ctx/check-cancelled!)
        (let [ctx             (ctx/current-context)
              seq-num         (ctx/next-seq!)
              store           (ctx/current-store)
              workflow-id     (ctx/current-workflow-id)
              existing        (p/find-event store workflow-id :activity-completed seq-num)
              existing-failed (p/find-event store workflow-id :activity-failed seq-num)]
          (cond
            ;; Replay: return cached result
            existing
            (do
              (log/infof "Found existing result for activity")
              (:result existing))

            ;; Replay: throw cached error
            existing-failed
            (do
              (log/infof "Found existing error for activity")
              (throw (error/map->exception (:error existing-failed))))

            ;; Execute: need to run the activity
            :else
            (let [scheduled-event {:event-type    :activity-scheduled
                                   :seq           seq-num
                                   :activity-name activity-name
                                   :args          (vec args)
                                   :timeout-ms    effective-timeout
                                   :retry-policy  (when effective-retry
                                                    {:max-attempts (:max-attempts effective-retry)
                                                     :backoff-ms   (:backoff-ms effective-retry)})
                                   :timestamp     (System/currentTimeMillis)}]
              (ctx/add-pending-event! scheduled-event)
              (ctx/notify-observer p/on-activity-scheduled
                                   (:workflow-id ctx) seq-num activity-name (vec args))
              (log/infof "Scheduling activity with sequence number %d and suspending" seq-num)
              (throw (error/make-suspension :activity {:seq           seq-num
                                                       :activity-name activity-name
                                                       :args          (vec args)
                                                       :timeout-ms    effective-timeout
                                                       :retry-policy  effective-retry})))))))))

;; ============================================================================
;; Async Support
;; ============================================================================

(defrecord AsyncHandle [seq-num])

(defn async
  "Schedule an async operation (thunk) for later execution.
   The thunk should contain a single activity call."
  [thunk]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing-completed (p/find-event store workflow-id :async-completed seq-num)
        existing-failed (p/find-event store workflow-id :async-failed seq-num)
        existing-started (p/find-event store workflow-id :async-started seq-num)]
    (cond
      ;; Already completed - advance seq past consumed numbers during replay
      existing-completed
      (do
        ;; Advance seq counter to skip past all seqs consumed by this async
        (ctx/update-seq! existing-completed)
        (log/tracef "Async already succeeded with sequence number %d, advancing sequence number" seq-num)
        (->AsyncHandle seq-num))

      ;; Already failed - advance seq past consumed numbers during replay
      existing-failed
      (do
        (ctx/update-seq! existing-failed)
        (log/infof "Async already failed with sequence number %d, advancing sequence number" seq-num)
        (->AsyncHandle seq-num))

      ;; Already started but not completed - return handle (will block on join)
      ;; During replay, don't re-execute the thunk - just wait for completion event
      existing-started
      (do
        (log/infof "Async already started with sequence number %d" seq-num)
        (->AsyncHandle seq-num))

      ;; Need to start - record and try to capture what activity it needs
      :else
      (let [start-event {:event-type :async-started
                         :seq        seq-num
                         :timestamp  (System/currentTimeMillis)}
            start-seq seq-num]
        (ctx/add-pending-event! start-event)
        (ctx/notify-observer p/on-async-started (:workflow-id ctx) seq-num)
        ;; Try to execute the thunk to see what activity it wants
        (try
          (log/tracef "Invoking Async thunk with sequence number %d" seq-num)
          (let [result (thunk)
                ;; Capture the last seq number after thunk execution
                end-seq (dec @(:seq-counter (ctx/current-context)))]
            ;; If thunk completes synchronously (pure computation - first run only),
            ;; save the completion event immediately with the seq range
            (ctx/add-pending-event! {:event-type :async-completed
                                     :seq        start-seq
                                     :last-seq   end-seq
                                     :result     result
                                     :timestamp  (System/currentTimeMillis)})
            (ctx/notify-observer p/on-async-completed (:workflow-id ctx) start-seq result)
            (log/tracef "Async completed successfully with sequence number %d and result %s" seq-num result)
            (->AsyncHandle start-seq))
          (catch Throwable e
            (if (error/suspension? e)
              ;; The thunk suspended on an activity - capture it for parallel execution
              (let [suspension-info (error/suspension-data e)
                    activity-name (:activity-name suspension-info)]
                (log/tracef "Async suspended with sequence number %d for activity %s" seq-num activity-name)
                (ctx/add-pending-async! {:handle-seq    start-seq
                                         :activity-name (:activity-name suspension-info)
                                         :activity-seq  (:seq suspension-info)
                                         :args          (:args suspension-info)
                                         :timeout-ms    (:timeout-ms suspension-info)
                                         :retry-policy  (:retry-policy suspension-info)})
                ;; Return handle - we'll batch execute later
                (->AsyncHandle start-seq))
              ;; else
              (do
                (log/tracef e "Async failed with sequence number %d" seq-num)
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
      (do
        (:result completed))

      failed
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
        (if completed-idx
          (let [result (join (nth handles completed-idx))]
            (ctx/add-pending-event! {:event-type :join-any-completed
                                     :seq seq-num
                                     :index completed-idx
                                     :result result
                                     :timestamp (System/currentTimeMillis)})
            {:index completed-idx :result result})
          (throw (error/make-suspension :join-any-pending
                                        {:seq seq-num
                                         :handle-seqs (mapv :seq-num handles)})))))))

;; ============================================================================
;; Signals
;; ============================================================================

(defn wait-for-signal
  "Wait for a signal with the given name.
   Returns the signal payload when received."
  [signal-name]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
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
   Returns {:received true :payload ...} or {:received false} on timeout."
  [signal-name timeout-ms]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing (p/find-event store workflow-id :signal-wait-completed seq-num)]
    (if existing
      (if (:received existing)
        {:received true :payload (:payload existing)}
        {:received false})
      (throw (error/make-suspension :wait-signal-timeout
                                    {:seq seq-num
                                     :signal-name signal-name
                                     :timeout-ms timeout-ms
                                     :deadline (+ (System/currentTimeMillis) timeout-ms)})))))

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
      (let [fire-at (+ (System/currentTimeMillis) ms)]
        (ctx/add-pending-event! {:event-type :timer-scheduled
                                 :seq seq-num
                                 :fire-at fire-at
                                 :duration-ms ms
                                 :timestamp (System/currentTimeMillis)})
        (ctx/notify-observer p/on-timer-scheduled (:workflow-id ctx) seq-num fire-at)
        (throw (error/make-suspension :timer {:seq seq-num
                                              :fire-at fire-at}))))))
;; ============================================================================
;; Child Workflows
;; ============================================================================

(defn run-child-workflow
  "Run another workflow as a child workflow.
   The child workflow has its own history but is tracked by the parent."
  [child-workflow-fn args & {:keys [child-id]}]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        child-wf-id (or child-id (str (:workflow-id ctx) "/child-" seq-num))
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing (p/find-event store workflow-id :child-workflow-completed seq-num)
        existing-failed (p/find-event store workflow-id :child-workflow-failed seq-num)]
    (cond
      existing
      (:result existing)

      existing-failed
      (throw (error/map->exception (:error existing-failed)))

      :else
      (let [scheduled-event {:event-type        :child-workflow-scheduled
                             :seq               seq-num
                             :child-workflow-id child-wf-id
                             :args              (vec args)
                             :timestamp         (System/currentTimeMillis)}]
        (ctx/add-pending-event! scheduled-event)
        (throw (error/make-suspension :child-workflow
                                      {:seq               seq-num
                                       :child-workflow-id child-wf-id
                                       :workflow-fn       child-workflow-fn
                                       :args              args}))))))

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
   - :max-iterations - Maximum replay iterations (default: 1000)"
  [{:keys [store executor scheduler registry] :as engine} workflow-fn args
   & {:keys [workflow-id observer max-iterations]
      :or {max-iterations 1000}}]
  (let [wf-id (or workflow-id (str (random-uuid)))
        resume-promise-atom (atom nil)
        ;; TODO fixme this could be passed via the `with-workflow-engine` macro
        observer (or observer (get engine :observer))
        wake-fn (fn wake-fn-impl []
                  (log/with-mdc {:workflow-id wf-id}
                    (try
                      (when observer
                        (p/on-workflow-resumed observer wf-id))
                      (log/debugf "Waking workflow for resume")
                      (let [old-promise @resume-promise-atom
                            new-promise (promise)
                            ;_ (reset! resume-promise-atom new-promise)
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
                                 :timestamp (System/currentTimeMillis)})
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
            ;; If workflow is waiting, block until wake-fn delivers next result
            (log/infof "Got result %s with status %s" (:result initial-result) (:status initial-result))
            (if (#{:waiting-timer :waiting-signal :waiting-signal-timeout :waiting-async} (:status result))
              ;; Capture the promise that wake-fn will deliver to
              (do
                (log/infof "Workflow waiting for promise: %s" (:status result))
                (let [next-promise @resume-promise-atom
                      next-result  @next-promise]
                  (recur next-result)))
              ;; else
              result)))
        (catch Exception e
          ;; If cancelled/failed before entering wait state, re-throw
          (log/warnf e "Caught exception")
          (throw e))))))

(defn resume-workflow
  "Resume a waiting workflow (e.g., after signal delivery or timer).

   Arguments:
   - engine: must have:
     - store: IStore implementation
     - executor: IActivityExecutor
     - scheduler: IScheduler
     - registry: Activity registry atom
   - workflow-id: ID of workflow to resume
   - workflow-fn: The workflow function
   - args: Original arguments

   Options:
   - :observer - IWorkflowObserver
   - :max-iterations - Maximum replay iterations"
  [{:keys [store executor scheduler registry] :as engine} workflow-id workflow-fn args
   & {:keys [observer max-iterations]
      :or {max-iterations 1000}}]
  (when observer
    (p/on-workflow-resumed observer workflow-id))
  (log/info "Workflow resumed")
  (exec/run-workflow-internal engine workflow-id workflow-fn args
                         {:observer observer
                          :max-iterations max-iterations}))

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
  (let [id (or signal-id (str (random-uuid)))]
    (log/with-mdc {:workflow-id workflow-id}
      (p/add-signal store workflow-id signal-name {:id id :payload payload})
      (log/debugf "Adding signal %s" signal-name))
    {:signal-id id}))

(defn cancel-workflow
  "Cancel a running workflow.
   The workflow will be cancelled at the next suspension point."
  [store workflow-id]
  (log/with-mdc {:workflow-id workflow-id}
    (p/mark-cancelled store workflow-id)
    (log/debugf "Cancelling workflow"))
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

;; ============================================================================
;; Convenience Functions
;; ============================================================================

(defn make-workflow-engine
  "Create a complete workflow engine with all components.
   Returns a map with :store, :executor, :scheduler, :registry, and :observer.

   Options:
   - :store - instance of protocols/IStore
   - :threads - Number of executor threads (default: 4)
   - :scheduler-threads - Number of scheduler threads (default: 2)
   - :default-timeout-ms - Default activity timeout (default: 30000)
   - :enable-logging - Enable logging observer (default: false)
   - :observer - Custom observer instance (overrides :enable-logging)"
  [& {:keys [store threads scheduler-threads default-timeout-ms enable-logging observer]
      :or {store (store/->InMemoryStore (atom {}))
           threads 4
           scheduler-threads 2
           default-timeout-ms 30000
           enable-logging false}}]
  (let [registry (a/make-registry)
        log-atom (when enable-logging (atom []))]
    {:store store
     :executor (runtime/make-vthreads-executor registry
                                       :threads threads
                                       :default-timeout-ms default-timeout-ms)
     :scheduler (runtime/make-scheduler :threads scheduler-threads)
     :registry registry
     ;; opts
     :observer (or observer
                   (if enable-logging
                     (obs/make-logging-observer log-atom)
                     (obs/noop-observer)))
     :log (when enable-logging log-atom)}))

(defn shutdown-engine
  "Shutdown all components of a workflow engine"
  [{:keys [executor scheduler]}]
  (log/infof "Shutting down engine")
  (p/shutdown-executor executor)
  (p/shutdown-scheduler scheduler))

(defmacro with-workflow-engine
  "Execute body with a workflow engine, ensuring cleanup.

   Usage:
   (with-workflow-engine [engine {:threads 4}]
     (start-workflow (:store engine) ...))"
  [[binding opts] & body]
  `(let [~binding (make-workflow-engine ~@(mapcat identity opts))]
     (try
       ~@body
       (finally
         (shutdown-engine ~binding)))))
