(ns ^:integration intemporal.tests.store.fdb-test
  (:require [clojure.test :refer [deftest testing is]]
            [intemporal.store.fdb :as fdb-store]
            [intemporal.tests.store.test-suite :as suite]
            [me.vedang.clj-fdb.FDB :as cfdb]
            [me.vedang.clj-fdb.core :as fdb]))

(deftest ^:integration fdb-store-test
  (testing "FoundationDB Store Implementation"
    (try
      (let [db (cfdb/select-api-version 730)
            db (cfdb/open db)]
        
        ;; Run shared suite
        (let [store (fdb-store/make-fdb-store db "intemporal-tests")]
          (suite/run-store-tests store)))
      (catch Exception e
        (if (re-find #"FoundationDB" (.getMessage e))
          (println "Skipping FoundationDB Store tests: FDB not available")
          (throw e))))))
