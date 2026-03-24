(ns intemporal.tests.async-test
  (:require [cljs.test :as t :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]]
            [intemporal.core :as intemporal]
            [intemporal.tests.utils :as tu])
  (:require-macros [intemporal.tests.utils :refer [with-result]]))

(defn slow-activity [x]
  (println (str "slow activity START with " x))
  (println (str "slow activity END with " x))
  (* x 2))

(defn sleep-activity [x]
  (println (str "slow activity START with " x))
  (println (str "slow activity END with " x))
  (* x 2))

;; Parallel workflow
(defn my-parallel-flow [id]
  (println "Workflow start with id:" id)
  (let [slow  (intemporal/stub #'slow-activity)
        prom1 (intemporal/async #(slow 1))
        prom2 (intemporal/async #(slow 2))
        prom3 (intemporal/async #(slow 3))
        prom4 (intemporal/async #(+ 2 2))]
    (println "After async calls - all scheduled")
    {:args    id
     :slow    (slow 0)
     :prom4   (intemporal/join prom4)
     :results (intemporal/join-all [prom1 prom2 prom3 prom4])
     :id      id}))

;; Race workflow
(defn my-race-flow [id]
  (println "Workflow start with id:" id)
  (let [sleep (intemporal/stub #'sleep-activity)
        prom1 (intemporal/async #(sleep 100))
        prom2 (intemporal/async #(sleep 4000))]
    (println "After async calls - all scheduled")
    {:race-result (intemporal/join-any [prom1 prom2])
     :id          id}))


(deftest test-async-workflow
  (testing "Async workflow"
    (let [engine (intemporal/make-workflow-engine :threads 4 :enable-logging true)]
      (with-result [result (intemporal/start-workflow engine my-parallel-flow [999])]
        (is (match? {:status :completed
                     :result {:args 999, :slow 0, :prom4 4, :results [2 4 6 4], :id 999}}
                    result))))))


(deftest test-race-workflow
  (testing "Async race workflow"
    (let [engine (intemporal/make-workflow-engine :threads 4 :enable-logging true)]
      (with-result [result (intemporal/start-workflow engine my-race-flow [999])]
        (is (match? {:status :completed
                     :result {:race-result {:index 0, :result 200}
                              :id 999}}
                    result))))))
