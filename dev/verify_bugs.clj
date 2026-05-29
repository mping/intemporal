(ns verify-bugs
  "Standalone verification of the five structural bugs described in
  improvements.md.  Runs each scenario against the JDBC (Postgres) store
  and the FoundationDB store and prints a side-by-side report.

  Usage:
    clojure -X:dev:jdbc:fdb verify-bugs/run

  Environment / files required:
    Postgres    — POSTGRES_JDBC_URI  or  jdbc:postgresql://localhost:5432/root?user=root&password=root
    FoundationDB — docker/fdb.cluster  (written by the docker-compose foundation service)"
  (:require [intemporal.core     :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store    :as mem-store]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb  :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]
            [clojure.string :as str]))

;; ── helpers ──────────────────────────────────────────────────────────────────

(def ^:private pg-url
  (or (System/getenv "POSTGRES_JDBC_URI")
      "jdbc:postgresql://localhost:5432/root?user=root&password=root"))

(defn- open-fdb []
  (let [fdb (cfdb/select-api-version 730)]
    (cfdb/open fdb "docker/fdb.cluster")))

(defn- timeout-ms [ms f]
  (let [res (future (f))]
    (deref res ms ::timeout)))

(defn- workflow-completed? [store wf-id]
  (let [status (p/get-workflow-status store wf-id)]
    (contains? #{:completed :failed :cancelled} status)))

(defn- print-banner [title]
  (let [line (apply str (repeat 70 "-"))]
    (println line)
    (println (str "  " title))
    (println line)))

;; ── workflow shapes used in scenarios ────────────────────────────────────────

(defn- wait-signal-wf
  "Suspends on signal 'go' and returns :woke."
  []
  (intemporal/wait-for-signal "go")
  :woke)

(defn- cancel-sleep-wf
  "Suspends on signal 'wake', which is never sent — relies on cancel."
  []
  (intemporal/wait-for-signal "wake")
  :woke)

(defn- counting-activity [counter]
  (swap! counter inc)
  @counter)

(defn- chain-wf [counter n]
  (let [act (intemporal/stub #'counting-activity)]
    (dotimes [_ n]
      (act counter))
    :done))

;; ── Bug scenarios ─────────────────────────────────────────────────────────────

(defn- scenario-1-1
  "Bug 1.1 — Signal sent via a SECOND store instance (simulating another pod)
  is not delivered because the callback atom is in the first store's memory.

  Two store instances against the same database: store-a starts the workflow
  and registers the callback; store-b sends the signal.  The signal row lands
  in the DB but no pod fires the callback."
  [make-store-a make-store-b label]
  (let [store-a  (make-store-a)
        store-b  (make-store-b)
        wf-id    (str "bug11-" (random-uuid))
        result   (promise)
        engine-a (intemporal/make-workflow-engine :store store-a :threads 2)]
    (try
      ;; Start workflow on store-a in background (it will suspend on signal)
      (future
        (try
          (let [r (intemporal/start-workflow engine-a wait-signal-wf []
                                            :workflow-id wf-id)]
            (deliver result r))
          (catch Exception e (deliver result {:error (str e)}))))
      ;; Let it reach the wait-for-signal suspension
      (Thread/sleep 400)
      ;; Send signal via store-b (another "process" – empty callback atom)
      (p/add-signal store-b wf-id "go" {:source :store-b})
      ;; Wait up to 2 s for the workflow to wake
      (let [r (deref result 2000 ::timeout)]
        {:store    label
         :bug?     (= ::timeout r)
         :detail   (if (= ::timeout r)
                     "Workflow stuck: signal row written to DB but callback only in store-a"
                     (str "Workflow woke unexpectedly: " r))})
      (finally
        (intemporal/shutdown-engine engine-a)
        (when (instance? java.io.Closeable store-a) (.close store-a))
        (when (instance? java.io.Closeable store-b) (.close store-b))))))

(defn- scenario-1-2
  "Bug 1.2 — Concurrent save-events with the same (workflow-id, seq).

  JDBC: ON CONFLICT DO UPDATE silently overwrites — one write is lost, both
        futures return without exception (silent data loss).
  FDB:  UUID-keyed writes produce DUPLICATE events at the same seq (history
        has >1 row at seq=0, violating the 'one event per seq' invariant)."
  [make-store label]
  (let [store    (make-store)
        wf-id    (str "bug12-" (random-uuid))
        event-a  {:event-type :workflow-started :seq 0 :writer "thread-a"
                  :timestamp (System/currentTimeMillis)}
        event-b  {:event-type :workflow-started :seq 0 :writer "thread-b"
                  :timestamp (System/currentTimeMillis)}
        latch    (promise)
        t-a      (future (deref latch) (try (p/save-events store wf-id [event-a]) :ok
                                            (catch Exception e {:error (str e)})))
        t-b      (future (deref latch) (try (p/save-events store wf-id [event-b]) :ok
                                            (catch Exception e {:error (str e)})))]
    (deliver latch :go)
    (let [ra @t-a
          rb @t-b
          history  (p/load-history store wf-id)
          seq0     (filter #(= 0 (:seq %)) history)
          cnt      (count seq0)
          writers  (set (keep :writer seq0))
          ;; JDBC: both writes succeed but only 1 row survives → silent clobber
          ;; FDB:  both writes succeed and 2 rows survive → duplicate seq
          jdbc-silent-overwrite? (and (= :ok ra) (= :ok rb) (= 1 cnt))
          fdb-duplicate-seq?     (> cnt 1)
          result {:store      label
                  :bug?       (or jdbc-silent-overwrite? fdb-duplicate-seq?)
                  :detail     (cond
                                jdbc-silent-overwrite?
                                (str "Both writes returned :ok but seq=0 has 1 row (writer="
                                     (:writer (first seq0))
                                     ") — one write silently clobbered by ON CONFLICT DO UPDATE")
                                fdb-duplicate-seq?
                                (str "seq=0 has " cnt " rows (writers=" writers
                                     ") — UUID-keyed inserts produce duplicate-seq history")
                                :else
                                (str "No corruption detected: writes=" [ra rb] " seq0-count=" cnt))
                  :seq0-count cnt}]
      (when (instance? java.io.Closeable store) (.close store))
      result)))

(defn- scenario-2-1
  "Bug 2.1 — Register-then-consume signal race.

  process-signal does: (1) consume-signal, (2) if nil → register-callback.
  If a sender fires between (1) and (2) the signal is consumed but the
  callback fires into nothing (or the signal is already gone by the time
  the callback tries to re-consume).

  We maximise the window by having the sender fire 200 ms after the workflow
  starts (before it has committed to suspending).  A stuck workflow after a
  sent signal indicates the race was hit."
  [make-store label]
  (let [store   (make-store)
        wf-id   (str "bug21-" (random-uuid))
        result  (promise)
        engine  (intemporal/make-workflow-engine :store store :threads 2)]
    (try
      (future
        (try
          (let [r (intemporal/start-workflow engine wait-signal-wf []
                                            :workflow-id wf-id)]
            (deliver result r))
          (catch Exception e (deliver result {:error (str e)}))))
      ;; Send the signal after a short window — trying to land between
      ;; consume-check (step 1) and register-callback (step 2).
      (Thread/sleep 200)
      (p/add-signal store wf-id "go" {:source :race-test})
      ;; Wait up to 3 s for the workflow to wake.
      (let [r (deref result 3000 ::timeout)]
        {:store   label
         :bug?    (= ::timeout r)
         :detail  (if (= ::timeout r)
                    "Workflow stuck: signal sent before callback was registered (race hit)"
                    "Workflow woke normally (race window not hit this run — try more iterations)")})
      (finally
        (intemporal/shutdown-engine engine)
        (when (instance? java.io.Closeable store) (.close store))))))

(defn- scenario-2-3
  "Bug 2.3 — Cancellation can't reach a sleeping workflow.

  cancel-workflow sets cancelled=true in the store but does NOT call any
  wake mechanism.  A workflow sleeping in wait-for-signal never re-enters
  the execution loop and therefore never observes the flag."
  [make-store label]
  (let [store   (make-store)
        wf-id   (str "bug23-" (random-uuid))
        result  (promise)
        engine  (intemporal/make-workflow-engine :store store :threads 2)]
    (try
      (future
        (try
          (let [r (intemporal/start-workflow engine cancel-sleep-wf []
                                            :workflow-id wf-id)]
            (deliver result r))
          (catch Exception e (deliver result {:error (str e)}))))
      ;; Wait for workflow to suspend
      (Thread/sleep 400)
      ;; Cancel the workflow (sets the DB flag but sends no wake signal)
      (intemporal/cancel-workflow store wf-id)
      ;; Wait up to 2 s for the workflow to observe the cancellation
      (let [r (deref result 2000 ::timeout)]
        {:store   label
         :bug?    (= ::timeout r)
         :detail  (if (= ::timeout r)
                    "Workflow stuck: cancelled flag set but sleeper never re-entered loop"
                    (str "Workflow woke after cancel (status=" (:status r) ")"))})
      (finally
        (intemporal/shutdown-engine engine)
        (when (instance? java.io.Closeable store) (.close store))))))

(defn- scenario-no-recovery-poller
  "Bug 1.3 — No recovery poller: resume requires caller to know the function.

  Simulates a pod restart by using TWO separate store instances (store-a for
  engine-a, store-b for engine-b) pointing at the same backing database.
  This mirrors a real restart: each JVM gets a fresh store object with an
  empty callbacks atom.

  After engine-a crashes, engine-b sends the signal via store-b.  The signal
  row lands in the DB, but store-a's callback atom (holding the wake-fn) is
  gone.  Engine-b has no recovery poller to detect the suspended workflow —
  it must be resumed explicitly."
  [make-store-a make-store-b label]
  (let [store-a   (make-store-a)
        wf-id     (str "bug13-" (random-uuid))
        result    (promise)
        engine-a  (intemporal/make-workflow-engine :store store-a :threads 2)]
    (try
      (future
        (try
          (let [r (intemporal/start-workflow engine-a wait-signal-wf []
                                            :workflow-id wf-id)]
            (deliver result r))
          (catch Exception e (deliver result {:error (str e)}))))
      ;; Let it suspend and register its callback
      (Thread/sleep 500)
      ;; "Crash" engine-a
      (intemporal/shutdown-engine engine-a)
      (when (instance? java.io.Closeable store-a) (.close store-a))
      ;; Create engine-b with a FRESH store instance — simulates pod restart
      (let [store-b  (make-store-b)
            engine-b (intemporal/make-workflow-engine :store store-b :threads 2)]
        ;; Send signal via store-b (empty callback atom — just like a new process)
        (p/add-signal store-b wf-id "go" {:source :engine-b-restart})
        ;; Wait: engine-b has no poller to pick up the workflow
        (let [r (deref result 2000 ::timeout)]
          (intemporal/shutdown-engine engine-b)
          (when (instance? java.io.Closeable store-b) (.close store-b))
          {:store   label
           :bug?    (= ::timeout r)
           :detail  (if (= ::timeout r)
                      "Engine-b (fresh store) sent signal but workflow never woke — no recovery poller"
                      "Workflow woke unexpectedly after engine restart")}))
      (finally nil))))

;; ── Store factories ───────────────────────────────────────────────────────────

(defn- make-mem-store [] (mem-store/->InMemoryStore (atom {})))

(defn- make-jdbc-store [] (jdbc-store/make-jdbc-store pg-url))

(defn- make-fdb-store []
  (let [db (open-fdb)]
    (fdb-store/make-fdb-store db (str "verify-" (random-uuid)))))

;; ── Report rendering ──────────────────────────────────────────────────────────

(defn- fmt-result [{:keys [store bug? detail]}]
  (let [icon (if bug? "FAIL ✗" "PASS ✓")]
    (format "  %-10s %s\n    %s" store icon detail)))

(defn- print-scenario [bug-id title results]
  (print-banner (str bug-id " — " title))
  (doseq [r results]
    (println (fmt-result r)))
  (println))

;; ── Main entry point ─────────────────────────────────────────────────────────

(defn run
  "Entry point: clojure -X:dev:jdbc:fdb verify-bugs/run"
  [_opts]
  (println "\n╔══════════════════════════════════════════════════════════════════╗")
  (println   "║   intemporal bug verification — JDBC (Postgres) + FoundationDB  ║")
  (println   "╚══════════════════════════════════════════════════════════════════╝\n")

  ;; ----------------------------------------------------------------------------
  (print-scenario
    "Bug 1.1" "Lost wake on signal across store instances"
    [(scenario-1-1 make-jdbc-store make-jdbc-store "JDBC")
     (scenario-1-1 make-fdb-store  make-fdb-store  "FDB")])

  ;; ----------------------------------------------------------------------------
  (print-scenario
    "Bug 1.2" "Concurrent write corruption at the same seq"
    [(scenario-1-2 make-jdbc-store "JDBC")
     (scenario-1-2 make-fdb-store  "FDB")])

  ;; ----------------------------------------------------------------------------
  (print-scenario
    "Bug 1.3" "No recovery poller — engine restart does not resume workflows"
    [(scenario-no-recovery-poller make-jdbc-store make-jdbc-store "JDBC")
     (scenario-no-recovery-poller make-fdb-store  make-fdb-store  "FDB")])

  ;; ----------------------------------------------------------------------------
  (print-scenario
    "Bug 2.1" "Register-then-consume signal race (intermittent)"
    [(scenario-2-1 make-jdbc-store "JDBC")
     (scenario-2-1 make-fdb-store  "FDB")])

  ;; ----------------------------------------------------------------------------
  (print-scenario
    "Bug 2.3" "Cancellation cannot reach a sleeping workflow"
    [(scenario-2-3 make-jdbc-store "JDBC")
     (scenario-2-3 make-fdb-store  "FDB")])

  ;; ----------------------------------------------------------------------------
  (println "\nNote: Bug 2.1 is a race; a single run may not always hit the window.")
  (println "      Increase Thread/sleep in scenario-2-1 or run multiple times.\n")

  (System/exit 0))
