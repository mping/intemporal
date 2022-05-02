(ns intemporal.workflow.execution
  "Defines the IWorkflowExecution protocol."
  (:require [intemporal.store :as s])
  (:import [java.util UUID]))

(defprotocol IWorkflowExecution
  ;; accessors
  (-workflow-id [this] "Returns the workflow id, shared among every run")
  (-workflow-runid [this] "Returns the workflow run id, unique per run")
  (-workflow-compensations [this] "Gets a coll of all compensation functions")
  ;; local access
  (-add-compensation [this compensation-fn] "Adds a compensation function to the list of fns to call if the workflow fails")
  ;; db access
  (-save-workflow-event! [this event-type payload] "Saves a workflow event")
  (-save-activity-event! [this activity-id event-type payload] "Saves an activity event")
  (-reset-history-cursor [this] "Resets the events cursor")
  (-next-event [this] "Gets next event")
  (-advance-history-cursor [this] "Advance-only cursor for the events of this workflow run")
  (-delete-history-forward [this] "Deletes all susequent events"))

;;;;;
;; defines a worfklow execution
(defrecord WorkflowExecution [store state workflow-id run-id]
  IWorkflowExecution
  (-workflow-id [_] workflow-id)
  (-workflow-runid [_] run-id)
  (-workflow-compensations [_]
    (:compensations @state))
  (-add-compensation [_ compensation-fn]
    (swap! state update-in [:compensations] conj compensation-fn))
  (-save-workflow-event! [this event-type payload]
    (s/save-workflow-event store workflow-id run-id event-type payload))
  (-save-activity-event! [this activity-id event-type payload]
    (s/save-activity-event store workflow-id run-id activity-id event-type payload))

  (-reset-history-cursor [this]
    (swap! state assoc :events-cursor nil))
  (-next-event [this]
    (let [evt    (get @state :events-cursor)
          nxt    (cond
                   (= evt ::none) nil
                   (some? evt) (s/next-event store workflow-id run-id (:id evt))
                   :else (s/next-event store workflow-id run-id))]
      nxt))

  (-advance-history-cursor [this]
    (let [evt (get @state :events-cursor)
          res (cond
                (= evt ::none) nil
                (some? evt) (s/next-event store workflow-id run-id (:id evt))
                :else (s/next-event store workflow-id run-id))]
      ;; mark nil as ::none, effectively ensuring next calls won't return any saved event
      (swap! state assoc :events-cursor (or res ::none))
      (println "[history] current event:" res)
      res))
  (-delete-history-forward [this]
    (when-let [evt (get @state :events-cursor)]
      (println "[history] deleting all events starting from" evt)
      (s/expunge-events store workflow-id run-id (:id evt)))))

(defn make-workflow-execution
  "Makes a new workflow run for the given workflow id"
  ([store wid]
   (make-workflow-execution store wid (UUID/randomUUID)))
  ([store wid runid]
   (let [runid runid
         state (atom {:events-cursor nil
                      :compensations []})]
     (->WorkflowExecution store state wid runid))))
