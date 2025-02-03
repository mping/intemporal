(ns intemporal.shutdown-restart-test
  (:require [cljs.test :as t :refer-macros [deftest is testing]]
            [intemporal.error :as error]
            [intemporal.store :as store]
            [intemporal.workflow :as w]
            [intemporal.test-utils :as tu]
            [matcher-combinators.test :refer [match?]]
            [promesa.core :as p])
  (:require-macros [intemporal.macros :refer [stub-protocol defn-workflow]]
                   [intemporal.test-utils :refer [with-result]]))

(t/use-fixtures :once tu/with-trace-logging)

(declare stop-worker)
(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a]
    (stop-worker)
    :foo))

(defn-workflow my-workflow [k]
  (let [stub (stub-protocol MyActivities {})
        prr  (foo stub :pr)]
    ;; chain values: ensure tests work under cljs too
    #_:clj-kondo/ignore
    (p/let [res prr]
      res)))

;;;; test proper

(def mstore (store/make-store {}))
(def stop-worker (w/start-worker! mstore {:protocols  {`MyActivities (->MyActivitiesImpl)}
                                          :polling-ms 10}))

(deftest executor-shutdown-test
  (testing "shutdown of ongoing workflow"

    (with-result [res (w/with-env {:store mstore}
                        (my-workflow :ok))]

      (is (instance? js/Error res))
      (is (error/panic? res))

      (testing "Workflow is not in failed state"
        (tu/print-tables mstore)

        (testing "workflow task"
          (let [[w1] (store/list-tasks mstore)]
            (is (match? {:type :workflow :sym 'intemporal.shutdown-restart-test/my-workflow- :state :pending} w1))))

        (testing "workflow events"
          (let [[e1 e2 e3] (store/list-events mstore)]
            (is (match? {:type :intemporal.workflow/invoke :sym 'intemporal.shutdown-restart-test/my-workflow-} e1))
            (is (match? {:type :intemporal.protocol/invoke :sym 'intemporal.shutdown-restart-test/foo} e2))
            (is (nil? e3))))))))

#_
(deftest executor-shutdown-resume-test
  (testing "workflow resumes"
    (let [stop-worker (w/start-worker mstore {:protocols  {`MyActivities (->MyActivitiesImpl)}
                                              :polling-ms 10})]
      (store/reenqueue-pending-tasks mstore (constantly nil))
      (with-result [_ (p/delay 2000)]

        (tu/print-tables mstore)

        (testing "workflow succeeded"
          (let [[w1] (store/list-tasks mstore)]
            (is (match? {:type :workflow :sym 'intemporal.shutdown-restart-test/my-workflow- :state :success} w1))))

        (stop-worker)))))

;(cljs.test/run-tests *ns*)