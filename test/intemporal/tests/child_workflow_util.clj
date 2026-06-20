(ns intemporal.tests.child-workflow-util
  "Shared harness for the worker-driven Tier 2 (independent child workflow) tests.

   These tests drive everything through the recovery worker (the ownership scan):
   the parent is submitted with `submit-workflow` (not started via start-workflow's
   blocking loop, which would race the worker on the same workflow) and the worker
   runs it plus every descendant child. Each `check-*` is store-agnostic and run
   against InMemory (always) plus JDBC and FDB (^:integration)."
  (:require [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
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

(defn with-worker
  "Run `body-fn` (1-arg: the engine) with a worker driving `store`; tear the worker
   + engine down afterwards. Returns body-fn's value. The captured `store`
   (= (:store engine)) is still used for point reads / signals in the body."
  [store body-fn]
  (let [engine (intemporal/make-workflow-engine :store store :threads 4)
        stop   (intemporal/start-worker engine :poll-ms 25 :owner-id (str "w-" (random-uuid)))]
    (try (body-fn engine)
         (finally (stop) (intemporal/shutdown-engine engine)))))

;; ── store fixtures ──────────────────────────────────────────────────────────────

(defn in-memory [] (store/->InMemoryStore (atom {})))

(defn jdbc []
  (jdbc-store/make-jdbc-store (jdbc-store/resolve-jdbc-url)))

(defn fdb []
  (let [fdb-api (cfdb/select-api-version 710)
        db      (.open fdb-api "docker/fdb.cluster")]
    (fdb-store/make-fdb-store db (str "child-" (random-uuid)))))
