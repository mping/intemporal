(ns intemporal.store.jdbc
  (:require [intemporal.protocol :as p]
            [next.jdbc :as jdbc]
            [next.jdbc.prepare :as prepare]
            [next.jdbc.result-set :as rs]
            [cheshire.core :as json])
  (:import (org.postgresql.util PGobject)
           (java.sql PreparedStatement)))

;; ============================================================================
;; JSONB Handling for next.jdbc
;; ============================================================================

(defn- ->pgobject [x]
  (let [pgobj (PGobject.)]
    (.setType pgobj "jsonb")
    (.setValue pgobj (json/generate-string x))
    pgobj))

(extend-protocol prepare/SettableParameter
  clojure.lang.IPersistentMap
  (set-parameter [m ^PreparedStatement s i]
    (.setObject s i (->pgobject m)))
  clojure.lang.IPersistentVector
  (set-parameter [v ^PreparedStatement s i]
    (.setObject s i (->pgobject v))))

(extend-protocol rs/ReadableColumn
  PGobject
  (read-column-by-label [^PGobject v _]
    (if (= "jsonb" (.getType v))
      (json/parse-string (.getValue v) true)
      (.getValue v)))
  (read-column-by-index [^PGobject v _ _]
    (if (= "jsonb" (.getType v))
      (json/parse-string (.getValue v) true)
      (.getValue v))))

;; ============================================================================
;; Schema
;; ============================================================================

(defn create-schema! [ds]
  (jdbc/execute! ds ["
CREATE TABLE IF NOT EXISTS intemporal_workflows (
    id TEXT PRIMARY KEY,
    cancelled BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);"])
  (jdbc/execute! ds ["
CREATE TABLE IF NOT EXISTS intemporal_history (
    id SERIAL PRIMARY KEY,
    workflow_id TEXT REFERENCES intemporal_workflows(id) ON DELETE CASCADE,
    seq INTEGER,
    event_type TEXT,
    data JSONB,
    UNIQUE (workflow_id, seq)
);"])
  (jdbc/execute! ds ["
CREATE TABLE IF NOT EXISTS intemporal_signals (
    id SERIAL PRIMARY KEY,
    workflow_id TEXT REFERENCES intemporal_workflows(id) ON DELETE CASCADE,
    signal_name TEXT,
    payload JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);"]))

;; ============================================================================
;; Postgres Store Implementation
;; ============================================================================

(defrecord JdbcStore [datasource callbacks]
  p/IStore
  (load-history [_ workflow-id]
    (let [rows (jdbc/execute! datasource
                              ["SELECT event_type, data FROM intemporal_history WHERE workflow_id = ? ORDER BY id ASC"
                               workflow-id])]
      (mapv (fn [{:intemporal_history/keys [event_type data]}]
              (assoc data :event-type (keyword event_type)))
            rows)))

  (save-event [this workflow-id event]
    (p/save-events this workflow-id [event])
    event)

  (save-events [_ workflow-id events]
    (when (seq events)
      (jdbc/with-transaction [tx datasource]
        ;; Ensure workflow exists
        (jdbc/execute! tx ["INSERT INTO intemporal_workflows (id) VALUES (?) ON CONFLICT (id) DO NOTHING"
                           workflow-id])
        ;; Insert events
        (doseq [event events]
          (let [seq-num (:seq event)
                event-type (name (:event-type event))
                data (dissoc event :event-type)]
            (jdbc/execute! tx ["INSERT INTO intemporal_history (workflow_id, seq, event_type, data)
                                VALUES (?, ?, ?, ?)
                                ON CONFLICT (workflow_id, seq) DO UPDATE SET event_type = EXCLUDED.event_type, data = EXCLUDED.data"
                               workflow-id seq-num event-type data])))))
    events)

  (find-event [_ workflow-id event-type seq-num]
    (let [row (jdbc/execute-one! datasource
                                 ["SELECT data FROM intemporal_history WHERE workflow_id = ? AND event_type = ? AND seq = ?"
                                  workflow-id (name event-type) seq-num])]
      (when row
        (assoc (:intemporal_history/data row) :event-type event-type))))

  (get-pending-signals [_ workflow-id]
    (let [rows (jdbc/execute! datasource
                              ["SELECT signal_name, payload FROM intemporal_signals WHERE workflow_id = ? ORDER BY id ASC"
                               workflow-id])]
      (reduce (fn [acc {:intemporal_signals/keys [signal_name payload]}]
                (update acc signal_name (fnil conj []) payload))
              {}
              rows)))

  (add-signal [this workflow-id signal-name signal-data]
    (jdbc/with-transaction [tx datasource]
      (jdbc/execute! tx ["INSERT INTO intemporal_workflows (id) VALUES (?) ON CONFLICT (id) DO NOTHING"
                         workflow-id])
      (jdbc/execute! tx ["INSERT INTO intemporal_signals (workflow_id, signal_name, payload) VALUES (?, ?, ?)"
                         workflow-id signal-name signal-data]))
    
    ;; Trigger callback if registered
    (when-let [callback (get-in @callbacks [workflow-id signal-name])]
      (future (callback)))
    signal-data)

  (consume-signal [_ workflow-id signal-name]
    (jdbc/with-transaction [tx datasource]
      (let [row (jdbc/execute-one! tx
                                   ["SELECT id, payload FROM intemporal_signals WHERE workflow_id = ? AND signal_name = ? ORDER BY id ASC FOR UPDATE SKIP LOCKED"
                                    workflow-id signal-name])]
        (when row
          (jdbc/execute! tx ["DELETE FROM intemporal_signals WHERE id = ?" (:intemporal_signals/id row)])
          (:intemporal_signals/payload row)))))

  (register-signal-callback [_ workflow-id signal-name callback]
    (swap! callbacks assoc-in [workflow-id signal-name] callback))

  (unregister-signal-callback [_ workflow-id signal-name]
    (swap! callbacks update workflow-id dissoc signal-name))

  (is-cancelled? [_ workflow-id]
    (let [row (jdbc/execute-one! datasource
                                 ["SELECT cancelled FROM intemporal_workflows WHERE id = ?"
                                  workflow-id])]
      (boolean (:intemporal_workflows/cancelled row))))

  (mark-cancelled [_ workflow-id]
    (jdbc/execute! datasource
                   ["INSERT INTO intemporal_workflows (id, cancelled) VALUES (?, true)
                     ON CONFLICT (id) DO UPDATE SET cancelled = true"
                    workflow-id]))

  (get-workflow-status [this workflow-id]
    (let [wf-row (jdbc/execute-one! datasource
                                   ["SELECT cancelled FROM intemporal_workflows WHERE id = ?"
                                    workflow-id])]
      (cond
        (nil? wf-row) :not-found
        (:intemporal_workflows/cancelled wf-row) :cancelled
        :else (let [history (p/load-history this workflow-id)]
                (if (empty? history)
                  :not-found
                  (let [last-event (last history)]
                    (case (:event-type last-event)
                      :workflow-completed :completed
                      :workflow-failed :failed
                      :running))))))))

(defn make-jdbc-store [datasource]
  (->JdbcStore datasource (atom {})))
