(ns ^:integration intemporal.tests.store.jdbc-test
  (:require [clojure.test :refer [deftest testing is]]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.tests.store.test-suite :as suite]
            [next.jdbc :as jdbc]))

;; Default to a local postgres if not specified
(def db-spec (or (System/getenv "DATABASE_URL")
                 "jdbc:postgresql://localhost:5432/intemporal_test?user=root&password=root"))

(def admin-spec "jdbc:postgresql://localhost:5432/postgres?user=root&password=root")

(defn ensure-database! []
  (let [ds (jdbc/get-datasource admin-spec)]
    (when-not (seq (jdbc/execute! ds ["SELECT 1 FROM pg_database WHERE datname = 'intemporal_test'"]))
      (with-open [conn (.getConnection ds)]
        (.execute (.createStatement conn) "CREATE DATABASE intemporal_test")))))

(deftest jdbc-store-test
  (testing "JDBC Store Implementation"
    (try
      (ensure-database!)
      (let [ds (jdbc/get-datasource db-spec)]
        ;; Initialize schema
        (jdbc-store/create-schema! ds)

        ;; Run shared suite
        (let [store (jdbc-store/make-jdbc-store ds)]
          (suite/run-store-tests store)))
      (catch Exception e
        (if (and (instance? java.sql.SQLException e)
                 (re-find #"Connection refused" (.getMessage e)))
          (println "Skipping JDBC Store tests: PostgreSQL not available at" db-spec)
          (throw e))))))
