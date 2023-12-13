(ns intemporal2.test-utils)

;;;;
;; general

;; comparison of similar objects (lenient with extra keys)
(defmulti -alike? (fn [a _] (type a)))
(defmethod -alike? #?(:clj Exception :cljs js/Error) [a b]
  (= (type a)
     (if (= #?(:clj Class :cljs js/Function) (type b))
       b
       (type b))))

(defmethod -alike? #?(:clj java.util.Date :cljs js/Date) [a b]
  (= (type a)
    (if (= #?(:clj Class :cljs js/Function) (type b))
      b
      (type b))))

(defmethod -alike? nil [a b]
  (and (nil? a) (nil? b)))

(defmethod -alike? :default [a b]
  (= a b))

(defn alike?
  "Is every kv in `expected` present in `m`?"
  [m expected]
  (reduce (fn [acc [k v]]
            (and acc (-alike? (get m k) v)))
          true
          expected))
