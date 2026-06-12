(ns intemporal.tests.signal-test
  (:require [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.tests.utils :refer [wait-until]]
            [clojure.test :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]]))

(defn activity-fn [arg]
  [:processed arg])

;; Workflow waiting for signal
(defn signal-flow [id]
  (let [approval (intemporal/wait-for-signal "approval")
        act (intemporal/stub #'activity-fn)]
    {:approved approval
     :result (act id)}))

;; Workflow with signal timeout
(defn signal-timeout-flow [id timeout-ms]
  (let [result (intemporal/wait-for-signal-with-timeout "approval" timeout-ms)
        act (intemporal/stub #'activity-fn)]
    (if (:received result)
      {:approved (:payload result)
       :result (act id)}
      {:timed-out true
       :result (act (* id -1))})))

(deftest test-signal-blocking
  (testing "Workflow blocks until signal is sent"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (let [wf-id "signal-test"
            result-future (future
                            (intemporal/start-workflow engine
                                                       signal-flow [123]
                                                       :workflow-id wf-id))]
        ;; Wait until the workflow is suspended on the signal before sending it
        (wait-until #(= :running (p/get-workflow-status (:store engine) wf-id)))
        (intemporal/send-signal (:store engine) wf-id "approval" {:user "alice"})
        ;; Wait for completion
        (let [result @result-future]
          (is (match? {:status :completed
                       :workflow-id wf-id
                       :result {:approved {:user "alice"}
                                :result [:processed 123]}}
                      result)))))))

(deftest test-signal-timeout-received
  (testing "Signal received before timeout"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (let [wf-id "signal-timeout-test"
            result-future (future
                            (intemporal/start-workflow engine
                                                       signal-timeout-flow [456 5000]
                                                       :workflow-id wf-id))]
        (wait-until #(= :running (p/get-workflow-status (:store engine) wf-id)))
        (intemporal/send-signal (:store engine) wf-id "approval" {:user "bob"})
        (let [result @result-future]
          (is (match? {:status :completed
                       :result {:approved {:user "bob"}
                                :result [:processed 456]}}
                      result)))))))

(deftest test-signal-timeout-expired
  (testing "Signal times out when not received"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (let [result (intemporal/start-workflow engine
                                              signal-timeout-flow [789 100])]
        (is (match? {:status :completed
                     :result {:timed-out true
                              :result [:processed -789]}}
                    result))))))

(deftest test-multiple-signals
  (testing "Multiple signals can be sent to same workflow"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      ;; Two independent workflow runs, each waiting for a signal
      (let [wf-id-1 "multi-signal-test-1"
            wf-id-2 "multi-signal-test-2"
            fut1 (future (intemporal/start-workflow engine signal-flow [100]
                                                    :workflow-id wf-id-1))
            fut2 (future (intemporal/start-workflow engine signal-flow [200]
                                                    :workflow-id wf-id-2))]
        (wait-until #(and (= :running (p/get-workflow-status (:store engine) wf-id-1))
                          (= :running (p/get-workflow-status (:store engine) wf-id-2))))
        (intemporal/send-signal (:store engine) wf-id-1 "approval" {:user "alice"})
        (intemporal/send-signal (:store engine) wf-id-2 "approval" {:user "bob"})
        (is (match? {:result {:approved {:user "alice"}}} @fut1))
        (is (match? {:result {:approved {:user "bob"}}} @fut2))))))

(deftest test-send-signal-not-found
  (testing "send-signal throws when workflow does not exist"
    (intemporal/with-workflow-engine [engine {}]
      (is (thrown-with-msg? clojure.lang.ExceptionInfo #"not active"
                            (intemporal/send-signal (:store engine) "no-such-wf" "approval" {}))))))

(deftest test-send-signal-to-completed-workflow
  (testing "send-signal throws when workflow is already completed"
    (intemporal/with-workflow-engine [engine {}]
      (let [wf-id "completed-signal-test"]
        (intemporal/start-workflow engine (fn [] :done) [] :workflow-id wf-id)
        (is (thrown-with-msg? clojure.lang.ExceptionInfo #"not active"
                              (intemporal/send-signal (:store engine) wf-id "approval" {})))))))
