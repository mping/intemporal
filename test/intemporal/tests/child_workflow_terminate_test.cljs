(ns intemporal.tests.child-workflow-terminate-test
  "Tier 2 child workflows — :parent-close-policy :terminate (ClojureScript)."
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

;; ── parent workflow: validate, schedule a :terminate child, complete ─────────────

(intemporal/defn-workflow place-order [order amount child-id]
  (let [validate (intemporal/stub #'validate!)
        ok       (validate amount)]
    (intemporal/run-child-workflow-detached #'fulfill-order [order amount]
                                            :child-id child-id
                                            :parent-close-policy :terminate)
    (intemporal/wait-for-signal "close-order")
    {:order order :validated ok}))

;; ── test ────────────────────────────────────────────────────────────────────────

(deftest terminate-in-memory
  (testing ":terminate child ends :terminated when the parent closes"
    (async done
      (let [store (u/in-memory)
            pid   "order-tm-1" cid "order-tm-1/fulfill"]
        (-> (u/with-worker store
              (fn [engine]
                (intemporal/submit-workflow engine #'place-order ["ord-3" 300 cid] :workflow-id pid)
                (-> (u/await-status store cid :running 3000)
                    (prom/then (fn [s]
                                 (is (= :running s) "fulfilment child is in-flight")
                                 (intemporal/send-signal store pid "close-order" {})
                                 (intemporal/await-workflow engine pid :timeout-ms 5000)))
                    (prom/then (fn [r]
                                 (is (= :completed (:status r)) "parent order completed")
                                 (is (match? {:order "ord-3" :validated {:valid true}} (:result r)))
                                 (intemporal/await-workflow engine cid :timeout-ms 5000)))
                    (prom/then (fn [r]
                                 (is (= :terminated (:status r))
                                     ":terminate child ends :terminated (forceful, not :cancelled)"))))))
            (prom/catch (fn [e] (is false (str "unexpected error: " e))))
            (prom/finally (fn [_ _] (done))))))))
