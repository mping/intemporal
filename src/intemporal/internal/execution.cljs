(ns intemporal.internal.execution
  (:require [intemporal.internal.activity :as a]
            [intemporal.internal.context :as ctx]
            [intemporal.internal.error :as error]
            [intemporal.internal.logging :as log]
            [intemporal.utils :as utils]
            [intemporal.protocol :as p]
            [promesa.core :as prom])
  (:require-macros [intemporal.internal.logging :as log]
                   [intemporal.internal.execution :refer [-notify]]
                   [intemporal.internal.context :refer [blet bthen bfinally]]))

;; ============================================================================
;; Workflow Execution Engine
;; ============================================================================

(defn execute-workflow-fn [workflow-fn args]
  ;; Capture context so async callbacks (from p/let, etc.) can access it
  ;; after the dynamic binding scope has exited
  (let [ctx            (ctx/current-context)
        pending-asyncs (:pending-asyncs ctx)
        pending-events (:pending-events ctx)
        wrap-ctx       (fn [f]
                         (fn [v]
                           (binding [ctx/*workflow-context* ctx]
                             (f v))))]
    (try
      (let [result (apply workflow-fn args)]
        (if (prom/promise? result)
          ;; Workflow returned a Promise (e.g. from p/let) - resolve it.
          ;; Re-bind context in callbacks so that any code inside the promise
          ;; chain (e.g. stub calls inside p/let) can access the workflow context.
          (-> result
              (bthen (fn [resolved]
                       {:status :completed
                        :result resolved
                        :pending-asyncs @pending-asyncs
                        :pending-events @pending-events}))
              (prom/catch (wrap-ctx
                            (fn [e]
                              (cond
                                (error/suspension? e)
                                {:status :suspended
                                 :suspension-type (error/suspension-type e)
                                 :suspension-data (error/suspension-data e)
                                 :pending-asyncs @pending-asyncs
                                 :pending-events @pending-events}

                                (error/cancelled-exception? e)
                                {:status :cancelled
                                 :pending-events @pending-events}

                                :else
                                {:status :failed
                                 :error e
                                 :pending-events @pending-events})))))
          ;; Synchronous result
          {:status :completed
           :result result
           :pending-asyncs @pending-asyncs
           :pending-events @pending-events}))
      (catch js/Error e
        (cond
          (error/suspension? e)
          {:status :suspended
           :suspension-type (error/suspension-type e)
           :suspension-data (error/suspension-data e)
           :pending-asyncs @pending-asyncs
           :pending-events @pending-events}

          (error/cancelled-exception? e)
          {:status :cancelled
           :pending-events @pending-events}

          :else
          {:status :failed
           :error e
           :pending-events @pending-events})))))

(defn- execute-once
  "Execute activity once, returns a promise of result map."
  [executor activity-name args timeout-ms observer workflow-id seq-num]
  (let [start (utils/current-time-ms)]
    (log/infof "Executing activity via executor %s" executor)
    (-notify p/on-activity-started observer workflow-id seq-num activity-name)
    (-> (blet [result (p/execute-activity executor activity-name args timeout-ms)
                   duration (- (utils/current-time-ms) start)]
          (-notify p/on-activity-completed observer workflow-id seq-num activity-name result duration)
          (log/infof "Activity succeeded, result: %s" result)
          {:status :success
           :result result
           :duration duration})
        (prom/catch js/Error
          (fn [e]
            (let [duration (- (utils/current-time-ms) start)
                  error-map (error/throwable->map e)]
              (-notify p/on-activity-failed observer workflow-id seq-num activity-name error-map duration)
              (log/warnf e "Activity failed")
              {:status :failed
               :error error-map
               :duration duration}))))))

(defn- execute-with-retry-loop
  "Recursive promise-based retry loop."
  [executor activity-name args timeout-ms retry-policy observer workflow-id seq-num attempt]
  (-notify p/on-activity-started observer workflow-id seq-num activity-name)
  (log/infof "Executing activity (attempt %d)" attempt)
  (let [start (utils/current-time-ms)]
    (-> (blet [result (p/execute-activity executor activity-name args timeout-ms)
                   duration (- (utils/current-time-ms) start)]
          (-notify p/on-activity-completed observer workflow-id seq-num activity-name result duration)
          (log/infof "Activity succeeded (attempt %d), result: %s" attempt result)
          {:status   :success
           :result   result
           :duration duration
           :attempts attempt})
        (prom/catch js/Error
          (fn [e]
            (let [duration (- (utils/current-time-ms) start)
                  error-map (error/throwable->map e)]
              (-notify p/on-activity-failed observer workflow-id seq-num activity-name error-map duration)
              (log/warnf e "Activity failed (attempt %d)" attempt)
              {:status    :retry-or-fail
               :error     error-map
               :exception e
               :duration  duration})))
        (bthen
          (fn [exec-result]
            (case (:status exec-result)
              :success
              exec-result

              :retry-or-fail
              (if (a/should-retry? retry-policy (:exception exec-result) attempt)
                (let [backoff (a/calculate-backoff retry-policy attempt)]
                  (log/debugf "Activity sleeping %s before retrying (attempt %d)" backoff attempt)
                  (-> (prom/delay backoff)
                      (bthen (fn [_]
                               (execute-with-retry-loop executor activity-name args timeout-ms
                                                        retry-policy observer workflow-id seq-num
                                                        (inc attempt))))))
                {:status :failed
                 :error (:error exec-result)
                 :duration (:duration exec-result)
                 :attempts attempt})))))))

(defn execute-with-retry
  "Execute an activity with retry policy. Returns a promise of result map."
  [executor activity-name args timeout-ms retry-policy observer workflow-id seq-num]
  (if (nil? retry-policy)
    (execute-once executor activity-name args timeout-ms observer workflow-id seq-num)
    (execute-with-retry-loop executor activity-name args timeout-ms
                             retry-policy observer workflow-id seq-num 1)))

(defn process-pending-activity [store executor workflow-id
                                {:keys [seq activity-name args timeout-ms retry-policy] :as suspension-data}
                                pending-events observer]
  (log/with-mdc {:activity activity-name :seqnum seq}
    (blet [exec-result (execute-with-retry executor activity-name args timeout-ms
                                               retry-policy observer workflow-id seq)]
      ;; Save all pending events first
      (p/save-events store workflow-id pending-events)
      ;; Then save the completion or failure
      (let [success? (= :success (:status exec-result))
            event    (cond-> {:event-type    (if success? :activity-completed :activity-failed)
                              :seq           seq
                              :activity-name activity-name
                              :result        (:result exec-result)
                              :duration-ms   (:duration exec-result)
                              :attempts      (:attempts exec-result)
                              :timestamp     (utils/current-time-ms)}
                             success? (assoc :result (:result exec-result))
                             (not success?) (assoc :error (:error exec-result)))]
        (p/save-event store workflow-id event)
        :continue))))

(defn process-pending-asyncs-parallel
  "Process all pending async operations in parallel. Returns a promise of :continue."
  [store executor workflow-id pending-asyncs pending-events observer]
  (if-not (seq pending-asyncs)
    (prom/resolved :continue)
    (do
      ;; Save all pending events first
      (p/save-events store workflow-id pending-events)

      (log/infof "Executing %d activities in parallel via executor %s" (count pending-asyncs) executor)
      (blet [results (p/execute-activities-parallel executor pending-asyncs)]
        (let [now (utils/current-time-ms)
              completion-events
              (mapcat (fn [{:keys [activity-name activity-seq] :as async-info} result]
                        (log/with-mdc {:activity activity-name :seqnum activity-seq}
                          (if (= :success (:status result))
                            (do
                              (-notify p/on-async-completed observer workflow-id (:handle-seq async-info) (:result result))
                              (log/tracef "Got completion event: activity succeeded, result: %s" result))
                            (do
                              (-notify p/on-async-failed observer workflow-id (:handle-seq async-info) (:error result))
                              (log/tracef "Got completion event: activity failed, error: %s" (:error result))))
                          (if (= :success (:status result))
                            [{:event-type    :activity-completed
                              :seq           (:activity-seq async-info)
                              :activity-name (:activity-name async-info)
                              :result        (:result result)
                              :duration-ms   (:duration result)
                              :timestamp     now}
                             {:event-type :async-completed
                              :seq        (:handle-seq async-info)
                              :last-seq   (:activity-seq async-info)
                              :result     (:result result)
                              :timestamp  now}]
                            [{:event-type    :activity-failed
                              :seq           (:activity-seq async-info)
                              :activity-name (:activity-name async-info)
                              :error         (:error result)
                              :timestamp     now}
                             {:event-type :async-failed
                              :seq        (:handle-seq async-info)
                              :last-seq   (:activity-seq async-info)
                              :error      (:error result)
                              :timestamp  now}])))
                      pending-asyncs results)]
          (p/save-events store workflow-id completion-events)
          :continue)))))

(defn process-timer [store scheduler workflow-id suspension-data pending-events
                      wake-fn observer]
  (let [{:keys [seq fire-at]} suspension-data
        now (utils/current-time-ms)]
    ;; Save pending events
    (p/save-events store workflow-id pending-events)
    (if (>= now fire-at)
      (do
        (p/save-event store workflow-id {:event-type :timer-fired
                                         :seq        seq
                                         :timestamp  now})
        (-notify p/on-timer-fired observer workflow-id seq)
        :continue)
      ;; ELSE Schedule timer and return wait status
      (do
        (p/schedule-timer scheduler workflow-id seq fire-at
                          (fn []
                            (p/save-event store workflow-id {:event-type :timer-fired
                                                             :seq        seq
                                                             :timestamp  (utils/current-time-ms)})
                            (-notify p/on-timer-fired observer workflow-id seq)
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
                                         :timestamp   (utils/current-time-ms)})
        (-notify p/on-signal-received observer workflow-id signal-name (:payload signal-data))
        :continue)
      ;; ELSE Signal not yet available - register callback and wait
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
                                                                        :timestamp   (utils/current-time-ms)})
                                       (-notify p/on-signal-received observer workflow-id signal-name (:payload signal-data)))
                                     ;; Unregister callback
                                     (p/unregister-signal-callback store workflow-id signal-name)
                                     ;; Wake up the workflow
                                     (when wake-fn (wake-fn))))
        :wait-signal))))

(defn process-signal-with-timeout [store scheduler workflow-id suspension-data
                                    pending-events wake-fn observer]
  (let [{:keys [seq signal-name deadline]} suspension-data
        now (utils/current-time-ms)]
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
        (-notify p/on-signal-received observer workflow-id signal-name (:payload signal-data))
        :continue)
      ;; ELSE Check if already timed out
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
                              (let [signal-data? (p/consume-signal store workflow-id signal-name)]
                                (p/save-event store workflow-id (cond-> {:event-type  :signal-wait-completed
                                                                         :seq         seq
                                                                         :received    (some? signal-data?)
                                                                         :signal-name signal-name
                                                                         :timestamp   (utils/current-time-ms)}
                                                                        (some? signal-data?) (assoc :payload (:payload signal-data?)))))

                              (when wake-fn (wake-fn))))
          :wait-signal-timeout)))))

(defn process-join-pending [store executor workflow-id suspension-data pending-events
                             pending-asyncs observer]
  (let [{:keys [handle-seq]} suspension-data]
    ;; First, process any pending asyncs that haven't been executed yet
    (if (seq pending-asyncs)
      (blet [_ (process-pending-asyncs-parallel store executor workflow-id
                                                    pending-asyncs pending-events observer)]
        :continue)
      ;; else
      (do
        (when (seq pending-events)
          (p/save-events store workflow-id pending-events))
        ;; Check if the handle is now complete
        (let [store (ctx/current-store)
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
  [workflow-id history store registry observer & {:keys [protocols]}]
  (cond-> {:history (atom history)
           :workflow-id workflow-id
           :seq-counter (atom 0)
           :pending-events (atom [])
           :pending-asyncs (atom [])
           :store store
           :registry registry
           :observer observer}
    protocols (assoc :protocols protocols)))

(defn finalize-completed
  "Save completion events and return result. Returns a promise."
  [store executor workflow-id pending-asyncs pending-events result observer]
  (blet [_ (if (seq pending-asyncs)
                 (process-pending-asyncs-parallel store executor workflow-id
                                                  pending-asyncs pending-events observer)
                 (do
                   (when (seq pending-events)
                     (p/save-events store workflow-id pending-events))
                   nil))]
    (p/save-event store workflow-id {:event-type :workflow-completed
                                     :result     result
                                     :timestamp  (utils/current-time-ms)})
    (-notify p/on-workflow-completed observer workflow-id result)
    {:status :completed
     :workflow-id workflow-id
     :result result}))

(defn finalize-cancelled
  "Save cancellation event and return result as failed."
  [store workflow-id pending-events observer]
  (p/save-events store workflow-id pending-events)
  (let [error-map {:type "clojure.lang.ExceptionInfo"
                   :message "Workflow cancelled"
                   :data {:workflow-id workflow-id}}]
    (p/save-event store workflow-id {:event-type :workflow-failed
                                     :error error-map
                                     :timestamp  (utils/current-time-ms)})
    (-notify p/on-workflow-cancelled observer workflow-id)
    (-notify p/on-workflow-failed observer workflow-id error-map)
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
                                     :timestamp  (utils/current-time-ms)})
    (-notify p/on-workflow-failed observer workflow-id error-map)
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
   Returns a promise of action keyword: :continue or :wait-*"
  [engine workflow-id suspension-type suspension-data pending-asyncs pending-events wake-fn observer]
  (let [{:keys [store executor scheduler]} engine
        pending-asyncs-list pending-asyncs
        pending-events-list pending-events]
    (-notify p/on-workflow-suspended observer workflow-id suspension-type)

    (case suspension-type
      :activity
      (if (seq pending-asyncs-list)
        (blet [_ (process-pending-asyncs-parallel store executor workflow-id
                                                      pending-asyncs-list
                                                      pending-events-list
                                                      observer)]
          :continue)
        (process-pending-activity store executor workflow-id
                                  suspension-data
                                  pending-events-list
                                  observer))

      :timer
      (prom/resolved
        (process-timer store scheduler workflow-id
                       suspension-data
                       pending-events-list
                       wake-fn
                       observer))

      :wait-signal
      (prom/resolved
        (process-signal store workflow-id
                        suspension-data
                        pending-events-list
                        wake-fn
                        observer))

      :wait-signal-timeout
      (prom/resolved
        (process-signal-with-timeout store scheduler workflow-id
                                     suspension-data
                                     pending-events-list
                                     wake-fn
                                     observer))

      :join-pending
      (process-join-pending store executor workflow-id
                            suspension-data
                            pending-events-list
                            pending-asyncs-list
                            observer)

      :join-any-pending
      (blet [_ (when (seq pending-asyncs-list)
                     (process-pending-asyncs-parallel store executor workflow-id
                                                      pending-asyncs-list
                                                      pending-events-list
                                                      observer))]
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
                                 :timestamp (utils/current-time-ms)})
        result))))

(defn run-workflow-internal
  "Main workflow execution loop - orchestrates replay and execution.

   Refactored for clarity into three concerns:
   1. Execution: Run workflow function with context (execute-workflow-fn)
   2. Suspension handling: Dispatch to appropriate handlers (handle-suspension)
   3. Finalization: Save events and return results (finalize-* functions)

   Returns a promise of a map with :status and :workflow-id, plus :result (on success) or :error (on failure)."
  [{:keys [store executor scheduler registry] :as engine} workflow-id workflow-fn args
   {:keys [observer max-iterations wake-fn]
    :or {max-iterations 1000}}]
  (prom/loop [iteration 0]
    (when (>= iteration max-iterations)
      (throw (ex-info "Max iterations exceeded" {:workflow-id workflow-id
                                                 :iterations iteration})))

    (log/debugf "Internal loop %d of %d" iteration max-iterations)

    ;; Check if executor is shutting down - stop processing to avoid endless rejections
    (if (p/shutdown? executor)
      (do
        (log/infof "Executor shutting down, suspending workflow")
        {:status :suspended
         :workflow-id workflow-id})

      ;; Check cancellation at start of each iteration
      (if (p/is-cancelled? store workflow-id)
        (let [error-map {:type "clojure.lang.ExceptionInfo"
                         :message "Workflow cancelled"
                         :data {:workflow-id workflow-id}}]

          (-notify p/on-workflow-cancelled observer workflow-id)
          (p/save-event store workflow-id {:event-type :workflow-failed
                                           :error      error-map
                                           :timestamp  (utils/current-time-ms)})

          (log/info "Workflow cancelled, failing")
          (-notify p/on-workflow-failed observer workflow-id error-map)
          {:status :failed
           :workflow-id workflow-id
           :error error-map})
        ;; else
        (let [history (p/load-history store workflow-id)
              ctx (make-workflow-context workflow-id history store registry observer
                                       :protocols (:protocols engine))
              exec-result (binding [ctx/*workflow-context* ctx]
                            (log/debugf "Executing workflow function %s..." workflow-fn)
                            (execute-workflow-fn workflow-fn args))
              dispatch (fn [exec-result]
                         (log/debugf "Workflow function executed, got: %s" (:status exec-result))
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
                           (blet [action (handle-suspension engine
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
                               (prom/recur (inc iteration))
                               (action->result action workflow-id)))

                           :failed
                           (finalize-failed store workflow-id
                                            (:pending-events exec-result)
                                            (:error exec-result)
                                            observer)))]
          ;; exec-result may be a Promise if workflow-fn returned a Promise (e.g. from p/let)
          (if (prom/promise? exec-result)
            (bthen exec-result dispatch)
            (dispatch exec-result)))))))

(defn process-child-workflow [{:keys [store executor scheduler registry] :as engine} workflow-id
                               suspension-data pending-events observer]
  (let [{:keys [seq child-workflow-id workflow-fn args]} suspension-data]
    (p/save-events store workflow-id pending-events)
    (-> (run-workflow-internal engine child-workflow-id workflow-fn args
                               {:observer observer :max-iterations 1000})
        (bthen
          (fn [result]
            (if (= :completed (:status result))
              (do
                (p/save-event store workflow-id {:event-type        :child-workflow-completed
                                                 :seq               seq
                                                 :child-workflow-id child-workflow-id
                                                 :result            (:result result)
                                                 :timestamp         (utils/current-time-ms)})
                (log/infof "Child workflow with id %s completed" child-workflow-id)
                :continue)
              (do
                (p/save-event store workflow-id {:event-type        :child-workflow-failed
                                                 :seq               seq
                                                 :child-workflow-id child-workflow-id
                                                 :error             (or (:error result)
                                                                        {:status (:status result)
                                                                         :message (str "Child workflow ended with status: " (:status result))})
                                                 :timestamp         (utils/current-time-ms)})
                (log/infof "Child workflow with id %s failed, status: %s, error: %s" child-workflow-id (:status result) (:error result))
                :continue))))
        (prom/catch js/Error
          (fn [e]
            (p/save-event store workflow-id {:event-type        :child-workflow-failed
                                             :seq               seq
                                             :child-workflow-id child-workflow-id
                                             :error             (error/throwable->map e)
                                             :timestamp         (utils/current-time-ms)})
            (log/warnf e "Error while executing child workflow with id %s" child-workflow-id)
            :continue)))))
