(ns intemporal.example.protocol-activity
  (:require [intemporal.workflow :as w]
            [intemporal.activity :as a]
            [intemporal.store :as s])
  #_:clj-kondo/ignore
  (:import [intemporal.annotations ActivityOptions]))

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
    (doPost [_ _url] (maybe "200 OK"))
    (doHead [_ _url] (maybe "200 OK"))))

(defrecord MyHttpClient []
  HttpClient
  ;; (Ab)use annotations to pass activity options
  (^{ActivityOptions {:idempotent false}} doPost [_ id] (maybe id))
  (^{ActivityOptions {:idempotent true}} doHead [_ id] (maybe id)))

;;;;
;; activities registration
(a/register-protocol HttpClient example-impl)
;;
(a/register-protocol HttpClient (->MyHttpClient))

;;;;
;; workflow registration

(defn simpleflow
  [n]
  (let [stub (a/stub-protocol HttpClient)]
    (doHead stub (str n "carr"))
    (doPost stub (str n "carr"))))

(s/clear-events s/memstore)
(w/register-workflow s/memstore simpleflow)

;; call workflow
(try
  (simpleflow "foo")
  (catch Exception _
    (println "Workflow failed!")))

(println (s/events->table s/memstore))

(declare run-uuid)
(let [wevs (-> (deref s/memstore) :workflow-events)
      [wname kvs] (first wevs)
      rid  (-> kvs keys first)]
  (def run-uuid rid)
  (s/list-workflow-run s/memstore wname rid {:all? true}))

(println run-uuid)
(comment
  (w/retry s/memstore #'simpleflow run-uuid)
  (println (s/events->table s/memstore))

  ;;TODO fix
  (s/list-workflow s/memstore run-uuid))
