(ns intemporal.internal.events
  "Canonical event-type keywords used in workflow history.
   Import this namespace to avoid string-typed keyword literals scattered through
   the codebase and get a single place to add new event types.")

;; Activity lifecycle
(def activity-scheduled  :activity-scheduled)
(def activity-completed  :activity-completed)
(def activity-failed     :activity-failed)

;; Async (parallel) handle lifecycle
(def async-started   :async-started)
(def async-completed :async-completed)
(def async-failed    :async-failed)
(def join-any-completed :join-any-completed)

;; Timer lifecycle
(def timer-scheduled :timer-scheduled)
(def timer-fired     :timer-fired)

;; Signal lifecycle
(def signal-received       :signal-received)
(def signal-wait-completed :signal-wait-completed)

;; Child workflow lifecycle
(def child-workflow-scheduled :child-workflow-scheduled)
(def child-workflow-completed :child-workflow-completed)
(def child-workflow-failed    :child-workflow-failed)

;; Workflow terminal events
(def workflow-started   :workflow-started)
(def workflow-completed :workflow-completed)
(def workflow-failed    :workflow-failed)
(def workflow-cancelled :workflow-cancelled)

;; Internal utility events
(def run-once-completed :run-once-completed)
