(ns intemporal.utils.check
  (:require [intemporal.error :as error])
  (:import [intemporal.error WorkflowError]))

(defmacro check [cond message & args]
  `(when-not ~cond
     (throw (error/workflow-error (format ~message ~@args) {}))))
