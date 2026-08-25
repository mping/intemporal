(ns intemporal.tests.engine-api-test
  (:require
   [clojure.test :refer [deftest is]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.store :as store]))

(intemporal/defn-workflow engine-api-workflow [x]
  (inc x))

(intemporal/defn-workflow engine-api-child [x]
  (* 2 x))

(intemporal/defn-workflow engine-api-parent [x]
  (intemporal/run-child-workflow engine-api-child [x]))

(intemporal/defn-workflow engine-api-waiting-child []
  (intemporal/wait-for-signal "never"))

(intemporal/defn-workflow engine-api-detaching-parent [child-id]
  (intemporal/run-child-workflow-detached engine-api-waiting-child []
    :child-id child-id)
  :parent-done)

(intemporal/defn-workflow engine-api-cancellable []
  (intemporal/wait-for-signal "never"))

(intemporal/defn-workflow engine-api-signalled []
  (intemporal/wait-for-signal "go"))

(defn engine-api-activity [x]
  (* 3 x))

(intemporal/defn-workflow engine-api-activity-workflow [x]
  ((intemporal/stub #'engine-api-activity) x))

(intemporal/defn-workflow engine-api-async-workflow [x]
  (let [handle (intemporal/async #((intemporal/stub #'engine-api-activity) x))]
    (intemporal/join handle)))

(def retry-attempts (atom 0))

(defn engine-api-retrying-activity [x]
  (if (= 1 (swap! retry-attempts inc))
    (throw (ex-info "retry once" {}))
    x))

(intemporal/defn-workflow engine-api-retry-workflow [x]
  ((intemporal/stub #'engine-api-retrying-activity
                    :retry-policy (intemporal/make-retry-policy
                                    :max-attempts 2 :backoff-ms 1))
   x))

(deftest start-engine-requires-a-stable-owner
  (is (thrown-with-msg? clojure.lang.ExceptionInfo
                        #"requires a non-empty explicit :owner-id"
                        (intemporal/start-engine))))

(deftest running-engine-owns-submission-and-execution
  (let [engine (intemporal/start-engine :owner-id "engine-api-test" :poll-ms 1)]
    (try
      (let [{:keys [workflow-id]}
            (intemporal/submit-workflow engine engine-api-workflow [41]
              :workflow-id "engine-api-test-workflow")]
        (is (= {:status :completed :workflow-id workflow-id :result 42}
               (intemporal/await-workflow engine workflow-id :timeout-ms 2000))))
      (finally
        (intemporal/shutdown-engine engine)))))

(deftest activity-execution-is-bracketed-by-fsm-transitions
  (let [engine (intemporal/start-engine :owner-id "engine-api-activity-test" :poll-ms 1)]
    (try
      (is (= {:status :completed :workflow-id "engine-api-activity" :result 42}
             (intemporal/start-workflow engine engine-api-activity-workflow [14]
                                        :workflow-id "engine-api-activity")))
      (finally
        (intemporal/shutdown-engine engine)))))

(deftest async-batches-commit-pre-and-post-effect-transitions
  (let [engine (intemporal/start-engine :owner-id "engine-api-async-test" :poll-ms 1)]
    (try
      (is (= {:status :completed :workflow-id "engine-api-async" :result 42}
             (intemporal/start-workflow engine engine-api-async-workflow [14]
                                        :workflow-id "engine-api-async")))
      (finally
        (intemporal/shutdown-engine engine)))))

(deftest retry-park-and-outcome-commit-through-the-fsm
  (reset! retry-attempts 0)
  (let [engine (intemporal/start-engine :owner-id "engine-api-retry-test" :poll-ms 1)]
    (try
      (is (= {:status :completed :workflow-id "engine-api-retry" :result 42}
             (intemporal/start-workflow engine engine-api-retry-workflow [42]
                                        :workflow-id "engine-api-retry")))
      (is (= 2 @retry-attempts))
      (finally
        (intemporal/shutdown-engine engine)))))

(deftest cancellation-reaches-the-atomic-terminal-transition
  (let [workflow-store (store/create-store :checked? true)
        engine (intemporal/start-engine :store workflow-store :owner-id "engine-api-cancel-test"
                                        :poll-ms 1)]
    (try
      (intemporal/submit-workflow engine engine-api-cancellable []
        :workflow-id "engine-api-cancel")
      (Thread/sleep 20)
      (intemporal/cancel-workflow workflow-store "engine-api-cancel")
      (is (= :cancelled
             (:status (intemporal/await-workflow engine "engine-api-cancel"
                        :timeout-ms 2000))))
      (finally
        (intemporal/shutdown-engine engine)))))

(deftest signal-envelope-is-consumed-by-a-guarded-fsm-transition
  (let [workflow-store (store/create-store :checked? true)
        engine (intemporal/start-engine :store workflow-store :owner-id "engine-api-signal-test"
                                        :poll-ms 1)]
    (try
      (intemporal/submit-workflow engine engine-api-signalled []
        :workflow-id "engine-api-signal")
      (Thread/sleep 20)
      (is (= {:signal-id "signal-one"}
             (intemporal/send-signal workflow-store "engine-api-signal" "go" :approved
                                     :signal-id "signal-one")))
      (is (= {:status :completed :workflow-id "engine-api-signal" :result :approved}
             (intemporal/await-workflow engine "engine-api-signal" :timeout-ms 2000)))
      (finally
        (intemporal/shutdown-engine engine)))))

(deftest terminal-close-is-one-parent-transition
  (let [workflow-store (store/create-store :checked? true)
        engine (intemporal/start-engine :store workflow-store :owner-id "engine-api-close-test"
                                        :poll-ms 1 :workflow-concurrency 1)]
    (try
      (is (= {:status :completed :workflow-id "engine-api-close-parent"
              :result :parent-done}
             (intemporal/start-workflow engine engine-api-detaching-parent
                                        ["engine-api-close-child"]
                                        :workflow-id "engine-api-close-parent")))
      (is (= :terminated
             (p/get-workflow-status workflow-store "engine-api-close-child")))
      (finally
        (intemporal/shutdown-engine engine)))))

(deftest child-creation-is-committed-by-the-engine
  (let [engine (intemporal/start-engine :owner-id "engine-api-child-test" :poll-ms 1)]
    (try
      (is (= {:status :completed :workflow-id "engine-api-parent" :result 42}
             (intemporal/start-workflow engine engine-api-parent [21]
                                        :workflow-id "engine-api-parent")))
      (finally
        (intemporal/shutdown-engine engine)))))
