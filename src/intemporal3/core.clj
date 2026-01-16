(ns intemporal3.core
  (:require [intemporal3.internal.error :as error]
            [intemporal3.internal.context :as ctx]
            [intemporal3.internal.activity :as a]
            [intemporal3.internal.runtime :as runtime]
            [intemporal3.protocol :as p]
            [intemporal3.store :as store]
            [intemporal3.observer :as obs]))

;; ============================================================================
;; Core Workflow Operations
;; ============================================================================

(defn stub
  "Create a stubbed version of an activity function for use in workflows.
   Options:
   - :timeout-ms - timeout for this activity (overrides default)
   - :retry-policy - retry policy for this activity"
  [activity-fn & {:keys [timeout-ms retry-policy]}]
  (let [ctx (ctx/current-context)
        registry (:registry ctx)
        activity-name (a/ensure-registered! registry activity-fn)
        activity-info (a/get-activity-info registry activity-name)
        effective-timeout (or timeout-ms (:timeout-ms activity-info))
        effective-retry (or retry-policy (:retry-policy activity-info))]
    (fn [& args]
      (ctx/check-cancelled!)
      (let [ctx (ctx/current-context)
            seq-num (ctx/next-seq!)
            ;history @(:history ctx)
            ;existing (ctx/find-event history :activity-completed seq-num)
            ;existing-failed (ctx/find-event history :activity-failed seq-num)
            store (ctx/current-store)
            workflow-id (ctx/current-workflow-id)
            existing (p/find-event store workflow-id :activity-completed seq-num)
            existing-failed (p/find-event store workflow-id  :activity-failed seq-num)]
        (cond
          ;; Replay: return cached result
          existing
          (:result existing)

          ;; Replay: throw cached error
          existing-failed
          (throw (error/map->exception (:error existing-failed)))

          ;; Execute: need to run the activity
          :else
          (let [scheduled-event {:event-type :activity-scheduled
                                 :seq seq-num
                                 :activity-name activity-name
                                 :args (vec args)
                                 :timeout-ms effective-timeout
                                 :retry-policy (when effective-retry
                                                 {:max-attempts (:max-attempts effective-retry)
                                                  :backoff-ms (:backoff-ms effective-retry)})
                                 :timestamp (System/currentTimeMillis)}]
            (ctx/add-pending-event! scheduled-event)
            (ctx/notify-observer p/on-activity-scheduled
                                 (:workflow-id ctx) seq-num activity-name (vec args))
            (throw (error/make-suspension :activity {:seq seq-num
                                                     :activity-name activity-name
                                                     :args (vec args)
                                                     :timeout-ms effective-timeout
                                                     :retry-policy effective-retry}))))))))

;; ============================================================================
;; Async Support
;; ============================================================================

(defrecord AsyncHandle [seq-num])

(defn async
  "Schedule an async operation (thunk) for later execution.
   The thunk should contain a single activity call."
  [thunk]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        ;history @(:history ctx)
        ;existing-completed (ctx/find-event history :async-completed seq-num)
        ;existing-failed (ctx/find-event history :async-failed seq-num)
        ;existing-started (ctx/find-event history :async-started seq-num)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing-completed (p/find-event store workflow-id :async-completed seq-num)
        existing-failed (p/find-event store workflow-id :async-failed seq-num)
        existing-started (p/find-event store workflow-id :async-started seq-num)]
    (cond
      ;; Already completed - advance seq past consumed numbers during replay
      existing-completed
      (do
        ;; Advance seq counter to skip past all seqs consumed by this async
        (ctx/update-seq! existing-completed)
        (->AsyncHandle seq-num))

      ;; Already failed - advance seq past consumed numbers during replay
      existing-failed
      (do
        (ctx/update-seq! existing-failed)
        (->AsyncHandle seq-num))

      ;; Already started but not completed - return handle (will block on join)
      ;; During replay, don't re-execute the thunk - just wait for completion event
      existing-started
      (->AsyncHandle seq-num)

      ;; Need to start - record and try to capture what activity it needs
      :else
      (let [start-event {:event-type :async-started
                         :seq seq-num
                         :timestamp (System/currentTimeMillis)}
            start-seq seq-num]
        (ctx/add-pending-event! start-event)
        (ctx/notify-observer p/on-async-started (:workflow-id ctx) seq-num)
        ;; Try to execute the thunk to see what activity it wants
        (try
          (let [result (thunk)
                ;; Capture the last seq number after thunk execution
                end-seq (dec @(:seq-counter (ctx/current-context)))]
            ;; If thunk completes synchronously (pure computation - first run only),
            ;; save the completion event immediately with the seq range
            (ctx/add-pending-event! {:event-type :async-completed
                                     :seq start-seq
                                     :last-seq end-seq
                                     :result result
                                     :timestamp (System/currentTimeMillis)})
            (ctx/notify-observer p/on-async-completed (:workflow-id ctx) start-seq result)
            (->AsyncHandle start-seq))
          (catch Exception e
            (if (error/suspension? e)
              ;; The thunk suspended on an activity - capture it for parallel execution
              (let [suspension-info (error/suspension-data e)]
                (ctx/add-pending-async! {:handle-seq start-seq
                                         :activity-name (:activity-name suspension-info)
                                         :activity-seq (:seq suspension-info)
                                         :args (:args suspension-info)
                                         :timeout-ms (:timeout-ms suspension-info)
                                         :retry-policy (:retry-policy suspension-info)})
                ;; Return handle - we'll batch execute later
                (->AsyncHandle start-seq))
              (throw e))))))))

(defn join
  "Wait for an async handle to complete.
   Throws if the async operation failed."
  [handle]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
        handle-seq (:seq-num handle)
        ;history @(:history ctx)
        ;completed (ctx/find-event history :async-completed handle-seq)
        ;failed (ctx/find-event history :async-failed handle-seq)

        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        completed (p/find-event store workflow-id :async-completed handle-seq)
        failed (p/find-event store workflow-id :async-failed handle-seq)]
    (cond
      completed
      (:result completed)

      failed
      (throw (error/async-failed-exception handle-seq (:error failed)))

      :else
      (throw (error/make-suspension :join-pending {:handle-seq handle-seq})))))

(defn join-all
  "Wait for multiple async handles to complete.
   Returns a vector of results in the same order as handles.
   Throws if any async operation failed."
  [handles]
  (mapv join handles))

(defn join-any
  "Wait for any of the async handles to complete.
   Returns {:index idx :result result} for the first completed.
   Note: In deterministic replay, this will always return the same result."
  [handles]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        ;history @(:history ctx)
        ;existing (ctx/find-event history :join-any-completed seq-num)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing (p/find-event store workflow-id :join-any-completed seq-num)]
    (if existing
      {:index (:index existing)
       :result (:result existing)}
      ;; Check if any are already complete
      (let [completed-idx (first
                            (keep-indexed
                               (fn [idx handle]
                                   (when (p/find-event store workflow-id :async-completed (:seq-num handle))
                                       idx))
                               handles))]
        (if completed-idx
          (let [result (join (nth handles completed-idx))]
            (ctx/add-pending-event! {:event-type :join-any-completed
                                     :seq seq-num
                                     :index completed-idx
                                     :result result
                                     :timestamp (System/currentTimeMillis)})
            {:index completed-idx :result result})
          (throw (error/make-suspension :join-any-pending
                                        {:seq seq-num
                                         :handle-seqs (mapv :seq-num handles)})))))))

;; ============================================================================
;; Signals
;; ============================================================================

(defn wait-for-signal
  "Wait for a signal with the given name.
   Returns the signal payload when received."
  [signal-name]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        ;history @(:history ctx)
        ;existing (ctx/find-event history :signal-received seq-num)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing (p/find-event store workflow-id :signal-received seq-num)]
    (if existing
      (:payload existing)
      (throw (error/make-suspension :wait-signal {:seq seq-num
                                                  :signal-name signal-name})))))

(defn wait-for-signal-with-timeout
  "Wait for a signal with timeout.
   Returns {:received true :payload ...} or {:received false} on timeout."
  [signal-name timeout-ms]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        ;history @(:history ctx)
        ;existing (ctx/find-event history :signal-wait-completed seq-num)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing (p/find-event store workflow-id :signal-wait-completed seq-num)]
    (if existing
      (if (:received existing)
        {:received true :payload (:payload existing)}
        {:received false})
      (throw (error/make-suspension :wait-signal-timeout
                                    {:seq seq-num
                                     :signal-name signal-name
                                     :timeout-ms timeout-ms
                                     :deadline (+ (System/currentTimeMillis) timeout-ms)})))))

;; ================================================================
;; ============
;; Timers
;; ============================================================================

(defn sleep
  "Sleep for specified milliseconds"
  [ms]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        ;history @(:history ctx)
        ;existing (ctx/find-event history :timer-fired seq-num)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing (p/find-event store workflow-id :timer-fired seq-num)]
    (if existing
      nil
      (let [fire-at (+ (System/currentTimeMillis) ms)]
        (ctx/add-pending-event! {:event-type :timer-scheduled
                                 :seq seq-num
                                 :fire-at fire-at
                                 :duration-ms ms
                                 :timestamp (System/currentTimeMillis)})
        (ctx/notify-observer p/on-timer-scheduled (:workflow-id ctx) seq-num fire-at)
        (throw (error/make-suspension :timer {:seq seq-num
                                              :fire-at fire-at}))))))

;; ============================================================================
;; Child Workflows
;; ============================================================================

(defn run-child-workflow
  "Run another workflow as a child workflow.
   The child workflow has its own history but is tracked by the parent."
  [child-workflow-fn args & {:keys [child-id]}]
  (ctx/check-cancelled!)
  (let [ctx (ctx/current-context)
        seq-num (ctx/next-seq!)
        ;history @(:history ctx)
        child-wf-id (or child-id (str (:workflow-id ctx) "/child-" seq-num))
        ;existing (ctx/find-event history :child-workflow-completed seq-num)
        ;existing-failed (ctx/find-event history :child-workflow-failed seq-num)
        store (ctx/current-store)
        workflow-id (ctx/current-workflow-id)
        existing (p/find-event store workflow-id :child-workflow-completed seq-num)
        existing-failed (p/find-event store workflow-id :child-workflow-failed seq-num)]
    (cond
      existing
      (:result existing)

      existing-failed
      (throw (error/map->exception (:error existing-failed)))

      :else
      (let [scheduled-event {:event-type :child-workflow-scheduled
                             :seq seq-num
                             :child-workflow-id child-wf-id
                             :args (vec args)
                             :timestamp (System/currentTimeMillis)}]
        (ctx/add-pending-event! scheduled-event)
        (throw (error/make-suspension :child-workflow
                                {:seq seq-num
                                 :child-workflow-id child-wf-id
                                 :workflow-fn child-workflow-fn
                                 :args args}))))))

;; ============================================================================
;; Workflow Execution Engine
;; ============================================================================

(defn- execute-workflow-fn [workflow-fn args]
  (try
    {:status :completed
     :result (apply workflow-fn args)
     :pending-asyncs @(:pending-asyncs (ctx/current-context))
     :pending-events @(:pending-events (ctx/current-context))}
    (catch Exception e
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

(defn- execute-with-retry
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

(defn- process-pending-activity [store executor workflow-id suspension-data pending-events observer]
  (let [{:keys [seq activity-name args timeout-ms retry-policy]} suspension-data
        exec-result (execute-with-retry executor activity-name args timeout-ms
                                        retry-policy observer workflow-id seq)]
    ;; Save all pending events first
    (p/save-events store workflow-id pending-events)
    ;; Then save the completion or failure
    (if (= :success (:status exec-result))
      (do
        (p/save-event store workflow-id {:event-type :activity-completed
                                         :seq seq
                                         :activity-name activity-name
                                         :result (:result exec-result)
                                         :duration-ms (:duration exec-result)
                                         :attempts (:attempts exec-result)
                                         :timestamp (System/currentTimeMillis)})
        :continue)
      (do
        (p/save-event store workflow-id {:event-type :activity-failed
                                         :seq seq
                                         :activity-name activity-name
                                         :error (:error exec-result)
                                         :duration-ms (:duration exec-result)
                                         :attempts (:attempts exec-result)
                                         :timestamp (System/currentTimeMillis)})
        :continue))))

(defn- process-pending-asyncs-parallel
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

(defn- process-timer [store scheduler workflow-id suspension-data pending-events
                      wake-fn observer]
  (let [{:keys [seq fire-at]} suspension-data
        now (System/currentTimeMillis)]
    ;; Save pending events
    (p/save-events store workflow-id pending-events)
    (if (>= now fire-at)
      (do
        (p/save-event store workflow-id {:event-type :timer-fired
                                         :seq seq
                                         :timestamp now})
        (when observer
          (p/on-timer-fired observer workflow-id seq))
        :continue)
      ;; Schedule timer and return wait status
      (do
        (p/schedule-timer scheduler workflow-id seq fire-at
                        (fn []
                          (p/save-event store workflow-id {:event-type :timer-fired
                                                           :seq seq
                                                           :timestamp (System/currentTimeMillis)})
                          (when observer
                            (p/on-timer-fired observer workflow-id seq))
                          (when wake-fn (wake-fn))))
        :wait-timer))))

(defn- process-signal [store workflow-id suspension-data pending-events observer]
  (let [{:keys [seq signal-name]} suspension-data]
    ;; Save pending events
    (p/save-events store workflow-id pending-events)
    (if-let [signal-data (p/consume-signal store workflow-id signal-name)]
      (do
        (p/save-event store workflow-id {:event-type :signal-received
                                         :seq seq
                                         :signal-name signal-name
                                         :signal-id (:id signal-data)
                                         :payload (:payload signal-data)
                                         :timestamp (System/currentTimeMillis)})
        (when observer
          (p/on-signal-received observer workflow-id signal-name (:payload signal-data)))
        :continue)
      :wait-signal)))

(defn- process-signal-with-timeout [store scheduler workflow-id suspension-data
                                    pending-events wake-fn observer]
  (let [{:keys [seq signal-name deadline]} suspension-data
        now (System/currentTimeMillis)]
    (p/save-events store workflow-id pending-events)
    ;; Check if signal already available
    (if-let [signal-data (p/consume-signal store workflow-id signal-name)]
      (do
        (p/save-event store workflow-id {:event-type :signal-wait-completed
                                         :seq seq
                                         :received true
                                         :signal-name signal-name
                                         :payload (:payload signal-data)
                                         :timestamp now})
        (when observer
          (p/on-signal-received observer workflow-id signal-name (:payload signal-data)))
        :continue)
      ;; Check if already timed out
      (if (>= now deadline)
        (do
          (p/save-event store workflow-id {:event-type :signal-wait-completed
                                           :seq seq
                                           :received false
                                           :signal-name signal-name
                                           :timestamp now})
          :continue)
        ;; Schedule timeout
        (do
          (p/schedule-timer scheduler workflow-id seq deadline
                          (fn []
                            ;; Check one more time for signal
                            (if-let [signal-data (p/consume-signal store workflow-id signal-name)]
                              (p/save-event store workflow-id {:event-type :signal-wait-completed
                                                               :seq seq
                                                               :received true
                                                               :signal-name signal-name
                                                               :payload (:payload signal-data)
                                                               :timestamp (System/currentTimeMillis)})
                              (p/save-event store workflow-id {:event-type :signal-wait-completed
                                                               :seq seq
                                                               :received false
                                                               :signal-name signal-name
                                                               :timestamp (System/currentTimeMillis)}))
                            (when wake-fn (wake-fn))))
          :wait-signal-timeout)))))

(defn- process-join-pending [store executor workflow-id suspension-data pending-events
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

(declare run-workflow-internal)

(defn- process-child-workflow [{:keys [store executor scheduler registry] :as engine} workflow-id
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
            (p/save-event store workflow-id {:event-type :child-workflow-completed
                                             :seq seq
                                             :child-workflow-id child-workflow-id
                                             :result (:result result)
                                             :timestamp (System/currentTimeMillis)})
            :continue)
          (do
            (p/save-event store workflow-id {:event-type :child-workflow-failed
                                             :seq seq
                                             :child-workflow-id child-workflow-id
                                             :error {:status (:status result)}
                                             :timestamp (System/currentTimeMillis)})
            :continue)))
      (catch Exception e
        (p/save-event store workflow-id {:event-type :child-workflow-failed
                                         :seq seq
                                         :child-workflow-id child-workflow-id
                                         :error (error/throwable->map e)
                                         :timestamp (System/currentTimeMillis)})
        :continue))))

(defn- run-workflow-internal
  [{:keys [store executor scheduler registry] :as engine} workflow-id workflow-fn args
   {:keys [observer max-iterations wake-fn]
    :or {max-iterations 1000}}]
  (loop [iteration 0]
    (when (>= iteration max-iterations)
      (throw (ex-info "Max iterations exceeded" {:workflow-id workflow-id
                                                 :iterations iteration})))

    ;; Check cancellation at start of each iteration
    (when (p/is-cancelled? store workflow-id)
      (when observer
        (p/on-workflow-cancelled observer workflow-id))
      (p/save-event store workflow-id {:event-type :workflow-cancelled
                                       :timestamp (System/currentTimeMillis)})
      (throw (ex-info "Workflow cancelled" {:workflow-id workflow-id})))

    (let [history (p/load-history store workflow-id)
          pending-events (atom [])
          pending-asyncs (atom [])
          ctx {:history (atom history)
               :workflow-id workflow-id
               :seq-counter (atom 0)
               :pending-events pending-events
               :pending-asyncs pending-asyncs
               :store store
               :registry registry
               :observer observer}
          exec-result (binding [ctx/*workflow-context* ctx]
                        (execute-workflow-fn workflow-fn args))]

      (case (:status exec-result)
        :completed
        (do
          ;; Process any remaining pending asyncs before completing
          (when (seq (:pending-asyncs exec-result))
            (process-pending-asyncs-parallel store executor workflow-id
                                             (:pending-asyncs exec-result)
                                             (:pending-events exec-result)
                                             observer))
          (when (and (empty? (:pending-asyncs exec-result))
                     (seq (:pending-events exec-result)))
            (p/save-events store workflow-id (:pending-events exec-result)))
          (p/save-event store workflow-id {:event-type :workflow-completed
                                           :result (:result exec-result)
                                           :timestamp (System/currentTimeMillis)})
          (when observer
            (p/on-workflow-completed observer workflow-id (:result exec-result)))
          {:status :completed
           :result (:result exec-result)})

        :cancelled
        (do
          (p/save-events store workflow-id (:pending-events exec-result))
          (p/save-event store workflow-id {:event-type :workflow-cancelled
                                           :timestamp (System/currentTimeMillis)})
          (when observer
            (p/on-workflow-cancelled observer workflow-id))
          {:status :cancelled
           :workflow-id workflow-id})

        :suspended
        (let [pending-asyncs-list (:pending-asyncs exec-result)
              pending-events-list (:pending-events exec-result)

              _ (when observer
                  (p/on-workflow-suspended observer workflow-id (:suspension-type exec-result)))

              action (case (:suspension-type exec-result)
                       :activity
                       (if (seq pending-asyncs-list)
                         (do
                           (process-pending-asyncs-parallel store executor workflow-id
                                                            pending-asyncs-list
                                                            pending-events-list
                                                            observer)
                           :continue)
                         (process-pending-activity store executor workflow-id
                                                   (:suspension-data exec-result)
                                                   pending-events-list
                                                   observer))

                       :timer
                       (process-timer store scheduler workflow-id
                                      (:suspension-data exec-result)
                                      pending-events-list
                                      wake-fn
                                      observer)

                       :wait-signal
                       (process-signal store workflow-id
                                       (:suspension-data exec-result)
                                       pending-events-list
                                       observer)

                       :wait-signal-timeout
                       (process-signal-with-timeout store scheduler workflow-id
                                                    (:suspension-data exec-result)
                                                    pending-events-list
                                                    wake-fn
                                                    observer)

                       :join-pending
                       (process-join-pending store executor workflow-id
                                             (:suspension-data exec-result)
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
                                               (:suspension-data exec-result)
                                               pending-events-list
                                               observer))]

          (when observer
            (when (= action :continue)
              (p/on-workflow-resumed observer workflow-id)))

          (case action
            :continue (recur (inc iteration))
            :wait-signal {:status :waiting-signal
                          :workflow-id workflow-id}
            :wait-signal-timeout {:status :waiting-signal-timeout
                                  :workflow-id workflow-id}
            :wait-timer {:status :waiting-timer
                         :workflow-id workflow-id}
            :wait-async {:status :waiting-async
                         :workflow-id workflow-id}))

        :failed
        (do
          (p/save-events store workflow-id (:pending-events exec-result))
          (p/save-event store workflow-id {:event-type :workflow-failed
                                           :error (error/throwable->map (:error exec-result))
                                           :timestamp (System/currentTimeMillis)})
          (when observer
            (p/on-workflow-failed observer workflow-id (error/throwable->map (:error exec-result))))
          {:status :failed
           :error (:error exec-result)})))))

;; ============================================================================
;; Public API
;; ============================================================================

(defn start-workflow
  "Start a workflow execution.

   Arguments:
   - engine: should have:
     - store: IStore implementation for persistence
     - executor: IActivityExecutor for running activities
     - scheduler: IScheduler for timers
     - registry: Activity registry atom
   - workflow-fn: The workflow function to execute
   - args: Arguments to pass to workflow-fn

   Options:
   - :workflow-id - Custom workflow ID (default: random UUID)
   - :observer - IWorkflowObserver for monitoring
   - :max-iterations - Maximum replay iterations (default: 1000)"
  [{:keys [store executor scheduler registry] :as engine} workflow-fn args
   & {:keys [workflow-id observer max-iterations]
      :or {max-iterations 1000}}]
  (let [wf-id (or workflow-id (str (random-uuid)))
        resume-promise (promise)
        wake-fn (fn []
                  (try
                    (when observer
                      (p/on-workflow-resumed observer wf-id))
                    (deliver resume-promise
                             (run-workflow-internal engine wf-id workflow-fn args
                                                   {:observer observer
                                                    :max-iterations max-iterations}))
                    (catch Exception e
                      (deliver resume-promise {:status :failed :error e}))))]
    (p/save-event store wf-id {:event-type :workflow-started
                               :workflow-id wf-id
                               :args (vec args)
                               :timestamp (System/currentTimeMillis)})
    (when observer
      (p/on-workflow-started observer wf-id args))
    (try
      (let [result (run-workflow-internal engine wf-id workflow-fn args
                                         {:observer observer
                                          :max-iterations max-iterations
                                          :wake-fn wake-fn})]
        ;; If workflow is waiting for timer/signal, block until wake-fn delivers result
        (if (#{:waiting-timer :waiting-signal :waiting-signal-timeout} (:status result))
          @resume-promise
          result))
      (catch Exception e
        ;; If cancelled/failed before entering wait state, re-throw
        (throw e)))))

(defn resume-workflow
  "Resume a waiting workflow (e.g., after signal delivery or timer).

   Arguments:
   - engine: must have:
     - store: IStore implementation
     - executor: IActivityExecutor
     - scheduler: IScheduler
     - registry: Activity registry atom
   - workflow-id: ID of workflow to resume
   - workflow-fn: The workflow function
   - args: Original arguments

   Options:
   - :observer - IWorkflowObserver
   - :max-iterations - Maximum replay iterations"
  [{:keys [store executor scheduler registry] :as engine} workflow-id workflow-fn args
   & {:keys [observer max-iterations]
      :or {max-iterations 1000}}]
  (when observer
    (p/on-workflow-resumed observer workflow-id))
  (run-workflow-internal engine workflow-id workflow-fn args
                         {:observer observer
                          :max-iterations max-iterations}))

(defn send-signal
  "Send a signal to a workflow.

   Arguments:
   - store: IStore implementation
   - workflow-id: Target workflow ID
   - signal-name: Name of the signal
   - payload: Signal payload data

   Options:
   - :signal-id - Custom signal ID for idempotency"
  [store workflow-id signal-name payload & {:keys [signal-id]}]
  (let [id (or signal-id (str (random-uuid)))]
    (p/add-signal store workflow-id signal-name {:id id :payload payload})
    {:signal-id id}))

(defn cancel-workflow
  "Cancel a running workflow.
   The workflow will be cancelled at the next suspension point."
  [store workflow-id]
  (p/mark-cancelled store workflow-id)
  {:cancelled true :workflow-id workflow-id})

(defn get-workflow-history
  "Get the history of a workflow"
  [store workflow-id]
  (p/load-history store workflow-id))

(defn get-workflow-result
  "Get the final result of a completed workflow, or nil if not completed"
  [store workflow-id]
  (let [history (p/load-history store workflow-id)
        completed (->> history
                       (filter #(= (:event-type %) :workflow-completed))
                       first)]
    (when completed
      (:result completed))))

;; ============================================================================
;; Convenience Functions
;; ============================================================================

(defn make-workflow-engine
  "Create a complete workflow engine with all components.
   Returns a map with :store, :executor, :scheduler, :registry, and :observer.

   Options:
   - :threads - Number of executor threads (default: 4)
   - :scheduler-threads - Number of scheduler threads (default: 2)
   - :default-timeout-ms - Default activity timeout (default: 30000)
   - :enable-logging - Enable logging observer (default: false)"
  [& {:keys [threads scheduler-threads default-timeout-ms enable-logging]
      :or {threads 4
           scheduler-threads 2
           default-timeout-ms 30000
           enable-logging false}}]
  (let [registry (a/make-registry)
        log-atom (when enable-logging (atom []))]
    {:store (store/->InMemoryStore (atom {}))
     :executor (runtime/make-vthreads-executor registry
                                       :threads threads
                                       :default-timeout-ms default-timeout-ms)
     :scheduler (runtime/make-scheduler :threads scheduler-threads)
     :registry registry
     :observer (if enable-logging
                 (obs/make-logging-observer log-atom)
                 (obs/noop-observer))
     :log (when enable-logging log-atom)}))

(defn shutdown-engine
  "Shutdown all components of a workflow engine"
  [{:keys [executor scheduler]}]
  (p/shutdown-executor executor)
  (p/shutdown-scheduler scheduler))

(defmacro with-workflow-engine
  "Execute body with a workflow engine, ensuring cleanup.

   Usage:
   (with-workflow-engine [engine {:threads 4}]
     (start-workflow (:store engine) ...))"
  [[binding opts] & body]
  `(let [~binding (make-workflow-engine ~@(mapcat identity opts))]
     (try
       ~@body
       (finally
         (shutdown-engine ~binding)))))
