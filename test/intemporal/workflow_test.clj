(ns intemporal.workflow-test
  (:require [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [intemporal.activity :as a]
            [intemporal.workflow :as w]
            [intemporal.store :as store]
            [intemporal.test-utils :as u]
            [spy.core :as spy]
            [spy.assert :as assert])
  (:import [intemporal.annotations ActivityOptions]))

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

(w/register-workflow store/memstore my-workflow)

(defn- latest-rid []
  (let [events (@store/memstore :workflow-events)
        kvs    (get events 'intemporal.workflow-test/my-workflow)
        rid    (-> kvs keys first)]
    rid))

(deftest workflow-basic-test

  (testing "Can call stubbed activity functions within a workflow function"
    (store/clear-events store/memstore)

    (is (= :side-effect (my-workflow "xx")))

    (testing "Workflow and activity history"
      (testing "Store lookup by runid and workflow id"
        (let [rid  (latest-rid)
              data (store/list-workflow-run store/memstore 'intemporal.workflow-test/my-workflow rid)
              {:keys [workflow workflow-events]} data]

          (is (= #'intemporal.workflow-test/my-workflow workflow))
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
                       :deleted nil}))))))))))

;; TODO writeme
(deftest workflow-retry-test

  (store/clear store/memstore)

  (testing "workflow fails if activity throws"
    (with-redefs [run-side-effect (fn [v] (throw (RuntimeException. "error")))]
      (is (thrown? Exception (my-workflow "xx")))

      (testing "history has failures"
        (testing "Store lookup by runid and workflow id"
          (let [rid  (latest-rid)
                data (store/list-workflow-run store/memstore 'intemporal.workflow-test/my-workflow rid)
                {:keys [workflow workflow-events]} data]

            ;; TODO why? (is (= #'intemporal.workflow-test/my-workflow workflow))
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

                (testing "query failure"
                  (is (u/alike? e3
                        {:type    ::a/failure
                         :uid     'intemporal.workflow-test/query
                         :deleted nil
                         :payload RuntimeException})))

                (testing "cancellation invoke"
                  (is (u/alike? e4
                        {:type    ::a/invoke
                         :uid     'intemporal.workflow-test/cancel
                         :deleted nil})))

                (testing "cancellation success"
                  (is (u/alike? e5
                        {:type    ::a/success
                         :payload :cancel
                         :uid     'intemporal.workflow-test/cancel
                         :deleted nil})))

                (testing "run invoke"
                  (is (u/alike? e6
                        {:type    ::w/failure
                         :uid     'intemporal.workflow-test/my-workflow
                         :payload RuntimeException})))))))))))

;; TODO writeme
(deftest workflow-replay-test)

;; TODO writeme
(deftest workflow-compensation-test)

