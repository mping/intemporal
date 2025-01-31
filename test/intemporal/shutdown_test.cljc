(ns intemporal.shutdown-test
  #?(:cljs (:require [cljs.test :as t :refer-macros [deftest is testing]]
                     [intemporal.store :as store]
                     [intemporal.workflow :as w]
                     [intemporal.test-utils :as tu]
                     [matcher-combinators.test :refer [match?]]
                     [promesa.core :as p])
     :clj  (:require [clojure.test :as t :refer [deftest is testing]]
                     [intemporal.store :as store]
                     [intemporal.workflow :as w]
                     [intemporal.test-utils :as tu]
                     [matcher-combinators.test :refer [match?]]
                     [promesa.core :as p]))
  #?(:cljs (:require-macros [intemporal.macros :refer [stub-protocol defn-workflow]]
                            [intemporal.test-utils :refer [with-result]])
     :clj  (:require [intemporal.macros :refer [stub-protocol defn-workflow]]
                     [intemporal.test-utils :refer [with-result]])))

(t/use-fixtures :once tu/with-trace-logging)

(def ^:dynamic *executor* nil)
(defn shutdown! [] (w/shutdown *executor* 0))

(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a]
    #?(:clj (Thread/sleep 3000)
       :cljs (p/delay 3000))))

(defn-workflow my-workflow [k]
  (let [stub (stub-protocol MyActivities {})
        prr  (foo stub :pr)]
    ;; chain values: ensure tests work under cljs too
    #_:clj-kondo/ignore
    (#?(:clj let :cljs p/let) [res prr]
      res)))

;;;; test proper

(deftest executor-shutdown-test
  (testing "failure: task validation fails"
    (let [mstore   (store/make-store {})
          executor (w/start-poller! mstore {:protocols  {`MyActivities (->MyActivitiesImpl)}
                                            :polling-ms 10})]

      (testing "shutdown of ongoing workflow"
        ;; give it some time so the poller can pick it up but just once
        (p/then (p/delay 100)
                (fn [] (w/shutdown executor 100)))

        (with-result [res (w/with-env {:store mstore}
                            (my-workflow :ok))]
          (is (instance? #?(:clj Exception :cljs p/TimeoutException) res))
          #?(:clj (is (= "Operation timed out." (ex-message res))))

          (testing "Workflow is not in failed state"
            (tu/print-tables mstore)

            (testing "workflow task"
              (let [[w1] (store/list-tasks mstore)]
                (is (match? {:type :workflow :sym 'intemporal.shutdown-test/my-workflow- :state :pending} w1))))

            (testing "workflow events"
              (let [[e1 e2 e3] (store/list-events mstore)]
                (is (match? {:type :intemporal.workflow/invoke :sym 'intemporal.shutdown-test/my-workflow-} e1))
                (is (match? {:type :intemporal.protocol/invoke :sym 'intemporal.shutdown-test/foo} e2))
                (is (nil? e3))))

            (testing "workflow resumes"
              (let [executor (w/start-poller! mstore {:protocols  {`MyActivities (->MyActivitiesImpl)}
                                                      :polling-ms 10})]
                (store/reenqueue-pending-tasks mstore (constantly nil))
                (with-result [_ #?(:clj (Thread/sleep 2000)
                                   :cljs (p/delay 2000))]

                  (tu/print-tables mstore)

                  (testing "workflow succeeded"
                    (let [[w1] (store/list-tasks mstore)]
                      (is (match? {:type :workflow :sym 'intemporal.shutdown-test/my-workflow- :state :success} w1))))

                  (w/shutdown executor 0))))))))))

;(cljs.test/run-tests *ns*)