(ns intemporal.tests.child-workflow-async-test
  "Tier 2: independent child workflows.

   Children are first-class persisted workflows with their own ownership claim and
   lifecycle, driven by the recovery worker (the ownership scan). A child may itself
   suspend (e.g. on a signal) without blocking the parent; the parent is re-resumed
   when the child terminates. Mixing start-workflow's blocking loop with a worker on
   the same workflow is out of scope, so these tests drive everything via a worker.

   Each scenario is a store-agnostic check run against InMemory (always), and JDBC
   and FDB (^:integration)."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]
            [intemporal.internal.workflow-registry :as wreg]))

;; ── activities / workflows ──────────────────────────────────────────────────────

;; Plain global atom (not a dynamic var): activities run on executor threads that
;; would not inherit a thread-local binding.
(defonce act-calls (atom 0))

(defn ca-act [x]
  (swap! act-calls inc)
  (* x 10))

(intemporal/defn-workflow signal-child-wf
  "A child that suspends on a signal, then returns x + payload."
  [x]
  (let [s (intemporal/wait-for-signal "go")]
    (+ x s)))

(intemporal/defn-workflow parent-join-wf
  "Schedules an independent child, runs its own activity in the meantime, then joins."
  [x child-id]
  (let [a   (intemporal/stub #'ca-act)
        h   (intemporal/run-child-workflow-async #'signal-child-wf [x] :child-id child-id)
        own (a x)]
    {:own own :child (intemporal/join h)}))

;; Policy is a literal at the call site (not passed through args, which JDBC/FDB
;; would JSON-round-trip from keyword to string), so one parent fn per policy.
(intemporal/defn-workflow parent-cascade-wf
  "Schedules a detached :cascade-cancel child that waits forever, then completes."
  [child-id]
  (intemporal/run-child-workflow-detached #'signal-child-wf [0]
                                          :child-id child-id
                                          :parent-close-policy :cascade-cancel)
  :parent-done)

(intemporal/defn-workflow parent-abandon-wf
  "Schedules a detached :abandon child that waits forever, then completes."
  [child-id]
  (intemporal/run-child-workflow-detached #'signal-child-wf [0]
                                          :child-id child-id
                                          :parent-close-policy :abandon)
  :parent-done)

(intemporal/defn-workflow parent-requirejoin-wf
  "Schedules a :require-join child but completes without joining — should fail."
  [child-id]
  (intemporal/run-child-workflow-async #'signal-child-wf [0]
                                       :child-id child-id
                                       :parent-close-policy :require-join)
  :done-without-join)

;; ── three-level tree with DIFFERENT close policies ──────────────────────────────
;; parent --(:cascade-cancel)--> child --(:abandon)--> grandchild
;; Each level waits on its own signal so the whole tree stays alive until we act.

(intemporal/defn-workflow pcp-grandchild-wf []
  (intemporal/wait-for-signal "gc-go")
  :gc-done)

(intemporal/defn-workflow pcp-child-wf [gc-id]
  ;; grandchild is :abandon — it must survive this child being cancelled
  (intemporal/run-child-workflow-detached #'pcp-grandchild-wf []
                                          :child-id gc-id
                                          :parent-close-policy :abandon)
  (intemporal/wait-for-signal "c-go")
  :c-done)

(intemporal/defn-workflow pcp-parent-wf [c-id gc-id]
  ;; child is :cascade-cancel — cancelling the parent must cancel it
  (intemporal/run-child-workflow-detached #'pcp-child-wf [gc-id]
                                          :child-id c-id
                                          :parent-close-policy :cascade-cancel)
  (intemporal/wait-for-signal "p-go")
  :p-done)

;; ── helpers ───────────────────────────────────────────────────────────────────

(defn- await-status [store wf-id terminal timeout-ms]
  (let [deadline (+ (System/currentTimeMillis) timeout-ms)]
    (loop []
      (let [s (p/get-workflow-status store wf-id)]
        (cond
          (= terminal s) s
          (> (System/currentTimeMillis) deadline) s
          :else (do (Thread/sleep 25) (recur)))))))

(defn- seed-top-level!
  "Make `wf-fn` runnable by the worker scan: persist its :workflow-started event
   (the same seed start-workflow would write)."
  [store wf-fn wf-id args]
  (p/save-event store wf-id {:event-type       :workflow-started
                             :workflow-id      wf-id
                             :workflow-fn-name (wreg/workflow-name wf-fn)
                             :args             (vec args)
                             :timestamp        (System/currentTimeMillis)}))

(defmacro ^:private with-worker [[engine store-expr] & body]
  `(let [store#  ~store-expr
         ~engine (intemporal/make-workflow-engine :store store# :threads 4)
         stop#   (intemporal/start-worker ~engine :poll-ms 25 :owner-id (str "w-" (random-uuid)))]
     (try ~@body
          (finally (stop#) (intemporal/shutdown-engine ~engine)))))

;; ── store-agnostic checks ─────────────────────────────────────────────────────

(defn- check-parallel-suspending-child [store]
  (reset! act-calls 0)
  (with-worker [engine store]
    (let [pid (str "parent-" (random-uuid))
          cid (str pid "/child")]
      (seed-top-level! store #'parent-join-wf pid [5 cid])
      (is (= :running (await-status store cid :running 3000))
          "child exists as an independent, running workflow")
      (is (= :running (p/get-workflow-status store pid))
          "parent has not completed — it is waiting on the child")
      (intemporal/send-signal store cid "go" 7)
      (is (= :completed (await-status store pid :completed 5000)))
      (is (= :completed (p/get-workflow-status store cid)))
      (is (= {:own 50 :child 12} (intemporal/get-workflow-result store pid))
          "own activity = 5*10, child = 5+7")
      (is (= 1 @act-calls)
          "parent's activity ran exactly once despite multiple resumes (replay)"))))

(defn- check-cascade-cancel [store]
  (with-worker [engine store]
    (let [pid (str "parent-" (random-uuid))
          cid (str pid "/child")]
      (seed-top-level! store #'parent-cascade-wf pid [cid])
      (is (= :completed (await-status store pid :completed 5000))
          "parent completes without joining the child")
      (is (= :cancelled (await-status store cid :cancelled 5000))
          "the orphaned child was cascade-cancelled"))))

(defn- check-abandon [store]
  (with-worker [engine store]
    (let [pid (str "parent-" (random-uuid))
          cid (str pid "/child")]
      (seed-top-level! store #'parent-abandon-wf pid [cid])
      (is (= :completed (await-status store pid :completed 5000)))
      (Thread/sleep 200)
      (is (= :running (p/get-workflow-status store cid))
          "abandoned child keeps running independently"))))

(defn- check-require-join [store]
  (with-worker [engine store]
    (let [pid (str "parent-" (random-uuid))
          cid (str pid "/child")]
      (seed-top-level! store #'parent-requirejoin-wf pid [cid])
      (is (= :failed (await-status store pid :failed 5000))
          "parent failed because it closed with an un-joined :require-join child"))))

(defn- check-mixed-close-policies [store]
  ;; parent --(:cascade-cancel)--> child --(:abandon)--> grandchild
  ;; Cancelling the parent must cascade to the child but NOT to the abandoned
  ;; grandchild — the two policies diverge within one tree.
  (with-worker [engine store]
    (let [pid (str "pcp-" (random-uuid))
          cid (str pid "/child")
          gid (str pid "/grandchild")]
      (seed-top-level! store #'pcp-parent-wf pid [cid gid])
      ;; whole tree comes up (each level suspended on its own signal)
      (is (= :running (await-status store cid :running 3000)) "child running")
      (is (= :running (await-status store gid :running 3000)) "grandchild running")
      (is (= :running (p/get-workflow-status store pid)) "parent running")
      ;; cancel the parent
      (intemporal/cancel-workflow store pid)
      (is (= :cancelled (await-status store pid :cancelled 5000)) "parent cancelled")
      (is (= :cancelled (await-status store cid :cancelled 5000))
          "child :cascade-cancel — cancelled when the parent closed")
      ;; give the worker ample time to (incorrectly) cancel the grandchild
      (Thread/sleep 400)
      (is (= :running (p/get-workflow-status store gid))
          "grandchild :abandon — survives its parent being cancelled"))))

(defn- check-crash-recovery [store]
  (reset! act-calls 0)
  (let [pid (str "parent-" (random-uuid))
        cid (str pid "/child")]
    (seed-top-level! store #'parent-join-wf pid [5 cid])
    ;; Phase 1: run until the child suspends on its signal, then "crash" the worker.
    (let [e1   (intemporal/make-workflow-engine :store store :threads 4)
          stop (intemporal/start-worker e1 :poll-ms 25 :owner-id "w1")]
      (try
        (is (= :running (await-status store cid :running 3000)))
        (is (= :running (p/get-workflow-status store pid)))
        (finally (stop) (intemporal/shutdown-engine e1))))
    (let [calls-before @act-calls]
      (is (= :running (p/get-workflow-status store pid)) "durably suspended, not terminal")
      ;; Phase 2: fresh worker + the signal. Resume completes both.
      (let [e2   (intemporal/make-workflow-engine :store store :threads 4)
            stop (intemporal/start-worker e2 :poll-ms 25 :owner-id "w2")]
        (try
          (intemporal/send-signal store cid "go" 7)
          (is (= :completed (await-status store pid :completed 5000)))
          (is (= {:own 50 :child 12} (intemporal/get-workflow-result store pid)))
          (is (= calls-before @act-calls)
              "parent's activity was NOT re-executed after recovery (replayed)")
          (finally (stop) (intemporal/shutdown-engine e2)))))))

;; ── store fixtures ──────────────────────────────────────────────────────────────

(defn- in-memory [] (store/->InMemoryStore (atom {})))

(defn- jdbc []
  (jdbc-store/make-jdbc-store
    (or (System/getenv "DATABASE_URL")
        "jdbc:postgresql://localhost:5432/root?user=root&password=root")))

(defn- fdb []
  (let [fdb-api (cfdb/select-api-version 710)
        db      (.open fdb-api "docker/fdb.cluster")]
    (fdb-store/make-fdb-store db (str "child-" (random-uuid)))))

;; ── tests ───────────────────────────────────────────────────────────────────────

(deftest async-child-runs-in-parallel-and-can-suspend
  (testing "in-memory" (check-parallel-suspending-child (in-memory))))
(deftest ^:integration async-child-parallel-jdbc
  (testing "jdbc" (let [s (jdbc)] (try (check-parallel-suspending-child s) (finally (.close s))))))
(deftest ^:integration async-child-parallel-fdb
  (testing "fdb" (check-parallel-suspending-child (fdb))))

(deftest cascade-cancel-closes-running-children
  (testing "in-memory" (check-cascade-cancel (in-memory))))
(deftest ^:integration cascade-cancel-jdbc
  (testing "jdbc" (let [s (jdbc)] (try (check-cascade-cancel s) (finally (.close s))))))
(deftest ^:integration cascade-cancel-fdb
  (testing "fdb" (check-cascade-cancel (fdb))))

(deftest abandon-leaves-running-children
  (testing "in-memory" (check-abandon (in-memory))))
(deftest ^:integration abandon-jdbc
  (testing "jdbc" (let [s (jdbc)] (try (check-abandon s) (finally (.close s))))))
(deftest ^:integration abandon-fdb
  (testing "fdb" (check-abandon (fdb))))

(deftest require-join-fails-parent-with-unjoined-child
  (testing "in-memory" (check-require-join (in-memory))))
(deftest ^:integration require-join-jdbc
  (testing "jdbc" (let [s (jdbc)] (try (check-require-join s) (finally (.close s))))))
(deftest ^:integration require-join-fdb
  (testing "fdb" (check-require-join (fdb))))

(deftest mixed-close-policies-cascade-and-abandon
  (testing "in-memory" (check-mixed-close-policies (in-memory))))
(deftest ^:integration mixed-close-policies-jdbc
  (testing "jdbc" (let [s (jdbc)] (try (check-mixed-close-policies s) (finally (.close s))))))
(deftest ^:integration mixed-close-policies-fdb
  (testing "fdb" (check-mixed-close-policies (fdb))))

(deftest crash-recovery-replays-child-result
  (testing "in-memory" (check-crash-recovery (in-memory))))
(deftest ^:integration crash-recovery-jdbc
  (testing "jdbc" (let [s (jdbc)] (try (check-crash-recovery s) (finally (.close s))))))
(deftest ^:integration crash-recovery-fdb
  (testing "fdb" (check-crash-recovery (fdb))))
