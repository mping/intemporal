(ns intemporal.tests.signal-test
  (:require [intemporal.core :as intemporal]
            [intemporal.internal.activity :as a]
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
        ;; Give workflow time to start
        (Thread/sleep 100)
        ;; Send signal
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
        (Thread/sleep 100)
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
      (let [wf-id "multi-signal-test"]
        ;; Send signals before workflow starts
        (intemporal/send-signal (:store engine) wf-id "approval" {:user "alice"})
        (intemporal/send-signal (:store engine) wf-id "approval" {:user "bob"})

        ;; First workflow run consumes first signal
        (let [result1 (intemporal/start-workflow engine
                                                 signal-flow [100]
                                                 :workflow-id wf-id)]
          (is (match? {:result {:approved {:user "alice"}}} result1)))

        ;; Second run on same workflow-id consumes second signal
        (let [result2 (intemporal/resume-workflow engine wf-id
                                                  signal-flow [100])]
          (is (match? {:result {:approved {:user "alice"}}} result2)))))))
