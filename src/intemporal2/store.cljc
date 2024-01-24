(ns intemporal2.store
  (:require [clojure.tools.reader.edn :as edn]
            [promesa.core :as p]
            #?(:clj [clojure.java.io :as io]
               :cljs [cljs.core :refer [IDeref]]))
  #?(:clj (:import [clojure.lang IDeref]
                   [java.io File])))

#?(:clj (set! *warn-on-reflection* true))

;;;;
;; main protos

(defprotocol TaskStore
  (list-tasks [this] "Lists all tasks")
  (apply-fn-event [this id details]
    "Transitions the task. The task should be dequeued beforehand. Returns the event.
    `details` is one of:
    `{:sym 'ns/f :args [1]}`
    `{:sym 'ns/f :result :ok}`
    `{:sym 'ns/f :error <some error>}`
    ")
  (watch-tasks [this predicate callback]
    "Observes state changes, calling `callback` for any task that matches `predicate`. Returns a function to cancel the observation.")
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
    "Dequeues some workflow, protocol or activity execution. If the task was deserialized, `fvar` attribute must be a `fn`"))

(defprotocol HistoryStore
  (list-events [this] "Lists all events")
  (save-event [this id event] "Saves the event for the given workflow id. Returns the saved event")
  (all-events [this id] [this id last-event-id] "Returns all the eventsf for a given workflow id, optionall after `last-event-id`"))

(defprotocol InternalVarStore
  (register [this sym var] "Register the symbol with the var")
  (lookup [this sym] "Finds the var for the given symbol"))

;;;;
;; helpers

#_:clj-kondo/ignore
(defn- now []
  #?(:clj  (System/currentTimeMillis)
     :cljs (.getTime (js/Date.))))

(defn- sym->var [store {:keys [sym fvar] :as task}]
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


(deftype ResultOK [ok]
  IDeref
  (#?(:clj deref :cljs -deref) [this] ok))

(deftype ResultError [err]
  IDeref
  (#?(:clj deref :cljs -deref) [this] (throw err)))

;;;;
;; main impl

(defn make-memstore
  ([]
   (make-memstore nil nil))
  ([file readers]
   ;; TODO use single atom?
   (let [tasks       (atom {})
         history     (atom {})
         counter     (atom 0)
         pcounter    (atom 0)
         ecounter    (atom 0)
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
       IDeref
       (#?(:clj deref :cljs -deref) [this] {::task-store    tasks
                                            ::history-store history})

       InternalVarStore
       (register [this sym var]
         #?(:cljs (swap! vars assoc sym var)))
       (lookup [this sym]
         #?(:clj (requiring-resolve sym)
            :cljs (get @vars sym)))

       HistoryStore
       (list-events [this]
         (apply concat (vals @history)))
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
       (list-tasks [this]
         (vals @tasks))

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

           ;;(some? result) ;result can be nil
           :else
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
                           (when (seq changeset)
                             (run! #(f %) changeset))))]
           ;; add a watch but run at least once
           (add-watch tasks k watchfn)
           (run! f (filter predicate (vals @tasks)))
           (fn [] (remove-watch tasks k))))

       (await-task [this id]
         (await-task this id {:timeout-ms 999999999}))

       (await-task [this id {:keys [timeout-ms] :as opts}]
         (let [task        (find-task this id)
               deferred    (p/deferred)
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
             ;;else
             (let [pred #(and (= (:id %) id)
                              (or (= :success (:state %))
                                  (= :failure (:state %))))]
               (watch-tasks this pred (fn [task]
                                        (p/resolve! deferred task)))
               ;; wait for resolution
               ;; remember: js doesnt have blocking op so we need to chain
               (-> (p/timeout deferred timeout-ms ::timeout)
                   (p/then (fn [resolved]
                             (if (= ::timeout resolved)
                               (throw (ex-info "Timeout waiting for task to be completed" {:task task}))
                               (wrap-result resolved))))
                   (p/then (fn [wrapped]
                             ;; force throw to make it a reject promise in case we're running js
                             (deref wrapped))))))))

       (reenqueue-pending-tasks [this f]
         (swap! tasks
                update-vals
                (fn [{:keys [state] :as task}]
                  #_:clj-kondo/ignore
                  (cond-> task
                          (= :pending state) (do (f task)
                                                 (assoc task :state :new))))))

       (enqueue-task [this task]
         (swap! tasks assoc (:id task) task)
         #?(:cljs (register this (:sym task) (:fvar task)))
         task)

       (dequeue-task [this]
         (let [first-new (fn [v] (->> (vals v)
                                      (filter #(= :new (:state %)))
                                      (first)))
               found?    (atom nil)]
           (swap-vals! tasks
                       (fn [v] (let [found (first-new v)]
                                 (if found
                                   (->> (assoc found :state :pending :fvar (sym->var this found))
                                        (reset! found?)
                                        (assoc v (:id found)))
                                   v))))
           ;; highest first
           (->> @found?)))))))
