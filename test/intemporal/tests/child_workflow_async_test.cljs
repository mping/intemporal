(ns intemporal.tests.child-workflow-async-test
  "Tier 2 (ClojureScript): independent child workflows driven by the CLJS
   ownership-scan worker (promise/setTimeout based; single-process). Mirrors the
   JVM tests against the in-memory store."
  (:require [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.store :as store]
            [intemporal.internal.workflow-registry :as wreg]
            [promesa.core :as prom]
            [cljs.test :as t :refer [deftest is testing async]])
  (:require-macros [intemporal.core :as intemporal]))

;; ── activities / workflows ──────────────────────────────────────────────────────

(defonce act-calls (atom 0))

(defn ca-act [x]
  (swap! act-calls inc)
  (* x 10))

(intemporal/defn-workflow signal-child-wf [x]
  (let [s (intemporal/wait-for-signal "go")]
    (+ x s)))

(intemporal/defn-workflow parent-join-wf [x child-id]
  (let [a   (intemporal/stub #'ca-act)
        h   (intemporal/run-child-workflow-async #'signal-child-wf [x] :child-id child-id)
        own (a x)]
    {:own own :child (intemporal/join h)}))

(intemporal/defn-workflow parent-cascade-wf [child-id]
  (intemporal/run-child-workflow-detached #'signal-child-wf [0]
                                          :child-id child-id
                                          :parent-close-policy :cascade-cancel)
  :parent-done)

(intemporal/defn-workflow parent-abandon-wf [child-id]
  (intemporal/run-child-workflow-detached #'signal-child-wf [0]
                                          :child-id child-id
                                          :parent-close-policy :abandon)
  :parent-done)

;; A worker-driven child that SLEEPS (suspends on a timer) then completes — the
;; mechanism the child-workflows demo relies on.
(intemporal/defn-workflow sleepy-child-wf [x]
  (intemporal/sleep 150)
  (* x 2))

(intemporal/defn-workflow sleepy-parent-wf [x child-id]
  (intemporal/join (intemporal/run-child-workflow-async #'sleepy-child-wf [x]
                                                        :child-id child-id)))

;; ── helpers ───────────────────────────────────────────────────────────────────

(defn- seed! [store wf-fn wf-id args]
  (p/save-event store wf-id {:event-type       :workflow-started
                             :workflow-id      wf-id
                             :workflow-fn-name (wreg/workflow-name wf-fn)
                             :args             (vec args)
                             :timestamp        0}))

(defn- await-status
  "Promise that resolves to the workflow's status once it reaches `terminal`
   (or the last status seen at timeout)."
  [store wf-id terminal timeout-ms]
  (let [deadline (+ (js/Date.now) timeout-ms)]
    (letfn [(step []
              (let [s (p/get-workflow-status store wf-id)]
                (if (or (= terminal s) (> (js/Date.now) deadline))
                  (prom/resolved s)
                  (prom/then (prom/delay 20) (fn [_] (step))))))]
      (step))))

(defn- with-worker
  "Run `f` (store -> promise) with a fresh engine+worker; tears both down when
   the returned promise settles."
  [f]
  (let [store  (store/->InMemoryStore (atom {}))
        engine (intemporal/make-workflow-engine :store store :threads 2)
        stop   (intemporal/start-worker engine :poll-ms 20)]
    (-> (f store)
        (prom/finally (fn [_ _] (stop) (intemporal/shutdown-engine engine))))))

;; ── tests ───────────────────────────────────────────────────────────────────────

(deftest async-child-runs-in-parallel-and-can-suspend
  (testing "independent child suspends on a signal; parent waits then joins it"
    (reset! act-calls 0)
    (async done
      (let [pid "cljs-parent-1" cid "cljs-parent-1/child"]
        (-> (with-worker
              (fn [store]
                (seed! store #'parent-join-wf pid [5 cid])
                (-> (await-status store cid :running 3000)
                    (prom/then (fn [s]
                                 (is (= :running s) "child is an independent, running workflow")
                                 (is (= :running (p/get-workflow-status store pid)) "parent waiting on child")
                                 (intemporal/send-signal store cid "go" 7)
                                 (await-status store pid :completed 5000)))
                    (prom/then (fn [s]
                                 (is (= :completed s))
                                 (is (= {:own 50 :child 12} (intemporal/get-workflow-result store pid)))
                                 (is (= 1 @act-calls) "activity ran once (replay-safe)"))))))
            (prom/catch (fn [e] (is false (str "unexpected error: " e))))
            (prom/finally (fn [_ _] (done))))))))

(deftest cascade-cancel-closes-running-children
  (testing ":cascade-cancel cancels a still-running child when the parent completes"
    (async done
      (let [pid "cljs-cascade-1" cid "cljs-cascade-1/child"]
        (-> (with-worker
              (fn [store]
                (seed! store #'parent-cascade-wf pid [cid])
                (-> (await-status store pid :completed 5000)
                    (prom/then (fn [s]
                                 (is (= :completed s) "parent completes without joining")
                                 (await-status store cid :cancelled 5000)))
                    (prom/then (fn [s] (is (= :cancelled s) "orphaned child cascade-cancelled"))))))
            (prom/catch (fn [e] (is false (str "unexpected error: " e))))
            (prom/finally (fn [_ _] (done))))))))

(deftest abandon-leaves-running-children
  (testing ":abandon leaves the child running after the parent completes"
    (async done
      (let [pid "cljs-abandon-1" cid "cljs-abandon-1/child"]
        (-> (with-worker
              (fn [store]
                (seed! store #'parent-abandon-wf pid [cid])
                (-> (await-status store pid :completed 5000)
                    (prom/then (fn [s] (is (= :completed s))))
                    (prom/then (fn [_] (prom/delay 200)))
                    (prom/then (fn [_]
                                 (is (= :running (p/get-workflow-status store cid))
                                     "abandoned child keeps running"))))))
            (prom/catch (fn [e] (is false (str "unexpected error: " e))))
            (prom/finally (fn [_ _] (done))))))))

(deftest worker-driven-child-can-sleep
  (testing "an independent child can sleep (suspend on a timer) and still complete"
    (async done
      (let [pid "cljs-sleepy-1" cid "cljs-sleepy-1/child"]
        (-> (with-worker
              (fn [store]
                (seed! store #'sleepy-parent-wf pid [21 cid])
                (-> (await-status store pid :completed 5000)
                    (prom/then (fn [s]
                                 (is (= :completed s))
                                 (is (= 42 (intemporal/get-workflow-result store pid))
                                     "child slept then returned 21*2"))))))
            (prom/catch (fn [e] (is false (str "unexpected error: " e))))
            (prom/finally (fn [_ _] (done))))))))
