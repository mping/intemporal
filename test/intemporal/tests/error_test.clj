(ns intemporal.tests.error-test
  (:require [intemporal.core :as intemporal]
            [intemporal.internal.activity :as a]
            [clojure.test :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]]
            [matcher-combinators.matchers :as m]))

(def attempt-counter (atom 0))

(defn flaky-activity [x]
  (let [attempt (swap! attempt-counter inc)]
    (if (< attempt 3)
      (throw (ex-info "Flaky failure" {:x x :attempt attempt}))
      (* x 3))))

(defn always-fails-activity [x]
  (throw (ex-info "Always fails" {:x x})))

;; Workflow with retry
(defn retry-flow [id]
  (let [flaky (intemporal/stub #'flaky-activity)]
    {:result (flaky id)}))

;; Workflow that catches errors
(defn error-handling-flow [id]
  (let [failing (intemporal/stub #'always-fails-activity)]
    (try
      {:result (failing id) :error false}
      (catch Exception e
        {:result nil :error true :message (.getMessage e)}))))

;; Workflow with activity that fails after retry
(defn failing-retry-flow [id]
  (let [failing (intemporal/stub #'always-fails-activity)]
    {:result (failing id)}))

(deftest test-activity-retry-succeeds
  (testing "Activity succeeds after retries"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (reset! attempt-counter 0)
      (a/register-activity! (:registry engine) #'flaky-activity
                            :retry-policy (a/make-retry-policy :max-attempts 5
                                                                :initial-backoff-ms 10))
      (let [result (intemporal/start-workflow engine
                                              retry-flow [42])]
        (is (match? {:status :completed
                     :workflow-id string?
                     :result {:result 126}}
                    result))
        ;; Should have attempted 3 times
        (is (= 3 @attempt-counter))))))

(deftest test-activity-retry-exhausted
  (testing "Activity fails after exhausting retries"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (a/register-activity! (:registry engine) #'always-fails-activity
                            :retry-policy (a/make-retry-policy :max-attempts 3
                                                                :initial-backoff-ms 10))
      (let [result (intemporal/start-workflow engine
                                              failing-retry-flow [99])]
        (is (match? {:status :failed
                     :workflow-id string?
                     :error (m/embeds {:message "Activity failed"
                                       :data (m/embeds {:activity-name string?})})}
                    result))))))

(deftest test-workflow-error-handling
  (testing "Workflow can catch and handle activity errors"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (a/register-activity! (:registry engine) #'always-fails-activity)
      (let [result (intemporal/start-workflow engine
                                              error-handling-flow [123])]
        (is (match? {:status :completed
                     :workflow-id string?
                     :result {:result nil
                              :error true
                              :message string?}}
                    result))))))

(deftest test-no-retry-policy
  (testing "Activity without retry policy fails immediately"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      ;; Register without retry policy
      (a/register-activity! (:registry engine) #'always-fails-activity)
      (let [result (intemporal/start-workflow engine
                                              failing-retry-flow [456])]
        (is (match? {:status :failed
                     :workflow-id string?
                     :error (m/embeds {:message "Activity failed"
                                       :data (m/embeds {:activity-name string?})})}
                    result))))))

(deftest test-retry-with-exponential-backoff
  (testing "Retry policy applies exponential backoff"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (reset! attempt-counter 0)
      (a/register-activity! (:registry engine) #'flaky-activity
                            :retry-policy (a/make-retry-policy
                                           :max-attempts 5
                                           :initial-backoff-ms 10
                                           :backoff-multiplier 2.0))
      (let [start-time (System/currentTimeMillis)
            result (intemporal/start-workflow engine retry-flow [42])
            elapsed (- (System/currentTimeMillis) start-time)]
        (is (match? {:status :completed
                     :workflow-id string?
                     :result {:result 126}}
                    result))
        ;; With backoff 10ms, 20ms, we expect at least 30ms
        (is (>= elapsed 30))))))

(deftest test-error-details-preserved
  (testing "Error details are preserved in workflow result"
    (intemporal/with-workflow-engine [engine {:threads 2}]
      (a/register-activity! (:registry engine) #'always-fails-activity)
      (let [result (intemporal/start-workflow engine
                                              failing-retry-flow [789])]
        (is (match? {:status :failed
                     :workflow-id string?
                     :error (m/embeds {:message "Activity failed"
                                       :data (m/embeds {:activity-name "intemporal.tests.error-test/always-fails-activity"})})}
                    result))))))
