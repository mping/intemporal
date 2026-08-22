(ns intemporal.store.jdbc
  (:require
   [clojure.string :as str]
   [hikari-cp.core :as hikari]
   [intemporal.internal.codec :as codec]
   [intemporal.protocol :as p]
   [intemporal.store.checked :as checked]
   [migratus.core :as migratus]
   [next.jdbc :as jdbc])
  (:import
   (java.lang AutoCloseable)))

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

  ; (migratus/create cfg "initial-schema"))
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

(declare ->payload-param)

(defn- terminal-status-in [events]
  (some #(case (:event-type %)
           :workflow-completed  "completed"
           :workflow-failed     "failed"
           :workflow-cancelled  "cancelled"
           :workflow-terminated "terminated"
           nil)
        events))

(defn- row-value [row column]
  (or (get row (keyword "intemporal_workflows" (name column)))
      (get row column)))

(defn- append-events!
  [tx kind workflow-id events]
  (jdbc/execute! tx [(upsert-workflow-sql kind) workflow-id])
  (doseq [event events]
    (jdbc/execute! tx [(upsert-history-sql kind)
                       workflow-id
                       (:seq event)
                       (name (:event-type event))
                       (->payload-param kind (dissoc event :event-type))]))
  (when-let [term (terminal-status-in events)]
    (jdbc/execute! tx
                   ["UPDATE intemporal_workflows
                       SET status = ?, run_state = 'TERMINAL', next_run_at = NULL
                     WHERE id = ?"
                    term workflow-id])))

(defn- wake-row!
  [tx workflow-id]
  (let [res (jdbc/execute-one!
              tx
              ["UPDATE intemporal_workflows
                 SET wake_version = wake_version + 1,
                     next_run_at = NULL,
                     run_state = CASE WHEN run_state = 'WAITING' THEN 'RUNNABLE' ELSE run_state END
               WHERE id = ?
                 AND status NOT IN ('completed','failed','cancelled','terminated')
                 AND run_state <> 'TERMINAL'"
               workflow-id])]
    (pos? (or (:next.jdbc/update-count res) 0))))

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

(defrecord JdbcStore [datasource kind]
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
                   (assoc (<-payload-val kind data) :event-type (keyword event_type)))))))

  (save-event [this workflow-id event]
    (p/save-events this workflow-id [event])
    event)

  (save-events [_ workflow-id events]
    (when (seq events)
      (jdbc/with-transaction [tx datasource]
        (append-events! tx kind workflow-id events)))
    events)

  (save-events-and-wake! [_ workflow-id events]
    (jdbc/with-transaction [tx datasource]
      (append-events! tx kind workflow-id events)
      (wake-row! tx workflow-id)))

  (find-event [_ workflow-id event-type seq-num]
    (let [row (jdbc/execute-one! datasource
                                 ["SELECT data FROM intemporal_history WHERE workflow_id = ? AND event_type = ? AND seq = ?"
                                  workflow-id (name event-type) seq-num])]
      (when row
        (assoc (<-payload-val kind (:intemporal_history/data row)) :event-type event-type))))

  (max-seq [_ workflow-id]
    ;; MAX(seq) WHERE workflow_id = ? is served by the leading (workflow_id,
    ;; seq, ...) columns of uq_intemporal_history_wf_seq_type — an index range
    ;; scan for the last matching entry, not a full history load/deserialize.
    (->> (jdbc/execute-one! datasource
                            ["SELECT MAX(seq) AS max_seq FROM intemporal_history WHERE workflow_id = ?"
                             workflow-id])
         vals
         first))

  (get-pending-signals [_ workflow-id]
    (let [rows (jdbc/execute! datasource
                              ["SELECT signal_name, payload FROM intemporal_signals WHERE workflow_id = ? ORDER BY id ASC"
                               workflow-id])]
      (->> rows
           (reduce (fn [acc {:intemporal_signals/keys [signal_name payload]}]
                     (update acc signal_name (fnil conj []) (<-payload-val kind payload)))
                   {}))))

  (add-signal [_ workflow-id signal-name signal-data]
    (jdbc/with-transaction [tx datasource]
      (jdbc/execute! tx [(upsert-workflow-sql kind) workflow-id])
      (jdbc/execute! tx ["INSERT INTO intemporal_signals (workflow_id, signal_name, payload) VALUES (?, ?, ?)"
                         workflow-id signal-name (->payload-param kind signal-data)])
      (wake-row! tx workflow-id))
    signal-data)

  (consume-signal [_ workflow-id signal-name]
    (jdbc/with-transaction [tx datasource]
      (let [row (jdbc/execute-one! tx
                                   ["SELECT id, payload FROM intemporal_signals WHERE workflow_id = ? AND signal_name = ? ORDER BY id ASC FOR UPDATE SKIP LOCKED"
                                    workflow-id signal-name])]
        (when row
          (jdbc/execute! tx ["DELETE FROM intemporal_signals WHERE id = ?" (:intemporal_signals/id row)])
          (<-payload-val kind (:intemporal_signals/payload row))))))

  (wake-workflow [_ workflow-id]
    (jdbc/with-transaction [tx datasource]
      (wake-row! tx workflow-id)))

  (is-cancelled? [_ workflow-id]
    (let [row (jdbc/execute-one! datasource
                                 ["SELECT cancelled FROM intemporal_workflows WHERE id = ?"
                                  workflow-id])]
      (boolean (:intemporal_workflows/cancelled row))))

  (mark-cancelled [_ workflow-id]
    (jdbc/with-transaction [tx datasource]
      (jdbc/execute! tx [(upsert-cancel-sql kind) workflow-id])
      (wake-row! tx workflow-id))
    nil)

  (get-workflow-status [_ workflow-id]
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
        :else :running)))

  ;; --- Durable scheduling + ownership-based recovery ---
  (claim-runnable! [_ owner-id limit now-ms]
    (jdbc/with-transaction [tx datasource]
      (let [rows (jdbc/execute!
                   tx
                   [(case kind
                      :postgres
                      "SELECT id, wake_version FROM intemporal_workflows
                        WHERE status NOT IN ('completed','failed','cancelled','terminated')
                          AND EXISTS (SELECT 1 FROM intemporal_history h
                                       WHERE h.workflow_id = intemporal_workflows.id)
                          AND (owner = ? OR owner IS NULL)
                          AND (run_state = 'RUNNABLE'
                               OR (run_state = 'WAITING' AND next_run_at <= to_timestamp(? / 1000.0)))
                        ORDER BY COALESCE(next_run_at, created_at), created_at
                        LIMIT ?
                        FOR UPDATE SKIP LOCKED"
                      "SELECT id, wake_version FROM intemporal_workflows
                        WHERE status NOT IN ('completed','failed','cancelled','terminated')
                          AND EXISTS (SELECT 1 FROM intemporal_history h
                                       WHERE h.workflow_id = intemporal_workflows.id)
                          AND (owner = ? OR owner IS NULL)
                          AND (run_state = 'RUNNABLE'
                               OR (run_state = 'WAITING' AND next_run_at <= FROM_UNIXTIME(? / 1000.0)))
                        ORDER BY COALESCE(next_run_at, created_at), created_at
                        LIMIT ?
                        FOR UPDATE SKIP LOCKED")
                    owner-id now-ms limit])]
        (doseq [row rows]
          (jdbc/execute! tx
                         ["UPDATE intemporal_workflows
                             SET owner = ?, run_state = 'RUNNING', next_run_at = NULL
                           WHERE id = ?"
                          owner-id (row-value row :id)]))
        (mapv (fn [row]
                {:workflow-id (row-value row :id)
                 :wake-version (long (or (row-value row :wake_version) 0))})
              rows))))

  (park-workflow! [_ workflow-id expected-wake-version events next-run-at-ms]
    (jdbc/with-transaction [tx datasource]
      (let [row (jdbc/execute-one!
                  tx
                  ["SELECT status, run_state, wake_version
                     FROM intemporal_workflows WHERE id = ? FOR UPDATE"
                   workflow-id])
            status (row-value row :status)
            state  (some-> (row-value row :run_state) str str/upper-case)
            current-version (long (or (row-value row :wake_version) 0))
            terminal-event? (terminal-status-in events)]
        (cond
          (#{"completed" "failed" "cancelled" "terminated"} status) {:park-status :terminal}
          terminal-event? (do (append-events! tx kind workflow-id events)
                              {:park-status :terminal})
          (not= "RUNNING" state) {:park-status :not-running}
          (not= (long expected-wake-version) current-version)
          {:park-status :wake-raced :wake-version current-version}
          :else
          (do
            (append-events! tx kind workflow-id events)
            (if next-run-at-ms
              (jdbc/execute! tx
                             [(case kind
                                :postgres "UPDATE intemporal_workflows SET run_state = 'WAITING', next_run_at = to_timestamp(? / 1000.0) WHERE id = ?"
                                "UPDATE intemporal_workflows SET run_state = 'WAITING', next_run_at = FROM_UNIXTIME(? / 1000.0) WHERE id = ?")
                              next-run-at-ms workflow-id])
              (jdbc/execute! tx
                             ["UPDATE intemporal_workflows SET run_state = 'WAITING', next_run_at = NULL WHERE id = ?"
                              workflow-id]))
            {:park-status :parked})))))

  (requeue-running! [_ workflow-id]
    (let [res (jdbc/execute-one!
                datasource
                ["UPDATE intemporal_workflows
                   SET run_state = 'RUNNABLE', next_run_at = NULL
                 WHERE id = ? AND run_state = 'RUNNING'
                   AND status NOT IN ('completed','failed','cancelled','terminated')"
                 workflow-id])]
      (pos? (or (:next.jdbc/update-count res) 0))))

  (recover-running! [_ owner-id]
    (let [res (jdbc/execute-one!
                datasource
                ["UPDATE intemporal_workflows
                   SET run_state = 'RUNNABLE', next_run_at = NULL
                 WHERE run_state = 'RUNNING'
                   AND status NOT IN ('completed','failed','cancelled','terminated')
                   AND owner = ?"
                 owner-id])]
      (long (or (:next.jdbc/update-count res) 0))))

  (release-owner [_ owner-id]
    (jdbc/execute! datasource
                   ["UPDATE intemporal_workflows
                       SET owner = NULL,
                           next_run_at = CASE WHEN run_state = 'RUNNING' THEN NULL ELSE next_run_at END,
                           run_state = CASE WHEN run_state = 'RUNNING' THEN 'RUNNABLE' ELSE run_state END
                     WHERE owner = ? AND status NOT IN ('completed','failed','cancelled','terminated')"
                    owner-id])
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
(defn create-store
  "Creates a new JDBC-backed IStore, wrapped with intemporal.spec assertions
  by default (intemporal.store.checked/CheckedStore). The JDBC URL prefix
  determines the database kind (postgresql | mariadb | mysql) and thus the SQL
  dialect and migration directory used.

  Options:
  - :checked? - wrap with spec assertions (default true). Pass false for a
                raw, unwrapped store."
  [jdbc-url & {:keys [checked?] :or {checked? true}}]
  (let [kind  (migrate! jdbc-url)
        ds    (hikari/make-datasource {:jdbc-url jdbc-url})
        store (->JdbcStore ds kind)]
    (if checked? (checked/->CheckedStore store) store)))
