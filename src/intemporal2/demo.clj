(ns intemporal2.demo
  (:import [clojure.lang IExceptionInfo]))

(def ^:dynamic *context* nil)

;;;;
;; runtime
(defn- make-context []
  (atom {:history {}
         :counter (atom 0)}))

;;;;
;; queries
(defn- context->activity? [task-id]
  (contains? (:history @*context*) task-id))

(defn- context->activity-result [task-id]
  ;; TODO handle exception result by unwrapping
  (get (:history @*context*) task-id))

(defn- wait-for-activity [task-id]
  (case task-id
    :step-1 100
    :step-2 {:id 100 :name "Alice"}
    :step-3 "Charged Alice"))

(defn result->context [task-id result]
  ;; TODO handle exception result by wrapping
  (swap! *context* assoc-in [:history task-id] result))

;;;;
;; yielding
(defn yield-error
  ([msg data]
   (yield-error msg data nil))
  ([msg data cause]
   (proxy [Error IExceptionInfo] [msg]
     (getData [] data)
     (getCause [] cause))))

(defn yield! [msg data]
  (throw (yield-error msg data)))

(defn yield-error? [^Error e]
  (and (instance? IExceptionInfo e)
       (= :yield (:type (ex-data e)))))

(defn run-activity [task-id f args]
  (println (str "  [TRACE] Reached activity: " task-id))

  (if (context->activity? task-id)
    ;; CASE A: REPLAY
    ;; We found this task in history! Return the recorded result immediately.
    ;; We DO NOT run the actual function 'f'.
    (do
      (println (str "  [SKIP] Found in history. Replaying result."))
      (context->activity-result task-id))

    ;; CASE B: FIRST RUN
    ;; Not in history. We must "schedule" it.
    ;; In a real system, this sends a msg to a Queue/DB.
    ;; Here, we just throw the Yield exception to stop the stack.
    (do
      ;; TODO queue
      (println (str "  [STOP] New task. Queuing & Yielding: " task-id))
      (yield! (format "Yielding: waiting for task %s" task-id) {:type :yield :task task-id}))))


;;;;
;; execution

(defn run-attempt [workflow-fn args ctx]
  (binding [*context* ctx]
    (try
      ;; Try to run the whole workflow...
      {:status :completed
       :result (apply workflow-fn args)}

      ;; Did we hit a Yield signal?
      (catch Error e
        (if (yield-error? e)
          ;; Yes! Return the suspension state.
          {:status      :suspended
           :waiting-for (:task (ex-data e))}
          ;; No, it was a real crash. Rethrow.
          (throw e))))))

(defn run-workflow [workflown-fn & args]
  (let [context (make-context)]
    (loop [iteration 1]
      (println (str "\n--- ITERATION " iteration " ---"))
      ;; 1. Run the workflow with current history
      ;; TODO try/catch, save
      (let [outcome (run-attempt workflown-fn args context)]

        (case (:status outcome)
          ;; If Suspended: We act like the "Worker". We do the work, update history, and restart.
          :suspended
          (let [task-id (:waiting-for outcome)
                ;; SIMULATION: Pretend we went to the DB and got a result.
                ;; TODO go to the db
                mock-result (wait-for-activity task-id)]

            (println (str "  [SYSTEM] Executor finished " task-id ". Persisting result: " mock-result))

            ;; RECUR: We restart the loop with the NEW history.
            (do
              (with-bindings {#'*context* context}
                (result->context task-id mock-result))
              (recur (inc iteration))))

          ;; todo handle exceptions

          ;; If Completed: We are done.
          :completed
          (println (str "\n✅ WORKFLOW FINISHED. Final Result: " (:result outcome))))))))


;;;;
;; userland

(defn my-activity [arg]
  (println "<run my-activity>")
  [:hello arg])

(defn my-activity2 [arg]
  (println "<run my-activity2>")
  :XXX)

(defn my-business-workflow [w1]
  (println "Workflow starting...")

  ;; Step 1: Get User
  (let [v1 (run-activity :step-1 my-activity 1)
        v2 (run-activity :step-2 my-activity 3)]

    ;; Step 3: Charge Credit Card (using result from step 2)
    [w1
     v1
     v2
     (run-activity :step-3 my-activity2 :xxx)]))

(run-workflow my-business-workflow :w1)