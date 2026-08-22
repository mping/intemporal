(ns intemporal.tests.store.value-fidelity-test
  "Bug #22 / §3 — JSON round-trip silently loses keyword *values* in JDBC and
  FDB stores. cheshire's `(parse-string s true)` keywordizes map *keys* but
  not values: the canonical activity result `[:processed 5]` is read back as
  `[\"processed\" 5]`, and `{:status :active}` becomes `{:status \"active\"}`.
  Signal payloads stored via `add-signal` and retrieved via `consume-signal`
  suffer the same loss.
  A workflow branching on a keyword value (`=`, `case`, keyword lookup) behaves
  differently after resume on JDBC/FDB than on InMemory — a silent
  replay-determinism break whose store dependency is invisible to the caller.
  REGRESSION GUARD: after a workflow completes, the `:result` fields of every
  `:activity-completed` event and the `:workflow-completed` event in the
  persisted history must carry keyword values exactly as returned by the
  activity/workflow fn — on all three stores.  Signal payloads consumed via
  `p/consume-signal` must likewise preserve keyword values."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.store.fdb :as fdb-store]
   [intemporal.store.jdbc :as jdbc-store]
   [me.vedang.clj-fdb.FDB :as cfdb]
   [next.jdbc :as jdbc]))

;; ---------------------------------------------------------------------------
;; Workflow fixtures
;; ---------------------------------------------------------------------------

(defn- kw-vec-activity
  "Returns a vector whose first and last elements are keywords, as in the
  canonical library example `[:processed 5]`."
  [n]
  [:processed n :done])

(defn- kw-map-activity
  "Returns a map whose values are keywords."
  [n]
  {:status :active :value n :kind :result})

(defn- kw-workflow [n]
  (let [vec-act (intemporal/stub #'kw-vec-activity)
        map-act (intemporal/stub #'kw-map-activity)]
    {:vec-result    (vec-act n)
     :map-result    (map-act n)
     :workflow-kind :completed}))

;; ---------------------------------------------------------------------------
;; Shared assertions (run against every store implementation)
;; ---------------------------------------------------------------------------

(defn run-value-fidelity-test [store]

  ;; 1. Signal payload round-trip at the store level.
  ;; `send-signal` wraps the caller's payload in {:id <uuid> :payload <data>}
  ;; before calling `p/add-signal`; mirror that wrapper here so the test
  ;; exercises the same byte path.
  (testing "signal payload preserves keyword values through store round-trip"
    (let [wf-id   (str "vf-sig-" (random-uuid))
          payload {:type :confirmed :status :ok}
          wrapped {:id "test-signal-id" :payload payload}]
      (p/add-signal store wf-id "approval" wrapped)
      (let [consumed (p/consume-signal store wf-id "approval")]
        (is (some? consumed)
            "consume-signal returned a value")
        (let [returned-payload (:payload consumed)]
          (is (keyword? (:type returned-payload))
              (str ":type should be a keyword after store round-trip, got: "
                   (pr-str (:type returned-payload))))
          (is (= :confirmed (:type returned-payload))
              ":type value is :confirmed, not \"confirmed\"")
          (is (keyword? (:status returned-payload))
              (str ":status should be a keyword after store round-trip, got: "
                   (pr-str (:status returned-payload))))
          (is (= :ok (:status returned-payload))
              ":status value is :ok, not \"ok\"")))))

  ;; 2. Activity result and workflow result round-trip through persisted history.
  (testing "activity and workflow results preserve keyword values in persisted history"
    (let [wf-id (str "vf-wf-" (random-uuid))]
      (intemporal/with-workflow-engine [engine {:store store :threads 2}]
        (let [result (intemporal/start-workflow engine kw-workflow [5]
                       :workflow-id wf-id)]
          (is (= :completed (:status result))
              "workflow completed successfully")))

      (let [history        (p/load-history store wf-id)
            events-by-type (group-by :event-type history)
            completed-acts (get events-by-type :activity-completed)]

        (testing ":activity-completed :result preserves keywords in a vector"
          (let [ev     (first (filter #(= "intemporal.tests.store.value-fidelity-test/kw-vec-activity"
                                          (:activity-name %))
                                      completed-acts))
                result (:result ev)]
            (is (some? ev)
                "kw-vec-activity :activity-completed event found in history")
            (is (keyword? (first result))
                (str "first element of vector result should be a keyword, got: "
                     (pr-str (first result))))
            (is (= :processed (first result))
                "first element is :processed, not \"processed\"")
            (is (keyword? (last result))
                (str "last element of vector result should be a keyword, got: "
                     (pr-str (last result))))
            (is (= :done (last result))
                "last element is :done, not \"done\"")))

        (testing ":activity-completed :result preserves keywords in a map"
          (let [ev     (first (filter #(= "intemporal.tests.store.value-fidelity-test/kw-map-activity"
                                          (:activity-name %))
                                      completed-acts))
                result (:result ev)]
            (is (some? ev)
                "kw-map-activity :activity-completed event found in history")
            (is (keyword? (:status result))
                (str ":status should be a keyword after store round-trip, got: "
                     (pr-str (:status result))))
            (is (= :active (:status result))
                ":status value is :active, not \"active\"")
            (is (keyword? (:kind result))
                (str ":kind should be a keyword after store round-trip, got: "
                     (pr-str (:kind result))))
            (is (= :result (:kind result))
                ":kind value is :result, not \"result\"")))

        (testing ":workflow-completed :result preserves keyword values"
          (let [ev     (first (get events-by-type :workflow-completed))
                result (:result ev)]
            (is (some? ev)
                ":workflow-completed event found in history")
            (is (keyword? (:workflow-kind result))
                (str ":workflow-kind should be a keyword, got: "
                     (pr-str (:workflow-kind result))))
            (is (= :completed (:workflow-kind result))
                ":workflow-kind is :completed, not \"completed\"")
            (is (keyword? (first (:vec-result result)))
                "nested keyword in :vec-result preserved through workflow result")
            (is (= :processed (first (:vec-result result)))
                "first element of nested :vec-result is :processed, not \"processed\"")
            (is (= :active (:status (:map-result result)))
                "nested :status in :map-result is :active, not \"active\"")))))))

;; ---------------------------------------------------------------------------
;; Per-store test entries
;; ---------------------------------------------------------------------------

(deftest value-fidelity-in-memory
  (testing "InMemoryStore: keyword values survive the store round-trip"
    (run-value-fidelity-test (store/create-store))))

(def ^:private db-spec
  (jdbc-store/resolve-jdbc-url
    "jdbc:postgresql://localhost:5432/intemporal_test?user=root&password=root"))

(def ^:private admin-spec
  "jdbc:postgresql://localhost:5432/postgres?user=root&password=root")

(defn- ensure-database! []
  (let [ds (jdbc/get-datasource admin-spec)]
    (when-not (seq (jdbc/execute! ds ["SELECT 1 FROM pg_database WHERE datname = 'intemporal_test'"]))
      (with-open [conn (.getConnection ds)]
        (.execute (.createStatement conn) "CREATE DATABASE intemporal_test")))))

(deftest ^:integration value-fidelity-jdbc
  (testing "JdbcStore: keyword values survive JSON serialization round-trip"
    (ensure-database!)
    (with-open [store (jdbc-store/create-store db-spec)]
      (run-value-fidelity-test store))))

(deftest ^:integration value-fidelity-fdb
  (testing "FDBStore: keyword values survive JSON serialization round-trip"
    (let [db (cfdb/select-api-version 710)
          db (cfdb/open db "docker/fdb.cluster")]
      (with-open [store (fdb-store/create-store db "intemporal-tests")]
        (run-value-fidelity-test store)))))
