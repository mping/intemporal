(ns ^:crash intemporal.tests.crash.signal-based-test
  "Crash recovery test using signal-based suspension.
   This is the cleanest approach - workflow suspends waiting for a signal,
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

(defn signal-crash-workflow [id num-activities crash-point]
  "Workflow that suspends at crash-point waiting for 'resume' signal"
  (let [stub (intemporal/stub #'tracked-activity)]
    (loop [i 0
           results []]
      (if (< i num-activities)
        (do
          ;; Suspend at crash point - simulates process crash
          (when (= i crash-point)
            (intemporal/wait-for-signal "resume"))
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

(deftest test-signal-based-crash-recovery
  (testing "Workflow resumes correctly after signal-based suspension (simulated crash)"
    (reset! execution-counter 0)

    ;; Test configuration
    (let [workflow-id "signal-crash-test-1"
          num-activities 5
          crash-point 3  ;; Suspend after completing activities 0, 1, 2
          ;; Create store that persists across "crash"
          persistent-store (store/->InMemoryStore (atom {}))]

      ;; ======================================================================
      ;; Phase 1: Execute workflow until "crash" (suspension point)
      ;; ======================================================================
      (testing "Phase 1: Execute until crash point"
        (let [engine-1 (intemporal/make-workflow-engine
                         :store persistent-store
                         :threads 2)
              result-1 (intemporal/start-workflow
                         engine-1
                         signal-crash-workflow
                         [workflow-id num-activities crash-point]
                         :workflow-id workflow-id)]

          ;; Workflow should suspend waiting for signal
          (is (= :waiting-signal (:status result-1))
              "Workflow should suspend waiting for 'resume' signal")

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
                         :threads 2)
              ;; Resume workflow in background
              resume-future (future
                              (intemporal/resume-workflow
                                engine-2
                                workflow-id
                                signal-crash-workflow
                                [workflow-id num-activities crash-point]))]

          ;; Send the "resume" signal to continue workflow
          (Thread/sleep 100)  ;; Give resume time to start
          (intemporal/send-signal persistent-store workflow-id "resume" {:resumed true})

          ;; Wait for workflow to complete
          (let [result-2 @resume-future]

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
                (str "Final history should contain " num-activities " completed activities"))))))))
