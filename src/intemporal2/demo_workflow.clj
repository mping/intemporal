(ns intemporal2.demo-workflow
  (:require [intemporal2.store :as store]
            [intemporal2.workflow :as w]
            [intemporal2.macros :refer [stub-function stub-protocol defn-workflow with-env]]))

;;;;
;; demo

(defn nested-fn [a]
  [a :nested])

(defn activity-fn [a]
  (let [f (stub-function nested-fn)]
    ;;(System/exit 0) ;; TODO this emulates process crash
    (conj a :activity (f :sub))))

(defprotocol MyActivities
  (some-stuff [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (some-stuff [this a] (println "record was called:" ) [a :child]))

(defn-workflow my-workflow [i]
  (let [s (stub-function activity-fn)
        p (stub-protocol MyActivities)]
    (conj [:root]
          (s [1])
          (some-stuff p :X))))


(def mstore (store/make-memstore))
(def worker (w/start-worker! mstore {`MyActivities (->MyActivitiesImpl)}))

(with-env {:store mstore}
  (my-workflow 1))

(defn print-tables []
  (let [tasks (vals @(::store/task-store @mstore))
        events (->> (vals @(::store/history-store @mstore))
                    (flatten)
                    (sort-by :id))]
    (clojure.pprint/print-table tasks)
    (clojure.pprint/print-table events)))

(print-tables)
