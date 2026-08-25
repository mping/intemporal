(ns intemporal.tests.jepsen.racing-store
  "FSM-store decorator that injects a signal immediately before the first park
   transition. The signal advances the durable wake revision, so the stale park
   must be rejected by commit-transition!."
  (:require
   [intemporal.protocol :as p]))

(defrecord ParkRacingStore [inner fired? signal-name signal]
  p/IEngineStore
  (load-history [_ workflow-id] (p/load-history inner workflow-id))
  (get-workflow-status [_ workflow-id] (p/get-workflow-status inner workflow-id))
  (claim-runnable! [_ owner-id limit now-ms]
    (p/claim-runnable! inner owner-id limit now-ms))
  (requeue-running! [_ workflow-id owner-id]
    (p/requeue-running! inner workflow-id owner-id))
  (recover-running! [_ owner-id] (p/recover-running! inner owner-id))

  p/IFsmStore
  (create-workflow! [_ creation] (p/create-workflow! inner creation))
  (load-workflow-state [_ workflow-id] (p/load-workflow-state inner workflow-id))
  (load-snapshot [_ workflow-id] (p/load-snapshot inner workflow-id))
  (load-close-tree [_ workflow-id] (p/load-close-tree inner workflow-id))
  (add-signal! [_ workflow-id signal-name signal]
    (p/add-signal! inner workflow-id signal-name signal))
  (request-cancel! [_ workflow-id] (p/request-cancel! inner workflow-id))
  (wake! [_ workflow-id] (p/wake! inner workflow-id))
  (commit-transition! [_ transition]
    (when (and (= :park (:kind transition))
               (compare-and-set! fired? false true))
      (p/add-signal! inner (:workflow-id transition) signal-name signal))
    (p/commit-transition! inner transition))
  (release-owner! [_ owner-id] (p/release-owner! inner owner-id)))
