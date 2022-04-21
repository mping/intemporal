(ns intemporal.store
  (:require [intemporal.utils.check :refer [check]])
  (:import [clojure.lang IDeref]))


(defprotocol WorkflowStore
  :extend-via-metadata true
  (clear [this] "Resets the store")
  (clear-events [this] "Resets all events")
  (serializable? [this arg] "Indicates if `arg` can be serialized onto the store")
  (query-run [this wid runid] "Gets data for a given run")
  (next-event [this wid runid]
              [this wid runid currevt-id] "Gets the first or next event for a give runid, and optional event id")
  (save-workflow-definition [this wid sym])
  (save-activity-definition [this aid sym])
  (save-workflow-event [this wid runid etype data])
  (save-activity-event [this wid runid aid etype data]))

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
                                             new-evt  (assoc evt :id (swap! idcounter inc))
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
      (query-run [this wid runid]
        {:workflow        (get-in @store [:workflows wid])
         ;; todo filter activites for this run
         :workflow-events (get-in @store [:workflow-events wid runid])})

      (next-event [this wid runid]
        (->> (get-in @store [:workflow-events wid runid])
             first))
      (next-event [this wid runid currevt-id]
        (->> (get-in @store [:workflow-events wid runid])
             (drop-while #(<= (:id %) currevt-id))
             first))
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
        (persist-event wid runid {:type etype :sid wid :payload data}))
      (save-activity-event [this wid runid aid etype data]
        (check (serializable? this data) "'%s' cannot be serialized" data)
        (persist-event wid runid {:type etype :sid aid :payload data})))))

;; for testing purposes
(def memstore (memory-store))
