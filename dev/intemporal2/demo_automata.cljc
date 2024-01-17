(ns intemporal2.demo-automata
  (:require [intemporal2.store :as store]
            [intemporal2.workflow :as w]
            [intemporal2.macros :refer [stub-protocol defn-workflow]]
            [automata.fsm :as fsm]))

;;;;
;; demo

(def resource-rules
  {:state/init     [{::fsm/event :event/create ::fsm/to :state/creating ::fsm/actions [:action/create]}
                    {::fsm/event :event/kill ::fsm/to :state/killed}]
   :state/creating [{::fsm/event :event/created ::fsm/to :state/down}
                    {::fsm/event :event/error ::fsm/to :state/init}]
   :state/down     [{::fsm/event :event/start ::fsm/to :state/starting ::fsm/actions [:action/start]}
                    {::fsm/event :event/kill ::fsm/to :state/killing ::fsm/actions [:action/kill]}]
   :state/starting [{::fsm/event :event/started ::fsm/to :state/up}
                    {::fsm/event :event/error ::fsm/to :state/down}]
   :state/stopping [{::fsm/event :event/stopped ::fsm/to :state/down}
                    {::fsm/event :event/error ::fsm/to :state/up}]
   :state/up       [{::fsm/event :event/stop ::fsm/to :state/stopping ::fsm/actions [:action/stop]}
                    {::fsm/event :event/kill ::fsm/to :state/killing ::fsm/actions [:action/kill]}]
   :state/killing  [{::fsm/event :event/killed ::fsm/to :state/killed}
                    {::fsm/event :event/error ::fsm/to :state/killing}]
   :state/killed   []})

;; event producer
(defprotocol EventHandler
  (process-event [this event] "Processes the event, returns the next event"))

(defn make-event-handler []
  (reify EventHandler
    (process-event [this event]
      (println "Going to process event" event)
      (let [nxt (condp = event
                  :event/create :event/created
                  :event/created :event/start
                  :event/start :event/started
                  :event/started :event/stop
                  :event/stop :event/stopped
                  :event/stopped :event/kill
                  :event/kill :event/killed
                  nil)]
        nxt))))
;;;;
;; workflow registration

(defn-workflow run-fsm-workflow
  [rules init-state init-event]
  (let [stub      (stub-protocol EventHandler {:idempotent true})
        initstate {::fsm/rules rules ::fsm/state init-state}]

    (loop [state initstate
           evt   init-event]
      (if evt
        (recur (fsm/transit state evt) (process-event stub evt))
        (::fsm/state state)))))

(def mstore (store/make-memstore))
(def worker (w/start-worker! mstore {`EventHandler (make-event-handler)}))

;; note that in cljs, this returns a promise
(def res (w/with-env {:store mstore}
           (run-fsm-workflow resource-rules :state/init :event/create)))

(defn pprint-table [table]
  (clojure.pprint/print-table table))

(defn print-tables []
  (let [tasks (vals @(::store/task-store @mstore))
        events (->> (vals @(::store/history-store @mstore))
                    (flatten)
                    (sort-by :id))]
    (pprint-table tasks)
    (pprint-table events)))

(print-tables)