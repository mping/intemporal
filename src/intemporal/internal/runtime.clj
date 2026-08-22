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
      ;; Capture the workflow-thread context once so every parallel activity span
      ;; (each on its own pool thread) parents under the workflow trace.
      (let [parent-ctx (tracing/capture)
            futures (mapv (fn [{:keys [activity-name args timeout-ms]}]
                            (let [act     (get @registry-atom activity-name)
                                  timeout (or timeout-ms default-timeout-ms)]
                              (if (nil? act)
                                (throw (ex-info "Activity not found"
                                                {:activity-name activity-name}))
                                ;; The .submit must not escape this mapv. A saturated or
                                ;; closing pool rejects here, and an
                                ;; escaping RejectedExecutionException blows straight
                                ;; through process-pending-asyncs-parallel ->
                                ;; handle-suspension -> drive-workflow! (none of
                                ;; which catch it), killing the drive AND leaving the
                                ;; already-submitted activities' side effects with no
                                ;; recorded events. Instead degrade the same way the
                                ;; sequential path does (see attempt-once): record
                                ;; :rejected for whatever could not be submitted, let the
                                ;; futures that WERE submitted run to completion so their
                                ;; events are still written, and let `stub` / `async`
                                ;; reschedule the rejected ones on the next pass.
                                (try
                                  {:future        (.submit pool ^Callable
                                                           (fn []
                                                             (tracing/traced-call parent-ctx (str "activity: " activity-name)
                                                                                  {:intemporal.activity/name activity-name}
                                                                                  (fn []
                                                                                    ;; Exactly ONE attempt. Retrying here was invisible to the
                                                                                    ;; engine: this thread has no store, workflow-id or seq, so
                                                                                    ;; nothing about an attempt could be recorded and every crash
                                                                                    ;; restarted the count at 1. The engine now owns
                                                                                    ;; the retry loop, which also makes `timeout` bound a single
                                                                                    ;; attempt rather than the whole sequence.
                                                                                    (let [start (System/currentTimeMillis)]
                                                                                      {:result   (apply (:fn act) args)
                                                                                       :duration (- (System/currentTimeMillis) start)})))))
                                   :timeout       timeout
                                   :activity-name activity-name}
                                  (catch RejectedExecutionException e
                                    (log/warnf e "Activity %s rejected by executor; recording :rejected for reschedule" activity-name)
                                    {:rejected      (error/throwable->map
                                                      (error/activity-rejected-exception activity-name e))
                                     :activity-name activity-name})))))
                          activities)]
        (mapv (fn [{:keys [^Future future timeout activity-name rejected]}]
                (if rejected
                  ;; Never submitted: no side effect happened, so this is safe to
                  ;; re-run. The :rejected exception-kind is what makes `stub` /
                  ;; `async` reschedule instead of replaying a durable failure.
                  (failure rejected)
                  (try
                    (let [result (if timeout
                                   (.get future timeout TimeUnit/MILLISECONDS)
                                   (.get future))]
                      {:status   :success
                       :result   (:result result)
                       :duration (:duration result)})
                    (catch TimeoutException _
                      (.cancel future true)
                      (failure (error/activity-timeout-exception activity-name timeout)))
                    ;; An interrupt is infrastructure (engine shutdown), not a
                    ;; workflow outcome. It must be classified with
                    ;; the same :activity-interrupted kind the single-activity path
                    ;; uses (execute-activity), or the replay branches cannot tell it
                    ;; apart from a genuine failure and durably fail the workflow.
                    (catch InterruptedException e
                      ;; The collecting (drive) thread itself was interrupted. Re-arm
                      ;; the flag — .get cleared it — so the remaining collections and
                      ;; the engine's interrupt-error? guard still see the interrupt.
                      (.interrupt (Thread/currentThread))
                      (.cancel future true)
                      (failure (error/activity-interrupted-exception activity-name e)))
                    (catch CancellationException e
                      (failure (error/activity-interrupted-exception activity-name e)))
                    (catch Exception e
                      (let [cause (or (.getCause e) e)]
                        (failure (if (throwable/interrupted? e)
                                   ;; .shutdownNow interrupted the ACTIVITY thread:
                                   ;; arrives as ExecutionException(InterruptedException).
                                   (error/activity-interrupted-exception activity-name cause)
                                   cause)))))))
              futures))))

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
    ;; .isShutdown (not .isTerminated): the executor stops ACCEPTING work the
    ;; moment shutdown is initiated. Using isTerminated left a window where the
    ;; drive loop kept scheduling activities into a closing pool — each submit
    ;; rejected, each rejection rescheduled — spinning through the replay budget
    ;; and wrongly finalizing the workflow as :failed during engine shutdown.
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
   durable failure. Keeping rejection rare matters: every reschedule costs a
   replay iteration, and budget exhaustion still finalizes a workflow as
   `:failed`."
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
