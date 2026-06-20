(ns intemporal.tests.child-workflow-abandon-test
  "Tier 2 child workflows — :parent-close-policy :abandon (ClojureScript)."
  (:require [cljs.test :as t :refer [deftest is testing async]]
            [matcher-combinators.test :refer [match?]]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.tests.child-workflow-util :as u]
            [promesa.core :as prom])
  (:require-macros [intemporal.core :as intemporal]))

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

;; ── test ────────────────────────────────────────────────────────────────────────

(deftest abandon-in-memory
  (testing ":abandon child keeps running, then completes independently"
    (async done
      (let [store (u/in-memory)
            pid   "order-ab-1" cid "order-ab-1/fulfill"]
        (-> (u/with-worker store
              (fn []
                (u/seed-top-level! store #'place-order pid ["ord-2" 200 cid])
                (-> (u/await-status store cid :running 3000)
                    (prom/then (fn [s]
                                 (is (= :running s) "fulfilment child is in-flight")
                                 (intemporal/send-signal store pid "close-order" {})
                                 (u/await-status store pid :completed 5000)))
                    (prom/then (fn [s]
                                 (is (= :completed s) "parent order completed")
                                 (prom/delay 200)))
                    (prom/then (fn [_]
                                 (is (= :running (p/get-workflow-status store cid))
                                     ":abandon child keeps running after the parent closes")
                                 (intemporal/send-signal store cid "packed" {})
                                 (u/await-status store cid :completed 5000)))
                    (prom/then (fn [s]
                                 (is (= :completed s) "abandoned child completes independently")
                                 (is (match? {:order "ord-2" :charged {:charged 200} :shipped {:shipped "ord-2"}}
                                             (intemporal/get-workflow-result store cid))))))))
            (prom/catch (fn [e] (is false (str "unexpected error: " e))))
            (prom/finally (fn [_ _] (done))))))))
