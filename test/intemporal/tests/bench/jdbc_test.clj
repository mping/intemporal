(ns ^:integration intemporal.tests.bench.jdbc-test
  (:require [clojure.test :refer [deftest testing]]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.tests.bench.test-suite :as suite]
            [next.jdbc :as jdbc]))

(def db-spec (jdbc-store/resolve-jdbc-url "jdbc:postgresql://localhost:5432/intemporal_test?user=root&password=root"))

(def admin-spec "jdbc:postgresql://localhost:5432/postgres?user=root&password=root")

(defn ensure-database! []
  (let [ds (jdbc/get-datasource admin-spec)]
    (when-not (seq (jdbc/execute! ds ["SELECT 1 FROM pg_database WHERE datname = 'intemporal_test'"]))
      (with-open [conn (.getConnection ds)]
        (.execute (.createStatement conn) "CREATE DATABASE intemporal_test")))))

(deftest jdbc-store-test
  (testing "JDBC Store Implementation"
    (ensure-database!)
    (with-open [store (jdbc-store/create-store db-spec)]
      (suite/run-store-tests store 1))))

(comment
  (ensure-database!)
  (time
    ;; 1000 => 3s
    ;; 10_000 => ~800MB, 13s
    ;; 100_000 => timeouts
    (suite/run-store-tests (jdbc-store/create-store db-spec) 100000))
  "")