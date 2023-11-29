(ns intemporal2.demo
  (:require [clojure.java.io :as io]
            [intemporal2.store :as store]
            [intemporal2.workflow :as w]
            [intemporal2.macros :refer [stub-function defn-workflow]]))

;;;;
;; demo - recovery of a crashed process

(defn nested-fn [a]
  :nested)

(defn activity-fn [a]
  (let [n (stub-function nested-fn)]
    (conj a :activity (n :sub))))

(defn-workflow my-workflow [i]
  (let [s (stub-function activity-fn)]
    (conj [:root] (s [1]))))

;; make a backup of the db to allow replay
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

;;;;
;; all pending tasks are marked as new again, so they will be reexecuted
(store/reenqueue-pending-tasks mstore println)