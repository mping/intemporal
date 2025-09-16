(ns intemporal.store
  (:require [clojure.tools.reader.edn :as edn]
            [intemporal.store.internal :as si]
            [promesa.core :as p]
            [taoensso.telemere :as t]
            #?(:clj [clojure.java.io :as io]))
  #?(:clj (:import [java.io File])))

#?(:clj (set! *warn-on-reflection* true))

;;;;
;; main protos

(defprotocol TaskStore
  (list-tasks [this] "Lists all tasks")
  (task<-panic [this task-id error]
    "Terminates the task via panic; events should not be stored")
  (task<-event [this task-id event-descr]
    "Transitions the task. The task should be dequeued beforehand. Returns the event.
    `event-descr` is one of:
    `{:sym 'ns/f :args [1]}`
    `{:sym 'ns/f :result :ok}`
    `{:sym 'ns/f :error <some error>}`
    ")
  (watch-task [this id callback]
    "Observes state changes, calling `callback` for any task that matches `predicate`.")
  (await-task [this id] [this id opts]
    "Waits for workflow to finish. Returns a deref'able value. Can throw.
    Opts include
    - `timeout-ms`: timeout for task await")
  (find-task [this id]
    "Finds the task on the db by id")
  (reenqueue-pending-tasks [this callback]
    "Marks all pending tasks belonging to the store's `owner` as `new`")
  (release-pending-tasks [this]
    "Disowns all tasks that are pending for the store's `owner`, making them available")
  (enqueue-task [this task]
    "Atomically enqueues a protocol, workflow or activity task execution")
  (dequeue-task [this] [this opts]
    "Atomically dequeues some workflow, protocol or activity task execution.
    For deterministic purposes, should dequeue the oldest task first.
    If the task was deserialized, its `fvar` attribute must be a `fn`
    Opts:
    * `lease-ms`- duration of lease for dequeue. After lease expires, the task is eligible for dequeueing again")
  (clear-tasks [this]
    "Deletes all tasks"))

(defprotocol HistoryStore
  (list-events [this] "Lists all events")
  (save-event [this task-id event] "Saves the event for the given task id. Returns the saved event")
  (all-events [this task-id] "Returns all the events for a given task id")
  (clear-events [this] "Deletes all events"))

(defprotocol InternalVarStore
  (register [this sym var] "Register the symbol with the var")
  (lookup [this sym] "Finds the var for the given symbol"))

;;;;
;; helpers

(defn now []
  #?(:clj  (System/currentTimeMillis)
     :cljs (.getTime (js/Date.))))

(def default-lease "Default lease time in millis - 15mins"
  (* 15 60 1000))

(defn sym->var [store {:keys [sym fvar] :as task}]
  #?(:clj  (or fvar (requiring-resolve sym))
     :cljs (or fvar (lookup store sym))))

(defn- edn-exists? [file]
  #?(:clj  (.exists (File. ^String file))
     :cljs (seq (.getItem (.-localStorage js/window) file))))

(defn read-edn [file readers]
  #?(:clj  (with-open [f (io/reader file)]
             (edn/read-string {:readers readers} (slurp f)))
     :cljs (let [f (.getItem (.-localStorage js/window) file)]
             (edn/read-string {:readers readers} f))))

(defn write-edn [file val]
  #?(:clj  (spit file val)
     :cljs (.setItem (.-localStorage js/window) file (pr-str val))))

;;;;
;; main impl
;;

(def default-owner "intemporal")

(defn make-store
  "Creates a new memory-based store"
  ([]
   (make-store nil))
  ([{:keys [owner file readers failures]
     :or   {owner    default-owner
            failures {:validation 0}}}]
   ;; TODO use single atom?
   (let [tasks       (atom {})
         history     (atom {})
         counter     (atom 0)
         pcounter    (atom 0)
         ecounter    (atom 0)
         tcounter    (atom 0)
         vars        (atom {})
         maybe-fail! (fn []
                       (when (< (rand-int 100)
                                (* 100 (get failures :validation)))
                         (throw (ex-info "Forced error via failure rate" {:intemporal.workflow.internal/type :internal}))))

         ;;persistence
         persist!    (fn [k ref old new]
                       (when (and file (not= old new))
                         (t/log! :debug ["Persisting store to file" file])
                         (write-edn file {:tasks    @tasks
                                          :history  @history
                                          :counter  @counter
                                          :pcounter @pcounter
                                          :ecounter @ecounter})))

         find-task   (fn [this id]
                       (get @tasks id))

         update-task (fn [this id & kvs]
                       (when-let [w (find-task this id)]
                         (maybe-fail!)
                         (->> (apply assoc w kvs)
                              (si/validate-task!)
                              (swap! tasks assoc id))))]

     ;; deser the db
     (when file
       ;; add hooks to persist on change
       (add-watch tasks :persist persist!)
       (add-watch history :persist persist!)
       (add-watch counter :persist persist!)
       (add-watch pcounter :persist persist!)
       (add-watch ecounter :persist persist!)

       (when (edn-exists? file)
         (t/log! :info ["Reading store file" file])
         (let [data (read-edn file readers)]
           (reset! tasks (or (:tasks data) {}))
           (reset! history (or (:history data) {}))
           (reset! counter (or (:counter data) 0))
           (reset! pcounter (or (:pcounter data) 0))
           (reset! ecounter (or (:ecounter data) 0)))))

     (reify
       InternalVarStore
       (register [this sym var]
         #?(:cljs (swap! vars assoc sym var)))
       (lookup [this sym]
         #?(:clj (requiring-resolve sym)
            :cljs (get @vars sym)))

       HistoryStore
       (list-events [this]
         (apply concat (vals @history)))
       (save-event [this task-id event]
         (let [evt+id (assoc event :id (swap! counter inc))]
           (si/validate-event! evt+id)
           (swap! history (fn [v]
                            (assoc v task-id (-> (or (get v task-id) [])
                                                 (conj evt+id)))))
           evt+id))
       (all-events [this task-id]
         (get @history task-id))

       (clear-events [this]
         (reset! history {}))

       TaskStore
       (list-tasks [this]
         (filter #(or (= owner (:owner %))
                      (nil? (:owner %)))
                 (vals @tasks)))

       (task<-panic [this task-id error]
         (update-task this task-id :result error))

       (task<-event [this task-id {:keys [id ref root type sym args result error] :as event-descr}]
         ;; some redundancy between :result in task and event
         ;; note that we save the event first, because update-task can trigger some watchers
         ;; and they would expect the event to be present in the history
         (cond
           (some? args)
           (let [evt {:ref ref :root root :type type :sym sym :args args :error nil :result nil}]
             (when-not id
               (save-event this task-id evt))
             (update-task this task-id :state :pending)
             evt)

           (some? error)
           (let [evt {:ref ref :root root :type type :sym sym :args nil :error error :result nil}]
             (when-not id
               (save-event this task-id evt))
             (update-task this task-id :state :failure :result error)
             evt)

           ;;(some? result) ;result can be nil
           :else
           (let [evt {:ref ref :root root :type type :sym sym :args nil :error nil :result result}]
             (when-not id
               (save-event this task-id evt))
             (update-task this task-id :state :success :result result)
             evt)))

       (find-task [this id]
         (->> (vals @tasks)
              (filter #(= (:id %) id))
              (first)))

       (watch-task [this id f]
         (let [k       (keyword (str "watcher-" (swap! pcounter inc)))
               watchfn (fn [k atm old new]
                         (let [xf        (comp
                                           (filter #(= id (:id %)))
                                           (filter #(not= (get old (:id %)) %))
                                           (take 1))
                               changeset (transduce xf conj (vals new))]

                           (when (and (first changeset)
                                      (f (first changeset)))
                             (remove-watch tasks k))))]
           (add-watch tasks k watchfn)))

       (await-task [this id]
         (await-task this id {:timeout-ms default-lease}))

       (await-task [this id {:keys [timeout-ms] :as opts}]
         (maybe-fail!)
         (let [task        (find-task this id)
               deferred    (p/deferred)
               wrap-result (fn [{:keys [result] :as task}]
                             (cond
                               (si/success? task) (p/resolved result)
                               (si/failure? task) (p/rejected result)
                               :else (p/rejected (ex-info "Unknown state" {:task task}))))]

           (if (si/terminal? task)
             (wrap-result task)
             ;;else
             (do
               (watch-task this id (fn [task]
                                     (when (si/terminal? task)
                                       (p/resolve! deferred task)
                                       true)))
               ;; wait for resolution
               ;; remember: js doesnt have blocking op so we need to chain
               (-> (p/timeout deferred timeout-ms ::timeout)
                   (p/then (fn [resolved]
                             (if (= ::timeout resolved)
                               (throw (ex-info "Timeout waiting for task to be completed" {:task task}))
                               (wrap-result resolved)))))))))

       (release-pending-tasks [this]
         (swap! tasks
                update-vals
                (fn [{:keys [state] :as task}]
                  (cond-> task
                          (and (= :pending state)
                               (= (:owner task) owner))
                          (assoc :owner nil)))))

       (reenqueue-pending-tasks [this f]
         (let [task->run? (atom #{})]
           (swap! tasks
                  update-vals
                  (fn [{:keys [state] :as task}]
                    (if (and (= :pending state)
                             (or (= (:owner task) owner)
                                 (nil? (:owner task))))
                      (do
                        ;; ensure we only run f once - swap! might run the fn multiple times
                        (when-not (contains? @task->run? task)
                          (f task)
                          (swap! task->run? conj task))
                        (assoc task :state :new :owner owner))
                      ;; else
                      task)))))

       (enqueue-task [this task]
         (maybe-fail!)
         (let [task+owner (assoc task :owner owner :order (swap! tcounter inc))]
           (si/validate-task! task+owner)
           (swap! tasks assoc (:id task) task+owner)
           #?(:cljs (register this (:sym task+owner) (:fvar task+owner)))
           task+owner))

       (dequeue-task [this]
         (dequeue-task this {:lease-ms nil}))

       (dequeue-task [this {:keys [lease-ms]}]
         (let [first-new (fn [v] (->> (vals v)
                                      (filter #(and
                                                 (or (= owner (:owner %)) (nil? (:owner %)))
                                                 (or (= :new (:state %))
                                                     (some-> (:lease-end %)
                                                             (< (now))))))
                                      (sort-by :order)
                                      (first)))
               found?    (atom nil)]

           (swap-vals! tasks
                       (fn [v] (let [found (first-new v)]
                                 (if found
                                   (->> (assoc found :state :pending
                                                     :fvar (sym->var this found)
                                                     ;; watch for overflow?
                                                     :lease-end (when lease-ms
                                                                  (+ (now) lease-ms)))
                                        (reset! found?)
                                        (assoc v (:id found)))
                                   v))))
           ;; highest first
           (->> @found?)))

       (clear-tasks [this]
         (reset! tasks {}))))))

