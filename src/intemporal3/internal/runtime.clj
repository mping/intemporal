(ns intemporal3.internal.runtime
  (:require [intemporal3.internal.error :as error]
            [intemporal3.protocol :as p])
  (:import (java.util.concurrent ExecutorService Executors Future ScheduledExecutorService ScheduledFuture TimeUnit TimeoutException)))


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
      (let [futures (mapv (fn [{:keys [activity-name args timeout-ms]}]
                            (let [act     (get @registry-atom activity-name)
                                  timeout (or timeout-ms default-timeout-ms)]
                              (if (nil? act)
                                (throw (ex-info "Activity not found"
                                                {:activity-name activity-name}))
                                {:future        (.submit pool ^Callable
                                                         (fn []
                                                           (let [start (System/currentTimeMillis)]
                                                             {:result   (apply (:fn act) args)
                                                              :duration (- (System/currentTimeMillis) start)})))
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

(defn make-parallel-executor
  "Create an executor that runs activities in parallel using a thread pool"
  [activity-registry-atom & {:keys [threads default-timeout-ms]
                             :or   {threads 4 default-timeout-ms 30000}}]
  (->ParallelActivityExecutor
    (Executors/newFixedThreadPool threads)
    activity-registry-atom
    default-timeout-ms))
