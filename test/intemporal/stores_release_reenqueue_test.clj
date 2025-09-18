(ns ^:integration ^:fdb ^:sql intemporal.stores-release-reenqueue-test
  (:require [clojure.test :refer [deftest is testing use-fixtures]]
            [intemporal.store :as store]
            [intemporal.store.foundationdb :as fdb]
            [intemporal.store.jdbc :as jdbc]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-protocol defn-workflow]]
            [intemporal.test-utils :as tu :refer [with-result]])
  (:import (java.util.concurrent CountDownLatch)))

(use-fixtures :once tu/with-trace-logging)

(def stores (delay {:memory   (store/make-store)
                    :fdb      (fdb/make-store {:cluster-file-path "docker/fdb.cluster"})
                    :postgres (jdbc/make-store {:jdbcUrl       "jdbc:postgresql://localhost:5432/root?user=root&password=root"
                                                :migration-dir "migrations/postgres"})}))

(def activity-invoked? (CountDownLatch. 1))
(def executor-shutdown? (CountDownLatch. 1))

(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a]
    (.countDown activity-invoked?)
    (.await executor-shutdown?)
    :foo))

(defn-workflow my-workflow [k]
  (let [stub (stub-protocol MyActivities {})
        prr  (foo stub :pr)]
    prr))

;;;; test proper

(deftest executor-shutdown-test
  (doseq [[label store] @stores]

    (store/clear-events store)
    (store/clear-tasks store)

    (testing (format "store: %s" label)
      (let [executor (w/start-poller! store {:protocols  {`MyActivities (->MyActivitiesImpl)}
                                             :polling-ms 500})]

        (testing "shutdown of ongoing workflow"
          ;; give it some time so the poller can pick it up but just once
          (future
            ;; ensure activity is inflight
            (.await activity-invoked?)
            (w/shutdown executor 0)
            ;; proceed activity, it will fail
            (.countDown executor-shutdown?)
            (is (not (w/running? executor))))

          (with-result [res (w/with-env {:store store}
                              (my-workflow :ok))]

            (is (instance? Exception res))))

        (testing "Tasks are pending"
          (let [[task] (store/list-tasks store)]
            (is (= :pending (:state task)))))

        (testing "Tasks are released"
          (store/release-pending-tasks store)
          (let [[task] (store/list-tasks store)]
            (is (nil? (:owner task)))))

        (testing "Tasks are reenqueued"
          (store/reenqueue-pending-tasks store prn)
          (let [[task] (store/list-tasks store)]
            (is (= store/default-owner (:owner task)))
            (is (= :new (:state task)))))))))
