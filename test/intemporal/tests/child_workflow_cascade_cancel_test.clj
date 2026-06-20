(ns intemporal.tests.child-workflow-cascade-cancel-test
  "Tier 2 child workflows — :parent-close-policy :cascade-cancel.

   When the parent closes, an in-flight :cascade-cancel child is requested to
   cancel (graceful; ends :cancelled). Modelled as an order whose fulfilment child
   is mid-flight (charged, awaiting packing) when the parent order workflow closes."
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
    (intemporal/wait-for-signal "packed")        ; still running until packed
    {:order order :charged paid :shipped (ship order)}))

;; ── parent workflow: validate, schedule a :cascade-cancel child, complete ────────

(intemporal/defn-workflow place-order [order amount child-id]
  (let [validate (intemporal/stub #'validate!)
        ok       (validate amount)]
    (intemporal/run-child-workflow-detached #'fulfill-order [order amount]
                                            :child-id child-id
                                            :parent-close-policy :cascade-cancel)
    ;; the order stays open (fulfilment runs in the background) until it is closed
    (intemporal/wait-for-signal "close-order")
    {:order order :validated ok}))

;; ── check ───────────────────────────────────────────────────────────────────────

(defn- check [store]
  (u/with-worker store
    (fn [engine]
      (let [pid (str "order-" (random-uuid))
            cid (str pid "/fulfill")]
        (intemporal/submit-workflow engine #'place-order ["ord-1" 100 cid] :workflow-id pid)
        ;; child reaches its suspension point (charged, awaiting "packed") while the
        ;; parent order is still open
        (is (= :running (u/await-status store cid :running 3000))
            "fulfilment child is in-flight (suspended awaiting packing)")
        (is (= :running (p/get-workflow-status store pid)) "parent order still open")
        ;; close the parent -> the close policy fires
        (intemporal/send-signal store pid "close-order" {})
        (let [r (intemporal/await-workflow engine pid :timeout-ms 5000)]
          (is (= :completed (:status r)) "parent order completed")
          (is (match? {:order "ord-1" :validated {:valid true}} (:result r))))
        ;; cascade-cancel: the in-flight child is cancelled when the parent closed
        (is (= :cancelled (:status (intemporal/await-workflow engine cid :timeout-ms 5000)))
            ":cascade-cancel child is cancelled when the parent closes")))))

;; ── tests ───────────────────────────────────────────────────────────────────────

(deftest cascade-cancel-in-memory
  (testing "in-memory" (check (u/in-memory))))
(deftest ^:integration cascade-cancel-jdbc
  (testing "jdbc" (let [s (u/jdbc)] (try (check s) (finally (.close s))))))
(deftest ^:integration cascade-cancel-fdb
  (testing "fdb" (check (u/fdb))))
