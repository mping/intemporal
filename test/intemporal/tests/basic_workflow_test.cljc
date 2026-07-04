(ns intemporal.tests.basic-workflow-test
  (:require [intemporal.core :as intemporal]
            [clojure.test :refer [deftest is testing]])
  #?(:cljs (:require-macros [intemporal.core :as intemporal])))

(defn activity-fn [arg]
  [:processed arg])

;; Workflow waiting for signal
(defn basic-workflow [id]
  (let [act (intemporal/stub #'activity-fn)]
    {:result (act id)}))

(deftest basic-workflow-test
  (testing "In-Memory Store Implementation"
    (intemporal/with-workflow-engine [engine {:threads 4}]
      (let [res   (intemporal/start-workflow engine
                                             basic-workflow ["arg"]
                                             :workflow-id "basic")]
       (is (= res
              {:workflow-id "basic"
               :status :completed
               :result {:result [:processed "arg"]}}))))))
