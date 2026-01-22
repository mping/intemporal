(ns ^:crash intemporal.tests.crash.run-manual-test
  "Manual test runner to verify crash recovery without kaocha infrastructure"
  (:require [intemporal.core :as intemporal]
            [intemporal.store :as store]
            [intemporal.protocol :as p]))

(def execution-counter (atom 0))

(defn tracked-activity [x]
  "Activity that increments counter to track actual executions (not replays)"
  (swap! execution-counter inc)
  (println "  -> Executing activity" x "(execution #" @execution-counter ")")
  (Thread/sleep 50)
  (* x 2))

(defn signal-crash-workflow [id num-activities crash-point]
  "Workflow that suspends at crash-point waiting for 'resume' signal"
  (println "  Workflow starting with id:" id)
  (let [stub (intemporal/stub #'tracked-activity)]
    (loop [i 0
           results []]
      (if (< i num-activities)
        (do
          (when (= i crash-point)
            (println "  Suspending at crash point" crash-point)
            (intemporal/wait-for-signal "resume"))
          (recur (inc i) (conj results (stub i))))
        (do
          (println "  Workflow completed with results:" results)
          {:id id :results results})))))

(defn verify-history [store workflow-id]
  (let [history (p/load-history store workflow-id)
        completed (filter #(= :activity-completed (:event-type %)) history)]
    (count completed)))

(defn -main []
  (println "\n=== Manual Crash Recovery Test ===\n")

  (reset! execution-counter 0)
  (let [workflow-id "manual-crash-test"
        num-activities 5
        crash-point 3
        persistent-store (store/->InMemoryStore (atom {}))]

    (println "Phase 1: Execute until crash point...")
    (let [engine-1 (intemporal/make-workflow-engine
                     :store persistent-store
                     :threads 2)
          result-1 (intemporal/start-workflow
                     engine-1
                     signal-crash-workflow
                     [workflow-id num-activities crash-point]
                     :workflow-id workflow-id)]

      (println "\nPhase 1 Results:")
      (println "  Status:" (:status result-1))
      (println "  Execution counter:" @execution-counter)
      (println "  Completed activities in history:" (verify-history persistent-store workflow-id))

      (assert (= :waiting-signal (:status result-1))
              "Expected :waiting-signal status")
      (assert (= crash-point @execution-counter)
              (str "Expected " crash-point " executions"))
      (assert (= crash-point (verify-history persistent-store workflow-id))
              (str "Expected " crash-point " completed activities in history"))

      (println "  ✓ Phase 1 passed"))

    (println "\nPhase 2: Resume after crash with new engine...")
    (let [engine-2 (intemporal/make-workflow-engine
                     :store persistent-store
                     :threads 2)
          resume-future (future
                          (intemporal/resume-workflow
                            engine-2
                            workflow-id
                            signal-crash-workflow
                            [workflow-id num-activities crash-point]))]

      (Thread/sleep 200)
      (println "  Sending resume signal...")
      (intemporal/send-signal persistent-store workflow-id "resume" {:resumed true})

      (let [result-2 @resume-future]
        (println "\nPhase 2 Results:")
        (println "  Status:" (:status result-2))
        (println "  Execution counter:" @execution-counter)
        (println "  Result:" (:result result-2))
        (println "  Completed activities in history:" (verify-history persistent-store workflow-id))

        (assert (= :completed (:status result-2))
                "Expected :completed status")
        (assert (= num-activities @execution-counter)
                (str "Expected " num-activities " total executions, got " @execution-counter))
        (assert (= {:id workflow-id :results [0 2 4 6 8]} (:result result-2))
                "Expected correct result")
        (assert (= num-activities (verify-history persistent-store workflow-id))
                (str "Expected " num-activities " completed activities in history"))

        (println "  ✓ Phase 2 passed")))

    (println "\n=== ✓ Crash Recovery Test PASSED ===\n")))

(when (= *file* (System/getProperty "babashka.file"))
  (-main))
