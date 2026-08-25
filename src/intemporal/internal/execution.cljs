(ns intemporal.internal.execution
  (:require-macros
   [intemporal.internal.context :refer [blet bthen]]
   [intemporal.internal.execution :refer [-notify]]
   [intemporal.internal.logging :as log])
  (:require
   [intemporal.internal.activity :as a]
   [intemporal.internal.context :as ctx]
   [intemporal.internal.error :as error]
   [intemporal.internal.fsm :as fsm]
   [intemporal.internal.execution.common :as common]
   [intemporal.internal.logging :as log]
   [intemporal.observer :as obs]
   [intemporal.protocol :as p]
   [intemporal.internal.clock :as clock]
   [promesa.core :as prom]))

;; ============================================================================
;; Workflow Execution Engine
;; ============================================================================

(defn execute-workflow-fn [workflow-fn args]
  ;; Capture context so async callbacks (from p/let, etc.) can access it
  ;; after the dynamic binding scope has exited
  (let [ctx            (ctx/current-context)
        pending-asyncs (:pending-asyncs ctx)
        pending-events (:pending-events ctx)
        pending-creations (:pending-creations ctx)
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
                        :pending-creations @pending-creations
                        :pending-events @pending-events}))
              (prom/catch (wrap-ctx
                            (fn [e]
                              (cond
                                (error/suspension? e)
                                {:status :suspended
                                 :suspension-type (error/suspension-type e)
                                 :suspension-data (error/suspension-data e)
                                 :pending-asyncs @pending-asyncs
                                 :pending-creations @pending-creations
                                 :pending-events @pending-events}

                                (error/cancelled-exception? e)
                                {:status :cancelled
                                 :pending-creations @pending-creations
                                 :pending-events @pending-events}

                                :else
                                ;; Real failure. Saga rollback happens inside the
                                ;; body (user's catch -> intemporal/compensate); a
                                ;; suspending compensation surfaces above as a
                                ;; suspension so the loop schedules + resumes it.
                                {:status :failed
                                 :error e
                                 :pending-creations @pending-creations
                                 :pending-events @pending-events})))))
          ;; Synchronous result
          {:status :completed
           :result result
           :pending-asyncs @pending-asyncs
           :pending-creations @pending-creations
           :pending-events @pending-events}))
      (catch :default e
        (cond
          (error/suspension? e)
          {:status :suspended
           :suspension-type (error/suspension-type e)
           :suspension-data (error/suspension-data e)
           :pending-asyncs @pending-asyncs
           :pending-creations @pending-creations
           :pending-events @pending-events}

          (error/cancelled-exception? e)
          {:status :cancelled
           :pending-creations @pending-creations
           :pending-events @pending-events}

          :else
          {:status :failed
           :error e
           :pending-creations @pending-creations
           :pending-events @pending-events})))))

(defn run-attempt
  "Run ONE activity attempt and return its durable outcome data as a promise.

   Persistence belongs to the FSM transition that interprets this outcome. The
   reducer commits the scheduling transition before this function is invoked and
   commits the normalized outcome afterward.

   Starts at the attempt after the last one history records (`attempt-state`,
   recovered by `stub`) and resolves to one of:
     {:status :success ...}          -> caller writes :activity-completed
     {:status :failed ...}           -> caller writes :activity-failed (terminal)
     {:status :retry-scheduled ...}  -> nothing terminal; the recorded :retry-at
                                        is when the body may try again"
  [executor activity-name args timeout-ms retry-policy observer workflow-id seq-num
   attempt-state]
  (let [attempt (a/next-attempt attempt-state)
        start   (clock/now-ms)]
    (-notify obs/on-activity-started observer workflow-id seq-num activity-name)
    (log/infof "Executing activity (attempt %d)" attempt)
    (-> (blet [result (p/execute-activity executor activity-name args timeout-ms)
               duration (- (clock/now-ms) start)]
          (-notify obs/on-activity-completed observer workflow-id seq-num activity-name result duration)
          (log/infof "Activity succeeded (attempt %d), result: %s" attempt result)
          {:status   :success
           :result   result
           :duration duration
           :attempts attempt})
        (prom/catch js/Error
          (fn [e]
            (let [duration (- (clock/now-ms) start)
                  error-map (error/throwable->map e)]
              (-notify obs/on-activity-failed observer workflow-id seq-num activity-name error-map duration)
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
              (let [infra?   (a/infrastructure-failure? (:exception exec-result))
                    retry?   (boolean (and retry-policy (not infra?)
                                           (a/should-retry? retry-policy (:exception exec-result) attempt)))
                    retry-at (a/retry-at retry-policy attempt retry?)
                    attempt-event (when-not infra?
                                    (a/attempt-failed-event
                                      seq-num activity-name attempt
                                      (:error exec-result) (:duration exec-result)
                                      retry? retry-at))]
                (if retry?
                  {:status :retry-scheduled :retry-at retry-at :attempts attempt
                   :attempt-event attempt-event}
                  (cond-> {:status   :failed
                           :error    (:error exec-result)
                           :duration (:duration exec-result)
                           :attempts attempt}
                    attempt-event (assoc :attempt-event attempt-event))))))))))

;; ============================================================================
;; Async batches: the engine owns the retry loop
;; ============================================================================
;;
;; The executor used to retry internally, with no store, workflow-id or seq in
;; scope — so an async retry could never be recorded and every crash restarted
;; its count at 1. Now the executor runs each activity exactly once and
;; everything below decides whether to retry, exactly as the sequential path
;; does, using the same `intemporal.internal.activity` helpers.

(defn- async-terminal-failure-events
  "The events that resolve an async handle as failed."
  [{:keys [activity-name activity-seq handle-seq]} error attempt now workflow-id observer]
  (-notify obs/on-async-failed observer workflow-id handle-seq error)
  (log/tracef "Got completion event: activity failed, error: %s" error)
  [{:event-type    :activity-failed
    :seq           activity-seq
    :activity-name activity-name
    :error         error
    :attempts      attempt
    :timestamp     now}
   {:event-type :async-failed
    :seq        handle-seq
    :last-seq   activity-seq
    :error      error
    :timestamp  now}])

(defn- async-completion-events
  "History for one finished async attempt. A retry that is merely SCHEDULED
   writes only the attempt record: no :async-completed / :async-failed, so the
   handle stays pending and `join` keeps parking until the retries resolve."
  [{:keys [activity-name activity-seq handle-seq retry-policy attempt-state] :as async-info}
   result now workflow-id observer drain?]
  (log/with-mdc {:activity activity-name :seqnum activity-seq}
    (if (= :success (:status result))
      (do
        (-notify obs/on-async-completed observer workflow-id handle-seq (:result result))
        (log/tracef "Got completion event: activity succeeded, result: %s" result)
        [{:event-type    :activity-completed
          :seq           activity-seq
          :activity-name activity-name
          :result        (:result result)
          :duration-ms   (:duration result)
          :attempts      (a/next-attempt attempt-state)
          :timestamp     now}
         {:event-type :async-completed
          :seq        handle-seq
          :last-seq   activity-seq
          :result     (:result result)
          :timestamp  now}])
      (let [attempt   (a/next-attempt attempt-state)
            error     (:error result)
            ;; Classify from the LIVE exception the executor hands back, not from
            ;; the serialized map: a user :retryable-fn is written against an
            ;; exception and would silently answer false for a map, so async
            ;; activities would never retry.
            exception (:exception result)
            infra?    (a/infrastructure-failure? exception)
            retry?    (boolean (and retry-policy (not infra?) (not drain?)
                                    (a/should-retry? retry-policy exception attempt)))
            retry-at  (a/retry-at retry-policy attempt retry?)]
        (cond
          retry?
          (do
            (log/infof "Async activity failed (attempt %d); retrying at %s" attempt retry-at)
            [(a/attempt-failed-event activity-seq activity-name attempt
                                     error (:duration result) true retry-at)])

          ;; Infrastructure failures consume no budget: `async` re-enqueues them
          ;; from the :activity-failed kind, so record no attempt.
          infra?
          (async-terminal-failure-events async-info error attempt now workflow-id observer)

          :else
          (into [(a/attempt-failed-event activity-seq activity-name attempt
                                         error (:duration result) false nil)]
                (async-terminal-failure-events async-info error attempt now workflow-id observer)))))))

(defn- spent-budget-events
  "Resolve an async whose recorded attempt was granted no retry but whose outcome
   never got written (a crash in between). Re-running it would spend an attempt
   the policy never granted — the same guard the sequential path applies."
  [{:keys [attempt-state] :as async-info} now workflow-id observer]
  (log/infof "Async retry budget already spent after %d attempt(s); failing from recorded attempt"
             (:attempts attempt-state))
  (async-terminal-failure-events async-info (:error attempt-state) (:attempts attempt-state)
                                 now workflow-id observer))

(defn- replay-once
  [{:keys [store registry protocols owner-id]} workflow-id workflow-fn args observer]
  (let [snapshot (p/load-snapshot store workflow-id)
        history  (:history snapshot)
        context  (common/make-workflow-context workflow-id history registry observer
                                              {:protocols @protocols
                                               :now-ms (clock/now-ms)
                                               :owner-id owner-id
                                               :cancel-requested? (:cancel-requested? snapshot)})]
    (binding [ctx/*workflow-context* context]
      (-> (execute-workflow-fn workflow-fn args)
          (prom/then #(assoc % :snapshot snapshot))))))

(declare deliver-terminal-emissions!)

(defn- deliver-plan-emissions!
  [observer workflow-id emissions]
  (doseq [{:keys [event seq signal-name payload status retry-at suspension-type]} emissions]
    (case event
      :timer-fired (do
                     (-notify obs/on-timer-fired observer workflow-id seq)
                     nil)
      :signal-received (do
                         (-notify obs/on-signal-received observer workflow-id signal-name payload)
                         nil)
      :workflow-suspended (do
                            (-notify obs/on-workflow-suspended observer workflow-id suspension-type)
                            nil)
      :workflow-resumed (do
                          (-notify obs/on-workflow-resumed observer workflow-id)
                          nil)
      :workflow-terminal (do
                           (deliver-terminal-emissions! observer workflow-id status payload)
                           nil)
      :retry-parked (do
                      (-notify obs/on-timer-scheduled observer workflow-id seq retry-at)
                      nil)
      nil)))

(defn- deliver-terminal-emissions!
  [observer workflow-id status payload]
  (case status
    :completed (-notify obs/on-workflow-completed observer workflow-id payload)
    :cancelled (-notify obs/on-workflow-cancelled observer workflow-id)
    :failed    (-notify obs/on-workflow-failed observer workflow-id payload)
    nil))

(defn- commit-terminal-plan!
  "Commit one pure terminal plan after loading its revision-checked close tree."
  [{:keys [store owner-id]} workflow-id snapshot status pending-events payload observer]
  (let [snapshot (or snapshot (p/load-snapshot store workflow-id))
        tree     (p/load-close-tree store workflow-id)
        plan     (fsm/terminal-plan {:workflow-id workflow-id :owner-id owner-id}
                                    snapshot tree (clock/now-ms) status
                                    pending-events payload)
        {:keys [commit-status state]} (p/commit-transition! store (:transition plan))]
    (cond
      (= :committed commit-status)
      (do
        (deliver-terminal-emissions! observer workflow-id status payload)
        (:result plan))

      (= :terminal commit-status)
      {:status (:status state) :workflow-id workflow-id}

      :else
      {:status :interrupted :workflow-id workflow-id})))

(defn- replay-plan
  "Normalize one replay pass into a pure FSM plan; nil is an invalid outcome."
  [machine exec-result]
  (let [snapshot (:snapshot exec-result)
        terminal (fn [status payload]
                   {:status :returned
                    :plan {:kind :terminal
                           :result (cond-> {:status status
                                            :workflow-id (:workflow-id machine)}
                                     (= :completed status) (assoc :result payload)
                                     (not= :completed status) (assoc :error payload))
                           :terminal-input {:snapshot snapshot
                                            :now-ms (clock/now-ms)
                                            :status status
                                            :pending-events (:pending-events exec-result)
                                            :payload payload}}})]
    (cond
      (seq (:pending-creations exec-result))
      {:status :returned
       :plan {:kind :continue
              :transition {:workflow-id (:workflow-id machine)
                           :owner-id (:owner-id machine)
                           :kind :continue
                           :events (:pending-events exec-result)
                           :create-workflows (:pending-creations exec-result)}}}

      (seq (:pending-asyncs exec-result))
      (let [pending (:pending-asyncs exec-result)
            {spent true eligible false}
            (group-by #(a/retry-budget-spent? (:attempt-state %)) pending)
            drain? (= :completed (:status exec-result))
            runnable (vec (if drain? eligible (common/due-asyncs eligible)))]
        (if (seq (concat spent runnable))
          {:status :returned
           :plan {:kind :effect
                  :pre-transition {:workflow-id (:workflow-id machine)
                                   :owner-id (:owner-id machine)
                                   :kind :continue
                                   :events (:pending-events exec-result)}
                  :effect {:kind :async
                           :pending-asyncs pending
                           :drain? drain?}}}
          (when (= :suspended (:status exec-result))
            (when-let [plan (fsm/suspension-plan
                              (select-keys machine [:workflow-id :owner-id]) snapshot
                              (clock/now-ms) (:suspension-type exec-result)
                              (:suspension-data exec-result) (:pending-events exec-result))]
              {:status :suspended
               :plan (if (and (= :park (:kind plan))
                              (= :async (:reason plan)))
                       (assoc-in plan [:transition :next-run-at]
                                 (common/earliest-async-retry pending))
                       plan)}))))

      (= :completed (:status exec-result))
      (terminal :completed (:result exec-result))

      (= :cancelled (:status exec-result))
      (terminal :cancelled {:type "cljs.core/ExceptionInfo"
                            :message "Workflow cancelled"
                            :data {:workflow-id (:workflow-id machine)}})

      (= :failed (:status exec-result))
      (terminal :failed (error/throwable->map (:error exec-result)))

      (= :suspended (:status exec-result))
      (when-let [plan (fsm/suspension-plan
                        (select-keys machine [:workflow-id :owner-id]) snapshot
                        (clock/now-ms) (:suspension-type exec-result)
                        (:suspension-data exec-result) (:pending-events exec-result))]
        {:status :suspended :plan plan})

      :else nil)))

(defn- execute-fsm-activity!
  "Interpret one async activity effect after its pre-effect transition."
  [{:keys [executor owner-id]} workflow-id {:keys [effect wake-version]} observer]
  (let [{:keys [seq activity-name args timeout-ms retry-policy attempt-state]}
        (:suspension effect)
        base {:workflow-id workflow-id :owner-id owner-id}]
    (-> (run-attempt executor activity-name args timeout-ms retry-policy
                     observer workflow-id seq attempt-state)
        (prom/then
          (fn [outcome]
            (if (= :retry-scheduled (:status outcome))
              {:retry-plan {:kind :park
                            :result {:status :parked :reason :retry
                                     :workflow-id workflow-id}
                            :transition (assoc base
                                               :kind :park
                                               :expected-wake-version wake-version
                                               :next-run-at (:retry-at outcome)
                                               :events [(:attempt-event outcome)])}}
              (let [success? (= :success (:status outcome))
                    event (cond-> {:event-type (if success?
                                                :activity-completed
                                                :activity-failed)
                                   :seq seq
                                   :activity-name activity-name
                                   :result (:result outcome)
                                   :duration-ms (:duration outcome)
                                   :attempts (:attempts outcome)
                                   :timestamp (clock/now-ms)}
                            success? (assoc :result (:result outcome))
                            (not success?) (assoc :error (:error outcome)))
                    events (cond-> []
                             (:attempt-event outcome) (conj (:attempt-event outcome))
                             true (conj event))]
                {:transition (assoc base :kind :continue :events events)})))))))

(defn- execute-fsm-async!
  "Run one eligible async batch and return its post-effect transition promise."
  [{:keys [executor owner-id]} workflow-id {:keys [effect]} observer]
  (let [{:keys [pending-asyncs drain?]} effect
        {spent true eligible false}
        (group-by #(a/retry-budget-spent? (:attempt-state %)) pending-asyncs)
        runnable (vec (if drain? eligible (common/due-asyncs eligible)))
        now (clock/now-ms)
        spent-events (mapcat #(spent-budget-events % now workflow-id observer) spent)
        finish (fn [events]
                 {:transition {:workflow-id workflow-id
                               :owner-id owner-id
                               :kind :continue
                               :events (vec (concat spent-events events))}})]
    (if (seq runnable)
      (-> (p/execute-activities-parallel executor runnable)
          (prom/then
            (fn [results]
              (finish (mapcat #(async-completion-events %1 %2 now workflow-id observer drain?)
                              runnable results)))))
      (prom/resolved (finish [])))))

(defn- drive-fsm-pure!
  "Promise interpreter for one reducer-owned workflow drive."
  [{:keys [store] :as engine} workflow-id workflow-fn args
   {:keys [observer max-iterations wake-version]
    :or {max-iterations 1000}}]
  (letfn [(interpret [response]
            (let [{:keys [machine command emissions]} response]
              (if (>= (:iterations machine) max-iterations)
                (do
                  (log/warnf "Workflow %s exceeded replay budget of %d iterations"
                             workflow-id max-iterations)
                  (prom/resolved
                    (commit-terminal-plan!
                      engine workflow-id (p/load-snapshot store workflow-id) :failed []
                      (error/throwable->map
                        (ex-info "Replay budget exceeded"
                                 {:workflow-id workflow-id
                                  :iterations (:iterations machine)}))
                      observer)))
                (case (:op command)
                  :load-snapshot
                  (interpret (fsm/step machine {:type :snapshot-loaded
                                                :snapshot (p/load-snapshot store workflow-id)}))

                  :invoke-replay
                  (-> (replay-once engine workflow-id workflow-fn args observer)
                      (prom/then
                        (fn [exec-result]
                          (if-let [replay (replay-plan machine exec-result)]
                            (interpret (fsm/step machine
                                                 {:type :replay-returned :replay replay}))
                            (prom/rejected
                              (ex-info "Replay produced an unsupported FSM outcome"
                                       {:workflow-id workflow-id
                                        :execution-status (:status exec-result)
                                        :suspension-type (:suspension-type exec-result)}))))))

                  :commit-transition
                  (let [result (p/commit-transition! store (:transition command))]
                    (when (= :committed (:commit-status result))
                      (deliver-plan-emissions! observer workflow-id emissions))
                    (interpret (fsm/step machine {:type :commit-result :result result})))

                  :execute-activity
                  (-> (execute-fsm-activity! engine workflow-id command observer)
                      (prom/then
                        (fn [outcome]
                          (interpret (fsm/step machine
                                               {:type :effect-result
                                                :result outcome})))))

                  :execute-async
                  (-> (execute-fsm-async! engine workflow-id command observer)
                      (prom/then
                        (fn [outcome]
                          (interpret (fsm/step machine
                                               {:type :effect-result
                                                :result outcome})))))

                  :load-close-tree
                  (interpret (fsm/step machine {:type :close-tree-loaded
                                                :tree (p/load-close-tree store workflow-id)}))

                  :return
                  (prom/resolved (:value command))

                  (prom/rejected (ex-info "Unknown FSM interpreter command"
                                          {:command command}))))))]
    (interpret (fsm/step (fsm/start {:workflow-id workflow-id
                                     :owner-id (:owner-id engine)
                                     :wake-version wake-version})
                         {:type :begin}))))

(defn drive-fsm!
  "Run one workflow drive through the reducer and its effect interpreter."
  [engine workflow-id workflow-fn args opts]
  (drive-fsm-pure! engine workflow-id workflow-fn args opts))
