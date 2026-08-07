# intemporal

![Continuous Integration](https://github.com/mping/intemporal/actions/workflows/clojure.yml/badge.svg)

A Clojure library in the spirit of [temporal.io](https://temporal.io) or Uber Cadence.
Define functions with side effects, and persist/resume their state — workflows survive
process crashes and resume transparently.

> :warning: **Use at your own peril — not production ready.**

Two concepts apply:
- **Activities**: Functions (or protocol implementations) that handle side effects. The
  unit of work that can fail and be retried.
- **Workflows**: Functions that orchestrate activities with **at-least-once** semantics.
  On crash, the workflow replays its event history to reconstruct state without
  re-executing already-completed activities.

## Usage

```clojure
(ns intemporal.demo
  (:require [intemporal.core :as intemporal]))

;; Activities are regular functions
(defn activity-fn [a]
  [:processed a])

;; Protocols can also be used as activities
(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [_ a] [a :child]))

;; Workflows orchestrate activities via stubs.
;; defn-workflow auto-registers the workflow so it can be resumed by id.
(intemporal/defn-workflow my-workflow [i]
  (let [act (intemporal/stub #'activity-fn)
        pr  (intemporal/stub-protocol MyActivities)]
    {:activity (act i)
     :protocol (foo pr :X)}))

;; Create an engine and run the workflow
(intemporal/with-workflow-engine [engine {:threads 2}]
  (let [result (intemporal/start-workflow engine
                                          my-workflow [1]
                                          :protocols {MyActivities (->MyActivitiesImpl)})]
    (println result)))
```

### Two execution models

intemporal workflows need to be *driven* — something must call `run-workflow-internal` each
time the workflow is ready to advance (timers, signals, activity results). There are two
ways to do that, and they must **not** be mixed on the same workflow:

#### 1. `start-workflow` — in-process, caller-driven (blocking loop)

The caller's thread runs the workflow to completion in a loop, blocking on each suspension.
Simple — no worker needed. Good for single-shot, embedded, or test scenarios.

```clojure
;; The caller blocks until the workflow completes.
(let [result (intemporal/start-workflow engine my-wf [arg])]
  (println result))
```

#### 2. A **worker** — out-of-process, owner-driven (ownership scan)

`start-worker` polls the store for non-terminal workflows belonging to this owner (or
unowned), claims each, and resumes it. The same loop picks up timed-out sleeps, signals,
and children completing — and recovers orphaned workflows after a crash (the crashed pod
reclaims its own on restart with the same `owner-id`). **A worker is required** for:

- `submit-workflow` (submitting a workflow for worker execution)
- Independent child workflows (`run-child-workflow-async` / `run-child-workflow-detached`)
- Cross-pod / crash recovery
- Any scenario where the caller cannot block (e.g. a REST handler that fires and forgets)

```clojure
(let [engine (intemporal/make-workflow-engine :threads 4)
      stop   (intemporal/start-worker engine :poll-ms 100 :owner-id "pod-0")]
  ;; Submit a workflow for the worker to drive — returns immediately
  (intemporal/submit-workflow engine my-wf [arg] :workflow-id "my-wf")
  ;; The worker picks it up, runs it to completion
  ;; ... send signals, cancel, observe via await-workflow / get-workflow-status ...
  (stop))
```

> Mixing `start-workflow` and a worker on the **same** workflow id will double-drive it
> (both the caller's loop and the worker claim+resume it) — the ownership claim is the
> guard for workers, but `start-workflow` bypasses it entirely. Pick one model per workflow.

### Activities

`stub` wraps an activity function for use inside a workflow. It accepts optional
`:timeout-ms` and `:retry-policy`:

```clojure
(let [slow (intemporal/stub #'my-activity :timeout-ms 5000
                            :retry-policy (intemporal/make-retry-policy
                                            :max-attempts 3
                                            :initial-backoff-ms 1000))
      result (slow arg1 arg2)]
  ...)
```

`stub-protocol` does the same for all methods of a protocol at once. Pass the protocol
implementation to `start-workflow` via `:protocols`.

### Async activities (parallel fan-out)

`async` schedules an activity call for parallel execution. It returns an `AsyncHandle`
immediately; use `join`, `join-all`, or `join-any` to wait for results:

```clojure
(intemporal/defn-workflow parallel-workflow [x]
  (let [a    (intemporal/stub #'slow-activity)
        h1   (intemporal/async #(a x))
        h2   (intemporal/async #(a (* x 2)))
        h3   (intemporal/async #(a (* x 3)))
        all  (intemporal/join-all [h1 h2 h3])]
    {:results all}))
```

All async activities are batched and executed in parallel by the engine. On replay, the
thunk is NOT re-invoked — the engine replays the cached result.

### Child workflows

A workflow can run other workflows as **child workflows**. Each child has its own
independent event history and lifecycle.

**Synchronous** — the child runs to completion inline (`run-child-workflow`):
```clojure
(intemporal/defn-workflow parent [x]
  (let [a     (intemporal/stub #'my-activity)
        child (intemporal/run-child-workflow child-workflow [(* x 10)])]
    {:own (a x) :child child}))
```

**Independent (worker-driven)** — the child becomes a first-class persisted workflow
with its own ownership claim, driven by a worker (must be running). The parent
continues in parallel and `join`s later. Each child takes a `:parent-close-policy` (Temporal's ParentClosePolicy)
deciding its fate when the parent closes (success, failure, or cancellation):

| Policy | When parent closes … |
|---|---|
| `:terminate` (default) | Child is forcefully stopped; ends `:terminated`. |
| `:cascade-cancel` | Cancellation is requested; a driven child observes it and may compensate, ending `:cancelled`. |
| `:abandon` | Child keeps running independently (fire-and-forget). |

```clojure
(intemporal/defn-workflow parent [x]
  (let [a  (intemporal/stub #'my-activity)
        ;; independent children with different close policies
        h1 (intemporal/run-child-workflow-async #'child-wf [x]
               :parent-close-policy :terminate)
        h2 (intemporal/run-child-workflow-async #'child-wf [(* x 2)]
               :parent-close-policy :cascade-cancel)
        ;; detached (fire-and-forget) — no handle to join
        _  (intemporal/run-child-workflow-detached #'bg-job [x]
               :parent-close-policy :abandon)]
    (intemporal/join-all [h1 h2])))
```

### Timers and signals

```clojure
(intemporal/sleep 5000)                              ; suspend for 5 seconds

(let [payload (intemporal/wait-for-signal "my-signal")]
  ;; use payload
  )

;; With timeout
(let [res (intemporal/wait-for-signal-with-timeout "my-signal" 10000)]
  (if (:received res)
    (process (:payload res))
    (handle-timeout)))
```

Send a signal from outside the workflow:
```clojure
(intemporal/send-signal store workflow-id "my-signal" {:user "alice"})
```

### Sagas / compensations

Create a saga with `intemporal/saga`, register a compensation for each step *after* it
succeeds with `intemporal/add-compensation`, and roll back from a catch block with
`intemporal/compensate`. Compensations run in reverse registration order (LIFO):

```clojure
(defn booking-saga [order]
  (let [saga          (intemporal/saga)
        book-hotel    (intemporal/stub #'book-hotel)
        book-flight   (intemporal/stub #'book-flight)
        charge-card   (intemporal/stub #'charge-card)
        cancel-hotel  (intemporal/stub #'cancel-hotel)
        cancel-flight (intemporal/stub #'cancel-flight)]
    (try
      (let [h (book-hotel order)
            _ (intemporal/add-compensation saga #(cancel-hotel h))]
        (let [f (book-flight order)
              _ (intemporal/add-compensation saga #(cancel-flight f))]
          (charge-card order)
          :booked))
      (catch Exception e
        (intemporal/compensate saga)
        (throw e)))))
```

In **ClojureScript** catch `:default` and rethrow engine suspensions explicitly:

```clojure
      (catch :default e
        (when (intemporal/suspension? e) (throw e))   ;; engine control flow
        (intemporal/compensate saga)
        (throw e))
```

### Engine lifecycle

```clojure
;; One-shot: caller drives the workflow (no worker)
(intemporal/with-workflow-engine [engine {:threads 4}]
  (intemporal/start-workflow engine my-workflow [arg]))

;; Worker-driven: submit to a worker for asynchronous execution
(let [engine (intemporal/make-workflow-engine :threads 4
                                              :store  my-store   ;; see "Stores" below
                                              :enable-logging true)
      stop   (intemporal/start-worker engine :poll-ms 100 :owner-id "pod-0")]
  ;; Submit workflows — the worker drives them
  (intemporal/submit-workflow engine my-wf [arg] :workflow-id "my-wf")
  ;; ... send signals, cancel, observe ...
  (stop)
  (intemporal/shutdown-engine engine))
```

`make-workflow-engine` options:

| Option                | Default         | Description                             |
|-----------------------|-----------------|-----------------------------------------|
| `:store`              | `InMemoryStore` | Persistence backend (see Stores)        |
| `:threads`            | 4               | Executor threads                        |
| `:scheduler-threads`  | 2               | Timer/scheduler threads                 |
| `:default-timeout-ms` | 30000           | Default activity timeout                |
| `:enable-logging`     | false           | Logging observer (logs all events)      |
| `:enable-telemetry`   | false           | OpenTelemetry observer (JVM only)       |
| `:observer`           | —               | Additional `IWorkflowObserver` instance |

### Worker & recovery

`start-worker` runs the ownership-based recovery scan (see [Two execution models](#two-execution-models)
above). Use `submit-workflow` (not `start-workflow`) to hand a workflow to the worker:

```clojure
(let [{:keys [workflow-id]} (intemporal/submit-workflow engine my-wf [args]
                                                         :workflow-id "my-wf")]
  ;; the worker will pick it up and run it
  (intemporal/await-workflow engine workflow-id :timeout-ms 30000))
;; => {:status :completed :result ...}
```

## Stores

Three `IStore` implementations ship with the library:

Every store is built through a `create-store` factory (one per namespace), which wraps
the raw backend in `intemporal.store.checked/CheckedStore` — a decorator that validates
every value crossing the `IStore` boundary against `intemporal.spec` (a no-op unless
`clojure.spec.check-asserts` is enabled, see `intemporal.spec`). Pass `:checked? false`
to get the raw, unwrapped store instead.

### InMemoryStore
An in-process atom-based store. Default; adequate for development and single-process
CLJS (the CLJS worker is also single-process). No persistence across restarts.

```clojure
(require '[intemporal.store :as store])
(store/create-store)
```

### JDBC (PostgreSQL)
Persistent store backed by PostgreSQL with JSONB columns. Runs Migratus migrations on
construction. Requires the `:jdbc` deps.edn alias.

```clojure
(require '[intemporal.store.jdbc :as jdbc])
(def store (jdbc/create-store "jdbc:postgresql://localhost:5432/mydb?user=...&password=..."))
;; .close the store to release the HikariCP pool
```

`list-pending` / `claim-owner` use SQL `UPDATE … WHERE owner IS NULL OR owner = ?`,
and C2 wake-at filtering via `wake_at <= now()`.

### FoundationDB
Persistent store backed by FoundationDB, using subspaces for history, signals, ownership
index, and child linkage. Requires the `:fdb` deps.edn alias.

```clojure
(require '[intemporal.store.fdb :as fdb])
(import '[com.apple.foundationdb FDB])
(let [db (-> (FDB/selectAPIVersion 710) (.open "path/to/fdb.cluster"))]
  (fdb/create-store db "my-subspace"))
```

## Platform differences

intemporal works in both **Clojure (JVM)** and **ClojureScript**. The API is identical,
but the runtimes differ:

| Area             | JVM                                                                      | ClojureScript                                                            |
|------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|
| Execution        | Virtual threads, blocking calls, `Future`                                | Single-threaded, promise chains (`promesa`)                              |
| `start-workflow` | Blocks until the workflow reaches a terminal state; returns a result map | Returns a `js/Promise` that resolves to the result map                   |
| `await-workflow` | Blocks; returns `{:status … :result …}`                                  | Returns a promesa promise                                                |
| Engine loop      | `loop`/`recur` + `LinkedBlockingQueue` wake channel                      | Recursive promise chain with `setTimeout`                                |
| Activity results | Direct return value                                                      | Always a promise (use `blet`/`bthen` from `intemporal.internal.context`) |
| Suspensions      | Subclass `Error` (bypass `catch Exception`)                              | Plain `deftype`, not `js/Error` (bypass `catch js/Error`)                |
| Saga catch       | `(catch Exception e …)`                                                  | `(catch :default e …)` + rethrow `suspension?`                           |
| OpenTelemetry    | Supported via `:enable-telemetry`                                        | Not available                                                            |
| Worker           | Daemon thread with exponential backoff                                   | `js/setTimeout` tick, single-threaded                                    |
| Vars (`#'`)      | Stable qualified name                                                    | Demangled JS name; `defn-workflow` handles registration uniformly        |

Internal context macros (`blet`, `bthen`, `bfinally`, `bloop`) restore the dynamic
`*workflow-context*` binding inside promise callbacks on CLJS — needed for `stub` calls
inside `p/let` chains.

## Online demo

A browser-based demo (in-memory store, ClojureScript) is deployed at:

**[https://mping.github.io/intemporal/](https://mping.github.io/intemporal/)**

It includes:
- **Main** — basic activities + `stub-protocol`
- **Automata** — a finite-state-machine workflow
- **Provision with state machine** — VM provisioning via FSM
- **Provision saga** — order-fulfilment saga with LIFO compensation
- **Child workflows** — independent child workflows with sleep, signals, and cancellation-policy demo

To run locally: `npx shadow-cljs watch doc` and open `http://localhost:8000`.

## Development

```bash
# Run all JVM tests
bin/kaocha :test

# In-memory only (faster, skips JDBC/FDB)
bin/kaocha :in-memory

# ClojureScript tests
bin/kaocha :test-cljs

# Build JAR
clojure -T:build jar

# Start dev REPL
clojure -A:dev
```

See [CLAUDE.md](./CLAUDE.md) for detailed development commands, architecture notes,
and test organization.
