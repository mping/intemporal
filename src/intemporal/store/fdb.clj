(ns intemporal.store.fdb
  (:require [intemporal.protocol :as p]
            [intemporal.internal.lease :as lease]
            [intemporal.internal.error :as error]
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
                 nil)]
      (ftr/run db
        (fn [tx]
          (fdb-core/set tx history-sub key (->bytes event))
          ;; Phase B2: cache terminal status for O(1) reads.
          (when term
            (fdb-core/set tx root-subspace (->tuple ["state" workflow-id "status"]) (->bytes term)))))
      event))

  (save-events [_ workflow-id events]
    (when (seq events)
      (let [history-sub (fsub/get root-subspace (->tuple ["history" workflow-id]))
            term        (some #(case (:event-type %)
                                 :workflow-completed "completed"
                                 :workflow-failed    "failed"
                                 nil)
                              events)]
        ;; FDB's run wraps a body exception in CompletionException; unwrap so the
        ;; lease-lost ExceptionInfo propagates cleanly (worker/error checks rely on it).
        (try
          (ftr/run db
            (fn [tx]
              ;; Phase C: validate the lease within the serializable transaction.
              (when-let [owner lease/*owner*]
                (let [cur (<-bytes (fdb-core/get tx root-subspace (->tuple ["lease" workflow-id])))]
                  (when (or (not= (:owner-id cur) owner)
                            (< (:lease-until cur 0) (System/currentTimeMillis)))
                    (throw (error/lease-lost-exception workflow-id owner)))))
              (doseq [event events]
                (let [seq-num (:seq event (System/currentTimeMillis))
                      key (->tuple [seq-num (str (java.util.UUID/randomUUID))])]
                  (fdb-core/set tx history-sub key (->bytes event))))
              (when term
                (fdb-core/set tx root-subspace (->tuple ["state" workflow-id "status"]) (->bytes term)))))
          (catch java.util.concurrent.CompletionException ce
            (throw (or (.getCause ce) ce))))))
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

  (add-signal [this workflow-id signal-name signal-data]
    (let [signals-sub (fsub/get root-subspace (->tuple ["signals" workflow-id signal-name]))
          key (->tuple [(System/currentTimeMillis) (str (java.util.UUID/randomUUID))])]
      (ftr/run db
        (fn [tx]
          (fdb-core/set tx signals-sub key (->bytes signal-data))))

      ;; Phase C: durable, cross-pod wake (a worker on any pod resumes the workflow).
      (p/add-runnable this workflow-id :signal)
      ;; In-process fast path for an embedded (no-worker) engine in THIS process.
      (when-let [callback (get-in @callbacks [workflow-id signal-name])]
        (future (callback)))

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
      (future (callback))))

  (is-cancelled? [_ workflow-id]
    (ftr/run db
      (fn [tx]
        (boolean (<-bytes (fdb-core/get tx root-subspace (->tuple ["state" workflow-id "cancelled"])))))))

  (mark-cancelled [this workflow-id]
    (ftr/run db
      (fn [tx]
        (fdb-core/set tx root-subspace (->tuple ["state" workflow-id "cancelled"]) (->bytes true))))
    ;; Phase C: durable wake so a worker resumes the sleeper and it observes the flag.
    (p/add-runnable this workflow-id :cancel))

  (get-workflow-status [this workflow-id]
    (if (p/is-cancelled? this workflow-id)
      :cancelled
      ;; Phase B2 fast path: terminal status cached at ["state" id "status"].
      (let [cached (<-bytes (ftr/run db
                              (fn [tx]
                                (fdb-core/get tx root-subspace
                                              (->tuple ["state" workflow-id "status"])))))]
        (if (#{"completed" "failed"} cached)
          (keyword cached)
          (let [history (p/load-history this workflow-id)]
            (if (empty? history)
              :not-found
              (let [last-event (last history)]
                (case (:event-type last-event)
                  :workflow-completed :completed
                  :workflow-failed :failed
                  :running))))))))

  ;; --- Phase C: lease / ownership (serializable read-modify-write) ---
  (claim-workflow [_ workflow-id owner-id lease-ms]
    (ftr/run db
      (fn [tx]
        (let [k   (->tuple ["lease" workflow-id])
              cur (<-bytes (fdb-core/get tx root-subspace k))
              now (System/currentTimeMillis)]
          (if (or (nil? cur) (= (:owner-id cur) owner-id) (< (:lease-until cur 0) now))
            (do (fdb-core/set tx root-subspace k
                              (->bytes {:owner-id owner-id :lease-until (+ now lease-ms)}))
                true)
            false)))))

  (renew-lease [_ workflow-id owner-id lease-ms]
    (ftr/run db
      (fn [tx]
        (let [k   (->tuple ["lease" workflow-id])
              cur (<-bytes (fdb-core/get tx root-subspace k))
              now (System/currentTimeMillis)]
          (if (= (:owner-id cur) owner-id)
            (do (fdb-core/set tx root-subspace k
                              (->bytes {:owner-id owner-id :lease-until (+ now lease-ms)}))
                true)
            false)))))

  (release-lease [_ workflow-id owner-id]
    (ftr/run db
      (fn [tx]
        (let [k   (->tuple ["lease" workflow-id])
              cur (<-bytes (fdb-core/get tx root-subspace k))]
          (when (= (:owner-id cur) owner-id)
            (fdb-core/clear tx root-subspace k)))))
    nil)

  ;; --- Phase C: runnable markers (subspace ["runnable" wf-id]) ---
  (add-runnable [_ workflow-id reason]
    (ftr/run db
      (fn [tx]
        (fdb-core/set tx root-subspace (->tuple ["runnable" workflow-id])
                      (->bytes {:reason (name reason)
                                :enqueued-at (System/currentTimeMillis)
                                :claimed-until 0}))))
    nil)

  (claim-runnable [_ _owner-id batch-size claim-ms]
    (ftr/run db
      (fn [tx]
        (let [run-sub (fsub/get root-subspace (->tuple ["runnable"]))
              rows    (fdb-core/get-range tx (fsub/range run-sub))
              now     (System/currentTimeMillis)
              due     (->> rows
                           (keep (fn [[key value]]
                                   (let [m   (<-bytes value)
                                         wid (nth key (dec (count key)))]
                                     (when (< (:claimed-until m 0) now) [wid m]))))
                           (take batch-size)
                           vec)]
          (doseq [[wid m] due]
            (fdb-core/set tx root-subspace (->tuple ["runnable" wid])
                          (->bytes (assoc m :claimed-until (+ now claim-ms)))))
          (mapv first due)))))

  (delete-runnable [_ workflow-id]
    (ftr/run db
      (fn [tx]
        (fdb-core/clear tx root-subspace (->tuple ["runnable" workflow-id]))))
    nil))

(defn make-fdb-store [db subspace-name]
  (let [root (fsub/create (->tuple [subspace-name]))]
    (->FDBStore db root (atom {}))))
