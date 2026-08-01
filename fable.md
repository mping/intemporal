# intemporal — Source Code Assessment (2026-07-12)

## Context

Full read-through of `src/` (~5,200 LOC): core API, execution engine (clj+cljs), runtime, context, error model, and all three stores (InMemory, JDBC, FDB) plus SQL migrations. Goal: find bugs, design flaws, JDBC↔FDB consistency gaps, architecture flaws, and missing features. Below are the findings, ranked, followed by a prioritized remediation plan.

---

## A. Bugs (correctness)

### A1. CRITICAL — JDBC store collapses multiple events per seq (upsert vs append)
`intemporal_history` has `UNIQUE (workflow_id, seq)` and `save-events` upserts with `ON CONFLICT (workflow_id, seq) DO UPDATE SET event_type=…, data=…` (src/intemporal/store/jdbc.clj:74-80). But the engine **intentionally records multiple event types at the same seq**:
- `:activity-scheduled` + `:activity-completed`/`:activity-failed`
- `:timer-scheduled` + `:timer-fired`
- `:async-started` + `:async-completed`
- `:child-workflow-scheduled` + `:child-workflow-completed` + the `:async-completed` alias (all three at `parent-seq`, written by `notify-parent-terminal`, execution.clj:329-355)

InMemory/FDB append (multiple events per seq coexist); JDBC keeps only the last write. Concrete failure with independent children:
1. Parent runs `run-child-workflow-async` at seq N → `:child-workflow-scheduled` row at N.
2. Child completes → `notify-parent-terminal` writes `:child-workflow-completed` then `:async-completed` at N — each overwrites the previous; only `:async-completed` survives.
3. Parent replays: `schedule-independent-child!`'s idempotency guard `(p/find-event store parent-id :child-workflow-scheduled seq-num)` (core.cljc:375) now returns **nil** → it re-adds the `:child-workflow-scheduled` pending event.
4. When flushed, that upsert **overwrites the child's `:async-completed`** at N.
5. Any later crash/resume: `join` finds no completion at N → suspends `:wait-async` forever; `notify-parent-terminal` never fires again (child already terminal). **Workflow deadlocks.**

Fix: key history on `(workflow_id, seq, event_type)` (or drop the UNIQUE and use plain append + dedupe on read), matching the other stores' append semantics.

### A2. `join-any` never waits for independent children — hot-spins to failure
`handle-suspension` for `:join-any-pending` unconditionally returns `:continue` (execution.clj:532-539). With handles from `run-child-workflow-async` there are no pending-asyncs, so the loop replays the body, suspends again, `:continue`s again… 1000 iterations, then `finalize-failed` with "Replay budget exceeded". Also, since `execute-activities-parallel` blocks until **all** batch activities finish, `join-any` over plain asyncs never actually returns on "first completed" — the "any" semantics are fake.

### A3. `wait-for-signal-with-timeout` double-write race, resolved differently per store
In `process-signal-with-timeout` (execution.clj:253-267 / execution.cljs) the timer callback and signal callback can both execute around the deadline (cancel-timer can't stop an already-running timer task). Both call `save-completed`, producing two `:signal-wait-completed` events at the same seq with contradictory `:received`. Replay then reads:
- InMemory: **first** write wins (insertion order),
- JDBC: **last** write wins (upsert),
- FDB: **random** (sort tiebreak is a random UUID in the key).
A consumed signal can be replayed as a timeout (payload silently lost), nondeterministically, and differently per store.

### A4. Worker-driven cancellation never runs saga compensation
All three stores exclude cancelled workflows from `list-pending` (jdbc.clj:293 `cancelled = FALSE`; store.cljc:153; fdb.clj:191-199 removes the index entry in `mark-cancelled`). Worker resumes pass no `wake-fn`, so no wake callback is registered. Result: under worker drive, a cancelled workflow is **never re-driven** — the body never observes the cancel flag, the user's `catch`/`compensate` never runs, `finalize-cancelled` never writes `:workflow-cancelled`. Same for `:cascade-cancel` children — the docstring promise "a driven child observes it and may compensate" cannot happen cross-pod. Graceful cancellation only works in embedded `start-workflow` mode.

### A5. `resume-workflow` 1-arity permanently TERMINATES unregistered workflows
core.cljc:604-620: a registry miss writes a terminal `:workflow-terminated` event. In a heterogeneous/misconfigured multi-pod deployment, a pod that merely forgot to register a workflow var **destroys workflows another pod could run** (it wins the `claim-owner` race first). The comment says this exists for test-store hygiene — that's a destructive production default. Should release the claim / mark unresumable-by-this-owner instead.

### A6. Sync child workflows cannot suspend; leave zombie rows that livelock the worker
`process-child-workflow` treats any non-`:completed` result — including `:waiting-timer` / `:waiting-signal` — as **failure** (execution.clj:704-715). A `run-child-workflow` child that sleeps or waits on a signal is recorded failed. Worse: the child's own history has events but **no `:workflow-started`** and no terminal event, so:
- JDBC/InMemory: the child id shows up in `list-pending` forever; `resume-workflow` throws "no :workflow-started event" **every poll** (log flood, wasted work).
- FDB: invisible (owner index only populated on `:workflow-started`) — a behavioral inconsistency in itself (see B3).

### A7. CLJS `start-workflow` can double-drive a workflow
start_workflow.cljs:48-59: `wake-fn` is `run-step` itself. Two wakes (e.g. timer + signal) start two interleaved `run-workflow-internal` promise chains for the same workflow — exactly the double-execution the JVM version prevents with its `wake-q` queue (start_workflow.clj:41-56). JS is single-threaded but promise chains interleave across await points, so duplicate activity execution is possible.

### A8. Duplicate `:timer-fired` events
The scheduler callback writes `:timer-fired` unconditionally, and a worker-scan resume at/after `fire-at` also writes it via `process-timer`'s `now >= fire-at` branch (execution.clj:172-188). The in-process `pending-timers` idempotency guard doesn't help across the two paths. Mostly benign on replay, but histories diverge per store (JDBC masks it via upsert; FDB/InMemory show duplicates).

### A9. Rejected activities reschedule in a tight loop with no backoff
Stub sees a persisted `:activity-failed` whose kind is `:rejected` → reschedules (core.cljc:82-95). If the executor keeps rejecting, the loop burns the 1000-iteration budget with zero delay and permanently fails the workflow over a transient saturation condition.

### A10. Minor
- `detect-kind` ex-info message contains an unformatted `%s` (jdbc.clj:52).
- `send-signal`'s status check is TOCTOU — the workflow can complete between the status read and `add-signal`; the signal is persisted but never consumable (core.cljc:799-808).
- `:signal-id` is documented "for idempotency" but nothing anywhere dedupes on it — duplicate sends deliver twice.
- `make-workflow-engine` docstring says logging/telemetry default `false`; the code defaults both to `true` (core.cljc:954-960).

---

## B. Consistency flaws across JDBC / FDB / InMemory

| Concern | InMemory | JDBC | FDB |
|---|---|---|---|
| Events per seq | append (many) | **1 row, last-write-wins** (A1) | append (many) |
| Conflicting same-seq writes | first-write-wins | last-write-wins | random (UUID key tiebreak) |
| `claim-owner` on terminal wf | **claims (no status check)** | refuses (checks status) | **claims AND resurrects the pending index entry** |
| `list-pending` eligibility | any non-empty history | any workflow **row** (created by any event write) | only workflows with a `:workflow-started` event (index) |
| `list-pending` ordering | `wake-at` asc | `created_at` asc | key order (owner bucket, then lexical id) |
| `wake-at` clock | app clock | **DB `now()`** — app/DB clock skew shifts timer eligibility | app clock |
| `load-history` order | insertion | insertion (`ORDER BY id`) | **sorted by seq** — no-seq events (`:workflow-started`, terminals) get epoch-ms keys and sort **last**; same-seq ties randomized |
| `find-event` cost | O(history) scan | indexed point query | **loads entire history per call** (stub does ≥2/op/iteration → O(n²)+ reads) |

Additional store-specific issues:
- **FDB phantom index entries**: `claim-owner` and `set-wake-at` unconditionally (re)create the `["wf-owner" …]` entry — for a workflow that just terminated (race with the scan), a phantom "pending" entry is resurrected; next resume replays and writes a **duplicate terminal event** before self-healing. `["owner" wid]` and `["state" wid *]` keys are never cleaned up → unbounded key leak.
- **JDBC global JVM side effect**: `extend-protocol prepare/SettableParameter` for `IPersistentMap`/`IPersistentVector` (jdbc.clj:107-113) converts **every** map/vector parameter of **every** next.jdbc call in the process to a PostgreSQL `PGobject` — including the host application's own unrelated queries, and breaks on non-PG drivers. Must be scoped (wrap params explicitly) rather than a namespace-load side effect.
- **`:mysql` is advertised but unsupported**: `detect-kind` maps `jdbc:mysql` → migration dir `migrations/mysql`, which **does not exist** (only `postgres/` and `mariadb/`) — `make-jdbc-store` fails at migration for MySQL URLs.

---

## C. Architecture / design flaws

1. **O(n²) replay + hard 1000-iteration cap.** Every `:continue` reloads full history and re-executes the body from the top; each step does `find-event` scans. A workflow is effectively capped at ~1000 sequential operations, after which it is **permanently failed** ("Replay budget exceeded") — budget exhaustion is indistinguishable from a real failure and is terminal. No continue-as-new escape hatch (see D1).
2. **No determinism validation on replay.** `stub` matches cached events by `(event-type, seq)` only — never compares `:activity-name` or args (core.cljc:68-78). After a code change/reorder, replay silently returns the *wrong activity's* cached result instead of raising a non-determinism error (Temporal fails loudly here). The recorded `:activity-name` is right there in the event; it's just never checked.
3. **Signal-waiting workflows are replayed every poll forever.** `wake-at` is nil for signal waits ("always eligible"), so the worker fully replays each one every `poll-ms` (default 500ms) — churn ∝ history size × waiting-workflow count, indefinitely.
4. **Retry backoff blocks the drive thread.** `execute-with-retry` uses `Thread/sleep` (execution.clj:91), and `start-worker` processes workflows **sequentially** on the poll thread — one workflow in a long retry/backoff starves every other workflow owned by that pod.
5. **Cancellation can execute one extra activity.** `seq-has-event?` counts a persisted `:activity-scheduled` as "replaying", so on resume-after-crash with cancel requested, the frontier activity still executes before cancellation surfaces at the next seq (context.cljc:52-105). Acceptable under at-least-once, but undocumented.
6. **`IStore` mixes durable and process-local concerns.** `register-signal-callback` / `register-wake-callback` / `wake-workflow` are in-memory atoms on JDBC/FDB stores — protocol methods that silently do nothing across processes. They belong on a separate in-process notifier abstraction; keeping them on `IStore` invites the assumption that they're durable.
7. **No guard against double-starting a workflow id.** Two `start-workflow` calls (or start + worker) on the same id append a second `:workflow-started` and double-drive; `submit-workflow` + `start-workflow` on one id likewise. Only convention prevents it.

---

## D. Missing / incomplete features

1. **continue-as-new** — with unbounded history and O(n²) replay, long-lived workflows are infeasible without it. Highest-value missing feature.
2. **History retention / cleanup** — no store can delete/archive terminal workflow data; FDB additionally leaks owner/state keys (B).
3. **Workflow versioning / patching** — no `get-version`-style API; any code change breaks in-flight workflows silently (compounded by C2).
4. **Queries** — no way to read workflow state without driving it (only status/result/history).
5. **Activity heartbeats & cancellation propagation** — a cancel never interrupts an in-flight activity (only timeout does); no heartbeat for long activities.
6. **Workflow-level timeouts** — no execution/run timeout; a workflow stuck waiting on a signal lives forever.
7. **Signal-id idempotency** — advertised in `send-signal`, not implemented (A10).
8. **MySQL migrations** — advertised by `detect-kind`, directory absent (B).
9. **`join-any` for child workflows / true "first-wins" semantics** (A2).

---

## Remediation plan (prioritized)

### P0 — data-loss / deadlock class
1. **A1**: change JDBC schema+SQL to `(workflow_id, seq, event_type)` uniqueness (new migration; keep upsert per-type for replay idempotency). Files: `resources/migrations/{postgres,mariadb}/`, `src/intemporal/store/jdbc.clj` (`upsert-history-sql`, `find-event` unaffected).
2. **A3**: make `save-completed` idempotent — guard with `find-event :signal-wait-completed seq` inside the callback paths, and/or have exactly one writer (e.g. persist through a single compare-and-set-style store op).
3. **A2**: give `:join-any-pending` a real wait path — return `:wait-async` when no handle has completed and no pending asyncs exist (mirror `process-join-pending`), and check `:child-workflow-completed` in addition to `:async-completed`.

### P1 — operational correctness
4. **A4**: include cancelled workflows in `list-pending` until finalized (all three stores + worker), so the body observes cancellation and compensations run; only exclude after the terminal event exists.
5. **A5**: on registry miss, release the claim (or skip + log with backoff) instead of writing `:workflow-terminated`; keep termination behind an explicit opt-in for tests.
6. **A6**: either write a terminal event for sync children in all exit paths or seed sync children with `:workflow-started`; make suspend-capable sync children an explicit error at suspension time rather than "failed".
7. **A7**: port the wake-queue pattern to CLJS (a `running?` flag + queued-wake bit is enough in single-threaded JS).
8. **B (claim-owner/status)**: add terminal-status check to InMemory and FDB `claim-owner`; make FDB `claim-owner`/`set-wake-at` no-op when the workflow is terminal.

### P2 — consistency & hygiene
9. Align `list-pending` ordering (pick `wake-at` asc, add index) and `load-history` ordering (insertion order everywhere; FDB should use a monotonic per-event index rather than epoch-ms keys for no-seq events).
10. Scope the JDBC `SettableParameter` extension away (explicit `->pgobject` wrapping at call sites).
11. Add `migrations/mysql` (or reject `jdbc:mysql` URLs explicitly).
12. Replay determinism check: in `stub`, compare cached event's `:activity-name` against the current one; throw a dedicated non-determinism error.
13. Backoff for `:rejected` reschedules; move retry sleeps off the worker drive thread (or process workflows on a pool).

### Verification
- Reproduce A1 with a JDBC crash-resume test: async child completes → parent resumes → force flush → crash → resume → assert `join` still resolves (`test/intemporal/tests/crash/`, run `bin/kaocha :test --focus …` with the `:jdbc` alias).
- A2: new test joining `run-child-workflow-async` handles via `join-any`.
- A3: deterministic race test — deliver signal at exactly the deadline with a store stub that delays `cancel-timer`.
- A4: worker-mode cancellation test asserting compensations ran and `:workflow-cancelled` event exists.
- Full suite: `bin/kaocha` (JVM + CLJS), store suites under `test/intemporal/tests/store/`.
