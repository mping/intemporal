(ns intemporal.macros
  (:require [intemporal.utils.check :refer [check]])
  #?(:clj (:require [net.cgrand.macrovich :as macros])
     :cljs (:require-macros [net.cgrand.macrovich :as macros])))


(defn- fn->fnid
  "Called by defmacro."
  [f]
  #?(:cljs (let [fname (str f)]
             (str fname)))

  #?(:clj (check (symbol? f) "'%s' should be a symbol" f))
  #?(:clj (check (bound? (resolve f)) "'%s' should be bounded" f))
  #?(:clj (let [resolved (resolve f)
                cname    (symbol resolved)]
            (str cname))))

(defn- resolve-protocol
  "Called by defmacro."
  [sym]
  #?(:cljs
     sym
     ;; TODO: not compatible with cljs

     :clj
     (let [proto (-> sym resolve var-get :on-interface)]
       (check (some? proto) "'%s': Activity should be implemented via a valid `defprotocol`, but is `nil`" sym)
       (check (.isInterface ^Class proto) " '%s': Activity should be implemented via a valid `defprotocol`, but it is not an interface" proto)
       proto)))

