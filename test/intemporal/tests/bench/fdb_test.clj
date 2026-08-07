(ns ^:integration intemporal.tests.bench.fdb-test
  (:require [clojure.test :refer [deftest testing]]
            [intemporal.store.fdb :as fdb-store]
            [intemporal.tests.bench.test-suite :as suite]
            [me.vedang.clj-fdb.FDB :as cfdb]))

(deftest fdb-store-test
  (testing "FoundationDB Store Implementation"
    (let [db (cfdb/select-api-version 710)
          db (cfdb/open db "docker/fdb.cluster")]

      ;; Run shared suite
      (with-open [store (fdb-store/create-store db "intemporal-tests")]
        (suite/run-store-tests store 1)))))


(comment
  (time
    ;; 1k => ~1s
    ;; 10k => ~5s
    ;; 100k => 6GB, 53s
    (suite/run-store-tests (fdb-store/create-store (cfdb/open (cfdb/select-api-version 710) "docker/fdb.cluster") "intemporal-tests") 100000))
  "")