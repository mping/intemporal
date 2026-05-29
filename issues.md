# Intemporal Design Critique — Multi-Pod / k8s Replica Set Context

## Context

The user asked for a design analysis of the `intemporal` library, with explicit focus on:
- Deadlocks and "lost workflow" failure modes
- Other criticism
- Behaviour under a Kubernetes deployment where multiple pods of a replica set run the engine concurrently and can scale up/down

The library positions itself as "Temporal/Cadence-inspired" — an event-sourced workflow engine where workflow state is reconstructed from a persisted event log so that activities don't re-execute after a process crash.

This document is an **analysis deliverable**, not an implementation plan. It is structured to be useful as input for an architecture decision (adopt / fork / replace / contribute fixes).

---

## TL;DR

**`intemporal` is a single-process resilient workflow engine. It is unsafe to run more than one replica against the same store. The README's "not production-ready" disclaimer is accurate — and the gap to a true distributed orchestrator is structural, not cosmetic.**

The two showstoppers for any k8s replica-set deployment:

1. **No durable wake mechanism.** Signal callbacks and timers live in a process-local atom. When the pod that registered them dies, nothing in the system knows to wake the workflow again. The workflow is *persisted but orphaned*.
2. **No ownership / leasing.** Two pods can race on the same `workflow-id` with no detection. The JDBC store actively masks the race with `ON CONFLICT … DO UPDATE`, silently corrupting the event log.

A third structural issue: there is **no poller / recovery worker**. After a crash, no pod scans for workflows that should be running. Resume only happens if an external actor explicitly calls `resume-workflow` with the right function and args. Durability of state without durability of execution is illusion.

---

## Architecture Summary (what I'm critiquing)

Verified from the source:

- **Engine** (`src/intemporal/core.cljc:445`): a map of `{:store :executor :scheduler :registry :observer}`. No identity, no node id, no clustering primitives.
- **start-workflow** (`src/intemporal/internal/fns/start_workflow.clj:8-78`): generates a UUID, writes `:workflow-started`, calls `run-workflow-internal` **synchronously on the calling thread**, then loops blocking on a local `promise` until the workflow completes or is interrupted.
- **resume-workflow** (`src/intemporal/core.cljc:366-390`): the caller must supply `workflow-id`, `workflow-fn`, and `args`. The engine replays history and re-enters execution.
- **Stores** implement `IStore` (`src/intemporal/protocol.cljc:8-21`). The protocol contains only: history read/write, signal add/consume, callback register/unregister, cancellation flag, and status. **No claim, no lease, no heartbeat, no "list running workflows".**
- **JDBC store** (`src/intemporal/store/jdbc.clj`): events written under transactions; uses `ON CONFLICT (workflow_id, seq) DO UPDATE` (line 100-103); signal consumption uses `FOR UPDATE SKIP LOCKED` (line 137). Signal callbacks are kept in a **per-process atom** on the store record (line 72, 143-147).
- **InMemoryStore** (`src/intemporal/store.cljc:8-78`): identical callback semantics — a single atom.
- **DefaultScheduler** (`src/intemporal/internal/runtime.clj`): timers held in an in-memory `pending-timers` atom. Lost on process exit.

---

## Section 1 — Distributed-Deployment Showstoppers

### 1.1 No wake mechanism survives a pod restart  *(severity: critical)*

`register-signal-callback` and `schedule-timer` store their continuation **inside the process** (atom for signals, `ScheduledFuture` for timers). Concretely:

- `JdbcStore` carries `callbacks` as `(atom {})` at construction (`src/intemporal/store/jdbc.clj:72`). Two pods sharing the same Postgres each have their own empty atom.
- `add-signal` in JDBC (`src/intemporal/store/jdbc.clj:122-132`) writes the signal under a transaction, then does `(when-let [callback (get-in @callbacks [workflow-id signal-name])] (future (callback)))` — **only the pod that registered the callback can fire it**.

Failure trace:

1. Pod A executes workflow X up to `(wait-for-signal :go)`. It writes the suspension to history, registers callback in **pod-A-local atom**, blocks the calling thread on a promise.
2. Pod A crashes (k8s scale-down, OOM, node failure).
3. Pod B receives an HTTP request → calls `(send-signal store "X" :go {})`. Postgres now has the signal row. Pod B's local callbacks atom is empty for X → **no wake**.
4. Workflow X is permanently stuck. Its history is intact, its signal is queued, and no process knows to re-enter execution.

Timers have the same problem with worse blast radius: a 1-hour timer scheduled on pod A *vanishes* the moment pod A dies, even if nobody sends a signal. No row in any table, no scheduled job, no poller.

**This is the "losing workflows" failure mode**, and it does not require any race: it happens on every routine k8s rolling restart.

### 1.2 No ownership → silent concurrent execution  *(severity: critical)*

`start-workflow` and `resume-workflow` do not claim anything. Two pods can run the same workflow id concurrently. Specifically:

- `JdbcStore.save-events` uses `ON CONFLICT (workflow_id, seq) DO UPDATE` (`src/intemporal/store/jdbc.clj:100-103`). When two pods append the same seq, **the loser silently wins** (last writer overwrites). The race is masked; the event log is non-deterministic.
- Activities are re-executed on each pod — at-least-once degrades to at-many-times.
- The replay invariant ("same input → same event stream") is violated because two engines may emit different events at the same seq.

This becomes very easy to trigger: `start-workflow` blocks the caller. A reverse-proxy retry on a slow `POST /workflows` will re-invoke `start-workflow`, and if the client supplies `:workflow-id` for idempotency the second call appends a duplicate `:workflow-started` event to history rather than rejecting (no uniqueness check; the `seq` for the first event likely overwrites if both pods reach `seq=0` simultaneously).

A safer schema would use `ON CONFLICT DO NOTHING` (or reject) on event inserts, plus a `(workflow_id, owner_lease, lease_expires_at)` claim row.

### 1.3 No recovery poller  *(severity: critical)*

There is no background process anywhere in the codebase that scans for workflows requiring execution. `resume-workflow` is **on-demand only** and **requires the caller to know the workflow function and args**.

This couples recovery to application code: every pod that starts up must explicitly enumerate "things that might be suspended" and call `resume-workflow` with the right vars in scope. The library provides no list-by-status query and no API for "given a workflow id, find the function and resume". For a multi-replica deployment, recovery is essentially a problem the user has to solve outside the library.

Temporal solves this with task queues + workers that long-poll the server. Intemporal has neither concept.

---

## Section 2 — Deadlock & Lost-Workflow Scenarios

### 2.1 Register-after-consume race  *(severity: high, even on a single pod)*

`process-signal` (`src/intemporal/internal/execution.clj:223-255`) is described by the explore agent as:

```
1. consume-signal — if present, return
2. otherwise register-signal-callback
3. suspend
```

This is a classic TOCTOU. Between (1) returning nil and (2) writing the callback, another thread (or another pod) can call `add-signal`. The signal lands in the store; the callback fires nothing (it isn't registered yet); the registration completes after the signal write; the workflow suspends forever.

The fix is the standard one: register the callback first, then check, then unregister + consume if a signal was already present.

### 2.2 Signal sent to a workflow not yet started

`send-signal` will happily write a signal for an unknown workflow id (in JDBC, line 124 inserts a workflow row via upsert). If the workflow is later started but the start path doesn't drain pre-existing signals before reaching `wait-for-signal`, the signal may or may not be picked up depending on ordering — worth a targeted test, since signals are addressed by name and the workflow expects FIFO semantics per name.

### 2.3 Cancellation cannot reach a suspended workflow

`cancel-workflow` (`src/intemporal/core.cljc:411-418`) sets a flag. Cancellation is **polled at sequence points** (per the explore agent: `check-cancelled!` before each operation, and at the top of the execution loop). A workflow that is suspended on `wait-for-signal` with no signal will:

- never re-enter the execution loop on its own,
- never poll the flag,
- be invisible to cancellation.

So `cancel-workflow` is **not reliable for any workflow that is currently waiting**. The flag is set in the DB but the workflow only sees it next time it wakes — which may be never (see 1.1).

### 2.4 Long-lived `start-workflow` thread

`start-workflow` blocks the calling thread until the workflow either completes or is interrupted (`src/intemporal/internal/fns/start_workflow.clj:67-75`). A workflow that waits 30 days for a signal holds the caller's thread for 30 days. This is incompatible with HTTP request/response in any normal web framework and leaks pod resources at scale. The "right" pattern (return a workflow id immediately; durable wake later) is precisely the pattern that doesn't exist (see 1.1, 1.3).

### 2.5 `max-iterations` foot-gun

Default 1000 replay iterations (`src/intemporal/internal/fns/start_workflow.clj:23`). A workflow with thousands of activities or a long signal-driven loop will silently fail at replay. No clear surface to detect this in production.

### 2.6 In-flight activities at shutdown become "interrupted"

Per the crash-test agent: activities crashed mid-execution are marked `:activity-interrupted` and re-run on resume. This is correct behaviour for at-least-once. **However**, combined with 1.1, the resume never happens automatically — so the activity neither completes nor restarts. Worth distinguishing in docs: "at-least-once if you remember to call resume-workflow".

---

## Section 3 — Other Criticism

### 3.1 JDBC schema lacks the columns it needs

Looking at `resources/migrations/postgres/20260215214002-initial-schema.up.sql` (referenced by the explore agent): three tables, no `status` column on `intemporal_workflows`, no `owner`, no `lease_expires_at`, no `last_heartbeat_at`, no index for "find running workflows". Status is derived by scanning `intemporal_history` and reading `last(event-type)` — O(history-length) per status query.

`ON CONFLICT (workflow_id, seq) DO UPDATE` (line 100-103) is the wrong policy. Two correct writers should not be allowed to coexist; the conflict should be loud (`DO NOTHING` + check `affected`, or a `version` column with CAS).

### 3.2 The IStore protocol is too thin

For a multi-tenant durable orchestrator you'd expect at minimum:

- `claim-workflow [store workflow-id worker-id lease-ttl]` → boolean
- `renew-lease [store workflow-id worker-id]`
- `release [store workflow-id worker-id]`
- `list-runnable [store worker-id batch-size]` (signals arrived / timers due / leases expired)
- Persistent timer rows (`{workflow_id, seq, fire_at}`)
- Persistent "needs wake" markers

None of these exist. Adding them is not a small patch; it touches the execution engine's assumption that wakes are local.

### 3.3 Signal callbacks duplicated as in-process state across store impls

Every store maintains its own callback atom (`InMemoryStore` via `:signal-callbacks` in the state map, `JdbcStore` via a separate `(atom {})` field). For the JDBC store this is conceptually wrong: the store is shared, but a process-local atom shadows it. A correct multi-pod implementation would use a notification mechanism the database already provides — Postgres `LISTEN/NOTIFY`, an explicit watch table, or an external pub/sub — and would remove `register-signal-callback` from `IStore` entirely (it isn't really a store concern).

### 3.4 No separation between "orchestrator" and "worker"

`IActivityExecutor` runs activities in the same process that runs the workflow. There is no way to dispatch activities to a separate worker pool (e.g., a "heavy I/O" replica set distinct from "orchestrator" replicas). Heavy activities consume the same thread budget that drives workflows.

### 3.5 Recovery requires the caller to know the workflow function

`resume-workflow` takes `workflow-fn` and `args`. The library has no registry that maps `workflow-id → function var`. Every pod that wants to recover must:

1. Query the store for workflows in `:running` status (no such query exists).
2. Look up the right function var (no such mapping exists).
3. Recover the original args (they live in the `:workflow-started` event — accessible, but undocumented).

In practice this means the user writes their own dispatch table and recovery loop. The library does not provide a working recovery story out of the box.

### 3.6 Observer protocol is a good idea, slightly under-spec'd

`IWorkflowObserver` (`src/intemporal/protocol.cljc:45-62`) is clean and gives the right hooks for tracing. Two gaps worth noting:

- No `on-store-write` / `on-suspension-persisted` — useful for "did the durability write succeed before we acked the activity?"
- No `on-replay-iteration` — useful for diagnosing slow replays.

### 3.7 Documentation gap

The README says "not production-ready" but doesn't enumerate **why**. A short "Operational Caveats" section listing 1.1, 1.2, 1.3 would prevent users from misjudging the library based on the Temporal-flavoured API surface.

---

## Section 4 — What a Multi-Pod-Safe Version Would Need

Not a request to implement; a calibration of how far the library is from the goal.

1. **Lease-based ownership.** Add `claim_workflow(worker_id, ttl)` + `renew` + `release`. Reject all writes from a worker whose lease has expired. Heartbeat from a background thread.
2. **Persistent timers.** Add a `intemporal_timers (workflow_id, seq, fire_at, claimed_by, claimed_until)` table and a poller (`SELECT … WHERE fire_at <= now() AND claimed_until < now() FOR UPDATE SKIP LOCKED`).
3. **Persistent wake markers.** When a signal arrives or a timer fires, write a row to `intemporal_runnable (workflow_id)`. Each pod polls this table (or `LISTEN`s on `NOTIFY`).
4. **Durable workflow registry.** Map `workflow_id → workflow_function_symbol + args`. Store the symbol in the `:workflow-started` event; have every pod register the symbols it can resolve.
5. **Reject concurrent writers.** Change `ON CONFLICT DO UPDATE` to `DO NOTHING` and fail the workflow run on conflict (lease violation).
6. **Async `start-workflow`.** Return `{:workflow-id …}` immediately; let the worker loop pick up the new workflow from the runnable queue.
7. **Fix the signal register-then-consume race** (2.1) — even single-process correctness depends on this.
8. **Cancellation that wakes a sleeper.** Cancellation should write a runnable marker that forces the workflow to wake and observe the flag (currently it only sets the flag).

Items 1–6 are essentially "build a real distributed workflow engine". Item 7 is a bug fix. Item 8 is a small targeted change.

---

## Section 5 — Pragmatic Recommendations (no code changes implied)

For someone evaluating this library:

- **Safe today**: single process, in-memory store, side-effects inside short-lived activities — i.e., as a structured way to write resumable in-memory orchestrations. Fine for tests, batch jobs, single-node tools.
- **Risky**: any deployment with `>1` replica, even with the JDBC store. Will not lose data, but **will lose execution liveness** on every pod restart, and **will corrupt history** under concurrent retries.
- **Don't**: rely on it as a Temporal replacement in k8s without writing significant infrastructure on top (leasing, polling, dispatch, signal fan-out).

---

## Verification (how to confirm the above claims yourself)

Quick reproductions, each ~10–30 minutes:

1. **Lost wake on signal across processes.** Start two REPLs with the same Postgres URL. REPL A: `start-workflow` a workflow that calls `wait-for-signal`. Kill REPL A (`System/exit`). REPL B: `send-signal` for that workflow id. Confirm the signal sits in `intemporal_signals` and nothing happens. Restart REPL A: the workflow only resumes if you explicitly call `resume-workflow`.
2. **Concurrent start corrupts history.** Two REPLs call `start-workflow` with the same `:workflow-id` simultaneously. Inspect `intemporal_history` — observe duplicate `:workflow-started` rows or silently overwritten events at the same `seq`.
3. **Lost timer.** Start a workflow that sleeps for 5 minutes. Kill the JVM within 30 seconds. Restart it without calling `resume-workflow`. Confirm the workflow never fires.
4. **Cancellation cannot reach a sleeper.** Start a workflow that does `(wait-for-signal :go)` and immediately `cancel-workflow`. Observe the cancelled flag is set but the workflow never terminates (it never re-enters the loop to observe the flag).
5. **Register-then-consume race.** A targeted test that interleaves `wait-for-signal` and `send-signal` on the same workflow id at the consume-then-register window. May require thread sleep instrumentation in `process-signal` to reproduce reliably.

If any of these *don't* reproduce, the analysis is wrong on that point and the relevant section should be revised.
