# ClojureScript Port Analysis for Intemporal

## Context

The user wants to understand which parts of the intemporal library need to be rewritten to support ClojureScript. Intemporal is a workflow orchestration library inspired by Temporal.io that relies heavily on JVM concurrency primitives for activity execution, scheduling, and persistence.

## Current State

### Already ClojureScript-Ready (1 file)
- **src/intemporal/internal/macros.cljc** - Already a .cljc file with platform-specific code using macrovich

### Pure Clojure (Platform-Agnostic) - 6 files
These files contain no Java interop and could be converted to .cljc with minimal changes:

1. **src/intemporal/protocol.clj** - Pure protocol definitions (IStore, IActivityExecutor, IScheduler, IWorkflowObserver)
2. **src/intemporal/internal/context.clj** - Dynamic context management using atoms
3. **src/intemporal/internal/activity.clj** - Activity registry and metadata (atoms only)
4. **src/intemporal/observer.clj** - Observer protocol implementations
5. **src/intemporal/core.clj** (mostly) - Core workflow API (stub, async, join, sleep, signals)
6. **src/intemporal/store.clj** (InMemoryStore) - Uses atoms, one `future` call for signal callbacks

### Heavy JVM Dependencies - 3 Critical Files

These files are the **main rewrite targets** and contain extensive Java interop:

#### 1. **src/intemporal/internal/runtime.clj** - COMPLETE REWRITE NEEDED
**Java Dependencies:**
```clojure
(:import (java.util.concurrent
   ArrayBlockingQueue ExecutorService Executors Future
   ScheduledExecutorService ScheduledFuture ThreadPoolExecutor
   ThreadPoolExecutor$CallerRunsPolicy TimeUnit TimeoutException))
```

**What needs rewriting:**

- **DefaultScheduler** (lines 13-48)
  - Uses `ScheduledExecutorService` for timer scheduling
  - `.schedule()` method with TimeUnit/MILLISECONDS
  - `.cancel()`, `.shutdown()`, `.awaitTermination()` methods
  - **ClojureScript alternative**: `js/setTimeout`, `js/clearTimeout`, core.async channels

- **ParallelActivityExecutor** (lines 61-156)
  - Uses `ExecutorService` and thread pools for parallel activity execution
  - `.submit()` and `.get()` with timeout for futures
  - Virtual threads via `Thread/ofVirtual`
  - Bounded executor with `ThreadPoolExecutor` and `ArrayBlockingQueue`
  - **ClojureScript alternative**: core.async go blocks, promises, or web workers (browser) / worker threads (Node.js)

- **Activity retry logic with Thread/sleep** (line 114)
  - **ClojureScript alternative**: `js/setTimeout` with promises

#### 2. **src/intemporal/internal/execution.clj** - MODERATE REWRITE
**Java Dependencies:**
```clojure
(:import (java.util.concurrent RejectedExecutionException))
```

**What needs rewriting:**
- Exception handling for `RejectedExecutionException` (lines 59, 91)
  - **ClojureScript alternative**: Custom error types or ex-info with specific markers
- Activity execution and retry logic intertwined with executor calls
- `System/currentTimeMillis` calls (lines 48, 53, etc.)
  - **ClojureScript alternative**: `(.now js/Date)` or `(js/Date.now)`

#### 3. **src/intemporal/internal/logging.clj** - MODERATE REWRITE
**Java Dependencies:**
```clojure
(:import (org.slf4j MDC))
```

**What needs rewriting:**
- SLF4J MDC (Mapped Diagnostic Context) for structured logging
  - **ClojureScript alternative**: Thread-local storage doesn't exist in JS; use dynamic binding or atom-based context
- Depends on logback (JVM-only)
  - **ClojureScript alternative**: Browser console API or Node.js logging libraries

### Minor Java Interop in Core Files

**src/intemporal/core.clj:**
- `System/currentTimeMillis` (lines 66, 227, 270, 288, 293, etc.)
  - Easy replacement with `.now js/Date`

**src/intemporal/store.clj:**
- One `(future (callback))` call (line 40) for async signal callbacks
  - **ClojureScript alternative**: Use promises or core.async

**src/intemporal/internal/error.clj:**
- Uses `proxy [Error IExceptionInfo]` (line 14)
  - **ClojureScript alternative**: `js/Error` or custom error types
- `.getStackTrace()` and `.getCause()` methods (lines 88, 89)
  - **ClojureScript alternative**: `.-stack` property, custom cause tracking

## Parts That Need Complete Rewriting

### 1. Activity Execution Layer (HIGHEST PRIORITY)
**File**: `src/intemporal/internal/runtime.clj` - **ParallelActivityExecutor**

**Current JVM approach:**
- Thread pool executor with configurable concurrency
- Blocking `.get()` with timeout on futures
- Virtual threads (Java 21+)

**ClojureScript alternatives:**

**Option A: core.async (Recommended for Node.js)**
```clojure
(require '[cljs.core.async :as async])

(defn execute-activity-async [activity-fn args timeout-ms]
  (let [result-ch (async/promise-chan)
        timeout-ch (async/timeout timeout-ms)]
    (async/go
      (try
        (let [result (apply activity-fn args)]
          (async/put! result-ch {:status :success :result result}))
        (catch js/Error e
          (async/put! result-ch {:status :error :error e}))))
    ;; Race between result and timeout
    (async/go
      (async/alt!
        result-ch ([v] v)
        timeout-ch ([_] {:status :timeout})))))
```

**Option B: Promises (Browser/Node.js)**
```clojure
(defn execute-activity-async [activity-fn args timeout-ms]
  (js/Promise.race
    #js [(js/Promise. (fn [resolve reject]
                        (try
                          (resolve (apply activity-fn args))
                          (catch js/Error e (reject e)))))
         (js/Promise. (fn [resolve _]
                        (js/setTimeout
                          #(resolve {:timeout true})
                          timeout-ms)))]))
```

**Option C: Web Workers (Browser only) for true parallelism**
- Activities run in separate worker threads
- More complex but provides real parallelism

### 2. Timer/Scheduler Layer (HIGH PRIORITY)
**File**: `src/intemporal/internal/runtime.clj` - **DefaultScheduler**

**Current JVM approach:**
- ScheduledExecutorService with precise scheduling
- Cancellable scheduled tasks

**ClojureScript alternative:**
```clojure
(defrecord DefaultScheduler [pending-timers]
  p/IScheduler
  (schedule-timer [_ workflow-id seq-num fire-at callback]
    (let [delay-ms (max 0 (- fire-at (.now js/Date)))
          timer-key [workflow-id seq-num]
          timer-id (js/setTimeout callback delay-ms)]
      (swap! pending-timers assoc timer-key timer-id)
      timer-key))

  (cancel-timer [_ workflow-id seq-num]
    (let [timer-key [workflow-id seq-num]]
      (when-let [timer-id (get @pending-timers timer-key)]
        (js/clearTimeout timer-id)
        (swap! pending-timers dissoc timer-key))))

  (shutdown-scheduler [_ grace-period-secs]
    (doseq [[_ timer-id] @pending-timers]
      (js/clearTimeout timer-id))
    (reset! pending-timers {}))

  (shutdown-scheduler? [_]
    (empty? @pending-timers)))
```

### 3. Logging Layer (MEDIUM PRIORITY)
**File**: `src/intemporal/internal/logging.clj`

**Current JVM approach:**
- SLF4J with MDC for contextual logging
- Logback integration

**ClojureScript alternatives:**

**Option A: Console logging with context atom**
```clojure
(def ^:dynamic *log-context* {})

(defmacro with-mdc [m & body]
  `(binding [*log-context* (merge *log-context* ~m)]
     ~@body))

(defn log [level & args]
  (let [context-str (when (seq *log-context*)
                      (str " " (pr-str *log-context*)))]
    (.apply (aget js/console level)
            js/console
            (to-array (cons (str (first args) context-str)
                           (rest args))))))

(defmacro info [& args]
  `(log "info" ~@args))
```

**Option A: Use existing ClojureScript logging library**
- `lambdaisland/glogi` (Google Closure logging)
- Custom wrapper around console API

### 4. Error Handling (LOW PRIORITY)
**File**: `src/intemporal/internal/error.clj`

**Changes needed:**
- Replace `proxy [Error IExceptionInfo]` with `js/Error` extension
- Replace `.getStackTrace()` with `.-stack`
- Replace `.getCause()` with custom cause tracking in ex-data

```clojure
#?(:clj (proxy [Error IExceptionInfo] ...)
   :cljs (let [err (js/Error. message)]
           (set! (.-data err) data)
           err))
```

## Implementation Strategy

### Phase 1: Create Platform-Agnostic Core (.cljc)
Convert these files to .cljc with minimal changes:
1. protocol.clj → protocol.cljc
2. context.clj → context.cljc
3. activity.clj → activity.cljc
4. observer.clj → observer.cljc
5. error.clj → error.cljc (with reader conditionals)
6. core.clj → core.cljc (replace System/currentTimeMillis)
7. store.clj → store.cljc (replace future with platform-specific async)

### Phase 2: Implement Platform-Specific Runtime
Create separate implementations:
- **runtime.clj** - Keep existing JVM implementation
- **runtime.cljs** - New ClojureScript implementation using:
  - js/setTimeout for scheduling
  - Promises or core.async for activity execution
  - No thread pools (single-threaded event loop)

### Phase 3: Platform-Specific Logging
- **logging.clj** - Keep SLF4J/logback
- **logging.cljs** - Console API with context tracking

### Phase 4: Execution Layer Updates
Update execution.clj → execution.cljc with reader conditionals for:
- RejectedExecutionException handling
- Time measurement

### Phase 5: Testing
- Add ClojureScript tests (shadow-cljs :node target already configured)
- Test in both Node.js and browser environments

## Key Architectural Differences

### JVM (Multi-threaded)
- Real parallelism via thread pools
- Blocking operations with timeouts
- Virtual threads for scalability

### ClojureScript (Single-threaded Event Loop)
- **No true parallelism** (except Web Workers)
- All operations are async/non-blocking
- Promises or core.async for concurrency
- Activity "parallelism" means concurrent promises, not parallel threads

### Implications
- **Performance**: ClojureScript won't have true parallel activity execution unless using Web Workers
- **Compatibility**: Workflow definitions should work identically, but execution will be async
- **APIs**: Main API should remain the same, but return promises instead of blocking
- **Testing**: Need both JVM and ClojureScript test suites

## Complexity Assessment

**Lines of Code to Rewrite:**
- runtime.clj: ~180 lines → Complete rewrite
- execution.clj: ~300 lines → 20% modification (exception handling, time)
- logging.clj: ~50 lines → Complete rewrite (simpler in ClojureScript)
- error.clj: ~94 lines → 15% modification (reader conditionals)
- Other files: ~10 replacements of System/currentTimeMillis

**Estimated Effort:**
- **High complexity**: Runtime layer (activity executor, scheduler)
- **Medium complexity**: Execution layer updates, logging
- **Low complexity**: Converting .clj to .cljc, time replacements

**Total**: ~600-800 lines of new/modified code
