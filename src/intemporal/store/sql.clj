(ns intemporal.store.sql
  (:require [clojure.pprint :as pprint]
            [taoensso.nippy :as nippy]
            [intemporal.store :as s]
            [intemporal.utils.check :refer [check]]
            [migratus.core :as migratus]
            [next.jdbc :as jdbc])
  (:import [clojure.lang IDeref]
           [java.time LocalDateTime]))

(defn assert-workflow-invoke! [t]
  (assert (= ":intemporal.workflow/invoke" t)
    (format "Type of first event should be :intemporal.workflow/invoke, got %s" t)))

;;;;
;; serde

(defn- serialize ^"[B" [obj]
  (nippy/freeze obj))


(defn- deserialize [^"[B" ba]
  (nippy/thaw ba))

(defn event->event-map [{:events/keys [id _run type uid payload deleted timestamp] :as dbevt}]
  (when dbevt
    {:id        id
     :type      (keyword (.substring ^String type 1))
     :uid       (symbol uid)
     :payload   (deserialize payload)
     :timestamp (LocalDateTime/parse timestamp)
     :deleted?  (not (or (nil? deleted) (zero? deleted)))}))

;;;;
;; migrations

(defn- make-config [ds]
  {:store                :database
   :migration-dir        "migrations/"
   :migration-table-name "migrations"
   :db                   {:datasource ds}})

(comment
  (def db-spec (jdbc/get-datasource {:dbtype "sqlite" :dbname "test/sqlstore.db"}))
  (migratus/completed-list (make-config db-spec))
  (migratus/migrate (make-config db-spec))
  (migratus/rollback (make-config db-spec))
  (migratus/reset (make-config db-spec)))

(defn migrate!
  "Run table migrations on top of the supplied db spec"
  [dbspec]
  (migratus/migrate (make-config dbspec)))

;;;
;; main

(defn- persist-event [tx _wid runid {:keys [type uid payload] :as evt}]
  (let [query (str "insert into events "
                "(runid, type, uid, payload, deleted, timestamp)"
                "values (?, ?, ?, ?, ?, ?)")]
    (jdbc/execute-one! tx [query runid type uid (serialize payload) false (LocalDateTime/now)])))

(defn- truncate [tx table]
  (cond
    (= "metadata" (name table)) (jdbc/execute-one! tx ["delete from metadata"])
    (= "events" (name table)) (jdbc/execute-one! tx ["delete from events"])
    :else (throw (IllegalArgumentException. (format "Unknown table: %s" table)))))

(defn sql-store
  "Make a new SQL backed store."
  [ds]
  (reify
    IDeref
    (deref [this] this)

    s/WorkflowStore
    (id [this]
      (format "sql-store@%s" ds))
    (clear [this]
      (jdbc/with-transaction [tx ds]
        (truncate tx :metadata)
        (truncate tx :events)))

    ;; main stuff
    (find-workflow [this runid]
      (jdbc/with-transaction [tx ds]
        (when-let [{uid  :events/uid
                    type :events/type} (jdbc/execute-one! tx ["select uid,type from events where runid=? order by timestamp asc limit 1" runid])]
          (assert-workflow-invoke! type)
          (let [{var :metadata/var} (jdbc/execute-one! "select var from metadata where type=? and uid=?" "workflow" uid)]
            [(symbol uid) (resolve (symbol var))]))))

    ;; queries
    (find-workflow-run [this runid]
      (jdbc/with-transaction [tx ds]
        (when-let [{uid  :events/uid
                    type :events/type} (jdbc/execute-one! tx ["select uid,type from events where runid=? order by timestamp asc limit 1" runid])]
          (assert-workflow-invoke! type)
          (let [{var :metadata/var} (jdbc/execute-one! tx ["select var from metadata where type=? and uid=?" "workflow" uid])
                events  (jdbc/execute! tx ["select * From events where runid=?" runid])]
            {:workflow        (resolve (symbol var))
             :workflow-events (mapv event->event-map events)}))))

    (find-workflow-run [this runid {:keys [all?] :or {all? true}}]
      (jdbc/with-transaction [tx ds]
        (when-let [{uid  :events/uid
                    type :events/type} (jdbc/execute-one! tx ["select uid,type from events where runid=? order by timestamp asc limit 1" runid])]
          (assert-workflow-invoke! type)
          (let [{var :metadata/var} (jdbc/execute-one! tx ["select var from metadata where type=? and uid=?" "workflow" uid])
                eventsq (if all?
                          "select * From events where runid=?"
                          "select * From events where runid=? and (deleted is false or deleted is null)")
                events  (jdbc/execute! tx [eventsq runid])]
            {:workflow        (resolve (symbol var))
             :workflow-events (mapv event->event-map events)}))))
    (list-workflow-runs [this]
      (jdbc/with-transaction [tx ds]
        (->> (jdbc/execute! tx ["select distinct runid from events"])
          (mapv (comp parse-uuid :events/runid)))))
    (list-workflow-runs [this wid]
      (jdbc/with-transaction [tx ds]
        (->> (jdbc/execute! tx ["select distinct runid from events where uid=?" wid])
          (mapv (comp parse-uuid :events/runid)))))

    ;; event handling
    (clear-events [this]
      (jdbc/with-transaction [tx ds]
        (truncate tx :metadata)
        (truncate tx :events)))
    (next-event [this wid runid]
      (jdbc/with-transaction [tx ds]
        ;; TODO validate wid
        (->> (jdbc/execute-one! tx [(str "select * from events where runid=? and (deleted is false or deleted is null) "
                                         "order by id asc limit 1")
                                    runid])
             (event->event-map))))
    (next-event [this wid runid evtid]
      (jdbc/with-transaction [tx ds]
        ;; TODO validate wid
        (->> (jdbc/execute-one! tx [(str "select * from events where runid=? and (deleted is false or deleted is null) "
                                         "and id > ? order by id asc limit 1")
                                    runid evtid])
          (event->event-map))))
    (expunge-events [this wid runid evtid]
      ;; soft delete from workflow events
      ;; where id > evtid
      (jdbc/with-transaction [tx ds]
        ;; TODO validate wid
        (jdbc/execute! tx ["update events set deleted=true where runid=? and id > ?" runid evtid])))

    (events->table [this]
      (jdbc/with-transaction [tx ds]
        (let [all-events (->> (jdbc/execute! tx ["select * from events order by runid asc, timestamp asc"])
                              (mapv (fn [e] (assoc e :events/payload (deserialize (:events/payload e))))))]
          (with-out-str
            (pprint/print-table all-events)))))
    (registrations->table [this]
      (jdbc/with-transaction [tx ds]
        (with-out-str
          (pprint/print-table (jdbc/execute! tx ["select * from metadata"])))))


    ;; metadata
    (save-workflow-definition [this wid fvar]
      (check (var? fvar) "%s: is not a var, type is %s" fvar (type fvar))
      (jdbc/with-transaction [tx ds]
        (jdbc/execute-one! tx ["insert into metadata(uid,var,type) values(?,?,?)" wid (symbol fvar) "workflow"])))

    (save-activity-definition [this aid fvar]
      (check (bound? fvar) "%s: is not a bounded var, type is %s" fvar (type fvar))
      (jdbc/with-transaction [tx ds]
        (jdbc/execute-one! tx ["insert into metadata(uid,var,type) values(?,?,?)" aid (symbol fvar) "activity"])))

    ;; persist runtime evts
    (save-workflow-event [this wid runid etype data]
      (jdbc/with-transaction [tx ds]
        (persist-event tx wid runid {:type etype :uid wid :payload data})))
    (save-activity-event [this wid runid aid etype data]
      (jdbc/with-transaction [tx ds]
        (persist-event tx wid runid {:type etype :uid aid :payload data})))))
