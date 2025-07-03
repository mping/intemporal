(ns dev.sonnet)
(require '[missionary.core :as m])

(defn task-c [input]
  (m/sp
    (println "Task C: Starting with input" input)
    (Thread/sleep 600) ; Simulate work
    (println "Task C: Finishing")
    (* input 3)))

(defn task-b [input]
  (m/sp
    (println "Task B: Starting with input" input)
    (Thread/sleep 800) ; Simulate work
    (println "Task B: About to yield to Task C")

    ;; Yield to Task C and wait for its result
    (let [result-from-c (m/? (task-c (+ input 5)))]
      (println "Task B: Received result from Task C:" result-from-c)
      (println "Task B: Finishing")
      (+ result-from-c 100))))

;; Define individual tasks that simulate work
(defn task-a [input]
  (m/sp
    (println "Task A: Starting with input" input)
    (Thread/sleep 1000) ; Simulate some work
    (println "Task A: About to yield to Task B")

    ;; Yield to Task B and wait for its result
    (let [result-from-b (m/? (task-b (+ input 10)))]
      (println "Task A: Received result from Task B:" result-from-b)
      (Thread/sleep 500) ; Do some more work
      (println "Task A: Finishing")
      (* result-from-b 2))))


;; Coordinator task that ensures sequential execution
(defn coordinator []
  (m/sp
    (println "Coordinator: Starting cooperative execution")

    ;; Execute tasks sequentially - each task yields control when needed
    (let [final-result (m/? (task-a 5))]
      (println "Coordinator: All tasks completed. Final result:" final-result)
      final-result)))

;; Run the coordinator task
(def result
  (m/? (coordinator)))

;; Or run it and print the result
(->> (coordinator)
     (m/reduce (fn [x] x) nil)
     (m/?))