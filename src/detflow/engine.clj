(ns detflow.engine
  (:require [detflow.common :as common]
            [detflow.runtime :as rt]
            [detflow.workflow :as wf]))

;; --- Storage ---
(defrecord InMemoryStore [store]
  common/IHistoryStore
  (append-event [_ wf-id event]
    (swap! store update wf-id (fnil conj []) event))
  (get-history [_ wf-id]
    (get @store wf-id [])))

(defn in-memory-store [] (->InMemoryStore (atom {})))

;; --- Logic ---

(defn- run-interpreter-step
  [workflow-fn runtime]
  (binding [rt/*ctx* runtime]
    (let [tasks (:tasks runtime)
          task-results (:task-results runtime)
          main-id 0]

      (when (empty? @tasks)
        (rt/register-task! main-id workflow-fn))

      (loop [made-progress? true]
        (if-not made-progress?
          :blocked

          (let [snapshot-tasks (keys @tasks)
                count-before   (count snapshot-tasks)
                progress       (atom false)]

            (doseq [tid snapshot-tasks]
              (when-not (contains? @task-results tid)
                (try
                  (let [res ((get @tasks tid))]
                    (swap! task-results assoc tid res)
                    (rt/record-event! {:type :async-completed :id tid :result res})
                    (reset! progress true))
                  (catch Exception e
                    (if (common/suspend? e)
                      nil ;; Task suspended, this is normal
                      (throw e))))))

            ;; Check if new tasks were registered (e.g. via wf/async)
            (let [count-after (count (keys @tasks))
                  new-tasks-added? (> count-after count-before)]
              (recur (or @progress new-tasks-added?)))))))))

(defn- process-side-effects [executor workflow-id events]
  (doseq [evt events]
    (cond
      (= (:type evt) :activity-scheduled)
      (let [res (common/execute-activity executor (:name evt) (:args evt))]
        {:type :activity-completed :id (:id evt) :result {:value res}})

      (= (:type evt) :timer-scheduled)
      {:type :timer-fired :id (:id evt) :result {:value :time-up}}

      :else nil)))

(defn create [{:keys [persistence]}]
  {:store persistence
   :executor (reify common/IActivityExecutor
               (execute-activity [_ name args]
                 (if-let [impl (get @rt/activity-registry name)]
                   (apply impl args)
                   (throw (ex-info "Activity not found" {:name name})))))})

(defn start-workflow [engine {:keys [workflow id args]}]
  (let [store (:store engine)
        executor (:executor engine)]

    (when (empty? (common/get-history store id))
      (common/append-event store id {:type :workflow-start :args args}))

    (loop [iteration 0]
      (let [history (common/get-history store id)

            ;; 1. Skip :workflow-start
            start-cursor (if (= (:type (first history)) :workflow-start) 1 0)

            ;; 2. Initialize ID counter to avoid collisions with history
            max-id (reduce (fn [m e] (max m (:id e 0))) 0 history)

            runtime {:history      history
                     :cursor       (atom start-cursor)
                     :events-out   (atom [])
                     :id-counter   (atom (inc max-id))
                     :tasks        (atom {})
                     :task-results (atom {})}]

        (let [result (run-interpreter-step #(apply workflow args) runtime)]
          (cond
            (= (:status result) :completed)
            (:result result)

            (= result :blocked)
            (let [new-events @(:events-out runtime)
                  ;; Include async-started as valid progress
                  commands (filter #(#{:activity-scheduled :timer-scheduled :async-started} (:type %)) new-events)]

              (if (empty? commands)
                (throw (ex-info "Deadlock: Workflow suspended but no commands generated."
                                {:history-len (count history)
                                 :new-events new-events}))

                (let [side-effects (filter #(#{:activity-scheduled :timer-scheduled} (:type %)) commands)
                      completions (keep #(process-side-effects executor id [%]) side-effects)]
                  (doseq [evt new-events] (common/append-event store id evt))
                  (doseq [evt completions] (common/append-event store id evt))
                  (recur (inc iteration)))))))))))

(defn signal [engine workflow-id signal-name payload]
  (common/append-event (:store engine) workflow-id
                       {:type :signal-received :name signal-name :payload payload}))