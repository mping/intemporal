(ns intemporal.demo-parallelism
  (:require [intemporal.store :as store]
            [intemporal.workflow :as w]
            [promesa.core :as p])
  (:require [intemporal.macros :refer [stub-protocol defn-workflow vthread]]
            [intemporal.workflow]))

;;;;
;; demo

(defprotocol ThreadActivity
  (with-thread [this id]))

(defrecord ThreadActivityImpl []
  ThreadActivity
  (with-thread [this id]
    (Thread/sleep 200)
    id))

(defn-workflow my-workflow []
  (let [pr   (stub-protocol ThreadActivity {})
        proms (for [i (range 10)]
                (vthread
                  (with-thread pr i)))]
    ;; at this point, all of `with-thread` calls are queued, so
    ;; this code is deterministic up to here
    @(p/all proms)))

(def mstore (store/make-store))
(def stop-worker (w/start-worker! mstore {:protocols {`ThreadActivity (->ThreadActivityImpl)}}))

;; note that in cljs, this returns a promise
(def res (w/with-env {:store mstore}
           (my-workflow)))

(defn pprint-table [table]
  ;; fvar in clj can get really long
  (->> table
       (map (fn [r]
              (cond-> r
                (contains? r :fvar) (assoc :fvar "<fn...>"))))
       (clojure.pprint/print-table)))

(defn print-tables []
  (let [tasks (store/list-tasks mstore)
        events (->> (store/list-events mstore)
                    (sort-by :id))]
    (pprint-table tasks)
    (pprint-table events)))

(print-tables)
(println "Result:" res)
(stop-worker)