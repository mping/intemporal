(ns detflow.runtime
  (:require [detflow.common :as common]))

;; Global registry for activity implementations
(defonce activity-registry (atom {}))

;; The Dynamic Context binding
;; Contains:
;; :history      - Full event history [vector]
;; :cursor       - Current index in history [atom]
;; :events-out   - New events generated during this run [atom]
;; :tasks        - Map of {task-id -> task-fn} for async concurrency
;; :task-results - Map of {task-id -> result}
;; :id-counter   - Deterministic ID generator [atom]
;; :waiting      - Set of IDs currently awaited (for debugging)
(def ^:dynamic *ctx* nil)

(defn current-ctx []
  (or *ctx* (throw (ex-info "No active workflow context. Are you inside a workflow?" {}))))

(defn next-id! []
  (let [{:keys [id-counter]} (current-ctx)]
    (swap! id-counter inc)))

(defn record-event! [event]
  (let [{:keys [events-out]} (current-ctx)]
    (swap! events-out conj event)
    event))

(defn register-task! [task-id task-fn]
  (let [{:keys [tasks]} (current-ctx)]
    (swap! tasks assoc task-id task-fn)))

(defn get-history-event []
  "Reads the next event from history if available (Replay mode)."
  (let [{:keys [history cursor]} (current-ctx)
        idx @cursor]
    (when (< idx (count history))
      (let [evt (nth history idx)]
        (swap! cursor inc)
        evt))))

(defn peek-history-event []
  "Looks at next event without consuming (for checking completion)."
  (let [{:keys [history cursor]} (current-ctx)
        idx @cursor]
    (when (< idx (count history))
      (nth history idx))))

(defn find-completed-result
  "Scans history for a completion event for a specific ID."
  [target-id type]
  (let [{:keys [history]} (current-ctx)]
    (some (fn [evt]
            (when (and (= (:id evt) target-id)
                       (= (:type evt) type))
              (:result evt)))
          history)))

(defn get-signal-payload [signal-name]
  "Scans history for signals."
  (let [{:keys [history]} (current-ctx)]
    (some (fn [evt]
            (when (and (= (:type evt) :signal-received)
                       (= (:name evt) signal-name))
              (:payload evt)))
          history)))