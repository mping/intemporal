(ns intemporal.tests.child-workflow-util
  "Shared harness for the worker-driven Tier 2 (independent child workflow) tests.

   These tests drive everything through the recovery worker (the ownership scan):
   the parent is seeded (not started via start-workflow's blocking loop, which must
   not race the worker on the same workflow) and the worker runs it plus every
   descendant child. Each `check-*` is store-agnostic and run against InMemory
   (always) plus JDBC and FDB (^:integration)."
  (:require [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [intemporal.store.jdbc :as jdbc-store]
            [intemporal.store.fdb :as fdb-store]
            [me.vedang.clj-fdb.FDB :as cfdb]
            [intemporal.internal.workflow-registry :as wreg]))

(defn await-status
  "Poll `wf-id`'s status until it reaches `terminal` or the timeout elapses;
   returns the last status seen."
  [store wf-id terminal timeout-ms]
  (let [deadline (+ (System/currentTimeMillis) timeout-ms)]
    (loop []
      (let [s (p/get-workflow-status store wf-id)]
        (cond
          (= terminal s) s
          (> (System/currentTimeMillis) deadline) s
          :else (do (Thread/sleep 25) (recur)))))))

(defn seed-top-level!
  "Make `wf-fn` runnable by the worker scan: persist its :workflow-started event
   (the same seed start-workflow would write). `wf-fn` is registered at load time
   by defn-workflow, so the worker can resolve it by name."
  [store wf-fn wf-id args]
  (p/save-event store wf-id {:event-type       :workflow-started
                             :workflow-id      wf-id
                             :workflow-fn-name (wreg/workflow-name wf-fn)
                             :args             (vec args)
                             :timestamp        (System/currentTimeMillis)}))

(defn with-worker
  "Run `body-fn` (0-arg, closes over `store`) with a worker driving `store`;
   tear the worker + engine down afterwards. Returns body-fn's value."
  [store body-fn]
  (let [engine (intemporal/make-workflow-engine :store store :threads 4)
        stop   (intemporal/start-worker engine :poll-ms 25 :owner-id (str "w-" (random-uuid)))]
    (try (body-fn)
         (finally (stop) (intemporal/shutdown-engine engine)))))

;; ── store fixtures ──────────────────────────────────────────────────────────────

(defn in-memory [] (store/->InMemoryStore (atom {})))

(defn jdbc []
  (jdbc-store/make-jdbc-store
    (or (System/getenv "DATABASE_URL")
        "jdbc:postgresql://localhost:5432/root?user=root&password=root")))

(defn fdb []
  (let [fdb-api (cfdb/select-api-version 710)
        db      (.open fdb-api "docker/fdb.cluster")]
    (fdb-store/make-fdb-store db (str "child-" (random-uuid)))))
