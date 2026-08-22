# fable-fsm.md — Intemporal as a Pure FSM

Implementation plan for rewriting the intemporal execution core as a pure FSM.

## Context

Intemporal is a durable workflow engine (CLJ + CLJS). Today execution works by
deterministic replay: polling **workers** claim runnable workflows
(`claim-runnable!`), fully re-execute the workflow fn against a history snapshot,
and park via a `wake_version` CAS (`park-workflow!`). The engine decision logic is
spread across two ~65%-duplicated platform files (`execution.clj`/`.cljs`), every
replay pass reloads the entire history (N+1 full loads for N suspensions), and
`start-workflow` lazily spawns a second internal worker (`ensure-worker!`).

Goal: a **pure FSM** engine — a shared `.cljc` transition kernel
`(decision-input) → {events-to-commit, next-run-state, next-run-at, effects}` with
side effects at the edges and a single atomic commit verb — while keeping the
public workflow API identical.

### Requirements
- Public workflow API unchanged: `stub`, `stub-protocol`, `defn-workflow`,
  `async`/`join`/`join-all`/`join-any`, `wait-for-signal(-with-timeout)`, `sleep`,
  `run-child-workflow`/`-async`/`-detached` + parent-close policies, retry
  policies, sagas, `suspension?`, `send-signal`, `cancel-workflow`,
  `submit/start/await/resume-workflow`, history/result reads. Also export
  `make-retry-policy` from `intemporal.core` (README documents it; it's internal).
- Store protocol may break; must support spec validation (CheckedStore) and
  **event caching via a `CachedStore` decorator**.
- Engine lifecycle: `start-engine` / `shutdown-engine`; **no separate worker**.
- **Workflows have owners**: `start-engine` requires a stable `:owner-id`.
- Preserve/migrate as many tests as possible.

### Decisions made (with user)
1. Ownership: stable `:owner-id`, no fenced leases (schema stays lease-friendly).
2. Fresh design on `improvements`, informed by the `kernel-outbox` branch ideas
   (snapshot read + single `commit-transition!` CAS) — no outbox, no leases.
3. Event caching = store decorator, not incremental protocol reads.

### Current-tree facts the plan builds on
- `start-worker` is already private (`start-worker-loop`); `make-workflow-engine`
  starts one engine-owned loop. Phase 6 of `cleanup.md` is half done — what remains
  is the rename to `start-engine`, required `:owner-id`, dropping `:worker?`.
- Observer already collapsed to `(on-event [observer event])` with constructors in
  `observer.cljc` (in-flight, uncommitted).
- Both execution files already produce uniform `{:op :continue}` /
  `{:op :park :reason :events :next-run-at}` decisions — a head start for the kernel.
- FDB `load-history` sorts by `:seq`, NOT committed append order — it needs an
  order index under the new contract.
- The `kernel-outbox` branch's `execution/kernel.cljc` is a near-complete pure
  kernel; borrow its shapes/decomposition, strip `:enqueue-outbox`, `:lease-token`,
  `:revision`, `:spawn-workflows`; the **shipping event shapes win** where they differ.

---

## 1. New store protocol

**One protocol, keeping the name `intemporal.protocol/IStore`** (a persistence/
scheduling split doubles decorator + backend boilerplate for no isolation benefit;
removed methods fail loudly at compile time anyway). Pure scheduling predicates
(`runnable-or-due?`, wake/normalize transitions, park-result calculation) move to a
shared cljc ns `intemporal.internal.scheduling` used by all backends (cleanup 5d).

### 1.1 Methods (17)

```clojure
(defprotocol IStore
  ;; ── creation ──
  (create-workflow! [store creation])
    ;; creation = {:workflow-id id
    ;;             :started-event {…full :workflow-started event, :seq -1…}
    ;;             :parent {:parent-id p :parent-seq n :policy kw} | nil}
    ;; Atomic: insert row if absent (RUNNABLE, wake-version 0), append started
    ;; event, record parent link. → :created | :exists (nothing overwritten).
    ;; A row auto-created by add-signal!/request-cancel! with no history counts
    ;; as absent. (sol.md P0-4 + cleanup 5e create-and-link in one verb.)

  ;; ── reads ──
  (load-snapshot [store workflow-id])
    ;; ONE consistent read (single tx / single deref):
    ;; {:workflow-id :status :run-state :next-run-at :wake-version
    ;;  :cancel-requested? :owner :parent
    ;;  :history [events, committed append order]
    ;;  :signals {name [envelope …]}}          ;; FIFO per name
    ;; nil when the workflow does not exist.
  (get-scheduling-state [store workflow-id])
    ;; Snapshot minus :history/:signals — cheap single-row read. Exists so
    ;; CachedStore can validate with one row read.
  (find-event [store workflow-id event-type seq-num])   ;; live point lookup, unchanged
  (get-workflow-status [store workflow-id])             ;; unchanged
  (cancel-requested?  [store workflow-id])              ;; rename of is-cancelled?; MUST stay a cheap live read
  (get-pending-signals [store workflow-id])             ;; unchanged
  (list-children [store parent-id])                     ;; unchanged

  ;; ── wakes / inputs (atomic, callable by any process) ──
  (add-signal! [store workflow-id signal-name envelope])
    ;; FIFO enqueue (store-ordered id: SQL autoincrement / FDB versionstamp)
    ;; + durable wake, one tx.
  (request-cancel! [store workflow-id])   ;; rename of mark-cancelled: flag + wake, one tx
  (wake! [store workflow-id])             ;; rename of wake-workflow
  (append-and-wake! [store workflow-id events])  ;; rename of save-events-and-wake!

  ;; ── THE commit verb ──
  (commit-transition! [store workflow-id transition])   ;; §1.2

  ;; ── claims / stable owners ──
  (claim-runnable!  [store owner-id limit now-ms])  ;; unchanged contract
  (requeue-running! [store workflow-id])            ;; unchanged
  (recover-running! [store owner-id])               ;; unchanged
  (release-owner!   [store owner-id]))              ;; rename of release-owner
```

### 1.2 `commit-transition!` contract

```clojure
transition =
{:expected-wake-version n | nil   ;; nil ⇒ unconditional (mid-drive append);
                                  ;; n   ⇒ CAS, used for :waiting commits
 :events           [event …]      ;; appended atomically, committed order preserved
 :consume-signals  [{:signal-name s :signal-id id} …]  ;; removed atomically with append
 :next-state       :running | :waiting | :terminal
 :next-run-at      ms | nil       ;; only with :waiting
 :terminal-status  kw | nil       ;; required iff :terminal
 :parent-wake      {:parent-id p :events [event …]} | nil}  ;; only with :terminal

result = {:commit-status :committed | :wake-raced | :not-running | :terminal
          :wake-version  current}
```

- **`:running`** (`:expected-wake-version` nil): append + consume signals; run-state
  untouched. Replaces every mid-drive `save-event(s)` (durable `:activity-scheduled`
  batches, `:activity-attempt-failed` records, outcome events). Never `:wake-raced`.
  Returns `:terminal` (appends nothing) if already terminal. Terminal event types
  forbidden here (spec-enforced).
- **`:waiting`**: exact `park-workflow!` semantics, verbatim (the heavily tested
  wake/park FSM): CAS on `wake_version`; mismatch → `:wake-raced`, **nothing
  appended**; `:not-running` / `:terminal` as today. Success → append, WAITING +
  `next_run_at` (nil = indefinite, costs nothing to poll).
- **`:terminal`**: CAS on *status non-terminal* (finalization wins against
  concurrent wakes, as today). Atomically: append `:events` (incl. the terminal
  event, seq computed by the kernel), set status/`run_state = TERMINAL`, and apply
  `:parent-wake` — append + wake on the **parent** row in the *same* tx (same
  `swap!` / SQL tx / FDB tx). Already terminal → `:terminal`, idempotent no-op.

`:consume-signals` pops the identified envelope from that name's FIFO head; a head
mismatch throws — under the single-owner invariant the drive is the only consumer.

**P0-3:** parent notification (the `:child-workflow-completed/-failed` +
`:async-completed/-failed` alias at `parent-seq`) moves **inside** the child's
terminal commit via `:parent-wake` — the "terminal child whose parent never wakes"
crash window closes. Kernel constructs the events (backends stay shape-agnostic).
**Close-policy enforcement stays a post-commit effect** (recursive; whole-subtree
atomicity needs an outbox, which is out of scope). It remains idempotent, re-runs
from `cancel-workflow`, and the residual window is documented in `architecture.md`.

### 1.3 Fate of every old `IStore` method (20)

| Old method | Fate |
|---|---|
| `load-history` | Absorbed into `load-snapshot` (`:history`); convenience `(intemporal.store/history store id)` for public reads |
| `save-event` | Dropped (cleanup 5c); test seeding via `create-workflow!`/helper |
| `save-events` | Absorbed into `commit-transition!` `:running` |
| `save-events-and-wake!` | Kept, renamed `append-and-wake!` |
| `find-event` | Kept unchanged |
| `max-seq` | Dropped — terminal seq computed in kernel as `(inc (max-seq-of snapshot ∪ pending))`; same value, same benign TOCTOU (upsert key makes collisions coexist) |
| `get-pending-signals` | Kept (also in snapshot `:signals`) |
| `add-signal` | Kept, renamed `add-signal!`; FIFO id store-assigned & durable |
| `consume-signal` | Absorbed into `:consume-signals` — closes the consume-then-append crash window |
| `wake-workflow` | Kept, renamed `wake!` |
| `is-cancelled?` | Kept, renamed `cancel-requested?` (live read preserved) |
| `mark-cancelled` | Kept, renamed `request-cancel!` |
| `get-workflow-status` | Kept |
| `claim-runnable!` | Kept unchanged |
| `park-workflow!` | Absorbed into `commit-transition!` `:waiting` (semantics verbatim) |
| `requeue-running!` | Kept |
| `recover-running!` | Kept (stable-owner recovery) |
| `release-owner` | Kept, renamed `release-owner!` |
| `link-child!` | Absorbed into `create-workflow!` `:parent` |
| `list-children` | Kept |

New: `create-workflow!`, `load-snapshot`, `get-scheduling-state`, `commit-transition!`.

---

## 2. Decorators

### 2.1 `CheckedStore` (rewrite over new protocol)

`src/intemporal/store/checked.cljc` re-implemented method-for-method. Keep: `wrap`
with `:auto`/`true`/`false` policy, `unwrap`, `AutoCloseable` delegation. New specs
in `spec.cljc`:
- `::spec/transition` — keys/enums plus cross-field invariants: terminal-status iff
  `:terminal`; `:parent-wake` only with `:terminal`; no terminal event types in a
  `:running` commit; `:expected-wake-version` iff `:waiting`.
- `::spec/commit-result` (replaces `::park-result`, keeps the wake-raced-carries-
  version conjunct), `::spec/snapshot`, `::spec/scheduling-state`, `::spec/creation`,
  `::spec/create-result`.
- Event specs (`::spec/event` multi-spec) stay **unchanged** — wire format frozen.

### 2.2 `CachedStore` (new, `src/intemporal/store/cached.cljc`)

Exploits an invariant the wake/park protocol already guarantees: **every external
mutation of history or signals bumps `wake_version`** (`add-signal!`,
`request-cancel!`, `append-and-wake!`, `wake!`, terminal `:parent-wake`); the only
non-bumping mutations are this decorator's own `commit-transition!` calls.

- Cache entry: `{workflow-id → {:wake-version W :history [...] :signals {...}}}` in one atom.
- **`load-snapshot`** (the only accelerated read): `get-scheduling-state` (cheap row
  read); if cached entry exists and wake-version matches → merge and return; else
  delegate full `load-snapshot`, repopulate. → drive with N suspensions does
  **1 full history load + N single-row reads** instead of N+1 full loads.
- **Write-through on `commit-transition!`**: `:committed` → append `:events` to H,
  apply `:consume-signals` to S (own commits don't bump W, so W stays valid);
  `:parent-wake` invalidates the parent's entry. `:wake-raced`/`:not-running`/
  `:terminal` → evict.
- **Cross-process safety**: every hit gated by the fresh wake-version compare, so
  other-process writes (which always bump) force a reload.
- `cancel-requested?`, `find-event`, `get-workflow-status` **never cached**
  (between-operation cancellation visibility; cleanup 5c).
- Eviction: on terminal + bounded LRU (`:max-entries`, default 1024).
- Composition order: `Checked(Cached(Backend))` — a cache bug fails a spec check
  instead of corrupting replay.
- Factories: `jdbc/create-store`, `fdb/create-store` gain `:cached?` (default true);
  InMemory defaults false (it *is* the cache) but the conformance suite still runs
  over `Cached(InMemory)` to prove transparency.

---

## 3. Pure kernel

### 3.1 Namespaces
- **`src/intemporal/internal/fsm.cljc`** (new) — the pure kernel. No I/O, no clock
  (callers pass `now-ms`), no user code, no platform conditionals. Also home of
  shared domain constants (`terminal-statuses`, `terminal-event-types`,
  `parent-close-policies` — cleanup 1e).
- **`src/intemporal/internal/scheduling.cljc`** (new, small) — pure store-side
  transitions shared by backends (extracted from today's `store.cljc` privates).
- **`src/intemporal/internal/effects.cljc`** (new) — store-only effect interpreter:
  `run-store-effects!`, `enforce-close-policies!` (moved from execution.clj/.cljs),
  observer delivery.
- **`execution.clj` / `.cljs`** — shrink to ~100-line platform shells (§3.4).
- Keep **as-is**: `context.cljc` (replay machinery, first-wins index, cancellation
  frontier, `blet/bthen/bfinally`), `activity.cljc` (retry helpers; only
  `:retryable-fn` evaluation stays platform-side — it inspects a live exception),
  `error.cljc`, `codec.clj`, `runtime.clj`/`.cljs` (executors),
  `workflow_registry.cljc`, `observer.cljc`, `tracing.clj`.

### 3.2 Data shapes

Decision input (built by the drive loop each pass):
```clojure
{:workflow-id id
 :now-ms      n
 :snapshot    <load-snapshot result>   ;; history+signals+wake-version+cancel flag
 :outcome     {:status :completed|:suspended|:cancelled|:failed
               :result/:error … :suspension-type kw :suspension-data {…}
               :pending-events [...] :pending-asyncs [...]}}
```

Plan (decision output):
```clojure
{:pre-commit  transition | nil   ;; unconditional :running commit — durable REGARDLESS
                                 ;; of a later park race (traps 4 & 6)
 :next        :continue | :park | :final | :await-effects
 :park        {:transition <:waiting transition> :reason kw} | nil
 :final       {:transition <:terminal transition incl. :parent-wake> :value {…}} | nil
 :effects     [effect …]}        ;; run only after the commit(s) succeed
```

Effect vocabulary (`::fsm/effect`, dispatched on `:effect`):

| Effect | Payload | Interpreter |
|---|---|---|
| `:execute-activity` | `{:seq :activity-name :args :timeout-ms :retry-policy :attempt-state}` | platform (executor, one attempt) |
| `:execute-async-batch` | `{:asyncs [...] :drain? bool}` | platform (parallel executor) |
| `:enforce-close-policies` | `{:workflow-id id}` | `effects.cljc` (recursive, idempotent) |
| `:observer` | full observer event map | `effects.cljc` via `obs/notify!` |
| `:finish-span` | `{:workflow-id :error}` | CLJ tracing; CLJS ignores |

Activity effects are **two-phase**: the loop runs the effect, normalizes the live
result platform-side (catches, `infrastructure-failure?`, `:retryable-fn` → bools),
and feeds it to pure `fsm/activity-outcome` / `fsm/async-outcomes`, which return the
next plan (outcome-events `:pre-commit` + `:continue`, or attempt-record
`:pre-commit` + `:park` at `:retry-at`). Mirrors kernel-outbox's `retry-decision`.

### 3.3 What moves into `fsm.cljc`
- `decide` — top dispatch absorbing `drive-workflow!`'s case + `handle-suspension`'s
  table + the due-asyncs-take-precedence rule.
- `decide-activity` ← `process-pending-activity` decision half + `park-until-retry!`.
- `decide-timer` ← `process-timer` (fire check against snapshot instead of live
  `find-event` — equivalent: only the drive writes `:timer-fired`; upsert dedupes).
- `decide-signal(-timeout)` ← `process-signal*`, selecting the FIFO head from
  `(:signals snapshot)` and emitting `:consume-signals` + `:signal-received`/
  `:signal-wait-completed` in ONE transition. Semantic note: a mid-pass signal now
  resolves via `:wake-raced` → immediate re-pass — same guarantee, one extra pass
  (exactly what `wake_version_race_test`/`signal_double_fire_test` pin).
- `decide-join(-any)` ← `process-join-pending` + inline join-any, resolved from the
  snapshot (alias arrives via `append-and-wake!`/`:parent-wake`, which bumps).
- `activity-outcome`, `async-outcomes`, `spent-budget-outcome` ← `run-attempt`
  decision half + async event constructors + `due-asyncs`/`earliest-async-retry`.
- `final-plan` ← finalizer event construction, terminal-seq computation,
  parent-notify construction (→ `:parent-wake`), close-policy/observer/span effects;
  `replay-budget-exceeded-plan`.
- Engine-side observer notifications become `:observer` effects (in-body ones keep
  going through `ctx/notify-observer`).

Spec the kernel: `::fsm/outcome`, `::fsm/plan`, `::fsm/effect` + `fsm/check-plan!`
(gated by `spec/asserts-on?`) called between decide and commit — CheckedStore-style
validation extended to kernel transitions.

### 3.4 What stays platform-specific
- `execute-workflow-fn` (dynamic binding vs promesa context re-binding) — verbatim.
- Attempt/batch execution + live-exception normalization (`RejectedExecutionException`,
  `js/Error`, `:retryable-fn`, JVM `interrupt-error?`).
- Drive loop shell: CLJ `loop/recur` with shutdown/interrupt handling; CLJS
  `prom/loop` + `blet`. Both: snapshot → replay → `fsm/decide` → `check-plan!` →
  commit(s) → effects → follow-up plans → recur/return.
- Tracing (CLJ). Engine claim loop (Thread/Semaphore/pool vs setTimeout) in `core.cljc`.

---

## 4. Engine

### 4.1 API

```clojure
(start-engine
  & {:keys [store owner-id                                  ;; owner-id REQUIRED (throws)
            threads queue-capacity submit-timeout-ms default-timeout-ms  ;; executor (JVM)
            poll-ms batch-size workflow-concurrency         ;; drive loop (25 / 100 / 4)
            protocols observer enable-logging enable-telemetry
            unref-timers?]})                                ;; CLJS
;; → engine handle {:store :executor :registry :protocols :observer :owner-id :loop-stop :log}

(shutdown-engine engine) / (shutdown-engine engine grace-period-secs)
```

`start-engine` (replaces `make-workflow-engine` — **deleted, breaking, documented**):
1. builds registry, registers `:protocols` implementations before any claim;
2. builds the executor (`runtime` unchanged; `executor_wiring_test` stays);
3. `recover-running!` with the owner-id;
4. starts **exactly one** claim loop (existing `start-worker-loop` bodies kept
   per-platform; `unresumable` bookkeeping extracted to a shared cljc helper).

`shutdown-engine`: stop + join the loop; in-flight JVM drives get grace to park,
then executor shutdown flips `p/shutdown?` → drives return `:interrupted` → loop
requeues them; CLJS clears the timer, in-flight promise drives run to next park;
then `release-owner!` + `shutdown-executor`.

- `with-workflow-engine` — kept, expands to `start-engine`/`shutdown-engine`;
  injects `(str "eng-" (random-uuid))` when `:owner-id` absent, so ~30 Tier B call
  sites stay unchanged (ephemeral engines = documented exception to stability).
- `:worker?` removed. Client-only use = `submit-workflow`/`await-workflow`/
  `send-signal`/`cancel-workflow`/`get-workflow-history` with plain `{:store store}`.
- `submit-workflow` → `create-workflow!` (`:exists` → `{:workflow-id id
  :already-exists? true}`, nothing overwritten — new, documented).
  `resume-workflow` = `wake!` + await. `await-workflow` unchanged.
- `make-retry-policy` re-exported from `intemporal.core`.
- `cancel-workflow` = `request-cancel!` + close-policy effect via `effects.cljc`.

### 4.2 Owners
- `claim-runnable!` claims unowned-or-own workflows, stamps `owner`.
- Startup: `recover-running!` requeues this owner's RUNNING rows (crash recovery).
- Shutdown: `release-owner!` requeues + un-owns non-terminal rows.
- Documented invariant: one stable owner-id = at most one live process; schema stays
  lease-friendly (`owner TEXT` is the future `lease_owner`; no new columns now).
- Handoff tests: `worker_test` (engine w1 shutdown → w2 completes), `crash/*`
  (engine A → engine B, same store), plus two new `engine/lifecycle_test.clj` cases:
  (a) same-owner restart recovers a stuck-RUNNING row; (b) a different owner cannot
  claim an owned WAITING workflow until `release-owner!`.

---

## 5. Migrations & platform storage changes

**JDBC** (squash the initial migration in place — allowed):
- `intemporal_workflows`: columns unchanged (already lease-friendly).
- `intemporal_history`: unchanged — `id SERIAL` stays the committed-append-order
  source; `UNIQUE(workflow_id, seq, event_type)` stays the idempotency key.
- `intemporal_signals`: add index `(workflow_id, signal_name, id)`; bound
  `signal_name` to `VARCHAR(255)` where the index requires it (cleanup 5f).
- `create-workflow!` = one tx (`INSERT … ON CONFLICT DO NOTHING` + started-event
  check/insert + parent columns); `commit-transition!` = one tx reusing today's
  `park-workflow!` body extended with `:running`/`:terminal` branches, signal
  deletes, and `:parent-wake` (parent append + wake, same tx); `load-snapshot` =
  one tx (row + history by `id ASC` + signals by `id ASC`).

**FDB:**
- Add an **append-order index** `["history-order" wf <versionstamp>] → (seq, type)`
  via `SET_VERSIONSTAMPED_KEY`, same tx as the identity write; `load-snapshot`
  reads the order index and joins identity keys (first write claims the order slot;
  re-upserts overwrite in place — preserves dedupe AND delivers committed order,
  which FDB lacks today).
- Signals: versionstamped keys (true FIFO) instead of `(currentTimeMillis, uuid)`.
- `commit-transition!`/`create-workflow!` each one `ftr/run` with the existing
  schedule/ready/due/owner index maintenance moved inside.

**spec.cljc:** add the new specs (§2.1, §3.3); delete `::park-result` and dead
specs; keep all event specs byte-identical.

---

## 6. Phased execution

**Order: kernel first, protocol second.** The kernel extraction is the largest
behavior-preserving refactor and is verified by the *entire unmodified* test matrix
while the store is untouched. After Phase 1 only the thin commit layer touches
store verbs, so the protocol swap is small and pinned by the conformance suite
(rewritten first).

### Phase 0 — Baseline
Commit the in-flight work (observer collapse, CLJS timeout sentinel,
`:parent-close-policy` forwarding). Record green baselines: `bin/kaocha :in-memory`,
`bin/kaocha :test-cljs`, `docker compose up -d` + `bin/kaocha :test
--focus-meta integration` (Postgres, MariaDB, FDB). No red allowed.

### Phase 1 — Pure kernel under the OLD protocol (behavior-preserving)
Create `fsm.cljc`, `effects.cljc`; rewrite `execution.clj`/`.cljs` as interpreters
mapping plans onto existing verbs (`save-events`, temporary `:consume-signal`
effect, `park-workflow!`, `save-events-and-wake!`). Move `enforce-close-policies!`/
parent-notify into `effects.cljc`. Add `::fsm` specs + `check-plan!`. No wire-shape
or park/continue changes.
**Verify:** all Phase-0 suites green **unmodified**; `engine/replay_snapshot_test`
proves identical histories; diff a timer/signal/saga/child history CLJ vs CLJS.
**Test work:** none (that's the point).

### Phase 2 — New store protocol (3 sub-steps, each green in scope)
- **2a. Protocol + InMemory + Checked + engine switch.** Rewrite `protocol.cljc`,
  `spec.cljc`, `scheduling.cljc`, `store.cljc`, `checked.cljc`. Switch interpreters
  to `load-snapshot`/`commit-transition!` (declarative signal consume; the temp
  effect dies). `core.cljc`: `submit-workflow` + `schedule-independent-child!` →
  `create-workflow!`; renamed verbs elsewhere. Rewrite conformance tests FIRST:
  `store/test_suite.clj` (adapted + new sections: create-idempotency, `:running`
  append order, consume-atomicity, terminal `:parent-wake` atomicity),
  `scheduling_state_test.cljs`, `claim_owner_cas_test`, `mandatory_seq_test`,
  `signal_double_fire_test`, `spec_test.*`, `jepsen/racing_store.clj` (race windows
  move to `load-snapshot`/`commit-transition!`) + `jepsen/bug_*` +
  `wake_version_race_test`.
  **Verify:** `:in-memory` + `:test-cljs` green. Red-listed: integration suites.
- **2b. JDBC.** Rewrite `store/jdbc.clj` + squash migration.
  **Verify:** integration on Postgres and MariaDB.
- **2c. FDB.** Rewrite `store/fdb.clj` (order index, versionstamped signals,
  one-tx verbs). **Verify:** FDB integration suite.

### Phase 3 — CachedStore
`store/cached.cljc` + `:cached?` factory options + tests: wake-version validation/
eviction unit tests; conformance suite over `Cached(InMemory)` and
`Checked(Cached(InMemory))`; extend `replay_snapshot_test` with a counting-decorator
assertion (drive with N suspensions = exactly 1 full snapshot load); two store
instances over one atom proving cross-"process" invalidation.
**Verify:** `:in-memory`, `:test-cljs`, then integration with `:cached? true`.

### Phase 4 — Engine lifecycle
`start-engine`/`shutdown-engine`; delete `make-workflow-engine`, `:worker?`;
`with-workflow-engine` over `start-engine`; export `make-retry-policy`. Port
`test/intemporal/tests/child_workflow_util.clj/.cljs` `with-worker` → `start-engine`
(most child tests pass untouched). Mechanical rename across Tier B/C. Finish
`engine/lifecycle_test.clj` with §4.2 owner-handoff cases.
**Verify:** full matrix, `bin/run-coverage`, `shadow-cljs compile node`.

### Phase 5 — Docs & closure
`architecture.md` store-contract section (atomicity/crash windows per verb,
committed-append order, event identity/upsert, signal FIFO, owner semantics, the
residual close-policy window); README (`start-engine`, owner-id, `make-retry-policy`,
`:cached?`/`:checked?`); delete dead code; final coverage + jar smoke.

### Phase 6 (optional, separable) — sol.md P1-5
Command-signature replay validation: extend the `stub` name check to timers/
signals/children via a kernel-side `fsm/replay-command-check`.

### Test fate matrix (Tier C; Tier A kept verbatim, Tier B bodies survive)

| File | Fate | Phase |
|---|---|---|
| `worker_test.clj` | keep bodies; → `start-engine`; rename `engine_recovery_test.clj` | 4 |
| `worker_scheduling_test.clj`, `worker_cancel_compensation_test.clj`, `status_test.clj` | driver swap only | 4 |
| `submit_workflow_test.clj` | driver swap + `:already-exists?` assertion | 2a/4 |
| `timer_recovery_test.clj` | direct verb calls → new verbs; driver swap | 2a/4 |
| `join_any_child_test.clj`, `child_workflow_{async,cascade_cancel,abandon,terminate,plain}_test.clj/.cljs` | untouched bodies; `child_workflow_util` ported | 4 |
| `engine/cascade_cancel_wake_test.clj` | verb renames | 2a |
| `engine/replay_snapshot_test.clj` | keep; + CachedStore load-count assertion | 1/2a/3 |
| `engine/executor_wiring_test.clj` | keep (executor unchanged); driver swap | 4 |
| `engine/lifecycle_test.clj` (untracked) | becomes the `start-engine` spec | 4 |
| `jepsen/bug_1_1,1_3,2_1,2_3`, `wake_version_race` + `racing_store.clj` | decorator rewritten; race windows relocated | 2a |
| `crash/*` (8 files) | keep; engine-A-shutdown→engine-B pattern survives; verb/driver updates | 2a/4 |
| `runtime/parallel_rejection_test.clj` | keep; driver swap | 4 |
| `store/test_suite.clj` | adapted + extended — first thing in 2a | 2a |
| `test/intemporal/jepsen/` chaos harness | out of scope; label unsupported | 5 |

---

## 7. Risk register (traps → where held)

| # | Trap | Where the plan holds it |
|---|---|---|
| 1 | Suspension typing (JVM Error subclass / CLJS non-js/Error) | `error.cljc` as-is; kernel receives normalized outcomes, never throwables |
| 2 | `stub` throws same suspension every pass; async re-derives from `:activity-scheduled` | `stub`/`async` untouched; `decide-activity` keeps the retry clock engine-side |
| 3 | Pass-snapshot-only replay; first-wins index | `context.cljc` as-is; kernel reads the same snapshot |
| 4 | `:activity-scheduled` durable before any park | `:pre-commit` executed BEFORE `:execute-activity`/`:park`; spec'd in `::fsm/plan` |
| 5 | Child alias at parent-seq, atomic append+wake | Stronger: `:parent-wake` inside the child's terminal commit |
| 6 | Seq -1 sentinel; terminal `inc max-seq`; `(wf,seq,type)` upsert; attempt running-total | Event shapes frozen; terminal seq from snapshot∪pending; attempt records unconditional `:pre-commit` |
| 7 | Infrastructure failures re-executed, no budget spent | Normalization platform-side feeding `fsm/retry-decision` (`:consume-attempt? false`) |
| 8 | Cancellation frontier + live cancel reads | `context.cljc` untouched; `cancel-requested?` live; CachedStore never caches it |
| 9 | Seqs = addresses; history = committed append order | Contract written; JDBC `id` retained; FDB order index ADDED (real fix) |
| — | New: signal consume moved into commit | Crash window closes; mid-pass arrival → `:wake-raced` re-pass; pinned by existing race tests + rewritten RacingStore |
| — | New: join checks live→snapshot | Equivalent — every alias writer bumps wake-version → park CAS races → re-pass; new conformance case |
| — | New: terminal + close-policy not fully atomic | Accepted (no outbox); parent-wake atomic; close-policy idempotent; window documented |

---

## Critical files
- `src/intemporal/protocol.cljc` — the new 17-method `IStore`
- `src/intemporal/internal/fsm.cljc` — (new) the pure transition kernel
- `src/intemporal/internal/effects.cljc`, `internal/scheduling.cljc` — (new)
- `src/intemporal/internal/execution.clj` / `.cljs` — shrink to platform interpreters
- `src/intemporal/store.cljc`, `store/checked.cljc`, `store/cached.cljc` (new), `store/jdbc.clj`, `store/fdb.clj`
- `src/intemporal/core.cljc` — `start-engine`/`shutdown-engine`, API rewiring, `make-retry-policy` export
- `src/intemporal/spec.cljc` — transition/snapshot/plan/effect specs
- `resources/migrations/{postgres,mariadb}/…` — squashed initial schema
- `test/intemporal/tests/store/test_suite.clj`, `test/intemporal/tests/child_workflow_util.clj/.cljs`, `test/intemporal/tests/jepsen/racing_store.clj` — test infrastructure ports

## Verification (end-to-end)
1. Per-phase gates as listed in §6 (each phase ends green or explicitly red-listed).
2. Full matrix at Phases 4–5: `bin/kaocha :in-memory`, `bin/kaocha :test-cljs`,
   `bin/kaocha :test --focus-meta integration` (Postgres + FDB via docker-compose),
   MariaDB variant via `DATABASE_URL`, then `bin/run-coverage` (CI parity).
3. `engine/replay_snapshot_test` extended: identical histories pre/post kernel
   extraction; exactly 1 full snapshot load per drive with CachedStore.
4. Spec asserts stay on (`-Dclojure.spec.check-asserts=true` pinned by
   `spec_test.clj/toggle-is-enabled-in-ci`) so CheckedStore + `fsm/check-plan!`
   validate every boundary throughout the migration.
