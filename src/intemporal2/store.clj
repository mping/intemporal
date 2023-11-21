(ns intemporal2.store
  (:import [clojure.lang IDeref]))

(set! *warn-on-reflection* true)

(defn- now [] (System/currentTimeMillis))

(defprotocol TaskStore
  (transition-workflow [this wid args])
  (await-workflow [this wid] [this wid timeout-ms]
    "Waits for workflow to finish. Returns a deref'able object. Can throw.")
  (enqueue-workflow [this workflow]
    "Enqueues a workflow execution")
  (dequeue-workflow [this]
    "Dequeues some workflow execution")
  (enqueue-activity [this activity]
    "Enqueues an activity execution")
  (dequeue-activity [this]
    "Dequeues some activity execution"))

(defprotocol HistoryStore
  (save-event [this wid event])
  (next-event [this wid] [this wid last-event-id]))

(deftype ResultOK [ok] IDeref (deref [this] ok))
(deftype ResultError [err] IDeref (deref [this]  (throw err)))


(defn make-memstore []
  (let [workflows  (atom {})
        activities (atom {})
        history    (atom {})
        counter    (atom 0)

        find-workflow (fn [this wid]
                        (get @workflows wid))

        update-workflow (fn [this wid & kvs]
                          (when-let [w (find-workflow this wid)]
                            (swap! workflows assoc wid (apply assoc w kvs))))]

    (reify
      IDeref
      (deref [this] {::workflow-store (deref workflows)
                     ::activity-store (deref activities)
                     ::history-store  (deref history)})

      HistoryStore
      (save-event [this wid event]
        (let [evt+id (assoc event :id (swap! counter inc))]
          (swap! history (fn [v]
                           (assoc v wid (-> (or (get v wid) [])
                                            (conj evt+id)))))))
      (next-event [this wid]
        (-> (get @history [wid])
            first))
      (next-event [this wid last-event-id]
        (when-let [evts (get @history wid)]
          (->> evts
               (filter #(<= (:id %) last-event-id))
               (first))))

      TaskStore
      (transition-workflow [this wid {:keys [sym args result error]}]
        (cond
          (some? args)
          (do
            (update-workflow this wid :state :pending)
            (save-event this wid {:type :intemporal2.workflow/invoke :sym sym :args args}))

          (some? result)
          (do
            (update-workflow this wid :state :success)
            (save-event this wid {:type :intemporal2.workflow/success :sym sym :result result}))

          (some? error)
          (do
            (update-workflow this wid :state :failure)
            (save-event this wid {:type :intemporal2.workflow/failure :sym sym :error error}))))

      (await-workflow [this wid]
        (await-workflow this wid Long/MAX_VALUE))

      (await-workflow [this wid timeout-ms]
        (let [w [(find-workflow this wid)]
              s (now)]
          (loop [curr w]
            (let [{:keys [state result id]} curr
                  elapsed (- (now) s)]
              (cond
                (>= elapsed timeout-ms) (throw (ex-info "Timeout awaiting for workflow" {:id wid}))
                (nil? curr) (throw (ex-info "Could not find workflow" {:id wid}))
                (= :success state) (->ResultOK result)
                (= :failure state) (->ResultError result)
                :else (do
                        (Thread/sleep (long 100)) ;;TODO configure
                        (recur (-> (find-workflow this wid)))))))))

      (enqueue-workflow [this workflow]
        (swap! workflows assoc (:id workflow) workflow))

      (dequeue-workflow [this]
        (let [first-new (fn [v] (->> (vals v)
                                     (filter #(= :new (:state %)))
                                     (first)))
              found?    (atom nil)]
          (swap-vals! workflows
                      (fn [v] (let [found (first-new v)]
                                (if found
                                  (do (->> (assoc found :state :pending)
                                           (reset! found?)
                                           (assoc v (:id found))))
                                  v))))
          @found?))

      (enqueue-activity [this activity]
        (swap! activities assoc (:id activity) activity))

      (dequeue-activity [this]
        (let [first-new (fn [v] (->> (vals v)
                                     (filter #(= :new (:state %)))
                                     (first)))
              found?    (atom nil)]
          (swap-vals! activities
                      (fn [v] (let [found (first-new v)]
                                (if found
                                  (do (->> (assoc found :state :pending)
                                           (reset! found?)
                                           (assoc v (:id found))))
                                  v))))
          @found?)))))
