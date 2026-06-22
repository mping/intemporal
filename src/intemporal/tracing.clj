(ns intemporal.tracing
  "Minimal OpenTelemetry tracing helpers for the workflow engine (JVM only).

   A workflow advances through many separate executions (a blocking start loop,
   or repeated worker-driven `resume-workflow` calls). To represent each workflow
   as ONE span across those executions, the live root span is held in a
   process-level registry keyed by workflow-id (`live-spans`): the first executor
   in this process creates+registers it, every subsequent resume reuses it, and
   the terminal finalizer ends it with OK/ERROR status. The W3C tracecontext
   persisted on the :workflow-started event links the trace across processes — a
   resume in a fresh process (registry miss) rehydrates from it and opens one
   linked span for that process's portion of the work.

   Every helper here is BEST-EFFORT: a tracing/SDK failure must never affect
   workflow execution, so all OpenTelemetry calls are guarded and degrade to a
   no-op (mirroring the observer's error isolation)."
  (:require [steffan-westcott.clj-otel.api.trace.span :as span]
            [steffan-westcott.clj-otel.context :as octx]))

(defmacro ^:private safe
  "Evaluates body, returning nil (never throwing) if any tracing call fails."
  [& body]
  `(try ~@body (catch Throwable _# nil)))

(defn workflow-tracer
  "Returns the intemporal instrumentation tracer. With no SDK/agent installed
   this yields a no-op tracer producing non-recording spans, so callers can
   wrap unconditionally."
  []
  (span/get-tracer {:name "intemporal" :version "1.0.0"}))

;; --- live workflow-span registry (process-local) ----------------------------

(defonce ^:private live-spans (atom {}))

(defn active-span
  "Returns the live span Context for `workflow-id` in this process, or nil."
  [workflow-id]
  (get @live-spans workflow-id))

(defn ensure-workflow-span!
  "Returns the live span Context for `workflow-id`, creating+registering one
   (named `span-name`, child of `parent-ctx`; nil parent = trace root) if absent.
   Idempotent: a workflow has at most one live span per process. Does NOT make it
   current. Best-effort: returns nil if span creation fails."
  [workflow-id span-name parent-ctx]
  (or (get @live-spans workflow-id)
      (safe
       (let [ctx (span/new-span! {:name       (str span-name)
                                  :parent     parent-ctx
                                  :tracer     (workflow-tracer)
                                  :attributes {:intemporal.workflow/id workflow-id}})]
         (swap! live-spans assoc workflow-id ctx)
         ctx))))

(defn- end-span!
  [ctx error]
  (cond
    (instance? Throwable error)
    (span/add-exception! error {:context ctx})

    (some? error)
    (span/add-span-data! {:context ctx
                          :status  {:code        :error
                                    :description (str (or (:message error) error))}})

    :else
    (span/add-span-data! {:context ctx :status {:code :ok}}))
  (span/end-span! {:context ctx}))

(defn finish-workflow-span!
  "Ends and deregisters `workflow-id`'s live span with OK/ERROR status derived
   from `error` (nil = OK). No-op when no live span is registered. Best-effort."
  [workflow-id error]
  (when-let [ctx (get @live-spans workflow-id)]
    (swap! live-spans dissoc workflow-id)
    (safe (end-span! ctx error))))

(defn traced-call
  "Best-effort: run thunk `f` inside a new span named `span-name` (child of
   `parent-ctx`, made current for the call). Used at thread boundaries
   (activities/timers). `f` runs exactly once and its result/exceptions pass
   through unchanged; any tracing failure degrades to just running `f`."
  [parent-ctx span-name attrs f]
  (let [parent-scope (safe (some-> parent-ctx octx/set-current!))
        span-ctx     (safe (span/new-span! {:name       (str span-name)
                                            :parent     (or parent-ctx (octx/current))
                                            :tracer     (workflow-tracer)
                                            :attributes attrs}))
        span-scope   (safe (some-> span-ctx octx/set-current!))]
    (try
      (f)
      (catch Throwable e
        (when span-ctx (safe (span/add-exception! e {:context span-ctx})))
        (throw e))
      (finally
        (when span-ctx (safe (span/end-span! {:context span-ctx})))
        (when span-scope (safe (octx/close-scope! span-scope)))
        (when parent-scope (safe (octx/close-scope! parent-scope)))))))

;; --- W3C tracecontext persistence / rehydration -----------------------------

(defn ctx->tracecontext
  "Serializes `ctx` to a W3C headers map (e.g. {\"traceparent\" \"00-...\"}) for
   persistence on an event. Best-effort: returns nil on failure."
  [ctx]
  (safe (octx/->headers {:context ctx})))

(defn tracecontext->ctx
  "Rehydrates a Context from a persisted W3C headers map, or nil when absent."
  [tracecontext]
  (when (seq tracecontext)
    (safe (octx/headers->merged-context tracecontext {:context (octx/root)}))))

;; --- cross-thread propagation ------------------------------------------------

(defn capture
  "Captures the current OTel Context (call on the originating thread) so it can
   be made current on a pool/scheduler thread."
  []
  (safe (octx/current)))
