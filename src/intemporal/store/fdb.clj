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

;; ============================================================================
;; Durable scheduling indexes
;;
;; wf-owner indexes every non-terminal workflow for ownership recovery/release.
;; wf-ready contains only RUNNABLE workflows. wf-due contains only timed WAITING
;; workflows, keyed by deadline. Indefinite WAITING workflows have no scheduling
;; index entry and therefore cost nothing to poll.
;; ============================================================================

(defn- read-owner [tx root-subspace workflow-id]
  (<-bytes (fdb-core/get tx root-subspace (->tuple ["owner" workflow-id]))))

(defn- owner-index-key [bucket workflow-id]
  (->tuple ["wf-owner" bucket workflow-id]))

(defn- schedule-key [workflow-id]
  (->tuple ["schedule" workflow-id]))

(defn- ready-index-key [bucket workflow-id]
  (->tuple ["wf-ready" bucket workflow-id]))

(defn- due-index-key [bucket next-run-at workflow-id]
  (->tuple ["wf-due" bucket next-run-at workflow-id]))

(defn- read-schedule [tx root-subspace workflow-id]
  (or (<-bytes (fdb-core/get tx root-subspace (schedule-key workflow-id)))
      {:run-state :runnable :next-run-at nil :wake-version 0}))

(defn- workflow-exists?
  [^Transaction tx root-subspace workflow-id]
  (let [history-sub (fsub/get root-subspace (->tuple ["history" workflow-id]))]
    (boolean (first (.getRange tx (fsub/range history-sub) 1)))))

(defn- range-workflow-ids
  [^Transaction tx subspace ^Range key-range limit]
  (mapv (fn [^KeyValue kv]
          (last (fimpl/decode subspace (.getKey kv))))
        (.getRange tx key-range (int limit))))

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

(defn- clear-schedule-index!
  [tx root-subspace bucket workflow-id schedule]
  (case (:run-state schedule)
    :runnable (fdb-core/clear tx root-subspace (ready-index-key bucket workflow-id))
    :waiting  (when-let [at (:next-run-at schedule)]
                (fdb-core/clear tx root-subspace (due-index-key bucket at workflow-id)))
    nil))

(defn- index-schedule!
  [tx root-subspace bucket workflow-id schedule]
  (case (:run-state schedule)
    :runnable (fdb-core/set tx root-subspace (ready-index-key bucket workflow-id)
                            (->bytes (:wake-version schedule)))
    :waiting  (when-let [at (:next-run-at schedule)]
                (fdb-core/set tx root-subspace (due-index-key bucket at workflow-id)
                              (->bytes (:wake-version schedule))))
    nil))

(defn- write-schedule!
  [tx root-subspace workflow-id old-schedule new-schedule]
  (let [bucket (or (read-owner tx root-subspace workflow-id) "")]
    (clear-schedule-index! tx root-subspace bucket workflow-id old-schedule)
    (fdb-core/set tx root-subspace (schedule-key workflow-id) (->bytes new-schedule))
    (index-schedule! tx root-subspace bucket workflow-id new-schedule))
  new-schedule)

;; Tier 2: parent->child index. Children of `parent-id` live under
;; ["wf-child" <parent-id> <child-id>] with value {:parent-seq .. :policy ..},
;; so list-children can range-scan a parent's children for close-policy.
(defn- child-index-key [parent-id child-id]
  (->tuple ["wf-child" parent-id child-id]))

(defn- terminal-status-value? [status]
  (boolean (some-> status keyword domain/terminal-status?)))

(defn- history-identity-key [workflow-id event]
  (->tuple ["history-identity" workflow-id
            (pr-str (domain/event-identity event))]))

(defn- append-history-events!
  "Append previously unseen event identities in transaction commit order.
   The per-workflow counter is transactionally contended, so concurrent writers
   retry and receive a total order. The separate identity index supplies
   first-write-wins idempotency and point lookup."
  [tx root-subspace workflow-id events]
  (let [history-sub  (fsub/get root-subspace (->tuple ["history" workflow-id]))
        next-key     (->tuple ["history-next" workflow-id])
        max-key      (->tuple ["history-max-seq" workflow-id])
        initial-next (long (or (<-bytes (fdb-core/get tx root-subspace next-key)) 0))
        initial-max  (<-bytes (fdb-core/get tx root-subspace max-key))
        {:keys [next-ordinal max-seq]}
        (reduce
          (fn [{:keys [next-ordinal max-seq] :as state} event]
            (let [identity-key (history-identity-key workflow-id event)]
              (if (some? (fdb-core/get tx root-subspace identity-key))
                state
                (do
                  (fdb-core/set tx history-sub (->tuple [next-ordinal]) (->bytes event))
                  (fdb-core/set tx root-subspace identity-key (->bytes next-ordinal))
                  {:next-ordinal (inc next-ordinal)
                   :max-seq (max (or max-seq (:seq event)) (:seq event))}))))
          {:next-ordinal initial-next :max-seq initial-max}
          events)]
    (when (not= initial-next next-ordinal)
      (fdb-core/set tx root-subspace next-key (->bytes next-ordinal))
      (fdb-core/set tx root-subspace max-key (->bytes max-seq)))))

(defn- maintain-scheduling! [tx root-subspace workflow-id events]
  (let [started?  (some #(= :workflow-started (:event-type %)) events)
        terminal? (some domain/terminal-event? events)
        bucket    (or (read-owner tx root-subspace workflow-id) "")
        raw       (fdb-core/get tx root-subspace (schedule-key workflow-id))
        current   (or (<-bytes raw)
                      {:run-state :runnable :next-run-at nil :wake-version 0})
        status    (<-bytes (fdb-core/get tx root-subspace
                                         (->tuple ["state" workflow-id "status"])))]
    (when (and started? (nil? status))
      (fdb-core/set tx root-subspace (->tuple ["state" workflow-id "status"])
                    (->bytes "running")))
    (cond
      terminal? (do
                  (clear-schedule-index! tx root-subspace bucket workflow-id current)
                  (fdb-core/clear tx root-subspace (owner-index-key bucket workflow-id))
                  (fdb-core/set tx root-subspace (schedule-key workflow-id)
                                (->bytes (assoc current :run-state :terminal :next-run-at nil))))
      (and started?
           (nil? raw)
           (not (terminal-status-value? status)))
      (let [schedule {:run-state :runnable :next-run-at nil :wake-version 0}]
        (fdb-core/set tx root-subspace (owner-index-key bucket workflow-id)
                      (->bytes {}))
        (write-schedule! tx root-subspace workflow-id current schedule)))))

(defn- wake-schedule!
  [tx root-subspace workflow-id]
  (let [raw      (fdb-core/get tx root-subspace (schedule-key workflow-id))
        current  (or (<-bytes raw)
                     {:run-state :runnable :next-run-at nil :wake-version 0})
        status   (<-bytes (fdb-core/get tx root-subspace
                                        (->tuple ["state" workflow-id "status"])))
        active?  (and (or raw (workflow-exists? tx root-subspace workflow-id))
                      (not= :terminal (:run-state current))
                      (not (terminal-status-value? status)))]
    (when active?
      (let [woken (cond-> (update current :wake-version (fnil inc 0))
                    (= :waiting (:run-state current))
                    (assoc :run-state :runnable :next-run-at nil))]
        (write-schedule! tx root-subspace workflow-id current woken)
        true))))

;; ============================================================================
;; FDB Store Implementation
;; ============================================================================

(defrecord FDBStore [db root-subspace]
  AutoCloseable
  (close [this]
    this)
  p/IStore
  (load-history [_ workflow-id]
    (let [history-sub (fsub/get root-subspace (->tuple ["history" workflow-id]))]
      (ftr/run db
        (fn [tx]
          (->> (ordered-range tx history-sub (fsub/range history-sub))
               (map (fn [[_key event]]
                      (update event :event-type keyword)))
               vec)))))

  (save-events [_ workflow-id events]
    (when (seq events)
      (let [term (some-> (domain/terminal-status-in events) name)]
        (ftr/run db
          (fn [tx]
            (append-history-events! tx root-subspace workflow-id events)
            (when term
              (fdb-core/set tx root-subspace (->tuple ["state" workflow-id "status"]) (->bytes term)))
            (maintain-scheduling! tx root-subspace workflow-id events)))))
    events)

  (save-events-and-wake! [_ workflow-id events]
    (let [woke? (ftr/run db
                  (fn [tx]
                    (append-history-events! tx root-subspace workflow-id events)
                    (when-let [term (some-> (domain/terminal-status-in events) name)]
                      (fdb-core/set tx root-subspace
                                    (->tuple ["state" workflow-id "status"])
                                    (->bytes term)))
                    (maintain-scheduling! tx root-subspace workflow-id events)
                    (wake-schedule! tx root-subspace workflow-id)))]
      (boolean woke?)))

  (find-event [_ workflow-id event-type seq-num]
    (let [event       {:event-type event-type :seq seq-num}
          history-sub (fsub/get root-subspace (->tuple ["history" workflow-id]))]
      (ftr/run db
        (fn [tx]
          (when-let [ordinal (<-bytes
                              (fdb-core/get tx root-subspace
                                            (history-identity-key workflow-id event)))]
            (some-> (fdb-core/get tx history-sub (->tuple [ordinal]))
                    <-bytes
                    (update :event-type keyword)))))))

  (max-seq [_ workflow-id]
    (ftr/run db
      (fn [tx]
        (<-bytes (fdb-core/get tx root-subspace
                              (->tuple ["history-max-seq" workflow-id]))))))

  (get-pending-signals [_ workflow-id]
    (let [signals-sub (fsub/get root-subspace (->tuple ["signals" workflow-id]))]
      (ftr/run db
        (fn [tx]
          (->> (ordered-range tx signals-sub (fsub/range signals-sub))
               (reduce (fn [acc [key value]]
                         (let [signal-name (first key)]
                           (update acc signal-name (fnil conj []) value)))
                       {}))))))

  (add-signal [_ workflow-id signal-name signal-data]
    (let [signals-sub (fsub/get root-subspace (->tuple ["signals" workflow-id signal-name]))
          counter-key (->tuple ["signal-next" workflow-id signal-name])]
      (ftr/run db
        (fn [tx]
          (let [ordinal (long (or (<-bytes
                                   (fdb-core/get tx root-subspace counter-key)) 0))]
            (fdb-core/set tx signals-sub (->tuple [ordinal]) (->bytes signal-data))
            (fdb-core/set tx root-subspace counter-key (->bytes (inc ordinal))))
          (wake-schedule! tx root-subspace workflow-id)))

      signal-data))

  (consume-signal [_ workflow-id signal-name]
    (let [signals-sub (fsub/get root-subspace (->tuple ["signals" workflow-id signal-name]))]
      (ftr/run db
        (fn [tx]
          (let [r (ordered-range tx signals-sub (fsub/range signals-sub) 1)]
            (when (seq r)
              (let [[relative-key value] (first r)]
                (fdb-core/clear tx signals-sub relative-key)
                value)))))))

  (wake-workflow [_ workflow-id]
    (boolean (ftr/run db
               (fn [tx]
                 (wake-schedule! tx root-subspace workflow-id)))))

  (is-cancelled? [_ workflow-id]
    (ftr/run db
      (fn [tx]
        (boolean (<-bytes (fdb-core/get tx root-subspace (->tuple ["state" workflow-id "cancelled"])))))))

  (mark-cancelled [_ workflow-id]
    (ftr/run db
      (fn [tx]
        (fdb-core/set tx root-subspace
                      (->tuple ["state" workflow-id "cancelled"])
                      (->bytes true))
        (wake-schedule! tx root-subspace workflow-id)))
    nil)

  (get-workflow-status [_ workflow-id]
    ;; Read both status and cancelled flag in one transaction so that a late
    ;; mark-cancelled cannot override a workflow that already completed or failed.
    (let [[cached cancelled?]
          (ftr/run db
            (fn [tx]
              [(<-bytes (fdb-core/get tx root-subspace (->tuple ["state" workflow-id "status"])))
               (boolean (<-bytes (fdb-core/get tx root-subspace (->tuple ["state" workflow-id "cancelled"]))))]))]
      (cond
        ;; Check terminal status first: takes precedence over the cancelled flag.
        (terminal-status-value? cached) (keyword cached)
        cancelled? :cancelled
        (= "running" cached) :running
        :else :not-found)))

  ;; --- Durable scheduling + ownership-based recovery ---
  (claim-runnable! [_ owner-id limit now-ms]
    (ftr/run db
      (fn [tx]
        (let [scan-ready (fn [bucket]
                           (let [sub (fsub/get root-subspace (->tuple ["wf-ready" bucket]))]
                             (range-workflow-ids tx sub (fsub/range sub) limit)))
              scan-due   (fn [bucket]
                           ;; The upper bound is the end of the exact deadline
                           ;; prefix, so the range includes every key whose
                           ;; deadline is <= now without reading future waits.
                           (let [sub     (fsub/get root-subspace (->tuple ["wf-due" bucket]))
                                 whole   (fsub/range sub)
                                 through (Range/startsWith
                                           (fsub/pack sub (->tuple [now-ms])))
                                 due     (Range. (.-begin whole) (.-end through))]
                             (range-workflow-ids tx sub due limit)))
              candidates (->> (concat (scan-ready owner-id) (scan-ready "")
                                (scan-due owner-id) (scan-due ""))
                              distinct
                              (take limit)
                              vec)
              claims (->> candidates
                          (keep
                            (fn [workflow-id]
                              (let [owner    (read-owner tx root-subspace workflow-id)
                                    bucket   (or owner "")
                                    schedule (read-schedule tx root-subspace workflow-id)
                                    status   (<-bytes (fdb-core/get tx root-subspace
                                                        (->tuple ["state" workflow-id "status"])))
                                    eligible? (or (= :runnable (:run-state schedule))
                                                  (and (= :waiting (:run-state schedule))
                                                       (:next-run-at schedule)
                                                       (<= (:next-run-at schedule) now-ms)))]
                                (when (and eligible?
                                           (not (terminal-status-value? status))
                                           (or (nil? owner) (= owner owner-id)))
                                  (clear-schedule-index! tx root-subspace bucket workflow-id schedule)
                                  (when (not= bucket owner-id)
                                    (fdb-core/clear tx root-subspace
                                                    (owner-index-key bucket workflow-id))
                                    (fdb-core/set tx root-subspace
                                                  (owner-index-key owner-id workflow-id)
                                                  (->bytes {})))
                                  (fdb-core/set tx root-subspace (->tuple ["owner" workflow-id])
                                                (->bytes owner-id))
                                  (fdb-core/set tx root-subspace (schedule-key workflow-id)
                                                (->bytes (assoc schedule :run-state :running
                                                           :next-run-at nil)))
                                  {:workflow-id workflow-id
                                   :wake-version (:wake-version schedule)}))))
                          vec)]
          claims))))

  (park-workflow! [_ workflow-id expected-wake-version events next-run-at-ms]
    (ftr/run db
      (fn [tx]
        (let [schedule    (read-schedule tx root-subspace workflow-id)
              status      (<-bytes (fdb-core/get tx root-subspace
                                     (->tuple ["state" workflow-id "status"])))
              term        (some-> (domain/terminal-status-in events) name)]
          (cond
            (some-> status keyword domain/terminal-status?)
            {:park-status :terminal}
            term
            (do
              (append-history-events! tx root-subspace workflow-id events)
              (fdb-core/set tx root-subspace (->tuple ["state" workflow-id "status"])
                            (->bytes term))
              (maintain-scheduling! tx root-subspace workflow-id events)
              {:park-status :terminal})
            (not= :running (:run-state schedule)) {:park-status :not-running}
            (not= expected-wake-version (:wake-version schedule))
            {:park-status :wake-raced :wake-version (:wake-version schedule)}
            :else (do
                    (append-history-events! tx root-subspace workflow-id events)
                    (write-schedule! tx root-subspace workflow-id schedule
                                     (assoc schedule :run-state :waiting
                                                     :next-run-at next-run-at-ms))
                    {:park-status :parked}))))))

  (requeue-running! [_ workflow-id]
    (boolean
      (ftr/run db
        (fn [tx]
          (let [schedule (read-schedule tx root-subspace workflow-id)]
            (when (= :running (:run-state schedule))
              (write-schedule! tx root-subspace workflow-id schedule
                               (assoc schedule :run-state :runnable :next-run-at nil))
              true))))))

  (recover-running! [_ owner-id]
    (ftr/run db
      (fn [tx]
        (let [sub     (fsub/get root-subspace (->tuple ["wf-owner" owner-id]))
              entries (mapv (fn [[key _]] (nth key (dec (count key))))
                            (fdb-core/get-range tx (fsub/range sub)))
              running (filterv #(= :running (:run-state
                                              (read-schedule tx root-subspace %)))
                               (distinct entries))]
          (doseq [workflow-id running]
            (let [schedule (read-schedule tx root-subspace workflow-id)]
              (write-schedule! tx root-subspace workflow-id schedule
                               (assoc schedule :run-state :runnable :next-run-at nil))))
          (count running)))))

  (release-owner [_ owner-id]
    (ftr/run db
      (fn [tx]
        (let [sub     (fsub/get root-subspace (->tuple ["wf-owner" owner-id]))
              entries (->> (fdb-core/get-range tx (fsub/range sub))
                           (mapv (fn [[key _]] (nth key (dec (count key))))))]
          (doseq [wid entries]
            (let [schedule (read-schedule tx root-subspace wid)
                  schedule' (cond-> schedule
                              (= :running (:run-state schedule))
                              (assoc :run-state :runnable :next-run-at nil))]
              (clear-schedule-index! tx root-subspace owner-id wid schedule)
              (fdb-core/set tx root-subspace (schedule-key wid) (->bytes schedule'))
              (index-schedule! tx root-subspace "" wid schedule'))
            (fdb-core/clear tx root-subspace (->tuple ["owner" wid]))
            (fdb-core/clear tx root-subspace (owner-index-key owner-id wid))
            (fdb-core/set tx root-subspace (owner-index-key "" wid)
                          (->bytes {}))))))
    nil)

  ;; --- Tier 2: independent child workflows ---
  (link-child! [_ parent-id parent-seq child-id policy]
    ;; The child's :workflow-started event (and thus its ownership-index entry)
    ;; was already written; here we just record the parent->child relationship.
    (ftr/run db
      (fn [tx]
        (when (workflow-exists? tx root-subspace child-id)
          (fdb-core/set tx root-subspace (child-index-key parent-id child-id)
                        (->bytes {:parent-seq parent-seq :policy (name policy)})))))
    nil)

  (list-children [this parent-id]
    (let [entries (ftr/run db
                    (fn [tx]
                      (let [sub (fsub/get root-subspace (->tuple ["wf-child" parent-id]))]
                        (->> (fdb-core/get-range tx (fsub/range sub))
                             (mapv (fn [[key value]]
                                     [(nth key (dec (count key))) (<-bytes value)]))))))]
      (mapv (fn [[child-id entry]]
              {:child-id   child-id
               :parent-seq (:parent-seq entry)
               :policy     (keyword (:policy entry))
               :status     (p/get-workflow-status this child-id)})
            entries))))

(defn create-store
  "Creates a new FoundationDB-backed IStore, optionally wrapped with
  intemporal.spec assertions.

  Options:
  - :checked? - :auto (default), true, or false."
  [db subspace-name & {:keys [checked?] :or {checked? :auto}}]
  (let [root  (fsub/create (->tuple [subspace-name]))
        store (->FDBStore db root)]
    (checked/wrap store checked?)))
