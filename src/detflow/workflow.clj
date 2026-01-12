(ns detflow.workflow
  (:require [detflow.runtime :as rt]
            [detflow.common :as common])
  (:import [detflow.common AsyncHandle]))

(defmacro defworkflow [name args & body]
  `(defn ~name ~args ~@body))

;; Events that are NOT commands and should be skipped by the replay cursor
(def ^:private result-event-types
  #{:activity-completed
    :timer-fired
    :async-completed
    :signal-received})

(defn- advance-past-results!
  "Advances the history cursor past any completion/result events."
  []
  (loop []
    (let [evt (rt/peek-history-event)]
      (when (and evt (contains? result-event-types (:type evt)))
        (rt/get-history-event) ;; consume and discard
        (recur)))))
(defn- get-or-create-handle
  [expected-type create-fn]
  ;; 1. Ensure we are looking at a Command, not a Result
  (advance-past-results!)

  (let [existing-event (rt/peek-history-event)]
    (cond
      ;; End of history -> Create new
      (nil? existing-event)
      (create-fn)

      ;; Match -> Replay
      (= (:type existing-event) expected-type)
      (do
        (rt/get-history-event) ;; consume
        {:id (:id existing-event) :type expected-type})

      ;; Mismatch -> Error
      :else
      (throw (ex-info "Non-Deterministic Workflow detected!"
                      {:expected expected-type
                       :found (:type existing-event)
                       :event existing-event})))))

(defn activity
  ([activity-sym args] (activity {} activity-sym args))
  ([opts activity-sym args]
   (let [act-name (keyword (str (namespace activity-sym)) (str (name activity-sym)))]
     (get-or-create-handle
       :activity-scheduled
       (fn []
         (let [new-id (rt/next-id!)]
           (rt/record-event! {:type :activity-scheduled
                              :id   new-id
                              :name act-name
                              :args args})
           {:id new-id :type :activity-scheduled}))))))

(defn sleep [ms]
  (get-or-create-handle
    :timer-scheduled
    (fn []
      (let [new-id (rt/next-id!)]
        (rt/record-event! {:type :timer-scheduled :id new-id :duration ms})
        {:id new-id :type :timer-scheduled}))))

(defn async [f]
  (let [handle (get-or-create-handle
                 :async-started
                 (fn []
                   (let [new-id (rt/next-id!)]
                     (rt/record-event! {:type :async-started :id new-id})
                     {:id new-id :type :async-started})))]
    (rt/register-task! (:id handle) f)
    (common/->AsyncHandle (:id handle))))

(defn await [handle]
  (if (instance? AsyncHandle handle)
    (let [{:keys [task-results]} (rt/current-ctx)]
      (if-let [[_ res] (find @task-results (:id handle))]
        res
        (common/suspend! (:id handle))))

    (let [{:keys [id type]} handle
          completion-type (case type
                            (:activity :activity-scheduled) :activity-completed
                            (:timer :timer-scheduled)       :timer-fired
                            :async-started                  :async-completed)
          result (rt/find-completed-result id completion-type)]

      (if result
        (:value result)
        (common/suspend! id)))))

(defn await-signal [signal-name]
  (if-let [payload (rt/get-signal-payload signal-name)]
    payload
    (common/suspend! (str "signal:" signal-name))))

(defn all [& handles]
  (doall (map await handles)))