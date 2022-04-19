(ns intemporal.store
  (:require [intemporal.utils.check :refer [check]])
  (:import [clojure.lang IDeref]))


(defprotocol WorkflowStore
  :extend-via-metadata true
  (clear [this])
  (serializable? [this arg])
  (lookup [this wid runid])
  (save-workflow-definition [this wid sym])
  (save-activity-definition [this aid sym])
  (save-workflow-event [this runid etype wid args])
  (save-activity-event [this runid etype wid aid args]))

(defn- memory-store []
  (let [seed          {:workflows       {}                  ;; {id -> fn
                       :activities      {}                  ;; {id -> fn
                       :workflow-events {}}                 ;; {id -> [events]}
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
      (clear [this] (swap! store assoc :workflow-events {}))
      (serializable? [this _arg] true)
      (lookup [this wid runid]
        {:workflows       (get-in @store [:workflows wid])
         :workflow-events (get-in @store [:workflow-events wid runid])})

      ;;;;
      ;; persist definitions
      (save-workflow-definition [this wid sym]
        (swap! store (fn [m]
                       (-> m
                         (assoc-in [:workflows wid] (symbol sym))
                         (assoc-in [:workflow-events wid] {}))))
        (println ">>" (:workflows @store)))

      (save-activity-definition [this aid sym]
        (swap! store assoc-in [:activities aid] (symbol sym)))
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
