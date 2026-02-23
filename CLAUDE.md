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

1. **Core API** ([src/intemporal/core.cljc](src/intemporal/core.cljc))
   - `stub` - Creates activity stubs for use in workflows
   - `stub-protocol` - Creates protocol stubs for use in workflows
   - `start-workflow`, `resume-workflow` - Workflow execution entry points
   - `make-workflow-engine`, `with-workflow-engine` - Engine lifecycle
   - `wait-for-signal`, `send-signal`, `sleep`, `async`, `join` - Workflow operations
   - `run-child-workflow`, `cancel-workflow` - Child workflows and cancellation

2. **Protocol Definitions** ([src/intemporal/protocol.cljc](src/intemporal/protocol.cljc))
   - `IStore` - Workflow persistence (history, signals, cancellation)
   - `IActivityExecutor` - Activity execution with timeout/retry
   - `IScheduler` - Timer scheduling
   - `IWorkflowObserver` - Event observation for monitoring/tracing

3. **Internal Components** (src/intemporal/internal/)
   - `context.cljc` - Dynamic workflow context with sequence counters, pending events
   - `execution.clj` / `execution.cljs` - Workflow execution engine (platform-specific)
   - `runtime.clj` / `runtime.cljs` - Default implementations of `IActivityExecutor` and `IScheduler` (platform-specific)
   - `activity.cljc` - Activity registration and metadata
   - `error.cljc` - Error types (suspensions, interruptions, rejections, cancellations)
   - `logging.cljc` - Structured logging via taoensso/telemere
   - `macros.cljc` - `stub-protocol` macro
   - `fns/start_workflow.clj` / `fns/start_workflow.cljs` - Workflow start logic (platform-specific)

4. **Store Implementations** ([src/intemporal/store.cljc](src/intemporal/store.cljc))
   - `InMemoryStore` - In-memory implementation of `IStore`
   - Additional stores: FoundationDB (`store/fdb.clj`, `:fdb` alias), JDBC (`store/jdbc.clj`, `:jdbc` alias)

5. **Observer** ([src/intemporal/observer.cljc](src/intemporal/observer.cljc))
   - `noop-observer`, `make-logging-observer` - Observer factories
   - `observer/otel.clj` - OpenTelemetry observer implementation

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

# Focus cljs tests
bin/kaocha :test-cljs --focus cljs:intemporal.tests.crash.future-cancel-test

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

The test runner ([bin/kaocha](bin/kaocha)) has a commented-out debug agent on port 5005 that can be enabled:
```
-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005
```

### OpenTelemetry Tracing

The project includes OpenTelemetry instrumentation (see [deps.edn](deps.edn) `:dev` alias, `_jvm-opts`):
- Java agent: `./opentelemetry-javaagent.jar`
- OTLP endpoint: `http://localhost:4317` (gRPC)
- Service name: `intemporal`
- Metrics and logs are disabled by default
- Note: The OTel JVM opts use the `_jvm-opts` key (underscore prefix), so they are **not active by default** - they must be manually enabled

## Code Patterns

### Defining a Workflow

Workflows are regular functions that use `stub` to wrap activity calls:

```clojure
(require '[intemporal.core :as intemporal])

(defn my-activity [arg]
  [:processed arg])

(defn my-workflow [arg]
  (let [act (intemporal/stub #'my-activity)]
    (act arg)))
```

### Activities

Activities can be:
- Regular functions (via var): `(intemporal/stub #'my-function)`
- Protocol methods: `(intemporal/stub-protocol MyProtocol)`

### Running Workflows

```clojure
(require '[intemporal.core :as intemporal])

;; Using with-workflow-engine (ensures cleanup)
(intemporal/with-workflow-engine [engine {:threads 4}]
  (intemporal/start-workflow engine my-workflow [arg]))

;; Or manually managing the engine
(let [engine (intemporal/make-workflow-engine :threads 4)]
  (try
    (intemporal/start-workflow engine my-workflow [arg])
    (finally
      (intemporal/shutdown-engine engine))))
```

## Testing Guidelines

### Test Organization

- [test/intemporal/tests/](test/intemporal/tests/) - Main test directory
  - `async_test.clj` / `.cljs` - Async operation tests
  - `cancellation_test.clj` / `.cljs` - Workflow cancellation
  - `child_workflow_test.clj` / `.cljs` - Nested workflow tests
  - `error_test.clj` / `.cljs` - Error handling and retry policies
  - `signal_test.clj` / `.cljs` - Signal send/receive
  - `timer_test.clj` / `.cljs` - Timer scheduling
  - `tracing_test.clj` - OpenTelemetry tracing (JVM only)
  - `protocol_test.clj` - Protocol tests
  - `replay_check_test.clj` - Replay verification
  - `stub_protocol_test.cljc` - Protocol stubbing tests
  - `context_macros_test.cljs` - Context macros (ClojureScript only)
  - `utils.cljc` - Test utilities
  - [store/](test/intemporal/tests/store/) - Store-specific tests
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
- taoensso/telemere (structured logging)
- clj-otel-api (OpenTelemetry tracing)
- macrovich (cross-platform macros)
- promesa (promises, required for ClojureScript)
- cheshire (JSON)
- shadow-cljs

### Optional Dependencies (via aliases)
- `:fdb` - FoundationDB client
- `:jdbc` - PostgreSQL/JDBC persistence (next.jdbc, PostgreSQL, HikariCP, migratus)
- `:cljs` - ClojureScript support
- `:dev` - Testing libraries (Kaocha, kaocha-cloverage, kaocha-junit-xml, kaocha-cljs, logback, spy, matcher-combinators, clj-async-profiler)

## Important Notes

- **Determinism**: Workflows must be deterministic for replay to work correctly. Use activities for any non-deterministic operations (random numbers, time, I/O).
- **Namespace Conventions**: File names use underscores (`signal_test.clj`), namespace names use hyphens (`signal-test`).
- **Production Readiness**: Per README, this library is NOT production-ready. Use at your own risk.
