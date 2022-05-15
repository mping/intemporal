(ns intemporal.example.protocol-activity
  (:require [intemporal.workflow :as w]
            [intemporal.activity :as a]
            [intemporal.store :as s])
  #_:clj-kondo/ignore
  (:import [intemporal.annotations ActivityOptions]))

(defprotocol HttpClient
  :extend-via-metadata true
  (doGet [this url])
  (doHead [this url]))

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
    (doGet [_ _url] (maybe "200 OK"))
    (doHead [_ _url] (maybe "200 OK"))))

(defrecord MyHttpClient []
  HttpClient
  ;; (Ab)use annotations to pass activity options
  (^{ActivityOptions {:idempotent true}} doGet [_ url] (maybe url 5))
  (doHead [_ _url]))

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
    (doGet stub (str n "carr"))))

(s/clear-events s/memstore)
(w/register-workflow s/memstore simpleflow)

;; call workflow
(try
  (simpleflow "bla")
  (catch Exception _
    (println "ACTIVITY FAILED")))

(println (s/events->table s/memstore))

(declare run-uuid)
(let [wevs (-> (deref s/memstore) :workflow-events)
      [wname kvs] (first wevs)
      rid  (-> kvs keys first)]
  (def run-uuid rid)
  (s/lookup-workflow-run s/memstore wname rid))

(println run-uuid)
(comment
  (w/retry s/memstore #'simpleflow run-uuid)
  (println (s/events->table s/memstore))

  ;;TODO fix
  (s/lookup-workflow s/memstore run-uuid))
