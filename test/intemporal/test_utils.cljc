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
  (assert (vector? bindings) "first argument should be a binding of [res resbody]")
  (let [[res resbody] bindings]
    (macros/case
      :clj
      `(let [~res (try (do ~resbody)
                       (catch Exception e#
                         e#))]
         ~@body)
      :cljs
      `(t/async done#
         (js/setTimeout
           (fn []
             ;; force wrap resbody in a deferred
             (p/finally (-> nil
                            (p/then (fn [_#] (do ~resbody)))
                            (p/timeout 10000))
                        (fn [res# err#]
                          (let [~res (or res# err#)]
                            ;; TODO maybe wrap or throw if err is present
                            (do ~@body))
                          (done#)))
             0))))))

#?(:cljs
   (def with-trace-logging {:before (fn []
                                      #_:clj-kondo/ignore
                                      (telemere/set-min-level! :trace))})
   :clj
   (defn with-trace-logging [f]
     #_:clj-kondo/ignore
     (telemere/set-min-level! :trace)
     (f)))