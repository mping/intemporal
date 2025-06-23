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
;; Scheduler Definition (Unchanged)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn make-scheduler
  []
  {:new-task-queue     (chan 1024)
   :yielded-task-queue (chan 1024)
   :task-count         (atom 0)})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Task & Yield Macros - NOW WITH `await!`
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmacro yield! []
  `(do
     (>! (:yielded-task-queue ~'scheduler) ~'control-chan)
     (>! @~'return-chan-atom :yielded)
     (reset! ~'return-chan-atom (<! ~'control-chan))))

;; <<< NEW: The `await!` macro for waiting on other tasks' results.
(defmacro await! [result-chan]
  `(do
     (>! @~'return-chan-atom :awaiting)

     ;; 2. Now it's safe to park and wait for the result.
     (let [result# (<! ~result-chan)]

       ;; 3. We have the result! Now, re-enter the scheduler's run-queue
       ;;    to be scheduled for our next turn.
       (>! (:yielded-task-queue ~'scheduler) ~'control-chan)

       ;; 4. Park again, waiting for our next turn. The scheduler will eventually
       ;;    pick us and send us a new return-chan.
       (reset! ~'return-chan-atom (<! ~'control-chan))

       ;; 5. Return the awaited result to the calling code.
       result#)))

(defmacro add-task! [scheduler & body]
  `(let [result-chan#      (chan 1)
         control-chan#     (chan 1)
         return-chan-atom# (atom nil)
         scheduler#        ~scheduler]


     ;(go (>! (:new-task-queue scheduler#) control-chan#))
     ;(swap! (:task-count scheduler#) inc)

     (go
       ;; signal a new task has been queued
       (>! (:new-task-queue scheduler#) control-chan#)
       ;; update counter
       (swap! (:task-count scheduler#) inc)

       ;; control chan:
       ;; return-chan-atom:
       (let [~'control-chan control-chan#
             ~'return-chan-atom return-chan-atom#
             ~'scheduler scheduler#]
         (try
           ;; get the chan for the return value
           (reset! ~'return-chan-atom (<! ~'control-chan))
           ;; run body
           ;; push return
           ;; indicate we are done
           (let [return-value# (do ~@body)]
             (>! result-chan# return-value#))
           (catch Exception e#
             (println "Task threw an exception:" (.getMessage e#))
             (>! result-chan# e#))
           (finally
             (>! @~'return-chan-atom :finished)))))
     result-chan#))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Scheduler Execution - NOW HANDLES `:awaiting` state
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn start-scheduler!
  "Starts the scheduler's event loop, now capable of handling tasks that await others."
  [{:keys [new-task-queue yielded-task-queue task-count] :as scheduler}]
  (go-loop []
    (if (pos? @task-count)
      (let [[task-control-chan _] (alts! [new-task-queue yielded-task-queue] :priority true)
            return-chan (chan 1)]
        (>! task-control-chan return-chan)
        (let [response (<! return-chan)]
          (cond
            ;; If finished, just decrement the count.
            (= response :finished)
            (swap! task-count dec)

            ;; If yielded or awaiting, the task has already re-queued itself
            ;; or will do so later. The scheduler's only job is to loop
            ;; and run the next available task.
            (= response :yielded) :noop
            (= response :awaiting) :noop))
        (recur))
      (println "\nAll tasks completed. Scheduler shutting down."))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Example Usage - Using `await!`
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn -main [& args]
  (println "Starting scheduler with dynamic task creation and `await!`...")

  (let [scheduler             (make-scheduler)

        parent-result-chan    (add-task! scheduler
                                         (println "[Parent] Starting.")
                                         (yield!)
                                         (println "[Parent] Resumed. Spawning child to do a calculation...")

                                         (let [child-result-chan (add-task! scheduler
                                                                            (println "  [Child] I have been created.")
                                                                            (yield!)
                                                                            (println "  [Child] Resumed. Calculating 40 + 2...")
                                                                            (+ 40 2))]

                                           (println "[Parent] About to `await!` my child's result...")

                                           ;; <<< CHANGE: Use `await!` instead of a raw `<!`.
                                           (let [child-result (await! child-result-chan)]
                                             (println (str "[Parent] My child finished! It returned: " child-result))
                                             (str "Parent task complete. Final value from child was " child-result)))
                                         1)

        independent-task-chan (add-task! scheduler
                                         (println "  [Independent] I'm starting now.")
                                         (println "  [Independent] I'm done."))]

    (start-scheduler! scheduler)

    (println "\n--- Main thread is now waiting for the parent task to complete ---\n")
    (let [final-result (<!! parent-result-chan)]
      (println "\n--- Parent task completed ---")
      (println "Final result received on main thread:" final-result))

    (println "\nExample finished.")))
(-main)