# intemporal

![example workflow](https://github.com/mping/intemporal/actions/workflows/clojure.yml/badge.svg)

## (in)temporal - NOT temporal

A Clojure library in the spirit of temporal.io or uber cadence.
Lets you define a function with side effects, and persist/resume the state of the function.

> :warning: use at your own peril, NOT production ready


Two concepts apply:
- **Activities**: either a protocol+impl, or a function. Handles side-effects
- **Workflows**: pure functions that make use of `Activities`. Can be arbitrarily stopped/resumed 

## Usage

Examples:
- [demo_workflow.clj](./dev/intemporal2/demo_workflow.clj)
- [demo_automata.clj](./dev/intemporal2/demo_automata.clj)
- [demo_saga.cljc](./dev/intemporal2/demo_saga.cljc)

```clojure

(ns intemporal2.demo-workflow
  (:require [intemporal2.store :as store]
            [intemporal2.workflow :as w]
            [intemporal2.macros :refer [stub-function stub-protocol defn-workflow]]))

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
- [x] Idempotency handling
- [x] SQL store
- [x] Pass stub options
  - [x] Discard `ActivityOptions` 
  - [x] Protocol options
  - [x] Regular fn options
- [x] Convert to `.cljc` 
- [ ] workers + queues
- [ ] function versioning
