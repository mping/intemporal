(ns ^:integration ^:fdb ^:sql intemporal.stores.release-reenqueue-test
  (:require [clojure.test :as t :refer [deftest is testing]]
            [intemporal.store :as store]
            [intemporal.store.foundationdb :as fdb]
            [intemporal.store.jdbc :as jdbc]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-protocol defn-workflow]]
            [intemporal.test-utils :as tu :refer [with-result]])
  (:import (java.util.concurrent Phaser)))

(t/use-fixtures :once tu/with-trace-logging)

(def stores (delay {:memory   (store/make-store)
                    :fdb      (fdb/make-store {:cluster-file-path "docker/fdb.cluster"})
                    :postgres (jdbc/make-store {:jdbcUrl       "jdbc:postgresql://localhost:5432/root?user=root&password=root"
                                                :migration-dir "migrations/postgres"})}))

(def activity-invoked? (Phaser. 1))
(def executor-shutdown? (Phaser. 1))

(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a]
    (.arrive activity-invoked?)
    (.awaitAdvance executor-shutdown? (.getPhase executor-shutdown?))
    :foo))

(defn-workflow my-workflow [k]
  (let [stub (stub-protocol MyActivities {})
        prr  (foo stub :pr)]
    prr))

;;;; test proper

(deftest release-reenqueue-test
  (doseq [[label store] @stores]

    (store/clear-events store)
    (store/clear-tasks store)

    (testing (format "store: %s" label)
      (let [executor (w/start-poller! store {:protocols  {`MyActivities (->MyActivitiesImpl)}
                                             :polling-ms 100})]

        (testing "shutdown of ongoing workflow"
          ;; give it some time so the poller can pick it up but just once
          (let [fut (future
                      ;; ensure activity is inflight
                      (.awaitAdvance activity-invoked? (.getPhase activity-invoked?))
                      (w/shutdown executor 0)
                      ;; proceed activity, it will fail
                      (.arrive executor-shutdown?)
                      :done)]

            (with-result [res (w/with-env {:store store}
                                (my-workflow :ok))]

              (is (instance? Exception res)))

            (is (= :done (deref fut 1000 ::error)))))

        (testing "Tasks are pending"
          (let [[task] (store/list-tasks store)]
            (tu/print-tables store)
            (is (= :pending (:state task)))))

        (testing "Tasks are released"
          (store/release-pending-tasks store)
          (let [[task] (store/list-tasks store)]
            (is (nil? (:owner task)))))

        (testing "Tasks are reenqueued"
          (store/reenqueue-pending-tasks store (constantly nil))
          (let [[task] (store/list-tasks store)]
            (is (= store/default-owner (:owner task)))
            (is (= :new (:state task)))))))))
