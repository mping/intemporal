(ns intemporal.tests.child-workflow-util
  "Shared harness for independent-child workflow tests.

   These tests drive everything through an engine ownership scan: the parent is
   submitted with `submit-workflow` and the engine runs it plus every descendant
   child. Each `check-*` is store-agnostic and run
   against InMemory (always) plus JDBC and FDB (^:integration)."
  (:require
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.store.fdb :as fdb-store]
   [intemporal.store.jdbc :as jdbc-store]
   [me.vedang.clj-fdb.FDB :as cfdb]))

(defn await-status
  "Poll `wf-id`'s status until it equals `target` (or the timeout elapses); returns
   the last status seen. Use for NON-terminal waits (e.g. :running) — for terminal
   states prefer intemporal/await-workflow."
  [store wf-id target timeout-ms]
  (let [deadline (+ (System/currentTimeMillis) timeout-ms)]
    (loop []
      (let [s (p/get-workflow-status store wf-id)]
        (cond
          (= target s) s
          (> (System/currentTimeMillis) deadline) s
          :else (do (Thread/sleep 25) (recur)))))))

(defn with-engine
  "Run `body-fn` (1-arg: the engine) with an engine driving `store`; tear it
   down afterwards. Returns body-fn's value. The captured `store`
   (= (:store engine)) is still used for point reads / signals in the body."
  [store body-fn]
  (let [engine (intemporal/start-engine
                 :store store :threads 4 :poll-ms 25
                 :owner-id (str "w-" (random-uuid)))]
    (try (body-fn engine)
         (finally (intemporal/shutdown-engine engine)))))

;; ── store fixtures ──────────────────────────────────────────────────────────────

(defn in-memory [] (store/create-store))

(defn jdbc []
  (jdbc-store/create-store (jdbc-store/resolve-jdbc-url)))

(defn fdb []
  (let [fdb-api (cfdb/select-api-version 710)
        db      (.open fdb-api "docker/fdb.cluster")]
    (fdb-store/create-store db (str "child-" (random-uuid)))))
