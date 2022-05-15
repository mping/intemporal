(ns intemporal.utils.check
  (:require [intemporal.error :as error]))

(defmacro check [cond message & args]
  `(when-not ~cond
     (throw (error/workflow-error (format ~message ~@args) {}))))
