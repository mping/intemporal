(ns intemporal.tests.jepsen.bug-1-2-test
  "Bug 1.2 — Concurrent save-events at the same (workflow-id, seq) corrupts history.

  Root cause (improvements.md §1.2):
    JDBC:  INSERT … ON CONFLICT (workflow_id, seq) DO UPDATE silently overwrites
           the losing write.  Both callers receive no error, but only one event
           survives in intemporal_history.  The discarded write is invisible.
    FDB:   save-events keys events as [seq, uuid], so two concurrent writes at
           the same seq both survive as separate rows.  load-history returns
           both, making the history non-deterministic.
    Mem:   InMemoryStore.save-events appends unconditionally (swap! conj), so
           duplicate-seq events accumulate in the vector.

  Both outcomes violate the invariant that seq numbers are unique within a
  workflow's history — breaking deterministic replay.

  These tests assert the CURRENT (buggy) behaviour.  They will fail once the
  fix from improvements.md §A3 is applied (DO NOTHING + conflict exception)."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.protocol :as p]
            [intemporal.store :as mem]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]))

;; ── Shared scenario ───────────────────────────────────────────────────────────

(defn- run-scenario
  "Fires two concurrent writes at seq=0, waits for both, then reads back history.
  Returns {:writes [result-a result-b] :seq0-count n :seq0-events [...]}."
  [store]
  (let [wf-id   (str "bug12-" (random-uuid))
        event-a {:event-type :workflow-started :seq 0 :writer "thread-a"
                 :timestamp  (System/currentTimeMillis)}
        event-b {:event-type :workflow-started :seq 0 :writer "thread-b"
                 :timestamp  (System/currentTimeMillis)}
        latch   (promise)
        fa      (future (deref latch)
                        (try (p/save-events store wf-id [event-a]) :ok
                             (catch Exception e {:error (str e)})))
        fb      (future (deref latch)
                        (try (p/save-events store wf-id [event-b]) :ok
                             (catch Exception e {:error (str e)})))]
    (deliver latch :go)
    (let [ra @fa
          rb @fb
          h  (p/load-history store wf-id)]
      {:writes       [ra rb]
       :seq0-count   (count (filter #(= 0 (:seq %)) h))
       :seq0-events  (filter #(= 0 (:seq %)) h)})))

;; ── In-memory tests (always run) ─────────────────────────────────────────────

(deftest concurrent-seq-write-appends-both-in-memory
  (testing "InMemoryStore appends both events, producing duplicate seq=0"
    (let [store  (mem/->InMemoryStore (atom {}))
          {:keys [writes seq0-count]} (run-scenario store)]
      (is (every? #{:ok} writes)
          "Both writes return :ok — no conflict signalled")
      (is (> seq0-count 1)
          (str "History has " seq0-count " events at seq=0 — duplicate seq (bug 1.2)")))))

;; ── JDBC tests (require Postgres) ────────────────────────────────────────────

(deftest ^:integration concurrent-seq-write-silently-clobbered-jdbc
  (testing "JDBC: ON CONFLICT DO UPDATE silently discards one write"
    (let [url   (or (System/getenv "DATABASE_URL")
                    "jdbc:postgresql://localhost:5432/root?user=root&password=root")
          store (jdbc-store/make-jdbc-store url)]
      (try
        (let [{:keys [writes seq0-count seq0-events]} (run-scenario store)]
          (is (every? #{:ok} writes)
              "Both writes return :ok — DO UPDATE never raises a conflict error")
          (is (= 1 seq0-count)
              "Exactly one row at seq=0 — the other write was silently discarded (bug 1.2)")
          (is (contains? #{"thread-a" "thread-b"} (:writer (first seq0-events)))
              "Surviving writer is whichever won the race — non-deterministic"))
        (finally (.close store))))))

;; ── FDB tests (require FoundationDB) ─────────────────────────────────────────

(deftest ^:integration concurrent-seq-write-produces-duplicates-fdb
  (testing "FDB: UUID-keyed writes store both events at seq=0"
    (let [root  (str "bug12-" (random-uuid))
          fdb   (cfdb/select-api-version 730)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/make-fdb-store db root)]
      (let [{:keys [writes seq0-count]} (run-scenario store)]
        (is (every? #{:ok} writes)
            "Both writes return :ok")
        (is (> seq0-count 1)
            (str "History has " seq0-count " events at seq=0 — duplicate seq (bug 1.2)"))))))
