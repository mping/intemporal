(ns ^:integration ^:fdb ^:sql intemporal.stores.basic-workflow-test
  (:require [clojure.test :as t :refer [deftest is testing]]
            [intemporal.store :as store]
            [intemporal.store.foundationdb :as fdb]
            [intemporal.store.jdbc :as jdbc]
            [intemporal.workflow :as w]
            [intemporal.macros :as macros :refer [stub-protocol defn-workflow]]
            [intemporal.test-utils :as tu]))

(t/use-fixtures :once tu/with-trace-logging)

(defprotocol ProtocolActivity
  (some-io [this val]))

(def example-impl
  (reify
    ProtocolActivity
    (some-io [_ val] val)))

;;;;
;; workflow registration

(defn-workflow run-workflow []
  (let [stub (stub-protocol ProtocolActivity)]
    (some-io stub :ok)))

(def stores (delay {:memory   (store/make-store)
                    :fdb      (fdb/make-store {:cluster-file-path "docker/fdb.cluster"})
                    :postgres (jdbc/make-store {:jdbcUrl       "jdbc:postgresql://localhost:5432/root?user=root&password=root"
                                                :migration-dir "migrations/postgres"
                                                :polling-ms 10})}))

(deftest basic-workflow-test
  (doseq [[label store] @stores]
    (testing (format "store: %s" label)

      (testing "running a workflow"
        (store/clear-events store)
        (store/clear-tasks store)

        (let [ex (w/start-poller! store {:protocols {`ProtocolActivity example-impl}
                                         :polling-ms 10})]
          (try
            (is (= :ok (w/with-env {:store store}
                         (run-workflow))))
            (finally
              (w/shutdown ex 0))))))))
