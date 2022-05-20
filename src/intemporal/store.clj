(ns intemporal.store
  (:require [clojure.pprint :as pprint]
            [intemporal.utils.check :refer [check]])
  (:import [clojure.lang IDeref]
           [java.time LocalDateTime]))

(defprotocol WorkflowStore
  :extend-via-metadata true
  (clear [this] "Resets the store")
  (clear-events [this] "Resets all events")
  (serializable? [this arg] "Indicates if `arg` can be serialized onto the store")
  (events->table [this] "Returns a tabular form of workflow events")
  (list-workflow [this runid] "Gets the workflow associated with the runid")
  (list-workflow-run [this wid runid] [this wid runid opts] "Gets data for a given run")
  (next-event [this wid runid] [this wid runid evtid] "Gets the first or next event for a give runid, and optional event id")
  (expunge-events [this wid runid evtid] "Expunges all events after `evtid`")
  (save-workflow-definition [this wid sym] "Saves the workflow definition")
  (save-activity-definition [this aid sym] "Saves the activity definition")
  (save-workflow-event [this wid runid etype data] "Saves an workflow event")
  (save-activity-event [this wid runid aid etype data] "Saves an activity event"))

(defn- memory-store []
  (let [seed          {:workflows       {}
                       :activities      {}
                       :workflow-events {}}
        store         (atom seed)
        idcounter     (atom 0)

        persist-event (fn [wid runid evt]
                        (swap! store (fn [m]
                                       (let [path     [:workflow-events wid runid]
                                             run-evts (get-in m path [])
                                             new-evt  (assoc evt :id (swap! idcounter inc)
                                                             :deleted? nil
                                                             :date (LocalDateTime/now))
                                             new-evts (conj run-evts new-evt)]
                                         (assoc-in m path new-evts)))))]

    (reify
      ;; to facilitate printing
      IDeref
      (deref [this] @store)

      WorkflowStore
      (clear [this] (reset! store seed))
      (clear-events [this] (swap! store assoc :workflow-events {}))
      (serializable? [this _arg] true)
      (events->table [this]
        (let [all-events (->> (get @store :workflow-events)
                              (vals)
                              (map last)
                              (map last)
                              (flatten))]
          (with-out-str
            (pprint/print-table all-events))))
      ;; main stuff
      (list-workflow [this runid]
        (when-let [wid (->> (:workflow-events @store)
                            (filter (fn [[_wid runs]] (contains? (into #{} (keys runs)) runid)))
                            (ffirst))]
          [wid (get-in @store [:workflows wid])]))
      (list-workflow-run [this wid runid]
        {:workflow        (get-in @store [:workflows wid])
         :workflow-events (get-in @store [:workflow-events wid runid])})
      (list-workflow-run [this wid runid {:keys [all?] :or {all? true}}]
        (let [{:keys [workflow-events] :as res} (list-workflow-run this wid runid)]
          (if all?
            res
            (assoc res :workflow-events (filter (complement :deleted?) workflow-events)))))
      (next-event [this wid runid]
        (->> (get-in @store [:workflow-events wid runid])
             (filter (complement :deleted?))
             first))
      (next-event [this wid runid evtid]
        (->> (get-in @store [:workflow-events wid runid])
             (drop-while :deleted?)
             (drop-while #(<= (:id %) evtid))
             first))
      (expunge-events [this wid runid evtid]
        (swap! store (fn [m]
                       (let [#_#_to-keep (->> (get-in @store [:workflow-events wid runid])
                                              (take-while #(<= (:id %) evtid))
                                              (into []))
                             to-keep (->> (get-in @store [:workflow-events wid runid])
                                          (mapv (fn [evt]
                                                  (if (<= (:id evt) evtid)
                                                    evt
                                                    (assoc evt :deleted? true)))))]
                         (-> m
                             (assoc-in [:workflow-events wid runid] to-keep))))))

      ;;;;
      ;; persist definitions
      (save-workflow-definition [this wid fvar]
        (check (var? fvar) "%s: is not a var, type is %s" fvar (type fvar))
        (swap! store (fn [m]
                       (-> m
                           (assoc-in [:workflows wid] fvar)
                           (assoc-in [:workflow-events wid] {})))))
      (save-activity-definition [this aid fvar]
        (check (bound? fvar) "%s: is not a bounded var, type is %s" fvar (type fvar))
        (swap! store assoc-in [:activities aid] fvar))
      ;;;;
      ;; persist runtime evts
      (save-workflow-event [this wid runid etype data]
        (check (serializable? this data) "'%s' cannot be serialized")
        (persist-event wid runid {:type etype :uid wid :payload data}))
      (save-activity-event [this wid runid aid etype data]
        (check (serializable? this data) "'%s' cannot be serialized" data)
        (persist-event wid runid {:type etype :uid aid :payload data})))))

;; for testing purposes
(def memstore (memory-store))
