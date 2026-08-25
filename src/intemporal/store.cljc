(ns intemporal.store
  (:require
   [intemporal.internal.domain :as domain]
   [intemporal.protocol :as p]
   [intemporal.store.cache :as cache]
   [intemporal.store.checked :as checked]))

(defn- normalize-workflow
  "Keep terminal scheduling fields aligned with terminal public status."
  [wf]
  (when wf
    (cond-> (merge {:history []
                    :signals {}
                    :status :running
                    :run-state :runnable
                    :next-run-at nil
                    :wake-version 0
                    :revision 0
                    :history-revision 0
                    :next-signal-id 0}
                   wf)
      (domain/terminal-status? (:status wf))
      (assoc :run-state :terminal :next-run-at nil))))

(declare append-workflow-events)

(defn- new-workflow
  ([] (new-workflow nil))
  ([started-event]
   (cond-> {:history []
            :signals {}
            :status :running
            :run-state :runnable
            :next-run-at nil
            :wake-version 0
            :revision 0
            :history-revision 0
            :next-signal-id 0}
     started-event (append-workflow-events [started-event]))))

(defn- append-workflow-events
  [wf events]
  (let [wf   (or (normalize-workflow wf) (new-workflow))
        seen (into #{} (map domain/event-identity) (:history wf))
        events (second
                 (reduce (fn [[ids accepted] event]
                           (let [identity (domain/event-identity event)]
                             (if (contains? ids identity)
                               [ids accepted]
                               [(conj ids identity) (conj accepted event)])))
                         [seen []]
                         events))
        appended? (seq events)
        wf'  (cond-> (update wf :history (fnil into []) events)
               appended? (update :revision inc)
               appended? (update :history-revision inc))
        term (domain/terminal-status-in events)]
    (if term
      (assoc wf' :status term :run-state :terminal :next-run-at nil)
      wf')))

(defn- workflow-state
  [workflow-id wf]
  (when-let [wf (normalize-workflow wf)]
    {:workflow-id workflow-id
     :owner-id (:owner wf)
     ;; Cancellation is a request until the replay adapter commits a terminal
     ;; :workflow-cancelled event.  The FSM must therefore see :running here and
     ;; consult :cancel-requested? separately; presenting it as :cancelled would
     ;; make a newly requested cancellation look terminal and skip compensation.
     :status (:status wf)
     :run-state (:run-state wf)
     :next-run-at (:next-run-at wf)
     :revision (:revision wf)
     :history-revision (:history-revision wf)
     :wake-version (:wake-version wf)
     :cancel-requested? (boolean (:cancelled wf))
     :parent (:parent wf)
     :signals (:signals wf)}))

(defn- wake-workflow-state
  [wf]
  (let [wf (normalize-workflow wf)]
    (if (or (nil? wf) (domain/terminal-status? (:status wf)))
      wf
      (cond-> (-> wf
                  (update :wake-version inc)
                  (update :revision inc))
        (= :waiting (:run-state wf))
        (assoc :run-state :runnable :next-run-at nil)))))

(defn- runnable-or-due?
  [wf now-ms]
  (or (= :runnable (:run-state wf))
      (and (= :waiting (:run-state wf))
           (some? (:next-run-at wf))
           (<= (:next-run-at wf) now-ms))))

(defn- claimable-ids
  [workflows owner-id limit now-ms]
  (->> workflows
       (keep (fn [[workflow-id raw-wf]]
               (let [wf (normalize-workflow raw-wf)]
                 (when (and (seq (:history wf))
                            (not (domain/terminal-status? (:status wf)))
                            (runnable-or-due? wf now-ms)
                            (or (nil? (:owner wf)) (= owner-id (:owner wf))))
                   [workflow-id wf]))))
       (sort-by (fn [[workflow-id wf]]
                  [(if (= owner-id (:owner wf)) 0 1)
                   (or (:next-run-at wf)
                       (:timestamp (first (:history wf)))
                       0)
                   workflow-id]))
       (take limit)
       vec))

(defn- next-terminal-seq [wf]
  (inc (reduce max -1 (map :seq (:history (normalize-workflow wf))))))

(defn- signal-match?
  [envelope {:keys [queue-id signal-id]}]
  (and (= queue-id (:queue-id envelope))
       (= signal-id (:signal-id envelope))))

(defn- consumable-signals?
  [wf consumes]
  (every?
    (fn [{:keys [signal-name] :as consume}]
      (signal-match? (first (get-in wf [:signals signal-name])) consume))
    consumes))

(defn- consume-signal-envelopes
  [wf consumes]
  (reduce (fn [wf {:keys [signal-name]}]
            (update-in wf [:signals signal-name] (comp vec rest)))
          wf
          consumes))

(defn- matching-started-event?
  "Creation idempotency deliberately ignores generated observability fields.
  Repeating `submit-workflow` with the same ID must not conflict merely because
  its timestamp or trace context differs; workflow identity is the replay
  function, arguments, deterministic start sequence, and parent linkage."
  [existing requested]
  (= (select-keys existing [:event-type :seq :workflow-id :workflow-fn-name
                            :args :max-iterations :parent-id :parent-seq])
     (select-keys requested [:event-type :seq :workflow-id :workflow-fn-name
                             :args :max-iterations :parent-id :parent-seq])))

(defn- matching-creation?
  [wf {:keys [started-event parent]}]
  (let [history (:history (normalize-workflow wf))]
    (and (= 1 (count history))
         (matching-started-event? (first history) started-event)
         (= parent (:parent wf)))))

(defn- valid-related-revisions?
  [workflows expected]
  (every? (fn [[workflow-id revision]]
            (= revision (get-in (normalize-workflow (get workflows workflow-id))
                                [:revision])))
          expected))

(defn- transition-status
  [workflows {:keys [workflow-id owner-id kind expected-wake-version
                     consume-signals create-workflows
                     expected-related-revisions]}]
  (let [wf (normalize-workflow (get workflows workflow-id))]
    (cond
      (nil? wf) :not-running
      (domain/terminal-status? (:status wf)) :terminal
      (not= :running (:run-state wf)) :not-running
      (not= owner-id (:owner wf)) :not-owner
      (and (= :park kind) (nil? expected-wake-version)) :conflict
      (and (= :terminal kind)
           (not (and (map? expected-related-revisions)
                     (contains? expected-related-revisions workflow-id)
                     (= (:revision wf)
                        (get expected-related-revisions workflow-id))))) :conflict
      (and (some? expected-wake-version)
           (not= expected-wake-version (:wake-version wf))) :wake-raced
      (not (consumable-signals? wf consume-signals)) :conflict
      (not (valid-related-revisions? workflows expected-related-revisions)) :conflict
      (some (fn [{:keys [workflow-id] :as creation}]
              (let [existing (get workflows workflow-id)]
                (and existing (not (matching-creation? existing creation)))))
            create-workflows) :conflict
      :else :committed)))

(defn- add-created-workflow
  [workflows {:keys [workflow-id started-event owner-id parent]}]
  (if (contains? workflows workflow-id)
    workflows
    (let [child (cond-> (new-workflow started-event)
                  owner-id (assoc :owner owner-id)
                  parent (assoc :parent parent))
          workflows (assoc workflows workflow-id child)]
      (if-let [{parent-id :workflow-id parent-seq :seq policy :policy} parent]
        (update-in workflows [parent-id]
                   (fn [parent-wf]
                     (-> (normalize-workflow parent-wf)
                         (assoc-in [:children workflow-id]
                                   {:parent-seq parent-seq :policy policy})
                         (update :revision inc))))
        workflows))))

(defn- apply-close-action
  [workflows {:keys [op workflow-id events terminal-status]}]
  (let [wf (normalize-workflow (get workflows workflow-id))]
    (if (or (nil? wf) (domain/terminal-status? (:status wf)))
      workflows
      (assoc workflows workflow-id
             (case op
               :cancel (-> wf (assoc :cancelled true) wake-workflow-state)
               :terminate (let [wf (append-workflow-events wf events)]
                            (assoc wf :status (or terminal-status :terminated)
                                   :run-state :terminal :next-run-at nil
                                   :revision (inc (:revision wf))))
               wf)))))

(defn- apply-transition
  [s {:keys [workflow-id kind events consume-signals create-workflows
             next-run-at terminal-status parent-notification close-actions]}]
  (let [workflows (:workflows s)
        workflows (reduce add-created-workflow workflows create-workflows)
        wf        (normalize-workflow (get workflows workflow-id))
        wf        (-> wf
                      (consume-signal-envelopes consume-signals)
                      (append-workflow-events events))
        wf        (case kind
                    :park (if (domain/terminal-status? (:status wf))
                            wf
                            (-> wf
                                (assoc :run-state :waiting :next-run-at next-run-at)
                                (update :revision inc)))
                    :terminal (assoc wf :status (or terminal-status (:status wf))
                                     :run-state :terminal :next-run-at nil
                                     :revision (inc (:revision wf)))
                    wf)
        workflows (assoc workflows workflow-id wf)
        workflows (if-let [{parent-id :workflow-id parent-events :events}
                           parent-notification]
                    (if-let [parent (normalize-workflow (get workflows parent-id))]
                      (assoc workflows parent-id
                             (wake-workflow-state
                               (append-workflow-events parent parent-events)))
                      workflows)
                    workflows)
        workflows (reduce apply-close-action workflows close-actions)]
    (assoc s :workflows workflows)))

(defn- close-tree
  [workflows workflow-id]
  (letfn [(node [workflow-id]
            (when-let [wf (normalize-workflow (get workflows workflow-id))]
              {:workflow-id workflow-id
               :revision (:revision wf)
               :status (:status wf)
               :next-terminal-seq (next-terminal-seq wf)
               :children (->> (:children wf)
                              (map (fn [[child-id edge]]
                                     (assoc (node child-id) :policy (:policy edge)
                                            :parent-seq (:parent-seq edge))))
                              vec)}))]
    (node workflow-id)))

;; ============================================================================
;; In-Memory Store Implementation
;; ============================================================================

(defrecord InMemoryStore [state]
  p/IEngineStore
  (load-history [_ workflow-id]
    (get-in @state [:workflows workflow-id :history] []))

  (get-workflow-status [_ workflow-id]
    (let [wf (get-in @state [:workflows workflow-id])]
      (cond
        (nil? wf) :not-found
        (domain/terminal-status? (:status wf)) (:status wf)
        (:cancelled wf) :cancelled
        (empty? (:history wf)) :not-found
        :else :running)))

  ;; --- Durable scheduling + ownership-based recovery ---
  (claim-runnable! [_ owner-id limit now-ms]
    (let [[old _]
          (swap-vals!
            state
            (fn [s]
              (reduce (fn [s [workflow-id wf]]
                        (assoc-in s [:workflows workflow-id]
                                  (-> wf
                                      (assoc :owner owner-id
                                             :run-state :running
                                             :next-run-at nil)
                                      (update :revision inc))))
                      s
                      (claimable-ids (:workflows s) owner-id limit now-ms))))]
      (mapv (fn [[workflow-id wf]]
              {:workflow-id workflow-id
               :wake-version (:wake-version wf)})
            (claimable-ids (:workflows old) owner-id limit now-ms))))

  (requeue-running! [_ workflow-id owner-id]
    (let [path    [:workflows workflow-id]
          [old _] (swap-vals! state update-in path
                              (fn [raw-wf]
                                (let [wf (normalize-workflow raw-wf)]
                                  (if (and wf
                                           (= owner-id (:owner wf))
                                           (not (domain/terminal-status? (:status wf)))
                                           (= :running (:run-state wf)))
                                    (-> wf
                                        (assoc :run-state :runnable :next-run-at nil)
                                        (update :revision inc))
                                    wf))))
          wf      (normalize-workflow (get-in old path))]
      (boolean (and wf
                    (= owner-id (:owner wf))
                    (not (domain/terminal-status? (:status wf)))
                    (= :running (:run-state wf))))))

  (recover-running! [_ owner-id]
    (let [recover? (fn [raw-wf]
                     (let [wf (normalize-workflow raw-wf)]
                       (and (= :running (:run-state wf))
                            (not (domain/terminal-status? (:status wf)))
                            (= owner-id (:owner wf)))))
          [old _] (swap-vals!
                    state
                    (fn [s]
                      (update s :workflows
                              (fn [workflows]
                                (reduce-kv
                                  (fn [acc workflow-id raw-wf]
                                    (assoc acc workflow-id
                                           (if (recover? raw-wf)
                                             (-> (normalize-workflow raw-wf)
                                                 (assoc :run-state :runnable
                                                        :next-run-at nil)
                                                 (update :revision inc))
                                             raw-wf)))
                                  {}
                                  workflows)))))]
      (count (filter recover? (vals (:workflows old))))))

  p/IFsmStore

  ;; --- FSM transition API --------------------------------------------------
  (create-workflow! [_ {:keys [workflow-id started-event owner-id parent] :as creation}]
    (let [[old new] (swap-vals! state
                                (fn [s]
                                  (if (contains? (:workflows s) workflow-id)
                                    s
                                    (assoc s :workflows
                                           (add-created-workflow
                                             (:workflows s) creation)))))
          existing (get-in old [:workflows workflow-id])]
      (cond
        (nil? existing) {:create-status :created
                         :state (workflow-state workflow-id
                                                (get-in new [:workflows workflow-id]))}
        (matching-creation? existing creation) {:create-status :exists
                                                :state (workflow-state workflow-id existing)}
        :else {:create-status :conflict
               :state (workflow-state workflow-id existing)})))

  (load-workflow-state [_ workflow-id]
    (workflow-state workflow-id (get-in @state [:workflows workflow-id])))

  (load-snapshot [_ workflow-id]
    (when-let [wf (normalize-workflow (get-in @state [:workflows workflow-id]))]
      (assoc (workflow-state workflow-id wf) :history (:history wf))))

  (load-close-tree [_ workflow-id]
    (close-tree (:workflows @state) workflow-id))

  (add-signal! [_ workflow-id signal-name signal]
    (let [signal-id (or (:signal-id signal) (:id signal))
          payload   (if (contains? signal :payload) (:payload signal) signal)
          _         (when-not (and (string? signal-id) (seq signal-id))
                      (throw (ex-info "FSM signals require a non-empty :signal-id"
                                      {:workflow-id workflow-id :signal signal})))
          [old new] (swap-vals!
                      state
                      (fn [s]
                        (let [wf (normalize-workflow (get-in s [:workflows workflow-id]))]
                          (cond
                            (or (nil? wf) (domain/terminal-status? (:status wf))) s
                            (some #(= signal-id (:signal-id %))
                                  (mapcat identity (vals (:signals wf)))) s
                            :else
                            (let [envelope {:queue-id (:next-signal-id wf)
                                            :signal-id signal-id
                                            :payload payload}
                                  wf (-> wf
                                         (update :next-signal-id inc)
                                         (update-in [:signals signal-name] (fnil conj []) envelope)
                                         wake-workflow-state)]
                              (assoc-in s [:workflows workflow-id] wf))))))
          before (normalize-workflow (get-in old [:workflows workflow-id]))
          after  (normalize-workflow (get-in new [:workflows workflow-id]))
          existing (some (fn [[name envelopes]]
                           (some (fn [envelope]
                                   (when (= signal-id (:signal-id envelope))
                                     (assoc envelope :signal-name name)))
                                 envelopes))
                         (:signals (or before {})))]
      (cond
        (nil? before) {:signal-status :not-found}
        (domain/terminal-status? (:status before)) {:signal-status :terminal}
        existing (if (and (= signal-name (:signal-name existing))
                          (= payload (:payload existing)))
                   {:signal-status :duplicate :signal-id signal-id}
                   {:signal-status :conflict :signal-id signal-id})
        :else {:signal-status :accepted
               :signal-id signal-id
               :state (workflow-state workflow-id after)})))

  (request-cancel! [_ workflow-id]
    (let [[old new] (swap-vals!
                      state
                      (fn [s]
                        (if-let [wf (normalize-workflow (get-in s [:workflows workflow-id]))]
                          (if (domain/terminal-status? (:status wf))
                            s
                            (assoc-in s [:workflows workflow-id]
                                      (-> wf (assoc :cancelled true)
                                          wake-workflow-state)))
                          s)))
          before (normalize-workflow (get-in old [:workflows workflow-id]))]
      (cond
        (nil? before) {:cancel-status :not-found}
        (domain/terminal-status? (:status before)) {:cancel-status :terminal}
        (:cancelled before) {:cancel-status :already-requested}
        :else {:cancel-status :requested
               :state (workflow-state workflow-id
                                      (get-in new [:workflows workflow-id]))})))

  (wake! [_ workflow-id]
    (let [[old new] (swap-vals!
                      state
                      (fn [s]
                        (if-let [workflow (normalize-workflow
                                            (get-in s [:workflows workflow-id]))]
                          (if (domain/terminal-status? (:status workflow))
                            s
                            (assoc-in s [:workflows workflow-id]
                                      (wake-workflow-state workflow)))
                          s)))
          before (normalize-workflow (get-in old [:workflows workflow-id]))]
      {:wake-status (if (and before (not (domain/terminal-status? (:status before))))
                      :woken
                      :terminal-or-not-found)
       :state (workflow-state workflow-id
                              (get-in new [:workflows workflow-id]))}))

  (commit-transition! [_ {:keys [workflow-id] :as transition}]
    (let [[old new] (swap-vals!
                      state
                      (fn [s]
                        (if (= :committed
                               (transition-status (:workflows s) transition))
                          (apply-transition s transition)
                          s)))
          status (transition-status (:workflows old) transition)
          wf     (get-in new [:workflows workflow-id])]
      {:commit-status status
       :state (workflow-state workflow-id wf)}))

  (release-owner! [_ owner-id]
    (swap! state
           (fn [s]
             (reduce (fn [s [workflow-id raw-workflow]]
                       (let [workflow (normalize-workflow raw-workflow)]
                         (if (and (= owner-id (:owner workflow))
                                  (not (domain/terminal-status? (:status workflow))))
                           (assoc-in s [:workflows workflow-id]
                                     (cond-> (-> workflow
                                                 (dissoc :owner)
                                                 (update :revision inc))
                                       (= :running (:run-state workflow))
                                       (assoc :run-state :runnable :next-run-at nil)))
                           s)))
                     s
                     (:workflows s))))
    nil))

(defn create-store
  "Creates the default workflow store: an in-memory, atom-backed store
   optionally wrapped with intemporal.spec assertions.

   Options:
   - :state    - an existing atom to back the store, e.g. to share state
                 between two store instances (simulating two processes/pods
                 over the same backing). Defaults to a fresh (atom {}).
   - :checked? - :auto (default), true, or false. :auto installs CheckedStore
                 only when clojure.spec assertions are enabled.
   - :cache - nil (default) or {:max-workflows n}; caches immutable histories
              by :history-revision while state, signals, and cancellation stay
              live. CheckedStore remains the outer decorator."
  [& {:keys [state checked? cache] :or {checked? :auto}}]
  (let [store (cache/wrap (->InMemoryStore (or state (atom {}))) cache)]
    (checked/wrap store checked?)))
