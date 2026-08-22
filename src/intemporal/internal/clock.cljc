(ns intemporal.internal.clock)

(defn now-ms
  "Return wall-clock epoch milliseconds. Workflow code must not call this
   directly; engine operations persist any time value that affects replay."
  []
  #?(:clj (System/currentTimeMillis)
     :cljs (js/Date.now)))
