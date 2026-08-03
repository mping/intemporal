(ns intemporal.tests.store.mandatory-seq-test
  "Bug #11 / A8 — :seq was optional. Four control event types
  (:workflow-started, :workflow-completed, :workflow-failed,
  :workflow-cancelled, :workflow-terminated) were saved with NO :seq at all.
  Consequences: FDB fabricated a wall-clock seq (System/currentTimeMillis) and
  keyed the event under [seq random-uuid] — :workflow-started was not
  guaranteed to sort first (P3) and re-saves accumulated duplicates ordered
  randomly (P4); JDBC's (workflow_id, seq, event_type) upsert conflict target
  never matched a NULL seq, so re-finalization could insert duplicate terminal
  rows (P6).
  FIX: the engine now assigns every event a real, deterministic :seq —
  :workflow-started = -1 (a fixed sentinel below every op seq, which start at
  0), terminal events = one past the highest seq already recorded
  (`next-terminal-seq`, execution.clj/.cljs), served by the new `p/max-seq`
  protocol method instead of a full history load. FDB now keys history
  entries by (seq, event-type) instead of [seq random-uuid], and JDBC enforces
  seq NOT NULL (migration 20260803000006).
  REGRESSION GUARD: every event in a completed workflow's history carries a
  non-nil :seq, :workflow-started uses the -1 sentinel, :workflow-completed
  carries the highest seq in history, and p/max-seq agrees — on InMemory,
  JDBC, and FDB alike."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]
            [next.jdbc :as jdbc]))

(defn- seq-test-activity [x]
  (* x 2))

(defn- seq-test-workflow [x]
  (let [act (intemporal/stub #'seq-test-activity)
        a1  (act x)
        h   (intemporal/async #(act (inc x)))
        a2  (intemporal/join h)]
    (intemporal/sleep 20)
    {:a1 a1 :a2 a2}))

(defn- run-to-completion!
  "Drives seq-test-workflow to completion against `store` and returns
  [workflow-id history]."
  [store]
  (let [wf-id (str "seq-mand-" (random-uuid))]
    (intemporal/with-workflow-engine [engine {:store store :threads 2}]
      (let [result (intemporal/start-workflow engine seq-test-workflow [5]
                                              :workflow-id wf-id)]
        (is (= :completed (:status result)) (str "workflow did not complete: " (pr-str result)))))
    [wf-id (p/load-history store wf-id)]))

(defn check-mandatory-seq
  "Store-agnostic assertions shared by all three backends. Returns
  [workflow-id history] for further store-specific checks."
  [store]
  (let [[wf-id history] (run-to-completion! store)
        started         (first (filter #(= :workflow-started (:event-type %)) history))
        completed       (first (filter #(= :workflow-completed (:event-type %)) history))]
    (is (every? #(some? (:seq %)) history)
        "every event in history carries a non-nil :seq")
    (is (= -1 (:seq started))
        ":workflow-started uses the fixed -1 sentinel")
    (is (some? completed) "a :workflow-completed event was recorded")
    (is (= (:seq completed) (apply max (map :seq history)))
        ":workflow-completed carries the highest seq in the whole history")
    (is (= (:seq completed) (p/max-seq store wf-id))
        "p/max-seq agrees with the terminal event's own seq")
    [wf-id history]))

(deftest mandatory-seq-in-memory
  (testing "InMemoryStore: every event has a real seq"
    (let [store (store/->InMemoryStore (atom {}))
          [_ history] (check-mandatory-seq store)]
      (is (= :workflow-started (:event-type (first history)))
          "workflow-started is the first event (insertion order)"))))

;; --- JDBC (mirrors jdbc_test.clj setup) ---

(def db-spec (jdbc-store/resolve-jdbc-url "jdbc:postgresql://localhost:5432/intemporal_test?user=root&password=root"))

(def admin-spec "jdbc:postgresql://localhost:5432/postgres?user=root&password=root")

(defn ensure-database! []
  (let [ds (jdbc/get-datasource admin-spec)]
    (when-not (seq (jdbc/execute! ds ["SELECT 1 FROM pg_database WHERE datname = 'intemporal_test'"]))
      (with-open [conn (.getConnection ds)]
        (.execute (.createStatement conn) "CREATE DATABASE intemporal_test")))))

(deftest ^:integration mandatory-seq-jdbc
  (testing "JdbcStore: seq column is NOT NULL and every persisted row satisfies it"
    (ensure-database!)
    (with-open [store (jdbc-store/make-jdbc-store db-spec)]
      (check-mandatory-seq store)
      (let [ds       (jdbc/get-datasource db-spec)
            col      (jdbc/execute-one! ds
                                        ["SELECT is_nullable FROM information_schema.columns
                                          WHERE table_name = 'intemporal_history' AND column_name = 'seq'"])
            nullable (some #(when (= "is_nullable" (name (key %))) (val %)) col)]
        (is (= "NO" nullable) "intemporal_history.seq is declared NOT NULL")))))

;; --- FDB (mirrors fdb_test.clj setup) ---

(deftest ^:integration mandatory-seq-fdb
  (testing "FDBStore: load-history sorts :workflow-started first (no random-uuid tie-break)"
    (let [db (cfdb/select-api-version 710)
          db (cfdb/open db "docker/fdb.cluster")]
      (with-open [store (fdb-store/make-fdb-store db "intemporal-tests")]
        (let [[_ history] (check-mandatory-seq store)]
          (is (= :workflow-started (:event-type (first history)))
              "workflow-started sorts first by :seq"))))))
