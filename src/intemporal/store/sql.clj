(ns intemporal.store.sql
  (:require [clojure.pprint :as pprint]
            [cognitect.transit :as transit]
            [intemporal.store :as s]
            [intemporal.utils.check :refer [check]]
            [next.jdbc :as jdbc])
  (:import [clojure.lang IDeref]
           [java.io ByteArrayInputStream ByteArrayOutputStream]
           [java.time LocalDateTime]))

(defn- persist-event [ds wid runid evt]
  #_(swap! store (fn [m]
                   (let [path     [:workflow-events wid runid]
                         run-evts (get-in m path [])
                         new-evt  (assoc evt :id (swap! idcounter inc)
                                             :deleted? nil
                                             :timestamp (LocalDateTime/now))
                         new-evts (conj run-evts new-evt)]
                     (assoc-in m path new-evts)))))

(defn- truncate [ds table])

(defn sql-store [ds serializer]
  (reify
    IDeref
    (deref [this] this)

    s/WorkflowStore
    (id [this]
      (format "sql-store@%s" ds))
    (clear [this]
      (jdbc/with-transaction [tx ds]
        (truncate tx :worfklow_events)
        (truncate tx :activities)
        (truncate tx :worfklows)))
    (serializable? [this _arg]
      true)

    ;; main stuff
    (find-workflow [this runid])
    ;; returns [symbol var]
    ;; queries
    (find-workflow-run [this runid]
      (jdbc/with-transaction [tx ds]
        #_
        (when-let [[wid _] (s/find-workflow this runid)]
          {:workflow        nil                             ; select from workflows where wid=?
           :workflow-events nil})))                         ; select from workflow_events where wid=? and runid=?
    (find-workflow-run [this runid {:keys [all?] :or {all? true}}]
      #_
      (let [{:keys [workflow-events] :as res} (s/find-workflow-run this runid)]
        (if all?
          res
          (assoc res :workflow-events (filter (complement :deleted?) workflow-events)))))
    (list-workflow-runs [this]
      #_
      (let [all-wids (->> @store :workflows keys)]
        (reduce (fn [acc wid] (into acc (->> @store :workflow-events wid keys))) [] all-wids)))
    (list-workflow-runs [this wid]
      #_
      (->> @store :workflow-events wid keys))

    ;; event handling
    (clear-events [this]
      (truncate ds :workflow_events))
    (next-event [this wid runid]
      #_
      (->> (get-in @store [:workflow-events wid runid])
           (filter (complement :deleted?))
           first))
    (next-event [this wid runid evtid]
      #_
      (->> (get-in @store [:workflow-events wid runid])
           (drop-while :deleted?)
           (drop-while #(<= (:id %) evtid))
           first))
    (expunge-events [this wid runid evtid]
      ;; soft delete from workflow events
      ;; where id > evtid

      #_
      (swap! store (fn [m]
                     (let [to-keep (->> (get-in @store [:workflow-events wid runid])
                                        (mapv (fn [evt]
                                                (if (<= (:id evt) evtid)
                                                  evt
                                                  (assoc evt :deleted? true)))))]
                       (-> m
                           (assoc-in [:workflow-events wid runid] to-keep))))))
    (events->table [this]
      #_
      (let [all-events (->> (get @store :workflow-events)
                            (vals)
                            (map last)
                            (map last)
                            (flatten))]
        (with-out-str
          (pprint/print-table all-events))))

    ;; metadata
    (save-workflow-definition [this wid fvar]
      (check (var? fvar) "%s: is not a var, type is %s" fvar (type fvar))
      #_
      (swap! store (fn [m]
                     (-> m
                         (assoc-in [:workflows wid] fvar)
                         (assoc-in [:workflow-events wid] {})))))
    (save-activity-definition [this aid fvar]
      (check (bound? fvar) "%s: is not a bounded var, type is %s" fvar (type fvar)))
      ;(swap! store assoc-in [:activities aid] fvar))
    ;; persist runtime evts
    (save-workflow-event [this wid runid etype data]
      (check (s/serializable? this data) "'%s' cannot be serialized by %s store" data (s/id this))
      (persist-event ds wid runid {:type etype :uid wid :payload data}))
    (save-activity-event [this wid runid aid etype data]
      (check (s/serializable? this data) "'%s' cannot be serialized by %s store" data (s/id this))
      (persist-event ds wid runid {:type etype :uid aid :payload data}))))
