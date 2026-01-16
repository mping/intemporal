(ns intemporal.internal.error)


;; ============================================================================
;; Exceptions and Error Handling
;; ============================================================================

(defn make-suspension [type data]
  (ex-info "Workflow suspended" {:type type :data data ::suspension true}))

(defn suspension? [e]
  (and (instance? clojure.lang.ExceptionInfo e)
       (::suspension (ex-data e))))

(defn suspension-type [e]
  (-> e ex-data :type))

(defn suspension-data [e]
  (-> e ex-data :data))

(defn workflow-cancelled-exception []
  (ex-info "Workflow cancelled" {::cancelled true}))

(defn cancelled-exception? [e]
  (and (instance? clojure.lang.ExceptionInfo e)
       (::cancelled (ex-data e))))

(defn activity-timeout-exception [activity-name timeout-ms]
  (ex-info "Activity timed out"
           {::activity-timeout true
            :activity-name activity-name
            :timeout-ms timeout-ms}))

(defn activity-failed-exception [activity-name cause]
  (ex-info "Activity failed"
           {::activity-failed true
            :activity-name activity-name}
           cause))

(defn async-failed-exception [handle-seq cause]
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