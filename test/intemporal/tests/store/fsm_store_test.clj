(ns intemporal.tests.store.fsm-store-test
  (:require
   [clojure.spec.alpha :as s]
   [clojure.test :refer [deftest is]]
   [intemporal.protocol :as p]
   [intemporal.store :as store]))

(defn- started-event [workflow-id]
  {:event-type :workflow-started
   :seq -1
   :workflow-id workflow-id
   :workflow-fn-name "intemporal.tests.store.fsm-store-test/workflow"
   :args []})

(defn- creation
  ([workflow-id] (creation workflow-id nil))
  ([workflow-id parent]
   (cond-> {:workflow-id workflow-id
            :owner-id "engine-a"
            :started-event (started-event workflow-id)}
     parent (assoc :parent parent))))

(defn- fsm-store []
  (store/create-store :checked? true))

(deftest create-claim-and-snapshot-have-independent-revisions
  (s/check-asserts true)
  (let [st (fsm-store)]
    (is (= :created (:create-status (p/create-workflow! st (creation "root")))))
    (let [snapshot (p/load-snapshot st "root")]
      (is (= 1 (:revision snapshot)))
      (is (= 1 (:history-revision snapshot)))
      (is (= :runnable (:run-state snapshot))))
    (is (= [{:workflow-id "root" :wake-version 0}]
           (p/claim-runnable! st "engine-a" 1 0)))
    (let [state (p/load-workflow-state st "root")]
      (is (= :running (:run-state state)))
      (is (= 2 (:revision state)))
      (is (= 1 (:history-revision state))))))

(deftest signals-are-workflow-wide-idempotent-fifo-and-transition-consumed
  (s/check-asserts true)
  (let [st (fsm-store)]
    (p/create-workflow! st (creation "signals"))
    (p/claim-runnable! st "engine-a" 1 0)
    (is (= :accepted (:signal-status
                       (p/add-signal! st "signals" "go"
                                      {:signal-id "one" :payload 1}))))
    (is (= :duplicate (:signal-status
                        (p/add-signal! st "signals" "go"
                                       {:signal-id "one" :payload 1}))))
    (is (= :conflict (:signal-status
                       (p/add-signal! st "signals" "other"
                                      {:signal-id "one" :payload 1}))))
    (p/add-signal! st "signals" "go" {:signal-id "two" :payload 2})
    (let [before (p/load-workflow-state st "signals")
          stale  {:workflow-id "signals" :owner-id "engine-a" :kind :park
                  :expected-wake-version 1 :events [] :next-run-at nil
                  :consume-signals [{:signal-name "go" :queue-id 0 :signal-id "one"}]}
          valid  (assoc stale :expected-wake-version (:wake-version before))]
      (is (= :wake-raced (:commit-status (p/commit-transition! st stale))))
      (is (= ["one" "two"]
             (mapv :signal-id (get-in (p/load-workflow-state st "signals")
                                       [:signals "go"]))))
      ;; A guarded park is not appropriate after consumption in this unit test:
      ;; use an unguarded continue transition to keep the claim running.
      (is (= :committed
             (:commit-status
               (p/commit-transition!
                 st
                 (assoc valid :kind :continue
                        :events [{:event-type :signal-received :seq 0
                                  :signal-name "go" :signal-id "one" :payload 1}])))))
      (is (= ["two"]
             (mapv :signal-id (get-in (p/load-workflow-state st "signals")
                                       [:signals "go"])))))))

(deftest terminal-transition-closes-descendants-in-one-revision-checked-commit
  (s/check-asserts true)
  (let [st (fsm-store)]
    (p/create-workflow! st (creation "parent"))
    (p/claim-runnable! st "engine-a" 1 0)
    (is (= :committed
           (:commit-status
             (p/commit-transition!
               st
               {:workflow-id "parent"
                :owner-id "engine-a"
                :kind :continue
                :events [{:event-type :child-workflow-scheduled :seq 0
                          :child-workflow-id "child"}]
                :create-workflows [(creation "child"
                                             {:workflow-id "parent"
                                              :seq 0
                                              :policy :terminate})]}))))
    (let [tree (p/load-close-tree st "parent")
          revisions (into {} (map (juxt :workflow-id :revision))
                          (cons tree (:children tree)))
          transition {:workflow-id "parent"
                      :owner-id "engine-a"
                      :kind :terminal
                      :events [{:event-type :workflow-completed :seq 1 :result :done}]
                      :terminal-status :completed
                      :expected-related-revisions revisions
                      :close-actions [{:op :terminate
                                       :workflow-id "child"
                                       :terminal-status :terminated
                                       :events [{:event-type :workflow-terminated :seq 0}]}]}]
      (is (= :conflict
             (:commit-status (p/commit-transition!
                              st (assoc-in transition
                                           [:expected-related-revisions "child"] 999)))))
      (is (= :committed (:commit-status (p/commit-transition! st transition))))
      (is (= :completed (p/get-workflow-status st "parent")))
      (is (= :terminated (p/get-workflow-status st "child")))
      (is (= :workflow-terminated
             (:event-type (last (p/load-history st "child"))))))))
