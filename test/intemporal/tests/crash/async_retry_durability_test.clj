(ns intemporal.tests.crash.async-retry-durability-test
  "Bug #28 / X8, async half — the parallel path kept its own retry loop.

  `execute-activities-parallel` retried inside the executor, on a pool thread
  with no store, workflow-id or seq in scope. So nothing about an async attempt
  could be recorded: the computed `:attempts` was dropped on the floor, every
  crash restarted the count at 1, and the backoff was a `Thread/sleep` held by a
  pool thread. The JVM executor also applied `timeout-ms` to the WHOLE retry
  sequence while ClojureScript applied it per attempt — the platform split X8
  flags alongside the durability gap.

  FIX: the executor runs each activity exactly once and the ENGINE owns the retry
  loop, using the same durable `:activity-attempt-failed` record (and the same
  `intemporal.internal.activity` helpers) as the sequential path. A retry that is
  merely scheduled writes no `:async-failed`, so the handle stays pending and
  `join` keeps parking until the retries resolve. `timeout-ms` now bounds one
  attempt on both platforms, because one submission IS one attempt.

  REGRESSION GUARDS: attempts survive a crash mid-retry; a batch that is only
  backing off does not spin the replay budget; and an activity whose attempts
  each fit the timeout but whose sum does not now succeeds."
  {:crash true}
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.internal.activity :as a]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.tests.utils :as u]))

;; ============================================================================
;; Test Infrastructure
;; ============================================================================

(def invocation-log (atom []))

(defn flaky-async-activity
  "Fails permanently, recording every real invocation."
  [x]
  (swap! invocation-log conj x)
  (throw (ex-info "Simulated permanent activity failure" {:x x})))

(def max-attempts 3)
(def backoff-ms 600)

(defn async-retry-workflow [x]
  (let [h (intemporal/async
            #(let [act (intemporal/stub #'flaky-async-activity
                                        :retry-policy (a/make-retry-policy
                                                        :max-attempts max-attempts
                                                        :initial-backoff-ms backoff-ms))]
               (act x)))]
    (intemporal/join h)))

(defn- history-events [store workflow-id event-type]
  (->> (p/load-history store workflow-id)
       (filter #(= event-type (:event-type %)))))

(defn- drive-to-terminal
  "Wake a persisted workflow and await its terminal event."
  [engine workflow-id]
  (intemporal/resume-workflow engine workflow-id))

;; ============================================================================
;; 1. Async attempts survive a crash mid-retry
;; ============================================================================

(deftest test-async-retry-attempts-survive-crash
  (testing "an async activity's retry budget is not re-spent after a crash"
    (reset! invocation-log [])

    (let [workflow-id "async-retry-durability-1"
          st          (store/create-store)]

      ;; Phase 1: run one attempt, then crash while the handle backs off.
      (let [engine-1 (intemporal/make-workflow-engine :store st :threads 2)
            fut      (future
                       (try
                         (intemporal/start-workflow engine-1 async-retry-workflow [1]
                                                    :workflow-id workflow-id)
                         (catch Throwable t t)))]
        (u/wait-until #(= 1 (count @invocation-log)) 3000)
        (Thread/sleep 150)
        (future-cancel fut)
        (intemporal/shutdown-engine engine-1)
        (try (deref fut 5000 ::timed-out) (catch Exception _ nil))

        (let [attempts (history-events st workflow-id :activity-attempt-failed)]
          (is (seq attempts)
              "the async attempt must be recorded — the executor never could, having no store")
          (is (number? (:retry-at (first attempts)))
              "and it carries the deadline, so the remaining backoff survives the crash"))

        (is (empty? (history-events st workflow-id :async-failed))
            "a scheduled retry must not resolve the handle, or join would replay a failure")
        (is (empty? (history-events st workflow-id :workflow-failed))
            "sanity check: the crash did not durably finalize the workflow"))

      ;; Phase 2: resume elsewhere — the sequence continues rather than restarting.
      (let [engine-2 (intemporal/make-workflow-engine :store st :threads 2)
            result   (drive-to-terminal engine-2 workflow-id)]
        (intemporal/shutdown-engine engine-2)

        (is (= :failed (:status result))
            "the activity never succeeds, so the workflow fails once the budget is spent")
        (is (= max-attempts (count @invocation-log))
            (str "the async activity must run exactly :max-attempts times across the "
                 "crash/resume; ran " (count @invocation-log) " times"))
        (is (= 1 (count (history-events st workflow-id :async-failed)))
            "the handle resolves exactly once, when the retries are exhausted")))))

;; ============================================================================
;; 2. A backing-off batch parks rather than spinning the replay budget
;; ============================================================================

(deftest test-backing-off-async-does-not-spin
  (testing "a batch with nothing due parks the drive instead of re-running the pass"
    (reset! invocation-log [])

    (let [workflow-id "async-retry-durability-2"
          st          (store/create-store)
          engine      (intemporal/make-workflow-engine :store st :threads 2)
          start       (System/currentTimeMillis)]

      (intemporal/submit-workflow engine async-retry-workflow [1]
                                  :workflow-id workflow-id)
      (let [stop (intemporal/start-worker engine :owner-id "async-retry-parking-worker"
                   :poll-ms 5 :workflow-concurrency 1)]
        (u/wait-until #(seq (history-events st workflow-id :activity-attempt-failed)) 5000)
        (stop))

      (is (= 1 (count @invocation-log)) "exactly one attempt ran before the park")
      (is (< (- (System/currentTimeMillis) start) backoff-ms)
          "the worker released the drive instead of sleeping through backoff")
      (is (empty? (history-events st workflow-id :workflow-failed))
          "parking is not replay-budget exhaustion")

      ;; Not due yet, so a worker's ownership scan skips it entirely.
      (is (not (contains? (set (map :workflow-id
                                 (p/claim-runnable! st "test-owner" 10
                                                    (System/currentTimeMillis))))
                          workflow-id))
          "a workflow whose async retry is not due must be excluded from worker claims")

      (intemporal/shutdown-engine engine))))

;; ============================================================================
;; 3. The async timeout now bounds ONE attempt, not the whole sequence
;; ============================================================================

(def slow-attempt-log (atom []))

(defn slow-flaky-activity
  "Each attempt takes ~150ms; the first two fail. Three attempts plus backoff
   comfortably exceed the 400ms per-attempt timeout in total, so this only
   succeeds if the timeout is applied per attempt."
  [x]
  (Thread/sleep 150)
  (let [n (count (swap! slow-attempt-log conj x))]
    (if (< n 3)
      (throw (ex-info "Transient failure" {:x x :attempt n}))
      [:ok x])))

(defn slow-async-workflow [x]
  (let [h (intemporal/async
            #(let [act (intemporal/stub #'slow-flaky-activity
                                        :timeout-ms 400
                                        :retry-policy (a/make-retry-policy
                                                        :max-attempts 4
                                                        :initial-backoff-ms 50))]
               (act x)))]
    (intemporal/join h)))

(deftest test-async-timeout-is-per-attempt
  (testing "timeout-ms bounds a single async attempt, not the whole retry sequence"
    (reset! slow-attempt-log [])

    (let [st     (store/create-store)
          engine (intemporal/make-workflow-engine :store st :threads 2)
          result (intemporal/start-workflow engine slow-async-workflow [7]
                                            :workflow-id "async-retry-durability-3")]
      (intemporal/shutdown-engine engine)

      (is (= :completed (:status result))
          (str "attempts of 150ms each fit a 400ms timeout, so the workflow must "
               "succeed on the third; got " (pr-str result)))
      (is (= [:ok 7] (:result result)) "and returns the successful attempt's result")
      (is (= 3 (count @slow-attempt-log)) "it took three attempts"))))
