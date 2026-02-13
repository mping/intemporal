(ns intemporal.internal.logging
  (:require [taoensso.telemere :as t]
            #?(:cljs [goog.string :as gstring])
            #?(:cljs [goog.string.format])))

(defmacro with-mdc
  "Evaluates body with given map merged into telemere's signal context."
  [m & body]
  ;; (t/log! {:level :debug :data {:sym (:sym task)}} ["Found replay event for task with id" (:id task)]))
  `(t/with-ctx {:data ~m} ~@body))

(defn- fmt [s args]
  #?(:clj  (apply format s args)
     :cljs (apply gstring/format s args)))

;; Print-style: (info msg) or (info throwable msg)
(defn trace  [& args] (t/log! :trace (last args)))
(defn debug  [& args] (t/log! :debug (last args)))
(defn info   [& args] (t/log! :info  (last args)))
(defn warn   [& args] (t/log! :warn  (last args)))
(defn error  [& args] (t/log! :error (last args)))
(defn fatal  [& args] (t/log! :fatal (last args)))

;; Format-style: (infof fmt args...) or (infof throwable fmt args...)
(defn tracef [& args]
  (if (string? (first args))
    (t/log! :trace (fmt (first args) (rest args)))
    (t/log! {:level :trace :error (first args)} (fmt (second args) (nnext args)))))

(defn debugf [& args]
  (if (string? (first args))
    (t/log! :debug (fmt (first args) (rest args)))
    (t/log! {:level :debug :error (first args)} (fmt (second args) (nnext args)))))

(defn infof [& args]
  (if (string? (first args))
    (t/log! :info (fmt (first args) (rest args)))
    (t/log! {:level :info :error (first args)} (fmt (second args) (nnext args)))))

(defn warnf [& args]
  (if (string? (first args))
    (t/log! :warn (fmt (first args) (rest args)))
    (t/log! {:level :warn :error (first args)} (fmt (second args) (nnext args)))))

(defn errorf [& args]
  (if (string? (first args))
    (t/log! :error (fmt (first args) (rest args)))
    (t/log! {:level :error :error (first args)} (fmt (second args) (nnext args)))))

(defn fatalf [& args]
  (if (string? (first args))
    (t/log! :fatal (fmt (first args) (rest args)))
    (t/log! {:level :fatal :error (first args)} (fmt (second args) (nnext args)))))
