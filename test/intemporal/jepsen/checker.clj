(ns intemporal.jepsen.checker
  "Post-quiesce invariant checkers.  Each fn returns
    {:valid? bool :violations [...] :stats {...}}.

  All four checkers operate on DB state after the quiesce phase: the generator
  has stopped, the nemesis is paused, all workers have been restarted (so each
  one's startup ran), and a grace period has elapsed.

  Checkers are mapped to specific bugs in improvements.md:

    1. liveness               — bugs 1.1, 1.3: workflows never complete after
                                the owning worker crashes
    2. signal-consumed        — bug  2.1: register-then-consume race leaves
                                orphaned signal rows
    3. history-integrity      — bug  1.2: concurrent writers corrupt event log
                                via ON CONFLICT DO UPDATE
    4. cancellation-liveness  — bug  2.3: cancel-workflow can't wake a sleeper

  Expected post-quiesce state for the CURRENT (buggy) codebase:
    checker 1 (liveness)              -> FAIL  (workflows stuck without resume)
    checker 2 (signal-consumed)       -> FAIL  (if race is hit; intermittent)
    checker 3 (history-integrity)     -> FAIL  (if concurrent-start ran)
    checker 4 (cancellation-liveness) -> FAIL  (cancelled sleepers never wake)"
  (:require [next.jdbc :as jdbc]
            [taoensso.telemere :as log]))

(def ^:private jdbc-opts {:builder-fn next.jdbc.result-set/as-unqualified-maps})

;; ---------------------------------------------------------------------------
;; Helper: submitted workflow-ids from history

(defn- submitted-ids
  "Set of workflow-ids that the generator successfully submitted."
  [history]
  (->> @history
       (filter #(and (= :submit (:f %)) (= :ok (:type %))))
       (keep #(get-in % [:value :workflow-id]))
       set))

(defn- cancelled-ids
  "Set of workflow-ids for which cancel ops succeeded."
  [history]
  (->> @history
       (filter #(and (= :cancel (:f %)) (= :ok (:type %))))
       (keep #(get-in % [:value :workflow-id]))
       set))

(defn- signalled-ids
  "Set of workflow-ids for which a signal op succeeded."
  [history]
  (->> @history
       (filter #(and (= :signal (:f %)) (= :ok (:type %))))
       (keep #(get-in % [:value :workflow-id]))
       set))

(defn- concurrent-start-ids
  "Set of workflow-ids from concurrent-start ops."
  [history]
  (->> @history
       (filter #(and (= :concurrent-start (:f %)) (= :ok (:type %))))
       (keep #(get-in % [:value :workflow-id]))
       set))

;; ---------------------------------------------------------------------------
;; Checker 1: Liveness (bugs 1.1, 1.3)
;;
;; Every submitted workflow must reach a terminal state (:completed, :failed,
;; :cancelled).  Workflows stuck in :running after the quiesce + grace period
;; mean that no worker auto-resumed them after its crash.

(defn liveness-checker
  "1. Every submitted workflow is in a terminal state after quiesce."
  [db-spec history]
  (let [ids (submitted-ids history)]
    (if (empty? ids)
      {:valid? true :violations [] :stats {:submitted 0}}
      (let [in-clause (clojure.string/join "," (repeat (count ids) "?"))
            stuck (jdbc/execute! db-spec
                    (into [(str "SELECT w.id,
                                        w.cancelled,
                                        h.event_type AS last_event
                                 FROM intemporal_workflows w
                                 LEFT JOIN LATERAL (
                                   SELECT event_type
                                   FROM intemporal_history
                                   WHERE workflow_id = w.id
                                   ORDER BY id DESC LIMIT 1
                                 ) h ON TRUE
                                 WHERE w.id IN (" in-clause ")
                                   AND w.cancelled = FALSE
                                   AND (h.event_type IS NULL
                                        OR h.event_type NOT IN
                                            ('workflow-completed','workflow-failed'))")]
                          ids)
                    jdbc-opts)]
        {:valid?     (empty? stuck)
         :violations (vec stuck)
         :stats      {:submitted (count ids)
                      :stuck     (count stuck)}}))))

;; ---------------------------------------------------------------------------
;; Checker 2: Signal consumed (bug 2.1)
;;
;; Every signal the test client wrote (via jepsen_signals_sent or the nemesis's
;; signal-dead-workflows!) should eventually be consumed by the workflow.  An
;; unconsumed row in intemporal_signals after quiesce + grace either means:
;;   a) the owning worker died and its callback atom was empty (bug 1.1), or
;;   b) the signal arrived between consume-check and register-callback (bug 2.1).
;;
;; This checker flags both; the distinction is visible in the nemesis history
;; (was the worker alive when the signal was sent?).

(defn signal-consumed-checker
  "2. No orphaned signal rows remain after quiesce."
  [db-spec test-run]
  (let [orphans (jdbc/execute! db-spec
                  ["SELECT s.workflow_id, s.signal_name
                    FROM intemporal_signals s
                    JOIN jepsen_signals_sent ss
                      ON ss.workflow_id = s.workflow_id
                     AND ss.signal_name  = s.signal_name
                    WHERE ss.test_run = ?"
                   test-run]
                  jdbc-opts)
        total-sent (or (:c (jdbc/execute-one! db-spec
                             ["SELECT COUNT(*) AS c FROM jepsen_signals_sent WHERE test_run = ?"
                              test-run]
                             jdbc-opts))
                       0)]
    {:valid?     (empty? orphans)
     :violations (vec orphans)
     :stats      {:signals-sent     total-sent
                  :orphaned-signals (count orphans)}}))

;; ---------------------------------------------------------------------------
;; Checker 3: History integrity (bug 1.2)
;;
;; Concurrent calls to start-workflow with the same workflow-id use
;; ON CONFLICT (workflow_id, seq) DO UPDATE, silently overwriting events.
;; Symptoms:
;;   a) Multiple :workflow-started events at seq=0 (last writer wins silently).
;;   b) Two workers produce different event_type at the same seq — detected by
;;      comparing event_type vs the "canonical" value stored in the first write.
;;
;; We detect this by looking for workflows where seq 0 has a non-canonical
;; event type, or where the history contains duplicate seq numbers that were
;; overwritten (the DO UPDATE mask hides them, but if two writers raced and
;; produced DIFFERENT event_types at the same seq, one version is lost).
;;
;; We approximate: for any workflow that had a concurrent-start op, check
;; whether intemporal_history has a :workflow-started at seq=0.  If the
;; second writer overwrote seq=0 with a different event_type (our sentinel
;; "workflow-started-duplicate"), that row proves a race.

(defn history-integrity-checker
  "3. No concurrent-write corruption in intemporal_history."
  [db-spec history]
  (let [cs-ids (concurrent-start-ids history)]
    (if (empty? cs-ids)
      {:valid? true :violations [] :stats {:concurrent-start-workflows 0}}
      (let [in-clause (clojure.string/join "," (repeat (count cs-ids) "?"))
            ;; Look for evidence of the silent overwrite: seq=0 with the
            ;; sentinel event_type means the second writer clobbered the first.
            corrupted (jdbc/execute! db-spec
                        (into [(str "SELECT workflow_id, event_type
                                     FROM intemporal_history
                                     WHERE workflow_id IN (" in-clause ")
                                       AND seq = 0
                                       AND event_type = 'workflow-started-duplicate'")]
                              cs-ids)
                        jdbc-opts)
            ;; Also look for seq=0 that is NOT workflow-started (any other
            ;; winner in the race is also corruption).
            unexpected (jdbc/execute! db-spec
                         (into [(str "SELECT workflow_id, event_type
                                      FROM intemporal_history
                                      WHERE workflow_id IN (" in-clause ")
                                        AND seq = 0
                                        AND event_type <> 'workflow-started'")]
                               cs-ids)
                         jdbc-opts)]
        {:valid?     (and (empty? corrupted) (empty? unexpected))
         :violations {:overwritten-by-duplicate (vec corrupted)
                      :unexpected-seq0           (vec unexpected)}
         :stats      {:concurrent-start-workflows (count cs-ids)
                      :corrupted (+ (count corrupted) (count unexpected))}}))))

;; ---------------------------------------------------------------------------
;; Checker 4: Cancellation liveness (bug 2.3)
;;
;; After cancel-workflow is called on a workflow that is blocked in
;; wait-for-signal, the cancelled flag is set in intemporal_workflows but the
;; workflow never observes it (no re-entry to the execution loop).  The checker
;; looks for workflows where:
;;   - cancelled = TRUE in intemporal_workflows
;;   - The last history event is NOT workflow-completed / workflow-failed /
;;     workflow-cancelled
;; These are workflows that are "cancelled on paper" but still stuck.

(defn cancellation-liveness-checker
  "4. All cancelled workflows have reached a terminal state."
  [db-spec history]
  (let [c-ids (cancelled-ids history)]
    (if (empty? c-ids)
      {:valid? true :violations [] :stats {:cancelled-submitted 0}}
      (let [in-clause (clojure.string/join "," (repeat (count c-ids) "?"))
            stuck (jdbc/execute! db-spec
                    (into [(str "SELECT w.id,
                                        h.event_type AS last_event
                                 FROM intemporal_workflows w
                                 LEFT JOIN LATERAL (
                                   SELECT event_type
                                   FROM intemporal_history
                                   WHERE workflow_id = w.id
                                   ORDER BY id DESC LIMIT 1
                                 ) h ON TRUE
                                 WHERE w.id IN (" in-clause ")
                                   AND w.cancelled = TRUE
                                   AND (h.event_type IS NULL
                                        OR h.event_type NOT IN
                                            ('workflow-completed',
                                             'workflow-failed',
                                             'workflow-cancelled'))")]
                          c-ids)
                    jdbc-opts)]
        {:valid?     (empty? stuck)
         :violations (vec stuck)
         :stats      {:cancelled-submitted (count c-ids)
                      :stuck               (count stuck)}}))))

;; ---------------------------------------------------------------------------
;; Compose

(defn check-all
  "Runs all four checkers and returns a composed result."
  [{:keys [db-spec history test-run]}]
  (log/log! :info "[checker] running post-quiesce invariants")
  (let [c1 (liveness-checker            db-spec history)
        c2 (signal-consumed-checker     db-spec test-run)
        c3 (history-integrity-checker   db-spec history)
        c4 (cancellation-liveness-checker db-spec history)
        valid? (every? :valid? [c1 c2 c3 c4])]
    (when-not valid?
      (log/log! :warn "[checker] INVARIANT VIOLATION(S) DETECTED"))
    {:valid? valid?
     :checkers
     {:liveness               c1
      :signal-consumed        c2
      :history-integrity      c3
      :cancellation-liveness  c4}}))
