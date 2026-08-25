(ns intemporal.tests.saga-test
  "Tests for saga / compensation support (saga + add-compensation + compensate).
   A compensation registered for a successful step runs (in reverse order)
   when the workflow later fails and the catch block calls compensate."
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.core :as intemporal]
   [intemporal.tests.utils :refer [with-result]]
   [matcher-combinators.matchers :as m]
   [matcher-combinators.test :refer [match?]]))

;; ============================================================================
;; Activities - record execution order + args into a shared atom
;; ============================================================================

(def events (atom []))
(defn- record! [e] (swap! events conj e))

(defn book-hotel [order] (record! [:book-hotel order]) {:hotel order})
(defn book-flight [order] (record! [:book-flight order]) {:flight order})
(defn charge-card [order] (record! [:charge-card order]) {:charge order})

(defn charge-card-fails [order]
  (record! [:charge-card order])
  (throw (ex-info "card declined" {:order order})))

(defn book-flight-fails [order]
  (record! [:book-flight order])
  (throw (ex-info "no seats" {:order order})))

(defn cancel-hotel [v] (record! [:cancel-hotel v]) :hotel-cancelled)
(defn cancel-flight [v] (record! [:cancel-flight v]) :flight-cancelled)

(defn failing-cancel-flight [v]
  (record! [:cancel-flight v])
  (throw (ex-info "refund provider down" {:v v})))

(defn slow-step [x] (record! [:slow x]) (Thread/sleep 50) x)

;; ============================================================================
;; Workflows
;; ============================================================================

(defn happy-saga [order]
  (let [s       (intemporal/saga)
        hotel   (intemporal/stub #'book-hotel)
        flight  (intemporal/stub #'book-flight)
        charge  (intemporal/stub #'charge-card)
        chotel  (intemporal/stub #'cancel-hotel)
        cflight (intemporal/stub #'cancel-flight)]
    (try
      (let [h (hotel order)
            _ (intemporal/add-compensation s #(chotel h))
            f (flight order)
            _ (intemporal/add-compensation s #(cflight f))]
        (charge order)
        :booked)
      (catch Exception e
        (intemporal/compensate s)
        (throw e)))))

(defn failing-saga [order]
  (let [s       (intemporal/saga)
        hotel   (intemporal/stub #'book-hotel)
        flight  (intemporal/stub #'book-flight)
        charge  (intemporal/stub #'charge-card-fails)
        chotel  (intemporal/stub #'cancel-hotel)
        cflight (intemporal/stub #'cancel-flight)]
    (try
      (let [h (hotel order)
            _ (intemporal/add-compensation s #(chotel h))
            f (flight order)
            _ (intemporal/add-compensation s #(cflight f))]
        (charge order)
        :booked)
      (catch Exception e
        (intemporal/compensate s)
        (throw e)))))

(defn fail-on-flight-saga [order]
  (let [s       (intemporal/saga)
        hotel   (intemporal/stub #'book-hotel)
        flight  (intemporal/stub #'book-flight-fails)
        chotel  (intemporal/stub #'cancel-hotel)
        cflight (intemporal/stub #'cancel-flight)]
    (try
      (let [h (hotel order)
            _ (intemporal/add-compensation s #(chotel h))
            ;; flight fails before its compensation is registered
            f (flight order)
            _ (intemporal/add-compensation s #(cflight f))]
        :booked)
      (catch Exception e
        (intemporal/compensate s)
        (throw e)))))

;; Books hotel + flight, then stays busy in a loop so a cancel arrives after the
;; bookings have completed (mirrors cancellation-test/long-flow).
(defn cancel-rollback-saga [order]
  (let [s       (intemporal/saga)
        hotel   (intemporal/stub #'book-hotel)
        flight  (intemporal/stub #'book-flight)
        chotel  (intemporal/stub #'cancel-hotel)
        cflight (intemporal/stub #'cancel-flight)
        slow    (intemporal/stub #'slow-step)]
    (try
      (let [h (hotel order)
            _ (intemporal/add-compensation s #(chotel h))
            f (flight order)
            _ (intemporal/add-compensation s #(cflight f))]
        (loop [i 0]
          (if (< i 40) (do (slow i) (recur (inc i))) :booked)))
      (catch Exception e
        (intemporal/compensate s)
        (throw e)))))

;; Cancel lands before any compensation is registered (busy first).
(defn cancel-early-saga [order]
  (let [s      (intemporal/saga)
        hotel  (intemporal/stub #'book-hotel)
        chotel (intemporal/stub #'cancel-hotel)
        slow   (intemporal/stub #'slow-step)]
    (try
      (loop [i 0]
        (when (< i 3) (slow i) (recur (inc i))))
      (let [h (hotel order)
            _ (intemporal/add-compensation s #(chotel h))]
        :booked)
      (catch Exception e
        (intemporal/compensate s)
        (throw e)))))

;; Compensation activity itself fails -> swallowed, others still run.
(defn failing-comp-saga [order]
  (let [s       (intemporal/saga)
        hotel   (intemporal/stub #'book-hotel)
        flight  (intemporal/stub #'book-flight)
        charge  (intemporal/stub #'charge-card-fails)
        chotel  (intemporal/stub #'cancel-hotel)
        cflight (intemporal/stub #'failing-cancel-flight)]
    (try
      (let [h (hotel order)
            _ (intemporal/add-compensation s #(chotel h))
            f (flight order)
            _ (intemporal/add-compensation s #(cflight f))]
        (charge order)
        :booked)
      (catch Exception e
        (intemporal/compensate s)
        (throw e)))))

;; ============================================================================
;; Tests
;; ============================================================================

(deftest test-happy-path-no-compensation
  (testing "When the workflow succeeds, no compensation runs"
    (reset! events [])
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2}]
      (with-result [result (intemporal/start-workflow engine happy-saga ["o1"])]
        (is (match? {:status :completed :result :booked} result))
        (is (= [[:book-hotel "o1"] [:book-flight "o1"] [:charge-card "o1"]]
               @events))))))

(deftest test-compensation-runs-lifo-on-failure
  (testing "On a later failure, compensations run in reverse order with the forward result"
    (reset! events [])
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2}]
      (with-result [result (intemporal/start-workflow engine failing-saga ["o2"])]
        (is (match? {:status :failed} result))
        ;; forward steps, the failing charge, then compensations in reverse (LIFO)
        (is (= [[:book-hotel "o2"]
                [:book-flight "o2"]
                [:charge-card "o2"]
                [:cancel-flight {:flight "o2"}]
                [:cancel-hotel {:hotel "o2"}]]
               @events))))))

(deftest test-failed-step-registers-no-compensation
  (testing "A step whose own body fails registers no compensation; earlier steps still compensate"
    (reset! events [])
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2}]
      (with-result [result (intemporal/start-workflow engine fail-on-flight-saga ["o3"])]
        (is (match? {:status :failed} result))
        ;; flight failed -> no :cancel-flight; only hotel compensates
        (is (= [[:book-hotel "o3"]
                [:book-flight "o3"]
                [:cancel-hotel {:hotel "o3"}]]
               @events))
        (is (not (some #(= :cancel-flight (first %)) @events)))))))

(defn- compensations [events]
  (filterv #(#{:cancel-flight :cancel-hotel} (first %)) events))

(deftest test-cancellation-rolls-back-completed-steps
  (testing "Cancelling a running saga runs compensations (LIFO) for completed steps"
    (reset! events [])
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2}]
      (let [wf-id "saga-cancel-1"
            fut (future (intemporal/start-workflow engine cancel-rollback-saga ["c1"]
                                                   :workflow-id wf-id))]
        ;; let hotel + flight + a few slow steps run, then cancel
        (Thread/sleep 250)
        (intemporal/cancel-workflow (:store engine) wf-id)
        (let [result @fut]
          (is (match? {:status :cancelled
                       :workflow-id wf-id
                       :error (m/embeds {:message #"cancelled"})}
                      result))
          ;; both completed steps rolled back, in reverse order, with their values
          (is (= [[:cancel-flight {:flight "c1"}]
                  [:cancel-hotel {:hotel "c1"}]]
                 (compensations @events))))))))

(deftest test-cancellation-with-no-completed-steps
  (testing "Cancelling before any with-failure step completes runs no compensations"
    (reset! events [])
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2}]
      (let [wf-id "saga-cancel-2"
            fut (future (intemporal/start-workflow engine cancel-early-saga ["c2"]
                                                   :workflow-id wf-id))]
        (Thread/sleep 60)            ;; mid first slow step, before the with-failure
        (intemporal/cancel-workflow (:store engine) wf-id)
        (let [result @fut]
          (is (match? {:status :cancelled :workflow-id wf-id} result))
          (is (empty? (compensations @events))))))))

(deftest test-observer-compensation-lifecycle
  (testing "Observer sees compensation-started/-completed, and -failed for a failing compensation"
    (reset! events [])
    (intemporal/with-workflow-engine [engine {:owner-id (str "migrated-test-" (random-uuid)) :threads 2 :enable-logging true}]
      (with-result [_ (intemporal/start-workflow engine failing-comp-saga ["c3"])]
        (let [evs (set (map :event @(:log engine)))]
          (is (contains? evs :compensation-started))
          (is (contains? evs :compensation-completed))
          ;; failing-cancel-flight throws -> swallowed + surfaced to the observer
          (is (contains? evs :compensation-failed)))))))
