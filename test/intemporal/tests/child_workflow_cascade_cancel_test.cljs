(ns intemporal.tests.child-workflow-cascade-cancel-test
  "Tier 2 child workflows — :parent-close-policy :cascade-cancel (ClojureScript)."
  (:require [cljs.test :as t :refer [deftest is testing async]]
            [matcher-combinators.test :refer [match?]]
            [intemporal.core :as intemporal]
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

;; ── parent workflow: validate, schedule a :cascade-cancel child, complete ────────

(intemporal/defn-workflow place-order [order amount child-id]
  (let [validate (intemporal/stub #'validate!)
        ok       (validate amount)]
    (intemporal/run-child-workflow-detached #'fulfill-order [order amount]
                                            :child-id child-id
                                            :parent-close-policy :cascade-cancel)
    (intemporal/wait-for-signal "close-order")
    {:order order :validated ok}))

;; ── test ────────────────────────────────────────────────────────────────────────

(deftest cascade-cancel-in-memory
  (testing ":cascade-cancel child is cancelled when the parent closes"
    (async done
      (let [store (u/in-memory)
            pid   "order-cc-1" cid "order-cc-1/fulfill"]
        (-> (u/with-worker store
              (fn []
                (u/seed-top-level! store #'place-order pid ["ord-1" 100 cid])
                (-> (u/await-status store cid :running 3000)
                    (prom/then (fn [s]
                                 (is (= :running s) "fulfilment child is in-flight")
                                 (intemporal/send-signal store pid "close-order" {})
                                 (u/await-status store pid :completed 5000)))
                    (prom/then (fn [s]
                                 (is (= :completed s) "parent order completed")
                                 (is (match? {:order "ord-1" :validated {:valid true}}
                                             (intemporal/get-workflow-result store pid)))
                                 (u/await-status store cid :cancelled 5000)))
                    (prom/then (fn [s]
                                 (is (= :cancelled s)
                                     ":cascade-cancel child is cancelled with the parent"))))))
            (prom/catch (fn [e] (is false (str "unexpected error: " e))))
            (prom/finally (fn [_ _] (done))))))))
