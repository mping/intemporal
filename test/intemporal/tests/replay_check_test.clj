(ns intemporal.tests.replay-check-test
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [matcher-combinators.test :refer [match?]]))

(def total (atom 0))

(defn activity [x]
  (swap! total inc)
  (* x 2))

;; Parallel workflow demonstrating activity replay behaviour.
(defn my-parallel-flow [id]
  (println "Workflow start with id:" id)
  (let [slow  (intemporal/stub #'activity)
        prom1 (intemporal/async #(slow 1))]
    {:args    id
     :slow    (slow 0)
     :results (intemporal/join-all [prom1])
     :id      id}))

(deftest activities-run-once-across-replay
  (testing "the FSM replays completed activity results without re-executing them"
    ;; `total` is a namespace-level atom, so it survives between runs of this
    ;; test in a long-lived JVM (REPL, repeated `run-test-var`). Reset it first
    ;; or the second run sees 2 and fails — the assertion below is about
    ;; the two scheduled activities firing exactly once, not about an absolute count.
    (reset! total 0)
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 4 :enable-logging true}]
      ;; Register activities
      (let [result (intemporal/start-workflow engine
                                              my-parallel-flow [999])]
        (is (match? {:status :completed} result))
        (is (= 2 @total))))))
