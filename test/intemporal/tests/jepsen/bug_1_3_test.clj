(ns intemporal.tests.jepsen.bug-1-3-test
  "Bug 1.3 — No recovery poller: engine restart does not resume suspended workflows.

  Root cause (improvements.md §1.3):
    There is no background process that scans for workflows requiring execution
    after a restart.  resume-workflow is on-demand only and requires the caller
    to supply both the workflow function and original arguments.  A new engine
    with a fresh store (empty callbacks atom) has no way to discover or re-enter
    workflows that were suspended before the restart.

  Scenario:
    1. engine-a starts a workflow that suspends on wait-for-signal.
    2. engine-a is shut down (simulating a pod crash or rolling restart).
    3. engine-b is created with a FRESH store instance pointing at the same
       backing database — exactly what a restarted pod would do.
    4. The signal is sent via engine-b's store.
    5. engine-b has no poller: the workflow is never resumed automatically.

  These tests assert the CURRENT (buggy) behaviour.  They will fail once the
  fix from improvements.md §B3 + §C4 is applied (workflow registry + worker loop)."
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
  "Starts workflow on store-a/engine-a, shuts down engine-a, creates engine-b
  with a fresh store-b, sends signal via store-b, waits.
  Returns :stuck if engine-b does not auto-resume the workflow."
  [make-store-a make-store-b]
  (let [store-a  (make-store-a)
        wf-id    (str "bug13-" (random-uuid))
        result   (promise)
        engine-a (intemporal/make-workflow-engine :store store-a :threads 2)]
    (future
      (try
        (deliver result (intemporal/start-workflow engine-a wait-signal-wf []
                                                   :workflow-id wf-id))
        (catch Exception e (deliver result {:error (str e)}))))
    ;; Wait for the workflow to register its callback
    (Thread/sleep 500)
    ;; Simulate crash: shut down engine-a and discard store-a
    (intemporal/shutdown-engine engine-a)
    (when (instance? java.io.Closeable store-a) (.close store-a))
    ;; Simulate pod restart: new store with empty callbacks atom
    (let [store-b  (make-store-b)
          engine-b (intemporal/make-workflow-engine :store store-b :threads 2)]
      (p/add-signal store-b wf-id "go" {:source :engine-b-restart})
      (let [r (deref result 2000 :stuck)]
        (intemporal/shutdown-engine engine-b)
        (when (instance? java.io.Closeable store-b) (.close store-b))
        r))))

;; ── In-memory tests (always run) ─────────────────────────────────────────────

(deftest engine-restart-does-not-resume-in-memory
  (testing "A fresh InMemoryStore after engine restart has empty callbacks"
    (is (= :stuck (run-scenario #(mem/->InMemoryStore (atom {}))
                                #(mem/->InMemoryStore (atom {}))))
        "No recovery poller: workflow stays suspended after engine-a crash + engine-b start (bug 1.3)")))

;; ── JDBC tests (require Postgres) ────────────────────────────────────────────

(deftest ^:integration engine-restart-does-not-resume-jdbc
  (testing "A fresh JdbcStore after engine restart has empty callbacks atom"
    (let [url (or (System/getenv "DATABASE_URL")
                  "jdbc:postgresql://localhost:5432/root?user=root&password=root")]
      (is (= :stuck (run-scenario #(jdbc-store/make-jdbc-store url)
                                  #(jdbc-store/make-jdbc-store url)))
          "Signal row in intemporal_signals; engine-b has no poller to find it (bug 1.3)"))))

;; ── FDB tests (require FoundationDB) ─────────────────────────────────────────

(deftest ^:integration engine-restart-does-not-resume-fdb
  (testing "A fresh FDBStore after engine restart has empty callbacks atom"
    (let [root (str "bug13-" (random-uuid))
          fdb  (cfdb/select-api-version 730)
          db   (.open fdb "docker/fdb.cluster")]
      (is (= :stuck (run-scenario #(fdb-store/make-fdb-store db root)
                                  #(fdb-store/make-fdb-store db root)))
          "Signal in FDB; engine-b has no poller to find it (bug 1.3)"))))
