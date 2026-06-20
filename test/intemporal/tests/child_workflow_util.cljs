(ns intemporal.tests.child-workflow-util
  "Shared harness for the worker-driven Tier 2 (independent child workflow) tests
   (ClojureScript). CLJS has no thread pool: the recovery worker is promise /
   setTimeout based and drives the seeded parent plus every descendant child.
   In-memory store only."
  (:require [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [intemporal.internal.workflow-registry :as wreg]
            [promesa.core :as prom]))

(defn await-status
  "Promise that resolves to `wf-id`'s status once it reaches `terminal`
   (or the last status seen at timeout)."
  [store wf-id terminal timeout-ms]
  (let [deadline (+ (js/Date.now) timeout-ms)]
    (letfn [(step []
              (let [s (p/get-workflow-status store wf-id)]
                (if (or (= terminal s) (> (js/Date.now) deadline))
                  (prom/resolved s)
                  (prom/then (prom/delay 20) (fn [_] (step))))))]
      (step))))

(defn seed-top-level!
  "Persist `wf-fn`'s :workflow-started event so the worker scan picks it up."
  [store wf-fn wf-id args]
  (p/save-event store wf-id {:event-type       :workflow-started
                             :workflow-id      wf-id
                             :workflow-fn-name (wreg/workflow-name wf-fn)
                             :args             (vec args)
                             :timestamp        0}))

(defn with-worker
  "Run `body-fn` (0-arg -> promise, closes over `store`) with a worker driving
   `store`; tear down when the promise settles. Returns the promise."
  [store body-fn]
  (let [engine (intemporal/make-workflow-engine :store store :threads 2)
        stop   (intemporal/start-worker engine :poll-ms 20)]
    (-> (body-fn)
        (prom/finally (fn [_ _] (stop) (intemporal/shutdown-engine engine))))))

(defn in-memory [] (store/->InMemoryStore (atom {})))
