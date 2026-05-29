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

---

## Section 6 — Improvement Plan

**Chosen scope: Phases A + B + C (full multi-pod safety).** Estimated ~6–8 weeks. Phases D and E are listed below for completeness but explicitly deferred.

**Target backends:** Postgres, MySQL/MariaDB, FoundationDB, and InMemoryStore (the latter for test fixtures and single-process use; it will implement the new `IStore` operations in-memory so the same execution code path works everywhere).

Each phase is independently shippable (the library keeps working after each one). Distributed safety is opt-in via store choice — Phase A and B do not require any schema change; Phase C does.

Effort scale: **S** = ≤1 day, **M** = 2–5 days, **L** = 1–2 weeks, **XL** = >2 weeks. Estimates assume one contributor familiar with the codebase.

### Guiding principles

- **Don't break the existing API.** Add new functions; deprecate old ones with shims.
- **Don't tax single-process users with distributed costs.** Lease checks, runnable polling, etc. are only meaningful when the store implementation cares.
- **Push correctness into the schema.** A constraint that throws is better than a callback that silently fails.
- **Make wake-up durable and centralised.** Today there are three independent wake paths (signal callback atom, in-process timer, blocking promise). Collapse them into one: "write a runnable marker; a worker picks it up."

---

### Phase A — Single-pod correctness fixes  *(unblocks correctness even without distribution)*

| ID | Issue | Files | Effort |
|----|-------|-------|--------|
| A1 | Fix register-then-consume signal race (2.1) | `src/intemporal/internal/execution.clj` (process-signal, ~L223-255) | S |
| A2 | Cancellation wakes sleepers (2.3) | `src/intemporal/core.cljc:411`, `src/intemporal/protocol.cljc`, both stores | S |
| A3 | Reject duplicate concurrent event writes (1.2) | `src/intemporal/store/jdbc.clj:100-103` | S |
| A4 | Loud `max-iterations` failure (2.5) | `src/intemporal/internal/fns/start_workflow.clj`, execution loop | S |

**A1 sketch.** Change `process-signal` from `consume → register → suspend` to `register → consume → if-found(unregister + return) → suspend`. Add a stress test: two threads, one calling `wait-for-signal`, one calling `send-signal`, interleaved with a configurable delay; assert no orphaned suspension.

**A2 sketch.** Add `IStore/wake-workflow [store wf-id]` that fires every registered callback for that workflow id (both signal callbacks and a new generic "wake" callback). `cancel-workflow` calls it after `mark-cancelled`. The workflow then re-enters the loop and observes the cancelled flag at `check-cancelled!` (`src/intemporal/internal/context.cljc:37-40`).

**A3 sketch.** Change `ON CONFLICT (workflow_id, seq) DO UPDATE …` → `ON CONFLICT (workflow_id, seq) DO NOTHING`, capture row counts from `jdbc/execute!`, and throw `ConcurrentWriterException` if any insert returned 0 rows. Add a test that spins two threads racing on the same workflow id and asserts exactly one succeeds.

**A4 sketch.** When the replay loop exceeds `max-iterations`, throw a typed exception (`ReplayBudgetExceeded`) carrying workflow id + last seq, instead of silently returning the partial result. Default budget could scale with `(count history) * 2` rather than a flat constant.

---

### Phase B — Operational hardening  *(makes the library production-shaped for single-pod)*

| ID | Improvement | Files | Effort |
|----|-------------|-------|--------|
| B1 | Idempotent `start-workflow` with `:request-id` | `src/intemporal/internal/fns/start_workflow.clj`, JDBC schema | M |
| B2 | `status` column on `intemporal_workflows` (O(1) status reads) | new migration, `src/intemporal/store/jdbc.clj` | S |
| B3 | Workflow registry: `register-workflow!` + resolve-on-resume | new ns `src/intemporal/internal/workflow_registry.cljc`, core API | M |
| B4 | Async `submit-workflow` returning `{:workflow-id …}` | `src/intemporal/core.cljc`, executor wiring | M |
| B5 | Observer hooks for store writes / replay iterations (3.6) | `src/intemporal/protocol.cljc`, call sites | S |

**B3 is load-bearing for Phase C.** Without a registry mapping `workflow-id → workflow-fn`, the worker loop can't resume a workflow it didn't start. Design: register by name; store the name (symbol) inside the `:workflow-started` event payload (alongside `args`); `resume-workflow` accepts `(engine, workflow-id)` and resolves both the function and the args from the first event.

**B4 sketch.** New function `submit-workflow` that writes `:workflow-started`, enqueues to the engine's executor, and returns immediately. The blocking `start-workflow` becomes a thin wrapper: `submit-workflow` + `await-workflow`. This unblocks the "HTTP request returns workflow id" pattern without forcing every caller off the blocking API.

---

### Phase C — Distributed primitives  *(makes multi-pod safe; opt-in per store)*

This is the meat of the work. Each item adds new `IStore` operations and a corresponding JDBC implementation. InMemoryStore can either no-op these (single-process semantics) or implement them in-memory for tests.

| ID | Primitive | Files | Effort |
|----|-----------|-------|--------|
| C1 | Lease protocol: `claim` / `renew` / `release` / `expire-stale` | `src/intemporal/protocol.cljc`, JDBC schema (add `owner_id`, `lease_until`), all `save-events` paths | L |
| C2 | Persistent timers table + poller | new migration, `src/intemporal/internal/runtime.clj` scheduler, new poller component | L |
| C3 | Runnable markers table: signals/timers/cancellations write a marker | new migration, every wake path | M |
| C4 | Worker loop: `start-worker` polls runnable markers, claims lease, resumes | new ns `src/intemporal/internal/worker.clj`, core API | L |
| C5 | Remove in-process signal callbacks; all wakes via runnable markers | `src/intemporal/store/jdbc.clj`, execution.clj | M |

**C1 design.** Add columns `owner_id TEXT, lease_until TIMESTAMPTZ` to `intemporal_workflows`. `claim-workflow` is a single `UPDATE … WHERE id = ? AND (owner_id IS NULL OR owner_id = ? OR lease_until < now())` returning rows-affected. Every `save-events` call validates `(owner_id = ? AND lease_until > now())` in the same transaction as the inserts; on mismatch, throws `LeaseLostException`. The worker catches and aborts the in-flight execution cleanly.

**C2 design.** Schema: `intemporal_timers (workflow_id, seq, fire_at, claimed_until, PRIMARY KEY(workflow_id, seq))`. `schedule-timer` upserts a row instead of (or in addition to) the in-memory `ScheduledFuture`. A poller thread runs `SELECT … WHERE fire_at <= now() AND claimed_until < now() FOR UPDATE SKIP LOCKED LIMIT N`, writes a runnable marker for each, and updates `claimed_until = now() + INTERVAL '1m'` for fencing. In-memory `ScheduledFuture`s become a latency optimisation (avoid the poll), not the source of truth.

**C3 design.** Schema: `intemporal_runnable (workflow_id PRIMARY KEY, reason TEXT, enqueued_at TIMESTAMPTZ, claimed_until TIMESTAMPTZ)`. Use `PRIMARY KEY` (not unique-by-reason) so duplicates collapse — one workflow is either runnable or it isn't. `add-signal`, timer-fire, and `cancel-workflow` all `INSERT … ON CONFLICT DO UPDATE SET enqueued_at = now()`.

**C4 design.** A worker is `{:engine :worker-id :poll-interval :concurrency}`. Loop:
```
loop:
  rows = SELECT workflow_id FROM intemporal_runnable
         WHERE claimed_until < now()
         FOR UPDATE SKIP LOCKED LIMIT batch
  for each row in parallel (concurrency-limited):
    if claim-workflow(wf_id, worker_id, ttl): 
      try: resume-workflow(engine, wf_id)  // uses B3 registry
           DELETE FROM intemporal_runnable WHERE workflow_id = ?
      finally: release(wf_id, worker_id)
  if rows empty: sleep poll-interval (or LISTEN for wake)
```
Optional Postgres optimisation: `NOTIFY intemporal_runnable` on insert; worker uses `LISTEN` for sub-second wake. Default poll interval (e.g., 500ms) is the safety net.

**C5 design.** Once C3/C4 land, in-process callbacks are vestigial. Delete the `callbacks` atom on `JdbcStore`; `register-signal-callback` and `unregister-signal-callback` become no-ops (kept for protocol compatibility for one release, then removed). All wake is via runnable markers. Closes the cross-pod signal loss path (1.1).

#### Per-backend implementation notes for Phase C

**Postgres** (primary target, full featureset):
- `FOR UPDATE SKIP LOCKED` for marker claim and lease claim (already used for signals).
- `LISTEN/NOTIFY intemporal_runnable` for sub-second wake; poll loop as the safety net.
- Standard timestamptz for `lease_until` and `claimed_until`.
- JSONB payload columns (consistent with current schema).

**MySQL/MariaDB** (full featureset, polling only):
- `SELECT … FOR UPDATE SKIP LOCKED` is supported (MySQL 8.0+, MariaDB 10.6+); pin to those versions in docs.
- No `LISTEN/NOTIFY` equivalent — workers poll at configurable interval (default 500ms is acceptable for most use cases; faster requires busy-polling tradeoff).
- Add an index on `intemporal_runnable (claimed_until, enqueued_at)` for poller scans.
- JSON column type instead of JSONB.

**FoundationDB** (full featureset, native transactional model):
- No SQL — operations are transactional key-range reads/writes against the directory layer (`store/fdb.clj` already uses subspaces).
- Lease: key `["lease", workflow-id] → {owner-id, lease-until}`. Claim is a serializable read-modify-write transaction; FDB rejects conflicting commits automatically (no SKIP LOCKED needed — that's the wrong model for FDB).
- Runnable markers: subspace `["runnable"]`, keys are `[enqueued-at, workflow-id]`. Workers pop with a watch on the subspace (FDB's `getRangeWatchable` or equivalent). FDB watches are the native equivalent of `LISTEN/NOTIFY` — no polling needed.
- Persistent timers: subspace `["timers", fire-at, workflow-id, seq]`. Timer poller scans the prefix `["timers"]` with `streamingMode :want-all` up to `now()`.
- Cross-process callbacks don't exist in FDB; the watch primitive replaces them entirely. Cleaner than the Postgres/MySQL design.

**InMemoryStore** (test fixture + single-process use):
- All new operations implemented in-memory using existing atom-based state.
- Lease: a `{owner-id, lease-until}` entry per workflow in the state map. `claim-workflow` is an atomic `swap!` with CAS semantics.
- Runnable markers: a vector in the state map; workers `swap!` to pop.
- Persistent timers: same as today (in-memory `ScheduledFuture`), but exposed through the new IStore API so the execution code doesn't branch.
- `register-signal-callback` continues to work in-process for single-pod users (no behavioural regression). Multi-pod users would never use InMemoryStore.

**After Phase C the library is multi-pod safe**: every k8s pod runs `start-worker`, work is distributed via runnable markers + lease, crashes are recovered by lease expiry, signals reach the right pod via the database.

---

### Phase D & E — Deferred (out of scope for this milestone)

Listed here for context; not part of the current improvement plan. Revisit after Phase C is stable in production.

- **Phase D** — Worker/orchestrator separation (activity task queues with specialised worker pools). Only worth doing if there's a real need to scale activity execution independently of workflow orchestration.
- **Phase E** — Strict shard ownership and token-based write fencing. Protects against split-brain scenarios (network-partitioned pod whose lease expires, another pod takes over, then the original reconnects). Phase C's lease check on every `save-events` is sufficient for correctness under normal operation; Phase E is the "production at scale" defence-in-depth tier.

---

### Suggested ordering & shippable milestones

1. **v0.x+1 (bug-fix release):** Phase A only. Closes the worst single-process correctness bugs in ~1–2 days of work.
2. **v0.x+2 (hardening release):** Phase B. The library becomes usable as a production single-pod orchestrator with sensible HTTP integration.
3. **v0.y (multi-pod release):** Phase C. Headline feature: "now safe to run multiple replicas". Requires schema migration and a documented worker setup. **This is the big one.**
4. **v0.y+1+ (advanced):** Phases D and E as needed by users.

Phases A and B do not require schema-breaking migrations and can ship as patch releases. Phase C requires a minor-version bump and an "operator's guide" doc.

### Testing strategy per phase

- **A:** Race condition unit tests (A1, A3). Cancellation-during-wait test (A2). Replay-budget exhaustion test (A4).
- **B:** Idempotent-start tests (B1). Registry resolution tests (B3). Async submission tests (B4).
- **C:** Multi-process integration tests using `docker-compose` with Postgres + 2–3 worker containers. Tests:
  - Crash a worker mid-workflow; verify another picks it up after lease expiry.
  - Send signal from worker B to workflow on (dead) worker A; verify resumption on worker C.
  - Schedule a long timer; restart all workers; verify it still fires.
  - Concurrent `start-workflow` with same `:request-id`; verify single execution.

The crash tests in `test/intemporal/tests/crash/` are the right template — extend them to multi-process scenarios.

### Out of scope (for this plan)

- Phase D and Phase E (deferred — see above).
- Migrating to a different persistence model (e.g., RocksDB, distributed log).
- Changing the workflow programming model (it's already good).
- Cross-language SDKs.
- Workflow versioning / determinism upgrades (Temporal's `GetVersion`) — relevant but separate.
