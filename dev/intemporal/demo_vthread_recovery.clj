(ns intemporal.demo-vthread-recovery
  (:require [clojure.java.io :as io]
            [intemporal.store :as store]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-protocol vthread defn-workflow]]
            [promesa.core :as p]))

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
                  (println "inside vthread")
                  (with-thread pr i)))]
    ;; at this point, all of `with-thread` calls are queued, so
    ;; this code is deterministic up to here
    @(p/all proms)))

;; make a backup of the db to allow replay
(io/copy (io/file "./dev/intemporal/vthread-recovery.edn") (io/file "/tmp/intemporal-vthread-recovery.edn"))
(def mstore (store/make-store {:file "/tmp/intemporal-vthread-recovery.edn"}))
(def stop-worker (w/start-worker! mstore {:protocols {`intemporal.demo-vthread-recovery/ThreadActivity (->ThreadActivityImpl)}}))

(defn pprint-table [table]
  (clojure.pprint/print-table table))

(defn print-tables []
  (let [tasks (store/list-tasks mstore)
        events (->> (store/list-events mstore)
                    (sort-by :id))]
    (pprint-table tasks)
    (pprint-table events)))

;(print-tables)

;;;;
;; all pending tasks are marked as new again, so they will be reexecuted
(store/reenqueue-pending-tasks mstore println)
;; print again
(print-tables)

(comment
  (stop-worker))
