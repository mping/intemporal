(ns intemporal.tests.signal-test
  (:require [intemporal.core :as intemporal]
            [intemporal.tests.utils :refer [with-result]]
            [cljs.test :as t :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]]
            [promesa.core :as p])
  (:require-macros [intemporal.tests.utils :refer [with-result]]
                   [intemporal.internal.context :refer [blet]]))

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
    (let [wf-id  "signal-test"
          engine (intemporal/make-workflow-engine :threads 2)]
      ;; Send signal after a short delay
      (js/setTimeout
        #(intemporal/send-signal (:store engine) wf-id "approval" {:user "alice"})
        100)
      (with-result [result (intemporal/start-workflow engine signal-flow [123]
                                                      :workflow-id wf-id)]
        (is (match? {:status :completed
                     :workflow-id wf-id
                     :result {:approved {:user "alice"}
                              :result [:processed 123]}}
                    result))))))

(deftest test-signal-timeout-received
  (testing "Signal received before timeout"
    (let [wf-id  "signal-timeout-test"
          engine (intemporal/make-workflow-engine :threads 2)]
      (js/setTimeout
        #(intemporal/send-signal (:store engine) wf-id "approval" {:user "bob"})
        100)
      (with-result [result (intemporal/start-workflow engine signal-timeout-flow [456 5000]
                                                      :workflow-id wf-id)]
        (is (match? {:status :completed
                     :result {:approved {:user "bob"}
                              :result [:processed 456]}}
                    result))))))

(deftest test-signal-timeout-expired
  (testing "Signal times out when not received"
    (let [engine (intemporal/make-workflow-engine :threads 2)]
      (with-result [result (intemporal/start-workflow engine signal-timeout-flow [789 100])]
        (is (match? {:status :completed
                     :result {:timed-out true
                              :result [:processed -789]}}
                    result))))))

(deftest test-multiple-signals
  (testing "Multiple signals can be sent to same workflow"
    (let [wf-id  "multi-signal-test"
          engine (intemporal/make-workflow-engine :threads 2)]
      ;; Send signals before workflow starts
      (intemporal/send-signal (:store engine) wf-id "approval" {:user "alice"})
      (intemporal/send-signal (:store engine) wf-id "approval" {:user "bob"})
      ;; First workflow run consumes first signal, then second
      (with-result [[result1 result2]
                    (blet [r1 (intemporal/start-workflow engine signal-flow [100]
                                                          :workflow-id wf-id)
                            r2 (intemporal/resume-workflow engine wf-id
                                                           signal-flow [100])]
                      [r1 r2])]
        (is (match? {:result {:approved {:user "alice"}}} result1))
        (is (match? {:result {:approved {:user "alice"}}} result2))))))
