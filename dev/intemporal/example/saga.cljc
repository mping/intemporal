(ns intemporal.example.saga
  (:require [intemporal.workflow :as w]
            [intemporal.activity :as a]
            [intemporal.store :as s]
            [intemporal.store.memory :as m]
            [intemporal.store.sql :as sql]
            [next.jdbc :as jdbc]))


(comment
  (def store (m/memory-store)))

(def ds (jdbc/get-datasource {:dbtype "sqlite" :dbname "/tmp/devstore.db"}))
(sql/migrate! ds)
(def store (sql/sql-store ds))

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
     (when (> r# 3)
       (throw EmptyException))
     ~@body))


(def example-impl
  (reify TripBookingActivities
    (reserve-car [this name] (maybe8 "car-xxx"))
    (book-hotel [this name] (maybe8 "hotel-yyy"))
    (book-flight [this name] (maybe8 "flight-zzz"))
    ;; ideally compensations should be idempotent to allow for failsafe retry
    (cancel-car [this id name] (println "!cancel car" id name))
    (cancel-hotel [this id name] (println "!cancel hotel" id name))
    (cancel-flight [this id name] (println "!cancel flight" id name))))

(defn cancel-car [this id name] (println "!cancel car" id name))
(defn cancel-hotel [this id name] (println "!cancel hotel" id name))
(defn cancel-flight [this id name] (println "!cancel flight" id name))

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
        stub       (a/stub-protocol TripBookingActivities)
        cancel-car* (a/stub-function cancel-car {:idempotent true})
        cancel-hotel* (a/stub-function cancel-hotel {:idempotent true})
        cancel-flight* (a/stub-function cancel-flight {:idempotent true})]
    (try
      (let [cid (reserve-car stub "carr")
            _   (println "[workflow fn] car id:" cid)
            _   (w/add-compensation (fn [] (cancel-car* stub cid n)))

            hid (book-hotel stub "hotell")
            _   (println "[workflow fn] hotel id:" hid)
            _   (w/add-compensation (fn [] (cancel-hotel* stub cid n)))
            fid (book-flight stub "flightt")
            _   (println "[workflow fn] flight id:" fid)
            _   (w/add-compensation (fn [] (cancel-flight* stub cid n)))]

        (email-stub "user@user.com" "trip confirmed")
        :ok)
      ;; LOL this catch can catch stub exceptions such as "not running within a workflow"
      (catch #?(:clj Exception :cljs js/Error) e
        (w/compensate)
        (email-stub "user@user.com" "trip failed")
        (throw e)))))

;; should actually register
;; requires a store to keep track of actual execution
(w/register-workflow store book-trip)

(s/clear-events store)
;; call workflow
(try
  (book-trip "foo")
  (catch #?(:clj Exception :cljs js/Error) e
    (println "Workflow failed!")))

(println (s/events->table store))

(declare run-uuid)
(let [[id] (s/list-workflow-runs store)]
  (def run-uuid id))

(comment
  ;; you can retry a workflow that failed
  ;; BUT because there is compensation the retry won't actually happen
  ;; TODO is this desired?
  (w/retry store #'book-trip run-uuid)
  (println (s/events->table store)))