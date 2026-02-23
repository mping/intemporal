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
