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
    ;; with-result must be OUTERMOST: in CLJS it owns the cljs.test/async
    ;; boundary, and with-workflow-engine's promise chain (body + shutdown
    ;; finally) must be its bound value. Nested the other way around, the async
    ;; marker gets wrapped in a promise, so cljs.test never waits for the
    ;; assertions ("Test ran without assertions").
    (with-result [result (intemporal/with-workflow-engine [engine {:threads 4}]
                           (intemporal/start-workflow engine
                                                      basic-workflow ["arg"]
                                                      :workflow-id "basic"))]
      (is (= result
             {:workflow-id "basic"
              :status      :completed
              :result      {:result [:processed "arg"]}})))))
