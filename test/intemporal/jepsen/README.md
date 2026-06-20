# Jepsen Chaos Test for `intemporal`

## Context

**What this tests.** `intemporal` is a Clojure workflow engine inspired by Temporal/Cadence.
This chaos harness runs multiple worker JVMs against a shared Postgres store, injects
SIGKILL/SIGTERM faults, and checks four correctness invariants after a quiesce period.

**Why a chaos test.** The library's event-sourcing design gives strong single-process
resilience, but several structural bugs make it unsafe under multi-process deployment
(see `improvements.md`). Existing unit tests and crash tests cover the happy path;
this harness exercises the failure path by combining real process kills with
concurrent access to the same Postgres schema.

**Scope.** Local-only / on-demand — not in CI. Run with `clojure -X:dev:jdbc:jepsen`.
Each "node" is a forked JVM, not a Docker/SSH container. We use our own orchestrator
rather than the `jepsen/jepsen` library (same rationale as the ablauf Jepsen tests:
the safety properties are DB-mediated, not OS-mediated).

---

## Bugs under test

| Bug | improvements.md ref | Description |
|-----|---------------------|-------------|
| 1.1 | §1.1 | No wake mechanism survives pod restart. Signal callbacks live in a process-local atom; a dead worker's callbacks are gone forever. |
| 1.2 | §1.2 | No ownership / silent concurrent execution. `ON CONFLICT DO UPDATE` masks concurrent writes to `intemporal_history`. |
| 1.3 | §1.3 | No recovery poller. Restarting a worker does not resume the workflows it was running. |
| 2.1 | §2.1 | Register-then-consume signal race. Between the consume-check and register-callback call, a concurrent sender's signal is dropped. |
| 2.3 | §2.3 | Cancellation cannot reach a sleeping workflow. The cancelled flag is set but never observed by a workflow blocked in `wait-for-signal`. |

---

## Architecture

```
             ┌─────────────────────────────────────┐
             │   runner.clj (host JVM)              │
             │   - generator  (submit/cancel/signal) │
             │   - nemesis    (kill/restart/signal)  │
             │   - checker    (4 invariants)         │
             └──────────┬──────────────────────────┘
                        │ writes jepsen_work_queue
                        │ reads  intemporal_* tables
        ┌───────────────┼─────────────────────┐
        │               │                     │
    ┌───▼───┐       ┌───▼───┐     ...    ┌───▼───┐
    │worker0│       │worker1│            │workerN│
    │JVM    │       │JVM    │            │JVM    │
    └───┬───┘       └───┬───┘            └───┬───┘
        └───────────────┴────────────────────┘
                        ▼
               Postgres (docker or local)
               ┌──────────────────────────────┐
               │ intemporal_workflows          │
               │ intemporal_history            │
               │ intemporal_signals            │
               │ jepsen_work_queue             │ ← test coordination
               │ jepsen_invocations            │ ← side-channel
               │ jepsen_signals_sent           │
               │ jepsen_cancels_sent           │
               └──────────────────────────────┘
```

**Process model.** Each worker is a JVM forked by `ProcessBuilder` from the runner.
`destroyForcibly()` (SIGKILL) skips the JVM shutdown hook, destroying the
process-local `callbacks` atom in `JdbcStore` — reproducing bug 1.1.

---

## Files

| File | Role |
|------|------|
| [runner.clj](runner.clj) | Orchestrator: phases 1–5, entry point |
| [worker.clj](worker.clj) | Forked-JVM entry: engine, work-queue poll loop |
| [db.clj](db.clj) | Subprocess registry: `fork!`, `kill!`, `alive?`, schema setup |
| [client.clj](client.clj) | Test operations: submit, signal, cancel, observe, concurrent-start |
| [nemesis.clj](nemesis.clj) | Fault injector: kill/restart workers, signal dead workflows |
| [checker.clj](checker.clj) | Post-quiesce invariants (4 checkers) |
| [workflows.clj](workflows.clj) | Workflow shapes W1–W4, side-channel activity |
| [test/resources/migrations/jepsen/postgres/](../../../../resources/migrations/jepsen/postgres/) | Side-channel table migrations |

---

## Workflow shapes

| Shape | Type | Bug probed |
|-------|------|------------|
| W1 `signal-wait-workflow` | Records `:before`, waits on signal `"go"`, records `:after` | **1.1** lost wake |
| W2 `activity-chain-workflow` | Runs N activities in sequence | **1.3** no recovery poller |
| W3 `cancel-sleep-workflow` | Records `:started`, waits on `"wake"` forever | **2.3** cancel can't reach sleeper |
| W4 `rapid-signal-workflow` | Suspends immediately on `"immediate"` | **2.1** signal race |

---

## Checkers

All checkers run after the quiesce phase. Each returns `{:valid? bool :violations [...] :stats {...}}`.

**1. Liveness** (bugs 1.1, 1.3)
Every submitted workflow must be in a terminal state (`workflow-completed`, `workflow-failed`).
Workflows stuck as `:running` after quiesce + grace are violations.

**2. Signal consumed** (bug 2.1)
Every signal row written to `intemporal_signals` by the test must eventually be consumed.
Orphaned rows after quiesce flag either the lost-callback (1.1) or the register-then-consume
race (2.1) — the distinction is visible in the nemesis history (was the worker alive?).

**3. History integrity** (bug 1.2)
For workflows started via the `concurrent-start` op, `intemporal_history` must contain
`seq=0` with `event_type = 'workflow-started'` only. If a concurrent writer's
`ON CONFLICT DO UPDATE` clobbered it with a different event type, the violation is recorded.

**4. Cancellation liveness** (bug 2.3)
Workflows with `cancelled = TRUE` in `intemporal_workflows` must have a terminal last event.
If the workflow is still `:running` (last event not `:workflow-completed/failed/cancelled`),
the cancel flag was never observed — the workflow is stuck sleeping.

---

## Expected results with the current (unfixed) codebase

| Checker | Expected result | Reason |
|---------|-----------------|--------|
| liveness | **FAIL** | Workers crash; no auto-resume; W1/W2 workflows stuck |
| signal-consumed | **FAIL** (intermittent) | Signals sent to dead workers land in DB; callbacks gone |
| history-integrity | **FAIL** (if concurrent-start runs) | `DO UPDATE` silently clobbers seq=0 |
| cancellation-liveness | **FAIL** | `cancel-workflow` sets flag but never wakes sleeper |

After the Phase A + B + C fixes from `improvements.md`, all four should **PASS**.

**Smoke checks:**

- Run with `:no-kill true` — all checkers should pass (no chaos, happy path).
- Run normally — checkers should fail as documented above.
- After implementing A1 (signal race fix) — checker 2 should pass.
- After implementing A2 (cancellation wake) — checker 4 should pass.
- After implementing Phase C (distributed primitives) — checkers 1 and 2 should pass.

---

## Side-channel

`jepsen_invocations` records every activity invocation with `:begin`/`:end`/`:fail` phases
using a **separate auto-commit Hikari pool** (`*side-ds*`), so rows survive a SIGKILL.
`jepsen_signals_sent` and `jepsen_cancels_sent` track what the test issued, enabling the
checker to cross-reference intent vs. outcome.

Dynamic vars (`*side-ds*`, `*test-run*`, `*owner*`) are bound in `worker.clj` before
calling `start-workflow` or `resume-workflow`, so activities can write to the side-channel
without the workflow function carrying a non-serialisable connection reference.

---

## Running

```bash
# 1. Start Postgres (if not already running)
docker run -d --name intemporal-pg \
  -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root \
  -p 5432:5432 postgres:16

# 2. Run the chaos test (4 workers, 120s active, 90s grace)
clojure -X:dev:jdbc:jepsen intemporal.jepsen.runner/run \
  :workers 4 :duration 120

# 3. No-kill baseline (should pass all checkers)
clojure -X:dev:jdbc:jepsen intemporal.jepsen.runner/run \
  :workers 4 :duration 60 :no-kill true

# 4. Aggressive run (more workers, faster kills)
clojure -X:dev:jdbc:jepsen intemporal.jepsen.runner/run \
  :workers 6 :duration 180 :nemesis-min-ms 1500 :nemesis-jitter-ms 3000 \
  :min-alive 1 :grace-s 120
```

The JDBC URL defaults to `DATABASE_URL` env var or `localhost:5432/root`.

---

## Risks / limitations

1. **No jepsen/jepsen library.** We implement our own orchestrator (same approach as
   the ablauf Jepsen tests). The history format is compatible with jepsen.history for
   future migration. Adding sshd/containers would mostly be a `db.clj` swap.

2. **Worker classpath boot time.** Each `clojure -X:...` invocation takes 10–30s to
   compile on first run due to AOT. Subsequent runs are faster if the dep cache is warm.
   Increase `boot-timeout-ms` in `db/fork!` if workers time out during setup.

3. **Bug 1.2 detection is approximate.** We inject a sentinel `event_type` from the
   second concurrent writer. The real damage (last-writer-wins on seq=0) is masked by
   `DO UPDATE` — a production incident would manifest as non-deterministic replay, not
   a visible row. The checker catches the sentinel as a proxy for the real corruption.

4. **Bug 2.1 is intermittent.** The register-then-consume race requires precise timing.
   The `rapid-signal` workflow + 50ms signal loop creates high contention, but the race
   window is narrow. Run multiple times or increase `:submit-rps` to improve hit rate.
