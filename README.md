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
- [demo_workflow.clj](./dev/intemporal/demo_workflow.clj)
- [demo_automata.cljc](./dev/intemporal/demo_automata.cljc)
- [demo_saga.cljc](./dev/intemporal/demo_saga.cljc)

> Note that when the runtime is javascript, all activities will return a promise.
> Thus, the use of `promesa.core/let` and/or `intemporal.macros/env-let` is advised

```clojure

(ns intemporal.demo-workflow
  (:require [intemporal.store :as store]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-function stub-protocol defn-workflow]]))

;;;;
;; demo

(defn nested-fn [a]
  [a :nested])

(defn activity-fn [a]
  (let [f (stub-function nested-fn)]
    (conj a :activity (f :sub))))

(defprotocol MyActivities
  (some-stuff [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (some-stuff [this a] (println "record was called:" ) [a :child]))

(defn-workflow my-workflow [i]
  (let [sf (stub-function activity-fn)
        pr (stub-protocol MyActivities {})]
    (conj [:root]
          (sf [1])
          (some-stuff pr :X))))

(def mstore (store/make-memstore))
(def worker (w/start-worker! mstore {`MyActivities (->MyActivitiesImpl)}))

;; note that in cljs, this returns a promise
(def res (w/with-env {:store mstore}
           (my-workflow 1)))

(defn pprint-table [table]
  (clojure.pprint/print-table table))

(defn print-tables []
  (let [tasks (vals @(::store/task-store @mstore))
        events (->> (vals @(::store/history-store @mstore))
                    (flatten)
                    (sort-by :id))]
    (pprint-table tasks)
    (pprint-table events)))

(print-tables)
```

# TODO

- [X] Activites + Workflows
- [x] Pass stub options
  - [x] Discard `ActivityOptions` 
  - [x] Protocol options
  - [x] Regular fn options
- [x] Convert to `.cljc` 
- [x] workers + queues
- [ ] function versioning
- [x] saga
