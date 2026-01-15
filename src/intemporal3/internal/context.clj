(ns intemporal3.internal.context
  (:require [intemporal3.internal.error :as error]
            [intemporal3.protocol :as p]))


;; ============================================================================
;; Dynamic Context
;; ============================================================================

(def ^:dynamic *workflow-context* nil)

(defn current-context []
  (or *workflow-context*
      (throw (ex-info "Not in workflow context" {}))))

(defn workflow-id []
  (:workflow-id (current-context)))

(defn check-cancelled! []
  (let [ctx (current-context)]
    (when (p/is-cancelled? (:store ctx) (:workflow-id ctx))
      (throw (error/workflow-cancelled-exception)))))

(defn next-seq! []
  (check-cancelled!)
  (let [ctx (current-context)]
    (let [seq @(:seq-counter ctx)]
      (swap! (:seq-counter ctx) inc)
      seq)))

(defn update-seq! [event]
  (when-let [last-seq (:last-seq event)]
    (let [current-seq (dec @(:seq-counter (current-context)))]
      (when (> last-seq current-seq)
        (dotimes [_ (- last-seq current-seq)]
          (next-seq!))))))

(defn find-event [history event-type seq-num]
  (->> history
       (filter #(and (= (:event-type %) event-type)
                     (= (:seq %) seq-num)))
       first))

(defn add-pending-event! [event]
  (let [ctx (current-context)]
    (swap! (:pending-events ctx) conj event)))

(defn add-pending-async! [async-info]
  (let [ctx (current-context)]
    (swap! (:pending-asyncs ctx) conj async-info)))

(defn notify-observer [event-fn & args]
  (when-let [observer (:observer (current-context))]
    (try
      (apply event-fn observer args)
      (catch Exception e
        ;; Don't let observer errors break workflow
        (println "Observer error:" (.getMessage e))))))
