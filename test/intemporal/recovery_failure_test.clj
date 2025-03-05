(ns intemporal.recovery-failure-test
  (:require [clojure.test :as t :refer [deftest is testing]]
            [intemporal.store :as store]
            [intemporal.workflow :as w]
            [intemporal.test-utils :as tu]
            [clojure.java.io :as io]
            [intemporal.macros :refer [stub-function stub-protocol defn-workflow]]))

(t/use-fixtures :once tu/with-trace-logging)

(defn nested-fn [a]
  [a :nested])

(defn activity-fn [a]
  (let [f (stub-function nested-fn)]
    (f :sub)))

(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a] [:proto a]))

(defn-workflow my-workflow [i]
  (let [sf  (stub-function activity-fn)
        pr  (stub-protocol MyActivities {})
        sfr (sf 1)
        prr (foo pr :pr)]

    ;; chain values: ensure tests work under cljs too
    #_:clj-kondo/ignore
    (let [v1 sfr
          v2 prr]
      [:root v1 v2])))

;;;; test proper

(deftest recovery-failure-test
  ;; make a backup of the db to allow replay
  (io/copy (io/file "./test/intemporal/recovery_failure.edn")
           (io/file "/tmp/recovery_failure.edn"))
  (testing "workflow"
    (let [mstore      (store/make-store {:file "/tmp/recovery_failure.edn"})
          [task] (store/list-tasks mstore)
          stop-worker (w/start-worker! mstore {:protocols {`MyActivities (->MyActivitiesImpl)}})]

      (try
        (store/reenqueue-pending-tasks mstore println)
        (tu/wait-for-task mstore (:id task))

        (testing "workflow failed with unexpected transition"
          (let [[task] (store/list-tasks mstore)
                [_ _ crash-ev last-ev] (->> (store/list-events mstore)
                                            (sort-by :id))]

            (is (= :failure (:state task)))
            (is (= :intemporal.workflow.internal/failure (:type crash-ev)))
            (is (= :intemporal.workflow/failure (:type last-ev)))))
        (finally
          (tu/print-tables mstore)
          (stop-worker))))))

#_:clj-kondo/ignore
(comment
  (cljs.test/run-tests *ns*))
