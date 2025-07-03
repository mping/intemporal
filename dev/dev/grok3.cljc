(ns dev.grok3)

(require '[missionary.core :as m])

;; Define a simple secondary task that simulates some work and returns a value
(defn secondary-task []
  (m/sp
    (Thread/sleep 1000) ; Simulate some work
    42))

;; Define the primary task that yields to the secondary task and resumes
(defn primary-task []
  (m/sp
    (println "Primary task started")
    (let [result (m/? (secondary-task))] ; Yield to secondary task and wait for result
      (println "Primary task resumed with result:" result)
      (+ result 10)))) ; Continue computation after resuming

;; Run the tasks with a single-threaded executor to ensure only one task runs at a time
(def executor (m/cpu)) ; Use CPU-bound executor provided by missionary

;; Wrap the primary task to execute via the executor
(def run-task
  (m/via executor
         (m/? (primary-task))))

;; Execute the task and print the final result
(def result (m/? run-task))
(println "Final result:" result)
