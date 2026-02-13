(ns intemporal.tests.cancellation-test
  (:require [intemporal.core :as intemporal]
            [intemporal.tests.utils :refer [with-result]]
            [cljs.test :as t :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]]
            [matcher-combinators.matchers :as m]
            [promesa.core :as p])
  (:require-macros [intemporal.tests.utils :refer [with-result]]))

(defn slow-activity [x]
  (p/then (p/delay 100) (fn [_] (* x 2))))

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
    (let [wf-id  "cancel-test"
          engine (intemporal/make-workflow-engine :threads 2)]
      ;; Cancel after a short delay
      (js/setTimeout
        #(intemporal/cancel-workflow (:store engine) wf-id)
        200)
      (with-result [result (intemporal/start-workflow engine long-flow [1]
                                                      :workflow-id wf-id)]
        (is (match? {:status :failed
                     :workflow-id wf-id
                     :error (m/embeds {:message #"cancelled"})}
                    result))))))

(deftest test-cancellation-with-timer
  (testing "Workflow cancelled while waiting on timer"
    (let [wf-id  "cancel-timer-test"
          engine (intemporal/make-workflow-engine :threads 2)]
      ;; Cancel while sleeping
      (js/setTimeout
        #(intemporal/cancel-workflow (:store engine) wf-id)
        150)
      (with-result [result (intemporal/start-workflow engine cancellable-flow [1]
                                                      :workflow-id wf-id)]
        (is (match? {:status :failed
                     :workflow-id wf-id
                     :error (m/embeds {:message #"cancelled"})}
                    result))))))

(deftest test-cancel-before-start
  (testing "Workflow cancelled before it starts"
    (let [wf-id  "cancel-before-start"
          engine (intemporal/make-workflow-engine :threads 2)]
      ;; Cancel before starting
      (intemporal/cancel-workflow (:store engine) wf-id)
      (with-result [result (intemporal/start-workflow engine cancellable-flow [1]
                                                      :workflow-id wf-id)]
        (is (match? {:status :failed
                     :workflow-id wf-id
                     :error (m/embeds {:message #"cancelled"})}
                    result))))))

(deftest test-workflow-status-after-cancel
  (testing "Workflow status is cancelled after cancellation"
    (let [wf-id  "cancel-status-test"
          engine (intemporal/make-workflow-engine :threads 2)]
      (js/setTimeout
        #(intemporal/cancel-workflow (:store engine) wf-id)
        100)
      (with-result [result (intemporal/start-workflow engine long-flow [1]
                                                      :workflow-id wf-id)]
        (is (match? {:status :failed
                     :workflow-id wf-id
                     :error (m/embeds {:message #"cancelled"})}
                    result))))))
