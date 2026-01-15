(ns intemporal3.store
  (:require [intemporal3.protocol :as p]))

;; ============================================================================
;; In-Memory Store Implementation
;; ============================================================================

(defrecord InMemoryStore [state]
  p/IStore
  (load-history [_ workflow-id]
    (get-in @state [:workflows workflow-id :history] []))

  (save-event [_ workflow-id event]
    (swap! state update-in [:workflows workflow-id :history]
           (fnil conj []) event)
    event)

  (save-events [_ workflow-id events]
    (when (seq events)
      (swap! state update-in [:workflows workflow-id :history]
             (fnil into []) events))
    events)

  (find-event [this worfklow-id event-type seq-num]
    (let [history (p/load-history this worfklow-id)]
      (->> history
           (filter #(and (= (:event-type %) event-type)
                         (= (:seq %) seq-num)))
           first)))

  (get-pending-signals [_ workflow-id]
    (get-in @state [:workflows workflow-id :signals] {}))

  (add-signal [_ workflow-id signal-name signal-data]
    (swap! state update-in [:workflows workflow-id :signals signal-name]
           (fnil conj []) signal-data)
    signal-data)

  (consume-signal [_ workflow-id signal-name]
    (let [result (atom nil)]
      (swap! state
             (fn [s]
               (let [signals (get-in s [:workflows workflow-id :signals signal-name])]
                 (if (seq signals)
                   (do
                     (reset! result (first signals))
                     (update-in s [:workflows workflow-id :signals signal-name]
                                (comp vec rest)))
                   s))))
      @result))

  (is-cancelled? [_ workflow-id]
    (get-in @state [:workflows workflow-id :cancelled] false))

  (mark-cancelled [_ workflow-id]
    (swap! state assoc-in [:workflows workflow-id :cancelled] true))

  (get-workflow-status [_ workflow-id]
    (let [wf (get-in @state [:workflows workflow-id])]
      (cond
        (:cancelled wf) :cancelled
        (empty? (:history wf)) :not-found
        :else (let [last-event (last (:history wf))]
                (case (:event-type last-event)
                  :workflow-completed :completed
                  :workflow-failed :failed
                  :running))))))

(defn ->InMemoryStore
  "Create a new in-memory store"
  ([] (->InMemoryStore (atom {})))
  ([state] (InMemoryStore. state)))
