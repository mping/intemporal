(ns intemporal.workflow-test
  (:require [clojure.test :refer :all]
            [intemporal.activity :as a]
            [intemporal.workflow :as w]
            [intemporal.store :as s])
  (:import [intemporal.annotations ActivityOptions]))

(defprotocol ActivityProtoExample
  (run [this arg])
  (cancel [this]))

(defn run-side-effect [arg] :side-effect)

(defrecord MyProtoImpl []
  ActivityProtoExample
  (run [this arg] (run-side-effect arg))
  (^{ActivityOptions {:idempotent true}} cancel [_ ] :cancel))

(a/register-protocol ActivityProtoExample (->MyProtoImpl))

(defn my-workflow [arg]
  (let [stub (a/stub-protocol ActivityProtoExample)]
    (try
      (run stub arg)
      (catch Exception e
        (cancel stub)
        (throw e)))))


(deftest workflow-basic-test
  (s/clear s/memstore)
  (w/register-workflow s/memstore my-workflow)

  (testing "Can call stubbed activity functions within a workflow function"
    (is (= :side-effect (my-workflow "xx")))))

;; TODO writeme
(deftest workflow-retry-test)

;; TODO writeme
(deftest workflow-compensation-test)

