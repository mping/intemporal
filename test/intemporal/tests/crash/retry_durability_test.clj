(ns ^:crash intemporal.tests.crash.retry-durability-test
  "Bug #28 / X8 — retry attempt state was not durable.

  `execute-with-retry` ran its whole retry loop -- every attempt AND the backoff
  `Thread/sleep` between attempts -- inside one drive, persisting NOTHING until
  the loop finally resolved: `process-pending-activity` saved the completion or
  failure only once `execute-with-retry` returned. A crash landing between two
  attempts (the backoff being by far the widest window) therefore lost every
  trace that any attempt had run, and the resumed drive started a fresh
  `(loop [attempt 1])`. `:max-attempts` was thus enforced per drive, not in
  total, so an activity with real side effects (a payment, an email) could be
  invoked `max-attempts` times for EVERY crash it survived.

  FIX: each consumed attempt is persisted as an `:activity-attempt-failed` event
  carrying the running total and whether the policy granted another attempt --
  written BEFORE the backoff, i.e. inside the crash window rather than after it.
  `stub` recovers that state from the replay snapshot and threads it into the
  activity suspension, so the engine's loop resumes at the next attempt. When the
  recorded attempt says no retry was granted (`:will-retry false`), the activity
  is not run again at all: the recorded error becomes the outcome.

  REGRESSION GUARD: two crash points, either side of the last attempt.
  1. Crash mid-retry (during the backoff): the resumed drive must finish the
     retry sequence rather than restart it -- total real invocations across both
     drives stays at :max-attempts.
  2. Crash after the final attempt was recorded but before the terminal
     `:activity-failed` was written: the resume must not run the activity even
     once more, and must fail from the recorded error."
  (:require [intemporal.core :as intemporal]
            [intemporal.internal.activity :as a]
            [intemporal.internal.error :as error]
            [intemporal.store :as store]
            [intemporal.protocol :as p]
            [intemporal.tests.utils :as u]
            [clojure.test :refer [deftest is testing]]))

;; ============================================================================
;; Test Infrastructure
;; ============================================================================

(def invocation-log (atom []))

(defn always-fails-activity
  "Records every real invocation, then fails -- unconditionally and
   deterministically, so any invocation beyond :max-attempts is unambiguously a
   durability bug rather than a flaky success/failure race."
  [x]
  (swap! invocation-log conj x)
  (throw (ex-info "Simulated permanent activity failure" {:x x})))

(def max-attempts 3)
;; Generous enough that the test can reliably interrupt the drive thread while
;; it's asleep between attempt 1 and attempt 2 (see phase 1), but small enough
;; that phase 2's exhaustion (with exponential backoff) doesn't make the test
;; slow: attempt1->2 backoff-ms, attempt2->3 2*backoff-ms.
(def backoff-ms 700)

(defn retry-workflow [x]
  (let [act (intemporal/stub #'always-fails-activity
                             :retry-policy (a/make-retry-policy :max-attempts max-attempts
                                                                :initial-backoff-ms backoff-ms))]
    (act x)))

(defn- history-events [store workflow-id event-type]
  (->> (p/load-history store workflow-id)
       (filter #(= event-type (:event-type %)))))

;; ============================================================================
;; 1. Crash mid-retry: the resumed drive continues the sequence
;; ============================================================================

(deftest test-retry-attempt-counter-survives-crash
  (testing "the retry attempt counter is durable across a crash/resume mid-retry"
    (reset! invocation-log [])

    (let [workflow-id "retry-durability-test-1"
          st          (store/create-store)]

      ;; ======================================================================
      ;; Phase 1: let attempt 1 run and fail, then interrupt the drive thread
      ;; while it's asleep in the backoff before attempt 2.
      ;; ======================================================================
      (let [engine-1 (intemporal/make-workflow-engine :store st :threads 2)
            fut      (future
                       (try
                         (intemporal/start-workflow engine-1 retry-workflow [1]
                                                    :workflow-id workflow-id)
                         (catch Throwable t t)))]
        (u/wait-until #(= 1 (count @invocation-log)) 2000)
        ;; Give the drive thread time to record the attempt and enter the
        ;; backoff Thread/sleep, well inside the backoff-ms window.
        (Thread/sleep 150)

        (future-cancel fut)
        (intemporal/shutdown-engine engine-1)
        ;; future-cancel marks the future cancelled, so deref'ing it throws
        ;; CancellationException regardless of timeout -- we only need the drive
        ;; thread to have settled before phase 2 touches the same store.
        (try (deref fut 5000 ::timed-out) (catch Exception _ nil))

        (is (= 1 (count @invocation-log))
            "sanity check: the interrupt landed during the backoff, before a second real attempt")
        (is (empty? (history-events st workflow-id :activity-failed))
            "sanity check: the activity's outcome was never recorded — the crash beat it")
        (is (empty? (history-events st workflow-id :workflow-failed))
            "sanity check: the crash did not durably finalize the workflow")

        ;; The fix: the attempt that DID run is on disk, even though the drive
        ;; that ran it died before producing any outcome.
        (let [attempts (history-events st workflow-id :activity-attempt-failed)]
          (is (= 1 (count attempts))
              "the consumed attempt must be persisted before the backoff, not after the loop")
          (is (= 1 (:attempts (first attempts)))
              "the recorded running total is attempt 1")
          (is (true? (:will-retry (first attempts)))
              "the policy had granted a further attempt when the crash hit")))

      ;; ======================================================================
      ;; Phase 2: resume on a fresh engine sharing the same store. The retry
      ;; sequence must CONTINUE (attempts 2 and 3), not restart at 1.
      ;; ======================================================================
      (let [engine-2 (intemporal/make-workflow-engine :store st :threads 2)
            result   (intemporal/resume-workflow engine-2 workflow-id retry-workflow [1])]
        (intemporal/shutdown-engine engine-2)

        (is (= :failed (:status result))
            "the activity never succeeds, so the workflow must finalize as :failed once exhausted")

        (is (= max-attempts (count @invocation-log))
            (str "the activity must be invoked exactly :max-attempts times across the crash/resume; "
                 "was invoked " (count @invocation-log) " times"))

        (let [failed (first (history-events st workflow-id :activity-failed))]
          (is (some? failed) "the exhausted activity records a terminal :activity-failed")
          (is (= max-attempts (:attempts failed))
              "the terminal event reports the total attempts across drives, not just this one's"))))))

;; ============================================================================
;; 2. Crash after the last attempt was recorded: no further execution at all
;; ============================================================================

(deftest test-spent-retry-budget-is-not-re-spent
  (testing "an activity whose recorded attempt was granted no retry is not run again"
    (reset! invocation-log [])

    (let [workflow-id "retry-durability-test-2"
          st          (store/create-store)
          ;; History as the crashed drive left it: the final attempt is recorded
          ;; (the policy declined another), but the drive died before writing
          ;; the terminal :activity-failed. Seeded rather than raced, because the
          ;; real window between those two writes is microseconds wide.
          last-error  (error/throwable->map
                        (error/activity-failed-exception
                          "intemporal.tests.crash.retry-durability-test/always-fails-activity"
                          (ex-info "Simulated permanent activity failure" {:x 1})))]

      (p/save-event st workflow-id
                    {:event-type       :workflow-started
                     :seq              -1
                     :workflow-id      workflow-id
                     :workflow-fn-name "intemporal.tests.crash.retry-durability-test/retry-workflow"
                     :args             [1]
                     :timestamp        (System/currentTimeMillis)})
      (p/save-event st workflow-id
                    (a/attempt-failed-event 0 "intemporal.tests.crash.retry-durability-test/always-fails-activity"
                                            max-attempts last-error 5 false))

      (let [engine (intemporal/make-workflow-engine :store st :threads 2)
            result (intemporal/resume-workflow engine workflow-id retry-workflow [1])]
        (intemporal/shutdown-engine engine)

        (is (empty? @invocation-log)
            (str "the budget was already spent, so the activity must NOT run again; ran "
                 (count @invocation-log) " time(s)"))
        (is (= :failed (:status result))
            "the workflow finalizes from the recorded attempt instead of re-running it")

        (let [failed (first (history-events st workflow-id :activity-failed))]
          (is (some? failed) "the recorded attempt is promoted to a terminal :activity-failed")
          (is (= max-attempts (:attempts failed))
              "the terminal event carries the recovered attempt total")
          (is (= (:message last-error) (get-in failed [:error :message]))
              "the recorded error is replayed as the outcome, not a freshly produced one"))))))
