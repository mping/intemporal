(ns intemporal.tests.child-workflow-async-test
  "Tier 2 independent child workflows — async mechanism (ClojureScript).

   Covers: a parallel/suspending child + join + replay-safety, a worker-driven child
   that sleeps (suspends on a timer), and one tree exercising ALL THREE
   :parent-close-policy values + recursion. Single-policy behaviours live in the
   dedicated per-policy namespaces (cascade-cancel / abandon / terminate)."
  (:require [cljs.test :as t :refer [deftest is testing async]]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.tests.child-workflow-util :as u]
            [promesa.core :as prom])
  (:require-macros [intemporal.core :as intemporal]))

;; ── activities / workflows ──────────────────────────────────────────────────────

(defonce act-calls (atom 0))

(defn ca-act [x]
  (swap! act-calls inc)
  (* x 10))

(intemporal/defn-workflow signal-child-wf [x]
  (+ x (intemporal/wait-for-signal "go")))

(intemporal/defn-workflow parent-join-wf [x child-id]
  (let [a   (intemporal/stub #'ca-act)
        h   (intemporal/run-child-workflow-async #'signal-child-wf [x] :child-id child-id)
        own (a x)]
    {:own own :child (intemporal/join h)}))

;; A worker-driven child that SLEEPS (suspends on a timer) then completes.
(intemporal/defn-workflow sleepy-child-wf [x]
  (intemporal/sleep 150)
  (* x 2))

(intemporal/defn-workflow sleepy-parent-wf [x child-id]
  (intemporal/join (intemporal/run-child-workflow-async #'sleepy-child-wf [x]
                                                        :child-id child-id)))

;; All three policies + recursion in one tree.
(intemporal/defn-workflow pcp-leaf-wf []
  (intemporal/wait-for-signal "go")
  :leaf-done)

(intemporal/defn-workflow pcp-cancel-child-wf [gc-id]
  (intemporal/run-child-workflow-detached #'pcp-leaf-wf []
                                          :child-id gc-id
                                          :parent-close-policy :cascade-cancel)
  (intemporal/wait-for-signal "go")
  :cancel-child-done)

(intemporal/defn-workflow pcp-parent-wf [cancel-id term-id keep-id gc-id]
  (intemporal/run-child-workflow-detached #'pcp-cancel-child-wf [gc-id]
                                          :child-id cancel-id :parent-close-policy :cascade-cancel)
  (intemporal/run-child-workflow-detached #'pcp-leaf-wf []
                                          :child-id term-id :parent-close-policy :terminate)
  (intemporal/run-child-workflow-detached #'pcp-leaf-wf []
                                          :child-id keep-id :parent-close-policy :abandon)
  (intemporal/wait-for-signal "go")
  :parent-done)

;; ── tests ───────────────────────────────────────────────────────────────────────

(deftest async-child-runs-in-parallel-and-can-suspend
  (testing "independent child suspends on a signal; parent waits then joins it"
    (reset! act-calls 0)
    (async done
      (let [store (u/in-memory)
            pid   "cljs-parent-1" cid "cljs-parent-1/child"]
        (-> (u/with-worker store
              (fn []
                (u/seed-top-level! store #'parent-join-wf pid [5 cid])
                (-> (u/await-status store cid :running 3000)
                    (prom/then (fn [s]
                                 (is (= :running s) "child is an independent, running workflow")
                                 (is (= :running (p/get-workflow-status store pid)) "parent waiting on child")
                                 (intemporal/send-signal store cid "go" 7)
                                 (u/await-status store pid :completed 5000)))
                    (prom/then (fn [s]
                                 (is (= :completed s))
                                 (is (= {:own 50 :child 12} (intemporal/get-workflow-result store pid)))
                                 (is (= 1 @act-calls) "activity ran once (replay-safe)"))))))
            (prom/catch (fn [e] (is false (str "unexpected error: " e))))
            (prom/finally (fn [_ _] (done))))))))

(deftest worker-driven-child-can-sleep
  (testing "an independent child can sleep (suspend on a timer) and still complete"
    (async done
      (let [store (u/in-memory)
            pid   "cljs-sleepy-1" cid "cljs-sleepy-1/child"]
        (-> (u/with-worker store
              (fn []
                (u/seed-top-level! store #'sleepy-parent-wf pid [21 cid])
                (-> (u/await-status store pid :completed 5000)
                    (prom/then (fn [s]
                                 (is (= :completed s))
                                 (is (= 42 (intemporal/get-workflow-result store pid))
                                     "child slept then returned 21*2"))))))
            (prom/catch (fn [e] (is false (str "unexpected error: " e))))
            (prom/finally (fn [_ _] (done))))))))

(deftest mixed-close-policies-all-three
  (testing "cancel parent: :cascade-cancel->:cancelled, :terminate->:terminated, :abandon->:running"
    (async done
      (let [store     (u/in-memory)
            pid       "cljs-pcp-1"
            cancel-id "cljs-pcp-1/cancel"
            term-id   "cljs-pcp-1/term"
            keep-id   "cljs-pcp-1/keep"
            gc-id     "cljs-pcp-1/grandchild"]
        (-> (u/with-worker store
              (fn []
                (u/seed-top-level! store #'pcp-parent-wf pid [cancel-id term-id keep-id gc-id])
                (-> (u/await-status store cancel-id :running 3000)
                    (prom/then (fn [_] (u/await-status store term-id :running 3000)))
                    (prom/then (fn [_] (u/await-status store keep-id :running 3000)))
                    (prom/then (fn [_] (u/await-status store gc-id :running 3000)))
                    (prom/then (fn [_]
                                 (is (= :running (p/get-workflow-status store pid)) "parent running")
                                 (intemporal/cancel-workflow store pid)
                                 (u/await-status store pid :cancelled 5000)))
                    (prom/then (fn [s]
                                 (is (= :cancelled s) "parent cancelled")
                                 (u/await-status store cancel-id :cancelled 5000)))
                    (prom/then (fn [s]
                                 (is (= :cancelled s) ":cascade-cancel child -> :cancelled")
                                 (u/await-status store term-id :terminated 5000)))
                    (prom/then (fn [s]
                                 (is (= :terminated s) ":terminate child -> :terminated")
                                 (u/await-status store gc-id :cancelled 5000)))
                    (prom/then (fn [s]
                                 (is (= :cancelled s) "recursion: grandchild cancelled too")
                                 (prom/delay 300)))
                    (prom/then (fn [_]
                                 (is (= :running (p/get-workflow-status store keep-id))
                                     ":abandon child keeps running"))))))
            (prom/catch (fn [e] (is false (str "unexpected error: " e))))
            (prom/finally (fn [_ _] (done))))))))
