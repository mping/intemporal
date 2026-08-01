# intemporal — Code Review Report

Scope: `src/intemporal/**` (core API, JVM + CLJS execution engines, context/replay,
error, activity, runtime, observer, tracing, workflow registry) and the three `IStore`
implementations — `store.cljc` (InMemory), `store/jdbc.clj` (Postgres + MariaDB/MySQL),
`store/fdb.clj` (FoundationDB) — plus `resources/migrations/{postgres,mariadb}`.

**Method.** Findings were produced by parallel per-dimension finder agents and each finding
was then handed to an independent adversarial verifier that tried to refute it against the
actual code. Only findings that survived verification appear below; refuted ones are listed
in §5 so they are not re-raised. Several high-value items were additionally **reproduced by
the reviewer** with runnable Clojure (marked *reproduced*), and the whole codebase was read
first-hand. 34 findings survived verification (4 critical, 6 high, 11 medium, 13 low);
5 were refuted.

---

## Executive summary

intemporal is a Temporal-style durable workflow engine: workflows are deterministic functions
replayed from an event-sourced history, activities run once and their results are cached, and a
Phase-C ownership model lets a worker pool recover and resume workflows across pods. The design is
thoughtful and the code is unusually well-commented about its own invariants. The defects that
matter cluster in four areas:

1. **Two replay-determinism bugs that silently corrupt or hang workflows.** The `async`
   "started-but-not-completed" replay branch skips the sequence-counter advance, so a crash in the
   middle of a parallel fan-out drifts every subsequent operation's seq number, orphans the first
   async (its `join` hangs forever), and can double-execute later asyncs. Separately, the CLJS engine
   drops buffered async work when a child-workflow suspension coincides with pending asyncs.

2. **The three stores are not behaviorally interchangeable.** The `IStore` contract is implemented
   with genuinely different semantics across InMemory / JDBC / FDB: a **critical** double-claim race
   in InMemory `claim-owner` (breaks the ownership exclusivity gate), keyword values silently
   downgraded to strings on JDBC/FDB JSON round-trip (breaks replay determinism), append-vs-upsert on
   history re-write, three different `list-pending` and signal orderings, and a double-firing signal
   callback on JDBC/FDB.

3. **The ownership recovery model has a liveness hole.** Ownership has no lease/TTL and is cleared
   only on clean shutdown, so a worker that hard-crashes (or is rescheduled under a new owner-id, as
   under Kubernetes autoscaling) orphans its non-terminal workflows permanently — the exact failure a
   durable engine exists to survive.

4. **Hardening gaps.** Missing DB indexes on hot paths, a documented signal-idempotency guarantee that
   is entirely unimplemented, a fixed replay budget that can durably fail long-lived workflows, and
   half-implemented observer error isolation.

The README already states the project is not production-ready; nothing here contradicts that, but the
`async` seq-drift bug (§1.1), the InMemory `claim-owner` race (§3.1), and the ownership-liveness hole
(§2.1) are the ones to fix before anyone relies on parallel activities, a shared in-memory store, or
multi-pod operation.

---

## 1. Correctness bugs

### 1.1 `async` replay after a mid-fan-out crash drifts the seq counter, hangs `join`, and can double-execute · **CRITICAL** · CONFIRMED
[core.cljc:142-206](src/intemporal/core.cljc#L142) (`async`, the `existing-started` branch at [core.cljc:160-163](src/intemporal/core.cljc#L160))

Each `async` call consumes **two** sequence numbers on first run: `next-seq!` for the handle
([core.cljc:134](src/intemporal/core.cljc#L134)) and, inside the thunk, another `next-seq!` for the
activity ([core.cljc:64](src/intemporal/core.cljc#L64)). The `existing-completed` and `existing-failed`
replay branches both call `(ctx/update-seq! …)` to advance the counter past that activity-seq. The
`existing-started` branch does **not** — and the persisted `:async-started` event carries no
`:last-seq`, so there is nothing to advance from.

That branch is reachable on the normal crash path: `process-pending-asyncs-parallel` persists all
`:async-started` events **before** running the activities and only writes `:async-completed`/`-failed`
after they finish ([execution.clj:121](src/intemporal/internal/execution.clj#L121) vs
[:163](src/intemporal/internal/execution.clj#L163)). A crash (or worker resume) in that window leaves
`:async-started` in history with no completion.

**Failure scenario** (`(let [p1 (async #(slow 1)) p2 (async #(slow 2))] (join-all [p1 p2]))`): first run
assigns p1 handle=0/activity=1, p2 handle=2/activity=3; crash after both `:async-started` persist but
before completions. On resume the workflow re-runs from the top:
- p1 `next-seq!`→0 hits `existing-started`, returns its handle, counter stays at 1, and — critically —
  p1 is **not** re-added to `pending-asyncs`, so its activity is never rescheduled. A later `(join p1)`
  suspends on `:join-pending` **forever** (until the replay budget flips the workflow to `:failed`).
- p2 `next-seq!`→1 (should be 2!). Its `:async-started` at seq 2 is not found, so p2 falls into the
  `:else` branch and is re-scheduled at the **wrong seq**, and **every subsequent `next-seq!` is
  off-by-one** — non-determinism errors or wrong cache hits for the rest of the workflow, plus possible
  double-execution of p2's activity.

All of this is silent. The same structural bug exists on the CLJS path (`execution.cljs` mirrors the
save-before-completion ordering).

**Fix (two parts, both required):** (1) persist `:last-seq` (= the captured activity-seq) on the
`:async-started` event and call `(ctx/update-seq! existing-started)` in that branch to close the drift;
(2) re-add the incomplete async to `pending-asyncs` in that branch so its activity is actually re-run,
otherwise the orphaned-handle hang remains.

---

### 1.2 Parallel/async activity interruptions and timeouts are recorded as permanent failures · **HIGH** · CONFIRMED
[execution.clj:152](src/intemporal/internal/execution.clj#L152), [runtime.clj:148-164](src/intemporal/internal/runtime.clj#L148)

For a single (non-parallel) activity, `attempt-once`/`execute-with-retry` distinguish rejection and
preserve the interruption marker so `stub` re-executes on replay. For parallel asyncs,
`execute-activities-parallel` collapses **every** failure — including `TimeoutException` and
`InterruptedException` — into `{:status :failed :error (throwable->map …)}` with no
`:exception-kind`, and `process-pending-asyncs-parallel` durably writes it as `:async-failed` /
`:activity-failed`.

**Failure scenario:** an async activity is interrupted purely because the pool is shutting down (an
infrastructure condition). On the serial path this is treated as re-executable and retried on resume;
on the parallel path it is durably recorded as a failed async result, never retried, and `join`
surfaces a spurious failure to the workflow. The two execution paths give behaviorally different,
non-interchangeable results for the identical interruption. (The `interrupt-error?` rescue in
`run-workflow-internal` never sees it because the failure is already committed to history.)

**Fix:** have `execute-activities-parallel` preserve the exception kind (interrupted/rejected/timeout)
in each result, and have `async`/`join` treat interrupted/rejected async failures as re-executable
rather than terminal — mirroring the serial path.

---

### 1.3 CLJS `:child-workflow` suspension drops buffered pending-asyncs the JVM executes · **HIGH (platform divergence)** · CONFIRMED
[execution.cljs:612](src/intemporal/internal/execution.cljs#L612) vs [execution.clj:593](src/intemporal/internal/execution.clj#L593)

The JVM `handle-suspension` `:child-workflow` branch runs pending asyncs first if any are buffered:
`(if (seq pending-asyncs-list) (process-pending-asyncs-parallel …) (process-child-workflow …))`. The
CLJS branch calls `process-child-workflow` **unconditionally**, and `process-child-workflow` only saves
`pending-events`, never `pending-asyncs`.

**Failure scenario:** a workflow calls `(async …)` then, in the same pass before joining, hits a
synchronous `run-child-workflow`. On CLJS the buffered async is silently dropped for that pass; its
`:async-started` is persisted but no completion is ever written, and on the next replay `async` takes
the `existing-started` branch and returns the handle without re-running the thunk. A later `join` then
suspends forever. On the JVM the async executes first. Real divergence between the two supported
platforms; can permanently lose work.

**Fix:** mirror the JVM guard in the CLJS `:child-workflow` branch.

---

### 1.4 `wait-for-signal-with-timeout` recomputes its deadline on every replay (drift) · **MEDIUM** · CONFIRMED
[core.cljc:298-316](src/intemporal/core.cljc#L298)

`sleep` deliberately reuses the `:fire-at` from a prior `:timer-scheduled` event so the deadline is
stable across replays (with an explicit anti-drift comment, [core.cljc:338-339](src/intemporal/core.cljc#L338)).
`wait-for-signal-with-timeout` does **not**: when no `:signal-wait-completed` exists yet it always throws
a suspension with `:deadline (+ (current-time-ms) timeout-ms)` computed fresh. On each resume that
re-suspends before the signal arrives (e.g. a worker re-driving it every poll), the deadline is pushed
later — the timeout can be starved indefinitely, unlike `sleep`.

**Fix:** persist the deadline once (an on-first-encounter marker, or reuse a stored deadline) and reuse
it on replay, mirroring `sleep`'s `:fire-at` handling.

---

### 1.5 `send-signal` status precondition is a check-then-act race; orphaned signal rows accumulate · **MEDIUM** · CONFIRMED
[core.cljc:857-864](src/intemporal/core.cljc#L857)

`send-signal` reads `get-workflow-status`, throws unless `:running`, then in a **separate, non-atomic
step** calls `add-signal`. The store has no distinct "waiting" status (a workflow parked on
`wait-for-signal` reports `:running`), so the guard cannot distinguish a healthy waiter from one that
will never consume the signal; and the workflow can transition to terminal between the read and the
insert.

**Failure scenario:** W is about to complete; `send-signal` reads `:running`, W finalizes, then
`add-signal` inserts a row for a now-terminal workflow. `list-pending` excludes terminal workflows, so
that signal is never consumed and never cleaned up (no terminal transition clears pending signals; the
FK `ON DELETE CASCADE` never fires because workflow rows are never deleted). Orphaned signal rows
accumulate — a bounded resource leak on a rare race.

**Fix:** perform the status gate and signal insert atomically in the store, rejecting if terminal;
additionally clear pending signals when the terminal event is written, to close the leak deterministically.

---

### 1.6 Reconstructed exceptions lose concrete type and deep cause chain, risking replay divergence · **MEDIUM** · CONFIRMED
[error.cljc:158-176](src/intemporal/internal/error.cljc#L158)

`throwable->map` serializes `:cause` recursively at every level, but `map->exception` only reconstructs
a nested `:cause` for the `:activity-failed` kind. The generic fallback drops both the serialized
`:cause` map and the original `:type`.

**Failure scenario:** a workflow that branches on an exception's **concrete class**
(`(instance? SQLException …)`) or on a **cause chain deeper than one level** behaves differently on
first run vs replay/resume: on replay the reconstructed exception is a plain `ExceptionInfo` and the
deeper cause is `nil`. First-level `ex-message`/`ex-data` survive (the common branching signals), so
this is medium rather than high.

**Fix:** in the generic branch reconstruct `(some-> (:cause m) map->exception)` as the ex-info cause,
and record/restore the original `:type`.

---

### 1.7 Sync `run-child-workflow` never links the child, so its parent-close-policy cannot apply · **LOW** · PLAUSIBLE
[core.cljc:353-386](src/intemporal/core.cljc#L353), [execution.clj:774](src/intemporal/internal/execution.clj#L774)

Unlike the async variants (which call `link-child!` and seed the child's `:workflow-started`), the
synchronous `run-child-workflow` never links the child. Combined with the fact that a synchronous child
that suspends is recorded as failed (see §2.2), the child cannot be enumerated by `list-children` and
its `parent-close-policy` silently cannot apply. Low because sync children are inline and short-lived by
design, but it's an inconsistency in the child-lifecycle model.

---

## 2. Architecture issues

### 2.1 Ownership has no lease/TTL — a hard-crashed worker orphans its workflows forever · **CRITICAL** · CONFIRMED
[core.cljc:668-762](src/intemporal/core.cljc#L668); `claim-owner`/`list-pending`/`release-owner` in all three stores

`claim-owner` stamps `owner = owner-id` with **no lease timestamp or expiry**
([jdbc.clj:267](src/intemporal/store/jdbc.clj#L267); [store.cljc:135](src/intemporal/store.cljc#L135);
[fdb.clj:229](src/intemporal/store/fdb.clj#L229)). `list-pending` returns only rows where
`owner = owner-id OR owner IS NULL`, and `release-owner` (the sole path that clears ownership) runs
**only from `stop-worker` on clean shutdown** ([core.cljc:749-762](src/intemporal/core.cljc#L749)).
`add-signal`, `mark-cancelled`, and `wake-workflow` never touch `owner`.

**Failure scenario:** worker pod A (owner-id `a`) claims workflow W via `start-worker`, then hard-crashes
(OOM / `kill -9` / node loss) before `release-owner` runs. W stays `owner=a`, non-terminal. Pod B
(owner-id `b`) scans `list-pending` and never sees W (owner is neither `NULL` nor `b`). A pending signal
or timer for W is never processed. Unless a pod with owner-id **exactly** `a` returns, W is stranded
indefinitely.

The docstring mitigation ("use a STABLE owner-id per pod") only survives a same-id restart; it fails
under ordinary Kubernetes events — HPA scale-down, node drain/reschedule with a new StatefulSet ordinal,
or permanent pod loss. This is a documented tradeoff ("No time-based leases"), but for an engine whose
core promise is crash recovery, permanently orphaning a live workflow after a single pod loss is a real
liveness defect. The trigger is specifically worker-driven workflows (`claim-owner` is only called inside
`start-worker`); a plain `start-workflow` crash leaves `owner=NULL` and is recoverable via the
`owner IS NULL` branch — which is why the existing recovery test does not catch this. The
orphaned-non-null-owner case has **no test coverage**.

**Fix:** add a claim lease (`owner_since` + periodic heartbeat) and let `list-pending` reclaim workflows
whose lease is older than a TTL, or add an admin "steal stale owner" path.

---

### 2.2 Observer error isolation is only half-implemented · **HIGH** · CONFIRMED
[observer.cljc:174](src/intemporal/observer.cljc#L174), [execution.clj:16](src/intemporal/internal/execution.clj#L16) / [:439](src/intemporal/internal/execution.clj#L439)

Two observer-dispatch paths have **opposite** error semantics. `context.cljc/notify-observer`
([context.cljc:135-141](src/intemporal/internal/context.cljc#L135)) wraps each call in try/catch. The
`-notify` macro ([execution.clj:16-20](src/intemporal/internal/execution.clj#L16)) does **not**, and it
is used on the terminal/activity/timer/signal paths. Separately, `make-composite-observer`
([observer.cljc:174-221](src/intemporal/observer.cljc#L174)) fans out via a bare `doseq` with **no
per-observer try/catch**, so one throwing leaf aborts the whole fan-out and starves every observer after
it — exactly the `[logging-observer observer]` composition `make-workflow-engine` wires up.

**Failure scenario:** a user observer throws in `on-workflow-completed`
([execution.clj:439](src/intemporal/internal/execution.clj#L439)). That fires **after** the
`:workflow-completed` event is durably persisted but **before** `enforce-close-policies!`,
`notify-parent-terminal`, and `finish-workflow-span!`. The throw unwinds `finalize-completed`, so a
joining parent is never woken (it hangs) and the OTel span leaks. (A throw in `on-activity-completed`
instead is caught inside `attempt-once` and mis-classified as a retryable failure — causing a spurious
retry that **re-runs the side effect**.) The protocol says observers "must not throw," but a composite is
precisely where one bad leaf should be contained.

**Fix:** route `-notify` through a guarded helper (try/catch + log) and add per-observer try/catch inside
`make-composite-observer`'s `doseq`.

---

### 2.3 Synchronous `run-child-workflow` that suspends is silently rejected — sharp API foot-gun · **MEDIUM** · CONFIRMED
[core.cljc:353](src/intemporal/core.cljc#L353), [execution.clj:769-788](src/intemporal/internal/execution.clj#L769)

`run-child-workflow` runs the child inline via `run-workflow-internal`. If the child suspends on any
durable primitive, the handler records `:child-workflow-failed` in the parent and `:workflow-failed` in
the child ("Synchronous child workflows cannot suspend; use run-child-workflow-async"), and the parent
**re-throws that error on replay** — failing the parent workflow unless it wraps the call in try/catch.

**Failure scenario:** `(run-child-workflow #'child [x])` where `child` calls `(wait-for-signal :go)` only
on certain inputs → the workflow fails at runtime, data-dependently, with an error that reads like an
internal limitation. The public docstring gives no warning; the working `run-child-workflow-async` does
support suspension.

**Fix:** document the "must not suspend" restriction prominently, fail fast with a dedicated error type
steering to the async variant, and ideally make sync children first-class so suspension is supported or
detected at schedule time.

---

### 2.4 `IStore` conflates durable persistence with in-process callbacks; cross-pod delivery is poll-only · **MEDIUM** · CONFIRMED
[protocol.cljc:8](src/intemporal/protocol.cljc#L8), [jdbc.clj:199](src/intemporal/store/jdbc.clj#L199)

The `IStore` surface mixes durable methods (history, signals, ownership) with in-process callback
registration. In JDBC/FDB the `callbacks` atom is **per store instance**, so a callback armed on pod A is
invisible to pod B: pod B's `add-signal` and `wake-workflow` find nothing and no-op. This is **not** a
lost-event bug — signals are durably persisted before any callback fires, a signal-waiting workflow
suspends with `wake-at = nil` so `list-pending` returns it every poll, and `cancel-workflow` makes the
workflow due via the durable `set-wake-at nil`. So cross-pod delivery is correct, just bounded by
`poll-ms` (default 500ms) latency. The issue is contract clarity: the protocol doesn't state at the
method level that callbacks are same-process-only.

**Fix:** document the same-process-only semantics on those methods, or split durable vs in-process
methods into separate protocols.

---

### 2.5 Hand-mirrored JVM/CLJS execution engines have already drifted and will keep drifting · **MEDIUM** · CONFIRMED
[execution.clj](src/intemporal/internal/execution.clj) / [execution.cljs](src/intemporal/internal/execution.cljs), [start_workflow.clj](src/intemporal/internal/fns/start_workflow.clj) / [.cljs](src/intemporal/internal/fns/start_workflow.cljs)

The two execution engines (and the two `start_workflow` files) are near-duplicates kept in lockstep by
hand. §1.3 is a real divergence that already slipped through; the CLJS child-workflow error `:type`
string (`"ExceptionInfo"` vs the JVM's `"clojure.lang.ExceptionInfo"`) is a minor one. There is no shared
cross-platform test asserting the two engines agree on history for the same workflow, so drift risk
compounds as features are added.

**Fix:** factor the platform-independent control flow (replay-loop shape, suspension dispatch, finalizer
sequencing) into `.cljc` with thin platform shims for the sync-vs-promise boundary, and add a shared
behavioral test comparing JVM and CLJS histories for the same workflows.

### 2.6 Lower-impact architecture notes
- **OTel tracing is hard-wired into `core`/`execution`/`runtime`** rather than expressed through the
  `IWorkflowObserver` seam that exists for exactly this concern ([execution.clj:444](src/intemporal/internal/execution.clj#L444)). · LOW.
- **Process-global activity + workflow registries** ([workflow_registry.cljc:14](src/intemporal/internal/workflow_registry.cljc#L14))
  preclude two isolated engines in one process (multitenancy) and allow name collisions across tenants. · LOW.

---

## 3. Cross-store inconsistencies

The `IStore` contract is meant to make InMemory / JDBC / FDB interchangeable. Each divergence below was
verified against all three implementations.

### 3.1 InMemory `claim-owner` double-claims under contention — breaks the ownership exclusivity gate · **CRITICAL** · CONFIRMED *(reproduced)*
[store.cljc:135-148](src/intemporal/store.cljc#L135)

`claim-owner` mutates an external `(atom false)` via `(reset! ok true)` **inside** the `swap!` update
fn, and returns `@ok`. Clojure re-runs the update fn on every CAS retry, but `ok` is never reset to
false. So when thread A computes `cur=nil` → `ok:=true` but loses the CAS to B, A's fn re-runs, now sees
`cur=B`, returns the state unchanged (a no-op) — **yet `ok` is still `true`**, so A's `claim-owner`
returns `true` despite never becoming owner. Both A and B then believe they own the workflow and resume
it concurrently, violating the exclusivity gate that is the sole guard before `resume-workflow` in both
worker loops — and thus the single-writer-per-seq invariant.

**Reproduced (reviewer ran this):** 12 threads racing to claim one unowned workflow on an InMemoryStore,
300 trials — **259/300 trials had ≥2 threads each report a successful claim** of the same workflow. The
`swap-vals!` pattern used elsewhere in this same store gives 0. JDBC (atomic conditional UPDATE) and FDB
(serializable txn) are not affected.

**Fix:** derive the boolean from `swap-vals!` (compare old vs new owner) instead of a `reset!` side effect
inside `swap!`, matching the pattern already used by `consume-signal`/`add-signal` in this store.

---

### 3.2 JDBC and FDB silently downgrade keyword values to strings on JSON round-trip; InMemory preserves them · **HIGH** · CONFIRMED *(reproduced)*
[jdbc.clj:122-143](src/intemporal/store/jdbc.clj#L122), [fdb.clj:18-20](src/intemporal/store/fdb.clj#L18)

JdbcStore (`<-json-val`) and FDBStore (`<-bytes`) deserialize history and signals with plain cheshire and
register no custom encoder/decoder, so keyword **values** come back as strings. InMemory keeps raw
Clojure values in an atom, so they're preserved. Cached activity/async/child results are returned
directly to workflow code (`(:result existing)`, [core.cljc:93](src/intemporal/core.cljc#L93)) and resume
args are fed back to the workflow fn (`(vec (:args started))`, [core.cljc:630](src/intemporal/core.cljc#L630)).

**Reproduced:** `:ok → "ok"`, `{:status :active} → {:status "active"}`, and the library's own canonical
example activity result `[:processed 5] → ["processed" 5]`.

**Failure scenario:** a workflow calls an activity returning `[:processed x]` (the CLAUDE.md canonical
example). First run and InMemory replay return `[:processed 5]`; after a crash-resume backed by JDBC or
FDB it returns `["processed" 5]`. Any `(= (first r) :processed)` branch, `case`/`condp` on a keyword, or
keyword map lookup then behaves differently — a silent break of replay determinism that depends on which
store is configured.

**Fix:** register a shared cheshire codec that preserves keywords (e.g. serialize with a type tag, or use
transit/EDN for the value column), applied uniformly by JDBC and FDB; or normalize activity results to a
JSON-safe representation at the boundary and document the restriction.

---

### 3.3 `add-signal` callback fires once on InMemory but repeatedly on JDBC/FDB — duplicate `:signal-received` at the same seq · **HIGH** · CONFIRMED
[store.cljc:65-75](src/intemporal/store.cljc#L65), [jdbc.clj:199-203](src/intemporal/store/jdbc.clj#L199), [fdb.clj:151-155](src/intemporal/store/fdb.clj#L151)

InMemory `add-signal` uses `swap-vals! … dissoc signal-name` to **atomically remove** the callback before
firing, so N rapid same-name signals fire the armed callback at most once. JDBC and FDB read
`(get-in @callbacks …)` **without removing** it and fire in a `future`; the callback stays registered, so
each subsequent `add-signal` fires it again.

**Failure scenario:** two signals of the same name arrive close together on JDBC/FDB. Both futures read
the still-registered callback; `consume-signal` is FIFO-atomic so each future consumes a distinct signal
and each calls `save-received` at the **same** closed-over `seq`. `process-signal`'s `save-received`
([execution.clj:195-202](src/intemporal/internal/execution.clj#L195)) has **no** `find-event` one-writer
guard (unlike `process-signal-with-timeout`), producing a duplicate `:signal-received` event — which then
replays differently per store (JDBC upsert→last, FDB append→arbitrary) and not at all on InMemory.

**Fix:** make JDBC/FDB `add-signal` atomically de-register the callback before firing (as InMemory does),
and/or add a `find-event` one-writer guard to `process-signal`'s `save-received`.

---

### 3.4 History re-write is idempotent on JDBC but appends duplicates on InMemory/FDB · **LOW–MEDIUM** · PLAUSIBLE / CONFIRMED (FDB key) *(reproduced)*
[store.cljc:31](src/intemporal/store.cljc#L31), [fdb.clj:116](src/intemporal/store/fdb.clj#L116), [jdbc.clj:77](src/intemporal/store/jdbc.clj#L77)

JDBC keys history per `(workflow_id, seq, event_type)` and **upserts**; InMemory **appends** via
`(fnil into [])`; FDB keys each row `[seq (randomUUID)]` and so **appends** a duplicate. The JDBC
migration comment claims this "matches the append semantics of the in-memory and FDB stores" — but JDBC
is upsert, not append.

**Reproduced:** seed `:activity-scheduled` at seq 0 (crash right after the schedule persists, before the
activity runs), then resume — `process-pending-activity` re-saves the buffered `:activity-scheduled` with
a fresh timestamp:
```
[[nil :workflow-started] [0 :activity-scheduled] [0 :activity-scheduled] [0 :activity-completed] [nil :workflow-completed]]   ; InMemory: 2 rows; JDBC: 1
```
The workflow still completes (find-event returns the first match, `:activity-completed` wins in `stub`),
but `load-history` content diverges across stores for a crash the engine is built to survive. Verified as
low-severity today because no current consumer relies on the difference, but it's a latent
interchangeability break; the FDB random-UUID keying is confirmed as the mechanism.

**Fix:** key FDB history by `[seq event-type]` (deterministic overwrite); make InMemory `save-events`
replace an existing `(seq, event-type)`; add a shared idempotent-re-write conformance test.

---

### 3.5 `list-pending` returns due workflows in three different orders · **MEDIUM** · CONFIRMED *(reproduced)*
[store.cljc:153-167](src/intemporal/store.cljc#L153), [jdbc.clj:278-287](src/intemporal/store/jdbc.clj#L278), [fdb.clj:252-266](src/intemporal/store/fdb.clj#L252)

InMemory orders by `wake-at` ascending (nil first); JDBC orders by `created_at`; FDB returns
`(bucket, wf-id)` key order with no time sort. So the anti-starvation "earliest-due first" guarantee the
InMemory comment describes holds only for InMemory. **Reproduced:** InMemory `list-pending` returned
`[w-nil w-soon]` (wake-at asc) and correctly filtered a far-future `w-late`.

**Fix:** define one canonical ordering in the contract (earliest `wake-at`, then insertion) and implement
it in all three (FDB would need a wake-at-prefixed index to do this efficiently).

### 3.6 FDB `consume-signal` is not FIFO within the same millisecond · **MEDIUM** · CONFIRMED
[fdb.clj:142-168](src/intemporal/store/fdb.clj#L142)

`add-signal` keys signals `[(currentTimeMillis) (randomUUID)]`, so two signals of the same name enqueued
in the same millisecond are ordered by random UUID, not arrival — whereas JDBC (`ORDER BY id`) and
InMemory (vector position) are FIFO. A workflow that relies on signal ordering gets a different order on
FDB. **Fix:** use a per-`(workflow,signal-name)` monotonic counter or FDB versionstamp as the ordering key.

### 3.7 Lower-severity store divergences
- **`set-wake-at` on a workflow with no row/entry:** InMemory creates a **phantom** entry (which
  `list-pending` may then surface); JDBC's UPDATE affects 0 rows (no-op); FDB only touches an existing
  index entry. · LOW. [store.cljc:181](src/intemporal/store.cljc#L181).
- **FDB `find-event` loads the entire history** on every call ([fdb.clj:124](src/intemporal/store/fdb.clj#L124))
  — see §4 (perf); also a semantic note that FDB has no indexed point-lookup for an event.
- **`:activity-scheduled` serializes a truncated retry-policy** (only `:max-attempts`/`:backoff-ms`,
  dropping `:max-backoff-ms`/`:backoff-multiplier`/`:retryable-fn`, [core.cljc:37](src/intemporal/core.cljc#L37)).
  This is consistent across stores (it's in `core`), but means a scheduled-then-resumed activity's retry
  policy is lossy; noted here because it interacts with replay fidelity. · LOW.
- **`FDB consume-signal`'s `(drop 4)`** couples correctness to a single-segment root subspace
  ([fdb.clj:166](src/intemporal/store/fdb.clj#L166)). It is **correct today** (the `Range` argument makes
  `get-range` return absolute 6-element keys, so `drop 4` yields the right relative key — reviewer-verified
  against the clj-fdb source), but silently breaks if the store is ever nested under a multi-segment or
  directory subspace. · LOW robustness. **Fix:** unpack via the subspace rather than a hardcoded offset.

---

## 4. Improvements

**Indexing / performance:**
- **`intemporal_signals` has no index on `workflow_id` (Postgres).** · **MEDIUM–HIGH** ·
  [postgres/20260215214002-initial-schema.up.sql:16](resources/migrations/postgres/20260215214002-initial-schema.up.sql).
  A Postgres FK does not auto-index the referencing column, so `consume-signal`'s
  `WHERE workflow_id=? AND signal_name=? … FOR UPDATE SKIP LOCKED` is a sequential scan under a row lock
  on every signal delivery. Cross-dialect divergence too: MariaDB's inline FK auto-creates a backing
  index, so the same workload is O(log n) there and O(n) on Postgres. **Fix:** add
  `CREATE INDEX … ON intemporal_signals (workflow_id, signal_name)`.
- **FDB `find-event` loads and deserializes the entire history on every call** ([fdb.clj:124](src/intemporal/store/fdb.clj#L124)),
  and it's called ~once per op per replay pass — making replay effectively **O(N²)** in history length on
  FDB. · **HIGH.** **Fix:** point-read the specific `(seq, event-type)` key range instead of scanning all
  history.
- **`list-pending` hot query lacks a composite index** covering its
  `status / wake_at / owner / created_at` predicate + sort ([jdbc.clj:278](src/intemporal/store/jdbc.clj#L278)). · LOW.
- **`list-children` does N+1 status reads** ([jdbc.clj:318](src/intemporal/store/jdbc.clj#L318),
  [execution.clj:404](src/intemporal/internal/execution.clj#L404)) — each child's status is a separate
  query (a full-history load on FDB/InMemory), on every terminal finalize/cancel of a parent with
  children. · LOW–MEDIUM.
- **`make-jdbc-store` builds the HikariCP pool with only `:jdbc-url`** ([jdbc.clj:337](src/intemporal/store/jdbc.clj#L337))
  — no pool size, timeouts, or leak detection; defaults may not suit the worker-poll workload. · LOW.

**Robustness / safety:**
- **`send-signal :signal-id` is documented "for idempotency" but nothing deduplicates on it.** · **HIGH** ·
  [core.cljc:862](src/intemporal/core.cljc#L862). The id is threaded through and even persisted on the
  `:signal-received` event, but every store's `add-signal` unconditionally inserts. A client with
  at-least-once delivery that retries a signal with the same id enqueues it twice → a later
  `wait-for-signal` double-processes it. The documented guarantee is entirely unimplemented. **Fix:**
  `UNIQUE (workflow_id, signal_id)` + `ON CONFLICT DO NOTHING` (and equivalents), or a per-workflow
  seen-id set.
- **Fixed `max-iterations = 1000` replay budget** ([execution.clj:644](src/intemporal/internal/execution.clj#L644))
  is hardcoded at every call site (and `process-child-workflow` hardcodes `1000`, **ignoring** any caller
  override, [execution.clj:754](src/intemporal/internal/execution.clj#L754)). On exhaustion the workflow is
  written a **terminal** `:workflow-failed` and — being terminal — excluded from `list-pending`,
  unrecoverably. A legitimately long-lived durable workflow crossing 1000 cumulative passes is durably
  killed. · MEDIUM. **Fix:** count only real replay passes (or raise + document the default), and plumb a
  per-workflow override through `submit-workflow`/`start-worker` into `process-child-workflow`.

**Observability:** OTel is hard-wired into `core`/`execution`/`runtime` rather than expressed through the
existing `IWorkflowObserver` seam (see §2.6). · LOW.

---

## 5. Considered and refuted (do not re-raise)

Investigated and **refuted** on verification:

- **"FDB `consume-signal` never deletes the signal (wrong clear key)."** The `(drop 4)` is **correct**:
  `consume-signal` passes `(fsub/range signals-sub)` — a `Range`, not the Subspace — to `get-range`, so
  keys come back **absolute** (6 elements: `[subspace-name "signals" wf-id signal-name ts uuid]`) and
  `(drop 4 …)` yields exactly the `[ts uuid]` key relative to `signals-sub`. Independently confirmed by
  reading the clj-fdb `get-range`/`decode` source. (The *robustness* caveat — it assumes a single-segment
  root subspace — is retained as a LOW note in §3.7.)
- **"async & sync-child interruption failures are replayed as permanent failures because the `(not
  interrupted?)` guard is commented out."** The reader-discard `#_` is real, but the actual interruption
  classification is missing upstream in the parallel executor, not here — captured accurately as §1.2
  instead of via the commented guard.
- **"`run-workflow-internal` treats activity-timeout as a hard failure on the parallel path but
  re-executes it on the serial path."** The specific framing was refuted; the real, narrower asymmetry is
  §1.2 (parallel failures aren't classified as re-executable), verified there.
- **"CLJS `with-workflow-engine` runs shutdown while the async body is still resolving / leaks activity
  promises."** Inverted: shutdown is chained via `(promesa.core/finally …)` **after** the body settles,
  and JS has no preemptive cancellation, so the no-op `shutdown-executor` is the only truthful
  implementation. The `shutdown? → false` guard is dead code on CLJS but harmless (no pool to reject
  submissions) — retained only as a LOW note in §3.7.
- **"FDB `load-history` seq-derivation corrupts ordering / FDB 'pending' source-of-truth diverges."** The
  seq-less terminal/`:workflow-started` events are by design, and the ownership-index-vs-status difference
  does not change which workflows are enumerated in the cases that matter; refuted on the specifics.
