(ns intemporal.tests.jepsen.bug-2-3-test
  "Bug 2.3 — Cancellation reaching a workflow sleeping in wait-for-signal.  REGRESSION GUARD.

  Root cause (improvements.md §2.3) — now FIXED (Phase A2):
    cancel-workflow set the cancelled flag but did nothing to wake a workflow
    parked on wait-for-signal.  Such a workflow never re-entered its loop, so
    check-cancelled! never fired and the cancellation was silently ignored —
    the workflow (and its thread) stayed alive forever.

    The fix adds IStore/wake-workflow plus a generic wake callback registered
    whenever a workflow suspends (execution.clj/.cljs run-workflow-internal).
    cancel-workflow now calls mark-cancelled THEN wake-workflow, forcing the
    sleeper to re-enter, observe the flag at the loop-top cancel check, and
    finalize.

  These tests assert the FIXED behaviour:
    • the workflow TERMINATES (start-workflow returns; no longer stuck)
    • is-cancelled? is true
    • get-workflow-status is :cancelled
  They will fail again if cancel stops waking sleepers."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as mem]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]))

;; ── Shared workflow ───────────────────────────────────────────────────────────

(defn- cancel-sleep-wf []
  (intemporal/wait-for-signal "wake")
  :woke)

;; ── Shared scenario ───────────────────────────────────────────────────────────

(defn- run-scenario
  "Starts a workflow that sleeps on a signal, cancels it, and observes whether
  the cancellation actually terminates it.  Returns
    :terminated? :cancelled-flag-set? :status."
  [store]
  (let [wf-id  (str "bug23-" (random-uuid))
        result (promise)
        engine (intemporal/make-workflow-engine :store store :threads 2)]
    (future
      (try
        (deliver result (intemporal/start-workflow engine cancel-sleep-wf []
                                                   :workflow-id wf-id))
        (catch Exception e (deliver result {:error (str e)}))))
    ;; Wait for the workflow to suspend and register its wake callback
    (Thread/sleep 400)
    ;; Cancel: sets the flag AND wakes the sleeper (Phase A2)
    (intemporal/cancel-workflow store wf-id)
    (let [r      (deref result 2000 :stuck)
          flag?  (p/is-cancelled? store wf-id)
          status (p/get-workflow-status store wf-id)]
      (intemporal/shutdown-engine engine)
      {:terminated?         (not= :stuck r)
       :cancelled-flag-set? flag?
       :status              status})))

(defn- assert-cancelled [{:keys [terminated? cancelled-flag-set? status]}]
  (is terminated?
      "Workflow terminated after cancel — wake-workflow forced loop re-entry (bug 2.3 fixed)")
  (is cancelled-flag-set?
      "Cancelled flag is set in the store")
  (is (= :cancelled status)
      "Workflow status is :cancelled"))

;; ── In-memory (always runs) ───────────────────────────────────────────────────

(deftest cancellation-reaches-sleeping-workflow-in-memory
  (testing "cancel-workflow terminates a signal-sleeping workflow (InMemoryStore)"
    (assert-cancelled (run-scenario (mem/->InMemoryStore (atom {}))))))

;; ── JDBC (requires Postgres) ──────────────────────────────────────────────────

(deftest ^:integration cancellation-reaches-sleeping-workflow-jdbc
  (testing "cancel-workflow terminates a signal-sleeping workflow (JdbcStore)"
    (let [url   (or (System/getenv "DATABASE_URL")
                    "jdbc:postgresql://localhost:5432/root?user=root&password=root")
          store (jdbc-store/make-jdbc-store url)]
      (try
        (assert-cancelled (run-scenario store))
        (finally (.close store))))))

;; ── FDB (requires FoundationDB) ───────────────────────────────────────────────

(deftest ^:integration cancellation-reaches-sleeping-workflow-fdb
  (testing "cancel-workflow terminates a signal-sleeping workflow (FDBStore)"
    (let [root  (str "bug23-" (random-uuid))
          fdb   (cfdb/select-api-version 710)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/make-fdb-store db root)]
      (assert-cancelled (run-scenario store)))))
