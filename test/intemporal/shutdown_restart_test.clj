(ns intemporal.shutdown-restart-test
  (:require [clojure.test :as t :refer [deftest is testing]]
            [intemporal.store :as store]
            [intemporal.workflow :as w]
            [matcher-combinators.test :refer [match?]]
            [intemporal.macros :refer [stub-protocol defn-workflow]]
            [intemporal.test-utils :as tu :refer [with-result]]))

(t/use-fixtures :once tu/with-trace-logging)

(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a]
    (Thread/sleep 1000) :foo))

(defn-workflow my-workflow [k]
  (let [stub (stub-protocol MyActivities {})
        prr  (foo stub :pr)]
    prr))

;;;; test proper

(deftest executor-shutdown-test
  (testing "failure: task validation fails"
    (let [mstore   (store/make-store {})
          executor (w/start-poller! mstore {:protocols  {`MyActivities (->MyActivitiesImpl)}
                                            :polling-ms 10})]

      (testing "shutdown of ongoing workflow"
        ;; give it some time so the poller can pick it up but just once
        (future
          (Thread/sleep 500)
          (w/shutdown executor 0))

        (with-result [res (w/with-env {:store mstore}
                            (my-workflow :ok))]

          (is (instance? Exception res))

          (testing "Workflow is not in failed state"
            (tu/print-tables mstore)

            (testing "workflow task"
              (let [[w1] (store/list-tasks mstore)]
                (is (match? {:type :workflow :sym 'intemporal.shutdown-restart-test/my-workflow- :state :pending} w1))

                (testing "workflow events"
                  (let [[e1 e2 e3] (store/list-events mstore)]
                    (is (match? {:type :intemporal.workflow/invoke :sym 'intemporal.shutdown-restart-test/my-workflow-} e1))
                    (is (match? {:type :intemporal.protocol/invoke :sym 'intemporal.shutdown-restart-test/foo} e2))
                    (is (nil? e3))))))

            (testing "workflow resumes"
              (let [executor (w/start-poller! mstore {:protocols  {`MyActivities (->MyActivitiesImpl)}
                                                      :polling-ms 10})]
                (store/reenqueue-pending-tasks mstore (constantly nil))
                (Thread/sleep 3000)

                (tu/print-tables mstore)

                (testing "workflow succeeded"
                  (let [[w1] (store/list-tasks mstore)]
                    (is (match? {:type :workflow :sym 'intemporal.shutdown-restart-test/my-workflow- :state :success} w1))))

                (w/shutdown executor 0)))))))))
