# Multi-process chaos harness

This on-demand harness runs several forked JVMs against one PostgreSQL database,
injects SIGKILL/SIGTERM faults, restarts each stable owner, and checks durable
workflow invariants after quiescence. It complements deterministic store and race
tests; it is not based on the `jepsen/jepsen` library and is not run in CI.

## Properties under test

- A signal committed while a workflow's process is dead remains durable and wakes
  the workflow after its stable owner restarts.
- Store claims prevent concurrent engines from driving the same workflow.
- Engine construction calls same-owner recovery before its normal claim loop, so
  interrupted `RUNNING` workflows resume without an external `resume-workflow` call.
- The park/wake version protocol prevents a signal racing with suspension from being
  lost.
- Cancellation atomically wakes a waiting workflow so it can finalize.
- Concurrent writes of one event identity converge to exactly one first-write-wins
  history row.

Both a no-kill baseline and a kill/restart run are expected to pass all checkers.

## Process model

The host runner owns a workload generator and a fault injector. Each worker is a JVM
forked with `ProcessBuilder`; `destroyForcibly()` models a hard crash by skipping the
shutdown hook. Every replacement process uses the same stable `:owner-id` as the
process it replaces. Two live processes are never intentionally given the same owner
because intemporal does not yet have leases or fencing tokens.

Workers claim durable test specifications from `jepsen_work_queue`, submit them to
their active engine, and reconcile queue rows after restart. A separate JDBC store in
the host process sends signals and cancellation requests through the public API, so
signal persistence and scheduling wake occur in one store transaction.

Activity invocations are recorded in `jepsen_invocations` through a separate
auto-commit Hikari pool. The side-channel configuration is installed in a process-local
atom before engine construction, because engine drive threads do not inherit dynamic
bindings from the queue poller.

## Workflow shapes

| Shape | Exercise |
|---|---|
| `signal-wait-workflow` | activity, durable signal wait, activity |
| `activity-chain-workflow` | repeated activity recovery after process loss |
| `cancel-sleep-workflow` | cancellation of an indefinite signal wait |
| `rapid-signal-workflow` | signal racing with initial park |

## Checkers

After the generator and nemesis stop, every stable owner is restarted and the runner
waits for a grace period. It then checks:

1. Every workflow expected to finish without cancellation has a terminal event
   (`cancel-sleep` intentionally parks forever unless cancelled).
2. Every signal recorded by the harness was consumed.
3. Every concurrently written canonical event identity has exactly one row.
4. Every cancelled workflow reached a terminal event.

The harness uses real process faults, but it is still a local orchestrator rather than
a formal linearizability test. Deterministic race coverage lives under
`test/intemporal/tests/jepsen/`.

## Running

```bash
docker compose up -d postgresql

# No-kill baseline
clojure -X:dev:jdbc:jepsen intemporal.jepsen.runner/run \
  :workers 2 :duration 30 :grace-s 30 :no-kill true

# Kill/restart run
clojure -X:dev:jdbc:jepsen intemporal.jepsen.runner/run \
  :workers 4 :duration 120 :grace-s 90

# More aggressive faults
clojure -X:dev:jdbc:jepsen intemporal.jepsen.runner/run \
  :workers 6 :duration 180 :nemesis-min-ms 1500 \
  :nemesis-jitter-ms 3000 :min-alive 1 :grace-s 120
```

The JDBC URL comes from `DATABASE_URL`, falling back to the repository's local
PostgreSQL URL. Worker startup can take tens of seconds on a cold dependency cache;
increase `boot-timeout-ms` in `db/fork!` if the READY handshake times out.
