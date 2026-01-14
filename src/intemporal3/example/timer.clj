(ns intemporal3.example.timer
  (:require [intemporal3.core :as intemporal]
            [intemporal3.internal.activity :as a]
            [clojure.pprint]))

;; ============================================================================
;; Example Usage
;; ============================================================================


;; Define activities
(defn activity-fn [arg]
  (println "activity called" arg)
  [:some arg])

;; Create engine
(def engine (intemporal/make-workflow-engine :threads 4 :enable-logging true))

;; Register activities
(a/register-activity! (:registry engine) #'activity-fn)

;; Workflow with timer
(defn timed-flow [id]
  (println "Starting timed flow")
  (let [act (intemporal/stub #'activity-fn)]
    (println "Sleeping for 2 seconds...")
    (intemporal/sleep 2000)
    (println "Woke up!")
    {:result (act id)}))

(println "\n=== Timed Workflow ===")
(prn (intemporal/start-workflow engine
                                timed-flow [456]
                                :workflow-id "timed-flow"
                                :observer (:observer engine)))
