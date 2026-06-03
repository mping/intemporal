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

`with-failure` registers a compensation for a step. If the step succeeds but the
workflow later fails, registered compensations run in reverse order (LIFO). A
step that fails registers no compensation (nothing was created, so nothing to
undo). Compensations should themselves be activity stubs so they are durable and
replay-safe.

```clojure
(defn booking-saga [order]
  (let [book-hotel    (intemporal/stub #'book-hotel)
        book-flight   (intemporal/stub #'book-flight)
        charge-card   (intemporal/stub #'charge-card)
        cancel-hotel  (intemporal/stub #'cancel-hotel)
        cancel-flight (intemporal/stub #'cancel-flight)]
    (intemporal/with-failure [h (book-hotel order)]
      (cancel-hotel h))
    (intemporal/with-failure [f (book-flight order)]
      (cancel-flight f))
    ;; if charge-card throws, cancel-flight then cancel-hotel run automatically
    (charge-card order)))
```

`intemporal/add-compensation` is the underlying function if you need to register
a compensation thunk directly.

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
