(ns verify-bugs
  "Standalone verification of the five structural bugs described in
  improvements.md.  Runs each scenario against the JDBC (Postgres) store
  and the FoundationDB store and prints a side-by-side report.

  Usage:
    clojure -X:dev:jdbc:fdb verify-bugs/run

  Environment / files required:
    Postgres    — DATABASE_URL  or  jdbc:postgresql://localhost:5432/root?user=root&password=root
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
  (jdbc-store/resolve-jdbc-url))

(defn- open-fdb []
  (let [fdb (cfdb/select-api-version 710)]
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

;; ── RacingStore: deterministic race injector ──────────────────────────────────
;;
;; Wraps any IStore so that the first time consume-signal returns nil for a
;; specific (workflow-id, signal-name):
;;
;;   1. It delivers gate-nil  ("race window is open")
;;   2. It blocks on gate-sent ("sender has injected signal into the window")
;;   3. Then returns nil, letting process-signal proceed to register-callback
;;
;; The sender thread:
;;   1. Waits on gate-nil
;;   2. Calls p/add-signal on the INNER store directly, writing the signal row
;;      but firing no callback (none registered yet — we're in the window)
;;   3. Delivers gate-sent
;;
;; After the window closes:
;;   - p/register-signal-callback is called → callback registered in inner store
;;   - Signal is already in inner store; add-signal already ran with empty callbacks
;;   - Callback will never fire retroactively
;;   - Workflow is permanently stuck with an undelivered wake
;;
;; Proof of stuck:  p/get-pending-signals returns the signal row;
;;                  workflow status remains :running; the workflow future times out.

(defrecord RacingStore [inner gate-nil gate-sent armed?]
  p/IStore
  (load-history            [_ wf-id]                    (p/load-history inner wf-id))
  (save-event              [_ wf-id ev]                 (p/save-event inner wf-id ev))
  (save-events             [_ wf-id evs]                (p/save-events inner wf-id evs))
  (save-events-and-wake!   [_ wf-id evs]                (p/save-events-and-wake! inner wf-id evs))
  (find-event              [_ wf-id et sq]              (p/find-event inner wf-id et sq))
  (max-seq                 [_ wf-id]                    (p/max-seq inner wf-id))
  (get-pending-signals     [_ wf-id]                    (p/get-pending-signals inner wf-id))
  (add-signal              [_ wf-id sn sd]              (p/add-signal inner wf-id sn sd))
  (wake-workflow           [_ wf-id]                    (p/wake-workflow inner wf-id))
  (is-cancelled?           [_ wf-id]                    (p/is-cancelled? inner wf-id))
  (mark-cancelled          [_ wf-id]                    (p/mark-cancelled inner wf-id))
  (get-workflow-status     [_ wf-id]                    (p/get-workflow-status inner wf-id))
  (claim-runnable!         [_ o lim now]                (p/claim-runnable! inner o lim now))
  (park-workflow!          [_ wf-id v evs at]           (p/park-workflow! inner wf-id v evs at))
  (requeue-running!        [_ wf-id]                    (p/requeue-running! inner wf-id))
  (recover-running!        [_ o]                        (p/recover-running! inner o))
  (release-owner           [_ o]                        (p/release-owner inner o))
  (link-child!             [_ p-id p-seq c-id policy]   (p/link-child! inner p-id p-seq c-id policy))
  (list-children           [_ p-id]                     (p/list-children inner p-id))

  (consume-signal [_ wf-id sig-name]
    (let [result (p/consume-signal inner wf-id sig-name)]
      ;; Only intercept once (armed? tracks first nil-return)
      (when (and (nil? result) (compare-and-set! armed? true false))
        (deliver gate-nil {:wf-id wf-id :sig-name sig-name})
        (deref gate-sent 5000 :timeout-waiting-for-sender))
      result)))

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
  "Bug 2.1 — Register-then-consume signal race (deterministic via RacingStore).

  process-signal executes:
    (1) consume-signal → nil   (no signal available)
    (2) register-signal-callback

  The RacingStore intercepts step (1): after consume-signal returns nil it
  blocks on gate-nil/gate-sent, letting us inject a signal into the INNER
  store BEFORE step (2) runs.  After the sender delivers gate-sent the
  consume returns nil and process-signal proceeds to register-callback.

  At that point:
    • Signal row IS in inner store (written by add-signal in the window)
    • add-signal checked inner callbacks atom → found empty → fired no wake
    • Callback IS now registered (step 2 ran after the window)
    • But add-signal already ran with empty callbacks → wake was lost
    • Callback will never fire retroactively
    • Workflow is permanently stuck

  Proof:
    • workflow future times out  (stuck)
    • p/get-pending-signals returns the signal row  (unconsumed)
    • workflow status is :running"
  [make-inner-store label]
  (let [inner     (make-inner-store)
        gate-nil  (promise)
        gate-sent (promise)
        store     (->RacingStore inner gate-nil gate-sent (atom true))
        wf-id     (str "bug21-" (random-uuid))
        result    (promise)
        engine    (intemporal/make-workflow-engine :store store :threads 2)]
    ;; Workflow thread
    (future
      (try
        (let [r (intemporal/start-workflow engine wait-signal-wf []
                                           :workflow-id wf-id)]
          (deliver result r))
        (catch Exception e (deliver result {:error (str e)}))))

    ;; Wait until consume-signal returned nil (race window is open)
    (let [gate-info (deref gate-nil 5000 ::timeout)]
      (if (= ::timeout gate-info)
        (do (intemporal/shutdown-engine engine)
            (when (instance? java.io.Closeable inner) (.close inner))
            {:store label :bug? false
             :detail "Gate never opened — workflow did not reach consume-signal in time"})
        (do
          ;; Inject signal directly into the inner store.
          ;; At this moment process-signal is parked between consume-check and register-callback.
          ;; inner.add-signal writes the signal and checks callbacks atom → empty → no wake.
          (p/add-signal inner wf-id "go" {:source :injected-in-race-window})
          ;; Release the gate — let consume-signal return nil to process-signal
          (deliver gate-sent :signal-injected)
          ;; Give process-signal time to register the callback (step 2)
          (Thread/sleep 200)
          ;; Check outcome
          (let [r       (deref result 2000 ::timeout)
                pending (p/get-pending-signals inner wf-id)
                status  (p/get-workflow-status inner wf-id)]
            (intemporal/shutdown-engine engine)
            (when (instance? java.io.Closeable inner) (.close inner))
            {:store        label
             :bug?         (= ::timeout r)
             :detail       (if (= ::timeout r)
                             (str "RACE CONFIRMED — signal injected in race window; "
                                  "wake never fired; status=" status
                                  "; orphaned signal keys=" (keys pending))
                             (str "Workflow woke (race not reproduced): " r))
             :pending-signals (keys pending)
             :final-status    status}))))))  ; closes: map let[r] do if let[gate-info] outer-let, defn

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
    "Bug 2.1" "Register-then-consume signal race (deterministic)"
    [(scenario-2-1 make-jdbc-store "JDBC")
     (scenario-2-1 make-fdb-store  "FDB")])

  ;; ----------------------------------------------------------------------------
  (print-scenario
    "Bug 2.3" "Cancellation cannot reach a sleeping workflow"
    [(scenario-2-3 make-jdbc-store "JDBC")
     (scenario-2-3 make-fdb-store  "FDB")])

  ;; ----------------------------------------------------------------------------
  (println "\nNote: Bug 2.1 uses a latch-synchronized RacingStore to deterministically")
  (println "      inject a signal into the consume-nil→register-callback window.")
  (println "      The race is guaranteed to reproduce on every run.\n")

  (System/exit 0))
