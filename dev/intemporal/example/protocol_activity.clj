(ns intemporal.example.protocol-activity
  (:require [intemporal.workflow :as w]
            [intemporal.activity :as a]
            [intemporal.store :as s]))

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

;;
;; fns with metadata
;; configure retry policy, idempotency, etc
(defn- -get [this url] (maybe "200 OK" 5))
(defn- -head [this url] (maybe "200 OK" 5))

(def example-impl-via-meta
  (with-meta {:extended-via-metadata :true!}
    {`doGet  (with-meta -get {:retry :always})
     `doHead (with-meta -head {:retry :always})}))
;;;;
;; activities registration
(a/register-protocol HttpClient example-impl-via-meta)

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
