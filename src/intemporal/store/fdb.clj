(ns intemporal.store.fdb
  (:require [intemporal.protocol :as p]
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
          key (->tuple [seq-num (str (java.util.UUID/randomUUID))])]
      (ftr/run db
        (fn [tx]
          (fdb-core/set tx history-sub key (->bytes event))))
      event))

  (save-events [_ workflow-id events]
    (when (seq events)
      (let [history-sub (fsub/get root-subspace (->tuple ["history" workflow-id]))]
        (ftr/run db
          (fn [tx]
            (doseq [event events]
              (let [seq-num (:seq event (System/currentTimeMillis))
                    key (->tuple [seq-num (str (java.util.UUID/randomUUID))])]
                (fdb-core/set tx history-sub key (->bytes event))))))))
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

      ;; Invoke callback asynchronously
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

  (is-cancelled? [_ workflow-id]
    (ftr/run db
      (fn [tx]
        (boolean (<-bytes (fdb-core/get tx root-subspace (->tuple ["state" workflow-id "cancelled"])))))))

  (mark-cancelled [_ workflow-id]
    (ftr/run db
      (fn [tx]
        (fdb-core/set tx root-subspace (->tuple ["state" workflow-id "cancelled"]) (->bytes true)))))

  (get-workflow-status [this workflow-id]
    (if (p/is-cancelled? this workflow-id)
      :cancelled
      (let [history (p/load-history this workflow-id)]
        (if (empty? history)
          :not-found
          (let [last-event (last history)]
            (case (:event-type last-event)
              :workflow-completed :completed
              :workflow-failed :failed
              :running)))))))

(defn make-fdb-store [db subspace-name]
  (let [root (fsub/create (->tuple [subspace-name]))]
    (->FDBStore db root (atom {}))))
