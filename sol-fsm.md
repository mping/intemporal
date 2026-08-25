# Pure FSM Workflow Engine

## Implementation Status

- [x] Public engine lifecycle: `start-engine`, mandatory stable owners, engine
  shutdown, and removal of worker-era public APIs.
- [x] Pure CLJC FSM reducer with JVM and CLJS interpreters; the old replay
  fallback interpreters have been removed.
- [x] Atomic FSM transitions, checked-store specs, and opt-in event caching for
  InMemoryStore, JDBC/PostgreSQL/MariaDB, and FoundationDB.
- [x] Clean SQL baseline schema and versioned FDB storage prefix.
- [x] Focused shared reducer, engine API, cache, and FSM-store tests.
- [x] Remove the now-unused per-operation persistence methods from
  `IEngineStore` and every backend/decorator.
- [x] Migrate the broader workflow, crash, lifecycle, store-conformance, and
  CLJS test suites to the engine-owned FSM APIs; restore them to the normal
  Kaocha and Node configurations.
- [ ] Migrate the standalone forked-JVM chaos harness terminology and process
  entry point from "worker" to engine-node.
- [ ] Run the full build, demo, package-consumer, and restart-chaos acceptance
  checks for the engine-only architecture.

## Summary

Status: **complete for the engine architecture and normal test suites**; the
remaining standalone chaos, build/demo, and full persistent acceptance work is
tracked above.

Rebuild orchestration around a deterministic CLJC reducer while retaining replay-based workflow functions and the existing workflow DSL. The reducer performs no I/O, clock access, user-code execution, or observer delivery; it emits effect descriptions interpreted by thin JVM and ClojureScript runtimes.

Locked decisions:

- Replace `make-workflow-engine` with `start-engine`; do not retain an alias.
- `start-engine` always requires an explicit stable `:owner-id` and always drives workflows.
- Remove `:worker?` and submission-only engines. There is no worker API or separate worker lifecycle.
- Keep stable ownership without leases or fencing; one owner ID may identify only one live engine.
- Use one atomic store transition, including parent notification and the complete applicable parent-close-policy descendant tree.
- Add opt-in event caching through a decorator.
- Make a clean storage break; existing SQL schemas and FDB data are unsupported.
- Preserve durable event shapes and the public workflow API unless explicitly changed above.

## Interfaces and Data Contracts

### Public API

Status: **complete**.

Keep the signatures and behavior of activities, protocols, retries, async/join, timers, signals, child workflows, sagas, cancellation, history/result reads, and workflow start/submit/await/resume.

Introduce:

```clojure
(start-engine
  & {:keys [store owner-id
            threads queue-capacity submit-timeout-ms default-timeout-ms
            poll-ms batch-size workflow-concurrency
            protocols observer enable-logging enable-telemetry unref-timers?]})

(shutdown-engine engine)
(shutdown-engine engine grace-period-secs)
```

- `:owner-id` is mandatory and validated before any resources or recovery work start.
- Construction registers protocols, creates the executor, recovers same-owner `RUNNING` workflows, and starts exactly one engine scheduling loop.
- `start-workflow`, `submit-workflow`, `await-workflow`, and `resume-workflow` reject anything other than a running engine handle.
- `with-workflow-engine` remains, delegates to `start-engine`, and also requires an explicit owner.
- `shutdown-engine` is idempotent: stop claims, drain or interrupt in-flight drives, requeue interrupted work, release ownership, then close the executor.
- Remove `make-workflow-engine`, `:worker?`, and remaining worker terminology from public code and documentation.
- Expose `make-retry-policy` from `intemporal.core` as already documented.
- Successful `submit-workflow` continues returning exactly `{:workflow-id id}`. Repeating an identical creation is idempotent; conflicting reuse of an ID throws a typed exception.

### Store protocol

Status: **complete** — `IFsmStore` is the transactional boundary, with a small
private scheduling/inspection protocol for engine polling and result reads.

Replace `IStore` with this smaller contract:

```clojure
(create-workflow! [store creation])
(load-workflow-state [store workflow-id])
(load-snapshot [store workflow-id])
(load-close-tree [store workflow-id])
(load-history [store workflow-id])
(get-workflow-status [store workflow-id])

(add-signal! [store workflow-id signal-name signal])
(request-cancel! [store workflow-id])
(wake! [store workflow-id])
(commit-transition! [store transition])

(claim-runnable! [store owner-id limit now-ms])
(requeue-running! [store workflow-id owner-id])
(recover-running! [store owner-id])
(release-owner! [store owner-id])
```

Remove the individual append, signal-consume, point-read, max-sequence, park, and child-link verbs. Their correctness-sensitive behavior belongs in `create-workflow!`, snapshots, or `commit-transition!`.

A snapshot contains:

```clojure
{:workflow-id id
 :owner-id owner-or-nil
 :status :running|:completed|:failed|:cancelled|:terminated
 :run-state :runnable|:running|:waiting|:terminal
 :next-run-at number-or-nil
 :revision n
 :history-revision n
 :wake-version n
 :cancel-requested? boolean
 :parent {:workflow-id id :seq n :policy keyword} ; optional
 :signals {"name" [{:queue-id n :signal-id id :payload value}]}
 :history [event ...]}
```

`load-workflow-state` returns the same live metadata and signals without history. `load-snapshot` reads everything consistently. `load-close-tree` returns a consistent descendant graph containing linkage, policy, status, revision, and next terminal sequence for each node.

Maintain three independent counters:

- `revision` changes on every workflow state, relationship, history, or inbox mutation and guards full-tree close commits.
- `history-revision` changes only when a new history identity is appended and validates event-cache entries.
- `wake-version` changes on signals, cancellation, explicit wake, and parent notification and remains the lost-wake guard.

Creation atomically installs the workflow row, owner, `:workflow-started` event, and optional parent link. Matching replayed child creation is idempotent; a mismatched workflow name, arguments, parent, sequence, or policy is a conflict.

Signals have strict FIFO queue IDs and a workflow-wide unique `:signal-id`. Repeating the same ID and contents is idempotent; reusing it with different contents is a conflict. Signal consumption identifies the exact FIFO envelope and occurs in the same transition as its corresponding history event.

`commit-transition!` accepts:

```clojure
{:workflow-id id
 :owner-id owner
 :kind :continue|:park|:terminal
 :expected-wake-version n-or-nil
 :events [...]
 :consume-signals [{:signal-name name :queue-id n :signal-id id}]
 :create-workflows [...]
 :next-run-at number-or-nil
 :terminal-status keyword-or-nil
 :parent-notification {:workflow-id id :events [...]} ; optional
 :close-actions [...]
 :expected-related-revisions {workflow-id revision}}
```

Atomic behavior:

- Every transition verifies that the root is nonterminal, `RUNNING`, and owned by the supplied engine.
- A supplied wake version is a CAS guard. Failure appends and consumes nothing.
- `:continue` leaves the workflow `RUNNING`; guarded variants are used before executing a side effect, while activity-result commits are unguarded so an unrelated signal cannot discard a completed attempt.
- `:park` requires a wake version and atomically appends events, consumes signals, and changes `RUNNING` to `WAITING`.
- `:terminal` atomically commits the terminal event, parent aliases/wake, and all selected descendant cancel/terminate actions.
- Full-tree close commits compare every related revision. Any mismatch produces an all-or-nothing conflict and causes the engine to reload and replan.
- Results distinguish `:committed`, `:wake-raced`, `:conflict`, `:not-owner`, `:not-running`, and `:terminal`, and return current counters.

`CheckedStore` validates every argument and result using new specs for creation, workflow state, snapshots, close trees, transitions, claims, signals, and commit results. Cross-field specs enforce transition-kind requirements and prohibit partial terminal plans.

### Event cache

Add an opt-in `CachedStore` decorator configured as:

```clojure
:create-store ... :cache {:max-workflows 1024}
```

A nil `:cache` disables it.

- Cache only decoded histories, keyed by workflow ID and `history-revision`; signals and cancellation remain live.
- On `load-snapshot`, read `load-workflow-state`; merge a matching cached history or delegate to the full snapshot read.
- Write through successful root history commits using first-write-wins event identity.
- Invalidate affected parent, descendant, created-workflow, terminal, conflict, and uncertain entries.
- Cross-process history writes invalidate naturally because the live history revision changes.
- Claims and ownership-only changes do not evict history.
- Use a bounded thread-safe LRU and delegate `AutoCloseable`.
- Factory composition is `CheckedStore(CachedStore(Backend))`.

## FSM and Engine Implementation

Status: **complete**. Both platform runtimes interpret reducer commands directly;
there is no replay fallback driver.

Define a pure `intemporal.internal.fsm` reducer:

```clojure
(fsm/start claim)            ; => initial machine
(fsm/step machine input)     ; => {:machine next :command command :emissions [...]}
```

Machine phases cover snapshot loading, replay, pre-effect commit, activity execution, async execution, retry parking, close-tree loading, terminal commit, and drive completion. Each step emits at most one awaited command; observer and tracing emissions are post-commit, best-effort outputs that cannot change workflow state.

Inputs are normalized data such as snapshot loaded, replay returned/suspended/failed, commit result, activity result, async results, close tree loaded, and shutdown requested. Commands include loading state, invoking workflow replay, committing a transition, executing one activity or async batch, loading the close tree, and returning the drive result.

The reducer must:

- Be deterministic for identical machine/input values.
- Receive time, IDs, durations, and serialized errors as input.
- Never call a store, clock, executor, observer, tracing API, or workflow function.
- Preserve activity retry budgets and durable deadlines.
- Give due async work the same precedence as today.
- Resolve timers, signals, signal timeouts, joins, cancellation, and terminal outcomes exclusively from snapshots and normalized inputs.
- Commit scheduling events before executing activities.
- Reload immediately after wake or related-revision conflicts.
- Treat executor shutdown, interruption, and store failures as infrastructure outcomes that requeue work rather than fail the workflow.
- Drain unjoined async work before terminal completion.

Refactor workflow replay into a shared CLJC adapter that invokes the existing workflow function with an explicit pass context. The context uses snapshot cancellation and supplied time, buffers events and observer notifications, and performs no durable store calls.

Child workflow calls require one internal `:flush-commands` suspension on first encounter. The reducer atomically commits the parent’s scheduled event and child creation, then replays; the public call still returns the same child ID or `AsyncHandle`. This removes child persistence from the workflow body and closes the seed/link crash window.

On terminal replay:

1. Load the descendant relationship snapshot.
2. Traverse it in the pure reducer.
3. Stop traversal below `:abandon`.
4. Emit cancel-and-wake actions for `:cascade-cancel`.
5. Emit terminal events for `:terminate`.
6. Commit the root terminal event, parent notification, and complete selected closure atomically.

JDBC must lock related workflow rows in stable ID order to avoid deadlocks. FDB must read every related revision as a conflict key. If a transaction exceeds backend limits, it fails before the root terminal event is visible and remains retryable.

Keep platform adapters thin:

- JVM: blocking reducer interpreter, virtual-thread activity executor, bounded drive pool, interruption and tracing.
- CLJS: Promesa reducer interpreter with workflow-context rebinding and timer cleanup.
- Both adapters must produce equivalent reducer command traces for the same scripted inputs.

Remove internal `run-once`; migrate its tests to a normal activity because arbitrary side effects inside replay violate the FSM boundary.

## Persistence and Migration

Status: **complete** for the clean-break schema and transactional backend ports.

This is a deliberate clean break:

- Replace the SQL migration sets with a clean schema containing revision counters, owner/scheduling state, immutable parent linkage, committed-order history identity, signal ID uniqueness, and FIFO indexes.
- Require users and tests to start with an empty PostgreSQL/MariaDB schema; do not automatically delete or reinterpret existing tables.
- Use a versioned FDB key prefix so legacy keys are ignored without destructive cleanup.
- Preserve the current EDN codec, durable event shapes, committed append order, retry-attempt identity, and first-write-wins semantics.
- Reuse FDB’s existing transactional per-workflow history ordinal and per-signal-queue ordinal; do not reintroduce sequence sorting, clock ordering, or random ordering.
- Implement every compound operation as one atom transition, SQL transaction, or FDB transaction.

Implementation order:

1. [x] Add FSM/store data specs and table-driven reducer tests without switching production execution.
2. [x] Implement the new protocol in InMemoryStore, CheckedStore, and CachedStore; rewrite store conformance tests.
3. [x] Integrate the reducer, replay adapter, `start-engine`, and public APIs; make JVM in-memory and CLJS suites green.
4. [x] Port the atomic contract to PostgreSQL/MariaDB and FoundationDB.
5. [x] Migrate crash, lifecycle, store, workflow, and CLJS callers; remove obsolete per-operation storage calls and worker-era engine construction from normal tests.
6. [ ] Migrate standalone chaos terminology plus documentation, build smoke, and demo callers; remove remaining obsolete harness code.
7. [ ] Update `architecture.md`, `README.md`, and `KNOWN_LIMITATIONS.md`, removing resolved cross-workflow, signal-consumption, creation, and replay-I/O limitations while retaining the stable-owner limitation.

## Test and Acceptance Plan

Status: **in progress**. The restored broad CLJS suite passes (57 tests, 153
assertions); migrated focused JVM lifecycle, retry, child, scheduler, race, and
store-conformance suites pass. Full persistent-backend, package, demo, and
forked-JVM chaos acceptance remain.

Preserve workflow test bodies wherever possible. Mechanical changes are limited to `make-workflow-engine` → `start-engine`, explicit unique owner IDs, renamed engine-focused test namespaces, and new store fixtures. Restart tests deliberately reuse an owner; clean handoff tests use a different owner after shutdown.

Add reducer tests for:

- Every machine phase and legal input.
- Activity success, terminal failure, infrastructure failure, retry deadline, and exhausted budget.
- Async batching, joining, join-any, and unjoined draining.
- Timers before and after deadline.
- Signal FIFO, idempotency, exact-envelope consumption, timeout arbitration, and arrival during park.
- Cancellation at replay frontiers and before activity execution.
- Child creation flush, join, parent notification, and every close policy.
- Wake conflict, related-revision conflict, shutdown, and invalid inputs.
- Identical scripted CLJ/CLJS command traces.

Extend store conformance across InMemory, Cached(InMemory), Checked(Cached(InMemory)), PostgreSQL, MariaDB, and FDB for:

- Atomic and conflicting workflow creation.
- Required owner assignment, exclusive claim, recovery, requeue, and release.
- Revision, history-revision, and wake-version rules.
- Committed history order and first-write-wins identity.
- Guarded/unguarded continue commits and wake-raced parks.
- Atomic signal consume plus outcome append.
- Atomic terminal, parent notification, and full-tree close actions.
- No partial changes after any failed CAS.
- Signal ID uniqueness and FIFO.
- Cache hits, write-through, eviction, terminal cleanup, cross-instance invalidation, and close delegation.

Retain and migrate all public workflow, crash-recovery, retry, saga, signal, timer, child, observer, tracing, and scheduling tests. Migrate the standalone chaos harness separately. Add fault injection immediately before and after every interpreter command, especially activity execution/result commit and the terminal cross-workflow transaction.

Acceptance requires:

- No public `start-worker`, `make-workflow-engine`, or `:worker?`.
- `start-engine` rejects missing owner IDs.
- No store/clock/executor references from the reducer.
- Public workflow call signatures and result shapes remain unchanged.
- Existing completed activities never re-execute during replay; crash-window activities remain explicitly at-least-once.
- Cached execution performs one full history load followed by history-revision cache hits across continuations.
- Full JVM, CLJS, PostgreSQL, MariaDB, FDB, coverage, lint, packaged-consumer, Earthly, demo, and kill/restart chaos checks pass.

Assumptions:

- Deterministic replay remains the workflow execution model; arbitrary workflows are not compiled into persisted program counters.
- There are no leases or fencing tokens. Hard-crash recovery requires restarting exactly one engine with the same owner ID.
- The direct full-tree transaction replaces an outbox; backend transaction-size limits are accepted and documented.
- Caching is a transparent optimization and never a correctness dependency.
- General command-signature versioning, continue-as-new, activity idempotency contexts, codec redesign, and replay snapshots remain out of scope.
