(ns ^:integration ^:fdb ^:sql intemporal.stores.lots-of-workflows-test
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.store :as store]
            [intemporal.store.foundationdb :as fdb]
            [intemporal.store.jdbc :as jdbc]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-protocol defn-workflow]]
            [intemporal.test-utils :as tu :refer [wait]]
            [promesa.core :as p])
  (:import (java.util.concurrent CountDownLatch)))

(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a]
    (Thread/sleep (long (rand-int 100)))
    [:proto a]))

(defn-workflow my-workflow []
  (let [pr  (stub-protocol MyActivities {})
        prr (foo pr :pr)]
    prr))

(def stores (delay {:memory   (store/make-store)
                    :fdb      (fdb/make-store {:cluster-file-path "docker/fdb.cluster"})
                    :postgres (jdbc/make-store {:jdbcUrl       "jdbc:postgresql://localhost:5432/root?user=root&password=root"
                                                :migration-dir "migrations/postgres"})}))


(def iterations 100)
(def latch (CountDownLatch. iterations))

(deftest stores-test
  (doseq [[label store] @stores]
    (testing (format "store: %s" label)

      (testing "clear"
        (store/clear-events store)
        (store/clear-tasks store))

      (testing "multiple iterations"
        (w/with-env {:store store}
          (dotimes [_ iterations]
            ;; workflows are blocking, we wrap in a virtual thread
            (p/vthread
              (my-workflow))))

        ;; check that all tasks are enqueued
        (with-redefs [tu/wait-default-timeout 60000]
          (wait (= iterations (count (store/list-tasks store)))
                (let [wflows (store/list-tasks store)]
                  (testing "workflows are all new"
                    (is (= iterations (count wflows)))
                    (is (= #{:new} (set (map :state wflows)))))))))

      (testing "enqueue all jobs"
        (let [ex (w/start-poller! store {:protocols {`MyActivities (->MyActivitiesImpl)}})]
          ;; lets wait for all pending
          (try
            (wait (not (contains? (into #{} (map :state (store/list-tasks store))) :new))
              (w/shutdown ex 5000))

            (testing "workflows are all completed"
              (let [wflows (store/list-tasks store)]
                (is (= iterations (count wflows)))
                (is (= #{:success} (set (map :state wflows))))))
            (finally
              (w/shutdown ex 0))))))))
