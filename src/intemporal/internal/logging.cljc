(ns intemporal.internal.logging
  (:require [clojure.string :as str]
            [taoensso.telemere :as t]
            #?(:cljs [goog.string :as gstring])
            #?(:cljs [goog.string.format])))

(defmacro with-mdc
  "Evaluates body with given map merged into telemere's signal context."
  [m & body]
  ;; (t/log! {:level :debug :data {:sym (:sym task)}} ["Found replay event for task with id" (:id task)]))
  `(t/with-xfn (fn [s#] (update s# :data merge ~m)) ~@body))

(defn fmat [s args]
  #?(:clj  (apply format s args)
     :cljs (apply gstring/format s args)))

(defmacro expand-log [level & args]
  (let [err-type (if (:ns &env) 'js/Error 'Throwable)]
    `(let [args# [~@args]
           [err# msgs#] (if (instance? ~err-type (first args#))
                          [(first args#) (rest args#)]
                          [nil args#])
           msg# (if (seq msgs#)
                  (str/join " " msgs#)
                  (str err#))]
       (t/log! {:level ~level :msg msg# :error err#}))))

(defmacro expand-logf [level & args]
  (let [err-type (if (:ns &env) 'js/Error 'Throwable)]
    `(let [args# [~@args]
           [err# fmt# fmt-args#] (if (instance? ~err-type (first args#))
                                   [(first args#) (second args#) (drop 2 args#)]
                                   [nil (first args#) (rest args#)])]
       (t/log! {:level ~level
                :msg (fmat fmt# fmt-args#)
                :error err#}))))

;; --- Print-style (Variadic) ---
(defmacro trace [& args] `(expand-log :trace ~@args))
(defmacro debug [& args] `(expand-log :debug ~@args))
(defmacro info  [& args] `(expand-log :info  ~@args))
(defmacro warn  [& args] `(expand-log :warn  ~@args))
(defmacro error [& args] `(expand-log :error ~@args))
(defmacro fatal [& args] `(expand-log :fatal ~@args))

;; --- Format-style (Printf) ---
(defmacro tracef [& args] `(expand-logf :trace ~@args))
(defmacro debugf [& args] `(expand-logf :debug ~@args))
(defmacro infof  [& args] `(expand-logf :info  ~@args))
(defmacro warnf  [& args] `(expand-logf :warn  ~@args))
(defmacro errorf [& args] `(expand-logf :error ~@args))
(defmacro fatalf [& args] `(expand-logf :fatal ~@args))

