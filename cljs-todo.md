# CLJS Async Execution TODO

## Problem

Both async tests in `test/intemporal/tests/async_test.cljs` fail with:

```
Error: [object Promise] is not ISeqable
```

## Root Cause

`execution.cljc:164` (`process-pending-asyncs-parallel`) calls:

```clojure
(let [results (p/execute-activities-parallel executor pending-asyncs)
      ...
      completion-events (mapcat ... pending-asyncs results)]
```

On JVM, `execute-activities-parallel` is **synchronous** and returns a vector.
In CLJS (`runtime.cljs:179`), `execute-activities-parallel` returns a **`js/Promise`**
(via `js/Promise.allSettled`). The code tries to `mapcat` over the Promise object →
throws `[object Promise] is not ISeqable`.

## Affected Files

- `src/intemporal/internal/execution.cljc:154-203` — `process-pending-asyncs-parallel`
  assumes synchronous result from `execute-activities-parallel`
- `src/intemporal/internal/execution.cljc:501-584` — `run-workflow-internal` loop is
  fully synchronous, incompatible with CLJS async execution
- `src/intemporal/internal/runtime.cljs:157-191` — `execute-activities-parallel` correctly
  returns a Promise, but caller doesn't handle it

## Fix Required

`process-pending-asyncs-parallel` and `run-workflow-internal` need to be Promise-aware
in CLJS. Options:

1. **Add a CLJS-specific `execution.cljs`** that re-implements `run-workflow-internal`
   and `process-pending-asyncs-parallel` using Promise chaining (`.then`).

2. **Make `process-pending-asyncs-parallel` return a Promise in CLJS** and thread that
   through the `run-workflow-internal` loop (requires the loop itself to become async in
   CLJS — likely needs `reader conditionals` or a separate file).

`start-workflow.cljs` already has the right shape (`run-step` callback + `js/Promise`
wrapper), but the inner synchronous loop breaks when it hits parallel activities.
