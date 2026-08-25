(ns intemporal.tests.store.test-suite
  "Backend-neutral conformance checks for the FSM storage boundary.

   The old suite exercised the retired per-operation IStore API. This suite
   checks the only persistence contract the engine now has: create a workflow,
   claim it, and atomically commit an FSM transition."
  (:require
   [clojure.set :as set]
   [clojure.spec.alpha :as s]
   [clojure.string :as str]
   [clojure.test :refer [is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.spec :as spec]
   [matcher-combinators.test :refer [match?]]))

(defn test-activity [x] (* x 10))

(defn comprehensive-workflow [initial-value]
  (let [activity (intemporal/stub #'test-activity)
        activity-result (activity initial-value)
        async-result (intemporal/join
                       (intemporal/async #(activity (inc initial-value))))]
    (intemporal/sleep 50)
    {:activity-result activity-result
     :async-result async-result
     :signal-data (intemporal/wait-for-signal "approval")
     :initial-value initial-value}))

(defn- started-event [workflow-id]
  {:event-type :workflow-started
   :seq -1
   :workflow-id workflow-id
   :workflow-fn-name "intemporal.tests.store.test-suite/workflow"
   :args []
   :timestamp (System/currentTimeMillis)})

(defn- creation
  ([workflow-id owner-id]
   {:workflow-id workflow-id
    :owner-id owner-id
    :started-event (started-event workflow-id)})
  ([workflow-id owner-id parent]
   (assoc (creation workflow-id owner-id) :parent parent)))

(defn- claim [store owner-id workflow-id now]
  (some #(when (= workflow-id (:workflow-id %)) %)
        (p/claim-runnable! store owner-id 1000 now)))

(defn- park! [store workflow-id owner-id wake-version next-run-at]
  (p/commit-transition!
    store
    {:workflow-id workflow-id
     :owner-id owner-id
     :kind :park
     :expected-wake-version wake-version
     :events []
     :next-run-at next-run-at}))

(defn- run-fsm-contract-tests [store]
  (let [owner-id (str "conformance-owner-" (random-uuid))]
    (testing "creation is idempotent and exposes one consistent snapshot"
      (let [workflow-id (str "create-" (random-uuid))
            request (creation workflow-id owner-id)]
        (is (= :created (:create-status (p/create-workflow! store request))))
        (is (= :exists (:create-status (p/create-workflow! store request))))
        (is (= :conflict
               (:create-status
                 (p/create-workflow!
                   store
                   (assoc-in request [:started-event :args] [:different])))))
        (let [snapshot (p/load-snapshot store workflow-id)]
          (is (s/valid? ::spec/snapshot snapshot)
              (s/explain-str ::spec/snapshot snapshot))
          (is (= [:workflow-started] (mapv :event-type (:history snapshot))))
          (is (= :runnable (:run-state snapshot)))
          (is (= 1 (:history-revision snapshot))))))

    (testing "competing owners make disjoint durable claims"
      (let [prefix (str "claim-" (random-uuid))
            ids (mapv #(str prefix "-" %) (range 12))
            now (System/currentTimeMillis)]
        (doseq [workflow-id ids]
          (p/create-workflow! store (creation workflow-id "claim-seed")))
        ;; A released owner leaves work available for a different live engine.
        ;; The two engines below now race over exactly the same runnable rows.
        (p/release-owner! store "claim-seed")
        (let [ready (promise)
              get-claims (fn [owner]
                           @ready
                           (p/claim-runnable! store owner 1000 now))
              a (future (get-claims "claim-a"))
              b (future (get-claims "claim-b"))]
          (deliver ready true)
          (let [in-scope? #(str/starts-with? % prefix)
                a-ids (set (filter in-scope? (map :workflow-id @a)))
                b-ids (set (filter in-scope? (map :workflow-id @b)))]
            (is (empty? (set/intersection a-ids b-ids)))
            (is (= (set ids) (set/union a-ids b-ids)))))
        (p/release-owner! store "claim-a")
        (p/release-owner! store "claim-b")))

    (testing "owner-local work precedes unowned takeover work"
      (let [stale-id (str "takeover-" (random-uuid))
            owned-id (str "owned-" (random-uuid))
            priority-owner (str "priority-owner-" (random-uuid))
            now (System/currentTimeMillis)]
        (p/create-workflow! store (creation stale-id "departed-owner"))
        (p/release-owner! store "departed-owner")
        (p/create-workflow! store (creation owned-id priority-owner))
        (is (= owned-id
               (:workflow-id
                 (first (p/claim-runnable! store priority-owner 1 now)))))))

    (testing "park, wake, requeue, and recovery use durable revisions"
      (let [workflow-id (str "scheduling-" (random-uuid))
            now (System/currentTimeMillis)
            future-at (+ now 60000)]
        (p/create-workflow! store (creation workflow-id owner-id))
        (let [{:keys [wake-version]} (claim store owner-id workflow-id now)]
          (is (= :committed
                 (:commit-status (park! store workflow-id owner-id wake-version nil))))
          (is (nil? (claim store owner-id workflow-id now)))
          (is (= :woken (:wake-status (p/wake! store workflow-id))))
          (is (some? (claim store owner-id workflow-id now)))
          (is (true? (p/requeue-running! store workflow-id owner-id)))
          (is (some? (claim store owner-id workflow-id now)))
          ;; Other conformance cases may already have a claim held by this
          ;; owner. Recovery must include this drive, not depend on a global
          ;; empty-store count.
          (is (pos? (p/recover-running! store owner-id)))
          (is (some? (claim store owner-id workflow-id now)))
          (is (true? (p/requeue-running! store workflow-id owner-id))))
        (let [{:keys [wake-version]} (claim store owner-id workflow-id now)]
          (is (= :committed
                 (:commit-status (park! store workflow-id owner-id wake-version future-at))))
          (is (nil? (claim store owner-id workflow-id now)))
          (is (some? (claim store owner-id workflow-id (inc future-at)))))))

    (testing "signals are workflow-wide FIFO data consumed by a guarded transition"
      (let [workflow-id (str "signals-" (random-uuid))
            now (System/currentTimeMillis)]
        (p/create-workflow! store (creation workflow-id owner-id))
        (let [{:keys [wake-version]} (claim store owner-id workflow-id now)]
          (is (= :committed
                 (:commit-status (park! store workflow-id owner-id wake-version nil)))))
        (is (= :accepted (:signal-status
                           (p/add-signal! store workflow-id "go"
                                          {:signal-id "one" :payload {:n 1}}))))
        (is (= :duplicate (:signal-status
                            (p/add-signal! store workflow-id "go"
                                           {:signal-id "one" :payload {:n 1}}))))
        (is (= :accepted (:signal-status
                           (p/add-signal! store workflow-id "go"
                                          {:signal-id "two" :payload {:n 2}}))))
        (claim store owner-id workflow-id now)
        (let [consume {:signal-name "go" :queue-id 0 :signal-id "one"}
              state (p/load-workflow-state store workflow-id)]
          (is (= ["one" "two"]
                 (mapv :signal-id (get-in state [:signals "go"]))))
          (is (= :committed
                 (:commit-status
                   (p/commit-transition!
                     store
                     {:workflow-id workflow-id
                      :owner-id owner-id
                      :kind :continue
                      :events [{:event-type :signal-received :seq 0
                                :signal-name "go" :signal-id "one" :payload {:n 1}}]
                      :consume-signals [consume]}))))
          (is (= ["two"]
                 (mapv :signal-id
                       (get-in (p/load-workflow-state store workflow-id)
                               [:signals "go"])))))))

    (testing "a terminal transition atomically closes children"
      (let [parent-id (str "parent-" (random-uuid))
            child-id (str parent-id "/child")
            now (System/currentTimeMillis)]
        (p/create-workflow! store (creation parent-id owner-id))
        (claim store owner-id parent-id now)
        (is (= :committed
               (:commit-status
                 (p/commit-transition!
                   store
                   {:workflow-id parent-id
                    :owner-id owner-id
                    :kind :continue
                    :events [{:event-type :child-workflow-scheduled :seq 0
                              :child-workflow-id child-id}]
                    :create-workflows [(creation child-id owner-id
                                                 {:workflow-id parent-id
                                                  :seq 0
                                                  :policy :terminate})]}))))
        (let [tree (p/load-close-tree store parent-id)
              revisions (into {} (map (juxt :workflow-id :revision))
                              (cons tree (:children tree)))]
          (is (= :committed
                 (:commit-status
                   (p/commit-transition!
                     store
                     {:workflow-id parent-id
                      :owner-id owner-id
                      :kind :terminal
                      :events [{:event-type :workflow-completed :seq 1 :result :done}]
                      :terminal-status :completed
                      :expected-related-revisions revisions
                      :close-actions [{:op :terminate
                                       :workflow-id child-id
                                       :terminal-status :terminated
                                       :events [{:event-type :workflow-terminated :seq 0}]}]}))))
          (is (= :completed (p/get-workflow-status store parent-id)))
          (is (= :terminated (p/get-workflow-status store child-id)))))
    (p/release-owner! store owner-id))))

(defn run-store-tests [store]
  (s/check-asserts true)
  (run-fsm-contract-tests store)
  (testing "the engine executes an FSM-backed workflow against this backend"
    (let [owner-id (str "execution-owner-" (random-uuid))
          workflow-id (str "execution-" (random-uuid))
          engine (intemporal/start-engine :store store :owner-id owner-id :threads 2)]
      (try
        (let [result-future (future
                              (intemporal/start-workflow engine comprehensive-workflow [5]
                                                         :workflow-id workflow-id))]
          (Thread/sleep 100)
          (intemporal/send-signal store workflow-id "approval" {:approved true}
                                   :signal-id "approval-1")
          (is (match? {:status :completed
                       :result {:activity-result 50
                                :async-result 60
                                :signal-data {:approved true}}}
                      @result-future)))
        (finally
          (intemporal/shutdown-engine engine))))))
