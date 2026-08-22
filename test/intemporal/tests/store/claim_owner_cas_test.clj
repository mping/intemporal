(ns intemporal.tests.store.claim-owner-cas-test
  "Bug #12 — InMemoryStore ownership claiming had a broken CAS: the result was
  produced by a side effect (reset! into an external atom) INSIDE the swap!
  update fn. swap! re-runs the fn on CAS contention, so a claimant whose update
  lost the race could still see its `ok` flag set by an earlier, rolled-back
  attempt — both racers reported success → double ownership → double execution.
  REGRESSION GUARD: of N threads racing to claim one unowned workflow, exactly
  one may report success, on every trial."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.protocol :as p]
   [intemporal.store :as store])
  (:import
   (java.util.concurrent CountDownLatch)))

(def ^:private n-threads 12)
(def ^:private n-trials 100)

(defn- race-claimants
  "N threads race `claim-runnable!` on one freshly-started workflow.
  Returns the claim for this workflow (or nil) from each claimant."
  [trial]
  (let [store (store/create-store)
        wid   (str "cas-" trial "-" (random-uuid))]
    (p/save-event store wid {:event-type :workflow-started :seq -1 :workflow-id wid :args []})
    (let [ready   (CountDownLatch. n-threads)
          go      (CountDownLatch. 1)
          results (atom [])]
      (dotimes [i n-threads]
        (.start
          (Thread. ^Runnable
            (fn []
              (.countDown ready)
              (.await go)
              (swap! results conj
                     (some #(when (= wid (:workflow-id %)) %)
                           (p/claim-runnable! store (str "owner-" i) 1
                                              (System/currentTimeMillis))))))))
      (.await ready)
      (.countDown go)
      ;; wait for all claimants to finish
      (let [deadline (+ (System/currentTimeMillis) 10000)]
        (while (and (< (count @results) n-threads)
                    (< (System/currentTimeMillis) deadline))
          (Thread/sleep 1)))
      @results)))

(deftest claim-owner-cas-race-test
  (testing "exactly one of N racing claimants succeeds, across many trials"
    (dotimes [trial n-trials]
      (let [results (race-claimants trial)]
        (is (= n-threads (count results))
            (str "trial " trial ": all claimants returned"))
        (is (= 1 (count (filter some? results)))
            (str "trial " trial ": exactly one claimant may win, got "
                 (count (filter some? results)) " winners"))))))
