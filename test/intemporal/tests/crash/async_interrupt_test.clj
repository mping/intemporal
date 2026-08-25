(ns intemporal.tests.crash.async-interrupt-test
  "Regression coverage for shutdown landing inside an in-flight `async` batch.

   The engine-owned worker must stop claiming first and give an active drive its
   shutdown grace period while the activity executor remains available. A batch
   that finishes within that period therefore commits its results exactly once;
   shutdown must not interrupt the collector early, persist infrastructure
   failures, or replay completed side effects on a fresh engine."
  {:crash true}
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.tests.utils :as u]))

;; ============================================================================
;; Test Infrastructure
;; ============================================================================

(def started-log (atom []))
(def completed-log (atom []))

(defn slow-tracked-activity
  "Logs its start, then sleeps long enough for shutdown to begin mid-flight."
  [x]
  (swap! started-log conj x)
  (Thread/sleep 3000)
  (swap! completed-log conj x)
  (* x 2))

(defn async-batch-workflow
  "Two parallel asyncs joined at the end — the whole batch is in flight when the
   engine is shut down."
  [x]
  (let [h1 (intemporal/async #(let [act (intemporal/stub #'slow-tracked-activity)] (act x)))
        h2 (intemporal/async #(let [act (intemporal/stub #'slow-tracked-activity)] (act (+ x 1))))]
    (reduce + (intemporal/join-all [h1 h2]))))

(defn- history-events [store workflow-id event-type]
  (->> (p/load-history store workflow-id)
       (filter #(= event-type (:event-type %)))))

(defn- interrupted-failures [store workflow-id event-type]
  (->> (history-events store workflow-id event-type)
       (filter #(= :activity-interrupted (get-in % [:error :exception-kind])))))

;; ============================================================================
;; Test
;; ============================================================================

(deftest test-controlled-shutdown-drains-an-async-batch
  (testing "controlled shutdown lets a claimed async batch finish exactly once"
    (reset! started-log [])
    (reset! completed-log [])

    (let [workflow-id "async-interrupt-1"
          st          (store/create-store)]

      ;; ======================================================================
      ;; Phase 1: begin shutdown while the batch is in flight
      ;; ======================================================================
      (let [engine-1 (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)) :store st)
            fut      (future
                       (try
                         (intemporal/start-workflow engine-1 async-batch-workflow [1]
                                                    :workflow-id workflow-id)
                         (catch Throwable t t)))]
        ;; Wait until BOTH activities are genuinely running on pool threads.
        (u/wait-until #(= 2 (count @started-log)) 5000)
        ;; The managed worker drains an in-flight drive before the activity
        ;; executor closes.
        (intemporal/shutdown-engine engine-1)

        (let [phase-1 (deref fut 10000 ::timed-out)]
          (when (= ::timed-out phase-1)
            (future-cancel fut))
          (is (not= ::timed-out phase-1)
              "the drive must return once the interrupted batch resolves, not hang")
          (is (not (instance? Throwable phase-1))
              (str "the interrupt must not escape start-workflow, got: " (pr-str phase-1))))

        (is (= [1 2] (sort @completed-log))
            "both activities finish during the controlled drain")
        (is (= 2 (count (history-events st workflow-id :async-started)))
            "sanity check: both async handles were persisted before the interrupt"))

      (is (empty? (interrupted-failures st workflow-id :activity-failed))
          "a controlled drain does not manufacture infrastructure failures")
      (is (empty? (history-events st workflow-id :workflow-failed))
          "an interrupt is infrastructure: the workflow must NOT be durably finalized as failed")

      ;; ======================================================================
      ;; Phase 2: a fresh engine observes the terminal history without replaying
      ;; either activity.
      ;; ======================================================================
      (let [engine-2 (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)) :store st)
            fut      (future
                       (try
                         (intemporal/resume-workflow engine-2 workflow-id)
                         (catch Throwable t t)))
            result   (deref fut 15000 ::timed-out)]

        (when (= ::timed-out result)
          (future-cancel fut))
        (intemporal/shutdown-engine engine-2)

        (is (not= ::timed-out result)
            "resume must make progress, not park forever on the interrupted handles")
        (is (not (instance? Throwable result))
            (str "resume must not throw, got: " (pr-str result)))

        (when (map? result)
          (is (= :completed (:status result)))
          (is (= 6 (:result result))
              "join-all must return the retried activities' real results (2 + 4)"))

        (is (= [1 2] (sort @completed-log))
            (str "each activity completes exactly once. Completed: "
                 (pr-str @completed-log)))
        (is (= {1 1, 2 1} (frequencies @started-log))
            (str "terminal replay must not restart activities. Started: "
                 (pr-str @started-log)))
        (is (= 2 (count (history-events st workflow-id :async-completed)))
            "both async handles must resolve with a completion event after the retry")
        (is (= 1 (count (history-events st workflow-id :workflow-completed)))
            "the workflow must reach a single terminal :workflow-completed event")))))
