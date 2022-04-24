(ns intemporal.example.simple
  (:require [intemporal.workflow :as w]
            [intemporal.activity :as a]
            [intemporal.store :as s]))

(defprotocol HttpClient
  (call [this url]))

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

(def example-impl
  (reify HttpClient
    (call [this url] (maybe "200 OK" 5))))
;;;;
;; activities registration
(a/register-protocol HttpClient example-impl)

;;;;
;; workflow registration
(defn simpleflow
  [n]
  (let [stub (a/stub-protocol HttpClient)]
    (try
      (call stub "carr")
      (catch Exception _
        (println _)
        :failed))))

(s/clear-events s/memstore)
(w/register-workflow s/memstore simpleflow)
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
  (println ">>" rid)
  (s/lookup-workflow-run s/memstore wname rid))


(comment
  (w/retry s/memstore #'simpleflow run-uuid)

  ;;TODO fix
  (s/lookup-workflow s/memstore run-uuid))


