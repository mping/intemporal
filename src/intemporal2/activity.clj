(ns intemporal2.activity
  (:require [intemporal2.store :as store]))

(set! *warn-on-reflection* true)

(defmacro stub-function
  [f & opts]
  (fn [& args]
    (try
      (let [r (apply f args)]
        r)
      (catch Throwable t
        (throw t)))))