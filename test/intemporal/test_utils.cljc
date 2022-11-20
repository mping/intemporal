(ns intemporal.test-utils
  #?(:clj (:require [next.jdbc :as jdbc]
                    [intemporal.store.sql :as sql]))
  #?(:clj (:import [java.io File])))

;;;;
;; sql

#?(:clj
   (defn make-sql-store []
     (let [f    (File/createTempFile "intemporal" ".db")
           ds   (jdbc/get-datasource {:dbtype "sqlite" :dbname (.toString f)})
           impl (sql/sql-store ds)]
       (sql/migrate! ds)
       (.deleteOnExit f)
       impl)))

;;;;
;; general

;; comparison of similar objects (lenient with extra keys)
(defmulti -alike? (fn [a _] (type a)))
(defmethod -alike? Exception [a b]
  (= (type a)
     (if (= Class (type b))
       b
       (type b))))

(defmethod -alike? Object [a b]
  (= a b))
(defmethod -alike? nil [a b]
  (and (nil? a) (nil? b)))

(defn alike?
  "Is every kv in `expected` present in `m`?"
  [m expected]
  (reduce (fn [acc [k v]]
            (and acc (-alike? (get m k) v)))
          true
          expected))