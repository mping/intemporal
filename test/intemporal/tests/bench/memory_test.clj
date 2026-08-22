(ns intemporal.tests.bench.memory-test
  (:require
   [clojure.test :refer [deftest testing]]
   [intemporal.store :as store]
   [intemporal.tests.bench.test-suite :as suite]))

(deftest memory-store-test
  (testing "In-Memory Store Implementation"
    (let [store (store/create-store)]
      (suite/run-store-tests store 1))))

(comment
  (time
    ;; 100k => 3GB, 10s
    (suite/run-store-tests (store/create-store) 100000))
  "")
