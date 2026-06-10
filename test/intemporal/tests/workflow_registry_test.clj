(ns intemporal.tests.workflow-registry-test
  "Phase B3 — workflow registry + resume-by-id.

  Verifies that resume-workflow [engine workflow-id] (no fn, no args) can resolve
  both the workflow function and its original arguments from the :workflow-started
  event via the process-global registry, and resume to completion without
  re-running already-completed activities."
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal.core :as intemporal]
            [intemporal.store :as store]
            [intemporal.internal.workflow-registry :as wreg]))

(def exec-count (atom 0))

(defn reg-activity [x]
  (swap! exec-count inc)
  (* x 2))

(defn reg-workflow [a b]
  (let [act (intemporal/stub #'reg-activity)
        r1  (act a)]
    (intemporal/wait-for-signal "go")
    (+ r1 (act b))))

(deftest registry-basic-ops
  (testing "register-workflow! / resolve-workflow / clear-registry!"
    (wreg/clear-registry!)
    (let [nm (wreg/register-workflow! #'reg-workflow)]
      (is (= "intemporal.tests.workflow-registry-test/reg-workflow" nm))
      (is (= @#'reg-workflow (wreg/resolve-workflow nm)))
      (wreg/clear-registry!)
      (is (thrown-with-msg? clojure.lang.ExceptionInfo #"No workflow function registered"
                            (wreg/resolve-workflow nm))))))

(deftest resume-by-id-resolves-fn-and-args
  (testing "resume-workflow [engine wf-id] resolves fn+args from history"
    (reset! exec-count 0)
    (wreg/clear-registry!)
    (let [st  (store/->InMemoryStore (atom {}))
          wid "reg-resume-1"]
      ;; Phase 1: start, run until it suspends on signal, then simulate a crash.
      (let [e1 (intemporal/make-workflow-engine :store st :threads 2)
            f1 (future (intemporal/start-workflow e1 reg-workflow [10 5]
                                                  :workflow-id wid))]
        (Thread/sleep 300)
        (future-cancel f1)
        (intemporal/shutdown-engine e1))
      (is (= 1 @exec-count) "only the first activity ran before suspension")
      ;; Phase 2: fresh engine, deliver signal, resume BY ID ONLY.
      (let [e2 (intemporal/make-workflow-engine :store st :threads 2)]
        (intemporal/send-signal st wid "go" {})
        (let [r (intemporal/resume-workflow e2 wid)]   ; no fn, no args
          (is (= :completed (:status r)) "resumed-by-id workflow completes")
          (is (= 30 (:result r)) "10*2 + 5*2 = 30")
          (is (= 2 @exec-count)
              "second activity ran once on resume; first not re-executed"))
        (intemporal/shutdown-engine e2)))))
