# Intemporal — Code Review Report

Date: 2026-07-31
Scope: `src/intemporal/**`, `resources/migrations/**`, test suite mining (`test/intemporal/tests/{jepsen,crash,store,bench}`), supporting docs.
Method: static code reading by parallel analysis passes (persistence layer; public API + runtime/worker; test-suite mining). Findings are established by code reading, not by reproduction, unless a referenced test demonstrates them. Severity: critical / high / medium / low.

> **Checkpoint status**: 3 of 4 analysis passes merged (stores, core/runtime, tests). The dedicated `execution.clj` ↔ `execution.cljs` line-by-line diff pass is pending (analysis quota) — interim engine-divergence findings from the other passes are included in §1.3 and will be expanded.

---

## 1. Correctness bugs

### 1.1 Persistence layer

**P1 — InMemoryStore `claim-owner` has a broken CAS — HIGH.**
`src/intemporal/store.cljc:135-148` produces its result via a side effect *inside* the `swap!` update fn:

```clojure
(if (and (not (terminal-status? (:status wf))) (or (nil? cur) (= cur owner-id)))
  (do (reset! ok true) (assoc-in s [...] owner-id))
  s)
```

`swap!` re-runs the fn on CAS contention. Thread A sets `ok=true`, loses the CAS to thread B, retry sees `owner=B` and returns state unchanged — but `ok` stays `true`. **Both claimants get `true`** → double ownership → double execution, defeating the exclusivity promised in `protocol.cljc:26-29`. The same file already has the correct pattern: `consume-signal` (`store.cljc:78-89`) uses `swap-vals!` and reads the outcome from the old state, with a comment explaining why side effects inside `swap!` are wrong. Reachable in practice: the in-process worker (`core.cljc:668-762`) plus a blocking `start-workflow` share one InMemoryStore.

**P2 — JdbcStore / FDBStore fire signal callbacks without removing them first — HIGH.**
`jdbc.clj:199-203`, `fdb.clj:151-155`:

```clojure
(when-let [callback (get-in @callbacks [workflow-id signal-name])]
  (future (try (callback) ...)))
```

InMemoryStore removes the callback atomically *before* firing, with the rationale at `store.cljc:62-64`: rapid successive signals must not re-fire the same callback, which "would consume later signals at the wrong seq-num." JDBC/FDB fire the still-registered callback on every `add-signal`. With two rapid signals s1, s2 at wait-seq N (`process-signal`, `execution.clj:212-217`): future A consumes s1 and writes `:signal-received` seq N; future B consumes s2 and writes a **second** `:signal-received` seq N with a different payload. JDBC's upsert makes it last-writer-wins (one signal silently vanishes); FDB keys are `[seq uuid]` so both persist and `find-event` picks by uuid ordering; the second signal is dequeued but lost to later waits. The engine guard comment (`execution.clj:207-211`) only covers the single-signal race.

**P3 — FDBStore fabricates `:seq` from wall clock for seq-less events — HIGH.**
`fdb.clj:84`, `fdb.clj:115`: `seq-num (:seq event (System/currentTimeMillis))`. Four engine event types carry no `:seq`: `:workflow-started`, `:workflow-completed`, `:workflow-failed`, `:workflow-cancelled` (also `:workflow-terminated`). Consequences:

- `load-history` sorts by `:seq` (`fdb.clj:79`), so in FDB `:workflow-started` is **not the first event** — InMemory and JDBC return it first. `get-workflow-status`'s fallback uses `(last history)` (`fdb.clj:220`), so derived status depends on accidental timestamp ordering (same-ms start+finish ties, broken by random uuid).
- Any seq-less event re-save gets a new, nondeterministic identity.

**P4 — Replay re-saves are not idempotent; duplicates sorted randomly in FDB — HIGH.**
The engine re-saves logically identical events (crash between "save pending" and "save completion" in `process-pending-activity`, `execution.clj:101-113`; check-then-act `fire!` `execution.clj:173-178` and `save-completed` `execution.clj:239-255`). JDBC documents this contract ("the engine re-writes the same seq with identical data on each pass", `jdbc.clj:154-157`) and converges via upsert. InMemory blindly `conj`s (`store.cljc:22,35`) → duplicate history entries. FDB writes a fresh `[seq randomUUID]` key per save (`fdb.clj:85,116`) → duplicates with same-seq ties broken **by uuid, i.e. randomly**. After a genuine double-write with different content (e.g. two `:signal-wait-completed` writers with different `:received`, admitted by the comment at `execution.clj:239-255`), FDB history permanently holds both variants and the replayed result is decided by uuid order; JDBC keeps last commit; InMemory keeps first append. Cross-store replay divergence by design.

**P5 — JdbcStore lists phantom pending workflows with no history — MEDIUM.**
`list-pending` (`jdbc.clj:278-287`) has no history-existence predicate, unlike InMemory (`(seq (:history wf))`, `store.cljc:158`) and FDB (index entry created only on `:workflow-started`, `fdb.clj:50-57`). History-less rows are created by `upsert-cancel-sql` (`jdbc.clj:87-93`, reachable via `cancel-workflow` on a never-started id) or by `add-signal`'s upsert (`jdbc.clj:194`). Such a row is `status='running', wake_at NULL, owner NULL` → listed, claimed, resume throws `::no-started-event` (`core.cljc:617-619`), cached in the worker's `unresumable` map, and re-listed every poll forever, consuming a `LIMIT` slot each time.

**P6 — JdbcStore NULL seq defeats upsert idempotency for terminal/start events — MEDIUM.**
`jdbc.clj:159`: `seq-num (:seq event)` → `nil` for the seq-less events of P3 → `INSERT ... seq = NULL`. Postgres and MariaDB treat NULLs as distinct in unique constraints, so `ON CONFLICT (workflow_id, seq, event_type)` never fires for these rows and re-saves insert duplicates. Schema permits it (`seq INTEGER` nullable in both `20260215214002-initial-schema.up.sql`). Double-finalization yields duplicate terminal events — bloat rather than corruption, since readers filter `first`.

**P7 — `process-signal-with-timeout` checks-consume before registering the callback — MEDIUM.**
`execution.clj:258` (inline `consume-signal`) runs **before** `register-signal-callback` (`execution.clj:272`) — the opposite order of the bug-2.1 fix in `process-signal` (register at `execution.clj:212`, consume at `:218`). The comment at `execution.clj:267-270` claims it "mirrors the process-signal fix" but the register-then-consume gap remains: a signal arriving in the window is not picked up until the deadline timer fires or a worker poll re-resumes — delayed up to `timeout-ms`, not lost. Latency bug plus misleading comment.

**P8 — `claim-owner` on nonexistent workflows diverges and can manufacture phantoms — MEDIUM.**
JDBC: `UPDATE ... WHERE id = ?` matches 0 rows → `false` (`jdbc.clj:266-272`). Correct.
InMemory: nil `wf` is not terminal → claims and returns `true` (`store.cljc:139-146`); never listed (history filter) so mostly harmless.
FDB: returns `true` **and** manufactures an ownership-index entry (`fdb.clj:242-248`), inserting a never-started id into `list-pending` → worker resume fails `::no-started-event` → permanently parked as "unresumable".

**P9 — Check-then-act used as compare-and-set throughout the engine — MEDIUM (protocol gap).**
All exactly-once guards are `find-event` + `save-event` with no atomicity: `fire!` (`execution.clj:173-178`), `save-completed` (`execution.clj:239-255`), `notify-parent-terminal` (`execution.clj:362-377`), `run-once` (`execution.clj:621-631`). `IStore` offers no conditional-append primitive, so only JDBC's upsert makes double-writes converge; the other two stores persist duplicates (see P4).

**P10 — Smaller persistence bugs — LOW.**
- `consume-signal` JDBC: `SELECT ... FOR UPDATE SKIP LOCKED` with **no `LIMIT 1`** (`jdbc.clj:209`); lock scope depends on driver fetch behavior; silently requires MariaDB ≥ 10.6 / MySQL ≥ 8.
- `is-cancelled?` on MariaDB (`jdbc.clj:231-235`): `BOOLEAN` is `TINYINT(1)`; `(boolean 0)` is `true` in Clojure — works only because drivers map TINYINT(1) → `java.lang.Boolean` by default; `tinyInt1isBit=false` breaks cancellation detection.
- `status` column never backfilled (`20260531000001-add-status.up.sql`: `ADD COLUMN ... DEFAULT 'running'`): workflows terminal before the migration stay `'running'` forever → listed/claimable until a resume re-finalizes them.
- FDB `consume-signal` hardcodes `relative-key (vec (drop 4 key))` (`fdb.clj:166`) — assumes the root subspace has exactly one element; silently breaks if nested deeper.
- FDB signal keys `[currentTimeMillis uuid]` (`fdb.clj:144`): same-millisecond signals are ordered by random uuid, not arrival — FIFO violated at ms granularity (JDBC uses monotonic `SERIAL id`, InMemory vector order).
- FDB `close` is a no-op returning `this` (`fdb.clj:65-66`) while `JdbcStore.close` closes the pool (`jdbc.clj:134-135`) — asymmetric resource contract; tests use `with-open`.
- Requeued signals (timeout-lost race `execution.clj:284`; put-back `execution.clj:245`) go to the **back** of the queue in all three stores — FIFO reorder on recovery paths.
- `maintain-owner-index!` (`fdb.clj:50-57`) re-adds an ownership-index entry whenever a batch contains `:workflow-started` without checking stored status; a re-saved start event on a terminal workflow resurrects a scan entry (claim-owner's status check limits blast radius to scan noise).

### 1.2 Engine / API / runtime

**E1 — Worker busy-loop: waiting workflows re-driven back-to-back with no sleep — HIGH.**
`core.cljc:731-738`:

```clojure
(if (seq ids)
  (doseq [wf-id ids :while @running] (process-one wf-id))
  (Thread/sleep (long poll-ms)))
```

The poll thread sleeps only when `list-pending` returns **empty**. But `list-pending` returns every non-terminal workflow whose `wake-at` is nil or past, and `run-workflow-internal` sets `wake-at` only for `:wait-timer` / `:wait-signal-timeout` (`execution.clj:713-718`). A workflow waiting on a plain signal, on `join`/`join-any` of an independent child, or cancelled-but-unfinalized has `wake-at = nil` → returned by **every** poll. One idle signal-waiting workflow = 100% of one CPU core plus constant store load, doing a full history replay per pass, forever.

**E2 — Ownership has no lease/expiry — dead pod strands its workflows forever — HIGH.**
`claim-owner`/`list-pending` gate on `owner = owner-id OR owner IS NULL` (`store.cljc:144-161`, `jdbc.clj:265-287`); `release-owner` runs only on clean `stop-worker` (`core.cljc:762`). No heartbeat, fencing token, or TTL anywhere. A SIGKILLed pod's workflows stay `owner = dead-pod` and are never listed by other pods. The docstring's recovery story (`core.cljc:678-680`) only works with a stable owner-id reused after restart.

**E3 — Terminal status can be overwritten by a later racing terminal event — HIGH.**
Two cooperating gaps: `enforce-close-policies!` `:terminate` writes terminal `:workflow-terminated` to the child unconditionally (`execution.clj:414-417`) — no claim/fencing — while the child may be mid-drive on a worker; and terminal status writes are unconditional overwrites (InMemory `save-event` blindly `assoc-in :status :completed`, `store.cljc:22-27`; JDBC `UPDATE ... SET status = ?` with no `WHERE status NOT IN (...)` guard, `jdbc.clj:172-173`). A force-terminated child whose in-flight drive later finishes writes `:workflow-completed`, flipping status `terminated → completed`; history then holds two contradictory terminal events. Same flip possible between cancel and completion under double-drive (see A3). `finalize-completed/failed/cancelled` (`execution.clj:424-487`) never re-check current status.

**E4 — Interrupt during an `async` batch permanently fails the workflow — HIGH.**
The single-activity path wraps interruption explicitly: `runtime.clj:93-94` throws `activity-interrupted-exception`, and `stub` re-schedules instead of replaying the failure (`core.cljc:70-72,104-110`). The parallel path does neither: `execute-activities-parallel` catches `InterruptedException` from `.get` in the generic handler and serializes a plain error map with no `:exception-kind` (`runtime.clj:161-163`). The engine persists `:activity-failed` + `:async-failed` (`execution.clj:152-161`). On resume, `async` checks `interrupted?` on the error (`core.cljc:140-141`) — false — so it returns the failed handle, `join` throws, and the `interrupt-error?` safety net (`execution.clj:489-501`) can't catch it (interrupt flag already cleared; the cause chain holds a serialized map, not `InterruptedException`). A routine `stop-worker` interrupt landing inside an async batch durably fails the workflow, contradicting the file's own "interruptions are infrastructure, never finalize" policy (`execution.clj:721-730`).

**E5 — `wait-for-signal-with-timeout` recomputes its deadline every replay — MEDIUM/HIGH.**
`core.cljc:312-316` builds the suspension with `:deadline (+ (utils/current-time-ms) timeout-ms)` on every pass; nothing persists the first deadline. Compare `sleep`, which reuses the persisted `:timer-scheduled` `fire-at` precisely to avoid pushing the deadline later on each resume (`core.cljc:334-345`). Every crash/resume or re-drive extends the signal wait by the downtime; repeated resumes extend it indefinitely. `process-signal-with-timeout` consumes whatever deadline the latest pass computed (`execution.clj:229,263`), so the drift is real.

**E6 — `:cascade-cancel` close policy doesn't make the child due — MEDIUM.**
`cancel-workflow` does it right: mark cancelled, `set-wake-at nil`, wake (`core.cljc:884-890`). `enforce-close-policies!` `:cascade-cancel` only does `mark-cancelled` + `wake-workflow` (`execution.clj:410-413`) — no `set-wake-at nil`. Under the worker model the wake callback usually doesn't exist in the scanning process (worker resumes register no wake-fn, `execution.clj:708-709`), so a cascade-cancelled child sleeping on a timer stays excluded from `list-pending` until its `wake-at` dues — potentially hours later — before it observes the flag and compensates. (FDB masks this: its `mark-cancelled` force-dues, `fdb.clj:195-203` — see §3.)

**E7 — `make-workflow-engine`'s `:threads` option is silently dropped — MEDIUM.**
`core.cljc:1029-1031` passes `:threads` to `make-vthreads-executor`, which destructures only `{:keys [max-concurrent default-timeout-ms]}` (`runtime.clj:198-199`). The documented concurrency limit (default 4) is ignored; the executor is always unbounded `newVirtualThreadPerTaskExecutor` (`runtime.clj:201-203`) unless callers bypass `make-workflow-engine`.

**E8 — Bounded executor defeats activity timeouts via `CallerRunsPolicy` — MEDIUM.**
`create-bounded-executor` (`runtime.clj:184-194`) pairs an `ArrayBlockingQueue` with `CallerRunsPolicy`. When the queue is full, `.submit` runs the activity **synchronously on the workflow thread** before returning the future (`execute-activity`, `runtime.clj:81-89`), so `.get timeout` applies to an already-completed future: timeout unenforced, and a hung activity hangs the whole drive loop. Also silently serializes "parallel" batches under saturation. A rejection policy surfacing `RejectedExecutionException` (already handled as `:rejected` + reschedule, `execution.clj:64-70`) would be consistent.

**E9 — Armed signal/wake callbacks are never cleaned up on terminal states — MEDIUM (leak + post-mortem writes).**
`process-signal`/`process-signal-with-timeout` leave a registered signal callback armed when the wait isn't satisfied inline (`execution.clj:212-225,272-291`); no finalizer unregisters signal or wake callbacks. JDBC `callbacks` is a per-process atom keyed `[workflow-id signal-name]` (`jdbc.clj:215-229`) growing monotonically; a signal arriving after cancellation fires the stale callback, which consumes the signal and **appends `:signal-received` to an already-cancelled workflow's history** (`execution.clj:213-217`). InMemory keeps the same garbage under `[:workflows id :signal-callbacks]` (`store.cljc:91-95`).

**E10 — Smaller engine/API bugs — LOW.**
- `schedule-timer` idempotency check is check-then-act (`runtime.clj:23-36`): two threads both pass `contains?`, both schedule; the second `swap!` orphans the first `ScheduledFuture` (leaked, fires anyway — downstream dedup is itself check-then-act).
- `send-signal` status check is TOCTOU (`core.cljc:858-861`); a signal can be accepted for a workflow that terminally closed between check and `add-signal`.
- `cancel-workflow` on an already-terminal workflow returns `{:cancelled true}` after merely logging (`core.cljc:881-893`) — misleading success.
- `enforce-close-policies!` recurses without a visited-set (`execution.clj:413,420`); cyclic user-supplied `:child-id`s → unbounded recursion.
- `submit-workflow` twice with the same `:workflow-id` writes a duplicate `:workflow-started` on InMemoryStore (no dedup, `core.cljc:541-546` + `store.cljc:19-29`). Store tests document this as tolerated ("replay may append a duplicate `:workflow-started`", `test/intemporal/tests/bench/store_test.clj:363-365`).
- `notify-parent-terminal` appends `:child-workflow-completed`/`:async-completed` into an already-terminal parent's history for `:abandon`ed children (`execution.clj:359-380`).
- CLJS parallel path's not-found error literally says `"Activity xxx not found "` (`runtime.cljs:176`) — leftover placeholder.

### 1.3 CLJ ↔ CLJS engine divergences (interim — dedicated diff pass pending)

- **Interrupt escape missing in CLJS**: CLJ has the `interrupt-error?` guard that refuses to finalize on infrastructure interrupts (`execution.clj:726-730`); CLJS finalizes every `:failed` (`execution.cljs:734-737`). E4's failure mode is therefore guaranteed on CLJS.
- **CLJS timeout reclassified as generic failure — MEDIUM**: `runtime.cljs:156-163` — the `.then` throws `activity-timeout-exception`, but the trailing `.catch` wraps everything in `activity-failed-exception`; the `::activity-timeout` marker is lost (JVM throws it unwrapped, `runtime.clj:90-92`). Retry policies keyed on timeout kind and serialized `:exception-kind` (`error.cljc:123-136`) behave differently across platforms.
- **CLJS `catch js/Error` cannot catch the suspension deftype**: `execution.cljs:785` around child execution; `WorkflowSuspension` is deliberately not a `js/Error` (`error.cljc:14-15`), so a suspension escaping the child drive rejects the promise chain unhandled.
- **`:protocols` threading differs**: CLJS threads `:protocols` through `make-workflow-context` (`execution.cljs:380-392,681-682`); CLJ registers eagerly in `start-workflow`.
- **Tracing wrap only in CLJ** `process-child-workflow`.
- **CLJS executor shutdown state is fake**: `shutdown?` hardcoded `false` (`runtime.cljs:205-206`) makes the drive loop's shutdown guard (`execution.cljs:674`) dead code; `shutdown-scheduler?` reports "terminated" whenever no timers are pending (`runtime.cljs:76-78`) — wrong semantics, currently unused.
- `max-concurrent` unsupported in CLJS (`runtime.cljs:219`, admitted in error string).

---

## 2. Architecture issues

**A1 — Two hand-maintained engine copies, already diverged — HIGH.**
`execution.clj` (799 lines) and `execution.cljs` (793 lines) are near-copies; the runtime pair and `start-workflow` pair likewise. Drift has begun (all of §1.3). Every future fix must be made twice; several already weren't. Extract a shared `.cljc` drive/suspension/finalization core with platform shims only for concurrency, and add parity tests.

**A2 — Poll-everything recovery model — HIGH (structural).**
Signal/async waits store `wake-at = nil` = "always eligible" (`execution.clj:713-718`), so every worker poll (default 500 ms, `core.cljc:692`) re-resumes — full replay including `load-history` — every non-terminal workflow, changed or not. This is the only cross-pod wake mechanism (callback fast path is same-process only, `jdbc.clj:197-198`). Cost is O(N × H) per poll interval per pod; on FDB each replayed op's `find-event` is another full history load (O(H²) per resume, `fdb.clj:124-129`). Compounds with E1.

**A3 — Double-drive is possible and only documented, not prevented — MEDIUM/HIGH.**
`start-workflow` never stamps ownership (no `claim-owner` call in `start_workflow.clj`), so a blocking `start-workflow` and a `start-worker` on the same store drive the same workflow concurrently — acknowledged only in `submit-workflow`'s docstring (`core.cljc:524-526`). Activities are then double-executed (the JDBC upsert hides it; other stores record duplicates — P4). Either start should claim, or `list-pending` should exclude workflows with a live in-process driver.

**A4 — Single-threaded worker = head-of-line blocking — MEDIUM.**
The CLJ worker resumes workflows sequentially on the poll thread (`core.cljc:736-737`); a resume runs that workflow's pending activities inline (default timeout 30 s each). One slow workflow delays every other due workflow by its full activity latency. No per-workflow execution pool or work-stealing.

**A5 — `stop-worker`'s graceful window contradicts its own safety comment — MEDIUM.**
Comment (`core.cljc:751-757`) explains why interrupting mid-resume is dangerous, then `.join thread (+ poll-ms 5000)` (`core.cljc:758`) — far shorter than one default 30 s activity timeout — and interrupts anyway (`core.cljc:760`). Combined with E4, "stop a busy worker" is exactly the path that can durably fail workflows with async batches.

**A6 — Engine lifecycle is split-brain — MEDIUM.**
`shutdown-engine` (`core.cljc:1041-1048`) shuts executor+scheduler but knows nothing about workers started via `start-worker` (separate stop fn), in-flight blocking `start-workflow` drives, or live tracing spans. No single "engine" object owns all of it; nothing prevents `shutdown-engine` while a worker is mid-drive from the same store.

**A7 — Event history isn't append-only; divergence is silently absorbed — MEDIUM (design).**
JDBC history write is `ON CONFLICT (workflow_id, seq, event_type) DO UPDATE SET data = EXCLUDED.data` (`jdbc.clj:77-85`). A genuinely divergent replay (workflow code changed shape) silently *overwrites* recorded history instead of failing. The only determinism guard is the activity-name check in `stub` (`core.cljc:77-87`); it doesn't compare recorded `:args` (present in `:activity-scheduled`) against the current call, so changed args at the same seq replay the old result silently. Timer/signal/child events have no check at all. Insert-only + conflict-error would turn silent corruption into a loud `NonDeterministicWorkflowError`.

**A8 — Seq-less control events + nullable seq — MEDIUM (root cause of P3/P4/P6).**
The event schema makes `:seq` optional; each store invents a different representation (absent / NULL / wall-clock). A mandatory seq (the engine already has `next-seq!`), or a monotonic append-id independent of logical seq, removes the whole class.

**A9 — Status derivation is needlessly expensive on hot paths — LOW/MEDIUM.**
`JdbcStore.get-workflow-status` for a *running* workflow falls through to a full history load (`jdbc.clj:252-262`) — and `await-workflow` polls it every 50 ms (`core.cljc:572-581`), and `list-children` calls it per child (N+1; `jdbc.clj:327`, `fdb.clj:317`, `store.cljc:201`). The `status` column already says `'running'`; history fallback should apply only to pre-migration rows.

**A10 — No determinism enforcement in workflow bodies — LOW (accepted model, worth stating).**
Nothing prevents `rand`, `System/currentTimeMillis`, `randomUUID`, direct IO, or `Thread/sleep` in a `defn-workflow` body; only stub calls get replay protection. `run-once` exists as an escape hatch (`execution.clj:608-631`) but is public in an `internal` ns whose docstring says it "should not be exposed". A lint/clj-kondo hook or a documented deterministic API surface would help.

**A11 — Macros / registry.**
- Unconditional `(:require [cljs.analyzer.api :as api])` (`macros.cljc:2`) in a namespace required by public `intemporal.core` — every JVM consumer transitively needs the ClojureScript analyzer (today via `thheller/shadow-cljs` in main `:deps`, `deps.edn:6`). The `cljs-available?` guard (lines 9-17) suggests the intent was optional, but the ns-level require defeats it. MEDIUM (packaging).
- `stub-protocol` implements only the first arity: both branches do `(rest (first arglist))` (lines 76, 99); multi-arity protocol methods silently stubbed with a single arity. LOW/MEDIUM.
- CLJ `stub-protocol` without `:protocols` fails obscurely: generated stubs call the raw protocol fn, which expects `this` first → `ArityError` deep in the executor instead of a clear "pass the impl via :protocols". LOW.
- `opts` accepted but unused (`macros.cljc:44`). LOW.
- `defn-workflow` under CLJS `:advanced`: name derives from `(.-name f)` (`workflow_registry.cljc:39-46`) — minified, so the recorded `:workflow-started` name is unstable across builds and resume-by-id breaks. MEDIUM (if CLJS prod matters).
- `workflow-name` on non-var fns uses `Compiler/demunge` (`workflow_registry.cljc:28-29`): anonymous fns get process-unstable names, and `register-workflow!` records them — a crashed anonymous workflow can never be resumed by id. Should reject or require explicit names. MEDIUM.
- Process-global `defonce` registry: name collision between two different workflow fns silently overwrites. LOW.

**A12 — Observer.**
- Protocol docstring says observers "must not throw — any exception … will propagate through the engine and fail the workflow" (`protocol.cljc:78-80`); `ctx/notify-observer` guards (`context.cljc:135-141`) but the engine's own `-notify` macro has **no** try/catch (`execution.clj:16-20`) — a throwing observer fails the workflow from `finalize-*`/`attempt-once` paths but not stub paths. Inconsistent isolation. MEDIUM.
- `LoggingObserver` appends every event with full args/results/errors to an atom (`observer.cljc:53-60`) and is **on by default** (`enable-logging true`, `core.cljc:1022`) — unbounded memory growth in long-lived processes; a dev facility defaulted into production. MEDIUM.
- `make-composite-observer` fans out with bare `doseq` (`observer.cljc:181-221`): one throwing observer starves the rest. LOW.

**A13 — Tracing.**
- One open span per workflow for its entire lifetime, in process-global `live-spans` (`tracing.clj:34`), ended only by terminal finalizers. Workflows that suspend forever leave spans open indefinitely; OTel backends typically drop multi-day spans — no trace exactly for the stuck workflows you care about. Span-per-drive with links (the persisted `:tracecontext` already enables it, `core.cljc:649-657`) is more robust. LOW/MEDIUM.
- `ensure-workflow-span!` check-then-`swap!` (lines 47-54) can create two spans under race and leak the loser. LOW.
- `intemporal.tracing` + clj-otel are hard requires of the CLJ engine paths — JVM users pay the dependency even with `:enable-telemetry false`. LOW (packaging).

**A14 — Schema/ops.**
- Missing index on `intemporal_signals.workflow_id` (Postgres; initial schema has only PK + FK, no later migration adds one) → seq scan per `consume-signal`/`get-pending-signals`. HIGH (perf).
- Poller query can't use its indexes (`jdbc.clj:278-287`): `status NOT IN (...)` over a low-cardinality column; `owner = ? OR owner IS NULL` defeats plain index use; the partial wake-at index covers only non-NULL wake_at (i.e. *not* the always-due signal waiters); `ORDER BY created_at` unindexed → sort of the running set every poll per pod. MEDIUM.
- MariaDB `TIMESTAMP` vs Postgres `TIMESTAMPTZ` for `wake_at`: naive `TIMESTAMP` + `FROM_UNIXTIME` + `now()` are session-TZ dependent — pods with different session TZs disagree on dues. Epoch-ms BIGINT would be TZ-proof and match FDB/InMemory. MEDIUM.
- Migrations run at store construction (`jdbc.clj:336`): multi-pod rollouts race DDL; runtime DB user needs DDL privileges. `default-jdbc-url` hardcodes credentials (`jdbc.clj:15-16`). LOW.
- FDB transaction limits: `load-history`, `release-owner`, and the full-bucket scans in `list-pending` read unbounded ranges in single transactions; FDB's 5 s / 10 MB limits bound history size and fleet size per owner bucket. LOW.
- Down-migration trap: `20260712000005-history-per-event-type.down.sql` re-adds `UNIQUE (workflow_id, seq)`, which fails once real multi-event-type-per-seq data exists (its own comment admits such data is normal). LOW.

**A15 — Docs/tests hygiene.**
- `improvements.md` is referenced by 13+ live locations (all five jepsen test docstrings, `racing_store.clj:3`, `core.cljc:609`, `workflow_registry.cljc:6`, `start_workflow.clj:59`, `DEVELOPMENT.md:86`, `test/intemporal/jepsen/README.md`) but was **deleted in commit `a6da00f`**. Numbering survives in `issues.md`.
- `DEVELOPMENT.md:86-92` is stale: says bugs 1.1/1.2/1.3 are "buggy (Phase C)" while test docstrings and src confirm they are fixed.
- `test/intemporal/tests/bench/store_test.clj` and `test/intemporal/tests/store/store_test.clj` are byte-identical 375-line copies (only ns differs) — duplicated maintenance.
- `dev/verify_bugs.clj` is a stale pre-fix artifact: asserts the bugs are *present*, and its `RacingStore` implements an older, thinner IStore missing `register-wake-callback`/`wake-workflow`/`claim-owner`/`list-pending`/`release-owner`/`set-wake-at`/`link-child!`/`list-children` — would hit `AbstractMethodError` against current src.

---

## 3. Inconsistencies across stores

| Behavior | InMemory | JDBC | FDB |
|---|---|---|---|
| Re-save idempotency | duplicates (`store.cljc:22,35`) | upsert per (wf,seq,type) — only for non-NULL seq (`jdbc.clj:79-85`) | duplicates under random-uuid keys (`fdb.clj:85,116`) |
| History ordering | insertion | insertion (`ORDER BY id ASC`, `jdbc.clj:139`) | `sort-by :seq`, uuid tie-break; seq-less events by save timestamp — `:workflow-started` **not first** (`fdb.clj:79,84`) |
| Signal callback firing | removed before fire (`store.cljc:62-64`) | fired while registered (`jdbc.clj:199-203`) | fired while registered (`fdb.clj:151-155`) |
| `claim-owner` on missing wf | `true`, never listed | `false` | `true` + phantom listed |
| `list-pending` membership | requires non-empty history | no history check → phantoms | requires index entry (started only) |
| `list-pending` ordering | wake-at asc, nil→0 (`store.cljc:164`) | `ORDER BY created_at` (`jdbc.clj:284`) | none: workflow-id lexicographic, owner bucket first (`fdb.clj:263`) |
| `mark-cancelled` side effect | flag only | flag only | flag **+ force due** (clears wake-at in index, `fdb.clj:195-203`) |
| `set-wake-at` on terminal/missing wf | always assocs | always writes | no-op unless index entry exists |
| `link-child!` contract | records linkage, keeps **first** parent-seq/policy | upserts child row, **overwrites** parent-seq/policy | child-index key only |
| `find-event` cost | O(history) over vector | indexed point query | full history load per call (O(H) → O(H²) replay) |
| `get-pending-signals` key types | as-passed (keywords stay keywords) | strings from TEXT column | strings (tuple stringifies keywords) |
| Value fidelity | exact Clojure values | JSON round-trip | JSON round-trip |
| Signal consume aftermath | leaves empty vector under signal name | deletes row | deletes row |
| `close` | — | closes pool | no-op |

Three deserve emphasis:

- **Cancellation-latency divergence (E6)**: public `cancel-workflow` clears wake-at itself, but the cascade-cancel path calls only `mark-cancelled` + `wake-workflow`. On FDB a cascade-cancelled timer-sleeping child is driven immediately (mark-cancelled force-dues); on JDBC/InMemory it sleeps until its original wake-at — saga compensation and the terminal `:workflow-cancelled` event delayed arbitrarily.
- **JSON round-trip loses keyword values — MEDIUM**: `->json-param`/`<-json-val` (`jdbc.clj:106-126`) and `->bytes`/`<-bytes` (`fdb.clj:15-20`) keywordize map *keys* only; `:event-type` is re-keywordized manually, but keyword *values* in activity results, workflow args (re-read from `:workflow-started` on resume, `core.cljc:627-630`) and signal payloads come back as strings. A workflow branching on a keyword result behaves differently after resume on JDBC/FDB than on InMemory — an under-documented determinism hazard. Related: keyword signal-names are stringified by FDB tuple encoding, blow up as unbindable params in JDBC, and are distinct keys in InMemory — no normalization anywhere.
- **Double-write conflict resolution differs by store** (P4): same-seq conflicting writes resolve first-wins (InMemory), last-wins (JDBC), or random (FDB uuid order). The engine comment at `execution.clj:239-255` admits `:signal-wait-completed` is "replayed differently per store".

**Known, previously fixed cross-store bugs (from the Jepsen regression suite, all asserting FIXED):**
1.1 lost wake across pods (callbacks were process-local; fixed via durable markers + worker + resume-by-id registry); 1.2 concurrent writers corrupting history (fixed via `claim-owner` CAS — but see P1, the InMemory CAS is broken); 1.3 no recovery poller (fixed via `start-worker`); 2.1 register-then-consume signal race (fixed via register-first ordering — but the timeout variant still has it, P7); 2.3 cancellation couldn't reach signal-sleepers (fixed via `wake-workflow`). There is **no bug-2.2 test** — `issues.md:101-103` documents "signal sent to a workflow not yet started" as untested. Crash-recovery tests (`test/intemporal/tests/crash/`) run **InMemoryStore only** — JDBC/FDB recovery equivalents exist only in the local chaos harness (not CI). Activities are at-least-once by design: interrupted activities persist `:activity-failed` with `:activity-interrupted`/`:rejected` kinds and are re-run (`crash/future_cancel_test.clj:42-52`).

---

## 4. Improvements (prioritized)

1. **Fix the worker busy-loop (E1/A2)**: set a `wake-at` (or a `signals-awaited` marker consulted by `list-pending`) for signal/async waits; always sleep `poll-ms` after a batch even when `ids` is non-empty.
2. **Add an ownership lease (E2)**: `owner_since` column; claim predicate `owner IS NULL OR owner = ? OR owner_since < now() - lease`; heartbeat on each successful resume; plus a fencing token checked in `save-events` — also kills E3's stale-finalizer writes.
3. **Guard terminal writes (E3)**: conditional terminal updates (`WHERE status NOT IN (terminal)` / status check in `swap!`); finalizers no-op when already terminal.
4. **Add a conditional-append primitive to `IStore`** (`save-event-if-absent` → boolean): JDBC `INSERT ... ON CONFLICT DO NOTHING` + update-count; FDB read-then-set in-txn; InMemory `swap-vals!`. Route `fire!`, `save-completed`, `save-received`, `notify-parent-terminal`, `run-once` through it — eliminates the whole check-then-act class (P9, and the divergence part of P4).
5. **Make `:seq` mandatory (A8)**: assign control events a seq via `next-seq!`; `seq NOT NULL` migration in JDBC; deterministic per-(seq, event-type) keys in FDB instead of `[seq uuid]`. Fixes P3, P6, and FDB duplicate/random ordering in P4; aligns re-save idempotency.
6. **Fix InMemory `claim-owner` (P1)**: derive the result from `swap-vals!` old/new state, not `(reset! ok true)` inside `swap!`.
7. **Remove the callback before firing in JDBC/FDB `add-signal` (P2)**: `swap-vals!` on the callbacks atom, mirroring `store.cljc:65` — closes the two-signal loss race.
8. **Unify interrupt handling (E4)**: wrap `InterruptedException` in the parallel executor with `activity-interrupted-exception` like `runtime.clj:93-94`; and/or have `async` treat interrupt-kind `:async-failed` as reschedulable like `stub` does. Port the `interrupt-error?` guard to CLJS.
9. **Persist the signal-timeout deadline (E5)** exactly like `sleep` persists `fire-at`.
10. **Make `enforce-close-policies!` `:cascade-cancel` mirror `cancel-workflow` (E6)** — add `set-wake-at nil`; or move cancel force-due into the store contract for all stores.
11. **Unify `list-pending` membership and `claim-owner` existence (P5/P8)**: exclude history-less rows in JDBC (`AND EXISTS (SELECT 1 FROM intemporal_history ...)` or a `started` flag); make `claim-owner` require existence in all three stores.
12. **Fix executor wiring**: `:threads` → `:max-concurrent` in `make-workflow-engine` (E7); replace `CallerRunsPolicy` with a rejecting policy on the bounded executor (E8).
13. **History integrity (A7)**: insert-only history with conflict → `NonDeterministicWorkflowError`; extend the `stub` replay check to compare recorded `:args`.
14. **Deduplicate the CLJ/CLJS engine pairs (A1)**: shared `.cljc` core + platform shims; parity tests; port the timeout classification both ways (§1.3).
15. **Schema fixes (A14)**: index `intemporal_signals (workflow_id, signal_name, id)`; composite partial poller index `(owner, wake_at) WHERE status = 'running'`; index `created_at` or order by `id`; backfill `status` from history; epoch-ms BIGINT wake-at on MariaDB/MySQL.
16. **Reduce poll cost**: DB-mediated wake (Postgres `LISTEN/NOTIFY` on signal insert, or `wake_at = now()` on `add-signal`) so signal waiters aren't replayed every 500 ms; page FDB range reads; give `find-event` an indexed path on FDB (falls out of #5).
17. **Value fidelity**: normalize signal names with `str` at the API boundary; document JSON keyword-value loss or switch event/payload serialization to EDN-based (transit/nippy) for JDBC/FDB to match InMemory semantics.
18. **Observer/lifecycle hygiene**: guard `-notify` like `ctx/notify-observer`; default `enable-logging` to false or bound the log atom; unregister signal/wake callbacks in finalizers (E9); reject anonymous/unstable-named workflow fns at `register-workflow!`; document the CLJS `:advanced` constraint; fix the `cljs.analyzer.api` hard require (A11).
19. **Single engine-lifecycle owner (A5/A6)**: one object owning worker threads, executor, scheduler, and in-flight drives; a graceful stop that waits at least one max activity timeout.
20. **Expand the store conformance suite** (`tests/store/test_suite.clj`, currently 64 lines): claim exclusivity under contention, claim on missing workflow, `list-pending` filtering/ordering/wake-at, `set-wake-at` on terminal workflows, callback single-fire under rapid signals, signal FIFO, duplicate re-save idempotency, `get-workflow-status` on history-less rows — run against all three stores. Also: delete or update `dev/verify_bugs.clj`, dedupe the two `store_test.clj` copies, refresh `DEVELOPMENT.md`, fix dangling `improvements.md` references (A15).

---

## Appendix — analysis coverage

- Persistence: `protocol.cljc`, `store.cljc`, `store/jdbc.clj`, `store/fdb.clj`, all 12 migrations under `resources/migrations/{postgres,mariadb}/`, plus engine call sites.
- API/runtime: `core.cljc`, `internal/runtime.clj/.cljs`, `internal/macros.cljc`, `internal/workflow_registry.cljc`, `internal/logging.cljc`, `observer.cljc`, `tracing.clj`, `utils.cljc`, `internal/fns/start_workflow.clj/.cljs`.
- Tests: `tests/jepsen/*`, `tests/crash/*`, `tests/store/test_suite.clj`, `tests/bench/*`, `dev/verify_bugs.clj`, repo-wide TODO/FIXME grep.
- **Pending**: dedicated line-by-line `execution.clj` ↔ `execution.cljs` diff (engine internals). Interim divergences in §1.3 were cross-verified by the other passes.
