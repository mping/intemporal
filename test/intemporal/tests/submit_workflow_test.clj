(ns intemporal.tests.submit-workflow-test
  "Phase B4 — submit-workflow + await-workflow.

  submit-workflow returns {:workflow-id …} immediately without running the workflow
  (a worker drives it); await-workflow waits until the workflow reaches a terminal
  state and returns its result."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.store :as store]))

(defn dbl [x] (* x 2))

(intemporal/defn-workflow submit-wf [x]
  (let [a (intemporal/stub #'dbl)]
    (a x)))

(deftest submit-returns-id-then-await-completes
  (testing "submit-workflow returns an id immediately; a worker runs it; await yields the result"
    (let [st (store/create-store)
          e  (intemporal/make-workflow-engine :store st :threads 2)
          stop (intemporal/start-worker e :poll-ms 25)]
      (try
        (let [{:keys [workflow-id]} (intemporal/submit-workflow e #'submit-wf [21])]
          (is (string? workflow-id) "submit-workflow returns a workflow-id immediately")
          (let [r (intemporal/await-workflow e workflow-id :timeout-ms 5000)]
            (is (= :completed (:status r)) "await sees the workflow reach terminal state")
            (is (= 42 (:result r)) "21*2 = 42")))
        (finally (stop) (intemporal/shutdown-engine e))))))

(deftest submit-honours-explicit-id
  (testing "submit-workflow uses a caller-supplied :workflow-id"
    (let [st (store/create-store)
          e  (intemporal/make-workflow-engine :store st :threads 2)
          stop (intemporal/start-worker e :poll-ms 25)]
      (try
        (let [{:keys [workflow-id]} (intemporal/submit-workflow e #'submit-wf [50]
                                                                :workflow-id "explicit-1")]
          (is (= "explicit-1" workflow-id))
          (is (= {:status :completed :result 100}
                 (intemporal/await-workflow e "explicit-1" :timeout-ms 5000))))
        (finally (stop) (intemporal/shutdown-engine e))))))
