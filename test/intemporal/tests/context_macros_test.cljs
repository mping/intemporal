(ns intemporal.tests.context-macros-test
  (:require-macros
   [intemporal.internal.context :as ctx :refer [bfinally blet bthen]]
   [intemporal.tests.utils :refer [with-result]])
  (:require
   [cljs.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.internal.context :as ctx]
   [intemporal.tests.utils :as utils]
   [promesa.core :as p]))

(deftest test-bthen-bfinally-propagation
  (testing "bthen and bfinally propagate context"
    (let [bthen-ctx (atom nil)
          bfinally-ctx (atom nil)
          engine (intemporal/make-workflow-engine :threads 2)
          my-wf (fn []
                  (let [prom (p/resolved :val)]
                    (-> (bthen prom (fn [v]
                                      (reset! bthen-ctx ctx/*workflow-context*)
                                      v))
                        (bfinally (fn [v e]
                                    (reset! bfinally-ctx ctx/*workflow-context*)
                                    v)))))]
      (with-result [result (intemporal/start-workflow engine my-wf [])]
        (is (= :completed (:status result)))
        (is (some? @bthen-ctx) "Context should be present in bthen")
        (is (some? @bfinally-ctx) "Context should be present in bfinally")
        (intemporal/shutdown-engine engine)))))

(deftest test-blet-propagation
  (testing "blet propagates context"
    (let [blet-ctx (atom nil)
          engine (intemporal/make-workflow-engine :threads 2)
          my-wf (fn []
                  (blet [a (p/resolved 1)
                         b (p/resolved 2)]
                    (reset! blet-ctx ctx/*workflow-context*)
                    (+ a b)))]
      (with-result [result (intemporal/start-workflow engine my-wf [])]
        (is (= :completed (:status result)))
        (is (some? @blet-ctx) "Context should be present in blet body")
        (intemporal/shutdown-engine engine)))))

(deftest test-regular-plet
  (testing "blet propagates context"
    (let [engine (intemporal/make-workflow-engine :threads 2)
          my-wf (fn []
                  (p/let [a (p/resolved 1)
                          b (p/resolved 2)]
                    (p/promise (+ a b))))]
      (with-result [result (intemporal/start-workflow engine my-wf [])]
        (is (= :completed (:status result)))
        (is (= 3 (:result result)) "Context should be present in blet body")
        (intemporal/shutdown-engine engine)))))
