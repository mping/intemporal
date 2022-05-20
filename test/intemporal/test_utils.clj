(ns intemporal.test-utils
  (:require [clojure.spec.alpha :as s]
            [intemporal.workflow :as w]
            [intemporal.activity :as a])
  (:import [java.time LocalDateTime]))


;; event spec
(s/def ::id number?)
(s/def ::payload any?)
(s/def ::type #{::w/invoke ::w/failure ::w/success
                ::a/invoke ::a/failure ::a/success})
(s/def ::uid symbol?)
(s/def ::deleted? (s/nilable boolean?))
(s/def ::date #(instance? LocalDateTime %))
(s/def ::event (s/keys :req-un [::id ::payload ::type ::uid ::deleted?]
                 :opt-un [::date]))

(defmulti -alike? (fn [a _] (type a)))
(defmethod -alike? Exception [a b]
  (println "type a" (type a))
  (println "type b"  b)
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