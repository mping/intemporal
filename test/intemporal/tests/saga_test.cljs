(ns intemporal.tests.saga-test
  "Tests for saga / compensation support (saga + add-compensation + compensate)."
  (:require [intemporal.core :as intemporal]
            [intemporal.tests.utils :refer [with-result]]
            [cljs.test :as t :refer [deftest is testing]]
            [matcher-combinators.test :refer [match?]])
  (:require-macros [intemporal.tests.utils :refer [with-result]]))

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
      (catch :default e
        (when (intemporal/suspension? e) (throw e))
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
      (catch :default e
        (when (intemporal/suspension? e) (throw e))
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
            f (flight order)
            _ (intemporal/add-compensation s #(cflight f))]
        :booked)
      (catch :default e
        (when (intemporal/suspension? e) (throw e))
        (intemporal/compensate s)
        (throw e)))))

;; ============================================================================
;; Tests
;; ============================================================================

(deftest test-happy-path-no-compensation
  (testing "When the workflow succeeds, no compensation runs"
    (reset! events [])
    (let [engine (intemporal/make-workflow-engine :threads 2)]
      (with-result [result (intemporal/start-workflow engine happy-saga ["o1"])]
        (is (match? {:status :completed :result :booked} result))
        (is (= [[:book-hotel "o1"] [:book-flight "o1"] [:charge-card "o1"]]
               @events))))))

(deftest test-compensation-runs-lifo-on-failure
  (testing "On a later failure, compensations run in reverse order with the forward result"
    (reset! events [])
    (let [engine (intemporal/make-workflow-engine :threads 2)]
      (with-result [result (intemporal/start-workflow engine failing-saga ["o2"])]
        (is (match? {:status :failed} result))
        (is (= [[:book-hotel "o2"]
                [:book-flight "o2"]
                [:charge-card "o2"]
                [:cancel-flight {:flight "o2"}]
                [:cancel-hotel {:hotel "o2"}]]
               @events))))))

(deftest test-failed-step-registers-no-compensation
  (testing "A step whose own body fails registers no compensation; earlier steps still compensate"
    (reset! events [])
    (let [engine (intemporal/make-workflow-engine :threads 2)]
      (with-result [result (intemporal/start-workflow engine fail-on-flight-saga ["o3"])]
        (is (match? {:status :failed} result))
        (is (= [[:book-hotel "o3"]
                [:book-flight "o3"]
                [:cancel-hotel {:hotel "o3"}]]
               @events))
        (is (not (some #(= :cancel-flight (first %)) @events)))))))
