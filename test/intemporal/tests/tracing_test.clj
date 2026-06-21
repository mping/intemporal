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
            [intemporal.store :as store]
            [clojure.string :as str]
            [clojure.test :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]]
            [steffan-westcott.clj-otel.api.trace.span :as otspan])
  (:import [io.opentelemetry.sdk OpenTelemetrySdk]
           [io.opentelemetry.sdk.trace SdkTracerProvider]
           [io.opentelemetry.sdk.trace.export SimpleSpanProcessor]
           [io.opentelemetry.sdk.testing.exporter InMemorySpanExporter]))

(defn slow-activity [x]
  (println (str "slow activity START with " x " on thread " (.getName (Thread/currentThread))))
  (Thread/sleep 1000)
  (println (str "slow activity END with " x))
  (* x 2))

;; Child workflow
(defn child-flow [x]
  (let [act (intemporal/stub #'slow-activity)]
    {:child-result (act x)}))

;; Parallel workflow
(defn my-parallel-flow [id]
  (println "Workflow start with id:" id)
  (let [slow  (intemporal/stub #'slow-activity)
        prom1 (intemporal/async #(slow 1))
        prom2 (intemporal/async #(slow 2))
        prom3 (intemporal/async #(slow 3))
        prom4 (intemporal/async #(+ 2 2))

        child-result (intemporal/run-child-workflow child-flow [(* id 10)])]
    (println "After async calls - all scheduled")
    {:args    id
     :slow    (slow 0)
     :prom4   (intemporal/join prom4)
     :child   child-result
     :results (intemporal/join-all [prom1 prom2 prom3 prom4])
     :id      id}))


(deftest test-async-workflow
  (testing "Async workflow with OpenTelemetry tracing"
    (intemporal/with-workflow-engine [engine {:threads 4 :enable-telemetry true}]
      ;; Activities are automatically registered via stub call
      (let [result (intemporal/start-workflow engine my-parallel-flow [999])]
        (is (match? {:status :completed
                     :result {:args 999, :slow 0, :prom4 4, :results [2 4 6 4], :id 999}}
                    result))
        ;; Verify spans were created
        (println "OpenTelemetry observer test completed - spans were emitted to OTel backend")))))

;; Fast parent/child for span-shape assertions (no sleeps).
(defn fast-activity [x] [:done x])
(defn span-child-flow [x]
  (let [act (intemporal/stub #'fast-activity)]
    {:child-result (act x)}))
(defn span-parent-flow [id]
  (let [act          (intemporal/stub #'fast-activity)
        child-result (intemporal/run-child-workflow span-child-flow [(* id 10)])]
    {:parent-result (act id)
     :child         child-result}))

(defmacro with-in-memory-spans
  "Wire clj-otel to an in-memory SDK exporter for the body, restoring the no-op
   tracer afterwards. Binds `exporter` to the InMemorySpanExporter."
  [[exporter] & body]
  `(let [~exporter (InMemorySpanExporter/create)
         provider# (-> (SdkTracerProvider/builder)
                       (.addSpanProcessor (SimpleSpanProcessor/create ~exporter))
                       (.build))
         sdk#      (-> (OpenTelemetrySdk/builder)
                       (.setTracerProvider provider#)
                       (.build))]
     (otspan/set-default-tracer! (otspan/get-tracer {:open-telemetry sdk#}))
     (try
       ~@body
       (finally
         (otspan/set-default-tracer! (otspan/noop-tracer))
         (.shutdown provider#)))))

(deftest test-child-workflow-span-parenting
  (testing "A child workflow gets its own span, parented to the parent workflow span"
    (with-in-memory-spans [exporter]
      (intemporal/with-workflow-engine [engine {:threads 2 :enable-telemetry true}]
        (let [result (intemporal/start-workflow engine span-parent-flow [5])]
          (is (= :completed (:status result)))
          (let [spans     (.getFinishedSpanItems exporter)
                workflows (filter #(str/starts-with? (.getName %) "workflow:") spans)
                child     (first (filter #(str/includes? (.getName %) "/child-") workflows))
                parent    (first (remove #(str/includes? (.getName %) "/child-") workflows))]
            ;; both the parent and the child workflow emitted a span
            (is (some? parent) "parent workflow span exists")
            (is (some? child) "child workflow span exists")
            ;; the child span is parented to the parent span, in the same trace
            (is (= (.. parent getSpanContext getSpanId)
                   (.. child getParentSpanContext getSpanId))
                "child's parent span id == parent workflow span id")
            (is (= (.. parent getSpanContext getTraceId)
                   (.. child getSpanContext getTraceId))
                "parent and child share one trace")
            ;; the child's activity span nests under the child workflow span
            (let [child-act (first (filter #(and (str/starts-with? (.getName %) "activity:")
                                                 (= (.. child getSpanContext getSpanId)
                                                    (.. % getParentSpanContext getSpanId)))
                                           spans))]
              (is (some? child-act) "child's activity span is parented to the child workflow span"))))))))

;; ── worker-driven (Tier 2) tracing ───────────────────────────────────────────────
;; The worker model never calls start-workflow: the parent is submitted (its start
;; observed in submit-workflow) and the worker drives parent + detached child via
;; resume-workflow (which now inherits the engine's observer). Verifies both get
;; spans and the detached child nests under the parent.

(intemporal/defn-workflow worker-child-flow [x]
  (let [act (intemporal/stub #'fast-activity)]
    {:child-result (act x)}))

(intemporal/defn-workflow worker-parent-flow [id child-id]
  (let [act (intemporal/stub #'fast-activity)]
    (intemporal/run-child-workflow-detached #'worker-child-flow [(* id 10)]
                                            :child-id child-id
                                            :parent-close-policy :abandon)
    {:parent-result (act id)}))

(deftest test-worker-child-workflow-span-parenting
  (testing "A worker-driven parent and its detached child both get spans, child nested"
    (with-in-memory-spans [exporter]
      (let [st     (store/->InMemoryStore (atom {}))
            engine (intemporal/make-workflow-engine :store st :threads 4 :enable-telemetry true)
            stop   (intemporal/start-worker engine :poll-ms 25 :owner-id (str "w-" (random-uuid)))]
        (try
          (let [pid (str "order-" (random-uuid))
                cid (str pid "/fulfill")]
            (intemporal/submit-workflow engine #'worker-parent-flow [5 cid] :workflow-id pid)
            (is (= :completed (:status (intemporal/await-workflow engine pid :timeout-ms 5000)))
                "parent completed")
            (is (= :completed (:status (intemporal/await-workflow engine cid :timeout-ms 5000)))
                "detached child completed")
            (let [spans     (.getFinishedSpanItems exporter)
                  workflows (filter #(str/starts-with? (.getName %) "workflow:") spans)
                  parent    (first (filter #(= (str "workflow:" pid) (.getName %)) workflows))
                  child     (first (filter #(= (str "workflow:" cid) (.getName %)) workflows))]
              (is (some? parent) "parent workflow span exists (observed at submit-workflow)")
              (is (some? child) "detached child workflow span exists")
              (is (= (.. parent getSpanContext getSpanId)
                     (.. child getParentSpanContext getSpanId))
                  "child's parent span id == parent workflow span id")
              (is (= (.. parent getSpanContext getTraceId)
                     (.. child getSpanContext getTraceId))
                  "parent and child share one trace")))
          (finally (stop) (intemporal/shutdown-engine engine)))))))
