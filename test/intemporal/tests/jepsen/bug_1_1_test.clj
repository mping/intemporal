(ns intemporal.tests.jepsen.bug-1-1-test
  "Bug 1.1 — Signal sent via a second store instance never wakes a workflow.

  Root cause (improvements.md §1.1):
    register-signal-callback stores the wake-fn in a process-local atom on
    the store record (JdbcStore.callbacks, FDBStore.callbacks, InMemoryStore.state).
    When add-signal is called from a DIFFERENT store instance — representing a
    second pod, a new engine, or any caller that didn't start the workflow — the
    callback atom is empty and the workflow is never woken.

  These tests assert the CURRENT (buggy) behaviour.  They will fail once the
  fix from improvements.md §C3/C5 is applied (durable runnable markers)."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as mem]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]))

;; ── Shared workflow ───────────────────────────────────────────────────────────

(defn- wait-signal-wf []
  (intemporal/wait-for-signal "go")
  :woke)

;; ── Shared scenario ───────────────────────────────────────────────────────────

(defn- run-scenario
  "Starts the workflow using store-a, then sends the signal via store-b.
  Returns :stuck if the workflow never wakes, :woke otherwise."
  [store-a store-b]
  (let [wf-id  (str "bug11-" (random-uuid))
        result (promise)
        engine (intemporal/make-workflow-engine :store store-a :threads 2)]
    (future
      (try
        (deliver result (intemporal/start-workflow engine wait-signal-wf []
                                                   :workflow-id wf-id))
        (catch Exception e (deliver result {:error (str e)}))))
    (Thread/sleep 400)
    ;; Send signal via a DIFFERENT store instance — simulates another pod.
    ;; store-b has an empty callbacks atom so the wake-fn is never called.
    (p/add-signal store-b wf-id "go" {:source :store-b})
    (let [r (deref result 2000 :stuck)]
      (intemporal/shutdown-engine engine)
      r)))

;; ── In-memory tests (always run) ─────────────────────────────────────────────

(deftest signal-not-delivered-across-in-memory-stores
  (testing "Two separate InMemoryStore instances do not share callbacks"
    (let [store-a (mem/->InMemoryStore (atom {}))
          store-b (mem/->InMemoryStore (atom {}))]
      (is (= :stuck (run-scenario store-a store-b))
          "Signal written to store-b; store-a's callback atom is empty → workflow never wakes (bug 1.1)"))))

;; ── JDBC tests (require Postgres) ────────────────────────────────────────────

(deftest ^:integration signal-not-delivered-across-jdbc-stores
  (testing "Two JdbcStore instances against the same Postgres do not share callbacks"
    (let [url    (or (System/getenv "DATABASE_URL")
                     "jdbc:postgresql://localhost:5432/root?user=root&password=root")
          store-a (jdbc-store/make-jdbc-store url)
          store-b (jdbc-store/make-jdbc-store url)]
      (try
        (is (= :stuck (run-scenario store-a store-b))
            "Signal row in intemporal_signals; store-b's callbacks atom empty → no wake (bug 1.1)")
        (finally
          (.close store-a)
          (.close store-b))))))

;; ── FDB tests (require FoundationDB) ─────────────────────────────────────────

(deftest ^:integration signal-not-delivered-across-fdb-stores
  (testing "Two FDBStore instances against the same FoundationDB do not share callbacks"
    (let [root    (str "bug11-" (random-uuid))
          fdb     (cfdb/select-api-version 730)
          db      (.open fdb "docker/fdb.cluster")
          store-a (fdb-store/make-fdb-store db root)
          store-b (fdb-store/make-fdb-store db root)]
      (is (= :stuck (run-scenario store-a store-b))
          "Signal in FDB; store-b's callbacks atom empty → no wake (bug 1.1)"))))
