(ns intemporal2.store-test
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal2.test-utils :as tu]
            [intemporal2.store :as s]
            [promesa.core :as p]))

(deftest basic-store-tests

  (testing "enqueue/dequeue"
    (let [store (s/make-memstore)
          task  (tu/make-workflow-task)]
      (s/enqueue-task store task)

      (testing "dequeueing updates state"
        (is (= (assoc task :state :pending)
               (s/dequeue-task store))))))

  (testing "await task"
    (let [store (s/make-memstore)
          task  (tu/make-workflow-task)
          prom  (p/vthread
                  (prn "awaiting...")
                  (s/await-task store (:id task) {:timeout-ms 1000}))]

      (-> prom
          (p/then (fn [res] (prn "OK" res)))
          (p/catch (fn [err] (is false (prn-str err)))))

      (s/enqueue-task store task)))


  (testing "watch task")

  (testing "transition task"))

