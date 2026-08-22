(ns intemporal.tests.jepsen.bug-2-1-test
  "Regression guard for a signal arriving after an empty consume but before park.

  RacingStore pauses the drive after consume-signal returns nil. The test then
  commits a signal, which advances wake-version while the workflow is RUNNING.
  The eventual park uses its older version and is rejected, so the same drive
  replays, consumes the signal, and completes."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.store :as mem]
   [intemporal.store.fdb :as fdb-store]
   [intemporal.store.jdbc :as jdbc-store]
   [intemporal.tests.jepsen.racing-store :refer [->RacingStore]]
   [me.vedang.clj-fdb.FDB :as cfdb]))

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
      ;; Inject after the empty consume. This advances wake-version before park.
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
    (assert-woke (run-scenario (mem/create-store)))))

;; ── JDBC (requires Postgres) ──────────────────────────────────────────────────

(deftest ^:integration signal-delivered-in-register-consume-window-jdbc
  (testing "RacingStore on JdbcStore: in-window signal wakes the workflow"
    (let [url   (jdbc-store/resolve-jdbc-url)
          inner (jdbc-store/create-store url)]
      (try
        (assert-woke (run-scenario inner))
        (finally (.close inner))))))

;; ── FDB (requires FoundationDB) ───────────────────────────────────────────────

(deftest ^:integration signal-delivered-in-register-consume-window-fdb
  (testing "RacingStore on FDBStore: in-window signal wakes the workflow"
    (let [root  (str "bug21-" (random-uuid))
          fdb   (cfdb/select-api-version 710)
          db    (.open fdb "docker/fdb.cluster")
          inner (fdb-store/create-store db root)]
      (assert-woke (run-scenario inner)))))
