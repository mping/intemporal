# intemporal

![Continuous Integration](https://github.com/mping/intemporal/actions/workflows/ci.yaml/badge.svg)

A Clojure library in the spirit of [temporal.io](https://temporal.io) or Uber Cadence.
Define functions with side effects, and persist/resume their state — workflows survive
process crashes and resume transparently.

> :warning: **Use at your own peril — not production ready.**

See [Known limitations](KNOWN_LIMITATIONS.md) for the current distributed ownership,
cross-workflow atomicity, replay, and delivery constraints.

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
(intemporal/with-workflow-engine
  [engine {:threads 2
           :protocols {MyActivities (->MyActivitiesImpl)}}]
  (let [result (intemporal/start-workflow engine my-workflow [1])]
    (println result)))
```

### Durable execution model

Every workflow follows the same path: it is persisted as `RUNNABLE`, atomically claimed as
`RUNNING`, and either terminates or parks as `WAITING`. Workflow code is never driven
directly by an API caller.

`make-workflow-engine` is an active resource constructor: it starts exactly one
engine-owned recovery worker. `start-workflow` submits and waits for the terminal result:

```clojure
;; The caller blocks until the workflow completes.
(let [result (intemporal/start-workflow engine my-wf [arg])]
  (println result))
```

`submit-workflow` uses the same engine and returns immediately. The engine polls only
`RUNNABLE` workflows and due timed waits, atomically claims them as `RUNNING`, and resumes
them through a bounded drive pool. Indefinite signal/join waits are absent from scans
until a signal, cancellation, or child completion durably wakes them.

```clojure
(let [engine (intemporal/make-workflow-engine
               :threads 4
               :owner-id "orders-pod-0"
               :poll-ms 100
               :workflow-concurrency 4)]
  (try
    (let [{:keys [workflow-id]}
          (intemporal/submit-workflow engine my-wf [arg]
                                       :workflow-id "my-wf")]
      (intemporal/await-workflow engine workflow-id))
    (finally
      ;; No second worker handle is needed. The default shutdown grace is 5s;
      ;; pass an explicit value when your activities need longer to drain.
      (intemporal/shutdown-engine engine 10))))
```

A restarted process automatically requeues its own interrupted `RUNNING` work when its
new engine uses the same stable `:owner-id`. One stable owner id must identify at most one
live process; the stores do not yet implement leases or fencing. The generated
`ephemeral-*` owner is suitable for local/in-memory use, not cross-process recovery.

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

**Synchronous** — `run-child-workflow` schedules an independent child and immediately
joins its handle:
```clojure
(intemporal/defn-workflow parent [x]
  (let [a     (intemporal/stub #'my-activity)
        child (intemporal/run-child-workflow child-workflow [(* x 10)])]
    {:own (a x) :child child}))
```

**Asynchronous** — the child is the same first-class persisted workflow, but the parent
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
;; The engine owns execution for both blocking and asynchronous submission.
(intemporal/with-workflow-engine [engine {:threads 4}]
  (intemporal/start-workflow engine my-workflow [arg]))

(let [engine (intemporal/make-workflow-engine :threads 4
                                              :store my-store
                                              :owner-id "pod-0"
                                              :protocols {MyActivities (->MyActivitiesImpl)}
                                              :enable-logging true)
      {:keys [workflow-id]} (intemporal/submit-workflow engine my-wf [arg])]
  (try
    (intemporal/await-workflow engine workflow-id :timeout-ms 30000)
    (finally
      (intemporal/shutdown-engine engine 10))))
```

`make-workflow-engine` options:

| Option | Default | Description |
|---|---|---|
| `:store` | `InMemoryStore` | Persistence backend (see Stores) |
| `:threads` | unbounded | Maximum concurrent activities (JVM) |
| `:queue-capacity` | 8 × threads | Pending activity submissions for a bounded executor |
| `:submit-timeout-ms` | activity timeout | Maximum saturated submission wait (JVM) |
| `:default-timeout-ms` | 30000 | Default timeout for one activity attempt |
| `:owner-id` | generated `ephemeral-*` | Stable identity required for restart recovery |
| `:poll-ms` | 10 | Durable scheduling poll interval |
| `:batch-size` | 100 | Maximum claims per poll |
| `:workflow-concurrency` | 4 | Maximum concurrent workflow drives |
| `:protocols` | `{}` | Protocol activity implementations installed before recovery |
| `:worker?` | `true` | `false` creates a submission/status-only client |
| `:enable-logging` | `false` | Retain observer events in the engine's `:log` atom |
| `:enable-telemetry` | `true` | OpenTelemetry tracing (JVM only) |
| `:observer` | — | Additional `IWorkflowObserver` instance |

With `:worker? false`, `submit-workflow`, status, signal, and cancellation APIs remain
available, but `start-workflow` and `resume-workflow` reject the client. Shutdown stops
polling, drains or interrupts JVM workflow drives within the requested grace period,
releases ownership, and then closes the activity executor.

## Stores

Three `IStore` implementations ship with the library:

Every store factory accepts `:checked?`. Its default, `:auto`, installs
`intemporal.store.checked/CheckedStore` only when spec assertions are enabled at
construction. Use `true` to always install the validating decorator or `false` to always
return the raw backend. A checked closeable store delegates close to its backend.

### InMemoryStore
An in-process atom-based store. Default; adequate for development and single-process
CLJS (the CLJS worker is also single-process). No persistence across restarts.

```clojure
(require '[intemporal.store :as store])
(store/create-store)
```

### JDBC (PostgreSQL / MariaDB)
Persistent store backed by PostgreSQL or MariaDB. Event payloads use the library's EDN
codec. Runs Migratus migrations on construction and requires the `:jdbc` deps.edn alias.

```clojure
(require '[intemporal.store.jdbc :as jdbc])
(def store (jdbc/create-store "jdbc:postgresql://localhost:5432/mydb?user=...&password=..."))
;; .close the store to release the HikariCP pool
```

Scheduling uses `run_state`, `next_run_at`, and monotonic `wake_version` columns.
`claim-runnable!` locks and claims only `RUNNABLE` rows or `WAITING` rows whose deadline
is due. `park-workflow!` checks the drive's captured wake version, so a concurrent wake
cannot be overwritten by the transition to `WAITING`.

### FoundationDB
Persistent store backed by FoundationDB, using subspaces for history, signals, ownership,
ready/deadline scheduling indexes, and child linkage. Indefinite `WAITING` workflows have
no scheduling-index entry. Requires the `:fdb` deps.edn alias.

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
| `await-workflow` | Blocks; result always includes `:workflow-id` and `:status`               | Returns a promesa promise of the same map                                |
| Engine loop      | `loop`/`recur` + `LinkedBlockingQueue` wake channel                      | Recursive promise chain with `setTimeout`                                |
| Activity results | Direct return value                                                      | Always a promise (use `blet`/`bthen` from `intemporal.internal.context`) |
| Suspensions      | Subclass `Error` (bypass `catch Exception`)                              | Plain `deftype`, not `js/Error` (bypass `catch js/Error`)                |
| Saga catch       | `(catch Exception e …)`                                                  | `(catch :default e …)` + rethrow `suspension?`                           |
| OpenTelemetry    | Supported via `:enable-telemetry`                                        | Not available                                                            |
| Worker           | Daemon thread with exponential backoff                                   | `js/setTimeout` tick, single-threaded                                    |
| Vars (`#'`)      | Stable qualified name                                                    | Demangled JS name; `defn-workflow` handles registration uniformly        |

Internal context macros (`blet`, `bthen`, `bfinally`) restore the dynamic
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

To run locally, run `bin/build-doc` once, then `npx shadow-cljs watch doc`, and
open `http://localhost:8000`.

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

See [DEVELOPMENT.md](DEVELOPMENT.md) for detailed development commands and test
organization, and [architecture.md](architecture.md) for engine internals.
