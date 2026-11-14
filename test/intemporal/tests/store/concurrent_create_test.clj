(ns intemporal.tests.store.concurrent-create-test
  "Concurrent submits must not fail on InnoDB gap-lock deadlocks.

   create-workflow! locks the missing id with SELECT ... FOR UPDATE. Under
   MariaDB REPEATABLE READ that takes a gap lock; two creations in the same gap
   then both INSERT, and InnoDB rolls one back as a deadlock.

   A barrier holds both creations between lock and insert, so the deadlock is
   deterministic. Targets DATABASE_URL, like mariadb-test:
     DATABASE_URL='jdbc:mariadb://localhost:3306/root?user=root&password=root' \\
       bin/kaocha :test --focus intemporal.tests.store.concurrent-create-test"
  {:integration true}
  (:require
   [clojure.test :refer [deftest is]]
   [intemporal.protocol :as p]
   [intemporal.store.jdbc :as jdbc-store])
  (:import
   (java.util.concurrent CyclicBarrier TimeUnit)))

(def ^:private barrier-timeout-ms 5000)

(defn- creation [workflow-id]
  {:workflow-id workflow-id
   :owner-id "concurrent-create-test"
   :started-event {:event-type :workflow-started
                   :seq -1
                   :workflow-id workflow-id
                   :workflow-fn-name "intemporal.tests.store.concurrent-create-test/workflow"
                   :args []
                   :timestamp (System/currentTimeMillis)}})

(defn- create! [store workflow-id]
  (try
    (:create-status (p/create-workflow! store (creation workflow-id)))
    (catch Exception e
      (ex-message e))))

(deftest concurrent-creations-in-same-gap
  (with-open [store (jdbc-store/create-store (jdbc-store/resolve-jdbc-url))]
    (let [;; Fresh shared prefix: no existing key sorts between the two ids,
          ;; so both missing-row locks cover the same gap.
          prefix     (str "gap-" (random-uuid))
          ids        [(str prefix "-a") (str prefix "-b")]
          barrier    (CyclicBarrier. (count ids))
          inserts    (atom 0)
          insert-var #'jdbc-store/insert-fsm-workflow-row!
          insert     @insert-var]
      (with-redefs-fn
        {insert-var (fn [& args]
                      ;; Only the first attempt of each creation waits, until
                      ;; both hold their gap lock; retries pass straight through.
                      (when (<= (swap! inserts inc) (count ids))
                        (.await barrier barrier-timeout-ms TimeUnit/MILLISECONDS))
                      (apply insert args))}
        #(let [results (->> ids
                            (mapv (fn [id] (future (create! store id))))
                            (mapv deref))]
           (is (= [:created :created] results)))))))
