(ns intemporal.example.hello-world
  (:require [intemporal.workflow :as w]
            [intemporal.activity :as a]
            [intemporal.store :as s]
            [intemporal.store.memory :as m]))

(def memstore (m/memory-store))

(defn ^{:idempotent true} hello-world [& args]
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

(s/clear-events memstore)
(w/register-workflow memstore simpleflow)

;;;;
;; call workflow
(simpleflow "bla")

(println (s/events->table memstore))

(declare run-uuid)
(let [wevs (-> (deref memstore) :workflow-events)
      [wname kvs] (first wevs)
      rid  (-> kvs keys first)]
  (def run-uuid rid)
  (s/find-workflow-run memstore rid))

(comment
  (w/retry memstore #'simpleflow run-uuid)

  ;;TODO fix
  (s/find-workflow memstore run-uuid))
