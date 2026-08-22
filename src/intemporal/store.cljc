(ns intemporal.store
  (:require
   [intemporal.protocol :as p]
   [intemporal.store.checked :as checked]))

(def ^:private terminal-status? #{:completed :failed :cancelled :terminated})

(defn- terminal-status-in
  [events]
  (some #(case (:event-type %)
           :workflow-completed  :completed
           :workflow-failed     :failed
           :workflow-cancelled  :cancelled
           :workflow-terminated :terminated
           nil)
        events))

(defn- normalize-workflow
  "Keep terminal scheduling fields aligned with terminal public status."
  [wf]
  (when wf
    (cond-> wf
      (terminal-status? (:status wf))
      (assoc :run-state :terminal :next-run-at nil))))

(defn- append-workflow-events
  [wf events]
  (let [wf   (or (normalize-workflow wf)
                 {:history [] :status :running :run-state :runnable
                  :next-run-at nil :wake-version 0})
        wf'  (update wf :history (fnil into []) events)
        term (terminal-status-in events)]
    (if term
      (assoc wf' :status term :run-state :terminal :next-run-at nil)
      wf')))

(defn- wake-workflow-state
  [wf]
  (let [wf (normalize-workflow wf)]
    (if (or (nil? wf) (terminal-status? (:status wf)))
      wf
      (cond-> (update wf :wake-version (fnil inc 0))
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
                            (not (terminal-status? (:status wf)))
                            (runnable-or-due? wf now-ms)
                            (or (nil? (:owner wf)) (= owner-id (:owner wf))))
                   [workflow-id wf]))))
       (sort-by (fn [[_ wf]]
                  (or (:next-run-at wf)
                      (:timestamp (first (:history wf)))
                      0)))
       (take limit)
       vec))

;; ============================================================================
;; In-Memory Store Implementation
;; ============================================================================

(defrecord InMemoryStore [state]
  p/IStore
  (load-history [_ workflow-id]
    (get-in @state [:workflows workflow-id :history] []))

  (save-event [this workflow-id event]
    (p/save-events this workflow-id [event])
    event)

  (save-events [_ workflow-id events]
    (when (seq events)
      (swap! state update-in [:workflows workflow-id]
             append-workflow-events events))
    events)

  (save-events-and-wake! [_ workflow-id events]
    (let [path    [:workflows workflow-id]
          [old _] (swap-vals! state update-in path
                              (fn [wf]
                                (-> (append-workflow-events wf events)
                                    wake-workflow-state)))
          wf      (normalize-workflow (get-in old path))
          active? (boolean (and wf (not (terminal-status? (:status wf)))))]
      active?))

  (find-event [this workflow-id event-type seq-num]
    (->> (p/load-history this workflow-id)
         (filter #(and (= (:event-type %) event-type)
                       (= (:seq %) seq-num)))
         first))

  (max-seq [_ workflow-id]
    ;; Already in memory: a linear scan of the workflow's own history vector,
    ;; no I/O. Cheap relative to JDBC/FDB, where the equivalent must avoid a
    ;; full history load.
    (let [history (get-in @state [:workflows workflow-id :history])]
      (when (seq history)
        (apply max (map :seq history)))))

  (get-pending-signals [_ workflow-id]
    (get-in @state [:workflows workflow-id :signals] {}))

  (add-signal [_ workflow-id signal-name signal-data]
    ;; Signal persistence and the durable wake are one state transition.
    (swap! state
           (fn [s]
             (-> s
                 (update-in [:workflows workflow-id :signals signal-name]
                            (fnil conj []) signal-data)
                 (update-in [:workflows workflow-id] wake-workflow-state))))
    signal-data)

  (consume-signal [_ workflow-id signal-name]
    ;; swap-vals! applies the (pure, retry-safe) update atomically and returns
    ;; [old new]; read the consumed signal from `old`. Avoids the previous
    ;; reset!-into-an-external-atom side effect inside the swap fn, which re-fires
    ;; on every CAS retry under contention (deepseek code §5).
    (let [path    [:workflows workflow-id :signals signal-name]
          [old _] (swap-vals! state
                              (fn [s]
                                (if (seq (get-in s path))
                                  (update-in s path (comp vec rest))
                                  s)))]
      (first (get-in old path))))

  (wake-workflow [_ workflow-id]
    (let [path    [:workflows workflow-id]
          [old _] (swap-vals! state update-in path wake-workflow-state)
          wf      (normalize-workflow (get-in old path))
          active? (boolean (and wf (not (terminal-status? (:status wf)))))]
      active?))

  (is-cancelled? [_ workflow-id]
    (get-in @state [:workflows workflow-id :cancelled] false))

  (mark-cancelled [_ workflow-id]
    (swap! state update-in [:workflows workflow-id]
           (fn [wf]
             (-> (or wf {:history [] :status :running :run-state :runnable
                         :next-run-at nil :wake-version 0})
                 (assoc :cancelled true)
                 wake-workflow-state)))
    nil)

  (get-workflow-status [_ workflow-id]
    (let [wf (get-in @state [:workflows workflow-id])]
      (cond
        (nil? wf) :not-found
        (terminal-status? (:status wf)) (:status wf)
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
                                  (assoc wf
                                         :owner owner-id
                                         :run-state :running
                                         :next-run-at nil)))
                      s
                      (claimable-ids (:workflows s) owner-id limit now-ms))))]
      (mapv (fn [[workflow-id wf]]
              {:workflow-id workflow-id
               :wake-version (:wake-version wf)})
            (claimable-ids (:workflows old) owner-id limit now-ms))))

  (park-workflow! [_ workflow-id expected-wake-version events next-run-at-ms]
    (let [path    [:workflows workflow-id]
          [old _] (swap-vals!
                    state
                    (fn [s]
                      (let [before (normalize-workflow (get-in s path))
                            terminal-event? (terminal-status-in events)]
                        (assoc-in s path
                                  (cond
                                    (terminal-status? (:status before)) before
                                    terminal-event? (append-workflow-events before events)
                                    (not= :running (:run-state before)) before
                                    (not= expected-wake-version (:wake-version before))
                                    before
                                    :else
                                    (assoc (append-workflow-events before events)
                                           :run-state :waiting
                                           :next-run-at next-run-at-ms))))))
          before  (normalize-workflow (get-in old path))]
      (cond
        (terminal-status? (:status before)) {:park-status :terminal}
        (terminal-status-in events) {:park-status :terminal}
        (not= :running (:run-state before)) {:park-status :not-running}
        (not= expected-wake-version (:wake-version before))
        {:park-status :wake-raced :wake-version (:wake-version before)}
        :else {:park-status :parked})))

  (requeue-running! [_ workflow-id]
    (let [path    [:workflows workflow-id]
          [old _] (swap-vals! state update-in path
                              (fn [raw-wf]
                                (let [wf (normalize-workflow raw-wf)]
                                  (if (and wf
                                           (not (terminal-status? (:status wf)))
                                           (= :running (:run-state wf)))
                                    (assoc wf :run-state :runnable :next-run-at nil)
                                    wf))))
          wf      (normalize-workflow (get-in old path))]
      (boolean (and wf
                    (not (terminal-status? (:status wf)))
                    (= :running (:run-state wf))))))

  (recover-running! [_ owner-id]
    (let [recover? (fn [raw-wf]
                     (let [wf (normalize-workflow raw-wf)]
                       (and (= :running (:run-state wf))
                            (not (terminal-status? (:status wf)))
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
                                             (assoc (normalize-workflow raw-wf)
                                                    :run-state :runnable
                                                    :next-run-at nil)
                                             raw-wf)))
                                  {}
                                  workflows)))))]
      (count (filter recover? (vals (:workflows old))))))

  (release-owner [_ owner-id]
    (swap! state
           (fn [s]
             (reduce (fn [s [wid wf]]
                       (if (and (= owner-id (:owner wf))
                                (not (terminal-status? (:status wf))))
                         (assoc-in s [:workflows wid]
                                   (cond-> (dissoc (normalize-workflow wf) :owner)
                                     (= :running (:run-state (normalize-workflow wf)))
                                     (assoc :run-state :runnable :next-run-at nil)))
                         s))
                     s
                     (:workflows s))))
    nil)

  ;; --- Tier 2: independent child workflows ---
  (link-child! [_ parent-id parent-seq child-id policy]
    ;; Idempotent: re-linking the same child (parent replay / crash) is a no-op.
    (swap! state update-in [:workflows parent-id :children]
           (fn [children]
             (if (contains? children child-id)
               children
               (assoc children child-id {:parent-seq parent-seq :policy policy}))))
    nil)

  (list-children [this parent-id]
    (->> (get-in @state [:workflows parent-id :children])
         (mapv (fn [[child-id {:keys [parent-seq policy]}]]
                 {:child-id   child-id
                  :parent-seq parent-seq
                  :policy     policy
                  :status     (p/get-workflow-status this child-id)})))))

(defn create-store
  "Creates the default IStore implementation: an in-memory, atom-backed store
   wrapped with intemporal.spec assertions (intemporal.store.checked/CheckedStore).

   Options:
   - :state    - an existing atom to back the store, e.g. to share state
                 between two store instances (simulating two processes/pods
                 over the same backing). Defaults to a fresh (atom {}).
   - :checked? - wrap with spec assertions (default true). Pass false for a
                 raw, unwrapped store."
  [& {:keys [state checked?] :or {checked? true}}]
  (let [store (->InMemoryStore (or state (atom {})))]
    (if checked? (checked/->CheckedStore store) store)))
