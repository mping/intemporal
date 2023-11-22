(ns intemporal2.store
  (:import [clojure.lang IDeref]
           [java.util.concurrent CountDownLatch TimeUnit]
           [java.util.concurrent.locks ReentrantLock]))

(set! *warn-on-reflection* true)

(defn- now [] (System/currentTimeMillis))

(defprotocol TaskStore
  (transition-task [this id details]
    "Transitions the task. The task should be dequeued beforehand.
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
    - `promise`: if supplied, will be delivered when task is complete
    - `timeout-ms`: timeout for task await")
  (enqueue-task [this task]
    "Enqueues a workflow or activity execution")
  (dequeue-task [this]
    "Dequeues some workflow or activity execution"))

(defprotocol HistoryStore
  (save-event [this id event])
  (next-event [this id] [this id last-event-id]))

(deftype ResultOK [ok] IDeref (deref [this] ok))
(deftype ResultError [err] IDeref (deref [this] (throw err)))

(defn make-memstore []
  (let [tasks       (atom {})
        history     (atom {})
        counter     (atom 0)
        pcounter    (atom 0)

        find-task   (fn [this id]
                      (get @tasks id))

        update-task (fn [this id & kvs]
                      (when-let [w (find-task this id)]
                        (swap! tasks assoc id (apply assoc w kvs))))]

    (reify
      IDeref
      (deref [this] {::task-store    (deref tasks)
                     ::history-store (deref history)})

      HistoryStore
      (save-event [this id event]
        (let [evt+id (assoc event :id (swap! counter inc))]
          (swap! history (fn [v]
                           (assoc v id (-> (or (get v id) [])
                                           (conj evt+id)))))))
      (next-event [this id]
        (-> (get @history id)
            first))
      (next-event [this id last-event-id]
        (when-let [evts (get @history id)]
          (->> evts
               (filter #(<= (:id %) last-event-id))
               (first))))

      TaskStore
      (transition-task [this id {:keys [ref type sym args result error]}]
        ;; some redundancy between :result in task and event
        (cond
          (some? args)
          (do
            (update-task this id :state :pending)
            (save-event this id {:ref ref :type type :sym sym :args args}))

          (some? result)
          (do
            (update-task this id :state :success :result result)
            (save-event this id {:ref ref :type type :sym sym :result result}))

          (some? error)
          (do
            (update-task this id :state :failure :result error)
            (save-event this id {:ref ref :type type :sym sym :error error}))))

      (watch-tasks [this predicate f]
        (let [k       (keyword (str "watcher-" (swap! pcounter inc)))
              watchfn (fn [k atm old new]
                        ;; todo: xf
                        (let [matches   (filter predicate (vals new))
                              changeset (filter #(not= (get old (:id %)) %) matches)]
                          (run! #(f %) changeset)))]
          (add-watch tasks k watchfn)))

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

      (enqueue-task [this workflow]
        (swap! tasks assoc (:id workflow) workflow))

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
          @found?)))))
