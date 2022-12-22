(ns intemporal.workflow-fail-test
  #?(:clj  (:require [clojure.test :refer [deftest is testing use-fixtures]])
     :cljs (:require-macros [cljs.test :refer [deftest is testing use-fixtures]]))
  (:require [clojure.spec.alpha :as s]
            [intemporal.activity :as a]
            [intemporal.workflow :as w]
            [intemporal.store :as store]
            [intemporal.store.memory :as m]
            [spy.core :as spy]
            [spy.assert :as assert]
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

(defn- latest-rid [sym]
  (let [runs (store/list-workflow-runs store sym)]
    (last runs)))

(deftest workflow-retry-test

  (testing "Workflow fails if activity throws"
    (store/clear-events store)

    (with-redefs [run-side-effect (fn [v] (throw
                                            #?(:clj (RuntimeException. "error")
                                               :cljs (js/Error. "error"))))]
      (is (thrown? #?(:clj Exception :cljs js/Error) (my-workflow "xx")))

      (testing "History has failures"
        (testing "Store lookup by runid and workflow id"
          (let [wsym 'intemporal.workflow-fail-test/my-workflow
                [rid] (store/list-workflow-runs store)
                data  (store/find-workflow-run store rid)
                {:keys [workflow workflow-events]} data]

            (testing "workflow fn/var matches"
              (is (= workflow
                    #?(:clj  #'intemporal.workflow-fail-test/my-workflow
                       :cljs intemporal.workflow-fail-test/my-workflow))))

            (testing "workflow event count is 6 (w/invoke, a/invoke, a/failure, a/invoke, a/success, w/failure)"
              (is (= 6 (count workflow-events))))

            (testing "Workflow and activity events"
              (let [[e1 e2 e3 e4 e5 e6] workflow-events]

                (testing "all events are valid"
                  (is (every? #(s/valid? ::store/event %) workflow-events)))

                (testing "workflow invoke"
                  (is (tu/alike? e1
                        {:type    ::w/invoke
                         :uid     'intemporal.workflow-fail-test/my-workflow
                         :payload ["xx"]})))

                (testing "query invoke"
                  (is (tu/alike? e2
                        {:type    ::a/invoke
                         :uid     'intemporal.workflow-fail-test/query
                         :payload [:query]})))

                (testing "query failure"
                  (is (tu/alike? e3
                        {:type    ::a/failure
                         :uid     'intemporal.workflow-fail-test/query
                         :deleted nil
                         :payload #?(:clj RuntimeException :cljs js/Error)})))

                (testing "cancellation invoke"
                  (is (tu/alike? e4
                        {:type    ::a/invoke
                         :uid     'intemporal.workflow-fail-test/cancel
                         :deleted nil})))

                (testing "cancellation success"
                  (is (tu/alike? e5
                        {:type    ::a/success
                         :payload :cancel
                         :uid     'intemporal.workflow-fail-test/cancel
                         :deleted nil})))

                (testing "run invoke"
                  (is (tu/alike? e6
                        {:type    ::w/failure
                         :uid     'intemporal.workflow-fail-test/my-workflow
                         :payload #?(:clj RuntimeException :cljs js/Error)}))))))))))

  (testing "Workflow can be replayed and completed successfully"
    (let [rid (latest-rid 'intemporal.workflow-fail-test/my-workflow)]
      (is (= :side-effect (w/retry store my-workflow rid))))))


;;;;
;; compensation

(defn stateless-compensate [])

(defn my-compensated-workflow [_]
  (let [stub (a/stub-protocol ActivityProtoExample (->MyProtoImpl))]
    (w/add-compensation (fn [] (stateless-compensate)))
    (w/add-compensation (fn [] (cancel stub)))
    (try
      (run stub :run)
      (catch #?(:clj Exception :cljs js/Error) e
        (w/compensate)
        (throw e)))))

(w/register-workflow store my-compensated-workflow)

(deftest workflow-compensate-test

  (testing "Workflow fails if activity throws"
    (store/clear-events store)

    (with-redefs [run-side-effect      (fn [v] (throw #?(:clj (RuntimeException. "error")
                                                         :cljs (js/Error. "error"))))
                  stateless-compensate (spy/stub)]
      (is (thrown? #?(:clj Exception :cljs js/Error)  (my-compensated-workflow "xx")))

      (testing "Compensation was called"
        (is (assert/called-once? stateless-compensate)))

      (testing "Cancellation event was called through compensation"
        (let [wsym 'intemporal.workflow-fail-test/my-compensated-workflow
              rid  (latest-rid wsym)
              data (store/find-workflow-run store rid)
              {:keys [workflow workflow-events]} data]

          (comment
            :intemporal.workflow/invoke                     ;; 0
            :intemporal.activity/invoke                     ;; 1
            :intemporal.activity/failure                    ;; 2
            :intemporal.activity/invoke                     ;; 3 cancel invoke
            :intemporal.activity/success                    ;; 4 cancel success
            :intemporal.workflow/failure)

          (testing "cancellation success"
            (is (tu/alike? (get workflow-events 3)
                  {:type    ::a/invoke
                   :payload []
                   :uid     'intemporal.workflow-fail-test/cancel
                   :deleted nil})))

          (testing "cancellation success"
            (is (tu/alike? (get workflow-events 4)
                  {:type    ::a/success
                   :payload :cancel
                   :uid     'intemporal.workflow-fail-test/cancel
                   :deleted nil}))))))))


