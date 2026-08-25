(ns intemporal.tests.jepsen.bug-2-1-test
  "A signal racing the FSM's park transition must advance wake-version and force
   the in-flight drive to replay rather than lose the signal."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.store :as mem]
   [intemporal.store.fdb :as fdb-store]
   [intemporal.store.jdbc :as jdbc-store]
   [intemporal.tests.jepsen.racing-store :refer [->ParkRacingStore]]
   [me.vedang.clj-fdb.FDB :as cfdb]))

(defn- wait-signal-workflow []
  (intemporal/wait-for-signal "go")
  :woke)

(defn- run-scenario [inner]
  (let [raced? (atom false)
        workflow-store (->ParkRacingStore inner raced? "go"
                                           {:signal-id "in-window" :payload :arrived})
        workflow-id (str "bug21-" (random-uuid))
        engine (intemporal/start-engine :store workflow-store :threads 2
                                        :owner-id (str "bug21-engine-" (random-uuid)))]
    (try
      {:result (intemporal/start-workflow engine wait-signal-workflow []
                                          :workflow-id workflow-id)
       :raced? @raced?
       :status (p/get-workflow-status inner workflow-id)
       :signals (:signals (p/load-workflow-state inner workflow-id))}
      (finally
        (intemporal/shutdown-engine engine)))))

(defn- assert-woke [{:keys [result raced? status signals]}]
  (is (= :completed (:status result)))
  (is (= :woke (:result result)))
  (is raced? "the signal was injected between snapshot and stale park")
  (is (= :completed status))
  (is (empty? (get signals "go"))))

(deftest signal-delivered-in-park-race-in-memory
  (testing "the stale FSM park is rejected and replay consumes the signal"
    (assert-woke (run-scenario (mem/create-store)))))

(deftest ^:integration signal-delivered-in-park-race-jdbc
  (testing "JdbcStore preserves the wake-version race invariant"
    (with-open [inner (jdbc-store/create-store (jdbc-store/resolve-jdbc-url))]
      (assert-woke (run-scenario inner)))))

(deftest ^:integration signal-delivered-in-park-race-fdb
  (testing "FDBStore preserves the wake-version race invariant"
    (let [api (cfdb/select-api-version 710)
          db (.open api "docker/fdb.cluster")]
      (with-open [inner (fdb-store/create-store db (str "bug21-" (random-uuid)))]
        (assert-woke (run-scenario inner))))))
