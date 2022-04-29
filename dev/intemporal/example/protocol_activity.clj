(ns intemporal.example.protocol-activity
  (:require [intemporal.workflow :as w]
            [intemporal.activity :as a]
            [intemporal.store :as s])
  (:import [intemporal.annotations ActivityOptions]))

(defprotocol HttpClient
  :extend-via-metadata true
  (doGet [this url])
  (doHead [this url]))

(def EmptyException
  (let [e (RuntimeException. "Spurious error")]
    (.setStackTrace e (into-array StackTraceElement []))
    e))

(defn- maybe
  ([val]
   (maybe val 5))
  ([val ok-chance-0-10]
   (let [r (rand-int 10)]
     (when (> r ok-chance-0-10)
       (throw EmptyException))
     val)))

;; basic protocol function
(def example-impl
  (reify HttpClient
    (doGet [this url] (maybe "200 OK" 5))
    (doHead [this url] (maybe "200 OK" 5))))

(defrecord MyHttpClient []
  HttpClient
  ;; (Ab)use annotations to pass activity options
  (^{ActivityOptions {:retry true}} doGet [this url])
  (doHead [this url]))

;; TODO read annotations when registering protocol
(seq (.getAnnotations (.getMethod MyHttpClient "doGet" (into-array Class [Object]))))

;;;;
;; activities registration
(a/register-protocol HttpClient example-impl)

;;;;
;; workflow registration

(defn simpleflow
  [n]
  (let [stub (a/stub-protocol HttpClient)]
    (try
      (doGet stub "carr")
      (catch Exception _
        :failed))))

(s/clear-events s/memstore)
(w/register-workflow s/memstore simpleflow)

;; call workflow
(simpleflow "bla")

(-> (:workflow-events @s/memstore)
  (last)
  (last)
  (last)
  (last)
  (clojure.pprint/print-table))

(declare run-uuid)
(let [wevs (-> (deref s/memstore) :workflow-events)
      [wname kvs] (first wevs)
      rid  (-> kvs keys first)]
  (def run-uuid rid)
  (s/lookup-workflow-run s/memstore wname rid))

(comment
  (w/retry s/memstore #'simpleflow run-uuid)

  ;;TODO fix
  (s/lookup-workflow s/memstore run-uuid))
