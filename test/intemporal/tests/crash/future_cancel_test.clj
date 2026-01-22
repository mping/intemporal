(ns ^:crash intemporal.tests.crash.future-cancel-test
  "Crash recovery test using future cancellation.
   Workflow executes in a future which we cancel mid-execution to simulate
   an abrupt crash, then we create a new engine and resume."
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
  (Thread/sleep 100)  ;; Longer sleep to ensure we can interrupt
  (* x 2))

(defn future-crash-workflow [id num-activities]
  "Simple workflow that executes activities sequentially"
  (let [stub (intemporal/stub #'tracked-activity)]
    (loop [i 0
           results []]
      (if (< i num-activities)
        (recur (inc i) (conj results (stub i)))
        {:id id :results results}))))

(defn verify-history [store workflow-id]
  "Count completed activities in event history"
  (let [history (p/load-history store workflow-id)
        completed (filter #(= :activity-completed (:event-type %)) history)]
    (count completed)))

;; ============================================================================
;; Tests
;; ============================================================================

(deftest test-future-cancel-crash-recovery
  (testing "Workflow resumes correctly after future cancellation (abrupt crash)"
    (reset! execution-counter 0)

    ;; Test configuration
    (let [workflow-id "future-crash-test-1"
          num-activities 5
          crash-after 3  ;; Cancel after 3 activities complete
          ;; Create store that persists across "crash"
          persistent-store (store/->InMemoryStore (atom {}))]

      ;; ======================================================================
      ;; Phase 1: Execute workflow in future and cancel it (simulate crash)
      ;; ======================================================================
      (testing "Phase 1: Execute until crash (future cancel)"
        (let [engine-1 (intemporal/make-workflow-engine
                         :store persistent-store
                         :threads 2)
              ;; Start workflow in background future
              workflow-future (future
                                (try
                                  (intemporal/start-workflow
                                    engine-1
                                    future-crash-workflow
                                    [workflow-id num-activities]
                                    :workflow-id workflow-id)
                                  (catch Exception e
                                    ;; Future cancellation may throw
                                    {:status :interrupted :error e})))]

          ;; Wait for crash-after activities to complete
          (while (< @execution-counter crash-after)
            (Thread/sleep 50))

          ;; Give it a bit more time to ensure activity is persisted
          (Thread/sleep 150)

          ;; Simulate crash by canceling the future
          (future-cancel workflow-future)

          ;; Wait a bit for cancellation to take effect
          (Thread/sleep 100)

          ;; Verify: At least crash-after activities executed
          (is (>= @execution-counter crash-after)
              (str "Should have executed at least " crash-after " activities before crash"))

          ;; Verify: History contains at least crash-after completed events
          (let [completed-count (verify-history persistent-store workflow-id)]
            (is (>= completed-count crash-after)
                (str "History should contain at least " crash-after " completed activity events, found " completed-count)))))

      ;; ======================================================================
      ;; Phase 2: Resume workflow after "crash" with new engine
      ;; ======================================================================
      (testing "Phase 2: Resume after crash with new engine"
        (let [pre-resume-count @execution-counter
              ;; Create NEW engine with SAME store (simulates process restart)
              engine-2 (intemporal/make-workflow-engine
                         :store persistent-store  ;; Same store!
                         :threads 2)
              ;; Resume workflow
              result-2 (intemporal/resume-workflow
                         engine-2
                         workflow-id
                         future-crash-workflow
                         [workflow-id num-activities])]

          ;; Verify: Workflow completed successfully
          (is (= :completed (:status result-2))
              "Resumed workflow should complete successfully")

          ;; Verify: Activities were NOT re-executed
          ;; Total executions should be num-activities (some from phase 1, rest from phase 2)
          (is (<= @execution-counter num-activities)
              (str "Should have at most " num-activities " total executions (found " @execution-counter ")"))

          ;; Verify: Final result is correct
          (is (= {:id workflow-id
                  :results [0 2 4 6 8]}  ;; 0*2, 1*2, 2*2, 3*2, 4*2
                 (:result result-2))
              "Final result should be correct")

          ;; Verify: History has all 5 completed activities
          (is (= num-activities (verify-history persistent-store workflow-id))
              (str "Final history should contain " num-activities " completed activities")))))))
