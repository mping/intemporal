(ns intemporal.workflow-test
  #?(:clj  (:require [clojure.test :refer [deftest is testing use-fixtures]])
     :cljs (:require-macros [cljs.test :refer [deftest is testing use-fixtures]]))
  (:require [clojure.spec.alpha :as s]
            [intemporal.activity :as a]
            [intemporal.workflow :as w]
            [intemporal.store :as store]
            [intemporal.store.memory :as m]
            [intemporal.test-utils :as tu]))

;; TODO parameterize
(def store #?(:clj (tu/make-sql-store) :cljs (m/memory-store)))

(use-fixtures :each (fn [f]
                      (f)
                      (println (store/events->table store))
                      (println (store/registrations->table store))))

(defprotocol ActivityProtoExample
  (run [this arg])
  (query [this arg])
  (cancel [this]))

(defn run-side-effect [_] :side-effect)

(defrecord MyProtoImpl []
  ActivityProtoExample
  (run [this arg] (run-side-effect arg))
  (query [this arg] (run-side-effect arg))
  (cancel [_] :cancel))

(defn my-workflow [arg]
  (let [stub (a/stub-protocol ActivityProtoExample (->MyProtoImpl) {:idempotent true})]
    (try
      (if (query stub :query)
        (run stub :run)
        nil)
      (catch #?(:clj Exception :cljs js/Error) e
        (cancel stub)
        (throw e)))))

(w/register-workflow store my-workflow)

(deftest workflow-basic-test

  (testing "Happy path"
    (store/clear-events store)

    (is (= :side-effect (my-workflow "xx")))

    (testing "Store history"
      (let [[rid] (store/list-workflow-runs store)
            data (store/find-workflow-run store rid)
            {:keys [workflow workflow-events]} data]

        (is (= #?(:clj #'intemporal.workflow-test/my-workflow :cljs my-workflow) workflow))
        (is (= 6 (count workflow-events)))

        (testing "Workflow and activity events"
          (let [[e1 e2 e3 e4 e5 e6] workflow-events]

            (testing "all events are valid"
              (is (every? #(s/valid? ::store/event %) workflow-events)))

            (testing "workflow invoke"
              (is (tu/alike? e1
                            {:type    ::w/invoke
                             :uid     'intemporal.workflow-test/my-workflow
                             :payload ["xx"]})))

            (testing "query invoke"
              (is (tu/alike? e2
                            {:type    ::a/invoke
                             :uid     'intemporal.workflow-test/query
                             :payload [:query]})))

            (testing "query success"
              (is (tu/alike? e3
                            {:type    ::a/success
                             :uid     'intemporal.workflow-test/query
                             :payload :side-effect
                             :deleted nil})))

            (testing "run invoke"
              (is (tu/alike? e4
                            {:type    ::a/invoke
                             :uid     'intemporal.workflow-test/run
                             :payload [:run]})))

            (testing "run success"
              (is (tu/alike? e5
                            {:type    ::a/success
                             :uid     'intemporal.workflow-test/run
                             :payload :side-effect
                             :deleted nil})))

            (testing "workflow success"
              (is (tu/alike? e6
                            {:type    ::w/success
                             :uid     'intemporal.workflow-test/my-workflow
                             :payload :side-effect
                             :deleted nil})))))))))