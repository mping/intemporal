(ns intemporal.stores-release-reenqueue-test
  (:require [clojure.test :refer [deftest is testing use-fixtures]]
            [intemporal.store :as store]
            [intemporal.store.foundationdb :as fdb]
            [intemporal.store.jdbc :as jdbc]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-protocol defn-workflow]]
            [intemporal.test-utils :as tu :refer [with-result]]))

(use-fixtures :once tu/with-trace-logging)

(def stores {:memory   (store/make-store)
             :fdb      (fdb/make-store {:cluster-file-path "docker/fdb.cluster"})
             :postgres (jdbc/make-store {:jdbcUrl       "jdbc:postgresql://localhost:5432/root?user=root&password=root"
                                         :migration-dir "migrations/postgres"})})

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
  (doseq [[label store] stores]

    (store/clear-events store)
    (store/clear-tasks store)

    (testing (format "store: %s" label)
      (let [executor (w/start-poller! store {:protocols  {`MyActivities (->MyActivitiesImpl)}
                                             :polling-ms 10})]

        (testing "shutdown of ongoing workflow"
          ;; give it some time so the poller can pick it up but just once
          (future
            (Thread/sleep 500)
            (w/shutdown executor 0))

          (with-result [res (w/with-env {:store store}
                              (my-workflow :ok))]

            (prn res)
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
