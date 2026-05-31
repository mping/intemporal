# Development Guide

This document describes how to set up your development environment and contribute to the project.

## Prerequisites

- **Java 21+** (uses virtual threads)
- **Clojure CLI** 1.12+
- **Node.js** (for ClojureScript tests)
- **Docker** + **Docker Compose** (for integration tests with PostgreSQL and FoundationDB)

## Quick Start

```bash
# Install dependencies and run tests
bin/kaocha
```

## Project Structure

```
intemporal/
├── src/intemporal/        # Main source code
│   ├── core.cljc          # Public API
│   ├── protocol.cljc      # Core protocols (IStore, etc.)
│   ├── store.cljc         # In-memory store
│   ├── store/             # JDBC and FDB stores
│   └── internal/          # Internal implementation
├── test/                  # Tests
├── dev/                   # Development utilities
└── resources/migrations/  # Database migrations
```

## Database Setup

For integration and chaos tests, start the databases:

```bash
docker compose up -d postgresql foundation
```

- **PostgreSQL** on port 5432 — `jdbc:postgresql://localhost:5432/root?user=root&password=root`
- **FoundationDB** on port 4500 — cluster file at `docker/fdb.cluster`

Override the Postgres URL with `DATABASE_URL` (kaocha store/integration tests) or
`POSTGRES_JDBC_URI` (the chaos harness) if your setup differs.

## Running Tests

```bash
# Everything: JVM + ClojureScript
bin/kaocha

# Fast JVM tests, skips ^:integration (no DB needed)
bin/kaocha :in-memory

# JVM tests incl. ^:integration (needs PostgreSQL + FoundationDB)
bin/kaocha :test

# ClojureScript tests (Node)
bin/kaocha :test-cljs

# Focus a single namespace (use hyphens, not underscores)
bin/kaocha :test --focus intemporal.tests.signal-test
```

## Jepsen / Chaos Tests

There are **two** distinct things under the "jepsen" name.

### 1. Per-scenario bug guard tests — `test/intemporal/tests/jepsen/`

Deterministic single-JVM tests, one namespace per known failure mode, each exercising
InMemory + JDBC + FDB. They double as regression guards: a *fixed* bug's test asserts the
correct behaviour, an *unfixed* bug's test asserts the buggy behaviour it still exhibits.

| Namespace | Bug (see `improvements.md`) | State |
|---|---|---|
| `bug-1-1-test` | Lost wake on signal across pods | buggy (Phase C) |
| `bug-1-2-test` | Concurrent same-seq write corruption | buggy (Phase C) |
| `bug-1-3-test` | No recovery poller on restart | buggy (Phase C) |
| `bug-2-1-test` | Register-then-consume signal race | **fixed** (Phase A) |
| `bug-2-3-test` | Cancel can't reach a sleeper | **fixed** (Phase A) |

```bash
# in-memory variants only (no DB)
bin/kaocha :in-memory --focus intemporal.tests.jepsen.bug-2-1-test \
                      --focus intemporal.tests.jepsen.bug-2-3-test

# all three stores (start PG + FDB first)
docker compose up -d postgresql foundation
bin/kaocha :test --focus intemporal.tests.jepsen.bug-1-1-test \
                 --focus intemporal.tests.jepsen.bug-1-2-test \
                 --focus intemporal.tests.jepsen.bug-1-3-test \
                 --focus intemporal.tests.jepsen.bug-2-1-test \
                 --focus intemporal.tests.jepsen.bug-2-3-test
```

`racing_store.clj` is a shared `IStore` wrapper that pins the executing thread inside the
signal consume/register window so `bug-2-1` reproduces its race 100% deterministically.

### 2. Forked-JVM chaos harness — `test/intemporal/jepsen/`

Boots N worker JVMs against one Postgres, drives a submit/signal/cancel generator and a
nemesis that SIGKILL/SIGTERMs and restarts workers, then checks invariants after a quiesce
phase. This is the integration vehicle for the Phase C multi-pod work. Full design:
[test/intemporal/jepsen/README.md](test/intemporal/jepsen/README.md).

```bash
docker compose up -d postgresql

# default chaos run: 4 workers, 120s active, 90s grace
clojure -X:dev:jdbc:jepsen intemporal.jepsen.runner/run :workers 4 :duration 120

# no-kill baseline (should pass all checkers)
clojure -X:dev:jdbc:jepsen intemporal.jepsen.runner/run :workers 4 :duration 60 :no-kill true

# aggressive
clojure -X:dev:jdbc:jepsen intemporal.jepsen.runner/run \
  :workers 6 :duration 180 :nemesis-min-ms 1500 :nemesis-jitter-ms 3000 :min-alive 1 :grace-s 120
```

The runner forks workers via the `:jepsen-worker` alias; both `:jepsen` and `:jepsen-worker`
are defined in `deps.edn`. The Postgres URL comes from `POSTGRES_JDBC_URI` (default localhost).

### Standalone bug reproducer

`dev/verify_bugs.clj` runs all five scenarios against JDBC + FDB and prints a pass/fail
report — a quick end-to-end smoke check:

```bash
clojure -X:dev:jdbc:fdb verify-bugs/run
```

### Known flaky test

`intemporal.tests.replay-check-test/test-log-once-workflow` can fail under full-suite load
(`run-once` persists its dedup marker lazily; parallel `async`/`join-all` can re-run the
thunk). It is **pre-existing** (reproduces on pre-Phase-A commits) and unrelated to the
signal/cancel work. It passes reliably in isolation.

## REPL Development

```bash
clojure -A:dev            # REPL with dev + test deps
clojure -A:dev:jdbc       # + PostgreSQL/JDBC
clojure -A:dev:fdb        # + FoundationDB
clojure -M:nrepl          # nREPL server on port 7888
```

## Code Style

- Follow standard Clojure conventions
- Use `kebab-case` for functions and variables
- Keep functions small and focused
- Write tests for new functionality
- File names use underscores (`signal_test.clj`); namespaces use hyphens (`signal-test`)
- Always pass `--color=never` to `grep`
