(ns intemporal.tests.join-any-child-test
  "Regression (A2): join-any over INDEPENDENT child workflow handles must WAIT
   for a child to finish instead of hot-spinning the drive loop through the
   replay budget (which previously failed the parent with 'Replay budget
   exceeded'). Driven by the recovery worker; runs against InMemory (always)
   plus JDBC and FDB (^:integration)."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.tests.child-workflow-util :as u]))

(intemporal/defn-workflow ja-child-wf
  "A child that suspends on a signal, then returns x + payload."
  [x]
  (+ x (intemporal/wait-for-signal "go")))

(intemporal/defn-workflow ja-parent-wf
  "Schedules two independent children and returns whichever finishes first."
  [c1-id c2-id]
  (let [h1 (intemporal/run-child-workflow-async #'ja-child-wf [1] :child-id c1-id)
        h2 (intemporal/run-child-workflow-async #'ja-child-wf [2] :child-id c2-id)
        {:keys [index result]} (intemporal/join-any [h1 h2])]
    {:winner index :result result}))

(defn- check-join-any-waits-for-child [store]
  (u/with-engine store
    (fn [engine]
      (let [pid (str "ja-" (random-uuid))
            c1  (str pid "/c1")
            c2  (str pid "/c2")]
        (intemporal/submit-workflow engine #'ja-parent-wf [c1 c2] :workflow-id pid)
        (is (= :running (u/await-status store c1 :running 3000)) "child 1 running")
        (is (= :running (u/await-status store c2 :running 3000)) "child 2 running")
        ;; The parent must be WAITING (not spun into :failed by the replay budget).
        (is (= :running (p/get-workflow-status store pid))
            "parent waits on join-any instead of burning the replay budget")
        ;; Finish only the SECOND child; join-any resolves with it.
        (intemporal/send-signal store c2 "go" 7)
        (let [r (intemporal/await-workflow engine pid :timeout-ms 5000)]
          (is (= :completed (:status r)))
          (is (= {:winner 1 :result 9} (:result r)) "child 2 = 2 + 7"))
        ;; Default :parent-close-policy is :terminate — the losing child stops
        ;; when the parent closes.
        (is (= :terminated (:status (intemporal/await-workflow engine c1 :timeout-ms 5000)))
            "losing child terminated by parent close policy")))))

(deftest join-any-waits-for-independent-child
  (testing "in-memory" (check-join-any-waits-for-child (u/in-memory))))
(deftest ^:integration join-any-child-jdbc
  (testing "jdbc" (let [s (u/jdbc)] (try (check-join-any-waits-for-child s) (finally (.close s))))))
(deftest ^:integration join-any-child-fdb
  (testing "fdb" (check-join-any-waits-for-child (u/fdb))))
