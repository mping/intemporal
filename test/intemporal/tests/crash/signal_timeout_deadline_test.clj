(ns ^:crash intemporal.tests.crash.signal-timeout-deadline-test
  "Bug #14 / E5 — wait-for-signal-with-timeout recomputed its deadline
  (`(+ (current-time-ms) timeout-ms)`) on EVERY pass, unlike `sleep`, which
  persists and reuses its :timer-scheduled fire-at. Nothing anchored the first
  computed deadline, so a crash/resume (or any re-drive before the signal
  arrives — including a worker's periodic poll, E1) silently pushed the
  timeout later by however long the workflow was down. A wait could
  effectively never time out under a busy worker.
  FIX: `wait-for-signal-with-timeout` now persists a :signal-wait-scheduled
  event (mirroring :timer-scheduled) the first time it suspends, and reuses
  its recorded :deadline on every later pass instead of recomputing.
  REGRESSION GUARD: crash a workflow waiting on wait-for-signal-with-timeout,
  let real wall-clock time already exceed the ORIGINAL deadline while it is
  down, then resume with a fresh engine sharing the same store (no signal ever
  sent). The resumed drive must observe the timeout immediately — resuming
  fast, not waiting out a freshly-pushed deadline — and the persisted deadline
  must be byte-identical before and after the crash."
  (:require [intemporal.core :as intemporal]
            [intemporal.store :as store]
            [intemporal.protocol :as p]
            [clojure.test :refer [deftest is testing]]))

(defn timeout-workflow
  "Whole workflow body is a single signal-wait-with-timeout call; never sent,
  so the only way out is the timeout firing."
  [timeout-ms]
  (intemporal/wait-for-signal-with-timeout "never-sent" timeout-ms))

(defn- scheduled-event [store workflow-id]
  (->> (p/load-history store workflow-id)
       (filter #(= :signal-wait-scheduled (:event-type %)))
       first))

(deftest signal-timeout-deadline-survives-crash
  (testing "wait-for-signal-with-timeout's deadline does not extend across a crash/resume"
    (let [workflow-id      "signal-timeout-deadline-test-1"
          timeout-ms       300
          persistent-store (store/create-store)

          ;; ==================================================================
          ;; Phase 1: drive the workflow to the signal-timeout suspension point,
          ;; then simulate a crash before the timeout can fire on its own.
          ;; ==================================================================
          engine-1         (intemporal/make-workflow-engine
                             :store persistent-store
                             :threads 2)
          result-future-1  (future
                             (intemporal/start-workflow
                               engine-1
                               timeout-workflow
                               [timeout-ms]
                               :workflow-id workflow-id))]

      ;; Give the workflow time to reach the suspension and persist
      ;; :signal-wait-scheduled, well before the timeout could fire.
      (Thread/sleep 50)
      (future-cancel result-future-1)
      (intemporal/shutdown-engine engine-1)

      (let [scheduled (scheduled-event persistent-store workflow-id)]
        (is (some? scheduled) "signal-wait-scheduled was persisted before the crash")

        ;; ==================================================================
        ;; Phase 2: let real time already exceed the ORIGINAL deadline while
        ;; the workflow is "down" (no engine, no scheduler, no signal sent),
        ;; then resume with a fresh engine sharing the same store.
        ;; ==================================================================
        (let [deadline-before (:deadline scheduled)]
          (is (some? deadline-before) "the scheduled event carries a :deadline")

          ;; Sleep past the ORIGINAL deadline. If the bug were still present,
          ;; a resume now would recompute deadline = (resume-time + timeout-ms)
          ;; and the workflow would need to wait out a WHOLE NEW timeout window.
          (let [remaining (- deadline-before (System/currentTimeMillis))]
            (Thread/sleep (max 0 (+ remaining 100))))
          (is (>= (System/currentTimeMillis) deadline-before)
              "test setup: real time has already passed the original deadline")

          (let [engine-2 (intemporal/make-workflow-engine
                           :store persistent-store
                           :threads 2)
                start    (System/currentTimeMillis)
                result-2 (intemporal/resume-workflow
                           engine-2
                           workflow-id
                           timeout-workflow
                           [timeout-ms])
                elapsed  (- (System/currentTimeMillis) start)]

            (is (= :completed (:status result-2))
                "resumed workflow observes the timeout and completes")
            (is (= {:received false} (:result result-2))
                "workflow result reflects a timed-out wait")

            ;; The fix: the resume must resolve near-instantly (the deadline
            ;; already passed), not wait out a freshly-pushed timeout-ms window.
            (is (< elapsed timeout-ms)
                (str "resume took " elapsed
                     "ms — a fresh deadline would have made it wait out another "
                     timeout-ms "ms window"))

            ;; The persisted deadline itself must be unchanged by the resume.
            (let [deadline-after (:deadline (scheduled-event persistent-store workflow-id))]
              (is (= deadline-before deadline-after)
                  "the persisted :signal-wait-scheduled deadline did not drift across the crash/resume"))

            (intemporal/shutdown-engine engine-2)))))))
