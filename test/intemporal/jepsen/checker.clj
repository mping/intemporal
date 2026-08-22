(ns intemporal.jepsen.checker
  "Post-quiesce invariant checkers.  Each fn returns
    {:valid? bool :violations [...] :stats {...}}.

  All four checkers operate on DB state after the quiesce phase: the generator
  has stopped, the nemesis is paused, all workers have been restarted (so each
  one's startup ran), and a grace period has elapsed.

  All four are expected to pass after stable-owner restart recovery."
  (:require
   [clojure.string :as str]
   [next.jdbc :as jdbc]
   [next.jdbc.result-set :as rs]
   [taoensso.telemere :as log]))

(def ^:private jdbc-opts {:builder-fn rs/as-unqualified-maps})

;; ---------------------------------------------------------------------------
;; Helper: submitted workflow-ids from history

(defn- liveness-ids
  "Set of successfully submitted workflows expected to terminate without an
  explicit cancellation. `cancel-sleep` deliberately waits forever; instances
  that receive a cancellation are checked by cancellation-liveness-checker."
  [history]
  (->> @history
       (filter #(and (= :submit (:f %))
                     (= :ok (:type %))
                     (not= :cancel-sleep (get-in % [:value :wf-type]))))
       (keep #(get-in % [:value :workflow-id]))
       set))

(defn- cancelled-ids
  "Set of workflow-ids for which cancel ops succeeded."
  [history]
  (->> @history
       (filter #(and (= :cancel (:f %)) (= :ok (:type %))))
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
;; Every workflow that is expected to finish on its own must reach a terminal
;; state after the quiesce and stable-owner restart grace period. Uncancelled
;; cancel-sleep workflows are deliberately parked forever and are excluded.

(defn liveness-checker
  "1. Every self-terminating submitted workflow is terminal after quiesce."
  [db-spec history]
  (let [ids (liveness-ids history)]
    (if (empty? ids)
      {:valid? true :violations [] :stats {:submitted 0}}
      (let [in-clause (str/join "," (repeat (count ids) "?"))
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
                                            ('workflow-completed','workflow-failed','workflow-cancelled'))")]
                          ids)
                    jdbc-opts)]
        {:valid?     (empty? stuck)
         :violations (vec stuck)
         :stats      {:submitted (count ids)
                      :stuck     (count stuck)}}))))

;; ---------------------------------------------------------------------------
;; Checker 2: Signal consumed (bug 2.1)
;;
;; Every durably sent signal should eventually be consumed, including signals
;; sent while the owning process is dead or while a drive is parking.

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
;; Concurrent writes of one event identity must converge to exactly one durable
;; row. The event payload is first-write-wins; it is never overwritten.

(defn history-integrity-checker
  "3. No concurrent-write corruption in intemporal_history."
  [db-spec history]
  (let [cs-ids (concurrent-start-ids history)]
    (if (empty? cs-ids)
      {:valid? true :violations [] :stats {:concurrent-start-workflows 0}}
      (let [in-clause (str/join "," (repeat (count cs-ids) "?"))
            rows (jdbc/execute! db-spec
                   (into [(str "SELECT workflow_id, COUNT(*) AS event_count
                                  FROM intemporal_history
                                 WHERE workflow_id IN (" in-clause ")
                                   AND event_key = '[:workflow-started -1 nil]'
                                 GROUP BY workflow_id
                                HAVING COUNT(*) <> 1")]
                         cs-ids)
                   jdbc-opts)]
        {:valid?     (empty? rows)
         :violations (vec rows)
         :stats      {:concurrent-start-workflows (count cs-ids)
                      :corrupted (count rows)}}))))

;; ---------------------------------------------------------------------------
;; Checker 4: Cancellation liveness (bug 2.3)
;;
;; The checker looks for workflows where:
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
      (let [in-clause (str/join "," (repeat (count c-ids) "?"))
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
