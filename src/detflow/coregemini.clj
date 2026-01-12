(ns detflow.coregemini

  (:import [clojure.lang ExceptionInfo]))

;; ---------------------------------------------------------
;; 1. COMMON & PROTOCOLS
;; ---------------------------------------------------------

(def ^:private suspend-type ::suspend)

(defn suspend! [wait-id]
  (throw (ex-info "Workflow Suspended" {:type suspend-type :wait-id wait-id})))

(defn suspend? [e]
  (and (instance? ExceptionInfo e)
       (= (:type (ex-data e)) suspend-type)))

(defrecord AsyncHandle [id]
  Object
  (toString [_] (str "<AsyncHandle " id ">")))

(defprotocol IHistoryStore
  (append-event [this wf-id event])
  (get-history [this wf-id]))

(defprotocol IActivityExecutor
  (execute-activity [this name args]))

;; ---------------------------------------------------------
;; 2. RUNTIME STATE
;; ---------------------------------------------------------

(def ^:dynamic *ctx* nil)
(defonce activity-registry (atom {}))

(defn current-ctx []
  (or *ctx* (throw (ex-info "No active workflow context." {}))))

(defn next-id! []
  (let [{:keys [id-counter]} (current-ctx)]
    (swap! id-counter inc)))

(defn record-event! [event]
  (swap! (:events-out (current-ctx)) conj event))

(defn register-task! [id f]
  (swap! (:tasks (current-ctx)) assoc id f))

(defn peek-history-event []
  (let [{:keys [history cursor]} (current-ctx)
        idx @cursor]
    (get history idx)))

(defn consume-history-event! []
  (let [{:keys [cursor]} (current-ctx)]
    (swap! cursor inc)))

(defn find-completed-result [target-id type]
  (some (fn [evt]
          (when (and (= (:id evt) target-id) (= (:type evt) type))
            (:result evt)))
        (:history (current-ctx))))

(defn get-signal-payload [name]
  (some (fn [evt]
          (when (and (= (:type evt) :signal-received) (= (:name evt) name))
            (:payload evt)))
        (:history (current-ctx))))

;; ---------------------------------------------------------
;; 3. WORKFLOW API
;; ---------------------------------------------------------

;; Skip "result" events (completions) during replay to find the next "command"
(defn- advance-past-results! []
  (loop []
    (let [evt (peek-history-event)]
      (when (and evt (#{:activity-completed :timer-fired :async-completed :signal-received}
                      (:type evt)))
        (consume-history-event!)
        (recur)))))

(defn- get-or-create-handle [expected-type create-fn]
  ;(advance-past-results!)
  (let [evt (peek-history-event)]
    (cond
      ;; Case A: New Execution
      (nil? evt)
      (create-fn)

      ;; Case B: Replay
      (= (:type evt) expected-type)
      (do (consume-history-event!)
          {:id (:id evt) :type expected-type})

      ;; Case C: Non-Determinism Error
      :else
      (throw (ex-info "Non-Deterministic Workflow!"
                      {:expected expected-type :found (:type evt) :event evt})))))

(defn activity [name args]
  (let [act-key (keyword name)]
    (get-or-create-handle :activity-scheduled
                          (fn []
                            (let [id (next-id!)]
                              (record-event! {:type :activity-scheduled :id id :name act-key :args args})
                              {:id id :type :activity-scheduled})))))

(defn sleep [ms]
  (get-or-create-handle :timer-scheduled
                        (fn []
                          (let [id (next-id!)]
                            (record-event! {:type :timer-scheduled :id id :duration ms})
                            {:id id :type :timer-scheduled}))))

(defn async [f]
  (let [handle (get-or-create-handle :async-started
                                     (fn []
                                       (let [id (next-id!)]
                                         (record-event! {:type :async-started :id id})
                                         {:id id :type :async-started})))]
    (register-task! (:id handle) f)
    (->AsyncHandle (:id handle))))


(defn consume-completion! [id type]
  (let [evt (peek-history-event)]
    (when (and evt (= (:id evt) id) (= (:type evt) type))
      (consume-history-event!))))

(defn await [handle]
  (if (instance? AsyncHandle handle)
    ;; Internal Async Task
    (let [{:keys [task-results]} (current-ctx)]
      (if-let [[_ res] (find @task-results (:id handle))]
        res
        (suspend! (:id handle))))

    ;; External Event
    (let [{:keys [id type]} handle
          comp-type (case type
                      (:activity :activity-scheduled) :activity-completed
                      (:timer :timer-scheduled) :timer-fired
                      :async-started :async-completed)
          res       (find-completed-result id comp-type)]
      (if res
        (do
          (consume-completion! id comp-type)
          (:value res))
        (suspend! id)))))

(defmacro defactivity [name args & body]
  `(swap! activity-registry assoc ~(keyword (str *ns*) (str name)) (fn ~args ~@body)))


;; ---------------------------------------------------------
;; 4. ENGINE
;; ---------------------------------------------------------

(defn- run-interpreter-pass
  "Runs tasks until blocked or complete. Returns status map."
  [workflow-fn runtime]
  (binding [*ctx* runtime]
    (let [{:keys [tasks task-results]} runtime
          main-id 0]

      ;; 1. Boot Main
      (when (empty? @tasks)
        (register-task! main-id workflow-fn))

      ;; 2. Micro-Task Loop
      (loop []
        (let [;; SORTING IS CRITICAL FOR DETERMINISM
              active-tasks (sort (keys @tasks))
              made-progress? (atom false)]

          (doseq [tid active-tasks]
            (when-not (contains? @task-results tid)
              ;; If completed in history (hydration), restore result immediately
              (if-let [hist-res (find-completed-result tid :async-completed)]
                (swap! task-results assoc tid (:value hist-res))

                ;; Else run logic
                (try
                  (let [task-fn (get @tasks tid)
                        res (task-fn)]
                    (swap! task-results assoc tid res)
                    (record-event! {:type :async-completed :id tid :result res})
                    (reset! made-progress? true))
                  (catch Exception e
                    (when-not (suspend? e) (throw e)))))))

          (let [current-count (count (keys @tasks))
                prev-count    (count active-tasks)]
            ;; Recur if internal progress made or new tasks forked
            (if (or @made-progress? (> current-count prev-count))
              (do
                (println "reinterpreting... " @made-progress? (> current-count prev-count) iteration)
                (recur))
              ;; Return status
              (if (contains? @task-results main-id)
                {:status :completed :result (get @task-results main-id)}
                {:status :blocked}))))))))


(defn- process-side-effects [executor events]
  (keep (fn [evt]
          (cond
            (= (:type evt) :activity-scheduled)
            (let [res (execute-activity executor (:name evt) (:args evt))]
              {:type :activity-completed :id (:id evt) :result {:value res}})

            (= (:type evt) :timer-scheduled)
            {:type :timer-fired :id (:id evt) :result {:value :time-up}}))
        events))

(defn start-workflow [{:keys [store executor]} {:keys [workflow args id]}]
  (when (empty? (get-history store id))
    (append-event store id {:type :workflow-start :args args}))

  (loop [iteration 0]
    (println "(re)starting workflow, loop " iteration)
    (let [history (get-history store id)
          start-idx (if (= (:type (first history)) :workflow-start) 1 0)
          max-id (reduce #(max %1 (:id %2 0)) 0 history)

          runtime {:history      history
                   :cursor       (atom start-idx)
                   :events-out   (atom [])
                   :id-counter   (atom (inc max-id))
                   :tasks        (atom {})
                   :task-results (atom {})}]

      (let [result (run-interpreter-pass #(apply workflow args) runtime)
            new-events @(:events-out runtime)

            ;; Identify Side Effects
            commands (filterv #(#{:activity-scheduled :timer-scheduled} (:type %)) new-events)

            ;; Execute Side Effects IMMEDIATELY
            completions (process-side-effects executor commands)]

        (assert (<= @(:cursor runtime) (count (:history runtime)))
                "History cursor ran past history length")

        ;; Commit all new state
        (doseq [e new-events]
          (println "TRACE adding event" e)
          (append-event store id e))
        (doseq [e completions]
          (println "TRACE adding completion event" e)
          (append-event store id e))

        (cond
          ;; Case 1: Workflow Completed
          (= (:status result) :completed)
          (:result result)

          ;; Case 2: Progress Made (Internal events OR Side effects finished)
          (or (not-empty new-events)
              (not-empty completions))
          (recur (inc iteration))

          ;; Case 3: Deadlock (Blocked with no new events generated)
          :else
          (throw (ex-info "Deadlock: Workflow suspended."
                          {:history-len (count history)})))))))

;; ---------------------------------------------------------
;; 5. EXAMPLE USER CODE
;; ---------------------------------------------------------

(defrecord InMemoryStore [store]
  IHistoryStore
  (append-event [_ id evt] (swap! store update id (fnil conj []) evt))
  (get-history [_ id] (get @store id [])))

(defactivity fetch-order [id]
  (println ">> [Activity] Fetching order:" id)
  {:id id :price 100})

(defactivity charge-card [amount]
  (println ">> [Activity] Charging card:" amount)
  :paid)

(defn my-flow [id]
  (println "XXXX enter workflow")
  (let [order        (await (activity `fetch-order [id]))
        ;; Fork an async task
        payment-task (async (fn []
                              (await (activity `charge-card [(:price order)]))))]
    ;; Wait for payment
    (await payment-task)
    {:status :shipped :order order}))

(defn -main []
  (let [engine {:store    (->InMemoryStore (atom {}))
                :executor (reify IActivityExecutor
                            (execute-activity [_ n args]
                              (apply (get @activity-registry n) args)))}]

    (println "--- STARTING ---")
    (let [res (start-workflow engine {:workflow my-flow :id "wf-1" :args [123]})]
      (println "--- DONE ---")
      (println "Result:" res))))

(comment)
(-main)