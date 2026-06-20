(ns intemporal.store.jdbc
  (:require [intemporal.protocol :as p]
            [intemporal.internal.logging :as log]
            [migratus.core :as migratus]
            [next.jdbc :as jdbc]
            [next.jdbc.prepare :as prepare]
            [next.jdbc.result-set :as rs]
            [cheshire.core :as json]
            [hikari-cp.core :as hikari])
  (:import (java.lang AutoCloseable)
           (org.postgresql.util PGobject)
           (java.sql PreparedStatement)))

;; ============================================================================
;; JDBC URL resolution
;; ============================================================================

(def default-jdbc-url
  "jdbc:postgresql://localhost:5432/root?user=root&password=root")

(defn resolve-jdbc-url
  "Returns the JDBC URL from DATABASE_URL env var, or the provided override,
  or the library default.  Callers can pass an explicit url as the first
  argument to bypass the env var.

  Priority: explicit override > DATABASE_URL env var > default-jdbc-url"
  ([] (resolve-jdbc-url nil))
  ([override]
   (or override
       (System/getenv "DATABASE_URL")
       default-jdbc-url)))

(comment
  (let [cfg {:store :database
             :migration-dir "migrations/postgres"
             :db {:jdbcUrl "jdbc:postgresql://localhost:5432/root?user=root&password=root"}}]
    (migratus/rollback cfg)
    (migratus/migrate cfg))

  ;(migratus/create cfg "initial-schema"))
  "")

;; ============================================================================
;; Database kind detection & migration
;; ============================================================================

(defn- detect-kind [jdbc-url]
  (cond
    (.startsWith jdbc-url "jdbc:postgresql") :postgres
    (.startsWith jdbc-url "jdbc:mariadb") :mariadb
    (.startsWith jdbc-url "jdbc:mysql") :mysql
    :else (throw (ex-info "Unknown jdbc url %s; only postgres and mysql/mariadb supported" {:jdbc-url jdbc-url}))))

(defn- migrate! [jdbc-url]
  (let [kind (detect-kind jdbc-url)
        cfg {:store :database
             :migration-dir (str "migrations/" (name kind))
             :db {:jdbcUrl jdbc-url}}]
    (migratus/migrate cfg)
    kind))

;; ============================================================================
;; SQL dialect helpers — dispatch on database kind to handle syntax differences
;; ============================================================================

(defn- upsert-workflow-sql [kind]
  (case kind
    :postgres "INSERT INTO intemporal_workflows (id) VALUES (?) ON CONFLICT (id) DO NOTHING"
    ;; MariaDB / MySQL
    "INSERT IGNORE INTO intemporal_workflows (id) VALUES (?)"))

(defn- upsert-history-sql [kind]
  (case kind
    :postgres "INSERT INTO intemporal_history (workflow_id, seq, event_type, data)
                VALUES (?, ?, ?, ?)
                ON CONFLICT (workflow_id, seq) DO UPDATE SET event_type = EXCLUDED.event_type, data = EXCLUDED.data"
    ;; MariaDB / MySQL
    "INSERT INTO intemporal_history (workflow_id, seq, event_type, data)
                VALUES (?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE event_type = VALUES(event_type), data = VALUES(data)"))

(defn- upsert-cancel-sql [kind]
  (case kind
    :postgres "INSERT INTO intemporal_workflows (id, cancelled) VALUES (?, true)
                ON CONFLICT (id) DO UPDATE SET cancelled = true"
    ;; MariaDB / MySQL
    "INSERT INTO intemporal_workflows (id, cancelled) VALUES (?, true)
                ON DUPLICATE KEY UPDATE cancelled = true"))

(defn- set-wake-at-sql [kind]
  (case kind
    :postgres "UPDATE intemporal_workflows SET wake_at = to_timestamp(? / 1000.0) WHERE id = ?"
    ;; MariaDB / MySQL
    "UPDATE intemporal_workflows SET wake_at = FROM_UNIXTIME(? / 1000.0) WHERE id = ?"))

;; ============================================================================
;; JSON serialization
;; ============================================================================

;; PostgreSQL: PGobject for native JSONB binding
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

;; For non-PostgreSQL databases (MariaDB/MySQL), maps/vectors must be
;; pre-serialized to JSON strings since the PGobject extension above only
;; fires for PostgreSQL params.  The MariaDB JDBC driver accepts String
;; values for JSON columns.
(defn- ->json-param [kind x]
  (case kind
    :postgres x ; PGobject extension handles it
    (json/generate-string x))) ; pre-serialize for MariaDB/MySQL

;; For non-PostgreSQL databases (MariaDB/MySQL), JSON columns are returned as
;; Strings by the JDBC driver (unlike PostgreSQL where PGobject triggers
;; automatic Cheshire parsing).  Parse them back to Clojure data.
(defn- <-json-val [kind x]
  (if (and (not= kind :postgres) (string? x))
    (json/parse-string x true)
    x))

;; ============================================================================
;; JdbcStore Implementation
;; ============================================================================

(defrecord JdbcStore [datasource callbacks kind]
  AutoCloseable
  (close [this]
    (when datasource (hikari/close-datasource datasource)))
  p/IStore
  (load-history [_ workflow-id]
    (let [rows (jdbc/execute! datasource
                              ["SELECT event_type, data FROM intemporal_history WHERE workflow_id = ? ORDER BY id ASC"
                               workflow-id])]
      (mapv (fn [{:intemporal_history/keys [event_type data]}]
              (assoc (<-json-val kind data) :event-type (keyword event_type)))
            rows)))

  (save-event [this workflow-id event]
    (p/save-events this workflow-id [event])
    event)

  (save-events [_ workflow-id events]
    (when (seq events)
      (jdbc/with-transaction [tx datasource]
        ;; Ensure workflow exists
        (jdbc/execute! tx [(upsert-workflow-sql kind) workflow-id])
        ;; Insert events.  Idempotent under normal replay (the engine re-writes
        ;; the same seq with identical data on each pass).  Concurrent execution
        ;; is prevented by exclusive ownership (claim-owner) + the worker
        ;; resuming owned workflows one at a time.
        (doseq [event events]
          (let [seq-num (:seq event)
                event-type (name (:event-type event))
                data (->json-param kind (dissoc event :event-type))]
            (jdbc/execute! tx [(upsert-history-sql kind)
                               workflow-id seq-num event-type data])))
        ;; Phase B2: maintain the O(1) status column on terminal events.
        (when-let [term (some (fn [e] (case (:event-type e)
                                        :workflow-completed "completed"
                                        :workflow-failed "failed"
                                        :workflow-cancelled "cancelled"
                                        :workflow-terminated "terminated"
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
        (assoc (<-json-val kind (:intemporal_history/data row)) :event-type event-type))))

  (get-pending-signals [_ workflow-id]
    (let [rows (jdbc/execute! datasource
                              ["SELECT signal_name, payload FROM intemporal_signals WHERE workflow_id = ? ORDER BY id ASC"
                               workflow-id])]
      (reduce (fn [acc {:intemporal_signals/keys [signal_name payload]}]
                (update acc signal_name (fnil conj []) (<-json-val kind payload)))
              {}
              rows)))

  (add-signal [_ workflow-id signal-name signal-data]
    (jdbc/with-transaction [tx datasource]
      (jdbc/execute! tx [(upsert-workflow-sql kind) workflow-id])
      (jdbc/execute! tx ["INSERT INTO intemporal_signals (workflow_id, signal_name, payload) VALUES (?, ?, ?)"
                         workflow-id signal-name (->json-param kind signal-data)]))
    ;; In-process fast path for an embedded (no-worker) engine in THIS process.
    ;; Worker mode picks the workflow up via the ownership scan (list-pending).
    (when-let [callback (get-in @callbacks [workflow-id signal-name])]
      (future
        (try (callback)
             (catch Throwable t
               (log/warnf t "Signal callback threw for workflow %s signal %s" workflow-id signal-name)))))
    signal-data)

  (consume-signal [_ workflow-id signal-name]
    (jdbc/with-transaction [tx datasource]
      (let [row (jdbc/execute-one! tx
                                   ["SELECT id, payload FROM intemporal_signals WHERE workflow_id = ? AND signal_name = ? ORDER BY id ASC FOR UPDATE SKIP LOCKED"
                                    workflow-id signal-name])]
        (when row
          (jdbc/execute! tx ["DELETE FROM intemporal_signals WHERE id = ?" (:intemporal_signals/id row)])
          (<-json-val kind (:intemporal_signals/payload row))))))

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
    (let [row (jdbc/execute-one! datasource
                                 ["SELECT cancelled FROM intemporal_workflows WHERE id = ?"
                                  workflow-id])]
      (boolean (:intemporal_workflows/cancelled row))))

  (mark-cancelled [_ workflow-id]
    (jdbc/execute! datasource
                   [(upsert-cancel-sql kind) workflow-id]))

  (get-workflow-status [this workflow-id]
    (let [wf-row (jdbc/execute-one! datasource
                                    ["SELECT cancelled, status FROM intemporal_workflows WHERE id = ?"
                                     workflow-id])
          status (:intemporal_workflows/status wf-row)]
      (cond
        (nil? wf-row) :not-found
        ;; Check terminal status first: a late mark-cancelled must not override
        ;; a workflow that already completed or failed.
        (#{"completed" "failed" "cancelled" "terminated"} status) (keyword status)
        (:intemporal_workflows/cancelled wf-row) :cancelled
        ;; Otherwise (running / pre-migration) derive from history as before.
        :else (let [history (p/load-history this workflow-id)]
                (if (empty? history)
                  :not-found
                  (let [last-event (last history)]
                    (case (:event-type last-event)
                      :workflow-completed :completed
                      :workflow-failed :failed
                      :workflow-cancelled :cancelled
                      :workflow-terminated :terminated
                      :running)))))))

  ;; --- Phase C: ownership-based recovery ---
  (claim-owner [_ workflow-id owner-id]
    (let [res (jdbc/execute-one! datasource
                                 ["UPDATE intemporal_workflows SET owner = ?
                  WHERE id = ?
                    AND (owner IS NULL OR owner = ?)
                    AND status NOT IN ('completed','failed','cancelled','terminated')"
                                  owner-id workflow-id owner-id])]
      (pos? (or (:next.jdbc/update-count res) 0))))

  (list-pending [_ owner-id limit]
    (let [rows (jdbc/execute! datasource
                              ["SELECT id FROM intemporal_workflows
                   WHERE status NOT IN ('completed','failed','cancelled','terminated')
                     AND cancelled = FALSE
                     AND (wake_at IS NULL OR wake_at <= now())
                     AND (owner = ? OR owner IS NULL)
                   ORDER BY created_at
                   LIMIT ?"
                               owner-id limit])]
      (mapv :intemporal_workflows/id rows)))

  (release-owner [_ owner-id]
    (jdbc/execute! datasource
                   ["UPDATE intemporal_workflows SET owner = NULL
                     WHERE owner = ? AND status NOT IN ('completed','failed','cancelled','terminated')"
                    owner-id])
    nil)

  (set-wake-at [_ workflow-id wake-at-ms]
    (if wake-at-ms
      (jdbc/execute! datasource
                     [(set-wake-at-sql kind) wake-at-ms workflow-id])
      (jdbc/execute! datasource
                     ["UPDATE intemporal_workflows SET wake_at = NULL WHERE id = ?"
                      workflow-id]))
    nil)

  ;; --- Tier 2: independent child workflows ---
  (link-child! [_ parent-id parent-seq child-id policy]
    ;; The child row already exists (its :workflow-started event was saved just
    ;; before this call). Stamp the parent linkage on it; idempotent — re-linking
    ;; writes the same values.
    (jdbc/with-transaction [tx datasource]
      (jdbc/execute! tx [(upsert-workflow-sql kind) child-id])
      (jdbc/execute! tx ["UPDATE intemporal_workflows
                          SET parent_workflow_id = ?, parent_seq = ?, parent_close_policy = ?
                          WHERE id = ?"
                         parent-id parent-seq (name policy) child-id]))
    nil)

  (list-children [this parent-id]
    (let [rows (jdbc/execute! datasource
                              ["SELECT id, parent_seq, parent_close_policy
                   FROM intemporal_workflows WHERE parent_workflow_id = ?"
                               parent-id])]
      (mapv (fn [{:intemporal_workflows/keys [id parent_seq parent_close_policy]}]
              {:child-id id
               :parent-seq parent_seq
               :policy (keyword parent_close_policy)
               :status (p/get-workflow-status this id)})
            rows))))

;; TODO use more complete opts
(defn make-jdbc-store
  "Creates a new jdbc store.  The JDBC URL prefix determines the database kind
  (postgresql | mariadb | mysql) and thus the SQL dialect and migration directory
  used."
  [jdbc-url]
  (let [kind (migrate! jdbc-url)
        ds (hikari/make-datasource {:jdbc-url jdbc-url})]
    (->JdbcStore ds (atom {}) kind)))
