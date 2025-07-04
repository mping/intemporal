(ns dev.grok3)

(require '[missionary.core :as m])

(require '[missionary.core :as m])

;; Helper function to simulate a subtask's work in steps
(defn make-subtask [name total-steps sleep-ms]
  (let [state (atom {:step 0 :total total-steps})]
    (fn []
      (m/sp
        (let [current-step (:step @state)]
          (if (< current-step (:total @state))
            (do
              (Thread/sleep sleep-ms) ; Simulate work
              (println name "worked on step" (inc current-step) "of" (:total @state))
              (swap! state update :step inc)
              {:done false :value (inc current-step)})
            {:done true :value current-step}))))))

;; Define the main task that alternates between two subtasks
(defn main-task []
  (m/sp
    (println "Main task started")
    (let [task1 (make-subtask "Subtask 1" 5 200) ; 5 steps, 200ms per step
          task2 (make-subtask "Subtask 2" 3 300) ; 3 steps, 300ms per step
          max-iterations 10] ; Safety limit for iterations
      (println "Main task yielding to subtasks alternately")
      (loop [active-task 1 ; Start with task 1
             t1-done false
             t2-done false
             iteration 0
             accumulated 0]
        (if (or (and t1-done t2-done) (>= iteration max-iterations))
          (do
            (println "Main task finished alternating")
            accumulated)
          (let [current-task (if (= active-task 1) task1 task2)
                result (m/? (current-task))
                done (:done result)
                value (:value result)
                next-task (if (= active-task 1) 2 1) ; Alternate between tasks
                next-t1-done (if (= active-task 1) done t1-done)
                next-t2-done (if (= active-task 2) done t2-done)]
            (recur next-task
                   next-t1-done
                   next-t2-done
                   (inc iteration)
                   (+ accumulated value))))))))

;; Use a single-threaded executor to ensure controlled execution
(def executor (m/cpu)) ; CPU-bound executor provided by missionary

;; Wrap the main task to execute via the executor
(def run-task
  (m/via executor
         (m/? (main-task))))

;; Execute the task and print the final result
(def result (m/? run-task))
(println "Final result (sum of steps):" result)