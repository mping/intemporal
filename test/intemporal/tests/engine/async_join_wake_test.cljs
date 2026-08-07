(ns intemporal.tests.engine.async-join-wake-test
  "Regression test for kimi.md improvement #3 / bug X5 (ClojureScript): lost-wake
   TOCTOU window on async/child-join waits. Mirror of the JVM test in
   async_join_wake_test.clj.

   The generic wake callback is registered in `run-workflow-internal` only AFTER
   the `handle-suspension` promise settles with a `:wait-*` action
   (execution.cljs:717-719), while the `:async-completed` eligibility check ran
   earlier, inside `process-join-pending`. Between those two microtasks a child's
   `notify-parent-terminal` (execution.cljs:408-431) can record the parent's
   `:async-completed` and call `wake-workflow` -- which is a no-op when no
   callback is registered yet (store.cljc:100-109). The wake is lost and the
   `start-workflow` deferred (start_workflow.cljs:47-81) never resolves.

   Reproducer mechanics (deterministic): a delegating store wrapper interposes
   on the FIRST `register-wake-callback` for the parent and, BEFORE letting the
   registration through, synchronously applies the child's terminal effect on
   the parent (same events + set-wake-at + wake-workflow as
   notify-parent-terminal). In CLJS a real child drive is promise-based and its
   finalizer would land on a LATER microtask -- after registration -- so the
   window can only be hit deterministically by this synchronous injection; the
   ordering it produces is exactly the X5 condition: [parent check: miss] ->
   [completion recorded + wake dropped] -> [callback armed, drive parks].

   Fix (kimi.md improvement #3, option 1): the wake callback is armed BEFORE the
   wait decision -- `run-workflow-internal` registers `wake-fn` before
   dispatching to `handle-suspension` (both engines), so the post-registration
   eligibility check observes the completion (register-first, the bug-2.1
   pattern). Against the unfixed engine this test FAILED: the start-workflow
   promise never settled and the timeout won the race."
  (:require [cljs.test :as t :refer [deftest is testing async]]
            [intemporal.core :as intemporal]
            [intemporal.store :as store]
            [intemporal.protocol :as p]
            [intemporal.utils :as utils]
            [promesa.core :as prom])
  (:require-macros [intemporal.core :as intemporal]))

;; ============================================================================
;; Test Infrastructure
;; ============================================================================

(defn- window-store
  "IStore wrapper delegating to `inner`. The FIRST `register-wake-callback` for
   `parent-id` runs `in-window` BEFORE the registration is delegated, so whatever
   `in-window` does lands between the unfixed engine's eligibility check and the
   wake callback being armed -- the X5 window."
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

(defn- simulate-child-terminal!
  "Apply the parent-facing effect of the child's terminal drive, mirroring
   notify-parent-terminal (execution.cljs:408-431): record the child's outcome in
   the PARENT's history (a :child-workflow-completed event plus an
   :async-completed alias so `join` resolves), mark the parent eligible, and wake
   it. Stands in for a real child drive, whose promise-based finalizer cannot
   land inside the window deterministically (see ns docstring)."
  [store parent-id parent-seq child-id result]
  (let [now (utils/current-time-ms)]
    (p/save-events store parent-id
                   [{:event-type        :child-workflow-completed
                     :seq               parent-seq
                     :child-workflow-id child-id
                     :result            result
                     :timestamp         now}
                    {:event-type :async-completed
                     :seq        parent-seq
                     :last-seq   parent-seq
                     :result     result
                     :timestamp  now}])
    (p/set-wake-at store parent-id nil)
    (p/wake-workflow store parent-id)))

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

;; The child-scheduling op is the first sequence-consuming op in the parent body,
;; so its handle/parent seq is 0 on every pass.
(def ^:private parent-seq 0)

;; ============================================================================
;; Test
;; ============================================================================

(deftest child-completion-in-wake-window-still-wakes-parent
  (testing "child finishing between the eligibility check and register-wake-callback is not lost"
    (async done
      (let [parent-id "cljs-async-join-wake-parent"
            child-id  "cljs-async-join-wake-child"
            inner     (store/create-store)
            wrapped   (window-store inner parent-id
                                    #(simulate-child-terminal! inner parent-id parent-seq
                                                               child-id 42))
            engine    (intemporal/make-workflow-engine :store wrapped :threads 2)
            result-p  (intemporal/start-workflow engine #'wake-parent-wf
                                                 [21 child-id]
                                                 :workflow-id parent-id)]
        (-> (prom/race [result-p
                        (prom/then (prom/delay 3000) (fn [_] ::timed-out))])
            (prom/then
              (fn [result]
                (is (= 1 (count-events inner parent-id :async-completed))
                    "sanity check: the child DID complete in the window and recorded the parent's async-completed")
                (is (not= ::timed-out result)
                    "the parent's wake must not be lost: start-workflow should settle, not hang forever")
                (when (not= ::timed-out result)
                  (is (= :completed (:status result))
                      "workflow should finish successfully")
                  (is (= 42 (:result result))
                      "join should return the child's actual result (21 * 2)"))))
            (prom/catch
              (fn [e]
                (is nil (str "start-workflow rejected unexpectedly: " e))))
            (prom/finally
              (fn [_ _]
                (intemporal/shutdown-engine engine)
                (done))))))))
