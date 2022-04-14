(ns intemporal.utils.check)

(defmacro check [cond message & args]
  `(when-not ~cond
     (throw (IllegalArgumentException. (format ~message ~@args)))))
