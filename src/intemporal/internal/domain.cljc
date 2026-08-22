(ns intemporal.internal.domain)

(def event-types
  "Every event type that may appear in durable workflow history."
  #{:activity-scheduled :activity-completed :activity-failed :activity-attempt-failed
    :async-started :async-completed :async-failed :join-any-completed
    :timer-scheduled :timer-fired
    :signal-wait-scheduled :signal-received :signal-wait-completed
    :child-workflow-scheduled :child-workflow-completed :child-workflow-failed
    :workflow-started :workflow-completed :workflow-failed
    :workflow-cancelled :workflow-cancelling :workflow-terminated
    :run-once-completed})

(def terminal-event->status
  {:workflow-completed :completed
   :workflow-failed :failed
   :workflow-cancelled :cancelled
   :workflow-terminated :terminated})

(def terminal-event-types (set (keys terminal-event->status)))
(def terminal-statuses (set (vals terminal-event->status)))
(def workflow-statuses (conj terminal-statuses :not-found :running))
(def workflow-run-states #{:runnable :running :waiting :terminal})
(def parent-close-policies #{:cascade-cancel :abandon :terminate})

(defn terminal-event? [event]
  (contains? terminal-event-types (:event-type event)))

(defn terminal-status? [status]
  (contains? terminal-statuses status))

(defn terminal-status-in [events]
  (some (comp terminal-event->status :event-type) events))

(defn event-identity
  "Stable idempotency key for one history fact. Retry-attempt events repeat at
   one replay sequence, so their running attempt number is part of the identity."
  [{:keys [event-type seq attempts]}]
  [event-type seq (when (= :activity-attempt-failed event-type) attempts)])
