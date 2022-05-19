(ns intemporal.activity-test
  (:require [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [intemporal.activity :as a]
            [intemporal.workflow :as w]
            [intemporal.store :as store]
            [intemporal.test-utils :as u])
  (:import [intemporal.annotations ActivityOptions]))

(defprotocol ActivityProtoExample
  (foo [this bar]))

(defn identity-activity-fn [arg]
  arg)

(defrecord MyProtoImpl []
  ActivityProtoExample
  ;; (Ab)use annotations to pass activity options
  (^{ActivityOptions {:idempotent true}} foo [_ bar] bar))

(deftest activity-test
  (testing "Can register activity functions"
    (a/register-function identity-activity-fn))

  (testing "Can register activity protocols"
    (a/register-protocol ActivityProtoExample (->MyProtoImpl)))

  (testing "Can call activity functions"
    (is (= {:some "val"} (identity-activity-fn {:some "val"})))

    (testing "Cannot call stubbed activity functions outside of a workflow function"
      (let [stub (a/stub-function identity-activity-fn)]
        (is (thrown? Error (stub "some-val")))))))

(defn wflow [arg]
  (let [stub (a/stub-function identity-activity-fn)]
    (stub arg)))

(deftest activity-with-workflow-test
  (store/clear store/memstore)
  (w/register-workflow store/memstore wflow)

  (testing "Can call stubbed activity functions within a workflow function"
    (is (= "xx" (wflow "xx")))

    (testing "Workflow history is OK"
      (let [events (@store/memstore :workflow-events)
            kvs    (get events 'intemporal.activity-test/wflow)
            rid    (-> kvs keys first)]

        (testing "A runid exists"
          (is (uuid? rid)))

        (testing "Store lookup by runid"
          (let [[w sym] (store/list-workflow store/memstore rid)]
            (println w sym)
            (is (= w 'intemporal.activity-test/wflow))
            (is (= sym #'wflow))))

        (testing "Store lookup by runid and workflow id"
          (let [data (store/list-workflow-run store/memstore 'intemporal.activity-test/wflow rid)
                {:keys [workflow workflow-events]} data]
            (is (= #'intemporal.activity-test/wflow workflow))
            (is (= 4 (count workflow-events)))

            (testing "Workflow and activity events are OK"
              (let [[e1 e2 e3 e4] workflow-events]

                (testing "all events are valid"
                  (is (every? #(s/valid? ::u/event %) workflow-events)))

                (testing "workflow invoke"
                  (is (= ::w/invoke (:type e1)))
                  (is (= 'intemporal.activity-test/wflow (:uid e1)))
                  (is (= ["xx"] (:payload e1)))
                  (is (nil? (:deleted e1))))

                (testing "activity invoke"
                  (is (= ::a/invoke (:type e2)))
                  (is (= 'intemporal.activity-test/identity-activity-fn (:uid e2)))
                  (is (= ["xx"] (:payload e2)))
                  (is (nil? (:deleted e2))))

                (testing "activity success"
                  (is (= ::a/success (:type e3)))
                  (is (= 'intemporal.activity-test/identity-activity-fn (:uid e3)))
                  (is (= "xx" (:payload e3)))
                  (is (nil? (:deleted e3))))

                (testing "workflow success"
                  (is (= ::w/success (:type e4)))
                  (is (= 'intemporal.activity-test/wflow (:uid e4)))
                  (is (= "xx" (:payload e4)))
                  (is (nil? (:deleted e4))))))))))))

