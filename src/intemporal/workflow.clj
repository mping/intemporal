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

(defn save-workflow-event [event-type payload]
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (e/-save-workflow-event! current-workflow-run event-type payload))

(defn save-activity-event [activity-id event-type payload]
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (e/-save-activity-event! current-workflow-run activity-id event-type payload))

;; TODO supply sid: (workflow-id/activity-id)
;; TODO rename to next-event-match-or-nil
(defn next-event-matches [event-type]
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (e/-next-event-matches current-workflow-run event-type))

(defn advance-history-cursor []
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (e/-advance-history-cursor current-workflow-run))

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

              (let [vargs (if (next-event-matches ::invoke)
                            (:payload (advance-history-cursor))
                            (do
                              (save-workflow-event ::invoke args)
                              (into [] args)))]
                (try
                  (let [result (apply f vargs)]
                    ;; if it throws we go to the catch
                    (if (next-event-matches ::success)
                      (:payload (advance-history-cursor))
                      (do
                        (save-workflow-event ::success result)
                        result)))
                  (catch Exception e
                    (if (next-event-matches ::failure)
                      (:payload (advance-history-cursor))
                      (do
                        (save-workflow-event ::failure e)
                        (throw e)))))))))))

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
      (let [invoke-evt (e/-advance-history-cursor current-workflow-run)]
        (when-not (some? invoke-evt)
          (throw (IllegalArgumentException. (format "%s: runid %s not found" fsym runid))))

        (when-not (= (:type invoke-evt) ::invoke)
          (throw (IllegalArgumentException. (format "%s: event for run %s is not ::invoke" fsym runid))))

        (e/-reset-history-cursor current-workflow-run)
        (apply f (:payload invoke-evt))))))

