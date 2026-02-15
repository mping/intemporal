(ns ^:integration intemporal.tests.store.fdb-test
  (:require [clojure.test :refer [deftest testing is]]
            [intemporal.store.fdb :as fdb-store]
            [intemporal.tests.store.test-suite :as suite]
            [me.vedang.clj-fdb.FDB :as cfdb]))

(deftest fdb-store-test
  (testing "FoundationDB Store Implementation"
    (let [db (cfdb/select-api-version 730)
          db (cfdb/open db)]

      ;; Run shared suite
      (with-open [store (fdb-store/make-fdb-store db "intemporal-tests")]
        (suite/run-store-tests store)))))
