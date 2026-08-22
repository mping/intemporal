(ns intemporal.utils
  (:require
   [intemporal.internal.clock :as clock]))

(defn current-time-ms []
  (clock/now-ms))
