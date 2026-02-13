(ns intemporal.internal.runtime
  (:require [intemporal.internal.error :as error]
            [intemporal.internal.activity :as activity]
            [intemporal.internal.logging :as log]
            [intemporal.protocol :as p]
            [intemporal.utils :as utils])
  (:require-macros [intemporal.internal.logging :as log]))

;; ============================================================================
;; Helper Functions
;; ============================================================================

(defn- promise-timeout
  "Create a promise that resolves with {:timeout true} after ms milliseconds"
  [ms]
  (js/Promise.
    (fn [resolve _reject]
      (js/setTimeout
        #(resolve {::timeout true})
        ms))))

(defn- promise-with-timeout
  "Execute promise-fn with optional timeout. If timeout-ms is provided,
   races the promise against a timeout promise."
  [promise-fn timeout-ms]
  (if timeout-ms
    (js/Promise.race
      #js [promise-fn (promise-timeout timeout-ms)])
    promise-fn))

(defn- async-sleep
  "Promise-based sleep for retry backoff"
  [ms]
  (js/Promise.
    (fn [resolve _reject]
      (js/setTimeout resolve ms))))

;; ============================================================================
;; Default Scheduler Implementation
;; ============================================================================

(defrecord DefaultScheduler [pending-timers]
  p/IScheduler

  (schedule-timer [_ workflow-id seq-num fire-at callback]
    (let [delay-ms  (max 0 (- fire-at (utils/current-time-ms)))
          timer-key [workflow-id seq-num]
          timer-id  (js/setTimeout
                      (fn []
                        (swap! pending-timers dissoc timer-key)
                        (callback))
                      delay-ms)]
      (swap! pending-timers assoc timer-key timer-id)
      timer-key))

  (cancel-timer [_ workflow-id seq-num]
    (let [timer-key [workflow-id seq-num]]
      (when-let [timer-id (get @pending-timers timer-key)]
        (js/clearTimeout timer-id)
        (swap! pending-timers dissoc timer-key))))

  (shutdown-scheduler [_ grace-period-secs]
    ;; Cancel all pending timers
    (doseq [[_ timer-id] @pending-timers]
      (js/clearTimeout timer-id))
    (reset! pending-timers {}))

  (shutdown-scheduler? [_]
    ;; In ClojureScript, scheduler is "terminated" when no timers pending
    (empty? @pending-timers)))

(defn make-scheduler
  "Create a new scheduler (threads option ignored in ClojureScript)"
  [& {:keys [threads] :or {threads 2}}]
  (->DefaultScheduler (atom {})))

;; ============================================================================
;; Activity Execution with Retry
;; ============================================================================

(defn- execute-activity-with-retry
  "Execute activity function with optional retry policy.
   Returns a promise that resolves with {:result ... :duration ... :attempts ...}"
  [activity-fn args timeout-ms retry-policy activity-name]
  (letfn [(attempt [attempt-num start-time]
            (-> (promise-with-timeout
                  (js/Promise.
                    (fn [resolve reject]
                      (try
                        (let [result (apply activity-fn args)]
                          ;; Handle both sync and async (promise-returning) activities
                          (if (instance? js/Promise result)
                            (.then result resolve reject)
                            (resolve result)))
                        (catch js/Error e
                          (reject e)))))
                  timeout-ms)
                (.then
                  (fn [result]
                    (if (::timeout result)
                      (throw (error/activity-timeout-exception
                               activity-name timeout-ms))
                      {:result result
                       :duration (- (utils/current-time-ms) start-time)
                       :attempts attempt-num})))
                (.catch
                  (fn [e]
                    ;; Check if should retry
                    (if (and retry-policy
                             (activity/should-retry? retry-policy e attempt-num))
                      ;; Retry after backoff
                      (let [backoff-ms (activity/calculate-backoff
                                         retry-policy attempt-num)]
                        (log/infof "Activity %s failed, retrying after %dms (attempt %d)"
                                   activity-name backoff-ms attempt-num)
                        (-> (async-sleep backoff-ms)
                            (.then (fn [_] (attempt (inc attempt-num) start-time)))))
                      ;; No retry - fail
                      (throw e))))))]
    (let [start-time (utils/current-time-ms)]
      (attempt 1 start-time))))

;; ============================================================================
;; Parallel Activity Executor
;; ============================================================================

(defrecord ParallelActivityExecutor [registry-atom default-timeout-ms]
  p/IActivityExecutor

  (execute-activity [_ activity-name args timeout-ms]
    (let [act     (get @registry-atom activity-name)
          timeout (or timeout-ms default-timeout-ms)]
      (if (nil? act)
        (throw (ex-info "Activity not found" {:activity-name activity-name}))
        (->
          (promise-with-timeout
            (js/Promise.
              (fn [resolve reject]
                (try
                  (let [result (apply (:fn act) args)]
                    ;; Handle both sync and async (promise-returning) activities
                    (if (instance? js/Promise result)
                      (.then result resolve reject)
                      (resolve result)))
                  (catch js/Error e
                    (reject e)))))
            timeout)
          (.then
            (fn [result]
              (if (::timeout result)
                (throw (error/activity-timeout-exception activity-name timeout))
                result)))
          (.catch
            (fn [e]
              (throw (error/activity-failed-exception activity-name e))))))))

  (execute-activities-parallel [_ activities]
    (if (empty? activities)
      (js/Promise.resolve #js [])
      (let [;; Create promise for each activity
            promises
            (mapv
              (fn [{:keys [activity-name args timeout-ms retry-policy]}]
                (let [act (get @registry-atom activity-name)
                      timeout (or timeout-ms default-timeout-ms)]
                  (if (nil? act)
                    (js/Promise.reject
                      (ex-info (str "Activity xxx not found " (keys @registry-atom)) {:activity-name activity-name :known-activities (keys @registry-atom)})
                      #_(ex-info "Activity not found"
                                 {:activity-name activity-name}))
                    ;; Execute with optional retry
                    (execute-activity-with-retry
                      (:fn act)
                      args
                      timeout
                      retry-policy
                      activity-name))))
              activities)]
        ;; Wait for all promises to settle
        (-> (js/Promise.allSettled (to-array promises))
            (.then
              (fn [results]
                ;; Convert PromiseSettledResult to our format
                (mapv
                  (fn [result]
                    (if (= (.-status result) "fulfilled")
                      {:status :success
                       :result (:result (.-value result))
                       :duration (:duration (.-value result))}
                      {:status :failed
                       :error (error/throwable->map (.-reason result))}))
                  results)))))))

  (shutdown-executor [_ grace-period-secs]
    ;; No-op in ClojureScript - no thread pool to shutdown
    ;; Promises that are running will complete naturally
    nil)

  (shutdown? [_]
    false))

;; ============================================================================
;; Factory Functions
;; ============================================================================

(defn make-vthreads-executor
  "Create an executor that runs activities using promises.
   Note: max-concurrent is ignored in ClojureScript - all activities
   run concurrently via the event loop (no true parallelism)."
  [activity-registry-atom & {:keys [max-concurrent default-timeout-ms]
                             :or   {default-timeout-ms 30000}}]
  (when max-concurrent
    (log/warn "max-concurrent is not supported in ClojureScript - all activities run concurrently via event loop"))
  (->ParallelActivityExecutor
    activity-registry-atom
    default-timeout-ms))
