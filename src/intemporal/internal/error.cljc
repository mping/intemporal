(ns intemporal.internal.error
  #?(:cljs
     (:require
      [clojure.string :as str]))
  #?(:clj
     (:import
      (clojure.lang IExceptionInfo))))

;; ============================================================================
;; Exceptions and Error Handling
;; ============================================================================

;; In ClojureScript every js/Error is caught by (catch js/Error e). To mirror
;; the JVM split — where suspensions subclass Error and are excluded from
;; (catch Exception e) — we define WorkflowSuspension as a plain deftype that
;; does NOT extend js/Error. This means (catch js/Error e) in user saga code
;; never intercepts a suspension, exactly like (catch Exception e) on the JVM.
#?(:cljs
   (deftype WorkflowSuspension [message data cause]))

(defn- internal-error
  "Internal exception constructor. On JVM subclasses Error so (catch Exception)
   excludes it. On CLJS uses WorkflowSuspension (not a js/Error subclass) so
   (catch js/Error) excludes it."
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
      (WorkflowSuspension. message data cause))))

(defn make-suspension [type data]
  (internal-error "Workflow suspended" {:type type :data data ::suspension true}))

(defn suspension? [e]
  #?(:clj
     (and (instance? Error e)
          (instance? IExceptionInfo e)
          (::suspension (ex-data e)))
     :cljs
     (and (instance? WorkflowSuspension e)
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

(def ^:dynamic *capture-stack-traces?*
  "When true, `throwable->map` includes a `:stack-trace` entry.

   Off by default: these maps are PERSISTED into workflow history, and a full
   JVM stack trace is written on every failure — including every mid-retry
   failure of every activity — so leaving it on bloats history substantially for
   information that is usually already in the logs.

   Bind to true when debugging a workflow whose failures you need to inspect
   after the fact:

       (binding [error/*capture-stack-traces?* true] ...)

   `:stack-trace` is `:opt-un` in `:intemporal.spec/error`, so both shapes
   validate."
  false)

(defn throwable->map [t]
  (when t
    (let [data #?(:clj (when (instance? IExceptionInfo t) (ex-data t))
                  :cljs (or (.-data t) (ex-data t)))]
      (cond-> #?(:clj
                 {:type    (str (type t))
                  :message (ex-message t)
                  :data    data
                  :cause   (throwable->map (.getCause t))}
                 :cljs
                 {:type    (str (type t))
                  :message (.-message t)
                  :data    data
                  :cause   (when (.-cause t)
                             (throwable->map (.-cause t)))})
        *capture-stack-traces?*
        (assoc :stack-trace #?(:clj  (mapv str (.getStackTrace t))
                               :cljs (when (.-stack t)
                                       (str/split-lines (.-stack t)))))

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
