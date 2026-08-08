(ns intemporal.tests.engine.replay-snapshot-test
  "Regression test for kimi.md improvement #6 (bugs A16 + X9): replay must read
   the PASS-LOCAL history snapshot, not the live store, one operation at a time.

   `run-workflow-internal` already loads the whole history once per iteration
   into the workflow context (`execution.clj`, `(:history ctx)`), but the stub
   operations in `intemporal.core` ignore it: every replayed op issues its own
   `p/find-event` against the STORE — 20 call sites in `core.cljc` (68-69,
   155-157, 188, 283-284, 316, 324, 343, 346, 371, 389, 399, 426, 433, 458-459,
   496), plus `run-once` in each engine. Two problems fall out of that:

     A16 (cost) — a pass that replays k cached ops pays 2k store round-trips, so
       one drive of an n-step workflow is O(n^2) store reads. On JDBC that is a
       SELECT per step per pass; on FDB `find-event` loads the ENTIRE history per
       call, making it O(n^3) event throughput.

     X9 (correctness) — the reads are not snapshot-isolated. A signal or timer
       callback firing on another thread mid-pass (InMemoryStore fires callbacks
       in a `future`, `store.cljc`) writes into the store while the pass is in
       flight. Earlier ops in that pass were resolved against the OLD history;
       a later op reads the live store and sees the NEW event. The pass is then
       internally inconsistent: it mixes two snapshots.

   The fix specified by #6 is one `load-history` per iteration with stubs
   searching the in-memory vector, which makes an event arriving mid-pass
   next-pass input — exactly what the seq-frontier model already assumes.

   What these tests assert:
     1. replaying a linear activity chain issues NO per-op store `find-event`,
        and the read count stays linear in the step count rather than quadratic;
     2. a `:signal-received` written mid-pass (as a callback future would) is not
        consumed by the pass already in flight;
     3. an `:activity-completed` written mid-pass does not preempt the frontier
        activity of the pass already in flight.

   Tests 2 and 3 stand in for a concurrent writer (a callback future, or another
   pod) with a deterministic write issued immediately after the pass takes its
   snapshot — the exact hazard window, without racing threads. The property under
   test is intra-pass snapshot consistency, not the fabricated event's content:
   in both tests the workflow's final RESULT is identical either way, so each
   test asserts the observable that actually differs.

   All three currently FAIL against the unfixed engine."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.internal.context :as ctx]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [intemporal.utils :as utils]))

;; ============================================================================
;; Test Infrastructure
;; ============================================================================

(defrecord TracingStore [inner trace injector]
  ;; Delegating IStore decorator (same shape as intemporal.store.checked) that
  ;; records every history read/write, and can hand a hook the store right after
  ;; a pass takes its snapshot.
  ;;
  ;; The hook fires on `load-history` — NOT on `find-event` — deliberately: a
  ;; fixed engine issues no per-op `find-event` at all, so a find-event trigger
  ;; would silently never fire and the test would pass vacuously.
  p/IStore
  (load-history [_ workflow-id]
    (let [h (p/load-history inner workflow-id)]
      (swap! trace conj {:op :load-history :workflow-id workflow-id})
      (when injector
        (injector inner (count (filter #(= :load-history (:op %)) @trace))))
      h))

  (save-event [_ workflow-id event]
    (swap! trace conj {:op :save :event-type (:event-type event) :seq (:seq event)})
    (p/save-event inner workflow-id event))

  (save-events [_ workflow-id events]
    (doseq [e events]
      (swap! trace conj {:op :save :event-type (:event-type e) :seq (:seq e)}))
    (p/save-events inner workflow-id events))

  (find-event [_ workflow-id event-type seq-num]
    (swap! trace conj {:op :find-event :event-type event-type :seq seq-num})
    (p/find-event inner workflow-id event-type seq-num))

  (max-seq [_ workflow-id] (p/max-seq inner workflow-id))
  (get-pending-signals [_ workflow-id] (p/get-pending-signals inner workflow-id))
  (add-signal [_ workflow-id signal-name signal-data]
    (p/add-signal inner workflow-id signal-name signal-data))
  (consume-signal [_ workflow-id signal-name]
    (p/consume-signal inner workflow-id signal-name))
  (register-signal-callback [_ workflow-id signal-name callback]
    (p/register-signal-callback inner workflow-id signal-name callback))
  (unregister-signal-callback [_ workflow-id signal-name]
    (p/unregister-signal-callback inner workflow-id signal-name))
  (register-wake-callback [_ workflow-id callback]
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
  (list-children [_ parent-id] (p/list-children inner parent-id)))

(defn- tracing-store
  ([trace] (tracing-store trace nil))
  ([trace injector] (->TracingStore (store/create-store) trace injector)))

(defn- count-ops [trace op]
  (count (filter #(= op (:op %)) trace)))

(defn- index-where [trace pred]
  (first (keep-indexed (fn [i e] (when (pred e) i)) trace)))

(def exec-log (atom []))

;; ============================================================================
;; The snapshot index must preserve find-event's first-wins resolution
;; ============================================================================

(deftest test-history-index-keeps-the-first-event-per-seq
  (testing "duplicate (seq, event-type) entries resolve to the EARLIEST one"
    ;; History legitimately holds duplicates: :activity-scheduled is re-emitted
    ;; on every pass that reaches it before completion, and check-then-act writes
    ;; double-write on InMemory/FDB (kimi.md P4). `find-event` returns the first
    ;; match, so the index must too — a plain (into {} ...) keeps the LAST and
    ;; silently makes replay resolution depend on append order.
    (let [history [{:event-type :activity-completed :seq 0 :result :zero}
                   {:event-type :activity-completed :seq 1 :result :first}
                   {:event-type :activity-completed :seq 1 :result :second}
                   {:event-type :activity-failed    :seq 1 :error  {}}]
          idx     (ctx/index-history history)]
      (is (= :first (:result (get idx [:activity-completed 1])))
          "first-wins, not last-wins")
      (is (= (ctx/find-event history :activity-completed 1)
             (get idx [:activity-completed 1]))
          "the index must agree with find-event on every key")
      (is (= (ctx/find-event history :activity-failed 1)
             (get idx [:activity-failed 1]))
          "same seq, different event-type is a distinct key")
      (is (nil? (get idx [:activity-completed 99]))
          "absent keys are nil, like find-event"))))

;; ============================================================================
;; A16 — replay must not round-trip to the store per operation
;; ============================================================================

(defn step-activity [i]
  (swap! exec-log conj i)
  (* i 2))

(defn linear-workflow
  "n sequential activities. Each one suspends on its first execution, so the
   workflow is driven over n+1 passes and every pass replays every activity
   already completed — the shape that makes per-op store reads quadratic."
  [n]
  (let [act (intemporal/stub #'step-activity)]
    (reduce (fn [acc i] (+ acc (act i))) 0 (range n))))

(deftest test-stub-ops-read-the-pass-local-snapshot
  (doseq [n [4 12]]
    (testing (str "replaying " n " sequential activities")
      (reset! exec-log [])
      (let [trace  (atom [])
            store  (tracing-store trace)
            engine (intemporal/make-workflow-engine :store store)
            result (try
                     (intemporal/start-workflow engine linear-workflow [n]
                                                :workflow-id (str "linear-" n))
                     (finally (intemporal/shutdown-engine engine)))
            tr     @trace
            finds  (count-ops tr :find-event)
            loads  (count-ops tr :load-history)]

        (is (= :completed (:status result)))
        (is (= (* n (dec n)) (:result result))
            "sum of 2i for i in 0..n-1")
        (is (= (vec (range n)) @exec-log)
            "each activity executes exactly once, in order")

        ;; The A16 claim: per-op reads make a pass cost O(k) store round-trips
        ;; and a drive O(n^2). Replaying from the snapshot costs zero.
        (is (<= finds (* 2 n))
            (str "store find-event calls must stay LINEAR in the step count; "
                 "per-op reads make them quadratic (n=" n " issued " finds ")"))
        (is (zero? finds)
            (str "no stub op may round-trip to the store: the pass already holds "
                 "the history it needs. n=" n " issued " finds " find-event calls"))

        ;; Guard against "fixing" the above by re-loading the whole history per
        ;; op instead — that trades n^2 point reads for n^2 full history loads.
        (is (<= loads (* 2 (inc n)))
            (str "history must be loaded about once per iteration, not per op "
                 "(n=" n " issued " loads " load-history calls)"))))))

;; ============================================================================
;; X9 — a write landing mid-pass belongs to the NEXT pass
;; ============================================================================

(def ^:private signal-wf-id "mid-pass-signal-wf")

;; `wait-for-signal` / `send-signal` coerce the name with `str` at the API
;; boundary, so a keyword name is stored as ":go", not "go". The injector below
;; writes straight to the store and must use the same coerced form.
(def ^:private signal-name (str :go))

(defn signal-snapshot-workflow []
  (let [act (intemporal/stub #'step-activity)]
    (act 1)                                   ; seq 0
    (intemporal/wait-for-signal :go)))        ; seq 1

(deftest test-mid-pass-signal-write-is-not-observed-by-the-pass-in-flight
  (testing "a :signal-received written after the pass snapshot is next-pass input"
    (reset! exec-log [])
    (let [trace    (atom [])
          injector (fn [inner load-count]
                     ;; Pass 2 has just snapshotted its history. Simulate the
                     ;; callback future in store.cljc firing right now: a real
                     ;; client signal lands, and the :signal-received event for
                     ;; the wait at seq 1 is written.
                     (when (= 2 load-count)
                       (p/add-signal inner signal-wf-id signal-name
                                     {:id "real" :payload :real})
                       (p/save-event inner signal-wf-id
                                     {:event-type  :signal-received
                                      :seq         1
                                      :signal-name signal-name
                                      :signal-id   "mid-pass"
                                      :payload     :mid-pass
                                      :timestamp   (utils/current-time-ms)})
                       (swap! trace conj {:op :inject})))
          store    (tracing-store trace injector)
          engine   (intemporal/make-workflow-engine :store store)
          result   (try
                     (intemporal/start-workflow engine signal-snapshot-workflow []
                                                :workflow-id signal-wf-id)
                     (finally (intemporal/shutdown-engine engine)))
          tr       @trace
          inject-i (index-where tr #(= :inject (:op %)))
          done-i   (index-where tr #(and (= :save (:op %))
                                         (= :workflow-completed (:event-type %))))]

      (is (= :completed (:status result))
          "the workflow must still make progress — snapshot isolation is not a stall")
      (is (some? inject-i) "the mid-pass write must have happened")
      (is (some? done-i) "the workflow must have been finalized")

      (when (and inject-i done-i)
        (is (pos? (count-ops (subvec tr inject-i done-i) :load-history))
            (str "the pass that was in flight when the event landed must NOT consume "
                 "it: the workflow may only complete after a later pass re-snapshots "
                 "the history. Reading the live store lets the in-flight pass pick up "
                 "an event its own snapshot never contained.")))

      ;; Second observable: because the in-flight pass short-circuits on the
      ;; mid-pass event, it never suspends, so the engine never runs
      ;; `process-signal` and the REAL client signal is stranded in the store.
      (is (empty? (get (p/get-pending-signals store signal-wf-id) signal-name))
          "the real pending signal must be consumed by the engine, not bypassed"))))

(def ^:private ghost-wf-id "mid-pass-activity-wf")

(defn ghost-step-a [] (swap! exec-log conj :a) :ra)
(defn ghost-step-b [] (swap! exec-log conj :b) :rb)

(defn two-step-workflow []
  (let [a (intemporal/stub #'ghost-step-a)
        b (intemporal/stub #'ghost-step-b)]
    [(a) (b)]))                               ; seq 0, seq 1

(deftest test-mid-pass-activity-write-does-not-preempt-the-frontier
  (testing "an :activity-completed written after the pass snapshot is next-pass input"
    (reset! exec-log [])
    (let [trace    (atom [])
          injector (fn [inner load-count]
                     ;; Pass 2 has just snapshotted. A concurrent writer records
                     ;; a completion for seq 1 — the activity this pass is about
                     ;; to reach. It carries the SAME activity name, so `stub`'s
                     ;; determinism check accepts it and the preemption is silent.
                     (when (= 2 load-count)
                       (p/save-event inner ghost-wf-id
                                     {:event-type    :activity-completed
                                      :seq           1
                                      :activity-name (str (symbol #'ghost-step-b))
                                      :result        :ghost
                                      :timestamp     (utils/current-time-ms)})
                       (swap! trace conj {:op :inject})))
          store    (tracing-store trace injector)
          engine   (intemporal/make-workflow-engine :store store)
          result   (try
                     (intemporal/start-workflow engine two-step-workflow []
                                                :workflow-id ghost-wf-id)
                     (finally (intemporal/shutdown-engine engine)))]

      (is (= :completed (:status result)))

      ;; The result is :ghost either way — once the event is in history, every
      ;; later pass replays it. What differs is whether the pass ALREADY IN
      ;; FLIGHT skipped its own frontier activity on the strength of a write its
      ;; snapshot never contained.
      (is (= [:a :b] @exec-log)
          (str "the frontier activity of the in-flight pass must still run: that "
               "pass's snapshot had no event at seq 1. Reading the live store lets "
               "a concurrent write silently cancel an activity mid-pass. Log: "
               (pr-str @exec-log))))))
