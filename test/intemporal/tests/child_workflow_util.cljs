(ns intemporal.tests.child-workflow-util
  "Shared harness for independent child workflow tests (ClojureScript). CLJS has
   no thread pool: the engine is promise / setTimeout based and drives the seeded
   parent plus every descendant child.
   In-memory store only."
  (:require
   [intemporal.core :as intemporal]
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

(defn with-engine
  "Run `body-fn` (1-arg: the engine -> promise) with an engine driving `store`; tear
   down when the promise settles. Returns the promise."
  [store body-fn]
  (let [engine (intemporal/start-engine :store store :threads 2 :poll-ms 20
                                        :owner-id (str "child-engine-" (random-uuid)))]
    (-> (body-fn engine)
        (prom/finally (fn [_ _] (intemporal/shutdown-engine engine))))))

(defn in-memory [] (store/create-store))
