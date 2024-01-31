(ns intemporal.demo-recovery
  (:require [clojure.java.io :as io]
            [intemporal.store :as store]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-function defn-workflow]]))

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
(io/copy (io/file "./dev/intemporal/recovery.edn") (io/file "/tmp/intemporal-recovery.edn"))
(def mstore (store/make-memstore "/tmp/intemporal-recovery.edn"
                                 {'intemporal.workflow.WorkflowExecutionTask w/map->WorkflowExecutionTask
                                  'intemporal.workflow.ActivityExecutionTask w/map->ActivityExecutionTask}))
(def worker (w/start-worker! mstore))

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

;;;;
;; all pending tasks are marked as new again, so they will be reexecuted
(store/reenqueue-pending-tasks mstore println)