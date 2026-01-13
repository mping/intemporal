(ns intemporal3.core3
  (:import [java.util UUID]
           [java.util.concurrent
            Executors
            ExecutorService
            Future
            TimeUnit
            TimeoutException
            ScheduledExecutorService
            ScheduledFuture]))

;; ============================================================================
;; Protocols
;; ============================================================================

(defprotocol IStore
  "Protocol for workflow persistence"
  (load-history [store workflow-id] "Load history for a workflow")
  (save-event [store workflow-id event] "Append an event to workflow history")
  (save-events [store workflow-id events] "Append multiple events atomically")
  (get-pending-signals [store workflow-id] "Get pending signals for workflow")
  (add-signal [store workflow-id signal-name signal-data] "Add a signal to workflow")
  (consume-signal [store workflow-id signal-name] "Consume and remove a signal")
  (is-cancelled? [store workflow-id] "Check if workflow is cancelled")
  (mark-cancelled [store workflow-id] "Mark workflow as cancelled")
  (get-workflow-status [store workflow-id] "Get current workflow status"))

(defprotocol IActivityExecutor
  "Protocol for executing activities"
  (execute-activity [executor activity-name args timeout-ms]
    "Execute an activity with given args and timeout")
  (execute-activities-parallel [executor activities]
    "Execute multiple activities in parallel, returns seq of results in same order")
  (shutdown-executor [executor]
    "Shutdown the executor and release resources"))

(defprotocol IScheduler
  "Protocol for scheduling timers"
  (schedule-timer [scheduler workflow-id seq-num fire-at callback]
    "Schedule a timer to fire at given time, calls callback when ready")
  (cancel-timer [scheduler workflow-id seq-num]
    "Cancel a scheduled timer")
  (shutdown-scheduler [scheduler]
    "Shutdown the scheduler"))

(defprotocol IWorkflowObserver
  "Protocol for observing workflow execution"
  (on-workflow-started [observer workflow-id args])
  (on-workflow-suspended [observer workflow-id suspension-type])
  (on-workflow-resumed [observer workflow-id])
  (on-activity-scheduled [observer workflow-id seq-num activity-name args])
  (on-activity-started [observer workflow-id seq-num activity-name])
  (on-activity-completed [observer workflow-id seq-num activity-name result duration-ms])
  (on-activity-failed [observer workflow-id seq-num activity-name error duration-ms])
  (on-async-started [observer workflow-id seq-num])
  (on-async-completed [observer workflow-id seq-num result])
  (on-async-failed [observer workflow-id seq-num error])
  (on-timer-scheduled [observer workflow-id seq-num fire-at])
  (on-timer-fired [observer workflow-id seq-num])
  (on-signal-received [observer workflow-id signal-name payload])
  (on-workflow-completed [observer workflow-id result])
  (on-workflow-failed [observer workflow-id error])
  (on-workflow-cancelled [observer workflow-id]))

;; ============================================================================
;; Exceptions and Error Handling
;; ============================================================================

(defn- make-suspension [type data]
  (ex-info "Workflow suspended" {:type type :data data ::suspension true}))

(defn- suspension? [e]
  (and (instance? clojure.lang.ExceptionInfo e)
       (::suspension (ex-data e))))

(defn- suspension-type [e]
  (-> e ex-data :type))

(defn- suspension-data [e]
  (-> e ex-data :data))

(defn- workflow-cancelled-exception []
  (ex-info "Workflow cancelled" {::cancelled true}))

(defn- cancelled-exception? [e]
  (and (instance? clojure.lang.ExceptionInfo e)
       (::cancelled (ex-data e))))

(defn- activity-timeout-exception [activity-name timeout-ms]
  (ex-info "Activity timed out"
           {::activity-timeout true
            :activity-name activity-name
            :timeout-ms timeout-ms}))

(defn- activity-failed-exception [activity-name cause]
  (ex-info "Activity failed"
           {::activity-failed true
            :activity-name activity-name}
           cause))

(defn- async-failed-exception [handle-seq cause]
  (ex-info "Async operation failed"
           {::async-failed true
            :handle-seq handle-seq
            :cause cause}))

(defn throwable->map [^Throwable t]
  (when t
    {:type (str (type t))
     :message (.getMessage t)
     :data (when (instance? clojure.lang.ExceptionInfo t)
             (ex-data t))
     :stack-trace (mapv str (.getStackTrace t))
     :cause (throwable->map (.getCause t))}))

(defn map->exception [m]
  (when m
    (ex-info (or (:message m) "Restored exception")
             (merge {:restored true} (:data m)))))

;; ============================================================================
;; Dynamic Context
;; ============================================================================

(def ^:dynamic *workflow-context* nil)

(defn- current-context []
  (or *workflow-context*
      (throw (ex-info "Not in workflow context" {}))))

(defn- check-cancelled! []
  (let [ctx (current-context)]
    (when (is-cancelled? (:store ctx) (:workflow-id ctx))
      (throw (workflow-cancelled-exception)))))

(defn- next-seq! []
  (check-cancelled!)
  (let [ctx (current-context)]
    (let [seq @(:seq-counter ctx)]
      (swap! (:seq-counter ctx) inc)
      seq)))

(defn- find-event [history event-type seq-num]
  (->> history
       (filter #(and (= (:event-type %) event-type)
                     (= (:seq %) seq-num)))
       first))

(defn- find-events-by-type [history event-type]
  (->> history
       (filter #(= (:event-type %) event-type))))

(defn- add-pending-event! [event]
  (let [ctx (current-context)]
    (swap! (:pending-events ctx) conj event)))

(defn- add-pending-async! [async-info]
  (let [ctx (current-context)]
    (swap! (:pending-asyncs ctx) conj async-info)))

(defn- notify-observer [event-fn & args]
  (when-let [observer (:observer (current-context))]
    (try
      (apply event-fn observer args)
      (catch Exception e
        ;; Don't let observer errors break workflow
        (println "Observer error:" (.getMessage e))))))

;; ============================================================================
;; In-Memory Store Implementation
;; ============================================================================

(defrecord InMemoryStore [state]
  IStore
  (load-history [_ workflow-id]
    (get-in @state [:workflows workflow-id :history] []))

  (save-event [_ workflow-id event]
    (swap! state update-in [:workflows workflow-id :history]
           (fnil conj []) event)
    event)

  (save-events [_ workflow-id events]
    (when (seq events)
      (swap! state update-in [:workflows workflow-id :history]
             (fnil into []) events))
    events)

  (get-pending-signals [_ workflow-id]
    (get-in @state [:workflows workflow-id :signals] {}))

  (add-signal [_ workflow-id signal-name signal-data]
    (swap! state update-in [:workflows workflow-id :signals signal-name]
           (fnil conj []) signal-data)
    signal-data)

  (consume-signal [_ workflow-id signal-name]
    (let [result (atom nil)]
      (swap! state
             (fn [s]
               (let [signals (get-in s [:workflows workflow-id :signals signal-name])]
                 (if (seq signals)
                   (do
                     (reset! result (first signals))
                     (update-in s [:workflows workflow-id :signals signal-name]
                                (comp vec rest)))
                   s))))
      @result))

  (is-cancelled? [_ workflow-id]
    (get-in @state [:workflows workflow-id :cancelled] false))

  (mark-cancelled [_ workflow-id]
    (swap! state assoc-in [:workflows workflow-id :cancelled] true))

  (get-workflow-status [_ workflow-id]
    (let [wf (get-in @state [:workflows workflow-id])]
      (cond
        (:cancelled wf) :cancelled
        (empty? (:history wf)) :not-found
        :else (let [last-event (last (:history wf))]
                (case (:event-type last-event)
                  :workflow-completed :completed
                  :workflow-failed :failed
                  :running))))))

(defn ->InMemoryStore
  "Create a new in-memory store"
  ([] (->InMemoryStore (atom {})))
  ([state] (InMemoryStore. state)))

;; ============================================================================
;; Default Scheduler Implementation
;; ============================================================================

(defrecord DefaultScheduler [^ScheduledExecutorService pool
                             pending-timers]
  IScheduler
  (schedule-timer [_ workflow-id seq-num fire-at callback]
    (let [delay-ms (max 0 (- fire-at (System/currentTimeMillis)))
          timer-key [workflow-id seq-num]
          future (.schedule pool
                            ^Runnable (fn []
                                        (swap! pending-timers dissoc timer-key)
                                        (callback))
                            delay-ms
                            TimeUnit/MILLISECONDS)]
      (swap! pending-timers assoc timer-key future)
      timer-key))

  (cancel-timer [_ workflow-id seq-num]
    (let [timer-key [workflow-id seq-num]]
      (when-let [^ScheduledFuture future (get @pending-timers timer-key)]
        (.cancel future false)
        (swap! pending-timers dissoc timer-key))))

  (shutdown-scheduler [_]
    (doseq [[_ ^ScheduledFuture future] @pending-timers]
      (.cancel future false))
    (reset! pending-timers {})
    (.shutdown pool)))

(defn make-scheduler
  "Create a new scheduler"
  [& {:keys [threads] :or {threads 2}}]
  (->DefaultScheduler
    (Executors/newScheduledThreadPool threads)
    (atom {})))

;; ============================================================================
;; Default Parallel Executor
;; ============================================================================

(defrecord ParallelActivityExecutor [^ExecutorService pool
                                     registry-atom
                                     default-timeout-ms]
  IActivityExecutor
  (execute-activity [_ activity-name args timeout-ms]
    (let [act (get @registry-atom activity-name)
          timeout (or timeout-ms default-timeout-ms)]
      (if (nil? act)
        (throw (ex-info "Activity not found" {:activity-name activity-name}))
        (let [future (.submit pool ^Callable (fn [] (apply (:fn act) args)))]
          (try
            (if timeout
              (.get ^Future future timeout TimeUnit/MILLISECONDS)
              (.get ^Future future))
            (catch TimeoutException _
              (.cancel ^Future future true)
              (throw (activity-timeout-exception activity-name timeout)))
            (catch Exception e
              (throw (activity-failed-exception activity-name
                                                (or (.getCause e) e)))))))))

  (execute-activities-parallel [this activities]
    (if (empty? activities)
      []
      (let [futures (mapv (fn [{:keys [activity-name args timeout-ms]}]
                            (let [act (get @registry-atom activity-name)
                                  timeout (or timeout-ms default-timeout-ms)]
                              (if (nil? act)
                                (throw (ex-info "Activity not found"
                                                {:activity-name activity-name}))
                                {:future (.submit pool ^Callable
                                                  (fn []
                                                    (let [start (System/currentTimeMillis)]
                                                      {:result (apply (:fn act) args)
                                                       :duration (- (System/currentTimeMillis) start)})))
                                 :timeout timeout
                                 :activity-name activity-name})))
                          activities)]
        (mapv (fn [{:keys [^Future future timeout activity-name]}]
                (try
                  (let [result (if timeout
                                 (.get future timeout TimeUnit/MILLISECONDS)
                                 (.get future))]
                    {:status :success
                     :result (:result result)
                     :duration (:duration result)})
                  (catch TimeoutException _
                    (.cancel future true)
                    {:status :failed
                     :error (throwable->map
                              (activity-timeout-exception activity-name timeout))})
                  (catch Exception e
                    {:status :failed
                     :error (throwable->map (or (.getCause e) e))})))
              futures))))

  (shutdown-executor [_]
    (.shutdown pool)
    (.awaitTermination pool 30 TimeUnit/SECONDS)))

(defn make-parallel-executor
  "Create an executor that runs activities in parallel using a thread pool"
  [activity-registry-atom & {:keys [threads default-timeout-ms]
                             :or {threads 4 default-timeout-ms 30000}}]
  (->ParallelActivityExecutor
    (Executors/newFixedThreadPool threads)
    activity-registry-atom
    default-timeout-ms))

;; ============================================================================
;; Default Observer (Logging)
;; ============================================================================

(defrecord LoggingObserver [log-atom]
  IWorkflowObserver
  (on-workflow-started [_ workflow-id args]
    (swap! log-atom conj {:event :workflow-started
                          :workflow-id workflow-id
                          :args args
                          :timestamp (System/currentTimeMillis)}))

  (on-workflow-suspended [_ workflow-id suspension-type]
    (swap! log-atom conj {:event :workflow-suspended
                          :workflow-id workflow-id
                          :suspension-type suspension-type
                          :timestamp (System/currentTimeMillis)}))

  (on-workflow-resumed [_ workflow-id]
    (swap! log-atom conj {:event :workflow-resumed
                          :workflow-id workflow-id
                          :timestamp (System/currentTimeMillis)}))

  (on-activity-scheduled [_ workflow-id seq-num activity-name args]
    (swap! log-atom conj {:event :activity-scheduled
                          :workflow-id workflow-id
                          :seq seq-num
                          :activity-name activity-name
                          :args args
                          :timestamp (System/currentTimeMillis)}))

  (on-activity-started [_ workflow-id seq-num activity-name]
    (swap! log-atom conj {:event :activity-started
                          :workflow-id workflow-id
                          :seq seq-num
                          :activity-name activity-name
                          :timestamp (System/currentTimeMillis)}))

  (on-activity-completed [_ workflow-id seq-num activity-name result duration-ms]
    (swap! log-atom conj {:event :activity-completed
                          :workflow-id workflow-id
                          :seq seq-num
                          :activity-name activity-name
                          :result result
                          :duration-ms duration-ms
                          :timestamp (System/currentTimeMillis)}))

  (on-activity-failed [_ workflow-id seq-num activity-name error duration-ms]
    (swap! log-atom conj {:event :activity-failed
                          :workflow-id workflow-id
                          :seq seq-num
                          :activity-name activity-name
                          :error error
                          :duration-ms duration-ms
                          :timestamp (System/currentTimeMillis)}))

  (on-async-started [_ workflow-id seq-num]
    (swap! log-atom conj {:event :async-started
                          :workflow-id workflow-id
                          :seq seq-num
                          :timestamp (System/currentTimeMillis)}))

  (on-async-completed [_ workflow-id seq-num result]
    (swap! log-atom conj {:event :async-completed
                          :workflow-id workflow-id
                          :seq seq-num
                          :result result
                          :timestamp (System/currentTimeMillis)}))

  (on-async-failed [_ workflow-id seq-num error]
    (swap! log-atom conj {:event :async-failed
                          :workflow-id workflow-id
                          :seq seq-num
                          :error error
                          :timestamp (System/currentTimeMillis)}))

  (on-timer-scheduled [_ workflow-id seq-num fire-at]
    (swap! log-atom conj {:event :timer-scheduled
                          :workflow-id workflow-id
                          :seq seq-num
                          :fire-at fire-at
                          :timestamp (System/currentTimeMillis)}))

  (on-timer-fired [_ workflow-id seq-num]
    (swap! log-atom conj {:event :timer-fired
                          :workflow-id workflow-id
                          :seq seq-num
                          :timestamp (System/currentTimeMillis)}))

  (on-signal-received [_ workflow-id signal-name payload]
    (swap! log-atom conj {:event :signal-received
                          :workflow-id workflow-id
                          :signal-name signal-name
                          :payload payload
                          :timestamp (System/currentTimeMillis)}))

  (on-workflow-completed [_ workflow-id result]
    (swap! log-atom conj {:event :workflow-completed
                          :workflow-id workflow-id
                          :result result
                          :timestamp (System/currentTimeMillis)}))

  (on-workflow-failed [_ workflow-id error]
    (swap! log-atom conj {:event :workflow-failed
                          :workflow-id workflow-id
                          :error error
                          :timestamp (System/currentTimeMillis)}))

  (on-workflow-cancelled [_ workflow-id]
    (swap! log-atom conj {:event :workflow-cancelled
                          :workflow-id workflow-id
                          :timestamp (System/currentTimeMillis)})))

(defn make-logging-observer
  "Create an observer that logs all events to an atom"
  ([] (make-logging-observer (atom [])))
  ([log-atom] (->LoggingObserver log-atom)))

(defn noop-observer
  "Create an observer that does nothing"
  []
  (reify IWorkflowObserver
    (on-workflow-started [_ _ _])
    (on-workflow-suspended [_ _ _])
    (on-workflow-resumed [_ _])
    (on-activity-scheduled [_ _ _ _ _])
    (on-activity-started [_ _ _ _])
    (on-activity-completed [_ _ _ _ _ _])
    (on-activity-failed [_ _ _ _ _ _])
    (on-async-started [_ _ _])
    (on-async-completed [_ _ _ _])
    (on-async-failed [_ _ _ _])
    (on-timer-scheduled [_ _ _ _])
    (on-timer-fired [_ _ _])
    (on-signal-received [_ _ _ _])
    (on-workflow-completed [_ _ _])
    (on-workflow-failed [_ _ _])
    (on-workflow-cancelled [_ _])))

;; ============================================================================
;; Activity Registry
;; ============================================================================

(defn make-registry
  "Create a new activity registry"
  []
  (atom {}))

(defn register-activity!
  "Register an activity function in a registry"
  [registry f & {:keys [name timeout-ms retry-policy]}]
  (let [activity-name (or name
                          (if (var? f)
                            (str (symbol f))
                            (str (gensym "activity-"))))
        resolved-fn (if (var? f) @f f)]
    (swap! registry assoc activity-name
           {:fn resolved-fn
            :timeout-ms timeout-ms
            :retry-policy retry-policy})
    activity-name))

(defn- get-activity-info [registry activity-name]
  (get @registry activity-name))

(defn- get-activity-fn [registry activity-name]
  (:fn (get-activity-info registry activity-name)))

(defn- ensure-registered! [registry f]
  (let [activity-name (if (var? f)
                        (str (symbol f))
                        (str (symbol f)))]
    (when-not (contains? @registry activity-name)
      (register-activity! registry f :name activity-name))
    activity-name))

;; ============================================================================
;; Retry Policy
;; ============================================================================

(defrecord RetryPolicy [max-attempts
                        backoff-ms
                        max-backoff-ms
                        backoff-multiplier
                        retryable-fn])

(defn make-retry-policy
  "Create a retry policy"
  [& {:keys [max-attempts backoff-ms max-backoff-ms backoff-multiplier retryable-fn]
      :or {max-attempts 3
           backoff-ms 1000
           max-backoff-ms 60000
           backoff-multiplier 2.0
           retryable-fn (constantly true)}}]
  (->RetryPolicy max-attempts backoff-ms max-backoff-ms backoff-multiplier retryable-fn))

(defn- calculate-backoff [policy attempt]
  (let [base (:backoff-ms policy)
        multiplier (:backoff-multiplier policy)
        max-backoff (:max-backoff-ms policy)
        backoff (* base (Math/pow multiplier (dec attempt)))]
    (long (min backoff max-backoff))))

(defn- should-retry? [policy error attempt]
  (and (< attempt (:max-attempts policy))
       ((:retryable-fn policy) error)))

;; ============================================================================
;; Core Workflow Operations
;; ============================================================================

(defn stub
  "Create a stubbed version of an activity function for use in workflows.
   Options:
   - :timeout-ms - timeout for this activity (overrides default)
   - :retry-policy - retry policy for this activity"
  [activity-fn & {:keys [timeout-ms retry-policy]}]
  (let [ctx (current-context)
        registry (:registry ctx)
        activity-name (ensure-registered! registry activity-fn)
        activity-info (get-activity-info registry activity-name)
        effective-timeout (or timeout-ms (:timeout-ms activity-info))
        effective-retry (or retry-policy (:retry-policy activity-info))]
    (fn [& args]
      (check-cancelled!)
      (let [ctx (current-context)
            seq-num (next-seq!)
            history @(:history ctx)
            existing (find-event history :activity-completed seq-num)
            existing-failed (find-event history :activity-failed seq-num)]
        (cond
          ;; Replay: return cached result
          existing
          (:result existing)

          ;; Replay: throw cached error
          existing-failed
          (throw (map->exception (:error existing-failed)))

          ;; Execute: need to run the activity
          :else
          (let [scheduled-event {:event-type :activity-scheduled
                                 :seq seq-num
                                 :activity-name activity-name
                                 :args (vec args)
                                 :timeout-ms effective-timeout
                                 :retry-policy (when effective-retry
                                                 {:max-attempts (:max-attempts effective-retry)
                                                  :backoff-ms (:backoff-ms effective-retry)})
                                 :timestamp (System/currentTimeMillis)}]
            (add-pending-event! scheduled-event)
            (notify-observer on-activity-scheduled
                             (:workflow-id ctx) seq-num activity-name (vec args))
            (throw (make-suspension :activity {:seq seq-num
                                               :activity-name activity-name
                                               :args (vec args)
                                               :timeout-ms effective-timeout
                                               :retry-policy effective-retry}))))))))

;; ============================================================================
;; Async Support
;; ============================================================================

(defrecord AsyncHandle [seq-num])

(defn async
  "Schedule an async operation (thunk) for later execution.
   The thunk should contain a single activity call."
  [thunk]
  (check-cancelled!)
  (let [ctx (current-context)
        seq-num (next-seq!)
        history @(:history ctx)
        existing-completed (find-event history :async-completed seq-num)
        existing-failed (find-event history :async-failed seq-num)
        existing-started (find-event history :async-started seq-num)]
    (cond
      ;; Already completed - just return handle
      existing-completed
      (->AsyncHandle seq-num)

      ;; Already failed - return handle (will throw on join)
      existing-failed
      (->AsyncHandle seq-num)

      ;; Already started but not completed - return handle (will block on join)
      existing-started
      (->AsyncHandle seq-num)

      ;; Need to start - record and try to capture what activity it needs
      :else
      (let [start-event {:event-type :async-started
                         :seq seq-num
                         :timestamp (System/currentTimeMillis)}]
        (add-pending-event! start-event)
        (notify-observer on-async-started (:workflow-id ctx) seq-num)
        ;; Try to execute the thunk to see what activity it wants
        (try
          (thunk)
          ;; If thunk completes synchronously (all replayed), just return handle
          (->AsyncHandle seq-num)
          (catch Exception e
            (if (suspension? e)
              ;; The thunk suspended on an activity - capture it for parallel execution
              (let [suspension-info (suspension-data e)]
                (add-pending-async! {:handle-seq seq-num
                                     :activity-name (:activity-name suspension-info)
                                     :activity-seq (:seq suspension-info)
                                     :args (:args suspension-info)
                                     :timeout-ms (:timeout-ms suspension-info)
                                     :retry-policy (:retry-policy suspension-info)})
                ;; Return handle - we'll batch execute later
                (->AsyncHandle seq-num))
              (throw e))))))))

(defn join
  "Wait for an async handle to complete.
   Throws if the async operation failed."
  [handle]
  (check-cancelled!)
  (let [ctx (current-context)
        handle-seq (:seq-num handle)
        history @(:history ctx)
        completed (find-event history :async-completed handle-seq)
        failed (find-event history :async-failed handle-seq)]
    (cond
      completed
      (:result completed)

      failed
      (throw (async-failed-exception handle-seq (:error failed)))

      :else
      (throw (make-suspension :join-pending {:handle-seq handle-seq})))))

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
  (check-cancelled!)
  (let [ctx (current-context)
        seq-num (next-seq!)
        history @(:history ctx)
        existing (find-event history :join-any-completed seq-num)]
    (if existing
      {:index (:index existing)
       :result (:result existing)}
      ;; Check if any are already complete
      (let [completed-idx (first
                            (keep-indexed
                               (fn [idx handle]
                                   (when (find-event history :async-completed (:seq-num handle))
                                       idx))
                               handles))]
        (if completed-idx
          (let [result (join (nth handles completed-idx))]
            (add-pending-event! {:event-type :join-any-completed
                                 :seq seq-num
                                 :index completed-idx
                                 :result result
                                 :timestamp (System/currentTimeMillis)})
            {:index completed-idx :result result})
          (throw (make-suspension :join-any-pending
                                  {:seq seq-num
                                   :handle-seqs (mapv :seq-num handles)})))))))

;; ============================================================================
;; Signals
;; ============================================================================

(defn wait-for-signal
  "Wait for a signal with the given name.
   Returns the signal payload when received."
  [signal-name]
  (check-cancelled!)
  (let [ctx (current-context)
        seq-num (next-seq!)
        history @(:history ctx)
        existing (find-event history :signal-received seq-num)]
    (if existing
      (:payload existing)
      (throw (make-suspension :wait-signal {:seq seq-num
                                            :signal-name signal-name})))))

(defn wait-for-signal-with-timeout
  "Wait for a signal with timeout.
   Returns {:received true :payload ...} or {:received false} on timeout."
  [signal-name timeout-ms]
  (check-cancelled!)
  (let [ctx (current-context)
        seq-num (next-seq!)
        history @(:history ctx)
        existing (find-event history :signal-wait-completed seq-num)]
    (if existing
      (if (:received existing)
        {:received true :payload (:payload existing)}
        {:received false})
      (throw (make-suspension :wait-signal-timeout
                              {:seq seq-num
                               :signal-name signal-name
                               :timeout-ms timeout-ms
                               :deadline (+ (System/currentTimeMillis) timeout-ms)})))))

;; ============================================================================
;; Timers
;; ============================================================================

(defn sleep
  "Sleep for specified milliseconds"
  [ms]
  (check-cancelled!)
  (let [ctx (current-context)
        seq-num (next-seq!)
        history @(:history ctx)
        existing (find-event history :timer-fired seq-num)]
    (if existing
      nil
      (let [fire-at (+ (System/currentTimeMillis) ms)]
        (add-pending-event! {:event-type :timer-scheduled
                             :seq seq-num
                             :fire-at fire-at
                             :duration-ms ms
                             :timestamp (System/currentTimeMillis)})
        (notify-observer on-timer-scheduled (:workflow-id ctx) seq-num fire-at)
        (throw (make-suspension :timer {:seq seq-num
                                        :fire-at fire-at}))))))

;; ============================================================================
;; Child Workflows
;; ============================================================================

(defn run-child-workflow
  "Run another workflow as a child workflow.
   The child workflow has its own history but is tracked by the parent."
  [child-workflow-fn args & {:keys [child-id]}]
  (check-cancelled!)
  (let [ctx (current-context)
        seq-num (next-seq!)
        history @(:history ctx)
        child-wf-id (or child-id (str (:workflow-id ctx) "/child-" seq-num))
        existing (find-event history :child-workflow-completed seq-num)
        existing-failed (find-event history :child-workflow-failed seq-num)]
    (cond
      existing
      (:result existing)

      existing-failed
      (throw (map->exception (:error existing-failed)))

      :else
      (let [scheduled-event {:event-type :child-workflow-scheduled
                             :seq seq-num
                             :child-workflow-id child-wf-id
                             :args (vec args)
                             :timestamp (System/currentTimeMillis)}]
        (add-pending-event! scheduled-event)
        (throw (make-suspension :child-workflow
                                {:seq seq-num
                                 :child-workflow-id child-wf-id
                                 :workflow-fn child-workflow-fn
                                 :args args}))))))

;; ============================================================================
;; Workflow Execution Engine
;; ============================================================================

(defn- execute-workflow-fn [workflow-fn args]
  (try
    {:status :completed
     :result (apply workflow-fn args)
     :pending-asyncs @(:pending-asyncs (current-context))
     :pending-events @(:pending-events (current-context))}
    (catch Exception e
      (cond
        (suspension? e)
        {:status :suspended
         :suspension-type (suspension-type e)
         :suspension-data (suspension-data e)
         :pending-asyncs @(:pending-asyncs (current-context))
         :pending-events @(:pending-events (current-context))}

        (cancelled-exception? e)
        {:status :cancelled
         :pending-events @(:pending-events (current-context))}

        :else
        {:status :failed
         :error e
         :pending-events @(:pending-events (current-context))}))))

(defn- execute-with-retry
  "Execute an activity with retry policy"
  [executor activity-name args timeout-ms retry-policy observer workflow-id seq-num]
  (if (nil? retry-policy)
    ;; No retry - execute once
    (let [start (System/currentTimeMillis)]
      (when observer
        (on-activity-started observer workflow-id seq-num activity-name))
      (try
        (let [result (execute-activity executor activity-name args timeout-ms)
              duration (- (System/currentTimeMillis) start)]
          (when observer
            (on-activity-completed observer workflow-id seq-num activity-name result duration))
          {:status :success :result result :duration duration})
        (catch Exception e
          (let [duration (- (System/currentTimeMillis) start)]
            (when observer
              (on-activity-failed observer workflow-id seq-num activity-name
                                  (throwable->map e) duration))
            {:status :failed :error (throwable->map e) :duration duration}))))
    ;; With retry
    (loop [attempt 1]
      (let [start (System/currentTimeMillis)
            _ (when observer
                (on-activity-started observer workflow-id seq-num activity-name))
            exec-result (try
                          (let [result (execute-activity executor activity-name args timeout-ms)
                                duration (- (System/currentTimeMillis) start)]
                            (when observer
                              (on-activity-completed observer workflow-id seq-num activity-name result duration))
                            {:status :success :result result :duration duration :attempts attempt})
                          (catch Exception e
                            (let [duration (- (System/currentTimeMillis) start)
                                  error-map (throwable->map e)]
                              (when observer
                                (on-activity-failed observer workflow-id seq-num activity-name error-map duration))
                              {:status :retry-or-fail
                               :error error-map
                               :exception e
                               :duration duration})))]
        (case (:status exec-result)
          :success
          exec-result

          :retry-or-fail
          (if (should-retry? retry-policy (:exception exec-result) attempt)
            (do
              (Thread/sleep (calculate-backoff retry-policy attempt))
              (recur (inc attempt)))
            {:status :failed
             :error (:error exec-result)
             :duration (:duration exec-result)
             :attempts attempt}))))))

(defn- process-pending-activity [store executor workflow-id suspension-data pending-events observer]
  (let [{:keys [seq activity-name args timeout-ms retry-policy]} suspension-data
        exec-result (execute-with-retry executor activity-name args timeout-ms
                                        retry-policy observer workflow-id seq)]
    ;; Save all pending events first
    (save-events store workflow-id pending-events)
    ;; Then save the completion or failure
    (if (= :success (:status exec-result))
      (do
        (save-event store workflow-id {:event-type :activity-completed
                                       :seq seq
                                       :activity-name activity-name
                                       :result (:result exec-result)
                                       :duration-ms (:duration exec-result)
                                       :attempts (:attempts exec-result)
                                       :timestamp (System/currentTimeMillis)})
        :continue)
      (do
        (save-event store workflow-id {:event-type :activity-failed
                                       :seq seq
                                       :activity-name activity-name
                                       :error (:error exec-result)
                                       :duration-ms (:duration exec-result)
                                       :attempts (:attempts exec-result)
                                       :timestamp (System/currentTimeMillis)})
        :continue))))

(defn- process-pending-asyncs-parallel
  "Process all pending async operations in parallel"
  [store executor workflow-id pending-asyncs pending-events observer]
  (when (seq pending-asyncs)
    ;; Save all pending events first
    (save-events store workflow-id pending-events)

    ;; Execute all activities in parallel
    (let [activities (mapv (fn [{:keys [activity-name args timeout-ms]}]
                             {:activity-name activity-name
                              :args args
                              :timeout-ms timeout-ms})
                           pending-asyncs)
          results (execute-activities-parallel executor activities)
          now (System/currentTimeMillis)

          ;; Create completion events for both activities and async handles
          completion-events
              (mapcat (fn [async-info result]
                          (when observer
                                       (if (= :success (:status result))
                                           (on-async-completed observer workflow-id
                                                                          (:handle-seq async-info) (:result result))
                                           (on-async-failed observer workflow-id
                                                                       (:handle-seq async-info) (:error result))))
                          (if (= :success (:status result))
                              [{:event-type :activity-completed
                                           :seq (:activity-seq async-info)
                                           :activity-name (:activity-name async-info)
                                           :result (:result result)
                                           :duration-ms (:duration result)
                                           :timestamp now}
                               {:event-type :async-completed
                                           :seq (:handle-seq async-info)
                                           :result (:result result)
                                           :timestamp now}]
                              [{:event-type :activity-failed
                                           :seq (:activity-seq async-info)
                                           :activity-name (:activity-name async-info)
                                           :error (:error result)
                                           :timestamp now}
                               {:event-type :async-failed
                                           :seq (:handle-seq async-info)
                                           :error (:error result)
                                           :timestamp now}]))
                      pending-asyncs results)]
      (save-events store workflow-id completion-events)))
  :continue)

(defn- process-timer [store scheduler workflow-id suspension-data pending-events
                      wake-fn observer]
  (let [{:keys [seq fire-at]} suspension-data
        now (System/currentTimeMillis)]
    ;; Save pending events
    (save-events store workflow-id pending-events)
    (if (>= now fire-at)
      (do
        (save-event store workflow-id {:event-type :timer-fired
                                       :seq seq
                                       :timestamp now})
        (when observer
          (on-timer-fired observer workflow-id seq))
        :continue)
      ;; Schedule timer and return wait status
      (do
        (schedule-timer scheduler workflow-id seq fire-at
                        (fn []
                          (save-event store workflow-id {:event-type :timer-fired
                                                         :seq seq
                                                         :timestamp (System/currentTimeMillis)})
                          (when observer
                            (on-timer-fired observer workflow-id seq))
                          (when wake-fn (wake-fn))))
        :wait-timer))))

(defn- process-signal [store workflow-id suspension-data pending-events observer]
  (let [{:keys [seq signal-name]} suspension-data]
    ;; Save pending events
    (save-events store workflow-id pending-events)
    (if-let [signal-data (consume-signal store workflow-id signal-name)]
      (do
        (save-event store workflow-id {:event-type :signal-received
                                       :seq seq
                                       :signal-name signal-name
                                       :signal-id (:id signal-data)
                                       :payload (:payload signal-data)
                                       :timestamp (System/currentTimeMillis)})
        (when observer
          (on-signal-received observer workflow-id signal-name (:payload signal-data)))
        :continue)
      :wait-signal)))

(defn- process-signal-with-timeout [store scheduler workflow-id suspension-data
                                    pending-events wake-fn observer]
  (let [{:keys [seq signal-name deadline]} suspension-data
        now (System/currentTimeMillis)]
    (save-events store workflow-id pending-events)
    ;; Check if signal already available
    (if-let [signal-data (consume-signal store workflow-id signal-name)]
      (do
        (save-event store workflow-id {:event-type :signal-wait-completed
                                       :seq seq
                                       :received true
                                       :signal-name signal-name
                                       :payload (:payload signal-data)
                                       :timestamp now})
        (when observer
          (on-signal-received observer workflow-id signal-name (:payload signal-data)))
        :continue)
      ;; Check if already timed out
      (if (>= now deadline)
        (do
          (save-event store workflow-id {:event-type :signal-wait-completed
                                         :seq seq
                                         :received false
                                         :signal-name signal-name
                                         :timestamp now})
          :continue)
        ;; Schedule timeout
        (do
          (schedule-timer scheduler workflow-id seq deadline
                          (fn []
                            ;; Check one more time for signal
                            (if-let [signal-data (consume-signal store workflow-id signal-name)]
                              (save-event store workflow-id {:event-type :signal-wait-completed
                                                             :seq seq
                                                             :received true
                                                             :signal-name signal-name
                                                             :payload (:payload signal-data)
                                                             :timestamp (System/currentTimeMillis)})
                              (save-event store workflow-id {:event-type :signal-wait-completed
                                                             :seq seq
                                                             :received false
                                                             :signal-name signal-name
                                                             :timestamp (System/currentTimeMillis)}))
                            (when wake-fn (wake-fn))))
          :wait-signal-timeout)))))

(defn- process-join-pending [store executor workflow-id suspension-data pending-events
                             pending-asyncs observer]
  (let [{:keys [handle-seq]} suspension-data]
    ;; First, process any pending asyncs that haven't been executed yet
    (if (seq pending-asyncs)
      (do
        (process-pending-asyncs-parallel store executor workflow-id
                                         pending-asyncs pending-events observer)
        :continue)
      ;; else
      (do
        (when (seq pending-events)
          (save-events store workflow-id pending-events))
        ;; Check if the handle is now complete
        (let [history (load-history store workflow-id)
              completed (find-event history :async-completed handle-seq)
              failed (find-event history :async-failed handle-seq)]
          (if (or completed failed)
            :continue
            :wait-async))))))

(declare run-workflow-internal)

(defn- process-child-workflow [store executor scheduler registry workflow-id
                               suspension-data pending-events observer]
  (let [{:keys [seq child-workflow-id workflow-fn args]} suspension-data]
    (save-events store workflow-id pending-events)
    ;; Execute child workflow synchronously for now
    ;; In a real implementation, this could be async
    (try
      (let [result (run-workflow-internal store executor scheduler registry
                                          child-workflow-id workflow-fn args
                                          {:observer observer
                                           :max-iterations 1000})]
        (if (= :completed (:status result))
          (do
            (save-event store workflow-id {:event-type :child-workflow-completed
                                           :seq seq
                                           :child-workflow-id child-workflow-id
                                           :result (:result result)
                                           :timestamp (System/currentTimeMillis)})
            :continue)
          (do
            (save-event store workflow-id {:event-type :child-workflow-failed
                                           :seq seq
                                           :child-workflow-id child-workflow-id
                                           :error {:status (:status result)}
                                           :timestamp (System/currentTimeMillis)})
            :continue)))
      (catch Exception e
        (save-event store workflow-id {:event-type :child-workflow-failed
                                       :seq seq
                                       :child-workflow-id child-workflow-id
                                       :error (throwable->map e)
                                       :timestamp (System/currentTimeMillis)})
        :continue))))

(defn- run-workflow-internal
  [store executor scheduler registry workflow-id workflow-fn args
   {:keys [observer max-iterations wake-fn]
    :or {max-iterations 1000}}]
  (loop [iteration 0]
    (when (>= iteration max-iterations)
      (throw (ex-info "Max iterations exceeded" {:workflow-id workflow-id
                                                 :iterations iteration})))

    ;; Check cancellation at start of each iteration
    (when (is-cancelled? store workflow-id)
      (when observer
        (on-workflow-cancelled observer workflow-id))
      (save-event store workflow-id {:event-type :workflow-cancelled
                                     :timestamp (System/currentTimeMillis)})
      (throw (ex-info "Workflow cancelled" {:workflow-id workflow-id})))

    (let [history (load-history store workflow-id)
          pending-events (atom [])
          pending-asyncs (atom [])
          ctx {:history (atom history)
               :workflow-id workflow-id
               :seq-counter (atom 0)
               :pending-events pending-events
               :pending-asyncs pending-asyncs
               :store store
               :registry registry
               :observer observer}
          exec-result (binding [*workflow-context* ctx]
                        (execute-workflow-fn workflow-fn args))]

      (case (:status exec-result)
        :completed
        (do
          ;; Process any remaining pending asyncs before completing
          (when (seq (:pending-asyncs exec-result))
            (process-pending-asyncs-parallel store executor workflow-id
                                             (:pending-asyncs exec-result)
                                             (:pending-events exec-result)
                                             observer))
          (when (and (empty? (:pending-asyncs exec-result))
                     (seq (:pending-events exec-result)))
            (save-events store workflow-id (:pending-events exec-result)))
          (save-event store workflow-id {:event-type :workflow-completed
                                         :result (:result exec-result)
                                         :timestamp (System/currentTimeMillis)})
          (when observer
            (on-workflow-completed observer workflow-id (:result exec-result)))
          {:status :completed
           :result (:result exec-result)})

        :cancelled
        (do
          (save-events store workflow-id (:pending-events exec-result))
          (save-event store workflow-id {:event-type :workflow-cancelled
                                         :timestamp (System/currentTimeMillis)})
          (when observer
            (on-workflow-cancelled observer workflow-id))
          {:status :cancelled
           :workflow-id workflow-id})

        :suspended
        (let [pending-asyncs-list (:pending-asyncs exec-result)
              pending-events-list (:pending-events exec-result)

              _ (when observer
                  (on-workflow-suspended observer workflow-id (:suspension-type exec-result)))

              action (case (:suspension-type exec-result)
                       :activity
                       (if (seq pending-asyncs-list)
                         (do
                           (process-pending-asyncs-parallel store executor workflow-id
                                                            pending-asyncs-list
                                                            pending-events-list
                                                            observer)
                           :continue)
                         (process-pending-activity store executor workflow-id
                                                   (:suspension-data exec-result)
                                                   pending-events-list
                                                   observer))

                       :timer
                       (process-timer store scheduler workflow-id
                                      (:suspension-data exec-result)
                                      pending-events-list
                                      wake-fn
                                      observer)

                       :wait-signal
                       (process-signal store workflow-id
                                       (:suspension-data exec-result)
                                       pending-events-list
                                       observer)

                       :wait-signal-timeout
                       (process-signal-with-timeout store scheduler workflow-id
                                                    (:suspension-data exec-result)
                                                    pending-events-list
                                                    wake-fn
                                                    observer)

                       :join-pending
                       (process-join-pending store executor workflow-id
                                             (:suspension-data exec-result)
                                             pending-events-list
                                             pending-asyncs-list
                                             observer)

                       :join-any-pending
                       (do
                         (when (seq pending-asyncs-list)
                           (process-pending-asyncs-parallel store executor workflow-id
                                                            pending-asyncs-list
                                                            pending-events-list
                                                            observer))
                         :continue)

                       :child-workflow
                       (process-child-workflow store executor scheduler registry
                                               workflow-id
                                               (:suspension-data exec-result)
                                               pending-events-list
                                               observer))]

          (when observer
            (when (= action :continue)
              (on-workflow-resumed observer workflow-id)))

          (case action
            :continue (recur (inc iteration))
            :wait-signal {:status :waiting-signal
                          :workflow-id workflow-id}
            :wait-signal-timeout {:status :waiting-signal-timeout
                                  :workflow-id workflow-id}
            :wait-timer {:status :waiting-timer
                         :workflow-id workflow-id}
            :wait-async {:status :waiting-async
                         :workflow-id workflow-id}))

        :failed
        (do
          (save-events store workflow-id (:pending-events exec-result))
          (save-event store workflow-id {:event-type :workflow-failed
                                         :error (throwable->map (:error exec-result))
                                         :timestamp (System/currentTimeMillis)})
          (when observer
            (on-workflow-failed observer workflow-id (throwable->map (:error exec-result))))
          {:status :failed
           :error (:error exec-result)})))))

;; ============================================================================
;; Public API
;; ============================================================================

(defn start-workflow
  "Start a workflow execution.

   Arguments:
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
  [store executor scheduler registry workflow-fn args
   & {:keys [workflow-id observer max-iterations]
      :or {max-iterations 1000}}]
  (let [wf-id (or workflow-id (str (UUID/randomUUID)))]
    (save-event store wf-id {:event-type :workflow-started
                             :workflow-id wf-id
                             :args (vec args)
                             :timestamp (System/currentTimeMillis)})
    (when observer
      (on-workflow-started observer wf-id args))
    (run-workflow-internal store executor scheduler registry wf-id workflow-fn args
                           {:observer observer
                            :max-iterations max-iterations})))

(defn resume-workflow
  "Resume a waiting workflow (e.g., after signal delivery or timer).

   Arguments:
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
  [store executor scheduler registry workflow-id workflow-fn args
   & {:keys [observer max-iterations]
      :or {max-iterations 1000}}]
  (when observer
    (on-workflow-resumed observer workflow-id))
  (run-workflow-internal store executor scheduler registry workflow-id workflow-fn args
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
  (let [id (or signal-id (str (UUID/randomUUID)))]
    (add-signal store workflow-id signal-name {:id id :payload payload})
    {:signal-id id}))

(defn cancel-workflow
  "Cancel a running workflow.
   The workflow will be cancelled at the next suspension point."
  [store workflow-id]
  (mark-cancelled store workflow-id)
  {:cancelled true :workflow-id workflow-id})

(defn get-workflow-history
  "Get the history of a workflow"
  [store workflow-id]
  (load-history store workflow-id))

(defn get-workflow-result
  "Get the final result of a completed workflow, or nil if not completed"
  [store workflow-id]
  (let [history (load-history store workflow-id)
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
   - :threads - Number of executor threads (default: 4)
   - :scheduler-threads - Number of scheduler threads (default: 2)
   - :default-timeout-ms - Default activity timeout (default: 30000)
   - :enable-logging - Enable logging observer (default: false)"
  [& {:keys [threads scheduler-threads default-timeout-ms enable-logging]
      :or {threads 4
           scheduler-threads 2
           default-timeout-ms 30000
           enable-logging false}}]
  (let [registry (make-registry)
        log-atom (when enable-logging (atom []))]
    {:store (->InMemoryStore (atom {}))
     :executor (make-parallel-executor registry
                                       :threads threads
                                       :default-timeout-ms default-timeout-ms)
     :scheduler (make-scheduler :threads scheduler-threads)
     :registry registry
     :observer (if enable-logging
                 (make-logging-observer log-atom)
                 (noop-observer))
     :log (when enable-logging log-atom)}))

(defn shutdown-engine
  "Shutdown all components of a workflow engine"
  [{:keys [executor scheduler]}]
  (shutdown-executor executor)
  (shutdown-scheduler scheduler))

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

;; ============================================================================
;; Example Usage
;; ============================================================================


;; Define activities
(defn activity-fn [arg]
  (println "activity called" arg)
  [:some arg])

(defn slow-activity [x]
  (println (str "slow activity START with " x " on thread " (.getName (Thread/currentThread))))
  (Thread/sleep 1000)
  (println (str "slow activity END with " x))
  (* x 2))

(defn flaky-activity [x]
  (if true ;(< (rand) 0.7)
    (throw (ex-info "Random failure" {:x x}))
    (* x 3)))

(defn failing-activity [x]
  (throw (ex-info "Always fails" {:x x})))

;; Create engine
(def engine (make-workflow-engine :threads 4 :enable-logging true))

;; Register activities
(register-activity! (:registry engine) #'slow-activity)
(register-activity! (:registry engine) #'activity-fn)
(register-activity! (:registry engine) #'flaky-activity
                    :retry-policy (make-retry-policy :max-attempts 5))
(register-activity! (:registry engine) #'failing-activity)

;; Parallel workflow
(defn my-parallel-flow [id]
  (println "Workflow start with id:" id)
  (let [slow  (stub #'slow-activity)
        prom1 (async #(slow 1))
        prom2 (async #(slow 2))
        prom3 (async #(slow 3))
        prom4 (async #(slow 4))]
    (println "After async calls - all scheduled")
    {:status  :shipped
     :slow (slow 0)
     :results (join-all [prom1 prom2 prom3 prom4])
     :id      id}))

;; Run parallel example
(println "\n=== Parallel Workflow ===")
(println "Starting at:" (System/currentTimeMillis))
(let [result (start-workflow (:store engine)
                             (:executor engine)
                             (:scheduler engine)
                             (:registry engine)
                             my-parallel-flow [123]
                             :workflow-id "parallel-flow"
                             :observer (:observer engine))]
  (println "Finished at:" (System/currentTimeMillis))
  (println "Result:" result))

(comment

  ;; Workflow with error handling
  (defn error-handling-flow [id]
    (let [flaky (stub #'flaky-activity)]
      {:result (flaky id)}))

  (println "\n=== Error Handling Workflow ===")
  (start-workflow (:store engine)
                  (:executor engine)
                  (:scheduler engine)
                  (:registry engine)
                  error-handling-flow [42]
                  :workflow-id "error-flow"
                  :observer (:observer engine))

  ;; Workflow with timer
  (defn timed-flow [id]
    (println "Starting timed flow")
    (let [act (stub #'activity-fn)]
      (println "Sleeping for 2 seconds...")
      (sleep 2000)
      (println "Woke up!")
      {:result (act id)}))

  (println "\n=== Timed Workflow ===")
  (start-workflow (:store engine)
                  (:executor engine)
                  (:scheduler engine)
                  (:registry engine)
                  timed-flow [456]
                  :workflow-id "timed-flow"
                  :observer (:observer engine))

  ;; Workflow with signal
  (defn signal-flow [id]
    (println "Waiting for approval signal...")
    (let [approval (wait-for-signal "approval")
          act      (stub #'activity-fn)]
      (println "Got approval:" approval)
      {:approved approval
       :result   (act id)}))

  (println "\n=== Signal Workflow ===")
  (let [wf-id   "signal-flow"
        result1 (start-workflow (:store engine)
                                (:executor engine)
                                (:scheduler engine)
                                (:registry engine)
                                signal-flow [789]
                                :workflow-id wf-id
                                :observer (:observer engine))]
    (println "Initial result:" result1)
    (when (= :waiting-signal (:status result1))
      (println "Sending signal...")
      (send-signal (:store engine) wf-id "approval" {:approved-by "admin"})
      (println "Resuming...")
      (println "Final result:"
               (resume-workflow (:store engine)
                                (:executor engine)
                                (:scheduler engine)
                                (:registry engine)
                                wf-id signal-flow [789]
                                :observer (:observer engine)))))

  ;; Workflow with signal timeout
  (defn signal-timeout-flow [id]
    (println "Waiting for approval with timeout...")
    (let [result (wait-for-signal-with-timeout "approval" 3000)
          act    (stub #'activity-fn)]
      (if (:received result)
        {:approved (:payload result)
         :result   (act id)}
        {:timed-out true
         :result    (act (* id -1))})))

  ;; Child workflow example
  (defn child-flow [x]
    (let [act (stub #'activity-fn)]
      {:child-result (act x)}))

  (defn parent-flow [id]
    (println "Parent workflow starting")
    (let [act          (stub #'activity-fn)
          child-result (run-child-workflow child-flow [(* id 10)])]
      {:parent-result (act id)
       :child         child-result}))

  (println "\n=== Parent/Child Workflow ===")
  (start-workflow (:store engine)
                  (:executor engine)
                  (:scheduler engine)
                  (:registry engine)
                  parent-flow [5]
                  :workflow-id "parent-flow"
                  :observer (:observer engine))

  ;; Cancellation example
  (defn long-flow [id]
    (let [slow (stub #'slow-activity)]
      (dotimes [i 10]
        (println "Step" i)
        (slow i)
        (sleep 500))
      {:done true}))

  (println "\n=== Cancellation ===")
  (future
    (Thread/sleep 2500)
    (println "Cancelling workflow...")
    (cancel-workflow (:store engine) "cancel-flow"))

  (try
    (start-workflow (:store engine)
                    (:executor engine)
                    (:scheduler engine)
                    (:registry engine)
                    long-flow [1]
                    :workflow-id "cancel-flow"
                    :observer (:observer engine))
    (catch Exception e
      (println "Workflow cancelled:" (.getMessage e))))

  ;; View logs
  (println "\n=== Event Log ===")
  (doseq [event @(:log engine)]
    (println (:event event) "-" (dissoc event :event :timestamp)))

  ;; View history
  (println "\n=== Workflow History ===")
  (doseq [event (get-workflow-history (:store engine) "parallel-flow")]
    (println (:event-type event) "seq:" (:seq event)))

  ;; Cleanup
  (shutdown-engine engine)

  ;; Using the convenience macro
  (with-workflow-engine [eng {:threads 4 :enable-logging true}]
    (register-activity! (:registry eng) #'activity-fn)
    (register-activity! (:registry eng) #'slow-activity)
    (let [result (start-workflow (:store eng)
                                 (:executor eng)
                                 (:scheduler eng)
                                 (:registry eng)
                                 my-parallel-flow [999]
                                 :observer (:observer eng))]
      (println "Result:" result))))
