(ns intemporal.jepsen.worker
  "Forked-JVM entry point for a single intemporal worker node.

  Lifecycle:
    1. Starts an intemporal engine backed by the shared Postgres store.
    2. Polls jepsen_work_queue for unclaimed workflow specs (FOR UPDATE SKIP LOCKED).
    3. Claims each spec and runs start-workflow in a virtual thread.
    4. Prints 'READY <owner>' once the poll loop is running.

  Signal semantics:
    SIGTERM -> JVM shutdown hook fires -> engine shutdown -> graceful stop.
    SIGKILL -> no hook runs.  Process-local signal-callback atom in the JDBC
               store is destroyed.  Workflows waiting on a signal will never
               wake on another worker (bug 1.1).

  The worker does NOT call resume-workflow for previously-running workflows
  on restart — this reproduces bug 1.3 (no recovery poller)."
  (:require [intemporal.core :as intemporal]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.checked :as checked]
            [intemporal.jepsen.workflows :as wf]
            [next.jdbc :as jdbc]
            [hikari-cp.core :as hikari]
            [taoensso.telemere :as log])
  (:gen-class))

;; ---------------------------------------------------------------------------
;; Connection pools

(defn- make-pool [db-url pool-size auto-commit?]
  (hikari/make-datasource {:jdbc-url          db-url
                           :maximum-pool-size pool-size
                           :auto-commit       auto-commit?}))

;; ---------------------------------------------------------------------------
;; Work queue polling

(def ^:private poll-interval-ms 200)

(defn- claim-work-item!
  "Claims one unclaimed queue item for this owner. Returns the row or nil."
  [main-ds test-run owner]
  (jdbc/with-transaction [tx main-ds]
    (let [row (jdbc/execute-one! tx
                ["SELECT id, workflow_id, wf_type, nonce, args
                  FROM jepsen_work_queue
                  WHERE test_run = ? AND claimed_by IS NULL AND completed = FALSE
                  ORDER BY id ASC
                  FOR UPDATE SKIP LOCKED
                  LIMIT 1"
                 test-run])]
      (when row
        (jdbc/execute! tx
          ["UPDATE jepsen_work_queue SET claimed_by = ?, claimed_at = NOW()
            WHERE id = ?"
           owner (:jepsen_work_queue/id row)])
        row))))

(defn- mark-completed! [main-ds queue-id]
  (jdbc/execute! main-ds
    ["UPDATE jepsen_work_queue SET completed = TRUE WHERE id = ?" queue-id]))

(defn- run-one-workflow!
  "Starts a workflow in the current thread (intended to be called from a
  virtual thread).  Binds *side-ds*, *test-run*, and *owner* so workflow
  activities can record to the side-channel."
  [engine main-ds side-ds test-run owner row]
  (let [workflow-id (:jepsen_work_queue/workflow_id row)
        wf-type     (:jepsen_work_queue/wf_type row)
        args        (wf/build-args row)
        wf-fn       (wf/workflow-fn-for wf-type)]
    (binding [wf/*side-ds*  side-ds
              wf/*test-run* test-run
              wf/*owner*    owner]
      (try
        (log/log! :info (str "[" owner "] starting " wf-type " wf=" workflow-id))
        (intemporal/start-workflow engine wf-fn args :workflow-id workflow-id)
        (mark-completed! main-ds (:jepsen_work_queue/id row))
        (log/log! :info (str "[" owner "] completed wf=" workflow-id))
        (catch InterruptedException _
          (log/log! :info (str "[" owner "] interrupted wf=" workflow-id)))
        (catch Throwable t
          (log/log! :warn (str "[" owner "] failed wf=" workflow-id " err=" t)))))))

(defn- start-poll-loop!
  "Starts the background work-queue poll loop. Returns a 0-arity stop fn."
  [engine main-ds side-ds test-run owner]
  (let [running? (atom true)]
    (Thread/startVirtualThread
      (fn []
        (while @running?
          (try
            (if-let [row (claim-work-item! main-ds test-run owner)]
              ;; Start workflow in its own virtual thread so the poll loop
              ;; remains responsive.
              (Thread/startVirtualThread
                #(run-one-workflow! engine main-ds side-ds test-run owner row))
              ;; Nothing in queue — sleep briefly.
              (Thread/sleep poll-interval-ms))
            (catch InterruptedException _
              (reset! running? false))
            (catch Throwable t
              (log/log! :warn (str "[" owner "] poll loop error: " t))
              (Thread/sleep poll-interval-ms))))))
    (fn [] (reset! running? false))))

;; ---------------------------------------------------------------------------
;; Public entry point

(defn run
  "deps.edn -X entry point.  Boots the engine, starts polling, and parks until
  SIGKILL or SIGTERM.

  Args (EDN keyword map):
    :owner    — node identifier (stamped on side-channel rows)
    :db-url   — JDBC URL for the shared Postgres instance
    :test-run — run id matching the current jepsen_work_queue rows"
  [{:keys [owner db-url test-run]}]
  (assert owner   ":owner required")
  (assert db-url  ":db-url required")
  (assert test-run ":test-run required")

  (let [store    (jdbc-store/create-store db-url)
        ;; :datasource lives on the concrete JdbcStore, not on the CheckedStore
        ;; wrapper create-store returns — unwrap to reach it.
        main-ds  (:datasource (checked/unwrap store))
        side-ds  (make-pool db-url 2 true)   ; auto-commit for side-channel
        engine   (intemporal/make-workflow-engine :store store :threads 8)
        stop-fn  (start-poll-loop! engine main-ds side-ds test-run owner)]

    (.addShutdownHook
      (Runtime/getRuntime)
      (Thread.
        ^Runnable
        (fn []
          (log/log! :info (str "[" owner "] shutdown hook: stopping engine"))
          (stop-fn)
          (intemporal/shutdown-engine engine 5)
          (hikari/close-datasource side-ds))))

    (println "READY" owner)
    (flush)
    @(promise)))                             ; park until killed

(defn -main [& args]
  (let [[owner db-url test-run] args]
    (run {:owner owner :db-url db-url :test-run (or test-run "default")})))
