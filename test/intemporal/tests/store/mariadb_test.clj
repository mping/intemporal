(ns ^:integration intemporal.tests.store.mariadb-test
  "Integration test for the JdbcStore with MariaDB backend.
   Requires a running MariaDB instance (docker-compose up -d mariadb)."
  (:require [clojure.test :refer [deftest testing]]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.tests.store.test-suite :as suite]))

(deftest mariadb-store-test
  (testing "JDBC Store backed by MariaDB"
    (with-open [store (jdbc-store/create-store (jdbc-store/resolve-jdbc-url))]
      (suite/run-store-tests store))))
