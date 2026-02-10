(ns intemporal.utils)

(defn current-time-ms []
  #?(:clj (System/currentTimeMillis)
     :cljs (js/Date.now)))
