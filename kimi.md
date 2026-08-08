# Intemporal — Code Review Report

Date: 2026-07-31 (baseline); cross-reviewed against `sonnet.md` and updated 2026-07-31.
Scope: `src/intemporal/**`, `resources/migrations/**`, test suite mining (`test/intemporal/tests/{jepsen,crash,store,bench}`), supporting docs.
Method: static code reading by four parallel analysis passes (execution engine CLJ↔CLJS diff; persistence layer; public API + runtime/worker; test-suite mining). Findings are established by code reading, not by reproduction, unless a referenced test demonstrates them. Severity: critical / high / medium / low.

> **Cross-review note**: this baseline was compared against `sonnet.md` (an independent review of the same tree). Findings present only in `sonnet.md` were re-validated against the code before merging; merged items are tagged *(cross-review)*, and independent reproductions reported there are attributed as such. One sonnet-only claim was **refuted** on validation (see appendix). The most significant merge: X1 turned out to be worse than the baseline stated — the `async` `existing-started` branch also drifts the sequence counter, not just drops the async.

> **Status**: all 4 analysis passes merged. The most urgent findings: **X1/X2** (async `existing-started` replay branch: dropped asyncs + seq drift → deadlock, double-execution, permanent misalignment), **E1** (worker hot-replay busy-loop), **E2** (ownership without lease strands workflows of dead pods), **P1** (InMemory `claim-owner` double-claim, independently reproduced). A list of suspected bugs that were checked and *cleared* is in the appendix.

---

## 1. Correctness bugs

### 1.1 Execution engine (dedicated pass)

**X1 — `async`'s `existing-started` replay branch: drops the pending async AND drifts the seq counter → hang, double-execution, permanent misalignment — CRITICAL.**
`handle-suspension` forwards pending asyncs only for `:activity`, `:join-pending`, `:join-any-pending`, and (CLJ only) `:child-workflow`. The timer/signal branches discard them (`execution.clj:543-562`, `execution.cljs:559-581`).

Reproducer shape: `(let [h (async #(act x))] (sleep 100) (join h))`. Pass 1: `async` captures the activity into `pending-asyncs` (`core.cljc:195-200`), then `sleep` suspends with `:pending-asyncs` populated. The `:timer` handler drops them. On the next pass, `async` hits the `existing-started` branch (`core.cljc:160-163`), which does **not** re-add the pending async ("just wait for completion event"); `join` then suspends `:join-pending` with empty `pending-asyncs`, and `process-join-pending` finds no `:async-completed` → `:wait-async` (`execution.clj:304-316`). Nothing anywhere will ever execute that activity or write its completion event. The workflow waits forever. Same in CLJS.

A second trigger needs no user-code pattern: `process-pending-asyncs-parallel` saves `:async-started` events first (`execution.clj:121`), then runs the batch, then saves completions. A crash (or the rejection escape in X4) between those writes leaves `:async-started` persisted with no completion → identical permanent `:wait-async` on resume.

**Seq-drift mechanism *(cross-review, validated)*.** Each `async` consumes **two** seqs on first run: the handle seq (`next-seq!`, `core.cljc:134`) and the activity seq inside the thunk (`next-seq!` in `stub`, `core.cljc:64`). The `existing-completed`/`existing-failed` replay branches call `ctx/update-seq!` (`core.cljc:147,154`) to re-skip the activity seq, which works because engine-written completions carry `:last-seq` (`execution.clj:148,159`). The `existing-started` branch does **not** call `update-seq!`, and `:async-started` carries no `:last-seq` (`core.cljc:167-169`) — so the counter stays one behind for the rest of the pass. Traced scenario (`(let [p1 (async #(slow 1)) p2 (async #(slow 2))] (join-all [p1 p2]))`, crash after both `:async-started` persist but before completions): on resume, p1 (`next-seq!`→0) takes `existing-started`, counter stays 1, p1 never re-enqueued (hangs at `join` until the budget flips the workflow to `:failed` — X3). p2 (`next-seq!`→1, should be 2) misses its `:async-started@2`, falls into `:else`, gets **re-scheduled at the wrong seq** (handle 1, activity 2) → its activity **executes twice**, its original `:async-started@2` is orphaned, and every subsequent op in the workflow is permanently off-by-one — wrong cache hits, re-scheduling, or `::non-deterministic-replay` errors for the remainder of the body. All silent.

**Fix (three parts, all required):** (1) persist the captured activity seq as `:last-seq` on the `:async-started` event (capture `end-seq` after the thunk suspends, as the sync-completion path already does at `core.cljc:178`) and call `(ctx/update-seq! existing-started)` in the branch; (2) re-add the incomplete async to `pending-asyncs` in that branch (re-derive the activity from `:activity-scheduled` at the activity seq, or re-run the thunk) so its activity is actually re-run; (3) hoist the `(seq pending-asyncs)` check above the suspension `case` in both engines so timer/signal/child suspensions flush pending asyncs first.

**X2 — CLJS `:child-workflow` suspension drops pending asyncs — CRITICAL (CLJS) / divergence.**
CLJ runs `(process-pending-asyncs-parallel ...)` first when `(seq pending-asyncs-list)` (`execution.clj:593-600`); CLJS calls `process-child-workflow` unconditionally — no pending-asyncs check (`execution.cljs:612-617`). `(async ...) (run-child-workflow ...)` on CLJS persists `:async-started`/`:activity-scheduled` (`execution.cljs:747`) but never executes the activity; next pass hits `existing-started` → same deadlock as X1. Bug, not platform constraint.

**X3 — `max-iterations` exhaustion writes a terminal `:workflow-failed` — HIGH.**
`execution.clj:646-656`, `execution.cljs:659-669`: budget exhaustion calls `finalize-failed` ("Replay budget exceeded"). The budget is per-drive (one `run-workflow-internal` call), not a workflow property. A legitimate workflow that suspends 1001 times in a single drive (long activity chain, saga with many compensations) is **durably, permanently failed** for an infrastructure limit. The correct outcome is to suspend without finalizing (like the shutdown path, `execution.clj:661-665`). Interacts badly with E1: every spurious wake burns iterations. Also `process-child-workflow` hardcodes `:max-iterations 1000` (`execution.clj:754`, `execution.cljs:749`), ignoring the caller's option.

**X4 — `RejectedExecutionException` escapes the parallel path; partial batches execute with no events recorded — HIGH.**
`runtime.clj:99-147` (`execute-activities-parallel`): the `.submit` calls (line 111) are **outside** any `try`; only the `.get` phase (148-163) is wrapped. A rejection mid-`mapv` propagates out of `process-pending-asyncs-parallel` → `handle-suspension` → `run-workflow-internal`, none of which catch. Consequences: (a) no rescheduling — unlike the sequential path, which classifies rejection and re-executes on resume (`execution.clj:64-70`); (b) futures submitted before the rejection still ran (side effects happened) but no completion events are written → guaranteed re-execution on resume; (c) combined with X1's crash window → deadlock. The `p/shutdown?` check at the loop top does not close this (shutdown can begin between check and submit).

**X5 — Lost-wake window between the wait decision and `register-wake-callback` — MEDIUM-HIGH.**
`execution.clj:702-719` (`execution.cljs:717-732`): the generic wake callback is registered **after** `handle-suspension` returns a `:wait-*` action. For `:wait-async` (joining an independent child) no other callback is armed (`process-join-pending` registers nothing, `execution.clj:304-316`). A child that finishes after the parent's `find-event` check but before `register-wake-callback` fires `wake-workflow` against a store with no callback → wake lost; the JVM `start-workflow` loop then blocks in `.take` forever (`start_workflow.clj:80`). Same TOCTOU class as bug 2.1 (fixed for signals, `execution.clj:205-211`) but never applied to the async/child-join path; same shape applies to `cancel-workflow` → `wake-workflow` (`core.cljc:890`) in the window. The worker poll (E1) masks it in worker mode; pure in-process drives hang.

**X6 — Disabled interrupt guards make interrupted asyncs/children permanently fail — MEDIUM-HIGH.**
In `async` the re-execution guard is explicitly disabled: `core.cljc:152` reads `existing-failed #_(not interrupted?)` — the reader-conditional shows the intended guard was removed; same disabled guard at `core.cljc:371` for `run-child-workflow`. Contrast the live guard in the sync stub (`core.cljc:97`). Combined with E4 (parallel path records interrupts as plain errors), a worker-shutdown interrupt durably fails the workflow on next replay. Related: the sequential path retries `activity-interrupted-exception` because the default `retryable-fn` is `(constantly true)` (`activity.cljc:110`) — with a blocking `Thread/sleep` on the drive thread during shutdown (`execution.clj:90`).

**X7 — Sync child: `:suspended` not terminalized, never linked, and the no-suspend restriction is an undocumented foot-gun — MEDIUM.**
`execution.clj:774-783` (`execution.cljs:766-775`): the child-history `:workflow-failed` backstop fires only for `#{:waiting-signal :waiting-signal-timeout :waiting-timer :waiting-async}`. A child drive interrupted by executor shutdown returns `{:status :suspended}` (`execution.clj:664`); the parent records `:child-workflow-failed` but the child's own history stays non-terminal and unresumable (no `:workflow-started` for sync children → the worker's `::no-started-event` skip, `core.cljc:614-619`). The set should include `:suspended` — or the parent shouldn't finalize failure for an infrastructure condition at all (mirror of `interrupt-error?`, which the child path lacks).

*(cross-review, validated)* Two related gaps: (a) sync `run-child-workflow` **never calls `link-child!`** — the only call site is `schedule-independent-child!` (`core.cljc:423`), used solely by the async variant — so a sync child is invisible to `list-children` and `enforce-close-policies!` can never apply its `parent-close-policy`; (b) the "synchronous children cannot suspend" restriction (`execution.clj:769-788` records `:child-workflow-failed` + the parent re-throws on replay) is data-dependent — a child that calls `wait-for-signal` only for some inputs fails the parent at runtime with an internal-looking error, and the public docstring (`core.cljc:353-355`) gives no warning. Document the restriction prominently and fail fast with a dedicated error type steering to `run-child-workflow-async`.

**X8 — Retry state is not durable; timeout semantics differ between paths — MEDIUM.**
Attempt counters live in the drive (`execution.clj:81-92`, `execution.cljs:131-149`); a crash mid-retry restarts at attempt 1, so activities with side effects can exceed `max-attempts` across resumes. Sequential timeout = per attempt (`runtime.clj:87-89`); parallel = the whole retry loop shares one timeout (`runtime.clj:148-155`).

**X9 — Smaller engine items — LOW.**
- Un-joined asyncs at completion: `finalize-completed` executes them (`execution.clj:428-432`) but discards results and swallows failures — the workflow completes successfully with `:async-failed` events in its history.
- `:attempts` recorded inconsistently: present in sequential events (`execution.clj:109`), absent from parallel completion events (`execution.clj:139-161`) and from CLJS `execute-once` results entirely (`:attempts nil` at `execution.cljs:174`).
- `:signal-id` idempotency documented in `send-signal` ("Custom signal ID for idempotency", `core.cljc:856-866`) and recorded (`execution.clj:199`) but **never deduped** — `consume-signal` is plain FIFO and every store's `add-signal` unconditionally inserts. A client with at-least-once delivery that retries a signal with the same id enqueues it twice → a later `wait-for-signal` double-processes it. Unimplemented documented guarantee (elevated to §4 item 23).
- `:workflow-cancelling` marker has no `:timestamp` (`context.cljc:96`) — inconsistent event shape.
- `catch Throwable` in `execute-workflow-fn` (`execution.clj:28`) routes OOM/StackOverflow into `:failed` and persists them as workflow outcomes. CLJS activity catches use `(prom/catch js/Error ...)` (`execution.cljs:97,121`), so a non-`js/Error` throw escapes unrecorded; on the JVM an `Error` from an activity body similarly escapes `attempt-once` (catches only `Exception`, `execution.clj:71`).
- `interrupt-error?` first-run vs replay inconsistency (`execution.clj:489-501`): a genuine failure whose cause chain contains `InterruptedException` is suspended on first run but, after `map->exception` loses the cause chain (see X10), finalized as `:failed` on the next drive.
- `:activity-scheduled`/`:child-workflow-scheduled` are re-emitted on every pass that reaches them before completion (`core.cljc:41,380`; no existing-marker check) — duplicates on InMemory/FDB after any crash window.
- `join` re-wraps the stored error map in a fresh `async-failed-exception` whose `:cause` is a data map, not an exception (`core.cljc:224`); `map->exception` for `:async-failed` similarly passes `(:cause data)` raw (`error.cljc:173`).
- Mixed-snapshot replay: stubs call `p/find-event` on the **live store** per op (14 call sites in `core.cljc`) instead of the pass-local history snapshot; a signal/timer callback firing on another thread mid-pass (`store.cljc:67-70` fires callbacks in a `future`) can inject `:signal-received` into the store, and the stub at that seq picks it up in the same pass that replayed earlier steps from the older snapshot. (Cost angle: A16.)

**X10 — Reconstructed exceptions lose concrete type and deep cause chains → replay divergence — MEDIUM *(cross-review, validated)*.**
`throwable->map` serializes `:cause` recursively at every level (`error.cljc:147`), but `map->exception` (`error.cljc:158-176`) only reconstructs a nested cause for the `:activity-failed` kind; the generic fallback `(ex-info (or (:message m) "Restored exception") (merge {:restored true} data))` drops both the serialized `:cause` map and the original `:type`. (`:async-failed` likewise ignores the serialized top-level `:cause`, passing only the ex-data's `(:cause data)`.) A workflow that branches on an exception's concrete class (`(instance? SQLException e)`) or on a cause chain deeper than one level behaves differently on first run vs replay/resume: on replay the exception is a plain `ExceptionInfo` with `nil` cause. First-level `ex-message`/`ex-data` survive (the common branching signals), hence medium. Fix: reconstruct `(some-> (:cause m) map->exception)` in the generic branch and record/restore the original `:type`.

### 1.2 Persistence layer

**P1 — InMemoryStore `claim-owner` has a broken CAS — HIGH (independently reproduced).**
`src/intemporal/store.cljc:135-148` produces its result via a side effect *inside* the `swap!` update fn:

```clojure
(if (and (not (terminal-status? (:status wf))) (or (nil? cur) (= cur owner-id)))
  (do (reset! ok true) (assoc-in s [...] owner-id))
  s)
```

`swap!` re-runs the fn on CAS contention. Thread A sets `ok=true`, loses the CAS to thread B, retry sees `owner=B` and returns state unchanged — but `ok` stays `true`. **Both claimants get `true`** → double ownership → double execution, defeating the exclusivity promised in `protocol.cljc:26-29`. The same file already has the correct pattern: `consume-signal` (`store.cljc:78-89`) uses `swap-vals!` and reads the outcome from the old state, with a comment explaining why side effects inside `swap!` are wrong. Reachable in practice: the in-process worker (`core.cljc:668-762`) plus a blocking `start-workflow` share one InMemoryStore. *Reproduction (sonnet.md review): 12 threads racing to claim one unowned workflow, 300 trials — 259/300 trials had ≥2 threads each report a successful claim; the `swap-vals!` pattern gives 0. JDBC (atomic conditional UPDATE) and FDB (serializable txn) are not affected.*

**P2 — JdbcStore / FDBStore fire signal callbacks without removing them first — HIGH.**
`jdbc.clj:199-203`, `fdb.clj:151-155`:

```clojure
(when-let [callback (get-in @callbacks [workflow-id signal-name])]
  (future (try (callback) ...)))
```

InMemoryStore removes the callback atomically *before* firing, with the rationale at `store.cljc:62-64`: rapid successive signals must not re-fire the same callback, which "would consume later signals at the wrong seq-num." JDBC/FDB fire the still-registered callback on every `add-signal`. With two rapid signals s1, s2 at wait-seq N (`process-signal`, `execution.clj:212-217`): future A consumes s1 and writes `:signal-received` seq N; future B consumes s2 and writes a **second** `:signal-received` seq N with a different payload. JDBC's upsert makes it last-writer-wins (one signal silently vanishes); FDB keys are `[seq uuid]` so both persist and `find-event` picks by uuid ordering; the second signal is dequeued but lost to later waits. The engine guard comment (`execution.clj:207-211`) only covers the single-signal race. *(cross-review, validated)* Compounding detail: `process-signal`'s `save-received` (`execution.clj:195-202`) has **no** `find-event` one-writer guard — unlike `process-signal-with-timeout`'s `save-completed` (`execution.clj:238-255`, which has both the `claimed` CAS and the cross-pass `find-event` check) — so the double-fire writes the duplicate unconditionally. Fixes: de-register before firing in JDBC/FDB (as InMemory does), and/or add the same `find-event` guard to `save-received`.

**P3 — FDBStore fabricates `:seq` from wall clock for seq-less events — HIGH.**
`fdb.clj:84`, `fdb.clj:115`: `seq-num (:seq event (System/currentTimeMillis))`. Four engine event types carry no `:seq`: `:workflow-started`, `:workflow-completed`, `:workflow-failed`, `:workflow-cancelled` (also `:workflow-terminated`). Consequences:

- `load-history` sorts by `:seq` (`fdb.clj:79`), so in FDB `:workflow-started` is **not the first event** — InMemory and JDBC return it first. `get-workflow-status`'s fallback uses `(last history)` (`fdb.clj:220`), so derived status depends on accidental timestamp ordering (same-ms start+finish ties, broken by random uuid).
- Any seq-less event re-save gets a new, nondeterministic identity.

**P4 — Replay re-saves are not idempotent; duplicates sorted randomly in FDB — HIGH (duplicate-history shape independently reproduced).**
The engine re-saves logically identical events (crash between "save pending" and "save completion" in `process-pending-activity`, `execution.clj:101-113`; check-then-act `fire!` `execution.clj:173-178` and `save-completed` `execution.clj:239-255`). JDBC documents this contract ("the engine re-writes the same seq with identical data on each pass", `jdbc.clj:154-157`) and converges via upsert. InMemory blindly `conj`s (`store.cljc:22,35`) → duplicate history entries. FDB writes a fresh `[seq randomUUID]` key per save (`fdb.clj:85,116`) → duplicates with same-seq ties broken **by uuid, i.e. randomly**. After a genuine double-write with different content (e.g. two `:signal-wait-completed` writers with different `:received`, admitted by the comment at `execution.clj:239-255`), FDB history permanently holds both variants and the replayed result is decided by uuid order; JDBC keeps last commit; InMemory keeps first append. Cross-store replay divergence by design. *Reproduction (sonnet.md review): seed `:activity-scheduled` at seq 0, crash before the activity runs, resume — InMemory history holds two `:activity-scheduled@0` rows, JDBC one. Note also the JDBC migration comment claims upsert "matches the append semantics of the in-memory and FDB stores" — i.e. the divergence is documented as if it were parity.*

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
All exactly-once guards are `find-event` + `save-event` with no atomicity: `fire!` (`execution.clj:173-178`), `save-completed` (`execution.clj:239-255`), `notify-parent-terminal` (`execution.clj:362-377`), `run-once` (`execution.clj:621-631`). `IStore` offers no conditional-append primitive, so only JDBC's upsert makes double-writes converge; the other two stores persist duplicates (see P4). `save-events` is documented "atomically" (`protocol.cljc:12`) but the engine's exactly-once guards are read-then-write across separate calls.

**P10 — Smaller persistence bugs — LOW.**
- `consume-signal` JDBC: `SELECT ... FOR UPDATE SKIP LOCKED` with **no `LIMIT 1`** (`jdbc.clj:209`); lock scope depends on driver fetch behavior; silently requires MariaDB ≥ 10.6 / MySQL ≥ 8.
- `is-cancelled?` on MariaDB (`jdbc.clj:231-235`): `BOOLEAN` is `TINYINT(1)`; `(boolean 0)` is `true` in Clojure — works only because drivers map TINYINT(1) → `java.lang.Boolean` by default; `tinyInt1isBit=false` breaks cancellation detection.
- `status` column never backfilled (`20260531000001-add-status.up.sql`: `ADD COLUMN ... DEFAULT 'running'`): workflows terminal before the migration stay `'running'` forever → listed/claimable until a resume re-finalizes them.
- FDB `consume-signal` hardcodes `relative-key (vec (drop 4 key))` (`fdb.clj:166`) — assumes the root subspace has exactly one element; correct today (verified against clj-fdb's `get-range` semantics, which return absolute keys), but silently breaks if the store is ever nested under a multi-segment/directory subspace. Fix: unpack via the subspace rather than a hardcoded offset.
- FDB signal keys `[currentTimeMillis uuid]` (`fdb.clj:144`): same-millisecond signals are ordered by random uuid, not arrival — FIFO violated at ms granularity (JDBC uses monotonic `SERIAL id`, InMemory vector order).
- FDB `close` is a no-op returning `this` (`fdb.clj:65-66`) while `JdbcStore.close` closes the pool (`jdbc.clj:134-135`) — asymmetric resource contract; tests use `with-open`.
- Requeued signals (timeout-lost race `execution.clj:284`; put-back `execution.clj:245`) go to the **back** of the queue in all three stores — FIFO reorder on recovery paths.
- `maintain-owner-index!` (`fdb.clj:50-57`) re-adds an ownership-index entry whenever a batch contains `:workflow-started` without checking stored status; a re-saved start event on a terminal workflow resurrects a scan entry (claim-owner's status check limits blast radius to scan noise).

### 1.3 API / worker / runtime

**E1 — Worker busy-loop: waiting workflows re-driven back-to-back with no sleep — HIGH.**
`core.cljc:731-738`:

```clojure
(if (seq ids)
  (doseq [wf-id ids :while @running] (process-one wf-id))
  (Thread/sleep (long poll-ms)))
```

The poll thread sleeps only when `list-pending` returns **empty**. But `list-pending` returns every non-terminal workflow whose `wake-at` is nil or past, and `run-workflow-internal` sets `wake-at` only for `:wait-timer` / `:wait-signal-timeout` (`execution.clj:713-718`). A workflow waiting on a plain signal, on `join`/`join-any` of an independent child, or cancelled-but-unfinalized has `wake-at = nil` → returned by **every** poll. One idle signal-waiting workflow = 100% of one CPU core plus constant store load, doing a full history replay per pass, forever. (Confirmed independently by the engine pass; CLJS default poll is 50 ms — 10× more aggressive, `core.cljc:818-840`.)

**E2 — Ownership has no lease/expiry — dead pod strands its workflows forever — HIGH.**
`claim-owner`/`list-pending` gate on `owner = owner-id OR owner IS NULL` (`store.cljc:144-161`, `jdbc.clj:265-287`); `release-owner` runs only on clean `stop-worker` (`core.cljc:762`). No heartbeat, fencing token, or TTL anywhere. A SIGKILLed pod's workflows stay `owner = dead-pod` and are never listed by other pods. The docstring's recovery story (`core.cljc:678-680`) only works with a stable owner-id reused after restart; it fails under ordinary Kubernetes events (HPA scale-down, node drain, permanent pod loss with a new identity). *(cross-review)* The trigger is specifically worker-driven workflows (`claim-owner` is only called inside `start-worker`; a plain `start-workflow` crash leaves `owner=NULL` and is recoverable via the `owner IS NULL` branch) — and the orphaned-non-null-owner case has **no test coverage**, which is why the existing recovery tests don't catch it.

**E3 — Terminal status can be overwritten by a later racing terminal event — HIGH.**
Two cooperating gaps: `enforce-close-policies!` `:terminate` writes terminal `:workflow-terminated` to the child unconditionally (`execution.clj:414-417`) — no claim/fencing — while the child may be mid-drive on a worker; and terminal status writes are unconditional overwrites (InMemory `save-event` blindly `assoc-in :status :completed`, `store.cljc:22-27`; JDBC `UPDATE ... SET status = ?` with no `WHERE status NOT IN (...)` guard, `jdbc.clj:172-173`). A force-terminated child whose in-flight drive later finishes writes `:workflow-completed`, flipping status `terminated → completed`; history then holds two contradictory terminal events. Same flip possible between cancel and completion under double-drive (A3). `finalize-completed/failed/cancelled` (`execution.clj:424-487`) never re-check current status. Nothing in the drive loop checks for a terminal event already present in its own history. (Independently confirmed by the engine pass.)

**E4 — Interrupt during an `async` batch permanently fails the workflow — HIGH.**
The single-activity path wraps interruption explicitly: `runtime.clj:93-94` throws `activity-interrupted-exception`, and `stub` re-schedules instead of replaying the failure (`core.cljc:70-72,104-110`). The parallel path does neither: `execute-activities-parallel` catches `InterruptedException` from `.get` in the generic handler and serializes a plain error map with no `:exception-kind` (`runtime.clj:161-163`). The engine persists `:activity-failed` + `:async-failed` (`execution.clj:152-161`). On resume, `async` checks `interrupted?` on the error — false (and the guard is disabled entirely, X6) — so it returns the failed handle, `join` throws, and the `interrupt-error?` safety net (`execution.clj:489-501`) can't catch it (interrupt flag already cleared; the cause chain holds a serialized map, not `InterruptedException`). A routine `stop-worker` interrupt landing inside an async batch durably fails the workflow, contradicting the file's own "interruptions are infrastructure, never finalize" policy (`execution.clj:721-730`).

**E5 — `wait-for-signal-with-timeout` recomputes its deadline every replay — MEDIUM/HIGH.**
`core.cljc:312-316` builds the suspension with `:deadline (+ (utils/current-time-ms) timeout-ms)` on every pass; nothing persists the first deadline. Compare `sleep`, which reuses the persisted `:timer-scheduled` `fire-at` precisely to avoid pushing the deadline later on each resume (`core.cljc:334-345`). Every crash/resume or re-drive extends the signal wait by the downtime — and E1 guarantees a re-drive every poll, so on a new pod the wait can effectively never time out. `process-signal-with-timeout` consumes whatever deadline the latest pass computed (`execution.clj:229,263`), so the drift is real. (Confirmed by the engine pass.)

**E6 — `:cascade-cancel` close policy doesn't make the child due — MEDIUM.**
`cancel-workflow` does it right: mark cancelled, `set-wake-at nil`, wake (`core.cljc:884-890`). `enforce-close-policies!` `:cascade-cancel` only does `mark-cancelled` + `wake-workflow` (`execution.clj:410-413`) — no `set-wake-at nil`. Under the worker model the wake callback usually doesn't exist in the scanning process (worker resumes register no wake-fn, `execution.clj:708-709`), so a cascade-cancelled child sleeping on a timer stays excluded from `list-pending` until its `wake-at` dues — potentially hours later — before it observes the flag and compensates. (FDB masks this: its `mark-cancelled` force-dues, `fdb.clj:195-203` — see §3.)

**E7 — `make-workflow-engine`'s `:threads` option is silently dropped — MEDIUM.**
`core.cljc:1029-1031` passes `:threads` to `make-vthreads-executor`, which destructures only `{:keys [max-concurrent default-timeout-ms]}` (`runtime.clj:198-199`). The documented concurrency limit (default 4) is ignored; the executor is always unbounded `newVirtualThreadPerTaskExecutor` (`runtime.clj:201-203`) unless callers bypass `make-workflow-engine`.

**E8 — Bounded executor defeats activity timeouts via `CallerRunsPolicy` — MEDIUM.**
`create-bounded-executor` (`runtime.clj:184-194`) pairs an `ArrayBlockingQueue` with `CallerRunsPolicy`. When the queue is full, `.submit` runs the activity **synchronously on the workflow thread** before returning the future (`execute-activity`, `runtime.clj:81-89`), so `.get timeout` applies to an already-completed future: timeout unenforced, and a hung activity hangs the whole drive loop. Also silently serializes "parallel" batches under saturation. A rejection policy surfacing `RejectedExecutionException` (already handled as `:rejected` + reschedule on the sequential path, `execution.clj:64-70`) would be consistent.

**E9 — Armed signal/wake callbacks are never cleaned up on terminal states — MEDIUM (leak + post-mortem writes).**
`process-signal`/`process-signal-with-timeout` leave a registered signal callback armed when the wait isn't satisfied inline (`execution.clj:212-225,272-291`); no finalizer unregisters signal or wake callbacks. JDBC `callbacks` is a per-process atom keyed `[workflow-id signal-name]` (`jdbc.clj:215-229`) growing monotonically; a signal arriving after cancellation fires the stale callback, which consumes the signal and **appends `:signal-received` to an already-cancelled workflow's history** (`execution.clj:213-217`). InMemory keeps the same garbage under `[:workflows id :signal-callbacks]` (`store.cljc:91-95`).

**E10 — Smaller engine/API bugs — LOW.**
- `schedule-timer` idempotency check is check-then-act (`runtime.clj:23-36`): two threads both pass `contains?`, both schedule; the second `swap!` orphans the first `ScheduledFuture` (leaked, fires anyway — downstream dedup is itself check-then-act).
- `send-signal` status check is TOCTOU (`core.cljc:858-861`): reads `get-workflow-status`, throws unless `:running`, then in a **separate, non-atomic** step calls `add-signal`; the workflow can go terminal between the read and the insert. Also, the store has no distinct "waiting" status, so the guard cannot distinguish a healthy waiter from one that will never consume. See E11 for the leak this enables.
- `cancel-workflow` on an already-terminal workflow returns `{:cancelled true}` after merely logging (`core.cljc:881-893`) — misleading success.
- `enforce-close-policies!` recurses without a visited-set (`execution.clj:413,420`); cyclic user-supplied `:child-id`s → unbounded recursion.
- `submit-workflow` twice with the same `:workflow-id` writes a duplicate `:workflow-started` on InMemoryStore (no dedup, `core.cljc:541-546` + `store.cljc:19-29`); same for `start-workflow` (`start_workflow.clj:87-92` — no guard). Store tests document this as tolerated (`tests/bench/store_test.clj:363-365`).
- `notify-parent-terminal` appends `:child-workflow-completed`/`:async-completed` into an already-terminal parent's history for `:abandon`ed children (`execution.clj:359-380`).
- CLJS parallel path's not-found error literally says `"Activity xxx not found "` and interpolates the whole registry (`runtime.cljs:176`) — leftover placeholder.

**E11 — Pending signals are never cleared on terminal transitions; orphaned rows accumulate — LOW/MEDIUM *(cross-review, validated)*.**
Signals leave a store only via `consume-signal`. No finalizer clears pending signals, and although `intemporal_signals.workflow_id` has `ON DELETE CASCADE` in both SQL dialects (`20260215214002-initial-schema.up.sql`), workflow rows are **never deleted**, so the cascade never fires. Combined with E10's TOCTOU (and with stale armed callbacks, E9), a signal accepted for a workflow that has just gone terminal sits in the signals table forever — a bounded, rare resource leak on JDBC (and equivalent garbage in InMemory/FDB). Fix: make the send-signal status gate + insert atomic in the store (reject if terminal), and/or clear pending signals when a terminal event is written.

### 1.4 CLJ ↔ CLJS divergences

The dedicated pass compared both engines end-to-end; the table below is the complete divergence list. Everything else — `process-timer`, `process-signal`, `process-signal-with-timeout`, `process-join-pending` (including the `claimed` CAS and requeue logic), `join-any-pending`, Tier-2 linkage (`parent-link`, `notify-parent-terminal`, `enforce-close-policies!`), finalizers, `run-once`, the budget branch, `wake-at` computation — is line-for-line equivalent in logic, modulo promise wrapping.

| # | CLJ | CLJS | Verdict |
|---|-----|------|---------|
| D1 | `:child-workflow` runs pending asyncs first (`execution.clj:593-600`) | no check (`execution.cljs:612-617`) | **Bug — critical** (X2) |
| D2 | `RejectedExecutionException` → `:rejected`, rescheduled on replay (`execution.clj:64-70`) | none — no thread pool | Intentional (platform) |
| D3 | Retry backoff = blocking `Thread/sleep` on drive thread (`execution.clj:90`) | `prom/delay` (`execution.cljs:141-145`) | Intentional; note CLJ blocks shutdown/cancel during backoff |
| D4 | `interrupt-error?` refuses to finalize on infra interrupts (`execution.clj:489-501,726-730`) | no equivalent; every `:failed` finalizes (`execution.cljs:734-737`) | Intentional (no interrupts in JS), but CLJS has zero infra-error protection; E4's failure mode is guaranteed there |
| D5 | OTel spans in child/finalizers/close-policies | none | Intentional (platform) |
| D6 | `make-workflow-context` 5-arity | takes `:protocols` (`execution.cljs:380-392`, threaded at 681-682) | Intentional (CLJS `stub-protocol` needs runtime lookup) |
| D7 | Single-attempt result includes `:attempts` (`execution.clj:63`) | `execute-once` omits it (`execution.cljs:94-96,103-105`) | **Minor bug** — recorded history differs per platform |
| D8 | `finalize-cancelled` error `:type "clojure.lang.ExceptionInfo"` (`execution.clj:456`) | same literal string (`execution.cljs:490`) — wrong type name on CLJS; sync-child error uses `"ExceptionInfo"` (`execution.cljs:771`) vs `"clojure.lang.ExceptionInfo"` (`execution.clj:779`) | **Minor bug** (copy-paste), also internally inconsistent |
| D9 | `start-workflow` wake-fn calls `on-workflow-resumed` (`start_workflow.clj:53-56`) | plain `start-workflow`'s `run-step` doesn't (`start_workflow.cljs:61-64`), though `start-workflow-async`'s does (`start_workflow.cljs:120`) | **Minor bug** — observer sees resumes on JVM but not on plain CLJS start |
| D10 | Sequential timeout stays `activity-timeout-exception` (`runtime.clj:90-92`) | sequential `.catch` wraps everything, including the timeout, in `activity-failed-exception` (`runtime.cljs:156-163`) | **Minor bug** — `:exception-kind` differs per platform; retry predicates keyed on kind behave differently |
| D11 | `execute-workflow-fn` re-derives `(ctx/current-context)` inside `catch` (`execution.clj:26-48`) — double-throw if unbound | captures ctx before `try` (`execution.cljs:20-26`) | Trivial; CLJS strictly more robust |
| D12 | `shutdown?` real (`runtime.clj:176-182`) | `(shutdown? _) false` (`runtime.cljs:205-206`) → check at `execution.cljs:674` is dead code; `shutdown-scheduler?` = "no pending timers" (`runtime.cljs:76-78`) | Intentional stub, odd semantics |
| D13 | JVM worker: poll 500 ms, blocking thread (`core.cljc:667-762`) | CLJS worker: poll **50 ms**, promise chain (`core.cljc:764-844`) | Intentional, but 10× more aggressive hot-replay (E1) |

---

## 2. Architecture issues

**A1 — Two hand-maintained engine copies, already diverged — HIGH.**
`execution.clj` (799 lines) and `execution.cljs` (793 lines) are near-copies; the runtime pair and `start-workflow` pair likewise. Drift has begun (all of §1.4, including one critical). Every future fix must be made twice; several already weren't. There is no shared cross-platform test asserting the two engines produce the same history for the same workflow, so drift risk compounds. Extract a shared `.cljc` drive/suspension/finalization core with platform shims only for concurrency, and add parity tests.

**A2 — Poll-everything recovery model — HIGH (structural).**
Signal/async waits store `wake-at = nil` = "always eligible" (`execution.clj:713-718`), so every worker poll re-resumes — full replay including `load-history` — every non-terminal workflow, changed or not. This is the only cross-pod wake mechanism (callback fast path is same-process only, `jdbc.clj:197-198`). Cost is O(N × H) per poll interval per pod; on FDB each replayed op's `find-event` is another full history load. Compounds with E1. A durable "runnable" marker (set by `add-signal`/timer-fire/cancel, cleared on drive) would make the poll cheap; today `wake-at` doubles as that marker but is `nil` for exactly the waits that need it.

**A3 — Double-drive is possible and only documented, not prevented — MEDIUM/HIGH.**
`start-workflow` never stamps ownership (no `claim-owner` call in `start_workflow.clj`), so a blocking `start-workflow` and a `start-worker` on the same store drive the same workflow concurrently — acknowledged only in `submit-workflow`'s docstring (`core.cljc:524-526`). Activities are then double-executed (the JDBC upsert hides it; other stores record duplicates — P4). Either start should claim, or `list-pending` should exclude workflows with a live in-process driver.

**A4 — Single-threaded worker = head-of-line blocking — MEDIUM.**
The CLJ worker resumes workflows sequentially on the poll thread (`core.cljc:736-737`); a resume runs that workflow's pending activities inline (default timeout 30 s each). One slow workflow delays every other due workflow by its full activity latency. No per-workflow execution pool or work-stealing.

**A5 — `stop-worker`'s graceful window contradicts its own safety comment — MEDIUM.**
Comment (`core.cljc:751-757`) explains why interrupting mid-resume is dangerous, then `.join thread (+ poll-ms 5000)` (`core.cljc:758`) — far shorter than one default 30 s activity timeout — and interrupts anyway (`core.cljc:760`). Combined with E4/X6, "stop a busy worker" is exactly the path that can durably fail workflows with async batches.

**A6 — Engine lifecycle is split-brain — MEDIUM.**
`shutdown-engine` (`core.cljc:1041-1048`) shuts executor+scheduler but knows nothing about workers started via `start-worker` (separate stop fn), in-flight blocking `start-workflow` drives, or live tracing spans. No single "engine" object owns all of it; nothing prevents `shutdown-engine` while a worker is mid-drive from the same store.

**A7 — Event history isn't append-only; divergence is silently absorbed — MEDIUM (design).**
JDBC history write is `ON CONFLICT (workflow_id, seq, event_type) DO UPDATE SET data = EXCLUDED.data` (`jdbc.clj:77-85`). A genuinely divergent replay (workflow code changed shape) silently *overwrites* recorded history instead of failing. The only determinism guard is the activity-name check in `stub` (`core.cljc:77-87`); it doesn't compare recorded `:args`, and no other seq'd op checks anything: `wait-for-signal` doesn't compare the recorded `:signal-name` (`core.cljc:292-296`), `sleep` doesn't check the recorded timer matches the call site, `async`/`join-any`/`run-child-workflow` verify nothing. A code change that reorders a signal wait and a timer silently replays the wrong event's payload into the wrong call. Insert-only + conflict-error, plus uniform type+name-at-seq checks, would turn silent corruption into a loud `NonDeterministicWorkflowError`.

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
- Process-global `defonce` registry: name collision between two different workflow fns silently overwrites; precludes two isolated engines in one process (multitenancy); cross-pod resume silently depends on every pod registering the same vars (mitigated by the worker's `unresumable` skip list). LOW.

**A12 — Observer error isolation is half-implemented, and the unguarded paths are load-bearing — MEDIUM.**
Protocol docstring says observers "must not throw — any exception … will propagate through the engine and fail the workflow" (`protocol.cljc:78-80`); `ctx/notify-observer` guards (`context.cljc:135-141`) but the engine's own `-notify` macro has **no** try/catch (`execution.clj:16-20`). *(cross-review, validated)* The blast radius is worse than "fails the workflow":

- In `finalize-completed`, `-notify p/on-workflow-completed` (`execution.clj:439`) fires **after** the durable `:workflow-completed` save but **before** `enforce-close-policies!`, `notify-parent-terminal`, and `finish-workflow-span!` (`execution.clj:442-444`) — a throwing observer leaves the workflow completed but its joining parent never woken (hangs), children unenforced, and the OTel span leaked. Same ordering in `finalize-cancelled`/`finalize-failed`.
- In `attempt-once`, `-notify p/on-activity-completed` (`execution.clj:61`) sits **inside** the `try` → an observer throw is caught by the generic `(catch Exception e)` (`execution.clj:71`) and misclassified as `:retryable-error` → a spurious retry that **re-runs the side effect** of an already-successful activity (or fails the activity after success when no retry policy). Meanwhile `-notify p/on-activity-started` (`execution.clj:56`) sits **outside** the `try` and propagates raw — two notify calls in one function with different failure semantics.
- `make-composite-observer` fans out with bare `doseq` (`observer.cljc:181-221`): one throwing leaf aborts the fan-out and starves every later observer — exactly the `[logging-observer observer]` composition `make-workflow-engine` wires by default.

**A13 — Tracing.**
- One open span per workflow for its entire lifetime, in process-global `live-spans` (`tracing.clj:34`), ended only by terminal finalizers. Workflows that suspend forever leave spans open indefinitely; OTel backends typically drop multi-day spans — no trace exactly for the stuck workflows you care about. Span-per-drive with links (the persisted `:tracecontext` already enables it, `core.cljc:649-657`) is more robust. LOW/MEDIUM.
- `ensure-workflow-span!` check-then-`swap!` (lines 47-54) can create two spans under race and leak the loser. LOW.
- `intemporal.tracing` + clj-otel are hard requires of the CLJ engine paths — JVM users pay the dependency even with `:enable-telemetry false`. LOW (packaging).
- *(cross-review)* Design note: OTel is hard-wired into `core`/`execution`/`runtime` rather than expressed through the `IWorkflowObserver` seam that exists for exactly this concern — an `OtelObserver` would make telemetry opt-in and remove the hard dependency. LOW.

**A14 — Schema/ops.**
- Missing index on `intemporal_signals.workflow_id` (Postgres; initial schema has only PK + FK, no later migration adds one) → seq scan per `consume-signal`/`get-pending-signals`. HIGH (perf). Cross-dialect divergence too: MariaDB's inline FK auto-creates a backing index, so the same workload is O(log n) there and O(n) on Postgres.
- Poller query can't use its indexes (`jdbc.clj:278-287`): `status NOT IN (...)` over a low-cardinality column; `owner = ? OR owner IS NULL` defeats plain index use; the partial wake-at index covers only non-NULL wake_at (i.e. *not* the always-due signal waiters); `ORDER BY created_at` unindexed → sort of the running set every poll per pod. MEDIUM.
- MariaDB `TIMESTAMP` vs Postgres `TIMESTAMPTZ` for `wake_at`: naive `TIMESTAMP` + `FROM_UNIXTIME` + `now()` are session-TZ dependent — pods with different session TZs disagree on dues. Epoch-ms BIGINT would be TZ-proof and match FDB/InMemory. MEDIUM.
- Migrations run at store construction (`jdbc.clj:336`): multi-pod rollouts race DDL; runtime DB user needs DDL privileges. `default-jdbc-url` hardcodes credentials (`jdbc.clj:15-16`). LOW.
- *(cross-review, validated)* `make-jdbc-store` builds the HikariCP pool with only `:jdbc-url` (`jdbc.clj:337`) — no pool size, timeouts, or leak detection; the `;; TODO use more complete opts` at `jdbc.clj:330` admits it. Defaults may not suit the worker-poll workload. LOW.
- FDB transaction limits: `load-history`, `release-owner`, and the full-bucket scans in `list-pending` read unbounded ranges in single transactions; FDB's 5 s / 10 MB limits bound history size and fleet size per owner bucket. LOW.
- Down-migration trap: `20260712000005-history-per-event-type.down.sql` re-adds `UNIQUE (workflow_id, seq)`, which fails once real multi-event-type-per-seq data exists (its own comment admits such data is normal). LOW.

**A15 — Docs/tests hygiene.**
- `improvements.md` is referenced by 13+ live locations (all five jepsen test docstrings, `racing_store.clj:3`, `core.cljc:609`, `workflow_registry.cljc:6`, `start_workflow.clj:59`, `DEVELOPMENT.md:86`, `test/intemporal/jepsen/README.md`) but was **deleted in commit `a6da00f`**. Numbering survives in `issues.md`.
- `DEVELOPMENT.md:86-92` is stale: says bugs 1.1/1.2/1.3 are "buggy (Phase C)" while test docstrings and src confirm they are fixed.
- `test/intemporal/tests/bench/store_test.clj` and `test/intemporal/tests/store/store_test.clj` are byte-identical 375-line copies (only ns differs) — duplicated maintenance.
- `dev/verify_bugs.clj` is a stale pre-fix artifact: asserts the bugs are *present*, and its `RacingStore` implements an older, thinner IStore missing `register-wake-callback`/`wake-workflow`/`claim-owner`/`list-pending`/`release-owner`/`set-wake-at`/`link-child!`/`list-children` — would hit `AbstractMethodError` against current src.

**A16 — Replay cost is superlinear; every stub op is a store round-trip — HIGH (perf, plus a correctness angle).**
Every stub op calls `p/find-event` **on the store**, not on the pass-local history already in the context atom (14 call sites: `core.cljc:68-69,137-139,217-218,246,254,270-271,292,307,331,338,363-364,400`). On JDBC that's a `SELECT` per step (`jdbc.clj:176-181`); on FDB `find-event` **loads the entire history** (`fdb.clj:124-129`). Each loop iteration reloads full history (`execution.clj:667`); `replaying?` scans the full history vector on every `next-seq!` (`context.cljc:52-70`); `check-cancelled!` does a store read per seq op (`context.cljc:99-105`); finalization does 2 more full history loads (`parent-link` `execution.clj:347-349`, `has-children?` `execution.clj:388-389`) even for top-level workflows. Net: one drive of an n-step workflow costs O(n²) store reads on JDBC, O(n³) event throughput on FDB. Beyond cost it produces the mixed-snapshot hazard (X9). Replaying from the pass-local snapshot fixes both.

**A17 — Two drive models with different liveness semantics — MEDIUM.**
In-process mode (wake-q + callbacks, `start_workflow.clj:48-83`) vs worker mode (ownership poll). In worker mode `resume-workflow` passes **no `wake-fn`** (`core.cljc:639-641`), so signal/timer callbacks consume and persist but never wake — liveness rests entirely on the poll, which in turn hot-replays everything (E1). Cancellation in worker mode is likewise poll-latency-bound (`cancel-workflow`'s `wake-workflow` is a no-op without a registered callback, `core.cljc:884-890`). *(cross-review)* Contract-clarity addendum: `IStore` mixes durable methods (history, signals, ownership) with same-process-only callback registration, but the protocol never states at the method level that callbacks are per-store-instance and invisible cross-pod — document it, or split durable vs in-process methods into separate protocols.

**A18 — Global dynamic context + process-global registries — MEDIUM.**
`*workflow-context*` (`context.cljc:15`) is a single dynamic var; on CLJS it requires custom binding-propagation macros (`blet`/`bthen`/`bfinally`/`bloop`, `context.cljc:147-203`) at every promise boundary, and any user callback that escapes the lexical binding dies with "Not in workflow context". Exception-based control flow unwinds the whole body per step via a thrown `Error`-subclass proxy (`error.cljc:24-32`); there is no checkpointing of locals — state is reconstructed by re-execution only. Activities execute in-process, so activity thread budget = workflow drive budget, and pool shutdown directly threatens drive correctness (X4, E4).

---

## 3. Inconsistencies across stores

| Behavior | InMemory | JDBC | FDB |
|---|---|---|---|
| Re-save idempotency | duplicates (`store.cljc:22,35`) | upsert per (wf,seq,type) — only for non-NULL seq (`jdbc.clj:79-85`) | duplicates under random-uuid keys (`fdb.clj:85,116`) |
| Double-write conflict resolution | first-wins | last-wins | random (uuid order) |
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
| Value fidelity | exact Clojure values | JSON round-trip (keyword values → strings) | JSON round-trip (keyword values → strings) |
| Signal consume aftermath | leaves empty vector under signal name | deletes row | deletes row |
| Signal FIFO guarantee | vector order | monotonic `SERIAL id` | ms timestamp + random-uuid tiebreak (violates FIFO within same ms) |
| `close` | — | closes pool | no-op |

The `list-pending` ordering row means the anti-starvation "earliest-due first" guarantee the InMemory comment describes holds **only** for InMemory; a canonical ordering (earliest wake-at, then insertion) should be contractual (FDB would need a wake-at-prefixed index). *(Reproduced in the sonnet.md review: InMemory returned `[w-nil w-soon]` wake-at-asc and correctly filtered a far-future entry.)*

Three further points deserve emphasis:

- **Cancellation-latency divergence (E6)**: public `cancel-workflow` clears wake-at itself, but the cascade-cancel path calls only `mark-cancelled` + `wake-workflow`. On FDB a cascade-cancelled timer-sleeping child is driven immediately (mark-cancelled force-dues); on JDBC/InMemory it sleeps until its original wake-at — saga compensation and the terminal `:workflow-cancelled` event delayed arbitrarily.
- **JSON round-trip loses keyword values — MEDIUM (independently reproduced)**: `->json-param`/`<-json-val` (`jdbc.clj:106-126`) and `->bytes`/`<-bytes` (`fdb.clj:15-20`) keywordize map *keys* only; `:event-type` is re-keywordized manually, but keyword *values* in activity results, workflow args (re-read from `:workflow-started` on resume, `core.cljc:627-630`) and signal payloads come back as strings. Only `:exception-kind` is explicitly re-keywordized (`error.cljc:166`). *Reproduction (sonnet.md review): `:ok → "ok"`, `{:status :active} → {:status "active"}`, and the library's canonical example activity result `[:processed 5] → ["processed" 5]`.* A workflow branching on a keyword result (`(= (first r) :processed)`, `case`, keyword lookup) behaves differently after resume on JDBC/FDB than on InMemory — a silent replay-determinism break that depends on which store is configured. Related: keyword signal-names are stringified by FDB tuple encoding, blow up as unbindable params in JDBC, and are distinct keys in InMemory — no normalization anywhere. No pluggable serializer (Temporal's DataConverter analogue); full stack traces are stored per error event (`error.cljc:146`) — history bloat on JDBC JSONB.
- **Double-write conflict resolution differs by store** (P4): same-seq conflicting writes resolve first-wins (InMemory), last-wins (JDBC), or random (FDB uuid order). The engine comment at `execution.clj:239-255` admits `:signal-wait-completed` is "replayed differently per store".

**Known, previously fixed cross-store bugs (from the Jepsen regression suite, all asserting FIXED):**
1.1 lost wake across pods (callbacks were process-local; fixed via durable markers + worker + resume-by-id registry); 1.2 concurrent writers corrupting history (fixed via `claim-owner` CAS — but see P1, the InMemory CAS is broken); 1.3 no recovery poller (fixed via `start-worker`); 2.1 register-then-consume signal race (fixed via register-first ordering — but the timeout variant still has it, P7, and the async/child-join path never got the fix, X5); 2.3 cancellation couldn't reach signal-sleepers (fixed via `wake-workflow`). There is **no bug-2.2 test** — `issues.md:101-103` documents "signal sent to a workflow not yet started" as untested. Crash-recovery tests (`test/intemporal/tests/crash/`) run **InMemoryStore only** — JDBC/FDB recovery equivalents exist only in the local chaos harness (not CI). Activities are at-least-once by design: interrupted activities persist `:activity-failed` with `:activity-interrupted`/`:rejected` kinds and are re-run (`crash/future_cancel_test.clj:42-52`).

---

## 4. Improvements (prioritized)

1. **Fix the `async` `existing-started` branch (X1, X2) — three parts, all required**: (a) hoist the `(seq pending-asyncs)` check above the suspension `case` in both engines so pending asyncs run before *any* suspension dispatch; (b) persist the captured activity seq as `:last-seq` on `:async-started` and call `ctx/update-seq!` in the branch (closes the drift); (c) re-enqueue the incomplete async when no completion exists (heals the orphan hang and the crash-between-saves window). Add the missing CLJS `:child-workflow` guard regardless. Add a regression test: crash a 2-async fan-out between `:async-started` and completion, resume, assert seq alignment + exactly-once execution.
2. **Stop failing workflows on budget exhaustion (X3)**: return `{:status :suspended}` so a later resume with a larger budget can continue; honor the caller's `:max-iterations` in `process-child-workflow`.
3. **Close the lost-wake window on async/child-join waits (X5)**: register the generic wake callback *before* the eligibility check inside each `process-*` handler (the bug-2.1 pattern already used for signals), or introduce a durable runnable flag that wakers set unconditionally and drives clear.
4. **Wrap rejection in the parallel submit loop (X4)**: try around `.submit`, record `:rejected` per unsubmitted activity, cancel submitted futures — degrade to rescheduling instead of an escaping exception.
5. **Re-enable the interrupt guards (X6, E4)**: restore the disabled `(not interrupted?)` checks (`core.cljc:152,371`); wrap `InterruptedException` in the parallel executor with `activity-interrupted-exception` like `runtime.clj:93-94`; exclude it from default retryability; port the `interrupt-error?` guard to CLJS.
6. **Replay from the pass-local history snapshot (A16, X9)**: one `load-history` per iteration; stubs search the in-memory vector. Removes per-step DB round-trips and the mixed-snapshot hazard in one move — events arriving mid-pass become next-pass input, which the seq-frontier model already assumes.
7. **Fix the worker busy-loop (E1/A2)**: set a `wake-at` (or a `signals-awaited` marker consulted by `list-pending`) for signal/async waits; always sleep `poll-ms` after a batch even when `ids` is non-empty.
8. **Add an ownership lease (E2)**: `owner_since` column; claim predicate `owner IS NULL OR owner = ? OR owner_since < now() - lease`; heartbeat on each successful resume; plus a fencing token checked in `save-events` — also kills E3's stale-finalizer writes. Add the missing test: orphaned non-null owner reclaimed after lease expiry.
9. **Guard terminal writes (E3, X7)**: conditional terminal updates (`WHERE status NOT IN (terminal)` / status check in `swap!`); finalizers no-op when already terminal; make terminal status write-once in all three stores; include `:suspended` in the sync-child backstop set; link sync children via `link-child!` (or document why close policies can't apply); document the "sync children cannot suspend" restriction on `run-child-workflow`.
10. **Add a conditional-append primitive to `IStore`** (`save-event-if-absent` → boolean): JDBC `INSERT ... ON CONFLICT DO NOTHING` + update-count; FDB read-then-set in-txn; InMemory `swap-vals!`. Route `fire!`, `save-completed`, `save-received` (currently unguarded — P2), `notify-parent-terminal`, and `run-once` through it — eliminates the whole check-then-act class (P9, and the divergence part of P4).
11. **Make `:seq` mandatory (A8)**: assign control events a seq via `next-seq!`; `seq NOT NULL` migration in JDBC; deterministic per-(seq, event-type) keys in FDB instead of `[seq uuid]`. Fixes P3, P6, and FDB duplicate/random ordering in P4; aligns re-save idempotency.
12. **Fix InMemory `claim-owner` (P1)**: derive the result from `swap-vals!` old/new state, not `(reset! ok true)` inside `swap!`. (Independent reproduction: 259/300 contested trials double-claim today.)
13. **Remove the callback before firing in JDBC/FDB `add-signal` (P2)**: `swap-vals!` on the callbacks atom, mirroring `store.cljc:65` — closes the two-signal loss race.
14. **Persist the signal-timeout deadline (E5)** exactly like `sleep` persists `fire-at` (a `:signal-wait-started` event).
15. **Make `enforce-close-policies!` `:cascade-cancel` mirror `cancel-workflow` (E6)** — add `set-wake-at nil`; or move cancel force-due into the store contract for all stores.
16. **Unify `list-pending` membership and `claim-owner` existence (P5/P8)**: exclude history-less rows in JDBC (`AND EXISTS (SELECT 1 FROM intemporal_history ...)` or a `started` flag); make `claim-owner` require existence in all three stores; define one canonical `list-pending` ordering (earliest wake-at, then insertion) in the contract.
17. **Fix executor wiring**: `:threads` → `:max-concurrent` in `make-workflow-engine` (E7); replace `CallerRunsPolicy` with a rejecting policy on the bounded executor (E8).
18. **History integrity + uniform determinism checks (A7)**: insert-only history with conflict → `NonDeterministicWorkflowError`; extend the `stub` replay check to compare recorded `:args`; apply type+name-at-seq checks to timers, signals, asyncs, and child workflows, not just activities.
19. **Deduplicate the CLJ/CLJS engine pairs (A1)**: shared `.cljc` core + platform shims; a shared behavioral test asserting both engines produce identical histories for the same workflows; fix the small divergence bugs (D7–D10, §1.4).
20. **Schema fixes (A14)**: index `intemporal_signals (workflow_id, signal_name, id)`; composite partial poller index `(owner, wake_at) WHERE status = 'running'`; index `created_at` or order by `id`; backfill `status` from history; epoch-ms BIGINT wake-at on MariaDB/MySQL.
21. **Reduce poll cost**: DB-mediated wake (Postgres `LISTEN/NOTIFY` on signal insert, or `wake_at = now()` on `add-signal`) so signal waiters aren't replayed every 500 ms; page FDB range reads; give `find-event` an indexed path on FDB (falls out of #11).
22. **Pluggable serializer / value fidelity**: normalize signal names with `str` at the API boundary; fix the JSON keyword-value loss (reproduced: `[:processed 5] → ["processed" 5]`) via a shared codec or EDN-based serialization (transit/nippy) for JDBC/FDB to match InMemory semantics; drop full stack traces from persisted error maps by default.
23. **Implement `:signal-id` idempotency (X9)**: the documented guarantee is entirely unimplemented — add `UNIQUE (workflow_id, signal_id)` + `ON CONFLICT DO NOTHING` (JDBC), equivalent dedup keys in FDB/InMemory, or a per-workflow seen-id set.
24. **Signal lifecycle hygiene (E10/E11)**: make the `send-signal` status gate + insert atomic in the store (reject if terminal); clear pending signals when a terminal event is written; unregister signal/wake callbacks in finalizers (E9).
25. **Restore exception type and cause chains on replay (X10)**: reconstruct `(some-> (:cause m) map->exception)` in the generic branch of `map->exception` and record/restore the original `:type`.
26. **Observer hardening (A12)**: guard `-notify` like `ctx/notify-observer`; move `-notify p/on-activity-completed` outside the `try` in `attempt-once` (or classify observer errors separately from activity errors); add per-observer try/catch in `make-composite-observer`; default `enable-logging` to false or bound the log atom; consider expressing OTel as an `IWorkflowObserver` (A13).
27. **Single engine-lifecycle owner (A5/A6)**: one object owning worker threads, executor, scheduler, and in-flight drives; a graceful stop that waits at least one max activity timeout.
28. **Durable retry state; backoff off the drive thread (X8)**: persist attempt counts as events so `max-attempts` holds across resumes; schedule retries via `IScheduler` and suspend instead of `Thread/sleep` on the drive thread.
29. **Ops hardening (A14)**: configure the HikariCP pool explicitly (`jdbc.clj:337` — size, timeouts, leak detection; TODO already at `jdbc.clj:330`); don't run migrations at store construction with the runtime DB user; remove hardcoded credentials from `default-jdbc-url`; reject anonymous/unstable-named workflow fns at `register-workflow!`; document the CLJS `:advanced` constraint; fix the `cljs.analyzer.api` hard require (A11).
30. **Expand the store conformance suite** (`tests/store/test_suite.clj`, currently 64 lines): claim exclusivity under contention, claim on missing workflow, `list-pending` filtering/ordering/wake-at, `set-wake-at` on terminal workflows, callback single-fire under rapid signals, signal FIFO, duplicate re-save idempotency, `get-workflow-status` on history-less rows, mid-fan-out crash seq alignment (X1), orphaned-owner recovery (E2) — run against all three stores. Also: delete or update `dev/verify_bugs.clj`, dedupe the two `store_test.clj` copies, refresh `DEVELOPMENT.md`, fix dangling `improvements.md` references (A15).

| # | Test | Test Case | Fixed |
|---|------|-----------|-------|
| 1 | `intemporal.tests.crash.async-fanout-crash-test` | `async` immediately followed by `sleep`, and a crash between `:async-started` and completion followed by resume on a fresh engine — asserts the activity executes exactly once, `:async-completed` is recorded, and the workflow completes with the correct joined result in both cases | Yes   |
| 2 | `intemporal.tests.engine.budget-exhaustion-test` | Drive a workflow past `max-iterations`, assert `:suspended` not `:failed`, then resume with a larger budget and assert completion | No    |
| 3 | `intemporal.tests.engine.async-join-wake-test` | Finish a child/async in the TOCTOU window between the eligibility check and `register-wake-callback`, assert the parent still wakes | Yes    |
| 4 | `intemporal.tests.runtime.parallel-rejection-test` | Force `RejectedExecutionException` mid-`mapv` in `execute-activities-parallel`, assert `:rejected` + reschedule, no escaping exception | Yes   |
| 5 | `intemporal.tests.crash.async-interrupt-test` | Interrupt an in-flight async batch, resume, assert the activity is retried (not durably failed) | Yes   |
| 6 | `intemporal.tests.engine.replay-snapshot-test` | Assert stub ops read from the pass-local history snapshot, not a live per-op store read, under a concurrent signal write mid-pass | No    |
| 7 | `intemporal.tests.worker.busy-loop-test` | One idle signal-waiting workflow under `start-worker`, assert the poll thread sleeps between polls (no 100%-CPU hot loop) | No    |
| 8 | `intemporal.tests.store.lease-recovery-test` | Orphan a non-null owner (simulate dead pod), assert another worker reclaims after lease expiry | No    |
| 9 | `intemporal.tests.engine.terminal-guard-test` | Race a `:terminate` close-policy write against an in-flight child completion, assert terminal status is write-once | No    |
| 10 | `intemporal.tests.store.conditional-append-test` | Concurrent `fire!`/`save-completed`/`save-received` on the same seq, assert exactly one write wins across all three stores | No    |
| 11 | `intemporal.tests.store.mandatory-seq-test` | Assert `:workflow-started`/`:workflow-completed`/etc. carry a real `:seq`, and FDB `load-history` returns `:workflow-started` first | Yes    |
| 12 | `intemporal.tests.store.claim-owner-cas-test` | N threads racing `claim-owner` on one unowned workflow, assert exactly one success (InMemory) | Yes    |
| 13 | `intemporal.tests.store.signal-double-fire-test` | Two rapid signals at the same wait-seq on JDBC/FDB, assert only one `:signal-received` is recorded | Yes    |
| 14 | `intemporal.tests.crash.signal-timeout-deadline-test` | Crash and resume mid `wait-for-signal-with-timeout`, assert the deadline doesn't extend on replay | Yes    |
| 15 | `intemporal.tests.engine.cascade-cancel-wake-test` | Cascade-cancel a timer-sleeping child, assert it's driven immediately (not stuck until original `wake-at`) on JDBC/InMemory | No    |
| 16 | `intemporal.tests.store.list-pending-phantom-test` | History-less row via `cancel-workflow`/`add-signal` upsert on JDBC, assert it's excluded from `list-pending` | No    |
| 17 | `intemporal.tests.engine.executor-wiring-test` | Assert `make-workflow-engine {:threads N}` bounds concurrency, and a saturated bounded executor applies backpressure instead of running on the caller thread (rejecting only on shutdown/submit-timeout) | Yes   |
| 18 | `intemporal.tests.engine.determinism-check-test` | Reorder a signal wait and a timer in a resumed workflow body, assert a loud `NonDeterministicWorkflowError` instead of silent history overwrite | No    |
| 19 | `intemporal.tests.engine.cljs-clj-parity-test` | Run the same workflow through both engines, assert identical persisted histories | No    |
| 20 | `intemporal.tests.store.jdbc-schema-test` | Assert `intemporal_signals` has an index on `workflow_id`, and the poller query uses an index plan | No    |
| 21 | `intemporal.tests.worker.wake-latency-test` | Signal a waiting workflow under worker mode, assert it's resumed near-instantly rather than on the next `poll-ms` tick | No    |
| 22 | `intemporal.tests.store.value-fidelity-test` | Round-trip a keyword-valued activity result (`[:processed 5]`) through JDBC/FDB, assert it comes back as keywords, not strings | Yes    |
| 23 | `intemporal.tests.signal.signal-id-idempotency-test` | Send two signals with the same `:signal-id`, assert only one is delivered | No    |
| 24 | `intemporal.tests.store.signal-lifecycle-test` | Send a signal to a workflow that goes terminal concurrently, assert it's rejected/cleared rather than orphaned | No    |
| 25 | `intemporal.tests.error.exception-replay-test` | Throw a multi-level cause chain from an activity, resume, assert the replayed exception preserves `:type` and nested `:cause` | No    |
| 26 | `intemporal.tests.observer.observer-isolation-test` | A throwing `on-workflow-completed`/`on-activity-completed` observer, assert it doesn't hang the parent, retry the activity, or starve other observers | No    |
| 27 | `intemporal.tests.engine.lifecycle-owner-test` | `shutdown-engine` while a worker is mid-drive, assert a graceful stop waits at least one max activity timeout | No    |
| 28 | `intemporal.tests.crash.retry-durability-test` | Crash mid-retry, resume, assert the attempt counter (not just the activity) survives across resumes | No    |
| 29 | `intemporal.tests.store.jdbc-ops-hardening-test` | Assert HikariCP pool options are explicit and migrations don't run under the runtime DB user | No    |
| 30 | `intemporal.tests.store.conformance-suite` (expanded) | Claim exclusivity, `list-pending` ordering/wake-at, callback single-fire, signal FIFO, re-save idempotency, orphaned-owner recovery, run against InMemory/JDBC/FDB | No    |

---

## Appendix — analysis coverage

- Execution engine: dedicated line-by-line `execution.clj` ↔ `execution.cljs` diff (§1.1, §1.4), plus `context.cljc`, `activity.cljc`, `error.cljc`, `events.cljc`, both runtimes, both `start-workflow` drivers.
- Persistence: `protocol.cljc`, `store.cljc`, `store/jdbc.clj`, `store/fdb.clj`, all 12 migrations under `resources/migrations/{postgres,mariadb}/`, plus engine call sites.
- API/runtime: `core.cljc`, `internal/runtime.clj/.cljs`, `internal/macros.cljc`, `internal/workflow_registry.cljc`, `internal/logging.cljc`, `observer.cljc`, `tracing.clj`, `utils.cljc`, `internal/fns/start_workflow.clj/.cljs`.
- Tests: `tests/jepsen/*`, `tests/crash/*`, `tests/store/test_suite.clj`, `tests/bench/*`, `dev/verify_bugs.clj`, repo-wide TODO/FIXME grep.
- Cross-review: `sonnet.md` compared against this baseline; sonnet-only findings re-validated against code before merging (X1 drift extension, X7 linkage/doc gaps, X10, E11, A12 blast radius, A14 pool config, plus reproduction attributions).

**Verified-but-NOT-bugs** (suspected during analysis, checked, and cleared):
- JDBC `claim-owner`/`list-pending` NULL-status worry — cleared: `status TEXT NOT NULL DEFAULT 'running'` (`20260531000001-add-status.up.sql:4`).
- `update-seq!` arithmetic (`context.cljc:114-119`) — correct **for the completed/failed replay paths**, which carry `:last-seq` (`execution.clj:148,159`); happy-path multi-async replay stays aligned. *Amended after cross-review:* the `existing-started` branch never calls `update-seq!` and `:async-started` lacks `:last-seq` — that gap is real and is now part of X1.
- The signal callback/inline-consume race (bug 2.1) fix and the `claimed`-CAS + cross-pass `find-event` guard in `process-signal-with-timeout` — sound as written.
- Cancellation frontier anchoring (`surface-cancellation!`, `context.cljc:72-97`) including the compensation seq-collision at the frontier — deterministic across crash/resume.
- CLJS `prom/loop` + `prom/recur` through the `dispatch` closure (`execution.cljs:686-742`) — valid promesa usage.
- `schedule-independent-child!` crash windows (`core.cljc:390-431`) — correctly idempotent via marker + child-history guards.
- FDB `consume-signal`'s `(drop 4 key)` (`fdb.clj:166`) — correct today: `get-range` receives a `Range` (not the Subspace), so keys come back absolute and `drop 4` yields the right relative key (verified against the clj-fdb source, independently confirmed by the sonnet.md review). Retained only as a robustness note in P10.

**Refuted during cross-review** (in sonnet.md, checked here, not adopted):
- *"Truncated retry-policy in `:activity-scheduled` loses retry behavior on resume"* (`core.cljc:37-39` keeps only `:max-attempts`/`:backoff-ms`) — the truncation is real but **inert**: no code path reads the policy back from the stored event. Executors receive the full policy via suspension data (`core.cljc:49` → `execution.clj:95` → `runtime.clj:105`), and on resume the stub re-derives it from the registry/options. Lossy historical record only; no behavioral impact. (Also note `:retryable-fn` is a function and could never be serialized.)
- *"FDB consume-signal never deletes the signal (wrong clear key)"* — refuted there, confirmed here; see the verified-not-bugs list above.
- *"CLJS with-workflow-engine leaks activity promises / shuts down early"* — refuted: shutdown is chained via `prom/finally` after the body settles; JS has no preemptive cancellation, so the no-op CLJS `shutdown-executor` is truthful (see D12 for the residual oddity).
