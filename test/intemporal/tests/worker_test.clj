(ns intemporal.tests.worker-test
  "Engine ownership model — claim exclusivity and crash recovery.

  Proves the durable, cross-pod recovery model WITHOUT leases:
   - a workflow whose original engine crashed is resumed by a new engine (the
     ownership scan is both the live wake and the crash recovery);
   - claim-runnable! is the exclusivity gate: only one owner can claim a workflow,
     so concurrent execution (and history corruption) cannot occur (bug 1.2)."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.store.fdb :as fdb-store]
   [intemporal.store.jdbc :as jdbc-store]
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

;; ── recovery: a new engine resumes a crashed workflow ────────────────────────

(defn- check-engine-recovery [store]
  (let [wid (str "worker-" (random-uuid))]
    ;; Phase 1: start, suspend on signal, then crash (no signal sent).
    (let [e1 (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)) :store store :threads 2)
          f1 (future (intemporal/start-workflow e1 worker-wf [5] :workflow-id wid))]
      (Thread/sleep 300)
      (future-cancel f1)
      (intemporal/shutdown-engine e1))
    (is (= :running (p/get-workflow-status store wid))
        "workflow is durably suspended, not terminal, after the crash")
    ;; Phase 2: a fresh engine + a signal delivered via the shared store.
    (let [e2 (intemporal/start-engine :store store :threads 2
               :poll-ms 50 :owner-id "w2")]
      (try
        (intemporal/send-signal store wid "go" {})
        (is (= :completed (await-status store wid :completed 5000))
            "the engine claimed ownership and resumed the workflow to completion")
        (is (= 51 (intemporal/get-workflow-result store wid)) "5*10 + 1 = 51")
        (finally (intemporal/shutdown-engine e2))))))

(deftest engine-recovery-in-memory
  (testing "shared InMemoryStore: engine resumes a crashed, then-signalled workflow"
    (check-engine-recovery (store/create-store))))

(deftest ^:integration engine-recovery-jdbc
  (testing "JdbcStore: engine resumes via the ownership scan"
    (let [url   (jdbc-store/resolve-jdbc-url)
          store (jdbc-store/create-store url)]
      (try (check-engine-recovery store) (finally (.close store))))))

(deftest ^:integration engine-recovery-fdb
  (testing "FDBStore: engine resumes via the ownership scan"
    (let [root  (str "worker-" (random-uuid))
          fdb   (cfdb/select-api-version 710)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/create-store db root)]
      (check-engine-recovery store))))

;; ── exclusivity: an atomic runnable claim selects exactly one owner ─────────────

(defn- check-claim-exclusivity [store]
  (let [wid (str "claim-" (random-uuid))]
    (p/create-workflow!
      store
      {:workflow-id wid
       :owner-id "owner-A"
       :started-event {:event-type :workflow-started :seq -1 :workflow-id wid :args []
                       :workflow-fn-name "claim-exclusivity"}})
    (let [claim-for (fn [owner]
                      (some #(when (= wid (:workflow-id %)) %)
                            (p/claim-runnable! store owner 1000
                                               (System/currentTimeMillis))))
          claim-a   (claim-for "owner-A")]
      (is (some? claim-a) "A atomically claims the unowned runnable workflow")
      (is (nil? (claim-for "owner-A"))
          "RUNNING work is not dispatched twice to the same engine")
      (is (nil? (claim-for "owner-B"))
          "B cannot claim A's running workflow")
      (p/release-owner! store "owner-A")
      (let [claim-b (claim-for "owner-B")]
        (is (some? claim-b) "release requeues RUNNING work so B can claim it")
        (let [tree (p/load-close-tree store wid)]
          (is (= :committed
                 (:commit-status
                   (p/commit-transition!
                     store {:workflow-id wid :owner-id "owner-B" :kind :terminal
                            :events [{:event-type :workflow-completed :seq 0 :result :done
                                      :timestamp (System/currentTimeMillis)}]
                            :terminal-status :completed
                            :expected-related-revisions {wid (:revision tree)}}))))))
      (p/release-owner! store "owner-B"))))

(deftest claim-exclusivity-in-memory
  (testing "InMemoryStore claim-runnable! exclusivity"
    (check-claim-exclusivity (store/create-store))))

(deftest ^:integration claim-exclusivity-jdbc
  (testing "JdbcStore claim-runnable! exclusivity"
    (let [url   (jdbc-store/resolve-jdbc-url)
          store (jdbc-store/create-store url)]
      (try (check-claim-exclusivity store) (finally (.close store))))))

(deftest ^:integration claim-exclusivity-fdb
  (testing "FDBStore claim-runnable! exclusivity"
    (let [root  (str "claim-" (random-uuid))
          fdb   (cfdb/select-api-version 710)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/create-store db root)]
      (check-claim-exclusivity store))))
