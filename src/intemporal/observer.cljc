(ns intemporal.observer
  (:require [intemporal.protocol :as p]
            [intemporal.utils :as utils]))

;; ============================================================================
;; Default Observer (Logging)
;; ============================================================================

(defrecord LoggingObserver [log-atom]
  p/IWorkflowObserver
  (on-workflow-started [_ workflow-id args]
    (swap! log-atom conj {:event :workflow-started
                          :workflow-id workflow-id
                          :args args
                          :timestamp (utils/current-time-ms)}))

  (on-workflow-suspended [_ workflow-id suspension-type]
    (swap! log-atom conj {:event :workflow-suspended
                          :workflow-id workflow-id
                          :suspension-type suspension-type
                          :timestamp (utils/current-time-ms)}))

  (on-workflow-resumed [_ workflow-id]
    (swap! log-atom conj {:event :workflow-resumed
                          :workflow-id workflow-id
                          :timestamp (utils/current-time-ms)}))

  (on-activity-scheduled [_ workflow-id seq-num activity-name args]
    (swap! log-atom conj {:event :activity-scheduled
                          :workflow-id workflow-id
                          :seq seq-num
                          :activity-name activity-name
                          :args args
                          :timestamp (utils/current-time-ms)}))

  (on-activity-started [_ workflow-id seq-num activity-name]
    (swap! log-atom conj {:event :activity-started
                          :workflow-id workflow-id
                          :seq seq-num
                          :activity-name activity-name
                          :timestamp (utils/current-time-ms)}))

  (on-activity-completed [_ workflow-id seq-num activity-name result duration-ms]
    (swap! log-atom conj {:event :activity-completed
                          :workflow-id workflow-id
                          :seq seq-num
                          :activity-name activity-name
                          :result result
                          :duration-ms duration-ms
                          :timestamp (utils/current-time-ms)}))

  (on-activity-failed [_ workflow-id seq-num activity-name error duration-ms]
    (swap! log-atom conj {:event :activity-failed
                          :workflow-id workflow-id
                          :seq seq-num
                          :activity-name activity-name
                          :error error
                          :duration-ms duration-ms
                          :timestamp (utils/current-time-ms)}))

  (on-async-started [_ workflow-id seq-num]
    (swap! log-atom conj {:event :async-started
                          :workflow-id workflow-id
                          :seq seq-num
                          :timestamp (utils/current-time-ms)}))

  (on-async-completed [_ workflow-id seq-num result]
    (swap! log-atom conj {:event :async-completed
                          :workflow-id workflow-id
                          :seq seq-num
                          :result result
                          :timestamp (utils/current-time-ms)}))

  (on-async-failed [_ workflow-id seq-num error]
    (swap! log-atom conj {:event :async-failed
                          :workflow-id workflow-id
                          :seq seq-num
                          :error error
                          :timestamp (utils/current-time-ms)}))

  (on-timer-scheduled [_ workflow-id seq-num fire-at]
    (swap! log-atom conj {:event :timer-scheduled
                          :workflow-id workflow-id
                          :seq seq-num
                          :fire-at fire-at
                          :timestamp (utils/current-time-ms)}))

  (on-timer-fired [_ workflow-id seq-num]
    (swap! log-atom conj {:event :timer-fired
                          :workflow-id workflow-id
                          :seq seq-num
                          :timestamp (utils/current-time-ms)}))

  (on-signal-received [_ workflow-id signal-name payload]
    (swap! log-atom conj {:event :signal-received
                          :workflow-id workflow-id
                          :signal-name signal-name
                          :payload payload
                          :timestamp (utils/current-time-ms)}))

  (on-workflow-completed [_ workflow-id result]
    (swap! log-atom conj {:event :workflow-completed
                          :workflow-id workflow-id
                          :result result
                          :timestamp (utils/current-time-ms)}))

  (on-workflow-failed [_ workflow-id error]
    (swap! log-atom conj {:event :workflow-failed
                          :workflow-id workflow-id
                          :error error
                          :timestamp (utils/current-time-ms)}))

  (on-workflow-cancelled [_ workflow-id]
    (swap! log-atom conj {:event :workflow-cancelled
                          :workflow-id workflow-id
                          :timestamp (utils/current-time-ms)}))

  (on-compensation-started [_ workflow-id]
    (swap! log-atom conj {:event :compensation-started
                          :workflow-id workflow-id
                          :timestamp (utils/current-time-ms)}))

  (on-compensation-failed [_ workflow-id error]
    (swap! log-atom conj {:event :compensation-failed
                          :workflow-id workflow-id
                          :error error
                          :timestamp (utils/current-time-ms)}))

  (on-compensation-completed [_ workflow-id]
    (swap! log-atom conj {:event :compensation-completed
                          :workflow-id workflow-id
                          :timestamp (utils/current-time-ms)})))

(defn make-logging-observer
  "Create an observer that logs all events to an atom"
  ([] (make-logging-observer (atom [])))
  ([log-atom] (->LoggingObserver log-atom)))

(defn noop-observer
  "Create an observer that does nothing"
  []
  (reify p/IWorkflowObserver
    (on-workflow-started [_ _ _])
    (on-workflow-suspended [_ _ _])
    (on-workflow-resumed [_ _])
    (on-activity-scheduled [_ _ _ _ _])
    (on-activity-started [_ _ _ _])
    (on-activity-completed [_ _ _ _ _ _])
    (on-activity-failed [_ _ _ _ _ _])
    (on-async-started [_ _ _])
    (on-async-completed [_ _ _ _])
    (on-async-failed [_ _ _ _])
    (on-timer-scheduled [_ _ _ _])
    (on-timer-fired [_ _ _])
    (on-signal-received [_ _ _ _])
    (on-workflow-completed [_ _ _])
    (on-workflow-failed [_ _ _])
    (on-workflow-cancelled [_ _])
    (on-compensation-started [_ _])
    (on-compensation-failed [_ _ _])
    (on-compensation-completed [_ _])))

(defn make-composite-observer
  "Create an observer that fans out all events to a list of observers.
   Returns a noop-observer if the list is empty."
  [observers]
  (let [obs (vec (filter some? observers))]
    (if (empty? obs)
      (noop-observer)
      (reify p/IWorkflowObserver
        (on-workflow-started [_ workflow-id args]
          (doseq [o obs] (p/on-workflow-started o workflow-id args)))
        (on-workflow-suspended [_ workflow-id suspension-type]
          (doseq [o obs] (p/on-workflow-suspended o workflow-id suspension-type)))
        (on-workflow-resumed [_ workflow-id]
          (doseq [o obs] (p/on-workflow-resumed o workflow-id)))
        (on-activity-scheduled [_ workflow-id seq-num activity-name args]
          (doseq [o obs] (p/on-activity-scheduled o workflow-id seq-num activity-name args)))
        (on-activity-started [_ workflow-id seq-num activity-name]
          (doseq [o obs] (p/on-activity-started o workflow-id seq-num activity-name)))
        (on-activity-completed [_ workflow-id seq-num activity-name result duration-ms]
          (doseq [o obs] (p/on-activity-completed o workflow-id seq-num activity-name result duration-ms)))
        (on-activity-failed [_ workflow-id seq-num activity-name error duration-ms]
          (doseq [o obs] (p/on-activity-failed o workflow-id seq-num activity-name error duration-ms)))
        (on-async-started [_ workflow-id seq-num]
          (doseq [o obs] (p/on-async-started o workflow-id seq-num)))
        (on-async-completed [_ workflow-id seq-num result]
          (doseq [o obs] (p/on-async-completed o workflow-id seq-num result)))
        (on-async-failed [_ workflow-id seq-num error]
          (doseq [o obs] (p/on-async-failed o workflow-id seq-num error)))
        (on-timer-scheduled [_ workflow-id seq-num fire-at]
          (doseq [o obs] (p/on-timer-scheduled o workflow-id seq-num fire-at)))
        (on-timer-fired [_ workflow-id seq-num]
          (doseq [o obs] (p/on-timer-fired o workflow-id seq-num)))
        (on-signal-received [_ workflow-id signal-name payload]
          (doseq [o obs] (p/on-signal-received o workflow-id signal-name payload)))
        (on-workflow-completed [_ workflow-id result]
          (doseq [o obs] (p/on-workflow-completed o workflow-id result)))
        (on-workflow-failed [_ workflow-id error]
          (doseq [o obs] (p/on-workflow-failed o workflow-id error)))
        (on-workflow-cancelled [_ workflow-id]
          (doseq [o obs] (p/on-workflow-cancelled o workflow-id)))
        (on-compensation-started [_ workflow-id]
          (doseq [o obs] (p/on-compensation-started o workflow-id)))
        (on-compensation-failed [_ workflow-id error]
          (doseq [o obs] (p/on-compensation-failed o workflow-id error)))
        (on-compensation-completed [_ workflow-id]
          (doseq [o obs] (p/on-compensation-completed o workflow-id)))))))