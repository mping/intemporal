(ns intemporal.store.fdb
  (:require [intemporal.protocol :as p]
            [intemporal.internal.logging :as log]
            [me.vedang.clj-fdb.core :as fdb-core]
            [me.vedang.clj-fdb.transaction :as ftr]
            [me.vedang.clj-fdb.subspace.subspace :as fsub]
            [cheshire.core :as json])
  (:import [com.apple.foundationdb.tuple Tuple]
           (java.lang AutoCloseable)))

;; ============================================================================
;; Serialization Helpers
;; ============================================================================

(defn ->bytes [x]
  (.getBytes (json/generate-string x) "UTF-8"))

(defn <-bytes [^bytes b]
  (when b
    (json/parse-string (String. b "UTF-8") true)))

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

(defn- maintain-owner-index! [tx root-subspace workflow-id events]
  (let [started?  (some #(= :workflow-started (:event-type %)) events)
        terminal? (some #(#{:workflow-completed :workflow-failed :workflow-cancelled} (:event-type %)) events)
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
      (ftr/run db
        (fn [tx]
          (let [r (fdb-core/get-range tx (fsub/range history-sub))]
            (->> r
                 (map (fn [[key value]]
                        (let [event (<-bytes value)
                              seq-num (nth key (- (count key) 2))]
                          (assoc (update event :event-type keyword)
                                 :seq seq-num))))
                 (sort-by :seq)
                 vec))))))

  (save-event [_ workflow-id event]
    (let [history-sub (fsub/get root-subspace (->tuple ["history" workflow-id]))
          seq-num (:seq event (System/currentTimeMillis))
          key (->tuple [seq-num (str (java.util.UUID/randomUUID))])
          term (case (:event-type event)
                 :workflow-completed "completed"
                 :workflow-failed    "failed"
                 :workflow-cancelled "cancelled"
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
    (when (seq events)
      (let [history-sub (fsub/get root-subspace (->tuple ["history" workflow-id]))
            term        (some #(case (:event-type %)
                                 :workflow-completed "completed"
                                 :workflow-failed    "failed"
                                 :workflow-cancelled "cancelled"
                                 nil)
                              events)]
        (ftr/run db
          (fn [tx]
            (doseq [event events]
              (let [seq-num (:seq event (System/currentTimeMillis))
                    key (->tuple [seq-num (str (java.util.UUID/randomUUID))])]
                (fdb-core/set tx history-sub key (->bytes event))))
            (when term
              (fdb-core/set tx root-subspace (->tuple ["state" workflow-id "status"]) (->bytes term)))
            ;; Phase C: keep the ownership index in sync.
            (maintain-owner-index! tx root-subspace workflow-id events)))))
    events)

  (find-event [this workflow-id event-type seq-num]
    (let [history (p/load-history this workflow-id)]
      (->> history
           (filter #(and (= (:event-type %) event-type)
                         (= (:seq %) seq-num)))
           first)))

  (get-pending-signals [_ workflow-id]
    (let [signals-sub (fsub/get root-subspace (->tuple ["signals" workflow-id]))]
      (ftr/run db
        (fn [tx]
          (let [r (fdb-core/get-range tx (fsub/range signals-sub))]
            (reduce (fn [acc [key value]]
                      (let [signal-name (nth key (- (count key) 3))]
                        (update acc signal-name (fnil conj []) (<-bytes value))))
                    {}
                    r))))))

  (add-signal [_ workflow-id signal-name signal-data]
    (let [signals-sub (fsub/get root-subspace (->tuple ["signals" workflow-id signal-name]))
          key (->tuple [(System/currentTimeMillis) (str (java.util.UUID/randomUUID))])]
      (ftr/run db
        (fn [tx]
          (fdb-core/set tx signals-sub key (->bytes signal-data))))

      ;; In-process fast path for an embedded (no-worker) engine in THIS process.
      ;; Worker mode picks the workflow up via the ownership scan (list-pending).
      (when-let [callback (get-in @callbacks [workflow-id signal-name])]
        (future
          (try (callback)
               (catch Throwable t
                 (log/warnf t "Signal callback threw for workflow %s signal %s" workflow-id signal-name)))))

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
    (ftr/run db
      (fn [tx]
        (boolean (<-bytes (fdb-core/get tx root-subspace (->tuple ["state" workflow-id "cancelled"])))))))

  (mark-cancelled [_ workflow-id]
    (ftr/run db
      (fn [tx]
        (fdb-core/set tx root-subspace (->tuple ["state" workflow-id "cancelled"]) (->bytes true))
        ;; Drop the workflow out of the ownership scan immediately so list-pending
        ;; stops re-listing a cancelled-but-not-yet-finalized workflow. The entry
        ;; lives under the workflow's current owner bucket (or "" if unowned).
        (let [bucket (or (read-owner tx root-subspace workflow-id) "")]
          (fdb-core/clear tx root-subspace (owner-index-key root-subspace bucket workflow-id))))))

  (get-workflow-status [this workflow-id]
    ;; Read both status and cancelled flag in one transaction so that a late
    ;; mark-cancelled cannot override a workflow that already completed or failed.
    (let [[cached cancelled?]
          (ftr/run db
            (fn [tx]
              [(<-bytes (fdb-core/get tx root-subspace (->tuple ["state" workflow-id "status"])))
               (boolean (<-bytes (fdb-core/get tx root-subspace (->tuple ["state" workflow-id "cancelled"]))))]))]
      (cond
        ;; Check terminal status first: takes precedence over the cancelled flag.
        (#{"completed" "failed" "cancelled"} cached) (keyword cached)
        cancelled? :cancelled
        :else (let [history (p/load-history this workflow-id)]
                (if (empty? history)
                  :not-found
                  (let [last-event (last history)]
                    (case (:event-type last-event)
                      :workflow-completed :completed
                      :workflow-failed :failed
                      :workflow-cancelled :cancelled
                      :running)))))))

  ;; --- Phase C: ownership-based recovery (serializable read-modify-write) ---
  (claim-owner [_ workflow-id owner-id]
    (ftr/run db
      (fn [tx]
        (let [k   (->tuple ["owner" workflow-id])
              cur (<-bytes (fdb-core/get tx root-subspace k))]
          (if (or (nil? cur) (= cur owner-id))
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
            false)))))

  (list-pending [_ owner-id limit]
    (ftr/run db
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
               vec)))))

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
    (ftr/run db
      (fn [tx]
        (let [bucket (or (read-owner tx root-subspace workflow-id) "")
              k      (owner-index-key root-subspace bucket workflow-id)
              entry  (or (<-bytes (fdb-core/get tx root-subspace k)) {})]
          (fdb-core/set tx root-subspace k (->bytes (assoc entry :wake-at wake-at-ms))))))
    nil))

(defn make-fdb-store [db subspace-name]
  (let [root (fsub/create (->tuple [subspace-name]))]
    (->FDBStore db root (atom {}))))
