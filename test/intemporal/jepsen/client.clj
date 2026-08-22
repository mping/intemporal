(ns intemporal.jepsen.client
  "Operations issued by the test orchestrator against the shared store.

  All operations talk directly to Postgres via next.jdbc (no HTTP layer).
  Workers pick up submitted workflows by polling jepsen_work_queue.

  Op types:
    :submit          — inserts a workflow spec into jepsen_work_queue
    :signal          — calls send-signal through a separate JDBC store client
    :cancel          — calls cancel-workflow through that store client
    :observe         — reads workflow status from intemporal_workflows + history
    :concurrent-start — races two writes of one event identity

  History entries are plain EDN maps compatible with jepsen.history format:
    {:process <int> :type (:ok|:fail|:info) :f <op> :value {...} :time <ms>}"
  (:require
   [intemporal.core :as intemporal]
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
  "Send through a separate store client, modelling an HTTP/API process. The
  store atomically persists the signal and advances durable scheduling state.
  A test-side reservation ensures the generator and nemesis send at most one
  expected signal per workflow."
  [store db-spec test-run workflow-id signal-name]
  (let [reservation (jdbc/execute-one! db-spec
                      ["INSERT INTO jepsen_signals_sent
                          (test_run, workflow_id, signal_name)
                        VALUES (?,?,?)
                        ON CONFLICT (test_run, workflow_id) DO NOTHING
                        RETURNING id"
                       test-run workflow-id signal-name])]
    (if-not reservation
      {:type :ok :value {:workflow-id workflow-id :signal signal-name
                         :already-sent true}}
      (try
        (intemporal/send-signal store workflow-id signal-name {})
        {:type :ok :value {:workflow-id workflow-id :signal signal-name}}
        (catch Throwable t
          (jdbc/execute! db-spec
            ["DELETE FROM jepsen_signals_sent WHERE test_run = ? AND workflow_id = ?"
             test-run workflow-id])
          {:type :fail :error (str t)})))))

(defn invoke-cancel
  "Request cancellation through the store-backed public API. Marking and waking
  are one durable transition."
  [store db-spec test-run workflow-id]
  (try
    (intemporal/cancel-workflow store workflow-id)
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
  "Races two exact writes of the same history identity. The event-key constraint
  must retain exactly one row without overwriting its committed payload.

  Returns a map of {:workflow-id ... :threads-launched 2}."
  [db-spec test-run]
  (let [wf-id  (str (random-uuid))
        nonce  (str (random-uuid))
        result (promise)
        write! (fn [marker]
                 (try
                   (jdbc/with-transaction [tx db-spec]
                     (jdbc/execute! tx
                       ["INSERT INTO intemporal_workflows (id) VALUES (?)
                         ON CONFLICT (id) DO NOTHING"
                        wf-id])
                     (jdbc/execute! tx
                       ;; data is EDN text since migration 20260807000007 (bug #22)
                       ["INSERT INTO intemporal_history
                           (workflow_id, event_key, seq, event_type, data)
                         VALUES (?,?,?,'workflow-started',?)
                         ON CONFLICT (workflow_id, event_key) DO NOTHING"
                        wf-id "[:workflow-started -1 nil]" -1
                        (pr-str {:seq -1 :marker marker})]))
                   :ok
                   (catch Throwable t (str "error: " t))))
        ;; Fire two threads simultaneously.
        t1 (Thread/startVirtualThread
             (fn [] (deliver result (write! :first))))
        t2 (Thread/startVirtualThread
             (fn [] (write! :second)))]
    (.join ^Thread t1 5000)
    (.join ^Thread t2 5000)
    (jdbc/execute! db-spec
      ["INSERT INTO jepsen_work_queue
          (test_run, workflow_id, wf_type, nonce, args, completed)
        VALUES (?,?,?,?,'{}'::jsonb, TRUE)"
       test-run wf-id "concurrent-start" nonce])
    {:type :ok
     :value {:workflow-id wf-id :nonce nonce :threads-launched 2}}))
