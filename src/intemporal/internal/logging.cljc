(ns intemporal.internal.logging
  #?(:clj  (:require [net.cgrand.macrovich :as macros])
                      ;[intemporal.workflow.internal :refer [trace! trace-async! add-event!]])
     :cljs (:require-macros [net.cgrand.macrovich :as macros]))
                            ;[intemporal.workflow.internal :refer [trace! trace-async! add-event!]]
                            ;[intemporal.macros :refer [env-let defn-workflow stub-function stub-protocol]])))
  #?(:clj (:import (org.slf4j MDC))))

(defmacro with-mdc
  [m & body]
  (macros/case
    :cljs
    `(do ~@body)

    :clj
    `(try
       (doseq [[k# v#] ~m]
         (MDC/put (name k#) (str v#)))
       (do ~@body)
       (finally
         (doseq [k# (keys ~m)]
           (MDC/remove (name k#)))))))

;; level-specific macros

(defn logp [& args]
  (macros/case
    :clj (apply println args)
    :cljs (apply js/console.log args)))

(defn logf [& args]
  (macros/case
    :clj (apply println args)
    :cljs (apply js/console.log args)))

(defmacro trace
  "Trace level logging using print-style args.
  Use the 'logging.readable' namespace to avoid wrapping args in pr-str."
  {:arglists '([message & more] [throwable message & more])}
  [& args]
  `(logp :trace ~@args))

(defmacro debug
  "Debug level logging using print-style args.
  Use the 'logging.readable' namespace to avoid wrapping args in pr-str."
  {:arglists '([message & more] [throwable message & more])}
  [& args]
  `(logp :debug ~@args))

(defmacro info
  "Info level logging using print-style args.
  Use the 'logging.readable' namespace to avoid wrapping args in pr-str."
  {:arglists '([message & more] [throwable message & more])}
  [& args]
  `(logp :info ~@args))

(defmacro warn
  "Warn level logging using print-style args.
  Use the 'logging.readable' namespace to avoid wrapping args in pr-str."
  {:arglists '([message & more] [throwable message & more])}
  [& args]
  `(logp :warn ~@args))

(defmacro error
  "Error level logging using print-style args.
  Use the 'logging.readable' namespace to avoid wrapping args in pr-str."
  {:arglists '([message & more] [throwable message & more])}
  [& args]
  `(logp :error ~@args))

(defmacro fatal
  "Fatal level logging using print-style args.
  Use the 'logging.readable' namespace to avoid wrapping args in pr-str."
  {:arglists '([message & more] [throwable message & more])}
  [& args]
  `(logp :fatal ~@args))

(defmacro tracef
  "Trace level logging using format.
  Use the 'logging.readable' namespace to avoid wrapping args in pr-str."
  {:arglists '([fmt & fmt-args] [throwable fmt & fmt-args])}
  [& args]
  `(logf :trace ~@args))

(defmacro debugf
  "Debug level logging using format.
  Use the 'logging.readable' namespace to avoid wrapping args in pr-str."
  {:arglists '([fmt & fmt-args] [throwable fmt & fmt-args])}
  [& args]
  `(logf :debug ~@args))

(defmacro infof
  "Info level logging using format.
  Use the 'logging.readable' namespace to avoid wrapping args in pr-str."
  {:arglists '([fmt & fmt-args] [throwable fmt & fmt-args])}
  [& args]
  `(logf :info ~@args))

(defmacro warnf
  "Warn level logging using format.
  Use the 'logging.readable' namespace to avoid wrapping args in pr-str."
  {:arglists '([fmt & fmt-args] [throwable fmt & fmt-args])}
  [& args]
  `(logf :warn ~@args))

(defmacro errorf
  "Error level logging using format.
  Use the 'logging.readable' namespace to avoid wrapping args in pr-str."
  {:arglists '([fmt & fmt-args] [throwable fmt & fmt-args])}
  [& args]
  `(logf :error ~@args))

(defmacro fatalf
  "Fatal level logging using format.
  Use the 'logging.readable' namespace to avoid wrapping args in pr-str."
  {:arglists '([fmt & fmt-args] [throwable fmt & fmt-args])}
  [& args]
  `(logf :fatal ~@args))