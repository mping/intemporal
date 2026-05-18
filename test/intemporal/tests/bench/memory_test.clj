(ns intemporal.tests.bench.memory-test
  (:require [clojure.test :refer [deftest testing]]
            [intemporal.store :as store]
            [intemporal.tests.bench.test-suite :as suite]))

(deftest memory-store-test
  (testing "In-Memory Store Implementation"
    (let [store (store/->InMemoryStore (atom {}))]
      (suite/run-store-tests store 1))))

(comment
  (time
    ;; 100k => 3GB, 10s
    (run-store-tests (store/->InMemoryStore (atom {})) 100000))
  "")