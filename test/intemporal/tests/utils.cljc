(ns intemporal.tests.utils
  #?(:cljs (:require [promesa.core :as p]
                     [taoensso.telemere :as telemere]
                     [taoensso.telemere.utils :as tutils]))
  #?(:clj (:require [promesa.core :as p]
                    [net.cgrand.macrovich :as macros]
                    [taoensso.telemere :as telemere]
                    [taoensso.telemere.utils :as tutils]))
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
  (assert (vector? bindings) "First argument should be a binding of [res resval]")
  (let [[res resval] bindings]
    (macros/case
      :clj
      `(let [~res (let [future# (future (do ~resval))]
                    (try
                      (deref future# with-result-default-timeout (TimeoutException. "Operation timed out."))
                      (catch Exception e# e#)))]
         ~@body)
      :cljs
      (let [done (gensym "done")]
        `(~'cljs.test/async ~done
           (-> (p/resolved nil)
               (p/then (fn [_#] ~resval))
               (p/timeout with-result-default-timeout)
               (p/then (fn [~res] ~@body))
               (p/catch (fn [err#] (let [~res err#] ~@body)))
               (p/finally (fn [] (~done)))))))))

(defn setup-telemere []
  ;#?(:clj (clojure.pprint/pprint (telemere/check-interop)))
  (telemere/set-min-level! :trace)
  (telemere/remove-handler! ::custom)
  (telemere/add-handler! ::custom
                         (telemere/handler:console
                           {:output-fn
                            (tutils/format-signal-fn
                              {:content-fn (taoensso.telemere.utils/signal-content-fn {:incl-keys #{:thread}})})})))

(def with-trace-logging
  #?(:cljs {:before setup-telemere}
     :clj  (fn with-trace-logging [f] (setup-telemere) (f))))

#?(:clj
   (defn wait-until
     "Poll `pred` every `poll-ms` milliseconds until it returns truthy or
      `timeout-ms` elapses. Returns the last truthy value of pred, or throws
      AssertionError on timeout. Replaces bare Thread/sleep in tests that need to
      wait for an asynchronous state change."
     ([pred] (wait-until pred wait-default-timeout 50))
     ([pred timeout-ms] (wait-until pred timeout-ms 50))
     ([pred timeout-ms poll-ms]
      (let [deadline (+ (System/currentTimeMillis) timeout-ms)]
        (loop []
          (let [v (pred)]
            (cond
              v v
              (>= (System/currentTimeMillis) deadline)
              (throw (AssertionError. (str "wait-until timed out after " timeout-ms "ms")))
              :else
              (do (Thread/sleep (long poll-ms)) (recur)))))))))