(ns intemporal.tests.child-workflow-test
  (:require
   [clojure.string :as str]
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.tests.utils :refer [with-result]]
   [matcher-combinators.test :refer [match?]]))

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
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2}]
      (with-result [result (intemporal/start-workflow engine
                                                      parent-flow [5])]
        (is (match? {:status      :completed
                     :workflow-id string?
                     :result      {:parent-result [:processed 5]
                                   :child         {:child-result [:processed 50]}}}
                    result))))))

(deftest test-nested-child-workflows
  (testing "Child workflows can have their own child workflows"
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2}]
      (with-result [result (intemporal/start-workflow engine
                                                      nested-parent-flow [3])]
        (is (match? {:status :completed
                     :result {:parent-result [:processed 3]
                              :nested-child  {:child-result      [:processed 30]
                                              :grandchild-result {:grandchild [:processed 3000]}}}}
                    result))))))

(deftest test-child-workflow-with-error
  (testing "Parent handles child workflow errors"
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2}]
      (let [failing-child     (fn [x]
                                (throw (ex-info "Child failed" {:x x})))
            parent-with-error (fn [id]
                                (try
                                  (intemporal/run-child-workflow failing-child [id])
                                  {:success true}
                                  (catch Exception e
                                    {:error (ex-message e)})))]
        ;; Parent should catch and handle child error

        (with-result [result (intemporal/start-workflow engine
                                                        parent-with-error [42])]
          (is (match? {:status :completed
                       :result {:error string?}}
                      result)))))))

(deftest test-async-before-child-workflow
  (testing "Async activities scheduled before a child workflow complete successfully"
    ;; Regression test: when async activities are pending and the workflow then
    ;; calls run-child-workflow, the :child-workflow suspension must process the
    ;; pending asyncs first before running the child — otherwise they are silently
    ;; dropped, the activities never execute, and join-all blocks forever.
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2}]
      (let [async-then-child-flow
            (fn [id]
              (let [act   (intemporal/stub #'activity-fn)
                    prom1 (intemporal/async #(act 1))
                    prom2 (intemporal/async #(act 2))
                    child (intemporal/run-child-workflow child-flow [(* id 10)])]
                {:results (intemporal/join-all [prom1 prom2])
                 :child   child
                 :id      id}))]
        (with-result [result (intemporal/start-workflow engine
                                                        async-then-child-flow [5])]
          (is (match? {:status :completed
                       :result {:results [[:processed 1] [:processed 2]]
                                :child   {:child-result [:processed 50]}
                                :id      5}}
                      result)))))))

(deftest test-child-workflow-scheduled-observed
  (testing "Scheduling a child workflow emits :child-workflow-scheduled with the child's id"
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2 :enable-logging true}]
      (with-result [result (intemporal/start-workflow engine parent-flow [5])]
        (is (= :completed (:status result)))
        (let [parent-id (:workflow-id result)
              events    @(:log engine)
              scheduled (filter #(= :child-workflow-scheduled (:event %)) events)]
          ;; one scheduling event, parented to the parent workflow, naming the child
          (is (match? [{:event               :child-workflow-scheduled
                        :workflow-id         parent-id
                        :child-workflow-id   string?
                        :child-workflow-name string?
                        :args                [50]}]
                      scheduled))
          (is (str/starts-with? (:child-workflow-id (first scheduled)) parent-id)))))))

(deftest test-multiple-child-workflows
  (testing "Parent can run multiple child workflows sequentially"
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2}]
      (let [multi-child-flow (fn [id]
                               (let [c1 (intemporal/run-child-workflow child-flow [1])
                                     c2 (intemporal/run-child-workflow child-flow [2])
                                     c3 (intemporal/run-child-workflow child-flow [3])]
                                 {:children [c1 c2 c3] :id id}))]
        (with-result [result (intemporal/start-workflow engine
                                                        multi-child-flow [99])]
          (is (match? {:status :completed
                       :result {:children [{:child-result [:processed 1]}
                                           {:child-result [:processed 2]}
                                           {:child-result [:processed 3]}]
                                :id       99}}
                      result)))))))
