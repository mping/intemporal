(ns intemporal.store
  (:require [intemporal.utils.check :refer [check]])
  (:import [clojure.lang IDeref]))


(defprotocol WorkflowStore
  :extend-via-metadata true
  (clear [this] "Resets the store")
  (clear-events [this] "Resets all events")
  (serializable? [this arg] "Indicates if `arg` can be serialized onto the store")
  (query-run [this wid runid] "Gets data for a given run")
  (run->replay-seq [this wid runid] "Gets the stored events for a given run as replayable seq of [type result]")

  (save-workflow-definition [this wid sym])
  (save-activity-definition [this aid sym])
  (save-workflow-event [this runid etype wid args])
  (save-activity-event [this runid etype wid aid args]))

(defn- memory-store []
  (let [seed          {:workflows       {}
                       :activities      {}
                       :workflow-events {}}
        store         (atom seed)

        persist-event (fn [wid runid evt]
                        (swap! store (fn [m]
                                       (let [path     [:workflow-events wid runid]
                                             run-evts (get-in m path [])
                                             new-evts (conj run-evts evt)]
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
        {:workflows       (get-in @store [:workflows wid])
         ;; todo filter activites for this run
         :workflow-events (get-in @store [:workflow-events wid runid])})

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
      (save-workflow-event [this runid etype wid args]
        (check (serializable? this args) "'%s' cannot be serialized")
        (persist-event wid runid {:type etype :id wid :payload args}))
      (save-activity-event [this runid etype wid aid args]
        (check (serializable? this args) "'%s' cannot be serialized" args)
        (persist-event wid runid {:type etype :id aid :payload args})))))

;; for testing purposes
(def memstore (memory-store))
