(ns intemporal.internal.runtime
  (:require-macros
   [intemporal.internal.logging :as log])
  (:require
   [intemporal.internal.error :as error]
   [intemporal.internal.logging :as log]
   [intemporal.protocol :as p]
   [intemporal.internal.clock :as clock]))

;; ============================================================================
;; Helper Functions
;; ============================================================================

(def ^:private timeout-sentinel
  ;; A private identity token cannot collide with an ordinary activity result.
  (js-obj))

(defn- timeout-result? [result]
  (identical? timeout-sentinel result))

(defn- promise-with-timeout
  "Execute promise-fn with optional timeout. If timeout-ms is provided,
   races the promise against a timeout promise.
   Clears the timeout timer when the race settles to avoid keeping the
   Node.js event loop alive."
  [promise-fn timeout-ms]
  (if timeout-ms
    (let [timer-id (atom nil)
          timeout-p (js/Promise.
                      (fn [resolve _]
                        (reset! timer-id
                          (js/setTimeout #(resolve timeout-sentinel) timeout-ms))))]
      (-> (js/Promise.race #js [promise-fn timeout-p])
          (.then (fn [result]
                   (when-let [id @timer-id] (js/clearTimeout id))
                   result))
          (.catch (fn [err]
                    (when-let [id @timer-id] (js/clearTimeout id))
                    (throw err)))))
    promise-fn))

;; ============================================================================
;; Activity Execution with Retry
;; ============================================================================

(defn- execute-activity-once
  "Execute an activity function exactly once. Returns a promise resolving to
   {:result ... :duration ...}.

   Retrying used to live here, invisibly to the engine: this code has no store,
   workflow-id or seq in scope, so nothing about an attempt could be recorded and
   every crash restarted the count at 1. The engine owns the retry
   loop now."
  [activity-fn args timeout-ms activity-name]
  (let [start-time (clock/now-ms)]
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
            (if (timeout-result? result)
              (throw (error/activity-timeout-exception
                       activity-name timeout-ms))
              {:result result
               :duration (- (clock/now-ms) start-time)}))))))

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
              (if (timeout-result? result)
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
              (fn [{:keys [activity-name args timeout-ms]}]
                (let [act (get @registry-atom activity-name)
                      timeout (or timeout-ms default-timeout-ms)]
                  (if (nil? act)
                    (js/Promise.reject
                      (ex-info (str "Activity not found: " activity-name)
                               {:activity-name activity-name
                                :known-activities (keys @registry-atom)}))
                    ;; Exactly one attempt; the engine decides about retries.
                    (execute-activity-once (:fn act) args timeout activity-name))))
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
                      ;; Carry BOTH the serialized :error (what gets persisted)
                      ;; and the live :exception: the engine decides retries from
                      ;; this result, and a user :retryable-fn is written against
                      ;; an exception, so handing it a map would silently answer
                      ;; false and no async activity would ever retry.
                      {:status :failed
                       :error (error/throwable->map (.-reason result))
                       :exception (.-reason result)}))
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
  [activity-registry-atom & {:keys [max-concurrent threads default-timeout-ms]
                             :or   {default-timeout-ms 30000}}]
  ;; Accept :threads too, mirroring the CLJ arity (the public :threads engine
  ;; option maps onto :max-concurrent). Debug, not warn: there is nothing the
  ;; caller can do about it, and start-engine forwards the option
  ;; unconditionally, so warning here fires on every engine construction.
  (when (or max-concurrent threads)
    (log/debug "max-concurrent is not supported in ClojureScript - all activities run concurrently via event loop"))
  (->ParallelActivityExecutor
    activity-registry-atom
    default-timeout-ms))
