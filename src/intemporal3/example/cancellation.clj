(ns intemporal3.example.cancellation
  (:require [intemporal3.core :as intemporal]
            [intemporal3.internal.activity :as a]
            [clojure.pprint]))

;; Define activities
(defn activity-fn [arg]
  (println "activity called" arg)
  [:some arg])

(defn slow-activity [x]
  (println (str "slow activity START with " x " on thread " (.getName (Thread/currentThread))))
  (Thread/sleep 1000)
  (println (str "slow activity END with " x))
  (* x 2))

;; Create engine
(def engine (intemporal/make-workflow-engine :threads 4 :enable-logging true))

;; Register activities
(a/register-activity! (:registry engine) #'slow-activity)

;; Cancellation example
(defn long-flow [id]
  (let [slow (intemporal/stub #'slow-activity)]
    (dotimes [i 10]
      (println "Step" i)
      (slow i)
      (intemporal/sleep 500))
    {:done true}))

(println "\n=== Cancellation ===")
(future
  (Thread/sleep 2500)
  (println "Cancelling workflow...")
  (intemporal/cancel-workflow (:store engine) "cancel-flow"))

(try
  (intemporal/start-workflow engine
                             long-flow [1]
                             :workflow-id "cancel-flow"
                             :observer (:observer engine))
  (catch Exception e
    (println "Workflow cancelled:" (.getMessage e))))

;; View logs
(println "\n=== Event Log ===")
(doseq [event @(:log engine)]
  (println (:event event) "-" (dissoc event :event :timestamp)))

;; View history
(println "\n=== Workflow History ===")
(doseq [event (intemporal/get-workflow-history (:store engine) "parallel-flow")]
  (println (:event-type event) "seq:" (:seq event)))