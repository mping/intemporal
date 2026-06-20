(ns intemporal.tests.child-workflow-terminate-test
  "Tier 2 child workflows — :parent-close-policy :terminate (Temporal's default).

   When the parent closes, an in-flight :terminate child is forcefully stopped — no
   cleanup, no replay — and ends in the distinct :terminated state. Modelled as an
   order whose fulfilment child is mid-flight when the parent order workflow closes."
  (:require [clojure.test :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.tests.child-workflow-util :as u]))

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
    ;; the order stays open (fulfilment runs in the background) until it is closed
    (intemporal/wait-for-signal "close-order")
    {:order order :validated ok}))

;; ── check ───────────────────────────────────────────────────────────────────────

(defn- check [store]
  (u/with-worker store
    (fn []
      (let [pid (str "order-" (random-uuid))
            cid (str pid "/fulfill")]
        (u/seed-top-level! store #'place-order pid ["ord-3" 300 cid])
        (is (= :running (u/await-status store cid :running 3000))
            "fulfilment child is in-flight (suspended awaiting packing)")
        (is (= :running (p/get-workflow-status store pid)) "parent order still open")
        ;; close the parent -> the close policy fires
        (intemporal/send-signal store pid "close-order" {})
        (is (= :completed (u/await-status store pid :completed 5000)) "parent order completed")
        (is (match? {:order "ord-3" :validated {:valid true}}
                    (intemporal/get-workflow-result store pid)))
        ;; terminate: the in-flight child is forcefully stopped (no cleanup)
        (is (= :terminated (u/await-status store cid :terminated 5000))
            ":terminate child ends :terminated (forceful, not :cancelled)")))))

;; ── tests ───────────────────────────────────────────────────────────────────────

(deftest terminate-in-memory
  (testing "in-memory" (check (u/in-memory))))
(deftest ^:integration terminate-jdbc
  (testing "jdbc" (let [s (u/jdbc)] (try (check s) (finally (.close s))))))
(deftest ^:integration terminate-fdb
  (testing "fdb" (check (u/fdb))))
