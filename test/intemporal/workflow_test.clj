(ns intemporal.workflow-test
  (:require [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [intemporal.activity :as a]
            [intemporal.workflow :as w]
            [intemporal.store :as store]
            [intemporal.test-utils :as u]
            [intemporal.store.memory :as m])
  (:import [intemporal.annotations ActivityOptions]))

(def memstore (m/memory-store))

(defprotocol ActivityProtoExample
  (run [this arg])
  (query [this arg])
  (cancel [this]))

(defn run-side-effect [_] :side-effect)

(defrecord MyProtoImpl []
  ActivityProtoExample
  (run [this arg] (run-side-effect arg))
  (^{ActivityOptions {:idempotent true}} query [this arg] (run-side-effect arg))
  (^{ActivityOptions {:idempotent true}} cancel [_] :cancel))

(a/register-protocol ActivityProtoExample (->MyProtoImpl))

(defn my-workflow [arg]
  (let [stub (a/stub-protocol ActivityProtoExample)]
    (try
      (if (query stub :query)
        (run stub :run)
        nil)
      (catch Exception e
        (cancel stub)
        (throw e)))))

(w/register-workflow memstore my-workflow)

(defn- latest-rid []
  (let [events (@memstore :workflow-events)
        kvs    (get events 'intemporal.workflow-test/my-workflow)
        rid    (-> kvs keys first)]
    rid))

(deftest workflow-basic-test

  (testing "Happy path"
    (store/clear-events memstore)

    (is (= :side-effect (my-workflow "xx")))

    (testing "Store history"
      (let [rid  (latest-rid)
            data (store/find-workflow-run memstore rid)
            {:keys [workflow workflow-events]} data]

        ;; TODO why?
        ;;(is (= #'intemporal.workflow-test/my-workflow workflow))
        (is (= 6 (count workflow-events)))

        (testing "Workflow and activity events"
          (let [[e1 e2 e3 e4 e5 e6] workflow-events]

            (testing "all events are valid"
              (is (every? #(s/valid? ::u/event %) workflow-events)))

            (testing "workflow invoke"
              (is (u/alike? e1
                            {:type    ::w/invoke
                             :uid     'intemporal.workflow-test/my-workflow
                             :payload ["xx"]})))

            (testing "query invoke"
              (is (u/alike? e2
                            {:type    ::a/invoke
                             :uid     'intemporal.workflow-test/query
                             :payload [:query]})))

            (testing "query success"
              (is (u/alike? e3
                            {:type    ::a/success
                             :uid     'intemporal.workflow-test/query
                             :payload :side-effect
                             :deleted nil})))

            (testing "run invoke"
              (is (u/alike? e4
                            {:type    ::a/invoke
                             :uid     'intemporal.workflow-test/run
                             :payload [:run]})))

            (testing "run success"
              (is (u/alike? e5
                            {:type    ::a/success
                             :uid     'intemporal.workflow-test/run
                             :payload :side-effect
                             :deleted nil})))

            (testing "workflow success"
              (is (u/alike? e6
                            {:type    ::w/success
                             :uid     'intemporal.workflow-test/my-workflow
                             :payload :side-effect
                             :deleted nil})))))))))
