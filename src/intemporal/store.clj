(ns intemporal.store)

(defprotocol WorkflowStore
  :extend-via-metadata true
  (id [this] "Returns the id of the current store")
  (clear [this] "Expunges EVERYTHING")
  (serializable? [this arg] "Indicates if `arg` can be serialized onto the store")
  ;; queries
  (find-workflow [this runid] "Gets the workflow associated with the runid. Returns a tuple `[symbol var]`, ie `['wflow #'wflow-var]`")
  (find-workflow-run [this runid] [this runid opts] "Gets data for a given run")
  (list-workflow-runs [this] [this wid] "Lists workflow runs, optionally for a given workflow id")
  ;; event handling
  (clear-events [this] "Expunges ALL events")
  (next-event [this wid runid] [this wid runid evtid] "Gets the first or next event for a give runid, and optional event id")
  (expunge-events [this wid runid evtid] "Expunges all events after `evtid`")
  (events->table [this] "Returns a tabular form of workflow events")
  ;; persist metadata
  (save-workflow-definition [this wid sym] "Saves the workflow definition")
  (save-activity-definition [this aid sym] "Saves the activity definition")
  (save-workflow-event [this wid runid etype data] "Saves an workflow event")
  (save-activity-event [this wid runid aid etype data] "Saves an activity event"))

