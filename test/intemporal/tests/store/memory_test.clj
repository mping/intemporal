(ns intemporal.tests.store.memory-test
  (:require [clojure.test :refer [deftest testing]]
            [intemporal.store :as store]
            [intemporal.tests.store.test-suite :as suite]))

(deftest memory-store-test
  (testing "In-Memory Store Implementation"
    (let [store (store/->InMemoryStore (atom {}))]
      (suite/run-store-tests store))))
