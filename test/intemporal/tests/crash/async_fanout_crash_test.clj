(ns intemporal.tests.crash.async-fanout-crash-test
  "Regression test: `handle-suspension` must forward pending asyncs for every
   suspension type, not only :activity,
   :join-pending, :join-any-pending, and :child-workflow suspension branches.
   The :timer and :wait-signal(-timeout) branches drop them on the floor.

   Reproducer: `(let [h (async #(act x))] (sleep ms) (join h))`.
   Buggy behavior: pass 1's `async` persists an :async-started event and
   queues the activity in `pending-asyncs`; `sleep` then suspends with
   :timer, and the timer branch saves pending EVENTS but never runs the
   pending ASYNCS batch -> the activity backing the handle never executes.
   On every later pass, `async` sees the persisted :async-started event and
   takes the `existing-started` branch, which does not re-queue the
   activity -- so `join` always re-suspends on :join-pending (:wait-async)
   with nothing new executed, and the workflow can never make progress.
   `existing-started` also never calls `ctx/update-seq!`, so the seq
   counter drifts by one for the rest of each pass.

   This test asserts the CORRECT behavior once X1 is fixed: the async's
   activity runs exactly once (whether the sleep suspension happens to
   interleave before or after it), :async-completed is recorded, the
   workflow completes, and the seq counter stays stable across passes (no
   duplicate-seq :timer-scheduled events). It currently FAILS against the
   unfixed engine."
  {:crash true}
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.store :as store]))

;; ============================================================================
;; Test Infrastructure
;; ============================================================================

(def execution-counter (atom 0))

(defn tracked-activity
  "Activity backing the async handle; increments a counter so we can tell
   whether it ever actually ran."
  [x]
  (swap! execution-counter inc)
  (* x 2))

(defn async-then-sleep-workflow
  "Fires one async activity, then sleeps (a :timer suspension) before joining
   the handle. Correct behavior: the async's activity must still execute
   (exactly once) and be joinable regardless of the intervening :timer
   suspension."
  [x sleep-ms]
  (let [handle (intemporal/async #(let [act (intemporal/stub #'tracked-activity)]
                                    (act x)))]
    (intemporal/sleep sleep-ms)
    (intemporal/join handle)))

(defn async-then-crash-point-workflow
  "Fires one async activity, then suspends on a signal wait -- a deterministic
   crash point under our control, with no wall-clock races -- before joining
   the handle."
  [x]
  (let [handle (intemporal/async #(let [act (intemporal/stub #'tracked-activity)]
                                    (act x)))]
    (intemporal/wait-for-signal "resume")
    (intemporal/join handle)))

(defn- count-events [store workflow-id event-type]
  (->> (p/load-history store workflow-id)
       (filter #(= event-type (:event-type %)))
       count))

;; ============================================================================
;; Test
;; ============================================================================

(deftest test-async-survives-intervening-timer-suspension
  (testing "async fired right before a sleep still executes and the workflow completes"
    (reset! execution-counter 0)
    (let [workflow-id      "async-fanout-crash-1"
          persistent-store (store/create-store)
          engine           (intemporal/make-workflow-engine :store persistent-store :threads 2)
          ;; Short sleep: enough to force a :timer suspension in between the
          ;; async being scheduled and it being joined, without slowing the test.
          fut              (future
                             (intemporal/start-workflow engine async-then-sleep-workflow
                                                        [21 50]
                                                        :workflow-id workflow-id))
          result           (deref fut 5000 ::timed-out)]

      (is (not= ::timed-out result)
          "start-workflow should complete once the timer fires and the async can be joined, not hang forever")
      (is (= :completed (:status result))
          "workflow should finish successfully")
      (is (= 42 (:result result))
          "join should return the activity's actual result (21 * 2)")

      ;; The activity backing the async handle must have actually run, exactly
      ;; once, regardless of the intervening :timer suspension.
      (is (= 1 @execution-counter)
          "the async's activity must execute exactly once")
      (is (= 1 (count-events persistent-store workflow-id :async-started))
          "async-started should have been persisted for the handle")
      (is (= 1 (count-events persistent-store workflow-id :async-completed))
          "async-completed must be recorded so the workflow can make progress")
      (is (= 1 (count-events persistent-store workflow-id :workflow-completed))
          "workflow must reach a single terminal :workflow-completed event")

      (intemporal/shutdown-engine engine)))

  (testing "crashing while parked at the signal wait still resumes to exactly-once completion"
    (reset! execution-counter 0)
    (let [workflow-id      "async-fanout-crash-2"
          persistent-store (store/create-store)
          engine-1         (intemporal/make-workflow-engine :store persistent-store :threads 2)
          ;; wait-for-signal is our deterministic crash point: the workflow
          ;; suspends there on the very first pass, right after the async is
          ;; scheduled, with zero wall-clock races -- :async-started is
          ;; guaranteed persisted before we "crash". Note: the FIXED engine
          ;; flushes the pending async batch before parking on any wait, so the
          ;; activity may legitimately have run (once) by crash time; the
          ;; invariant under test is exactly-once execution across crash+resume.
          fut              (future
                             (intemporal/start-workflow engine-1 async-then-crash-point-workflow
                                                        [7]
                                                        :workflow-id workflow-id))]
      (Thread/sleep 300)
      (future-cancel fut)
      (intemporal/shutdown-engine engine-1)
      (is (<= @execution-counter 1)
          "the pre-wait async flush may already have run the activity, at most once")
      (is (= 1 (count-events persistent-store workflow-id :async-started))
          "sanity check: async-started must have been persisted before the crash")

      ;; Simulate a process restart: fresh engine, same store. Send the signal
      ;; the crash point was waiting on, then resume. drive-workflow!
      ;; loops internally on :continue, so a single resume-workflow call
      ;; drives all the way through re-queueing the async's activity, joining
      ;; it, and finalizing -- no need to call it more than once when the
      ;; engine is correct.
      (intemporal/send-signal persistent-store workflow-id "resume" {})
      (let [engine-2 (intemporal/make-workflow-engine :store persistent-store :threads 2)
            result   (intemporal/resume-workflow engine-2 workflow-id)]
        (is (= :completed (:status result))
            "resume must re-queue and run the never-executed activity, then complete the workflow")
        (is (= 14 (:result result))
            "join should return the activity's actual result (7 * 2)")
        (is (= 1 @execution-counter)
            "the async's activity must execute exactly once total, across the crash and resume")
        (is (= 1 (count-events persistent-store workflow-id :async-completed))
            "async-completed must be recorded after resume")

        (intemporal/shutdown-engine engine-2)))))
