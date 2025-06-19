(ns dev.scheduler
  (:require [promesa.core :as p])
  (:import [java.util.concurrent.locks Condition Lock ReentrantLock]))


;; Define a Scheduler protocol
(defprotocol IScheduler
  (register-thread [this fn])
  (yield [this thread-id])
  (run-task [this thread-id task]))

(def ^:dynamic *thread-id* nil)

(defn self-id []
  *thread-id*)

;; Scheduler implementation
(defn make-scheduler []
  (let [lock           (ReentrantLock.)
        condition-map  (atom (sorted-map))
        next-thread-id (atom -1)
        current-thread (atom 0)]

    (reify IScheduler
      ;; Register thread and assign it a unique ID
      (register-thread [this fn]
        (.lock lock)
        (try
          (let [id   (swap! next-thread-id inc)
                cond (.newCondition lock)]
            (swap! condition-map assoc id cond)

            (-> (Thread. (reify Runnable
                           (run [_]
                             (run-task this id fn))))
                (.start)))
          (finally
            (.unlock lock))))

      (yield [this thread-id]
        (.lock lock)
        (try
          ;; Find next thread
          (let [ids     (keys @condition-map)
                idx     thread-id
                next-id (nth ids (mod (inc idx) (count ids)))]
            (reset! current-thread next-id)
            (.signal ^Condition (@condition-map next-id))
            ;; Suspend current thread
            (while (not= thread-id @current-thread)
              (.await ^Condition (@condition-map thread-id))))
          (finally
            (.unlock lock))))

      ;; Run a task cooperatively
      (run-task [this thread-id task]
        (.lock lock)
        (try
          ;; Wait until it's this thread's turn
          (while (not= thread-id @current-thread)
            (.await ^Condition (@condition-map thread-id)))

          ;; Run the task
          (with-bindings {#'*thread-id* thread-id}
            (task))

          ;; Determine next thread ID in round-robin order
          (let [ids     (sort (keys @condition-map))
                idx     thread-id
                next-id (nth ids (mod (inc idx) (count ids)))]
            (reset! current-thread next-id)
            (.signal ^Condition (@condition-map next-id)))
          (finally
            (.unlock lock)))))))


(let [scheduler (make-scheduler)]
  ;; Start initial threads. Thread 1 will spawn another.
  (register-thread scheduler
                   (fn []
                     (println "task 1 with id" (self-id))
                     (register-thread scheduler (fn [] (println "task 2 with id" (self-id))))
                     (yield scheduler (self-id))
                     (println "task 1 finish"))))
