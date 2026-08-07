(ns intemporal.tests.store.test-suite
  (:require [clojure.spec.alpha :as s]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.spec :as spec]
            [clojure.test :refer [is testing]]
            [matcher-combinators.test :refer [match?]]))

(defn test-activity [x]
  (* x 10))

(defn comprehensive-workflow [initial-value]
  (let [activity-stub (intemporal/stub #'test-activity)
        activity-result (activity-stub initial-value)
        async-handle (intemporal/async #(activity-stub (inc initial-value)))
        async-result (intemporal/join async-handle)]
    (intemporal/sleep 50)
    (let [signal-data (intemporal/wait-for-signal "approval")]
      {:activity-result activity-result
       :async-result async-result
       :signal-data signal-data
       :initial-value initial-value})))

(defn run-store-tests [store]
  (testing "Basic store operations"
    (let [wf-id (str "test-" (random-uuid))
          ;; A8: :seq is mandatory (JDBC enforces NOT NULL) — the engine always
          ;; assigns -1 to :workflow-started (core.cljc); mirror that here.
          event {:event-type :workflow-started :seq -1 :workflow-id wf-id :args [1] :timestamp (System/currentTimeMillis)}]
      
      (testing "save-event and load-history"
        (p/save-event store wf-id event)
        (let [history (p/load-history store wf-id)]
          (is (= 1 (count history)))
          ;; No `keyword` coercion here: every implementation re-keywordizes
          ;; :event-type on read (JDBC from its event_type column, FDB via
          ;; update/keyword), and ::spec/event-type now enforces that.
          (is (= :workflow-started (:event-type (first history))))))

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
          (is (nil? (p/consume-signal store wf-id "test-sig")))))

      ;; Explicit s/valid? rather than relying on the inline check! calls: a
      ;; failure here is a clojure.test failure carrying explain-str, instead of
      ;; a thrown ex-info that aborts the whole deftest. This block is also the
      ;; only place several read methods get exercised at all, and — since every
      ;; backend (memory, postgres, mariadb, fdb) calls run-store-tests — the
      ;; only MariaDB coverage they get.
      (testing "IStore return values conform to intemporal.spec"
        (doseq [[spec value] [[::spec/events          (p/load-history store wf-id)]
                              [::spec/workflow-status (p/get-workflow-status store wf-id)]
                              [::spec/max-seq-result  (p/max-seq store wf-id)]
                              [::spec/pending-signals (p/get-pending-signals store wf-id)]
                              [::spec/maybe-event     (p/find-event store wf-id :workflow-started -1)]
                              [::spec/maybe-event     (p/find-event store wf-id :timer-fired 999)]
                              [::spec/pending-ids     (p/list-pending store "owner-spec" 10)]
                              [::spec/boolean-result  (p/claim-owner store wf-id "owner-spec")]
                              [::spec/boolean-result  (p/is-cancelled? store wf-id)]]]
          (is (s/valid? spec value)
              (str spec " => " (s/explain-str spec value))))

        (let [child-id (str wf-id "-child")]
          (p/link-child! store wf-id 0 child-id :terminate)
          (let [children (p/list-children store wf-id)]
            (is (s/valid? ::spec/children children)
                (s/explain-str ::spec/children children)))))))

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
