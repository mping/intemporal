(ns intemporal.store.jdbc
  (:require
   [clojure.string :as str]
   [hikari-cp.core :as hikari]
   [intemporal.internal.codec :as codec]
   [intemporal.internal.domain :as domain]
   [intemporal.protocol :as p]
   [intemporal.store.checked :as checked]
   [migratus.core :as migratus]
   [next.jdbc :as jdbc]
   [next.jdbc.result-set :as rs])
  (:import
   (java.lang AutoCloseable)
   (java.security MessageDigest)))

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

;; Event keys encode the canonical event identity. Rewriting one identity is
;; first-write-wins, while legitimate retry attempts have distinct keys.
(defn- upsert-history-sql [kind]
  (case kind
    :postgres "INSERT INTO intemporal_history (workflow_id, event_key, seq, event_type, data)
                VALUES (?, ?, ?, ?, ?)
                ON CONFLICT (workflow_id, event_key) DO NOTHING"
    ;; MariaDB / MySQL
    "INSERT IGNORE INTO intemporal_history (workflow_id, event_key, seq, event_type, data)
                VALUES (?, ?, ?, ?, ?)"))

(declare ->payload-param durable-key)

(def ^:private query-options {:builder-fn rs/as-unqualified-lower-maps})

(defn- query! [connectable sql]
  (jdbc/execute! connectable sql query-options))

(defn- query-one! [connectable sql]
  (jdbc/execute-one! connectable sql query-options))

;; ============================================================================
;; Payload serialization
;; ============================================================================

;; EDN, via the codec shared with the FDB store. Previously cheshire, whose
;; `(parse-string s true)` keywordizes map KEYS but not VALUES — so a keyword
;; activity result came back as a string and broke replay determinism (bug #22).
;; Migration 20260807000007 changed `intemporal_history.data` and
;; `intemporal_signals.payload` from JSONB/JSON to text accordingly, so there is
;; no longer a PGobject or dialect-specific payload conversion.
;;
;; Conversion stays EXPLICIT at this store's call sites rather than going through
;; `extend-protocol prepare/SettableParameter` / `rs/ReadableColumn`, which are
;; JVM-global: extending IPersistentMap/IPersistentVector would silently coerce
;; every map/vector parameter of every next.jdbc call in the host application
;; (including non-intemporal ones).
(defn- ->payload-param [x]
  (codec/encode x))

(defn- <-payload-val [x]
  (if (string? x)
    (codec/decode x)
    x))

(defn- durable-key
  "Fixed-width SHA-256 key for a durable uniqueness constraint."
  [value]
  (let [digest (.digest (MessageDigest/getInstance "SHA-256")
                        (.getBytes (pr-str value) "UTF-8"))]
    (apply str (map #(format "%02x" (bit-and (int %) 0xff)) digest))))

;; ============================================================================
;; Clean FSM transaction helpers
;; ============================================================================

(def ^:private terminal-status-names
  #{"completed" "failed" "cancelled" "terminated"})

(defn- update-count
  [result]
  (long (or (:next.jdbc/update-count result) 0)))

(defn- row-status
  [row]
  (some-> (:status row) str keyword))

(defn- terminal-row?
  [row]
  (contains? terminal-status-names (:status row)))

(defn- workflow-row!
  [tx workflow-id]
  (query-one! tx
              ["SELECT id, owner, status, run_state, next_run_at, wake_version,
                       revision, history_revision, next_signal_id, cancelled,
                       parent_workflow_id, parent_seq, parent_close_policy
                  FROM intemporal_workflows
                 WHERE id = ? FOR UPDATE"
               workflow-id]))

(defn- workflow-signals!
  [tx workflow-id]
  (->> (query! tx
               ["SELECT queue_id, signal_id, signal_name, payload
                   FROM intemporal_signals
                  WHERE workflow_id = ?
                  ORDER BY signal_name ASC, queue_id ASC"
                workflow-id])
       (reduce (fn [signals {:keys [queue_id signal_id signal_name payload]}]
                 (update signals signal_name (fnil conj [])
                         {:queue-id (long queue_id)
                          :signal-id signal_id
                          :payload (<-payload-val payload)}))
               {})))

(defn- workflow-history!
  [tx workflow-id]
  (->> (query! tx
               ["SELECT event_type, data
                   FROM intemporal_history
                  WHERE workflow_id = ? ORDER BY id ASC"
                workflow-id])
       (mapv (fn [{:keys [event_type data]}]
               (assoc (<-payload-val data) :event-type (keyword event_type))))))

(defn- workflow-state!
  ([tx workflow-id] (workflow-state! tx workflow-id false))
  ([tx workflow-id include-history?]
   (when-let [row (workflow-row! tx workflow-id)]
     (cond-> {:workflow-id workflow-id
              :owner-id (:owner row)
              :status (row-status row)
              :run-state (some-> (:run_state row) str str/lower-case keyword)
              :next-run-at (some-> (:next_run_at row) long)
              :revision (long (:revision row))
              :history-revision (long (:history_revision row))
              :wake-version (long (:wake_version row))
              :cancel-requested? (boolean (:cancelled row))
              :parent (when (:parent_workflow_id row)
                        {:workflow-id (:parent_workflow_id row)
                         :seq (long (:parent_seq row))
                         :policy (keyword (:parent_close_policy row))})
              :signals (workflow-signals! tx workflow-id)}
       include-history? (assoc :history (workflow-history! tx workflow-id))))))

(defn- matching-started-event?
  [existing requested]
  (= (select-keys existing [:event-type :seq :workflow-id :workflow-fn-name
                            :args :max-iterations :parent-id :parent-seq])
     (select-keys requested [:event-type :seq :workflow-id :workflow-fn-name
                             :args :max-iterations :parent-id :parent-seq])))

(defn- matching-creation?
  [tx row {:keys [started-event parent]}]
  (let [history (workflow-history! tx (:id row))]
    (and (= 1 (count history))
         (matching-started-event? (first history) started-event)
         (= parent
            (when (:parent_workflow_id row)
              {:workflow-id (:parent_workflow_id row)
               :seq (long (:parent_seq row))
               :policy (keyword (:parent_close_policy row))})))))

(defn- append-fsm-events!
  "Append unseen event identities and advance both history counters exactly once.
   The caller owns the workflow row lock, so the per-workflow history order is
   the transaction commit order rather than a timestamp-derived order."
  [tx kind workflow-id events]
  (let [appended (reduce (fn [n event]
                           (let [result (jdbc/execute-one!
                                          tx [(upsert-history-sql kind)
                                              workflow-id
                                              (durable-key (domain/event-identity event))
                                              (:seq event)
                                              (name (:event-type event))
                                              (->payload-param (dissoc event :event-type))])]
                             (+ n (update-count result))))
                         0
                         events)]
    (when (pos? appended)
      (jdbc/execute-one!
        tx ["UPDATE intemporal_workflows
                SET revision = revision + 1,
                    history_revision = history_revision + 1
              WHERE id = ?"
            workflow-id]))
    appended))

(defn- insert-fsm-workflow-row!
  [tx kind {:keys [workflow-id owner-id parent]}]
  (let [result (jdbc/execute-one!
                 tx [(case kind
                       :postgres
                       "INSERT INTO intemporal_workflows
                          (id, owner, parent_workflow_id, parent_seq, parent_close_policy)
                        VALUES (?, ?, ?, ?, ?)
                        ON CONFLICT (id) DO NOTHING"
                       "INSERT IGNORE INTO intemporal_workflows
                          (id, owner, parent_workflow_id, parent_seq, parent_close_policy)
                        VALUES (?, ?, ?, ?, ?)")
                     workflow-id owner-id (:workflow-id parent) (:seq parent)
                     (some-> (:policy parent) name)])]
    (pos? (update-count result))))

(defn- create-fsm-workflow!
  [tx kind creation]
  (let [{:keys [workflow-id started-event parent]} creation
        row (workflow-row! tx workflow-id)]
    (cond
      row (if (matching-creation? tx row creation) :exists :conflict)
      (not (insert-fsm-workflow-row! tx kind creation))
      ;; A concurrent creator won the unique key; inspect the now-visible row
      ;; in this transaction and classify the replay deterministically.
      (if-let [existing (workflow-row! tx workflow-id)]
        (if (matching-creation? tx existing creation) :exists :conflict)
        :conflict)
      :else
      (do
        (append-fsm-events! tx kind workflow-id [started-event])
        ;; Relationship creation changes the parent's close tree even before
        ;; its marker event is appended; root transitions already hold this row.
        (when parent
          (jdbc/execute-one!
            tx ["UPDATE intemporal_workflows SET revision = revision + 1 WHERE id = ?"
                (:workflow-id parent)]))
        :created))))

(defn- wake-fsm-workflow!
  [tx workflow-id]
  (when-let [row (workflow-row! tx workflow-id)]
    (when-not (terminal-row? row)
      (jdbc/execute-one!
        tx ["UPDATE intemporal_workflows
                SET wake_version = wake_version + 1,
                    revision = revision + 1,
                    next_run_at = NULL,
                    run_state = CASE WHEN run_state = 'WAITING' THEN 'RUNNABLE' ELSE run_state END
              WHERE id = ?"
            workflow-id])
      true)))

(defn- terminalize-fsm-workflow!
  [tx kind workflow-id terminal-status events]
  (append-fsm-events! tx kind workflow-id events)
  (jdbc/execute-one!
    tx ["UPDATE intemporal_workflows
            SET status = ?, run_state = 'TERMINAL', next_run_at = NULL,
                revision = revision + 1
          WHERE id = ?"
        (name terminal-status) workflow-id]))

(defn- signal-consumable?
  [tx workflow-id {:keys [signal-name queue-id signal-id]}]
  (let [row (query-one!
              tx ["SELECT queue_id, signal_id
                    FROM intemporal_signals
                   WHERE workflow_id = ? AND signal_name = ?
                   ORDER BY queue_id ASC LIMIT 1"
                  workflow-id signal-name])]
    (and row (= (long queue-id) (long (:queue_id row)))
         (= signal-id (:signal_id row)))))

(defn- consume-fsm-signal!
  [tx workflow-id {:keys [signal-name queue-id signal-id]}]
  (jdbc/execute-one!
    tx ["DELETE FROM intemporal_signals
          WHERE workflow_id = ? AND signal_name = ? AND queue_id = ? AND signal_id = ?"
        workflow-id signal-name queue-id signal-id]))

(defn- lock-workflows!
  [tx workflow-ids]
  (into {}
        (keep (fn [workflow-id]
                (when-let [row (workflow-row! tx workflow-id)]
                  [workflow-id row])))
        (sort workflow-ids)))

(defn- close-tree!
  [tx workflow-id]
  (when-let [row (workflow-row! tx workflow-id)]
    {:workflow-id workflow-id
     :revision (long (:revision row))
     :status (row-status row)
     :next-terminal-seq (long (inc (or (:max_seq
                                         (query-one!
                                           tx ["SELECT MAX(seq) AS max_seq
                                                  FROM intemporal_history
                                                 WHERE workflow_id = ?"
                                               workflow-id]))
                                     -1)))
     :children (->> (query! tx
                            ["SELECT id, parent_seq, parent_close_policy
                                FROM intemporal_workflows
                               WHERE parent_workflow_id = ? ORDER BY id ASC"
                             workflow-id])
                 (mapv (fn [{:keys [id parent_seq parent_close_policy]}]
                         (assoc (close-tree! tx id)
                                :policy (keyword parent_close_policy)
                                :parent-seq (long parent_seq)))))}))

;; ============================================================================
;; JdbcStore Implementation
;; ============================================================================

(defrecord JdbcStore [datasource kind]
  AutoCloseable
  (close [this]
    (when datasource (hikari/close-datasource datasource)))
  p/IEngineStore
  (load-history [_ workflow-id]
    (let [rows (query! datasource
                       ["SELECT event_type, data FROM intemporal_history WHERE workflow_id = ? ORDER BY id ASC"
                        workflow-id])]
      (->> rows
           (mapv (fn [{:keys [event_type data]}]
                   (assoc (<-payload-val data) :event-type (keyword event_type)))))))

  (get-workflow-status [_ workflow-id]
    (let [wf-row (query-one! datasource
                             ["SELECT cancelled, status FROM intemporal_workflows WHERE id = ?"
                              workflow-id])
          status (:status wf-row)]
      (cond
        (nil? wf-row) :not-found
        ;; Check terminal status first: a late mark-cancelled must not override
        ;; a workflow that already completed or failed.
        (#{"completed" "failed" "cancelled" "terminated"} status) (keyword status)
        (:cancelled wf-row) :cancelled
        :else :running)))

  ;; --- Durable scheduling + ownership-based recovery ---
  (claim-runnable! [_ owner-id limit now-ms]
    (jdbc/with-transaction [tx datasource]
      (let [rows (query!
                   tx
                   [(case kind
                      :postgres
                      "SELECT id, wake_version FROM intemporal_workflows
                        WHERE status NOT IN ('completed','failed','cancelled','terminated')
                          AND EXISTS (SELECT 1 FROM intemporal_history h
                                       WHERE h.workflow_id = intemporal_workflows.id)
                          AND (owner = ? OR owner IS NULL)
                          AND (run_state = 'RUNNABLE'
                               OR (run_state = 'WAITING' AND next_run_at <= ?))
                        ORDER BY CASE WHEN owner = ? THEN 0 ELSE 1 END,
                                 CASE WHEN next_run_at IS NULL THEN 9223372036854775807 ELSE next_run_at END,
                                 created_at
                        LIMIT ?
                        FOR UPDATE SKIP LOCKED"
                      "SELECT id, wake_version FROM intemporal_workflows
                        WHERE status NOT IN ('completed','failed','cancelled','terminated')
                          AND EXISTS (SELECT 1 FROM intemporal_history h
                                       WHERE h.workflow_id = intemporal_workflows.id)
                          AND (owner = ? OR owner IS NULL)
                          AND (run_state = 'RUNNABLE'
                               OR (run_state = 'WAITING' AND next_run_at <= ?))
                        ORDER BY CASE WHEN owner = ? THEN 0 ELSE 1 END,
                                 CASE WHEN next_run_at IS NULL THEN 9223372036854775807 ELSE next_run_at END,
                                 created_at
                        LIMIT ?
                        FOR UPDATE SKIP LOCKED")
                    owner-id now-ms owner-id limit])]
        (doseq [row rows]
          (jdbc/execute! tx
                         ["UPDATE intemporal_workflows
                             SET owner = ?, run_state = 'RUNNING', next_run_at = NULL,
                                 revision = revision + 1
                           WHERE id = ?"
                          owner-id (:id row)]))
        (mapv (fn [row]
                {:workflow-id (:id row)
                 :wake-version (long (or (:wake_version row) 0))})
              rows))))

  (requeue-running! [_ workflow-id owner-id]
    (let [res (jdbc/execute-one!
                datasource
                ["UPDATE intemporal_workflows
                    SET run_state = 'RUNNABLE', next_run_at = NULL,
                        revision = revision + 1
                  WHERE id = ? AND owner = ? AND run_state = 'RUNNING'
                    AND status NOT IN ('completed','failed','cancelled','terminated')"
                 workflow-id owner-id])]
      (pos? (or (:next.jdbc/update-count res) 0))))

  (recover-running! [_ owner-id]
    (let [res (jdbc/execute-one!
                datasource
                ["UPDATE intemporal_workflows
                   SET run_state = 'RUNNABLE', next_run_at = NULL,
                       revision = revision + 1
                 WHERE run_state = 'RUNNING'
                   AND status NOT IN ('completed','failed','cancelled','terminated')
                   AND owner = ?"
                 owner-id])]
      (long (or (:next.jdbc/update-count res) 0))))

  p/IFsmStore

  (create-workflow! [_ creation]
    (jdbc/with-transaction [tx datasource]
      ;; A child creation must also lock its parent before changing the close
      ;; tree revision. Root creation has no parent.
      (when-let [parent-id (get-in creation [:parent :workflow-id])]
        (workflow-row! tx parent-id))
      (let [status (create-fsm-workflow! tx kind creation)
            state  (workflow-state! tx (:workflow-id creation))]
        {:create-status status :state state})))

  (load-workflow-state [_ workflow-id]
    (jdbc/with-transaction [tx datasource]
      (workflow-state! tx workflow-id)))

  (load-snapshot [_ workflow-id]
    (jdbc/with-transaction [tx datasource]
      (workflow-state! tx workflow-id true)))

  (load-close-tree [_ workflow-id]
    (jdbc/with-transaction [tx datasource]
      (close-tree! tx workflow-id)))

  (add-signal! [_ workflow-id signal-name signal]
    (let [signal-id (or (:signal-id signal) (:id signal))
          signal-key (durable-key signal-id)
          payload   (if (contains? signal :payload) (:payload signal) signal)]
      (jdbc/with-transaction [tx datasource]
        (if-let [row (workflow-row! tx workflow-id)]
          (cond
            (terminal-row? row)
            {:signal-status :terminal}

            :else
            (if-let [existing (query-one!
                                tx ["SELECT signal_name, payload
                                      FROM intemporal_signals
                                     WHERE workflow_id = ? AND signal_key = ?"
                                    workflow-id signal-key])]
              {:signal-status (if (and (= signal-name (:signal_name existing))
                                       (= payload (<-payload-val (:payload existing))))
                                :duplicate
                                :conflict)
               :signal-id signal-id}
              (do
                (jdbc/execute-one!
                  tx ["INSERT INTO intemporal_signals
                        (workflow_id, queue_id, signal_key, signal_id, signal_name, payload)
                       VALUES (?, ?, ?, ?, ?, ?)"
                      workflow-id (:next_signal_id row) signal-key signal-id signal-name
                      (->payload-param payload)])
                (wake-fsm-workflow! tx workflow-id)
                (jdbc/execute-one!
                  tx ["UPDATE intemporal_workflows
                          SET next_signal_id = next_signal_id + 1
                        WHERE id = ?"
                      workflow-id])
                {:signal-status :accepted
                 :signal-id signal-id
                 :state (workflow-state! tx workflow-id)})))
          {:signal-status :not-found}))))

  (request-cancel! [_ workflow-id]
    (jdbc/with-transaction [tx datasource]
      (if-let [row (workflow-row! tx workflow-id)]
        (cond
          (terminal-row? row) {:cancel-status :terminal}
          (:cancelled row) {:cancel-status :already-requested}
          :else (do
                  (jdbc/execute-one!
                    tx ["UPDATE intemporal_workflows
                            SET cancelled = TRUE,
                                wake_version = wake_version + 1,
                                revision = revision + 1,
                                next_run_at = NULL,
                                run_state = CASE WHEN run_state = 'WAITING' THEN 'RUNNABLE' ELSE run_state END
                          WHERE id = ?"
                        workflow-id])
                  {:cancel-status :requested
                   :state (workflow-state! tx workflow-id)}))
        {:cancel-status :not-found})))

  (wake! [_ workflow-id]
    (jdbc/with-transaction [tx datasource]
      (let [woken? (wake-fsm-workflow! tx workflow-id)]
        {:wake-status (if woken? :woken :terminal-or-not-found)
         :state (workflow-state! tx workflow-id)})))

  (commit-transition! [_ {:keys [workflow-id owner-id expected-wake-version
                                 events consume-signals create-workflows next-run-at
                                 terminal-status parent-notification close-actions
                                 expected-related-revisions] :as transition}]
    (jdbc/with-transaction [tx datasource]
      ;; Stable lock order covers every row that this transition can mutate.
      ;; Missing creation rows are handled by their unique key below.
      (let [related-ids (into #{workflow-id}
                              (concat (keys expected-related-revisions)
                                      (map :workflow-id create-workflows)
                                      (when parent-notification [(:workflow-id parent-notification)])
                                      (map :workflow-id close-actions)))
            rows (lock-workflows! tx related-ids)
            root (get rows workflow-id)
            current-state (when root (workflow-state! tx workflow-id))
            transition-kind (:kind transition)
            status (cond
                     (nil? root) :not-running
                     (terminal-row? root) :terminal
                     (not= "RUNNING" (some-> (:run_state root) str str/upper-case)) :not-running
                     (not= owner-id (:owner root)) :not-owner
                     (and (= transition-kind :park) (nil? expected-wake-version)) :conflict
                     (and (some? expected-wake-version)
                          (not= (long expected-wake-version) (long (:wake_version root)))) :wake-raced
                     (not (every? (fn [[id revision]]
                                    (= (long revision)
                                       (some-> (get rows id) :revision long)))
                                  expected-related-revisions)) :conflict
                     (not (every? #(signal-consumable? tx workflow-id %) consume-signals)) :conflict
                     :else :committed)]
        (if (not= :committed status)
          {:commit-status status :state current-state}
          ;; Validate the whole creation set before writing any child. A
          ;; conflict is a normal CAS result, never a partly-created subtree.
          (if (some (fn [creation]
                      (when-let [row (get rows (:workflow-id creation))]
                        (not (matching-creation? tx row creation))))
                    create-workflows)
            {:commit-status :conflict :state (workflow-state! tx workflow-id)}
            (let [creation-statuses (mapv #(create-fsm-workflow! tx kind %) create-workflows)]
              ;; A unique-key race after the pre-check is an infrastructure
              ;; retry: throw so the enclosing JDBC transaction rolls every
              ;; preceding child insertion back before the engine replans.
              (when (some #{:conflict} creation-statuses)
                (throw (ex-info "Concurrent workflow creation conflict"
                                {:workflow-id workflow-id
                                 :create-workflows create-workflows})))
              (doseq [consume consume-signals]
                (consume-fsm-signal! tx workflow-id consume))
              (append-fsm-events! tx kind workflow-id events)
              (case transition-kind
                :park (jdbc/execute-one!
                        tx ["UPDATE intemporal_workflows
                                  SET run_state = 'WAITING', next_run_at = ?, revision = revision + 1
                                WHERE id = ?"
                            next-run-at workflow-id])
                :terminal (terminalize-fsm-workflow! tx kind workflow-id terminal-status [])
                nil)
              (when-let [{parent-id :workflow-id parent-events :events} parent-notification]
                (when-let [parent (get rows parent-id)]
                  (when-not (terminal-row? parent)
                    (append-fsm-events! tx kind parent-id parent-events)
                    (wake-fsm-workflow! tx parent-id))))
              (doseq [{:keys [op workflow-id events terminal-status]} close-actions]
                (when-let [child (get rows workflow-id)]
                  (when-not (terminal-row? child)
                    (case op
                      :cancel (jdbc/execute-one!
                                tx ["UPDATE intemporal_workflows
                                          SET cancelled = TRUE,
                                              wake_version = wake_version + 1,
                                              revision = revision + 1,
                                              next_run_at = NULL,
                                              run_state = CASE WHEN run_state = 'WAITING' THEN 'RUNNABLE' ELSE run_state END
                                        WHERE id = ?"
                                    workflow-id])
                      :terminate (terminalize-fsm-workflow!
                                   tx kind workflow-id (or terminal-status :terminated) events)
                      nil))))
              {:commit-status :committed
               :state (workflow-state! tx workflow-id)}))))))

  (release-owner! [_ owner-id]
    (jdbc/with-transaction [tx datasource]
      (jdbc/execute-one!
        tx ["UPDATE intemporal_workflows
                SET owner = NULL,
                    next_run_at = CASE WHEN run_state = 'RUNNING' THEN NULL ELSE next_run_at END,
                    run_state = CASE WHEN run_state = 'RUNNING' THEN 'RUNNABLE' ELSE run_state END,
                    revision = revision + 1
              WHERE owner = ?
                AND status NOT IN ('completed','failed','cancelled','terminated')"
            owner-id])
      nil)))

;; TODO use more complete opts
(defn create-store
  "Creates a new JDBC-backed workflow store, optionally wrapped with intemporal.spec
  assertions. The JDBC URL prefix
  determines the database kind (postgresql | mariadb | mysql) and thus the SQL
  dialect and migration directory used.

  Options:
  - :checked? - :auto (default), true, or false."
  [jdbc-url & {:keys [checked?] :or {checked? :auto}}]
  (let [kind  (migrate! jdbc-url)
        ds    (hikari/make-datasource {:jdbc-url jdbc-url})
        store (->JdbcStore ds kind)]
    (checked/wrap store checked?)))
