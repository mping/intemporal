(ns intemporal2.store
  (:require [clojure.tools.reader.edn :as edn])
  (:import [clojure.lang IDeref IAtom]
           [java.io File]))

(set! *warn-on-reflection* true)

(defn- now [] (System/currentTimeMillis))

(defprotocol TaskStore
  (apply-fn-event [this id details]
    "Transitions the task. The task should be dequeued beforehand. Returns the event.
    `details` is one of:
    `{:sym 'ns/f :args [1]}`
    `{:sym 'ns/f :result :ok}`
    `{:sym 'ns/f :error <some error>}`
    ")
  (watch-tasks [this predicate callback]
    "Observes state changes, calling `callback` for any task that matches `predicate`")
  (await-task [this id] [this id opts]
    "Waits for workflow to finish. Returns a deref'able value. Can throw.
    Opts include
    - `timeout-ms`: timeout for task await")
  (matching-task [this task]
    "Finds the matching task on the db, comparing the following tuple: `:ref :root :type :sym :args`")
  (reenqueue-pending-tasks [this callback]
    "Marks all pending tasks as `new`")
  (enqueue-task [this task]
    "Enqueues a workflow or activity execution")
  (dequeue-task [this]
    "Dequeues some workflow or activity execution."))

(defprotocol HistoryStore
  (save-event [this id event] "Saves the event. Returns the saved event")
  (all-events [this id] [this id last-event-id] "Returns all the events, optionall after `last-event-id`"))

(deftype ResultOK [ok] IDeref (deref [this] ok))
(deftype ResultError [err] IDeref (deref [this] (throw err)))

(defn make-memstore
  ([]
   (make-memstore nil nil))
  ([file readers]
   ;; TODO use single atom?
   (let [tasks        (atom {})
         history      (atom {})
         counter      (atom 0)
         pcounter     (atom 0)
         ecounter     (atom 0)

         ;;persistence
         lock        (Object.)
         persist!    (fn [_ _ _ _] (when file
                                     (try
                                       (locking lock
                                         (with-open [f (clojure.java.io/writer file)]
                                           (spit f {:tasks    @tasks
                                                    :history  @history
                                                    :counter  @counter
                                                    :pcounter @pcounter
                                                    :ecounter @ecounter})))
                                       (catch Exception e
                                         (.printStackTrace e)))))

         find-task    (fn [this id]
                        (get @tasks id))

         update-task  (fn [this id & kvs]
                        (when-let [w (find-task this id)]
                          (swap! tasks assoc id (apply assoc w kvs))))]

     ;; deser the db
     (when file
       ;; add hooks to persist on change
       (add-watch tasks :persist persist!)
       (add-watch history :persist persist!)
       (add-watch counter :persist persist!)
       (add-watch pcounter :persist persist!)
       (add-watch ecounter :persist persist!)

       (when (.exists (File. ^String file))
         (with-open [f (clojure.java.io/reader file)]
           (let [data (->> (slurp file)
                           (edn/read-string {:readers readers}))]
             (reset! tasks (:tasks data))
             (reset! history (:history data))
             (reset! counter (:counter data))
             (reset! pcounter (:pcounter data))
             (reset! ecounter (:ecounter data))))))

     (reify
       IDeref
       (deref [this] {::task-store    tasks
                      ::history-store history})
       HistoryStore
       (save-event [this id event]
         (let [evt+id (assoc event :id (swap! counter inc))]
           (swap! history (fn [v]
                            (assoc v id (-> (or (get v id) [])
                                            (conj evt+id)))))
           evt+id))
       (all-events [this id]
         (get @history id))
       (all-events [this id last-event-id]
         (when-let [evts (get @history id)]
           (filter #(> (:id %) last-event-id) evts)))

       TaskStore
       (apply-fn-event [this id {:keys [ref root type sym args result error]}]
         ;; some redundancy between :result in task and event
         (cond
           (some? args)
           (let [evt {:ref ref :root root :type type :sym sym :args args}]
             (update-task this id :state :pending)
             (save-event this id evt))

           (some? error)
           (let [evt {:ref ref :root root :type type :sym sym :error error}]
             (update-task this id :state :failure :result error)
             (save-event this id evt))

           :else ;;(some? result) ;result can be nil
           (let [evt {:ref ref :root root :type type :sym sym :result result}]
             (update-task this id :state :success :result result)
             (save-event this id evt))))


       (matching-task [this task]
         (let [ks     [:ref :root :type :sym :args]
               match? (select-keys task ks)]
           (->> (vals @tasks)
                (filter #(= (select-keys % ks) match?))
                (first))))

       (watch-tasks [this predicate f]
         (let [k       (keyword (str "watcher-" (swap! pcounter inc)))
               watchfn (fn [k atm old new]
                         ;; todo: xf
                         (let [matches   (filter predicate (vals new))
                               changeset (filter #(not= (get old (:id %)) %) matches)]
                           (run! #(f %) changeset)))]
           (add-watch tasks k watchfn)
           (run! f (filter predicate (vals @tasks)))))

       (await-task [this id]
         (await-task this id {:timeout-ms Long/MAX_VALUE}))

       (await-task [this id {:keys [timeout-ms] :as opts}]
         (let [task        (find-task this id)
               latch       (promise)
               completed?  (fn [{:keys [state]}]
                             (or (= :success state)
                                 (= :failure state)))
               wrap-result (fn [{:keys [state result] :as task}]
                             (cond
                               (= :success state) (->ResultOK result)
                               (= :failure state) (->ResultError result)
                               :else (->ResultError (ex-info "Unknown state" {:task task}))))]

           (if (completed? task)
             (wrap-result task)
             (let [pred #(and (= (:id %) id)
                              (or (= :success (:state %))
                                  (= :failure (:state %))))]
               (watch-tasks this pred (fn [_] (deliver latch ::completed)))
               ;; wait for resolution
               (if (= ::timeout (deref latch timeout-ms ::timeout))
                 (throw (ex-info "Timeout waiting for task to be completed" {:task task}))
                 (wrap-result (find-task this id)))))))

       (reenqueue-pending-tasks [this f]
         (swap! tasks
                update-vals
                (fn [{:keys [state] :as task}]
                  (cond-> task
                          (= :pending state) (do (f task)
                                                 (assoc task :state :new))))))

       (enqueue-task [this task]
         (swap! tasks assoc (:id task) task)
         task)

       (dequeue-task [this]
         (let [first-new (fn [v] (->> (vals v)
                                      (filter #(= :new (:state %)))
                                      (first)))
               found?    (atom nil)]
           (swap-vals! tasks
                       (fn [v] (let [found (first-new v)]
                                 (if found
                                   (do (->> (assoc found :state :pending)
                                            (reset! found?)
                                            (assoc v (:id found))))
                                   v))))
           ;; highest first
           (->> @found?)))))))
