(ns intemporal.vthread-recovery-test
  (:require [clojure.java.io :as io]
            [clojure.test :refer [deftest is testing]]
            [clojure.pprint :as pprint]
            [intemporal.store :as store]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-protocol vthread defn-workflow]]
            [promesa.core :as p]))

;;;;
;; demo - recovery of a crashed process

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



(deftest test-vthread-recovery
  ;; make a backup of the db to allow replay
  (io/copy (io/file "./dev/intemporal/vthread-recovery.edn")
           (io/file "/tmp/intemporal-vthread-recovery.edn"))
  (let [mstore  (store/make-store "/tmp/intemporal-vthread-recovery.edn" {})
        stop-fn (w/start-worker! mstore {:protocols {`ThreadActivity (->ThreadActivityImpl)}})
        print-tables (fn []
                       (let [tasks  (store/list-tasks mstore)
                             events (->> (store/list-events mstore)
                                         (sort-by :id))]
                         (pprint/print-table tasks)
                         (pprint/print-table events)))]

    (try
      (store/reenqueue-pending-tasks mstore println)
      (finally
        ;; wait a bit; we dont have facilities to query workflow state
        (Thread/sleep 1000)
        (print-tables)

        (testing "linear history"
          (testing "stored events"
            (let [evts (store/list-events mstore)
                  evts (sort-by :id evts)]

              (testing "workflow has result"
                (is (= (into [] (range 10))
                       (-> evts last :result)))))))

        (stop-fn)))))
