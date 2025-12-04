(ns intemporal.demo-automata
  (:require [intemporal.store :as store]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-function stub-protocol defn-workflow]]
            [intemporal.test-utils :as tu]
            [promesa.core :as p]
            [automata.fsm :as fsm]))


;;;;
;; demo
;(clojure.pprint/pprint (telemere/check-interop))
;(telemere/add-handler! :default/open-telemetry (tot/handler:open-telemetry))
(tu/setup-telemere)

;;;;
;; main code

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

(defn process-event [event]
  (let [nxt (condp = event
              :event/create :event/created
              :event/created :event/start
              :event/start :event/started
              :event/started :event/stop
              :event/stop :event/stopped
              :event/stopped :event/kill
              :event/kill :event/killed
              nil)]
    nxt))

;;;;
;; workflow registration

(defn-workflow run-fsm-workflow
  [rules init-state init-event]
  (let [stub      (stub-function process-event)
        initstate {::fsm/rules rules ::fsm/state init-state}]

    (loop [state initstate
           evt   init-event]
      (if evt
        (recur (fsm/transit state evt)
               (stub evt))
        (::fsm/state state)))))

(def mstore (store/make-store))
(def ex (w/start-poller! mstore {}))

(def res (w/with-env {:store mstore}
                     (run-fsm-workflow resource-rules :state/init :event/create)))

;; if we reach here, all tasks are finished
(w/shutdown ex 1000)

;;;;
;; show the results
(defn pprint-table [table]
  (clojure.pprint/print-table table))

(defn print-tables []
  (let [tasks  (->> (store/list-tasks mstore))
        events (->> (store/list-events mstore)
                    (sort-by :id))]
    (pprint-table tasks)
    (pprint-table events)))

(print-tables)
