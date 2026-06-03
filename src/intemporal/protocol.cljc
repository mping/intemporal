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
     list-pending skips workflows whose wake-at is still in the future (C2)."))

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
  (shutdown-scheduler? [executor]
    "Indicates if the executor has shut down"))

(defprotocol IWorkflowObserver
  "Protocol for observing workflow execution"
  (on-workflow-started [observer workflow-id args])
  (on-workflow-suspended [observer workflow-id suspension-type])
  (on-workflow-resumed [observer workflow-id])
  (on-activity-scheduled [observer workflow-id seq-num activity-name args])
  (on-activity-started [observer workflow-id seq-num activity-name])
  (on-activity-completed [observer workflow-id seq-num activity-name result duration-ms])
  (on-activity-failed [observer workflow-id seq-num activity-name error duration-ms])
  (on-async-started [observer workflow-id seq-num])
  (on-async-completed [observer workflow-id seq-num result])
  (on-async-failed [observer workflow-id seq-num error])
  (on-timer-scheduled [observer workflow-id seq-num fire-at])
  (on-timer-fired [observer workflow-id seq-num])
  (on-signal-received [observer workflow-id signal-name payload])
  (on-workflow-completed [observer workflow-id result])
  (on-workflow-failed [observer workflow-id error])
  (on-workflow-cancelled [observer workflow-id])
  (on-compensation-started [observer workflow-id])
  (on-compensation-failed [observer workflow-id error])
  (on-compensation-completed [observer workflow-id]))
