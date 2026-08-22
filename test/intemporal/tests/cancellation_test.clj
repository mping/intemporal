(ns intemporal.tests.cancellation-test
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.tests.utils :refer [wait-until]]
   [matcher-combinators.matchers :as m]
   [matcher-combinators.test :refer [match?]]))

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
        ;; Wait until the workflow is actually running before cancelling
        (wait-until #(= :running (p/get-workflow-status (:store engine) wf-id)))
        (intemporal/cancel-workflow (:store engine) wf-id)

        ;; Workflow should fail with cancellation error
        (let [result @result-future]
          (is (match? {:status :cancelled
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
        ;; Cancel while sleeping — wait until the workflow has started
        (wait-until #(= :running (p/get-workflow-status (:store engine) wf-id)))
        (intemporal/cancel-workflow (:store engine) wf-id)

        (let [result @result-future]
          (is (match? {:status :cancelled
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
          (is (match? {:status :cancelled
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
        (wait-until #(= :running (p/get-workflow-status (:store engine) wf-id)))
        (intemporal/cancel-workflow (:store engine) wf-id)

        ;; Check result indicates failure with cancellation
        (let [result @result-future]
          (is (match? {:status :cancelled
                       :workflow-id wf-id
                       :error (m/embeds {:message #"cancelled"})}
                      result)))))))

(deftest test-cancel-completed-workflow-is-noop
  (testing "cancel-workflow on an already-completed workflow is a no-op"
    (intemporal/with-workflow-engine [engine {}]
      (let [wf-id "cancel-completed-test"]
        (intemporal/start-workflow engine (fn [] :done) [] :workflow-id wf-id)
        (is (= :completed (p/get-workflow-status (:store engine) wf-id)))
        (intemporal/cancel-workflow (:store engine) wf-id)
        (is (= :completed (p/get-workflow-status (:store engine) wf-id)))))))

(deftest test-cancel-idempotent
  (testing "cancel-workflow called twice does not throw"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (let [wf-id "cancel-twice-test"
            result-future (future
                            (intemporal/start-workflow engine long-flow [1]
                                                       :workflow-id wf-id))]
        (wait-until #(= :running (p/get-workflow-status (:store engine) wf-id)))
        (intemporal/cancel-workflow (:store engine) wf-id)
        (intemporal/cancel-workflow (:store engine) wf-id)
        (is (match? {:status :cancelled} @result-future))))))
