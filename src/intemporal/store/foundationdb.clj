(ns intemporal.store.foundationdb
  (:require [intemporal.store :as store]
            [intemporal.workflow.internal :as i]
            [intemporal.store.internal :refer [resolve-fvar serialize deserialize serializable? next-id validate-task validate-event]]
            [me.vedang.clj-fdb.FDB :as cfdb]
            [me.vedang.clj-fdb.core :as fc]
            [me.vedang.clj-fdb.transaction :as ftr]
            [me.vedang.clj-fdb.subspace.subspace :as fsub]
            [promesa.core :as p])
  (:import [com.apple.foundationdb FDB FDBTransaction KeyValue]
           [com.apple.foundationdb.tuple Tuple]))

;; FDB is a KV store; this store impl will use the subspace feature for namespacing
;; <tasks>  <id>          => task
;; <events> <taskid> <id> => event
;; event ids are scoped to a task
;; values are (de)serialized via nippy

(def fdb-api-version cfdb/clj-fdb-api-version)


(defmacro with-tx [binding & body]
  (let [[tx-sym db-sym] binding
        database (with-meta db-sym {:tag 'com.apple.foundationdb.Database})]
    ;; TODO type hint Closeable?
    `(with-open [db# ~database]
       (ftr/run db#
         (fn [~tx-sym] (do ~@body))))))

(defn make-store
  ([]
   (make-store nil))
  ([{:keys [owner cluster-file-path]
     :or {owner "intemporal"}}]
   (let [^FDB fdb (cfdb/select-api-version fdb-api-version)
         open-db  #(if cluster-file-path
                     (cfdb/open fdb cluster-file-path)
                     (cfdb/open fdb))
         subspace-tasks (fsub/create ["tasks"])
         subspace-history (fsub/create ["history"])]
     (reify
       store/InternalVarStore
       (register [this sym var])
       (lookup [this sym]
         (requiring-resolve sym))

       store/HistoryStore
       (list-events [this]
         (-> (with-tx [tx (open-db)]
               (fc/get-range tx subspace-history {:valfn deserialize}))
             (vals)))

       (save-event [this task-id event]
         (let [evt-id (next-id)
               evt+id (assoc event :id evt-id)]
           (assert (serializable? evt+id) "Event should be serializable")
           (validate-event evt+id)
           (with-tx [tx (open-db)]
             ;; TODO use owner
             (fc/set tx subspace-history [task-id evt-id] (serialize evt+id)))
           evt+id))

       (all-events [this task-id]
         (-> (with-tx [tx (open-db)]
               ;; TODO use owner
               (fc/get-range tx subspace-history [task-id] {:valfn deserialize}))
             (vals)))

       (clear-events [this]
         (with-tx [tx (open-db)]
           (fc/clear-range tx subspace-history)))

       store/TaskStore
       (list-tasks [this]
         (-> (with-tx [tx (open-db)]
               (fc/get-range tx subspace-tasks {:valfn (comp resolve-fvar deserialize)}))
             (vals)))

       (task<-event [this task-id {:keys [id ref root type sym args result error] :as event-descr}]
         ;; some redundancy between :result in task and event
         ;; note that we save the event first, because update-task can trigger some watchers
         ;; and they would expect the event to be present in the history
         (with-tx [tx (open-db)]
           (let [task         (fc/get tx subspace-tasks task-id {:valfn (comp resolve-fvar deserialize)})
                 evt          {:ref ref :root root :type type :sym sym :args args}
                 updated-task (cond
                                (some? args) (assoc task :state :pending)
                                (some? error) (assoc task :state :failure :result error)
                                :else (assoc task :state :success :result result))
                 updated-evt  (cond
                                (some? args) (assoc evt :args args)
                                (some? error) (assoc evt :error error)
                                :else (assoc evt :result result))]
             (assert (serializable? task) "task is not serializable")
             (when-not id
               (store/save-event this task-id updated-evt))
             (validate-task updated-task)
             (fc/set tx subspace-tasks task-id (serialize updated-task))
             updated-evt)))

       (find-task [this id]
         (with-tx [^FDBTransaction tx (open-db)]
           (when-let [task? (fc/get tx subspace-tasks id)]
             (resolve-fvar (deserialize task?)))))

       (watch-task [this id f]
         (let [watch? (atom true)]
           (p/vthread
             (while @watch?
               @(with-tx [^FDBTransaction tx (open-db)]
                  (when (fc/get tx subspace-tasks id)
                    (.watch tx (fsub/pack subspace-tasks (Tuple/from (object-array [id]))))))

               (with-tx [^FDBTransaction tx (open-db)]
                 (when-let [task? (fc/get tx subspace-tasks id)]
                   (when (f (resolve-fvar (deserialize task?)))
                     (reset! watch? false))))))))

       (await-task [this id]
         (store/await-task this id {:timeout-ms store/default-lease}))

       (await-task [this id {:keys [timeout-ms] :as opts}]
         ;; TODO use owner
         (let [task        (with-tx [tx (open-db)]
                             (fc/get tx subspace-tasks [id]))
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
         (with-tx [tx (open-db)]
           (reduce
             (fn [acc ^KeyValue kv]
               (let [task (-> kv .getValue deserialize resolve-fvar)]
                 (when (= :pending (:state task))
                   (f task)
                   (fc/set tx subspace-tasks [(:id task)] (serialize (assoc task :state :new))))
                 acc))
             nil
             (ftr/get-range tx (fsub/range subspace-tasks)))))

       (enqueue-task [this task]
         ;; TODO use owner
         (let [serializable (dissoc task :fvar)]
           (assert (serializable? serializable) "Task should be serializable")
           (assert (:id task) "Task should have an id")
           (validate-task task)
           (with-tx [tx (open-db)]
             (fc/set tx subspace-tasks [(:id task)] (serialize serializable))))
         task)

       (dequeue-task [this]
         (store/dequeue-task this {:lease-ms nil}))

       (dequeue-task [this {:keys [lease-ms]}]
         ;; TODO check owner
         (let [dequeuable? (fn [{:keys [state lease-end]}]
                             (or (= :new state)
                                 (some-> lease-end
                                         (< (store/now)))))
               found?      (with-tx [tx (open-db)]
                             (reduce
                               (fn [_ ^KeyValue kv]
                                 (let [task (-> kv .getValue deserialize resolve-fvar)]
                                   (when (dequeuable? task)
                                     (let [updated-task (assoc task
                                                          :state :pending
                                                          :fvar (store/sym->var this task)
                                                          :lease-end (when lease-ms
                                                                       (+ (store/now) lease-ms)))]
                                       (fc/set tx subspace-tasks [(:id task)] (serialize (dissoc updated-task :fvar)))
                                       (reduced updated-task)))))
                               nil
                               (ftr/get-range tx (fsub/range subspace-tasks))))]
           found?))

       (clear-tasks [this]
         (with-tx [tx (open-db)]
           (fc/clear-range tx subspace-tasks)))))))


(comment
  (def s (make-store {:cluster-file-path "docker/fdb.cluster"}))
  (def t (i/create-workflow-task "ref#" "root#" 'clojure.core/+ (var-get #'+) [] 1))

  (store/save-event s 1 {:a 1})
  (store/list-events s)
  (store/list-tasks s)

  (store/enqueue-task s t)
  (store/dequeue-task s))

  ;(store/watch-task s 1 (partial println ">>>"))