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
  (is-cancelled? [store workflow-id] "Check if workflow is cancelled")
  (mark-cancelled [store workflow-id] "Mark workflow as cancelled")
  (get-workflow-status [store workflow-id] "Get current workflow status"))

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
  (on-workflow-cancelled [observer workflow-id]))
