(ns intemporal.tests.store.signal-double-fire-test
  "Rapid signals are FSM queue entries: they wake one durable workflow while
   retaining FIFO envelopes for the claimed transition to consume."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.store.fdb :as fdb-store]
   [intemporal.store.jdbc :as jdbc-store]
   [me.vedang.clj-fdb.FDB :as cfdb]
   [next.jdbc :as jdbc]))

(defn- creation [workflow-id owner-id]
  {:workflow-id workflow-id
   :owner-id owner-id
   :started-event {:event-type :workflow-started :seq -1 :workflow-id workflow-id :args []
                   :workflow-fn-name "signal-double-fire"}})

(defn- claim [store owner-id workflow-id now]
  (some #(when (= workflow-id (:workflow-id %)) %)
        (p/claim-runnable! store owner-id 10000 now)))

(defn- consume! [store workflow-id owner-id seq-num signal-id payload]
  (p/commit-transition!
    store
    {:workflow-id workflow-id
     :owner-id owner-id
     :kind :continue
     :events [{:event-type :signal-received :seq seq-num :signal-name "approval"
               :signal-id signal-id :payload payload}]
     :consume-signals [{:signal-name "approval" :queue-id seq-num :signal-id signal-id}]}))

(defn check-signals-queue-durably
  "Two signals wake one parked workflow once and remain FIFO FSM data."
  [store]
  (let [workflow-id (str "sig-double-" (random-uuid))
        owner-id "signal-owner"
        now (System/currentTimeMillis)]
    (p/create-workflow! store (creation workflow-id owner-id))
    (let [{:keys [wake-version]} (claim store owner-id workflow-id now)]
      (is (= :committed
             (:commit-status
               (p/commit-transition!
                 store
                 {:workflow-id workflow-id :owner-id owner-id :kind :park
                  :expected-wake-version wake-version :events [] :next-run-at nil})))))
    (is (= :accepted (:signal-status
                       (p/add-signal! store workflow-id "approval"
                                      {:signal-id "one" :payload {:n 1}}))))
    (is (= :accepted (:signal-status
                       (p/add-signal! store workflow-id "approval"
                                      {:signal-id "two" :payload {:n 2}}))))
    (let [claims (filterv #(= workflow-id (:workflow-id %))
                          (p/claim-runnable! store owner-id 10000 now))]
      (is (= 1 (count claims)) "one workflow is eligible regardless of signal count")
      (is (empty? (filter #(= workflow-id (:workflow-id %))
                          (p/claim-runnable! store owner-id 10000 now)))))
    (is (= ["one" "two"]
           (mapv :signal-id (get-in (p/load-workflow-state store workflow-id)
                                     [:signals "approval"]))))
    (is (= :committed (:commit-status (consume! store workflow-id owner-id 0 "one" {:n 1}))))
    (is (= :committed (:commit-status (consume! store workflow-id owner-id 1 "two" {:n 2}))))
    (is (empty? (get-in (p/load-workflow-state store workflow-id) [:signals "approval"])))
    (p/release-owner! store owner-id)))

(deftest signal-double-fire-in-memory
  (testing "InMemoryStore: rapid signals create one runnable workflow"
    (check-signals-queue-durably (store/create-store))))

(def db-spec (jdbc-store/resolve-jdbc-url "jdbc:postgresql://localhost:5432/intemporal_fsm_test?user=root&password=root"))
(def admin-spec "jdbc:postgresql://localhost:5432/postgres?user=root&password=root")

(defn ensure-database! []
  (let [ds (jdbc/get-datasource admin-spec)]
    (when-not (seq (jdbc/execute! ds ["SELECT 1 FROM pg_database WHERE datname = 'intemporal_fsm_test'"]))
      (with-open [conn (.getConnection ds)]
        (.execute (.createStatement conn) "CREATE DATABASE intemporal_fsm_test")))))

(deftest ^:integration signal-double-fire-jdbc
  (testing "JdbcStore: rapid signals create one runnable workflow"
    (ensure-database!)
    (with-open [store (jdbc-store/create-store db-spec)]
      (check-signals-queue-durably store))))

(deftest ^:integration signal-double-fire-fdb
  (testing "FDBStore: rapid signals create one runnable workflow"
    (let [db (cfdb/select-api-version 710)
          db (cfdb/open db "docker/fdb.cluster")]
      (with-open [store (fdb-store/create-store db (str "signal-double-fire-" (random-uuid)))]
        (check-signals-queue-durably store)))))
