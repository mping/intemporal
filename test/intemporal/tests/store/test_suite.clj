(ns intemporal.tests.store.test-suite
  (:require [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [clojure.test :refer [is testing]]
            [matcher-combinators.test :refer [match?]]))

(defn test-activity [x]
  (* x 10))

(defn comprehensive-workflow [initial-value]
  (let [activity-stub (intemporal/stub #'test-activity)
        activity-result (activity-stub initial-value)]
    (let [async-handle (intemporal/async #(activity-stub (inc initial-value)))
          async-result (intemporal/join async-handle)]
      (intemporal/sleep 50)
      (let [signal-data (intemporal/wait-for-signal "approval")]
        {:activity-result activity-result
         :async-result async-result
         :signal-data signal-data
         :initial-value initial-value}))))

(defn run-store-tests [store]
  (testing "Basic store operations"
    (let [wf-id (str "test-" (random-uuid))
          event {:event-type :workflow-started :workflow-id wf-id :args [1] :timestamp (System/currentTimeMillis)}]
      
      (testing "save-event and load-history"
        (p/save-event store wf-id event)
        (let [history (p/load-history store wf-id)]
          (is (= 1 (count history)))
          (is (= :workflow-started (keyword (:event-type (first history)))))))

      (testing "mark-cancelled and is-cancelled?"
        (is (not (p/is-cancelled? store wf-id)))
        (p/mark-cancelled store wf-id)
        (is (p/is-cancelled? store wf-id)))

      (testing "signals"
        (let [sig-data {:foo "bar"}]
          (p/add-signal store wf-id "test-sig" sig-data)
          (let [pending (p/get-pending-signals store wf-id)]
            (is (contains? pending "test-sig"))
            (is (= [sig-data] (get pending "test-sig"))))
          (is (= sig-data (p/consume-signal store wf-id "test-sig")))
          (is (nil? (p/consume-signal store wf-id "test-sig")))))))

  (testing "Workflow execution with store"
    (intemporal/with-workflow-engine [engine {:store store :threads 2}]
      (let [wf-id (str "exec-test-" (random-uuid))
            initial-value 5
            result-future (future
                            (intemporal/start-workflow engine
                                                       comprehensive-workflow [initial-value]
                                                       :workflow-id wf-id))]
        
        (Thread/sleep 200)
        (intemporal/send-signal store wf-id "approval" {:approved true})
        
        (let [result @result-future]
          (is (match? {:status :completed
                       :result {:activity-result 50
                                :async-result 60
                                :signal-data {:approved true}}}
                      result)))))))
