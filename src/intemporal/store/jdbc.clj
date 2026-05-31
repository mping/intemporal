(ns intemporal.store.jdbc
  (:require [intemporal.protocol :as p]
            [intemporal.internal.lease :as lease]
            [intemporal.internal.error :as error]
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
        ;; Phase C: validate the lease in the same transaction. If this owner no
        ;; longer holds a live lease (another worker took over / it expired),
        ;; refuse the write so concurrent execution can't corrupt history.
        (when-let [owner lease/*owner*]
          (when-not (jdbc/execute-one! tx
                      ["SELECT 1 FROM intemporal_workflows
                        WHERE id = ? AND owner_id = ? AND lease_until > now()"
                       workflow-id owner])
            (throw (error/lease-lost-exception workflow-id owner))))
        ;; Insert events. DO UPDATE keeps the write idempotent under normal
        ;; replay (the engine re-writes the same seq with identical data on
        ;; each pass). Rejecting a *concurrent* writer is the lease's job
        ;; (Phase C) — see validate-lease in save-events there.
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

  (add-signal [this workflow-id signal-name signal-data]
    (jdbc/with-transaction [tx datasource]
      (jdbc/execute! tx ["INSERT INTO intemporal_workflows (id) VALUES (?) ON CONFLICT (id) DO NOTHING"
                         workflow-id])
      (jdbc/execute! tx ["INSERT INTO intemporal_signals (workflow_id, signal_name, payload) VALUES (?, ?, ?)"
                         workflow-id signal-name signal-data]))
    ;; Phase C: durable, cross-pod wake (a worker on any pod resumes the workflow).
    (p/add-runnable this workflow-id :signal)
    ;; In-process fast path: fire the callback for an embedded (no-worker) engine
    ;; running in THIS process. Cross-pod wake goes through the marker above.
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

  (mark-cancelled [this workflow-id]
    (jdbc/execute! datasource
                   ["INSERT INTO intemporal_workflows (id, cancelled) VALUES (?, true)
                     ON CONFLICT (id) DO UPDATE SET cancelled = true"
                    workflow-id])
    ;; Phase C: durable wake so a worker resumes the sleeper and it observes the flag.
    (p/add-runnable this workflow-id :cancel))

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

  ;; --- Phase C: lease / ownership ---
  (claim-workflow [_ workflow-id owner-id lease-ms]
    (let [res (jdbc/execute-one! datasource
                ["UPDATE intemporal_workflows
                  SET owner_id = ?, lease_until = now() + ((?)::bigint * interval '1 millisecond')
                  WHERE id = ?
                    AND (owner_id IS NULL OR owner_id = ? OR lease_until IS NULL OR lease_until < now())"
                 owner-id lease-ms workflow-id owner-id])]
      (pos? (or (:next.jdbc/update-count res) 0))))

  (renew-lease [_ workflow-id owner-id lease-ms]
    (let [res (jdbc/execute-one! datasource
                ["UPDATE intemporal_workflows
                  SET lease_until = now() + ((?)::bigint * interval '1 millisecond')
                  WHERE id = ? AND owner_id = ?"
                 lease-ms workflow-id owner-id])]
      (pos? (or (:next.jdbc/update-count res) 0))))

  (release-lease [_ workflow-id owner-id]
    (jdbc/execute! datasource
                   ["UPDATE intemporal_workflows SET owner_id = NULL, lease_until = NULL
                     WHERE id = ? AND owner_id = ?"
                    workflow-id owner-id])
    nil)

  ;; --- Phase C: runnable markers ---
  (add-runnable [_ workflow-id reason]
    (jdbc/execute! datasource
                   ["INSERT INTO intemporal_runnable (workflow_id, reason, enqueued_at, claimed_until)
                     VALUES (?, ?, now(), to_timestamp(0))
                     ON CONFLICT (workflow_id) DO UPDATE SET reason = EXCLUDED.reason, enqueued_at = now()"
                    workflow-id (name reason)])
    nil)

  (claim-runnable [_ _owner-id batch-size claim-ms]
    (jdbc/with-transaction [tx datasource]
      (let [rows (jdbc/execute! tx
                   ["SELECT workflow_id FROM intemporal_runnable
                     WHERE claimed_until < now()
                     ORDER BY enqueued_at
                     FOR UPDATE SKIP LOCKED
                     LIMIT ?" batch-size])
            ids  (mapv :intemporal_runnable/workflow_id rows)]
        (when (seq ids)
          (let [ph (apply str (interpose "," (repeat (count ids) "?")))]
            (jdbc/execute! tx
              (into [(str "UPDATE intemporal_runnable
                           SET claimed_until = now() + ((?)::bigint * interval '1 millisecond')
                           WHERE workflow_id IN (" ph ")")
                     claim-ms]
                    ids))))
        ids)))

  (delete-runnable [_ workflow-id]
    (jdbc/execute! datasource ["DELETE FROM intemporal_runnable WHERE workflow_id = ?" workflow-id])
    nil))

;; TODO use more complete opts
(defn make-jdbc-store
  "Creates a new jdbc store"
  [jdbc-url]
  (migrate! jdbc-url)
  (let [ds (hikari/make-datasource {:jdbc-url jdbc-url})]
    (->JdbcStore ds (atom {}))))
