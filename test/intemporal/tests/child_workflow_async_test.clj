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

(intemporal/defn-workflow parent-terminate-wf
  "Schedules a :terminate child (suspended forever) then completes — the child is
   forcefully terminated when the parent closes."
  [child-id]
  (intemporal/run-child-workflow-detached #'signal-child-wf [0]
                                          :child-id child-id
                                          :parent-close-policy :terminate)
  :parent-done)

;; ── one tree exercising ALL THREE policies + recursion ──────────────────────────
;; Cancel the parent and each child diverges by its policy:
;;   cancel-child (:cascade-cancel) -> :cancelled  (+ its :cascade-cancel grandchild)
;;   term-child   (:terminate)      -> :terminated
;;   keep-child   (:abandon)        -> :running
;; Every level waits on a signal so the whole tree stays alive until we act.

(intemporal/defn-workflow pcp-leaf-wf []
  (intemporal/wait-for-signal "go")
  :leaf-done)

(intemporal/defn-workflow pcp-cancel-child-wf [gc-id]
  ;; a :cascade-cancel grandchild — proves recursion through a cancelled child
  (intemporal/run-child-workflow-detached #'pcp-leaf-wf []
                                          :child-id gc-id
                                          :parent-close-policy :cascade-cancel)
  (intemporal/wait-for-signal "go")
  :cancel-child-done)

(intemporal/defn-workflow pcp-parent-wf [cancel-id term-id keep-id gc-id]
  (intemporal/run-child-workflow-detached #'pcp-cancel-child-wf [gc-id]
                                          :child-id cancel-id :parent-close-policy :cascade-cancel)
  (intemporal/run-child-workflow-detached #'pcp-leaf-wf []
                                          :child-id term-id :parent-close-policy :terminate)
  (intemporal/run-child-workflow-detached #'pcp-leaf-wf []
                                          :child-id keep-id :parent-close-policy :abandon)
  (intemporal/wait-for-signal "go")
  :parent-done)

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

(defn- check-terminate [store]
  (with-worker [engine store]
    (let [pid (str "parent-" (random-uuid))
          cid (str pid "/child")]
      (seed-top-level! store #'parent-terminate-wf pid [cid])
      (is (= :completed (await-status store pid :completed 5000))
          "parent completes without joining the child")
      (is (= :terminated (await-status store cid :terminated 5000))
          "the orphaned child was forcefully terminated (:terminated, not :cancelled)"))))

(defn- check-mixed-close-policies [store]
  ;; One tree, all three policies + recursion. Cancel the parent; each child
  ;; diverges by its policy, and the cascade-cancelled child's own grandchild is
  ;; cancelled too (recursion).
  (with-worker [engine store]
    (let [pid       (str "pcp-" (random-uuid))
          cancel-id (str pid "/cancel")
          term-id   (str pid "/term")
          keep-id   (str pid "/keep")
          gc-id     (str pid "/grandchild")]
      (seed-top-level! store #'pcp-parent-wf pid [cancel-id term-id keep-id gc-id])
      ;; whole tree comes up
      (is (= :running (await-status store cancel-id :running 3000)) "cancel-child running")
      (is (= :running (await-status store term-id :running 3000)) "term-child running")
      (is (= :running (await-status store keep-id :running 3000)) "keep-child running")
      (is (= :running (await-status store gc-id :running 3000)) "grandchild running")
      (is (= :running (p/get-workflow-status store pid)) "parent running")
      ;; close the parent
      (intemporal/cancel-workflow store pid)
      (is (= :cancelled (await-status store pid :cancelled 5000)) "parent cancelled")
      ;; each policy diverges
      (is (= :cancelled (await-status store cancel-id :cancelled 5000))
          ":cascade-cancel child ends :cancelled")
      (is (= :terminated (await-status store term-id :terminated 5000))
          ":terminate child ends :terminated")
      (is (= :cancelled (await-status store gc-id :cancelled 5000))
          "recursion: the cascade-cancel child's grandchild is cancelled too")
      ;; abandon survives — give the worker ample time to (incorrectly) close it
      (Thread/sleep 400)
      (is (= :running (p/get-workflow-status store keep-id))
          ":abandon child keeps running"))))

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

(deftest terminate-forcefully-closes-running-children
  (testing "in-memory" (check-terminate (in-memory))))
(deftest ^:integration terminate-jdbc
  (testing "jdbc" (let [s (jdbc)] (try (check-terminate s) (finally (.close s))))))
(deftest ^:integration terminate-fdb
  (testing "fdb" (check-terminate (fdb))))

(deftest mixed-close-policies-all-three
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
