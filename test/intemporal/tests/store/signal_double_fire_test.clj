(ns intemporal.tests.store.signal-double-fire-test
  "Rapid signals are durable queue entries and produce one schedulable workflow,
  without any process-local callback state."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.store.fdb :as fdb-store]
   [intemporal.store.jdbc :as jdbc-store]
   [me.vedang.clj-fdb.FDB :as cfdb]
   [next.jdbc :as jdbc]))

(defn check-signals-queue-durably
  "Two signals wake one parked workflow once and remain FIFO data."
  [store]
  (let [wf-id    (str "sig-double-" (random-uuid))
        sig      "approval"
        now      (System/currentTimeMillis)]
    (p/save-event store wf-id {:event-type :workflow-started
                               :seq -1 :workflow-id wf-id :args []
                               :timestamp now})
    (let [claim (some #(when (= wf-id (:workflow-id %)) %)
                      (p/claim-runnable! store "signal-owner" 10000 now))]
      (is (some? claim))
      (is (= {:park-status :parked}
             (p/park-workflow! store wf-id (:wake-version claim) [] nil))))
    (p/add-signal store wf-id sig {:n 1})
    (p/add-signal store wf-id sig {:n 2})
    (let [claims (filterv #(= wf-id (:workflow-id %))
                          (p/claim-runnable! store "signal-owner" 10000
                                             (System/currentTimeMillis)))]
      (is (= 1 (count claims)) "one workflow is eligible, regardless of signal count")
      (is (empty? (filter #(= wf-id (:workflow-id %))
                          (p/claim-runnable! store "signal-owner" 10000
                                             (System/currentTimeMillis))))))
    (is (= {:n 1} (p/consume-signal store wf-id sig)))
    (is (= {:n 2} (p/consume-signal store wf-id sig)))
    (is (nil? (p/consume-signal store wf-id sig)))))

(deftest signal-double-fire-in-memory
  (testing "InMemoryStore: rapid signals create one runnable workflow"
    (check-signals-queue-durably (store/create-store))))

;; --- JDBC (mirrors jdbc_test.clj setup) ---

(def db-spec (jdbc-store/resolve-jdbc-url "jdbc:postgresql://localhost:5432/intemporal_test?user=root&password=root"))

(def admin-spec "jdbc:postgresql://localhost:5432/postgres?user=root&password=root")

(defn ensure-database! []
  (let [ds (jdbc/get-datasource admin-spec)]
    (when-not (seq (jdbc/execute! ds ["SELECT 1 FROM pg_database WHERE datname = 'intemporal_test'"]))
      (with-open [conn (.getConnection ds)]
        (.execute (.createStatement conn) "CREATE DATABASE intemporal_test")))))

(deftest ^:integration signal-double-fire-jdbc
  (testing "JdbcStore: rapid signals create one runnable workflow"
    (ensure-database!)
    (with-open [store (jdbc-store/create-store db-spec)]
      (check-signals-queue-durably store))))

;; --- FDB (mirrors fdb_test.clj setup) ---

(deftest ^:integration signal-double-fire-fdb
  (testing "FDBStore: rapid signals create one runnable workflow"
    (let [db (cfdb/select-api-version 710)
          db (cfdb/open db "docker/fdb.cluster")]
      (with-open [store (fdb-store/create-store db "intemporal-tests")]
        (check-signals-queue-durably store)))))
