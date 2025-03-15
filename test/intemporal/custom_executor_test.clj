(ns intemporal.custom-executor-test
  (:require [clojure.test :refer [deftest is testing use-fixtures]]
            [intemporal.store :as store]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-protocol defn-workflow]]
            [intemporal.test-utils :as tu :refer [with-result]])
  (:import [java.util.concurrent Executors ThreadFactory]))

(use-fixtures :once tu/with-trace-logging)

(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a]
    [:thread-name (.getName (Thread/currentThread))
     :value a]))

(defn-workflow my-workflow [k]
  (let [stub (stub-protocol MyActivities {})
        prr  (foo stub k)]
    prr))

(deftest custom-executor-poller-test
  (testing "Using a custom executor with start-poller!"
    (let [mstore         (store/make-store)
          thread-factory (reify ThreadFactory
                           (newThread [_ r]
                             (let [t (Thread. r)]
                               (.setName t "custom-poller")
                               t)))
          task-executor  (Executors/newFixedThreadPool 4 thread-factory)
          shutdown       (w/start-poller! mstore task-executor {:protocols {`MyActivities (->MyActivitiesImpl)}})]

      (with-result [res (w/with-env {:store mstore}
                          (my-workflow :poller-test))]

        (testing "Result contains custom thread name"
          (is (= [:thread-name "custom-poller"
                  :value :poller-test]
                 res)))

        (shutdown)))))