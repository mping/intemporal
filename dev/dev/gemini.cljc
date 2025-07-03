(ns dev.gemini
  (:require [missionary.core :as m])
  (:import (java.util.concurrent Executors)))

;; 1. Define a single-threaded executor to ensure only one task runs at a time.
(def single-threaded-executor (Executors/newSingleThreadExecutor))

;; 2. Define Task B: A simple, self-contained piece of work.
;; It simulates a 1-second operation and returns a string.
(def task-B
  (m/sp
    (println " > Task B: Starting execution on thread" (.getName (Thread/currentThread)))
    (Thread/sleep 1000) ; Simulate I/O or a long computation
    (let [result "Result from Task B"]
      (println " > Task B: Finished, returning:" (pr-str result))
      result)))

;; 3. Define Task A: The main process that will yield to Task B.
;; It is defined with m/sp to allow for sequential, asynchronous operations.
(def task-A
  (m/sp
    (println "Task A: Starting execution on thread" (.getName (Thread/currentThread)))
    (println "Task A: About to yield to Task B...")

    ;; This is the key part:
    ;; m/? starts task-B and pauses the execution of task-A until B completes.
    (let [value-from-b (m/? task-B)]

      (println "Task A: Resumed with value from B:" (pr-str value-from-b))
      (println "Task A: Performing final work...")
      (Thread/sleep 500)

      ;; The final result combines info from Task A and the value from Task B.
      (str "Task A finished, incorporating B's value: >>" value-from-b "<<"))))



(println "--- Starting Missionary Example ---")

;; 4. Define the main task to be run, ensuring it uses our single-threaded executor.
;; We use m/via to schedule task-A on our specific executor.
;; All child tasks awaited via m/? will inherit this execution context.
(let [main-task (m/via single-threaded-executor task-A)]
      ;main-task task-A]

  (try
    ;; m/join! runs the task and blocks until a result is available (or an error occurs).
    ;; This is convenient for top-level application entry points.
    (let [final-result (m/? main-task)]
      (println "\n--- Execution Complete ---")
      (println "Final result delivered:" (pr-str final-result)))
    (catch Exception e
      (println "An error occurred during execution:" e))
    (finally
      ;; 5. Clean up the executor service.
      (println "Shutting down executor service.")
      (.shutdown single-threaded-executor))))

