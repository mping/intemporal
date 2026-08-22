(ns intemporal.tests.store.test-suite
  (:require
   [clojure.spec.alpha :as s]
   [clojure.test :refer [is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.spec :as spec]
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

(defn- started-event [workflow-id]
  {:event-type :workflow-started
   :seq -1
   :workflow-id workflow-id
   :args []
   :timestamp (System/currentTimeMillis)})

(defn- only-claim [claims workflow-id wake-version]
  (is (= [{:workflow-id workflow-id :wake-version wake-version}]
         (filterv #(= workflow-id (:workflow-id %)) claims))))

(defn- unclaimed? [claims workflow-id]
  (not-any? #(= workflow-id (:workflow-id %)) claims))

(defn- run-scheduling-state-tests [store]
  (testing "durable RUNNABLE/RUNNING/WAITING state machine"
    (testing "missing workflows cannot be claimed or woken"
      (let [missing-id (str "missing-" (random-uuid))]
        (is (false? (p/wake-workflow store missing-id)))
        (is (unclaimed? (p/claim-runnable! store "nobody" 1000
                          (System/currentTimeMillis))
                        missing-id))))

    (let [workflow-id (str "schedule-" (random-uuid))
          owner-id    (str "owner-" (random-uuid))
          now         (System/currentTimeMillis)
          future-at   (+ now 60000)]
      (p/save-event store workflow-id (started-event workflow-id))

      (testing "creation is runnable and claiming returns a versioned claim"
        (only-claim (p/claim-runnable! store owner-id 1000 now) workflow-id 0)
        (is (= :running (p/get-workflow-status store workflow-id))))

      (testing "an indefinite park is absent from worker claims"
        (is (= {:park-status :parked}
               (p/park-workflow! store workflow-id 0
                                 [{:event-type :timer-scheduled
                                   :seq 0
                                   :fire-at future-at
                                   :duration-ms 60000
                                   :timestamp now}]
                                 nil)))
        (is (unclaimed? (p/claim-runnable! store owner-id 1000 now) workflow-id))
        (is (= :running (p/get-workflow-status store workflow-id))))

      (testing "wake makes WAITING runnable exactly once"
        (is (true? (p/wake-workflow store workflow-id)))
        (only-claim (p/claim-runnable! store owner-id 1000 now) workflow-id 1)
        (is (unclaimed? (p/claim-runnable! store owner-id 1000 now) workflow-id)))

      (testing "a timed wait is claimed only when due"
        (is (= {:park-status :parked}
               (p/park-workflow! store workflow-id 1 [] future-at)))
        (is (unclaimed? (p/claim-runnable! store owner-id 1000 now) workflow-id))
        (only-claim (p/claim-runnable! store owner-id 1000 (inc future-at)) workflow-id 1))

      (testing "a wake racing with park rejects the stale park"
        (is (true? (p/wake-workflow store workflow-id)))
        (is (unclaimed? (p/claim-runnable! store owner-id 1000 now) workflow-id)
            "waking RUNNING does not concurrently redispatch it")
        (is (= {:park-status :wake-raced :wake-version 2}
               (p/park-workflow! store workflow-id 1 [] nil))))

      (testing "interrupted and crashed drives are requeued"
        (is (true? (p/requeue-running! store workflow-id)))
        (only-claim (p/claim-runnable! store owner-id 1000 now) workflow-id 2)
        (is (pos? (p/recover-running! store owner-id)))
        (only-claim (p/claim-runnable! store owner-id 1000 now) workflow-id 2))

      (testing "terminal persistence removes all scheduling eligibility"
        (is (= {:park-status :terminal}
               (p/park-workflow! store workflow-id 2
                                 [{:event-type :workflow-completed
                                   :seq 1
                                   :result :done
                                   :timestamp (System/currentTimeMillis)}]
                                 nil)))
        (is (= :completed (p/get-workflow-status store workflow-id)))
        (is (false? (p/wake-workflow store workflow-id)))
        (is (unclaimed? (p/claim-runnable! store owner-id 1000 (System/currentTimeMillis))
                        workflow-id))
        (p/release-owner store owner-id)))

    (testing "external completion appends and wakes atomically"
      (let [workflow-id (str "external-wake-" (random-uuid))
            owner-id    (str "owner-" (random-uuid))]
        (p/save-event store workflow-id (started-event workflow-id))
        (only-claim (p/claim-runnable! store owner-id 1000
                                       (System/currentTimeMillis))
                    workflow-id 0)
        (is (= {:park-status :parked}
               (p/park-workflow! store workflow-id 0 [] nil)))
        (is (true? (p/save-events-and-wake!
                     store workflow-id
                     [{:event-type :timer-fired
                       :seq 0
                       :timestamp (System/currentTimeMillis)}])))
        (only-claim (p/claim-runnable! store owner-id 1000 (System/currentTimeMillis))
                    workflow-id 1)
        (is (some? (p/find-event store workflow-id :timer-fired 0)))
        (p/release-owner store owner-id)))))

(defn run-store-tests [store]
  (run-scheduling-state-tests store)

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
                              [::spec/boolean-result  (p/is-cancelled? store wf-id)]]]
          (is (s/valid? spec value)
              (str spec " => " (s/explain-str spec value))))

        (let [claims (p/claim-runnable! store "owner-spec" 1000
                                        (System/currentTimeMillis))]
          (is (s/valid? ::spec/drive-claims claims)
              (s/explain-str ::spec/drive-claims claims))
          (is (some #(= wf-id (:workflow-id %)) claims))
          (is (s/valid? ::spec/boolean-result
                        (p/requeue-running! store wf-id))))

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
