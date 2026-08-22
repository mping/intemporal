(ns intemporal.internal.execution.common
  (:require
   [intemporal.internal.activity :as activity]
   [intemporal.internal.context :as context]
   [intemporal.protocol :as p]
   [intemporal.internal.clock :as clock]))

(defn continue-decision []
  {:op :continue})

(defn park-decision
  ([reason events] (park-decision reason events nil))
  ([reason events next-run-at]
   {:op :park
    :reason reason
    :events (vec events)
    :next-run-at next-run-at}))

(defn due-asyncs [pending-asyncs]
  (remove #(activity/retry-pending? (:attempt-state %)) pending-asyncs))

(defn earliest-async-retry [pending-asyncs]
  (->> pending-asyncs
       (keep #(when (activity/retry-pending? (:attempt-state %))
                (:retry-at (:attempt-state %))))
       (reduce (fn [a b] (if a (min a b) b)) nil)))

(defn with-async-retry-deadline [pending-asyncs decision]
  (if (and (= :park (:op decision)) (= :async (:reason decision)))
    (assoc decision :next-run-at (earliest-async-retry pending-asyncs))
    decision))

(defn make-workflow-context
  ([workflow-id history store registry observer]
   (make-workflow-context workflow-id history store registry observer nil))
  ([workflow-id history store registry observer extra]
   (merge
     {:history (atom history)
      :history-index (context/index-history history)
      :workflow-id workflow-id
      :seq-counter (atom 0)
      :pending-events (atom [])
      :pending-asyncs (atom [])
      :compensating? (atom false)
      :store store
      :registry registry
      :observer observer}
     extra)))

(defn next-terminal-seq [store workflow-id]
  (inc (or (p/max-seq store workflow-id) -1)))

(defn parent-link [store workflow-id]
  (let [started (some #(when (= :workflow-started (:event-type %)) %)
                      (p/load-history store workflow-id))]
    (when (:parent-id started)
      {:parent-id (:parent-id started)
       :parent-seq (:parent-seq started)})))

(defn has-children? [store workflow-id]
  (boolean (some #(= :child-workflow-scheduled (:event-type %))
                 (p/load-history store workflow-id))))

(defn run-once [thunk]
  (context/check-cancelled!)
  (let [seq-num (context/next-seq!)
        existing (context/history-event :run-once-completed seq-num)]
    (if existing
      (:result existing)
      (let [result (thunk)]
        (context/add-pending-event! {:event-type :run-once-completed
                                     :seq seq-num
                                     :result result
                                     :timestamp (clock/now-ms)})
        result))))
