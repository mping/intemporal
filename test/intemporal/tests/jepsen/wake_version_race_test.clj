(ns intemporal.tests.jepsen.wake-version-race-test
  "A wake committed after a drive starts but immediately before it parks must
   invalidate that park. The drive stays RUNNING, replays, and consumes the
   signal instead of becoming an indefinite WAITING workflow."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.tests.jepsen.racing-store :refer [->ParkRacingStore]]))

(defn waiting-workflow []
  (intemporal/wait-for-signal "go"))

(deftest signal-between-drive-and-park-is-not-lost
  (testing "wake-version rejects the stale park"
    (let [inner  (store/create-store)
          raced? (atom false)
          store  (->ParkRacingStore inner raced? "go"
                                    {:id "race" :payload {:payload :arrived}})
          engine (intemporal/make-workflow-engine :store store :threads 2)
          wf-id  (str "wake-race-" (random-uuid))]
      (try
        (is (= {:status :completed
                :workflow-id wf-id
                :result {:payload :arrived}}
               (intemporal/start-workflow engine waiting-workflow [] :workflow-id wf-id)))
        (is @raced? "the signal was injected immediately before park")
        (is (= :completed (p/get-workflow-status inner wf-id)))
        (is (empty? (get (p/get-pending-signals inner wf-id) "go")))
        (finally
          (intemporal/shutdown-engine engine))))))

(deftest signal-between-worker-drive-and-park-is-not-lost
  (testing "a worker-owned RUNNING workflow continues under the same owner"
    (let [inner  (store/create-store)
          raced? (atom false)
          store  (->ParkRacingStore inner raced? "go"
                                    {:id "worker-race"
                                     :payload {:payload :arrived}})
          engine (intemporal/make-workflow-engine
                   :store store :threads 2
                   :owner-id "wake-race-worker"
                   :poll-ms 20
                   :workflow-concurrency 1)
          wf-id  (str "worker-wake-race-" (random-uuid))]
      (try
        (intemporal/submit-workflow engine waiting-workflow [] :workflow-id wf-id)
        (is (= {:status :completed
                :result {:payload :arrived}
                :workflow-id wf-id}
               (intemporal/await-workflow engine wf-id :timeout-ms 3000)))
        (is @raced? "the signal was injected immediately before worker park")
        (finally
          (intemporal/shutdown-engine engine))))))
