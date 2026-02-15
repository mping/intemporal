(ns intemporal.tests.deleteme-test
  (:require [cljs.test :as t :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.tests.utils :refer [with-trace-logging]]
            [promesa.core :as p])
  (:require-macros [intemporal.tests.utils :refer [with-result]]
                   [intemporal.internal.context :refer [blet]]))

(t/use-fixtures :once with-trace-logging)

(defn noop-activity [x] x)

(defn noop-flow [id]
  (let [act (intemporal/stub noop-activity)]
    (act id)))

(deftest test-simple-workflow
  (testing "simplest possible workflow"
    (let [engine (intemporal/make-workflow-engine :threads 2)]
      (with-result [result (intemporal/start-workflow engine noop-flow [42])]
        (is (= :completed (:status result)))))))

(defn plet-activity [x] (* x 10))

(defn plet-flow [id]
  (let [act (intemporal/stub plet-activity)]
    (blet [v (act id)]
      {:value v})))

(deftest test-plet-workflow
  (testing "workflow returning a promise via p/let"
    (let [engine (intemporal/make-workflow-engine :threads 2)]
      (with-result [result (intemporal/start-workflow engine plet-flow [5])]
        (println "PLET RESULT:" (pr-str result))
        (is (= :completed (:status result)))
        (is (= {:value 50} (:result result)))))))
