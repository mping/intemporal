(ns intemporal.tests.basic-workflow-test
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.tests.utils :refer [with-result]])
  #?(:cljs (:require-macros [intemporal.core :as intemporal]
                            [intemporal.tests.utils :refer [with-result]])))

(defn activity-fn [arg]
  [:processed arg])

;; Workflow waiting for signal
(defn basic-workflow [id]
  (let [act (intemporal/stub #'activity-fn)]
    {:result (act id)}))

(deftest basic-workflow-test
  (testing "In-Memory Store Implementation"
    (intemporal/with-workflow-engine [engine {:threads 4}]
      (with-result [result (intemporal/start-workflow engine
                                                      basic-workflow ["arg"]
                                                      :workflow-id "basic")]

        (is (= result
               {:workflow-id "basic"
                :status      :completed
                :result      {:result [:processed "arg"]}}))))))
