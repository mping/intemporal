(ns intemporal.internal.execution.common
  (:require
   [intemporal.internal.activity :as activity]
   [intemporal.internal.context :as context]))

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
  ([workflow-id history registry observer]
   (make-workflow-context workflow-id history registry observer nil))
  ([workflow-id history registry observer extra]
   (merge
     {:history (atom history)
      :history-index (context/index-history history)
      :workflow-id workflow-id
      :seq-counter (atom 0)
      :pending-events (atom [])
      ;; Child creation is declarative replay output. The engine combines it
      ;; with the parent's scheduled marker in one store transition.
      :pending-creations (atom [])
      :pending-asyncs (atom [])
      :compensating? (atom false)
      ;; A pass normally supplies this through `extra`; retain nil for direct
      ;; low-level callers while those are removed.
      :now-ms nil
      :cancel-requested? false
      :registry registry
      :observer observer}
     extra)))
