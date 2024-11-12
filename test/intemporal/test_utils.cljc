(ns intemporal.test-utils
  (:require [intemporal.workflow.internal :as in]
            [promesa.core :as p]
            [taoensso.telemere :as telemere]
    #?(:cljs [cljs.test :as t])
    #?(:clj [net.cgrand.macrovich :as macros]))
  #?(:cljs (:require-macros [net.cgrand.macrovich :as macros])))

;;;;
;; helpers

(defn- make-task [& {:keys [proto type id ref root sym fvar args result state]
                     :or   {proto  nil
                            type   :workflow
                            id     (in/random-id)
                            ref    "some-ref"
                            root   "some-root"
                            sym    'identity
                            fvar   #'identity
                            args   []
                            result nil
                            state  :new}}]
  (cond
    (= type :workflow)
    (in/create-workflow-task ref root sym fvar args id result state nil)
    (= type :activity)
    (in/create-activity-task ref root sym fvar args id result state nil)
    (= type :proto-activity)
    (in/create-proto-activity-task proto ref root sym fvar args id result state nil)
    :else (throw (ex-info (str "Unknown task type:" type) {:type type}))))

(defn make-workflow-task [& {:keys [] :as args}]
  (make-task (assoc args :type :workflow)))

(defn make-activity-task [& {:keys [] :as args}]
  (make-task (assoc args :type :activity)))

(defn make-protocol-task [& {:keys [] :as args}]
  (make-task (assoc args :type :proto-activity)))

;;;;
;; macros

(defmacro with-promise?
  "Waits for `val` before running `body`. Mostly for cljs & promise-based values.
  Usage.
  ```
  (with-result some-promise
    (try (is (= :resolved some-promise))
      (finally (cleanup)))
  ```
  "
  [val & body]
  (assert (symbol? val) "first argument should be a symbol")
  (macros/case
    :clj
    `(do ~@body)
    :cljs
    `(t/async done#
       (p/finally ~val
                  (fn [res# c#]
                    (t/is (nil? c#))
                    (let [~val res#]
                      (do ~@body))
                    (done#))))))

#?(:cljs
   (def with-trace-logging {:before (fn []
                                      (telemere/set-min-level! :trace))})
   :clj
   (defn with-trace-logging [f]
     (telemere/set-min-level! :trace)
     (f)))
