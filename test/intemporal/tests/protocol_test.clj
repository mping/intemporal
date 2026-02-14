(ns intemporal.tests.protocol-test
  (:require [intemporal.core :as intemporal]
            [clojure.test :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]]))

(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a] (println "record was called:" ) [a :child]))


;; Parallel workflow
(defn my-proto-flow [id]
  (println "Workflow start with id:" id)
  (let [res  (intemporal/stub-protocol MyActivities)]
    (println "After async calls - all scheduled")
    {:args    id
     :results (foo res 1)
     :id      id}))


(deftest test-stub-protocol-workflow
  (testing "Async workflow"
    (intemporal/with-workflow-engine [engine {:threads 4 :enable-logging true}]
      ;; Activities are automatically registered via stub call
      (let [result (intemporal/start-workflow engine my-proto-flow [999]
                                              :protocols {MyActivities (->MyActivitiesImpl)})]
        (is (match? {:status :completed
                     :result {:args 999, :results [1 :child], :id 999}}
                    result))))))

