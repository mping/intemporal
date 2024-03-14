(ns intemporal.demo-workflow
  (:require [intemporal.store :as store]
            [intemporal.workflow :as w]
            [promesa.core :as p])
  (:require-macros [intemporal.macros :refer [stub-function stub-protocol defn-workflow]]
                   [intemporal.workflow :refer [with-env]]))

;;;;
;; demo

(defn nested-fn [a]
  [a :nested])

(defn activity-fn [a]
  (let [f (stub-function nested-fn)
        e (w/current-env)]

    ;; p/let will run code inside a fn, so we need to make sure we propagate the
    ;; environment
    (p/let [v (w/with-env e
                (f :sub))]
      (conj a :activity v))))

(defprotocol MyActivities
  (some-stuff [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (some-stuff [this a] (println "record was called:") [a :child]))

(defn-workflow my-workflow [i]
  (let [sf   (stub-function activity-fn)
        pr   (stub-protocol MyActivities {})

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
  ;; fvar in clj can get really long
  (->> table
       (map (fn [r]
              (cond-> r
                (contains? r :fvar) (assoc :fvar "<fn...>"))))
       (cljs.pprint/print-table)))

(defn print-tables []
  (let [tasks  (vals @(::store/task-store @mstore))
        events (->> (vals @(::store/history-store @mstore))
                    (flatten)
                    (sort-by :id))]
    (pprint-table tasks)
    (pprint-table events)))

(p/then res #(do (print-tables)
                 (println "Result:" %)))