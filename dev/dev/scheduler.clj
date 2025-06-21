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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Scheduler Definition
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn make-scheduler
  "Creates a scheduler that executes tasks in strict FIFO order."
  []
  {:new-task-queue     (chan)
   :yielded-task-queue (chan)
   :task-count         (atom 0)})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Task & Yield Macros - NOW AWARE OF THE TWO QUEUES
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmacro yield! []
  `(do
     ;; <<< CHANGE: When yielding, the task places its control channel
     ;; onto the :yielded-task-queue.
     (>! (:yielded-task-queue ~'scheduler) ~'control-chan)

     ;; Signal the scheduler on the return channel to unblock it.
     (>! @~'return-chan-atom :yielded)

     ;; Park and wait for the next activation.
     (reset! ~'return-chan-atom (<! ~'control-chan))))

(defmacro add-task! [scheduler & body]
  `(let [control-chan#     (chan 1)
         return-chan-atom# (atom nil)
         scheduler#        ~scheduler]

     ;; <<< CHANGE: A new task is always added to the :new-task-queue.
     (go (>! (:new-task-queue scheduler#) control-chan#))
     (swap! (:task-count scheduler#) inc)

     (go
       (let [~'control-chan control-chan#
             ~'return-chan-atom return-chan-atom#
             ;; Make the scheduler available to yield!
             ~'scheduler scheduler#]
         (try
           (reset! ~'return-chan-atom (<! ~'control-chan))
           ~@body
           (>! @~'return-chan-atom :finished)
           (catch Exception e#
             (println "Task threw an exception:" (.getMessage e#))
             (>! @~'return-chan-atom :finished)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Scheduler Execution - NOW WITH PRIORITY
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn start-scheduler!
  "Starts the scheduler's prioritized event loop."
  [{:keys [new-task-queue yielded-task-queue task-count] :as scheduler}]
  (go-loop []
    (if (pos? @task-count)
      (do
        ;; <<< CRITICAL CHANGE: Use alts! with :priority
        ;; This will check new-task-queue first. Only if it's empty/blocked
        ;; will it check yielded-task-queue.
        (let [[task-control-chan source-chan] (alts! [new-task-queue yielded-task-queue] :priority true)
              return-chan (chan 1)]

          ;; Activate the chosen task and wait for its response.
          (>! task-control-chan return-chan)
          (let [response (<! return-chan)]
            (when (= response :finished)
              (swap! task-count dec))))
        (recur))
      (println "\nAll tasks completed. Scheduler shutting down."))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Example Usage - Demonstrating FIFO Order
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn -main [& args]
  (println "Starting FIFO cooperative scheduler...")

  (let [scheduler (make-scheduler)]

    (println "Adding Task A (will yield twice)")
    (add-task! scheduler
               (println "--> Task A: Starting first run.")
               (yield!)
               (println "--> Task A: Resumed for second run.")
               (yield!)
               (println "--> Task A: Resumed for final run, now finishing."))

    (println "Adding Task B (short, no yield)")
    (add-task! scheduler
               (println "--> Task B: Starting and finishing."))

    (println "Adding Task C (will yield once)")
    (add-task! scheduler
               (println "--> Task C: Starting first run.")
               (yield!)
               (println "--> Task C: Resumed for final run, now finishing."))

    (let [done-chan (start-scheduler! scheduler)]
      (<!! done-chan))

    (println "Example finished.")))
(-main)