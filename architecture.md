# (in)temporal Architecture & Design Guide

This document describes the durable workflow lifecycle and the execution path used by
intemporal.

## Components

```mermaid
graph TD
    API["start-workflow / submit-workflow"] --> Store[(IStore)]
    Store --> Worker["engine-owned worker: claim-runnable!"]
    Worker --> Drive["drive-workflow!"]
    Drive --> Context["pass-local replay context"]
    Drive --> Executor[IActivityExecutor]
    Drive --> Store
    Signal["signal / cancel / child completion"] --> Store
```

- `intemporal.core` owns submission, workers, workflow registration, and the public API.
- `intemporal.internal.execution/drive-workflow!` is the only replay entry point. It only
  accepts a claim returned by the store.
- `IStore` owns histories, signal queues, ownership, scheduling state, and wake versions.
- `IActivityExecutor` runs side effects. Timers and retry delays are store deadlines, not
  process-local scheduled callbacks.
- `IWorkflowObserver` receives lifecycle notifications.

`make-workflow-engine` is an active resource constructor: it registers configured
activities, recovers work for its owner, and starts exactly one bounded worker.
`start-workflow` and `submit-workflow` are two waiting styles over that one execution
model. The former submits and awaits a terminal event; the latter returns immediately.
An explicit `:worker? false` instance is a submission/status client and cannot start or
resume workflows.

## Store contract

`IStore` is the atomic persistence boundary. Implementations may use different indexes,
but InMemory, JDBC, and FoundationDB expose the same behavior:

- `save-events` commits a batch atomically. `save-event` is a namespace-level convenience
  over that operation, not a second protocol verb.
- An event identity is `[event-type seq nil]`, except
  `:activity-attempt-failed`, whose identity includes `:attempts`. An exact duplicate is a
  no-op. A conflicting write for an existing identity is first-write-wins. Retry attempts
  therefore remain distinct while replayed writes remain idempotent.
- `load-history` returns committed append order. Sequence is a deterministic replay
  address, not chronology: a completion at sequence 0 may commit after an event at
  sequence 1. JDBC retains its auto-increment append ordinal; FDB uses a transactional
  per-workflow ordinal plus a separate event-identity index.
- `find-event` is an indexed point read of the first durable identity. `max-seq` is also
  indexed; neither requires loading a full history.
- `save-events-and-wake!` appends and wakes in one transaction. `park-workflow!` compares
  `wake-version`, appends suspension events, and changes scheduling state in one
  transaction. There is no crash window in which a wake can be lost between those steps.
- Cancellation marking and its wake are atomic. A running drive reads cancellation at
  each workflow frontier, so cancellation may become visible between consecutive
  activities without waiting for another process-local cache refresh.
- Signals for one workflow/name are strict FIFO in commit order. JDBC uses the signal row
  id; FDB uses a transactionally contended per-queue ordinal. Process clocks and random
  suffixes never define queue order.
- A child is first seeded with `:workflow-started`; `link-child!` only records linkage for
  that existing child and never creates an empty workflow. If a process dies between
  those operations, deterministic parent replay sees the seed and repairs the idempotent
  link before persisting its scheduled marker.
- `claim-runnable!` atomically changes eligible work to `RUNNING` and grants at most one
  owner. Wake-version, ready/due indexes, and ownership indexes change in the same backend
  transaction as their scheduling state.
- Missing status is `:not-found`; every nonterminal scheduling state reads `:running`;
  terminal history fixes the corresponding terminal status. Terminal state cannot be
  woken or claimed.
- Store decorators preserve `AutoCloseable`. Closing a checked JDBC store closes its
  datasource; in-memory and FDB stores have no owned external resource to close.

The atomic operations above must not be reconstructed from independent public reads and
writes. JDBC keeps them in one SQL transaction, FDB in one FDB transaction, and the
in-memory store in one atom transition.

## Lifecycle and scheduling state

Public status is deliberately coarser than scheduling state:

| Public status | Meaning |
|---|---|
| `:not-found` | No workflow history exists. |
| `:running` | The workflow is runnable, executing, or waiting. |
| `:completed` | A `:workflow-completed` event is durable. |
| `:failed` | A `:workflow-failed` event is durable. |
| `:cancelled` | Cancellation was requested or a `:workflow-cancelled` event is durable. |
| `:terminated` | A `:workflow-terminated` event is durable. |

The store maintains the scheduling machine independently:

```mermaid
stateDiagram-v2
    [*] --> RUNNABLE: workflow-started
    RUNNABLE --> RUNNING: claim-runnable!
    RUNNING --> WAITING: park-workflow!
    WAITING --> RUNNING: claim-runnable! when due
    WAITING --> RUNNABLE: signal / cancel / child completion
    RUNNING --> RUNNING: concurrent wake increments wake_version
    RUNNABLE --> TERMINAL: terminal event
    RUNNING --> TERMINAL: terminal event
    WAITING --> TERMINAL: terminal event
```

An indefinite signal or join wait has `next-run-at = nil` and no scheduling-index entry.
Timers, signal timeouts, and retries persist their epoch deadline. Consequently worker scans
contain only runnable work and due clocks; the number of indefinite waiters does not affect
poll cost.

## Claimed drive

```mermaid
flowchart TD
    Claim["claim {:workflow-id :wake-version}"] --> Load["load one history snapshot"]
    Load --> Run["bind context and invoke workflow body"]
    Run --> Outcome{Outcome}
    Outcome -->|completed / cancelled / failed| Terminal["persist terminal event\nremove scheduling indexes"]
    Outcome -->|suspension| Dispatch["handle suspension"]
    Dispatch -->|activity completed or event became available| Continue["{:op :continue}"]
    Continue --> Load
    Dispatch -->|must wait| Park["{:op :park :events :next-run-at}"]
    Park --> Commit["park-workflow!(expected wake_version)"]
    Commit -->|parked| Waiting["return :parked"]
    Commit -->|wake-raced + current version| Load
    Outcome -->|executor stopping| Interrupted["return :interrupted; worker requeues"]
```

Each replay pass loads history once and builds a `(seq,event-type)` index. Workflow stubs
read only this snapshot. Completed operations return recorded values; the first operation
without a matching event throws a suspension to identify the deterministic frontier.

Suspension handlers return one of two shapes:

```clojure
{:op :continue}
{:op :park :reason :signal :events [...] :next-run-at nil}
```

Events required before an activity side effect are committed while the workflow remains
`RUNNING`. Events describing the final suspension are passed to `park-workflow!`, which
appends them atomically with `RUNNING -> WAITING`.

## Wake race

Every active workflow has a monotonic `wake_version`.

1. `claim-runnable!` returns the version observed when it changes the workflow to `RUNNING`.
2. A signal, cancellation, or child completion commits its data and wakes atomically.
3. Waking `WAITING` produces `RUNNABLE`; waking `RUNNING` only increments the version.
4. The drive parks with its expected version.
5. If the version is stale, `park-workflow!` appends no suspension events, leaves the row
   `RUNNING`, and returns the current version. The same drive immediately replays.

This prevents both a lost wake and concurrent redispatch.

## Activities, timers, and retries

An activity attempt runs once. Success or terminal failure is recorded before replay
continues. A retryable failure records `:activity-attempt-failed`, including the attempt
number and `:retry-at`, then parks at that deadline. Attempt budgets and delays therefore
survive crashes and do not occupy a drive thread.

Async activities use the same attempt logic in a bounded parallel batch. Joining an
unresolved handle parks; completion events wake the parent durably.

Timers persist `:timer-scheduled` before parking. A due claimed drive records
`:timer-fired`; no local scheduler or timer callback mutates workflow history.

## Child workflows

All children are independent persisted workflows with their own claim and history.
`run-child-workflow-async` returns a handle. `run-child-workflow` is exactly that operation
followed by `join`, so synchronous and asynchronous children share one implementation.

Child terminal persistence atomically appends completion/failure aliases to the parent and
wakes it. Parent close policies are `:terminate`, `:cascade-cancel`, and `:abandon`.

## Engine ownership and shutdown

A running engine owns exactly one worker. It claims at most its available
`:workflow-concurrency` capacity and executes claims in a bounded pool. Every poll yields,
including empty and capacity-exhausted polls.

Stable owner ids allow `recover-running!` to return same-owner crash leftovers to
`RUNNABLE`. A stable id must identify at most one live process: there are no leases or
fencing tokens yet. Generated `ephemeral-*` ids are suitable for local/in-memory engines,
not cross-process crash recovery. Workflow definitions and protocol implementations must
be loaded at construction, before recovery scans begin.

Controlled shutdown stops claiming, drains or interrupts current work within its grace
period, requeues interrupted nonterminal drives, releases ownership, and then shuts down
the activity executor. On Node, engine poll timers are unreferenced by default so a
forgotten embedded engine does not keep the process alive.

The remaining correctness and scalability boundaries are maintained in
[KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md).
