(ns intemporal.jepsen.nemesis
  "Fault injector.  Periodically picks a random worker and kills it (SIGKILL or
  SIGTERM), then later restarts it.  Maintains a min-alive floor so at least N
  workers can make progress.

  Also provides 'signal-dead-workers': sends signals to all W1/W3 workflows
  whose owner is currently dead.  This is the primary way to trigger bug 1.1:
  the signal row lands in intemporal_signals but no callback fires because the
  owning worker is gone."
  (:require
   [clojure.string :as str]
   [intemporal.jepsen.db :as db]
   [next.jdbc :as jdbc]
   [taoensso.telemere :as log]))

(defn- pick-victim
  "Returns a random alive owner-id to kill, respecting min-alive."
  [owners min-alive]
  (let [alive (filter db/alive? owners)]
    (when (> (count alive) min-alive)
      (rand-nth alive))))

(defn- pick-dead
  "Returns a random dead owner-id to revive."
  [owners]
  (let [dead (remove db/alive? owners)]
    (when (seq dead) (rand-nth dead))))

;; ---------------------------------------------------------------------------
;; Per-tick fault

(defn step!
  "One nemesis tick.  Chooses an action:
    50%  SIGKILL a random alive worker
    25%  SIGTERM a random alive worker
    25%  Start a random dead worker

  Records the op in `history`."
  [{:keys [owners history db-url test-run repo-root min-alive]
    :or   {min-alive 2}}]
  (let [r (rand)]
    (cond
      (< r 0.50)
      (if-let [victim (pick-victim owners min-alive)]
        (do
          (log/log! :info (str "[nemesis] SIGKILL " victim))
          (db/kill! victim :sigkill)
          (swap! history conj {:process :nemesis :type :info
                               :f :kill-9 :value victim
                               :time (System/currentTimeMillis)}))
        (swap! history conj {:process :nemesis :type :info
                             :f :noop :value :min-alive-floor
                             :time (System/currentTimeMillis)}))

      (< r 0.75)
      (if-let [victim (pick-victim owners min-alive)]
        (do
          (log/log! :info (str "[nemesis] SIGTERM " victim))
          (db/kill! victim :sigterm)
          (swap! history conj {:process :nemesis :type :info
                               :f :kill-15 :value victim
                               :time (System/currentTimeMillis)}))
        (swap! history conj {:process :nemesis :type :info
                             :f :noop :value :min-alive-floor
                             :time (System/currentTimeMillis)}))

      :else
      (if-let [revive (pick-dead owners)]
        (do
          (log/log! :info (str "[nemesis] restart " revive))
          (db/fork! {:owner revive :db-url db-url :test-run test-run
                     :repo-root repo-root})
          (swap! history conj {:process :nemesis :type :info
                               :f :start :value revive
                               :time (System/currentTimeMillis)}))
        (swap! history conj {:process :nemesis :type :info
                             :f :noop :value :all-alive
                             :time (System/currentTimeMillis)})))))

;; ---------------------------------------------------------------------------
;; Signal-while-dead: exercises bug 1.1.

(defn signal-dead-workflows!
  "Finds W1 (signal-wait) and W3 (cancel-sleep) workflows whose owning worker
  is currently dead, then sends the expected signal to each.  The signal row
  lands in intemporal_signals but no callback fires — the workflow is stuck.

  Records each signal in jepsen_signals_sent for the checker."
  [{:keys [db-spec test-run owners history]}]
  (let [dead-owners (->> owners (remove db/alive?) set)
        ;; Find claimed-but-not-completed W1/W3 workflows owned by dead workers.
        rows (when (seq dead-owners)
               (jdbc/execute! db-spec
                 (into [(str "SELECT workflow_id, wf_type
                              FROM jepsen_work_queue
                              WHERE test_run = ?
                                AND completed = FALSE
                                AND wf_type IN ('signal-wait','cancel-sleep','rapid-signal')
                                AND claimed_by IN ("
                             (str/join "," (repeat (count dead-owners) "?"))
                             ")")
                        test-run]
                       dead-owners)))]
    (doseq [{:jepsen_work_queue/keys [workflow_id wf_type]} rows]
      (let [signal-name (case wf_type
                          "signal-wait"  "go"
                          "cancel-sleep" "wake"
                          "rapid-signal" "immediate"
                          nil)]
        (when signal-name
          (try
            (jdbc/execute! db-spec
              ;; payload is EDN text since migration 20260807000007 (bug #22)
              ["INSERT INTO intemporal_signals (workflow_id, signal_name, payload)
                VALUES (?,?,'{}')"
               workflow_id signal-name])
            (jdbc/execute! db-spec
              ["INSERT INTO jepsen_signals_sent (test_run, workflow_id, signal_name)
                VALUES (?,?,?)"
               test-run workflow_id signal-name])
            (swap! history conj {:process :nemesis :type :info
                                 :f :signal-dead :value {:workflow-id workflow_id
                                                         :signal signal-name}
                                 :time (System/currentTimeMillis)})
            (log/log! :info (str "[nemesis] signalled dead workflow "
                                  workflow_id " signal=" signal-name))
            (catch Throwable t
              (log/log! :warn (str "[nemesis] signal-dead-workflows! error: " t)))))))))

;; ---------------------------------------------------------------------------
;; Quiesce helper

(defn ensure-all-alive!
  "Revives all dead workers during the quiesce phase.  Since intemporal has no
  auto-resume on restart (bug 1.3), restarting workers here does NOT cause
  stuck workflows to complete — it only proves that point."
  [{:keys [owners db-url test-run repo-root]}]
  (doseq [owner owners
          :when (not (db/alive? owner))]
    (log/log! :info (str "[quiesce] reviving " owner))
    (db/fork! {:owner owner :db-url db-url :test-run test-run :repo-root repo-root})))
