(ns intemporal.demo-workflow
  (:require [intemporal.store :as store]
            [intemporal.workflow :as w]
            [promesa.core :as p])
  (:require-macros [intemporal.macros :refer [env-let stub-function stub-protocol defn-workflow]]
                   [intemporal.workflow :refer [with-env]]))

;;;;
;; demo

(defn nested-fn [a]
  [a :nested])

(defn activity-fn [a]
  (env-let [f (stub-function nested-fn)
            v (f :sub)]
    (conj a :activity v)))

(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a] (println "record was called:") [a :child]))

(defn-workflow my-workflow [i]
  (let [sf   (stub-function activity-fn)
        pr   (stub-protocol MyActivities {})

        sres (sf [1])
        pres (foo pr :X)]
    (p/let [v1 sres
            v2 pres]
      (conj [:root]
            v1
            v2))))

(def mstore (store/make-store))
(def stop-worker (w/start-worker! mstore {:protocols {`MyActivities (->MyActivitiesImpl)}}))

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
  (let [tasks (store/list-tasks mstore)
        events (->> (store/list-events mstore)
                    (sort-by :id))]
    (pprint-table tasks)
    (pprint-table events)))

(p/then res #(do (print-tables)
                 (println "Result:" %)))