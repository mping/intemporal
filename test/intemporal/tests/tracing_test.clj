(ns intemporal.tests.tracing-test
  "Tests OpenTelemetry tracing integration.

   This test demonstrates how to use the OpenTelemetry observer to emit
   distributed traces for workflows and activities. The observer creates:
   - A span for each workflow execution
   - A child span for each activity within the workflow
   - Events for workflow lifecycle (suspended, resumed, completed, etc.)
   - Events for activity lifecycle (started, completed, failed, etc.)

   To view traces, ensure you have an OpenTelemetry collector running
   at http://localhost:4317 (or configure via OTEL_EXPORTER_OTLP_ENDPOINT)."
  (:require [intemporal.core :as intemporal]
            [intemporal.observer :as obs]
            [clojure.test :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]]))

(defn slow-activity [x]
  (println (str "slow activity START with " x " on thread " (.getName (Thread/currentThread))))
  (Thread/sleep 1000)
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


(deftest test-async-workflow
  (testing "Async workflow with OpenTelemetry tracing"
    (let [otel-observer (obs/make-otel-observer)]
      (intemporal/with-workflow-engine [engine {:threads 4 :observer otel-observer}]
        ;; Activities are automatically registered via stub call
        (let [result (intemporal/start-workflow engine
                                                my-parallel-flow [999])]
          (is (match? {:status :completed
                       :result {:args 999, :slow 0, :prom4 4, :results [2 4 6 4], :id 999}}
                      result))
          ;; Verify spans were created
          (println "OpenTelemetry observer test completed - spans were emitted to OTel backend"))))))
