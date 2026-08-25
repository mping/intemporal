(ns intemporal.observer
  #?(:cljs
     (:require-macros
      [intemporal.internal.logging :as log]))
  (:require
   [intemporal.internal.clock :as clock]
   [intemporal.internal.logging :as log]
   [intemporal.protocol :as p]))

(defn notify!
  "Deliver one event map to an observer without allowing observer failures to
   affect workflow execution. Adds :timestamp once when the emitter did not
   provide one; composed observers therefore see the identical event value."
  [observer event]
  (when observer
    (let [event (cond-> event
                  (nil? (:timestamp event))
                  (assoc :timestamp (clock/now-ms)))]
      (try
        (p/on-event observer event)
        (catch #?(:clj Throwable :cljs :default) e
          (log/warnf e "Observer error for %s" (:event event)))))))

;; Event constructors keep call sites compact while the public extension surface
;; remains the single IWorkflowObserver/on-event operation.
(defn on-workflow-started [observer workflow-id workflow-name args]
  (notify! observer {:event :workflow-started
                     :workflow-id workflow-id
                     :workflow-name workflow-name
                     :args args}))

(defn on-workflow-suspended [observer workflow-id suspension-type]
  (notify! observer {:event :workflow-suspended
                     :workflow-id workflow-id
                     :suspension-type suspension-type}))

(defn on-workflow-resumed [observer workflow-id]
  (notify! observer {:event :workflow-resumed :workflow-id workflow-id}))

(defn on-child-workflow-scheduled
  [observer workflow-id seq-num child-workflow-id child-workflow-name args]
  (notify! observer {:event :child-workflow-scheduled
                     :workflow-id workflow-id
                     :seq seq-num
                     :child-workflow-id child-workflow-id
                     :child-workflow-name child-workflow-name
                     :args args}))

(defn on-activity-scheduled [observer workflow-id seq-num activity-name args]
  (notify! observer {:event :activity-scheduled
                     :workflow-id workflow-id
                     :seq seq-num
                     :activity-name activity-name
                     :args args}))

(defn on-activity-started [observer workflow-id seq-num activity-name]
  (notify! observer {:event :activity-started
                     :workflow-id workflow-id
                     :seq seq-num
                     :activity-name activity-name}))

(defn on-activity-completed
  [observer workflow-id seq-num activity-name result duration-ms]
  (notify! observer {:event :activity-completed
                     :workflow-id workflow-id
                     :seq seq-num
                     :activity-name activity-name
                     :result result
                     :duration-ms duration-ms}))

(defn on-activity-failed
  [observer workflow-id seq-num activity-name error duration-ms]
  (notify! observer {:event :activity-failed
                     :workflow-id workflow-id
                     :seq seq-num
                     :activity-name activity-name
                     :error error
                     :duration-ms duration-ms}))

(defn on-async-started [observer workflow-id seq-num]
  (notify! observer {:event :async-started :workflow-id workflow-id :seq seq-num}))

(defn on-async-completed [observer workflow-id seq-num result]
  (notify! observer {:event :async-completed
                     :workflow-id workflow-id
                     :seq seq-num
                     :result result}))

(defn on-async-failed [observer workflow-id seq-num error]
  (notify! observer {:event :async-failed
                     :workflow-id workflow-id
                     :seq seq-num
                     :error error}))

(defn on-timer-scheduled [observer workflow-id seq-num fire-at]
  (notify! observer {:event :timer-scheduled
                     :workflow-id workflow-id
                     :seq seq-num
                     :fire-at fire-at}))

(defn on-timer-fired [observer workflow-id seq-num]
  (notify! observer {:event :timer-fired :workflow-id workflow-id :seq seq-num}))

(defn on-signal-received [observer workflow-id signal-name payload]
  (notify! observer {:event :signal-received
                     :workflow-id workflow-id
                     :signal-name signal-name
                     :payload payload}))

(defn on-workflow-completed [observer workflow-id result]
  (notify! observer {:event :workflow-completed
                     :workflow-id workflow-id
                     :result result}))

(defn on-workflow-failed [observer workflow-id error]
  (notify! observer {:event :workflow-failed
                     :workflow-id workflow-id
                     :error error}))

(defn on-workflow-cancelled [observer workflow-id]
  (notify! observer {:event :workflow-cancelled :workflow-id workflow-id}))

(defn on-compensation-started [observer workflow-id]
  (notify! observer {:event :compensation-started :workflow-id workflow-id}))

(defn on-compensation-failed [observer workflow-id error]
  (notify! observer {:event :compensation-failed
                     :workflow-id workflow-id
                     :error error}))

(defn on-compensation-completed [observer workflow-id]
  (notify! observer {:event :compensation-completed :workflow-id workflow-id}))

(defrecord LoggingObserver [log-atom]
  p/IWorkflowObserver
  (on-event [_ event]
    (swap! log-atom conj event)))

(defn make-logging-observer
  "Create an observer that appends all event maps to an atom."
  ([] (make-logging-observer (atom [])))
  ([log-atom] (->LoggingObserver log-atom)))

(defn noop-observer []
  (reify p/IWorkflowObserver
    (on-event [_ _])))

(defn make-composite-observer
  "Fan out each event to every non-nil observer. A failing observer is isolated,
   and later observers still receive the exact same event map."
  [observers]
  (let [observers (vec (filter some? observers))]
    (if (empty? observers)
      (noop-observer)
      (reify p/IWorkflowObserver
        (on-event [_ event]
          (doseq [observer observers]
            (notify! observer event)))))))
