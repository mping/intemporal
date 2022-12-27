(ns intemporal.doc.sqlite-store
  (:require [clojure.edn :as edn]
            [clojure.pprint :as pprint]
            [intemporal.doc.sqlite :as sqlite]
            [intemporal.store :as s]))


(defn- serialize [obj]
  (pr-str obj))

(defn- deserialize [s]
  (edn/read-string s))

(defn- persist-event [db _wid runid {:keys [type uid payload] :as evt}]
  (let [query (str "insert into events "
                   "(runid, type, uid, payload, deleted, timestamp)"
                   "values (?, ?, ?, ?, ?, ?)")]
    (sqlite/execute-one! db [query (str runid) (serialize type) uid (serialize payload) false (.toUTCString (js/Date.))])))

(defn event->event-map [{:keys [id _run type uid payload deleted timestamp] :as dbevt}]
  (when (some? dbevt)
    {:id        id
     :type      (keyword (.substring type 1))
     :uid       (symbol uid)
     :payload   (deserialize payload)
     :timestamp (js/Date. timestamp)
     :deleted?  (not (or (nil? deleted) (zero? deleted)))}))


(defn- truncate [db table]
  (cond
    (= "metadata" (name table)) (sqlite/execute-one! db ["delete from metadata"])
    (= "events" (name table)) (sqlite/execute-one! db ["delete from events"])
    :else (throw (ex-info (str "Unknown table: " table) {}))))

(defn resolve' [s]
  ;; TODO fixme
  s)

;; adapted from intemporal.store.sql
(defn- make-sqlite-store [db]
  (reify
    cljs.core/IDeref
    (-deref [this] this)

    s/WorkflowStore
    (id [this]
      "sqlite-store")
    (clear [this]
      (truncate db :metadata)
      (truncate db :events))

    ;; main stuff
    (find-workflow [this runid]
      (when-let [{uid  :uid
                  type :type} (sqlite/execute-one! db ["select uid,type from events where runid=? order by timestamp asc limit 1" (str runid)])]
        (let [{var :metadata/var} (sqlite/execute-one! db ["select var from metadata where type=? and uid=?" "workflow" uid])]
          [(symbol uid) (resolve' (symbol var))])))

    ;; queries
    (find-workflow-run [this runid]
      
      (when-let [{uid  :uid
                  type :type} (sqlite/execute-one! db ["select uid,type from events where runid=? order by timestamp asc limit 1" (str runid)])]
        (let [{var :metadata/var} (sqlite/execute-one! db ["select var from metadata where type=? and uid=?" "workflow" uid])
              events (sqlite/execute! db ["select * From events where runid=?" (str runid)])]
          {:workflow        (resolve' (symbol var))
           :workflow-events (mapv event->event-map events)})))

    (find-workflow-run [this runid {:keys [all?] :or {all? true}}]
      
      (when-let [{uid  :uid
                  type :type} (sqlite/execute-one! db ["select uid,type from events where runid=? order by timestamp asc limit 1" (str runid)])]
        (let [{var :metadata/var} (sqlite/execute-one! db ["select var from metadata where type=? and uid=?" "workflow" uid])
              eventsq (if all?
                        "select * From events where runid=?"
                        "select * From events where runid=? and (deleted is false or deleted is null)")
              events  (sqlite/execute! db [eventsq (str runid)])]
          {:workflow        (resolve' (symbol var))
           :workflow-events (mapv event->event-map events)})))
    (list-workflow-runs [this]
      (->> (sqlite/execute! db ["select distinct runid from events"])
           (mapv (comp parse-uuid :runid))))
    (list-workflow-runs [this wid]
      (->> (sqlite/execute! db ["select distinct runid from events where uid=?" (str wid)])
           (mapv (comp parse-uuid :runid))))

    ;; event handling
    (clear-events [this]
      (truncate db :events))
    (next-event [this wid runid]
      (->> (sqlite/execute-one! db [(str "select * from events where runid=? and (deleted is false or deleted is null) "
                                         "order by id asc limit 1")
                                    (str runid)])
           (event->event-map)))
    (next-event [this wid runid evtid]
      (->> (sqlite/execute-one! db [(str "select * from events where runid=? and (deleted is false or deleted is null) "
                                         "and id > ? order by id asc limit 1")
                                    (str runid) evtid])
           (event->event-map)))
    (expunge-events [this wid runid evtid]
      ;; soft delete from workflow events
      ;; where id > evtid
      (sqlite/execute! db ["update events set deleted=true where runid=? and id > ?" (str runid) evtid]))

    (events->table [this]
      (let [all-events (->> (sqlite/execute! db ["select * from events order by runid asc, timestamp asc"])
                            (mapv (fn [e] (assoc e :payload (deserialize (:payload e))))))]
        (with-out-str
          (pprint/print-table all-events))))
    (registrations->table [this]
      (with-out-str
        (pprint/print-table (sqlite/execute! db ["select * from metadata"]))))


    ;; metadata
    (save-workflow-definition [this wid fvar]
      (sqlite/execute-one! db ["insert into metadata(uid,var,type) values(?,?,?)" (str wid) (symbol fvar) "workflow"]))

    (save-activity-definition [this aid fvar]
      (sqlite/execute-one! db ["insert into metadata(uid,var,type) values(?,?,?)" (str aid) (symbol fvar) "activity"]))

    ;; persist runtime evts
    (save-workflow-event [this wid runid etype data]
      (persist-event db wid runid {:type etype :uid wid :payload data}))
    (save-activity-event [this wid runid aid etype data]
      (persist-event db wid runid {:type etype :uid aid :payload data}))))
