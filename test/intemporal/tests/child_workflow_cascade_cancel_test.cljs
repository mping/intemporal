(ns intemporal.tests.child-workflow-cascade-cancel-test
  "Tier 2 child workflows — :parent-close-policy :cascade-cancel (ClojureScript)."
  (:require-macros
   [intemporal.core :as intemporal])
  (:require
   [cljs.test :as t :refer [async deftest is testing]]
   [intemporal.core :as intemporal]
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
        (-> (u/with-engine store
              (fn [engine]
                (intemporal/submit-workflow engine #'place-order ["ord-1" 100 cid] :workflow-id pid)
                (-> (u/await-status store cid :running 3000)
                    (prom/then (fn [s]
                                 (is (= :running s) "fulfilment child is in-flight")
                                 (intemporal/send-signal store pid "close-order" {})
                                 (intemporal/await-workflow engine pid :timeout-ms 5000)))
                    (prom/then (fn [r]
                                 (is (= :completed (:status r)) "parent order completed")
                                 (is (match? {:order "ord-1" :validated {:valid true}} (:result r)))
                                 (intemporal/await-workflow engine cid :timeout-ms 5000)))
                    (prom/then (fn [r]
                                 (is (= :cancelled (:status r))
                                     ":cascade-cancel child is cancelled with the parent"))))))
            (prom/catch (fn [e] (is false (str "unexpected error: " e))))
            (prom/finally (fn [_ _] (done))))))))
