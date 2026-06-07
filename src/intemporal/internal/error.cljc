(ns intemporal.internal.error
  #?(:cljs (:require [clojure.string :as str]))
  #?(:clj (:import (clojure.lang IExceptionInfo))))


;; ============================================================================
;; Exceptions and Error Handling
;; ============================================================================
(defn- internal-error
  "Internal exception constructor, subclasses error to prevent userland code to caught this
  exception in `(try ... (catch Exception e))` blocks"
  ([message data]
   (internal-error message data nil))
  ([message data cause]
   #?(:clj
      (proxy [Error IExceptionInfo] [message cause]
        (getData [] data)
        (toString []
          (str message
               (when data (str " " (pr-str data)))
               (when cause (str "\nCaused by: " cause)))))
      :cljs
      (let [err (js/Error. message)]
        (set! (.-data err) data)
        (set! (.-cause err) cause)
        err))))

(defn make-suspension [type data]
  (internal-error "Workflow suspended" {:type type :data data ::suspension true}))

(defn suspension? [e]
  #?(:clj
     (and (instance? Error e)
          (instance? IExceptionInfo e)
          (::suspension (ex-data e)))
     :cljs
     (and (instance? js/Error e)
          (.-data e)
          (::suspension (.-data e)))))

(defn interruption? [e]
  #?(:clj
     (and (instance? IExceptionInfo e)
          (::activity-interrupted (ex-data e)))
     :cljs
     (and (instance? js/Error e)
          (or (and (.-data e) (::activity-interrupted (.-data e)))
              (::activity-interrupted (ex-data e))))))

(defn rejection? [e]
  #?(:clj
     (and (instance? IExceptionInfo e)
          (::rejected (ex-data e)))
     :cljs
     (and (instance? js/Error e)
          (or (and (.-data e) (::rejected (.-data e)))
              (::rejected (ex-data e))))))

(defn suspension-type [e]
  #?(:clj (-> e ex-data :type)
     :cljs (if (.-data e)
             (-> (.-data e) :type)
             (-> e ex-data :type))))

(defn suspension-data [e]
  #?(:clj (-> e ex-data :data)
     :cljs (if (.-data e)
             (-> (.-data e) :data)
             (-> e ex-data :data))))

(defn workflow-cancelled-exception []
  ;; A plain ex-info (catchable by `(catch Exception ...)`) - unlike suspensions,
  ;; which subclass Error to stay invisible to userland catches. This lets a saga
  ;; workflow catch cancellation and run compensations to roll completed steps
  ;; back, while still letting suspensions propagate to the engine untouched.
  (ex-info "Workflow cancelled" {::cancelled true}))

(defn cancelled-exception? [e]
  #?(:clj
     (and (instance? IExceptionInfo e)
          (::cancelled (ex-data e)))
     :cljs
     (and (instance? js/Error e)
          (.-data e)
          (::cancelled (.-data e)))))

(defn activity-rejected-exception [activity-name cause]
  (ex-info "Execution rejected"
           {::rejected     true
            :cause         cause
            :activity-name activity-name}))


(defn activity-timeout-exception [activity-name timeout-ms]
  (ex-info "Activity timed out"
           {::activity-timeout true
            :activity-name     activity-name
            :timeout-ms        timeout-ms}))

(defn activity-interrupted-exception [activity-name cause]
  (ex-info "Activity interrupted"
           {::activity-interrupted true
            :cause                 cause
            :activity-name         activity-name}))

(defn activity-failed-exception [activity-name cause]
  (ex-info "Activity failed"
           {::activity-failed true
            :activity-name    activity-name}
           cause))

(defn async-failed-exception [handle-seq cause]
  (ex-info "Async operation failed"
           {::async-failed true
            :handle-seq    handle-seq
            :cause         cause}))

(defn exception-kind
  "Classify an intemporal exception by the marker key in its ex-data, returning a
   stable keyword (or nil for a plain/unknown exception). Survives JSON round-trips
   because it is stored explicitly as :exception-kind in the serialized map."
  [data]
  (when (map? data)
    (cond
      (::cancelled data)            :cancelled
      (::rejected data)             :rejected
      (::activity-timeout data)     :activity-timeout
      (::activity-interrupted data) :activity-interrupted
      (::activity-failed data)      :activity-failed
      (::async-failed data)         :async-failed
      (::suspension data)           :suspension)))

(defn throwable->map [t]
  (when t
    (let [data #?(:clj (when (instance? IExceptionInfo t) (ex-data t))
                  :cljs (or (.-data t) (ex-data t)))]
      (cond-> #?(:clj
                 {:type        (str (type t))
                  :message     (ex-message t)
                  :data        data
                  :stack-trace (mapv str (.getStackTrace t))
                  :cause       (throwable->map (.getCause t))}
                 :cljs
                 {:type        (str (type t))
                  :message     (.-message t)
                  :data        data
                  :stack-trace (when (.-stack t)
                                 (str/split-lines (.-stack t)))
                  :cause       (when (.-cause t)
                                 (throwable->map (.-cause t)))})
        (exception-kind data) (assoc :exception-kind (exception-kind data))))))

(defn map->exception
  "Reconstruct an exception from a serialized map. Dispatches on :exception-kind
   (added by throwable->map) so type predicates such as cancelled-exception? keep
   working on replayed/resumed errors; falls back to a generic ex-info otherwise."
  [m]
  (when m
    (let [{:keys [data]} m
          activity-name (:activity-name data)]
      (case (some-> (:exception-kind m) keyword)
        :cancelled            (workflow-cancelled-exception)
        :rejected             (activity-rejected-exception activity-name (:cause data))
        :activity-timeout     (activity-timeout-exception activity-name (:timeout-ms data))
        :activity-interrupted (activity-interrupted-exception activity-name (:cause data))
        :activity-failed      (activity-failed-exception activity-name
                                                         (when-let [c (:cause m)] (map->exception c)))
        :async-failed         (async-failed-exception (:handle-seq data) (:cause data))
        ;; Unknown / plain exception: preserve the original data and mark restored.
        (ex-info (or (:message m) "Restored exception")
                 (merge {:restored true} data))))))
