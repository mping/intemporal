(ns intemporal.tests.tracing-test
  "Tests OpenTelemetry tracing integration using the in-memory SDK exporter.

   Tracing is wired at claimed workflow drives and runtime activity boundaries
   rather than via an observer. These tests install an InMemorySpanExporter and assert:
   - a root workflow span with nested activity / child-workflow spans
   - the W3C tracecontext is persisted on the :workflow-started event
   - the workflow span status is ERROR when the workflow fails or is cancelled
   - cross-process resume links new spans to the original trace via tracecontext"
  (:require
   [clojure.string :as str]
   [clojure.test :refer [deftest is testing use-fixtures]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [steffan-westcott.clj-otel.api.otel :as otel]
   [steffan-westcott.clj-otel.api.trace.span :as span])
  (:import
   (io.opentelemetry.api.trace StatusCode)
   (io.opentelemetry.api.trace.propagation W3CTraceContextPropagator)
   (io.opentelemetry.context.propagation ContextPropagators)
   (io.opentelemetry.sdk OpenTelemetrySdk)
   (io.opentelemetry.sdk.testing.exporter InMemorySpanExporter)
   (io.opentelemetry.sdk.trace SdkTracerProvider)
   (io.opentelemetry.sdk.trace.export SimpleSpanProcessor)))

;; ----------------------------------------------------------------------------
;; In-memory SDK fixture
;; ----------------------------------------------------------------------------

(def ^:dynamic *exporter* nil)

(defn with-otel-sdk [f]
  (let [exporter (InMemorySpanExporter/create)
        provider (-> (SdkTracerProvider/builder)
                     (.addSpanProcessor (SimpleSpanProcessor/create exporter))
                     (.build))
        sdk      (-> (OpenTelemetrySdk/builder)
                     (.setTracerProvider provider)
                     (.setPropagators (ContextPropagators/create
                                        (W3CTraceContextPropagator/getInstance)))
                     (.build))]
    (otel/set-default-otel! sdk)
    ;; Force a fresh tracer bound to this SDK (clj-otel caches a default tracer).
    (span/set-default-tracer! (span/get-tracer {:name "intemporal" :open-telemetry sdk}))
    (try
      (binding [*exporter* exporter]
        (f))
      (finally
        ;; Restore a working (no-op) default BEFORE shutting the SDK down, so other
        ;; test namespaces don't create spans on a shut-down provider.
        (otel/set-default-otel! (otel/get-noop))
        (span/set-default-tracer! (span/noop-tracer))
        (.reset exporter)
        (.shutdown provider)))))

(use-fixtures :each with-otel-sdk)

(defn finished-spans []
  (vec (.getFinishedSpanItems *exporter*)))

;; Span names use fully-qualified var names (e.g. "ns/simple-flow",
;; "activity ns/double-activity"), so match by suffix.
(defn spans-named [spans suffix]
  (filter #(.endsWith (.getName %) suffix) spans))

(defn span-named [spans suffix]
  (first (spans-named spans suffix)))

;; ----------------------------------------------------------------------------
;; Workflows / activities
;; ----------------------------------------------------------------------------

(defn double-activity [x] (* x 2))

(defn simple-flow [x]
  (let [act (intemporal/stub #'double-activity)]
    (act x)))

(defn boom-activity [_] (throw (ex-info "boom" {:reason :test})))

(defn failing-flow [x]
  (let [act (intemporal/stub #'boom-activity)]
    (act x)))

(defn child-flow [x]
  (let [act (intemporal/stub #'double-activity)]
    {:child-result (act x)}))

(defn parent-flow [id]
  (let [c (intemporal/run-child-workflow child-flow [(* id 10)])]
    {:id id :child c}))

;; ----------------------------------------------------------------------------
;; Tests
;; ----------------------------------------------------------------------------

(deftest workflow-and-activity-spans-nest
  (testing "activity span is a child of the workflow span in the same trace"
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :enable-telemetry true}]
      (let [result (intemporal/start-workflow engine simple-flow [21] :workflow-id "wf-simple")]
        (is (= :completed (:status result)))
        (is (= 42 (:result result)))
        (let [spans     (finished-spans)
              wf-span   (span-named spans "/simple-flow")
              act-span  (span-named spans "/double-activity")]
          (is (some? wf-span) "workflow span emitted")
          (is (some? act-span) "activity span emitted")
          (is (= (.. wf-span getSpanContext getTraceId)
                 (.. act-span getSpanContext getTraceId))
              "activity shares the workflow trace")
          (is (= (.. wf-span getSpanContext getSpanId)
                 (.getParentSpanId act-span))
              "activity is parented under the workflow span")
          (is (= StatusCode/OK (.. wf-span getStatus getStatusCode))))))))

(deftest tracecontext-persisted-on-start-event
  (testing ":workflow-started event carries the W3C traceparent of the workflow span"
    (let [st (store/create-store)]
      (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :enable-telemetry true :store st}]
        (intemporal/start-workflow engine simple-flow [21] :workflow-id "wf-tc")
        (let [started (->> (p/load-history st "wf-tc")
                           (filter #(= :workflow-started (:event-type %)))
                           first)
              traceparent (get-in started [:tracecontext "traceparent"])
              wf-span (span-named (finished-spans) "/simple-flow")]
          (is (some? traceparent) "traceparent persisted on the start event")
          ;; traceparent format: 00-<traceid>-<spanid>-<flags>
          (is (= (.. wf-span getSpanContext getTraceId)
                 (nth (str/split traceparent #"-") 1))
              "persisted traceparent embeds the workflow span's trace id"))))))

(deftest child-workflow-nested-in-parent-trace
  (testing "child workflow span and its activity nest under the parent workflow trace"
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :enable-telemetry true}]
      (let [result (intemporal/start-workflow engine parent-flow [5] :workflow-id "wf-parent")]
        (is (= :completed (:status result)))
        (let [spans      (finished-spans)
              parent-sp  (span-named spans "/parent-flow")
              child-sp   (span-named spans "/child-flow")
              ;; the child runs one double-activity; there may be several activity
              ;; spans (parent has none here), pick those under the child.
              trace-id   (.. parent-sp getSpanContext getTraceId)]
          (is (some? parent-sp))
          (is (some? child-sp) "child workflow span emitted")
          (is (= trace-id (.. child-sp getSpanContext getTraceId))
              "child shares the parent trace")
          (is (= (.. parent-sp getSpanContext getSpanId)
                 (.getParentSpanId child-sp))
              "child span parented under the parent workflow span")
          ;; the child's activity is parented under the child span
          (let [act-span (->> (spans-named spans "/double-activity")
                              (filter #(= (.. child-sp getSpanContext getSpanId)
                                          (.getParentSpanId %)))
                              first)]
            (is (some? act-span) "child's activity nested under the child span")
            (is (= trace-id (.. act-span getSpanContext getTraceId)))))))))

(deftest error-status-on-failure
  (testing "workflow span status is ERROR when the workflow fails"
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :enable-telemetry true}]
      (let [result (intemporal/start-workflow engine failing-flow [1] :workflow-id "wf-fail")]
        (is (= :failed (:status result)))
        (let [wf-span (span-named (finished-spans) "/failing-flow")]
          (is (some? wf-span))
          (is (= StatusCode/ERROR (.. wf-span getStatus getStatusCode))
              "failed workflow span carries ERROR status"))))))

(deftest cross-process-resume-links-trace
  (testing "a resume (cold path) links its spans to the original trace via tracecontext"
    (let [st (store/create-store)]
      ;; First engine: submit-workflow anchors the trace (worker-style entry),
      ;; persisting tracecontext without driving the workflow.
      (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :enable-telemetry true :store st}]
        (intemporal/submit-workflow engine simple-flow [21] :workflow-id "wf-resume"))
      (let [started     (->> (p/load-history st "wf-resume")
                             (filter #(= :workflow-started (:event-type %)))
                             first)
            anchor-trace (nth (str/split
                                (get-in started [:tracecontext "traceparent"]) #"-") 1)]
        (is (some? anchor-trace) "anchor tracecontext persisted by submit-workflow")
        ;; Second engine (fresh "process") resumes — no live root span on the stack.
        (intemporal/with-workflow-engine [engine2 {:owner-id (str "migrated-test-" (random-uuid)) :enable-telemetry true :store st}]
          (let [result (intemporal/resume-workflow engine2 "wf-resume")]
            (is (= :completed (:status result)))
            (let [spans     (finished-spans)
                  resume-sp (span-named spans "/simple-flow")
                  act-sp    (span-named spans "/double-activity")]
              (is (some? resume-sp) "resume session span emitted")
              (is (= anchor-trace (.. resume-sp getSpanContext getTraceId))
                  "resume session linked to the original anchored trace")
              (is (= anchor-trace (.. act-sp getSpanContext getTraceId))
                  "activity during resume linked to the original trace")
              (is (= StatusCode/OK (.. resume-sp getStatus getStatusCode))))))))))
