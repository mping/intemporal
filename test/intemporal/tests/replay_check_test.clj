(ns intemporal.tests.replay-check-test
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.internal.execution :as e]
   [matcher-combinators.test :refer [match?]]))

(defn activity [x]
  (* x 2))

(def total (atom 0))

;; Parallel workflow demonstrating run-once behavior
(defn my-parallel-flow [id]
  (println "Workflow start with id:" id)
  (let [slow  (intemporal/stub #'activity)
        ;; Use run-once to ensure this only executes on first iteration, not on replays
        _     (e/run-once #(swap! total inc))
        prom1 (intemporal/async #(slow 1))]
    {:args    id
     :slow    (slow 0)
     :results (intemporal/join-all [prom1])
     :id      id}))

(deftest test-log-once-workflow
  (testing "run-once facility can be used for any purpose"
    ;; `total` is a namespace-level atom, so it survives between runs of this
    ;; test in a long-lived JVM (REPL, repeated `run-test-var`). Reset it first
    ;; or the second run sees 2 and fails — the assertion below is about
    ;; run-once firing exactly once per workflow, not about an absolute count.
    (reset! total 0)
    (intemporal/with-workflow-engine [engine {:threads 4 :enable-logging true}]
      ;; Register activities
      (let [result (intemporal/start-workflow engine
                                              my-parallel-flow [999])]
        (is (match? {:status :completed} result))
        (is (= 1 @total))))))
