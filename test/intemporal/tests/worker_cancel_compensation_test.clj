(ns intemporal.tests.worker-cancel-compensation-test
  "Regression (A4): under WORKER drive, cancelling a workflow must re-drive it so
   the body observes the cancel flag, the user's catch runs saga compensations,
   and the terminal :workflow-cancelled event is written. Previously every store
   excluded cancelled workflows from worker scans, so a worker-driven workflow
   was never re-entered and compensations silently never ran.
   Runs against InMemory (always) plus JDBC and FDB (^:integration)."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.tests.child-workflow-util :as u]))

;; Plain global atoms: activities run on executor threads.
(defonce step-calls (atom 0))
(defonce undo-calls (atom 0))

(defn cc-step [x] (swap! step-calls inc) [:stepped x])
(defn cc-undo [x] (swap! undo-calls inc) [:undone x])

(intemporal/defn-workflow cancel-comp-wf
  "Completes one step (registering its compensation), then waits on a signal
   that never arrives. Cancellation flows through the catch and rolls back."
  [x]
  (let [s    (intemporal/saga)
        step (intemporal/stub #'cc-step)
        undo (intemporal/stub #'cc-undo)]
    (try
      (step x)
      (intemporal/add-compensation s #(undo x))
      (intemporal/wait-for-signal "never-sent")
      :done
      (catch Exception e
        (intemporal/compensate s)
        (throw e)))))

(defn- await-pred
  "Poll until (pred) is truthy or timeout; returns the last value."
  [pred timeout-ms]
  (let [deadline (+ (System/currentTimeMillis) timeout-ms)]
    (loop []
      (let [v (pred)]
        (cond
          v v
          (> (System/currentTimeMillis) deadline) v
          :else (do (Thread/sleep 25) (recur)))))))

(defn- check-worker-cancel-compensates [store]
  (reset! step-calls 0)
  (reset! undo-calls 0)
  (u/with-worker store
    (fn [engine]
      (let [wid (str "cc-" (random-uuid))]
        (intemporal/submit-workflow engine #'cancel-comp-wf [42] :workflow-id wid)
        ;; Wait until the step activity completed and the workflow is suspended
        ;; on its signal.
        (is (some? (await-pred #(p/find-event store wid :activity-completed 0) 3000))
            "step activity completed before cancel")
        (is (= :running (u/await-status store wid :running 3000)))
        (intemporal/cancel-workflow store wid)
        ;; The worker must re-drive the cancelled workflow: compensation runs,
        ;; then the terminal :workflow-cancelled event is written.
        (is (some? (await-pred #(->> (p/load-history store wid)
                                     (filter (fn [e] (= :workflow-cancelled (:event-type e))))
                                     first)
                               5000))
            "terminal :workflow-cancelled event written under worker drive")
        (is (= :cancelled (p/get-workflow-status store wid)))
        (is (= 1 @step-calls) "step ran exactly once")
        (is (= 1 @undo-calls) "compensation ran exactly once under worker drive")))))

(deftest worker-cancel-runs-compensations
  (testing "in-memory" (check-worker-cancel-compensates (u/in-memory))))
(deftest ^:integration worker-cancel-compensation-jdbc
  (testing "jdbc" (let [s (u/jdbc)] (try (check-worker-cancel-compensates s) (finally (.close s))))))
(deftest ^:integration worker-cancel-compensation-fdb
  (testing "fdb" (check-worker-cancel-compensates (u/fdb))))
