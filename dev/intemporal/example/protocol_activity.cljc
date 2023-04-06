(ns intemporal.example.protocol-activity
  (:require [intemporal.workflow :as w]
            [intemporal.activity :as a]
            [intemporal.store :as s]
            [intemporal.store.memory :as m]))

(def memstore (m/memory-store))

(defprotocol HttpClient
  :extend-via-metadata true
  (doHead [this id] "Can be called multiple times")
  (doPost [this id] "Should only be called once"))

(def EmptyException
  (let [e (RuntimeException. "Spurious error")]
    (.setStackTrace e (into-array StackTraceElement []))
    e))

(defmacro maybe [& body]
  `(let [r# (rand-int 10)]
     (when (> r# 5)
       (throw EmptyException))
     ~@body))

;; basic protocol function
(def example-impl
  (reify HttpClient
    (doHead [_ _url] "200 OK")
    (doPost [_ _url] (maybe "200 OK"))))


(defrecord MyHttpClient []
  HttpClient
  (doPost [_ id] (maybe id))
  (doHead [_ id] (maybe id)))

;;;;
;; workflow registration

(defn simpleflow
  [n]
  ;; (->MyHttpClient) would work too
  (let [stub (a/stub-protocol HttpClient example-impl {:idempotent true})]
    (doHead stub (str n "carr"))
    (doPost stub (str n "carr"))))

(s/clear-events memstore)
(w/register-workflow memstore simpleflow)

;; call workflow
(try
  (simpleflow "foo")
  (catch #?(:clj Exception :cljs js/Error) _
    (println "Workflow failed!")))

(println (s/events->table memstore))

(declare run-uuid)
(let [[id] (s/list-workflow-runs memstore)]
  (def run-uuid id))

(comment
  ;; you can retry a workflow that failed
  ;; the engine will replay until the first failure and resume from there
  (w/retry memstore #'simpleflow run-uuid)
  (println (s/events->table memstore)))
