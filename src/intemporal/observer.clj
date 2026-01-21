(ns intemporal.observer
  (:require [intemporal.protocol :as p]
            [steffan-westcott.clj-otel.api.trace.span :as otspan]))

;; ============================================================================
;; Default Observer (Logging)
;; ============================================================================

(defrecord LoggingObserver [log-atom]
  p/IWorkflowObserver
  (on-workflow-started [_ workflow-id args]
    (swap! log-atom conj {:event :workflow-started
                          :workflow-id workflow-id
                          :args args
                          :timestamp (System/currentTimeMillis)}))

  (on-workflow-suspended [_ workflow-id suspension-type]
    (swap! log-atom conj {:event :workflow-suspended
                          :workflow-id workflow-id
                          :suspension-type suspension-type
                          :timestamp (System/currentTimeMillis)}))

  (on-workflow-resumed [_ workflow-id]
    (swap! log-atom conj {:event :workflow-resumed
                          :workflow-id workflow-id
                          :timestamp (System/currentTimeMillis)}))

  (on-activity-scheduled [_ workflow-id seq-num activity-name args]
    (swap! log-atom conj {:event :activity-scheduled
                          :workflow-id workflow-id
                          :seq seq-num
                          :activity-name activity-name
                          :args args
                          :timestamp (System/currentTimeMillis)}))

  (on-activity-started [_ workflow-id seq-num activity-name]
    (swap! log-atom conj {:event :activity-started
                          :workflow-id workflow-id
                          :seq seq-num
                          :activity-name activity-name
                          :timestamp (System/currentTimeMillis)}))

  (on-activity-completed [_ workflow-id seq-num activity-name result duration-ms]
    (swap! log-atom conj {:event :activity-completed
                          :workflow-id workflow-id
                          :seq seq-num
                          :activity-name activity-name
                          :result result
                          :duration-ms duration-ms
                          :timestamp (System/currentTimeMillis)}))

  (on-activity-failed [_ workflow-id seq-num activity-name error duration-ms]
    (swap! log-atom conj {:event :activity-failed
                          :workflow-id workflow-id
                          :seq seq-num
                          :activity-name activity-name
                          :error error
                          :duration-ms duration-ms
                          :timestamp (System/currentTimeMillis)}))

  (on-async-started [_ workflow-id seq-num]
    (swap! log-atom conj {:event :async-started
                          :workflow-id workflow-id
                          :seq seq-num
                          :timestamp (System/currentTimeMillis)}))

  (on-async-completed [_ workflow-id seq-num result]
    (swap! log-atom conj {:event :async-completed
                          :workflow-id workflow-id
                          :seq seq-num
                          :result result
                          :timestamp (System/currentTimeMillis)}))

  (on-async-failed [_ workflow-id seq-num error]
    (swap! log-atom conj {:event :async-failed
                          :workflow-id workflow-id
                          :seq seq-num
                          :error error
                          :timestamp (System/currentTimeMillis)}))

  (on-timer-scheduled [_ workflow-id seq-num fire-at]
    (swap! log-atom conj {:event :timer-scheduled
                          :workflow-id workflow-id
                          :seq seq-num
                          :fire-at fire-at
                          :timestamp (System/currentTimeMillis)}))

  (on-timer-fired [_ workflow-id seq-num]
    (swap! log-atom conj {:event :timer-fired
                          :workflow-id workflow-id
                          :seq seq-num
                          :timestamp (System/currentTimeMillis)}))

  (on-signal-received [_ workflow-id signal-name payload]
    (swap! log-atom conj {:event :signal-received
                          :workflow-id workflow-id
                          :signal-name signal-name
                          :payload payload
                          :timestamp (System/currentTimeMillis)}))

  (on-workflow-completed [_ workflow-id result]
    (swap! log-atom conj {:event :workflow-completed
                          :workflow-id workflow-id
                          :result result
                          :timestamp (System/currentTimeMillis)}))

  (on-workflow-failed [_ workflow-id error]
    (swap! log-atom conj {:event :workflow-failed
                          :workflow-id workflow-id
                          :error error
                          :timestamp (System/currentTimeMillis)}))

  (on-workflow-cancelled [_ workflow-id]
    (swap! log-atom conj {:event :workflow-cancelled
                          :workflow-id workflow-id
                          :timestamp (System/currentTimeMillis)})))

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
    (on-workflow-cancelled [_ _])))

;; ============================================================================
;; OpenTelemetry Observer
;; ============================================================================

(defrecord OpenTelemetryObserver [spans-atom]
  p/IWorkflowObserver
  (on-workflow-started [_ workflow-id args]
    (let [span-ctx (otspan/new-span! {:name (str "workflow:" workflow-id)
                                       :attributes {:intemporal/workflow-id workflow-id
                                                    :intemporal/args (pr-str args)}})]
      (swap! spans-atom assoc-in [:workflows workflow-id] span-ctx)))

  (on-workflow-suspended [_ workflow-id suspension-type]
    (when-let [span-ctx (get-in @spans-atom [:workflows workflow-id])]
      (otspan/add-span-data! {:context span-ctx
                              :event {:name "workflow.suspended"
                                      :attributes {:intemporal/suspension-type (name suspension-type)}}})))

  (on-workflow-resumed [_ workflow-id]
    (when-let [span-ctx (get-in @spans-atom [:workflows workflow-id])]
      (otspan/add-span-data! {:context span-ctx
                              :event {:name "workflow.resumed"
                                      :attributes {:intemporal/resumed true}}})))

  (on-activity-scheduled [_ workflow-id seq-num activity-name args]
    (when-let [parent-ctx (get-in @spans-atom [:workflows workflow-id])]
      (let [span-ctx (otspan/new-span! {:name (str "activity:" activity-name)
                                         :parent parent-ctx
                                         :attributes {:intemporal/workflow-id workflow-id
                                                      :intemporal/seq seq-num
                                                      :intemporal/activity-name activity-name
                                                      :intemporal/args (pr-str args)}})]
        (swap! spans-atom assoc-in [:activities workflow-id seq-num] span-ctx))))

  (on-activity-started [_ workflow-id seq-num activity-name]
    (when-let [span-ctx (get-in @spans-atom [:activities workflow-id seq-num])]
      (otspan/add-span-data! {:context span-ctx
                              :event {:name "activity.started"
                                      :attributes {:intemporal/started true}}})))

  (on-activity-completed [_ workflow-id seq-num activity-name result duration-ms]
    (when-let [span-ctx (get-in @spans-atom [:activities workflow-id seq-num])]
      (otspan/add-span-data! {:context span-ctx
                              :event {:name "activity.completed"
                                      :attributes {:intemporal/result (pr-str result)
                                                   :intemporal/duration-ms duration-ms}}})
      (otspan/end-span! {:context span-ctx})
      (swap! spans-atom update-in [:activities workflow-id] dissoc seq-num)))

  (on-activity-failed [_ workflow-id seq-num activity-name error duration-ms]
    (when-let [span-ctx (get-in @spans-atom [:activities workflow-id seq-num])]
      (otspan/add-span-data! {:context span-ctx
                              :event {:name "activity.failed"
                                      :attributes {:intemporal/error (pr-str error)
                                                   :intemporal/duration-ms duration-ms}}})
      (otspan/end-span! {:context span-ctx})
      (swap! spans-atom update-in [:activities workflow-id] dissoc seq-num)))

  (on-async-started [_ workflow-id seq-num]
    (when-let [parent-ctx (get-in @spans-atom [:workflows workflow-id])]
      (let [span-ctx (otspan/new-span! {:name (str "async:" seq-num)
                                         :parent parent-ctx
                                         :attributes {:intemporal/workflow-id workflow-id
                                                      :intemporal/seq seq-num}})]
        (swap! spans-atom assoc-in [:async workflow-id seq-num] span-ctx))))

  (on-async-completed [_ workflow-id seq-num result]
    (when-let [span-ctx (get-in @spans-atom [:async workflow-id seq-num])]
      (otspan/add-span-data! {:context span-ctx
                              :event {:name "async.completed"
                                      :attributes {:intemporal/result (pr-str result)}}})
      (otspan/end-span! {:context span-ctx})
      (swap! spans-atom update-in [:async workflow-id] dissoc seq-num)))

  (on-async-failed [_ workflow-id seq-num error]
    (when-let [span-ctx (get-in @spans-atom [:async workflow-id seq-num])]
      (otspan/add-span-data! {:context span-ctx
                              :event {:name "async.failed"
                                      :attributes {:intemporal/error (pr-str error)}}})
      (otspan/end-span! {:context span-ctx})
      (swap! spans-atom update-in [:async workflow-id] dissoc seq-num)))

  (on-timer-scheduled [_ workflow-id seq-num fire-at]
    (when-let [parent-ctx (get-in @spans-atom [:workflows workflow-id])]
      (let [span-ctx (otspan/new-span! {:name (str "timer:" seq-num)
                                         :parent parent-ctx
                                         :attributes {:intemporal/workflow-id workflow-id
                                                      :intemporal/seq seq-num
                                                      :intemporal/fire-at fire-at}})]
        (swap! spans-atom assoc-in [:timers workflow-id seq-num] span-ctx))))

  (on-timer-fired [_ workflow-id seq-num]
    (when-let [span-ctx (get-in @spans-atom [:timers workflow-id seq-num])]
      (otspan/end-span! {:context span-ctx})
      (swap! spans-atom update-in [:timers workflow-id] dissoc seq-num)))

  (on-signal-received [_ workflow-id signal-name payload]
    (when-let [span-ctx (get-in @spans-atom [:workflows workflow-id])]
      (otspan/add-span-data! {:context span-ctx
                              :event {:name "signal.received"
                                      :attributes {:intemporal/signal-name signal-name
                                                   :intemporal/signal-payload (pr-str payload)}}})))

  (on-workflow-completed [_ workflow-id result]
    (when-let [span-ctx (get-in @spans-atom [:workflows workflow-id])]
      (otspan/add-span-data! {:context span-ctx
                              :event {:name "workflow.completed"
                                      :attributes {:intemporal/result (pr-str result)}}})
      (otspan/end-span! {:context span-ctx})
      (swap! spans-atom update :workflows dissoc workflow-id)))

  (on-workflow-failed [_ workflow-id error]
    (when-let [span-ctx (get-in @spans-atom [:workflows workflow-id])]
      (otspan/add-span-data! {:context span-ctx
                              :event {:name "workflow.failed"
                                      :attributes {:intemporal/error (pr-str error)}}})
      (otspan/end-span! {:context span-ctx})
      (swap! spans-atom update :workflows dissoc workflow-id)))

  (on-workflow-cancelled [_ workflow-id]
    (when-let [span-ctx (get-in @spans-atom [:workflows workflow-id])]
      (otspan/add-span-data! {:context span-ctx
                              :event {:name "workflow.cancelled"
                                      :attributes {:intemporal/cancelled true}}})
      (otspan/end-span! {:context span-ctx})
      (swap! spans-atom update :workflows dissoc workflow-id))))

(defn make-otel-observer
  "Create an OpenTelemetry observer that emits traces for workflows and activities"
  []
  (->OpenTelemetryObserver (atom {:workflows {}
                                  :activities {}
                                  :async {}
                                  :timers {}})))