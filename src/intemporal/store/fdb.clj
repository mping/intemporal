(ns intemporal.store.fdb
  (:require
   [intemporal.internal.codec :as codec]
   [intemporal.internal.domain :as domain]
   [intemporal.protocol :as p]
   [intemporal.store.checked :as checked]
   [me.vedang.clj-fdb.core :as fdb-core]
   [me.vedang.clj-fdb.impl :as fimpl]
   [me.vedang.clj-fdb.subspace.subspace :as fsub]
   [me.vedang.clj-fdb.transaction :as ftr])
  (:import
   (com.apple.foundationdb KeyValue Range Transaction)
   (com.apple.foundationdb.tuple Tuple)
   (java.lang AutoCloseable)))

;; ============================================================================
;; Serialization Helpers
;; ============================================================================

;; VALUE codec: EDN, shared with the JDBC store. Previously cheshire, whose
;; `(parse-string s true)` keywordizes map KEYS but not VALUES — so a keyword
;; activity result came back as a string and broke replay determinism (bug #22).
;;
;; EDN is faithful in both directions, which this store relies on beyond the
;; event payloads: the cached `"completed"` status, owner and scheduling maps,
;; and `{:parent-seq .. :policy ..}` child-index entries all go through here.
;; A codec that keywordized on read would silently break status comparisons and
;; make terminal workflows claimable again.
(defn ->bytes [x]
  (.getBytes (codec/encode x) "UTF-8"))

(defn <-bytes [^bytes b]
  (when b
    (codec/decode (String. b "UTF-8"))))

;; KEY codec — unrelated to the value codec above. FDB tuple components are
;; strings/ints, so keywords are demoted to their name here by design.
(defn ->tuple [v]
  (Tuple/from (into-array Object (map #(if (keyword? %) (name %) %) v))))

(defn- ordered-range
  "Return decoded relative keys and values in FoundationDB key order. The
   clj-fdb get-range wrapper returns a hash map and therefore discards order."
  ([^Transaction tx subspace ^Range key-range]
   (mapv (fn [^KeyValue kv]
           [(fimpl/decode subspace (.getKey kv)) (<-bytes (.getValue kv))])
         (.getRange tx key-range)))
  ([^Transaction tx subspace ^Range key-range limit]
   (mapv (fn [^KeyValue kv]
           [(fimpl/decode subspace (.getKey kv)) (<-bytes (.getValue kv))])
         (.getRange tx key-range (int limit)))))

;; ============================================================================
;; Clean FSM v2 keyspace
;; ============================================================================

;; The old key layout above remains readable only by the retired replay
;; fallback.  The FSM uses this versioned subspace exclusively, so an existing
;; database is never reinterpreted or destructively rewritten.

(def ^:private fsm-terminal-statuses
  #{:completed :failed :cancelled :terminated})

(defn- fsm-root [root-subspace]
  (fsub/get root-subspace (->tuple ["fsm-v2"])))

(defn- fsm-key [& parts]
  (->tuple parts))

(defn- fsm-workflow-key [workflow-id]
  (fsm-key "workflow" workflow-id))

(defn- fsm-history-sub [root workflow-id]
  (fsub/get root (fsm-key "history" workflow-id)))

(defn- fsm-history-identity-key [workflow-id event]
  (fsm-key "history-id" workflow-id (pr-str (domain/event-identity event))))

(defn- fsm-history-next-key [workflow-id]
  (fsm-key "history-next" workflow-id))

(defn- fsm-signal-sub [root workflow-id]
  (fsub/get root (fsm-key "signal" workflow-id)))

(defn- fsm-signal-id-key [workflow-id signal-id]
  (fsm-key "signal-id" workflow-id signal-id))

(defn- fsm-child-sub [root workflow-id]
  (fsub/get root (fsm-key "child" workflow-id)))

(defn- fsm-workflow-index-sub [root]
  (fsub/get root (fsm-key "workflow-index")))

(defn- fsm-owner-index-key [owner-id workflow-id]
  (fsm-key "owner" (or owner-id "") workflow-id))

(defn- fsm-ready-index-key [owner-id workflow-id]
  (fsm-key "ready" (or owner-id "") workflow-id))

(defn- fsm-due-index-key [owner-id next-run-at workflow-id]
  (fsm-key "due" (or owner-id "") next-run-at workflow-id))

(defn- fsm-terminal? [workflow]
  (contains? fsm-terminal-statuses (:status workflow)))

(defn- fsm-read-workflow [tx root workflow-id]
  (<-bytes (fdb-core/get tx root (fsm-workflow-key workflow-id))))

(defn- fsm-clear-indexes!
  [tx root workflow-id workflow]
  (when workflow
    (let [{:keys [owner-id run-state next-run-at]} workflow]
      (fdb-core/clear tx root (fsm-owner-index-key owner-id workflow-id))
      (case run-state
        :runnable (fdb-core/clear tx root (fsm-ready-index-key owner-id workflow-id))
        :waiting (when next-run-at
                   (fdb-core/clear tx root
                                   (fsm-due-index-key owner-id next-run-at workflow-id)))
        nil))))

(defn- fsm-index-workflow!
  [tx root workflow-id workflow]
  (when-not (fsm-terminal? workflow)
    (let [{:keys [owner-id run-state next-run-at]} workflow]
      (fdb-core/set tx root (fsm-owner-index-key owner-id workflow-id) (->bytes true))
      (case run-state
        :runnable (fdb-core/set tx root (fsm-ready-index-key owner-id workflow-id)
                                (->bytes true))
        :waiting (when next-run-at
                   (fdb-core/set tx root
                                 (fsm-due-index-key owner-id next-run-at workflow-id)
                                 (->bytes true)))
        nil))))

(defn- fsm-write-workflow!
  [tx root workflow-id old-workflow new-workflow]
  (fsm-clear-indexes! tx root workflow-id old-workflow)
  (fdb-core/set tx root (fsm-workflow-key workflow-id) (->bytes new-workflow))
  (fsm-index-workflow! tx root workflow-id new-workflow)
  new-workflow)

(defn- fsm-workflow-history
  [tx root workflow-id]
  (let [subspace (fsm-history-sub root workflow-id)]
    (->> (ordered-range tx subspace (fsub/range subspace))
         (mapv second))))

(defn- fsm-workflow-signals
  [tx root workflow-id]
  (let [subspace (fsm-signal-sub root workflow-id)]
    (reduce (fn [signals [[signal-name queue-id] envelope]]
              (update signals signal-name (fnil conj [])
                      (assoc envelope :queue-id (long queue-id))))
            {}
            (ordered-range tx subspace (fsub/range subspace)))))

(defn- fsm-workflow-state
  ([tx root workflow-id] (fsm-workflow-state tx root workflow-id false))
  ([tx root workflow-id include-history?]
   (when-let [workflow (fsm-read-workflow tx root workflow-id)]
     (cond-> (assoc workflow
                    :workflow-id workflow-id
                    :signals (fsm-workflow-signals tx root workflow-id))
       include-history? (assoc :history (fsm-workflow-history tx root workflow-id))))))

(defn- fsm-matching-started-event?
  [existing requested]
  (= (select-keys existing [:event-type :seq :workflow-id :workflow-fn-name
                            :args :max-iterations :parent-id :parent-seq])
     (select-keys requested [:event-type :seq :workflow-id :workflow-fn-name
                             :args :max-iterations :parent-id :parent-seq])))

(defn- fsm-matching-creation?
  [tx root workflow-id workflow {:keys [started-event parent]}]
  (and (= 1 (count (fsm-workflow-history tx root workflow-id)))
       (fsm-matching-started-event? (first (fsm-workflow-history tx root workflow-id))
                                    started-event)
       (= (:parent workflow) parent)))

(defn- fsm-append-events!
  "Append first-write-wins event identities in one FDB transaction and update
   the two history counters once when at least one identity was new."
  [tx root workflow-id workflow events]
  (let [history-sub (fsm-history-sub root workflow-id)
        start-next (long (or (<-bytes (fdb-core/get tx root
                                                    (fsm-history-next-key workflow-id)))
                             0))
        [next-ordinal appended?]
        (reduce (fn [[ordinal appended?] event]
                  (let [identity-key (fsm-history-identity-key workflow-id event)]
                    (if (some? (fdb-core/get tx root identity-key))
                      [ordinal appended?]
                      (do
                        (fdb-core/set tx history-sub (->tuple [ordinal]) (->bytes event))
                        (fdb-core/set tx root identity-key (->bytes ordinal))
                        [(inc ordinal) true]))))
                [start-next false]
                events)
        workflow (if appended?
                   (-> workflow
                       (update :revision inc)
                       (update :history-revision inc))
                   workflow)]
    (when appended?
      (fdb-core/set tx root (fsm-history-next-key workflow-id) (->bytes next-ordinal)))
    workflow))

(defn- fsm-wake-workflow
  [workflow]
  (cond-> (-> workflow
              (update :wake-version inc)
              (update :revision inc))
    (= :waiting (:run-state workflow))
    (assoc :run-state :runnable :next-run-at nil)))

(declare fsm-create-workflow!)

(defn- fsm-close-tree
  [tx root workflow-id]
  (when-let [workflow (fsm-read-workflow tx root workflow-id)]
    (let [subspace (fsm-child-sub root workflow-id)
          next-terminal-seq (inc (reduce max -1 (map :seq (fsm-workflow-history tx root workflow-id))))]
      {:workflow-id workflow-id
       :revision (:revision workflow)
       :status (:status workflow)
       :next-terminal-seq next-terminal-seq
       :children (mapv (fn [[[child-id] edge]]
                         (assoc (fsm-close-tree tx root child-id)
                                :policy (:policy edge)
                                :parent-seq (:parent-seq edge)))
                       (ordered-range tx subspace (fsub/range subspace)))})))

(defn- fsm-create-workflow!
  [tx root {:keys [workflow-id owner-id started-event parent] :as creation}]
  (if-let [existing (fsm-read-workflow tx root workflow-id)]
    (if (fsm-matching-creation? tx root workflow-id existing creation)
      :exists
      :conflict)
    (let [workflow {:workflow-id workflow-id
                    :owner-id owner-id
                    :status :running
                    :run-state :runnable
                    :next-run-at nil
                    :wake-version 0
                    :revision 0
                    :history-revision 0
                    :next-signal-id 0
                    :cancel-requested? false
                    :parent parent}
          workflow (fsm-append-events! tx root workflow-id workflow [started-event])]
      (fsm-write-workflow! tx root workflow-id nil workflow)
      (fdb-core/set tx (fsm-workflow-index-sub root) (->tuple [workflow-id]) (->bytes true))
      (when-let [{parent-id :workflow-id parent-seq :seq policy :policy} parent]
        (fdb-core/set tx (fsm-child-sub root parent-id) (->tuple [workflow-id])
                      (->bytes {:parent-seq parent-seq :policy policy}))
        (when-let [parent-workflow (fsm-read-workflow tx root parent-id)]
          (fsm-write-workflow! tx root parent-id parent-workflow
                               (update parent-workflow :revision inc))))
      :created)))

(defn- fsm-transition-status
  [tx root transition workflows]
  (let [{:keys [workflow-id owner-id kind expected-wake-version consume-signals
                expected-related-revisions]} transition
        root-workflow (get workflows workflow-id)
        signal-consumable?
        (fn [{:keys [signal-name queue-id signal-id]}]
          (let [subspace (fsm-signal-sub root workflow-id)
                ;; FIFO is per signal name, not lexicographic globally.
                first-entry (first (filter #(= signal-name (ffirst %))
                                           (ordered-range tx subspace (fsub/range subspace))))]
            (and first-entry
                 (= (long queue-id) (long (second (first first-entry))))
                 (= signal-id (:signal-id (second first-entry))))))]
    (cond
      (nil? root-workflow) :not-running
      (fsm-terminal? root-workflow) :terminal
      (not= :running (:run-state root-workflow)) :not-running
      (not= owner-id (:owner-id root-workflow)) :not-owner
      (and (= kind :park) (nil? expected-wake-version)) :conflict
      (and (some? expected-wake-version)
           (not= expected-wake-version (:wake-version root-workflow))) :wake-raced
      (not (every? (fn [[id revision]]
                     (= revision (get-in workflows [id :revision])))
                   expected-related-revisions)) :conflict
      (not (every? signal-consumable? consume-signals)) :conflict
      :else :committed)))

(defn- fsm-workflow-ids
  [tx root]
  (let [subspace (fsm-workflow-index-sub root)]
    (mapv (fn [[[workflow-id] _]] workflow-id)
          (ordered-range tx subspace (fsub/range subspace)))))

(defn- fsm-read-workflows
  [tx root workflow-ids]
  (into {}
        (keep (fn [workflow-id]
                (when-let [workflow (fsm-read-workflow tx root workflow-id)]
                  [workflow-id workflow])))
        (sort workflow-ids)))

(defn- fsm-terminalize
  [tx root workflow-id workflow terminal-status events]
  (let [workflow (fsm-append-events! tx root workflow-id workflow events)
        workflow (-> workflow
                     (assoc :status terminal-status
                            :run-state :terminal
                            :next-run-at nil)
                     (update :revision inc))]
    (fsm-write-workflow! tx root workflow-id (fsm-read-workflow tx root workflow-id) workflow)
    workflow))

;; ============================================================================
;; FDB Store Implementation
;; ============================================================================

(defrecord FDBStore [db root-subspace]
  AutoCloseable
  (close [this]
    this)
  p/IEngineStore
  (load-history [_ workflow-id]
    (let [root (fsm-root root-subspace)]
      (ftr/run db #(fsm-workflow-history % root workflow-id))))

  (get-workflow-status [_ workflow-id]
    (let [root (fsm-root root-subspace)]
      (or (ftr/run db #(some-> (fsm-read-workflow % root workflow-id) :status))
          :not-found)))

  ;; --- Durable scheduling + ownership-based recovery ---
  (claim-runnable! [_ owner-id limit now-ms]
    (let [root (fsm-root root-subspace)]
      (ftr/run db
        (fn [tx]
          (let [claimable
                (->> (fsm-workflow-ids tx root)
                     (keep (fn [workflow-id]
                             (let [workflow (fsm-read-workflow tx root workflow-id)
                                   eligible? (or (= :runnable (:run-state workflow))
                                                 (and (= :waiting (:run-state workflow))
                                                      (:next-run-at workflow)
                                                      (<= (:next-run-at workflow) now-ms)))]
                               (when (and eligible? (not (fsm-terminal? workflow))
                                          (or (nil? (:owner-id workflow))
                                              (= owner-id (:owner-id workflow))))
                                 [workflow-id workflow]))))
                     (sort-by (fn [[workflow-id workflow]]
                                [(if (= owner-id (:owner-id workflow)) 0 1)
                                 workflow-id]))
                     (take limit)
                     vec)]
            (mapv (fn [[workflow-id workflow]]
                    (fsm-write-workflow!
                      tx root workflow-id workflow
                      (-> workflow
                          (assoc :owner-id owner-id :run-state :running :next-run-at nil)
                          (update :revision inc)))
                    {:workflow-id workflow-id
                     :wake-version (:wake-version workflow)})
                  claimable))))))

  (requeue-running! [_ workflow-id owner-id]
    (let [root (fsm-root root-subspace)]
      (boolean
        (ftr/run db
          (fn [tx]
            (when-let [workflow (fsm-read-workflow tx root workflow-id)]
              (when (and (= owner-id (:owner-id workflow))
                         (= :running (:run-state workflow))
                         (not (fsm-terminal? workflow)))
                (fsm-write-workflow! tx root workflow-id workflow
                                     (-> workflow
                                         (assoc :run-state :runnable :next-run-at nil)
                                         (update :revision inc)))
                true)))))))

  (recover-running! [_ owner-id]
    (let [root (fsm-root root-subspace)]
      (ftr/run db
        (fn [tx]
          (let [running (->> (fsm-workflow-ids tx root)
                             (keep (fn [workflow-id]
                                     (let [workflow (fsm-read-workflow tx root workflow-id)]
                                       (when (and (= owner-id (:owner-id workflow))
                                                  (= :running (:run-state workflow))
                                                  (not (fsm-terminal? workflow)))
                                         [workflow-id workflow])))))]
            (doseq [[workflow-id workflow] running]
              (fsm-write-workflow! tx root workflow-id workflow
                                   (-> workflow
                                       (assoc :run-state :runnable :next-run-at nil)
                                       (update :revision inc))))
            (count running))))))

  p/IFsmStore

  (create-workflow! [_ creation]
    (let [root (fsm-root root-subspace)]
      (ftr/run db
        (fn [tx]
          (let [status (fsm-create-workflow! tx root creation)]
            {:create-status status
             :state (fsm-workflow-state tx root (:workflow-id creation))})))))

  (load-workflow-state [_ workflow-id]
    (let [root (fsm-root root-subspace)]
      (ftr/run db #(fsm-workflow-state % root workflow-id))))

  (load-snapshot [_ workflow-id]
    (let [root (fsm-root root-subspace)]
      (ftr/run db #(fsm-workflow-state % root workflow-id true))))

  (load-close-tree [_ workflow-id]
    (let [root (fsm-root root-subspace)]
      (ftr/run db #(fsm-close-tree % root workflow-id))))

  (add-signal! [_ workflow-id signal-name signal]
    (let [root (fsm-root root-subspace)
          signal-id (or (:signal-id signal) (:id signal))
          payload (if (contains? signal :payload) (:payload signal) signal)]
      (ftr/run db
        (fn [tx]
          (if-let [workflow (fsm-read-workflow tx root workflow-id)]
            (cond
              (fsm-terminal? workflow) {:signal-status :terminal}
              :else
              (if-let [existing (<-bytes (fdb-core/get tx root
                                                       (fsm-signal-id-key workflow-id signal-id)))]
                (if (and (= signal-name (:signal-name existing))
                         (= payload (:payload existing)))
                  {:signal-status :duplicate :signal-id signal-id}
                  {:signal-status :conflict :signal-id signal-id})
                (let [queue-id (:next-signal-id workflow)
                      envelope {:signal-id signal-id :payload payload :signal-name signal-name}
                      workflow (-> workflow
                                   (update :next-signal-id inc)
                                   fsm-wake-workflow)]
                  (fdb-core/set tx (fsm-signal-sub root workflow-id)
                                (->tuple [signal-name queue-id]) (->bytes envelope))
                  (fdb-core/set tx root (fsm-signal-id-key workflow-id signal-id)
                                (->bytes envelope))
                  (fsm-write-workflow! tx root workflow-id
                                       (fsm-read-workflow tx root workflow-id) workflow)
                  {:signal-status :accepted :signal-id signal-id
                   :state (fsm-workflow-state tx root workflow-id)})))
            {:signal-status :not-found})))))

  (request-cancel! [_ workflow-id]
    (let [root (fsm-root root-subspace)]
      (ftr/run db
        (fn [tx]
          (if-let [workflow (fsm-read-workflow tx root workflow-id)]
            (cond
              (fsm-terminal? workflow) {:cancel-status :terminal}
              (:cancel-requested? workflow) {:cancel-status :already-requested}
              :else (let [updated (fsm-wake-workflow
                                    (assoc workflow :cancel-requested? true))]
                      (fsm-write-workflow! tx root workflow-id workflow updated)
                      {:cancel-status :requested
                       :state (fsm-workflow-state tx root workflow-id)}))
            {:cancel-status :not-found})))))

  (wake! [_ workflow-id]
    (let [root (fsm-root root-subspace)]
      (ftr/run db
        (fn [tx]
          (if-let [workflow (fsm-read-workflow tx root workflow-id)]
            (if (fsm-terminal? workflow)
              {:wake-status :terminal-or-not-found
               :state (fsm-workflow-state tx root workflow-id)}
              (let [updated (fsm-wake-workflow workflow)]
                (fsm-write-workflow! tx root workflow-id workflow updated)
                {:wake-status :woken
                 :state (fsm-workflow-state tx root workflow-id)}))
            {:wake-status :terminal-or-not-found})))))

  (commit-transition! [_ {:keys [workflow-id events consume-signals create-workflows
                                 next-run-at terminal-status parent-notification
                                 close-actions expected-related-revisions] :as transition}]
    (let [root (fsm-root root-subspace)]
      (ftr/run db
        (fn [tx]
          (let [related-ids (into #{workflow-id}
                                  (concat (keys expected-related-revisions)
                                          (map :workflow-id create-workflows)
                                          (when parent-notification [(:workflow-id parent-notification)])
                                          (map :workflow-id close-actions)))
                workflows (fsm-read-workflows tx root related-ids)
                status (fsm-transition-status tx root transition workflows)]
            (if (not= :committed status)
              {:commit-status status
               :state (fsm-workflow-state tx root workflow-id)}
              (if (some (fn [creation]
                          (when-let [workflow (get workflows (:workflow-id creation))]
                            (not (fsm-matching-creation? tx root (:workflow-id creation)
                                   workflow creation))))
                        create-workflows)
                {:commit-status :conflict
                 :state (fsm-workflow-state tx root workflow-id)}
                (let [creation-statuses (mapv #(fsm-create-workflow! tx root %) create-workflows)]
                  ;; An FDB retry restarts the transaction body, so an anomaly
                  ;; here cannot leave a prefix of the creation set durable.
                  (when (some #{:conflict} creation-statuses)
                    (throw (ex-info "Concurrent workflow creation conflict"
                                    {:workflow-id workflow-id})))
                  (let [root-workflow (get workflows workflow-id)
                        root-workflow (reduce
                                        (fn [workflow {:keys [signal-name queue-id signal-id]}]
                                          (fdb-core/clear tx (fsm-signal-sub root workflow-id)
                                                          (->tuple [signal-name queue-id]))
                                          (fdb-core/clear tx root
                                                          (fsm-signal-id-key workflow-id signal-id))
                                          workflow)
                                        root-workflow consume-signals)
                        root-workflow (fsm-append-events! tx root workflow-id root-workflow events)
                        transition-kind (:kind transition)
                        root-workflow (case transition-kind
                                        :park (-> root-workflow
                                                  (assoc :run-state :waiting :next-run-at next-run-at)
                                                  (update :revision inc))
                                        :terminal (-> root-workflow
                                                      (assoc :status terminal-status
                                                             :run-state :terminal
                                                             :next-run-at nil)
                                                      (update :revision inc))
                                        root-workflow)]
                    (fsm-write-workflow! tx root workflow-id (get workflows workflow-id)
                                         root-workflow)
                    (when-let [{parent-id :workflow-id parent-events :events} parent-notification]
                      (when-let [parent (get workflows parent-id)]
                        (when-not (fsm-terminal? parent)
                          (let [parent (fsm-append-events! tx root parent-id parent parent-events)
                                parent (fsm-wake-workflow parent)]
                            (fsm-write-workflow! tx root parent-id
                                                 (get workflows parent-id) parent)))))
                    (doseq [{:keys [op workflow-id events terminal-status]} close-actions]
                      (when-let [child (get workflows workflow-id)]
                        (when-not (fsm-terminal? child)
                          (case op
                            :cancel (fsm-write-workflow! tx root workflow-id child
                                                         (fsm-wake-workflow
                                                           (assoc child :cancel-requested? true)))
                            :terminate (fsm-terminalize tx root workflow-id child
                                                        (or terminal-status :terminated) events)
                            nil))))
                    {:commit-status :committed
                     :state (fsm-workflow-state tx root workflow-id)})))))))))

  (release-owner! [_ owner-id]
    (let [root (fsm-root root-subspace)]
      (ftr/run db
        (fn [tx]
          (doseq [workflow-id (fsm-workflow-ids tx root)
                  :let [workflow (fsm-read-workflow tx root workflow-id)]
                  :when (and (= owner-id (:owner-id workflow))
                             (not (fsm-terminal? workflow)))]
            (fsm-write-workflow!
              tx root workflow-id workflow
              (cond-> (assoc workflow :owner-id nil)
                (= :running (:run-state workflow))
                (assoc :run-state :runnable :next-run-at nil)
                true (update :revision inc))))
          nil)))))

(defn create-store
  "Creates a new FoundationDB-backed workflow store, optionally wrapped with
  intemporal.spec assertions.

  Options:
  - :checked? - :auto (default), true, or false."
  [db subspace-name & {:keys [checked?] :or {checked? :auto}}]
  (let [root  (fsub/create (->tuple [subspace-name]))
        store (->FDBStore db root)]
    (checked/wrap store checked?)))
