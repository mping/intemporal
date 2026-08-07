(ns intemporal.tests.status-test
  "Phase B2 — get-workflow-status reflects lifecycle via the cached status
  column/key (O(1) for terminal states), across InMemory + JDBC + FDB."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]))

(defn dbl [x] (* x 2))
(intemporal/defn-workflow done-wf [x] (let [a (intemporal/stub #'dbl)] (a x)))
(defn sleep-wf [] (intemporal/wait-for-signal "go"))

(defn- check-status [store]
  ;; unknown id
  (is (= :not-found (p/get-workflow-status store (str (random-uuid)))))
  ;; completed (terminal -> cached fast path) — submitted + run by a worker
  (let [e (intemporal/make-workflow-engine :store store :threads 2)]
    (try
      (let [stop (intemporal/start-worker e :poll-ms 25)]
        (try
          (let [{:keys [workflow-id]} (intemporal/submit-workflow e #'done-wf [21])]
            (is (= {:status :completed :result 42}
                   (intemporal/await-workflow e workflow-id :timeout-ms 5000)))
            (is (= :completed (p/get-workflow-status store workflow-id))))
          ;; stop the worker before the start-workflow section below, so it does
          ;; not race the blocking-loop-driven sleep-wf on the same store.
          (finally (stop))))
      ;; A cancelled workflow is first-class: finalize-cancelled writes a
      ;; :workflow-cancelled terminal event, so the derived status is :cancelled
      ;; both during the mark-cancelled window and after finalization.
      (let [wid (str "cancel-" (random-uuid))
            f   (future (intemporal/start-workflow e sleep-wf [] :workflow-id wid))]
        (Thread/sleep 300)
        (intemporal/cancel-workflow store wid)
        @f
        (is (= :cancelled (p/get-workflow-status store wid))))
      (finally (intemporal/shutdown-engine e)))))

(deftest status-in-memory
  (testing "status lifecycle on InMemoryStore"
    (check-status (store/create-store))))

(deftest ^:integration status-jdbc
  (testing "status lifecycle on JdbcStore"
    (let [url   (jdbc-store/resolve-jdbc-url)
          store (jdbc-store/create-store url)]
      (try (check-status store) (finally (.close store))))))

(deftest ^:integration status-fdb
  (testing "status lifecycle on FDBStore"
    (let [root  (str "status-" (random-uuid))
          fdb   (cfdb/select-api-version 710)
          db    (.open fdb "docker/fdb.cluster")
          store (fdb-store/create-store db root)]
      (check-status store))))
