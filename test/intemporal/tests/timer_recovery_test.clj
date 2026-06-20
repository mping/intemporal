(ns intemporal.tests.timer-recovery-test
  "Milestone 4 (C2) — persistent / cross-pod timers.

  Three properties, each across InMemory + JDBC + FDB:
   1. fire-at determinism — a crash-resumed sleep keeps its original deadline
      (the persisted :timer-scheduled fire-at is reused, not recomputed);
   2. timer recovery — a workflow that sleeps, then loses its engine, is driven
      to completion by a worker on a fresh engine when the timer comes due;
   3. wake_at filtering — list-pending skips a workflow whose wake-at is still in
      the future, and returns it once due."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]))

(defn t-act [x] (* x 3))

(intemporal/defn-workflow sleeper-wf [x ms]
  (let [a (intemporal/stub #'t-act)
        r (a x)]
    (intemporal/sleep ms)
    (+ r 1)))

(defn- fire-at-for [store wf-id]
  (->> (p/load-history store wf-id)
       (filter #(= :timer-scheduled (:event-type %)))
       first
       :fire-at))

(defn- await-status [store wf-id terminal timeout-ms]
  (let [deadline (+ (System/currentTimeMillis) timeout-ms)]
    (loop []
      (let [s (p/get-workflow-status store wf-id)]
        (cond
          (= terminal s) s
          (> (System/currentTimeMillis) deadline) s
          :else (do (Thread/sleep 50) (recur)))))))

;; ── 1. fire-at determinism across a crash-resume ────────────────────────────────

(defn- check-determinism [store]
  (let [wid (str "det-" (random-uuid))]
    ;; Start with a long sleep so it suspends on the timer, then crash.
    (let [e1 (intemporal/make-workflow-engine :store store :threads 2)
          f1 (future (intemporal/start-workflow e1 sleeper-wf [7 60000] :workflow-id wid))]
      (Thread/sleep 300)
      (future-cancel f1)
      (intemporal/shutdown-engine e1))
    (let [fire-at-1 (fire-at-for store wid)]
      (is (some? fire-at-1) "a :timer-scheduled fire-at was persisted")
      ;; Resume on a fresh engine; it re-suspends on the same timer.
      (let [e2 (intemporal/make-workflow-engine :store store :threads 2)
            f2 (future (intemporal/resume-workflow e2 wid sleeper-wf [7 60000]))]
        (Thread/sleep 300)
        (future-cancel f2)
        (intemporal/shutdown-engine e2))
      (let [fire-at-2 (fire-at-for store wid)]
        (is (= fire-at-1 fire-at-2)
            "fire-at is identical across resume — no deadline drift (C2 determinism)")))))

(deftest fire-at-deterministic-in-memory
  (testing "InMemoryStore"
    (check-determinism (store/->InMemoryStore (atom {})))))

(deftest ^:integration fire-at-deterministic-jdbc
  (testing "JdbcStore"
    (let [url   (jdbc-store/resolve-jdbc-url)
          store (jdbc-store/make-jdbc-store url)]
      (try (check-determinism store) (finally (.close store))))))

(deftest ^:integration fire-at-deterministic-fdb
  (testing "FDBStore"
    (let [root  (str "det-" (random-uuid))
          fdb   (cfdb/select-api-version 710)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/make-fdb-store db root)]
      (check-determinism store))))

;; ── 2. timer recovery: worker drives a crashed sleeper to completion ────────────

(defn- check-timer-recovery [store]
  (let [wid (str "trec-" (random-uuid))]
    ;; Short sleep (300ms) so the timer becomes due quickly after the crash.
    (let [e1 (intemporal/make-workflow-engine :store store :threads 2)
          f1 (future (intemporal/start-workflow e1 sleeper-wf [8 300] :workflow-id wid))]
      (Thread/sleep 150)            ; suspend on the timer, before it fires
      (future-cancel f1)
      (intemporal/shutdown-engine e1))
    (is (= :running (p/get-workflow-status store wid))
        "workflow is durably suspended on the timer after the crash")
    ;; A worker on a fresh engine picks it up once the timer is due.
    (let [e2   (intemporal/make-workflow-engine :store store :threads 2)
          stop (intemporal/start-worker e2 :poll-ms 50 :owner-id "trec-w")]
      (try
        (is (= :completed (await-status store wid :completed 5000))
            "worker resumed the crashed timer workflow once it came due (C2 recovery)")
        (is (= 25 (intemporal/get-workflow-result store wid)) "8*3 + 1 = 25")
        (finally (stop) (intemporal/shutdown-engine e2))))))

(deftest timer-recovery-in-memory
  (testing "InMemoryStore"
    (check-timer-recovery (store/->InMemoryStore (atom {})))))

(deftest ^:integration timer-recovery-jdbc
  (testing "JdbcStore"
    (let [url   (jdbc-store/resolve-jdbc-url)
          store (jdbc-store/make-jdbc-store url)]
      (try (check-timer-recovery store) (finally (.close store))))))

(deftest ^:integration timer-recovery-fdb
  (testing "FDBStore"
    (let [root  (str "trec-" (random-uuid))
          fdb   (cfdb/select-api-version 710)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/make-fdb-store db root)]
      (check-timer-recovery store))))

;; ── 3. wake_at filtering: list-pending skips not-yet-due workflows ──────────────

(defn- check-wake-at-filter [store]
  (let [wid (str "wake-" (random-uuid))]
    (p/save-event store wid {:event-type :workflow-started :workflow-id wid :args []})
    ;; Far-future wake-at -> not due -> excluded from list-pending.
    (p/set-wake-at store wid (+ (System/currentTimeMillis) 3600000))
    (is (not (contains? (set (p/list-pending store "any-owner" 1000)) wid))
        "a workflow whose wake-at is in the future is skipped (C2 filtering)")
    ;; Past wake-at -> due -> included.
    (p/set-wake-at store wid (- (System/currentTimeMillis) 1000))
    (is (contains? (set (p/list-pending store "any-owner" 1000)) wid)
        "a workflow whose wake-at has passed is returned")
    ;; nil wake-at -> always eligible -> included.
    (p/set-wake-at store wid nil)
    (is (contains? (set (p/list-pending store "any-owner" 1000)) wid)
        "a workflow with nil wake-at is always eligible")))

(deftest wake-at-filter-in-memory
  (testing "InMemoryStore"
    (check-wake-at-filter (store/->InMemoryStore (atom {})))))

(deftest ^:integration wake-at-filter-jdbc
  (testing "JdbcStore"
    (let [url   (jdbc-store/resolve-jdbc-url)
          store (jdbc-store/make-jdbc-store url)]
      (try (check-wake-at-filter store) (finally (.close store))))))

(deftest ^:integration wake-at-filter-fdb
  (testing "FDBStore"
    (let [root  (str "wake-" (random-uuid))
          fdb   (cfdb/select-api-version 710)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/make-fdb-store db root)]
      (check-wake-at-filter store))))
