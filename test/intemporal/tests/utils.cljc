(ns intemporal.tests.utils
  #?(:cljs (:require [intemporal.store :as store]
                     [promesa.core :as p]
                     [cljs.test :as t]
                     [cljs.pprint :as pprint]))
  #?(:clj (:require [promesa.core :as p]
                    [net.cgrand.macrovich :as macros]
                    [clojure.pprint :as pprint]))
  #?(:cljs (:require-macros [net.cgrand.macrovich :as macros]
                            [intemporal.tests.utils :refer [with-result]]))
  #?(:clj (:import [java.util.concurrent TimeoutException])))

(def ^:dynamic with-result-default-timeout 10000)
(def ^:dynamic wait-default-timeout 3000)

(defmacro with-result
  "Promise-aware macro: the result can either be a value or a thrown exception.
  Waits for result for 10 secs, then times out
  Doesn't really work for exceptions returned as values
  ```
  (with-result [r (my-worfklow 1)]
    (is (instance? Exception r))
    (is (= 1 2)))
  ```
  "
  [bindings & body]
  (assert (vector? bindings) "First argument should be a binding of [res resbody]")
  (let [[res resbody] bindings]
    (macros/case
      :clj
      `(let [~res (let [future# (future (do ~resbody))]
                    (try
                      (deref future# with-result-default-timeout (TimeoutException. "Operation timed out."))
                      (catch Exception e# e#)))]
         ~@body)
      :cljs
      `(t/async done#
         (js/setTimeout
           (fn []
             ;; force wrap resbody in a deferred
             (p/finally (-> nil
                            (p/then (fn [_#]
                                      (do ~resbody)))
                            (p/timeout with-result-default-timeout))
                        (fn [res# err#]
                          (try
                            (let [~res (or res# err#)]
                              (do ~@body))
                            (finally
                              (done#)))))
             0))))))
