# intemporal: simplification, cleanup, and redesign

## Goal

Make the codebase smaller and easier to reason about without weakening the correctness properties
that make a durable workflow engine useful.

The cleanup may break public APIs and edit migrations because the library is not production-ready.
That freedom is not a reason to remove useful façade functions or persistence guarantees merely to
hit a line-count or protocol-method target. Every removal must either eliminate unused behaviour or
replace it with a clearer contract.

The non-negotiable invariants are:

1. Workflow history and scheduling changes that prevent lost wakes remain atomic.
2. A workflow is driven by at most one owner at a time.
3. Replay sees one stable history snapshot per pass.
4. Cancellation visibility does not become weaker accidentally.
5. CLJ and CLJS keep equivalent workflow semantics where their runtimes permit it.
6. All store backends implement one explicit ordering, idempotency, signal, child-link, and resource
   lifecycle contract.

This plan was revalidated against `ad2672e`. The source tree is unchanged from the earlier
`b400e87` audit; `ad2672e` adds the first version of this plan.

---

## Implementation outcome (2026-08-22)

All phases in this plan are implemented in the current worktree. In particular:

- `make-workflow-engine` is now an active resource constructor that owns exactly one recovery
  worker. The public `start-worker` API and the lazy second-worker path are gone.
- `start-workflow`, `submit-workflow`, and `resume-workflow` all use durable claims. Supplying the
  same stable `:owner-id` to a replacement engine recovers that owner's `RUNNING` work during
  construction; `:worker? false` provides an explicit submission/status-only client mode.
- Shutdown stops polling, drains claimed JVM drives for five seconds by default (or the supplied
  grace period), interrupts overruns, releases durable ownership, and then closes the activity
  executor.
- Observer delivery is a one-method event protocol, CheckedStore wrapping is construction policy,
  shared execution logic lives in `internal/execution/common.cljc`, and semantic constants live in
  `internal/domain.cljc`.
- The store contract is documented and enforced across InMemory, PostgreSQL, MariaDB, and FDB:
  committed append order, first-write-wins event identity, durable retry attempts, strict signal
  FIFO, exclusive claims, wake-version parking, and seeded-then-linked children.
- The build, packaged JVM/CLJS consumers, demo generation, Pages workflow, and Earthly `+build-all`
  target are reproducible. Generated `public/` output is no longer source-controlled and is rebuilt
  with `bin/build-doc`.
- The forked-JVM chaos harness uses the public store APIs and stable engine owners. Both its no-kill
  baseline and a forced kill/restart run pass all invariants.
- Verified remaining correctness and scalability boundaries are maintained in
  `KNOWN_LIMITATIONS.md`; notably, stable owners still have no lease/fencing mechanism, so one owner
  id must identify at most one live process.

Final verification:

```text
clj-kondo:                         0 errors, 0 warnings
JVM full suite:                    178 tests, 1280 assertions, 0 failures
MariaDB-focused integration:       48 tests, 420 assertions, 0 failures
ClojureScript suite:               49 tests, 122 assertions, 0 failures
merged coverage:                   94.6% lines (2484 / 2626)
JVM and CLJS packaged consumers:   pass
Earthly +build-all:                pass; demo build has 0 warnings
chaos no-kill and kill/restart:    all invariants pass
```

---

## Verified baseline

The following were run before editing the implementation:

```text
bin/kaocha :in-memory
  121 tests, 881 assertions, 0 failures

bin/kaocha :test-cljs
  42 tests, 103 assertions, 0 failures

node_modules/.bin/shadow-cljs compile node
  build completed, 0 warnings, tests green

clj-kondo --parallel --lint src test build dev deps.edn
  2 errors, 8 warnings

clojure -T:build compile-main
  fails: Unable to resolve symbol: base-nses
```

The database/FDB integration suites and built-jar smoke tests have not yet been run. Record their
counts before changing store code.

---

## Phase 0 — Isolate and fix confirmed defects

These are behavioural fixes, not cleanup. Land each with its regression test before moving code.

### 0a. Synchronous child close policy

`run-child-workflow` destructures only `:child-id` and silently drops
`:parent-close-policy`. Forward both options to `run-child-workflow-async`.

Add CLJ and CLJS tests in which a synchronous child is created with a non-default policy. The test
must demonstrate the policy's observable effect rather than only inspect an argument.

### 0b. CLJS timeout sentinel collision

`runtime.cljs` races an activity result against `{::timeout true}` and identifies the timeout by
looking for that key in the returned value. Replace the map sentinel with a unique object checked by
identity, or reject the timeout promise with a private timeout type.

Add sequential and parallel CLJS tests proving that an activity may return
`{:intemporal.internal.runtime/timeout true}` unchanged.

### 0c. Repair the build and package, not just AOT compilation

`build/build.clj` references undefined `base-nses` and `dev-nses`. Remove `compile-dev` and the
unused `clojure.pprint` require. Do not simply drop `:ns-compile` while retaining the current basis:
that basis includes `:dev`, `test`, and `doc`, whose namespaces also begin with `intemporal`.

Build requirements:

- create a production basis without the `:dev` or `:doc` paths;
- compile only `src` namespaces, with optional JDBC/FDB dependencies available to the compiler;
- copy `src` and `resources` into the jar staging directory before AOT compilation;
- include `.cljc`/`.cljs` sources so the jar remains consumable from CLJS;
- include both migration trees;
- avoid placing test or doc namespaces in the jar;
- make `jar` invoke the compile/copy step exactly once.

Add automated checks that:

- `clojure -T:build compile-main` succeeds;
- `clojure -T:build jar` succeeds;
- the jar contains `intemporal/core.cljc` and both migration resources;
- a fresh JVM using only the jar and published dependencies can run an in-memory workflow;
- a small CLJS consumer can compile against the jar rather than `src`.

Add `build`, `dev`, `deps.edn`, and `resources` to linting. Run `+build-all` as a CI job alongside
`+test`; neither replaces the other.

### 0d. Make the demo reproducible

`public/` is ignored but contains 445 tracked files, mostly generated JavaScript. Move the
handwritten HTML files to a source directory such as `doc/static/`, generate `public/` from those
files plus `shadow-cljs release doc`, and build it in the Pages workflow before upload. Only then
untrack generated `public/` output.

Keep `bin/kaocha`, `bin/run-coverage`, and `.clj-kondo/config.edn` tracked. Remove their broad
ignore rules or add explicit negations; do not untrack build scripts or lint configuration.

---

## Phase 1 — Low-risk hygiene

Keep these changes small and reviewable. Although most are behaviour-preserving, they should not be
described as a single "pure deletion" commit.

### 1a. Remove duplicate and obsolete local test code

- Delete `test/intemporal/tests/bench/`. `bench/store_test.clj` duplicates
  `store/store_test.clj` except for its namespace, and the remaining `wf-count 1` tests are neither
  useful benchmarks nor additional conformance coverage. Record the expected JVM test-count delta.
- Delete `dev/verify_bugs.clj`; its store constructors no longer exist and its maintained race
  reproductions live under `test/intemporal/tests/jepsen/`.

Do not claim that `bench/store_test.clj` is the shared store conformance suite. The actual shared
suite is `test/intemporal/tests/store/test_suite.clj`.

### 1b. Decide the chaos harness explicitly

Do not delete `test/intemporal/jepsen/` as dead code in this phase. It is manually invoked, and a
forked multi-process chaos test provides coverage that deterministic single-process regression tests
do not replace.

Treat it as a separate decision and follow-up:

- If multi-process correctness remains a project goal, repair the SQL conflict target, update its
  ownership/worker model, update the stale expected outcomes, and give it a manual or scheduled CI
  entry point.
- If the project intentionally retires stochastic chaos testing, delete the harness, its migrations,
  and aliases in one explicit commit whose message records the lost capability. Git history is the
  archive; the deterministic tests are regression guards, not a substitute.

Until that decision is made, label the harness unsupported and broken rather than implying that CI
runs it. The current worker calls `start-workflow`, which now uses `submit-workflow` plus the managed
worker; the real mismatch is that the harness does not deliberately exercise stable owner recovery.

### 1c. Remove genuinely unused internals

After a repo-wide reference check, remove:

- `internal.activity/get-activity-fn`;
- the unused `bloop` context macro;
- unused logging macros (`trace`, `info`, `warn`, `fatal`, `errorf`, `fatalf`);
- ignored `kind` parameters from JDBC payload encoding/decoding;
- the ignored `root-subspace` parameter from `owner-index-key`;
- the unused `retry-policy` binding in the JVM parallel executor;
- unused specs such as `::owner-id`, `::run-state`, `::data`, `::signal-envelope`, and
  `::pending-ids`, including the obsolete `check!` example.

Keep `*capture-stack-traces?*`: it is an intentional debugging capability documented at its
definition. Keep `:submit-timeout-ms`: it controls bounded-executor backpressure. Instead, expose it
through `make-workflow-engine` so the public engine options match the runtime options, and test it.

The JVM does not need `:protocols` in its workflow context because the JVM macro registers protocol
implementations up front. Make the `:protocols` engine/context plumbing CLJS-only; do not describe
the JVM branch as broken.

### 1d. Simplify configuration

- Remove `"target"` from top-level `:paths` so generated classes cannot shadow source.
- Remove the unused `exoscale/automata` development dependency.
- Remove or replace nonexistent shadow-cljs preload/init namespaces. The Node build currently
  succeeds, so treat the preload as stale configuration rather than a proven build failure.
- Fix `.gitignore` for the tracked `bin/` and `.clj-kondo` sources.

### 1e. Centralize only semantic constants

Put terminal statuses, terminal event types, and parent-close policies in a small internal domain
namespace used by core, execution, stores, and specs. Do not make `intemporal.spec` the owner of
runtime behaviour merely because it already repeats the values.

Keep operational defaults near the component that owns them:

- replay-budget default with the workflow driver;
- activity timeout with runtime/engine construction;
- worker poll defaults with worker construction.

Share a default only when multiple call sites are required to mean the same thing.

---

## Phase 2 — Replace the observer surface with one event operation

The existing 20-method observer protocol creates substantial fan-out boilerplate. Replace it with a
single event-data operation, while preserving an explicit public extension point:

```clojure
(defprotocol IWorkflowObserver
  (on-event [observer event]))
```

Observer events use one documented map schema with at least `:event`, `:workflow-id`, and
`:timestamp`, plus event-specific fields. Construct the timestamp once at emission so every
composed observer sees the same event.

Introduce a context-independent helper such as:

```clojure
(observer/notify! observer event)
```

It must isolate observer exceptions. `ctx/notify-observer` may obtain the observer from the current
workflow context and delegate to it; engine code that runs outside the context binding must pass its
observer explicitly. Do not replace all `-notify` calls directly with `ctx/notify-observer`, because
suspension processing and finalization run after `replay-once` has left the dynamic binding.

Implement logging, noop, and composite observers over `on-event`. Composite delivery should isolate
each observer independently so one bad observer does not prevent later observers from receiving the
event.

Change `:enable-logging` to default `false`. The current logger stores every observer event in an
unbounded atom; retaining it as an explicit debugging option is useful, but silently enabling it for
every production engine is not.

Tests must cover:

- the documented shape of every emitted observer event;
- delivery from both workflow-body and post-binding engine paths;
- exception isolation at both paths;
- composite delivery continuing after one observer throws;
- explicit logging on/off and the `:log` engine value.

Update README examples and option defaults in the same commit.

---

## Phase 3 — Remove the no-op CheckedStore layer in normal production

Make wrapping a construction-time policy without breaking tests, explicit debugging, or resource
closure:

```clojure
:checked? :auto  ;; default: wrap only when spec/asserts-on?
:checked? true   ;; always install the wrapper; checks follow the dynamic spec flag
:checked? false  ;; always return the raw store
```

Keep `CheckedStore`'s `AutoCloseable` delegation. A wrapped JDBC store is used with `with-open`, and
the wrapper must close its inner datasource. Keep `checked/unwrap` while the chaos harness needs the
JDBC datasource; remove it only after all callers disappear.

Add factory-level tests for all three modes, including:

- invalid values are rejected in `:auto` mode under the test alias;
- `:auto` returns a raw store when assertions are disabled;
- explicit `true` retains the wrapper across a later `s/check-asserts` toggle;
- explicit `false` bypasses validation;
- closing a wrapped store closes its closeable inner store.

The existing `toggle-is-enabled-in-ci` and `check!-is-wired` tests remain useful, but they do not by
themselves cover construction-time gating.

---

## Phase 4 — Share the execution engine without mixing in semantic changes

First land Phase 0 bugs and Phase 2 observer changes. Then extract behaviourally identical,
synchronous helpers from `execution.clj` and `execution.cljs` into
`intemporal.internal.execution.common` (`.cljc`).

Good initial candidates are:

- decision constructors;
- retry-deadline calculations and async retry selection;
- event-map constructors;
- timer and signal store operations that are synchronous on both platforms;
- terminal status, parent-link, close-policy, and parent-notification helpers;
- cancellation/failure finalization with reader-conditional tracing;
- `run-once`.

Keep platform-specific:

- workflow function execution and throwable-catching syntax;
- activity attempt execution;
- pending activity and parallel async execution;
- suspension chaining;
- completed finalization while async work drains;
- the drive loop and promise/loop mechanics.

Refactor without changing wire event shapes or park/continue decisions. Review the diff by comparing
the before/after histories for representative workflows on both platforms.

Additional local cleanup:

- bind the JVM workflow context once in `execute-workflow-fn`;
- factor the repeated failure-result construction without hiding platform catch differences;
- pass `store` to `run-attempt` instead of a shadowing `record-attempt!` positional callback;
- split JVM parallel execution into submission and result-collection helpers;
- share only the JVM cause-chain walker used by runtime and execution; retain the separate tagged
  `error/interruption?` predicate;
- factor CLJS exception-data access into one helper;
- replace `RetryPolicy` with a plain map if tests confirm no record identity/type behaviour;
- make namespace-private helpers private after cross-namespace extraction is complete.

Worker defaults are not automatically drift: the JVM and JS scheduling primitives have different
costs, while `ensure-worker!` intentionally passes an explicit low-latency poll interval. Document
those roles. Add exponential poll-failure backoff to CLJS if external/remote CLJS stores are a
supported direction; otherwise leave it out and state that the CLJS store is in-process only.

---

## Phase 5 — Redesign IStore contract-first

Do not target an arbitrary method count. The protocol is the atomic persistence boundary; reducing
it is valuable only when the replacement keeps the same safety and performance properties.

### 5a. Specify the contract before changing methods

Add a store-contract section to `architecture.md` covering:

- which operations are atomic and their crash windows;
- event identity and what happens when the same identity is saved again;
- how legitimate repeated activity-attempt events are represented;
- the total order returned by `load-history`;
- whether conflicting writes for one event identity reject, first-win, or last-win;
- cancellation visibility during a running drive;
- strict FIFO semantics for signals of one workflow/name;
- child creation/link postconditions and crash recovery;
- ownership, wake-version, status, and resource-close behaviour.

Adopt committed append order as the `load-history` order unless the contract and public history API
are deliberately changed. Sequence number is a replay address, not a chronological order: multiple
event types share a sequence and async/child completions may arrive after higher-sequence events.

Do not order ties lexically by event type. In particular, that would place
`:activity-completed` before `:activity-scheduled` for the same sequence. JDBC's auto-increment `id`
currently supplies an append ordinal and must not be dropped until an equivalent ordering mechanism
exists everywhere. FDB will likely need a versionstamp/order index separate from its event-identity
index.

### 5b. Expand conformance tests first

Run the same tests against InMemory, PostgreSQL, MariaDB, and FDB for:

- committed history order, including same-sequence scheduled/completed pairs and late child/async
  completion;
- exact duplicate writes and conflicting same-identity writes;
- multiple durable retry attempts;
- atomic append-and-wake and park-vs-wake races;
- exclusive claims under contention;
- cancellation between consecutive activities;
- strict signal FIFO, including multiple signals created in one millisecond;
- missing, active, cancelled, and terminal statuses;
- a child seeded then linked, plus a crash between those operations;
- resource closure.

The current shared suite is necessary but not sufficient. Do not require it to pass "unchanged" when
the contract itself is being tightened; make each new assertion fail on the divergent backend before
fixing that backend.

### 5c. Make safe API reductions

- Remove `save-event` from the protocol and provide a namespace-level convenience function over
  `save-events`; make FDB's single-event path use the same implementation.
- Keep `find-event` or replace it with an explicitly indexed point-lookup operation. It is used for
  live timer, async, and child-completion checks outside the pass-local replay snapshot; replacing it
  with `load-history` would regress JDBC and can change race behaviour.
- Keep `max-seq` unless terminal-event persistence is redesigned to allocate its sequence atomically.
- Keep cancellation reads until a tested alternative preserves between-operation visibility. A
  per-drive cache is not equivalent.
- Keep pending-signal inspection until its diagnostic and race-test uses have a backend-neutral
  replacement. Saving one protocol method is not worth backend-specific test scans.

### 5d. Share pure scheduling logic, retain atomic persistence verbs

Move pure predicates and state transitions—terminal derivation, normalization, wake transition,
eligibility, and park result calculation—to a shared scheduling namespace where backends can reuse
them.

Retain backend-level atomic operations such as:

- append events and wake;
- compare wake-version, append suspension events, and park;
- scan and claim runnable workflows;
- mark cancellation and wake;
- recover/release owner state.

Do not implement these by composing independent public `read`, `append`, and `CAS` calls. JDBC must
keep them inside one database transaction, FDB inside one FDB transaction with index maintenance,
and InMemory inside one atom transition. FDB's ready/due/owner indexes remain backend-specific even
when they call shared pure transition functions.

### 5e. Resolve child-link semantics

The engine currently seeds the child's `:workflow-started` history before calling `link-child!`.
Change the protocol documentation to say that `link-child!` records linkage for an already-created
child, and change the conformance test to seed the child first and then require `:running` on all
backends.

Separately add a crash test for failure between child seeding and linkage. If replay cannot guarantee
repair of the link and close policy, introduce one compound `create-and-link-child!` store operation
that writes all required state atomically. Do not make `link-child!` manufacture an empty row and call
it claimable; JDBC's claim query deliberately requires a start event.

### 5f. Backend cleanup after the contract is green

JDBC:

- remove the now-unused dialect argument from payload encoding;
- use `rs/as-unqualified-lower-maps` consistently and remove `row-value`;
- extract the small timestamp-expression difference from duplicated claim/park SQL;
- add `(workflow_id, signal_name, id)` signal lookup/order indexes to both PostgreSQL and MariaDB;
  MariaDB's foreign-key index covers `workflow_id`, not the whole consume query;
- change `signal_name` from unbounded text where necessary to support the composite index;
- remove signal `created_at` only after confirming no operational/debug use;
- use `EXPLAIN` with representative data before removing status or schedule indexes;
- keep the database-kind enum unless reducing it to a boolean genuinely clarifies every caller.

FDB:

- use a transactionally ordered key, preferably an FDB versionstamp or a transactional per-queue
  counter, for signal FIFO; never use a process-local counter;
- preserve ready/due/owner index maintenance inside the same transaction as schedule changes;
- implement point event lookup from an identity index rather than scanning full history.

SQL string literals cannot directly share Clojure keyword sets. Centralize semantic predicates in
Clojure, but do not contort SQL generation merely to claim that every textual status list has one
source.

---

## Phase 6 — Unify the engine lifecycle and simplify internals

### 6a. Make the engine the only public worker lifecycle

Remove the public `start-worker` API. There should be one engine lifecycle rather than an inert
engine constructor, a lazily created private worker, and a separately managed public worker whose
stop function is invisible to `shutdown-engine`.

Make engine construction start exactly one engine-owned recovery worker. Because construction now
starts threads/timers and performs store recovery, either rename the entry point to
`start-workflow-engine` or document `make-workflow-engine` as an active resource constructor. Do not
retain both names as two subtly different execution modes.

The running engine must:

- accept all former worker settings (`:owner-id`, poll interval, batch size, and workflow
  concurrency) as engine options;
- register configured workflow/activity protocol implementations before the first claim;
- call `recover-running!` before beginning its normal claim loop;
- use the same worker for `start-workflow`, `submit-workflow`, and `resume-workflow`, removing
  `ensure-worker!` and its special low-latency second configuration;
- make `shutdown-engine` stop the worker, drain or interrupt active drives according to the
  documented grace period, release ownership, and then stop the activity executor;
- prevent construction or accidental startup of a second worker for the same engine.

Crash recovery cannot rely on the current random `:internal-worker-owner`. `recover-running!` only
recovers `RUNNING` workflows for the same owner, and owned `WAITING` workflows are likewise not
claimable by a different owner. Require a stable `:owner-id` whenever restart recovery is expected;
allow a generated id only for explicitly ephemeral/in-memory use. Until the store has leases and
fencing tokens, document and enforce as far as practical that one stable owner id identifies at
most one live process. If overlapping processes with the same identity must be supported, add
leases/fencing before claiming automatic crash recovery is safe.

Workflow definitions must be loaded and protocol activity implementations supplied before the
worker scans persisted work. Prefer engine construction options for required registrations; do not
depend on a later `start-workflow` call to populate a fresh recovery engine. The existing
unresumable-workflow retry path remains a defensive fallback, not the normal startup sequence.

If the project needs submission/status-only processes that must never execute workflows, expose a
separate client abstraction or an explicit non-worker mode. Do not call that object a fully running
workflow engine, and do not make every transient API client silently compete for claims.

Add lifecycle tests proving that:

- `submit-workflow` executes without an explicit worker call;
- constructing a fresh engine with the same durable store and stable owner automatically recovers
  a workflow interrupted while `RUNNING`;
- a due timer and a durably woken signal wait resume after restart without `resume-workflow`;
- a fresh recovery engine has all workflow and protocol activity registrations before it claims;
- `shutdown-engine` stops polling, handles in-flight drives, and releases ownership;
- random/ephemeral ownership is not advertised as cross-process recovery;
- client-only mode, if retained, never calls `claim-runnable!`.

### 6b. Keep useful workflow façades

Keep the public operations that express useful workflow concepts:

- `join-all` and `join-any`;
- synchronous, async, and detached child-workflow variants;
- `start-workflow`, `submit-workflow`, `await-workflow`, and `resume-workflow`;
- `get-workflow-history` and `get-workflow-result`;
- `stub-protocol`, `defn-workflow`, and `suspension?`.

Keep one public engine start/constructor operation and `shutdown-engine`; remove `start-worker` and
its independently returned stop function after all callers and documentation use the unified
lifecycle.

Their wrappers are small because a good façade should be small. Removing them would force users to
depend on internal handles, store protocols, or macros. `suspension?` remains necessary for CLJS code
that uses `catch :default`; add a test for that documented path because existing saga tests use
`catch js/Error`, which intentionally does not catch the plain suspension type.

Internal simplifications:

- factor one private child scheduler returning both child id and handle information, while keeping
  the three public return shapes;
- have `await-workflow` always include `:workflow-id`, eliminating the platform-specific append in
  `start-workflow`;
- share terminal predicates and event sets from the internal domain namespace;
- remove the redundant second `current-context` lookup in `stub`;
- extract the common worker bookkeeping (`unresumable`, registration checks, failure classification,
  recovery/release) while keeping Thread/Semaphore and Promise/setTimeout scheduling separate;
- simplify `stub-protocol` only after adding CLJ/CLJS tests for multi-arity protocol methods and CLJS
  optimized builds;
- move `current-time-ms` to a small internal clock namespace rather than into workflow context;
- parameterize the close-policy tests per platform instead of maintaining six mostly identical
  files.

After these changes, review the public API as a product-design exercise. Remove a public function
only when there is a named replacement and README/examples/tests migrate in the same commit. Do not
set a target count such as "31 to 20."

---

## Phase 7 — Documentation and historical-note cleanup

Before deleting AI review notes, revalidate every still-open finding. Preserve verified limitations
in `architecture.md`, a small `KNOWN_LIMITATIONS.md`, or tracked issues; do not rely on git history as
the only place users can discover an active correctness limitation.

Then:

- inline the short rationale behind every `kimi.md` finding reference in production comments;
- replace dangling `improvements.md` and `deepseek` references with self-contained explanations;
- delete stale `kimi.md`, `sonnet.md`, `sol.md`, `issues.md`, and `fable.md` only after open findings
  have a maintained home;
- update `AGENTS.md` after the final code layout exists;
- correct the migration close-policy comment (`:terminate`, not `require-join`);
- remove nonexistent migration/index names from JDBC comments;
- remove stale spec references to deleted namespaces;
- update README defaults, public APIs, CheckedStore construction, packaging, and chaos-harness status;
- replace the two-mode engine/worker documentation with the unified engine lifecycle, including
  stable-owner, registration-order, shutdown, and optional client-only semantics.

Keep `README.md`, `architecture.md`, `DEVELOPMENT.md`, `AGENTS.md`, and any curated limitations
document.

---

## Verification matrix

Run the smallest relevant checks after each commit, then the full matrix at phase boundaries.

### Always

```bash
clj-kondo --parallel --lint src test build dev deps.edn resources
bin/kaocha :in-memory
bin/kaocha :test-cljs
```

### Build and demo

```bash
clojure -T:build compile-main
clojure -T:build jar
node_modules/.bin/shadow-cljs compile node
node_modules/.bin/shadow-cljs release doc
earthly +build-all
```

Inspect the jar contents and run both JVM and CLJS consumer smoke tests described in Phase 0.

### Store changes

Bring up only the services required by the test:

```bash
docker compose up -d postgresql foundation
bin/kaocha :test --focus-meta integration

docker compose up -d mariadb
DATABASE_URL='jdbc:mariadb://localhost:3306/root?user=root&password=root' \
  bin/kaocha :test --focus-meta integration
```

Run the shared conformance suite against each backend while developing rather than waiting for the
full integration suite.

### Final

```bash
bin/run-coverage
```

Also run the packaged JVM/CLJS smoke tests and, if retained and repaired, one no-kill chaos baseline
followed by a short kill/restart run.

The known full-suite flaky replay-log test must be rerun in isolation before classifying a failure as
unrelated.

---

## Commit sequencing

1. Fix synchronous child policy.
2. Fix the CLJS timeout sentinel.
3. Repair build/package/CI and make demo generation reproducible.
4. Delete duplicate bench tests and stale scratch code; land low-risk hygiene in small commits.
5. Collapse observers and change the logging default.
6. Gate CheckedStore construction while preserving close behaviour.
7. Extract shared engine code without semantic changes.
8. Write the store contract and failing cross-backend tests.
9. Fix history, child-link, signal FIFO, and backend divergences one invariant at a time.
10. Simplify IStore only where the now-tested contract permits it.
11. Unify engine/worker ownership and shutdown, migrate callers, remove `start-worker`, then simplify
    the remaining internal/public implementation without removing useful workflow façades.
12. Revalidate historical findings, update maintained docs, and delete stale review notes.

Do not combine a correctness fix, a protocol redesign, and mass file deletion in one commit. Each
store divergence should land with the conformance assertion that proves it fixed.
