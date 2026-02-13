(ns intemporal.tests.deleteme-test
  (:require [cljs.test :refer [deftest is testing async]]
            [intemporal.core :as intemporal]
            [intemporal.tests.utils :refer [with-result]])
  (:require-macros [intemporal.tests.utils :refer [with-result]]))

(defn noop-activity [x] x)

(defn noop-flow [id]
  (let [act (intemporal/stub #'noop-activity)]
    (act id)))

(deftest test-simple-workflow
  (testing "simplest possible workflow"
    (let [engine (intemporal/make-workflow-engine :threads 2)]
      (with-result [result (intemporal/start-workflow engine noop-flow [42])]
        (is (= :completed (:status result)))))))
