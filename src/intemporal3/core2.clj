(ns intemporal3.core2
  (:require [clojure.edn :as edn])
  (:import [java.util UUID]
           [java.util.concurrent Executors Future]))

;; ============================================================================
;; Protocols
;; ============================================================================

(defprotocol IStore
  "Protocol for workflow persistence"
  (load-history [store workflow-id] "Load history for a workflow")
  (save-event [store workflow-id event] "Append an event to workflow history")
  (save-events [store workflow-id events] "Append multiple events atomically")
  (get-pending-signals [store workflow-id] "Get pending signals for workflow")
  (add-signal [store workflow-id signal-name payload] "Add a signal to workflow")
  (consume-signal [store workflow-id signal-name] "Consume and remove a signal"))

(defprotocol IActivityExecutor
  "Protocol for executing activities"
  (execute-activity [executor activity-name args] "Execute an activity with given args")
  (execute-activities-parallel [executor activities] "Execute multiple activities in parallel, returns seq of results in same order"))

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

(defn- find-events-by-type [history event-type]
  (->> history
       (filter #(= (:event-type %) event-type))))

(defn- add-pending-event! [event]
  (let [ctx (current-context)]
    (swap! (:pending-events ctx) conj event)))

(defn- add-pending-async! [async-info]
  (let [ctx (current-context)]
    (swap! (:pending-asyncs ctx) conj async-info)))

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

  (save-events [_ workflow-id events]
    (swap! state update-in [:workflows workflow-id :history]
           (fnil into []) events)
    events)

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
;; Default Parallel Executor
;; ============================================================================

(defn make-parallel-executor
  "Create an executor that runs activities in parallel using a thread pool"
  [activity-registry-atom & {:keys [threads] :or {threads 4}}]
  (let [pool (Executors/newFixedThreadPool threads)]
    (reify IActivityExecutor
      (execute-activity [_ activity-name args]
        (let [act (get @activity-registry-atom activity-name)]
          (apply act args)))

      (execute-activities-parallel [this activities]
        (if (empty? activities)
          []
          (let [futures (mapv (fn [{:keys [activity-name args]}]
                                (.submit pool ^Callable
                                         (fn [] (execute-activity this activity-name args))))
                              activities)]
            (mapv (fn [^Future f] (.get f)) futures)))))))

;; ============================================================================
;; Activity Registry
;; ============================================================================

(defonce activity-registry (atom {}))

(defn register-activity! [f]
  (let [name (if (var? f)
               (str (symbol f))
               (str (symbol f)))]
    (swap! activity-registry assoc name (if (var? f) @f f))
    name))

(defn- get-activity-name [f]
  (let [name (if (var? f)
               (str (symbol f))
               (str (symbol f)))]
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
        existing-completed (find-event history :async-completed seq-num)
        existing-started (find-event history :async-started seq-num)]
    (cond
      ;; Already completed - just return handle
      existing-completed
      (->AsyncHandle seq-num)

      ;; Already started but not completed - return handle (will block on join)
      existing-started
      (->AsyncHandle seq-num)

      ;; Need to start - record and try to capture what activity it needs
      :else
      (let [start-event {:event-type :async-started
                         :seq seq-num
                         :timestamp (System/currentTimeMillis)}]
        (add-pending-event! start-event)
        ;; Try to execute the thunk to see what activity it wants
        (try
          (thunk)
          ;; If thunk completes synchronously (all replayed), just return handle
          (->AsyncHandle seq-num)
          (catch Exception e
            (if (suspension? e)
              ;; The thunk suspended on an activity - capture it for parallel execution
              (let [suspension-info (suspension-data e)]
                (add-pending-async! {:handle-seq seq-num
                                     :activity-name (:activity-name suspension-info)
                                     :activity-seq (:seq suspension-info)
                                     :args (:args suspension-info)})
                ;; Return handle - we'll batch execute later
                (->AsyncHandle seq-num))
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
      ;; Not yet completed - suspend
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
     :result (apply workflow-fn args)
     :pending-asyncs @(:pending-asyncs (current-context))}
    (catch Exception e
      (if (suspension? e)
        {:status :suspended
         :suspension-type (suspension-type e)
         :suspension-data (suspension-data e)
         :pending-asyncs @(:pending-asyncs (current-context))}
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
    (save-events store workflow-id pending-events)
    ;; Then save the completion
    (save-event store workflow-id completed-event)
    :continue))

(defn- process-pending-asyncs-parallel
  "Process all pending async operations in parallel"
  [store executor workflow-id pending-asyncs pending-events]
  (when (seq pending-asyncs)
    ;; Save all pending events first
    (save-events store workflow-id pending-events)

    ;; Execute all activities in parallel
    (let [activities (mapv (fn [{:keys [activity-name args]}]
                             {:activity-name activity-name
                              :args args})
                           pending-asyncs)
          results (execute-activities-parallel executor activities)
          now (System/currentTimeMillis)

          ;; Create completion events for both activities and async handles
          completion-events (mapcat (fn [async-info result]
                                      [{:event-type :activity-completed
                                        :seq (:activity-seq async-info)
                                        :activity-name (:activity-name async-info)
                                        :result result
                                        :timestamp now}
                                       {:event-type :async-completed
                                        :seq (:handle-seq async-info)
                                        :result result
                                        :timestamp now}])
                                    pending-asyncs results)]
      (save-events store workflow-id completion-events)))
  :continue)

(defn- process-timer [store workflow-id suspension-data pending-events]
  (let [{:keys [seq fire-at]} suspension-data
        now (System/currentTimeMillis)]
    ;; Save pending events
    (save-events store workflow-id pending-events)
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
    (save-events store workflow-id pending-events)
    (if-let [payload (consume-signal store workflow-id signal-name)]
      (do
        (save-event store workflow-id {:event-type :signal-received
                                       :seq seq
                                       :signal-name signal-name
                                       :payload payload
                                       :timestamp (System/currentTimeMillis)})
        :continue)
      :wait-signal)))

(defn- process-join-pending [store executor workflow-id suspension-data pending-events pending-asyncs]
  (let [{:keys [handle-seq]} suspension-data
        history (load-history store workflow-id)
        completed (find-event history :async-completed handle-seq)]
    ;; First, process any pending asyncs that haven't been executed yet
    (when (seq pending-asyncs)
      (process-pending-asyncs-parallel store executor workflow-id pending-asyncs pending-events))

    (when (and (empty? pending-asyncs) (seq pending-events))
      (save-events store workflow-id pending-events))

    ;; Check again after processing
    (let [history (load-history store workflow-id)
          completed (find-event history :async-completed handle-seq)]
      (if completed
        :continue
        :wait-async))))

(defn- run-workflow-loop [store executor workflow-id workflow-fn args max-iterations]
  (loop [iteration 0]
    (when (>= iteration max-iterations)
      (throw (ex-info "Max iterations exceeded" {:workflow-id workflow-id})))

    (let [history (load-history store workflow-id)
          pending-events (atom [])
          pending-asyncs (atom [])
          ctx {:history (atom history)
               :workflow-id workflow-id
               :seq-counter (atom 0)
               :pending-events pending-events
               :pending-asyncs pending-asyncs}
          exec-result (binding [*workflow-context* ctx]
                        (execute-workflow-fn workflow-fn args))]

      (case (:status exec-result)
        :completed
        (do
          ;; Process any remaining pending asyncs before completing
          (when (seq (:pending-asyncs exec-result))
            (process-pending-asyncs-parallel store executor workflow-id
                                             (:pending-asyncs exec-result)
                                             @pending-events))
          (save-event store workflow-id {:event-type :workflow-completed
                                         :result (:result exec-result)
                                         :timestamp (System/currentTimeMillis)})
          {:status :completed
           :result (:result exec-result)})

        :suspended
        (let [pending-asyncs-list (:pending-asyncs exec-result)
              action (case (:suspension-type exec-result)
                       :activity
                       ;; Check if this is part of async batch or standalone
                       (if (seq pending-asyncs-list)
                         (do
                           (process-pending-asyncs-parallel store executor workflow-id
                                                            pending-asyncs-list @pending-events)
                           :continue)
                         (process-pending-activity store executor workflow-id
                                                   (:suspension-data exec-result)
                                                   @pending-events))

                       :timer
                       (process-timer store workflow-id
                                      (:suspension-data exec-result)
                                      @pending-events)

                       :wait-signal
                       (process-signal store workflow-id
                                       (:suspension-data exec-result)
                                       @pending-events)

                       :join-pending
                       (process-join-pending store executor workflow-id
                                             (:suspension-data exec-result)
                                             @pending-events
                                             pending-asyncs-list))]
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
   (start-workflow store executor workflow-fn args (str (UUID/randomUUID))))
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
  (println (str "slow activity START with " x " on thread " (.getName (Thread/currentThread))))
  (Thread/sleep 1000)
  (println (str "slow activity END with " x))
  (* x 2))

;; Register activities
(register-activity! #'slow-activity)
(register-activity! #'activity-fn)

;; Parallel workflow
(defn my-parallel-flow [id]
  (println "Workflow start with id:" id)
  (let [slow  (stub #'slow-activity)
        prom1 (async #(slow 1))
        prom2 (async #(slow 2))
        prom3 (async #(slow 3))
        prom4 (async #(slow 4))]
    (println "After async calls - all scheduled")
    {:status :shipped
     :prom   (mapv join [prom1 prom2 prom3 prom4])
     :id     id}))

;; Run parallel example
(let [store    (->InMemoryStore (atom {}))
      executor (make-parallel-executor activity-registry :threads 4)]

  (println "\n=== Parallel Workflow ===")
  (println "Starting at:" (System/currentTimeMillis))
  (time
    (let [result (start-workflow store executor my-parallel-flow [123] "parallel-flow")]
      (println "Finished at:" (System/currentTimeMillis))
      (println "Result:" result)))

  (println "\nHistory:")
  (doseq [event (get-workflow-history store "parallel-flow")]
    (println "  " (:event-type event) "seq:" (:seq event)
             (when (:result event) (str "result:" (:result event))))))

;; Basic workflow still works
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

(let [store    (->InMemoryStore (atom {}))
      executor (make-parallel-executor activity-registry)]
  (println "\n=== Basic Workflow ===")
  (println "Result:" (start-workflow store executor my-flow [123] "basic-flow")))
