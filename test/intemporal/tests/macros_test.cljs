(ns intemporal.tests.macros-test
  (:require [intemporal.core :as intemporal]
            [clojure.test :refer [deftest is testing]]
            [intemporal.internal.context :as ctx]
            [promesa.core :as p])
  (:require-macros [intemporal.internal.context :as ctx :refer [blet bthen bfinally]]))

(deftest test-context-propagation-macros
  (testing "bthen and bfinally propagate context"
    (let [bthen-ctx (atom nil)
          bfinally-ctx (atom nil)
          done (p/deferred)]
      (let [engine (intemporal/make-workflow-engine :threads 2)
            my-wf (fn []
                    (let [prom (p/resolved :val)]
                      (-> (bthen prom (fn [v]
                                        (reset! bthen-ctx ctx/*workflow-context*)
                                        v))
                          (bfinally (fn [v e]
                                      (reset! bfinally-ctx ctx/*workflow-context*)
                                      (p/resolve! done true))))))
            result (intemporal/start-workflow engine my-wf [])]
        (is (= :completed (:status result)))
        ;; Wait for async handlers to complete
        (is (true? @done) "Handlers should complete")
        (is (some? @bthen-ctx) "Context should be present in bthen")
        (is (some? @bfinally-ctx) "Context should be present in bfinally"))))
  (testing "blet propagates context"
    (intemporal/with-workflow-engine [engine {:threads 1}])
    (let [blet-ctx (atom nil)
          done     (p/deferred)
          engine   (intemporal/make-workflow-engine :threads 2)
          my-wf    (fn []
                     (blet [a (p/resolved 1)
                            b (p/resolved 2)]
                           (reset! blet-ctx ctx/*workflow-context*)
                           (p/resolve! done true)
                           (+ a b)))
          result   (intemporal/start-workflow engine my-wf [])]
      (is (= :completed (:status result)))
      (is (true? @done) "Body should complete")
      (is (some? @blet-ctx) "Context should be present in blet body"))))
