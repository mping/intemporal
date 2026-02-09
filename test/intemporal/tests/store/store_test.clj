(ns intemporal.tests.store.store-test
  (:require [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [clojure.test :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]]))

;; Test activity function
(defn test-activity [x]
  (println "Activity executing with:" x)
  (* x 10))

;; Comprehensive workflow with activity, async, timer, and signal
(defn comprehensive-workflow [initial-value]
  (println "Starting comprehensive workflow with:" initial-value)

  ;; 1. Execute an activity
  (let [activity-stub (intemporal/stub #'test-activity)
        activity-result (activity-stub initial-value)]

    ;; 2. Execute an async operation
    (println "Scheduling async operation")
    (let [async-handle (intemporal/async #(activity-stub (inc initial-value)))

          ;; Join the async result before moving forward
          async-result (intemporal/join async-handle)]

      ;; 3. Schedule a timer
      (println "Scheduling timer")
      (intemporal/sleep 100)

      ;; 4. Wait for signal
      (println "Waiting for signal")
      (let [signal-data (intemporal/wait-for-signal "approval")]

        ;; Return comprehensive result
        {:activity-result activity-result
         :async-result async-result
         :signal-data signal-data
         :initial-value initial-value}))))

(deftest test-store-event-validation
  (testing "Validate store events for workflow with activity, async, timer, and signal"
    (intemporal/with-workflow-engine [engine {:threads 4}]
      (let [wf-id "store-validation-test"
            initial-value 5

            ;; Start workflow in a future since it will block on signal
            result-future (future
                            (intemporal/start-workflow engine
                                                       comprehensive-workflow [initial-value]
                                                       :workflow-id wf-id))

            ;; Give workflow time to start and reach signal wait
            _ (Thread/sleep 200)

            ;; Send the signal to unblock the workflow
            _ (intemporal/send-signal (:store engine) wf-id "approval" {:approved true :by "admin"})

            ;; Wait for workflow to complete
            result @result-future

            ;; Load the event history from the store
            history (intemporal/get-workflow-history (:store engine) wf-id)]

        ;; Verify workflow completed successfully
        (is (match? {:status :completed
                     :workflow-id wf-id
                     :result {:activity-result 50
                              :async-result 60
                              :signal-data {:approved true :by "admin"}
                              :initial-value 5}}
                    result))

        ;; Validate the store contains expected events
        (testing "Store history structure"
          (is (sequential? history) "History should be a sequence")
          (is (pos? (count history)) "History should not be empty"))

        ;; Validate event ordering and extract events for further testing
        (testing "Event ordering and sequence numbers"
          ;; Verify that events have monotonically increasing timestamps
          (let [timestamps (map :timestamp history)]
            (is (= timestamps (sort timestamps))
                "Events should be ordered by timestamp"))

          ;; Verify sequence numbers are present and valid where expected
          (let [sequenced-events (filter :seq history)
                seq-numbers (map :seq sequenced-events)]
            (is (every? (complement neg?) seq-numbers)
                "Sequence numbers should be non-negative")
            ;; Note: sequence numbers may have duplicates (scheduled and completed events share seq)
            ;; So we can't test strict monotonicity, just that they're generally ordered
            (is (<= (first seq-numbers) (last seq-numbers))
                "Sequence numbers should progress forward")))

        ;; Extract events by type for detailed validation
        (let [events-by-type (group-by :event-type history)
              workflow-started-events (get events-by-type :workflow-started [])
              activity-scheduled-events (get events-by-type :activity-scheduled [])
              activity-completed-events (get events-by-type :activity-completed [])
              async-started-events (get events-by-type :async-started [])
              async-completed-events (get events-by-type :async-completed [])
              timer-scheduled-events (get events-by-type :timer-scheduled [])
              timer-fired-events (get events-by-type :timer-fired [])
              signal-received-events (get events-by-type :signal-received [])
              signal-wait-completed-events (get events-by-type :signal-wait-completed [])
              workflow-completed-events (get events-by-type :workflow-completed [])]

          (testing "Workflow lifecycle events"
            (is (= 1 (count workflow-started-events))
                "Should have exactly one workflow-started event")
            (is (= 1 (count workflow-completed-events))
                "Should have exactly one workflow-completed event")

            (let [started-event (first workflow-started-events)
                  completed-event (first workflow-completed-events)]
              (is (match? {:event-type :workflow-started
                           :workflow-id wf-id
                           :args [initial-value]
                           :timestamp int?}
                          started-event)
                  "workflow-started event should have correct structure")

              (is (match? {:event-type :workflow-completed
                           :result {:activity-result 50
                                    :async-result 60
                                    :signal-data {:approved true :by "admin"}
                                    :initial-value 5}
                           :timestamp int?}
                          completed-event)
                  "workflow-completed event should have correct result")))

          (testing "Activity events"
            ;; We expect 3 activity executions:
            ;; 1. Direct activity call with initial-value (5)
            ;; 2. Async activity call with (inc initial-value) (6) - scheduled
            ;; 3. Async activity call with (inc initial-value) (6) - executed
            (is (>= (count activity-scheduled-events) 2)
                "Should have at least 2 activity-scheduled events (direct + async)")
            (is (>= (count activity-completed-events) 2)
                "Should have at least 2 activity-completed events")

            ;; Validate activity-scheduled event structure
            (doseq [event activity-scheduled-events]
              (is (match? {:event-type :activity-scheduled
                           :seq int?
                           :activity-name string?
                           :args vector?
                           :timestamp int?}
                          event)
                  "activity-scheduled event should have required fields"))

            ;; Validate activity-completed event structure
            (doseq [event activity-completed-events]
              (is (match? {:event-type :activity-completed
                           :seq int?
                           :activity-name string?
                           :result int?
                           :timestamp int?}
                          event)
                  "activity-completed event should have required fields"))

            ;; Verify sequence numbers match between scheduled and completed
            (let [scheduled-seqs (set (map :seq activity-scheduled-events))
                  completed-seqs (set (map :seq activity-completed-events))]
              (is (every? scheduled-seqs completed-seqs)
                  "All completed activities should have been scheduled first")))

          (testing "Async events"
            (is (= 1 (count async-started-events))
                "Should have exactly one async-started event")
            (is (= 1 (count async-completed-events))
                "Should have exactly one async-completed event")

            (let [started (first async-started-events)
                  completed (first async-completed-events)]
              (is (match? {:event-type :async-started
                           :seq int?
                           :timestamp int?}
                          started)
                  "async-started event should have required fields")

              (is (match? {:event-type :async-completed
                           :seq int?
                           :last-seq int?
                           :result 60
                           :timestamp int?}
                          completed)
                  "async-completed event should have required fields and correct result")

              ;; Verify sequence numbers match
              (is (= (:seq started) (:seq completed))
                  "Async started and completed should have same sequence number")))

          (testing "Timer events"
            (is (= 1 (count timer-scheduled-events))
                "Should have exactly one timer-scheduled event")
            (is (= 1 (count timer-fired-events))
                "Should have exactly one timer-fired event")

            (let [scheduled (first timer-scheduled-events)
                  fired (first timer-fired-events)]
              (is (match? {:event-type :timer-scheduled
                           :seq int?
                           :duration-ms 100
                           :fire-at int?
                           :timestamp int?}
                          scheduled)
                  "timer-scheduled event should have required fields")

              (is (match? {:event-type :timer-fired
                           :seq int?
                           :timestamp int?}
                          fired)
                  "timer-fired event should have required fields")

              ;; Verify sequence numbers match
              (is (= (:seq scheduled) (:seq fired))
                  "Timer scheduled and fired should have same sequence number")

              ;; Verify fire-at time is in the past
              (is (<= (:fire-at scheduled) (System/currentTimeMillis))
                  "Timer fire-at should be in the past")))

          (testing "Signal events"
            (is (= 1 (count signal-received-events))
                "Should have exactly one signal-received event")

            ;; Note: signal-wait-completed is only used by wait-for-signal-with-timeout
            ;; wait-for-signal uses signal-received directly

            (let [received (first signal-received-events)]
              (is (match? {:event-type :signal-received
                           :seq int?
                           :signal-name "approval"
                           :payload {:approved true :by "admin"}
                           :timestamp int?}
                          received)
                  "signal-received event should have required fields and correct payload")))

          (testing "Event ordering and sequence numbers"
            ;; Verify that events have monotonically increasing timestamps
            (let [timestamps (map :timestamp history)]
              (is (= timestamps (sort timestamps))
                  "Events should be ordered by timestamp"))

            ;; Verify sequence numbers are present and valid where expected
            (let [sequenced-events (filter :seq history)
                  seq-numbers (map :seq sequenced-events)]
              (is (every? (complement neg?) seq-numbers)
                  "Sequence numbers should be non-negative")
              ;; Note: sequence numbers may have duplicates (scheduled and completed events share seq)
              ;; So we can't test strict monotonicity, just that they're generally ordered
              (is (<= (first seq-numbers) (last seq-numbers))
                  "Sequence numbers should progress forward")))

          (testing "Event completeness"
            ;; Verify all major workflow phases are represented
            (is (seq workflow-started-events) "Workflow should have started")
            (is (seq activity-scheduled-events) "Activities should have been scheduled")
            (is (seq activity-completed-events) "Activities should have completed")
            (is (seq async-started-events) "Async operation should have started")
            (is (seq async-completed-events) "Async operation should have completed")
            (is (seq timer-scheduled-events) "Timer should have been scheduled")
            (is (seq timer-fired-events) "Timer should have fired")
            (is (seq signal-received-events) "Signal should have been received")
            (is (seq workflow-completed-events) "Workflow should have completed"))

          (testing "Detailed event ordering validation"
            ;; Helper to get first position of an event type
            (let [first-pos (fn [event-type]
                              (let [idx (.indexOf (mapv :event-type history) event-type)]
                                (if (= -1 idx) Integer/MAX_VALUE idx)))

                  ;; Helper to get last position of an event type
                  last-pos (fn [event-type]
                             (let [indices (keep-indexed #(when (= event-type (:event-type %2)) %1) history)]
                               (if (empty? indices) -1 (last indices))))]

              ;; workflow-started should be first
              (is (= 0 (first-pos :workflow-started))
                  "workflow-started should be the first event")

              ;; workflow-completed should be last
              (is (= (dec (count history)) (last-pos :workflow-completed))
                  "workflow-completed should be the last event")

              ;; For each activity: scheduled must come before completed
              (let [scheduled-by-seq (group-by :seq activity-scheduled-events)]
                (doseq [completed activity-completed-events]
                  (let [seq-num (:seq completed)
                        scheduled-list (get scheduled-by-seq seq-num)]
                    (when (seq scheduled-list)
                      (let [scheduled (first scheduled-list)
                            scheduled-idx (.indexOf history scheduled)
                            completed-idx (.indexOf history completed)]
                        (is (< scheduled-idx completed-idx)
                            (str "activity-scheduled (seq " seq-num ") should come before activity-completed")))))))

              ;; async-started must come before async-completed
              (when (and (seq async-started-events) (seq async-completed-events))
                (let [async-started-idx (.indexOf history (first async-started-events))
                      async-completed-idx (.indexOf history (first async-completed-events))]
                  (is (< async-started-idx async-completed-idx)
                      "async-started should come before async-completed")))

              ;; timer-scheduled must come before timer-fired
              (when (and (seq timer-scheduled-events) (seq timer-fired-events))
                (let [timer-scheduled-idx (.indexOf history (first timer-scheduled-events))
                      timer-fired-idx (.indexOf history (first timer-fired-events))]
                  (is (< timer-scheduled-idx timer-fired-idx)
                      "timer-scheduled should come before timer-fired")))

              ;; First direct activity should complete before async starts
              (when (and (seq activity-completed-events) (seq async-started-events))
                (let [first-activity-completed-idx (first (keep-indexed #(when (= :activity-completed (:event-type %2)) %1) history))
                      first-async-idx (first-pos :async-started)]
                  (is (< first-activity-completed-idx first-async-idx)
                      "First activity should complete before async starts")))

              ;; Async should complete before timer is scheduled
              (when (and (seq async-completed-events) (seq timer-scheduled-events))
                (let [async-completed-idx (last-pos :async-completed)
                      timer-scheduled-idx (first-pos :timer-scheduled)]
                  (is (< async-completed-idx timer-scheduled-idx)
                      "async-completed should come before timer-scheduled")))

              ;; Timer should fire before signal is received
              (when (and (seq timer-fired-events) (seq signal-received-events))
                (let [timer-fired-idx (last-pos :timer-fired)
                      signal-received-idx (first-pos :signal-received)]
                  (is (< timer-fired-idx signal-received-idx)
                      "timer-fired should come before signal-received"))))))))))

(deftest test-store-replay-consistency
  (testing "Store events allow deterministic replay"
    (intemporal/with-workflow-engine [engine {:threads 4}]
      (let [wf-id "replay-consistency-test"
            initial-value 7

            ;; First execution
            result-future-1 (future
                              (intemporal/start-workflow engine
                                                         comprehensive-workflow [initial-value]
                                                         :workflow-id wf-id))
            _ (Thread/sleep 200)
            _ (intemporal/send-signal (:store engine) wf-id "approval" {:replay "first"})
            result-1 @result-future-1
            history-1 (intemporal/get-workflow-history (:store engine) wf-id)

            ;; Second execution (resume/replay)
            result-2 (intemporal/resume-workflow engine wf-id
                                                 comprehensive-workflow [initial-value])
            history-2 (intemporal/get-workflow-history (:store engine) wf-id)]

        (testing "Results should be consistent"
          (is (= (:status result-1) (:status result-2) :completed)
              "Both executions should complete successfully")
          (is (= (dissoc (:result result-1) :signal-data)
                 (dissoc (:result result-2) :signal-data))
              "Activity and async results should be identical on replay"))

        (testing "History should be preserved"
          ;; Note: replay may add a workflow-started event, so history length might increase by 1
          (is (<= (count history-1) (count history-2) (inc (count history-1)))
              "History length should be preserved or grow by at most 1 on replay")

          ;; Activity and async events should be identical
          (let [activity-events-1 (filter #(#{:activity-scheduled :activity-completed} (:event-type %)) history-1)
                activity-events-2 (filter #(#{:activity-scheduled :activity-completed} (:event-type %)) history-2)
                async-events-1 (filter #(#{:async-started :async-completed} (:event-type %)) history-1)
                async-events-2 (filter #(#{:async-started :async-completed} (:event-type %)) history-2)]
            (is (= (count activity-events-1) (count activity-events-2))
                "Should have same number of activity events")
            (is (= (count async-events-1) (count async-events-2))
                "Should have same number of async events")))))))
