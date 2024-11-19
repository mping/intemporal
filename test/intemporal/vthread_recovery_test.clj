(ns intemporal.vthread-recovery-test
  (:require [clojure.java.io :as io]
            [clojure.test :refer [deftest is testing use-fixtures]]
            [intemporal.store :as store]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-protocol vthread defn-workflow]]
            [intemporal.test-utils :as tu]
            [promesa.core :as p]))

;;;;
;; demo - recovery of a crashed process

(use-fixtures :once tu/with-trace-logging)

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

(deftest vthread-recovery-test
  ;; make a backup of the db to allow replay
  (io/copy (io/file "./test/intemporal/vthread-recovery.edn")
           (io/file "/tmp/intemporal-vthread-recovery.edn"))
  (let [mstore  (store/make-store {:file "/tmp/intemporal-vthread-recovery.edn"})
        stop-fn (w/start-worker! mstore {:protocols {`ThreadActivity (->ThreadActivityImpl)}})]

    (store/reenqueue-pending-tasks mstore println)

    (let [[task] (store/list-tasks mstore)]
      (tu/wait-for-task mstore (:id task))
      (tu/print-tables mstore))

    (testing "linear history"
      (testing "stored events"
        (let [evts (store/list-events mstore)
              evts (sort-by :id evts)]

          (testing "workflow has result"
            (is (= (into [] (range 10))
                   (-> evts last :result)))))))

    (stop-fn)))
