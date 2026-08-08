(ns ^:crash intemporal.tests.crash.retry-durability-test
  "Regression test for kimi.md improvement #28 / bug X8: retry attempt state is
   not durable.

   `execute-with-retry` (execution.clj) runs its entire retry loop -- every
   `attempt-once` call AND the backoff `Thread/sleep` between attempts -- on the
   drive thread, and persists NOTHING to the store until the loop finally
   resolves (success, or retries exhausted). `process-pending-activity` only
   calls `save-events`/`save-event` once `execute-with-retry` returns.

   Consequence: a crash/interrupt landing between two attempts (e.g. while the
   drive thread is asleep in the backoff) loses all record that any attempt
   happened. On resume, `execute-with-retry` starts a fresh `(loop [attempt 1])`
   and the activity's `:max-attempts` bound is enforced only against the
   CURRENT drive's attempt count, not the count across all drives. An activity
   with side effects can therefore be invoked more times than :max-attempts
   allows across a crash/resume boundary.

   Reproducer: an activity that always fails and records every real invocation
   in a process-global atom (standing in for an external side effect the test
   can observe through the crash -- in-process here, but the durability gap is
   identical for an out-of-process crash). A generous backoff gives the test a
   window to interrupt the drive thread while it's asleep between attempt 1 and
   attempt 2, before anything about attempt 1 is persisted. Resuming on a fresh
   engine against the same store lets the retry loop run to exhaustion again.

   Expected once fixed: total real invocations across both drives never exceeds
   :max-attempts. Currently FAILS: the attempt counter resets to 1 on resume,
   so the activity is invoked (max-attempts - 1) extra times, and side effects
   with real-world consequences (e.g. a non-idempotent payment activity) can
   fire more than the configured retry budget allows."
  (:require [intemporal.core :as intemporal]
            [intemporal.internal.activity :as a]
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
   deterministically, so any invocation beyond :max-attempts is unambiguously
   a durability bug rather than a flaky success/failure race."
  [x]
  (swap! invocation-log conj x)
  (throw (ex-info "Simulated permanent activity failure" {:x x})))

(def max-attempts 3)
;; Generous enough that the test can reliably interrupt the drive thread while
;; it's asleep between attempt 1 and attempt 2 (see Phase 1), but small enough
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
;; Test
;; ============================================================================

(deftest test-retry-attempt-counter-survives-crash
  (testing "the retry attempt counter is durable across a crash/resume mid-retry"
    (reset! invocation-log [])

    (let [workflow-id "retry-durability-test-1"
          st          (store/create-store)]

      ;; ======================================================================
      ;; Phase 1: let attempt 1 run and fail, then interrupt the drive thread
      ;; while it's asleep in the backoff before attempt 2 -- nothing about
      ;; attempt 1 has been persisted at this point (execute-with-retry only
      ;; saves once the whole retry loop resolves).
      ;; ======================================================================
      (let [engine-1 (intemporal/make-workflow-engine :store st :threads 2)
            fut      (future
                       (try
                         (intemporal/start-workflow engine-1 retry-workflow [1]
                                                    :workflow-id workflow-id)
                         (catch Throwable t t)))]
        (u/wait-until #(= 1 (count @invocation-log)) 2000)
        ;; Give the drive thread time to move past attempt-once's bookkeeping
        ;; and into the backoff Thread/sleep, well inside the backoff-ms window.
        (Thread/sleep 150)

        (future-cancel fut)
        (intemporal/shutdown-engine engine-1)
        ;; future-cancel marks the future cancelled, so deref'ing it throws
        ;; CancellationException regardless of timeout -- we only need the
        ;; drive thread to have settled before phase 2 touches the same store.
        (try (deref fut 5000 ::timed-out) (catch Exception _ nil))

        (is (= 1 (count @invocation-log))
            "sanity check: the interrupt landed during the backoff, before a second real attempt")
        (is (empty? (history-events st workflow-id :activity-failed))
            "sanity check: nothing about the failed attempt was persisted before the crash")
        (is (empty? (history-events st workflow-id :workflow-failed))
            "sanity check: the crash did not durably finalize the workflow"))

      ;; ======================================================================
      ;; Phase 2: resume on a fresh engine sharing the same store. If attempt
      ;; state were durable, only (max-attempts - 1) further real invocations
      ;; should occur before the activity is exhausted. Because the counter is
      ;; NOT durable, execute-with-retry restarts at attempt 1 and burns
      ;; through the full max-attempts again.
      ;; ======================================================================
      (let [engine-2 (intemporal/make-workflow-engine :store st :threads 2)
            result   (intemporal/resume-workflow engine-2 workflow-id retry-workflow [1])]
        (intemporal/shutdown-engine engine-2)

        (is (= :failed (:status result))
            "the activity never succeeds, so the workflow must finalize as :failed once exhausted")

        (is (<= (count @invocation-log) max-attempts)
            (str "the activity was really invoked " (count @invocation-log)
                 " times total across the crash/resume, exceeding :max-attempts of " max-attempts
                 " -- the attempt counter did not survive the crash (kimi.md X8)"))))))
