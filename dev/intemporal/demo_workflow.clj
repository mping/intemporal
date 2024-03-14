(ns intemporal.demo-workflow
  (:require [intemporal.store :as store]
            [intemporal.store.foundationdb :as fdb]
            [intemporal.store.jdbc :as jdbc]
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

(def mstore (store/make-store))
;(def mstore (fdb/make-store))
;(def mstore (jdbc/make-store {:jdbcUrl "jdbc:postgresql://localhost:5432/root?user=root&password=root"
;                              :migration-dir "migrations/postgres"}))
(def worker (w/start-worker! mstore {:protocols {`MyActivities (->MyActivitiesImpl)}}))

(def res (w/with-env {:store mstore}
           (my-workflow 1)))

(defn pprint-table [table]
  (clojure.pprint/print-table table))

(defn print-tables []
  (let [tasks  (->> (store/list-tasks mstore))
        events (->> (store/list-events mstore)
                    (sort-by :id))]
    (pprint-table tasks)
    (pprint-table events)))

(print-tables)
