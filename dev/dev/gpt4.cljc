(ns dev.gpt4)

(require '[missionary.core :as m])

;; Task B: Returns a value after a delay
(def task-b
  (m/sp
    (println "Task B: Running")
    (Thread/sleep 1000)  ; simulate work
    (println "Task B: Done")
    42)) ; return value

;; Task A: Runs, yields to Task B, captures result, resumes
(def task-a
  (m/sp
    (println "Task A: Start")
    ;; 'yielding' to task-b: run it and wait for the result
    (let [b-result (m/? (m/join vector task-b task-b))]
      (println "Task A: Got result from Task B:" b-result)
      (println "Task A: Done")
      (prn b-result 1))))

;; Run just one task (task-a will control task-b)
(time
  (m/? task-a))

