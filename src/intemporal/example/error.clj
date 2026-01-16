(ns intemporal.example.error
  (:require [intemporal.core :as intemporal]
            [intemporal.internal.activity :as a]
            [clojure.pprint]))

(defn flaky-activity [x]
  (if true                                                  ;(< (rand) 0.7)
    (throw (ex-info "Random failure" {:x x}))
    (* x 3)))

(defn failing-activity [x]
  (throw (ex-info "Always fails" {:x x})))

;; Create engine
(def engine (intemporal/make-workflow-engine :threads 4 :enable-logging true))

;; Register activities
(a/register-activity! (:registry engine) #'flaky-activity
                      :retry-policy (a/make-retry-policy :max-attempts 5))

;; Workflow with error handling
(defn error-handling-flow [id]
  (let [flaky (intemporal/stub #'flaky-activity)]
    {:result (flaky id)}))

(println "\n=== Error Handling Workflow ===")
(prn (intemporal/start-workflow engine
                                error-handling-flow [42]
                                :workflow-id "error-flow"
                                :observer (:observer engine)))
