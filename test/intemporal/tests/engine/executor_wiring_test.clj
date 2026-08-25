(ns intemporal.tests.engine.executor-wiring-test
  "Regression tests for bounded executor wiring and backpressure.

   E7 — the `:threads` option never reached the executor. `start-engine`
   passed `:threads`, but `make-vthreads-executor` destructures `:max-concurrent`
   only, so the bound was always nil and EVERY engine ran an unbounded
   `newVirtualThreadPerTaskExecutor`. `create-bounded-executor` was dead code in
   production: the documented concurrency limit was silently dropped.

   E8 — `create-bounded-executor` paired an `ArrayBlockingQueue` with
   `CallerRunsPolicy`. On saturation `.submit` ran the activity INLINE on the
   workflow drive thread and returned an already-completed future, so the
   `.get timeout` in `execute-activity` / `execute-activities-parallel` could
   never fire. Consequences: activity timeouts unenforced, a hung activity hangs
   the whole drive loop, and 'parallel' batches silently serialize.

   What these tests assert once #17 is fixed:
     1. `:threads N` actually caps concurrent activity execution, and omitting it
        keeps the unbounded default;
     2. a saturated bounded executor WAITS for a slot instead of running the
        activity on the calling thread;
     3. an activity timeout is still enforced when the executor is saturated;
     4. backpressure is not failure — a fan-out wider than the bound still
        completes, with every activity executing exactly once;
     5. rejection is preserved for the case the engine can act on: a closing
        executor raises `RejectedExecutionException` (which `attempt-once`
        classifies as `:rejected` and `stub` reschedules) instead of dropping the
        task and hanging until the activity timeout.

   Tests 1-3 and 5 fail against the unfixed runtime."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.internal.activity :as a]
   [intemporal.internal.error :as error]
   [intemporal.internal.runtime :as runtime]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.tests.utils :as u])
  (:import
   (java.util.concurrent CountDownLatch RejectedExecutionException ThreadPoolExecutor TimeUnit)))

;; ============================================================================
;; Test Infrastructure
;; ============================================================================

(def gauge
  "Live/peak count of activities executing at the same instant."
  (atom {:live 0 :peak 0}))

(def exec-log (atom []))

(defn- reset-probes! []
  (reset! gauge {:live 0 :peak 0})
  (reset! exec-log []))

(defn gauged-activity
  "Holds a pool slot long enough for a whole fan-out to overlap, so :peak
   reflects the executor's real concurrency rather than scheduling luck."
  [x]
  (swap! gauge (fn [{:keys [live peak]}]
                 (let [live' (inc live)]
                   {:live live' :peak (max peak live')})))
  (try
    (Thread/sleep 150)
    (swap! exec-log conj x)
    (* x 10)
    (finally
      (swap! gauge update :live dec))))

(defn fanout-workflow
  "Fans out `n` asyncs through `execute-activities-parallel` and joins them all."
  [n]
  (let [handles (mapv (fn [i]
                        (intemporal/async #(let [act (intemporal/stub #'gauged-activity)]
                                             (act i))))
                      (range 1 (inc n)))]
    (reduce + (intemporal/join-all handles))))

(defn- bounded-executor
  "max-concurrent 1 + queue-capacity 1: exactly two tasks fit before the pool
   saturates, which makes the backpressure path deterministic."
  [registry & {:keys [default-timeout-ms submit-timeout-ms]
               :or   {default-timeout-ms 5000 submit-timeout-ms 5000}}]
  (runtime/make-vthreads-executor registry
                                  :max-concurrent 1
                                  :queue-capacity 1
                                  :submit-timeout-ms submit-timeout-ms
                                  :default-timeout-ms default-timeout-ms))

(defn- queue-size [executor]
  (.size (.getQueue ^ThreadPoolExecutor (:pool executor))))

(defn- saturate!
  "Occupies the single pool thread and the single queue slot with activities
   parked on `release`. Returns the two in-flight futures. On return the next
   submit is guaranteed to hit the rejection handler."
  [executor ^CountDownLatch release]
  (let [started (CountDownLatch. 1)
        b1      (future (p/execute-activity executor "blocker" [started release] 30000))]
    (.await started 5 TimeUnit/SECONDS)              ; pool thread is busy
    (let [b2 (future (p/execute-activity executor "blocker" [nil release] 30000))]
      (u/wait-until #(= 1 (queue-size executor)))    ; queue slot is taken
      [b1 b2])))

(defn- register-blocker! [registry]
  (a/register-activity! registry
                        (fn [^CountDownLatch started ^CountDownLatch release]
                          (when started (.countDown started))
                          (.await release)
                          :released)
                        :name "blocker"))

(deftest test-submit-timeout-option-reaches-runtime
  (testing ":submit-timeout-ms is a real public engine option"
    (let [seen (atom nil)
          fake-executor (reify p/IActivityExecutor
                          (execute-activity [_ _ _ _])
                          (execute-activities-parallel [_ _])
                          (shutdown-executor [_ _])
                          (shutdown? [_] false))]
      (with-redefs [runtime/make-vthreads-executor
                    (fn [_registry & opts]
                      (reset! seen (apply hash-map opts))
                      fake-executor)]
        (let [engine (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid))

                       :submit-timeout-ms 1234)]
          (try
            (is (= 1234 (:submit-timeout-ms @seen)))
            (finally
              (intemporal/shutdown-engine engine))))))))

;; ============================================================================
;; E7 — the :threads option reaches the executor
;; ============================================================================

(deftest test-threads-option-bounds-activity-concurrency
  (testing ":threads N caps the number of activities executing at once"
    (reset-probes!)
    (let [engine (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)) :store (store/create-store) :threads 2)
          result (try
                   (intemporal/start-workflow engine fanout-workflow [6])
                   (finally (intemporal/shutdown-engine engine)))]

      (is (<= (:peak @gauge) 2)
          (str "at most 2 activities may run concurrently under :threads 2; the option "
               "was silently dropped before #17. Peak observed: " (:peak @gauge)))

      ;; Backpressure must not turn into failure or duplication: the 4 members
      ;; that did not fit queue and run later, exactly once each.
      (is (= :completed (:status result))
          "a fan-out wider than the bound must still complete")
      (is (= 210 (:result result))
          "join-all must return every activity's real result (10+20+...+60)")
      (is (= (zipmap (range 1 7) (repeat 1)) (frequencies @exec-log))
          (str "each activity must execute exactly once. Log: " (pr-str @exec-log))))))

(deftest test-default-engine-stays-unbounded
  (testing "omitting :threads keeps one virtual thread per activity"
    (reset-probes!)
    (let [engine (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)) :store (store/create-store))
          result (try
                   (intemporal/start-workflow engine fanout-workflow [6])
                   (finally (intemporal/shutdown-engine engine)))]
      (is (= :completed (:status result)))
      (is (> (:peak @gauge) 2)
          (str "the default engine must not bound concurrency. Peak observed: "
               (:peak @gauge))))))

;; ============================================================================
;; E8 — saturation applies backpressure instead of running on the caller
;; ============================================================================

(deftest test-saturated-executor-does-not-run-on-caller-thread
  (testing "a saturated submit waits for a slot rather than executing inline"
    (let [registry     (a/make-registry)
          release      (CountDownLatch. 1)
          probe-thread (atom nil)
          _            (register-blocker! registry)
          _            (a/register-activity! registry
                                             (fn []
                                               (reset! probe-thread (.threadId (Thread/currentThread)))
                                               :probed)
                                             :name "probe")
          executor     (bounded-executor registry)
          [b1 b2]      (saturate! executor release)
          caller       (atom nil)
          pf           (future
                         (reset! caller (.threadId (Thread/currentThread)))
                         (p/execute-activity executor "probe" [] 30000))
          ;; A bounded wait, not a poll: the assertion is that NOTHING happened.
          ;; CallerRunsPolicy would have run the probe inline by now.
          _            (Thread/sleep 300)
          ran-while-saturated? (some? @probe-thread)]

      (is (not ran-while-saturated?)
          "a saturated submit must block for a slot, never execute on the drive thread")

      (.countDown release)
      (let [probe-result (deref pf 10000 ::timed-out)]
        (is (= :probed probe-result)
            "once a slot frees, the queued activity must run normally")
        (is (some? @probe-thread))
        (is (not= @caller @probe-thread)
            (str "the activity must run on a pool thread so .get timeout measures real "
                 "execution; running it on the caller makes the timeout unenforceable")))

      (deref b1 5000 nil)
      (deref b2 5000 nil)
      (p/shutdown-executor executor 1))))

(deftest test-activity-timeout-enforced-under-saturation
  (testing "an activity timeout still fires when the executor is saturated"
    (let [registry (a/make-registry)
          release  (CountDownLatch. 1)
          _        (register-blocker! registry)
          _        (a/register-activity! registry
                                         (fn [] (Thread/sleep 2000) :slow-done)
                                         :name "slow")
          executor (bounded-executor registry)
          [b1 b2]  (saturate! executor release)
          pf       (future (try
                             (p/execute-activity executor "slow" [] 200)
                             (catch Throwable t t)))
          ;; Let the probe's submit actually reach the saturated pool before
          ;; freeing a slot. Releasing immediately would race the future and let
          ;; the probe be accepted normally — which passes either way and so
          ;; tests nothing.
          _        (Thread/sleep 300)
          _        (.countDown release)
          outcome  (deref pf 10000 ::timed-out)]

      (is (instance? Throwable outcome)
          (str "a 2000ms activity submitted with a 200ms timeout must time out. "
               "Under CallerRunsPolicy it ran inline and the already-completed future "
               "returned its result instead. Got: " (pr-str outcome)))
      (when (instance? Throwable outcome)
        (is (::error/activity-timeout (ex-data outcome))
            (str "the failure must be an activity timeout, got: " (pr-str (ex-data outcome)))))

      (deref b1 5000 nil)
      (deref b2 5000 nil)
      (p/shutdown-executor executor 1))))

(deftest test-closing-executor-still-rejects
  (testing "a shut-down executor rejects so the activity can be rescheduled"
    (let [registry (a/make-registry)
          _        (a/register-activity! registry (fn [] :ok) :name "noop")
          executor (bounded-executor registry :default-timeout-ms 1000)]
      (p/shutdown-executor executor 0)
      (let [outcome (try
                      (p/execute-activity executor "noop" [] 1000)
                      (catch Throwable t t))]
        (is (instance? RejectedExecutionException outcome)
            (str "a closing pool must raise RejectedExecutionException — attempt-once "
                 "classifies it as :rejected and `stub` reschedules. CallerRunsPolicy "
                 "silently discarded the task, so the drive blocked until the activity "
                 "timeout instead. Got: " (pr-str outcome)))))))
