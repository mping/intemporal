(ns intemporal3.example
  (:require [intemporal3.core :as intemporal]
            [intemporal3.internal.activity :as a]))

;; ============================================================================
;; Example Usage
;; ============================================================================


;; Define activities
(defn activity-fn [arg]
  (println "activity called" arg)
  [:some arg])

(defn slow-activity [x]
  (println (str "slow activity START with " x " on thread " (.getName (Thread/currentThread))))
  (Thread/sleep 1000)
  (println (str "slow activity END with " x))
  (* x 2))

(defn flaky-activity [x]
  (if true                                                  ;(< (rand) 0.7)
    (throw (ex-info "Random failure" {:x x}))
    (* x 3)))

(defn failing-activity [x]
  (throw (ex-info "Always fails" {:x x})))

;; Create engine
(def engine (intemporal/make-workflow-engine :threads 4 :enable-logging true))

;; Register activities
(a/register-activity! (:registry engine) #'slow-activity)
(a/register-activity! (:registry engine) #'activity-fn)
(a/register-activity! (:registry engine) #'flaky-activity
                      :retry-policy (a/make-retry-policy :max-attempts 5))
(a/register-activity! (:registry engine) #'failing-activity)

;; Parallel workflow
(defn my-parallel-flow [id]
  (println "Workflow start with id:" id)
  (let [slow  (intemporal/stub #'slow-activity)
        prom1 (intemporal/async #(slow 1))
        prom2 (intemporal/async #(slow 2))
        prom3 (intemporal/async #(slow 3))
        prom4 (intemporal/async #(+ 2 2))]
    (println "After async calls - all scheduled")
    {:args    id
     :slow    (slow 0)
     :prom4   (intemporal/join prom4)
     :results (intemporal/join-all [prom1 prom2 prom3 prom4])
     :id      id}))

;; Run parallel example
(println "\n=== Parallel Workflow ===")
(time
  (let [result (intemporal/start-workflow engine
                                          my-parallel-flow [123]
                                          :workflow-id (str (random-uuid))
                                          :observer (:observer engine))]
    (println "Result:" result)))


;; Workflow with error handling
(defn error-handling-flow [id]
  (let [flaky (intemporal/stub #'flaky-activity)]
    {:result (flaky id)}))

(println "\n=== Error Handling Workflow ===")
(intemporal/start-workflow engine
                           error-handling-flow [42]
                           :workflow-id "error-flow"
                           :observer (:observer engine))

;; Workflow with timer
(defn timed-flow [id]
  (println "Starting timed flow")
  (let [act (intemporal/stub #'activity-fn)]
    (println "Sleeping for 2 seconds...")
    (intemporal/sleep 2000)
    (println "Woke up!")
    {:result (act id)}))

(println "\n=== Timed Workflow ===")
(intemporal/start-workflow engine
                           timed-flow [456]
                           :workflow-id "timed-flow"
                           :observer (:observer engine))

;; Workflow with signal
(defn signal-flow [id]
  (println "Waiting for approval signal...")
  (let [approval (intemporal/wait-for-signal "approval")
        act      (intemporal/stub #'activity-fn)]
    (println "Got approval:" approval)
    {:approved approval
     :result   (act id)}))

(println "\n=== Signal Workflow ===")
(let [wf-id   "signal-flow"
      result1 (intemporal/start-workflow engine
                                         signal-flow [789]
                                         :workflow-id wf-id
                                         :observer (:observer engine))]
  (println "Initial result:" result1)
  (when (= :waiting-signal (:status result1))
    (println "Sending signal...")
    (intemporal/send-signal (:store engine) wf-id "approval" {:approved-by "admin"})
    (println "Resuming...")
    (println "Final result:"
             (intemporal/resume-workflow engine
                                         wf-id signal-flow [789]
                                         :observer (:observer engine)))))

;; Workflow with signal timeout
(defn signal-timeout-flow [id]
  (println "Waiting for approval with timeout...")
  (let [result (intemporal/wait-for-signal-with-timeout "approval" 3000)
        act    (intemporal/stub #'activity-fn)]
    (if (:received result)
      {:approved (:payload result)
       :result   (act id)}
      {:timed-out true
       :result    (act (* id -1))})))

;; Child workflow example
(defn child-flow [x]
  (let [act (intemporal/stub #'activity-fn)]
    {:child-result (act x)}))

(defn parent-flow [id]
  (println "Parent workflow starting")
  (let [act          (intemporal/stub #'activity-fn)
        child-result (intemporal/run-child-workflow child-flow [(* id 10)])]
    {:parent-result (act id)
     :child         child-result}))

(println "\n=== Parent/Child Workflow ===")
(intemporal/start-workflow engine
                           parent-flow [5]
                           :workflow-id "parent-flow"
                           :observer (:observer engine))

;; Cancellation example
(defn long-flow [id]
  (let [slow (intemporal/stub #'slow-activity)]
    (dotimes [i 10]
      (println "Step" i)
      (slow i)
      (intemporal/sleep 500))
    {:done true}))

(println "\n=== Cancellation ===")
(future
  (Thread/sleep 2500)
  (println "Cancelling workflow...")
  (intemporal/cancel-workflow (:store engine) "cancel-flow"))

(try
  (intemporal/start-workflow engine
                             long-flow [1]
                             :workflow-id "cancel-flow"
                             :observer (:observer engine))
  (catch Exception e
    (println "Workflow cancelled:" (.getMessage e))))

;; View logs
(println "\n=== Event Log ===")
(doseq [event @(:log engine)]
  (println (:event event) "-" (dissoc event :event :timestamp)))

;; View history
(println "\n=== Workflow History ===")
(doseq [event (intemporal/get-workflow-history (:store engine) "parallel-flow")]
  (println (:event-type event) "seq:" (:seq event)))

;; Cleanup
(intemporal/shutdown-engine engine)

;; Using the convenience macro
(intemporal/with-workflow-engine [eng {:threads 4 :enable-logging true}]
  (a/register-activity! (:registry eng) #'activity-fn)
  (a/register-activity! (:registry eng) #'slow-activity)
  (let [result (intemporal/start-workflow engine
                                          my-parallel-flow [999]
                                          :observer (:observer eng))]
    (println "Result:" result)))
