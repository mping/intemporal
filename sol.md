# intemporal architecture and soundness review

## Executive assessment

`intemporal` has a thoughtful replay core and an unusually useful collection of crash and store-conformance tests for a young library. In particular, the pass-local history snapshot, durable retry/backoff state, explicit cancellation marker, first-class terminal events, and CLJ/CLJS parity work are good foundations.

The main risk is that the distributed execution model is stronger in the documentation than in the storage contract. The current `owner` field is a permanent label, not a lease, worker eligibility is also used as waiting state, and several lifecycle transitions require multiple independent writes. Those choices can produce both duplicate execution and permanently stuck workflows after ordinary process or deployment failures.

The library should remain explicitly non-production until the P0 items below are addressed. The safest current scope is an embedded, single-process engine with idempotent activities. The persistent backends are useful for experimentation and recovery testing, but the worker model is not yet safe for a general multi-replica deployment.

## What is already strong

- Replay reads a frozen history snapshot and indexes it once per pass (`internal/context.cljc`), avoiding mixed snapshots and per-operation store reads.
- Activity attempt counts and retry deadlines are persisted before backoff, so a crash does not reset the retry budget.
- Activity results, failures, timers, cancellations, and child outcomes have explicit event shapes and store specs.
- Signal registration was deliberately ordered to avoid the common consume-before-register lost-wake race for the non-timeout path.
- The stores share conformance tests, and the repository has focused crash tests rather than only happy-path tests.
- In-memory JVM tests and CLJS tests are currently green; see Validation at the end.

## Priority summary

| Priority | Issue | Consequence |
|---|---|---|
| P0 | Ownership has no expiry or fencing token | Work is stranded after owner loss; stale/same-id workers can write concurrently |
| P0 | Waiting and runnable are represented by the same `wake_at = NULL` state | Hot polling, database load, batch starvation, poor worker throughput |
| P0 | Terminal, parent/child, and close-policy writes are not atomic | A crash can leave a terminal child whose parent is never notified, or children whose close policy is never applied |
| P0 | Workflow and child IDs are not atomically created | Duplicate submissions overwrite/diverge across stores; child ID collisions corrupt linkage |
| P1 | Replay validates only some activity-name mismatches | Workflow code changes can silently reinterpret an old sequence number as a different operation |
| P1 | Signal idempotency and timed-wait arbitration are not durable CAS operations | Duplicate signals and run-dependent timeout/signal outcomes |
| P1 | Cancellation request and terminal cancellation share one status | `await-workflow` can return before compensation/finalization; cancelling an unknown ID creates phantom state |
| P1 | Activity delivery lacks a durable task identity/context | Timeout/crash duplicates are hard for activity authors to deduplicate safely |
| P1 | Every pass reloads and replays full history | Roughly quadratic cumulative work for long workflows; hard 1,000-iteration ceiling |
| P2 | CLJ and CLJS duplicate the orchestration state machine | Correctness fixes can drift between two ~1,000-line implementations |
| P2 | Codec and schema contracts are underspecified | In-memory success can mask persistent-store failures and backend limits |
| P2 | Build, chaos harness, migrations, and docs have drifted | Important regressions are not caught by the current CI path |

## P0: distributed correctness

### 1. Replace permanent ownership with renewable, fenced leases

Evidence:

- `IStore/claim-owner` accepts an unowned workflow or the same `owner-id`, with no expiry, session identity, epoch, or heartbeat (`src/intemporal/protocol.cljc`).
- JDBC implements `owner IS NULL OR owner = ?`; FDB and InMemory use the same rule (`store/jdbc.clj:276`, `store/fdb.clj:266`, `store.cljc:143`).
- `start-worker` defaults to a random owner ID while recovery requires the same stable ID (`core.cljc:794-808`). A hard-crashed random owner is therefore unrecoverable.
- Two live processes using the same stable owner both pass the claim. Store writes are not conditional on ownership, so even a future lease timeout would not fence a stale executor.
- The worker claims before resolving the workflow function. On a registry miss it records the ID in `unresumable` but does not release that workflow (`core.cljc:824-837`). A pod that cannot run a workflow can therefore prevent a capable pod from claiming it.
- `release-owner` releases every workflow for a logical owner. One same-ID worker stopping can release work still being executed by another same-ID worker.

Recommendation:

Introduce a lease record with at least `lease_owner`, `lease_token` (monotonic fencing epoch), and `lease_expires_at`. `claim-runnable!` should atomically select and claim one or more due workflows and return the token. Every state-changing write from a drive must include `WHERE lease_token = ? AND revision = ?` (or the equivalent FDB conflict check). Add renewal, release-one, and expired-lease recovery. Do not use a random permanent owner as a recovery mechanism.

Route work by capability before claiming it. Persist a workflow type/build ID or task queue in the workflow row, and let a worker advertise which types/builds it can execute. A registry miss should release or dead-letter only that workflow, never retain its ownership indefinitely.

Acceptance tests:

- Kill an owner permanently and prove a different owner completes its workflow after lease expiry.
- Start two processes with the same logical owner and prove only the latest fencing token can append.
- Pause an old owner past expiry, let another owner finish, then resume the old owner and prove all stale writes fail.
- Let an incapable worker see a task before a capable worker and prove the capable worker still receives it.

### 2. Model `WAITING` separately from `RUNNABLE`

The current worker scheduler treats `wake_at = NULL` as immediately eligible. The engine writes `nil` for signal and async waits (`internal/execution.clj:1027-1037`), and all stores return those rows from `list-pending`. The JVM worker sleeps only when `list-pending` is empty (`core.cljc:849-854`). Consequently:

- a workflow waiting for a signal is fully loaded and replayed continuously;
- an unresumable owned workflow also keeps the result set non-empty and can cause a tight loop;
- JDBC orders by `created_at` and applies `LIMIT`, so an old batch of waiting workflows can permanently starve newer runnable work;
- the worker drives one workflow at a time, so one slow activity blocks polling for every other workflow owned by that worker.

Recommendation:

Give the workflow row an explicit scheduling state, for example:

```text
run_state: RUNNABLE | WAITING | RUNNING | TERMINAL
next_run_at: nullable timestamp
revision: monotonic integer
```

Parking a workflow should atomically append its events and set `WAITING`. A signal, cancellation request, due timer, retry deadline, or child completion should atomically set it to `RUNNABLE`. `NULL` should mean “no clock deadline,” not “poll continuously.” Local callbacks/notifications can remain a latency optimization, but correctness must come from the durable runnable transition.

Claim due work directly (`SELECT ... FOR UPDATE SKIP LOCKED` on JDBC; an equivalent transactional ready index in FDB). Use a bounded workflow-drive pool so independent workflows progress concurrently while preserving one active drive per workflow.

Acceptance tests should include more waiting workflows than `batch-size`, then submit a ready workflow and assert bounded completion latency and bounded replay/query counts.

### 3. Make terminal and parent/child effects one recoverable transition

The terminal finalizers first persist the child's terminal event, then apply close policies, then notify the parent (`internal/execution.clj:639-705`). A crash after the terminal write removes the child from `list-pending`; no process will run it again to notify its parent or enforce its children's close policies. A joining parent can wait forever.

Independent-child creation is also split across saving the child's start event, linking the child, and later flushing the parent's scheduled marker (`core.cljc:497-542`). A child can run or a parent can close between those writes.

Recommendation:

Add a store-level `commit-transition!` operation that atomically:

- verifies the workflow revision and fencing token;
- appends the drive's events;
- updates workflow state/next-run time;
- inserts child rows/linkage;
- inserts parent notification and close-policy work into an outbox.

Cross-workflow effects can either be in the same database transaction or be durable outbox records processed idempotently. The key rule is that marking a child terminal must never make its parent notification undiscoverable. Add a reconciliation job that can rebuild missing outbox work from terminal/link rows as defense in depth.

Inject a crash after every write boundary in child creation and all three finalizers. Each case should converge without manual `resume-workflow` calls.

### 4. Make workflow creation atomic and define ID reuse

`submit-workflow` and `start-workflow` call the generic event upsert without checking whether the workflow ID already exists (`core.cljc:633-667`, `internal/fns/start_workflow.clj:87-95`). This is not idempotent:

- InMemory appends multiple `:workflow-started` events and `resume-workflow` reads the first.
- JDBC/FDB overwrite the `(seq=-1, event-type=:workflow-started)` value and read the latest.
- A completed workflow keeps its terminal status even if another start event is written, so a “resubmission” can immediately return the old result.
- A custom child ID can refer to an existing workflow. JDBC can rewrite its parent columns while the child's own start event still names another parent; FDB can index the same child under multiple parents.

A focused local check confirmed that two InMemory submissions with the same ID retain both argument vectors. The backend-dependent behavior makes duplicate requests a correctness bug, not just an API ambiguity.

Recommendation:

Add `create-workflow!` with insert-if-absent semantics and a caller request/idempotency key. Return one of `:created`, `:same-request`, or a conflict containing the existing run metadata. Introduce a distinct immutable `run-id` if workflow IDs may be reused, with an explicit reuse policy. Child creation must use the same primitive and reject an existing child whose parent, sequence, workflow type, args hash, or policy differs.

Also make terminal transitions compare-and-set from a non-terminal state. `resume-workflow` on a terminal run should return the persisted terminal result without invoking the workflow and appending another terminal event.

## P1: deterministic and user-visible semantics

### 5. Record and validate every workflow command

Only activity replay checks that the recorded activity name matches the current call (`core.cljc:75-94`). Timers, signals, async handles, child workflows, and operation-kind changes are not checked. A history containing a timer at sequence 0 can currently be resumed with code that executes an activity at sequence 0; both event families are accepted and the workflow completes. This was reproduced locally.

Recommendation:

Persist one immutable command/schedule record for every sequence number with a normalized signature:

```clojure
{:seq 12
 :command :activity
 :name "billing/charge"
 :args-hash "..."
 :options-hash "..."
 :schema-version 1}
```

On replay, compare operation kind and all behavior-affecting fields before consulting the outcome. Throw a dedicated non-determinism error on any mismatch. Keep outcome events separate from command identity.

Persist a workflow build/version and route old executions to compatible workers. Add an explicit version/patch API for intentional code evolution; a process-global name-to-latest-function map is not enough during rolling deployments.

### 6. Give signals durable identity, ordering, and atomic wait completion

`send-signal` documents `:signal-id` “for idempotency” (`core.cljc:962-992`), but every store inserts/appends it without a uniqueness check. Sending the same ID twice produces two pending signals; this was confirmed locally.

The timeout path has two additional races (`internal/execution.clj:432-496`):

- it performs an initial consume before registering its callback, so an arriving signal can be delayed until the timeout/recovery poll;
- the timer and callbacks from different replay passes use different in-memory `claimed` atoms. Their `find-event` then `save-event` guard is not atomic, so signal and timeout results can both be written. JDBC/FDB overwrite the same key last-writer-wins, while InMemory retains both and replays the first.

Recommendation:

- Persist a unique signal ID and enforce uniqueness per workflow (or globally, but document it).
- Give each workflow signal an ordered durable inbox position. Avoid timestamp-plus-random-UUID ordering for FDB when FIFO is promised.
- Replace consume/check/save sequences with a store transaction such as `complete-signal-wait!` that conditionally transitions one wait from pending to either received or timed-out, consumes at most one inbox item, appends the outcome, and marks the workflow runnable.
- Register the local callback before the first consume check on timed waits too; keep it only as a fast path.

### 7. Separate cancellation request from terminal cancellation

Every store reports `:cancelled` as soon as the mutable cancellation flag is set (`store.cljc:126-136`, `store/jdbc.clj:252-270`, `store/fdb.clj:242-260`). `await-workflow` treats that as terminal (`core.cljc:679-706`), so it can return before saga compensation and before `:workflow-cancelled` is persisted.

`cancel-workflow` also accepts `:not-found`; the stores create cancellation state for a nonexistent workflow. InMemory then reports `:cancelled` with empty history, while JDBC creates a row that a worker can claim but cannot resume. A focused local check confirmed the empty-history cancelled state.

Finally, parent `:cascade-cancel` calls `mark-cancelled` but not `set-wake-at nil` (`internal/execution.clj:605-637`). FDB happens to make the row due inside `mark-cancelled`; JDBC and InMemory do not, so prompt cancellation differs by backend.

Recommendation:

- Store `cancel_requested_at` independently from terminal `state`.
- Return `:cancelling` (or `{:status :running :cancel-requested? true}`) until finalization.
- Reject cancellation of an unknown workflow unless “cancel before create” is an explicitly designed feature with consistent semantics.
- Make “request cancel + mark runnable” one store transition used by both the public API and parent-close policies.
- Make `await-workflow` wait for a terminal event/state, not the request flag.

### 8. Expose an activity execution identity and clarify timeout behavior

The crash window after an activity side effect and before `:activity-completed` is unavoidable under at-least-once delivery. A Java `Future.cancel(true)` on timeout also does not prove the underlying side effect stopped, so a retry can overlap the timed-out attempt (`internal/runtime.clj:97-119`). Currently an activity receives only user args, not the workflow/run/sequence/attempt identity it needs for deduplication.

Recommendation:

Provide an `ActivityContext` containing `workflow-id`, `run-id`, command sequence, attempt, stable idempotency key, deadline, and cancellation/heartbeat access. Document that timeouts are abandonment signals, not guaranteed termination. Encourage or require idempotency at external side-effect boundaries.

For a stronger deployment model, split `IActivityExecutor` into a durable activity-task dispatcher and an executor/worker. Persist task creation and workflow parking atomically, then complete tasks with compare-and-set. A local executor can remain the default adapter.

### 9. Add replay compaction and remove the hard semantic ceiling

Each engine pass loads the entire history and reruns the workflow from the beginning. A sequential workflow performs a new pass after each activity, producing roughly quadratic cumulative replay work. `max-iterations` then permanently fails a valid drive after 1,000 internal continuations (`internal/execution.clj:769+`).

Recommendation:

- Add `continue-as-new` first; it is simple and gives users a correctness-preserving escape hatch for loops.
- Add sticky in-process workflow caches with eviction, while retaining full replay after failover.
- Store history with a monotonic event ID/revision and support incremental reads.
- Consider periodic, versioned snapshots only if snapshot compatibility can be made explicit.
- Treat replay/drive budgets as resumable yielding, not workflow failure. A budget exhaustion should requeue the workflow with diagnostics unless it proves actual non-termination.

## P2: architecture and maintainability

### 10. Extract a pure transition kernel shared by CLJ and CLJS

`internal/execution.clj` and `internal/execution.cljs` duplicate most of a roughly 1,000-line state machine. Promise/thread mechanics do differ, but command matching, retry decisions, event construction, terminal sequencing, and suspension-to-state transitions should not.

Refactor toward:

```text
workflow code -> command interpreter -> pure transition decision
                                      -> effects (store/clock/executor/notifier)
                                      -> atomic commit
```

Put event/command validation and transition functions in `.cljc`; keep only blocking versus promise execution in thin platform adapters. Replace dynamic context plus throwable control flow where practical with an explicit interpreter result. This will make exhaustive model/property tests feasible and reduce parity regressions.

Also split `IStore`: persistence, durable scheduling/claims, and process-local callbacks are different responsibilities. Local callbacks should not be part of the durable store contract.

### 11. Version and bound the payload codec

The specs describe payloads as genuinely arbitrary, but the persistent codec explicitly cannot round-trip records and will also reject many printed JVM objects (`internal/codec.clj:22-25`, `spec.cljc:19-25`). InMemory masks these failures. FDB additionally has strict value and transaction size limits that are not checked before a drive executes side effects.

Recommendation:

- Introduce an `ICodec` with a wire-format version and optional tagged readers/writers.
- Validate/encode workflow args before creating a workflow and activity/signal results before accepting them as committed outcomes.
- Define maximum event, signal, batch, history, ID, and nesting sizes per backend; fail before side effects where possible.
- Run the same codec conformance corpus against every store, including unsupported-value and oversized-value cases.
- Decide whether history is an immutable audit log. JDBC/FDB currently upsert repeated `(seq,event-type)` entries while InMemory appends some duplicates, so “event sourcing” and history inspection do not have one clear contract. Prefer immutable event IDs plus separate materialized command/outcome state.

### 12. Change long-lived tracing to task spans

Tracing keeps one live span in a process-global atom until a workflow reaches a terminal state (`tracing.clj:32-77`). A signal wait lasting months retains process memory, does not export a completed span, and leaks on non-terminal worker shutdown. Cross-process resumes also create separate long-lived spans while describing the workflow as one span.

Use a short span per workflow task/drive, linked by persisted trace context, plus activity/timer child spans. Represent total workflow duration as metrics or a synthetic lifecycle event rather than an open in-memory span.

## Repository, test, and release improvements

### Build and CI

- `clojure -T:build compile-main` currently fails because `base-nses` is undefined; `compile-dev` similarly references undefined `dev-nses` (`build/build.clj:5-20`). `clj-kondo` reports both as errors plus an unused require.
- The GitHub workflow invokes Earthly `+test`, which runs coverage but not the `+lint`, `+build-jar`, or `+build-cljs` targets. Make CI require lint, JVM/CLJS tests, jar creation, and the demo release build as separate visible jobs.
- Add a minimal consumer test that builds the jar, starts a fresh process with only the published dependencies, requires the public namespace, and runs one workflow.

### Chaos and model testing

The forked-JVM “Jepsen” harness is historical rather than a validation of the current worker model:

- its worker explicitly does not call `start-worker`/`resume-workflow` and instead launches `start-workflow` from its own queue (`test/intemporal/jepsen/worker.clj:16,77`);
- its README and runner still describe the current code as “unfixed”;
- its concurrent-start SQL uses the old conflict target `(workflow_id, seq)` even though the current schema is unique on `(workflow_id, seq,event_type)`.

Replace or update it to exercise the public `submit-workflow` + `start-worker` path. Add deterministic fault injection at every store transition, lease expiry/fencing tests, worker capability mismatch, batch starvation, terminal-child notification, duplicate IDs, signal-vs-timeout races, and graceful/forced shutdown. A small reference state machine plus property-based command generation would give more confidence than post-quiescence SQL checks alone.

### Migrations and documentation

- Only one “initial” migration exists per JDBC dialect, while source comments refer to a later `20260807000007` migration. If the initial version has ever shipped, editing it does not upgrade databases that already recorded it. Keep migrations immutable and add forward upgrade tests from each released schema.
- README defaults do not match code: it says `:threads 4`, logging false, and telemetry false, while the engine defaults are unbounded, true, and true. It also still calls PostgreSQL payload columns JSONB although the migration/code use EDN text.
- `architecture.md` still says replay queries the store per operation; the implementation now uses a pass-local snapshot.
- Replace references to historical AI notes in production comments with issue/ADR identifiers. The notes are useful archaeology, but they are not a stable design specification.

## Suggested target storage contract

A smaller, safer durable API would center all correctness on two operations:

```clojure
(create-workflow! store
  {:workflow-id ... :run-id ... :workflow-type ... :build-id ...
   :args ... :request-id ...})

(commit-transition! store
  {:workflow-id ... :run-id ...
   :expected-revision ... :lease-token ...
   :append-events [...]
   :new-run-state ... :next-run-at ...
   :outbox [...]
   :signal-consume ...})
```

The scheduler should atomically claim runnable rows/tasks and return fencing tokens. Signal insertion, cancellation, timer promotion, activity completion, and child completion should be idempotent inbox operations that mark a workflow runnable. Process-local wake callbacks become optional notifications that merely reduce polling latency.

History should have an immutable event ID/order, while the workflow row is the materialized scheduling state. This makes the event log auditable without forcing every scheduling query to derive state by replay.

## Recommended implementation order

1. Fix build/CI and write failing regression tests for permanent-owner recovery, waiting-workflow starvation, terminal-child notification, duplicate IDs, signal idempotency, and cancellation status.
2. Introduce workflow `revision`, explicit run state, lease expiry, and fencing token; require them in every durable transition.
3. Add atomic workflow creation and `commit-transition!`, including inbox/outbox records for signals and parent/child effects.
4. Add complete command-signature replay checks and workflow build/version routing.
5. Add worker concurrency, continue-as-new/sticky replay, codec limits/versioning, and the shared `.cljc` transition kernel.
6. Update the chaos harness to use only public worker APIs and make it a required periodic CI job.

## Validation performed for this review

- `bin/kaocha :in-memory`: **117 tests, 840 assertions, 0 failures**.
- `bin/kaocha :test-cljs`: **42 tests, 97 assertions, 0 failures**.
- `clj-kondo --parallel --lint src test build deps.edn resources`: **2 errors**, both undefined build namespace lists; 1 unused-require warning.
- `clojure -T:build compile-main`: **fails** at `build/build.clj:9` because `base-nses` is unresolved.
- Focused local checks confirmed duplicate signal IDs are stored twice, duplicate workflow starts are accepted, cancellation of a missing ID creates cancelled state without history, and changing sequence 0 from a timer to an activity is accepted instead of reported as non-deterministic.

PostgreSQL/MariaDB/FoundationDB integration suites and the forked-JVM chaos harness were not run as part of this review.
