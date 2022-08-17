(ns intemporal.workflow-fail-test
  (:require [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [intemporal.activity :as a]
            [intemporal.workflow :as w]
            [intemporal.store :as store]
            [intemporal.test-utils :as u]
            [intemporal.store.memory :as m]
            [spy.core :as spy]
            [spy.assert :as assert])
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

(defn- latest-rid [sym]
  (let [events (@memstore :workflow-events)
        kvs    (get events sym)
        rid    (-> kvs keys first)]
    rid))

(deftest workflow-retry-test

  (testing "Workflow fails if activity throws"
    (store/clear-events memstore)

    (with-redefs [run-side-effect (fn [v] (throw (RuntimeException. "error")))]
      (is (thrown? Exception (my-workflow "xx")))

      (testing "History has failures"
        (testing "Store lookup by runid and workflow id"
          (let [wsym 'intemporal.workflow-fail-test/my-workflow
                rid  (latest-rid wsym)
                data (store/find-workflow-run memstore rid)
                {:keys [workflow workflow-events]} data]

            ;; TODO why? (is (= #'intemporal.workflow-fail-test/my-workflow workflow))
            (is (= 6 (count workflow-events)))

            (testing "Workflow and activity events"
              (let [[e1 e2 e3 e4 e5 e6] workflow-events]

                (testing "all events are valid"
                  (is (every? #(s/valid? ::store/event %) workflow-events)))

                (testing "workflow invoke"
                  (is (u/alike? e1
                        {:type    ::w/invoke
                         :uid     'intemporal.workflow-fail-test/my-workflow
                         :payload ["xx"]})))

                (testing "query invoke"
                  (is (u/alike? e2
                        {:type    ::a/invoke
                         :uid     'intemporal.workflow-fail-test/query
                         :payload [:query]})))

                (testing "query failure"
                  (is (u/alike? e3
                        {:type    ::a/failure
                         :uid     'intemporal.workflow-fail-test/query
                         :deleted nil
                         :payload RuntimeException})))

                (testing "cancellation invoke"
                  (is (u/alike? e4
                        {:type    ::a/invoke
                         :uid     'intemporal.workflow-fail-test/cancel
                         :deleted nil})))

                (testing "cancellation success"
                  (is (u/alike? e5
                        {:type    ::a/success
                         :payload :cancel
                         :uid     'intemporal.workflow-fail-test/cancel
                         :deleted nil})))

                (testing "run invoke"
                  (is (u/alike? e6
                        {:type    ::w/failure
                         :uid     'intemporal.workflow-fail-test/my-workflow
                         :payload RuntimeException}))))))))))

  (testing "Workflow can be replayed and completed successfully"
    (let [rid (latest-rid 'intemporal.workflow-fail-test/my-workflow)]
      (is (= :side-effect (w/retry memstore my-workflow rid))))))


;;;;
;; compensation

(defn stateless-compensate [])

(defn my-compensated-workflow [_]
  (let [stub (a/stub-protocol ActivityProtoExample)]
    (w/add-compensation (fn [] (stateless-compensate)))
    (w/add-compensation (fn [] (cancel stub)))
    (try
      (run stub :run)
      (catch Exception e
        (w/compensate)
        (throw e)))))

(w/register-workflow memstore my-compensated-workflow)

(deftest workflow-compensate-test

  (testing "Workflow fails if activity throws"
    (store/clear-events memstore)

    (with-redefs [run-side-effect      (fn [v] (throw (RuntimeException. "error")))
                  stateless-compensate (spy/stub)]
      (is (thrown? Exception (my-compensated-workflow "xx")))

      (testing "Compensation was called"
        (is (assert/called-once? stateless-compensate)))

      (testing "Cancellation event was called through compensation"
        (let [wsym 'intemporal.workflow-fail-test/my-compensated-workflow
              rid  (latest-rid wsym)
              data (store/find-workflow-run memstore rid)
              {:keys [workflow workflow-events]} data]

          (comment
            :intemporal.workflow/invoke                     ;; 0
            :intemporal.activity/invoke                     ;; 1
            :intemporal.activity/failure                    ;; 2
            :intemporal.activity/invoke                     ;; 3 cancel invoke
            :intemporal.activity/success                    ;; 4 cancel success
            :intemporal.workflow/failure)

          (testing "cancellation success"
            (is (u/alike? (get workflow-events 3)
                  {:type    ::a/invoke
                   :payload []
                   :uid     'intemporal.workflow-fail-test/cancel
                   :deleted nil})))

          (testing "cancellation success"
            (is (u/alike? (get workflow-events 4)
                  {:type    ::a/success
                   :payload :cancel
                   :uid     'intemporal.workflow-fail-test/cancel
                   :deleted nil}))))))))


