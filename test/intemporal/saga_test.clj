(ns intemporal.saga-test
  (:require [clojure.test :refer [deftest is testing use-fixtures]]
            [intemporal.store :as store]
            [intemporal.store.foundationdb :as fdb]
            [intemporal.store.jdbc :as jdbc]
            [intemporal.workflow :as w]
            [intemporal.macros :as macros :refer [stub-protocol defn-workflow with-failure]]
            [intemporal.test-utils :as tu]
            [spy.core :as spy]
            [spy.protocol :as pspy]))

(use-fixtures :once tu/with-trace-logging)

(defprotocol ProtocolActivity
  (some-io [this val])
  (some-failing-io [this val])
  (finalize [this val])
  (compensate [this val]))

(def example-impl
  (reify
    ProtocolActivity
    (some-io [_ val] val)
    (some-failing-io [_ val] (throw (RuntimeException. "forced")))
    (finalize [_ val] val)
    (compensate [_ val] {:compensate val})))

;;;;
;; workflow registration

(defn-workflow run-workflow []
  (let [stub (stub-protocol ProtocolActivity)]
    (try
      (let [v  (with-failure [r (some-io stub "initial")]
                 (compensate stub r))
            v2 (with-failure [r (some-failing-io stub v)]
                 (compensate stub r))
            v3 (finalize stub v2)]
        v3)
      (catch Exception e
        (w/compensate)
        ::failed))))

(def stores {:memory   (store/make-store)
             :fdb      (fdb/make-store)
             :postgres (jdbc/make-store {:jdbcUrl       "jdbc:postgresql://localhost:5432/root?user=root&password=root"
                                         :migration-dir "migrations/postgres"})})

(deftest saga-test
  (doseq [[label store] stores]
    (testing (format "store: %s" label)

      (testing "running a workflow"
        (store/clear-events store)
        (store/clear-tasks store)

        (let [spied-impl    (pspy/spy ProtocolActivity example-impl)
              cancel-worker (w/start-worker! store {:protocols {`ProtocolActivity spied-impl}})]
          (try
            (testing "workflow run"
              (is (= ::failed (w/with-env {:store store}
                                (run-workflow)))))

            (testing "protocol calls"
              (let [{:keys [some-io some-failing-io finalize compensate]} (meta spied-impl)]
                (is (spy/called-once-with? some-io spied-impl "initial"))
                (is (spy/called-once-with? some-failing-io spied-impl "initial"))
                (is (not (spy/called-once? finalize)))

                (testing "compensation calls in reverse order"
                  (let [calls (spy/calls compensate)]
                    (is (= [[spied-impl :intemporal.activity/failure]
                            [spied-impl "initial"]]
                           calls))))))

            (finally
              (cancel-worker))))))))


(comment
  (require '[clj-async-profiler.core :as prof])
  (prof/serve-ui 8080)
  (let [s (store/make-store)]
    (w/start-worker! s {:protocols {`ProtocolActivity example-impl}})
    (prof/profile
      (w/with-env {:store s}
                  (run-workflow))))
  "")