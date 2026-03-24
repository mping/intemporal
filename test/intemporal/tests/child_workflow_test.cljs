(ns intemporal.tests.child-workflow-test
  (:require [intemporal.core :as intemporal]
            [intemporal.tests.utils :refer [with-result]]
            [cljs.test :as t :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]])
  (:require-macros [intemporal.tests.utils :refer [with-result]]))

(defn activity-fn [arg]
  [:processed arg])

;; Child workflow
(defn child-flow [x]
  (let [act (intemporal/stub #'activity-fn)]
    {:child-result (act x)}))

;; Parent workflow
(defn parent-flow [id]
  (let [act          (intemporal/stub #'activity-fn)
        child-result (intemporal/run-child-workflow child-flow [(* id 10)])]
    {:parent-result (act id)
     :child         child-result}))

;; Nested child workflows
(defn grandchild-flow [x]
  (let [act (intemporal/stub #'activity-fn)]
    {:grandchild (act x)}))

(defn child-with-child-flow [x]
  (let [act       (intemporal/stub #'activity-fn)
        gc-result (intemporal/run-child-workflow grandchild-flow [(* x 100)])]
    {:child-result      (act x)
     :grandchild-result gc-result}))

(defn nested-parent-flow [id]
  (let [act          (intemporal/stub #'activity-fn)
        child-result (intemporal/run-child-workflow child-with-child-flow [(* id 10)])]
    {:parent-result (act id)
     :nested-child  child-result}))

(deftest test-simple-child-workflow
  (testing "Parent workflow can run child workflow"
    (let [engine (intemporal/make-workflow-engine :threads 2)]
      (with-result [result (intemporal/start-workflow engine parent-flow [5])]
        (is (match? {:status      :completed
                     :workflow-id string?
                     :result      {:parent-result [:processed 5]
                                   :child         {:child-result [:processed 50]}}}
                    result))))))

(deftest test-nested-child-workflows
  (testing "Child workflows can have their own child workflows"
    (let [engine (intemporal/make-workflow-engine :threads 2)]
      (with-result [result (intemporal/start-workflow engine nested-parent-flow [3])]
        (is (match? {:status :completed
                     :result {:parent-result [:processed 3]
                              :nested-child  {:child-result      [:processed 30]
                                              :grandchild-result {:grandchild [:processed 3000]}}}}
                    result))))))

(deftest test-child-workflow-with-error
  (testing "Parent handles child workflow errors"
    (let [failing-child     (fn [x]
                              (throw (ex-info "Child failed" {:x x})))
          parent-with-error (fn [id]
                              (try
                                (intemporal/run-child-workflow failing-child [id])
                                {:success true}
                                (catch js/Error e
                                  {:error (ex-message e)})))
          engine            (intemporal/make-workflow-engine :threads 2)]
      (with-result [result (intemporal/start-workflow engine parent-with-error [42])]
        (is (match? {:status :completed
                     :result {:error string?}}
                    result))))))

(deftest test-multiple-child-workflows
  (testing "Parent can run multiple child workflows sequentially"
    (let [multi-child-flow (fn [id]
                             (let [c1 (intemporal/run-child-workflow child-flow [1])
                                   c2 (intemporal/run-child-workflow child-flow [2])
                                   c3 (intemporal/run-child-workflow child-flow [3])]
                               {:children [c1 c2 c3] :id id}))
          engine           (intemporal/make-workflow-engine :threads 2)]
      (with-result [result (intemporal/start-workflow engine multi-child-flow [99])]
        (is (match? {:status :completed
                     :result {:children [{:child-result [:processed 1]}
                                         {:child-result [:processed 2]}
                                         {:child-result [:processed 3]}]
                              :id       99}}
                    result))))))
