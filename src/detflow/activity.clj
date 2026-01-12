(ns detflow.activity
  (:require [detflow.runtime :as rt]))

(defmacro defactivity [name args & body]
  `(swap! rt/activity-registry assoc ~(keyword (str *ns*) (str name))
          (fn ~args ~@body)))