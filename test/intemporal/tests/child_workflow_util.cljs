(ns intemporal.tests.child-workflow-util
  "Shared harness for the worker-driven Tier 2 (independent child workflow) tests
   (ClojureScript). CLJS has no thread pool: the recovery worker is promise /
   setTimeout based and drives the seeded parent plus every descendant child.
   In-memory store only."
  (:require [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [promesa.core :as prom]))

(defn await-status
  "Promise that resolves to `wf-id`'s status once it equals `target` (or the last
   status seen at timeout). Use for NON-terminal waits (e.g. :running) — for
   terminal states prefer intemporal/await-workflow."
  [store wf-id target timeout-ms]
  (let [deadline (+ (js/Date.now) timeout-ms)]
    (letfn [(step []
              (let [s (p/get-workflow-status store wf-id)]
                (if (or (= target s) (> (js/Date.now) deadline))
                  (prom/resolved s)
                  (prom/then (prom/delay 20) (fn [_] (step))))))]
      (step))))

(defn with-worker
  "Run `body-fn` (1-arg: the engine -> promise) with a worker driving `store`; tear
   down when the promise settles. Returns the promise."
  [store body-fn]
  (let [engine (intemporal/make-workflow-engine :store store :threads 2)
        stop   (intemporal/start-worker engine :poll-ms 20)]
    (-> (body-fn engine)
        (prom/finally (fn [_ _] (stop) (intemporal/shutdown-engine engine))))))

(defn in-memory [] (store/->InMemoryStore (atom {})))
