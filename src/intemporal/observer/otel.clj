(ns intemporal.observer.otel
  (:require [intemporal.protocol :as p]
            [steffan-westcott.clj-otel.api.trace.span :as otspan]))
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