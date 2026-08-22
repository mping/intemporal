(ns intemporal.internal.throwable)

(defn caused-by?
  "True when throwable `t` or any cause is an instance of `klass`."
  [klass ^Throwable t]
  (loop [cause t]
    (cond
      (nil? cause) false
      (instance? klass cause) true
      :else (recur (.getCause ^Throwable cause)))))

(defn interrupted? [t]
  (caused-by? InterruptedException t))
