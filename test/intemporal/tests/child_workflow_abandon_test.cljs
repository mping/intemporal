(ns intemporal.tests.child-workflow-abandon-test
  "Tier 2 child workflows — :parent-close-policy :abandon (ClojureScript)."
  (:require-macros
   [intemporal.core :as intemporal])
  (:require
   [cljs.test :as t :refer [async deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.tests.child-workflow-util :as u]
   [matcher-combinators.test :refer [match?]]
   [promesa.core :as prom]))

;; ── activities ──────────────────────────────────────────────────────────────────

(defn validate! [amount] {:valid (pos? amount)})
(defn charge!   [amount] {:charged amount})
(defn ship!     [order]  {:shipped order})

;; ── child workflow: charge, await "packed" (long-running), then ship ─────────────

(intemporal/defn-workflow fulfill-order [order amount]
  (let [charge (intemporal/stub #'charge!)
        ship   (intemporal/stub #'ship!)
        paid   (charge amount)]
    (intemporal/wait-for-signal "packed")
    {:order order :charged paid :shipped (ship order)}))

;; ── parent workflow: validate, schedule an :abandon child, complete ──────────────

(intemporal/defn-workflow place-order [order amount child-id]
  (let [validate (intemporal/stub #'validate!)
        ok       (validate amount)]
    (intemporal/run-child-workflow-detached #'fulfill-order [order amount]
                                            :child-id child-id
                                            :parent-close-policy :abandon)
    (intemporal/wait-for-signal "close-order")
    {:order order :validated ok}))

(intemporal/defn-workflow place-order-sync [order amount child-id]
  (intemporal/run-child-workflow #'fulfill-order [order amount]
                                 :child-id child-id
                                 :parent-close-policy :abandon))

;; ── test ────────────────────────────────────────────────────────────────────────

(deftest abandon-in-memory
  (testing ":abandon child keeps running, then completes independently"
    (async done
      (let [store (u/in-memory)
            pid   "order-ab-1" cid "order-ab-1/fulfill"]
        (-> (u/with-worker store
              (fn [engine]
                (intemporal/submit-workflow engine #'place-order ["ord-2" 200 cid] :workflow-id pid)
                (-> (u/await-status store cid :running 3000)
                    (prom/then (fn [s]
                                 (is (= :running s) "fulfilment child is in-flight")
                                 (intemporal/send-signal store pid "close-order" {})
                                 (intemporal/await-workflow engine pid :timeout-ms 5000)))
                    (prom/then (fn [r]
                                 (is (= :completed (:status r)) "parent order completed")
                                 (prom/delay 200)))
                    (prom/then (fn [_]
                                 (is (= :running (p/get-workflow-status store cid))
                                     ":abandon child keeps running after the parent closes")
                                 (intemporal/send-signal store cid "packed" {})
                                 (intemporal/await-workflow engine cid :timeout-ms 5000)))
                    (prom/then (fn [r]
                                 (is (= :completed (:status r)) "abandoned child completes independently")
                                 (is (match? {:order "ord-2" :charged {:charged 200} :shipped {:shipped "ord-2"}}
                                             (:result r))))))))
            (prom/catch (fn [e] (is false (str "unexpected error: " e))))
            (prom/finally (fn [_ _] (done))))))))

(deftest synchronous-child-forwards-close-policy
  (testing "run-child-workflow preserves a non-default parent close policy"
    (async done
      (let [store (u/in-memory)
            pid   "sync-parent-ab-1"
            cid   "sync-parent-ab-1/child"]
        (-> (u/with-worker store
              (fn [engine]
                (intemporal/submit-workflow engine #'place-order-sync ["ord-sync" 10 cid]
                                             :workflow-id pid)
                (-> (u/await-status store cid :running 3000)
                    (prom/then (fn [s]
                                 (is (= :running s))
                                 (intemporal/cancel-workflow store pid)
                                 (intemporal/await-workflow engine pid :timeout-ms 5000)))
                    (prom/then (fn [r]
                                 (is (= :cancelled (:status r)))
                                 (is (= :running (p/get-workflow-status store cid))
                                     "the synchronous :abandon child survives parent cancellation")
                                 (intemporal/send-signal store cid "packed" {})
                                 (intemporal/await-workflow engine cid :timeout-ms 5000)))
                    (prom/then (fn [r]
                                 (is (= :completed (:status r))))))))
            (prom/catch (fn [e] (is false (str "unexpected error: " e))))
            (prom/finally (fn [_ _] (done))))))))
