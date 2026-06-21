(ns intemporal.protocol)


;; ============================================================================
;; Protocols
;; ============================================================================

(defprotocol IStore
  "Protocol for workflow persistence"
  (load-history [store workflow-id] "Load history for a workflow")
  (save-event [store workflow-id event] "Append an event to workflow history")
  (save-events [store workflow-id events] "Append multiple events atomically")
  (find-event [store workflow-id event-type seq-num] "Finds the given event type by its sequence number")
  (get-pending-signals [store workflow-id] "Get pending signals for workflow")
  (add-signal [store workflow-id signal-name signal-data] "Add a signal to workflow")
  (consume-signal [store workflow-id signal-name] "Consume and remove a signal")
  (register-signal-callback [store workflow-id signal-name callback] "Register callback to be invoked when signal arrives")
  (unregister-signal-callback [store workflow-id signal-name] "Unregister signal callback")
  (register-wake-callback [store workflow-id callback] "Register a generic wake callback, fired by wake-workflow to force the workflow to re-enter its execution loop (e.g. to observe cancellation)")
  (wake-workflow [store workflow-id] "Fire the registered wake callback for a workflow, forcing it to re-enter its loop and re-evaluate state such as the cancellation flag. No-op if none registered.")
  (is-cancelled? [store workflow-id] "Check if workflow is cancelled")
  (mark-cancelled [store workflow-id] "Mark workflow as cancelled")
  (get-workflow-status [store workflow-id] "Get current workflow status")

  ;; --- Phase C: ownership-based recovery (opt-in; single-process callers ignore) ---
  (claim-owner [store workflow-id owner-id]
    "Atomically stamp ownership: UPDATE owner=owner-id WHERE owner IS NULL OR
     owner=owner-id. Returns true iff the workflow is now owned by owner-id. The
     exclusivity gate — only one pod can claim an unowned workflow.")
  (list-pending [store owner-id limit]
    "Return up to `limit` workflow-ids that are NON-TERMINAL, DUE (wake-at is null
     or in the past), and (owner=owner-id OR owner IS NULL): the workflows this
     owner may resume right now. Used for both the live poll and startup recovery.")
  (release-owner [store owner-id]
    "Clear ownership (owner=NULL) for this owner's non-terminal workflows, so
     other pods may pick them up. Called on clean shutdown.")
  (set-wake-at [store workflow-id wake-at-ms]
    "Record the earliest time (epoch ms) this workflow next needs attention, or
     nil for 'always eligible' (waiting on an external event, not the clock).
     list-pending skips workflows whose wake-at is still in the future (C2).")

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
  "Protocol for executing activities"
  (execute-activity [executor activity-name args timeout-ms]
    "Execute an activity with given args and timeout")
  (execute-activities-parallel [executor activities]
    "Execute multiple activities in parallel, returns seq of results in same order")
  (shutdown-executor [executor grace-period-secs]
    "Shutdown the executor and release resources")
  (shutdown? [executor]
    "Indicates if the executor has shut down"))

(defprotocol IScheduler
  "Protocol for scheduling timers"
  (schedule-timer [scheduler workflow-id seq-num fire-at callback]
    "Schedule a timer to fire at given time, calls callback when ready")
  (cancel-timer [scheduler workflow-id seq-num]
    "Cancel a scheduled timer")
  (shutdown-scheduler [scheduler grace-period-secs]
    "Shutdown the scheduler")
  (shutdown-scheduler? [scheduler]
    "Indicates if the scheduler has shut down"))

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
