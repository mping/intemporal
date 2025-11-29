(ns intemporal.demo-workflow
  (:require [intemporal.store :as store]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-function stub-protocol defn-workflow]]
            [intemporal.test-utils :as tu]))

;;;;
;; demo
;(clojure.pprint/pprint (telemere/check-interop))
;(telemere/add-handler! :default/open-telemetry (tot/handler:open-telemetry))
(tu/setup-telemere)

(defn nested-fn [a]
  [a :nested])

(defn activity-fn [a]
  (let [f (stub-function nested-fn)]
    (conj a :activity (f :sub))))

(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a] (println "record was called:" ) [a :child]))

(defn-workflow my-workflow [i]
  (let [sf (stub-function activity-fn)
        pr (stub-protocol MyActivities {})]
    (conj [:root]
          (sf [1])
          (foo pr :X))))

(def mstore (store/make-store))
(def ex (w/start-poller! mstore {:protocols {`MyActivities (->MyActivitiesImpl)}}))

(def res (w/with-env {:store mstore}
           (my-workflow 1)))

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
