(ns intemporal2.demo
  (:require [clojure.java.io :as io]
            [intemporal2.store :as store]
            [intemporal2.workflow :as w]))

;;;;
;; demo

(defn nested-fn [a]
  :nested)

(defn activity-fn [a]
  (let [n (w/stub-function nested-fn)]
    (conj a :activity (n :sub))))

(w/defn-workflow my-workflow [i]
  (let [s (w/stub-function activity-fn)]
    (conj [:root] (s [1]))))

(io/copy (io/file "./src/intemporal2/recovery.edn") (io/file "/tmp/intemporal-recovery.edn"))
(def mstore (store/make-memstore "/tmp/intemporal-recovery.edn"
                                 {'intemporal2.workflow.WorkflowExecutionTask w/map->WorkflowExecutionTask
                                  'intemporal2.workflow.ActivityExecutionTask w/map->ActivityExecutionTask}))
(def worker (w/start-worker! mstore))

(defn print-tables []
  (let [tasks (vals @(::store/task-store @mstore))
        events (->> (vals @(::store/history-store @mstore))
                    (flatten)
                    (sort-by :id))]
    (clojure.pprint/print-table tasks)
    (clojure.pprint/print-table events)))

(print-tables)

(store/reenqueue-pending-tasks mstore println)