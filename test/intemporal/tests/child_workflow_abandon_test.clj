(ns intemporal.tests.child-workflow-abandon-test
  "Tier 2 child workflows — :parent-close-policy :abandon.

   When the parent closes, an :abandon child keeps running independently and can
   finish on its own. Modelled as an order whose fulfilment child outlives the
   parent order workflow and completes once it is packed."
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

;; ── parent workflow: validate, schedule an :abandon child, complete ──────────────

(intemporal/defn-workflow place-order [order amount child-id]
  (let [validate (intemporal/stub #'validate!)
        ok       (validate amount)]
    (intemporal/run-child-workflow-detached #'fulfill-order [order amount]
                                            :child-id child-id
                                            :parent-close-policy :abandon)
    ;; the order stays open (fulfilment runs in the background) until it is closed
    (intemporal/wait-for-signal "close-order")
    {:order order :validated ok}))

;; ── check ───────────────────────────────────────────────────────────────────────

(defn- check [store]
  (u/with-worker store
    (fn []
      (let [pid (str "order-" (random-uuid))
            cid (str pid "/fulfill")]
        (u/seed-top-level! store #'place-order pid ["ord-2" 200 cid])
        (is (= :running (u/await-status store cid :running 3000))
            "fulfilment child is in-flight (suspended awaiting packing)")
        (is (= :running (p/get-workflow-status store pid)) "parent order still open")
        ;; close the parent -> the close policy fires
        (intemporal/send-signal store pid "close-order" {})
        (is (= :completed (u/await-status store pid :completed 5000)) "parent order completed")
        ;; abandon: the child survives the parent closing
        (Thread/sleep 200)
        (is (= :running (p/get-workflow-status store cid))
            ":abandon child keeps running after the parent closes")
        ;; and it runs to completion on its own once packed
        (intemporal/send-signal store cid "packed" {})
        (is (= :completed (u/await-status store cid :completed 5000))
            "abandoned child completes independently")
        (is (match? {:order "ord-2" :charged {:charged 200} :shipped {:shipped "ord-2"}}
                    (intemporal/get-workflow-result store cid)))))))

;; ── tests ───────────────────────────────────────────────────────────────────────

(deftest abandon-in-memory
  (testing "in-memory" (check (u/in-memory))))
(deftest ^:integration abandon-jdbc
  (testing "jdbc" (let [s (u/jdbc)] (try (check s) (finally (.close s))))))
(deftest ^:integration abandon-fdb
  (testing "fdb" (check (u/fdb))))
