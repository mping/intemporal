(ns intemporal.store.jdbc
  (:require [intemporal.protocol :as p]
            [migratus.core :as migratus]
            [next.jdbc :as jdbc]
            [next.jdbc.prepare :as prepare]
            [next.jdbc.result-set :as rs]
            [cheshire.core :as json]
            [hikari-cp.core :as hikari])
  (:import (java.lang AutoCloseable)
           (org.postgresql.util PGobject)
           (java.sql PreparedStatement)))

(comment
  (let [cfg {:store         :database
             :migration-dir "migrations/postgres"
             :db            {:jdbcUrl "jdbc:postgresql://localhost:5432/root?user=root&password=root"}}]
    (migratus/rollback cfg)
    (migratus/migrate cfg))

  ;(migratus/create cfg "initial-schema"))
  "")

(defn- migrate! [jdbc-url]
  (let [kind (cond
               (.startsWith jdbc-url "jdbc:postgresql") :postgres
               (.startsWith jdbc-url "jdbc:mariadb") :mariadb
               (.startsWith jdbc-url "jdbc:mysql") :mysql
               :else (throw (ex-info "Unknown jdbc url %s; only postgres and mysql/mariadb supported" {:jdbc-url jdbc-url})))
        cfg  {:store         :database
              :migration-dir (str "migrations/" (name kind))
              :db            {:jdbcUrl jdbc-url}}]
    (migratus/migrate cfg)))

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


;; ============================================================================
;; Postgres Store Implementation
;; ============================================================================

(defrecord JdbcStore [datasource callbacks]
  AutoCloseable
  (close [this]
    (when datasource (hikari/close-datasource datasource)))
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
        ;; Insert events. DO UPDATE keeps the write idempotent under normal
        ;; replay (the engine re-writes the same seq with identical data on
        ;; each pass). Concurrent execution is prevented by exclusive ownership
        ;; (claim-owner) + the worker resuming owned workflows one at a time.
        (doseq [event events]
          (let [seq-num    (:seq event)
                event-type (name (:event-type event))
                data       (dissoc event :event-type)]
            (jdbc/execute! tx ["INSERT INTO intemporal_history (workflow_id, seq, event_type, data)
                                VALUES (?, ?, ?, ?)
                                ON CONFLICT (workflow_id, seq) DO UPDATE SET event_type = EXCLUDED.event_type, data = EXCLUDED.data"
                               workflow-id seq-num event-type data])))
        ;; Phase B2: maintain the O(1) status column on terminal events.
        (when-let [term (some (fn [e] (case (:event-type e)
                                        :workflow-completed "completed"
                                        :workflow-failed    "failed"
                                        nil))
                              events)]
          (jdbc/execute! tx ["UPDATE intemporal_workflows SET status = ? WHERE id = ?"
                             term workflow-id]))))
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

  (add-signal [_ workflow-id signal-name signal-data]
    (jdbc/with-transaction [tx datasource]
      (jdbc/execute! tx ["INSERT INTO intemporal_workflows (id) VALUES (?) ON CONFLICT (id) DO NOTHING"
                         workflow-id])
      (jdbc/execute! tx ["INSERT INTO intemporal_signals (workflow_id, signal_name, payload) VALUES (?, ?, ?)"
                         workflow-id signal-name signal-data]))
    ;; In-process fast path for an embedded (no-worker) engine in THIS process.
    ;; Worker mode picks the workflow up via the ownership scan (list-pending).
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

  (register-wake-callback [_ workflow-id callback]
    (swap! callbacks assoc-in [workflow-id ::wake] callback))

  (wake-workflow [_ workflow-id]
    (when-let [callback (get-in @callbacks [workflow-id ::wake])]
      (future (callback))))

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
                                    ["SELECT cancelled, status FROM intemporal_workflows WHERE id = ?"
                                     workflow-id])
          status (:intemporal_workflows/status wf-row)]
      (cond
        (nil? wf-row) :not-found
        (:intemporal_workflows/cancelled wf-row) :cancelled
        ;; Phase B2 fast path: terminal status is cached in the column (O(1)).
        (#{"completed" "failed"} status) (keyword status)
        ;; Otherwise (running / pre-migration) derive from history as before.
        :else (let [history (p/load-history this workflow-id)]
                (if (empty? history)
                  :not-found
                  (let [last-event (last history)]
                    (case (:event-type last-event)
                      :workflow-completed :completed
                      :workflow-failed :failed
                      :running)))))))

  ;; --- Phase C: ownership-based recovery ---
  (claim-owner [_ workflow-id owner-id]
    (let [res (jdbc/execute-one! datasource
                ["UPDATE intemporal_workflows SET owner = ?
                  WHERE id = ? AND (owner IS NULL OR owner = ?)"
                 owner-id workflow-id owner-id])]
      (pos? (or (:next.jdbc/update-count res) 0))))

  (list-pending [_ owner-id limit]
    (let [rows (jdbc/execute! datasource
                 ["SELECT id FROM intemporal_workflows
                   WHERE status NOT IN ('completed','failed')
                     AND (wake_at IS NULL OR wake_at <= now())
                     AND (owner = ? OR owner IS NULL)
                   ORDER BY created_at
                   LIMIT ?"
                  owner-id limit])]
      (mapv :intemporal_workflows/id rows)))

  (release-owner [_ owner-id]
    (jdbc/execute! datasource
                   ["UPDATE intemporal_workflows SET owner = NULL
                     WHERE owner = ? AND status NOT IN ('completed','failed')"
                    owner-id])
    nil)

  (set-wake-at [_ workflow-id wake-at-ms]
    (jdbc/execute! datasource
      ["UPDATE intemporal_workflows
        SET wake_at = CASE WHEN ?::bigint IS NULL THEN NULL
                           ELSE to_timestamp(?::bigint / 1000.0) END
        WHERE id = ?"
       wake-at-ms wake-at-ms workflow-id])
    nil))

;; TODO use more complete opts
(defn make-jdbc-store
  "Creates a new jdbc store"
  [jdbc-url]
  (migrate! jdbc-url)
  (let [ds (hikari/make-datasource {:jdbc-url jdbc-url})]
    (->JdbcStore ds (atom {}))))
