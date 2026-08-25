(ns intemporal.tests.worker-scheduling-test
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.protocol :as p]
   [intemporal.store :as store]))

(defn indefinite-waiter [signal-name]
  (intemporal/wait-for-signal signal-name))

(defn ready-workflow [] :ready)

(defonce ^:private activity-gate (atom nil))
(defonce ^:private activity-entered (atom nil))

(defn blocking-activity []
  (deliver @activity-entered :entered)
  @@activity-gate
  :unblocked)

(defn blocking-workflow []
  ((intemporal/stub #'blocking-activity)))

(defn- await-pred [pred timeout-ms]
  (let [deadline (+ (System/currentTimeMillis) timeout-ms)]
    (loop []
      (cond
        (pred) true
        (< (System/currentTimeMillis) deadline) (do (Thread/sleep 10) (recur))
        :else false))))

(deftest indefinite-waiters-do-not-crowd-out-runnable-work
  (testing "more WAITING workflows than batch-size disappear from engine scans"
    (let [store       (store/create-store)
          engine      (intemporal/start-engine :store store :threads 4
                        :owner-id "waiting-scan-engine"
                        :poll-ms 20
                        :batch-size 2
                        :workflow-concurrency 2)
          waiter-ids  (mapv #(str "waiter-" % "-" (random-uuid)) (range 6))
          loads       (atom {})
          original-load p/load-snapshot]
      (try
        (with-redefs [p/load-snapshot (fn [s workflow-id]
                                       (swap! loads update workflow-id (fnil inc 0))
                                       (original-load s workflow-id))]
          (doseq [workflow-id waiter-ids]
            (intemporal/submit-workflow engine indefinite-waiter [workflow-id]
              :workflow-id workflow-id))
          (is (await-pred #(every? (fn [workflow-id]
                                     (pos? (get @loads workflow-id 0)))
                                   waiter-ids)
                          3000)
              "every waiter was driven once and parked")
          (Thread/sleep 150)
          (let [parked-loads (select-keys @loads waiter-ids)
                ready-id     (str "ready-" (random-uuid))
                started-at   (System/currentTimeMillis)]
            (intemporal/submit-workflow engine ready-workflow [] :workflow-id ready-id)
            (is (await-pred #(= :completed (p/get-workflow-status store ready-id)) 1000)
                "new runnable work completes promptly behind more than one batch of waiters")
            (is (< (- (System/currentTimeMillis) started-at) 1000))
            (Thread/sleep 150)
            (is (= parked-loads (select-keys @loads waiter-ids))
                "indefinite waiter snapshots stop loading after park")))
        (finally
          (intemporal/shutdown-engine engine))))))

(deftest bounded-drive-pool-does-not-serialize-workflows
  (testing "one blocked workflow drive leaves capacity for another"
    (let [gate        (promise)
          entered     (promise)
          _           (reset! activity-gate gate)
          _           (reset! activity-entered entered)
          store       (store/create-store)
          engine      (intemporal/start-engine :store store :threads 2
                        :owner-id "bounded-drive-engine"
                        :poll-ms 20
                        :batch-size 10
                        :workflow-concurrency 2)
          blocked-id  (str "blocked-" (random-uuid))
          ready-id    (str "ready-" (random-uuid))]
      (try
        (intemporal/submit-workflow engine blocking-workflow [] :workflow-id blocked-id)
        (is (= :entered (deref entered 2000 :timeout)) "the first drive is blocked in its activity")
        (intemporal/submit-workflow engine ready-workflow [] :workflow-id ready-id)
        (is (await-pred #(= :completed (p/get-workflow-status store ready-id)) 1000)
            "the second workflow completes through the other drive-pool slot")
        (deliver gate :go)
        (is (await-pred #(= :completed (p/get-workflow-status store blocked-id)) 2000))
        (finally
          (deliver gate :stop)
          (intemporal/shutdown-engine engine))))))
