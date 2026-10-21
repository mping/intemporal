(ns intemporal.tests.runtime.parallel-timeout-test
  (:require
   [clojure.test :refer [deftest is]]
   [intemporal.internal.runtime :as runtime]
   [intemporal.protocol :as p]))

(deftest timeout-does-not-wait-for-collection
  (let [executor (runtime/make-vthreads-executor
                   (atom {"first" {:fn #(do (Thread/sleep 300) :first)}
                          "second" {:fn #(do (Thread/sleep 100) :second)}}))]
    (try
      (let [[first-result second-result]
            (p/execute-activities-parallel executor
              [{:activity-name "first" :args [] :timeout-ms 1000}
               {:activity-name "second" :args [] :timeout-ms 10}])]
        (is (= :success (:status first-result)))
        (is (= :failed (:status second-result))))
      (finally (p/shutdown-executor executor 1)))))
