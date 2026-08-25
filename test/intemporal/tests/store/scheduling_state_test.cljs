(ns intemporal.tests.store.scheduling-state-test
  (:require
   [cljs.test :refer [deftest is testing]]
   [intemporal.protocol :as p]
   [intemporal.store :as store]))

(defn- creation [workflow-id owner-id]
  {:workflow-id workflow-id
   :owner-id owner-id
   :started-event {:event-type :workflow-started :seq -1 :workflow-id workflow-id
                   :workflow-fn-name "cljs-scheduling" :args []}})

(deftest durable-scheduling-state-machine
  (testing "ClojureScript InMemoryStore uses FSM transitions for WAITING/RUNNABLE"
    (let [workflow-store (store/create-store)
          workflow-id "cljs-scheduling-state"
          owner-id "cljs-owner"
          now (js/Date.now)
          due-at (+ now 60000)]
      (p/create-workflow! workflow-store (creation workflow-id owner-id))
      (is (= {:workflow-id workflow-id :wake-version 0}
             (first (p/claim-runnable! workflow-store owner-id 10 now))))
      (is (= :committed
             (:commit-status
               (p/commit-transition!
                 workflow-store
                 {:workflow-id workflow-id :owner-id owner-id :kind :park
                  :expected-wake-version 0 :events [] :next-run-at due-at}))))
      (is (empty? (p/claim-runnable! workflow-store owner-id 10 now)))
      (is (= :woken (:wake-status (p/wake! workflow-store workflow-id))))
      (is (= [{:workflow-id workflow-id :wake-version 1}]
             (p/claim-runnable! workflow-store owner-id 10 now)))
      (is (= :woken (:wake-status (p/wake! workflow-store workflow-id))))
      (is (= :wake-raced
             (:commit-status
               (p/commit-transition!
                 workflow-store
                 {:workflow-id workflow-id :owner-id owner-id :kind :park
                  :expected-wake-version 1 :events [] :next-run-at nil}))))
      ;; The running claim can complete only through a terminal transition.
      (let [tree (p/load-close-tree workflow-store workflow-id)]
        (is (= :committed
               (:commit-status
                 (p/commit-transition!
                   workflow-store
                   {:workflow-id workflow-id :owner-id owner-id :kind :terminal
                    :events [{:event-type :workflow-completed :seq 0 :result :done}]
                    :terminal-status :completed
                    :expected-related-revisions {workflow-id (:revision tree)}}))))
        (is (= :completed (p/get-workflow-status workflow-store workflow-id)))))))
