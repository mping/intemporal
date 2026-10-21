(ns intemporal.internal.runtime
  (:require
   [intemporal.internal.error :as error]
   [intemporal.internal.logging :as log]
   [intemporal.internal.throwable :as throwable]
   [intemporal.protocol :as p]
   [intemporal.tracing :as tracing])
  (:import
   (java.util.concurrent ArrayBlockingQueue BlockingQueue CancellationException ExecutorService Executors Future RejectedExecutionException RejectedExecutionHandler ThreadPoolExecutor TimeUnit TimeoutException)))

;; ============================================================================
;; Default Parallel Executor
;; ============================================================================

(defn- failure
  "A failed parallel-activity result. Carries BOTH the serialized `:error` (which
   is what gets persisted) and the live `:exception`: the engine decides retries
   from this result, and a user `:retryable-fn` is written against an exception
   (`#(instance? SQLException %)`), so handing it a map would silently answer
   false and no async activity would ever retry."
  [e]
  (if (map? e)
    {:status :failed :error e :exception (error/map->exception e)}
    {:status :failed :error (error/throwable->map e) :exception e}))

(defn- await-activity
  [^Future future timeout activity-name]
  (try
    (let [result (if timeout (.get future timeout TimeUnit/MILLISECONDS) (.get future))]
      {:status :success :result (:result result) :duration (:duration result)})
    (catch TimeoutException _
      (.cancel future true)
      (failure (error/activity-timeout-exception activity-name timeout)))
    (catch InterruptedException e
      (.interrupt (Thread/currentThread))
      (.cancel future true)
      (failure (error/activity-interrupted-exception activity-name e)))
    (catch CancellationException e
      (failure (error/activity-interrupted-exception activity-name e)))
    (catch Exception e
      (let [cause (or (.getCause e) e)]
        (failure (if (throwable/interrupted? e)
                   (error/activity-interrupted-exception activity-name cause)
                   cause))))))

(defrecord ParallelActivityExecutor [^ExecutorService pool
                                     registry-atom
                                     default-timeout-ms]
  p/IActivityExecutor
  (execute-activity [_ activity-name args timeout-ms]
    (let [act     (get @registry-atom activity-name)
          timeout (or timeout-ms default-timeout-ms)]
      (if (nil? act)
        (throw (ex-info "Activity not found" {:activity-name activity-name}))
        (let [parent-ctx (tracing/capture)
              future (.submit pool ^Callable
                              (fn []
                                (tracing/traced-call parent-ctx (str "activity: " activity-name)
                                                     {:intemporal.activity/name activity-name}
                                                     (fn [] (apply (:fn act) args)))))]
          (try
            (if timeout
              (.get ^Future future timeout TimeUnit/MILLISECONDS)
              (.get ^Future future))
            (catch TimeoutException _
              (.cancel ^Future future true)
              (throw (error/activity-timeout-exception activity-name timeout)))
            (catch InterruptedException e
              (throw (error/activity-interrupted-exception activity-name (or (.getCause e) e))))
            (catch Exception e
              (throw (error/activity-failed-exception activity-name
                                                      (or (.getCause e) e)))))))))

  (execute-activities-parallel [_ activities]
    (if (empty? activities)
      []
      (let [parent-ctx (tracing/capture)
            watchers (Executors/newVirtualThreadPerTaskExecutor)
            submitted (atom [])]
        (try
          ;; Start each timeout watcher immediately, before submitting the next task.
          ;; Collection order and bounded-pool backpressure cannot delay its timeout.
          (let [results
                (mapv
                  (fn [{:keys [activity-name args timeout-ms]}]
                    (let [act (get @registry-atom activity-name)
                          timeout (or timeout-ms default-timeout-ms)]
                      (if-not act
                        {:value (failure (ex-info "Activity not found" {:activity-name activity-name}))}
                        (try
                          (let [future (.submit pool ^Callable
                                         (fn []
                                           (tracing/traced-call
                                             parent-ctx (str "activity: " activity-name)
                                             {:intemporal.activity/name activity-name}
                                             (fn []
                                               (let [start (System/currentTimeMillis)]
                                                 {:result (apply (:fn act) args)
                                                  :duration (- (System/currentTimeMillis) start)})))))
                                _ (swap! submitted conj future)]
                            {:activity-name activity-name
                             :watcher (.submit watchers ^Callable
                                        (reify java.util.concurrent.Callable
                                          (call [_] (await-activity future timeout activity-name))))})
                          (catch RejectedExecutionException e
                            {:value (failure (error/activity-rejected-exception activity-name e))})))))
                  activities)]
            (mapv (fn [{:keys [value watcher activity-name]}]
                    (or value
                        (try
                          (.get ^Future watcher)
                          (catch InterruptedException e
                            (.interrupt (Thread/currentThread))
                            (failure (error/activity-interrupted-exception activity-name e))))))
                  results))
          (finally
            ;; Interrupting a drive also stops its watchers and unfinished activities.
            (doseq [^Future future @submitted :when (not (.isDone future))]
              (.cancel future true))
            (.shutdownNow watchers))))))

  (shutdown-executor [_ grace-period-secs]
    (try
      (.shutdown pool)
      (when-not (.awaitTermination pool grace-period-secs TimeUnit/SECONDS)
        (.shutdownNow pool)
        (when-not (.awaitTermination pool grace-period-secs TimeUnit/SECONDS)
          (log/error "Could not terminate all threads")))
      (catch InterruptedException e
        (log/error e "Interrupted while shutting down pool"))))

  (shutdown? [_]
    ;; Acceptance stops before in-flight tasks finish; termination is too late.
    (.isShutdown pool)))

(defn backpressure-rejection-handler
  "Rejection handler for the bounded executor: waits for a queue slot instead of
   running the task on the calling thread.

   The previous `CallerRunsPolicy` ran a saturating activity inline on the
   workflow drive thread and handed back an already-completed future, so the
   `.get timeout` in `execute-activity` / `execute-activities-parallel` could
   never fire — activity timeouts were silently unenforced and a hung activity
   hung the whole drive loop. Blocking on the queue keeps every activity on a
   pool thread (timeout enforced against real execution) and turns saturation
   into ordinary backpressure.

   Rejection is reserved for the two cases the engine can actually act on:
   a closing pool, and a wait that exceeds `submit-timeout-ms`. Both surface as
   `RejectedExecutionException`, which `attempt-once` / `execute-activities-parallel`
   classify as `:rejected` so `stub` and `async` RESCHEDULE rather than replay a
   durable failure. Keeping rejection rare avoids unnecessary replay passes."
  ^RejectedExecutionHandler [submit-timeout-ms]
  (reify RejectedExecutionHandler
    (rejectedExecution [_ task pool]
      (let [^ThreadPoolExecutor pool pool]
        (when (.isShutdown pool)
          (throw (RejectedExecutionException.
                   "Activity rejected: executor is shutting down")))
        (let [^BlockingQueue queue (.getQueue pool)]
          (when-not (try
                      (.offer queue task (long submit-timeout-ms) TimeUnit/MILLISECONDS)
                      (catch InterruptedException e
                        ;; Preserve the flag: the engine's interrupt-error? guard
                        ;; must still see that this drive was interrupted.
                        (.interrupt (Thread/currentThread))
                        (throw (RejectedExecutionException.
                                 "Activity rejected: interrupted while waiting for a slot" e))))
            (throw (RejectedExecutionException.
                     (str "Activity rejected: no executor slot after " submit-timeout-ms "ms")))))))))

(defn create-bounded-executor
  "Creates a bounded ThreadPoolExecutor with virtual threads.

   `queue-capacity` is decoupled from `max-concurrent` so a fan-out modestly
   larger than the concurrency bound queues instead of contending for the
   backpressure timeout. `submit-timeout-ms` bounds how long a saturated submit
   blocks the drive thread before degrading to `:rejected`."
  ([max-concurrent queue-capacity]
   (create-bounded-executor max-concurrent queue-capacity 30000))
  ([max-concurrent queue-capacity submit-timeout-ms]
   (ThreadPoolExecutor.
     (int max-concurrent)                    ; core pool size
     (int max-concurrent)                    ; max pool size
     0                                       ; keep alive time
     TimeUnit/MILLISECONDS
     (ArrayBlockingQueue. (int queue-capacity))
     (.factory (Thread/ofVirtual))
     (backpressure-rejection-handler submit-timeout-ms))))

(defn make-vthreads-executor
  "Create an executor that runs activities in parallel using a thread pool.

   Options:
   - :max-concurrent (alias :threads) - cap on concurrently executing activities.
     Defaults to nil = unbounded (one virtual thread per activity).
   - :queue-capacity - depth of the wait queue when bounded (default: 8x the bound)
   - :submit-timeout-ms - how long a saturated submit waits for a slot before
     degrading to :rejected (default: default-timeout-ms)
   - :default-timeout-ms - default per-activity timeout (default: 30000)"
  [activity-registry-atom & {:keys [max-concurrent threads queue-capacity
                                    submit-timeout-ms default-timeout-ms]
                             :or   {default-timeout-ms 30000}}]
  ;; `:threads` is the public option; accept the internal alias too so neither
  ;; call site can silently drop the bound.
  (let [max-concurrent (or max-concurrent threads)]
    (->ParallelActivityExecutor
      (if max-concurrent
        (create-bounded-executor max-concurrent
                                 (or queue-capacity (* 8 max-concurrent))
                                 (or submit-timeout-ms default-timeout-ms))
        (Executors/newVirtualThreadPerTaskExecutor))
      activity-registry-atom
      default-timeout-ms)))
