# intemporal

![Continuous Integration](https://github.com/mping/intemporal/actions/workflows/clojure.yml/badge.svg)

## (in)temporal - NOT temporal

A Clojure library in the spirit of temporal.io or uber cadence.
Lets you define a function with side effects, and persist/resume the state of the function.

> :warning: use at your own peril, NOT production ready

Two concepts apply:
- **Activities**: Either a protocol+impl, or a function. Handles side-effects
- **Workflows**: Functions that orchestrate activities, and are resillient. 
                 If a process crashes, the workflow should be able to safely resume with `at-least-once` semantics

## Usage

Examples:
- [doc.cljs](./doc/intemporal/doc.cljs)
- [automata.cljs](./doc/intemporal/automata.cljs)

> Note that when the runtime is javascript, all activities will return a promise.
> Thus, the use of `promesa.core/let` is advised

```clojure
(ns intemporal.demo
  (:require [intemporal.core :as intemporal]
            [intemporal.store :as store]))

;; Activities are regular functions
(defn activity-fn [a]
  [:processed a])

;; Protocols can also be used as activities
(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a] [a :child]))

;; Workflows orchestrate activities via stubs
(defn my-workflow [i]
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

### Saga / compensations

Create a saga with `intemporal/saga`, register a compensation for each step *after*
it succeeds with `intemporal/add-compensation`, and roll back from a catch block
with `intemporal/compensate`. Compensations run in reverse registration order
(LIFO). A step that fails before its `add-compensation` registers nothing to undo.
Compensations should themselves call activity stubs so they are durable and
replay-safe.

Both real failures and workflow cancellation flow through the catch, so the one
idiom rolls back in either case. Catch `Exception`: the engine's normal
control-flow *suspensions* subclass `Error`, so they are excluded automatically
and propagate to the engine untouched.

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
          ;; if charge-card throws, the catch runs compensate -> cancel-flight then
          ;; cancel-hotel (LIFO) -> then rethrows so the workflow finalizes :failed
          (charge-card order)
          :booked))
      (catch Exception e
        (intemporal/compensate saga)
        (throw e)))))
```

Cancellation is a catchable `Exception`, so any `(catch Exception ...)` in a
workflow will intercept it — that is what lets a cancelled saga roll back.

In **ClojureScript** there is no `Error`/`Exception` split (everything is a
`js/Error`), so `(catch :default e)` would also catch suspensions. There, rethrow
them explicitly:

```clojure
      (catch :default e
        (when (intemporal/suspension? e) (throw e))   ;; engine control flow
        (intemporal/compensate saga)
        (throw e))
```

# TODO

- [X] Activites + Workflows
- [x] Pass stub options
  - [x] Discard `ActivityOptions` 
  - [x] Protocol options
  - [x] Regular fn options
- [x] Convert to `.cljc` 
- [x] Workers + Queues
- [x] Saga pattern
- [x] Workflow cancellation
- [x] OT tracing
- [x] Signals
