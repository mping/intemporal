(ns intemporal.internal.execution
  (:require [intemporal.internal.activity :as a]
            [intemporal.internal.context :as ctx]
            [intemporal.internal.error :as error]
            [intemporal.protocol :as p]))

;; ============================================================================
;; Workflow Execution Engine
;; ============================================================================



(defn execute-workflow-fn [workflow-fn args]
  (try
    {:status :completed
     :result (apply workflow-fn args)
     :pending-asyncs @(:pending-asyncs (ctx/current-context))
     :pending-events @(:pending-events (ctx/current-context))}
    (catch Throwable e
      (cond
        (error/suspension? e)
        {:status :suspended
         :suspension-type (error/suspension-type e)
         :suspension-data (error/suspension-data e)
         :pending-asyncs @(:pending-asyncs (ctx/current-context))
         :pending-events @(:pending-events (ctx/current-context))}

        (error/cancelled-exception? e)
        {:status :cancelled
         :pending-events @(:pending-events (ctx/current-context))}

        :else
        {:status :failed
         :error e
         :pending-events @(:pending-events (ctx/current-context))}))))

(defn execute-with-retry
  "Execute an activity with retry policy"
  [executor activity-name args timeout-ms retry-policy observer workflow-id seq-num]
  (if (nil? retry-policy)
    ;; No retry - execute once
    (let [start (System/currentTimeMillis)]
      (when observer
        (p/on-activity-started observer workflow-id seq-num activity-name))
      (try
        (let [result (p/execute-activity executor activity-name args timeout-ms)
              duration (- (System/currentTimeMillis) start)]
          (when observer
            (p/on-activity-completed observer workflow-id seq-num activity-name result duration))
          {:status :success :result result :duration duration})
        (catch Exception e
          (let [duration (- (System/currentTimeMillis) start)]
            (when observer
              (p/on-activity-failed observer workflow-id seq-num activity-name
                                    (error/throwable->map e) duration))
            {:status :failed :error (error/throwable->map e) :duration duration}))))
    ;; With retry
    (loop [attempt 1]
      (let [start (System/currentTimeMillis)
            _ (when observer
                (p/on-activity-started observer workflow-id seq-num activity-name))
            exec-result (try
                          (let [result (p/execute-activity executor activity-name args timeout-ms)
                                duration (- (System/currentTimeMillis) start)]
                            (when observer
                              (p/on-activity-completed observer workflow-id seq-num activity-name result duration))
                            {:status :success :result result :duration duration :attempts attempt})
                          (catch Exception e
                            (let [duration (- (System/currentTimeMillis) start)
                                  error-map (error/throwable->map e)]
                              (when observer
                                (p/on-activity-failed observer workflow-id seq-num activity-name error-map duration))
                              {:status :retry-or-fail
                               :error error-map
                               :exception e
                               :duration duration})))]
        (case (:status exec-result)
          :success
          exec-result

          :retry-or-fail
          (if (a/should-retry? retry-policy (:exception exec-result) attempt)
            (let [backoff (a/calculate-backoff retry-policy attempt)]
              (prn (format "attempt %d: sleeping %s before retrying" attempt backoff))
              (Thread/sleep (long backoff))
              (recur (inc attempt)))
            {:status :failed
             :error (:error exec-result)
             :duration (:duration exec-result)
             :attempts attempt}))))))

(defn process-pending-activity [store executor workflow-id suspension-data pending-events observer]
  (let [{:keys [seq activity-name args timeout-ms retry-policy]} suspension-data
        exec-result (execute-with-retry executor activity-name args timeout-ms
                                        retry-policy observer workflow-id seq)]
    ;; Save all pending events first
    (p/save-events store workflow-id pending-events)
    ;; Then save the completion or failure
    (if (= :success (:status exec-result))
      (do
        (p/save-event store workflow-id {:event-type    :activity-completed
                                         :seq           seq
                                         :activity-name activity-name
                                         :result        (:result exec-result)
                                         :duration-ms   (:duration exec-result)
                                         :attempts      (:attempts exec-result)
                                         :timestamp     (System/currentTimeMillis)})
        :continue)
      (do
        (p/save-event store workflow-id {:event-type    :activity-failed
                                         :seq           seq
                                         :activity-name activity-name
                                         :error         (:error exec-result)
                                         :duration-ms   (:duration exec-result)
                                         :attempts      (:attempts exec-result)
                                         :timestamp     (System/currentTimeMillis)})
        :continue))))

(defn process-pending-asyncs-parallel
  "Process all pending async operations in parallel"
  [store executor workflow-id pending-asyncs pending-events observer]
  (when (seq pending-asyncs)
    ;; Save all pending events first
    (p/save-events store workflow-id pending-events)

    ;; Execute all activities in parallel
    ;; Pass complete async-info including retry-policy, activity-seq, handle-seq
    (let [results (p/execute-activities-parallel executor pending-asyncs)
          now (System/currentTimeMillis)

          ;; Create completion events for both activities and async handles
          completion-events
              (mapcat (fn [async-info result]
                          (when observer
                                       (if (= :success (:status result))
                                           (p/on-async-completed observer workflow-id
                                                                 (:handle-seq async-info) (:result result))
                                           (p/on-async-failed observer workflow-id
                                                              (:handle-seq async-info) (:error result))))
                          (if (= :success (:status result))
                              [{:event-type :activity-completed
                                           :seq (:activity-seq async-info)
                                           :activity-name (:activity-name async-info)
                                           :result (:result result)
                                           :duration-ms (:duration result)
                                           :timestamp now}
                               {:event-type :async-completed
                                           :seq (:handle-seq async-info)
                                           :last-seq (:activity-seq async-info)
                                           :result (:result result)
                                           :timestamp now}]
                              [{:event-type :activity-failed
                                           :seq (:activity-seq async-info)
                                           :activity-name (:activity-name async-info)
                                           :error (:error result)
                                           :timestamp now}
                               {:event-type :async-failed
                                           :seq (:handle-seq async-info)
                                           :last-seq (:activity-seq async-info)
                                           :error (:error result)
                                           :timestamp now}]))
                      pending-asyncs results)]
      (p/save-events store workflow-id completion-events)))
  :continue)

(defn process-timer [store scheduler workflow-id suspension-data pending-events
                      wake-fn observer]
  (let [{:keys [seq fire-at]} suspension-data
        now (System/currentTimeMillis)]
    ;; Save pending events
    (p/save-events store workflow-id pending-events)
    (if (>= now fire-at)
      (do
        (p/save-event store workflow-id {:event-type :timer-fired
                                         :seq        seq
                                         :timestamp  now})
        (when observer
          (p/on-timer-fired observer workflow-id seq))
        :continue)
      ;; Schedule timer and return wait status
      (do
        (p/schedule-timer scheduler workflow-id seq fire-at
                          (fn []
                            (p/save-event store workflow-id {:event-type :timer-fired
                                                             :seq        seq
                                                             :timestamp  (System/currentTimeMillis)})
                            (when observer
                              (p/on-timer-fired observer workflow-id seq))
                            (when wake-fn (wake-fn))))
        :wait-timer))))

(defn process-signal [store workflow-id suspension-data pending-events wake-fn observer]
  (let [{:keys [seq signal-name]} suspension-data]
    ;; Save pending events
    (p/save-events store workflow-id pending-events)
    (if-let [signal-data (p/consume-signal store workflow-id signal-name)]
      ;; Signal already available - process immediately
      (do
        (p/save-event store workflow-id {:event-type  :signal-received
                                         :seq         seq
                                         :signal-name signal-name
                                         :signal-id   (:id signal-data)
                                         :payload     (:payload signal-data)
                                         :timestamp   (System/currentTimeMillis)})
        (when observer
          (p/on-signal-received observer workflow-id signal-name (:payload signal-data)))
        :continue)
      ;; Signal not yet available - register callback and wait
      (do
        (p/register-signal-callback store workflow-id signal-name
                                   (fn []
                                     ;; When signal arrives, consume it and save event
                                     (when-let [signal-data (p/consume-signal store workflow-id signal-name)]
                                       (p/save-event store workflow-id {:event-type  :signal-received
                                                                        :seq         seq
                                                                        :signal-name signal-name
                                                                        :signal-id   (:id signal-data)
                                                                        :payload     (:payload signal-data)
                                                                        :timestamp   (System/currentTimeMillis)})
                                       (when observer
                                         (p/on-signal-received observer workflow-id signal-name (:payload signal-data))))
                                     ;; Unregister callback
                                     (p/unregister-signal-callback store workflow-id signal-name)
                                     ;; Wake up the workflow
                                     (when wake-fn (wake-fn))))
        :wait-signal))))

(defn process-signal-with-timeout [store scheduler workflow-id suspension-data
                                    pending-events wake-fn observer]
  (let [{:keys [seq signal-name deadline]} suspension-data
        now (System/currentTimeMillis)]
    (p/save-events store workflow-id pending-events)
    ;; Check if signal already available
    (if-let [signal-data (p/consume-signal store workflow-id signal-name)]
      (do
        (p/save-event store workflow-id {:event-type  :signal-wait-completed
                                         :seq         seq
                                         :received    true
                                         :signal-name signal-name
                                         :payload     (:payload signal-data)
                                         :timestamp   now})
        (when observer
          (p/on-signal-received observer workflow-id signal-name (:payload signal-data)))
        :continue)
      ;; Check if already timed out
      (if (>= now deadline)
        (do
          (p/save-event store workflow-id {:event-type  :signal-wait-completed
                                           :seq         seq
                                           :received    false
                                           :signal-name signal-name
                                           :timestamp   now})
          :continue)
        ;; Schedule timeout
        (do
          (p/schedule-timer scheduler workflow-id seq deadline
                            (fn []
                              ;; Check one more time for signal
                              (if-let [signal-data (p/consume-signal store workflow-id signal-name)]
                                (p/save-event store workflow-id {:event-type  :signal-wait-completed
                                                                 :seq         seq
                                                                 :received    true
                                                                 :signal-name signal-name
                                                                 :payload     (:payload signal-data)
                                                                 :timestamp   (System/currentTimeMillis)})
                                (p/save-event store workflow-id {:event-type  :signal-wait-completed
                                                                 :seq         seq
                                                                 :received    false
                                                                 :signal-name signal-name
                                                                 :timestamp   (System/currentTimeMillis)}))
                              (when wake-fn (wake-fn))))
          :wait-signal-timeout)))))

(defn process-join-pending [store executor workflow-id suspension-data pending-events
                             pending-asyncs observer]
  (let [{:keys [handle-seq]} suspension-data]
    ;; First, process any pending asyncs that haven't been executed yet
    (if (seq pending-asyncs)
      (do
        (process-pending-asyncs-parallel store executor workflow-id
                                         pending-asyncs pending-events observer)
        :continue)
      ;; else
      (do
        (when (seq pending-events)
          (p/save-events store workflow-id pending-events))
        ;; Check if the handle is now complete
        (let [;history (p/load-history store workflow-id)
              ;completed (ctx/find-event history :async-completed handle-seq)
              ;failed (ctx/find-event history :async-failed handle-seq)
              store (ctx/current-store)
              workflow-id (ctx/current-workflow-id)
              completed (p/find-event store workflow-id :async-completed handle-seq)
              failed (p/find-event store workflow-id :async-failed handle-seq)]
          (if (or completed failed)
            :continue
            :wait-async))))))

;; ============================================================================
;; Helper Functions for Workflow Execution
;; ============================================================================

(defn make-workflow-context
  "Create workflow execution context from history."
  [workflow-id history store registry observer]
  {:history (atom history)
   :workflow-id workflow-id
   :seq-counter (atom 0)
   :pending-events (atom [])
   :pending-asyncs (atom [])
   :store store
   :registry registry
   :observer observer})

(defn finalize-completed
  "Save completion events and return result."
  [store executor workflow-id pending-asyncs pending-events result observer]
  ;; Process any remaining pending asyncs before completing
  (when (seq pending-asyncs)
    (process-pending-asyncs-parallel store executor workflow-id
                                     pending-asyncs
                                     pending-events
                                     observer))
  (when (and (empty? pending-asyncs)
             (seq pending-events))
    (p/save-events store workflow-id pending-events))
  (p/save-event store workflow-id {:event-type :workflow-completed
                                   :result     result
                                   :timestamp  (System/currentTimeMillis)})
  (when observer
    (p/on-workflow-completed observer workflow-id result))
  {:status :completed
   :workflow-id workflow-id
   :result result})

(defn finalize-cancelled
  "Save cancellation event and return result as failed."
  [store workflow-id pending-events observer]
  (p/save-events store workflow-id pending-events)
  (let [error-map {:type "clojure.lang.ExceptionInfo"
                   :message "Workflow cancelled"
                   :data {:workflow-id workflow-id}}]
    (p/save-event store workflow-id {:event-type :workflow-failed
                                     :error error-map
                                     :timestamp  (System/currentTimeMillis)})
    (when observer
      (p/on-workflow-cancelled observer workflow-id))
    (when observer
      (p/on-workflow-failed observer workflow-id error-map))
    {:status :failed
     :workflow-id workflow-id
     :error error-map}))

(defn finalize-failed
  "Save failure event and return result."
  [store workflow-id pending-events error observer]
  (p/save-events store workflow-id pending-events)
  (let [error-map (error/throwable->map error)]
    (p/save-event store workflow-id {:event-type :workflow-failed
                                     :error      error-map
                                     :timestamp  (System/currentTimeMillis)})
    (when observer
      (p/on-workflow-failed observer workflow-id error-map))
    {:status :failed
     :workflow-id workflow-id
     :error error-map}))

(defn action->result
  "Convert action keyword to workflow result map."
  [action workflow-id]
  (case action
    :wait-signal {:status :waiting-signal
                  :workflow-id workflow-id}
    :wait-signal-timeout {:status :waiting-signal-timeout
                          :workflow-id workflow-id}
    :wait-timer {:status :waiting-timer
                 :workflow-id workflow-id}
    :wait-async {:status :waiting-async
                 :workflow-id workflow-id}
    ;; :continue should not reach here
    nil))

(declare process-child-workflow)

(defn handle-suspension
  "Dispatch suspension to appropriate handler based on type.
   Returns action keyword: :continue or :wait-*"
  [engine workflow-id suspension-type suspension-data pending-asyncs pending-events wake-fn observer]
  (let [{:keys [store executor scheduler]} engine
        pending-asyncs-list pending-asyncs
        pending-events-list pending-events]
    (when observer
      (p/on-workflow-suspended observer workflow-id suspension-type))

    (case suspension-type
      :activity
      (if (seq pending-asyncs-list)
        (do
          (process-pending-asyncs-parallel store executor workflow-id
                                           pending-asyncs-list
                                           pending-events-list
                                           observer)
          :continue)
        (process-pending-activity store executor workflow-id
                                  suspension-data
                                  pending-events-list
                                  observer))

      :timer
      (process-timer store scheduler workflow-id
                     suspension-data
                     pending-events-list
                     wake-fn
                     observer)

      :wait-signal
      (process-signal store workflow-id
                      suspension-data
                      pending-events-list
                      wake-fn
                      observer)

      :wait-signal-timeout
      (process-signal-with-timeout store scheduler workflow-id
                                   suspension-data
                                   pending-events-list
                                   wake-fn
                                   observer)

      :join-pending
      (process-join-pending store executor workflow-id
                            suspension-data
                            pending-events-list
                            pending-asyncs-list
                            observer)

      :join-any-pending
      (do
        (when (seq pending-asyncs-list)
          (process-pending-asyncs-parallel store executor workflow-id
                                           pending-asyncs-list
                                           pending-events-list
                                           observer))
        :continue)

      :child-workflow
      (process-child-workflow engine
                              workflow-id
                              suspension-data
                              pending-events-list
                              observer))))


(defn run-once
  "Internal: Execute a side-effect thunk only once (not on replay).
   Uses a special event marker to track execution.

   This is an internal implementation detail and should not be exposed to users.
   Users should wrap side effects in activities for proper determinism.

   This can be used to eg run logging statements, etc"
  [thunk]
  (ctx/check-cancelled!)
  (let [seq-num (ctx/next-seq!)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing (p/find-event store workflow-id :run-once-completed seq-num)]
    (if existing
      ;; Replay: already executed, return cached result
      (:result existing)
      ;; First time: execute thunk and save result
      (let [result (thunk)]
        (ctx/add-pending-event! {:event-type :run-once-completed
                                 :seq seq-num
                                 :result result
                                 :timestamp (System/currentTimeMillis)})
        result))))

(defn run-workflow-internal
  "Main workflow execution loop - orchestrates replay and execution.

   Refactored for clarity into three concerns:
   1. Execution: Run workflow function with context (execute-workflow-fn)
   2. Suspension handling: Dispatch to appropriate handlers (handle-suspension)
   3. Finalization: Save events and return results (finalize-* functions)

   Returns a map with :status and :workflow-id, plus :result (on success) or :error (on failure)."
  [{:keys [store executor scheduler registry] :as engine} workflow-id workflow-fn args
   {:keys [observer max-iterations wake-fn]
    :or {max-iterations 1000}}]
  (loop [iteration 0]
    (when (>= iteration max-iterations)
      (throw (ex-info "Max iterations exceeded" {:workflow-id workflow-id
                                                 :iterations iteration})))

    ;; Check cancellation at start of each iteration
    (if (p/is-cancelled? store workflow-id)
      (let [error-map {:type "clojure.lang.ExceptionInfo"
                       :message "Workflow cancelled"
                       :data {:workflow-id workflow-id}}]
        (when observer
          (p/on-workflow-cancelled observer workflow-id))
        (p/save-event store workflow-id {:event-type :workflow-failed
                                         :error error-map
                                         :timestamp (System/currentTimeMillis)})
        (when observer
          (p/on-workflow-failed observer workflow-id error-map))
        {:status :failed
         :workflow-id workflow-id
         :error error-map})

      (let [history (p/load-history store workflow-id)
            ctx (make-workflow-context workflow-id history store registry observer)
            exec-result (binding [ctx/*workflow-context* ctx]
                          (execute-workflow-fn workflow-fn args))]

        (case (:status exec-result)
          :completed
          (finalize-completed store executor workflow-id
                              (:pending-asyncs exec-result)
                              (:pending-events exec-result)
                              (:result exec-result)
                              observer)

          :cancelled
          (finalize-cancelled store workflow-id
                              (:pending-events exec-result)
                              observer)

          :suspended
          (let [action (handle-suspension engine
                                          workflow-id
                                          (:suspension-type exec-result)
                                          (:suspension-data exec-result)
                                          (:pending-asyncs exec-result)
                                          (:pending-events exec-result)
                                          wake-fn
                                          observer)]
            (when (and observer (= action :continue))
              (p/on-workflow-resumed observer workflow-id))

            (if (= action :continue)
              (recur (inc iteration))
              (action->result action workflow-id)))

          :failed
          (finalize-failed store workflow-id
                           (:pending-events exec-result)
                           (:error exec-result)
                           observer))))))

(defn process-child-workflow [{:keys [store executor scheduler registry] :as engine} workflow-id
                               suspension-data pending-events observer]
  (let [{:keys [seq child-workflow-id workflow-fn args]} suspension-data]
    (p/save-events store workflow-id pending-events)
    ;; Execute child workflow synchronously for now
    ;; In a real implementation, this could be async
    (try
      (let [result (run-workflow-internal engine
                                          child-workflow-id workflow-fn args
                                          {:observer observer
                                           :max-iterations 1000})]
        (if (= :completed (:status result))
          (do
            (p/save-event store workflow-id {:event-type        :child-workflow-completed
                                             :seq               seq
                                             :child-workflow-id child-workflow-id
                                             :result            (:result result)
                                             :timestamp         (System/currentTimeMillis)})
            :continue)
          (do
            (p/save-event store workflow-id {:event-type        :child-workflow-failed
                                             :seq               seq
                                             :child-workflow-id child-workflow-id
                                             :error             (or (:error result)
                                                                    {:status (:status result)
                                                                     :message (str "Child workflow ended with status: " (:status result))})
                                             :timestamp         (System/currentTimeMillis)})
            :continue)))
      (catch Exception e
        (p/save-event store workflow-id {:event-type        :child-workflow-failed
                                         :seq               seq
                                         :child-workflow-id child-workflow-id
                                         :error             (error/throwable->map e)
                                         :timestamp         (System/currentTimeMillis)})
        :continue))))