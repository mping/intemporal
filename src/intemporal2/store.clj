(ns intemporal2.store
  (:import [clojure.lang IDeref]))

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
  (await-task [this id] [this id opts]
    "Waits for workflow to finish. Returns a deref'able object. Can throw.
    Opts include
    - `timeout-ms`
    - `polling-interval`")
  (enqueue-task [this task]
    "Enqueues a workflow or activity execution")
  (dequeue-task [this]
    "Dequeues some workflow or activity execution"))

(defprotocol HistoryStore
  (save-event [this id event])
  (next-event [this id] [this id last-event-id]))

(deftype ResultOK [ok] IDeref (deref [this] ok))
(deftype ResultError [err] IDeref (deref [this]  (throw err)))

(defn make-memstore []
  (let [tasks  (atom {})
        history    (atom {})
        counter    (atom 0)

        find-task (fn [this id]
                    (get @tasks id))

        update-task (fn [this id & kvs]
                      (when-let [w (find-task this id)]
                        (swap! tasks assoc id (apply assoc w kvs))))]

    (reify
      IDeref
      (deref [this] {::task-store (deref tasks)
                     ::history-store  (deref history)})

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
      (transition-task [this id {:keys [type sym args result error]}]
        ;; some redundancy between :result in task and event
        (cond
          (some? args)
          (do
            (update-task this id :state :pending)
            (save-event this id {:type type :sym sym :args args}))

          (some? result)
          (do
            (update-task this id :state :success :result result)
            (save-event this id {:type type :sym sym :result result}))

          (some? error)
          (do
            (update-task this id :state :failure :result error)
            (save-event this id {:type type :sym sym :error error}))))

      (await-task [this id]
        (await-task this id {:timeout-ms Long/MAX_VALUE
                             :polling-interval-ms 100}))

      (await-task [this id {:keys [timeout-ms polling-interval-ms] :as opts}]
        (let [w (find-task this id)
              s (now)]
          (loop [curr w]
            (let [{:keys [state result id]} curr
                  elapsed (- (now) s)]
              (cond
                (>= elapsed timeout-ms) (throw (ex-info "Timeout awaiting for task" {:id id :opts (select-keys opts [:timeout-ms :polling-interval-ms])}))
                (nil? curr) (throw (ex-info "Could not find task" {:id id :opts (select-keys opts [:timeout-ms :polling-interval-ms])}))
                (= :success state) (->ResultOK result)
                (= :failure state) (->ResultError result)
                :else (do
                        (Thread/sleep (long polling-interval-ms))
                        (recur (-> (find-task this id)))))))))

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
