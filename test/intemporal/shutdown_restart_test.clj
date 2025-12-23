(ns intemporal.shutdown-restart-test
  (:require [clojure.test :as t :refer [deftest is testing]]
            [intemporal.store :as store]
            [intemporal.workflow :as w]
            [matcher-combinators.test :refer [match?]]
            [intemporal.macros :refer [stub-protocol defn-workflow]]
            [intemporal.test-utils :as tu :refer [with-result]]
            [intemporal.test-executor :as te])
  (:import (java.util.concurrent CountDownLatch)))

;(t/use-fixtures :once tu/with-trace-logging)

(def activity-invoked? (CountDownLatch. 1))
(def executor-shutdown? (CountDownLatch. 1))

(defprotocol MyActivities
  (foo [this a])
  (foo2 [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a]
    (.countDown activity-invoked?)
    (.await executor-shutdown?)
    :foo)
  (foo2 [this a] a))

(defn-workflow my-workflow [k]
  (let [stub (stub-protocol MyActivities {})
        r1  (foo stub :pr)
        r2  (foo2 stub :pr)]
    [r1 r2]))

;;;; test proper

(deftest shutdown-restart-test
  (testing "failure: task validation fails"
    (let [mstore      (store/make-store {})
          custom-ex   (te/make-test-executor (fn [] (.countDown executor-shutdown?)) nil)
          executor    (w/start-poller! mstore custom-ex {:protocols  {`MyActivities (->MyActivitiesImpl)}
                                                         :polling-ms 500})]

      (testing "shutdown of ongoing workflow"
        (future
          ;; ensure activity is inflight
          (.await activity-invoked?)
          ;; immediately countdown the latch
          (w/shutdown executor 0)
          (is (w/shutting-down? executor)))

        (with-result [res (w/with-env {:store mstore}
                                      (my-workflow :ok))]

          (is (instance? Exception res))

          (testing "workflow is not in failed state"
            (tu/print-tables mstore)

            (testing "workflow task"
              (let [tasks (store/list-tasks mstore)
                    [w1] tasks]
                (is (match? {:type :workflow :sym 'intemporal.shutdown-restart-test/my-workflow- :state :pending} w1))

                (testing "workflow events: workflow has not finished"
                  (let [[e1 e2] (store/list-events mstore)]
                    (is (match? {:type :intemporal.workflow/invoke :sym 'intemporal.shutdown-restart-test/my-workflow-} e1))
                    (is (match? {:type :intemporal.protocol/invoke :sym 'intemporal.shutdown-restart-test/foo} e2))

                    (let [[w1] (store/list-tasks mstore)]
                      (is (match? {:type :workflow :sym 'intemporal.shutdown-restart-test/my-workflow- :state :pending} w1)))))

                (testing "workflow resumes"
                  (with-open [_ (w/start-poller! mstore {:protocols  {`MyActivities (->MyActivitiesImpl)}
                                                         :polling-ms 100})]
                    (store/reenqueue-pending-tasks mstore (constantly nil))
                    (tu/wait-for-task mstore (:id w1))
                    (tu/print-tables mstore)

                    (testing "workflow succeeded"
                      (let [[w1] (store/list-tasks mstore)]
                        (is (match? {:type :workflow :sym 'intemporal.shutdown-restart-test/my-workflow- :state :success} w1))))))))))))))
