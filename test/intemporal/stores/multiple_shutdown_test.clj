(ns intemporal.stores.multiple-shutdown-test
  (:require [clojure.test :as t :refer [deftest is testing]]
            [intemporal.store :as store]
            [intemporal.store.foundationdb :as fdb]
            [intemporal.store.jdbc :as jdbc]
            [intemporal.workflow :as w]
            [matcher-combinators.test :refer [match?]]
            [intemporal.macros :refer [stub-protocol defn-workflow]]
            [intemporal.test-utils :as tu :refer [with-result]]))

(t/use-fixtures :once tu/with-trace-logging)

(def stores (delay {:memory   (store/make-store)
                    :fdb      (fdb/make-store {:cluster-file-path "docker/fdb.cluster"})
                    :postgres (jdbc/make-store {:jdbcUrl       "jdbc:postgresql://localhost:5432/root?user=root&password=root"
                                                :migration-dir "migrations/postgres"})}))

(defprotocol MyActivities
  (sleep [this time]))

(defrecord MyActivitiesImpl []
  MyActivities
  (sleep [this a]
    (Thread/sleep (long a))))

(defn-workflow my-workflow [steps max-sleep]
  (let [stub (stub-protocol MyActivities {})]
    (dotimes [_ steps]
      (sleep stub (rand-int max-sleep)))
    :done))

;;;; test proper

(deftest executor-shutdown-test
  (testing "workflow eventually finishes"
    (let [store       (store/make-store {})
          polling-ms  100
          executor    (w/start-poller! store {:protocols  {`MyActivities (->MyActivitiesImpl)}
                                              :polling-ms polling-ms})
          steps       3
          max-timeout 500
          max-wait    (+ 1000 ;; leeway
                         (* steps polling-ms)
                         (* steps max-timeout))
          future-res  (future
                        (w/with-env {:store store}
                          (my-workflow steps max-timeout)))]

      (testing "shutdown of ongoing workflow"
        (let [start (System/currentTimeMillis)]
          (loop [ex executor]
            (store/reenqueue-pending-tasks store #(println "XXX" %))

            (cond
              (future-done? future-res)
              (do
                (is (= :done (deref future-res)))
                (w/shutdown ex 0)
                (tu/print-tables store))

              (> (- (System/currentTimeMillis) start) max-wait)
              (do
                (future-cancel future-res)
                (w/shutdown ex 0)
                (tu/print-tables store)
                (throw (ex-info "Timeout done, future not finished" {:timeout max-wait})))

              :else
              (do
                ;; give a step a chance to finish
                (w/shutdown ex max-wait)
                (recur (w/start-poller! store {:protocols  {`MyActivities (->MyActivitiesImpl)}
                                               :polling-ms 100}))))))))))


