(ns intemporal.store.internal
  (:require [taoensso.nippy :as nippy]))

(defn next-id []
  #?(:clj  (System/currentTimeMillis)
     :cljs (.getTime (js/Date.))))

(defn serializable? [x]
  (nippy/freezable? x {:allow-java-serializable? true?}))

(defn serialize [x]
  (when x
    (nippy/freeze x)))

(defn deserialize [x]
  (when x
    (nippy/thaw x)))
