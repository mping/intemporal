(ns intemporal.protocol)

;; ============================================================================
;; Protocols
;; ============================================================================

(defprotocol IEngineStore
  "Private scheduling and inspection surface.

  The engine's durable decisions use IFsmStore below. No public workflow code
  receives either storage capability."
  (load-history [store workflow-id] "Load history for a workflow")
  (get-workflow-status [store workflow-id] "Get current workflow status")
  (claim-runnable! [store owner-id limit now-ms]
    "Atomically claim up to `limit` eligible workflows owned by owner-id or
     unowned. Work already assigned to owner-id is selected before unowned
     takeover work, so recovery backlog cannot starve an engine's own newly
     submitted workflows. RUNNABLE and due WAITING workflows become RUNNING.
     Returns maps containing :workflow-id and the :wake-version captured by the
     drive.")
  (requeue-running! [store workflow-id owner-id]
    "Move a non-terminal RUNNING workflow back to RUNNABLE after an interrupted
     or failed drive. The owner-checked three-argument form is used by engine
     drives.")
  (recover-running! [store owner-id]
    "At engine startup, requeue RUNNING workflows owned by owner-id.
     Returns the number of workflows recovered. Requires the existing invariant
     that a stable owner-id identifies only one live engine process."))

(defprotocol IFsmStore
  "The atomic persistence boundary used by the pure workflow FSM.

  This is the transaction boundary used by the engine. Backends and decorators
  implement it directly; no public caller should depend on storage internals."
  (create-workflow! [store creation]
    "Atomically create one workflow and its :workflow-started event.  Returns
     {:create-status :created|:exists|:conflict ...}.")
  (load-workflow-state [store workflow-id]
    "Load live workflow metadata and signal envelopes, but not history.")
  (load-snapshot [store workflow-id]
    "Load one consistent workflow state/history/signal snapshot, or nil.")
  (load-close-tree [store workflow-id]
    "Load the workflow's descendant relationship tree for a terminal close
     transition.  Each node includes its revision and next terminal seq.")
  (add-signal! [store workflow-id signal-name signal]
    "Idempotently enqueue a signal envelope and wake a non-terminal workflow.")
  (request-cancel! [store workflow-id]
    "Request cancellation and wake a non-terminal workflow atomically.")
  (wake! [store workflow-id]
    "Wake a non-terminal workflow atomically.")
  (commit-transition! [store transition]
    "Commit one declarative FSM transition atomically.  See
     intemporal.internal.fsm for transition data shapes.")
  (release-owner! [store owner-id]
    "FSM spelling of release-owner; clears/requeues this owner's active work."))

(defprotocol IActivityExecutor
  "Protocol for executing activities.

   An executor runs an activity ONCE per call; retrying is the engine's concern,
   not an implementation's. The engine owns it because only the engine can record
   an attempt (an executor has no store, workflow-id or seq), and an unrecorded
   attempt is one that a crash silently gives back. This is also why
   `timeout-ms` bounds a single attempt rather than a retry sequence."
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
  "Public extension point for workflow execution events. Every event is a map
   containing at least :event, :workflow-id, and :timestamp. Error values are
   serialized maps; result values are the original workflow/activity values.
   Delivery is synchronous, and the engine isolates observer failures."
  (on-event [observer event]
    "Observe one immutable lifecycle event map."))
