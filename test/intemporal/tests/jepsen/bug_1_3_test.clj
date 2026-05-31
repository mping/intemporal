(ns intemporal.tests.jepsen.bug-1-3-test
  "Bug 1.3 — Recovery after restart.  REGRESSION GUARD.

  Root cause (improvements.md §1.3) — now FIXED (Phase C):
    There was no background process that resumed workflows after a restart, and
    resume required the caller to know the workflow fn + args. A workflow whose
    engine crashed stayed suspended forever.

    The fix: durable runnable markers (C3) written on every signal, a lease (C1)
    so only one worker runs a workflow, the workflow registry (B3) so a workflow
    can be resumed by id alone, and start-worker (C4) which polls markers, claims
    the lease, and resumes. A restarted process running a worker recovers
    workflows it never started.

  These tests assert the FIXED behaviour: after the engine crashes, a worker on a
  fresh engine (same shared store) resumes the workflow to completion once the
  signal arrives. InMemory shares one state atom to model a shared store; JDBC and
  FDB use the same backing."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as mem]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]
            [intemporal.internal.workflow-registry :as wreg]))

(defn rec-act [x] (* x 10))

(defn recover-wf [x]
  (let [a (intemporal/stub #'rec-act)
        r (a x)]
    (intemporal/wait-for-signal "go")
    (+ r 7)))

(defn- await-status [store wf-id terminal timeout-ms]
  (let [deadline (+ (System/currentTimeMillis) timeout-ms)]
    (loop []
      (let [s (p/get-workflow-status store wf-id)]
        (if (or (= terminal s) (> (System/currentTimeMillis) deadline))
          s
          (do (Thread/sleep 50) (recur)))))))

(defn- run-scenario
  "Start on engine-a (suspends on signal), crash it, then a worker on engine-b
  resumes after a signal. Returns the terminal status + result."
  [store]
  (wreg/clear-registry!)
  (let [wid (str "bug13-" (random-uuid))]
    (let [e1 (intemporal/make-workflow-engine :store store :threads 2)
          f1 (future (intemporal/start-workflow e1 recover-wf [4] :workflow-id wid))]
      (Thread/sleep 300)
      (future-cancel f1)
      (intemporal/shutdown-engine e1))
    (let [e2   (intemporal/make-workflow-engine :store store :threads 2)
          stop (intemporal/start-worker e2 :poll-ms 50 :owner-id "bug13-w")]
      (try
        (intemporal/send-signal store wid "go" {})
        {:status (await-status store wid :completed 5000)
         :result (intemporal/get-workflow-result store wid)}
        (finally (stop) (intemporal/shutdown-engine e2))))))

(defn- assert-recovered [{:keys [status result]}]
  (is (= :completed status) "worker on a fresh engine resumed the crashed workflow (bug 1.3 fixed)")
  (is (= 47 result) "4*10 + 7 = 47"))

(deftest engine-restart-recovers-in-memory
  (testing "shared InMemoryStore: worker recovers after crash"
    (assert-recovered (run-scenario (mem/->InMemoryStore (atom {}))))))

(deftest ^:integration engine-restart-recovers-jdbc
  (testing "JdbcStore: worker recovers after crash"
    (let [url   (or (System/getenv "DATABASE_URL")
                    "jdbc:postgresql://localhost:5432/root?user=root&password=root")
          store (jdbc-store/make-jdbc-store url)]
      (try (assert-recovered (run-scenario store)) (finally (.close store))))))

(deftest ^:integration engine-restart-recovers-fdb
  (testing "FDBStore: worker recovers after crash"
    (let [root  (str "bug13-" (random-uuid))
          fdb   (cfdb/select-api-version 730)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/make-fdb-store db root)]
      (assert-recovered (run-scenario store)))))
