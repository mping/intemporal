(ns intemporal.example.hello-world
  (:require [intemporal.workflow :as w]
            [intemporal.activity :as a]
            [intemporal.store :as s])
  (:import [java.lang.annotation Retention RetentionPolicy]
           [intemporal.annotations ActivityOptions]))

(defn ^{:retry true} hello-world [& args]
  (println "hello, " args)
  "kthxbye")

;;;;
;; activities registration
;; completely optional
(a/register-function hello-world)

;;;;
;; workflow registration
(defn simpleflow
  [n]
  (let [hello-stub (a/stub-function hello-world)]
    (hello-stub n "foo" "bar")))

(s/clear-events s/memstore)
(w/register-workflow s/memstore simpleflow)

;;;;
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
