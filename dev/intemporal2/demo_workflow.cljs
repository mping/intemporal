(ns intemporal2.demo-workflow
  (:require [intemporal2.store :as store]
            [intemporal2.workflow :as w]
            [promesa.core :as p])
  (:require-macros [intemporal2.macros :refer [stub-function stub-protocol defn-workflow]]))

;;;;
;; demo

(defn nested-fn [a]
  [a :nested])

(defn activity-fn [a]
  (let [f (stub-function nested-fn)]
    (f :sub)))

(defprotocol MyActivities
  (some-stuff [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (some-stuff [this a] (println "record was called:" ) [a :child]))

(defn-workflow my-workflow [i]
  (let [sf (stub-function activity-fn)
        pr (stub-protocol MyActivities {})

        sres (sf [1])
        pres (some-stuff pr :X)]
    (p/let [v1 sres
            v2 pres]
      (conj [:root]
            v1
            v2))))

(def mstore (store/make-memstore))
(def worker (w/start-worker! mstore {`MyActivities (->MyActivitiesImpl)}))

;; note that in cljs, this returns a promise
(def res (w/with-env {:store mstore}
           (my-workflow 1)))

(defn pprint-table [table]
  (cljs.pprint/print-table table))

(defn print-tables []
  (let [tasks (vals @(::store/task-store @mstore))
        events (->> (vals @(::store/history-store @mstore))
                    (flatten)
                    (sort-by :id))]
    (pprint-table tasks)
    (pprint-table events)))

(p/then res #(do (print-tables)
                 (println "Result:" %)))