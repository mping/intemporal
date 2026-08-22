(ns intemporal.tests.crash.retry-durability-test
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
  instead of sleeping: `next-run-at` goes to the store, so a worker on any pod skips
  the workflow until it is due and picks it up when it is, and an in-process
  driver parks on its wake queue with a timer armed.

  REGRESSION GUARDS below: the counter survives a crash mid-retry; the deadline
  does not drift when the workflow is re-driven; a backing-off workflow is
  invisible to `claim-runnable!` until due; and the drive returns instead of
  blocking. `async_retry_durability_test` covers the same ground for the
  parallel path."
  {:crash true}
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.internal.activity :as a]
   [intemporal.internal.error :as error]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.tests.utils :as u]))

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

(defn- drive-to-terminal
  "Wake a persisted workflow and await its terminal event."
  [engine workflow-id]
  (intemporal/resume-workflow engine workflow-id))

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
            result   (drive-to-terminal engine-2 workflow-id)]
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
                          (ex-info "Simulated permanent activity failure" {:x 1})))
          engine      (intemporal/make-workflow-engine :store st :threads 2)
          _           (intemporal/submit-workflow engine retry-workflow [1]
                        :workflow-id workflow-id)
          _           (p/save-event
                        st workflow-id
                        (a/attempt-failed-event
                          0 "intemporal.tests.crash.retry-durability-test/always-fails-activity"
                          max-attempts last-error 5 false nil))
          result      (drive-to-terminal engine workflow-id)]
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
            "the recorded error is replayed as the outcome, not a freshly produced one")))))

;; ============================================================================
;; 3. The backoff is a suspension: it releases the drive and holds its deadline
;; ============================================================================

(deftest test-backoff-suspends-instead-of-blocking
  (testing "a backing-off workflow parks with a durable deadline instead of sleeping"
    (reset! invocation-log [])

    (let [workflow-id "retry-durability-test-3"
          st          (store/create-store)
          engine      (intemporal/make-workflow-engine :store st :threads 2)
          start       (System/currentTimeMillis)]

      (intemporal/submit-workflow engine retry-workflow [1] :workflow-id workflow-id)
      (let [stop (intemporal/start-worker engine :owner-id "retry-parking-worker"
                   :poll-ms 5 :workflow-concurrency 1)]
        (u/wait-until #(some? (attempt-event st workflow-id)) 5000)
        (stop))

      (is (= 1 (count @invocation-log)) "exactly one attempt ran before the park")
      (is (< (- (System/currentTimeMillis) start) backoff-ms)
          "the worker released the drive instead of sleeping through backoff")

      (let [deadline (:retry-at (attempt-event st workflow-id))]
        ;; The worker's view: not due yet, so the ownership scan skips it. This is
        ;; what stops a backing-off workflow from being re-driven (and fully
        ;; replayed) on every poll for the length of its backoff.
        (is (not (contains? (set (map :workflow-id
                                   (p/claim-runnable! st "test-owner" 10
                                                      (System/currentTimeMillis))))
                            workflow-id))
            "a workflow whose retry is not due must be excluded from worker claims")

        (u/wait-until #(>= (System/currentTimeMillis) deadline) 5000)
        (is (contains? (set (map :workflow-id
                              (p/claim-runnable! st "test-owner" 10
                                                 (System/currentTimeMillis))))
                       workflow-id)
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
  (testing "a synchronous child uses the same durable retry path"
    (reset! child-attempt-log [])

    (let [st     (store/create-store)
          engine (intemporal/make-workflow-engine :store st :threads 2)
          result (intemporal/start-workflow engine parent-of-retrying-child [3]
                                            :workflow-id "retry-durability-test-4")]
      (intemporal/shutdown-engine engine)

      (is (= :completed (:status result))
          (str "the child must park, retry, and succeed; got "
               (pr-str result)))
      (is (= {:child [:ok 3]} (:result result)) "the parent sees the child's result")
      (is (= 3 (count @child-attempt-log)) "the child's activity took three attempts"))))
