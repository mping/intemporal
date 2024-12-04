(ns intemporal.test-utils
  #?(:cljs (:require [intemporal.store :as store]
                     [intemporal.workflow.internal :as in]
                     [promesa.core :as p]
                     [taoensso.telemere :as telemere]
                     [cljs.test :as t]
                     [cljs.pprint :as pprint]))
  #?(:clj (:require [intemporal.store :as store]
                    [intemporal.workflow.internal :as in]
                    [promesa.core :as p]
                    [taoensso.telemere :as telemere]
                    [net.cgrand.macrovich :as macros]
                    [clojure.pprint :as pprint]))
  #?(:cljs (:require-macros [net.cgrand.macrovich :as macros])))

;;;;
;; helpers

(defn now []
  #?(:clj  (System/currentTimeMillis)
     :cljs (.getTime (js/Date.))))

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
;; misc

(defn print-tables
  "Prints the task and events tables to sysout via pprint"
  [store]
  (let [tasks  (store/list-tasks store)
        events (->> (store/list-events store)
                    (sort-by :id))]
    (pprint/print-table tasks)
    (pprint/print-table events)))

(defn wait-for-task
  "Waits for the task with given id to reach terminal state"
  ;; only works in clj, should probably take a body and be a macro
  ([store id]
   (wait-for-task store id {:timeout 5000 :sleep-ms 100}))
  ([store id {:keys [timeout sleep-ms]}]
   (let [start (now)]
     #_:clj-kondo/ignore
     @(p/loop [task (store/find-task store id)]
        (when (not (#{:failure :success} (:state task)))
          (let [elapsed (- (now) start)]
            (when (> elapsed timeout)
              (throw (ex-info (str "More than " timeout " ms (" elapsed " ms) elapsed while waiting for task " id " to finish") {:task task})))
            (p/then (p/delay sleep-ms id)
                    (fn [_] (p/recur (store/find-task store id))))))))))

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