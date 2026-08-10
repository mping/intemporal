(ns ^:crash intemporal.tests.crash.retry-durability-test
  "Bug #28 / X8 — retry state was neither durable nor off the drive thread.

  `execute-with-retry` ran the whole retry loop inside one drive, persisting
  NOTHING until it resolved: the attempt counter lived in a local, and the
  backoff was a `Thread/sleep` on the drive thread. So a crash between two
  attempts lost every trace that any attempt had run (the resumed drive started
  a fresh `(loop [attempt 1])`, making `:max-attempts` a per-drive bound rather
  than a total), the remaining backoff was lost with it, and for the length of
  every backoff the drive thread — and on a worker, the whole poll thread — was
  parked in a sleep that no shutdown or cancel could shorten.

  FIX: each consumed attempt is persisted as an `:activity-attempt-failed` event
  carrying the running total AND `:retry-at`, the instant the next attempt comes
  due. The engine runs one attempt per pass and then SUSPENDS until that instant
  instead of sleeping: `wake-at` goes to the store, so a worker on any pod skips
  the workflow until it is due and picks it up when it is, and an in-process
  driver parks on its wake queue with a timer armed.

  REGRESSION GUARDS below: the counter survives a crash mid-retry; the deadline
  does not drift when the workflow is re-driven; a backing-off workflow is
  invisible to `list-pending` until due; and the drive returns instead of
  blocking. `async_retry_durability_test` covers the same ground for the
  parallel path."
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
;; Long enough that a re-drive lands reliably inside the backoff window, short
;; enough that serving out two of them (700 + 1400ms) stays quick.
(def backoff-ms 700)

(defn retry-workflow [x]
  (let [act (intemporal/stub #'always-fails-activity
                             :retry-policy (a/make-retry-policy :max-attempts max-attempts
                                                                :initial-backoff-ms backoff-ms))]
    (act x)))

(defn- history-events [store workflow-id event-type]
  (->> (p/load-history store workflow-id)
       (filter #(= event-type (:event-type %)))))

(defn- attempt-event
  "The recorded attempt with the highest running total — what the engine recovers."
  [store workflow-id]
  (->> (history-events store workflow-id :activity-attempt-failed)
       (sort-by :attempts)
       last))

(def ^:private waiting-statuses
  #{:waiting-timer :waiting-signal :waiting-signal-timeout :waiting-async})

(defn- drive-to-terminal
  "Resume until the workflow reaches a terminal state, the way a worker would.

   A retry backoff is now a real suspension, so a single `resume-workflow` drives
   one step and returns `:waiting-timer` — only a driver that keeps resuming (a
   worker, or the wake-queue loop inside `start-workflow`) sees it through to the
   end."
  [engine workflow-id workflow-fn args]
  (let [deadline (+ (System/currentTimeMillis) 20000)]
    (loop []
      (let [result (intemporal/resume-workflow engine workflow-id workflow-fn args)]
        (cond
          (not (waiting-statuses (:status result))) result
          (> (System/currentTimeMillis) deadline)   result
          :else (do (Thread/sleep 25) (recur)))))))

;; ============================================================================
;; 1. Crash mid-retry: the resumed drive continues the sequence
;; ============================================================================

(deftest test-retry-attempt-counter-survives-crash
  (testing "the retry attempt counter is durable across a crash/resume mid-retry"
    (reset! invocation-log [])

    (let [workflow-id "retry-durability-test-1"
          st          (store/create-store)]

      ;; ======================================================================
      ;; Phase 1: let attempt 1 run and fail, then kill the engine while the
      ;; workflow is parked on the backoff before attempt 2.
      ;; ======================================================================
      (let [engine-1 (intemporal/make-workflow-engine :store st :threads 2)
            fut      (future
                       (try
                         (intemporal/start-workflow engine-1 retry-workflow [1]
                                                    :workflow-id workflow-id)
                         (catch Throwable t t)))]
        (u/wait-until #(= 1 (count @invocation-log)) 2000)
        ;; Let the drive reach the parked state (it no longer holds a thread).
        (Thread/sleep 150)

        (future-cancel fut)
        (intemporal/shutdown-engine engine-1)
        ;; future-cancel marks the future cancelled, so deref'ing it throws
        ;; regardless of timeout — we only need the drive to have settled.
        (try (deref fut 5000 ::timed-out) (catch Exception _ nil))

        (is (= 1 (count @invocation-log))
            "sanity check: the crash landed during the backoff, before a second attempt")
        (is (empty? (history-events st workflow-id :activity-failed))
            "sanity check: the activity's outcome was never recorded — the crash beat it")
        (is (empty? (history-events st workflow-id :workflow-failed))
            "sanity check: the crash did not durably finalize the workflow")

        ;; The fix: the attempt that DID run, and when the next one is due, are
        ;; both on disk — even though the drive that ran it died.
        (let [attempt (attempt-event st workflow-id)]
          (is (some? attempt)
              "the consumed attempt must be persisted when it happens, not when the loop ends")
          (is (= 1 (:attempts attempt)) "the recorded running total is attempt 1")
          (is (true? (:will-retry attempt))
              "the policy had granted a further attempt when the crash hit")
          (is (number? (:retry-at attempt))
              "the backoff deadline is durable, so the remaining wait survives the crash")))

      ;; ======================================================================
      ;; Phase 2: resume on a fresh engine sharing the same store. The retry
      ;; sequence must CONTINUE (attempts 2 and 3), not restart at 1.
      ;; ======================================================================
      (let [engine-2 (intemporal/make-workflow-engine :store st :threads 2)
            result   (drive-to-terminal engine-2 workflow-id retry-workflow [1])]
        (intemporal/shutdown-engine engine-2)

        (is (= :failed (:status result))
            "the activity never succeeds, so the workflow finalizes as :failed once exhausted")

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
          ;; (the policy declined another), but the drive died before writing the
          ;; terminal :activity-failed. Seeded rather than raced, because the real
          ;; window between those two writes is microseconds wide.
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
                                            max-attempts last-error 5 false nil))

      (let [engine (intemporal/make-workflow-engine :store st :threads 2)
            result (drive-to-terminal engine workflow-id retry-workflow [1])]
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

;; ============================================================================
;; 3. The backoff is a suspension: it releases the drive and holds its deadline
;; ============================================================================

(deftest test-backoff-suspends-instead-of-blocking
  (testing "a backing-off workflow parks with a durable deadline instead of sleeping"
    (reset! invocation-log [])

    (let [workflow-id "retry-durability-test-3"
          st          (store/create-store)
          engine      (intemporal/make-workflow-engine :store st :threads 2)]

      ;; A bare resume drives one step. Attempt 1 runs and fails, and the drive
      ;; RETURNS rather than sleeping out the backoff.
      (let [start   (System/currentTimeMillis)
            result  (intemporal/resume-workflow engine workflow-id retry-workflow [1])
            elapsed (- (System/currentTimeMillis) start)]

        (is (= 1 (count @invocation-log)) "exactly one attempt ran")
        (is (= :waiting-timer (:status result))
            "the drive reports a clock wait rather than driving the retry inline")
        (is (< elapsed backoff-ms)
            (str "the drive returned in " elapsed "ms — it must not block for the "
                 backoff-ms "ms backoff")))

      (let [deadline (:retry-at (attempt-event st workflow-id))]
        ;; The worker's view: not due yet, so the ownership scan skips it. This is
        ;; what stops a backing-off workflow from being re-driven (and fully
        ;; replayed) on every poll for the length of its backoff.
        (is (not (contains? (set (p/list-pending st "test-owner" 10)) workflow-id))
            "a workflow whose retry is not due must be excluded from list-pending")

        ;; Re-driving early must neither run the attempt nor push the deadline out
        ;; — recomputing it per pass is the drift that made signal timeouts never
        ;; fire (E5), and it would make a retry recede forever under a busy poll.
        (intemporal/resume-workflow engine workflow-id retry-workflow [1])
        (is (= 1 (count @invocation-log))
            "an early re-drive must not run the attempt before its deadline")
        (is (= deadline (:retry-at (attempt-event st workflow-id)))
            "the persisted deadline must not drift when the workflow is re-driven")

        (u/wait-until #(>= (System/currentTimeMillis) deadline) 5000)
        (is (contains? (set (p/list-pending st "test-owner" 10)) workflow-id)
            "once the deadline passes the workflow becomes due again"))

      (intemporal/shutdown-engine engine))))

;; ============================================================================
;; 4. Sync children keep the inline backoff
;; ============================================================================

(def child-attempt-log (atom []))

(defn flaky-child-activity [x]
  (let [n (count (swap! child-attempt-log conj x))]
    (if (< n 3)
      (throw (ex-info "Transient failure" {:x x :attempt n}))
      [:ok x])))

(defn retrying-child-flow [x]
  (let [act (intemporal/stub #'flaky-child-activity
                             :retry-policy (a/make-retry-policy :max-attempts 3
                                                                :initial-backoff-ms 20))]
    (act x)))

(defn parent-of-retrying-child [x]
  {:child (intemporal/run-child-workflow retrying-child-flow [x])})

(deftest test-sync-child-with-retrying-activity-still-completes
  (testing "a retry inside a synchronous child waits inline rather than suspending"
    (reset! child-attempt-log [])

    ;; A sync child is driven inline with no wake-fn, and ANY :waiting-* status
    ;; makes the parent durably fail it ("synchronous child workflows cannot
    ;; suspend"). Parking on a retry backoff would therefore have turned every
    ;; retrying sync child into a failure, so that drive waits instead.
    (let [st     (store/create-store)
          engine (intemporal/make-workflow-engine :store st :threads 2)
          result (intemporal/start-workflow engine parent-of-retrying-child [3]
                                            :workflow-id "retry-durability-test-4")]
      (intemporal/shutdown-engine engine)

      (is (= :completed (:status result))
          (str "the child must retry inline and succeed, not be failed for suspending; got "
               (pr-str result)))
      (is (= {:child [:ok 3]} (:result result)) "the parent sees the child's result")
      (is (= 3 (count @child-attempt-log)) "the child's activity took three attempts"))))
