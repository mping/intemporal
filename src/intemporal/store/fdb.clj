(ns intemporal.store.fdb
  (:require [intemporal.protocol :as p]
            [intemporal.spec :as spec]
            [intemporal.internal.codec :as codec]
            [intemporal.internal.logging :as log]
            [me.vedang.clj-fdb.core :as fdb-core]
            [me.vedang.clj-fdb.transaction :as ftr]
            [me.vedang.clj-fdb.subspace.subspace :as fsub]
            [me.vedang.clj-fdb.impl :as fimpl])
  (:import [com.apple.foundationdb Transaction KeyValue]
           [com.apple.foundationdb.tuple Tuple]
           (java.lang AutoCloseable)))

;; ============================================================================
;; Serialization Helpers
;; ============================================================================

;; VALUE codec: EDN, shared with the JDBC store. Previously cheshire, whose
;; `(parse-string s true)` keywordizes map KEYS but not VALUES — so a keyword
;; activity result came back as a string and broke replay determinism (bug #22).
;;
;; EDN is faithful in both directions, which this store relies on beyond the
;; event payloads: the cached `"completed"` status, the owner-id, and the
;; `{:wake-at ..}` / `{:parent-seq .. :policy ..}` index entries all go through
;; here, and are compared against string sets (see get-workflow-status and
;; claim-owner). A codec that keywordized on read would silently make terminal
;; workflows claimable again.
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
;; Ownership index (Phase C)
;;
;; FDB cannot SQL-scan by owner, so non-terminal workflows are indexed under
;; ["wf-owner" <owner-or-""> <wf-id>]. list-pending scans the owner's bucket
;; plus the unowned ("") bucket. The entry is added when a workflow starts,
;; moved on claim-owner / release-owner, and removed when it terminates.
;;
;; The index entry VALUE carries the C2 wake-at (epoch ms, or nil = always due),
;; so list-pending can skip not-yet-due timer workflows without a separate read.
;; Bucket moves (claim-owner / release-owner) preserve the value.
;; ============================================================================

(defn- read-owner [tx root-subspace workflow-id]
  (<-bytes (fdb-core/get tx root-subspace (->tuple ["owner" workflow-id]))))

(defn- owner-index-key [root-subspace bucket workflow-id]
  (->tuple ["wf-owner" bucket workflow-id]))

;; Tier 2: parent->child index. Children of `parent-id` live under
;; ["wf-child" <parent-id> <child-id>] with value {:parent-seq .. :policy ..},
;; so list-children can range-scan a parent's children for close-policy.
(defn- child-index-key [parent-id child-id]
  (->tuple ["wf-child" parent-id child-id]))

(defn- maintain-owner-index! [tx root-subspace workflow-id events]
  (let [started?  (some #(= :workflow-started (:event-type %)) events)
        terminal? (some #(#{:workflow-completed :workflow-failed :workflow-cancelled :workflow-terminated} (:event-type %)) events)
        bucket    (or (read-owner tx root-subspace workflow-id) "")]
    (cond
      terminal? (fdb-core/clear tx root-subspace (owner-index-key root-subspace bucket workflow-id))
      started?  (fdb-core/set tx root-subspace (owner-index-key root-subspace bucket workflow-id)
                              (->bytes {:wake-at nil})))))

;; ============================================================================
;; FDB Store Implementation
;; ============================================================================

(defrecord FDBStore [db root-subspace callbacks]
  AutoCloseable
  (close [this]
    this)
  p/IStore
  (load-history [_ workflow-id]
    (let [history-sub (fsub/get root-subspace (->tuple ["history" workflow-id]))]
      (->> (ftr/run db
             (fn [tx]
               (->> (fdb-core/get-range tx (fsub/range history-sub))
                    (map (fn [[key value]]
                           (let [event (<-bytes value)
                                 seq-num (nth key (- (count key) 2))]
                             (assoc (update event :event-type keyword)
                                    :seq seq-num))))
                    (sort-by :seq)
                    vec)))
           (spec/check! ::spec/events))))

  (save-event [_ workflow-id event]
    (spec/check! ::spec/event event)
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
          ;; Phase C: keep the ownership index in sync.
          (maintain-owner-index! tx root-subspace workflow-id [event])))
      event))

  (save-events [_ workflow-id events]
    (spec/check! ::spec/events events)
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
            ;; Phase C: keep the ownership index in sync.
            (maintain-owner-index! tx root-subspace workflow-id events)))))
    events)

  (find-event [this workflow-id event-type seq-num]
    (spec/check! ::spec/event-type event-type)
    (spec/check! ::spec/seq seq-num)
    (->> (p/load-history this workflow-id)
         (filter #(and (= (:event-type %) event-type)
                       (= (:seq %) seq-num)))
         first
         (spec/check! ::spec/maybe-event)))

  (max-seq [_ workflow-id]
    ;; Tuple-encoded integer keys preserve numeric order byte-for-byte
    ;; (including negatives), so a reverse, limit-1 range scan lands directly on
    ;; the highest seq without loading (or even counting) the rest of the
    ;; history. clj-fdb's get-range wrapper doesn't expose limit/reverse, so
    ;; call the underlying Java API directly — same tx, same subspace-relative
    ;; key decoding load-history uses.
    (let [history-sub (fsub/get root-subspace (->tuple ["history" workflow-id]))]
      (->> (ftr/run db
             (fn [^Transaction tx]
               (when-let [^KeyValue kv (first (.getRange tx (fsub/range history-sub) 1 true))]
                 (let [key (fimpl/decode history-sub (.getKey kv))]
                   (nth key (- (count key) 2))))))
           (spec/check! ::spec/max-seq-result))))

  (get-pending-signals [_ workflow-id]
    (let [signals-sub (fsub/get root-subspace (->tuple ["signals" workflow-id]))]
      (->> (ftr/run db
             (fn [tx]
               (->> (fdb-core/get-range tx (fsub/range signals-sub))
                    (reduce (fn [acc [key value]]
                              (let [signal-name (nth key (- (count key) 3))]
                                (update acc signal-name (fnil conj []) (<-bytes value))))
                            {}))))
           (spec/check! ::spec/pending-signals))))

  (add-signal [_ workflow-id signal-name signal-data]
    (let [signals-sub (fsub/get root-subspace (->tuple ["signals" workflow-id signal-name]))
          key (->tuple [(System/currentTimeMillis) (str (java.util.UUID/randomUUID))])]
      (ftr/run db
        (fn [tx]
          (fdb-core/set tx signals-sub key (->bytes signal-data))))

      ;; In-process fast path for an embedded (no-worker) engine in THIS process.
      ;; Worker mode picks the workflow up via the ownership scan (list-pending).
      ;; Atomically remove the callback before firing it (mirrors the InMemory
      ;; store): rapid successive signals for the same name must not re-fire the
      ;; same callback, which would consume later signals at the wrong seq-num.
      (let [[old-callbacks] (swap-vals! callbacks update workflow-id dissoc signal-name)]
        (when-let [callback (get-in old-callbacks [workflow-id signal-name])]
          (future
            (try (callback)
                 (catch Throwable t
                   (log/warnf t "Signal callback threw for workflow %s signal %s" workflow-id signal-name))))))

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

  (register-signal-callback [_ workflow-id signal-name callback]
    (swap! callbacks assoc-in [workflow-id signal-name] callback))

  (unregister-signal-callback [_ workflow-id signal-name]
    (swap! callbacks update workflow-id dissoc signal-name))

  (register-wake-callback [_ workflow-id callback]
    (swap! callbacks assoc-in [workflow-id ::wake] callback))

  (wake-workflow [_ workflow-id]
    (when-let [callback (get-in @callbacks [workflow-id ::wake])]
      (future
        (try (callback)
             (catch Throwable t
               (log/warnf t "Wake callback threw for workflow %s" workflow-id))))))

  (is-cancelled? [_ workflow-id]
    (->> (ftr/run db
           (fn [tx]
             (boolean (<-bytes (fdb-core/get tx root-subspace (->tuple ["state" workflow-id "cancelled"]))))))
         (spec/check! ::spec/boolean-result)))

  (mark-cancelled [_ workflow-id]
    (ftr/run db
      (fn [tx]
        (fdb-core/set tx root-subspace (->tuple ["state" workflow-id "cancelled"]) (->bytes true))
        ;; A4: keep the workflow IN the ownership scan (and make it due now) so a
        ;; worker re-drives it: the body must observe the cancel flag, run any
        ;; saga compensation, and write the terminal :workflow-cancelled event —
        ;; which removes the index entry via maintain-owner-index!. Only touch an
        ;; existing entry: an absent entry means terminal or never started.
        (let [bucket (or (read-owner tx root-subspace workflow-id) "")
              k      (owner-index-key root-subspace bucket workflow-id)]
          (when-let [entry (<-bytes (fdb-core/get tx root-subspace k))]
            (fdb-core/set tx root-subspace k (->bytes (assoc entry :wake-at nil))))))))

  (get-workflow-status [this workflow-id]
    ;; Read both status and cancelled flag in one transaction so that a late
    ;; mark-cancelled cannot override a workflow that already completed or failed.
    (let [[cached cancelled?]
          (ftr/run db
            (fn [tx]
              [(<-bytes (fdb-core/get tx root-subspace (->tuple ["state" workflow-id "status"])))
               (boolean (<-bytes (fdb-core/get tx root-subspace (->tuple ["state" workflow-id "cancelled"]))))]))]
      (->> (cond
             ;; Check terminal status first: takes precedence over the cancelled flag.
             (#{"completed" "failed" "cancelled" "terminated"} cached) (keyword cached)
             cancelled? :cancelled
             :else (let [history (p/load-history this workflow-id)]
                     (if (empty? history)
                       :not-found
                       (let [last-event (last history)]
                         (case (:event-type last-event)
                           :workflow-completed :completed
                           :workflow-failed :failed
                           :workflow-cancelled :cancelled
                           :workflow-terminated :terminated
                           :running)))))
           (spec/check! ::spec/workflow-status))))

  ;; --- Phase C: ownership-based recovery (serializable read-modify-write) ---
  (claim-owner [_ workflow-id owner-id]
    (->> (ftr/run db
           (fn [tx]
             (let [k        (->tuple ["owner" workflow-id])
                   cur      (<-bytes (fdb-core/get tx root-subspace k))
                   status   (<-bytes (fdb-core/get tx root-subspace (->tuple ["state" workflow-id "status"])))
                   terminal? (contains? #{"completed" "failed" "cancelled" "terminated"} status)]
               ;; Never claim a terminal workflow (mirrors the JDBC status predicate);
               ;; doing so would also resurrect its ownership-index entry below.
               (if (and (not terminal?)
                        (or (nil? cur) (= cur owner-id)))
                 (let [old-bucket (or cur "")
                       ;; preserve the index value (carries C2 wake-at) across the move
                       entry      (or (<-bytes (fdb-core/get tx root-subspace
                                                 (owner-index-key root-subspace old-bucket workflow-id)))
                                      {:wake-at nil})]
                   (fdb-core/set tx root-subspace k (->bytes owner-id))
                   (fdb-core/clear tx root-subspace (owner-index-key root-subspace old-bucket workflow-id))
                   (fdb-core/set tx root-subspace (owner-index-key root-subspace owner-id workflow-id)
                                 (->bytes entry))
                   true)
                 false))))
         (spec/check! ::spec/boolean-result)))

  (list-pending [_ owner-id limit]
    (spec/check! ::spec/limit limit)
    (->> (ftr/run db
           (fn [tx]
             (let [now  (System/currentTimeMillis)
                   due? (fn [v] (let [wa (:wake-at v)] (or (nil? wa) (<= wa now))))
                   scan (fn [bucket]
                          (let [sub (fsub/get root-subspace (->tuple ["wf-owner" bucket]))]
                            (->> (fdb-core/get-range tx (fsub/range sub))
                                 (keep (fn [[key value]]
                                         (when (due? (<-bytes value))
                                           (nth key (dec (count key)))))))))]
               (->> (concat (scan owner-id) (scan ""))
                    distinct
                    (take limit)
                    vec))))
         (spec/check! ::spec/pending-ids)))

  (release-owner [_ owner-id]
    (ftr/run db
      (fn [tx]
        (let [sub     (fsub/get root-subspace (->tuple ["wf-owner" owner-id]))
              entries (->> (fdb-core/get-range tx (fsub/range sub))
                           (mapv (fn [[key value]]
                                   [(nth key (dec (count key))) (<-bytes value)])))]
          (doseq [[wid entry] entries]
            ;; entries in the owner bucket are non-terminal by construction;
            ;; preserve the index value (C2 wake-at) when moving to the "" bucket
            (fdb-core/clear tx root-subspace (->tuple ["owner" wid]))
            (fdb-core/clear tx root-subspace (owner-index-key root-subspace owner-id wid))
            (fdb-core/set tx root-subspace (owner-index-key root-subspace "" wid)
                          (->bytes (or entry {:wake-at nil})))))))
    nil)

  (set-wake-at [_ workflow-id wake-at-ms]
    (spec/check! ::spec/wake-at-ms wake-at-ms)
    (ftr/run db
      (fn [tx]
        (let [bucket (or (read-owner tx root-subspace workflow-id) "")
              k      (owner-index-key root-subspace bucket workflow-id)]
          ;; Only update an EXISTING index entry: an absent entry means the
          ;; workflow is terminal (or never started), and writing one here would
          ;; resurrect a phantom "pending" workflow into the ownership scan.
          (when-let [entry (<-bytes (fdb-core/get tx root-subspace k))]
            (fdb-core/set tx root-subspace k (->bytes (assoc entry :wake-at wake-at-ms)))))))
    nil)

  ;; --- Tier 2: independent child workflows ---
  (link-child! [_ parent-id parent-seq child-id policy]
    (spec/check! ::spec/parent-seq parent-seq)
    (spec/check! ::spec/policy policy)
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
      (->> entries
           (mapv (fn [[child-id entry]]
                   {:child-id   child-id
                    :parent-seq (:parent-seq entry)
                    :policy     (keyword (:policy entry))
                    :status     (p/get-workflow-status this child-id)}))
           (spec/check! ::spec/children)))))

(defn make-fdb-store [db subspace-name]
  (let [root (fsub/create (->tuple [subspace-name]))]
    (->FDBStore db root (atom {}))))
