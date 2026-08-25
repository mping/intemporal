(ns intemporal.tests.child-workflow-async-test
  "Tier 2 independent child workflows — async mechanism (not policy-specific).

   Covers: parallel/suspending children + join + replay-safety, crash recovery, and
   one tree exercising ALL THREE :parent-close-policy values + recursion. The
   single-policy behaviours live in the dedicated per-policy test namespaces
   (child-workflow-cascade-cancel-test / -abandon-test / -terminate-test).

   Everything is driven by the recovery worker (see intemporal.tests.child-workflow-util).
   Each scenario runs against InMemory (always) plus JDBC and FDB (^:integration)."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.tests.child-workflow-util :as u]))

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
  (+ x (intemporal/wait-for-signal "go")))

(intemporal/defn-workflow parent-join-wf
  "Schedules an independent child, runs its own activity in the meantime, then joins."
  [x child-id]
  (let [a   (intemporal/stub #'ca-act)
        h   (intemporal/run-child-workflow-async #'signal-child-wf [x] :child-id child-id)
        own (a x)]
    {:own own :child (intemporal/join h)}))

;; One tree exercising ALL THREE policies + recursion:
;;   cancel-child (:cascade-cancel) -> :cancelled  (+ its :cascade-cancel grandchild)
;;   term-child   (:terminate)      -> :terminated
;;   keep-child   (:abandon)        -> :running
(intemporal/defn-workflow pcp-leaf-wf []
  (intemporal/wait-for-signal "go")
  :leaf-done)

(intemporal/defn-workflow pcp-cancel-child-wf [gc-id]
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

;; ── checks ──────────────────────────────────────────────────────────────────────

(defn- check-parallel-suspending-child [store]
  (reset! act-calls 0)
  (u/with-engine store
    (fn [engine]
      (let [pid (str "parent-" (random-uuid))
            cid (str pid "/child")]
        (intemporal/submit-workflow engine #'parent-join-wf [5 cid] :workflow-id pid)
        (is (= :running (u/await-status store cid :running 3000))
            "child exists as an independent, running workflow")
        (is (= :running (p/get-workflow-status store pid))
            "parent has not completed — it is waiting on the child")
        (intemporal/send-signal store cid "go" 7)
        (let [r (intemporal/await-workflow engine pid :timeout-ms 5000)]
          (is (= :completed (:status r)))
          (is (= {:own 50 :child 12} (:result r))
              "own activity = 5*10, child = 5+7"))
        (is (= :completed (p/get-workflow-status store cid)))
        (is (= 1 @act-calls)
            "parent's activity ran exactly once despite multiple resumes (replay)")))))

(defn- check-mixed-close-policies [store]
  ;; One tree, all three policies + recursion. Cancel the parent; each child
  ;; diverges by its policy, and the cascade-cancelled child's own grandchild is
  ;; cancelled too (recursion).
  (u/with-engine store
    (fn [engine]
      (let [pid       (str "pcp-" (random-uuid))
            cancel-id (str pid "/cancel")
            term-id   (str pid "/term")
            keep-id   (str pid "/keep")
            gc-id     (str pid "/grandchild")]
        (intemporal/submit-workflow engine #'pcp-parent-wf [cancel-id term-id keep-id gc-id]
                                    :workflow-id pid)
        (is (= :running (u/await-status store cancel-id :running 3000)) "cancel-child running")
        (is (= :running (u/await-status store term-id :running 3000)) "term-child running")
        (is (= :running (u/await-status store keep-id :running 3000)) "keep-child running")
        (is (= :running (u/await-status store gc-id :running 3000)) "grandchild running")
        (is (= :running (p/get-workflow-status store pid)) "parent running")
        (intemporal/cancel-workflow store pid)
        (is (= :cancelled (:status (intemporal/await-workflow engine pid :timeout-ms 5000)))
            "parent cancelled")
        (is (= :cancelled (:status (intemporal/await-workflow engine cancel-id :timeout-ms 5000)))
            ":cascade-cancel child ends :cancelled")
        (is (= :terminated (:status (intemporal/await-workflow engine term-id :timeout-ms 5000)))
            ":terminate child ends :terminated")
        (is (= :cancelled (:status (intemporal/await-workflow engine gc-id :timeout-ms 5000)))
            "recursion: the cascade-cancel child's grandchild is cancelled too")
        (Thread/sleep 400)
        (is (= :running (p/get-workflow-status store keep-id))
            ":abandon child keeps running")))))

(defn- check-crash-recovery [store]
  (reset! act-calls 0)
  (let [pid (str "parent-" (random-uuid))
        cid (str pid "/child")]
    ;; Phase 1: submit + run until the child suspends on its signal, then "crash".
    (let [e1 (intemporal/start-engine :store store :threads 4
                                              :poll-ms 25 :owner-id "w1")]
      (try
        (intemporal/submit-workflow e1 #'parent-join-wf [5 cid] :workflow-id pid)
        (is (= :running (u/await-status store cid :running 3000)))
        (is (= :running (p/get-workflow-status store pid)))
        (finally (intemporal/shutdown-engine e1))))
    (let [calls-before @act-calls]
      (is (= :running (p/get-workflow-status store pid)) "durably suspended, not terminal")
      ;; Phase 2: fresh worker + the signal. Resume completes both.
      (let [e2 (intemporal/start-engine :store store :threads 4
                                                :poll-ms 25 :owner-id "w2")]
        (try
          (intemporal/send-signal store cid "go" 7)
          (let [r (intemporal/await-workflow e2 pid :timeout-ms 5000)]
            (is (= :completed (:status r)))
            (is (= {:own 50 :child 12} (:result r))))
          (is (= calls-before @act-calls)
              "parent's activity was NOT re-executed after recovery (replayed)")
          (finally (intemporal/shutdown-engine e2)))))))

;; ── tests ───────────────────────────────────────────────────────────────────────

(deftest async-child-runs-in-parallel-and-can-suspend
  (testing "in-memory" (check-parallel-suspending-child (u/in-memory))))
(deftest ^:integration async-child-parallel-jdbc
  (testing "jdbc" (let [s (u/jdbc)] (try (check-parallel-suspending-child s) (finally (.close s))))))
(deftest ^:integration async-child-parallel-fdb
  (testing "fdb" (check-parallel-suspending-child (u/fdb))))

(deftest mixed-close-policies-all-three
  (testing "in-memory" (check-mixed-close-policies (u/in-memory))))
(deftest ^:integration mixed-close-policies-jdbc
  (testing "jdbc" (let [s (u/jdbc)] (try (check-mixed-close-policies s) (finally (.close s))))))
(deftest ^:integration mixed-close-policies-fdb
  (testing "fdb" (check-mixed-close-policies (u/fdb))))

(deftest crash-recovery-replays-child-result
  (testing "in-memory" (check-crash-recovery (u/in-memory))))
(deftest ^:integration crash-recovery-jdbc
  (testing "jdbc" (let [s (u/jdbc)] (try (check-crash-recovery s) (finally (.close s))))))
(deftest ^:integration crash-recovery-fdb
  (testing "fdb" (check-crash-recovery (u/fdb))))
