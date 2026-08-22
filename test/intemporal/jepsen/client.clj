(ns intemporal.jepsen.client
  "Operations issued by the test orchestrator against the shared store.

  All operations talk directly to Postgres via next.jdbc (no HTTP layer).
  Workers pick up submitted workflows by polling jepsen_work_queue.

  Op types:
    :submit          — inserts a workflow spec into jepsen_work_queue
    :signal          — calls add-signal directly on the JDBC store
    :cancel          — calls mark-cancelled directly on the JDBC store
    :observe         — reads workflow status from intemporal_workflows + history
    :concurrent-start — inserts the same workflow-id twice (different wf types
                        accepted by different workers) to trigger bug 1.2

  History entries are plain EDN maps compatible with jepsen.history format:
    {:process <int> :type (:ok|:fail|:info) :f <op> :value {...} :time <ms>}"
  (:require
   [next.jdbc :as jdbc]))

(defn now-ms [] (System/currentTimeMillis))

(defn record-op!
  "Appends an op to the atom-wrapped history vector."
  [history op]
  (swap! history conj (assoc op :time (now-ms)))
  op)

;; ---------------------------------------------------------------------------
;; Helpers

(defn- wf-status
  "Reads workflow status directly from the DB without going through the store
  object (avoids creating a new engine just to read status)."
  [db-spec workflow-id]
  (let [wf (jdbc/execute-one! db-spec
             ["SELECT cancelled FROM intemporal_workflows WHERE id = ?"
              workflow-id])
        last-evt (jdbc/execute-one! db-spec
                   ["SELECT event_type FROM intemporal_history
                     WHERE workflow_id = ?
                     ORDER BY id DESC LIMIT 1"
                    workflow-id])]
    (cond
      (nil? wf)                                    :not-found
      (:intemporal_workflows/cancelled wf)          :cancelled
      (nil? last-evt)                               :not-found
      (= "workflow-completed"
         (:intemporal_history/event_type last-evt)) :completed
      (= "workflow-failed"
         (:intemporal_history/event_type last-evt)) :failed
      (= "workflow-cancelled"
         (:intemporal_history/event_type last-evt)) :cancelled
      :else                                         :running)))

;; ---------------------------------------------------------------------------
;; Client operations

(defn invoke-submit
  "Picks a random workflow type, inserts it into jepsen_work_queue, and
  returns {:type :ok :value {:workflow-id ... :wf-type ...}}."
  [db-spec test-run]
  (let [wf-type   (rand-nth [:signal-wait :activity-chain :cancel-sleep :rapid-signal])
        wf-id     (str (random-uuid))
        nonce     (str (random-uuid))
        steps-arg (when (= wf-type :activity-chain) {:steps 5})]
    (try
      (jdbc/execute! db-spec
        ["INSERT INTO jepsen_work_queue
            (test_run, workflow_id, wf_type, nonce, args)
          VALUES (?,?,?,?,?::jsonb)"
         test-run wf-id (name wf-type) nonce
         (if steps-arg (pr-str steps-arg) "{}")])
      {:type :ok :value {:workflow-id wf-id :wf-type wf-type :nonce nonce}}
      (catch Throwable t
        {:type :fail :error (str t)}))))

(defn invoke-signal
  "Writes a signal directly to the store.  Does NOT go through a worker — this
  models a separate process (e.g. an HTTP endpoint) calling send-signal.

  When the owning worker is alive, its callback atom fires and the workflow
  wakes.  When the worker is dead, the signal row persists in intemporal_signals
  but no callback fires (bug 1.1)."
  [db-spec test-run workflow-id signal-name]
  (try
    (jdbc/execute! db-spec
      ;; payload is EDN text since migration 20260807000007 (bug #22) — no ::jsonb cast
      ["INSERT INTO intemporal_signals (workflow_id, signal_name, payload)
        VALUES (?,?,'{}')"
       workflow-id signal-name])
    (jdbc/execute! db-spec
      ["INSERT INTO jepsen_signals_sent (test_run, workflow_id, signal_name)
        VALUES (?,?,?)"
       test-run workflow-id signal-name])
    {:type :ok :value {:workflow-id workflow-id :signal signal-name}}
    (catch Throwable t
      {:type :fail :error (str t)})))

(defn invoke-cancel
  "Sets the cancelled flag on the workflow.  If the workflow is sleeping on
  wait-for-signal the flag will be set but the workflow will never observe it
  (bug 2.3)."
  [db-spec test-run workflow-id]
  (try
    (jdbc/execute! db-spec
      ["INSERT INTO intemporal_workflows (id, cancelled) VALUES (?,TRUE)
        ON CONFLICT (id) DO UPDATE SET cancelled = TRUE"
       workflow-id])
    (jdbc/execute! db-spec
      ["INSERT INTO jepsen_cancels_sent (test_run, workflow_id) VALUES (?,?)"
       test-run workflow-id])
    {:type :ok :value {:workflow-id workflow-id}}
    (catch Throwable t
      {:type :fail :error (str t)})))

(defn invoke-observe
  "Reads the workflow status for reporting in the history."
  [db-spec workflow-id]
  (try
    (let [status (wf-status db-spec workflow-id)]
      {:type :ok :value {:workflow-id workflow-id :status status}})
    (catch Throwable t
      {:type :fail :error (str t)})))

(defn invoke-concurrent-start
  "Inserts the same workflow-id into the queue TWICE so that two workers race
  to run it concurrently.  The UNIQUE constraint on workflow_id in the queue
  prevents a second claim via the normal path, so we bypass the queue and
  directly write to intemporal_history from two threads to reproduce bug 1.2.

  Returns a map of {:workflow-id ... :threads-launched 2}."
  [db-spec test-run]
  (let [wf-id  (str (random-uuid))
        nonce  (str (random-uuid))
        result (promise)
        write! (fn [seq-num event-type]
                 (try
                   (jdbc/with-transaction [tx db-spec]
                     (jdbc/execute! tx
                       ["INSERT INTO intemporal_workflows (id) VALUES (?)
                         ON CONFLICT (id) DO NOTHING"
                        wf-id])
                     (jdbc/execute! tx
                       ;; data is EDN text since migration 20260807000007 (bug #22)
                       ["INSERT INTO intemporal_history
                           (workflow_id, seq, event_type, data)
                         VALUES (?,?,?,'{}')
                         ON CONFLICT (workflow_id, seq) DO UPDATE
                           SET event_type = EXCLUDED.event_type,
                               data = EXCLUDED.data"
                        wf-id seq-num event-type]))
                   :ok
                   (catch Throwable t (str "error: " t))))
        ;; Fire two threads simultaneously.
        t1 (Thread/startVirtualThread
             (fn [] (deliver result (write! 0 "workflow-started"))))
        t2 (Thread/startVirtualThread
             (fn [] (write! 0 "workflow-started-duplicate")))]
    (.join ^Thread t1 5000)
    (.join ^Thread t2 5000)
    (jdbc/execute! db-spec
      ["INSERT INTO jepsen_work_queue
          (test_run, workflow_id, wf_type, nonce, args, completed)
        VALUES (?,?,?,?,'{}'::jsonb, TRUE)"
       test-run wf-id "concurrent-start" nonce])
    {:type :ok
     :value {:workflow-id wf-id :nonce nonce :threads-launched 2}}))
