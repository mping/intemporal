(ns intemporal.tests.engine.lifecycle-test
  (:require
   [clojure.test :refer [deftest is]]
   [intemporal.core :as intemporal]
   [intemporal.internal.workflow-registry :as wreg]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.tests.utils :as u]))

(intemporal/defn-workflow lifecycle-workflow [x]
  (inc x))

(defprotocol LifecycleActivities
  (multiply [this x]))

(def lifecycle-activities
  (reify LifecycleActivities
    (multiply [_ x] (* x 3))))

(intemporal/defn-workflow protocol-lifecycle-workflow [x]
  (let [activities (intemporal/stub-protocol LifecycleActivities)]
    (multiply activities x)))

(intemporal/defn-workflow seeded-child-workflow []
  :child-completed)

(intemporal/defn-workflow linking-parent-workflow [child-id]
  (intemporal/run-child-workflow-detached
    seeded-child-workflow []
    :child-id child-id
    :parent-close-policy :abandon))

(deftest submitted-workflow-needs-no-separate-worker-api
  (let [engine (intemporal/make-workflow-engine :poll-ms 5)]
    (try
      (let [{:keys [workflow-id]}
            (intemporal/submit-workflow engine lifecycle-workflow [41])]
        (is (= {:status :completed :result 42 :workflow-id workflow-id}
               (intemporal/await-workflow engine workflow-id :timeout-ms 5000))))
      (finally
        (intemporal/shutdown-engine engine)))))

(deftest stable-owner-recovers-running-work-on-construction
  (let [st       (store/create-store)
        owner-id "lifecycle-recovery-owner"
        client   (intemporal/make-workflow-engine :store st :worker? false)
        wid      (:workflow-id
                  (intemporal/submit-workflow client lifecycle-workflow [9]))]
    (try
      (is (= wid (:workflow-id
                  (first (p/claim-runnable! st owner-id 1
                                            (System/currentTimeMillis)))))
          "the simulated crashed process leaves work RUNNING under its stable owner")
      (let [engine (intemporal/make-workflow-engine
                     :store st :owner-id owner-id :poll-ms 5)]
        (try
          (is (= {:status :completed :result 10 :workflow-id wid}
                 (intemporal/await-workflow engine wid :timeout-ms 5000))
              "construction recovers RUNNING rows before the normal claim loop")
          (finally
            (intemporal/shutdown-engine engine))))
      (finally
        (intemporal/shutdown-engine client)))))

(deftest replay-repairs-a-child-seeded-before-its-link
  (let [st       (store/create-store)
        client   (intemporal/make-workflow-engine :store st :worker? false)
        child-id (str "seeded-child-" (random-uuid))
        parent-id (:workflow-id
                   (intemporal/submit-workflow client linking-parent-workflow
                                               [child-id]))]
    (try
      ;; This is the durable state left by a process that died after saving the
      ;; child start event but before link-child! and the parent's scheduled
      ;; marker. Parent replay must observe the seed and finish the linkage.
      (p/save-event st child-id
                    {:event-type :workflow-started
                     :seq -1
                     :workflow-id child-id
                     :workflow-fn-name (wreg/register-workflow! seeded-child-workflow)
                     :args []
                     :parent-id parent-id
                     :parent-seq 0})
      (let [engine (intemporal/make-workflow-engine
                     :store st :owner-id "child-link-recovery" :poll-ms 5)]
        (try
          (is (= {:status :completed :result child-id :workflow-id parent-id}
                 (intemporal/await-workflow engine parent-id :timeout-ms 5000)))
          (is (= child-id (:child-id (first (p/list-children st parent-id)))))
          (finally
            (intemporal/shutdown-engine engine))))
      (finally
        (intemporal/shutdown-engine client)))))

(deftest configured-protocols-exist-before-first-recovery-claim
  (let [st     (store/create-store)
        client (intemporal/make-workflow-engine :store st :worker? false)
        wid    (:workflow-id
                (intemporal/submit-workflow client protocol-lifecycle-workflow [7]))]
    (try
      (let [engine (intemporal/make-workflow-engine
                     :store st
                     :owner-id "protocol-recovery-owner"
                     :poll-ms 5
                     :protocols {LifecycleActivities lifecycle-activities})]
        (try
          (is (= {:status :completed :result 21 :workflow-id wid}
                 (intemporal/await-workflow engine wid :timeout-ms 5000)))
          (finally
            (intemporal/shutdown-engine engine))))
      (finally
        (intemporal/shutdown-engine client)))))

(deftest client-only-mode-never-polls-or-drives
  (let [st          (store/create-store)
        claim-count (atom 0)
        claim       p/claim-runnable!]
    (with-redefs [p/claim-runnable!
                  (fn [& args]
                    (when (identical? st (first args))
                      (swap! claim-count inc))
                    (apply claim args))]
      (let [client (intemporal/make-workflow-engine :store st :worker? false)
            wid    (:workflow-id
                    (intemporal/submit-workflow client lifecycle-workflow [1]))]
        (try
          (Thread/sleep 30)
          (is (zero? @claim-count))
          (is (= :running (p/get-workflow-status st wid)))
          (is (thrown-with-msg? clojure.lang.ExceptionInfo
                                #"requires a running workflow engine"
                                (intemporal/start-workflow client lifecycle-workflow [1])))
          (is (thrown-with-msg? clojure.lang.ExceptionInfo
                                #"requires a running workflow engine"
                                (intemporal/resume-workflow client wid)))
          (finally
            (intemporal/shutdown-engine client)))))))

(deftest shutdown-stops-polling-and-releases-owned-work
  (let [st          (store/create-store)
        owner-id    "shutdown-owner"
        wid         "unresumable-on-purpose"
        claim-count (atom 0)
        claim       p/claim-runnable!]
    (p/save-event st wid {:event-type :workflow-started
                          :seq -1
                          :workflow-id wid
                          :workflow-fn-name "missing.workflow/function"
                          :args []})
    (with-redefs [p/claim-runnable!
                  (fn [& args]
                    (when (identical? st (first args))
                      (swap! claim-count inc))
                    (apply claim args))]
      (let [engine (intemporal/make-workflow-engine
                     :store st :owner-id owner-id :poll-ms 5)]
        (u/wait-until #(pos? @claim-count) 5000)
        (intemporal/shutdown-engine engine)
        (let [after-shutdown @claim-count]
          (Thread/sleep 30)
          (is (= after-shutdown @claim-count) "shutdown stops future polling"))
        (is (= wid (:workflow-id
                    (first (p/claim-runnable! st "replacement-owner" 1
                                              (System/currentTimeMillis)))))
            "shutdown releases work held by the engine owner")))))
