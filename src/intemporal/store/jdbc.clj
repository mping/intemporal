(ns intemporal.store.jdbc
  (:require [intemporal.store :as store]
            [intemporal.workflow.internal :as i]
            [intemporal.store.internal :refer [serialize deserialize serializable? validate-task validate-event]]
            [migratus.core :as migratus]
            [next.jdbc :as jdbc]
            [next.jdbc.sql.builder :as builder]
            [next.jdbc.result-set :as rs]
            [promesa.core :as p])
  (:import [java.sql Timestamp]
           [java.util Date]))

(comment
  (let [cfg {:store            :database
             :migration-dir    (str "migrations/postgres")
             :watch-polling-ms 100
             :db               {:jdbcUrl "jdbc:postgresql://localhost:5432/root?user=root&password=root"}}]
    (migratus/rollback cfg)
    (migratus/migrate cfg))
  "")

;;;;
;; utilities

(defn- kw->db [kw]
  (when kw
    (if (keyword? kw)
      (.substring (str kw) 1)
      (name kw))))

(defn- db->kw [v]
  (when v (keyword v)))

(defn- db->task [{:keys [id proto type ref root sym args result state lease_end runtime] :as task}]
  (let [dargs   (deserialize args)
        dresult (deserialize result)
        druntime (deserialize runtime)
        ssym    (symbol sym)
        sproto  (when proto (symbol proto))
        kstate  (db->kw state)]
    (cond-> (condp = type
              "workflow" (i/create-workflow-task ref root ssym (resolve ssym) dargs id dresult kstate druntime)
              "activity" (i/create-activity-task ref root ssym (resolve ssym) dargs id dresult kstate druntime)
              "proto-activity" (i/create-proto-activity-task sproto ref root ssym (resolve ssym) dargs id dresult kstate druntime))
            lease_end (assoc :lease-end lease_end))))

(defn- db->event [{:keys [id type ref root sym args result] :as event}]
  (let [dargs   (deserialize args)
        dresult (deserialize result)]
    (assoc event
      :type (db->kw type)
      :ref ref
      :root root
      :sym (symbol sym)
      :args dargs
      :result dresult)))

;;;;
;; main

(defn make-store
  "Creates a new Postgres-based store."
  [{:keys [owner migration-dir migrate? watch-polling-ms]
    :or {owner "intemporal" migrate? true watch-polling-ms 100} :as opts}]
  (let [db-spec      (dissoc opts :migration-dir :migrate? :watch-polling-ms)
        config       {:store         :database
                      :migration-dir migration-dir
                      :db            db-spec}
        default-opts {:builder-fn rs/as-unqualified-lower-maps}]

    (when migrate?
      (migratus/migrate config))

    (reify
      store/InternalVarStore
      (register [this sym var])
      (lookup [this sym]
        (requiring-resolve sym))

      store/HistoryStore
      (list-events [this]
        (->> (jdbc/with-transaction [tx db-spec]
               (jdbc/execute! tx ["select * from events"] default-opts))
             (map db->event)))

      (save-event [this task-id {:keys [type ref root sym args result] :as event}]
        (assert (serializable? args) "Event args should be serializable")
        (assert (serializable? result) "Event result should be serializable")
        (validate-event event)
        (let [args   (serialize args)
              result (serialize result)
              res    (jdbc/with-transaction [tx db-spec]
                       (jdbc/execute-one! tx ["INSERT INTO events(type, ref, root, sym, args, result) values (?,?,?,?,?,?) RETURNING id"
                                              (kw->db type) ref root (str sym) args result]
                                          default-opts))]
          (assoc event :id (:id res))))

      (all-events [this task-id]
        (->> (jdbc/with-transaction [tx db-spec]
               (jdbc/execute! tx ["select * from events where ref=?" task-id] default-opts))
             (map db->event)))

      (clear-events [this]
        (jdbc/with-transaction [tx db-spec]
          (jdbc/execute! tx ["delete from events"])))

      store/TaskStore
      (list-tasks [this]
        (->> (jdbc/with-transaction [tx db-spec]
               (jdbc/execute! tx ["select * from tasks"] default-opts))
             (map db->task)))

      (task<-event [this task-id {:keys [id ref root type sym args result error] :as event-descr}]
        ;; some redundancy between :result in task and event
        ;; note that we save the event first, because update-task can trigger some watchers
        ;; and they would expect the event to be present in the history
        (jdbc/with-transaction [tx db-spec]
          (let [evt          {:ref ref :root root :type type :sym sym :args args}
                updated-task (cond
                               (some? args) {:state (kw->db :pending) :args (serialize args)}
                               (some? error) {:state (kw->db :failure) :result (serialize error)}
                               :else {:state (kw->db :success) :result (serialize result)})
                updated-evt  (cond
                               (some? args) (assoc evt :args args)
                               (some? error) (assoc evt :error error)
                               :else (assoc evt :result result))]

            (when-not id
              (store/save-event this task-id updated-evt))
            (validate-task updated-task)
            (jdbc/execute-one! tx (builder/for-update "tasks" updated-task {:id task-id} default-opts))
            updated-evt)))

      (find-task [this id]
        (some-> (jdbc/with-transaction [tx db-spec]
                  (jdbc/execute-one! tx ["select * from tasks where id=?" id] default-opts))
                (db->task)))

      (watch-task [this id f]
        (let [query-state! (fn []
                             (jdbc/with-transaction [tx db-spec]
                               (jdbc/execute-one! tx ["select state from tasks where id=?" id] default-opts)))
              state        (query-state!)
              watch?       (atom true)]
          (p/vthread
            (while (and @watch? state)
              (Thread/sleep (long watch-polling-ms))
              (when (not= state (query-state!))
                (let [task (some-> (jdbc/with-transaction [tx db-spec]
                                     (jdbc/execute-one! tx ["select * from tasks where id=?" id] default-opts))
                                   (db->task))]
                  (when (and task (f task))
                    (reset! watch? false))))))))

      (await-task [this id]
        (store/await-task this id {:timeout-ms store/default-lease}))

      (await-task [this id {:keys [timeout-ms] :as opts}]
        (let [task        (store/find-task this id)
              deferred    (p/deferred)
              completed?  (fn [{:keys [state]}]
                            (or (= :success state)
                                (= :failure state)))
              wrap-result (fn [{:keys [state result] :as task}]
                            (cond
                              (= :success state) (p/resolved result)
                              (= :failure state) (p/rejected result)
                              ;; TODO throw internal error
                              :else (p/rejected (ex-info "Unknown state" {:task task}))))]

          (if (completed? task)
            (wrap-result task)
            ;;else
            (do
              (store/watch-task this id (fn [{:keys [state] :as task}]
                                          (when (#{:success :failure} state)
                                            (p/resolve! deferred task))))
              ;; wait for resolution
              (-> (p/timeout deferred timeout-ms ::timeout)
                  (p/then (fn [resolved]
                            (if (= ::timeout resolved)
                              (throw (ex-info "Timeout waiting for task to be completed" {:task task}))
                              (wrap-result resolved)))))))))

      (reenqueue-pending-tasks [this f]
        (let [tasks? (jdbc/with-transaction [tx db-spec]
                       (let [tasks (jdbc/execute! tx ["select * from tasks where state='pending'"] default-opts)]
                         (jdbc/execute-one! tx ["update tasks set state='new' where id = ANY(?)" (into-array (mapv :id tasks))])
                         (doseq [row tasks]
                           (f (db->task row)))
                         tasks))]
          tasks?))

      (enqueue-task [this {:keys [id proto type ref root sym args result state lease-end runtime] :as task}]
        (assert (serializable? args) "Task args should be serializable")
        (assert (serializable? result) "Task result should be serializable")
        (assert (serializable? runtime) "Task runtime should be serializable")
        (assert (or (nil? proto) (some? (:on proto)) "Task protocol not valid, missing :on attribute"))
        (validate-task task)
        (let [proto?  (cond (symbol? proto) (str proto)
                            (some? (:on proto)) (str (:on proto))
                            (string? proto) proto)
              args    (serialize args)
              result  (serialize result)
              runtime (serialize runtime)]
          (jdbc/with-transaction [tx db-spec]
            ;; TODO use owner
            (jdbc/execute! tx ["INSERT INTO tasks(id,proto,type,ref,root,sym,args,result,state,lease_end,runtime) values (?,?,?,?,?,?,?,?,?,?,?) RETURNING id"
                               id proto? (kw->db type) (kw->db ref) (kw->db root) (str sym) args result (kw->db state) lease-end runtime])))
        task)

      (dequeue-task [this]
        (store/dequeue-task this {:lease-ms nil}))

      (dequeue-task [this {:keys [lease-ms]}]
        ;; TODO check owner
        (let [found? (jdbc/with-transaction [tx db-spec]
                       (when-let [task (some-> (jdbc/execute-one! tx ["select * from tasks where (state='new' or lease_end < now()) order by id asc limit 1"] default-opts)
                                               (db->task))]
                         (let [lease-epoch (when lease-ms
                                             (* 1000 (+ (store/now) lease-ms)))
                               lease-ts    (when lease-epoch
                                             (-> (Date. (long lease-epoch))
                                                 (.toInstant)
                                                 (Timestamp/from)))]
                           (jdbc/execute-one! tx ["update tasks set state='pending', lease_end=? where id=?" lease-ts (:id task)])
                           (assoc task
                             :state :pending
                             :fvar (store/sym->var this task)
                             :lease-end (when lease-epoch
                                          (/ lease-epoch 1000))))))]
          found?))

      (clear-tasks [this]
        (jdbc/with-transaction [tx db-spec]
          (jdbc/execute! tx ["delete from tasks"]))))))

#_:clj-kondo/ignore
(comment
  (require '[intemporal.workflow.internal :as i])
  (defprotocol TestProto
    (a [this] "x"))
  (def s (make-store {:jdbcUrl       "jdbc:postgresql://localhost:5432/root?user=root&password=root"
                      :migration-dir "migrations/postgres"}))

  (def t (i/create-workflow-task nil nil 'clojure.core/+ (var-get #'+) [{:a 1}]))
  (def t2 (i/create-proto-activity-task TestProto (:id t) (:id t) 'clojure.core/+ (var-get #'+) [{:b 2 :c #inst "2011-01-01"}]))

  (store/clear-events s)
  (store/clear-tasks s)

  (store/enqueue-task s t)
  (store/enqueue-task s t2)

  (store/list-tasks s)

  (store/watch-task s (:id t) (fn [task] (println "CALLBACK" task)))

  (prn (store/dequeue-task s))
  (store/save-event s 1 {:type :intemporal.workflow/invoke
                         :ref  (:id t) :root (:id t) :sym 'clojure.core/+ :args [] :result [1]})

  (store/list-events s))
