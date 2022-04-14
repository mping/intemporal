(ns intemporal.workflow
  (:require [intemporal.store :as s]
            [intemporal.utils.check :refer [check]])
  (:import [java.util UUID]))


(defn make-workflow-state [id runid sym _body-sym]
  (atom {:id            id
         :runid         runid
         :function      sym
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
    (s/save-workflow-definition s/memstore wid sym)
    `(defn ~sym ~args
       (with-bindings {#'current-workflow (make-workflow-state ~wid ~rid #'~sym '~body)}
         (let [rid#  (current-workflow-runid)]
           (s/save-workflow-event s/memstore rid# ::invoke ~wid [~@args])
           (try
             (let [result# ~@body]
               (try
                 result#
                 (finally
                   (s/save-workflow-event s/memstore rid# ::success ~wid result#)))
               result#)
             (catch Exception e#
               (s/save-workflow-event s/memstore rid# ::failure ~wid e#)
               (throw e#))))))))

(defn restart [runid])