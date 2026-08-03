(ns intemporal.tests.store.signal-double-fire-test
  "Bug #13 — JdbcStore/FDBStore add-signal fired the registered signal callback
  WITHOUT removing it first (InMemoryStore already removed it atomically).
  With two rapid signals at the same wait point, both futures fire the
  still-registered callback; each consumes one signal and both write a
  :signal-received event at the same seq — one signal silently vanishes.
  REGRESSION GUARD: two rapid signals → the callback fires exactly once, one
  signal is consumed, and the second stays pending for the next wait."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]
            [next.jdbc :as jdbc]))

(defn check-callback-fires-once
  "Store-agnostic repro: register an engine-like callback (consumes one pending
  signal per invocation), then add two signals rapidly at the same wait point.
  The store must remove the callback atomically BEFORE firing it, so the second
  add-signal finds no registered callback."
  [store]
  (let [wf-id    (str "sig-double-" (random-uuid))
        sig      "approval"
        invoked  (atom 0)
        consumed (atom [])]
    (p/register-signal-callback store wf-id sig
                                (fn []
                                  (swap! invoked inc)
                                  (when-let [v (p/consume-signal store wf-id sig)]
                                    (swap! consumed conj v))))
    ;; two rapid signals against the same registered wait
    (p/add-signal store wf-id sig {:n 1})
    (p/add-signal store wf-id sig {:n 2})
    ;; callbacks fire in a future — wait for the first fire, plus a grace
    ;; period during which a buggy second fire would also happen
    (let [deadline (+ (System/currentTimeMillis) 3000)]
      (while (and (zero? @invoked)
                  (< (System/currentTimeMillis) deadline))
        (Thread/sleep 10)))
    (Thread/sleep 300)
    (is (= 1 @invoked)
        "callback fires exactly once for two rapid signals")
    (is (= 1 (count @consumed))
        "the callback consumes exactly one signal")
    (is (= 1 (count (get (p/get-pending-signals store wf-id) sig)))
        "the second signal stays pending for the next wait")))

(deftest signal-double-fire-in-memory
  (testing "InMemoryStore: callback fires once (parity reference)"
    (check-callback-fires-once (store/->InMemoryStore (atom {})))))

;; --- JDBC (mirrors jdbc_test.clj setup) ---

(def db-spec (jdbc-store/resolve-jdbc-url "jdbc:postgresql://localhost:5432/intemporal_test?user=root&password=root"))

(def admin-spec "jdbc:postgresql://localhost:5432/postgres?user=root&password=root")

(defn ensure-database! []
  (let [ds (jdbc/get-datasource admin-spec)]
    (when-not (seq (jdbc/execute! ds ["SELECT 1 FROM pg_database WHERE datname = 'intemporal_test'"]))
      (with-open [conn (.getConnection ds)]
        (.execute (.createStatement conn) "CREATE DATABASE intemporal_test")))))

(deftest ^:integration signal-double-fire-jdbc
  (testing "JdbcStore: callback fires once for two rapid signals"
    (ensure-database!)
    (with-open [store (jdbc-store/make-jdbc-store db-spec)]
      (check-callback-fires-once store))))

;; --- FDB (mirrors fdb_test.clj setup) ---

(deftest ^:integration signal-double-fire-fdb
  (testing "FDBStore: callback fires once for two rapid signals"
    (let [db (cfdb/select-api-version 710)
          db (cfdb/open db "docker/fdb.cluster")]
      (with-open [store (fdb-store/make-fdb-store db "intemporal-tests")]
        (check-callback-fires-once store)))))
