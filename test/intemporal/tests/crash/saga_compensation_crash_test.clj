(ns ^:crash intemporal.tests.crash.saga-compensation-crash-test
  "Crash recovery test for saga compensations.
   A compensation suspends mid-way (waiting on a signal) to simulate a crash
   between compensating activities. After resume, each compensating activity
   must run exactly once and the workflow finalizes :failed."
  (:require [intemporal.core :as intemporal]
            [intemporal.store :as store]
            [intemporal.protocol :as p]
            [clojure.test :refer [deftest is testing]]))

;; ============================================================================
;; Activities - count actual executions (replays don't re-run the fn)
;; ============================================================================

(def exec-counts (atom {}))
(defn- bump! [k] (swap! exec-counts update k (fnil inc 0)))

(defn book-hotel  [order] (bump! :book-hotel)  {:hotel order})
(defn book-flight [order] (bump! :book-flight) {:flight order})
(defn charge-card-fails [order]
  (bump! :charge-card)
  (throw (ex-info "card declined" {:order order})))

(defn cancel-hotel  [_] (bump! :cancel-hotel)  :hotel-cancelled)
(defn cancel-flight [_] (bump! :cancel-flight) :flight-cancelled)

;; The flight compensation cancels the flight, then waits for a signal. The
;; missing signal is our deterministic "crash" point: the workflow suspends
;; mid-compensation and is resumed by a fresh engine in phase 2.
(defn crash-saga [order]
  (let [s       (intemporal/saga)
        hotel   (intemporal/stub #'book-hotel)
        flight  (intemporal/stub #'book-flight)
        charge  (intemporal/stub #'charge-card-fails)
        chotel  (intemporal/stub #'cancel-hotel)
        cflight (intemporal/stub #'cancel-flight)]
    (try
      (let [h (hotel order)]
        (intemporal/add-compensation s #(chotel h)))
      (let [f (flight order)]
        ;; flight compensation cancels the flight, then waits for a signal -
        ;; the deterministic "crash" point mid-compensation.
        (intemporal/add-compensation s #(do (cflight f)
                                            (intemporal/wait-for-signal "continue-compensation"))))
      (charge order)
      :booked
      (catch Exception e
        (intemporal/compensate s)
        (throw e)))))

(defn- count-events [store workflow-id event-type]
  (->> (p/load-history store workflow-id)
       (filter #(= event-type (:event-type %)))
       count))

;; ============================================================================
;; Test
;; ============================================================================

(deftest test-compensation-survives-crash
  (testing "Compensation suspended mid-way resumes and runs each step exactly once"
    (reset! exec-counts {})
    (let [workflow-id "saga-crash-1"
          persistent-store (store/->InMemoryStore (atom {}))]

      ;; Phase 1: run until the flight compensation suspends waiting for a signal
      (testing "Phase 1: fails, begins compensation, suspends mid-compensation"
        (let [engine-1 (intemporal/make-workflow-engine :store persistent-store :threads 2)
              fut (future
                    (intemporal/start-workflow engine-1 crash-saga ["o1"]
                                               :workflow-id workflow-id))]
          ;; Give it time to: book hotel+flight, fail charge, cancel-flight,
          ;; then suspend at wait-for-signal.
          (Thread/sleep 300)
          (future-cancel fut)
          (intemporal/shutdown-engine engine-1)

          ;; flight was cancelled, hotel not yet (we suspend before its comp)
          (is (= 1 (get @exec-counts :cancel-flight)))
          (is (nil? (get @exec-counts :cancel-hotel)))
          ;; not yet finalized
          (is (zero? (count-events persistent-store workflow-id :workflow-failed)))))

      ;; Phase 2: fresh engine, signal + resume -> finishes compensating, fails
      (testing "Phase 2: resume completes compensation and finalizes :failed"
        (let [engine-2 (intemporal/make-workflow-engine :store persistent-store :threads 2)]
          (intemporal/send-signal persistent-store workflow-id "continue-compensation" {})
          (let [result (intemporal/resume-workflow engine-2 workflow-id crash-saga ["o1"])]
            (is (= :failed (:status result)))
            ;; each compensating activity ran exactly once across the crash
            (is (= 1 (get @exec-counts :cancel-flight)))
            (is (= 1 (get @exec-counts :cancel-hotel)))
            ;; exactly one terminal failure event
            (is (= 1 (count-events persistent-store workflow-id :workflow-failed)))
            (intemporal/shutdown-engine engine-2)))))))
