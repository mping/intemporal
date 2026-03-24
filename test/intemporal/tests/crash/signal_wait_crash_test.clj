(ns ^:crash intemporal.tests.crash.signal-wait-crash-test
  "Crash recovery test demonstrating workflow persistence across process restart.
   Tests that a simple workflow can be resumed after simulated crash,
   demonstrating that completed activities are not re-executed."
  (:require [intemporal.core :as intemporal]
            [intemporal.store :as store]
            [intemporal.protocol :as p]
            [clojure.pprint :as pprint]
            [clojure.test :refer [deftest is testing]]))

;; ============================================================================
;; Test Infrastructure
;; ============================================================================

(def execution-counter (atom 0))

(defn tracked-activity
  "Simple activity that increments counter to track executions"
  [x]
  (swap! execution-counter inc)
  (Thread/sleep 50)  ;; Simulate work
  (* x 2))

(defn simple-workflow
  "Workflow that suspends at crash-point for testing"
  [id num-activities crash-point]
  (let [stub (intemporal/stub #'tracked-activity)]
    (loop [i 0
           results []]
      (if (< i num-activities)
        (do
          ;; Simulate crash by waiting for signal at crash point
          (when (= i crash-point)
            (intemporal/wait-for-signal "resume"))
          (recur (inc i) (conj results (stub i))))
        {:id id :results results}))))

(defn verify-history
  "Count completed activities in event history"
  [store workflow-id]
  (let [history (p/load-history store workflow-id)
        completed (filter #(= :activity-completed (:event-type %)) history)]
    (pprint/print-table history)
    (count completed)))

;; ============================================================================
;; Tests
;; ============================================================================

(deftest test-exception-inject-crash-recovery
  (testing "Simple crash recovery - workflow resumes from suspension point"
    (reset! execution-counter 0)

    ;; Test configuration
    (let [workflow-id "simple-crash-test-1"
          num-activities 5
          crash-point 3  ;; Suspend after completing activities 0, 1, 2
          ;; Create store that persists across "crash"
          persistent-store (store/->InMemoryStore (atom {}))]

      ;; ======================================================================
      ;; Phase 1: Execute workflow until suspension point ("crash")
      ;; ======================================================================
      (testing "Phase 1: Execute until crash point (signal wait)"
        (let [engine-1 (intemporal/make-workflow-engine
                         :store persistent-store
                         :threads 2)
              result-future-1 (future
                                (intemporal/start-workflow
                                  engine-1
                                  simple-workflow
                                  [workflow-id num-activities crash-point]
                                  :workflow-id workflow-id))]

          ;; Give workflow time to start and reach suspension point
          (Thread/sleep 200)

          ;; Cancel the future to simulate crash
          (future-cancel result-future-1)
          (intemporal/shutdown-engine engine-1)

          ;; Verify: 3 activities executed (0, 1, 2)
          (is (= crash-point @execution-counter)
              (str "Should have executed " crash-point " activities before suspension"))

          ;; Verify: History contains 3 activity-completed events
          (is (= crash-point (verify-history persistent-store workflow-id))
              (str "History should contain " crash-point " completed activity events"))))

      ;; ======================================================================
      ;; Phase 2: Resume workflow after simulated crash with new engine
      ;; ======================================================================
      (testing "Phase 2: Resume after crash - activities not re-executed"
        (let [pre-resume-count @execution-counter
              ;; Create NEW engine with SAME store (simulates process restart)
              engine-2 (intemporal/make-workflow-engine
                         :store persistent-store
                         :threads 2)]

          ;; Send the "resume" signal BEFORE resuming workflow
          (intemporal/send-signal persistent-store workflow-id "resume" {:resumed true})

          ;; Resume workflow - should complete now that signal is available
          (let [result-2 (intemporal/resume-workflow
                           engine-2
                           workflow-id
                           simple-workflow
                           [workflow-id num-activities crash-point])]

            ;; Verify: Workflow completed successfully
            (is (= :completed (:status result-2))
                "Resumed workflow should complete successfully")

            ;; Verify: Activities 0-2 were NOT re-executed (used cache)
            ;; Only activities 3-4 should have executed (2 new executions)
            (is (= num-activities @execution-counter)
                (str "Should have " num-activities " total executions (not " @execution-counter ")"))

            ;; Verify: Final result is correct
            (is (= {:id workflow-id
                    :results [0 2 4 6 8]}  ;; 0*2, 1*2, 2*2, 3*2, 4*2
                   (:result result-2))
                "Final result should be correct")

            ;; Verify: History has all 5 completed activities
            (is (= num-activities (verify-history persistent-store workflow-id))
                (str "Final history should contain " num-activities " completed activities"))))))))
