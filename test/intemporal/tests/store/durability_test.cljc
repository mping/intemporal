(ns intemporal.tests.store.durability-test
  (:require
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.store.cache :as cache]
   #?(:clj [clojure.test :refer [deftest is testing]]
      :cljs [cljs.test :refer-macros [deftest is testing]])))

(defn- creation [id owner]
  {:workflow-id id :owner-id owner
   :started-event {:event-type :workflow-started :seq -1
                   :workflow-id id :workflow-fn-name "durability/workflow"
                   :args []}})

(defn- signal-dedup [st]
  (let [owner (str "durability-" (random-uuid))
        id (str owner "/signals")
        signal {:signal-id "delivery" :payload :approved}]
    (p/create-workflow! st (creation id owner))
    (p/claim-runnable! st owner 1 0)
    (p/add-signal! st id "approval" signal)
    (p/commit-transition! st
      {:workflow-id id :owner-id owner :kind :continue
       :events [{:event-type :signal-received :seq 0 :signal-name "approval"
                 :signal-id "delivery" :payload :approved}]
       :consume-signals [{:signal-name "approval" :queue-id 0 :signal-id "delivery"}]})
    (is (= :duplicate (:signal-status (p/add-signal! st id "approval" signal))))
    (is (= :conflict (:signal-status (p/add-signal! st id "other" signal))))
    (is (empty? (get-in (p/load-snapshot st id) [:signals "approval"])))))

(defn- creation-identity [st]
  (let [owner (str "durability-" (random-uuid))
        id (str owner "/creation")
        request (creation id owner)]
    (p/create-workflow! st request)
    (p/claim-runnable! st owner 1 0)
    (p/commit-transition! st
      {:workflow-id id :owner-id owner :kind :continue
       :events [{:event-type :timer-scheduled :seq 0 :fire-at 100}]})
    (is (= :exists (:create-status (p/create-workflow! st request))))
    (let [state (p/load-workflow-state st id)]
      (p/commit-transition! st
        {:workflow-id id :owner-id owner :kind :terminal
         :expected-related-revisions {id (:revision state)}
         :events [{:event-type :workflow-completed :seq 1 :result :done}]
         :terminal-status :completed}))
    (is (= :exists (:create-status (p/create-workflow! st request))))
    (is (= :conflict (:create-status
                      (p/create-workflow! st (assoc-in request [:started-event :args] [:changed])))))))

(defn- cache-concurrency [inner]
  (let [owner (str "durability-" (random-uuid))
        id (str owner "/cached")
        cached (cache/wrap inner {:max-workflows 2})
        request (creation id owner)
        transition {:workflow-id id :owner-id owner :kind :continue}]
    (p/create-workflow! cached request)
    (p/claim-runnable! cached owner 1 0)
    ;; A child completion can arrive between replay and a duplicate scheduling write.
    (p/commit-transition! inner
      (assoc transition :events [{:event-type :async-completed :seq 0 :last-seq 0 :result :done}]))
    (p/commit-transition! cached (assoc transition :events [(:started-event request)]))
    (is (= (p/load-history inner id) (:history (p/load-snapshot cached id))))))

(defn- duplicate-child-ids [st]
  (let [owner (str "durability-" (random-uuid))
        parent-id (str owner "/parent")
        child-id (str parent-id "/child")
        child (assoc (creation child-id owner)
                     :parent {:workflow-id parent-id :seq 0 :policy :terminate})]
    (p/create-workflow! st (creation parent-id owner))
    (p/claim-runnable! st owner 1 0)
    (is (= :creation-conflict
           (:commit-status
             (p/commit-transition! st
               {:workflow-id parent-id :owner-id owner :kind :continue :events []
                :create-workflows [child (assoc-in child [:parent :seq] 1)]}))))
    (is (= :not-found (p/get-workflow-status st child-id)))
    (is (= 1 (count (p/load-history st parent-id))))))

(defn run-store-tests
  "Run durability regressions against any backend with isolated workflow IDs."
  [st]
  (testing "consumed signals stay deduplicated" (signal-dedup st))
  (testing "creation identity survives progress" (creation-identity st))
  (testing "cached history keeps other writes" (cache-concurrency st))
  (testing "child batches reject duplicate IDs" (duplicate-child-ids st)))

(deftest consumed-signal-stays-deduplicated
  (signal-dedup (store/create-store)))

(deftest creation-identity-survives-progress
  (creation-identity (store/create-store)))

(deftest cached-history-keeps-other-writes
  (cache-concurrency (store/create-store)))

(deftest child-batch-rejects-duplicate-ids
  (duplicate-child-ids (store/create-store)))
