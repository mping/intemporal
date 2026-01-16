(ns intemporal.example.signal
  (:require [intemporal.core :as intemporal]
            [intemporal.internal.activity :as a]
            [clojure.pprint]))

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

;; Workflow with signal
(defn signal-flow [id]
  (println "Waiting for approval signal...")
  (let [approval (intemporal/wait-for-signal "approval")
        act      (intemporal/stub #'activity-fn)]
    (println "Got approval:" approval)
    {:approved approval
     :result   (act id)}))

(println "\n=== Signal Workflow ===")
;; Start workflow in background thread since it will block
(let [wf-id "signal-flow"
      result-promise (promise)
      workflow-thread (future
                        (deliver result-promise
                                 (intemporal/start-workflow engine
                                                            signal-flow [789]
                                                            :workflow-id wf-id
                                                            :observer (:observer engine))))]
  ;; Give workflow time to start and enter waiting state
  (Thread/sleep 500)
  (println "Sending signal...")
  (intemporal/send-signal (:store engine) wf-id "approval" {:approved-by "admin"})
  (println "Waiting for workflow to complete...")
  (println "Final result:" @result-promise)
  (future-cancel workflow-thread))

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

(let [wf-id   "signal-timeout-flow"
      result1 (intemporal/start-workflow engine
                                         signal-timeout-flow [789]
                                         :workflow-id wf-id
                                         :observer (:observer engine))]
  (println "Initial result:" result1))

;; Shutdown engine
(intemporal/shutdown-engine engine)
(println "\nEngine shut down.")
