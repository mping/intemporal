(ns intemporal.workflow
  "Main namespace. A worfklow definition is a function that is proxied to save its arguments and result/error."
  (:require [intemporal.store :as s]
            [intemporal.workflow.execution :as e]
            [intemporal.utils.check :refer [check]]))

;; holds the data for the current workflow
;; is a dynamic var so we can rebind each time the workflow function is called
(def ^:dynamic current-workflow-run nil)

;; current workflow accessors
(defn current-workflow-id []
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (e/-workflow-id current-workflow-run))

(defn current-workflow-runid []
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (e/-workflow-runid current-workflow-run))

(defn save-activity-event [activity-id event-type payload]
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (e/-save-activity-event! current-workflow-run activity-id event-type payload))

(defn add-compensation [f]
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (e/-add-compensation current-workflow-run f))

;;;;
;;

(defn compensate
  "Calls all compensation functions in order.
  If any compensation function fails, the remaining functions will NOT be called."
  []
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (let [actions (e/-workflow-compensations current-workflow-run)]
    (doseq [compensation actions]
      (compensation))))

;;;;
;; worfklow is just a function

(defn- sym->workflow-id [sym]
  (symbol (str (ns-name *ns*)) (str sym)))

(defmacro register-workflow
  "Registers function `fsym`, using `store` to keep track of executions.
  Replaces the function var by a proxy that saves execution to the store."
  [store fsym]
  (let [fvar (resolve fsym)
        wid  (sym->workflow-id fsym)]
    (check (bound? fvar) "%s: Should be bound" fsym)
    (alter-var-root fvar
      (fn [f]
        (fn proxy-workflow [& args]
          (let [astore (var-get (resolve store))]
            (with-bindings {#'current-workflow-run (or current-workflow-run (e/make-workflow-execution astore wid))}
              ;; we're going to track events from the start
              (e/-reset-history-cursor current-workflow-run)
              (let [vargs (into [] args)]
                (e/-save-workflow-event! current-workflow-run ::invoke vargs)
                (try
                  (let [result (apply f args)]
                    ;; TODO check that f is the next evt
                    (e/-save-workflow-event! current-workflow-run ::success result))
                  (catch Exception e
                    (e/-save-workflow-event! current-workflow-run ::failure e)
                    (throw e)))))))))
    `(do
       (check (satisfies? s/WorkflowStore ~store) "%s does not implement WorkflowStore" ~store)
       (s/save-workflow-definition ~store ~wid ~fvar)
       nil)))

(defn retry
  "Retries `f` with given `runid`, possibly resuming execution if `f` didn't reach a terminal state"
  [store f runid]
  (let [fsym (symbol f)
        wid  fsym]
    (with-bindings {#'current-workflow-run (e/make-workflow-execution store wid runid)}
      (let [invoke-evt (e/-next-history-event current-workflow-run)]
        ;; TODO check that invoke-evt matches function we're calling

        ;; f can accept any number of args
        (apply f (:payload invoke-evt))))))

