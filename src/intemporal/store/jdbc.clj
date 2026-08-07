(ns intemporal.store.jdbc
  (:require [intemporal.protocol :as p]
            [intemporal.spec :as spec]
            [intemporal.internal.codec :as codec]
            [intemporal.internal.logging :as log]
            [migratus.core :as migratus]
            [next.jdbc :as jdbc]
            [hikari-cp.core :as hikari])
  (:import (java.lang AutoCloseable)))

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
    :else (throw (ex-info (str "Unknown jdbc url " jdbc-url "; only postgres and mysql/mariadb supported")
                          {:jdbc-url jdbc-url}))))

(defn- migrate! [jdbc-url]
  (let [kind (detect-kind jdbc-url)
        ;; MySQL shares the MariaDB migrations (there is no migrations/mysql dir).
        dir  (case kind :postgres "postgres" "mariadb")
        cfg {:store :database
             :migration-dir (str "migrations/" dir)
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

;; A1: history is keyed per (workflow_id, seq, event_type) — the engine records
;; multiple event types at the same seq (scheduled + completed, started +
;; completed, ...), so the conflict target must include event_type or later
;; events silently overwrite earlier ones. Re-writing the SAME event type at the
;; same seq (normal replay) stays idempotent via the upsert.
(defn- upsert-history-sql [kind]
  (case kind
    :postgres "INSERT INTO intemporal_history (workflow_id, seq, event_type, data)
                VALUES (?, ?, ?, ?)
                ON CONFLICT (workflow_id, seq, event_type) DO UPDATE SET data = EXCLUDED.data"
    ;; MariaDB / MySQL
    "INSERT INTO intemporal_history (workflow_id, seq, event_type, data)
                VALUES (?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE data = VALUES(data)"))

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
;; Payload serialization
;; ============================================================================

;; EDN, via the codec shared with the FDB store. Previously cheshire, whose
;; `(parse-string s true)` keywordizes map KEYS but not VALUES — so a keyword
;; activity result came back as a string and broke replay determinism (bug #22).
;; Migration 20260807000007 changed `intemporal_history.data` and
;; `intemporal_signals.payload` from JSONB/JSON to text accordingly, so there is
;; no longer a PGobject to bind and `kind` no longer affects serialization.
;;
;; Conversion stays EXPLICIT at this store's call sites rather than going through
;; `extend-protocol prepare/SettableParameter` / `rs/ReadableColumn`, which are
;; JVM-global: extending IPersistentMap/IPersistentVector would silently coerce
;; every map/vector parameter of every next.jdbc call in the host application
;; (including non-intemporal ones).
(defn- ->payload-param [_kind x]
  (codec/encode x))

(defn- <-payload-val [_kind x]
  (if (string? x)
    (codec/decode x)
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
      (->> rows
           (mapv (fn [{:intemporal_history/keys [event_type data]}]
                   (assoc (<-payload-val kind data) :event-type (keyword event_type))))
           (spec/check! ::spec/events))))

  (save-event [this workflow-id event]
    ;; No check! here — this delegates to save-events, which asserts.
    (p/save-events this workflow-id [event])
    event)

  (save-events [_ workflow-id events]
    (spec/check! ::spec/events events)
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
                data (->payload-param kind (dissoc event :event-type))]
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
    (spec/check! ::spec/event-type event-type)
    (spec/check! ::spec/seq seq-num)
    (let [row (jdbc/execute-one! datasource
                                 ["SELECT data FROM intemporal_history WHERE workflow_id = ? AND event_type = ? AND seq = ?"
                                  workflow-id (name event-type) seq-num])]
      (->> (when row
             (assoc (<-payload-val kind (:intemporal_history/data row)) :event-type event-type))
           (spec/check! ::spec/maybe-event))))

  (max-seq [_ workflow-id]
    ;; MAX(seq) WHERE workflow_id = ? is served by the leading (workflow_id,
    ;; seq, ...) columns of uq_intemporal_history_wf_seq_type — an index range
    ;; scan for the last matching entry, not a full history load/deserialize.
    (->> (jdbc/execute-one! datasource
                            ["SELECT MAX(seq) AS max_seq FROM intemporal_history WHERE workflow_id = ?"
                             workflow-id])
         vals
         first
         (spec/check! ::spec/max-seq-result)))

  (get-pending-signals [_ workflow-id]
    (let [rows (jdbc/execute! datasource
                              ["SELECT signal_name, payload FROM intemporal_signals WHERE workflow_id = ? ORDER BY id ASC"
                               workflow-id])]
      (->> rows
           (reduce (fn [acc {:intemporal_signals/keys [signal_name payload]}]
                     (update acc signal_name (fnil conj []) (<-payload-val kind payload)))
                   {})
           (spec/check! ::spec/pending-signals))))

  (add-signal [_ workflow-id signal-name signal-data]
    (jdbc/with-transaction [tx datasource]
      (jdbc/execute! tx [(upsert-workflow-sql kind) workflow-id])
      (jdbc/execute! tx ["INSERT INTO intemporal_signals (workflow_id, signal_name, payload) VALUES (?, ?, ?)"
                         workflow-id signal-name (->payload-param kind signal-data)]))
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
    signal-data)

  (consume-signal [_ workflow-id signal-name]
    (jdbc/with-transaction [tx datasource]
      (let [row (jdbc/execute-one! tx
                                   ["SELECT id, payload FROM intemporal_signals WHERE workflow_id = ? AND signal_name = ? ORDER BY id ASC FOR UPDATE SKIP LOCKED"
                                    workflow-id signal-name])]
        (when row
          (jdbc/execute! tx ["DELETE FROM intemporal_signals WHERE id = ?" (:intemporal_signals/id row)])
          (<-payload-val kind (:intemporal_signals/payload row))))))

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
      (->> (boolean (:intemporal_workflows/cancelled row))
           (spec/check! ::spec/boolean-result))))

  (mark-cancelled [_ workflow-id]
    (jdbc/execute! datasource
                   [(upsert-cancel-sql kind) workflow-id]))

  (get-workflow-status [this workflow-id]
    (let [wf-row (jdbc/execute-one! datasource
                                    ["SELECT cancelled, status FROM intemporal_workflows WHERE id = ?"
                                     workflow-id])
          status (:intemporal_workflows/status wf-row)]
      (->> (cond
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
                           :running)))))
           (spec/check! ::spec/workflow-status))))

  ;; --- Phase C: ownership-based recovery ---
  (claim-owner [_ workflow-id owner-id]
    (let [res (jdbc/execute-one! datasource
                                 ["UPDATE intemporal_workflows SET owner = ?
                  WHERE id = ?
                    AND (owner IS NULL OR owner = ?)
                    AND status NOT IN ('completed','failed','cancelled','terminated')"
                                  owner-id workflow-id owner-id])]
      (->> (pos? (or (:next.jdbc/update-count res) 0))
           (spec/check! ::spec/boolean-result))))

  ;; A4: cancelled-but-not-finalized workflows MUST stay listed — the worker has
  ;; to re-drive them so the body observes the cancel flag, runs any saga
  ;; compensation, and writes the terminal :workflow-cancelled event (which then
  ;; excludes them via the status filter).
  (list-pending [_ owner-id limit]
    (spec/check! ::spec/limit limit)
    (let [rows (jdbc/execute! datasource
                              ["SELECT id FROM intemporal_workflows
                   WHERE status NOT IN ('completed','failed','cancelled','terminated')
                     AND (wake_at IS NULL OR wake_at <= now())
                     AND (owner = ? OR owner IS NULL)
                   ORDER BY created_at
                   LIMIT ?"
                               owner-id limit])]
      (->> rows
           (mapv :intemporal_workflows/id)
           (spec/check! ::spec/pending-ids))))

  (release-owner [_ owner-id]
    (jdbc/execute! datasource
                   ["UPDATE intemporal_workflows SET owner = NULL
                     WHERE owner = ? AND status NOT IN ('completed','failed','cancelled','terminated')"
                    owner-id])
    nil)

  (set-wake-at [_ workflow-id wake-at-ms]
    (spec/check! ::spec/wake-at-ms wake-at-ms)
    (if wake-at-ms
      (jdbc/execute! datasource
                     [(set-wake-at-sql kind) wake-at-ms workflow-id])
      (jdbc/execute! datasource
                     ["UPDATE intemporal_workflows SET wake_at = NULL WHERE id = ?"
                      workflow-id]))
    nil)

  ;; --- Tier 2: independent child workflows ---
  (link-child! [_ parent-id parent-seq child-id policy]
    (spec/check! ::spec/parent-seq parent-seq)
    (spec/check! ::spec/policy policy)
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
      (->> rows
           (mapv (fn [{:intemporal_workflows/keys [id parent_seq parent_close_policy]}]
                   {:child-id id
                    :parent-seq parent_seq
                    :policy (keyword parent_close_policy)
                    :status (p/get-workflow-status this id)}))
           (spec/check! ::spec/children)))))

;; TODO use more complete opts
(defn make-jdbc-store
  "Creates a new jdbc store.  The JDBC URL prefix determines the database kind
  (postgresql | mariadb | mysql) and thus the SQL dialect and migration directory
  used."
  [jdbc-url]
  (let [kind (migrate! jdbc-url)
        ds (hikari/make-datasource {:jdbc-url jdbc-url})]
    (->JdbcStore ds (atom {}) kind)))
