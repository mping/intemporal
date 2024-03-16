(ns intemporal.demo-workflow
  (:require [intemporal.store :as store]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-function stub-protocol defn-workflow]]))

;;;;
;; demo

(defn nested-fn [a]
  [a :nested])

(defn activity-fn [a]
  (let [f (stub-function nested-fn)]
    (conj a :activity (f :sub))))

(defprotocol MyActivities
  (some-stuff [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (some-stuff [this a] (println "record was called:" ) [a :child]))

(defn-workflow my-workflow [i]
  (let [sf (stub-function activity-fn)
        pr (stub-protocol MyActivities {})]
    (conj [:root]
          (sf [1])
          (some-stuff pr :X))))

(def mstore (store/make-memstore))
(def worker (w/start-worker! mstore {`MyActivities (->MyActivitiesImpl)}))

;; note that in cljs, this returns a promise
(def res (w/with-env {:store mstore}
           (my-workflow 1)))

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
