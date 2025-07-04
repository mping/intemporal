(ns dev.gpt4)

(require '[missionary.core :as m])

;; Task A: compute result after some work
(defn task-a []
  (m/sp
    (println "Task A: Start")
    (Thread/sleep 500)
    (println "Task A: Done")
    100))

;; Task B: compute result after some work
(defn task-b []
  (m/sp
    (println "Task B: Start")
    (Thread/sleep 800)
    (println "Task B: Done")
    200))

;; Main task: creates task-a and task-b, runs them one after the other (yielding explicitly)
(def task-main
  (m/sp
    (println "Main: Creating tasks")
    (let [result-a (m/? (task-a))]      ;; Yield to Task A, wait for result
      (println "Main: Got from Task A:" result-a)
      (let [result-b (m/? (task-b))]   ;; Yield to Task B, wait for result
        (println "Main: Got from Task B:" result-b)
        (+ result-a result-b)))))

(m/? task-main)