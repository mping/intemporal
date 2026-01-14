(ns intemporal3.example.child
  (:require [intemporal3.core :as intemporal]
            [intemporal3.internal.activity :as a]
            [clojure.pprint]))

;; Define activities
(defn activity-fn [arg]
  (println "activity called" arg)
  [:some arg])

;; Create engine
(def engine (intemporal/make-workflow-engine :threads 4 :enable-logging true))

;; Register activities
(a/register-activity! (:registry engine) #'activity-fn)

;; Child workflow example
(defn child-flow [x]
  (let [act (intemporal/stub #'activity-fn)]
    {:child-result (act x)}))

(defn parent-flow [id]
  (println "Parent workflow starting")
  (let [act          (intemporal/stub #'activity-fn)
        child-result (intemporal/run-child-workflow child-flow [(* id 10)])]
    {:parent-result (act id)
     :child         child-result}))

(println "\n=== Parent/Child Workflow ===")
(prn (intemporal/start-workflow engine
                                parent-flow [5]
                                :workflow-id "parent-flow"
                                :observer (:observer engine)))

