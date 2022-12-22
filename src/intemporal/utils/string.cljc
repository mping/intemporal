(ns intemporal.utils.string
  #?(:cljs (:require [goog.string :as gstring]
                     [goog.string.format :as gformat])))

(defn fmt [& args]
  #?(:clj (apply format args)
     :cljs (apply gstring/format args)))

