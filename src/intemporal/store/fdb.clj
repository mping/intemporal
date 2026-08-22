(ns intemporal.store.fdb
  (:require
   [intemporal.internal.codec :as codec]
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

(defn- owner-index-key [root-subspace bucket workflow-id]
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

(defn- maintain-scheduling! [tx root-subspace workflow-id events]
  (let [started?  (some #(= :workflow-started (:event-type %)) events)
        terminal? (some #(#{:workflow-completed :workflow-failed :workflow-cancelled :workflow-terminated} (:event-type %)) events)
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
                  (fdb-core/clear tx root-subspace (owner-index-key root-subspace bucket workflow-id))
                  (fdb-core/set tx root-subspace (schedule-key workflow-id)
                                (->bytes (assoc current :run-state :terminal :next-run-at nil))))
      (and started?
           (nil? raw)
           (not (#{"completed" "failed" "cancelled" "terminated"} status)))
      (let [schedule {:run-state :runnable :next-run-at nil :wake-version 0}]
        (fdb-core/set tx root-subspace (owner-index-key root-subspace bucket workflow-id)
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
                      (not (#{"completed" "failed" "cancelled" "terminated"} status)))]
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
          (->> (fdb-core/get-range tx (fsub/range history-sub))
               (map (fn [[key value]]
                      (let [event (<-bytes value)
                            seq-num (nth key (- (count key) 2))]
                        (assoc (update event :event-type keyword)
                               :seq seq-num))))
               (sort-by :seq)
               vec)))))

  (save-event [_ workflow-id event]
    (let [history-sub (fsub/get root-subspace (->tuple ["history" workflow-id]))
          ;; A8: :seq is mandatory (every caller assigns one — see core.cljc /
          ;; execution.clj); key deterministically on (seq, event-type) instead
          ;; of [seq random-uuid] so a replay re-save of the SAME event type at
          ;; the SAME seq overwrites in place (matching JDBC's upsert semantics)
          ;; rather than accumulating duplicates ordered by random uuid (P4).
          ;; Different event types legitimately share a seq (scheduled +
          ;; completed) and still get distinct keys.
          seq-num (:seq event)
          key (->tuple [seq-num (name (:event-type event))])
          term (case (:event-type event)
                 :workflow-completed  "completed"
                 :workflow-failed     "failed"
                 :workflow-cancelled  "cancelled"
                 :workflow-terminated "terminated"
                 nil)]
      (ftr/run db
        (fn [tx]
          (fdb-core/set tx history-sub key (->bytes event))
          ;; Phase B2: cache terminal status for O(1) reads.
          (when term
            (fdb-core/set tx root-subspace (->tuple ["state" workflow-id "status"]) (->bytes term)))
          (maintain-scheduling! tx root-subspace workflow-id [event])))
      event))

  (save-events [_ workflow-id events]
    (when (seq events)
      (let [history-sub (fsub/get root-subspace (->tuple ["history" workflow-id]))
            term        (some #(case (:event-type %)
                                 :workflow-completed  "completed"
                                 :workflow-failed     "failed"
                                 :workflow-cancelled  "cancelled"
                                 :workflow-terminated "terminated"
                                 nil)
                              events)]
        (ftr/run db
          (fn [tx]
            (doseq [event events]
              (let [seq-num (:seq event)
                    key (->tuple [seq-num (name (:event-type event))])]
                (fdb-core/set tx history-sub key (->bytes event))))
            (when term
              (fdb-core/set tx root-subspace (->tuple ["state" workflow-id "status"]) (->bytes term)))
            (maintain-scheduling! tx root-subspace workflow-id events)))))
    events)

  (save-events-and-wake! [_ workflow-id events]
    (let [history-sub (fsub/get root-subspace (->tuple ["history" workflow-id]))
          woke? (ftr/run db
                  (fn [tx]
                    (doseq [event events]
                      (fdb-core/set tx history-sub
                                    (->tuple [(:seq event) (name (:event-type event))])
                                    (->bytes event)))
                    (when-let [term (some #(case (:event-type %)
                                             :workflow-completed "completed"
                                             :workflow-failed "failed"
                                             :workflow-cancelled "cancelled"
                                             :workflow-terminated "terminated"
                                             nil)
                                          events)]
                      (fdb-core/set tx root-subspace
                                    (->tuple ["state" workflow-id "status"])
                                    (->bytes term)))
                    (maintain-scheduling! tx root-subspace workflow-id events)
                    (wake-schedule! tx root-subspace workflow-id)))]
      (boolean woke?)))

  (find-event [this workflow-id event-type seq-num]
    (->> (p/load-history this workflow-id)
         (filter #(and (= (:event-type %) event-type)
                       (= (:seq %) seq-num)))
         first))

  (max-seq [_ workflow-id]
    ;; Tuple-encoded integer keys preserve numeric order byte-for-byte
    ;; (including negatives), so a reverse, limit-1 range scan lands directly on
    ;; the highest seq without loading (or even counting) the rest of the
    ;; history. clj-fdb's get-range wrapper doesn't expose limit/reverse, so
    ;; call the underlying Java API directly — same tx, same subspace-relative
    ;; key decoding load-history uses.
    (let [history-sub (fsub/get root-subspace (->tuple ["history" workflow-id]))]
      (ftr/run db
        (fn [^Transaction tx]
          (when-let [^KeyValue kv (first (.getRange tx (fsub/range history-sub) 1 true))]
            (let [key (fimpl/decode history-sub (.getKey kv))]
              (nth key (- (count key) 2))))))))

  (get-pending-signals [_ workflow-id]
    (let [signals-sub (fsub/get root-subspace (->tuple ["signals" workflow-id]))]
      (ftr/run db
        (fn [tx]
          (->> (fdb-core/get-range tx (fsub/range signals-sub))
               (reduce (fn [acc [key value]]
                         (let [signal-name (nth key (- (count key) 3))]
                           (update acc signal-name (fnil conj []) (<-bytes value))))
                       {}))))))

  (add-signal [_ workflow-id signal-name signal-data]
    (let [signals-sub (fsub/get root-subspace (->tuple ["signals" workflow-id signal-name]))
          key (->tuple [(System/currentTimeMillis) (str (java.util.UUID/randomUUID))])]
      (ftr/run db
        (fn [tx]
          (fdb-core/set tx signals-sub key (->bytes signal-data))
          (wake-schedule! tx root-subspace workflow-id)))

      signal-data))

  (consume-signal [_ workflow-id signal-name]
    (let [signals-sub (fsub/get root-subspace (->tuple ["signals" workflow-id signal-name]))]
      (ftr/run db
        (fn [tx]
          (let [r (fdb-core/get-range tx (fsub/range signals-sub) {:limit 1})]
            (when (seq r)
              (let [[key value] (first r)
                    relative-key (vec (drop 4 key))] ;; root(1) + "signals"(1) + workflow-id(1) + signal-name(1) = 4
                (fdb-core/clear tx signals-sub relative-key)
                (<-bytes value))))))))

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
        (#{"completed" "failed" "cancelled" "terminated"} cached) (keyword cached)
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
                                           (not (#{"completed" "failed" "cancelled" "terminated"} status))
                                           (or (nil? owner) (= owner owner-id)))
                                  (clear-schedule-index! tx root-subspace bucket workflow-id schedule)
                                  (when (not= bucket owner-id)
                                    (fdb-core/clear tx root-subspace
                                                    (owner-index-key root-subspace bucket workflow-id))
                                    (fdb-core/set tx root-subspace
                                                  (owner-index-key root-subspace owner-id workflow-id)
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
        (let [history-sub (fsub/get root-subspace (->tuple ["history" workflow-id]))
              schedule    (read-schedule tx root-subspace workflow-id)
              status      (<-bytes (fdb-core/get tx root-subspace
                                     (->tuple ["state" workflow-id "status"])))
              term        (some #(case (:event-type %)
                                   :workflow-completed "completed"
                                   :workflow-failed "failed"
                                   :workflow-cancelled "cancelled"
                                   :workflow-terminated "terminated"
                                   nil)
                                events)]
          (cond
            (#{"completed" "failed" "cancelled" "terminated"} status)
            {:park-status :terminal}
            term
            (do
              (doseq [event events]
                (fdb-core/set tx history-sub
                              (->tuple [(:seq event) (name (:event-type event))])
                              (->bytes event)))
              (fdb-core/set tx root-subspace (->tuple ["state" workflow-id "status"])
                            (->bytes term))
              (maintain-scheduling! tx root-subspace workflow-id events)
              {:park-status :terminal})
            (not= :running (:run-state schedule)) {:park-status :not-running}
            (not= expected-wake-version (:wake-version schedule))
            {:park-status :wake-raced :wake-version (:wake-version schedule)}
            :else (do
                    (doseq [event events]
                      (fdb-core/set tx history-sub
                                    (->tuple [(:seq event) (name (:event-type event))])
                                    (->bytes event)))
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
            (fdb-core/clear tx root-subspace (owner-index-key root-subspace owner-id wid))
            (fdb-core/set tx root-subspace (owner-index-key root-subspace "" wid)
                          (->bytes {}))))))
    nil)

  ;; --- Tier 2: independent child workflows ---
  (link-child! [_ parent-id parent-seq child-id policy]
    ;; The child's :workflow-started event (and thus its ownership-index entry)
    ;; was already written; here we just record the parent->child relationship.
    (ftr/run db
      (fn [tx]
        (fdb-core/set tx root-subspace (child-index-key parent-id child-id)
                      (->bytes {:parent-seq parent-seq :policy (name policy)}))))
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
  "Creates a new FoundationDB-backed IStore, wrapped with intemporal.spec
  assertions by default (intemporal.store.checked/CheckedStore).

  Options:
  - :checked? - wrap with spec assertions (default true). Pass false for a
                raw, unwrapped store."
  [db subspace-name & {:keys [checked?] :or {checked? true}}]
  (let [root  (fsub/create (->tuple [subspace-name]))
        store (->FDBStore db root)]
    (if checked? (checked/->CheckedStore store) store)))
