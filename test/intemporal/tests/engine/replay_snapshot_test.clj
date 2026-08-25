(ns intemporal.tests.engine.replay-snapshot-test
  "Engine replay obtains an immutable store snapshot at the beginning of each
   claimed drive. The FSM reads that in-memory history; it never receives a
   per-event storage capability."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.internal.context :as ctx]
   [intemporal.protocol :as p]
   [intemporal.store :as store]))

(defrecord TracingStore [inner snapshots]
  p/IEngineStore
  (load-history [_ workflow-id] (p/load-history inner workflow-id))
  (get-workflow-status [_ workflow-id] (p/get-workflow-status inner workflow-id))
  (claim-runnable! [_ owner-id limit now-ms]
    (p/claim-runnable! inner owner-id limit now-ms))
  (requeue-running! [_ workflow-id owner-id]
    (p/requeue-running! inner workflow-id owner-id))
  (recover-running! [_ owner-id] (p/recover-running! inner owner-id))

  p/IFsmStore
  (create-workflow! [_ creation] (p/create-workflow! inner creation))
  (load-workflow-state [_ workflow-id] (p/load-workflow-state inner workflow-id))
  (load-snapshot [_ workflow-id]
    (let [snapshot (p/load-snapshot inner workflow-id)]
      (swap! snapshots conj (select-keys snapshot [:revision :history-revision :wake-version]))
      snapshot))
  (load-close-tree [_ workflow-id] (p/load-close-tree inner workflow-id))
  (add-signal! [_ workflow-id signal-name signal]
    (p/add-signal! inner workflow-id signal-name signal))
  (request-cancel! [_ workflow-id] (p/request-cancel! inner workflow-id))
  (wake! [_ workflow-id] (p/wake! inner workflow-id))
  (commit-transition! [_ transition] (p/commit-transition! inner transition))
  (release-owner! [_ owner-id] (p/release-owner! inner owner-id)))

(def execution-log (atom []))

(defn step-activity [n]
  (swap! execution-log conj n)
  (* 2 n))

(defn linear-workflow [n]
  (let [activity (intemporal/stub #'step-activity)]
    (reduce (fn [total i] (+ total (activity i))) 0 (range n))))

(deftest history-index-is-a-first-wins-snapshot-index
  (testing "history lookup is derived from one immutable vector"
    (let [history [{:event-type :activity-completed :seq 1 :result :first}
                   {:event-type :activity-completed :seq 1 :result :second}
                   {:event-type :activity-failed :seq 1 :error {}}]
          index (ctx/index-history history)]
      (is (= :first (:result (get index [:activity-completed 1]))))
      (is (= (ctx/find-event history :activity-completed 1)
             (get index [:activity-completed 1])))
      (is (= (ctx/find-event history :activity-failed 1)
             (get index [:activity-failed 1]))))))

(deftest replay-reads-claimed-snapshots-and-executes-each-frontier-effect-once
  (reset! execution-log [])
  (let [snapshots (atom [])
        workflow-store (->TracingStore (store/create-store) snapshots)
        engine (intemporal/start-engine :store workflow-store :threads 2
                                        :owner-id "replay-snapshot-engine")]
    (try
      (let [result (intemporal/start-workflow engine linear-workflow [8]
                     :workflow-id "replay-snapshot-workflow")]
        (is (= :completed (:status result)))
        (is (= 56 (:result result)))
        (is (= (vec (range 8)) @execution-log))
        (is (<= 9 (count @snapshots))
            "each suspended frontier requires a newly claimed durable snapshot")
        (is (apply <= (map :history-revision @snapshots))
            "snapshots never move history backwards"))
      (finally
        (intemporal/shutdown-engine engine)))))
