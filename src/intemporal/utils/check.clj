(ns intemporal.utils.check
  (:require [intemporal.error :as error])
  (:import [intemporal.error ExceptionError]))

(defmacro check [cond message & args]
  `(when-not ~cond
     (throw (error/workflow-error (format ~message ~@args) {}))))
