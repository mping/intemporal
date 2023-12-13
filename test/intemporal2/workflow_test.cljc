(ns intemporal2.workflow-test
  (:require [clojure.test :refer [deftest is testing]]))


(deftest workflow-happy-path-test
  (testing "workflow"
    (is (= 1 1))))