(ns intemporal.tests.jepsen.racing-store
  "Store wrappers that inject signals into deterministic drive race windows.

  RacingStore pauses after a drive observes an empty signal queue. ParkRacingStore
  commits a signal immediately before park-workflow!, which must reject the stale
  wake version and keep the same drive running.

  RacingStore coordinates the consume window with two promises:
    gate-nil  — delivered by RacingStore after consume-signal returns nil
    gate-sent — delivered by the test after add-signal is called

  Usage:
    (let [gate-nil  (promise)
          gate-sent (promise)
          inner     (make-your-store)
          store     (->RacingStore inner gate-nil gate-sent (atom true))]
      ;; start workflow using `store` …
      (deref gate-nil 5000 :timeout)          ; wait: consume-check done
      (p/add-signal inner wf-id sig payload)  ; inject signal into window
      (deliver gate-sent :go)                 ; let the drive reach its stale park
      …)"
  (:require
   [intemporal.protocol :as p]))

(defrecord RacingStore [inner gate-nil gate-sent armed?]
  p/IStore
  (load-history            [_ wf-id]         (p/load-history inner wf-id))
  (save-events             [_ wf-id evs]     (p/save-events inner wf-id evs))
  (save-events-and-wake!   [_ wf-id evs]     (p/save-events-and-wake! inner wf-id evs))
  (find-event              [_ wf-id et sq]   (p/find-event inner wf-id et sq))
  (max-seq                 [_ wf-id]         (p/max-seq inner wf-id))
  (get-pending-signals     [_ wf-id]         (p/get-pending-signals inner wf-id))
  (add-signal              [_ wf-id sn sd]   (p/add-signal inner wf-id sn sd))
  (wake-workflow            [_ wf-id]       (p/wake-workflow inner wf-id))
  (is-cancelled?           [_ wf-id]        (p/is-cancelled? inner wf-id))
  (mark-cancelled          [_ wf-id]        (p/mark-cancelled inner wf-id))
  (get-workflow-status     [_ wf-id]        (p/get-workflow-status inner wf-id))
  (claim-runnable!         [_ o lim now]    (p/claim-runnable! inner o lim now))
  (park-workflow!          [_ wf-id v evs at] (p/park-workflow! inner wf-id v evs at))
  (requeue-running!        [_ wf-id]        (p/requeue-running! inner wf-id))
  (recover-running!        [_ o]            (p/recover-running! inner o))
  (release-owner           [_ o]            (p/release-owner inner o))

  (consume-signal [_ wf-id sig-name]
    (let [result (p/consume-signal inner wf-id sig-name)]
      ;; Only intercept the FIRST nil return (armed? guards re-entrant calls).
      (when (and (nil? result) (compare-and-set! armed? true false))
        (deliver gate-nil {:wf-id wf-id :sig-name sig-name})
        ;; Block until the test has injected the signal into the window.
        (deref gate-sent 5000 :timeout-in-racing-store))
      result))
  (link-child!             [_ parent-id parent-seq child-id policy]
    (p/link-child! inner parent-id parent-seq child-id policy))
  (list-children           [_ parent-id] (p/list-children inner parent-id)))

(defrecord ParkRacingStore [inner fired? signal-name signal-data]
  p/IStore
  (load-history             [_ wf-id]       (p/load-history inner wf-id))
  (save-events              [_ wf-id evs]   (p/save-events inner wf-id evs))
  (save-events-and-wake!    [_ wf-id evs]   (p/save-events-and-wake! inner wf-id evs))
  (find-event               [_ wf-id et sq] (p/find-event inner wf-id et sq))
  (max-seq                  [_ wf-id]       (p/max-seq inner wf-id))
  (get-pending-signals      [_ wf-id]       (p/get-pending-signals inner wf-id))
  (add-signal               [_ wf-id sn sd] (p/add-signal inner wf-id sn sd))
  (consume-signal           [_ wf-id sn]    (p/consume-signal inner wf-id sn))
  (wake-workflow            [_ wf-id]       (p/wake-workflow inner wf-id))
  (is-cancelled?            [_ wf-id]       (p/is-cancelled? inner wf-id))
  (mark-cancelled           [_ wf-id]       (p/mark-cancelled inner wf-id))
  (get-workflow-status      [_ wf-id]       (p/get-workflow-status inner wf-id))
  (claim-runnable!          [_ o lim now]   (p/claim-runnable! inner o lim now))
  (park-workflow!           [_ wf-id v evs at]
    ;; The signal commit advances wake-version while the drive is still RUNNING,
    ;; immediately before its stale park transaction.
    (when (compare-and-set! fired? false true)
      (p/add-signal inner wf-id signal-name signal-data))
    (p/park-workflow! inner wf-id v evs at))
  (requeue-running!         [_ wf-id]       (p/requeue-running! inner wf-id))
  (recover-running!         [_ o]           (p/recover-running! inner o))
  (release-owner            [_ o]           (p/release-owner inner o))
  (link-child!              [_ parent-id parent-seq child-id policy]
    (p/link-child! inner parent-id parent-seq child-id policy))
  (list-children            [_ parent-id] (p/list-children inner parent-id)))
