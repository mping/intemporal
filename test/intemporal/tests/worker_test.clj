(ns intemporal.tests.worker-test
  "Phase C (ownership model) — claim exclusivity + the recovery worker.

  Proves the durable, cross-pod recovery model WITHOUT leases:
   - a workflow whose original engine crashed is resumed by a worker (the
     ownership scan is both the live wake and the crash recovery);
   - claim-owner is the exclusivity gate: only one owner can claim a workflow,
     so concurrent execution (and history corruption) cannot occur (bug 1.2)."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]))

(defn w-act [x] (* x 10))

(intemporal/defn-workflow worker-wf [x]
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

;; ── recovery: worker resumes a crashed workflow via the ownership scan ──────────

(defn- check-worker-recovery [store]
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
        (intemporal/send-signal store wid "go" {})
        (is (= :completed (await-status store wid :completed 5000))
            "worker scan claimed ownership and resumed the workflow to completion")
        (is (= 51 (intemporal/get-workflow-result store wid)) "5*10 + 1 = 51")
        (finally (stop) (intemporal/shutdown-engine e2))))))

(deftest worker-recovery-in-memory
  (testing "shared InMemoryStore: worker resumes a crashed, then-signalled workflow"
    (check-worker-recovery (store/create-store))))

(deftest ^:integration worker-recovery-jdbc
  (testing "JdbcStore: worker resumes via the ownership scan"
    (let [url   (jdbc-store/resolve-jdbc-url)
          store (jdbc-store/create-store url)]
      (try (check-worker-recovery store) (finally (.close store))))))

(deftest ^:integration worker-recovery-fdb
  (testing "FDBStore: worker resumes via the ownership scan"
    (let [root  (str "worker-" (random-uuid))
          fdb   (cfdb/select-api-version 710)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/create-store db root)]
      (check-worker-recovery store))))

;; ── exclusivity: claim-owner lets exactly one owner run a workflow ──────────────

(defn- check-claim-exclusivity [store]
  (let [wid (str "claim-" (random-uuid))]
    (p/save-event store wid {:event-type :workflow-started :seq -1 :workflow-id wid :args []})
    (is (p/claim-owner store wid "owner-A") "A claims the unowned workflow")
    (is (p/claim-owner store wid "owner-A") "A re-claims its own (idempotent)")
    (is (false? (p/claim-owner store wid "owner-B")) "B cannot claim A's workflow")
    ;; scope to this wid — the shared DB may hold unowned rows from prior runs
    (is (contains? (set (p/list-pending store "owner-A" 1000)) wid) "the workflow is pending for A")
    (is (not (contains? (set (p/list-pending store "owner-B" 1000)) wid)) "and not pending for B")
    (p/release-owner store "owner-A")
    (is (p/claim-owner store wid "owner-B") "B claims after A releases")))

(deftest claim-exclusivity-in-memory
  (testing "InMemoryStore claim-owner exclusivity"
    (check-claim-exclusivity (store/create-store))))

(deftest ^:integration claim-exclusivity-jdbc
  (testing "JdbcStore claim-owner exclusivity"
    (let [url   (jdbc-store/resolve-jdbc-url)
          store (jdbc-store/create-store url)]
      (try (check-claim-exclusivity store) (finally (.close store))))))

(deftest ^:integration claim-exclusivity-fdb
  (testing "FDBStore claim-owner exclusivity"
    (let [root  (str "claim-" (random-uuid))
          fdb   (cfdb/select-api-version 710)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/create-store db root)]
      (check-claim-exclusivity store))))
