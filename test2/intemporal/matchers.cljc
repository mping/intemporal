(ns intemporal.matchers
  (:require [matcher-combinators.core :as mc]
            [matcher-combinators.result :as result]))

(defrecord Nilable []
  mc/Matcher
  (-matcher-for [this] this)
  (-matcher-for [this _] this)
  (-match [this actual]
    (if (or (nil? actual)
            (= :matcher-combinators.core/missing actual))
      {::result/type   :match
       ::result/value  nil
       ::result/weight 1}
      {::result/type   :mismatch
       ::result/value  actual
       ::result/weight 1}))
  (-base-name [_] 'nilable))

(def nilable? (->Nilable))
