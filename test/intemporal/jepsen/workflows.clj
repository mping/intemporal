(ns intemporal.jepsen.workflows
  "Workflow shapes (W1–W4) submitted by the chaos test, plus the side-channel
  recording activity.

  Side-channel writes use the process-local side-context's separate auto-commit
  Hikari pool, so rows are durable even if the worker JVM is SIGKILLed mid-activity.

  Each workflow shape probes durable wake, recovery, cancellation, or signal
  behavior under real process failure."
  (:require
   [intemporal.core :as intemporal]
   [next.jdbc :as jdbc]
   [taoensso.telemere :as log]))

;; ---------------------------------------------------------------------------
;; Engine drives run on worker-owned threads, so dynamic bindings from the queue
;; poller do not propagate. This process-local configuration is installed before
;; the engine starts claiming recovered work.
(defonce ^:private side-context (atom nil))

(defn configure-side-channel! [datasource test-run owner]
  (reset! side-context {:datasource datasource :test-run test-run :owner owner}))

;; ---------------------------------------------------------------------------
;; Side-channel recording.

(defn- record!
  "Inserts one row into jepsen_invocations. Never throws — a side-channel
  failure must not crash the workflow."
  [workflow-id step nonce phase]
  (when-let [{:keys [datasource test-run owner]} @side-context]
    (try
      (jdbc/execute! datasource
        ["INSERT INTO jepsen_invocations (test_run, workflow_id, step, nonce, phase, owner)
          VALUES (?,?,?,?,?,?)"
         test-run workflow-id step nonce (name phase) owner])
      (catch Throwable t
        (log/log! :warn (str "jepsen side-channel write failed: " t))))))

;; ---------------------------------------------------------------------------
;; Activities.

(defn jepsen-activity
  "Side-channel–recording activity.  Sleeps briefly to widen the crash window,
  then records :begin / :end / :fail rows.  Longer sleep for non-trivial steps
  so the nemesis can land a SIGKILL while the activity is in-flight."
  [workflow-id step nonce]
  (record! workflow-id step nonce :begin)
  (try
    (Thread/sleep (long (+ 100 (rand-int 150))))
    (record! workflow-id step nonce :end)
    :ok
    (catch Throwable t
      (record! workflow-id step nonce :fail)
      (throw t))))

;; ---------------------------------------------------------------------------
;; W1: signal-wait — durable wake on signal across processes.
;;
;; Registers a wait-for-signal :go.  If the worker is killed while waiting and
;; someone sends the signal from another process, the workflow must resume when
;; the stable owner restarts.

(intemporal/defn-workflow signal-wait-workflow
  "Records :before, suspends on signal 'go', records :after."
  [workflow-id nonce]
  (let [act (intemporal/stub #'jepsen-activity)]
    (act workflow-id "before" nonce)
    (intemporal/wait-for-signal "go")
    (act workflow-id "after" nonce)))

;; ---------------------------------------------------------------------------
;; W2: activity-chain — recovery of an interrupted activity chain.
;;
;; A replacement engine resumes remaining steps without an explicit API call.

(intemporal/defn-workflow activity-chain-workflow
  "Runs `steps` activities in sequence."
  [workflow-id nonce steps]
  (let [act (intemporal/stub #'jepsen-activity)]
    (dotimes [i steps]
      (act workflow-id (str "step-" i) nonce))))

;; ---------------------------------------------------------------------------
;; W3: cancel-sleep — cancellation reaches a sleeper.
;;
;; Records :started, then waits for signal 'wake' forever.  The test client
;; cancels the workflow via cancel-workflow. The durable wake makes it re-enter
;; the execution loop and observe cancellation.

(intemporal/defn-workflow cancel-sleep-workflow
  "Records :started, then blocks on signal 'wake'."
  [workflow-id nonce]
  (let [act (intemporal/stub #'jepsen-activity)]
    (act workflow-id "started" nonce)
    (intemporal/wait-for-signal "wake")
    (act workflow-id "woke" nonce)))

;; ---------------------------------------------------------------------------
;; W4: rapid-signal — a signal races with the initial park.
;;
;; Immediately waits for signal 'immediate'.  The test client sends the signal
;; at nearly the same time, exercising the store's wake-version check.

(intemporal/defn-workflow rapid-signal-workflow
  "Suspends immediately on signal 'immediate', records :completed after."
  [workflow-id nonce]
  (let [act (intemporal/stub #'jepsen-activity)]
    (intemporal/wait-for-signal "immediate")
    (act workflow-id "completed" nonce)))

;; ---------------------------------------------------------------------------
;; Registry: maps wf-type keyword -> {:fn workflow-fn :signal name-or-nil}.

(def ^:private wf-registry
  {:signal-wait    {:wf-fn #'signal-wait-workflow    :signal "go"}
   :activity-chain {:wf-fn #'activity-chain-workflow :signal nil}
   :cancel-sleep   {:wf-fn #'cancel-sleep-workflow   :signal "wake"}
   :rapid-signal   {:wf-fn #'rapid-signal-workflow   :signal "immediate"}})

(defn workflow-fn-for [wf-type]
  (or (get-in wf-registry [(keyword wf-type) :wf-fn])
      (throw (ex-info "Unknown workflow type" {:wf-type wf-type}))))

(defn signal-name-for [wf-type]
  (get-in wf-registry [(keyword wf-type) :signal]))

(defn build-args
  "Reconstructs the arg vector for a workflow from the queue row."
  [{:jepsen_work_queue/keys [workflow_id nonce wf_type args]}]
  (case (keyword wf_type)
    :signal-wait    [workflow_id nonce]
    :activity-chain [workflow_id nonce (or (:steps args) 5)]
    :cancel-sleep   [workflow_id nonce]
    :rapid-signal   [workflow_id nonce]))
