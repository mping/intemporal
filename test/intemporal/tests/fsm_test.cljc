(ns intemporal.tests.fsm-test
  (:require
   #?(:clj [clojure.test :refer [deftest is testing]]
      :cljs [cljs.test :refer-macros [deftest is testing]])
   [intemporal.internal.fsm :as fsm]))

(def claim {:workflow-id "workflow" :owner-id "engine-a" :wake-version 4})

(def snapshot {:workflow-id "workflow"
               :owner-id "engine-a"
               :status :running
               :run-state :running
               :wake-version 4
               :revision 3
               :history-revision 2
               :cancel-requested? false
               :signals {}
               :history []})

(deftest snapshot-to-park-command-trace
  (testing "the reducer emits one command at a time and parks only after commit"
    (let [m0 (fsm/start claim)
          r0 (fsm/step m0 {:type :begin})
          r1 (fsm/step (:machine r0) {:type :snapshot-loaded :snapshot snapshot})
          transition {:workflow-id "workflow"
                      :owner-id "engine-a"
                      :kind :park
                      :expected-wake-version 4
                      :events []
                      :next-run-at 100}
          r2 (fsm/step (:machine r1)
                       {:type :replay-returned
                        :replay {:status :suspended
                                 :plan {:kind :park
                                        :transition transition
                                        :result {:status :parked
                                                 :reason :timer
                                                 :workflow-id "workflow"}}}})
          r3 (fsm/step (:machine r2) {:type :commit-result
                                      :result {:commit-status :committed}})]
      (is (= {:op :load-snapshot :workflow-id "workflow"} (:command r0)))
      (is (= :invoke-replay (get-in r1 [:command :op])))
      (is (= {:op :commit-transition :transition transition} (:command r2)))
      (is (= {:op :return
              :value {:status :parked :reason :timer :workflow-id "workflow"}}
             (:command r3)))
      (is (fsm/done? (:machine r3))))))

(deftest effect-is-preceded-by-a-durable-commit
  (let [m0 (fsm/start claim)
        r0 (fsm/step m0 {:type :begin})
        r1 (fsm/step (:machine r0) {:type :snapshot-loaded :snapshot snapshot})
        pre {:workflow-id "workflow" :owner-id "engine-a" :kind :continue :events []}
        effect {:kind :activity :activity-name "example/activity" :args [1]}
        r2 (fsm/step (:machine r1)
                     {:type :replay-returned
                      :replay {:status :suspended
                               :plan {:kind :effect :pre-transition pre :effect effect}}})
        r3 (fsm/step (:machine r2) {:type :commit-result
                                    :result {:commit-status :committed}})
        outcome {:workflow-id "workflow" :owner-id "engine-a"
                 :kind :continue :events [{:event-type :activity-completed :seq 0}]}
        r4 (fsm/step (:machine r3) {:type :effect-result
                                    :result {:transition outcome}})]
    (is (= :commit-transition (get-in r2 [:command :op])))
    (is (= :execute-activity (get-in r3 [:command :op])))
    (is (= {:op :commit-transition :transition outcome} (:command r4)))))

(deftest conflicts-reload-instead-of-applying-a-stale-plan
  (let [m0 (fsm/start claim)
        r0 (fsm/step m0 {:type :begin})
        r1 (fsm/step (:machine r0) {:type :snapshot-loaded :snapshot snapshot})
        r2 (fsm/step (:machine r1)
                     {:type :replay-returned
                      :replay {:status :suspended
                               :plan {:kind :continue
                                      :transition {:workflow-id "workflow"
                                                   :owner-id "engine-a"
                                                   :kind :continue
                                                   :events []}}}})
        r3 (fsm/step (:machine r2) {:type :commit-result
                                    :result {:commit-status :wake-raced}})]
    (is (= {:op :load-snapshot :workflow-id "workflow"} (:command r3)))
    (is (= :load-snapshot (get-in r3 [:machine :phase])))))

(deftest terminal-commit-loads-the-complete-close-tree-first
  (let [m0 (fsm/start claim)
        r0 (fsm/step m0 {:type :begin})
        r1 (fsm/step (:machine r0) {:type :snapshot-loaded :snapshot snapshot})
        terminal {:workflow-id "workflow" :owner-id "engine-a"
                  :kind :terminal :events [{:event-type :workflow-completed :seq 0}]
                  :terminal-status :completed}
        r2 (fsm/step (:machine r1)
                     {:type :replay-returned
                      :replay {:status :completed
                               :plan {:kind :terminal
                                      :transition terminal
                                      :result {:status :completed
                                               :workflow-id "workflow"
                                               :result :done}}}})
        r3 (fsm/step (:machine r2)
                     {:type :close-tree-loaded
                      :close-actions [{:op :terminate :workflow-id "child"}]
                      :expected-related-revisions {"workflow" 3 "child" 2}})]
    (is (= {:op :load-close-tree :workflow-id "workflow"} (:command r2)))
    (is (= :commit-transition (get-in r3 [:command :op])))
    (is (= [{:op :terminate :workflow-id "child"}]
           (get-in r3 [:command :transition :close-actions])))
    (is (= {"workflow" 3 "child" 2}
           (get-in r3 [:command :transition :expected-related-revisions])))))

(deftest signal-plan-selects-and-consumes-the-exact-snapshot-envelope
  (let [snapshot (assoc snapshot :signals {"approve"
                                           [{:queue-id 7 :signal-id "first" :payload :yes}
                                            {:queue-id 8 :signal-id "second" :payload :no}]})
        plan (fsm/suspension-plan
               (select-keys claim [:workflow-id :owner-id])
               snapshot 42 :wait-signal
               {:seq 3 :signal-name "approve"}
               [{:event-type :signal-wait-scheduled :seq 3 :deadline 100}])]
    (is (= :continue (:kind plan)))
    (is (= [{:signal-name "approve" :queue-id 7 :signal-id "first"}]
           (get-in plan [:transition :consume-signals])))
    (is (= {:event-type :signal-received :seq 3 :signal-name "approve"
            :signal-id "first" :payload :yes :timestamp 42}
           (last (get-in plan [:transition :events]))))
    (is (= [{:event :signal-received :signal-name "approve" :payload :yes}
            {:event :workflow-suspended :suspension-type :wait-signal}
            {:event :workflow-resumed}]
           (:emissions plan)))))

(deftest timer-plan-is-wake-guarded-when-it-parks
  (let [plan (fsm/suspension-plan
               (select-keys claim [:workflow-id :owner-id]) snapshot 10 :timer
               {:seq 5 :fire-at 50}
               [{:event-type :timer-scheduled :seq 5 :fire-at 50}])]
    (is (= :park (:kind plan)))
    (is (= :timer (:reason plan)))
    (is (= 4 (get-in plan [:transition :expected-wake-version])))
    (is (= 50 (get-in plan [:transition :next-run-at])))))

(deftest terminal-plan-closes-non-abandoned-descendants-with-one-revision-set
  (let [tree {:workflow-id "workflow" :revision 3 :status :running
              :next-terminal-seq 9
              :children [{:workflow-id "terminate" :revision 4 :status :running
                          :next-terminal-seq 2 :policy :terminate :children []}
                         {:workflow-id "cancel" :revision 5 :status :running
                          :next-terminal-seq 3 :policy :cascade-cancel
                          :children [{:workflow-id "nested" :revision 6 :status :running
                                      :next-terminal-seq 1 :policy :terminate :children []}]}
                         {:workflow-id "abandoned" :revision 7 :status :running
                          :next-terminal-seq 0 :policy :abandon :children []}]}
        plan (fsm/terminal-plan (select-keys claim [:workflow-id :owner-id])
                                snapshot tree 100 :completed [] :done)]
    (is (= {:status :completed :workflow-id "workflow" :result :done}
           (:result plan)))
    (is (= #{"terminate" "cancel" "nested"}
           (set (map :workflow-id (:close-actions plan)))))
    (is (= #{"workflow" "terminate" "cancel" "nested"}
           (set (keys (get-in plan [:transition :expected-related-revisions])))))
    (is (= {:event-type :workflow-completed :seq 9 :timestamp 100 :result :done}
           (last (get-in plan [:transition :events]))))))

(deftest activity-plan-commits-scheduling-before-execution-or-parks-a-retry
  (let [effect-plan (fsm/suspension-plan
                      (select-keys claim [:workflow-id :owner-id]) snapshot 10 :activity
                      {:seq 2 :activity-name "example/activity" :args [1]
                       :attempt-state nil}
                      [{:event-type :activity-scheduled :seq 2
                        :activity-name "example/activity"}])
        retry-plan (fsm/suspension-plan
                     (select-keys claim [:workflow-id :owner-id]) snapshot 10 :activity
                     {:seq 2 :activity-name "example/activity"
                      :attempt-state {:will-retry true :retry-at 30}}
                     [])]
    (is (= :effect (:kind effect-plan)))
    (is (= :continue (get-in effect-plan [:pre-transition :kind])))
    (is (= [{:event-type :activity-scheduled :seq 2
             :activity-name "example/activity"}]
           (get-in effect-plan [:pre-transition :events])))
    (is (= :park (:kind retry-plan)))
    (is (= :retry (:reason retry-plan)))
    (is (= 30 (get-in retry-plan [:transition :next-run-at])))))
