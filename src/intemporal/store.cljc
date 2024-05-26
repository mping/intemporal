(ns intemporal.store
  (:require [clojure.tools.reader.edn :as edn]
            [promesa.core :as p]
            #?(:clj [clojure.java.io :as io]))
  #?(:clj (:import [java.io File])))

#?(:clj (set! *warn-on-reflection* true))

;;;;
;; main protos

(defprotocol TaskStore
  (list-tasks [this] "Lists all tasks")
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
    "Marks all pending tasks as `new`")
  (enqueue-task [this task]
    "Atomically enqueues a protocol, workflow or activity task execution")
  (dequeue-task [this] [this opts]
    "Atomically dequeues some workflow, protocol or activity task execution.
    For deterministic purposes, should dequeue the oldest task first.
    If the task was deserialized, its `fvar` attribute must be a `fn`
    Opts:
    * `lease-ms`- duration of lease for dequeue. After lease expires, the task is eligible for dequeueing again")
  (clear-tasks [this]
    "Clears all tasks"))

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

#_:clj-kondo/ignore
(defn now []
  #?(:clj  (System/currentTimeMillis)
     :cljs (.getTime (js/Date.))))

(def default-lease "Default lease time in millis - 15mins"
  (* 15 60 1000))

(defn sym->var [store {:keys [sym fvar] :as task}]
  #?(:clj  (or fvar (requiring-resolve sym))
     :cljs (or fvar (lookup store sym))))

(defn- read-edn [file readers]
  #?(:clj  (with-open [f (io/reader file)]
             (edn/read-string {:readers readers} (slurp f)))
     :cljs (let [f (.getItem (.-localStorage js/window) file)]
             (edn/read-string {:readers readers} f))))

(defn- write-edn [file val]
  #?(:clj  (spit file val)
     :cljs (.setItem (.-localStorage js/window) file (pr-str val))))

(defn- edn-exists? [file]
  #?(:clj  (.exists (File. ^String file))
     :cljs (seq (.getItem (.-localStorage js/window) file))))

;;;;
;; main impl

(defn make-store
  "Creates a new memory-based store"
  ([]
   (make-store nil nil))
  ([file readers]
   ;; TODO use single atom?
   (let [tasks       (atom {})
         history     (atom {})
         counter     (atom 0)
         pcounter    (atom 0)
         ecounter    (atom 0)
         tcounter    (atom 0)
         vars        (atom {})

         ;;persistence
         persist!    (fn [_ _ _ _] (when file
                                     (try
                                       (write-edn file {:tasks    @tasks
                                                        :history  @history
                                                        :counter  @counter
                                                        :pcounter @pcounter
                                                        :ecounter @ecounter})
                                       (catch #?(:clj Exception :cljs js/Error) e
                                         #?(:clj  (.printStackTrace e)
                                            :cljs (js/console.error e))))))

         find-task   (fn [this id]
                       (get @tasks id))

         update-task (fn [this id & kvs]
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

       (when (edn-exists? file)
         (let [data (read-edn file readers)]
           (reset! tasks (:tasks data))
           (reset! history (:history data))
           (reset! counter (:counter data))
           (reset! pcounter (:pcounter data))
           (reset! ecounter (:ecounter data)))))

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
         (vals @tasks))

       (task<-event [this task-id {:keys [ref root type sym args result error] :as event-descr}]
         ;; some redundancy between :result in task and event
         ;; note that we save the event first, because update-task can trigger some watchers
         ;; and they would expect the event to be present in the history
         (cond
           (some? args)
           (let [evt {:ref ref :root root :type type :sym sym :args args :error nil :result nil}]
             (save-event this task-id evt)
             (update-task this task-id :state :pending)
             evt)

           (some? error)
           (let [evt {:ref ref :root root :type type :sym sym :args nil :error error :result nil}]
             (save-event this task-id evt)
             (update-task this task-id :state :failure :result error)
             evt)

           ;;(some? result) ;result can be nil
           :else
           (let [evt {:ref ref :root root :type type :sym sym :args nil :error nil :result result}]
             (save-event this task-id evt)
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
         (let [task        (find-task this id)
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
               (watch-task this id (fn [{:keys [state] :as task}]
                                     (when (#{:success :failure} state)
                                       (p/resolve! deferred task))))
               ;; wait for resolution
               ;; remember: js doesnt have blocking op so we need to chain
               (-> (p/timeout deferred timeout-ms ::timeout)
                   (p/then (fn [resolved]
                             (if (= ::timeout resolved)
                               (throw (ex-info "Timeout waiting for task to be completed" {:task task}))
                               (wrap-result resolved)))))))))

       (reenqueue-pending-tasks [this f]
         (let [task->run? (atom #{})]
           (swap! tasks
                  update-vals
                  (fn [{:keys [state] :as task}]
                    #_:clj-kondo/ignore
                    (cond-> task
                            (= :pending state)
                            (do
                              ;; ensure we only run f once - swap! might run the fn multiple times
                              (when-not (contains? @task->run? task)
                                (f task)
                                (swap! task->run? conj task))
                              (assoc task :state :new)))))))

       (enqueue-task [this task]
         (swap! tasks assoc
                (:id task) (assoc task :order (swap! tcounter inc)))
         #?(:cljs (register this (:sym task) (:fvar task)))
         task)

       (dequeue-task [this]
         (dequeue-task this {:lease-ms nil}))

       (dequeue-task [this {:keys [lease-ms]}]
         (let [first-new (fn [v] (->> (vals v)
                                      (filter #(or (= :new (:state %))
                                                   (some-> (:lease-end %)
                                                           (< (now)))))
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

