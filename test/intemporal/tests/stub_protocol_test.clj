(ns intemporal.tests.stub-protocol-test
  (:require [intemporal.core :as intemporal]
            [clojure.test :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]]))

(defprotocol MyProto
  (my-method [this x]))

(defrecord MyProtoImpl []
  MyProto
  (my-method [this x]
    (println "Executing MyProtoImpl/my-method with" x)
    (* x 2)))

(defn my-workflow [id]
  (let [proto-stub (intemporal/stub-protocol MyProto)
        res (my-method proto-stub id)]
    {:result res}))

(deftest test-stub-protocol
  (testing "Protocol stubbing via :protocols map"
    (intemporal/with-workflow-engine [engine {:enable-logging true}]
      (let [result (intemporal/start-workflow engine my-workflow [21]
                                              :protocols {MyProto (->MyProtoImpl)})]
        (is (match? {:status :completed
                     :result {:result 42}}
                    result))))))
