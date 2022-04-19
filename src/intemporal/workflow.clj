(ns intemporal.workflow
  (:require [intemporal.store :as s]
            [intemporal.utils.check :refer [check]])
  (:import [java.util UUID]))


(defn make-workflow-state [store id runid sym _body-sym]
  (atom {:id            id
         :runid         runid
         :function      sym
         :store         store
         :compensations []}))

(def ^:dynamic current-workflow nil)

(defn workflow-id [sym]
  (str (ns-name *ns*) "/" sym))

(defn workflow-runid [_sym]
  (UUID/randomUUID))

;; current workflow accessors
(defn current-workflow-id []
  (check (some? current-workflow) "Not running within a workflow function!")
  (get @current-workflow :id))

(defn current-workflow-runid []
  (check (some? current-workflow) "Not running within a workflow function!")
  (get @current-workflow :runid))

(defn current-workflow-store []
  (check (some? current-workflow) "Not running within a workflow function!")
  (get @current-workflow :store))

;;;;
;;
(defn add-compensation [f]
  (swap! current-workflow update-in [:compensations] conj f))

(defn compensate []
  (let [actions (:compensations @current-workflow)]
    (doseq [compensation actions]
      (compensation))))

;;;;
;; worfklow is just a function

(defmacro defn-workflow [sym args & body]
  (let [wid (workflow-id sym)
        rid (workflow-runid sym)]
    `(do
       (declare ~sym)
       (s/save-workflow-definition s/memstore ~wid (resolve '~sym))
       (defn ~sym ~args
         (with-bindings {#'current-workflow (make-workflow-state s/memstore ~wid ~rid #'~sym '~body)}
           (let [rid#   (current-workflow-runid)
                 store# (current-workflow-store)]
             (s/save-workflow-event store# rid# ::invoke ~wid [~@args])
             (try
               (let [result# ~@body]
                 (try
                   result#
                   (finally
                     (s/save-workflow-event store# rid# ::success ~wid result#)))
                 result#)
               (catch Exception e#
                 (s/save-workflow-event store# rid# ::failure ~wid e#)
                 (throw e#)))))))))

(defn restart [runid])
(s/clear s/memstore)
