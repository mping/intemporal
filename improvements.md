# Source Improvement Pass (current task)

## Context

A read-only review of `src/` (3 parallel explore agents over execution/concurrency, stores/protocol,
and supporting modules) surfaced a backlog of improvements. The multi-pod milestones (A/B/C + C2)
below this section are all **landed**; this pass is about correctness/quality gaps in the existing
code, **verified against the source** (several agent "HIGH" claims were false positives and are
excluded — see "Rejected" at the end). Goal: fix the real correctness bugs, defer/curate the rest.

Two cross-cutting facts that shape the fixes:
- **Cancellation writes `:workflow-failed`, never `:workflow-cancelled`.** `finalize-cancelled`
  (execution.clj:356-368) and the loop-top cancel check (execution.clj:522-536) both persist a
  `:workflow-failed` event, yet `get-workflow-status` reports `:cancelled` from the `cancelled`
  flag. So status and history disagree, and the `:workflow-cancelled` *event* is never written
  (only the observer hook fires). This underlies several findings below.
- **`mark-cancelled` only sets a flag; it doesn't change `status`.** So a cancelled-but-not-yet-
  resumed workflow still satisfies `list-pending`'s `status NOT IN (completed,failed)` and gets
  re-resumed. Resume is self-correcting (the loop-top check finalizes it), so this is **wasteful,
  not corrupting** — but it's a real inefficiency and a consistency smell.

## Tier 1 — Real correctness/consistency bugs (recommended to fix)

1. **Cancelled workflows leak into `list-pending`** (all 3 stores: store.cljc:119,
   jdbc.clj:207, fdb.clj — wf-owner index). A cancelled workflow is re-listed and re-resumed every
   poll until the resume happens to finalize it; on FDB the wf-owner index entry is also never
   cleared on `mark-cancelled` (fdb.clj `maintain-owner-index!` only handles started/terminal),
   so it lingers. **Fix:** exclude cancelled from `list-pending` in all three
   (JDBC `AND cancelled = FALSE`; InMemory add `(not (:cancelled wf))`; FDB clear the wf-owner
   entry in `mark-cancelled`). Net: a cancel becomes terminal-for-scan immediately.

2. **Cancellation is recorded as failure** (execution.clj:356-368, 522-536). Persist a real
   `:workflow-cancelled` event and make `get-workflow-status` derive `:cancelled` from history too
   (so status↔history agree, and a resumed cancel ends `:cancelled` not `:failed`). Touches the
   `terminal-status?`/status-column logic in all 3 stores + the B2 status maintenance in
   save-event(s) (recognise `:workflow-cancelled` as terminal). **This is the highest-value fix**
   and subsumes #1's "self-correcting" wastefulness by giving cancel a true terminal state.

3. **Lossy error round-trip** (error.cljc:115-136). `throwable->map` stringifies the type and
   `map->exception` always rebuilds a generic `ex-info`, so the typed predicates
   (`cancelled-exception?`, and the *never-referenced* `activity-timeout?/failed?/rejected?` —
   which don't even exist as predicates, only constructors) can't classify a deserialized error.
   **Fix:** stamp an `:exception-kind` keyword into the map from the `::*` marker in ex-data, and
   have `map->exception` re-dispatch to the right constructor; add the missing predicates. Scope to
   what's actually consumed — don't gold-plate.

4. **`process-one` strands a workflow on resume failure** (core.cljc:486-492). If
   `resume-workflow` throws (e.g. fn not in registry), the workflow stays owned by this worker,
   never released, never retried, no error persisted. **Fix:** on throw, persist a
   `:workflow-failed` event (so it leaves `list-pending` and is observable) — releasing ownership
   alone would just hot-loop across pods. Pair with #5.

5. **`resolve-workflow` returns nil silently** (workflow_registry.cljc:47-50) → the resume failure
   in #4 is an opaque NPE-ish path. **Fix:** throw a clear "workflow not registered" ex-info with
   the name, so #4's persisted error is meaningful.

## Tier 2 — Robustness (worth doing, lower risk)

6. **start-worker error loop has no backoff** (core.cljc:496-507): a persistent failure
   (DB down) hot-loops at `poll-ms` hammering the store. **Fix:** exponential backoff on
   consecutive failures, reset on success. (Keep it simple — no circuit-breaker/max-retries; a
   worker that gives up permanently is worse than one that keeps trying slowly.)

7. **`stop-worker` doesn't join the thread** (core.cljc:512-515): returns before the in-flight
   resume finishes. **Fix:** `(.join thread timeout)` after interrupt, before `release-owner`.

8. **Observer errors `println` to stdout** (context.cljc:70-76). **Fix:** route through
   `log/` (telemere) at warn. One-liner.

9. **`max-iterations` throws instead of finalizing** (execution.clj:508-510, .cljs:534-536). The
   workflow never reaches a terminal state — it just crashes the resume. **Fix:** `finalize-failed`
   with a typed "replay budget exceeded" error so it's terminal + observable. (This is the §2.5
   foot-gun from improvements.md.)

## Tier 3 — Curate / document, do NOT auto-fix

- **`.clj`/`.cljs` execution duplication** (process-signal/timer, suspension branch): real drift
  risk, but extracting to `.cljc` is a large refactor touching the hottest path — out of scope for
  a quality pass; note it as a tracked follow-up.
- **Observer timestamps captured at replay time, not event time** (observer.cljc, every method):
  real determinism smell, but observers are side-channel (logging/otel), not replay inputs, so it
  doesn't corrupt execution. The event itself already carries a `:timestamp`; document that
  observers should prefer it. Low priority.
- **Anonymous-activity / closure name derivation** (activity.cljc:8-29, workflow_registry.cljc):
  fragile for non-var fns, but the documented API is var-based (`#'my-fn`); add a note/guard rather
  than a redesign.
- **JDBC `intemporal_history (workflow_id, id)` index**: `load-history`'s `ORDER BY id` leans on
  the PK; add the covering index only if a perf need shows up (note in DEVELOPMENT.md).
- **Resource-leak hardening** (pending-timers/pending-asyncs unbounded; CallerRunsPolicy blocking):
  theoretical under pathological workflows; leave as documented caveats.

## Rejected (false positives — verified against source, do not action)

- "`doseq` over nil `:protocols` crashes" (start_workflow.clj:33) — **false**; `(doseq [x nil] …)`
  is a no-op in Clojure (verified by eval).
- "FDB `get-pending-signals` off-by-one key extraction" — the reviewing agent **self-retracted**;
  `(- (count key) 3)` is correct for the `["signals" wf-id sig-name ts uuid]` layout.
- "submit-workflow fire-and-forget loses errors" — by design; the durable workflow record +
  `await-workflow` are the observability path, not the future. Doc-only at most.

## Critical files

`src/intemporal/internal/execution.clj` (+ `.cljs`) — cancellation finalize + max-iterations;
`src/intemporal/core.cljc` — `start-worker` / `process-one`; `src/intemporal/store.cljc`,
`src/intemporal/store/jdbc.clj`, `src/intemporal/store/fdb.clj` — `list-pending` cancelled filter +
status-derivation + FDB index-on-cancel; `src/intemporal/internal/error.cljc` — error round-trip +
predicates; `src/intemporal/internal/workflow_registry.cljc` — resolve-or-throw;
`src/intemporal/internal/context.cljc` — observer log. Reuse existing
`error/throwable->map`/`map->exception`, `finalize-failed`, `terminal-status?`, the B2 status
maintenance, and `intemporal.internal.logging`.

## Verification

- Per fix, add/extend a targeted test and run it on **InMemory + JDBC + FDB** (PG + FDB up via
  `docker compose up -d postgresql foundation`):
  - Tier 1.1/1.2: cancel a workflow, assert it is **absent from `list-pending`**, `get-workflow-
    status` = `:cancelled`, and history ends with `:workflow-cancelled` (new) — across all 3 stores;
    FDB: assert the wf-owner index entry is gone.
  - Tier 1.3: round-trip each typed error through `throwable->map`→`map->exception` and assert the
    predicate still classifies it.
  - Tier 1.4/1.5: a worker resuming an unregistered workflow persists `:workflow-failed` and stops
    re-listing it; `resolve-workflow` throws a named error.
  - Tier 2.9: a workflow exceeding `max-iterations` ends `:failed` (terminal), not an escaped throw.
- Full `bin/kaocha` (in-memory + test + test-cljs) green except the known
  `replay-check-test/test-log-once-workflow` flake.
- `clj-kondo --lint src test` stays clean in all touched namespaces.
- The existing `worker_test`, `timer_recovery_test`, and `bug_2_3_test` (cancellation) guards stay
  green — #2 changes the cancel terminal event, so `bug_2_3` assertions may need updating to expect
  `:workflow-cancelled` / status `:cancelled` consistently.

---

# Fix Plan — intemporal multi-pod / replica-set safety  (LANDED — history below)

## Context

`intemporal` is an event-sourced workflow engine. A design review (`improvements.md`)
plus a new Jepsen-style test suite (`test/intemporal/tests/jepsen/`) confirmed **five
structural bugs**, all reproduced deterministically against InMemory, JDBC (Postgres),
and FDB stores:

| Bug | Symptom | Root cause |
|-----|---------|-----------|
| **2.1** | Signal lost if it arrives between consume-check and callback registration | `process-signal` is non-atomic: `consume → register` |
| **2.3** | `cancel-workflow` never terminates a workflow sleeping on `wait-for-signal` | flag is set but no wake fires; sleeper never re-enters the loop |
| **1.2** | Two writers at the same `seq` silently corrupt history | JDBC `ON CONFLICT DO UPDATE`; FDB UUID-suffixed keys; InMemory blind append |
| **1.1** | Signal sent from another pod never wakes the workflow | wake callbacks live in a process-local atom on the store record |
| **1.3** | A restarted pod never resumes the workflows it was running | no recovery poller, no workflow→fn registry |

The engine is currently **single-process-safe only**. The goal is to make it safe to run
multiple replicas against one store. Per decisions taken:

- **Delivery: three incremental, independently-shippable milestones (A → B → C).**
- **CLJS: parity for the Phase-A correctness fixes only.** `execution`/`runtime`/`start_workflow`
  each have split `.clj`/`.cljs` versions; the distributed primitives (lease, poller) are
  JVM-only by nature (CLJS has no Postgres/FDB and is single-process).
- **Backends for Phase C: Postgres + FDB + InMemory** (the three with tests today).

The existing Jepsen tests currently **assert the buggy behaviour** (each expects `:stuck`).
As each bug is fixed, its test is **inverted into a regression guard** asserting the correct
behaviour — this is the primary acceptance signal for every milestone.

---

## Milestone 1 — Phase A: single-process correctness — ✅ LANDED (fixes 2.1, 2.3)

No schema change. Each fix touches both `.clj` and `.cljs`. Low risk.

**Outcome:** A1 (bug 2.1) and A2 (bug 2.3) implemented and verified on InMemory + JDBC + FDB;
CLJS parity confirmed. A3 was reclassified to Phase C during implementation (see below).
Full `bin/kaocha` (all suites): **test 40/0/0, in-memory 40/0/0, test-cljs 44/0/0** — zero
failures across JVM (incl. live JDBC + FDB integration) and ClojureScript. `bug_2_1`/`bug_2_3`
inverted to assert the fix; `bug_1_1`/`bug_1_2`/`bug_1_3` still assert the (multi-pod) buggy
behaviour, awaiting Phase C.

**Additional fix surfaced during A1 — `start_workflow.clj` wake handshake (JVM only).**
Making signal delivery prompt exposed a pre-existing race in the blocking resume mechanism:
`wake-fn` re-entered `run-workflow-internal` on the callback thread and swapped
`resume-promise-atom` (new promise) before the main loop read it, so a wake firing *during*
suspension setup left the main loop waiting on an undelivered promise (and allowed two threads
to execute one workflow). Rewrote it so `wake-fn` only enqueues a token on a
`LinkedBlockingQueue`; **all** `run-workflow-internal` calls run on the main thread in the
loop. The queue makes the wake edge-safe (a token enqueued before `take` is not lost) and
serializes execution. Confirmed deterministic over repeated runs. CLJS is single-threaded and
does not exhibit the race (44/44 cljs tests green), so `start_workflow.cljs` was left
unchanged.

### A1 — Register-then-consume signal race (bug 2.1)

**Files:** `src/intemporal/internal/execution.clj` (`process-signal`, L249-281;
`process-signal-with-timeout`, L283-322) **and** `src/intemporal/internal/execution.cljs`
(same fns, L249-281 / mirrored).

**Change:** invert the order to **register-first, then check**:

```
register-signal-callback        ; callback is idempotent: it consumes atomically + wakes
if (consume-signal) present:
    unregister-signal-callback  ; we won the inline race
    save :signal-received event ; handle inline
    :continue
else:
    :wait-signal                ; callback stays armed; whoever consumes first wins
```

`consume-signal` is already atomic in all three stores (InMemory `swap!`,
JDBC `FOR UPDATE SKIP LOCKED` + `DELETE`, FDB range-limit-1 + `clear`), so only the inline
path **or** the callback consumes — never both. A benign double-wake is harmless (wake just
replays). Apply the identical reorder to `process-signal-with-timeout`.

**Guard test:** invert `bug_2_1_test.clj` (all 3 stores) to assert the workflow **wakes and
completes** and no signal is left pending. Keep `racing_store.clj` — it now proves the fix
holds under the exact adversarial interleaving.

### A2 — Cancellation wakes a sleeper (bug 2.3)

**Files:** `src/intemporal/protocol.cljc` (add `wake-workflow`), all three stores
(`store.cljc`, `store/jdbc.clj`, `store/fdb.clj`), `src/intemporal/core.cljc`
(`cancel-workflow`, L411-418), and the suspension path in `execution.clj`/`.cljs`.

**Change:**
1. Add `wake-workflow [store workflow-id]` to `IStore`. It fires every wake callback
   registered for that workflow (reuse the existing per-`[workflow-id signal-name]`
   callbacks atom; also register the bare `wake-fn` under a reserved key
   `[workflow-id ::wake]` whenever a workflow suspends — done in `handle-suspension`).
2. `cancel-workflow` calls `mark-cancelled` **then** `wake-workflow`.
3. On wake the workflow re-enters `run-workflow-internal`; `wait-for-signal`
   (core.cljc:246) calls `check-cancelled!` first, which throws
   `workflow-cancelled-exception` → `finalize-cancelled` → terminal
   `:workflow-cancelled` event.

Reuses the existing wake mechanism (`wake-fn` in `start_workflow.clj` L33-49) and
`check-cancelled!` (`context.cljc` L37-40). No new execution machinery.

**Guard test:** invert `bug_2_3_test.clj` (all 3 stores) to assert the workflow reaches a
**terminal** state (future returns; last history event is `workflow-cancelled`) — not just
that the flag is set.

### A3 — Reject concurrent same-seq writes (bug 1.2) — **MOVED TO PHASE C**

**Discovery during implementation (kept here as a record):** an attempt to make
`save-events` throw on any pre-existing concrete `seq` broke the happy path. The engine
**legitimately re-writes the same concrete seq on every replay pass** (async/join completion
events in `process-pending-asyncs-parallel`, execution.clj L148-196), which is exactly why
`ON CONFLICT DO UPDATE` exists. In normal single-process operation there is only **one
execution thread per workflow**, so two *divergent* same-seq writes never occur — they only
arise across pods. Therefore **bug 1.2 has no single-process manifestation and its correct
fix is the Phase C lease**: every `save-events` validates the owner lease in the same
transaction and throws `LeaseLostException` when a pod that lost ownership tries to write.
The stores are left at their original idempotent-upsert behaviour for Phase A.

**Net effect:** Phase A now ships **A1 (bug 2.1) + A2 (bug 2.3)**. The `bug_1_2_test`
guard stays asserting the (multi-pod-only) buggy behaviour until Phase C, where it is
inverted to assert the losing writer sees `LeaseLostException`.

---

## Milestone 2 — Phase B: operational hardening (enables Phase C)

No bug flips here, but B2/B3 are load-bearing for the multi-pod poller.

- **B2 — `status` column.** New Postgres migration adding
  `intemporal_workflows.status` (`running|completed|failed|cancelled`); FDB
  `["state" wf-id "status"]` key; InMemory state key. Maintain it in the
  `finalize-*` paths (`execution.clj`/`.cljs`). Makes `get-workflow-status` O(1) and gives
  the poller a cheap "find runnable" predicate.
- **B3 — Workflow registry (load-bearing).** New `src/intemporal/internal/workflow_registry.cljc`:
  `register-workflow!` maps a name → fn var. Store the **name** in the `:workflow-started`
  event payload (already written in `start_workflow.clj` L53-56). Add an arity
  `resume-workflow [engine workflow-id]` (core.cljc:366) that resolves both fn and args from
  the first history event — removing today's requirement that the caller supply them.
- **B4 — Async `submit-workflow` (optional this milestone).** `submit-workflow` writes
  `:workflow-started` and returns `{:workflow-id …}` immediately; `start-workflow` becomes
  `submit` + `await`. Unblocks the "HTTP returns an id" pattern and is the entry the worker
  loop uses in Phase C.

---

## Milestone 3 (REVISED) — Ownership-based recovery, NO leases — ✅ LANDED

**Outcome:** the lease model was fully removed and replaced by the ablauf-style ownership model.
All bug guards pass on InMemory + JDBC + FDB. Full `bin/kaocha`: **in-memory 47/0/0,
test-cljs 27/0/0, test 67** (sole failure = the documented pre-existing `test-log-once-workflow`
flake). `clj-kondo --lint src test`: **0 errors, 5 warnings** (down from 3/37), every warning in a
pre-existing file untouched by this milestone (unused `is` refer in two store/bench fdb tests;
`promesa.core` / `with-trace-logging` in three cljs tests, used via macroexpansion clj-kondo can't
see). All namespaces changed in this work lint clean.

- **Removed:** `internal/lease.cljc`, `lease-lost-exception`/`lease-lost?`, the 6 lease+runnable
  `IStore` methods, all `save-events` lease validation, the `intemporal_runnable` table, and the
  `add-runnable` calls in `add-signal`/`mark-cancelled` (the in-process callback fire stays as the
  embedded single-process wake).
- **Added:** migration `20260531000002-ownership` (adds the `owner` column + index; the prior
  lease/runnable WIP migrations were collapsed away so no lease/runnable SQL exists anywhere);
  3 `IStore` methods `claim-owner` / `list-pending` /
  `release-owner` on InMemory + JDBC + FDB (FDB keeps a `["wf-owner" owner wf-id]` index, kept in
  sync in `save-event(s)` via `maintain-owner-index!`, moved on claim/release). `start-worker`
  reworked to the scan model: each poll `list-pending` → `claim-owner` → `resume-workflow [engine
  wf-id]`, sequentially on the poll thread; stop calls `release-owner`. Default `:poll-ms` 500,
  `:batch-size` 100, stable `:owner-id` expected in production.
- **Why it fixes the bugs:** 1.2 — `claim-owner` (`UPDATE … WHERE owner IS NULL OR owner=me`) is
  the atomic exclusivity gate, and the worker runs owned workflows one at a time → no concurrent
  writers. 1.1 — the persisted signal is picked up by the owning/any pod's next scan; replay
  consumes it. 1.3 — the scan *is* recovery: a restarted pod with the same owner-id re-lists and
  resumes its own non-terminal workflows. No time-based lease anywhere.
- **Tests reworked:** `worker_test` (recovery + claim-exclusivity, 3 stores); `bug_1_2` asserts
  claim exclusivity; `bug_1_1`/`bug_1_3` use the scan worker unchanged; `racing_store` delegates
  the 3 new methods. Shared-DB assertions are wid-scoped (membership, not global emptiness).

### Original revised design (for reference)


### Context

The lease-based Phase C (below, "LANDED") is being **replaced**. The user does not want
time-based leases. Instead: mark every workflow with an **ownership column**, and on pod start
(and on every poll) pick up all non-terminal workflows for this owner — the ablauf
`job_owner` / `release-tasks!` model. Exclusivity comes from atomically stamping the owner
(`UPDATE … WHERE owner IS NULL`), not from a lease with expiry. Decisions taken:

- **Pure ownership scan, no runnable markers.** Drop the `intemporal_runnable` table entirely.
  A worker periodically lists and resumes every non-terminal workflow it owns-or-null; replay
  consumes any pending signal and observes cancellation. (Accepted trade-off: O(N) re-resume per
  poll even for correctly-waiting workflows — mitigated by a coarse default poll interval.)
- **Stable per-pod owner-id; workflows start unowned.** `start-workflow` leaves `owner = NULL`;
  a worker stamps `owner = self` on claim. A crashed pod reclaims its own work when it restarts
  with the **same** owner-id (so production must pass a stable `:owner-id`, e.g. StatefulSet
  ordinal / config). This mirrors ablauf exactly.

Why this fixes the bugs (no lease, no save-events validation):
- **1.2 (concurrent execution):** `claim-owner` = `UPDATE … SET owner=? WHERE owner IS NULL`
  is atomic; only one pod claims a workflow, and the worker resumes claimed workflows
  **sequentially on its poll thread**, so neither cross-pod nor intra-pod double-execution occurs.
- **1.1 (cross-pod signal):** the signal is persisted; the owning (or any, if unowned) pod's next
  scan resumes the workflow and replay consumes the signal. A dead owner's workflows
  (`owner = dead-id`) are skipped by others (`owner=me OR owner IS NULL`) until that owner restarts.
- **1.3 (recovery):** the worker's scan **is** the recovery — its first poll lists `owner=me`
  non-terminal workflows (its orphans from a prior lifetime) and resumes them. intemporal replays
  from history (re-running uncached activities), so no ablauf-style task-status bookkeeping is
  needed.

### Remove (all lease + marker machinery)

- Delete `src/intemporal/internal/lease.cljc` (the `*owner*` dynamic var) and the **save-events
  lease validation** in all three stores (`store.cljc`, `store/jdbc.clj`, `store/fdb.clj`).
- Remove `lease-lost-exception` / `lease-lost?` from `src/intemporal/internal/error.cljc`.
- Remove `IStore` methods `claim-workflow`, `renew-lease`, `release-lease`, `add-runnable`,
  `claim-runnable`, `delete-runnable` (protocol + all stores + `racing_store.clj`).
- Remove the `add-runnable` calls from `add-signal` / `mark-cancelled` (keep the in-process
  callback fire — it is the embedded single-process wake path; worker mode uses the scan).
- New migration drops `intemporal_runnable` (+ index) and `intemporal_workflows.lease_until`.

### Add (ownership)

- **Schema** — new `resources/migrations/postgres/20260531000003-ownership.up.sql`:
  `RENAME COLUMN owner_id TO owner`; `DROP COLUMN lease_until`; `DROP TABLE intemporal_runnable`
  (drop its index first); `CREATE INDEX … ON intemporal_workflows (owner)`. (`status` from B2 is
  reused to detect non-terminal.) `.down` reverses it. Previous migration `…-multipod` stays
  (history); this one reverses its lease/runnable parts.
- **`IStore` (3 new methods, replacing the 6 removed):**
  - `claim-owner [store workflow-id owner-id]` → boolean. Atomic
    `UPDATE intemporal_workflows SET owner=? WHERE id=? AND (owner IS NULL OR owner=?)`; true iff
    now owned by `owner-id`. (ablauf `own!`.)
  - `list-pending [store owner-id limit]` → vector of workflow-ids that are **non-terminal** and
    `(owner = owner-id OR owner IS NULL)`. Used for both the live poll and startup recovery (same
    query). PG: `WHERE status NOT IN ('completed','failed') AND (owner=? OR owner IS NULL) LIMIT ?`.
  - `release-owner [store owner-id]` → `UPDATE … SET owner=NULL WHERE owner=? AND status NOT IN
    ('completed','failed')` (clean-shutdown rebalance).
- **Store impls.** InMemory: atom CAS / filter (trivial). JDBC: the three SQL statements above
  (`claim-owner` uses `RETURNING`/update-count for the boolean). FDB: needs an **owner index**
  subspace `["wf-owner" <owner-or-""> <wf-id>]` since it can't SQL-scan — add a wf-id on first
  `:workflow-started` save (owner ""), move it on `claim-owner` / `release-owner`, remove it on a
  terminal event. `list-pending` scans `["wf-owner" owner-id]` + `["wf-owner" ""]`.
- **`start-worker`** (rework in `src/intemporal/core.cljc`, drop the `lease`/runnable/`claim-ms`
  bits): loop → `list-pending store owner-id batch` → for each, `claim-owner`; if true,
  `resume-workflow [engine wf-id]` (sequentially, on the poll thread); sleep `poll-ms` when empty.
  Stop fn calls `release-owner` then stops the thread. Recovery needs no special step — the first
  scan covers it. Default `:poll-ms` ~500–1000, `:owner-id` random (production passes a stable id).

### Critical files

`src/intemporal/protocol.cljc`, `src/intemporal/store.cljc`, `src/intemporal/store/jdbc.clj`,
`src/intemporal/store/fdb.clj`, `src/intemporal/core.cljc` (`start-worker`),
`src/intemporal/internal/error.cljc`; delete `src/intemporal/internal/lease.cljc`;
new migration under `resources/migrations/postgres/`; tests
`test/intemporal/tests/worker_test.clj`, `test/intemporal/tests/jepsen/racing_store.clj`,
`test/intemporal/tests/jepsen/bug_1_1_test.clj`, `bug_1_2_test.clj`, `bug_1_3_test.clj`.

### Tests (rework to the ownership model)

- `worker_test`: (a) **recovery** — start+suspend+crash, then a worker with the same/another
  owner-id resumes via the scan to completion (InMemory shared atom + JDBC + FDB); (b)
  **claim exclusivity** — `claim-owner` returns true for the first owner, false for the second
  (this replaces the lease-rejects-stale-writer test and is the bug-1.2 proof).
- `bug_1_1` (cross-instance signal): signal via a second store instance + a worker → completion.
- `bug_1_3` (recovery): crash + worker scan → completion.
- `bug_1_2` (concurrency): two `claim-owner` attempts on one unowned workflow → exactly one true;
  assert the loser cannot resume.
- `bug_2_1` / `bug_2_3` (Phase A) unchanged.
- `racing_store.clj`: delegate the 3 new methods, drop the 6 removed.

### Verification

1. `bin/kaocha` (in-memory + test + test-cljs) green except the documented pre-existing
   `replay-check-test/test-log-once-workflow` flake. Confirm the reworked `worker_test` and
   `bug_1_1/1_2/1_3` guards pass on InMemory + JDBC + FDB (Postgres + FoundationDB up via
   `docker compose up -d postgresql foundation`; migration auto-applies on store creation).
2. **clj-kondo** on both source and tests: `clj-kondo --lint src test` — fix all warnings/errors
   it reports in the touched namespaces (and confirm a clean run overall).
3. Sanity: a workflow started (unowned) and signalled, with a worker running under a stable
   owner-id, completes; after a simulated crash, a worker restarted with the same owner-id
   resumes it.

---

## Milestone 3 — Phase C: multi-pod safety — ✅ LANDED (lease impl — SUPERSEDED by the ownership model above) (fixes 1.1, 1.2, 1.3)

**Outcome:** C1 + C3 + C4 + C5 implemented across InMemory + JDBC + FDB; all five bug guards
now assert fixed behaviour. Full `bin/kaocha`: **test-cljs 27/0/0, in-memory 47/0/0, test 67**
(sole failure = the documented pre-existing run-once flake). CLJS green confirms the cljc store
changes are cross-platform.

- **C1 lease** (`claim-workflow`/`renew-lease`/`release-lease` on `IStore`): Postgres
  `owner_id`+`lease_until` columns (migration `…-multipod`); FDB `["lease" id]` serializable RMW;
  InMemory CAS. **Every `save-events` validates the lease** when `intemporal.internal.lease/*owner*`
  is bound (set by the worker) and throws `lease-lost-exception` on mismatch — closes bug 1.2.
  FDB wraps body exceptions in `CompletionException`, so FDB `save-events` unwraps to surface the
  clean `ExceptionInfo`.
- **C3 runnable markers** (`add-runnable`/`claim-runnable`/`delete-runnable`): Postgres
  `intemporal_runnable` (PK collapses dups, `FOR UPDATE SKIP LOCKED` claim); FDB `["runnable"]`
  subspace; InMemory map. `add-signal` and `mark-cancelled` write a marker — the durable,
  cross-pod wake path that closes bug 1.1.
- **C4 worker** (`intemporal.core/start-worker`, JVM-only): polls `claim-runnable` → `claim-workflow`
  (lease) → `resume-workflow [engine wf-id]` (B3 registry) → `delete-runnable` → `release-lease`;
  catches `lease-lost?` to skip. Closes bug 1.3.
- **C5 — deviation from plan (documented):** the plan said make in-process callbacks no-ops. That
  would break the **embedded single-process** mode (blocking `start-workflow` with no worker, which
  the store suite and README's "safe today" rely on). Instead callbacks are **kept** as the
  in-process fast-path and the durable marker is added alongside as the cross-pod path. Both
  coexist; no behavioural regression.
- **Tests:** `worker_test` (recovery + lease, 3 stores) and the flipped `bug_1_1`/`bug_1_2`/`bug_1_3`
  guards (3 stores each). InMemory models a shared store by sharing one state atom across instances.

## Milestone 4 — C2: persistent / cross-pod timers — ✅ LANDED

**Outcome:** timers now survive pod death. Full `bin/kaocha`: **in-memory 50/0/0,
test-cljs 27/0/0, test 76** (sole failure = the pre-existing `test-log-once-workflow` flake).
`clj-kondo --lint src test`: **0 errors, 5 warnings** (unchanged pre-existing baseline; every
touched namespace clean). New `timer_recovery_test` passes on InMemory + JDBC + FDB (24 assertions
across determinism / recovery / wake_at filtering). Migration reverses + re-applies cleanly.

- **Determinism fix** ([core.cljc `sleep`](src/intemporal/core.cljc#L283), cljc): reads back the
  persisted `:timer-scheduled` `fire-at` on replay instead of recomputing `now+ms` — no deadline
  drift, crash-resumed sleeps fire on their original schedule.
- **Idempotent `schedule-timer`** (runtime.clj + runtime.cljs): a re-resumed timer workflow keeps
  its already-armed future/timeout instead of arming a duplicate.
- **`wake_at` filter**: new `IStore/set-wake-at`; `list-pending` adds `(wake_at IS NULL OR
  wake_at <= now())`. Migration `20260531000003-wake-at` (column + partial index). JDBC =
  `to_timestamp` UPDATE + WHERE clause; InMemory = state key + filter; FDB = wake-at carried in the
  `["wf-owner" bucket wf-id]` index **value** (preserved across claim/release bucket moves),
  scanned with a due? predicate. `set-wake-at` is called at the `:suspended` branch
  (execution.clj + .cljs): `:fire-at` for `:wait-timer`, `:deadline` for `:wait-signal-timeout`,
  nil otherwise (always eligible).
- **Tests:** new `test/intemporal/tests/timer_recovery_test.clj` (3 properties × 3 stores);
  `racing_store` delegates `set-wake-at`. Existing `timer_test` unaffected.

### Original design (for reference)

### Context

A workflow that calls `sleep` (or `wait-for-signal` with a timeout) suspends with a timer. Today
that timer lives **only** in the in-process `DefaultScheduler.pending-timers` atom
([runtime.clj:13](src/intemporal/internal/runtime.clj#L13)), so a pod death loses it: the
workflow is durably suspended but nothing re-arms the timer on another pod. Signal-waiters
already recover (the ownership scan re-resumes every non-terminal workflow each poll, and replay
consumes the persisted signal) — timers are the one suspension type that doesn't, purely because
the fire time isn't durable and the scan would re-resume long sleepers wastefully.

Two concrete defects to fix, plus one efficiency addition (per decisions taken):

1. **Latent determinism bug in `sleep`** ([core.cljc:283-302](src/intemporal/core.cljc#L283)):
   it recomputes `fire-at = (now + ms)` on **every** replay and never reads back the
   `:timer-scheduled` event it persists. So each resume pushes the deadline later (drift), and a
   crash-resumed sleep would never reliably fire. Must read the persisted `fire-at` back.
2. **Non-idempotent `schedule-timer`**: under the scan, a suspended timer workflow gets re-resumed
   every poll → `process-timer` calls `schedule-timer` again → a second `ScheduledFuture` for the
   same `[wf,seq]`, leaking futures and risking duplicate `:timer-fired`. Make it idempotent.
3. **`wake_at` filter (chosen)**: re-resuming a 30-day sleeper every 500ms (replaying full history)
   is wasteful. Add an earliest-wake timestamp per workflow; `list-pending` skips workflows whose
   `wake_at` is in the future. This also quiets polling for *all* waiters.

### Changes

- **Determinism fix** ([core.cljc `sleep`](src/intemporal/core.cljc#L283), cljc — shared by JVM +
  CLJS): on entry, if a `:timer-scheduled` event already exists for this seq, reuse its `fire-at`
  (and skip if `:timer-fired` exists, as today); else compute `now+ms` and persist. Add
  `find-event store wf-id :timer-scheduled seq-num` lookup alongside the existing `:timer-fired`
  one.
- **Idempotent scheduler** ([runtime.clj `schedule-timer`](src/intemporal/internal/runtime.clj#L16)
  + runtime.cljs): if `[wf,seq]` already in `pending-timers`, return the existing key without
  scheduling a second future. (process-timer/​.cljs unchanged.)
- **`wake_at` durable filter — new IStore op `set-wake-at [store wf-id wake-at-ms|nil]`** and a
  `list-pending` predicate change:
  - **Migration** `20260531000003-wake-at.up/down.sql`: `ADD COLUMN wake_at TIMESTAMPTZ` on
    `intemporal_workflows` + partial index for the due-scan.
  - **JDBC**: `set-wake-at` = `UPDATE … SET wake_at = to_timestamp(?/1000)` (or NULL);
    `list-pending` adds `AND (wake_at IS NULL OR wake_at <= now())`.
  - **InMemory**: `wake-at` state key; `list-pending` filter `(or (nil? wa) (<= wa now))`.
  - **FDB**: store `wake-at` (ms, or 0 = always-eligible) as the **value** of the existing
    `["wf-owner" bucket wf-id]` index entry instead of `true`; `list-pending` keeps entries with
    `wake-at <= now`. `maintain-owner-index!`, `claim-owner`, `release-owner` must carry `wake-at`
    through when they move the entry between buckets.
- **Set `wake_at` at suspension** ([execution.clj:558-578](src/intemporal/internal/execution.clj#L558)
  + execution.cljs:585-605, right where `register-wake-callback` already fires): from
  `exec-result`’s `:suspension-data`, call `set-wake-at` with `:fire-at` for `:wait-timer` /
  `:wait-signal-timeout`, and **nil** for `:wait-signal` / `:wait-async` (always eligible — they
  wait on external events, not the clock). Resume/terminal paths clear it implicitly (a re-suspend
  re-sets it; `release-owner`/terminal drop the row from scans).
- **RacingStore** ([test/…/jepsen/racing_store.clj](test/intemporal/tests/jepsen/racing_store.clj)):
  delegate the new `set-wake-at`.

### Tests

- **Determinism** (strengthen, per decision): extend `timer_test` — resume a sleeping workflow
  twice and assert the persisted `:timer-scheduled` `fire-at` is **identical** across resumes (no
  drift). Today `test-timer-replay` only checks `:result` equality.
- **Persistent-timer recovery** (new, InMemory + JDBC + FDB, in `worker_test` or a new
  `timer_recovery_test`): start a workflow that `sleep`s, crash the engine before it fires, start a
  worker on a fresh engine with the same store → the timer fires and the workflow completes.
- **wake_at filtering** (new): a workflow sleeping far in the future is **not** returned by
  `list-pending` until `wake_at <= now`; a due/expired one is.

### Verification

`bin/kaocha` (in-memory + test + test-cljs) green except the known `test-log-once-workflow` flake;
the three new/extended timer tests pass on InMemory + JDBC + FDB (PG + FDB up via
`docker compose up -d postgresql foundation`; migration auto-applies on store creation).
`clj-kondo --lint src test` stays clean in all touched namespaces.

---

**C2 (persistent timers) — original DEFERRED note (now superseded by Milestone 4 above).** No bug guard covers timer-across-pod-death,
and it is a substantial separate addition (durable timers table/subspace + a due-timer poller that
writes runnable markers). Timers currently fire via the in-process scheduler, so a workflow sleeping
on `sleep` whose pod dies will not wake on another pod until C2 lands. Tracked as the remaining
Phase C gap.

(Original Phase C design notes follow.)

JVM-only. Opt-in per store. Postgres + FDB + InMemory. This is the structural milestone.

### C1 — Lease / ownership
Add `claim-workflow` / `renew-lease` / `release-lease` to `IStore`.
- **Postgres:** migration adds `owner_id TEXT, lease_until TIMESTAMPTZ` to
  `intemporal_workflows`. `claim` = `UPDATE … WHERE id=? AND (owner_id IS NULL OR owner_id=?
  OR lease_until < now())` returning affected-rows. **Every `save-events` validates the lease
  in the same txn** and throws `LeaseLostException` on mismatch.
- **FDB:** `["lease" wf-id] → {owner-id, lease-until}`, claim via serializable read-modify-write
  (FDB rejects conflicting commits natively).
- **InMemory:** `{owner-id, lease-until}` per workflow; `claim` is an atomic `swap!` CAS.

### C2 — Persistent timers
Today timers live only in `DefaultScheduler.pending-timers` (runtime.clj) and die with the
pod. Add a durable timers table/subspace `(workflow_id, seq, fire_at, claimed_until)` plus a
poller that finds due timers and writes a runnable marker. In-memory `ScheduledFuture`s become
a latency optimisation, not the source of truth.

### C3 — Runnable markers (replaces in-process wake; closes 1.1)
New `intemporal_runnable (workflow_id PK, reason, enqueued_at, claimed_until)` table / FDB
`["runnable"]` subspace. `add-signal`, timer-fire, and `cancel-workflow` all write a marker
(`INSERT … ON CONFLICT DO UPDATE`). This makes the wake **durable and cross-pod**: the signal
no longer depends on a process-local callback.

### C4 — Worker loop (closes 1.3)
New `src/intemporal/internal/worker.clj` + `start-worker` API. Loop:
`SELECT workflow_id FROM intemporal_runnable WHERE claimed_until < now() FOR UPDATE SKIP
LOCKED LIMIT n` → `claim-workflow` (C1) → `resume-workflow [engine wf-id]` (B3 registry) →
`DELETE` marker → `release-lease`. Postgres may add `LISTEN/NOTIFY` for sub-second wake; the
poll interval is the safety net. The Jepsen harness already under `test/intemporal/jepsen/`
(forked-JVM workers, nemesis, checkers) is the integration vehicle.

### C5 — Retire in-process callbacks
Once C3/C4 land, `register-signal-callback`/`unregister-signal-callback` become no-ops (kept
one release for protocol compatibility). All wake goes through runnable markers. This is what
finally closes the cross-pod path in **bug 1.1**.

**Guard tests:** invert `bug_1_1_test.clj` and `bug_1_3_test.clj` (JDBC + FDB) to assert that
a signal/marker written by a *second* store instance, plus a running worker, **resumes the
workflow to completion**. Extend the forked-JVM Jepsen run (`intemporal.jepsen.runner`) with a
lease-expiry-recovery scenario: kill a worker mid-workflow, assert another picks it up.

---

## CLJS parity scope

| Source | Phase A | Phase C |
|--------|---------|---------|
| `execution.clj` / `execution.cljs` | **both** (A1, A2) | `.clj` only |
| `runtime.clj` / `runtime.cljs` | both, only if timer paths touched | `.clj` only |
| `start_workflow.clj` / `.cljs` | both, only if wake path touched | `.clj` only |
| `core.cljc`, `protocol.cljc`, `store.cljc`, `context.cljc`, `error.cljc` | cross-platform (write once) | new ops are no-ops/in-memory on CLJS |
| `store/jdbc.clj`, `store/fdb.clj` | n/a | JVM-only |

CLJS gets the A1/A2/A3 correctness fixes (InMemory only) and treats all Phase-C IStore
additions as in-memory/no-op — CLJS is inherently single-process.

---

## Critical files

- **Execution / wake:** `src/intemporal/internal/execution.clj` + `.cljs`
  (`process-signal`, `process-signal-with-timeout`, `handle-suspension`,
  `run-workflow-internal`); `src/intemporal/internal/fns/start_workflow.clj` + `.cljs`
  (`wake-fn`, blocking loop).
- **Public API:** `src/intemporal/core.cljc` (`cancel-workflow` L411, `resume-workflow` L366,
  new `submit-workflow`/`start-worker`).
- **Protocol:** `src/intemporal/protocol.cljc` (add `wake-workflow`, lease ops, runnable ops).
- **Stores:** `src/intemporal/store.cljc`, `src/intemporal/store/jdbc.clj`,
  `src/intemporal/store/fdb.clj`.
- **Errors:** `src/intemporal/internal/error.cljc` (add `ConcurrentWriteException`,
  `LeaseLostException`).
- **New:** `src/intemporal/internal/workflow_registry.cljc` (B3),
  `src/intemporal/internal/worker.clj` (C4).
- **Schema:** new migrations under `resources/migrations/postgres/` (status; owner/lease;
  runnable; timers).
- **Context (reuse, do not change semantics):** `src/intemporal/internal/context.cljc`
  (`check-cancelled!` L37-40, `next-seq!` L42-47).

---

## Verification

**Per-milestone acceptance = the inverted Jepsen guard tests pass on all 3 stores.**

1. **Phase A.** Invert `bug_2_1_test`, `bug_2_3_test`, `bug_1_2_test`. Run:
   - In-memory: `bin/kaocha :in-memory --focus intemporal.tests.jepsen.bug-2-1-test …`
   - JDBC + FDB (live): `DATABASE_URL=… bin/kaocha :test --focus …`
   - Regression: full `bin/kaocha` (JVM + CLJS) and the existing crash tests
     (`signal_wait_crash_test`, `future_cancel_test`) stay green.
2. **Phase B.** New unit tests: registry resolve-on-resume; `get-workflow-status` reads the
   `status` column (no history scan); `submit-workflow` returns an id and the workflow still
   completes.
3. **Phase C.** Invert `bug_1_1_test` and `bug_1_3_test` (JDBC + FDB) with a `start-worker`
   running. Then the forked-JVM chaos run:
   `clojure -X:dev:jdbc:jepsen intemporal.jepsen.runner/run :workers 4 :duration 120`
   — kill workers mid-flight; assert every submitted workflow reaches a terminal state, no
   double non-idempotent execution, no orphaned signals/timers.
4. **Negative control.** Confirm tests are not vacuous: temporarily revert one fix (e.g.
   restore `ON CONFLICT DO UPDATE`) and confirm the corresponding guard test fails.

`dev/verify_bugs.clj` (the standalone 5-bug reproducer) should flip from "all FAIL" to "all
PASS" as milestones land — a quick end-to-end smoke check across both stores.
