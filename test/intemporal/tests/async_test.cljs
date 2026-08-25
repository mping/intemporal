(ns intemporal.tests.async-test
  (:require-macros
   [intemporal.tests.utils :refer [with-result]])
  (:require
   [cljs.test :as t :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.tests.utils :as tu]
   [matcher-combinators.test :refer [match?]]))

(defn slow-activity [x]
  (println (str "slow activity START with " x))
  (println (str "slow activity END with " x))
  (* x 2))

(defn sleep-activity [x]
  (println (str "slow activity START with " x))
  (println (str "slow activity END with " x))
  (* x 2))

(defn timeout-shaped-result []
  {:intemporal.internal.runtime/timeout true})

(defn timeout-shaped-result-flow []
  (let [activity (intemporal/stub #'timeout-shaped-result :timeout-ms 1000)]
    (activity)))

(defn parallel-timeout-shaped-result-flow []
  (let [activity (intemporal/stub #'timeout-shaped-result :timeout-ms 1000)]
    (intemporal/join (intemporal/async #(activity)))))

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
    (let [engine (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)) :threads 4 :enable-logging true)]
      (with-result [result (intemporal/start-workflow engine my-parallel-flow [999])]
        (is (match? {:status :completed
                     :result {:args 999, :slow 0, :prom4 4, :results [2 4 6 4], :id 999}}
                    result))))))

(deftest test-race-workflow
  (testing "Async race workflow"
    (let [engine (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)) :threads 4 :enable-logging true)]
      (with-result [result (intemporal/start-workflow engine my-race-flow [999])]
        (is (match? {:status :completed
                     :result {:race-result {:index 0, :result 200}
                              :id 999}}
                    result))))))

(deftest activity-result-cannot-collide-with-timeout-sentinel
  (let [engine (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)) :threads 2)]
    (with-result [sequential-result (intemporal/start-workflow engine timeout-shaped-result-flow [])]
      (is (= {:intemporal.internal.runtime/timeout true}
             (:result sequential-result)))
      (with-result [parallel-result (intemporal/start-workflow engine parallel-timeout-shaped-result-flow [])]
        (is (= {:intemporal.internal.runtime/timeout true}
               (:result parallel-result)))))))
