(ns intemporal.tests.runtime.parallel-rejection-test
  "Regression test: `RejectedExecutionException` must not escape the parallel
   activity path.

   `execute-activities-parallel` (runtime.clj) builds its futures with a `mapv`
   whose `.submit` calls sit OUTSIDE any try; only the later `.get` phase is
   wrapped. A rejection on the Nth submit therefore propagates straight out of
   `process-pending-asyncs-parallel` -> `handle-suspension` ->
   `drive-workflow!` — none of which catch it — and out of
   `start-workflow` itself. Consequences:

     (a) no rescheduling: unlike the SEQUENTIAL path, which classifies a
         rejection as :rejected and re-executes it on the next pass
         (execution.clj `attempt-once` + the `rejected?` branch in `stub`), the
         parallel path just blows up;
     (b) the activities submitted BEFORE the rejection still ran — their side
         effects happened — but no completion events are written, so they are
         guaranteed to be re-executed on resume;
     (c) the workflow's own drive dies with an infrastructure exception instead
         of degrading to a retryable state.

   The `p/shutdown?` guard at the top of the drive loop does not close this: a
   pool can start shutting down (or saturate, E8) between the check and the
   submit.

   What these tests assert once X4 is fixed:
     1. unit — a mid-batch rejection never escapes; every requested activity
        gets a result, and the unsubmitted ones come back as
        `{:status :failed :error {:exception-kind :rejected}}`;
     2. integration — a workflow whose async batch is partially rejected still
        completes, the rejected members are RESCHEDULED and run on a later
        pass, and every activity executes exactly once.

   Both currently FAIL against the unfixed runtime (the exception escapes)."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.internal.activity :as a]
   [intemporal.internal.runtime :as runtime]
   [intemporal.protocol :as p]
   [intemporal.store :as store])
  (:import
   (java.util.concurrent AbstractExecutorService ExecutorService Executors RejectedExecutionException TimeUnit)))

;; ============================================================================
;; Test Infrastructure
;; ============================================================================

(defn- rejecting-pool
  "An ExecutorService delegating to `inner` that throws
   RejectedExecutionException for every submit whose 1-based ordinal satisfies
   `reject?`. `AbstractExecutorService.submit` is implemented in terms of
   `execute`, so throwing here reproduces exactly what a saturated/closing pool
   does at the `.submit` call site — deterministically, with no queue-saturation
   timing games."
  ^ExecutorService [^ExecutorService inner reject?]
  (let [n (atom 0)]
    (proxy [AbstractExecutorService] []
      (execute [r]
        (if (reject? (swap! n inc))
          (throw (RejectedExecutionException. "test-induced rejection"))
          (.execute inner ^Runnable r)))
      (shutdown [] (.shutdown inner))
      (shutdownNow [] (.shutdownNow inner))
      (isShutdown [] (.isShutdown inner))
      (isTerminated [] (.isTerminated inner))
      (awaitTermination [timeout unit] (.awaitTermination inner ^long timeout ^TimeUnit unit)))))

(def exec-log (atom []))

(defn tracked-activity
  "Records every real execution so the tests can assert exactly-once semantics
   across the reject-then-reschedule cycle."
  [x]
  (swap! exec-log conj x)
  (* x 2))

(defn three-async-workflow
  "Fans out three asyncs, then joins them all. With a pool that rejects the 2nd
   and 3rd submits, pass 1 runs only the first activity; the other two must be
   recorded as :rejected and re-enqueued on the next pass."
  [x]
  (let [h1 (intemporal/async #(let [act (intemporal/stub #'tracked-activity)] (act x)))
        h2 (intemporal/async #(let [act (intemporal/stub #'tracked-activity)] (act (+ x 1))))
        h3 (intemporal/async #(let [act (intemporal/stub #'tracked-activity)] (act (+ x 2))))]
    (reduce + (intemporal/join-all [h1 h2 h3]))))

(defn- history-events [store workflow-id event-type]
  (->> (p/load-history store workflow-id)
       (filter #(= event-type (:event-type %)))))

(defn- rejected-failures [store workflow-id]
  (->> (history-events store workflow-id :activity-failed)
       (filter #(= :rejected (get-in % [:error :exception-kind])))))

;; ============================================================================
;; Tests
;; ============================================================================

(deftest test-rejection-does-not-escape-execute-activities-parallel
  (testing "a mid-batch rejection degrades to per-activity :rejected results"
    (let [registry (a/make-registry)
          _        (a/register-activity! registry (fn [x] (* x 2)) :name "double")
          inner    (Executors/newFixedThreadPool 2)
          executor (runtime/->ParallelActivityExecutor
                     (rejecting-pool inner #{2 3}) registry 5000)
          batch    [{:activity-name "double" :args [1] :timeout-ms 2000}
                    {:activity-name "double" :args [2] :timeout-ms 2000}
                    {:activity-name "double" :args [3] :timeout-ms 2000}]
          outcome  (try
                     (p/execute-activities-parallel executor batch)
                     (catch Throwable t t))]

      (is (not (instance? Throwable outcome))
          (str "RejectedExecutionException must not escape execute-activities-parallel, got: "
               (pr-str outcome)))

      (when-not (instance? Throwable outcome)
        (is (= 3 (count outcome))
            "one result per requested activity, including the ones that were never submitted")
        (is (= :success (:status (nth outcome 0)))
            "the activity that WAS submitted must still report its result")
        (is (= 2 (:result (nth outcome 0)))
            "the submitted activity's result must be preserved, not discarded")
        (doseq [i [1 2]]
          (let [r (nth outcome i)]
            (is (= :failed (:status r))
                (str "unsubmitted activity " i " must come back as a failure, not vanish"))
            (is (= :rejected (get-in r [:error :exception-kind]))
                (str "unsubmitted activity " i " must carry the :rejected kind so the "
                     "replay branch reschedules it instead of replaying a durable failure")))))

      (p/shutdown-executor executor 1))))

(deftest test-rejected-async-batch-reschedules-and-completes
  (testing "rejected members of an async batch are rescheduled and run on a later pass"
    (reset! exec-log [])
    (let [workflow-id "parallel-rejection-wf"
          st          (store/create-store)
          inner       (Executors/newVirtualThreadPerTaskExecutor)
          ;; Reject submits #2 and #3 — i.e. the 2nd and 3rd members of the very
          ;; first async batch. Every later submit (the reschedules) is accepted,
          ;; so a correct engine converges instead of hot-looping.
          engine      (with-redefs [runtime/make-vthreads-executor
                                    (fn [registry & _]
                                      (runtime/->ParallelActivityExecutor
                                        (rejecting-pool inner #{2 3})
                                        registry
                                        30000))]
                        (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)) :store st))
          fut         (future
                        (try
                          (intemporal/start-workflow engine three-async-workflow [1]
                                                     :workflow-id workflow-id)
                          (catch Throwable t t)))
          result      (deref fut 10000 ::timed-out)]

      (when (= ::timed-out result)
        (future-cancel fut))
      (intemporal/shutdown-engine engine)

      (is (not= ::timed-out result)
          "the drive must not hang after a partially-rejected batch")
      (is (not (instance? Throwable result))
          (str "RejectedExecutionException must not escape start-workflow, got: " (pr-str result)))

      (when (map? result)
        (is (= :completed (:status result))
            "the workflow must complete: a rejection is an infrastructure condition, not an outcome")
        (is (= 12 (:result result))
            "join-all must return every activity's real result (2 + 4 + 6)"))

      (is (= {1 1, 2 1, 3 1} (frequencies @exec-log))
          (str "each activity must execute exactly once — the rejected ones never ran, "
               "so they must run on the reschedule pass and not be double-executed. Log: "
               (pr-str @exec-log)))

      (is (= 2 (count (rejected-failures st workflow-id)))
          "both unsubmitted activities must be recorded as :rejected activity failures")
      (is (= 3 (count (history-events st workflow-id :async-completed)))
          "all three async handles must eventually resolve with a completion event")
      (is (= 1 (count (history-events st workflow-id :workflow-completed)))
          "the workflow must reach a single terminal :workflow-completed event"))))
