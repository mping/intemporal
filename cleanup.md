# intemporal: simplification, cleanup & redesign

## Context

`intemporal` is ~6,300 lines of `src/` and ~9,800 lines of `test/`. The engine works and the
suites are green, but four kinds of drag have accumulated:

1. **Accidental duplication** — `execution.clj`/`execution.cljs` are 65% identical once
   docstrings are stripped; the three `IStore` backends re-implement the same *pure* state
   machine three times; one 383-line test file exists twice and runs twice.
2. **Abstractions with a single implementation** — a 20-method `IWorkflowObserver` whose only
   real consumer is two test assertions; a 21-method `IStore` where several methods have zero
   engine callers.
3. **Cost with no benefit in production** — every store is wrapped in a `CheckedStore` whose
   assertions are compiled out unless `clojure.spec.check-asserts=true`, which only the `:test`
   alias sets. In production it is a 21-method dispatch layer that validates nothing.
4. **Dead weight** — a `build/build.clj` that cannot run, a chaos harness nothing invokes whose
   SQL no longer matches the schema, a `dev/` scratch file that no longer compiles, 445 compiled
   JS artifacts tracked in a gitignored directory, and 1,568 lines of AI review notes at the repo
   root cited as design specs from 16 production comments.

Goal: a smaller, more obvious codebase. Backwards compatibility, migrations, and CLJ/CLJS source
duplication are explicitly **not** constraints.

Every file:line below was verified against the working tree at `b400e87`.

---

## Phase 0 — Dead weight (pure deletion, no behaviour change)

**Delete `test/intemporal/jepsen/` entirely** (7 files, 1,024 lines + a 190-line README).
Nothing runs it: kaocha's `:ns-patterns ["-test$"]` never matches `intemporal.jepsen.*`; the
Earthfile `test:` target runs only `bin/run-coverage`; CI runs only `earthly -P +test`. Its own
[README.md:12](test/intemporal/jepsen/README.md#L12) says *"not in CI"*. It is also broken and
stale: [client.clj:148](test/intemporal/jepsen/client.clj#L148) uses `ON CONFLICT (workflow_id,
seq)` but the schema's constraint is `UNIQUE (workflow_id, seq, event_type)`, so that statement
errors at runtime; [worker.clj:78](test/intemporal/jepsen/worker.clj#L78) calls `start-workflow`
directly, bypassing `submit-workflow` + `start-worker`, so it does not exercise the current
worker model at all. It is superseded by
[test/intemporal/tests/jepsen/](test/intemporal/tests/jepsen/) — `bug_1_1`…`bug_2_3`,
`racing_store.clj`, `wake_version_race_test.clj` — which do end in `-test` and do run.

Also remove: `test/resources/migrations/jepsen/`, the `:jepsen` and `:jepsen-worker` aliases
([deps.edn:70,75](deps.edn#L70)), and the vestigial `:kaocha.filter/skip-meta [:jepsen]` in
[tests.edn](tests.edn) (`grep -rn '\^:jepsen' src test` returns zero hits — the comment above it
already admits it is redundant).

**Delete [dev/verify_bugs.clj](dev/verify_bugs.clj)** (422 lines). It no longer compiles —
clj-kondo reports `Unresolved var: jdbc-store/make-jdbc-store` and `fdb-store/make-fdb-store`;
both stores now expose `create-store` ([jdbc.clj:398](src/intemporal/store/jdbc.clj#L398),
[fdb.clj:493](src/intemporal/store/fdb.clj#L493)). Its docstring points at `improvements.md`,
deleted long ago. Its `RacingStore` is superseded by the maintained
[test/intemporal/tests/jepsen/racing_store.clj](test/intemporal/tests/jepsen/racing_store.clj).

**Delete `test/intemporal/tests/bench/`** (5 files, ~485 lines).
[bench/store_test.clj](test/intemporal/tests/bench/store_test.clj) is **byte-identical** to
[store/store_test.clj](test/intemporal/tests/store/store_test.clj) except the `ns` line — and it
matches `-test$`, so the entire store conformance suite currently runs twice per kaocha run. The
other three are copies of `store/{memory,jdbc,fdb}_test.clj` that call `run-store-tests store 1`;
`wf-count 1` benchmarks nothing, and the real numbers live in `(comment ...)` blocks.

**Fix [build/build.clj](build/build.clj).** `compile-main` references undefined `base-nses`
(:12), `compile-dev` references undefined `dev-nses` (:20) — both clj-kondo *errors*. Since `jar`
calls `compile-main`, both `clj -T:build compile-main` and `clj -T:build jar` fail today. Either
define the ns lists or drop `:ns-compile` and let `:filter-nses ['intemporal]` do the work; delete
the unused `clojure.pprint` require and the uncalled `compile-dev`. This is invisible because
[Earthfile:39-40](Earthfile#L39) lints only `src` and `test`, and CI never invokes
`+build-main`/`+build-jar`/`+build-all` — **add `build dev` to the lint target and make
`+build-all` a CI job.**

**Untrack build output.** `public/` is in `.gitignore` yet 445 files / 29 MB are tracked.
[static.yml](.github/workflows/static.yml) deploys `public/` straight from the checkout and
carries a `# TODO build js`. Pick one: build it in that workflow and `git rm -r --cached public`,
or un-ignore it. The same contradiction applies to `bin/` (gitignored, 2 tracked files the
Earthfile copies) and `.clj-kondo`.

**Config fixes.** [shadow-cljs.edn:23](shadow-cljs.edn#L23) preloads
`intemporal.tests.node-keepalive` — that namespace does not exist anywhere; :3 sets
`:init-ns intemporal.dev` — also nonexistent. [deps.edn:1](deps.edn#L1) puts `"target"` on
`:paths`, so stale AOT classes shadow source. Drop `exoscale/automata` from `:dev` (unused —
[doc/intemporal/fsm.cljs](doc/intemporal/fsm.cljs) is a vendored 130-line copy).

---

## Phase 1 — Dead code and duplicated constants

**Confirmed dead (zero references repo-wide):**
[activity.cljc:79](src/intemporal/internal/activity.cljc#L79) `get-activity-fn` ·
[context.cljc:273](src/intemporal/internal/context.cljc#L273) `bloop` ·
[error.cljc:141](src/intemporal/internal/error.cljc#L141) `*capture-stack-traces?*` (16 lines of
docstring for a var never `binding`-ed) · [runtime.clj:238](src/intemporal/internal/runtime.clj#L238)
`:submit-timeout-ms` (unreachable — `make-workflow-engine` never passes it) ·
[core.cljc:596-597](src/intemporal/core.cljc#L596) the `:protocols` engine key on the JVM
(write-only; only `execution.cljs` and the `:cljs` branch of `macros.cljc` read it).

**[logging.cljc](src/intemporal/internal/logging.cljc): 6 of 12 macros have zero call sites** —
`trace`, `info`, `warn`, `fatal`, `errorf`, `fatalf`. Real usage is `infof` (25), `warnf` (15),
`tracef` (9), `debugf` (7), `with-mdc` (7), `debug` (1), `error` (2). Reduce to what is used.

**Unreachable branches:** the `history-event` fallback at
[context.cljc:92-94](src/intemporal/internal/context.cljc#L92) — `make-workflow-context` is the
only context constructor and always sets `:history-index`, so the `if-let` else can never fire;
collapses a 6-line fn to a `get`. The `(when observer ...)` guard inside `-notify`
([execution.clj:17-21](src/intemporal/internal/execution.clj#L17)) — `make-composite-observer`
never returns nil and `make-workflow-engine:1140` always sets `:observer`.

**Ignored parameters threaded through call sites:**
[jdbc.clj:158,161](src/intemporal/store/jdbc.clj#L158) `->payload-param`/`<-payload-val` ignore
`kind` (the comment at :151 says so) across 9 call sites · [fdb.clj:52](src/intemporal/store/fdb.clj#L52)
`owner-index-key` ignores `root-subspace` across 6 sites · [runtime.clj:71](src/intemporal/internal/runtime.clj#L71)
binds `retry-policy` and never reads it.

**Dead specs** in [spec.cljc](src/intemporal/spec.cljc): `::owner-id` (:77), `::run-state` (:78),
`::data` (:118), `::signal-envelope` (:333 — its own docstring admits it is never asserted),
`::pending-ids` (:343 — no `IStore` method returns pending ids; the `check!` docstring example at
:379-382 describes a pipeline that no longer exists).

**Single-source the duplicated constants.** `max-iterations 1000` appears in 5 places
(`core.cljc:592,615,712`, `execution.clj:682`, `execution.cljs:692`); `30000` in 4
(`core.cljc:1103`, `runtime.clj:216,239`, `runtime.cljs:159` — and the `const` at :1103 is not
read by either runtime); the parent-close-policy set in 2 (`core.cljc:473` private,
`spec.cljc:69` public and unreferenced by core); the terminal-event set inline at
`core.cljc:643,654` and `fdb.clj:113`. [spec.cljc:59-69](src/intemporal/spec.cljc#L59) already
owns `workflow-statuses` and the policy set and **nothing references either** — make it the home.

---

## Phase 2 — Collapse single-implementation abstractions

### 2a. `IWorkflowObserver`: 20 methods → 1

[protocol.cljc:88-142](src/intemporal/protocol.cljc#L88) declares 20 methods. There are exactly
three implementations, all in [observer.cljc](src/intemporal/observer.cljc): `LoggingObserver`
(135 lines that every one do `(swap! log-atom conj {...})`), `noop-observer` (24 lines of empty
bodies), `make-composite-observer` (49 lines of `doseq` fan-out). Replace with a single
`(on-event [observer event])` — or a plain fn, since there is no other state:

```clojure
;; logging
(fn [ev] (swap! log-atom conj (assoc ev :timestamp (utils/current-time-ms))))
;; noop
(constantly nil)
;; composite
(fn [ev] (run! #(% ev) obs))
```

`observer.cljc` 222 → ~25 lines; `protocol.cljc` −52. The ~40 call sites become map literals,
which also makes events *data* — serializable and directly matchable in tests.

Delete `-notify` ([execution.clj:17-21](src/intemporal/internal/execution.clj#L17)) outright: its
nil-guard is dead (above), and it is `^:private` yet `:refer`'d cross-file from
[execution.cljs:4](src/intemporal/internal/execution.cljs#L4). Use `ctx/notify-observer`
([context.cljc:216](src/intemporal/internal/context.cljc#L216)), which additionally catches
observer exceptions — today a throwing observer breaks the engine at 27 `-notify` sites but not
the workflow body at 8 `notify-observer` sites.

While here: `make-workflow-engine` defaults `:enable-logging true`, which allocates `(atom [])`
and appends **every** event forever with no trimming, exposed as `:log`. Its only consumers in the
repo are two test assertions (`child_workflow_test.clj:112`, `saga_test.clj:233`). Default it off.

### 2b. `CheckedStore`: stop paying for it in production

`spec/check!` ([spec.cljc:373](src/intemporal/spec.cljc#L373)) is a no-op unless
`(and s/*compile-asserts* (s/check-asserts?))`; only [deps.edn:65](deps.edn#L65) (`:test`) sets it.
Yet all three factories default `:checked? true`
([store.cljc:294](src/intemporal/store.cljc#L294), [jdbc.clj:407](src/intemporal/store/jdbc.clj#L407),
[fdb.clj:500](src/intemporal/store/fdb.clj#L500)) and **nothing in `src/`, `test/` or `dev/` ever
passes `false`**.

Decide once at construction instead of per call — same CI guarantee, zero prod cost, no test
changes:

```clojure
(if (spec/asserts-on?) (checked/->CheckedStore store) store)
```

Then `checked/unwrap` ([checked.cljc:109](src/intemporal/store/checked.cljc#L109)) and the
`AutoCloseable` re-implementation (:103-107) can go once callers stop needing to unwrap.

---

## Phase 3 — `IStore` redesign: 21 methods → ~8

### 3a. Drop the methods that earn nothing

- **`get-pending-signals`** — **zero** `p/get-pending-signals` calls in `src/` outside the impls
  themselves. Costs an implementation in each backend plus a spec plus a `CheckedStore` wrapper.
  Test-only; rebuild it there over a raw scan.
- **`save-event`** — memory ([store.cljc:79](src/intemporal/store.cljc#L79)) and JDBC
  ([jdbc.clj:183](src/intemporal/store/jdbc.clj#L183)) are byte-identical
  `(p/save-events this id [event])`; FDB wrote a *separate* 25-line implementation
  ([fdb.clj:176-200](src/intemporal/store/fdb.clj#L176)) duplicating `save-events` including a
  third copy of the terminal-status `case`. The return value is discarded at all 9 call sites.
- **`find-event`** — memory ([store.cljc:99](src/intemporal/store.cljc#L99)) and FDB
  ([fdb.clj:245](src/intemporal/store/fdb.clj#L245)) are character-identical `filter` over
  `load-history`; only JDBC indexes. And [context.cljc:53](src/intemporal/internal/context.cljc#L53)
  already has a *second* in-memory `find-event` over the loaded snapshot.
- **`is-cancelled?`** — one engine caller,
  [context.cljc:189-195](src/intemporal/internal/context.cljc#L189) inside `check-cancelled!`,
  called from `next-seq!` → **a store round-trip per sequence-number allocation** (13 `next-seq!`
  sites). On JDBC that is a `SELECT` per workflow operation. Fold into `get-workflow-status` plus a
  per-drive cached flag.

### 3b. Lift the pure scheduling machine out of the three backends

The `run-state` / `wake-version` / `next-run-at` machine is *pure*, and is already written as pure
functions in [store.cljc:8-68](src/intemporal/store.cljc#L8) — `normalize-workflow`,
`wake-workflow-state`, `runnable-or-due?`, `claimable-ids`. Move them to a shared
`intemporal.store.scheduling` ns. Backends then supply only:

```
load-history / append-events!   read-schedule / cas-schedule!   scan-eligible
signals (add/consume)           children (link/list)
```

and `save-events-and-wake!`, `park-workflow!`, `wake-workflow`, `requeue-running!`,
`recover-running!`, `release-owner`, `claim-runnable!` all become backend-agnostic compositions.

This is where the real duplication lives. Terminal-status derivation exists in **7 places**
(`store.cljc:8`, `jdbc.clj:99`, and four inline `case`s at `fdb.clj:187,205,231,391`); the literal
`#{"completed" "failed" "cancelled" "terminated"}` in **13** (7 Clojure + 6 SQL at
`jdbc.clj:137,278,288,347,357,368`); the `{:run-state :runnable :next-run-at nil}` transition in
**11** (`fdb.clj:66,117,132,141,150,431,446,459`, `store.cljc:44,221,260`). FDB additionally
carries ~110 lines of hand-rolled index maintenance ([fdb.clj:49-152](src/intemporal/store/fdb.clj#L49))
that re-derive what SQL gets from `ORDER BY … LIMIT … FOR UPDATE SKIP LOCKED`.

### 3c. Bug — per-backend history ordering disagrees

JDBC orders by `id ASC` (insertion, [jdbc.clj:177](src/intemporal/store/jdbc.clj#L177)); FDB by
`(sort-by :seq)` ([fdb.clj:173](src/intemporal/store/fdb.clj#L173)); memory by insertion
([store.cljc:76](src/intemporal/store.cljc#L76)). These are **not** the same order, because
terminal events use `max-seq + 1` and `:workflow-started` uses `-1`. Pick one contract — order by
`(seq, event-type)` — and assert it in the shared conformance suite. If `seq` ordering wins,
`intemporal_history.id SERIAL PRIMARY KEY` becomes pure overhead on top of the existing
`UNIQUE (workflow_id, seq, event_type)`.

### 3d. Bug — `link-child!` divergence hidden by a loosened spec

[protocol.cljc:57-62](src/intemporal/protocol.cljc#L57) promises it *"create[s] the child as a
claimable, non-terminal workflow row."* JDBC does ([jdbc.clj:378](src/intemporal/store/jdbc.clj#L378));
memory ([store.cljc:267](src/intemporal/store.cljc#L267)) and FDB
([fdb.clj:470](src/intemporal/store/fdb.clj#L470)) do not. The spec was widened to hide it —
[spec_test.clj:255-257](test/intemporal/tests/store/spec_test.clj#L255) reads *"a just-linked child
is `:running` on JDBC and `:not-found` elsewhere; both legal."* Make all three create the row,
then **tighten that assertion back** so it can never silently re-diverge.

### 3e. SQL cleanup (falls out of the above)

- `detect-kind` ([jdbc.clj:46](src/intemporal/store/jdbc.clj#L46)) returns 3 values but every
  consumer is `(case kind :postgres A B)` and `migrate!` maps `:mysql` and `:mariadb` to the same
  directory. It is a boolean in disguise → `postgres?`.
- The claim query is duplicated in full (10 lines each) at
  [jdbc.clj:277-296](src/intemporal/store/jdbc.clj#L277) for a single `to_timestamp` vs
  `FROM_UNIXTIME` token. Extract a `->ts` helper.
- `row-value` ([jdbc.clj:108](src/intemporal/store/jdbc.clj#L108)) papers over
  qualified-vs-unqualified result keys; `next.jdbc`'s `:builder-fn rs/as-unqualified-lower-maps`
  removes the need.
- Schema: `intemporal_signals.created_at` is never selected, ordered by, or written — dead column
  in both dialects. `idx_intemporal_workflows_status` benefits no query (`get-workflow-status` is a
  PK lookup; `claim-runnable!` is covered by `idx_..._schedule`, whose Postgres partial predicate
  *is* the status filter). **Missing on Postgres:** an index on
  `intemporal_signals(workflow_id, signal_name)` — MariaDB's inline `FOREIGN KEY` creates one
  implicitly, so `consume-signal` is O(log n) there and a seq scan on Postgres. Migrations are
  editable in place (explicitly not a constraint here).
- FDB signal keys are `[currentTimeMillis, random-uuid]`
  ([fdb.clj:277](src/intemporal/store/fdb.clj#L277)) → FIFO order is non-deterministic within a
  millisecond, while JDBC pops by `id` and memory pops the vector head. Use a monotonic counter.

---

## Phase 4 — Engine: extract the verbatim third to `.cljc`

With docstrings, comments and blanks stripped, **356 of ~550 code lines per file are identical**
between [execution.clj](src/intemporal/internal/execution.clj) (733) and
[execution.cljs](src/intemporal/internal/execution.cljs) (741). The largest block —
`execution.clj:428-545` vs `execution.cljs:473-569`, the terminal / parent-child / close-policy
path (`terminal-status?`, `next-terminal-seq`, `parent-link`, `notify-parent-terminal`,
`has-children?`, `enforce-close-policies!`, `finish-workflow!`) — differs **only** in 3
`tracing/finish-workflow-span!` calls and reworded docstrings.

Move to a shared `.cljc`, with reader conditionals for the tracing calls: `record-attempt!`,
`continue-decision`/`park-decision`, `park-until-retry!`, `due-asyncs`, `earliest-async-retry`,
`with-async-retry-deadline`, `async-terminal-failure-events`, `async-completion-events`,
`spent-budget-events`, `process-timer`, `process-signal`, `process-signal-with-timeout`, the whole
tier-2 block, `finalize-cancelled`/`finalize-failed`, `run-once`. These are pure event-map builders
and synchronous store calls — no promise/blocking difference.

**Leave duplicated** (genuinely platform-specific, ~250 clj / ~300 cljs lines):
`execute-workflow-fn`, `attempt-once`/`run-attempt`, `process-pending-activity`,
`process-pending-asyncs-parallel`, `handle-suspension`, `finalize-completed`, `drive-workflow!`.

**Fix the drift the split has already caused** — same state, two names or two behaviours:

| Divergence | clj | cljs |
|---|---|---|
| retry status keyword | `:retryable-error` (`execution.clj:77`) | `:retry-or-fail` (`execution.cljs:127`) |
| `:rejected` status | exists, renamed to `:failed` one line later at :106, carries no `:exception` | absent; everything routes through `infrastructure-failure?` |
| `:protocols` on context | not set (`execution.clj:407-422`) | set (`execution.cljs:452,466`) — yet `macros.cljc:67` reads it on **both** |
| `start-worker` `:poll-ms` default | 500 (`core.cljc:762`) | 50 (`core.cljc:856`) — and `ensure-worker!` overrides both with a hardcoded 10 at :933,:939 |
| poll-failure backoff | exponential (`core.cljc:796-798`) | none |

The drifted *docstrings* are themselves the hazard: identical code, two divergent explanations.

**Also in this phase:**

- `execute-workflow-fn` classifies a throwable with the same ~18-line `cond` **three times**
  (`execution.cljs:43-62`, `:69-84`, `execution.clj:30-49`) → one `classify-failure`.
- `execution.clj:23-49` calls `(ctx/current-context)` **7×** in one function; the cljs version
  already binds it once.
- `run-attempt` takes 10 positional params, and #10 is named `record-attempt!`, **shadowing the
  ns-level fn defined 10 lines above** (`execution.clj:79`). The caller passes
  `(partial record-attempt! store workflow-id seq activity-name)` even though `run-attempt`
  already receives 3 of those 4 args. Pass `store`; delete the partial and the shadowing.
- `runtime.clj:65-150` `execute-activities-parallel` is 86 lines — a `mapv` whose body is a 40-line
  `if`/`try` with a fn nested 7 levels deep, then a second `mapv` with five catch clauses. Split
  into `submit-activity!` / `collect-result`.
- Three interruption predicates share the same cause-chain loop:
  `execution.clj/interrupt-error?:574`, `runtime.clj/interrupted-cause?:25`,
  `error/interruption?:50`. Consolidate to one.
- `error.cljc` hand-rolls `(if (.-data e) … (ex-data e))` **six times** (`:50,59,68,74,87,158`) —
  one `(defn- edata [e])` collapses all of them.
- `RetryPolicy` defrecord ([activity.cljc:94-98](src/intemporal/internal/activity.cljc#L94)) is
  never used as a type — no `instance?`, no protocol, every read is a keyword lookup. Plain map +
  defaults.
- `continue-decision` is a 0-arg fn returning a literal, called 9× per file → `def`.
- 15 of 18 `defn`s per engine file are used only within the ns → `defn-` (prerequisite for freely
  changing the signatures above).
- **Bug:** [runtime.cljs](src/intemporal/internal/runtime.cljs) races `js/Promise` against a
  `{::timeout true}` sentinel map (`:25,63,96`) and identifies the winner by looking for that key
  **in the user's result** — an activity returning a map with that key is misread as a timeout. Use
  a unique object identity or a rejected marker. Its `promise-with-timeout` `(atom nil)` timer cell
  and the byte-identical promise-building blocks at `:50-59` / `:83-92` go at the same time
  (~20 of the file's 167 lines).

---

## Phase 5 — Public API: 31 vars → ~20

[core.cljc](src/intemporal/core.cljc) exports 31 public vars. Reduce to the ~20 that carry weight.

**Near-duplicates to collapse:**

- `run-child-workflow-detached` (:560) vs `run-child-workflow-async` (:526) differ by **exactly one
  line** — `(->AsyncHandle seq-num)` vs `child-wf-id`; the preceding 12 lines including the
  `assert` are verbatim. Its docstring is also self-contradictory: *"pass `:parent-close-policy
  :abandon` (the default here, like async, is `:terminate`)"*.
- **Bug:** `run-child-workflow` ([core.cljc:470](src/intemporal/core.cljc#L470)) destructures only
  `:child-id` and forwards only `:child-id` — **`:parent-close-policy` is accepted syntactically
  and silently discarded**, so the synchronous variant cannot set a close policy at all.
- `join-all` (:327) is literally `(mapv join handles)`.
- `get-workflow-history` (:997) is `p/load-history`; `get-workflow-result` (:1002) is a 6-line
  filter over it.
- `suspension?` (:1030), `defn-workflow` (:1018), `stub-protocol` (:1012) are one-line re-exports.
  Note `suspension?` has **zero** uses in `src/`, `test/` or `dev/` but is documented as required
  CLJS saga API in [README.md:220](README.md#L220) — and `saga_test.cljs` catches `js/Error`
  directly at :51,:69,:85 without it. Resolve: either it is dead, or that is an untested path.
- `start-workflow` (:587) = `submit-workflow` + `ensure-worker!` + `await-workflow`;
  `resume-workflow` (:733) = `wake-workflow` + `ensure-worker!` + `await-workflow`. Three public
  entry points over one operation. Keep `submit-workflow` + `await-workflow` + `start-workflow` as
  sugar; drop `resume-workflow`. `start-workflow` also needs a `#?(:clj …)` split purely to append
  `:workflow-id` to the result map (:603-605) — have `await-workflow` return it.
- Three terminal predicates (`terminal-status?`:607, `terminal-event?`:652,
  `terminal-history?`:659) plus the event set written inline at :643 **and** :654.
- `stub` binds `ctx` at :68 then calls `(ctx/current-context)` again at :129 to pass to
  `schedule-activity!`, which uses it only for `(:workflow-id ctx)`.

**Unify `start-worker`.** Two independent implementations —
[core.cljc:742-838](src/intemporal/core.cljc#L742) (JVM, 97 lines: Thread + Semaphore +
FixedThreadPool) and [:841-920](src/intemporal/core.cljc#L841) (CLJS, 80 lines: setTimeout +
promesa) — both re-derive the `unresumable` atom, `requeue-registered!`, the failure
classification, `recover-running!` and `release-owner`. Only the scheduling primitive genuinely
differs. Extract the shared body over a small platform shim; consolidate the defaults into one map
(which also fixes the `poll-ms` 500-vs-50 divergence above).

**Also:** [macros.cljc](src/intemporal/internal/macros.cljc) `stub-protocol` (:44-106) is ~60 lines
where the `:clj` and `:cljs` branches build the same `sig+args` seq with cosmetically different
accessors (:56-66 vs :90-98) and emit the same `reify` tail (:76-83 vs :99-106). `cljs-available?`
(:12) does a runtime `(require 'cljs.analyzer)` in a `try` to guard a branch — in a ns that
*unconditionally* requires `cljs.analyzer.api` at :6, so the guard is pointless. Its `opts`
parameter is documented *"currently unused"* and threaded through `core.cljc:1012` into nothing.

**Delete [utils.cljc](src/intemporal/utils.cljc)** — a public namespace in the library's API tree
holding one function, `current-time-ms`, a 2-branch reader conditional. Fold into
`intemporal.internal.context`.

**Tests:** the three child-workflow close-policy tests (abandon / terminate / cascade-cancel) are
72–82% identical in both `.clj` and `.cljs` — 6 files, ~400 lines → one parameterized test per
platform.

---

## Phase 6 — Documentation

**Inline the rationale, then delete the review notes.** `kimi.md`'s finding IDs are cited from
**16 production comments** — `protocol.cljc:73`, `core.cljc:38`, `context.cljc:65,84,97`,
`activity.cljc:129,149,215`, `runtime.clj:99,188`, `runtime.cljs:45`, `execution.clj:80,91,190`,
`execution.cljs:87,98,226` — plus 6 test namespaces. Each cited rationale (X1, X3, X4, X8, X9, A1,
A16) is one sentence: inline it into the comment that cites it so the comment is self-contained,
then delete `kimi.md`, `sonnet.md`, `sol.md`, `issues.md`, `fable.md` (1,568 lines / 176K). This is
exactly the failure mode `improvements.md` already caused — it was deleted out from under 8
references that still dangle today (`workflow_registry.cljc:6`, four jepsen files,
`DEVELOPMENT.md:86`); scrub those too. Keep `README.md`, `architecture.md`, `DEVELOPMENT.md`,
`AGENTS.md`.

**Fix drift.** `AGENTS.md` lists `internal/fns/start_workflow.clj/.cljs` (gone) and an `IScheduler`
protocol (gone). `README.md:252` says `:threads` defaults to unbounded — verify against
`make-workflow-engine`. The Postgres migration comment says `parent_close_policy: cascade-cancel |
abandon | require-join`; the real set is `#{:cascade-cancel :abandon :terminate}`
([spec.cljc:69](src/intemporal/spec.cljc#L69)) — `require-join` does not exist.
[jdbc.clj:149](src/intemporal/store/jdbc.clj#L149) cites *"Migration 20260807000007"* — no such
migration exists, there is exactly one per dialect; :207 cites index
`uq_intemporal_history_wf_seq_type` — the migration declares an anonymous constraint.
[spec.cljc:42](src/intemporal/spec.cljc#L42) refers to the *"dead, incomplete
`intemporal.internal.events` namespace"* — already gone from `src/`.

---

## Verification

Record a baseline **before** starting (I have not run these — plan mode):

```bash
bin/kaocha :in-memory                       # JVM, no external services
bin/kaocha test-cljs                        # Node
clj-kondo --parallel --lint src test build dev deps.edn
```

Expect the in-memory count to *drop* after Phase 0 — deleting `bench/store_test.clj` removes a
duplicate run of the whole store conformance suite. Note the delta deliberately.

Per phase:

- **Phase 0** — `clj-kondo … build dev` must reach **0 errors** (2 today);
  `clj -T:build compile-main` and `clj -T:build jar` must succeed (both fail today);
  `earthly +build-all` green.
- **Phase 2** — observer collapse is covered by `child_workflow_test.clj:112` and
  `saga_test.clj:233`, the only `(:log engine)` consumers; extend them to assert the new event
  shape. `CheckedStore` gating is covered by
  [spec_test.clj:34-44](test/intemporal/tests/store/spec_test.clj#L34) (`toggle-is-enabled-in-ci`)
  and :294 (`check!-is-wired`), which exist precisely to fail loudly if the flag is dropped.
- **Phase 3** — the shared conformance suite
  ([store/test_suite.clj](test/intemporal/tests/store/test_suite.clj)) is the safety net; it must
  pass unchanged against all three backends. Bring up services and run the integration suite:
  ```bash
  docker-compose up -d
  bin/kaocha test --focus-meta integration          # Postgres + FDB
  DATABASE_URL='jdbc:mariadb://localhost:3306/root?user=root&password=root' \
    bin/kaocha test --focus-meta integration        # MariaDB
  ```
  Add a conformance assertion for history ordering (3c) and **tighten**
  `spec_test.clj:255-257` for `link-child!` (3d) — that assertion currently accepts both
  behaviours, so it must be narrowed or the fix is unverified.
- **Phase 4** — `test/intemporal/tests/crash/`, `engine/`, and `runtime/` are the regression net;
  they must pass on **both** platforms. The `::timeout` fix needs a new test: an activity that
  returns `{:intemporal.internal.runtime/timeout true}` must complete, not report a timeout.
- **Phase 5** — `submit_workflow_test.clj`, `worker_test.clj`, `worker_scheduling_test.clj`,
  `status_test.clj`, `child_workflow_*`. The `:parent-close-policy` fix needs a test that the
  *synchronous* `run-child-workflow` honours a non-default policy — none exists today, which is why
  the bug survived.
- **Finally** — `bin/run-coverage` end to end, and one smoke test of the built artifact: fresh JVM,
  `target/intemporal.jar` on the classpath with only published deps, require the public ns, run one
  workflow. Nothing tests the jar today.

## Sequencing note

Phases 0 and 1 are pure deletion and can land immediately. Phase 2 is self-contained. Phase 3 is
the largest and riskiest — do it against the conformance suite, one backend at a time, and land 3c
and 3d as separate commits with their tightened assertions so the fixes are provable. Phase 4
depends on nothing but is easiest after 2 (the observer collapse removes `-notify`, one of the
files' cross-platform couplings). Phase 5 is breaking and should be one commit with a changelog.
Phase 6 last, so the inlined rationale describes the final code.
