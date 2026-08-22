(ns intemporal.protocol)

;; ============================================================================
;; Protocols
;; ============================================================================

(defprotocol IStore
  "Protocol for workflow persistence"
  (load-history [store workflow-id] "Load history for a workflow")
  (save-event [store workflow-id event] "Append an event to workflow history")
  (save-events [store workflow-id events] "Append multiple events atomically")
  (save-events-and-wake! [store workflow-id events]
    "Atomically append events and durably wake a non-terminal workflow. Used
     when another workflow completes work that makes this workflow runnable.")
  (find-event [store workflow-id event-type seq-num] "Finds the given event type by its sequence number")
  (max-seq [store workflow-id]
    "Return the highest :seq recorded in this workflow's history, or nil if it
     has no history yet. Used to derive a deterministic seq for terminal control
     events (:workflow-completed/-failed/-cancelled/-terminated) without paying
     for a full history load. Implementations should serve this from an index
     rather than scanning/deserializing the whole history.")
  (get-pending-signals [store workflow-id] "Get pending signals for workflow")
  (add-signal [store workflow-id signal-name signal-data] "Add a signal to workflow")
  (consume-signal [store workflow-id signal-name] "Consume and remove a signal")
  (wake-workflow [store workflow-id]
    "Durably wake a non-terminal workflow. WAITING becomes RUNNABLE; RUNNING
     stays RUNNING but advances wake-version so
     a concurrent park cannot lose the wake. Returns true when the workflow exists
     and is non-terminal, false otherwise.")
  (is-cancelled? [store workflow-id] "Check if workflow is cancelled")
  (mark-cancelled [store workflow-id] "Mark workflow as cancelled")
  (get-workflow-status [store workflow-id] "Get current workflow status")

  ;; --- Durable scheduling + ownership-based recovery ---
  (claim-runnable! [store owner-id limit now-ms]
    "Atomically claim up to `limit` eligible workflows owned by owner-id or
     unowned. RUNNABLE and due WAITING workflows become RUNNING. Returns maps
     containing :workflow-id and the :wake-version captured by the drive.")
  (park-workflow! [store workflow-id expected-wake-version events next-run-at-ms]
    "Atomically append `events` and park RUNNING as WAITING. Returns a map with
     :park-status. A stale version returns
     {:park-status :wake-raced :wake-version current}; the workflow stays
     RUNNING and the same claimed drive continues.")
  (requeue-running! [store workflow-id]
    "Move a non-terminal RUNNING workflow back to RUNNABLE after an interrupted
     or failed drive. Returns true when a row changed.")
  (recover-running! [store owner-id]
    "At worker startup, requeue RUNNING workflows owned by owner-id.
     Returns the number of workflows recovered. Requires the existing invariant
     that a stable owner-id identifies only one live worker process.")
  (release-owner [store owner-id]
    "Clear ownership (owner=NULL) for this owner's non-terminal workflows, so
     other pods may pick them up. Any RUNNING rows are requeued first. Called on
     clean shutdown.")

  ;; --- Tier 2: independent child workflows ---
  (link-child! [store parent-id parent-seq child-id policy]
    "Record a parent->child relationship and create the child as a claimable,
     non-terminal workflow row. `parent-seq` is the parent's sequence number for
     the :child-workflow-scheduled marker (used to write the parent's completion
     event back). `policy` is the parent-close-policy keyword (:cascade-cancel,
     :abandon, :terminate). Idempotent: re-linking an existing child is a no-op.")
  (list-children [store parent-id]
    "Return a seq of {:child-id .. :parent-seq .. :policy .. :status ..} maps for
     every child linked to `parent-id`. Empty if the workflow has no children."))

(defprotocol IActivityExecutor
  "Protocol for executing activities.

   An executor runs an activity ONCE per call; retrying is the engine's concern,
   not an implementation's. The engine owns it because only the engine can record
   an attempt (an executor has no store, workflow-id or seq), and an unrecorded
   attempt is one that a crash silently gives back — see kimi.md X8. This is also
   why `timeout-ms` bounds a single attempt rather than a retry sequence."
  (execute-activity [executor activity-name args timeout-ms]
    "Execute an activity with given args and timeout")
  (execute-activities-parallel [executor activities]
    "Execute multiple activities in parallel, returns seq of results in same order.
     Each result is {:status :success :result … :duration …} or
     {:status :failed :error <serialized map> :exception <live exception>} — the
     engine decides retries from the live exception, since a user :retryable-fn is
     written against an exception and would silently reject a map.")
  (shutdown-executor [executor grace-period-secs]
    "Shutdown the executor and release resources")
  (shutdown? [executor]
    "Indicates if the executor has shut down"))

(defprotocol IWorkflowObserver
  "Protocol for observing workflow execution events.

   All methods are called synchronously on the workflow execution thread.
   Implementations must not throw — any exception escaping an observer method
   will propagate through the engine and fail the workflow. Return values are ignored.

   `error` parameters are serialized maps (see `throwable->map`), not live exceptions.
   `result` parameters are the raw Clojure values returned by the activity or workflow."
  (on-workflow-started [observer workflow-id workflow-name args]
    "Called once when a workflow is first started (not on resume/replay).")
  (on-workflow-suspended [observer workflow-id suspension-type]
    "Called when the workflow suspends. suspension-type is one of:
     :activity, :timer, :wait-signal, :wait-signal-timeout, :join-pending,
     :join-any-pending, :child-workflow.")
  (on-workflow-resumed [observer workflow-id]
    "Called when a suspended workflow re-enters its execution loop.")
  (on-child-workflow-scheduled [observer workflow-id seq-num child-workflow-id child-workflow-name args]
    "Called when a workflow schedules a child workflow (sync or async), before the
     child starts. Lets observers correlate the child (identified by child-workflow-id,
     running the workflow named child-workflow-name) with its parent — e.g. parent the
     child's trace span to the parent's.")
  (on-activity-scheduled [observer workflow-id seq-num activity-name args]
    "Called when an activity stub schedules an activity (before it runs).")
  (on-activity-started [observer workflow-id seq-num activity-name]
    "Called just before the activity function is invoked by the executor.")
  (on-activity-completed [observer workflow-id seq-num activity-name result duration-ms]
    "Called after a successful activity execution.")
  (on-activity-failed [observer workflow-id seq-num activity-name error duration-ms]
    "Called after an activity fails (including mid-retry failures). error is a map.")
  (on-async-started [observer workflow-id seq-num]
    "Called when an async handle is created via `async`.")
  (on-async-completed [observer workflow-id seq-num result]
    "Called when a parallel async operation completes successfully.")
  (on-async-failed [observer workflow-id seq-num error]
    "Called when a parallel async operation fails. error is a map.")
  (on-timer-scheduled [observer workflow-id seq-num fire-at]
    "Called when a sleep/timer is scheduled. fire-at is epoch ms.")
  (on-timer-fired [observer workflow-id seq-num]
    "Called when a scheduled timer fires.")
  (on-signal-received [observer workflow-id signal-name payload]
    "Called when a workflow receives a signal it was waiting for.")
  (on-workflow-completed [observer workflow-id result]
    "Called when a workflow completes successfully. result is the return value.")
  (on-workflow-failed [observer workflow-id error]
    "Called when a workflow fails with an unhandled exception. error is a map.")
  (on-workflow-cancelled [observer workflow-id]
    "Called when a workflow is cancelled.")
  (on-compensation-started [observer workflow-id]
    "Called when saga compensation begins (first compensating step).")
  (on-compensation-failed [observer workflow-id error]
    "Called when an individual compensation step fails. Compensation continues.")
  (on-compensation-completed [observer workflow-id]
    "Called when all compensation steps have run."))
