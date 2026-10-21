(ns intemporal.tests.engine.progress-test
  #?(:cljs (:require-macros [intemporal.tests.utils :refer [with-result]]))
  (:require
   [intemporal.core :as core]
   [intemporal.internal.activity :as activity]
   [intemporal.internal.execution :as execution]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.tests.utils :refer [with-result]]
   [promesa.core :as prom]
   #?(:clj [clojure.test :refer [deftest is testing]]
      :cljs [cljs.test :refer-macros [deftest is]])))

(defn- creation [id owner]
  {:workflow-id id :owner-id owner
   :started-event {:event-type :workflow-started :seq -1
                   :workflow-id id :workflow-fn-name "progress/workflow" :args []}})

(defn- retry-activity [] nil)
(defn- retry-workflow []
  ((core/stub #'retry-activity
     :retry-policy (activity/make-retry-policy :max-attempts 2 :backoff-ms 60000))))

(defn- retry-wake [st]
  (let [owner (str "progress-" (random-uuid))
        id (str owner "/retry")
        calls (atom 0)
        executor (reify p/IActivityExecutor
                   (execute-activity [_ _ _ _]
                     (when (= 1 (swap! calls inc)) (p/wake! st id))
                     (throw (ex-info "Activity failed" {})))
                   (execute-activities-parallel [_ _] (throw (ex-info "Unexpected batch" {})))
                   (shutdown-executor [_ _] nil)
                   (shutdown? [_] false))
        engine {:store st :owner-id owner :registry (activity/make-registry) :protocols (atom {})
                :executor executor}]
    (p/create-workflow! st (creation id owner))
    (let [claim (first (p/claim-runnable! st owner 1 0))]
      (with-result [result (execution/drive-fsm! engine id retry-workflow [] claim)]
        (is (= :parked (:status result)))
        (is (= 1 @calls))
        (is (= [1] (mapv :attempts
                     (filter #(= :activity-attempt-failed (:event-type %))
                             (p/load-history st id)))))))))

(defn- child-workflow [] :child)
(defn- collision-workflow [child-id]
  (core/run-child-workflow child-workflow [] :child-id child-id))

(defn- child-conflict [inner]
  (let [owner (str "progress-" (random-uuid))
        parent-id (str owner "/parent")
        child-id (str owner "/occupied")
        commits (atom 0)
        ;; Bound the regression itself so a broken engine cannot hang the suite.
        st (reify p/IFsmStore
             (create-workflow! [_ creation] (p/create-workflow! inner creation))
             (load-workflow-state [_ id] (p/load-workflow-state inner id))
             (add-signal! [_ id name signal] (p/add-signal! inner id name signal))
             (request-cancel! [_ id] (p/request-cancel! inner id))
             (wake! [_ id] (p/wake! inner id))
             (release-owner! [_ owner] (p/release-owner! inner owner))
             (load-snapshot [_ id] (p/load-snapshot inner id))
             (load-close-tree [_ id] (p/load-close-tree inner id))
             (commit-transition! [_ transition]
               (when (> (swap! commits inc) 8)
                 (throw (ex-info "Unbounded creation conflict" {})))
               (p/commit-transition! inner transition)))
        engine {:store st :owner-id owner :registry (activity/make-registry) :protocols (atom {})}]
    (p/create-workflow! inner (creation parent-id owner))
    (p/create-workflow! inner (creation child-id owner))
    (p/claim-runnable! inner owner 2 0)
    (with-result [result (execution/drive-fsm! engine parent-id collision-workflow [child-id]
                          {:wake-version 0 :max-iterations 2})]
      (is (= :failed (:status result)))
      (is (= :intemporal/child-id-conflict (get-in result [:error :data :error/type])))
      (is (= :running (p/get-workflow-status inner child-id))))))

(defn- counting-activity [n] n)
(defn- long-workflow []
  (let [act (core/stub #'counting-activity)]
    (mapv act (range 5))))

(defn- replay-progress [st]
  (with-result [result
                (let [engine (core/start-engine :store st :owner-id (str "budget-" (random-uuid))
                                                 :enable-telemetry false)
                      result (-> (prom/resolved nil)
                                 (prom/then (fn [_] (core/start-workflow engine long-workflow []
                                                     :max-iterations 2)))
                                 (prom/finally (fn [& _] (core/shutdown-engine engine))))]
                  #?(:clj @result :cljs result))]
    (is (= :completed (:status result)))
    (is (= [0 1 2 3 4] (:result result)))))

(defn- invalid-budget [st]
  (let [engine (core/start-engine :store st :owner-id (str "invalid-budget-" (random-uuid))
                                  :enable-telemetry false)]
    (try
      (doseq [budget [0 -1 1.5]]
        (is (= :invalid-budget
               (try
                 (core/submit-workflow engine long-workflow [] :max-iterations budget)
                 :accepted
                 (catch #?(:clj Exception :cljs :default) e
                   (when (= budget (:max-iterations (ex-data e))) :invalid-budget))))))
      (finally (core/shutdown-engine engine)))))

#?(:clj
   (defn run-store-tests
     "Run progress regressions against the supplied JVM store."
     [st]
     (testing "a wake preserves the failed attempt" (retry-wake st))
     (testing "child collisions fail the parent" (child-conflict st))
     (testing "replay budgets yield progress" (replay-progress st))
     (testing "invalid replay budgets are rejected" (invalid-budget st))))

(deftest wake-keeps-the-failed-attempt
  (retry-wake (store/create-store)))

(deftest child-collision-is-terminal
  (child-conflict (store/create-store)))

(deftest replay-budget-yields-progress
  (replay-progress (store/create-store)))

(deftest invalid-replay-budget-is-rejected
  (invalid-budget (store/create-store)))
