(ns intemporal.tests.jepsen.bug-1-2-test
  "Bug 1.2 — Concurrent execution corrupting history.  REGRESSION GUARD.

  Root cause (improvements.md §1.2) — now FIXED (Phase C):
    Two pods could run the same workflow and both write history; JDBC's
    ON CONFLICT DO UPDATE silently overwrote, FDB produced duplicate-seq rows.
    There was nothing stopping two concurrent writers.

    The fix: a lease (C1). A worker claims ownership before executing; every
    save-events validates the lease in the same transaction and throws
    LeaseLostException if this owner no longer holds it. Two workers cannot both
    write — the one without a live lease is rejected, so history can't be
    corrupted by concurrent execution.

  These tests assert the FIXED behaviour: once a second owner takes over, the
  first owner's writes are rejected rather than silently corrupting history."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.protocol :as p]
            [intemporal.store :as mem]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]
            [intemporal.internal.lease :as lease]
            [intemporal.internal.error :as error]))

(defn- run-scenario
  "owner-A claims and writes; ownership moves to owner-B; A's next write must be
  rejected. Returns {:a-wrote? :b-claimed? :a-rejected? :seq-count}."
  [store]
  (let [wid (str "bug12-" (random-uuid))]
    (p/save-event store wid {:event-type :workflow-started :workflow-id wid :args []})
    (let [a-claim (p/claim-workflow store wid "owner-A" 60000)
          _       (binding [lease/*owner* "owner-A"]
                    (p/save-events store wid [{:event-type :activity-completed :seq 0 :result 1}]))
          _       (p/release-lease store wid "owner-A")
          b-claim (p/claim-workflow store wid "owner-B" 60000)
          a-rejected?
          (try
            (binding [lease/*owner* "owner-A"]
              (p/save-events store wid [{:event-type :activity-completed :seq 1 :result 2}]))
            false
            (catch Exception e (error/lease-lost? e)))
          seq0 (->> (p/load-history store wid) (filter #(= 0 (:seq %))) count)]
      {:a-wrote?    a-claim
       :b-claimed?  b-claim
       :a-rejected? a-rejected?
       :seq0-count  seq0})))

(defn- assert-fixed [{:keys [a-wrote? b-claimed? a-rejected? seq0-count]}]
  (is a-wrote?    "owner-A held the lease and wrote")
  (is b-claimed?  "ownership moved to owner-B after release")
  (is a-rejected? "stale owner-A's write was rejected with LeaseLostException (bug 1.2 fixed)")
  (is (= 1 seq0-count) "exactly one event at seq=0 — no concurrent-write corruption"))

(deftest lease-prevents-corruption-in-memory
  (testing "InMemoryStore"
    (assert-fixed (run-scenario (mem/->InMemoryStore (atom {}))))))

(deftest ^:integration lease-prevents-corruption-jdbc
  (testing "JdbcStore"
    (let [url   (or (System/getenv "DATABASE_URL")
                    "jdbc:postgresql://localhost:5432/root?user=root&password=root")
          store (jdbc-store/make-jdbc-store url)]
      (try (assert-fixed (run-scenario store)) (finally (.close store))))))

(deftest ^:integration lease-prevents-corruption-fdb
  (testing "FDBStore"
    (let [root  (str "bug12-" (random-uuid))
          fdb   (cfdb/select-api-version 730)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/make-fdb-store db root)]
      (assert-fixed (run-scenario store)))))
