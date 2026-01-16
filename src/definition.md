# Definition

Write a minimal core for a deterministic workflow runner in clojure

- activities are plain functions
- workflows are plain functions
- inside workflows, activities are stubbed
- the workflow runner shall accept as arguments: a data store (eg memory store), and an activity executor
- both the store and executor should have protocols
- workflows can also run activities asynchronously
- should support signals and timers (sleep)

To suspend execution, we shall use an exception-based mechanism.

History should be deterministic and linear.

When starting a workflow, we shall use a dynamic var to hold all runtime data such as history, etc.

The code should be in a single namespace, in a single file

# Example

```clojure

(defn activity-fn [arg]
  (println "activity called" arg)
  [:some arg])

(defn my-flow [id]
  (println "Workflow start")
  (let [act   (stub activity-fn)
        prom  (async #(act 2))]

    {:status :shipped
     :res (act 1)
     :prom (join prom)}))

;; then, start the workflow
(start-workflow (->InMemoryStore (atom {}))
                (reify IActivityExecutor
                  (execute-activity [_ actname args]
                    (let [act (get @activity-registry actname)]
                      (apply act args))))
                my-flow
                [123]
                "my-flow")
```