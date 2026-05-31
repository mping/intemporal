(ns intemporal.tests.jepsen.racing-store
  "RacingStore: a store wrapper that deterministically injects the
  register-then-consume signal race described in improvements.md §2.1.

  The race window in process-signal (execution.clj:227-255) is:

    (1) (p/consume-signal store wf-id name) → nil       ; no signal present
        ← WINDOW: sender calls add-signal here →
    (2) (p/register-signal-callback store wf-id name f) ; now registers wake-fn

  add-signal in step (1.5) checks the callbacks atom and finds it empty —
  the wake-fn fires into nothing.  After step (2) the callback is registered
  but add-signal has already run; it will never re-fire retroactively.
  The workflow is permanently stuck with the signal row sitting in the store.

  RacingStore widens and synchronises this window with two promises:
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
      (deliver gate-sent :go)                 ; close window, let process-signal continue
      …)"
  (:require [intemporal.protocol :as p]))

(defrecord RacingStore [inner gate-nil gate-sent armed?]
  p/IStore
  (load-history            [_ wf-id]         (p/load-history inner wf-id))
  (save-event              [_ wf-id ev]      (p/save-event inner wf-id ev))
  (save-events             [_ wf-id evs]     (p/save-events inner wf-id evs))
  (find-event              [_ wf-id et sq]   (p/find-event inner wf-id et sq))
  (get-pending-signals     [_ wf-id]         (p/get-pending-signals inner wf-id))
  (add-signal              [_ wf-id sn sd]   (p/add-signal inner wf-id sn sd))
  (register-signal-callback [_ wf-id sn cb] (p/register-signal-callback inner wf-id sn cb))
  (unregister-signal-callback [_ wf-id sn]  (p/unregister-signal-callback inner wf-id sn))
  (register-wake-callback   [_ wf-id cb]    (p/register-wake-callback inner wf-id cb))
  (wake-workflow            [_ wf-id]       (p/wake-workflow inner wf-id))
  (is-cancelled?           [_ wf-id]        (p/is-cancelled? inner wf-id))
  (mark-cancelled          [_ wf-id]        (p/mark-cancelled inner wf-id))
  (get-workflow-status     [_ wf-id]        (p/get-workflow-status inner wf-id))
  (claim-workflow          [_ wf-id o l]    (p/claim-workflow inner wf-id o l))
  (renew-lease             [_ wf-id o l]    (p/renew-lease inner wf-id o l))
  (release-lease           [_ wf-id o]      (p/release-lease inner wf-id o))
  (add-runnable            [_ wf-id r]      (p/add-runnable inner wf-id r))
  (claim-runnable          [_ o b c]       (p/claim-runnable inner o b c))
  (delete-runnable         [_ wf-id]        (p/delete-runnable inner wf-id))

  (consume-signal [_ wf-id sig-name]
    (let [result (p/consume-signal inner wf-id sig-name)]
      ;; Only intercept the FIRST nil return (armed? guards re-entrant calls).
      (when (and (nil? result) (compare-and-set! armed? true false))
        (deliver gate-nil {:wf-id wf-id :sig-name sig-name})
        ;; Block until the test has injected the signal into the window.
        (deref gate-sent 5000 :timeout-in-racing-store))
      result)))
