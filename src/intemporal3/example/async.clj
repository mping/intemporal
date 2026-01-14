(ns intemporal3.example.async
  (:require [intemporal3.core :as intemporal]
            [intemporal3.internal.activity :as a]
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
  (let [wf-id "test-parallel"
        result (intemporal/start-workflow engine
                                          my-parallel-flow [123]
                                          :workflow-id wf-id
                                          :observer (:observer engine))]
    (println "Result:" result)
    (println "\n=== Workflow History ===")
    (clojure.pprint/print-table (map (fn [r]
                                       (-> r
                                           (assoc :seq (:seq r))
                                           (dissoc :timestamp)))
                                     (intemporal/get-workflow-history (:store engine) wf-id)))
    #_
    (doseq [event (intemporal/get-workflow-history (:store engine) wf-id)]
      (println "  " (:event-type event) "seq:" (:seq event)
               (when (:result event) (str "result:" (:result event)))
               (when (:activity-name event) (str "activity:" (:activity-name event)))))))


(comment

  ;; Cleanup
  (intemporal/shutdown-engine engine)

  ;; Using the convenience macro
  (intemporal/with-workflow-engine [eng {:threads 4 :enable-logging true}]
    (a/register-activity! (:registry eng) #'activity-fn)
    (a/register-activity! (:registry eng) #'slow-activity)
    (let [result (intemporal/start-workflow engine
                                            my-parallel-flow [999]
                                            :observer (:observer eng))]
      (println "Result:" result))))

