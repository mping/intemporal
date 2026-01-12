(ns detflow.common
  (:import (clojure.lang IExceptionInfo)))

(def ^:private suspend-type ::suspend)

;; The special exception used to pause execution without blocking threads.
(defn suspend!
  "Throws a data-carrying exception to pause the workflow."
  [wait-id]
  (throw (ex-info "Workflow Suspended"
                  {:type    suspend-type
                   :wait-id wait-id})))

(defn suspend?
  "Checks if an exception is a valid workflow suspension."
  [e]
  (and (instance? clojure.lang.ExceptionInfo e)
       (= (:type (ex-data e)) suspend-type)))

(defn get-suspend-id
  "Extracts the wait-id from a suspension exception."
  [e]
  (:wait-id (ex-data e)))


;; A wrapper for internal async task identifiers
(defrecord AsyncHandle [id]
  Object
  (toString [_]
    (str "<AsyncHandle task-id:" id ">")))

(defn async-handle? [obj]
  (instance? AsyncHandle obj))

;; Protocol for the storage layer
(defprotocol IHistoryStore
  (append-event [this workflow-id event])
  (get-history [this workflow-id]))

;; Protocol for the activity executor
(defprotocol IActivityExecutor
  (execute-activity [this activity-name args]))


