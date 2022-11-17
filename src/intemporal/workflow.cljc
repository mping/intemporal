(ns intemporal.workflow
  "Main namespace. A worfklow definition is a function that is proxied to save its arguments and result/error."
  #?(:clj (:require [net.cgrand.macrovich :as macros])
     :cljs (:require-macros [net.cgrand.macrovich :as macros]
                            [intemporal.macros]))
  (:require [intemporal.store :as s]
            [intemporal.workflow.execution :as e]
            [intemporal.utils.check :refer [check]]
            [intemporal.utils.string :refer [fmt]]
            [taoensso.timbre :as log
             :refer [log  trace  debug  info  warn  error  fatal  report
                     logf tracef debugf infof warnf errorf fatalf reportf
                     spy]]))

;; holds the data for the current workflow, including the store used for persistence
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

(defn next-event []
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (let [nxt (e/-next-event current-workflow-run)]
    nxt))

(defn current-event []
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (let [nxt (e/-current-event current-workflow-run)]
    nxt))

(defn event-matches? [nxt uid event-type]
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (let [match? (and (some? nxt)
                    (= (:type nxt) event-type)
                    (= (:uid nxt) uid))]
    (log/debugf "[store] match? %s [%s %s]" match? event-type uid)
    match?))

(defn delete-history-forward []
  (check (some? current-workflow-run) "Not running within a workflow function, did you call `register-workflow`?")
  (e/-delete-history-forward current-workflow-run))

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

(defn proxy-workflow-fn
  [astore wid f args]
  (binding [current-workflow-run (or current-workflow-run (e/make-workflow-execution astore wid))]
    (let [vargs (if (event-matches? (next-event) wid ::invoke)
                  (:payload (advance-history-cursor))
                  (do
                    (save-workflow-event ::invoke args)
                    (into [] args)))]
      (try
        (let [result (apply f vargs)
              nxt    (next-event)]
          ;; if it throws we go to the catch
          (cond
            (event-matches? nxt wid ::success)
            (:payload (advance-history-cursor))

            (event-matches? nxt wid ::failure)
            (throw (:payload (advance-history-cursor))) ;; goes to catch

            ;; TODO handle divergence
            :else
            (do
              (save-workflow-event ::success result)
              result)))
        (catch #?(:clj Exception :cljs js/Error) e
          ;; did we just replay a throw?
          ;; TODO should match the exception too?
          (if (event-matches? (next-event) wid ::failure)
            (:payload (advance-history-cursor))
            (do
              (save-workflow-event ::failure e)
              (throw e))))))))

(defmacro register-workflow
  "Registers function `fsym`, using `store` to keep track of executions.
  Replaces the function var by a proxy that saves execution to the store."
  [store fsym]
  ;; TODO: throw if already registered
  (macros/case
    :cljs
    (let [fname (str fsym)
          wid   (sym->workflow-id fname)]
      `(let [f#       ~fsym
             proxied# (fn proxy-workflow# [& args#]
                        #_
                        (proxy-workflow-fn ~store '~wid f# args#))]
         (set! ~fsym proxied#)
         (do
           1
           (check (cljs.core/satisfies? s/WorkflowStore ~store) "store %s does not implement WorkflowStore" (s/id ~store))
           (s/save-workflow-definition ~store '~wid proxied#)
           nil)))

    :clj
    (let [fvar (resolve fsym)
          wid  (sym->workflow-id fsym)
          astore (var-get (resolve store))]
      (check (bound? fvar) "%s: Should be bound" fsym)
      (alter-var-root fvar
                      (fn [f]
                        (fn proxy-workflow [& args]
                          ;; the current-workflow-run will hold the store where all data will be saved
                          (proxy-workflow-fn astore wid f args))))

      `(do
         (check (satisfies? s/WorkflowStore ~store) "store %s does not implement WorkflowStore" (s/id ~store))
         (s/save-workflow-definition ~store '~wid ~fvar)
         nil))))

(defn retry
  "Retries `f` with given `runid`, possibly resuming execution if `f` didn't reach a terminal state."
  [store f runid]
  (let [[wid _wvar] (s/find-workflow store runid)]
    (check (some? wid) "No workflow found for runid %s" runid)
    ;; TODO: check if the workflow reached a terminal state yet
    (binding [current-workflow-run (e/make-workflow-execution store wid runid)]
      (let [invoke-evt (e/-advance-history-cursor current-workflow-run)]
        (when-not (some? invoke-evt)
          (throw (ex-info (fmt "%s: runid %s not found" wid runid) {})))

        (when-not (= (:type invoke-evt) ::invoke)
          (throw (ex-info (fmt "%s: event for run %s is %s, should be ::invoke" wid invoke-evt runid) {})))

        (e/-reset-history-cursor current-workflow-run)
        (apply f (:payload invoke-evt))))))

