(ns intemporal3.core)

;; ============================================================================
;; Protocols
;; ============================================================================

(defprotocol IStore
  "Protocol for workflow persistence"
  (load-history [store workflow-id] "Load history for a workflow")
  (save-event [store workflow-id event] "Append an event to workflow history")
  (get-pending-signals [store workflow-id] "Get pending signals for workflow")
  (add-signal [store workflow-id signal-name payload] "Add a signal to workflow")
  (consume-signal [store workflow-id signal-name] "Consume and remove a signal"))

(defprotocol IActivityExecutor
  "Protocol for executing activities"
  (execute-activity [executor activity-name args] "Execute an activity with given args"))

;; ============================================================================
;; Suspension Exceptions
;; ============================================================================

(defn- make-suspension [type data]
  (ex-info "Workflow suspended" {:type type :data data}))

(defn- suspension? [e]
  (and (instance? clojure.lang.ExceptionInfo e)
       (= "Workflow suspended" (.getMessage e))))

(defn- suspension-type [e]
  (-> e ex-data :type))

(defn- suspension-data [e]
  (-> e ex-data :data))

;; ============================================================================
;; Dynamic Context
;; ============================================================================

(def ^:dynamic *workflow-context* nil)

(defn- current-context []
  (or *workflow-context*
      (throw (ex-info "Not in workflow context" {}))))

(defn- next-seq! []
  (let [ctx (current-context)]
    (let [seq @(:seq-counter ctx)]
      (swap! (:seq-counter ctx) inc)
      seq)))

(defn- find-event [history event-type seq-num]
  (->> history
       (filter #(and (= (:event-type %) event-type)
                     (= (:seq %) seq-num)))
       first))

(defn- add-pending-event! [event]
  (let [ctx (current-context)]
    (swap! (:pending-events ctx) conj event)))

;; ============================================================================
;; In-Memory Store Implementation
;; ============================================================================

(defrecord InMemoryStore [state]
  IStore
  (load-history [_ workflow-id]
    (get-in @state [:workflows workflow-id :history] []))

  (save-event [_ workflow-id event]
    (swap! state update-in [:workflows workflow-id :history]
           (fnil conj []) event)
    event)

  (get-pending-signals [_ workflow-id]
    (get-in @state [:workflows workflow-id :signals] {}))

  (add-signal [_ workflow-id signal-name payload]
    (swap! state update-in [:workflows workflow-id :signals signal-name]
           (fnil conj []) payload))

  (consume-signal [_ workflow-id signal-name]
    (let [signals (get-in @state [:workflows workflow-id :signals signal-name])]
      (when (seq signals)
        (swap! state update-in [:workflows workflow-id :signals signal-name]
               (comp vec rest))
        (first signals)))))

;; ============================================================================
;; Activity Registry
;; ============================================================================

(defonce activity-registry (atom {}))

(defn register-activity! [f]
  (let [name (str (symbol f))]
    (swap! activity-registry assoc name f)
    name))

(defn- get-activity-name [f]
  (let [name (str (symbol f))]
    (when-not (contains? @activity-registry name)
      (register-activity! f))
    name))

;; ============================================================================
;; Core Workflow Operations
;; ============================================================================

(defn stub
  "Create a stubbed version of an activity function for use in workflows"
  [activity-fn]
  (let [activity-name (get-activity-name activity-fn)]
    (fn [& args]
      (let [ctx (current-context)
            seq-num (next-seq!)
            history @(:history ctx)
            existing (find-event history :activity-completed seq-num)]
        (if existing
          ;; Replay: return cached result
          (:result existing)
          ;; Execute: need to run the activity
          (let [scheduled-event {:event-type :activity-scheduled
                                 :seq seq-num
                                 :activity-name activity-name
                                 :args (vec args)
                                 :timestamp (System/currentTimeMillis)}]
            (add-pending-event! scheduled-event)
            (throw (make-suspension :activity {:seq seq-num
                                               :activity-name activity-name
                                               :args (vec args)}))))))))

;; ============================================================================
;; Async Support
;; ============================================================================

(defrecord AsyncHandle [seq-num])

(defn async
  "Schedule an async operation (thunk) for later execution"
  [thunk]
  (let [ctx (current-context)
        seq-num (next-seq!)
        history @(:history ctx)
        existing (find-event history :async-started seq-num)]
    (if existing
      ;; Already started, return handle
      (->AsyncHandle seq-num)
      ;; Need to start
      (let [event {:event-type :async-started
                   :seq seq-num
                   :timestamp (System/currentTimeMillis)}]
        (add-pending-event! event)
        ;; Try to execute the thunk to see what activity it wants
        (try
          (thunk)
          (->AsyncHandle seq-num)
          (catch Exception e
            (if (suspension? e)
              ;; The thunk suspended, record its suspension data
              (let [suspension-info (suspension-data e)]
                (add-pending-event! {:event-type :async-pending
                                     :seq seq-num
                                     :suspension suspension-info
                                     :timestamp (System/currentTimeMillis)})
                (throw (make-suspension :async-pending {:handle-seq seq-num
                                                        :inner suspension-info})))
              (throw e))))))))

(defn join
  "Wait for an async handle to complete"
  [handle]
  (let [ctx (current-context)
        handle-seq (:seq-num handle)
        history @(:history ctx)
        completed (find-event history :async-completed handle-seq)]
    (if completed
      (:result completed)
      (throw (make-suspension :join-pending {:handle-seq handle-seq})))))

;; ============================================================================
;; Signals
;; ============================================================================

(defn wait-for-signal
  "Wait for a signal with the given name"
  [signal-name]
  (let [ctx (current-context)
        seq-num (next-seq!)
        history @(:history ctx)
        existing (find-event history :signal-received seq-num)]
    (if existing
      (:payload existing)
      (throw (make-suspension :wait-signal {:seq seq-num
                                            :signal-name signal-name})))))

;; ============================================================================
;; Timers
;; ============================================================================

(defn sleep
  "Sleep for specified milliseconds"
  [ms]
  (let [ctx (current-context)
        seq-num (next-seq!)
        history @(:history ctx)
        existing (find-event history :timer-fired seq-num)]
    (if existing
      nil
      (let [fire-at (+ (System/currentTimeMillis) ms)]
        (add-pending-event! {:event-type :timer-scheduled
                             :seq seq-num
                             :fire-at fire-at
                             :timestamp (System/currentTimeMillis)})
        (throw (make-suspension :timer {:seq seq-num
                                        :fire-at fire-at}))))))

;; ============================================================================
;; Workflow Execution Engine
;; ============================================================================

(defn- execute-workflow-fn [workflow-fn args]
  (try
    {:status :completed
     :result (apply workflow-fn args)}
    (catch Exception e
      (if (suspension? e)
        {:status :suspended
         :suspension-type (suspension-type e)
         :suspension-data (suspension-data e)}
        {:status :failed
         :error e}))))

(defn- process-pending-activity [store executor workflow-id suspension-data pending-events]
  (let [{:keys [seq activity-name args]} suspension-data
        result (execute-activity executor activity-name args)
        completed-event {:event-type :activity-completed
                         :seq seq
                         :activity-name activity-name
                         :result result
                         :timestamp (System/currentTimeMillis)}]
    ;; Save all pending events first
    (doseq [evt pending-events]
      (save-event store workflow-id evt))
    ;; Then save the completion
    (save-event store workflow-id completed-event)
    :continue))

(defn- process-timer [store workflow-id suspension-data pending-events]
  (let [{:keys [seq fire-at]} suspension-data
        now (System/currentTimeMillis)]
    ;; Save pending events
    (doseq [evt pending-events]
      (save-event store workflow-id evt))
    (if (>= now fire-at)
      (do
        (save-event store workflow-id {:event-type :timer-fired
                                       :seq seq
                                       :timestamp now})
        :continue)
      ;; Timer not ready - in real impl would schedule wake-up
      (do
        (Thread/sleep (- fire-at now))
        (save-event store workflow-id {:event-type :timer-fired
                                       :seq seq
                                       :timestamp (System/currentTimeMillis)})
        :continue))))

(defn- process-signal [store workflow-id suspension-data pending-events]
  (let [{:keys [seq signal-name]} suspension-data]
    ;; Save pending events
    (doseq [evt pending-events]
      (save-event store workflow-id evt))
    (if-let [payload (consume-signal store workflow-id signal-name)]
      (do
        (save-event store workflow-id {:event-type :signal-received
                                       :seq seq
                                       :signal-name signal-name
                                       :payload payload
                                       :timestamp (System/currentTimeMillis)})
        :continue)
      :wait-signal)))

(defn- process-async-pending [store executor workflow-id suspension-data pending-events]
  (let [{:keys [handle-seq inner]} suspension-data]
    ;; Save pending events
    (doseq [evt pending-events]
      (save-event store workflow-id evt))
    ;; Process the inner suspension (which is an activity)
    (let [{:keys [seq activity-name args]} inner
          result (execute-activity executor activity-name args)]
      (save-event store workflow-id {:event-type :activity-completed
                                     :seq seq
                                     :result result
                                     :timestamp (System/currentTimeMillis)})
      (save-event store workflow-id {:event-type :async-completed
                                     :seq handle-seq
                                     :result result
                                     :timestamp (System/currentTimeMillis)})
      :continue)))

(defn- process-join-pending [store workflow-id suspension-data pending-events]
  (let [{:keys [handle-seq]} suspension-data
        history (load-history store workflow-id)
        completed (find-event history :async-completed handle-seq)]
    (doseq [evt pending-events]
      (save-event store workflow-id evt))
    (if completed
      :continue
      :wait-async)))

(defn- run-workflow-loop [store executor workflow-id workflow-fn args max-iterations]
  (loop [iteration 0]
    (when (>= iteration max-iterations)
      (throw (ex-info "Max iterations exceeded" {:workflow-id workflow-id})))

    (let [history (load-history store workflow-id)
          pending-events (atom [])
          ctx {:history (atom history)
               :workflow-id workflow-id
               :seq-counter (atom 0)
               :pending-events pending-events}
          exec-result (binding [*workflow-context* ctx]
                        (execute-workflow-fn workflow-fn args))]

      (case (:status exec-result)
        :completed
        (do
          (save-event store workflow-id {:event-type :workflow-completed
                                         :result (:result exec-result)
                                         :timestamp (System/currentTimeMillis)})
          {:status :completed
           :result (:result exec-result)})

        :suspended
        (let [action (case (:suspension-type exec-result)
                       :activity (process-pending-activity store executor workflow-id
                                                           (:suspension-data exec-result)
                                                           @pending-events)
                       :timer (process-timer store workflow-id
                                             (:suspension-data exec-result)
                                             @pending-events)
                       :wait-signal (process-signal store workflow-id
                                                    (:suspension-data exec-result)
                                                    @pending-events)
                       :async-pending (process-async-pending store executor workflow-id
                                                             (:suspension-data exec-result)
                                                             @pending-events)
                       :join-pending (process-join-pending store workflow-id
                                                           (:suspension-data exec-result)
                                                           @pending-events))]
          (case action
            :continue (recur (inc iteration))
            :wait-signal {:status :waiting-signal
                          :workflow-id workflow-id}
            :wait-async {:status :waiting-async
                         :workflow-id workflow-id}))

        :failed
        (do
          (save-event store workflow-id {:event-type :workflow-failed
                                         :error (str (:error exec-result))
                                         :timestamp (System/currentTimeMillis)})
          {:status :failed
           :error (:error exec-result)})))))

;; ============================================================================
;; Public API
;; ============================================================================

(defn start-workflow
  "Start a workflow execution"
  ([store executor workflow-fn args]
   (start-workflow store executor workflow-fn args (str (random-uuid))))
  ([store executor workflow-fn args workflow-id]
   (start-workflow store executor workflow-fn args workflow-id 1000))
  ([store executor workflow-fn args workflow-id max-iterations]
   (save-event store workflow-id {:event-type :workflow-started
                                  :workflow-id workflow-id
                                  :args (vec args)
                                  :timestamp (System/currentTimeMillis)})
   (run-workflow-loop store executor workflow-id workflow-fn args max-iterations)))

(defn resume-workflow
  "Resume a waiting workflow (e.g., after signal delivery)"
  ([store executor workflow-id workflow-fn args]
   (resume-workflow store executor workflow-id workflow-fn args 1000))
  ([store executor workflow-id workflow-fn args max-iterations]
   (run-workflow-loop store executor workflow-id workflow-fn args max-iterations)))

(defn send-signal
  "Send a signal to a workflow"
  [store workflow-id signal-name payload]
  (add-signal store workflow-id signal-name payload))

(defn get-workflow-history
  "Get the history of a workflow"
  [store workflow-id]
  (load-history store workflow-id))

;; ============================================================================
;; Example Usage
;; ============================================================================

;; Define activities
(defn activity-fn [arg]
  (println "activity called" arg)
  [:some arg])

(defn slow-activity [x]
  (println "slow activity running with" x)
  (Thread/sleep 100)
  (* x 2))

;; Define workflow
(defn my-flow [id]
  (println "Workflow start with id:" id)
  (let [act  (stub #'activity-fn)
        slow (stub #'slow-activity)
        prom (async #(slow 2))]
    (println "After async call")
    {:status :shipped
     :res    (act 1)
     :prom   (join prom)
     :id     id}))

;; Workflow with timer
(defn timed-flow [id]
  (println "Starting timed flow")
  (let [act (stub #'activity-fn)]
    (println "Sleeping for 1 second...")
    (sleep 1000)
    (println "Woke up!")
    {:result (act id)}))

;; Workflow with signal
(defn signal-flow [id]
  (println "Waiting for approval signal...")
  (let [approval (wait-for-signal "approval")
        act      (stub #'activity-fn)]
    (println "Got approval:" approval)
    {:approved approval
     :result   (act id)}))

;; Run examples
(let [store    (->InMemoryStore (atom {}))
      executor (reify IActivityExecutor
                 (execute-activity [_ actname args]
                   (println "Executor running:" actname "with" args)
                   (let [act (get @activity-registry actname)]
                     (apply act args))))]

  ;; Basic workflow
  (println "\n=== Basic Workflow ===")
  (println "Result:" (start-workflow store executor my-flow [123] "my-flow"))

  ;; Timed workflow
  (println "\n=== Timed Workflow ===")
  (println "Result:" (start-workflow store executor timed-flow [456] "timed-flow"))

  ;; Signal workflow
  (println "\n=== Signal Workflow ===")
  (let [wf-id   "signal-flow"
        result1 (start-workflow store executor signal-flow [789] wf-id)]
    (println "Initial result:" result1)
    (when (= :waiting-signal (:status result1))
      (println "Sending signal...")
      (send-signal store wf-id "approval" {:approved-by "admin"})
      (println "Resuming...")
      (println "Final result:" (resume-workflow store executor wf-id signal-flow [789])))))

;; Check history
#_
(let [store (->InMemoryStore (atom {}))]
  (start-workflow store
                  (reify IActivityExecutor
                    (execute-activity [_ actname args]
                      (let [act (get @activity-registry actname)]
                        (apply act args))))
                  my-flow [123] "test-flow")
  (println "\nHistory:")
  (doseq [event (get-workflow-history store "test-flow")]
    (println "  " (:event-type event) "-" (dissoc event :event-type :timestamp))))
