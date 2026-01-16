(ns intemporal.internal.runtime
  (:require [intemporal.internal.error :as error]
            [intemporal.internal.activity :as activity]
            [intemporal.protocol :as p])
  (:import (java.util.concurrent ArrayBlockingQueue ExecutorService Executors Future ScheduledExecutorService ScheduledFuture ThreadPoolExecutor ThreadPoolExecutor$CallerRunsPolicy TimeUnit TimeoutException)))


;; ============================================================================
;; Default Scheduler Implementation
;; ============================================================================

(defrecord DefaultScheduler [^ScheduledExecutorService pool
                             pending-timers]
  p/IScheduler
  (schedule-timer [_ workflow-id seq-num fire-at callback]
    (let [delay-ms  (max 0 (- fire-at (System/currentTimeMillis)))
          timer-key [workflow-id seq-num]
          future    (.schedule pool
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
  p/IActivityExecutor
  (execute-activity [_ activity-name args timeout-ms]
    (let [act     (get @registry-atom activity-name)
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
              (throw (error/activity-timeout-exception activity-name timeout)))
            (catch Exception e
              (throw (error/activity-failed-exception activity-name
                                                      (or (.getCause e) e)))))))))

  (execute-activities-parallel [_ activities]
    (if (empty? activities)
      []
      (let [futures (mapv (fn [{:keys [activity-name args timeout-ms retry-policy]}]
                            (let [act     (get @registry-atom activity-name)
                                  timeout (or timeout-ms default-timeout-ms)]
                              (if (nil? act)
                                (throw (ex-info "Activity not found"
                                                {:activity-name activity-name}))
                                {:future        (.submit pool ^Callable
                                                         (fn []
                                                           (let [start (System/currentTimeMillis)]
                                                             (if (nil? retry-policy)
                                                               ;; No retry - execute once
                                                               {:result   (apply (:fn act) args)
                                                                :duration (- (System/currentTimeMillis) start)}
                                                               ;; With retry
                                                               (loop [attempt 1]
                                                                 (let [outcome (try
                                                                                 ;; 1. Try the operation
                                                                                 (let [result (apply (:fn act) args)]
                                                                                   {:status :success
                                                                                    :data   {:result   result
                                                                                             :duration (- (System/currentTimeMillis) start)
                                                                                             :attempts attempt}})
                                                                                 (catch Exception e
                                                                                   ;; 2. If it fails, determine if we should retry
                                                                                   (if (activity/should-retry? retry-policy e attempt)
                                                                                     (do
                                                                                       ;; Perform side-effects (logging, sleeping) here
                                                                                       (Thread/sleep (long (activity/calculate-backoff retry-policy attempt)))
                                                                                       ;; Return a signal value instead of recurring directly
                                                                                       {:status :retry})
                                                                                     ;; If we shouldn't retry, rethrow
                                                                                     (throw e))))]

                                                                   ;; 3. Check the outcome outside the try/catch
                                                                   (if (= (:status outcome) :retry)
                                                                     (recur (inc attempt)) ;; This is now in a valid tail position
                                                                     (:data outcome))))))))
                                 :timeout       timeout
                                 :activity-name activity-name})))
                          activities)]
        (mapv (fn [{:keys [^Future future timeout activity-name]}]
                (try
                  (let [result (if timeout
                                 (.get future timeout TimeUnit/MILLISECONDS)
                                 (.get future))]
                    {:status   :success
                     :result   (:result result)
                     :duration (:duration result)})
                  (catch TimeoutException _
                    (.cancel future true)
                    {:status :failed
                     :error  (error/throwable->map
                               (error/activity-timeout-exception activity-name timeout))})
                  (catch Exception e
                    {:status :failed
                     :error  (error/throwable->map (or (.getCause e) e))})))
              futures))))

  (shutdown-executor [_]
    (.shutdown pool)
    (.awaitTermination pool 30 TimeUnit/SECONDS)))

(defn create-bounded-executor
  "Creates a bounded ThreadPoolExecutor with virtual threads"
  [max-concurrent queue-capacity]
  (ThreadPoolExecutor.
    max-concurrent                          ; core pool size
    max-concurrent                          ; max pool size
    0                                       ; keep alive time
    TimeUnit/MILLISECONDS
    (ArrayBlockingQueue. queue-capacity)
    (.factory (Thread/ofVirtual))
    (ThreadPoolExecutor$CallerRunsPolicy.)))

(defn make-vthreads-executor
  "Create an executor that runs activities in parallel using a thread pool"
  [activity-registry-atom & {:keys [max-concurrent default-timeout-ms]
                             :or   {default-timeout-ms 30000}}]
  (->ParallelActivityExecutor
    (if max-concurrent
      (create-bounded-executor max-concurrent max-concurrent)
      (Executors/newVirtualThreadPerTaskExecutor))
    activity-registry-atom
    default-timeout-ms))


