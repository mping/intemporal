(ns intemporal.tests.engine.async-join-wake-test
  "Regression test for kimi.md improvement #3 / bug X5: lost-wake TOCTOU window
   on async/child-join waits.

   The generic wake callback is registered in `run-workflow-internal` only AFTER
   `handle-suspension` returns a `:wait-*` action (execution.clj:706-709, CLJS
   twin). For `:wait-async` (joining an independent child) no other callback is
   armed — `process-join-pending` registers nothing. A child that finishes in the
   window between the parent's `:async-completed` eligibility check and
   `register-wake-callback` fires `wake-workflow` against a store with no
   callback -> the wake is lost and the JVM `start-workflow` loop blocks in
   `.take` forever (start_workflow.clj:80).

   Reproducer mechanics (deterministic, no wall-clock races): a delegating store
   wrapper interposes on the FIRST `register-wake-callback` for the parent and,
   BEFORE letting the registration through, drives the child workflow to
   completion on the same thread. The child's `notify-parent-terminal` then
   writes the parent's `:async-completed` and calls `wake-workflow` while no
   callback is registered yet -- landing exactly in the X5 window.

   Correct behavior (what the fix must achieve): the parent still completes.
   Either because the wake lands on an already-armed callback, or because the
   eligibility check runs AFTER the registration and observes the completion
   (register-first, the bug-2.1 pattern already used for signals).

   Fix (kimi.md improvement #3, option 1): the generic wake callback is armed
   BEFORE the wait decision -- `run-workflow-internal` registers `wake-fn` before
   dispatching to `handle-suspension` (both engines), so the handler's
   eligibility check observes anything that completed before registration and
   the armed callback catches anything completing after. Against the unfixed
   engine this test FAILED: the parent's drive hung on `.take` and the deref
   timed out."
  (:require [intemporal.core :as intemporal]
            [intemporal.store :as store]
            [intemporal.protocol :as p]
            [clojure.test :refer [deftest is testing]]))

;; ============================================================================
;; Test Infrastructure
;; ============================================================================

(defn- window-store
  "IStore wrapper delegating to `inner`. The FIRST `register-wake-callback` for
   `parent-id` runs `in-window` BEFORE the registration is delegated, so whatever
   `in-window` does (here: complete the child) lands between the unfixed engine's
   eligibility check and the wake callback being armed -- the X5 window."
  [inner parent-id in-window]
  (let [fired (atom false)]
    (reify p/IStore
      (load-history [_ workflow-id] (p/load-history inner workflow-id))
      (save-event [_ workflow-id event] (p/save-event inner workflow-id event))
      (save-events [_ workflow-id events] (p/save-events inner workflow-id events))
      (find-event [_ workflow-id event-type seq-num] (p/find-event inner workflow-id event-type seq-num))
      (max-seq [_ workflow-id] (p/max-seq inner workflow-id))
      (get-pending-signals [_ workflow-id] (p/get-pending-signals inner workflow-id))
      (add-signal [_ workflow-id signal-name signal-data] (p/add-signal inner workflow-id signal-name signal-data))
      (consume-signal [_ workflow-id signal-name] (p/consume-signal inner workflow-id signal-name))
      (register-signal-callback [_ workflow-id signal-name callback]
        (p/register-signal-callback inner workflow-id signal-name callback))
      (unregister-signal-callback [_ workflow-id signal-name]
        (p/unregister-signal-callback inner workflow-id signal-name))
      (register-wake-callback [_ workflow-id callback]
        (when (and (= workflow-id parent-id)
                   (compare-and-set! fired false true))
          (in-window))
        (p/register-wake-callback inner workflow-id callback))
      (wake-workflow [_ workflow-id] (p/wake-workflow inner workflow-id))
      (is-cancelled? [_ workflow-id] (p/is-cancelled? inner workflow-id))
      (mark-cancelled [_ workflow-id] (p/mark-cancelled inner workflow-id))
      (get-workflow-status [_ workflow-id] (p/get-workflow-status inner workflow-id))
      (claim-owner [_ workflow-id owner-id] (p/claim-owner inner workflow-id owner-id))
      (list-pending [_ owner-id limit] (p/list-pending inner owner-id limit))
      (release-owner [_ owner-id] (p/release-owner inner owner-id))
      (set-wake-at [_ workflow-id wake-at-ms] (p/set-wake-at inner workflow-id wake-at-ms))
      (link-child! [_ parent-id parent-seq child-id policy]
        (p/link-child! inner parent-id parent-seq child-id policy))
      (list-children [_ parent-id] (p/list-children inner parent-id)))))

(defn- count-events [store workflow-id event-type]
  (->> (p/load-history store workflow-id)
       (filter #(= event-type (:event-type %)))
       count))

;; ============================================================================
;; Workflows
;; ============================================================================

(intemporal/defn-workflow wake-child-wf
  "Trivial child: completes in a single pass, no suspensions."
  [x]
  (* x 2))

(intemporal/defn-workflow wake-parent-wf
  "Schedules an independent child and immediately joins it -- parks on
   :wait-async until the child's terminal event lands in the parent history."
  [x child-id]
  (let [h (intemporal/run-child-workflow-async #'wake-child-wf [x] :child-id child-id)]
    (intemporal/join h)))

;; ============================================================================
;; Test
;; ============================================================================

(deftest test-child-completion-in-wake-window-still-wakes-parent
  (testing "child finishing between the eligibility check and register-wake-callback is not lost"
    (let [parent-id "async-join-wake-parent"
          child-id  "async-join-wake-child"
          inner     (store/->InMemoryStore (atom {}))
          ;; Forward reference: the window fn drives the child via a second
          ;; engine once the parent's drive reaches register-wake-callback.
          engine-2  (atom nil)
          wrapped   (window-store inner parent-id
                                  #(intemporal/resume-workflow @engine-2 child-id
                                                               #'wake-child-wf [21]))
          engine-1  (intemporal/make-workflow-engine :store wrapped :threads 2)
          _         (reset! engine-2 (intemporal/make-workflow-engine :store wrapped :threads 2))
          fut       (future
                      (intemporal/start-workflow engine-1 #'wake-parent-wf
                                                 [21 child-id]
                                                 :workflow-id parent-id))
          result    (deref fut 5000 ::timed-out)]

      ;; Cleanup first: on the unfixed engine the drive thread is parked on
      ;; .take forever -- cancel it so the suite doesn't leak the thread.
      (when (= ::timed-out result)
        (future-cancel fut))
      (intemporal/shutdown-engine engine-1)
      (intemporal/shutdown-engine @engine-2)

      (is (= 1 (count-events inner parent-id :async-completed))
          "sanity check: the child DID complete in the window and recorded the parent's async-completed")

      (is (not= ::timed-out result)
          "the parent's wake must not be lost: start-workflow should complete, not hang on .take forever")
      (when (not= ::timed-out result)
        (is (= :completed (:status result))
            "workflow should finish successfully")
        (is (= 42 (:result result))
            "join should return the child's actual result (21 * 2)")))))
