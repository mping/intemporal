# intemporal

![example workflow](https://github.com/mping/intemporal/actions/workflows/clojure.yml/badge.svg)

## (in)temporal - NOT temporal

A Clojure library in the spirit of temporal.io or uber cadence.
Two concepts:
- **Activities**: either a protocol+impl, or a function. Handles side-effects
- **Workflows**: pure functions that make use of `Activities`. Can be arbitrarily stopped/resumed 

## Usage

Examples:
- [hello_world.clj](./dev/intemporal/example/hello_world.clj)
- [protocols.clj](./dev/intemporal/example/protocol_activity.clj)
- [saga.clj](./dev/intemporal/example/saga.clj)

```clojure

(require '[intemporal.workflow :as w]
         '[intemporal.activity :as a]
         '[intemporal.store :as s])
(import '[intemporal.annotations ActivityOptions])

;; define your side-effects
(defprotocol ActivityProtoExample
  (run [this arg])
  (query [this arg])
  (cancel [this]))

;; can be a function too
(defn run-side-effect [_] :side-effect)

(defrecord MyProtoImpl []
  ActivityProtoExample
  (run [this arg] (run-side-effect arg))
  ;; we can pass additional metadata
  (^{ActivityOptions {:idempotent true}} query [this arg] (run-side-effect arg))
  (^{ActivityOptions {:idempotent true}} cancel [_] :cancel))

;; register the activity
(a/register-protocol ActivityProtoExample (->MyProtoImpl))

;; workflow: make use of your side effects
(defn my-workflow [arg]
  ;; activities should be stubbed
  (let [stub (a/stub-protocol ActivityProtoExample)]
    (try
      (if (query stub :query)
        (run stub :run)
        nil)
      (catch Exception e
        (cancel stub)
        (throw e)))))

;; register your workflow, we're actually calling `alter-var-root`
;; the store that is passed here is the one that will be used to persist/query
(w/register-workflow store/memstore my-workflow)

;; to use, just call your workflow function
(my-workflow "foo")

;; later, given a workflow id you can retry it:
(w/retry store/memstore my-workflow rid)


```

## License

Copyright © 2022

This program and the accompanying materials are made available under the
terms of the Eclipse Public License 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0.

This Source Code may also be made available under the following Secondary
Licenses when the conditions for such availability set forth in the Eclipse
Public License, v. 2.0 are satisfied: GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or (at your
option) any later version, with the GNU Classpath Exception which is available
at https://www.gnu.org/software/classpath/license.html.
