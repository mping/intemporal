(ns intemporal.tests.cancellation-test
  (:require [intemporal.core :as intemporal]
            [clojure.test :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]]
            [matcher-combinators.matchers :as m]))

(defn slow-activity [x]
  (Thread/sleep 100)
  (* x 2))

;; Long-running workflow
(defn long-flow [id]
  (let [slow (intemporal/stub #'slow-activity)]
    (loop [i 0
           results []]
      (if (< i 10)
        (recur (inc i) (conj results (slow i)))
        {:results results :done true}))))

;; Workflow that checks cancellation
(defn cancellable-flow [id]
  (let [slow (intemporal/stub #'slow-activity)]
    (slow 1)
    (intemporal/sleep 100)
    (slow 2)
    {:done true}))

(deftest test-workflow-cancellation
  (testing "Workflow can be cancelled mid-execution"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (let [wf-id "cancel-test"
            result-future (future
                            (intemporal/start-workflow engine
                                                       long-flow [1]
                                                       :workflow-id wf-id))]
        ;; Wait a bit then cancel
        (Thread/sleep 200)
        (intemporal/cancel-workflow (:store engine) wf-id)

        ;; Workflow should fail with cancellation error
        (let [result @result-future]
          (is (match? {:status :failed
                       :workflow-id wf-id
                       :error (m/embeds {:message #"cancelled"})}
                      result)))))))

(deftest test-cancellation-with-timer
  (testing "Workflow cancelled while waiting on timer"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (let [wf-id "cancel-timer-test"
            result-future (future
                            (intemporal/start-workflow engine
                                                       cancellable-flow [1]
                                                       :workflow-id wf-id))]
        ;; Cancel while sleeping
        (Thread/sleep 150)
        (intemporal/cancel-workflow (:store engine) wf-id)

        (let [result @result-future]
          (is (match? {:status :failed
                       :workflow-id wf-id
                       :error (m/embeds {:message #"cancelled"})}
                      result)))))))

(deftest test-cancel-before-start
  (testing "Workflow cancelled before it starts"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (let [wf-id "cancel-before-start"]
        ;; Cancel before starting
        (intemporal/cancel-workflow (:store engine) wf-id)

        ;; Try to start cancelled workflow - should return failed status
        (let [result (intemporal/start-workflow engine
                                                cancellable-flow [1]
                                                :workflow-id wf-id)]
          (is (match? {:status :failed
                       :workflow-id wf-id
                       :error (m/embeds {:message #"cancelled"})}
                      result)))))))

(deftest test-workflow-status-after-cancel
  (testing "Workflow status is cancelled after cancellation"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (let [wf-id "cancel-status-test"
            result-future (future
                            (intemporal/start-workflow engine
                                                       long-flow [1]
                                                       :workflow-id wf-id))]
        (Thread/sleep 100)
        (intemporal/cancel-workflow (:store engine) wf-id)

        ;; Check result indicates failure with cancellation
        (let [result @result-future]
          (is (match? {:status :failed
                       :workflow-id wf-id
                       :error (m/embeds {:message #"cancelled"})}
                      result)))))))
