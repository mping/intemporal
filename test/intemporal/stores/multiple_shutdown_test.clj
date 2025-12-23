(ns intemporal.stores.multiple-shutdown-test
  (:require [clojure.test :as t :refer [deftest is testing]]
            [intemporal.store :as store]
            [intemporal.store.foundationdb :as fdb]
            [intemporal.store.jdbc :as jdbc]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-protocol defn-workflow]]
            [intemporal.test-utils :as tu]
            [matcher-combinators.test :refer [match?]]
            [matcher-combinators.matchers :as m]))

(t/use-fixtures :once tu/with-trace-logging)

(def stores (delay {:memory   (store/make-store)
                    :fdb      (fdb/make-store {:cluster-file-path "docker/fdb.cluster"})
                    :postgres (jdbc/make-store {:jdbcUrl       "jdbc:postgresql://localhost:5432/root?user=root&password=root"
                                                :migration-dir "migrations/postgres"})}))

(def activity-counter (atom 0))

(defprotocol MyActivities
  (sleep [this time]))

(defrecord MyActivitiesImpl []
  MyActivities
  (sleep [this a]
    (swap! activity-counter inc)
    (Thread/sleep (long a))))

(defn-workflow my-workflow [steps max-sleep]
  (let [stub (stub-protocol MyActivities {})]
    (dotimes [i steps]
      (sleep stub max-sleep))
    :done))

;;;; test proper

(deftest executor-shutdown-test
  (testing "workflow eventually finishes"
    (let [store          (store/make-store {})
          polling-ms     500
          make-poller    (fn [] (w/start-poller! store {:protocols  {`MyActivities (->MyActivitiesImpl)}
                                                        :polling-ms polling-ms}))
          executor       (atom (make-poller))

          steps          2
          max-timeout    500

          workflow-id    "f100ded0-0000-4000-a000-000000000000"
          future-res     (future
                           (w/with-env {:store store
                                        :id    workflow-id}
                                       (my-workflow steps max-timeout)))
          reenqueued     (atom [])]

      (testing "shutdown of ongoing workflow"
        (add-watch activity-counter ::watch (fn [_ _ _ v]
                                              (when (and (zero? (mod v 2))
                                                         (empty? @reenqueued))
                                                (w/shutdown @executor max-timeout)
                                                (store/reenqueue-pending-tasks store #(swap! reenqueued conj %))
                                                (reset! executor (make-poller)))))
        (try
          (is (= :done (deref future-res 10000 ::error)))

          (finally
            (testing "workflow was re-enqueued"
              (is (match? (m/embeds [{:type :workflow :sym 'intemporal.stores.multiple-shutdown-test/my-workflow-}])
                          @reenqueued)))
            (w/shutdown @executor 0)
            (tu/print-tables store)))))))
