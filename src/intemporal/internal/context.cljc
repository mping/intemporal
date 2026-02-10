(ns intemporal.internal.context
  (:require [intemporal.internal.error :as error]
            [intemporal.protocol :as p]))


;; ============================================================================
;; Dynamic Context
;; ============================================================================

(def ^:dynamic *workflow-context* nil)

(defn current-context
  "Has the following keys:

    :history (atom history)
    :workflow-id workflow-id
    :seq-counter (atom 0)
    :pending-events pending-events
    :pending-asyncs pending-asyncs
    :store store
    :registry registry
    :observer observer
  "
  []
  (or *workflow-context*
      (throw (ex-info "Not in workflow context" {}))))

(defn current-workflow-id []
  (:workflow-id (current-context)))

(defn current-store []
  (:store (current-context)))

(defn check-cancelled! []
  (let [ctx (current-context)]
    (when (p/is-cancelled? (:store ctx) (:workflow-id ctx))
      (throw (error/workflow-cancelled-exception)))))

(defn next-seq! []
  (check-cancelled!)
  (let [ctx (current-context)
        seq @(:seq-counter ctx)]
    (swap! (:seq-counter ctx) inc)
    seq))

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
      (catch #?(:clj Exception :cljs js/Error) e
        ;; Don't let observer errors break workflow
        (println "Observer error:" (ex-message e))))))
