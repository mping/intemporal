(ns intemporal.tests.store.scheduling-state-test
  (:require
   [cljs.test :refer [deftest is testing]]
   [intemporal.protocol :as p]
   [intemporal.store :as store]))

(deftest durable-scheduling-state-machine
  (testing "ClojureScript InMemoryStore separates WAITING from RUNNABLE"
    (let [store       (store/create-store)
          workflow-id "cljs-scheduling-state"
          owner-id    "cljs-owner"
          now         (js/Date.now)
          due-at      (+ now 60000)]
      (p/save-event store workflow-id
                    {:event-type :workflow-started
                     :seq -1
                     :workflow-id workflow-id
                     :args []
                     :timestamp now})
      (is (= {:workflow-id workflow-id :wake-version 0}
             (first (p/claim-runnable! store owner-id 10 now))))
      (is (= {:park-status :parked}
             (p/park-workflow! store workflow-id 0
                               [{:event-type :timer-scheduled
                                 :seq 0
                                 :fire-at due-at
                                 :duration-ms 60000
                                 :timestamp now}]
                               nil)))
      (is (empty? (p/claim-runnable! store owner-id 10 now)))
      (is (true? (p/wake-workflow store workflow-id)))
      (is (= [{:workflow-id workflow-id :wake-version 1}]
             (p/claim-runnable! store owner-id 10 now)))
      (is (true? (p/wake-workflow store workflow-id)))
      (is (= {:park-status :wake-raced :wake-version 2}
             (p/park-workflow! store workflow-id 1 [] nil)))
      (is (= {:park-status :terminal}
             (p/park-workflow! store workflow-id 2
                               [{:event-type :workflow-completed
                                 :seq 1
                                 :result :done
                                 :timestamp (js/Date.now)}]
                               nil)))
      (is (= :completed (p/get-workflow-status store workflow-id)))
      (is (empty? (p/claim-runnable! store owner-id 10 (js/Date.now)))))))
