(ns intemporal.tests.timer-test
  (:require [intemporal.core :as intemporal]
            [clojure.test :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]]))

(defn activity-fn [arg]
  [:processed arg])

;; Simple timer workflow
(defn timed-flow [id]
  (let [act (intemporal/stub #'activity-fn)]
    (intemporal/sleep 100)  ; Short sleep for tests
    {:result (act id)}))

;; Timer with multiple sleeps
(defn multi-sleep-flow [id]
  (let [act (intemporal/stub #'activity-fn)]
    (intemporal/sleep 50)
    (let [r1 (act 1)]
      (intemporal/sleep 50)
      (let [r2 (act 2)]
        {:results [r1 r2] :id id}))))

(deftest test-simple-timer
  (testing "Workflow with timer completes after sleep"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (let [result (intemporal/start-workflow engine
                                              timed-flow [456])]
        (is (match? {:status :completed
                     :workflow-id string?
                     :result {:result [:processed 456]}}
                    result))))))

(deftest test-multiple-timers
  (testing "Workflow with multiple sleep calls"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (let [result (intemporal/start-workflow engine
                                              multi-sleep-flow [789])]
        (is (match? {:status :completed
                     :workflow-id string?
                     :result {:results [[:processed 1] [:processed 2]]
                              :id 789}}
                    result))))))

(deftest test-timer-replay
  (testing "Timer workflow is deterministic on replay"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (let [wf-id "timer-replay-test"
            result1 (intemporal/start-workflow engine
                                               timed-flow [100]
                                               :workflow-id wf-id)
            ;; Resume should replay deterministically
            result2 (intemporal/resume-workflow engine wf-id
                                                timed-flow [100])]
        (is (match? {:status :completed} result1))
        (is (match? {:status :completed} result2))
        (is (= (:result result1) (:result result2)))))))
