(ns dev.sonnet)
(require '[missionary.core :as m])

;; A coordination mechanism to ensure only one task runs at a time
(def task-semaphore (atom 0))

(defn acquire-execution-slot []
  (m/sp
    (loop []
      (if (compare-and-set! task-semaphore 0 1)
        (println "Execution slot acquired")
        (do
          (Thread/sleep 10) ; Small delay before retry
          (recur))))))

(defn release-execution-slot []
  (reset! task-semaphore 0)
  (println "Execution slot released"))

(defn worker-task [task-id work-duration result-value]
  (m/sp
    ;; Acquire the execution slot (ensures only one task runs)
    (m/? (acquire-execution-slot))

    (println (str "Task " task-id ": Starting execution"))
    (Thread/sleep work-duration)
    (println (str "Task " task-id ": Work completed, result: " result-value))

    ;; Release the slot for the next task
    (release-execution-slot)
    result-value))

(defn main-task []
  (m/sp
    (println "Main: Creating two worker tasks")

    ;; Create two tasks but don't wait for them yet
    (let [task-a (worker-task "A" 1000 42)
          task-b (worker-task "B" 800 100)]

      (println "Main: Tasks created, now yielding to allow execution")

      ;; Yield control and wait for both tasks to complete
      ;; They will execute sequentially due to the semaphore
      (let [result-a (m/? task-a)
            result-b (m/? task-b)]

        (println "Main: Both tasks completed")
        (println (str "Main: Task A result: " result-a))
        (println (str "Main: Task B result: " result-b))
        (println (str "Main: Combined result: " (+ result-a result-b)))

        {:task-a result-a
         :task-b result-b
         :total (+ result-a result-b)}))))

;; Alternative approach using missionary's fork/join pattern
(m/? (m/sp
       (println "Main: Starting with fork/join pattern")

       ;; Use m/fork to spawn tasks that will coordinate themselves
       (let [task-a-flow (m/?> ##Inf (m/seed [(worker-task "A" 1000 42)
                                              (worker-task "B" 800 100)]))]

         (println "Main: Tasks forked, yielding control")

         ;; Wait for both tasks using m/join
         (let [results (m/? (m/join vector task-a-flow))]
           (println "Main: All forked tasks completed")
           (println (str "Main: Results: " results))

           {:results results
            :total   (reduce + results)}))))

(m/sp
  (println "Main: Creating and sequencing two tasks")

  ;; Create the tasks
  (let [task-a (m/sp
                 (println "Task A: Starting")
                 (Thread/sleep 1000)
                 (println "Task A: Finished")
                 42)
        task-b (m/sp
                 (println "Task B: Starting")
                 (Thread/sleep 800)
                 (println "Task B: Finished")
                 100)]

    (println "Main: Yielding to execute Task A")
    (let [result-a (m/? task-a)]
      (println (str "Main: Task A completed with result: " result-a))

      (println "Main: Yielding to execute Task B")
      (let [result-b (m/? task-b)]
        (println (str "Main: Task B completed with result: " result-b))

        (println "Main: All tasks completed")
        {:task-a result-a
         :task-b result-b
         :total  (+ result-a result-b)}))))