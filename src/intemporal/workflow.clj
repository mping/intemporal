(ns intemporal.workflow
  (:require [intemporal.store :as s]
            [intemporal.utils.check :refer [check]])
  (:import [java.util UUID]))


(defn make-workflow-state [store id runid sym]
  (atom {:id            id
         :runid         runid
         :function      sym
         :store         store
         :compensations []}))

(def ^:dynamic current-workflow nil)

(defn- workflow-id [sym]
  (symbol (str (ns-name *ns*)) (str sym)))

(defn- workflow-runid [_sym]
  (UUID/randomUUID))

;; current workflow accessors
(defn current-workflow-id []
  (check (some? current-workflow) "Not running within a workflow function, did you call `register-workflow`?")
  (get @current-workflow :id))

(defn current-workflow-runid []
  (check (some? current-workflow) "Not running within a workflow function, did you call `register-workflow`?")
  (get @current-workflow :runid))

(defn current-workflow-store []
  (check (some? current-workflow) "Not running within a workflow function, did you call `register-workflow`?")
  (get @current-workflow :store))

;;;;
;;
(defn add-compensation [f]
  (swap! current-workflow update-in [:compensations] conj f))

(defn compensate []
  (check (some? current-workflow) "Not running within a workflow function, did you call `register-workflow`?")
  (let [actions (:compensations @current-workflow)]
    (doseq [compensation actions]
      (compensation))))

;;;;
;; worfklow is just a function

(defmacro register-workflow
  "Registers"
  [store fsym]
  (let [fvar  (resolve fsym)
        wid   (workflow-id fsym)]
    (check (bound? fvar) "%s: Should be bound" fsym)
    (alter-var-root fvar
      (fn [f]
       (fn proxy-workflow [& args]
         (let [rid   (workflow-runid fsym)
               vargs  (into [] args)
               astore (var-get (resolve store))]
           (with-bindings {#'current-workflow (make-workflow-state astore wid rid fsym)}
             (s/save-workflow-event astore rid ::invoke wid vargs)
             (try
               (let [result (apply f args)]
                 (try
                   result
                   (finally
                     (s/save-workflow-event astore rid ::success wid result))))
               (catch Exception e
                 (s/save-workflow-event astore rid ::failure wid e)
                 (throw e))))))))
    `(do
       (check (satisfies? s/WorkflowStore ~store) "%s does not implement WorkflowStore" ~store)
       (s/save-workflow-definition ~store ~wid ~fvar)
       nil)))
