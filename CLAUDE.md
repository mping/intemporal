# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**intemporal** is a Clojure/ClojureScript library inspired by Temporal.io and Uber Cadence. It enables defining functions with side effects that can persist and resume their state, providing resilience to process crashes.

### Core Concepts

- **Activities**: Protocol implementations or functions that handle side effects. Activities are the unit of work that can fail and be retried.
- **Workflows**: Functions that orchestrate activities with at-least-once semantics. Workflows can safely resume after crashes by replaying from persisted event history.
- **Event Sourcing**: Workflow state is reconstructed from an event log stored via the `IStore` protocol.
- **Replay**: On resume, workflows replay their event history to reconstruct state without re-executing activities.

### Architecture

The codebase is organized into several layers:

1. **Core API** ([src/intemporal/core.clj](src/intemporal/core.clj))
   - `stub` - Creates activity stubs for use in workflows
   - Main workflow execution entry points
   - Handles activity caching, replay, and async operations

2. **Protocol Definitions** ([src/intemporal/protocol.clj](src/intemporal/protocol.clj))
   - `IStore` - Workflow persistence (history, signals, cancellation)
   - `IActivityExecutor` - Activity execution with timeout/retry
   - `IScheduler` - Timer scheduling
   - `IWorkflowObserver` - Event observation for monitoring/tracing

3. **Internal Components** (src/intemporal/internal/)
   - `context.clj` - Dynamic workflow context with sequence counters, pending events
   - `execution.clj` - Workflow execution engine, handles suspensions and retries
   - `runtime.clj` - Default implementations of `IActivityExecutor` and `IScheduler`
   - `activity.clj` - Activity registration and metadata
   - `error.clj` - Error types (suspensions, interruptions, rejections, cancellations)
   - `logging.clj` - Structured logging with MDC support
   - `macros.cljc` - `defn-workflow`, `stub-function`, `stub-protocol` macros

4. **Store Implementations** ([src/intemporal/store.clj](src/intemporal/store.clj))
   - `InMemoryStore` - In-memory implementation of `IStore`
   - Additional stores: FoundationDB (`:fdb` alias), JDBC (`:jdbc` alias)

### Key Mechanisms

- **Sequence Numbers**: Each activity/operation gets a monotonic sequence number for deterministic replay
- **Suspensions**: Workflows can suspend (e.g., waiting for signal, timer) and resume later
- **Cancellation**: Workflows check cancellation status at each sequence point
- **Pending Events**: During workflow execution, events are buffered and atomically saved to store

## Development Commands

### Grep

Ensure you run grep with `--color=never`

```
grep --color=never
```

### Running Tests

```bash
# Run all tests (includes JVM and ClojureScript tests)
bin/kaocha

# Run specific test suite
bin/kaocha :test                    # JVM tests only
bin/kaocha :in-memory               # In-memory tests (skips :integration)
bin/kaocha :test-cljs               # ClojureScript tests

# Run a single test namespace (note: use hyphens, not underscores)
bin/kaocha :test --focus intemporal.tests.signal-test

# Run crash recovery tests
bin/kaocha :test --focus intemporal.tests.crash.signal-wait-crash-test
bin/kaocha :test --focus intemporal.tests.crash.future-cancel-test

# Run tests via npx
npx shadow-cljs compile node
```

**Important**: Test namespaces use hyphens (e.g., `signal-wait-crash-test`), which map to underscored file names (`signal_wait_crash_test.clj`).

### Test Configuration

Test configuration is in [tests.edn](tests.edn):
- Line 37: `:kaocha.filter/skip-meta [:crash]` can be uncommented to skip crash tests
- Coverage reports: `target/coverage/index.html`
- JUnit XML reports: `target/test-reports/report.xml`

### REPL Development

```bash
# Start REPL with development dependencies
clojure -A:dev

# With FoundationDB support
clojure -A:dev:fdb

# With JDBC/PostgreSQL support
clojure -A:dev:jdbc
```

### Building

```bash
# Compile main namespaces
clojure -T:build compile-main

# Compile development namespaces
clojure -T:build compile-dev

# Build JAR
clojure -T:build jar
```

### Debug Configuration

The test runner ([bin/kaocha](bin/kaocha)) automatically starts a debug agent on port 5005:
```
-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005
```

### OpenTelemetry Tracing

The project includes OpenTelemetry instrumentation (see [deps.edn](deps.edn) lines 14-24):
- Java agent: `./opentelemetry-javaagent.jar`
- OTLP endpoint: `http://localhost:4317` (gRPC)
- Service name: `intemporal`
- Metrics and logs are disabled by default

## Code Patterns

### Defining a Workflow

```clojure
(require '[intemporal.core :as w])
(require '[intemporal.internal.macros :refer [defn-workflow]])

(defn-workflow my-workflow [arg]
  (let [activity-stub (w/stub some-activity-fn)]
    (activity-stub arg)))
```

### Activities

Activities can be:
- Regular functions: `(w/stub my-function)`
- Protocol methods: `(w/stub-protocol MyProtocol {})`

### Running Workflows

```clojure
(require '[intemporal.store :as store])

(def my-store (store/make-memstore))
(def executor (w/start-poller! my-store {`MyProtocol (->MyProtocolImpl)}))

;; Execute workflow (returns result in JVM, Promise in ClojureScript)
(def result (w/with-env {:store my-store}
              (my-workflow args)))
```

## Testing Guidelines

### Test Organization

- [test/intemporal/tests/](test/intemporal/tests/) - Main test directory
  - `async_test.clj` - Async operation tests
  - `cancellation_test.clj` - Workflow cancellation
  - `child_workflow_test.clj` - Nested workflow tests
  - `error_test.clj` - Error handling and retry policies
  - `signal_test.clj` - Signal send/receive
  - `timer_test.clj` - Timer scheduling
  - `tracing_test.clj` - OpenTelemetry tracing
  - [crash/](test/intemporal/tests/crash/) - Crash recovery scenarios

### Crash Recovery Tests

Tests in `test/intemporal/tests/crash/` verify workflow resilience:
- Execute workflow until suspension point
- Simulate crash (exception)
- Resume workflow and verify activities aren't re-executed
- Check workflow completes with correct result

## Dependencies

### Required Dependencies (all environments)
- Clojure 1.12.1+
- tools.logging + logback (structured logging)
- OpenTelemetry API (tracing)
- macrovich (cross-platform macros)

### Optional Dependencies (via aliases)
- `:fdb` - FoundationDB client
- `:jdbc` - PostgreSQL/JDBC persistence
- `:cljs` - ClojureScript support (shadow-cljs)
- `:dev` - Testing libraries (Kaocha, test.check, matcher-combinators, spy)

## Important Notes

- **Determinism**: Workflows must be deterministic for replay to work correctly. Use activities for any non-deterministic operations (random numbers, time, I/O).
- **Namespace Conventions**: File names use underscores (`signal_test.clj`), namespace names use hyphens (`signal-test`).
- **Production Readiness**: Per README, this library is NOT production-ready. Use at your own risk.
