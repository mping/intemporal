(ns intemporal.tests.engine.lifecycle-test
  (:require
   [clojure.test :refer [deftest is]]
   [intemporal.core :as intemporal]
   [intemporal.internal.workflow-registry :as wreg]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.tests.utils :as u]))

(intemporal/defn-workflow lifecycle-workflow [x] (inc x))

(defprotocol LifecycleActivities
  (multiply [this x]))

(def lifecycle-activities
  (reify LifecycleActivities (multiply [_ x] (* x 3))))

(intemporal/defn-workflow protocol-lifecycle-workflow [x]
  (multiply (intemporal/stub-protocol LifecycleActivities) x))

(deftest submitted-workflow-needs-only-an-engine
  (let [engine (intemporal/start-engine :owner-id "lifecycle-submit" :poll-ms 5)]
    (try
      (let [{:keys [workflow-id]} (intemporal/submit-workflow engine lifecycle-workflow [41])]
        (is (= {:status :completed :result 42 :workflow-id workflow-id}
               (intemporal/await-workflow engine workflow-id :timeout-ms 5000))))
      (finally (intemporal/shutdown-engine engine)))))

(deftest stable-owner-recovers-its-running-fsm-claim
  (let [workflow-store (store/create-store)
        owner-id "lifecycle-recovery-owner"
        workflow-id "lifecycle-recovery-workflow"
        workflow-name (wreg/register-workflow! lifecycle-workflow)]
    ;; Model a process crash after it has claimed, but before it can run the FSM.
    (p/create-workflow!
      workflow-store
      {:workflow-id workflow-id
       :owner-id owner-id
       :started-event {:event-type :workflow-started :seq -1 :workflow-id workflow-id
                       :workflow-fn-name workflow-name :args [9]}})
    (is (= workflow-id
           (:workflow-id (first (p/claim-runnable! workflow-store owner-id 1
                                  (System/currentTimeMillis))))))
    (let [engine (intemporal/start-engine :store workflow-store :owner-id owner-id :poll-ms 5)]
      (try
        (is (= {:status :completed :result 10 :workflow-id workflow-id}
               (intemporal/await-workflow engine workflow-id :timeout-ms 5000)))
        (finally (intemporal/shutdown-engine engine))))))

(deftest protocols-are-installed-before-engine-recovery
  (let [engine (intemporal/start-engine :owner-id "lifecycle-protocols"
                                        :poll-ms 5
                                        :protocols {LifecycleActivities lifecycle-activities})]
    (try
      (let [{:keys [workflow-id]}
            (intemporal/submit-workflow engine protocol-lifecycle-workflow [7])]
        (is (= {:status :completed :result 21 :workflow-id workflow-id}
               (intemporal/await-workflow engine workflow-id :timeout-ms 5000))))
      (finally (intemporal/shutdown-engine engine)))))

(deftest shutdown-stops-polling-and-releases-an-unresumable-claim
  (let [workflow-store (store/create-store)
        owner-id "lifecycle-shutdown-owner"
        workflow-id "lifecycle-unresumable"
        claim-count (atom 0)
        original-claim p/claim-runnable!]
    (p/create-workflow!
      workflow-store
      {:workflow-id workflow-id
       :owner-id owner-id
       :started-event {:event-type :workflow-started :seq -1 :workflow-id workflow-id
                       :workflow-fn-name "missing.workflow/function" :args []}})
    (with-redefs [p/claim-runnable!
                  (fn [& args]
                    (when (identical? workflow-store (first args))
                      (swap! claim-count inc))
                    (apply original-claim args))]
      (let [engine (intemporal/start-engine :store workflow-store :owner-id owner-id :poll-ms 5)]
        (u/wait-until #(pos? @claim-count) 5000)
        (intemporal/shutdown-engine engine)
        (let [after-shutdown @claim-count]
          (Thread/sleep 30)
          (is (= after-shutdown @claim-count)))
        (is (= workflow-id
               (:workflow-id
                 (first (p/claim-runnable! workflow-store "replacement-owner" 1
                                           (System/currentTimeMillis))))))))))
