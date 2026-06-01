(ns intemporal.tests.jepsen.bug-1-2-test
  "Bug 1.2 — Concurrent execution corrupting history.  REGRESSION GUARD.

  Root cause (improvements.md §1.2) — now FIXED (Phase C, ownership model):
    Two pods could run the same workflow and both write history; JDBC's
    ON CONFLICT DO UPDATE silently overwrote, FDB produced duplicate-seq rows.
    Nothing stopped two concurrent writers.

    The fix: an ownership column. claim-owner atomically stamps
    `owner WHERE owner IS NULL OR owner = me`, so exactly one pod can own (and
    therefore run) a workflow; the worker resumes owned workflows one at a time.
    No two writers execute concurrently, so history cannot be corrupted.

  These tests assert the FIXED behaviour: of two pods racing to claim one
  unowned workflow, exactly one succeeds; the loser cannot run it."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.protocol :as p]
            [intemporal.store :as mem]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]))

(defn- run-scenario
  "Two owners race to claim one unowned workflow. Returns
  {:a-claimed? :b-claimed? :pending-for-loser}."
  [store]
  (let [wid (str "bug12-" (random-uuid))]
    (p/save-event store wid {:event-type :workflow-started :workflow-id wid :args []})
    (let [a (p/claim-owner store wid "owner-A")
          b (p/claim-owner store wid "owner-B")]   ; A already owns it -> B must fail
      {:a-claimed? a
       :b-claimed? b
       ;; scope to this wid — the shared DB may hold unowned rows from prior runs
       :wid-pending-for-b? (contains? (set (p/list-pending store "owner-B" 1000)) wid)})))

(defn- assert-fixed [{:keys [a-claimed? b-claimed? wid-pending-for-b?]}]
  (is a-claimed?            "owner-A claimed the unowned workflow")
  (is (false? b-claimed?)   "owner-B could NOT claim A's workflow — exclusive ownership (bug 1.2 fixed)")
  (is (not wid-pending-for-b?) "the workflow is not runnable by B, so B never executes it"))

(deftest claim-is-exclusive-in-memory
  (testing "InMemoryStore"
    (assert-fixed (run-scenario (mem/->InMemoryStore (atom {}))))))

(deftest ^:integration claim-is-exclusive-jdbc
  (testing "JdbcStore"
    (let [url   (or (System/getenv "DATABASE_URL")
                    "jdbc:postgresql://localhost:5432/root?user=root&password=root")
          store (jdbc-store/make-jdbc-store url)]
      (try (assert-fixed (run-scenario store)) (finally (.close store))))))

(deftest ^:integration claim-is-exclusive-fdb
  (testing "FDBStore"
    (let [root  (str "bug12-" (random-uuid))
          fdb   (cfdb/select-api-version 730)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/make-fdb-store db root)]
      (assert-fixed (run-scenario store)))))
