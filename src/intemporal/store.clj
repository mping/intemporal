(ns intemporal.store
  (:require [clojure.spec.alpha :as s])
  (:import [java.time LocalDateTime]))

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


;; spec
(s/def :intemporal.store.event/type #{:intemporal.workflow/invoke
                                      :intemporal.workflow/failure
                                      :intemporal.workflow/success
                                      :intemporal.activity/invoke
                                      :intemporal.activity/failure
                                      :intemporal.activity/success})

(s/def :intemporal.store.event/uid symbol?)
(s/def :intemporal.store.event/payload any?)
(s/def :intemporal.store.event/id nat-int?)
(s/def :intemporal.store.event/deleted? (s/nilable boolean?))
(s/def :intemporal.store.event/timestamp #(instance? LocalDateTime %))

(s/def ::event (s/keys :req-un [:intemporal.store.event/type
                                :intemporal.store.event/uid
                                :intemporal.store.event/payload
                                :intemporal.store.event/id
                                :intemporal.store.event/timestamp]
                       :opt-un [:intemporal.store.event/deleted?]))

(s/def ::worfklow (s/tuple symbol? var?))
(s/def ::activity (s/tuple symbol? var?))

