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
  (internal-error "Workflow cancelled" {::cancelled true}))

(defn cancelled-exception? [e]
  #?(:clj
     (and (instance? Error e)
          (instance? IExceptionInfo e)
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

(defn throwable->map [t]
  (when t
    #?(:clj
       {:type        (str (type t))
        :message     (ex-message t)
        :data        (when (instance? IExceptionInfo t)
                       (ex-data t))
        :stack-trace (mapv str (.getStackTrace t))
        :cause       (throwable->map (.getCause t))}
       :cljs
       {:type        (str (type t))
        :message     (.-message t)
        :data        (or (.-data t) (ex-data t))
        :stack-trace (when (.-stack t)
                       (str/split-lines (.-stack t)))
        :cause       (when (.-cause t)
                       (throwable->map (.-cause t)))})))

(defn map->exception [m]
  (when m
    (ex-info (or (:message m) "Restored exception")
             (merge {:restored true} (:data m)))))
