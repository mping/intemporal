# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project Overview

**intemporal** is a Clojure/ClojureScript library in the spirit of [temporal.io](https://temporal.io) or Uber Cadence. It lets you define functions with side effects whose state persists and resumes — workflows survive process crashes and resume transparently.

> :warning: **Not production ready.** Use at your own peril (per README).

Two core concepts:

- **Activities**: functions (or protocol implementations) that handle side effects. The unit of work that can fail and be retried.
- **Workflows**: functions that orchestrate activities with **at-least-once** semantics. On crash, a workflow replays its persisted event history to reconstruct state without re-executing completed activities. Workflows must be **deterministic** — any non-determinism (randomness, time, I/O) must go through activities.

Key mechanisms:

- **Event sourcing**: workflow state is reconstructed from an event log persisted via the `IStore` protocol.
- **Sequence numbers**: each activity/operation gets a monotonic sequence number for deterministic replay.
- **Suspensions**: workflows suspend (waiting for a signal or timer) and resume later; suspension control flow uses `Error` subclasses on the JVM (bypasses `catch Exception`) and plain `deftype`s on CLJS (bypasses `catch js/Error`).
- **Pending events**: during execution, events are buffered in the workflow context and atomically saved to the store.
- **Ownership / engine**: `make-workflow-engine` actively starts one recovery worker. Both blocking `start-workflow` and non-blocking `submit-workflow` go through durable ownership claims; `start-worker` is not a public API. Use a stable `:owner-id` for restart recovery and never run two live processes with the same identity.

## Technology Stack

- **Language**: Clojure 1.12.1 / ClojureScript 1.12.42 (dual-target via `.cljc` and parallel `.clj`/`.cljs` files)
- **Build/dependency tool**: Clojure CLI (`deps.edn`), `tools.build` (`build/build.clj`)
- **CLJS toolchain**: shadow-cljs (`shadow-cljs.edn`), Node.js ≥ 19 (CLJS tests run on Node)
- **Test runner**: Kaocha (with cloverage, junit-xml, kaocha-cljs plugins)
- **Persistence backends** (optional, via deps.edn aliases): FoundationDB 7.3 (`:fdb`), PostgreSQL/MariaDB via next.jdbc + HikariCP + Migratus (`:jdbc`)
- **Observability**: taoensso/telemere (logging), clj-otel-api + OpenTelemetry Java agent (JVM only)
- **CI**: Earthly (`Earthfile`) via GitHub Actions (`.github/workflows/ci.yaml`); GitHub Pages deploy (`static.yml`)

Prerequisites for development:

- Java 21+ (JVM side uses virtual threads)
- Clojure CLI 1.12+
- Node.js (for ClojureScript tests and shadow-cljs)
- Docker + Docker Compose (for integration tests: PostgreSQL, MariaDB, FoundationDB)
- On macOS, the FoundationDB native client libs at `/usr/local/lib/libfdb_c.dylib` and `libfdb_java.jnilib` (referenced by `bin/kaocha`)

## Project Layout

```
intemporal/
├── src/intemporal/            # Main source (dual CLJ/CLJS where possible)
│   ├── core.cljc              # Public API: stub, stub-protocol, defn-workflow,
│   │                          # start-workflow, resume-workflow, submit-workflow,
│   │                          # make-workflow-engine, shutdown-engine, with-workflow-engine,
│   │                          # wait-for-signal, send-signal, sleep, async, join,
│   │                          # run-child-workflow(-async/-detached), saga, compensate
│   ├── protocol.cljc          # IStore, IActivityExecutor, IWorkflowObserver
│   ├── spec.cljc              # clojure.spec definitions for the IStore boundary
│   ├── store.cljc             # InMemoryStore + create-store factory
│   ├── store/checked.cljc     # CheckedStore decorator validating IStore values against spec
│   ├── store/jdbc.clj         # PostgreSQL/MariaDB store (:jdbc alias; Migratus migrations)
│   ├── store/fdb.clj          # FoundationDB store (:fdb alias)
│   ├── observer.cljc          # Single-event observer factories (noop, logging, composite)
│   ├── tracing.clj            # OpenTelemetry tracing (JVM only)
│   ├── utils.cljc             # Compatibility time helper
│   └── internal/              # Implementation — do not depend on this from outside
│       ├── context.cljc       # Dynamic workflow context, seq counters, blet/bthen macros
│       ├── clock.cljc         # Engine wall-clock boundary
│       ├── domain.cljc        # Shared event/status/close-policy semantics
│       ├── execution/common.cljc  # Cross-platform synchronous execution helpers
│       ├── execution.clj/.cljs    # Platform-specific execution mechanics
│       ├── runtime.clj/.cljs      # Default IActivityExecutor (platform-specific)
│       ├── activity.cljc      # Activity registration/metadata
│       ├── error.cljc         # Suspensions, interruptions, rejections, cancellations
│       ├── logging.cljc       # Structured logging via telemere
│       ├── macros.cljc        # stub-protocol macro
│       ├── workflow_registry.cljc
│       ├── codec.clj          # Store value encoding/decoding
├── test/
│   ├── intemporal/tests/           # Main test suites (many in .clj + .cljs pairs)
│   │   ├── crash/                  # Crash-recovery scenario tests
│   │   ├── engine/                 # Engine internals (executor wiring, replay snapshot…)
│   │   ├── runtime/                # Runtime-level tests
│   │   ├── store/                  # Store conformance suite (store_test.clj, test_suite.clj)
│   │   ├── jepsen/                 # Deterministic per-scenario bug guard tests
│   │   └── utils.cljc              # Test utilities
│   └── intemporal/jepsen/          # Forked-JVM chaos harness (runner, worker, nemesis…)
├── build/build.clj            # tools.build tasks
├── doc/                       # Browser demo sources + handwritten static HTML
├── resources/migrations/      # Migratus migrations (postgres/, mariadb/)
├── docker/                    # OTel collector config, FDB init scripts
├── deps.edn                   # Dependencies and aliases
├── tests.edn                  # Kaocha configuration
├── shadow-cljs.edn            # CLJS builds: :doc (browser), :node (tests)
├── docker-compose.yaml        # Local infra: jaeger, otel-collector, foundationdb, postgres, mariadb
├── Earthfile                  # CI build (Earthly)
├── architecture.md            # Deep-dive design doc (lifecycle, engine internals)
├── DEVELOPMENT.md             # Contributor setup guide
└── README.md                  # Usage documentation
```

## Build and Test Commands

### Tests (Kaocha via `bin/kaocha`)

`bin/kaocha` wraps `clojure -A:dev:test:jdbc:fdb -M:test`, sets FDB native library paths on macOS, and installs the `ws` npm package if missing. There is a commented-out JDWP debug agent on port 5005 you can enable.

```bash
# Everything: JVM + ClojureScript
bin/kaocha

# Fast JVM tests, skips ^:integration (no DB needed)
bin/kaocha :in-memory

# JVM tests incl. ^:integration (needs PostgreSQL + FoundationDB running)
bin/kaocha :test

# ClojureScript tests (Node)
bin/kaocha :test-cljs

# Focus a single namespace (use hyphens, not underscores)
bin/kaocha :test --focus intemporal.tests.signal-test

# ClojureScript focus
bin/kaocha :test-cljs --focus cljs:intemporal.tests.crash.future-cancel-test

# See test output/logs
bin/kaocha :test --no-capture-output
```

### REPL

```bash
clojure -A:dev            # REPL with dev + test deps
clojure -A:dev:jdbc       # + PostgreSQL/JDBC
clojure -A:dev:fdb        # + FoundationDB
clojure -M:nrepl          # nREPL server on port 7888
```

### Build

```bash
clojure -T:build compile-main   # AOT-compile main namespaces
clojure -T:build jar            # Build target/intemporal.jar
npx shadow-cljs compile node    # Compile CLJS test build
bin/build-doc                   # Rebuild generated public/ demo output
```

### Linting

```bash
clj-kondo --parallel --lint src test build dev deps.edn resources
```

CI also lints `deps.edn` and `resources`. Config is in `.clj-kondo/config.edn` (custom `lint-as` mappings for project macros).

### Coverage

```bash
bin/run-coverage   # runs clj (PG), clj (MariaDB), cljs suites and merges lcov reports into coverage/
```

Coverage HTML report: `coverage/index.html`; JUnit XML: `target/test-reports/report.xml`. Env var `CLOVERAGE_OUTPUT` overrides the cloverage output dir.

### Integration infrastructure

```bash
docker compose up -d postgresql foundation   # PG on 5432, FDB on 4500
# also available: mariadb (3306), jaeger, otel-collector
```

- PostgreSQL URL: `jdbc:postgresql://localhost:5432/root?user=root&password=root` (override with `DATABASE_URL` for tests, `POSTGRES_JDBC_URI` for the chaos harness)
- FoundationDB cluster file: `docker/fdb.cluster`

### Chaos / Jepsen harness

Two distinct things live under the "jepsen" name:

1. **Per-scenario bug guard tests** — `test/intemporal/tests/jepsen/`: deterministic single-JVM regression tests, one namespace per former failure mode, each exercising InMemory + JDBC + FDB stores. `racing_store.clj` is a shared `IStore` wrapper that deterministically reproduces a signal race.

   ```bash
   bin/kaocha :in-memory --focus intemporal.tests.jepsen.bug-2-1-test
   bin/kaocha :test --focus intemporal.tests.jepsen.bug-1-1-test   # needs PG + FDB
   ```

2. **Forked-JVM chaos harness** — `test/intemporal/jepsen/`: boots N worker JVMs against one Postgres, drives submit/signal/cancel traffic, and a nemesis SIGKILL/SIGTERMs and restarts workers. See `test/intemporal/jepsen/README.md`.

   ```bash
   docker compose up -d postgresql
   clojure -X:dev:jdbc:jepsen intemporal.jepsen.runner/run :workers 4 :duration 120
   ```

### deps.edn aliases

| Alias | Purpose |
|---|---|
| `:dev` | Test/dev deps (Kaocha, logback, matcher-combinators, clj-async-profiler, OTel SDK testing, nREPL). Also carries `_jvm-opts` for the OTel Java agent — underscore prefix means they are **inactive by default**; rename to enable |
| `:test` | Kaocha main opts; sets `-Dclojure.spec.check-asserts=true` (every test doubles as a store-conformance check via CheckedStore) |
| `:fdb` | FoundationDB client (`fdb-java`, clj-fdb) |
| `:jdbc` | next.jdbc, PostgreSQL + MariaDB drivers, HikariCP, Migratus |
| `:cljs` | ClojureScript, shadow-cljs 3.x, hiccups |
| `:jepsen` / `:jepsen-worker` | Chaos harness runner / forked worker JVMs |
| `:build` | tools.build |
| `:nrepl` | nREPL server on port 7888 |
| `:doc` | Demo sources path |

## Code Style Guidelines

- Standard Clojure conventions: `kebab-case` for functions/vars, small focused functions.
- File names use **underscores** (`signal_test.clj`); namespaces use **hyphens** (`signal-test`). When focusing tests by namespace, always use hyphens.
- Dual-target design: share code in `.cljc` where possible; platform-specific code lives in paired `.clj`/`.cljs` files (e.g. `internal/execution.clj` vs `execution.cljs`).
- Cross-platform macros use `net.cgrand/macrovich`.
- JVM execution uses virtual threads with blocking calls; CLJS uses promise chains (promesa). On CLJS, use the internal context macros `blet`/`bthen`/`bfinally` (from `intemporal.internal.context`) to restore the dynamic `*workflow-context*` binding inside promise callbacks.
- CLJS sagas must `(catch :default e …)` and explicitly rethrow engine suspensions: `(when (intemporal/suspension? e) (throw e))`.
- When adding clj-kondo noise for new macros, extend `.clj-kondo/config.edn` `lint-as` mappings.

## Testing Instructions

- Test config: `tests.edn`. Suites: `:in-memory` (skips `:integration` meta), `:test` (full JVM, skips `:jepsen` meta), `:test-cljs` (CLJS on Node).
- `:kaocha.filter/skip-meta [:crash]` in `tests.edn` can be uncommented to skip crash tests.
- Most test suites exist as `.clj` + `.cljs` pairs — when changing shared behaviour, update and run both.
- Store implementations are tested against a shared conformance suite (`test/intemporal/tests/store/test_suite.clj`); with `clojure.spec.check-asserts=true` (set by the `:test` alias), `CheckedStore` validates every `IStore` call against `intemporal.spec`.
- Crash-recovery tests (`test/intemporal/tests/crash/`) execute a workflow to a suspension point, simulate a crash, resume, and verify activities are not re-executed.
- **Known flaky test**: `intemporal.tests.replay-check-test/test-log-once-workflow` can fail under full-suite load (pre-existing; passes in isolation).
- Integration tests (`^:integration`) require PostgreSQL and FoundationDB up via docker compose; MariaDB tests use `DATABASE_URL=jdbc:mariadb://localhost:3306/root?user=root&password=root`.

## Deployment / CI

- **CI** (`.github/workflows/ci.yaml`): runs `earthly -P +test` (see `Earthfile`) with docker-compose services, then posts LCOV coverage comments. The Earthfile also has `+lint`, `+build-main`, `+build-jar`, `+build-cljs` targets.
- **Demo site**: `.github/workflows/static.yml` runs `bin/build-doc` and deploys its generated `public/` output to GitHub Pages on pushes to `main`/`doc` (https://mping.github.io/intemporal/). Do not commit `public/`.
- **JAR**: `clojure -T:build jar` → `target/intemporal.jar`.

## Security Considerations

- Secrets live in `.env` (git-ignored) — do not commit credentials. docker-compose databases use trivial local-only passwords (`root`/`root`); never reuse these outside local development.
- The OTel Java agent (`opentelemetry-javaagent.jar`, ~23 MB) is checked in at the repo root and pointed at `http://localhost:4317`; metrics and logs exporters are disabled by default.
- Workflows execute arbitrary user code; activities run on shared executor threads — treat activity code as trusted.
- The library is explicitly **not production ready**; persistence backends and the recovery/worker logic are under active correctness work (see `test/intemporal/tests/jepsen/` bug-guard tests).

## Miscellaneous

- Always run `grep` with `--color=never`.
- `architecture.md` is the authoritative deep-dive on the engine internals (lifecycle states, run-workflow-internal loop, store protocols) — read it before making engine changes.
