(ns ^:crash intemporal.tests.crash.timer-based-test
  "Crash recovery test using timer-based suspension.
   Workflow suspends waiting for a timer at the crash point,
   then we create a new engine and resume."
  (:require [intemporal.core :as intemporal]
            [intemporal.store :as store]
            [intemporal.protocol :as p]
            [clojure.test :refer [deftest is testing]]))

;; ============================================================================
;; Test Infrastructure
;; ============================================================================

(def execution-counter (atom 0))

(defn tracked-activity [x]
  "Activity that increments counter to track actual executions (not replays)"
  (swap! execution-counter inc)
  (Thread/sleep 50)  ;; Simulate work
  (* x 2))

(defn timer-crash-workflow [id num-activities crash-point]
  "Workflow that suspends on timer at crash-point"
  (let [stub (intemporal/stub #'tracked-activity)]
    (loop [i 0
           results []]
      (if (< i num-activities)
        (do
          ;; Suspend on timer at crash point - simulates process crash
          (when (= i crash-point)
            (intemporal/sleep 100))  ;; Short timer for test speed
          (recur (inc i) (conj results (stub i))))
        {:id id :results results}))))

(defn verify-history [store workflow-id expected-completed]
  "Verify the event history contains expected number of completed activities"
  (let [history (p/load-history store workflow-id)
        completed (filter #(= :activity-completed (:event-type %)) history)]
    (count completed)))

;; ============================================================================
;; Tests
;; ============================================================================

(deftest test-timer-based-crash-recovery
  (testing "Workflow resumes correctly after timer-based suspension (simulated crash)"
    (reset! execution-counter 0)

    ;; Test configuration
    (let [workflow-id "timer-crash-test-1"
          num-activities 5
          crash-point 3  ;; Suspend after completing activities 0, 1, 2
          ;; Create store that persists across "crash"
          persistent-store (store/->InMemoryStore (atom {}))]

      ;; ======================================================================
      ;; Phase 1: Execute workflow until "crash" (timer suspension)
      ;; ======================================================================
      (testing "Phase 1: Execute until crash point"
        (let [engine-1 (intemporal/make-workflow-engine
                         :store persistent-store
                         :threads 2
                         :scheduler-threads 1)
              result-1 (intemporal/start-workflow
                         engine-1
                         timer-crash-workflow
                         [workflow-id num-activities crash-point]
                         :workflow-id workflow-id)]

          ;; Workflow should suspend waiting for timer
          (is (= :waiting-timer (:status result-1))
              "Workflow should suspend waiting for timer")

          ;; Verify: 3 activities executed (0, 1, 2)
          (is (= crash-point @execution-counter)
              (str "Should have executed " crash-point " activities before suspension"))

          ;; Verify: History contains 3 activity-completed events
          (is (= crash-point (verify-history persistent-store workflow-id))
              (str "History should contain " crash-point " completed activity events"))))

      ;; ======================================================================
      ;; Phase 2: Resume workflow after "crash" with new engine
      ;; ======================================================================
      (testing "Phase 2: Resume after crash with new engine"
        (let [pre-resume-count @execution-counter
              ;; Create NEW engine with SAME store (simulates process restart)
              engine-2 (intemporal/make-workflow-engine
                         :store persistent-store  ;; Same store!
                         :threads 2
                         :scheduler-threads 1)
              ;; Resume workflow - timer will fire automatically
              result-2 (intemporal/resume-workflow
                         engine-2
                         workflow-id
                         timer-crash-workflow
                         [workflow-id num-activities crash-point])]

          ;; Verify: Workflow completed successfully
          (is (= :completed (:status result-2))
              "Resumed workflow should complete successfully")

          ;; Verify: Activities 0-2 were NOT re-executed (used cache)
          ;; Only activities 3-4 should have executed
          (is (= num-activities @execution-counter)
              (str "Should have " num-activities " total executions (not " @execution-counter ")"))

          ;; Verify: Final result is correct
          (is (= {:id workflow-id
                  :results [0 2 4 6 8]}  ;; 0*2, 1*2, 2*2, 3*2, 4*2
                 (:result result-2))
              "Final result should be correct")

          ;; Verify: History has all 5 completed activities
          (is (= num-activities (verify-history persistent-store workflow-id))
              (str "Final history should contain " num-activities " completed activities")))))))
