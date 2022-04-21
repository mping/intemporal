(ns intemporal.workflow
  (:require [intemporal.store :as s]
            [intemporal.utils.check :refer [check]])
  (:import [java.util UUID]))

(defprotocol IWorkflowRun
  ;; accessors
  (-workflow-id [this])
  (-workflow-runid [this])
  (-workflow-compensations [this])
  ;; local access
  (-add-compensation [this compensation-fn])
  ;; db access
  (-save-event! [this event-type payload])
  (-save-activity-event! [this activity-id event-type payload])
  (-reset-history-cursor [this] "Resets the cursor")
  (-next-history-event [this] "Advance-only cursor for the events of this workflow run"))

(defrecord WorkflowRun [store state workflow-id run-id]
  IWorkflowRun
  (-workflow-id [_] workflow-id)
  (-workflow-runid [_] run-id)
  (-workflow-compensations [_]
    (:compensations @state))
  (-add-compensation [_ compensation-fn]
    (swap! state update-in [:compensations] conj compensation-fn))
  (-save-event! [_ event-type payload]
    (s/save-workflow-event store workflow-id run-id event-type payload))
  (-save-activity-event! [_ activity-id event-type payload]
    (s/save-activity-event store workflow-id run-id activity-id event-type payload))
  (-reset-history-cursor [this]
    (swap! state assoc :events-cursor nil))
  (-next-history-event [this]
    (let [evt (get @state :events-cursor)
          res (if evt (s/next-event store workflow-id run-id (:id evt))
                      (s/next-event store workflow-id run-id))]
      ;; advance
      (swap! state assoc :events-cursor res)
      res)))

;; holds the data for the current workflow
(def ^:dynamic current-workflow-run nil)

(defn- make-workflow-run
  "Makes a new workflow run"
  ([store wid]
   (make-workflow-run store wid (UUID/randomUUID)))
  ([store wid runid]
   (let [runid runid
         state (atom {:events-cursor nil
                      :compensations []})]
     (->WorkflowRun store state wid runid))))

(defn- sym->workflow-id [sym]
  (symbol (str (ns-name *ns*)) (str sym)))

;; current workflow accessors
(defn current-workflow-id []
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (-workflow-id current-workflow-run))

(defn current-workflow-runid []
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (-workflow-runid current-workflow-run))

(defn save-activity-event [activity-id event-type payload]
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (-save-activity-event! current-workflow-run activity-id event-type payload))

(defn next-history-event []
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (-next-history-event current-workflow-run))

(defn add-compensation [f]
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (-add-compensation current-workflow-run f))

;;;;
;;

(defn compensate []
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (let [actions (-workflow-compensations current-workflow-run)]
    (doseq [compensation actions]
      (compensation))))

;;;;
;; worfklow is just a function

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
            (with-bindings {#'current-workflow-run (or current-workflow-run (make-workflow-run astore wid))}
              ;; we're going to track events from the start
              (-reset-history-cursor current-workflow-run)
              (let [vargs (into [] args)]
                ;(println "next: " (-next-history-event current-workflow-run))
                ;(println "fargs: " vargs)
                (-save-event! current-workflow-run ::invoke vargs)
                (try
                  (let [result (apply f args)]
                    ;(println "res: " (-next-history-event current-workflow-run))
                    ;(println "fres: " result)
                    (-save-event! current-workflow-run ::success result))
                  (catch Exception e
                    ;(println "reserr: " (-next-history-event current-workflow-run))
                    ;(println "fe: " e)
                    (-save-event! current-workflow-run ::failure e)
                    (throw e)))))))))
    `(do
       (check (satisfies? s/WorkflowStore ~store) "%s does not implement WorkflowStore" ~store)
       (s/save-workflow-definition ~store ~wid ~fvar)
       nil)))

(defn retry
  "Retries `f` with given runid `runid`"
  [store f runid]
  (let [fsym (symbol f)
        wid  fsym]
    (with-bindings {#'current-workflow-run (make-workflow-run store wid runid)}
      (let [invoke-evt (-next-history-event current-workflow-run)]
        ;; TODO check that invoke-evt matches function we're calling

        ;; f can accept any number of args
        (apply f (:payload invoke-evt))))))
