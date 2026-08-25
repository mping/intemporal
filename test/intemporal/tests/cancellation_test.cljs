(ns intemporal.tests.cancellation-test
  (:require-macros
   [intemporal.internal.context :refer [bthen]]
   [intemporal.tests.utils :refer [with-result]])
  (:require
   [cljs.test :as t :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.tests.utils :refer [with-result]]
   [matcher-combinators.matchers :as m]
   [matcher-combinators.test :refer [match?]]
   [promesa.core :as p]))

(defn slow-activity [x]
  (bthen (p/delay 100) (fn [_] (* x 2))))

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
          engine (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)) :threads 2)]
      ;; Cancel after a short delay
      (js/setTimeout
        #(intemporal/cancel-workflow (:store engine) wf-id)
        200)
      (with-result [result (intemporal/start-workflow engine long-flow [1]
                                                      :workflow-id wf-id)]
        (is (match? {:status :cancelled
                     :workflow-id wf-id
                     :error (m/embeds {:message #"cancelled"})}
                    result))))))

(deftest test-cancellation-with-timer
  (testing "Workflow cancelled while waiting on timer"
    (let [wf-id  "cancel-timer-test"
          engine (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)) :threads 2)]
      ;; Cancel while sleeping
      (js/setTimeout
        #(intemporal/cancel-workflow (:store engine) wf-id)
        150)
      (with-result [result (intemporal/start-workflow engine cancellable-flow [1]
                                                      :workflow-id wf-id)]
        (is (match? {:status :cancelled
                     :workflow-id wf-id
                     :error (m/embeds {:message #"cancelled"})}
                    result))))))

(deftest test-cancel-immediately-after-submission
  (testing "A cancellation request made immediately after submission wins before the first drive"
    (let [wf-id  "cancel-before-start"
          engine (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)) :threads 2)]
      ;; An unknown ID cannot be cancelled: creation is the durable boundary.
      ;; Submit, cancel synchronously, then let the engine take its first claim.
      (intemporal/submit-workflow engine cancellable-flow [1] :workflow-id wf-id)
      (intemporal/cancel-workflow (:store engine) wf-id)
      (with-result [result (intemporal/await-workflow engine wf-id)]
        (is (match? {:status :cancelled
                     :workflow-id wf-id
                     :error (m/embeds {:message #"cancelled"})}
                    result))))))

(deftest test-workflow-status-after-cancel
  (testing "Workflow status is cancelled after cancellation"
    (let [wf-id  "cancel-status-test"
          engine (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)) :threads 2)]
      (js/setTimeout
        #(intemporal/cancel-workflow (:store engine) wf-id)
        100)
      (with-result [result (intemporal/start-workflow engine long-flow [1]
                                                      :workflow-id wf-id)]
        (is (match? {:status :cancelled
                     :workflow-id wf-id
                     :error (m/embeds {:message #"cancelled"})}
                    result))))))
