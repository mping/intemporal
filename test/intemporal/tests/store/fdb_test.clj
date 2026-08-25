(ns intemporal.tests.store.fdb-test
  {:integration true}
  (:require
   [clojure.test :refer [deftest testing]]
   [intemporal.store.fdb :as fdb-store]
   [intemporal.tests.store.test-suite :as suite]
   [me.vedang.clj-fdb.FDB :as cfdb]))

(deftest fdb-store-test
  (testing "FoundationDB Store Implementation"
    (let [db (cfdb/select-api-version 710)
          db (cfdb/open db "docker/fdb.cluster")]

      ;; Run shared suite
      ;; Keep this conformance run isolated.  The FSM store is deliberately
      ;; non-destructive, so reusing one FDB subspace makes each run scan and
      ;; contend with every workflow created by previous test runs.
      (with-open [store (fdb-store/create-store db (str "intemporal-tests-" (random-uuid)))]
        (suite/run-store-tests store)))))
