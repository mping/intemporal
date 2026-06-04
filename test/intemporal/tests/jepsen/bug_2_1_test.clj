(ns intemporal.tests.jepsen.bug-2-1-test
  "Bug 2.1 — Register-then-consume signal race in process-signal.  REGRESSION GUARD.

  Root cause (improvements.md §2.1) — now FIXED (Phase A1):
    process-signal previously did consume-check THEN register-callback.  A
    signal arriving in that window fired into an empty callbacks atom and was
    lost, stranding the workflow forever.

    The fix (execution.clj/.cljs process-signal) reverses the order: register
    the callback FIRST, then consume-check.  consume-signal is atomic, so
    exactly one of {the inline check, the callback} consumes the signal; the
    callback only wakes if it consumed, so the inline path never double-runs.

  Mechanism:
    RacingStore (intemporal.tests.jepsen.racing-store) deterministically pins
    the executing thread at the consume-check and lets the test inject a signal
    at exactly the adversarial moment.  Because the callback is now registered
    BEFORE that consume-check, inner.add-signal finds it and fires it — the
    workflow wakes and completes on every run.

  These tests assert the FIXED behaviour: the workflow wakes, completes, and
  leaves no orphaned signal.  They will fail again if the race is reintroduced."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as mem]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]
            [intemporal.tests.jepsen.racing-store :refer [->RacingStore]]))

;; ── Shared workflow ───────────────────────────────────────────────────────────

(defn- wait-signal-wf []
  (intemporal/wait-for-signal "go")
  :woke)

;; ── Shared scenario ───────────────────────────────────────────────────────────

(defn- run-scenario
  "Drives the race against any store via RacingStore.  Returns a map:
    :result   — the start-workflow result map, or ::timeout if it never woke
    :pending  — pending-signal names still in the store after the race
    :status   — workflow status from the store"
  [inner]
  (let [gate-nil  (promise)
        gate-sent (promise)
        store     (->RacingStore inner gate-nil gate-sent (atom true))
        wf-id     (str "bug21-" (random-uuid))
        result    (promise)
        engine    (intemporal/make-workflow-engine :store store :threads 2)]
    (future
      (try
        (deliver result (intemporal/start-workflow engine wait-signal-wf []
                                                   :workflow-id wf-id))
        (catch Exception e (deliver result {:error (str e)}))))

    (let [gate-info (deref gate-nil 5000 ::timeout)]
      (when (= ::timeout gate-info)
        (intemporal/shutdown-engine engine)
        (throw (ex-info "Race gate never opened" {:wf-id wf-id})))
      ;; Gate open: the callback is already registered (Phase A1).  Inject the
      ;; signal in the window — inner.add-signal finds the callback and fires it.
      (p/add-signal inner wf-id "go" {:source :injected-in-race-window})
      (deliver gate-sent :signal-injected)
      (let [r       (deref result 3000 ::timeout)
            pending (p/get-pending-signals inner wf-id)
            status  (p/get-workflow-status inner wf-id)]
        (intemporal/shutdown-engine engine)
        {:result  r
         ;; Count remaining signal *values*, not keys: InMemoryStore leaves an
         ;; empty vector under the signal name after consuming, while JDBC/FDB
         ;; delete the row. Both mean "nothing left to deliver".
         :pending-count (reduce + 0 (map count (vals pending)))
         :status  status}))))

(defn- assert-woke [{:keys [result pending-count status]}]
  (is (not= ::timeout result)
      "Workflow woke and completed — the in-window signal was delivered (bug 2.1 fixed)")
  (is (= :completed (:status result))
      "start-workflow returned a :completed result")
  (is (zero? pending-count)
      "No signal left pending — it was consumed exactly once")
  (is (= :completed status)
      "Workflow status is :completed"))

;; ── In-memory (always runs) ───────────────────────────────────────────────────

(deftest signal-delivered-in-register-consume-window-in-memory
  (testing "RacingStore on InMemoryStore: in-window signal wakes the workflow"
    (assert-woke (run-scenario (mem/->InMemoryStore (atom {}))))))

;; ── JDBC (requires Postgres) ──────────────────────────────────────────────────

(deftest ^:integration signal-delivered-in-register-consume-window-jdbc
  (testing "RacingStore on JdbcStore: in-window signal wakes the workflow"
    (let [url   (or (System/getenv "DATABASE_URL")
                    "jdbc:postgresql://localhost:5432/root?user=root&password=root")
          inner (jdbc-store/make-jdbc-store url)]
      (try
        (assert-woke (run-scenario inner))
        (finally (.close inner))))))

;; ── FDB (requires FoundationDB) ───────────────────────────────────────────────

(deftest ^:integration signal-delivered-in-register-consume-window-fdb
  (testing "RacingStore on FDBStore: in-window signal wakes the workflow"
    (let [root  (str "bug21-" (random-uuid))
          fdb   (cfdb/select-api-version 710)
          db    (.open fdb "docker/fdb.cluster")
          inner (fdb-store/make-fdb-store db root)]
      (assert-woke (run-scenario inner)))))
