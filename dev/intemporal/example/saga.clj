(ns intemporal.example.saga
  (:require [intemporal.workflow :as w]
            [intemporal.activity :as a]
            [intemporal.store :as s])
  (:import [intemporal.annotations ActivityOptions]))

(defprotocol TripBookingActivities
  (reserve-car [this name])
  (book-hotel [this name])
  (book-flight [this name])
  (cancel-car [this id name])
  (cancel-hotel [this id name])
  (cancel-flight [this id name]))

(def EmptyException
  (let [e (RuntimeException. "Spurious error")]
    (.setStackTrace e (into-array StackTraceElement []))
    e))

(defmacro maybe8 [& body]
  `(let [r# (rand-int 10)]
     (when (> r# 8)
       (throw EmptyException))
     ~@body))


(def example-impl
  (reify TripBookingActivities
    (reserve-car [this name] (maybe8 "car-xxx"))
    (book-hotel [this name] (maybe8 "hotel-yyy"))
    (book-flight [this name] (maybe8 "flight-zzz"))
    ;; ideally compensations should be idempotent to allow for failsafe retry
    (^{ActivityOptions {:idempotent true}} cancel-car [this id name]  (println "!cancel car" id name))
    (^{ActivityOptions {:idempotent true}} cancel-hotel [this id name] (println "!cancel hotel" id name))
    (^{ActivityOptions {:idempotent true}} cancel-flight [this id name] (println "!cancel flight" id name))))

;; functions don't need registration, they are registered on stub
(defn send-email [name body]
  (println "sending email for " name "body:" body)
  "email sent!")

;;;;
;; activities registration
(a/register-protocol TripBookingActivities example-impl)
(a/register-function send-email)


;;;;
;; workflow registration
(defn book-trip
  [n]
  (let [email-stub (a/stub-function send-email)
        stub       (a/stub-protocol TripBookingActivities)]
    (try
      (let [cid (reserve-car stub "carr")
            _   (println "[workflow fn] car id:" cid)
            _   (w/add-compensation (fn [] (cancel-car stub cid n)))

            hid (book-hotel stub "hotell")
            _   (println "[workflow fn] hotel id:" hid)
            _   (w/add-compensation (fn [] (cancel-hotel stub cid n)))
            fid (book-flight stub "flightt")
            _   (println "[workflow fn] flight id:" fid)
            _   (w/add-compensation (fn [] (cancel-flight stub cid n)))]

        (email-stub "user@user.com" "trip confirmed")
        :ok)
      ;; LOL this catch can catch stub exceptions such as "not running within a workflow"
      (catch Exception e
        (w/compensate)
        (email-stub "user@user.com" "trip failed")
        (throw e)))))

;; should actually register
;; requires a store to keep track of actual execution
(w/register-workflow s/memstore book-trip)

(s/clear-events s/memstore)
;; call workflow
(try
  (book-trip "foo")
  (catch Exception _
    (println "Workflow failed!")))

(println (s/events->table s/memstore))

(declare run-uuid)
(let [wevs (-> s/memstore (deref) :workflow-events)
      [wname kvs] (first wevs)
      rid  (-> kvs keys first)]
  (def run-uuid rid)
  (s/list-workflow-run s/memstore wname rid))

(comment
  (w/retry s/memstore #'book-trip run-uuid))