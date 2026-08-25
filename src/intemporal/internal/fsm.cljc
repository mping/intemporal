(ns intemporal.internal.fsm
  "The pure control plane for a claimed workflow drive.

  This namespace deliberately has no dependency on the store, runtime, clock,
  workflow registry, observer, or platform APIs.  `step` is a reducer: callers
  provide an input value and interpret the one returned command before feeding
  its normalized result back to the reducer.  Keeping that boundary explicit is
  what lets the JVM and CLJS interpreters share workflow lifecycle semantics.

  The replay adapter supplies a `:plan` for suspensions and effect outcomes.
  Plans contain only data, notably the exact transition that must be committed;
  they never contain functions or live resources.  This lets the FSM enforce
  ordering (snapshot -> replay -> pre-effect commit -> effect -> outcome
  commit) without duplicating the workflow DSL in the reducer.")

(def terminal-statuses #{:completed :failed :cancelled :terminated})

(defn terminal-status?
  [status]
  (contains? terminal-statuses status))

(defn- history-event
  [history event-type seq]
  (some #(when (and (= event-type (:event-type %)) (= seq (:seq %))) %) history))

(defn- signal-envelope
  [snapshot signal-name]
  (first (get-in snapshot [:signals signal-name])))

(defn- consume-descriptor
  [signal-name envelope]
  {:signal-name signal-name
   :queue-id (:queue-id envelope)
   :signal-id (or (:signal-id envelope) (:id envelope))})

(defn- signal-payload
  [envelope]
  (if (contains? envelope :payload) (:payload envelope) envelope))

(defn suspension-plan
  "Return the snapshot-only plan for a non-effect suspension, or nil.

   Timers, signals, and joins need no executor call.  Keeping their decision in
   the reducer layer means the interpreter merely commits the returned
   transition; it never peeks at a live inbox or history after replay. Activity
   suspensions emit an effect description; async batching is planned from the
   replay snapshot by the shared adapter before the next reducer step.

   `claim` supplies :workflow-id and :owner-id, `snapshot` is the exact replay
   snapshot, and `now-ms` is interpreter input.  The return includes optional
   best-effort observer emissions, which callers deliver only after a successful
   commit."
  [{:keys [workflow-id owner-id]} snapshot now-ms suspension-type
   suspension-data pending-events]
  (let [base {:workflow-id workflow-id
              :owner-id owner-id
              :events (vec pending-events)}
        park (fn [reason next-run-at]
               {:kind :park
                :reason reason
                :transition (assoc base
                                   :kind :park
                                   :expected-wake-version (:wake-version snapshot)
                                   :next-run-at next-run-at)})
        continue (fn
                   ([events] {:kind :continue
                              :transition (assoc base :kind :continue :events (vec events))})
                   ([events consumes] {:kind :continue
                                       :transition (assoc base :kind :continue
                                                          :events (vec events)
                                                          :consume-signals consumes)}))
        plan (case suspension-type
      :timer
      (let [{:keys [seq fire-at]} suspension-data]
        (if (>= now-ms fire-at)
          (assoc (continue (conj (vec pending-events)
                                 {:event-type :timer-fired :seq seq :timestamp now-ms}))
                 :emissions [{:event :timer-fired :seq seq}])
          (park :timer fire-at)))

      :wait-signal
      (let [{:keys [seq signal-name]} suspension-data]
        (if-let [envelope (signal-envelope snapshot signal-name)]
          (assoc (continue
                   (conj (vec pending-events)
                         {:event-type :signal-received
                          :seq seq
                          :signal-name signal-name
                          :signal-id (or (:signal-id envelope) (:id envelope))
                          :payload (signal-payload envelope)
                          :timestamp now-ms})
                   [(consume-descriptor signal-name envelope)])
                 :emissions [{:event :signal-received
                              :signal-name signal-name
                              :payload (signal-payload envelope)}])
          (park :signal nil)))

      :wait-signal-timeout
      (let [{:keys [seq signal-name deadline]} suspension-data]
        (if-let [envelope (signal-envelope snapshot signal-name)]
          (assoc (continue
                   (conj (vec pending-events)
                         {:event-type :signal-wait-completed
                          :seq seq
                          :received true
                          :signal-name signal-name
                          :payload (signal-payload envelope)
                          :timestamp now-ms})
                   [(consume-descriptor signal-name envelope)])
                 :emissions [{:event :signal-received
                              :signal-name signal-name
                              :payload (signal-payload envelope)}])
          (if (>= now-ms deadline)
            (continue (conj (vec pending-events)
                            {:event-type :signal-wait-completed
                             :seq seq
                             :received false
                             :signal-name signal-name
                             :timestamp now-ms}))
            (park :signal-timeout deadline))))

      :join-pending
      (let [{:keys [handle-seq]} suspension-data
            history (:history snapshot)]
        (if (or (history-event history :async-completed handle-seq)
                (history-event history :async-failed handle-seq))
          (continue pending-events)
          (park :async nil)))

      :join-any-pending
      (let [{:keys [handle-seqs]} suspension-data
            history (:history snapshot)]
        (if (or (some #(history-event history :async-completed %) handle-seqs)
                (every? #(history-event history :async-failed %) handle-seqs))
          (continue pending-events)
          (park :async nil)))

      :activity
      (let [{:keys [seq activity-name attempt-state]} suspension-data
            retry-at (:retry-at attempt-state)]
        (cond
          ;; A recorded retry deadline owns the suspension until it is due.
          (and (:will-retry attempt-state) (> retry-at now-ms))
          (park :retry retry-at)

          ;; The last durable attempt declined a further retry. Reconstruct the
          ;; activity failure without executing user code again.
          (and attempt-state (not (:will-retry attempt-state)))
          (continue
            (conj (vec pending-events)
                  {:event-type :activity-failed
                   :seq seq
                   :activity-name activity-name
                   :error (:error attempt-state)
                   :attempts (:attempts attempt-state)
                   :timestamp now-ms}))

          :else
          {:kind :effect
           :pre-transition (assoc base :kind :continue)
           :effect {:kind :activity
                    :suspension suspension-data}}))

      nil)]
    (cond-> plan
      plan (update :emissions (fnil conj [])
                   {:event :workflow-suspended :suspension-type suspension-type})
      (= :continue (:kind plan))
      (update :emissions (fnil conj []) {:event :workflow-resumed}))))

(defn- terminal-event
  [status seq now-ms payload]
  (cond-> {:event-type (case status
                        :completed :workflow-completed
                        :failed :workflow-failed
                        :cancelled :workflow-cancelled)
           :seq seq
           :timestamp now-ms}
    (= :completed status) (assoc :result payload)
    (not= :completed status) (assoc :error payload)))

(defn- parent-notification
  [snapshot status workflow-id now-ms payload]
  (when-let [{parent-id :workflow-id parent-seq :seq} (:parent snapshot)]
    {:workflow-id parent-id
     :events [(cond-> {:event-type (if (= :completed status)
                                     :child-workflow-completed
                                     :child-workflow-failed)
                       :seq parent-seq
                       :child-workflow-id workflow-id
                       :timestamp now-ms}
                (= :completed status) (assoc :result payload)
                (not= :completed status) (assoc :error payload))
              (cond-> {:event-type (if (= :completed status)
                                     :async-completed
                                     :async-failed)
                       :seq parent-seq
                       :last-seq parent-seq
                       :timestamp now-ms}
                (= :completed status) (assoc :result payload)
                (not= :completed status) (assoc :error payload))]}))

(defn- close-actions
  "Select the complete non-abandoned descendant closure for a root terminal.

   The returned action ordering is deterministic preorder from the close tree.
   Every visited, active descendant contributes its revision, so one commit can
   reject any concurrently changed relationship or child state before exposing
   the root terminal event."
  [tree now-ms]
  (letfn [(walk [node]
            (mapcat
              (fn [child]
                (let [{:keys [workflow-id status policy next-terminal-seq revision]} child]
                  (cond
                    (= :abandon policy) []
                    (terminal-status? status) []
                    :else
                    (let [action (case policy
                                   :cascade-cancel
                                   {:op :cancel :workflow-id workflow-id}

                                   :terminate
                                   {:op :terminate
                                    :workflow-id workflow-id
                                    :terminal-status :terminated
                                    :events [{:event-type :workflow-terminated
                                              :seq next-terminal-seq
                                              :workflow-id workflow-id
                                              :timestamp now-ms}]}

                                   ;; The store creation contract validates this
                                   ;; policy. Treat a malformed tree as a no-op
                                   ;; rather than accidentally cascading it.
                                   nil)]
                      (if action
                        (into [(assoc action :revision revision)] (walk child))
                        [])))))
              (:children node)))]
    (vec (walk tree))))

(defn terminal-plan
  "Build the complete atomic terminal transition from immutable snapshots.

   `tree` comes from `IFsmStore/load-close-tree`; no store or clock is read
   here.  The caller passes a serialized `payload` (result for completion,
   error map otherwise).  The plan carries observer-independent close actions;
   interpreters can finish spans or send notifications only after its commit.
   "
  [{:keys [workflow-id owner-id]} snapshot tree now-ms status pending-events payload]
  (let [actions (close-actions tree now-ms)
        revisions (into {workflow-id (:revision tree)}
                        (map (juxt :workflow-id :revision) actions))]
    {:kind :terminal
     :result (cond-> {:status status :workflow-id workflow-id}
               (= :completed status) (assoc :result payload)
               (not= :completed status) (assoc :error payload))
     :emissions [{:event :workflow-terminal
                  :status status
                  :workflow-id workflow-id
                  :payload payload
                  :close-actions (mapv #(dissoc % :revision) actions)}]
     :close-actions (mapv #(dissoc % :revision) actions)
     :transition (cond-> {:workflow-id workflow-id
                           :owner-id owner-id
                           :kind :terminal
                           :events (conj (vec pending-events)
                                         (terminal-event status (:next-terminal-seq tree)
                                                         now-ms payload))
                           :terminal-status status
                           :expected-related-revisions revisions
                           :close-actions (mapv #(dissoc % :revision) actions)}
                    (parent-notification snapshot status workflow-id now-ms payload)
                    (assoc :parent-notification
                           (parent-notification snapshot status workflow-id now-ms payload)))}))

(defn start
  "Create a machine for one claim. `claim` must include :workflow-id,
  :owner-id, and the wake-version observed by the claim operation.  No command
  is emitted until `(step machine {:type :begin})`, which makes construction
  side-effect free and convenient to test."
  [{:keys [workflow-id owner-id wake-version] :as claim}]
  (when-not (and workflow-id owner-id (number? wake-version))
    (throw (ex-info "An FSM claim requires workflow-id, owner-id, and wake-version"
                    {:claim claim})))
  {:phase :load-snapshot
   :workflow-id workflow-id
   :owner-id owner-id
   :wake-version wake-version
   :claim claim
   :iterations 0})

(defn done?
  "True when the FSM has produced its final drive result."
  [machine]
  (= :done (:phase machine)))

(defn- response
  ([machine command] (response machine command []))
  ([machine command emissions]
   {:machine machine :command command :emissions (vec emissions)}))

(defn- reload
  [machine]
  (response (assoc machine :phase :load-snapshot)
            {:op :load-snapshot :workflow-id (:workflow-id machine)}))

(defn- finish
  [machine value]
  (response (assoc machine :phase :done :result value)
            {:op :return :value value}))

(defn- replay-command
  [machine snapshot]
  (response (assoc machine :phase :replay :snapshot snapshot)
            {:op :invoke-replay
             :workflow-id (:workflow-id machine)
             :snapshot snapshot}))

(defn- commit-command
  ([machine phase transition]
   (commit-command machine phase transition []))
  ([machine phase transition emissions]
   (response (assoc machine :phase phase :transition transition)
             {:op :commit-transition
              :transition transition}
             emissions)))

(defn- terminal-close-tree-command
  [machine transition result]
  (response (assoc machine
                   :phase :load-close-tree
                   :terminal-transition transition
                   :terminal-result result)
            {:op :load-close-tree :workflow-id (:workflow-id machine)}))

(defn- effect-command
  [machine effect]
  (let [op (case (:kind effect)
             :activity :execute-activity
             :async :execute-async
             (throw (ex-info "Unknown FSM effect" {:effect effect})))]
    (response (assoc machine :phase :effect :effect effect)
              {:op op
               :workflow-id (:workflow-id machine)
               :effect effect
               :wake-version (:effect-wake-version machine)})))

(defn- conflict?
  [result]
  (contains? #{:wake-raced :conflict} (:commit-status result)))

(defn- interrupted-result
  [machine]
  {:status :interrupted :workflow-id (:workflow-id machine)})

(defn- commit-interrupted?
  [result]
  (contains? #{:not-owner :not-running :terminal} (:commit-status result)))

(defn- run-plan
  "Advance a normalized replay plan.  The adapter uses the following shapes:

    {:kind :continue :transition transition}
    {:kind :park :transition transition :result result}
    {:kind :effect :effect effect :pre-transition transition}
    {:kind :terminal :transition transition :result result}
    {:kind :return :result result}

  `transition` is exactly the IFsmStore `commit-transition!` input.  The FSM
  only selects ordering and retry-on-conflict behavior; backend details remain
  data in the transition."
  [machine plan]
  (case (:kind plan)
    :continue
    (commit-command machine :commit-continue (:transition plan) (:emissions plan))

    :park
    (commit-command (assoc machine :park-result (:result plan))
                    :commit-park (:transition plan) (:emissions plan))

    :effect
    (commit-command (assoc machine :next-effect (:effect plan))
                    :commit-pre-effect (:pre-transition plan) (:emissions plan))

    :terminal
    (if-let [terminal-input (:terminal-input plan)]
      (response (assoc machine
                       :phase :load-close-tree
                       :terminal-input terminal-input
                       :terminal-result (:result plan))
                {:op :load-close-tree :workflow-id (:workflow-id machine)})
      (terminal-close-tree-command machine (:transition plan) (:result plan)))

    :return
    (finish machine (:result plan))

    (throw (ex-info "Unknown replay plan" {:plan plan}))))

(defn step
  "Reduce `machine` with one normalized interpreter input.

  Commands emitted by this function are data.  In particular, a command never
  closes over a store, executor, workflow function, current time, or observer.
  The interpreter supplies those capabilities and sends its result back as one
  of the documented `:type` values below.

  A transition conflict or wake race always reloads the snapshot and replans.
  Infrastructure failures are normalized by the interpreter as `:interrupted`,
  which returns the claim to the scheduler instead of terminally failing user
  workflow code."
  [machine {:keys [type] :as input}]
  (when-not (map? machine)
    (throw (ex-info "FSM machine must be a map" {:machine machine})))
  (case (:phase machine)
    :load-snapshot
    (case type
      :begin
      (response machine {:op :load-snapshot :workflow-id (:workflow-id machine)})

      :snapshot-loaded
      (let [snapshot (:snapshot input)]
        (cond
          (nil? snapshot)
          (finish machine {:status :not-found :workflow-id (:workflow-id machine)})

          (terminal-status? (:status snapshot))
          (finish machine {:status (:status snapshot)
                           :workflow-id (:workflow-id machine)
                           :snapshot snapshot})

          :else
          (replay-command (assoc machine :wake-version (:wake-version snapshot))
                          snapshot)))

      :shutdown
      (finish machine (interrupted-result machine))

      (throw (ex-info "Unexpected FSM input while loading snapshot"
                      {:phase (:phase machine) :input input})))

    :replay
    (case type
      :replay-returned
      (let [{:keys [status plan] :as replay} (:replay input)]
        (case status
          :completed (run-plan machine plan)
          :cancelled (run-plan machine plan)
          :failed    (run-plan machine plan)
          :suspended (run-plan machine plan)
          :returned  (run-plan machine plan)
          (throw (ex-info "Unknown replay result" {:replay replay}))))

      :shutdown
      (finish machine (interrupted-result machine))

      (throw (ex-info "Unexpected FSM input while replaying"
                      {:phase (:phase machine) :input input})))

    :commit-continue
    (case type
      :commit-result
      (let [result (:result input)]
        (cond
          (= :committed (:commit-status result))
          (replay-command (update machine :iterations inc) (:snapshot machine))

          (conflict? result) (reload machine)
          (commit-interrupted? result) (finish machine (interrupted-result machine))
          :else (throw (ex-info "Unknown FSM commit result" {:result result}))))

      :shutdown (finish machine (interrupted-result machine))
      (throw (ex-info "Unexpected FSM input while continuing" {:input input})))

    :commit-park
    (case type
      :commit-result
      (let [result (:result input)]
        (cond
          (= :committed (:commit-status result))
          (finish machine (or (:park-result machine)
                              {:status :parked :workflow-id (:workflow-id machine)}))

          (conflict? result) (reload machine)
          (commit-interrupted? result) (finish machine (interrupted-result machine))
          :else (throw (ex-info "Unknown FSM park result" {:result result}))))

      :shutdown (finish machine (interrupted-result machine))
      (throw (ex-info "Unexpected FSM input while parking" {:input input})))

    :commit-pre-effect
    (case type
      :commit-result
      (let [result (:result input)]
        (cond
          (= :committed (:commit-status result))
          (effect-command (assoc machine :effect-wake-version
                                 (get-in result [:state :wake-version]))
                          (:next-effect machine))

          (conflict? result) (reload machine)
          (commit-interrupted? result) (finish machine (interrupted-result machine))
          :else (throw (ex-info "Unknown FSM pre-effect result" {:result result}))))

      :shutdown (finish machine (interrupted-result machine))
      (throw (ex-info "Unexpected FSM input before effect" {:input input})))

    :effect
    (case type
      :effect-result
      (let [{:keys [transition retry-plan]} (:result input)]
        (cond
          transition (commit-command machine :commit-effect transition)
          retry-plan (run-plan machine retry-plan)
          :else (throw (ex-info "Effect result needs transition or retry-plan"
                               {:result (:result input)}))))

      :interrupted
      (finish machine (interrupted-result machine))

      :shutdown
      (finish machine (interrupted-result machine))

      (throw (ex-info "Unexpected FSM input while executing effect" {:input input})))

    :commit-effect
    (case type
      :commit-result
      (let [result (:result input)]
        (cond
          (= :committed (:commit-status result))
          (replay-command (update machine :iterations inc) (:snapshot machine))

          (conflict? result) (reload machine)
          (commit-interrupted? result) (finish machine (interrupted-result machine))
          :else (throw (ex-info "Unknown FSM effect result" {:result result}))))

      :shutdown (finish machine (interrupted-result machine))
      (throw (ex-info "Unexpected FSM input after effect" {:input input})))

    :load-close-tree
    (case type
      :close-tree-loaded
      (if-let [{:keys [snapshot now-ms status pending-events payload]}
               (:terminal-input machine)]
        (let [plan (terminal-plan (select-keys machine [:workflow-id :owner-id])
                                  snapshot (:tree input) now-ms status
                                  pending-events payload)]
          (commit-command (assoc machine :terminal-plan plan)
                          :commit-terminal (:transition plan) (:emissions plan)))
        (let [transition (merge (:terminal-transition machine)
                                {:close-actions (:close-actions input)
                                 :expected-related-revisions
                                 (:expected-related-revisions input)})]
          (commit-command machine :commit-terminal transition)))

      :shutdown (finish machine (interrupted-result machine))
      (throw (ex-info "Unexpected FSM input while loading close tree" {:input input})))

    :commit-terminal
    (case type
      :commit-result
      (let [result (:result input)]
        (cond
          (= :committed (:commit-status result))
          (finish machine (:terminal-result machine))

          (conflict? result) (reload machine)
          (commit-interrupted? result) (finish machine (interrupted-result machine))
          :else (throw (ex-info "Unknown FSM terminal result" {:result result}))))

      :shutdown (finish machine (interrupted-result machine))
      (throw (ex-info "Unexpected FSM input while terminally committing" {:input input})))

    :done
    (response machine {:op :return :value (:result machine)})

    (throw (ex-info "Unknown FSM phase" {:machine machine :input input}))))
