(ns intemporal.tests.worker-test
  "Phase C — lease (C1), runnable markers (C3) and the recovery worker (C4).

  Proves the durable, cross-pod wake model:
   - a workflow whose original engine crashed is resumed by a worker after a
     signal is delivered (the recovery-poller story, bug 1.3 / 1.1 model);
   - the lease rejects a writer that no longer owns the workflow (bug 1.2)."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]
            [intemporal.internal.lease :as lease]
            [intemporal.internal.error :as error]
            [intemporal.internal.workflow-registry :as wreg]))

(defn w-act [x] (* x 10))

(defn worker-wf [x]
  (let [a (intemporal/stub #'w-act)
        r (a x)]
    (intemporal/wait-for-signal "go")
    (+ r 1)))

(defn- await-status [store wf-id terminal timeout-ms]
  (let [deadline (+ (System/currentTimeMillis) timeout-ms)]
    (loop []
      (let [s (p/get-workflow-status store wf-id)]
        (cond
          (= terminal s) s
          (> (System/currentTimeMillis) deadline) s
          :else (do (Thread/sleep 50) (recur)))))))

;; ── C4: worker resumes a crashed workflow after a cross-instance signal ──────────

(defn- check-worker-recovery [store]
  (wreg/clear-registry!)
  (let [wid (str "worker-" (random-uuid))]
    ;; Phase 1: start, suspend on signal, then crash (no signal sent).
    (let [e1 (intemporal/make-workflow-engine :store store :threads 2)
          f1 (future (intemporal/start-workflow e1 worker-wf [5] :workflow-id wid))]
      (Thread/sleep 300)
      (future-cancel f1)
      (intemporal/shutdown-engine e1))
    (is (= :running (p/get-workflow-status store wid))
        "workflow is durably suspended, not terminal, after the crash")
    ;; Phase 2: a worker (fresh engine) + a signal delivered via the shared store.
    (let [e2   (intemporal/make-workflow-engine :store store :threads 2)
          stop (intemporal/start-worker e2 :poll-ms 50 :owner-id "w2")]
      (try
        (intemporal/send-signal store wid "go" {})   ; writes a durable runnable marker
        (is (= :completed (await-status store wid :completed 5000))
            "worker claimed the marker, leased, and resumed the workflow to completion")
        (is (= 51 (intemporal/get-workflow-result store wid)) "5*10 + 1 = 51")
        (finally (stop) (intemporal/shutdown-engine e2))))))

(deftest worker-recovery-in-memory
  (testing "shared InMemoryStore: worker resumes a crashed, then-signalled workflow"
    (check-worker-recovery (store/->InMemoryStore (atom {})))))

(deftest ^:integration worker-recovery-jdbc
  (testing "JdbcStore: worker resumes via durable runnable marker"
    (let [url   (or (System/getenv "DATABASE_URL")
                    "jdbc:postgresql://localhost:5432/root?user=root&password=root")
          store (jdbc-store/make-jdbc-store url)]
      (try (check-worker-recovery store) (finally (.close store))))))

(deftest ^:integration worker-recovery-fdb
  (testing "FDBStore: worker resumes via durable runnable marker"
    (let [root  (str "worker-" (random-uuid))
          fdb   (cfdb/select-api-version 730)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/make-fdb-store db root)]
      (check-worker-recovery store))))

;; ── C1: lease rejects a stale writer ─────────────────────────────────────────────

(defn- check-lease [store]
  (let [wid (str "lease-" (random-uuid))]
    (p/save-event store wid {:event-type :workflow-started :workflow-id wid :args []})
    (is (p/claim-workflow store wid "owner-A" 60000) "A claims the unowned workflow")
    (is (false? (p/claim-workflow store wid "owner-B" 60000)) "B cannot claim A's live lease")
    ;; A may write while it holds the lease
    (binding [lease/*owner* "owner-A"]
      (p/save-events store wid [{:event-type :activity-completed :seq 0 :result 1}]))
    ;; A releases; B claims
    (p/release-lease store wid "owner-A")
    (is (p/claim-workflow store wid "owner-B" 60000) "B claims after release")
    ;; A is now stale: its writes must be rejected
    (is (thrown? clojure.lang.ExceptionInfo
                 (binding [lease/*owner* "owner-A"]
                   (p/save-events store wid [{:event-type :activity-completed :seq 1 :result 2}])))
        "stale owner A's write is rejected (lease lost)")))

(deftest lease-rejects-stale-writer-in-memory
  (testing "InMemoryStore lease validation"
    (check-lease (store/->InMemoryStore (atom {})))))

(deftest ^:integration lease-rejects-stale-writer-jdbc
  (testing "JdbcStore lease validation"
    (let [url   (or (System/getenv "DATABASE_URL")
                    "jdbc:postgresql://localhost:5432/root?user=root&password=root")
          store (jdbc-store/make-jdbc-store url)]
      (try (check-lease store) (finally (.close store))))))

(deftest ^:integration lease-rejects-stale-writer-fdb
  (testing "FDBStore lease validation"
    (let [root  (str "lease-" (random-uuid))
          fdb   (cfdb/select-api-version 730)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/make-fdb-store db root)]
      (check-lease store))))
