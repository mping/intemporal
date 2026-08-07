(ns intemporal.tests.jepsen.bug-1-1-test
  "Bug 1.1 — Wake on signal across pods.  REGRESSION GUARD.

  Root cause (improvements.md §1.1) — now FIXED (Phase C):
    Wake callbacks lived in a process-local atom on the store record, so a signal
    delivered through a DIFFERENT store instance (another pod) never woke the
    workflow — it was persisted but orphaned.

    The fix: add-signal writes a durable runnable marker (C3); a worker (C4) on
    any pod claims the marker, leases the workflow (C1), and resumes it by id
    (B3). The wake no longer depends on the process that started the workflow.

  These tests assert the FIXED behaviour: a signal written through a SEPARATE
  store instance, with a worker running, resumes the workflow to completion.
  InMemory models a shared store by having both instances share one state atom;
  JDBC and FDB use two store objects over the same backing."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as mem]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]))

(defn sig-act [x] (* x 2))

(intemporal/defn-workflow sig-wf [x]
  (let [a (intemporal/stub #'sig-act)
        r (a x)]
    (intemporal/wait-for-signal "go")
    (+ r 100)))

(defn- await-status [store wf-id terminal timeout-ms]
  (let [deadline (+ (System/currentTimeMillis) timeout-ms)]
    (loop []
      (let [s (p/get-workflow-status store wf-id)]
        (if (or (= terminal s) (> (System/currentTimeMillis) deadline))
          s
          (do (Thread/sleep 50) (recur)))))))

(defn- run-scenario
  "store-a runs the workflow (suspends on signal); store-b (a separate instance
  over the same backing) delivers the signal; a worker resumes it."
  [store-a store-b]
  (let [wid (str "bug11-" (random-uuid))]
    (let [e1 (intemporal/make-workflow-engine :store store-a :threads 2)
          f1 (future (intemporal/start-workflow e1 sig-wf [6] :workflow-id wid))]
      (Thread/sleep 300)
      (future-cancel f1)
      (intemporal/shutdown-engine e1))
    (let [e2   (intemporal/make-workflow-engine :store store-b :threads 2)
          stop (intemporal/start-worker e2 :poll-ms 50 :owner-id "bug11-w")]
      (try
        ;; Signal delivered through the SECOND store instance.
        (intemporal/send-signal store-b wid "go" {})
        {:status (await-status store-b wid :completed 5000)
         :result (intemporal/get-workflow-result store-b wid)}
        (finally (stop) (intemporal/shutdown-engine e2))))))

(defn- assert-woke [{:keys [status result]}]
  (is (= :completed status) "cross-instance signal woke the workflow via durable marker (bug 1.1 fixed)")
  (is (= 112 result) "6*2 + 100 = 112"))

(deftest signal-across-instances-in-memory
  (testing "InMemoryStore sharing one backing atom"
    (let [state (atom {})]
      (assert-woke (run-scenario (mem/create-store :state state) (mem/create-store :state state))))))

(deftest ^:integration signal-across-instances-jdbc
  (testing "two JdbcStore instances over the same Postgres"
    (let [url     (jdbc-store/resolve-jdbc-url)
          store-a (jdbc-store/create-store url)
          store-b (jdbc-store/create-store url)]
      (try (assert-woke (run-scenario store-a store-b))
           (finally (.close store-a) (.close store-b))))))

(deftest ^:integration signal-across-instances-fdb
  (testing "two FDBStore instances over the same FoundationDB"
    (let [root    (str "bug11-" (random-uuid))
          fdb     (cfdb/select-api-version 710)
          db      (.open fdb "docker/fdb.cluster")
          store-a (fdb-store/create-store db root)
          store-b (fdb-store/create-store db root)]
      (assert-woke (run-scenario store-a store-b)))))
