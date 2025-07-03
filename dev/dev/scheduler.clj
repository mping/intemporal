(ns dev.scheduler
  (:require [promesa.core :as p]
            [clojure.core.async :as a :refer [>! >!! <! <!! go go-loop chan alts!]])
  (:require [clojure.core.async.impl.protocols :as protocols]
            [clojure.core.async.impl.dispatch :as dispatch])
  (:import [com.google.common.util.concurrent ThreadFactoryBuilder]
           [java.util.concurrent Executors]
           [java.util.concurrent.locks Condition Lock ReentrantLock]))


;; Define a Scheduler protocol
(defprotocol IScheduler
  (enqueue-task [this fn])
  (run-task [this task-id fn])
  (yield [this task-id]))

(def ^:dynamic *task-id* nil)
(defn current-id [] *task-id*)

;; Scheduler implementation
(defn make-scheduler []
  (let [lock            (ReentrantLock.)
        task-conditions (atom [])
        next-task-id    (atom -1)
        current-thread  (atom 0)]

    (reify IScheduler
      ;; Register thread and assign it a unique ID
      (enqueue-task [this task]
        (let [result (p/deferred)]
          (.lock lock)
          (try
            (let [id   (swap! next-task-id inc)
                  cond (.newCondition lock)]
              (swap! task-conditions conj cond)
              (-> (Thread. (reify Runnable
                             (run [_]
                               (run-task this id (fn []
                                                   (try
                                                     (p/resolve! result (task))
                                                     (catch Exception e
                                                       (p/reject! result e))))))))
                  (.start)))
            (finally
              (.unlock lock)))
          result))

      ;; Run a task cooperatively
      (run-task [this task-id task]
        (.lock lock)
        (try
          ;; Wait until it's this thread's turn
          (while (not= task-id @current-thread)
            (.await ^Condition (nth task-conditions task-id)))

          ;; Run the task
          (with-bindings {#'*task-id* task-id}
            (task))

          ;; Determine next thread ID in round-robin order
          (let [ids     @task-conditions
                idx     task-id
                next-id (mod (inc idx) (count ids))]
            (reset! current-thread next-id)
            (.signal ^Condition (get @task-conditions next-id)))
          (finally
            (.unlock lock))))

      (yield [this task-id]
        (.lock lock)
        (try
          ;; Find next thread
          (let [ids     @task-conditions
                idx     task-id
                next-id (mod (inc idx) (count ids))]
            (reset! current-thread next-id)
            (.signal ^Condition (get @task-conditions next-id))
            ;; Suspend current thread
            (while (not= task-id @current-thread)
              (.await ^Condition (get @task-conditions task-id))))
          (finally
            (.unlock lock)))))))


#_(let [scheduler (make-scheduler)]
    ;; Start initial threads. Thread 1 will spawn another.
    (enqueue-task scheduler
                  (fn []
                    (println "task 1 with id" (current-id))
                    (let [res (enqueue-task scheduler (fn [] (println "task 2 with id" (current-id)) :fin))]
                      (yield scheduler (current-id))
                      (println "result?" @res))
                    (println "task 1 finish"))))

