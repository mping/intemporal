(ns intemporal.tests.engine.cascade-cancel-wake-test
  "Regression test for kimi.md finding E6 (test plan #15): `enforce-close-
   policies!`'s :cascade-cancel case failed to make the child runnable.

   `cancel-workflow` (core.cljc:~884-890) does the right three things when
   cancelling a workflow directly atomically records cancellation and wakes the
   workflow. The former :cascade-cancel branch did not durably make a timed
   child eligible for another drive.

   That omission is invisible for a child parked on a signal: `wait-for-signal`
   parks indefinitely, so the old scan still picked it up on the next poll. That
   is why the existing child-workflow-cascade-cancel-test (whose child waits on
   a signal) never catches this. It bites a child parked on a TIMER: `sleep`
   persists the timer's fire-at. Cascade-cancelling that child used to leave the
   original timer deadline in place, so worker scans kept excluding it. The
   child never re-executed to observe `is-cancelled?`, run saga compensation, or write its terminal
   :workflow-cancelled event, until its original (here: far-future) deadline
   arrives.

   FDB is excluded from this test's matrix: its `mark-cancelled` forces the
   workflow due as a store-specific side effect (fdb.clj), masking the bug
   there.

   Correct behavior: cascade-cancelling a timer-sleeping child must make it due
   immediately, so the worker's very next poll drives it to :cancelled -- not
   stuck until the original deadline.

   Fixing E6 alone does NOT make this pass: getting the child re-driven only
   exposed a second defect on the same path, which this test also covers.
   `check-cancelled!` defers to the frontier -- the first UNRESOLVED seq --
   and `replaying?` (context.cljc) counted ANY event at a seq as 'resolved'.
   `wait-for-signal` records nothing while waiting, so every re-drive of a
   signal-waiting workflow is a fresh frontier and cancellation always lands;
   but `sleep` persists a :timer-scheduled marker up front (so its deadline
   can't drift across resumes), which made its own seq look replayed on every
   later re-drive. With nothing after the sleep there was no further frontier
   to reach, so cancellation was permanently undeliverable and the child only
   ever unblocked when its original timer fired. The fix narrows `replaying?`
   to RESOLVED ops: a bare :timer-scheduled / :signal-wait-scheduled no longer
   suppresses the check.

   Fails against the unfixed engine (and against an E6-only fix): the terminal
   :workflow-cancelled event does not appear within the short bound below
   (`far-future-sleep-ms` is chosen so the only way to observe it that fast is
   prompt re-drive, never the timer firing on its own)."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.tests.child-workflow-util :as u]))

;; ── workflows ───────────────────────────────────────────────────────────────────

(def far-future-sleep-ms
  "1 hour -- far longer than any bound this test polls for, so a prompt
   :workflow-cancelled can only be explained by a timely re-drive after
   cascade-cancel, never by the timer firing naturally."
  3600000)

(intemporal/defn-workflow sleepy-child []
  (intemporal/sleep far-future-sleep-ms)
  :woke-naturally)

(intemporal/defn-workflow cascade-parent [child-id]
  (intemporal/run-child-workflow-detached #'sleepy-child []
                                          :child-id child-id
                                          :parent-close-policy :cascade-cancel)
  ;; Stay open on purpose: lets the test confirm the child already suspended on
  ;; its far-future sleep (next-run-at set) BEFORE closing the parent, so the
  ;; assertion below is actually exercising the deadline gate, not a lucky race.
  (intemporal/wait-for-signal "close")
  :parent-done)

;; ── check ───────────────────────────────────────────────────────────────────────

(defn- await-event
  "Poll `workflow-id`'s history for an event of `event-type`. Short poll / short
   timeout on purpose: the assertion is about PROMPTNESS, not eventual
   consistency -- both bounds sit far under `far-future-sleep-ms`."
  [store workflow-id event-type timeout-ms]
  (let [deadline (+ (System/currentTimeMillis) timeout-ms)]
    (loop []
      (cond
        (some #(= event-type (:event-type %)) (p/load-history store workflow-id)) true
        (> (System/currentTimeMillis) deadline) false
        :else (do (Thread/sleep 20) (recur))))))

(defn- check [store]
  (u/with-worker store
    (fn [engine]
      (let [pid (str "casc-wake-" (random-uuid))
            cid (str pid "/child")]
        (intemporal/submit-workflow engine #'cascade-parent [cid] :workflow-id pid)
        ;; The child must actually reach its sleep (next-run-at recorded, pointing
        ;; far into the future) before the parent closes -- only then is the
        ;; deadline gate the thing standing between cascade-cancel and a prompt
        ;; :workflow-cancelled.
        (is (await-event store cid :timer-scheduled 3000)
            "child reaches its long sleep (timer-scheduled) before the parent closes")
        ;; Close the parent -> enforce-close-policies! fires cascade-cancel on
        ;; the child.
        (intemporal/send-signal store pid "close" {})
        (let [r (intemporal/await-workflow engine pid :timeout-ms 5000)]
          (is (= :completed (:status r)) "parent completes, firing cascade-cancel on the child"))
        (is (await-event store cid :workflow-cancelled 3000)
            (str "cascade-cancelled child must be re-driven to write its terminal "
                 ":workflow-cancelled event promptly -- not stuck until its original "
                 far-future-sleep-ms "ms next-run-at"))))))

;; ── tests ───────────────────────────────────────────────────────────────────────

(deftest cascade-cancel-wake-in-memory
  (testing "in-memory" (check (u/in-memory))))

(deftest ^:integration cascade-cancel-wake-jdbc
  (testing "jdbc" (let [s (u/jdbc)] (try (check s) (finally (.close s))))))
