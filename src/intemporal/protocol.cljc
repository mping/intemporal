(ns intemporal.protocol)

;; ============================================================================
;; Protocols
;; ============================================================================

(defprotocol IStore
  "Protocol for workflow persistence"
  (load-history [store workflow-id] "Load history for a workflow")
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
    "Record a parent->child relationship for a child whose :workflow-started
     event is already durable. `parent-seq` is the parent's sequence number for
     the :child-workflow-scheduled marker (used to write the parent's completion
     event back). `policy` is the parent-close-policy keyword (:cascade-cancel,
     :abandon, :terminate). Idempotent: re-linking an existing child is a no-op.
     This operation never manufactures an empty, claimable workflow.")
  (list-children [store parent-id]
    "Return a seq of {:child-id .. :parent-seq .. :policy .. :status ..} maps for
     every child linked to `parent-id`. Empty if the workflow has no children."))

(defn save-event
  "Append one event through the store's canonical batch operation."
  [store workflow-id event]
  (save-events store workflow-id [event])
  event)

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
