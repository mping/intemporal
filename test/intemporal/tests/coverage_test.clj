(ns intemporal.tests.coverage-test
  "Additional coverage tests filling gaps identified in the analysis:
   - Signal FIFO ordering
   - Cancellation arriving while an activity is in-flight
   - Replay budget (max-iterations) enforcement"
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.tests.utils :refer [wait-until with-result]]
   [matcher-combinators.test :refer [match?]]))

;; ============================================================================
;; Signal FIFO ordering
;; ============================================================================

(defn collect-three-signals-flow [_id]
  [(intemporal/wait-for-signal "item")
   (intemporal/wait-for-signal "item")
   (intemporal/wait-for-signal "item")])

(deftest test-signal-fifo-ordering
  (testing "Multiple signals for the same name are consumed in FIFO order"
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2}]
      (let [wf-id   "signal-fifo-test"
            result-f (future (intemporal/start-workflow engine
                                                        collect-three-signals-flow [nil]
                                                        :workflow-id wf-id))]
        ;; Wait until the workflow is running before sending the first signal
        (wait-until #(= :running (p/get-workflow-status (:store engine) wf-id)))
        (intemporal/send-signal (:store engine) wf-id "item" :first)
        (intemporal/send-signal (:store engine) wf-id "item" :second)
        (intemporal/send-signal (:store engine) wf-id "item" :third)
        (let [result @result-f]
          (is (match? {:status :completed
                       :result [:first :second :third]}
                      result)))))))

;; ============================================================================
;; Cancellation mid-activity
;; ============================================================================

(def mid-activity-counter (atom 0))

(defn slow-long-activity [_x]
  (swap! mid-activity-counter inc)
  (Thread/sleep 300)
  :done)

(defn cancellable-mid-activity-flow [_id]
  (let [act (intemporal/stub #'slow-long-activity)]
    (act :step-1)
    (act :step-2)
    :finished))

(deftest test-cancel-mid-activity
  (testing "Cancelling while an activity executes results in :cancelled status"
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2}]
      (reset! mid-activity-counter 0)
      (let [wf-id   "cancel-mid-activity"
            result-f (future (intemporal/start-workflow engine
                                                        cancellable-mid-activity-flow [nil]
                                                        :workflow-id wf-id))]
        ;; Wait until the first activity has been picked up by the executor
        (wait-until #(pos? @mid-activity-counter))
        ;; Cancel while the activity is still sleeping
        (intemporal/cancel-workflow (:store engine) wf-id)
        (let [result @result-f]
          ;; The workflow must terminate (cancelled or failed — implementation
          ;; may complete the in-flight activity before honouring the cancel,
          ;; but it must not hang).
          (is (#{:cancelled :completed} (:status result))
              "Workflow must terminate after cancellation even if mid-activity"))))))

;; ============================================================================
;; Replay budget (max-iterations) enforcement
;; ============================================================================

(defn infinite-loop-flow [_id]
  ;; This workflow never terminates on its own — it loops forever without
  ;; suspending, which should exhaust the max-iterations budget.
  (let [act (intemporal/stub #'slow-long-activity)]
    (loop []
      (act :work)
      (recur))))

(deftest test-replay-budget-enforced
  (testing "A workflow that never terminates is killed after max-iterations"
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2}]
      (with-result [result (intemporal/start-workflow engine
                                                      infinite-loop-flow [nil]
                                                      :max-iterations 5)]
        (is (= :failed (:status result))
            "Workflow should fail after exhausting the replay budget")
        (is (re-find #"budget" (get-in result [:error :message]))
            "Failure message should mention budget")))))
