(ns intemporal2.demo-saga
  (:require [intemporal2.workflow :as w]
            [intemporal2.macros :refer [stub-function stub-protocol defn-workflow]]
            [intemporal2.store :as s]))


(defprotocol TripBookingActivities
  (reserve-car [this name])
  (book-hotel [this name])
  (book-flight [this name])
  (cancel-car [this id name])
  (cancel-hotel [this id name])
  (cancel-flight [this id name]))

(def EmptyException
  #?(:clj
     (let [e (RuntimeException. "Spurious error")]
       (.setStackTrace e (into-array StackTraceElement []))
       e)
     :cljs
     (js/Error "Spurious error")))

(defmacro try-return [& body]
  `(let [r# (rand-int 10)]
     (when (> r# 3)
       (throw EmptyException))
     ~@body))

(def example-impl
  (reify TripBookingActivities
    (reserve-car [this name] {:car-id 1 :name name})
    (book-hotel [this name] (try-return {:hotel-id 1 :name name}))
    (book-flight [this name] (try-return {:flight-id 1 :name name}))
    ;; ideally compensations should be idempotent to allow for failsafe retry
    (cancel-car [this id name] (println "!cancel car" id name))
    (cancel-hotel [this id name] (println "!cancel hotel" id name))
    (cancel-flight [this id name] (println "!cancel flight" id name))))

;; functions don't need registration, they are registered on stub
(defn send-email [name body]
  (println "sending email for" name "with body:" body)
  "email sent!")

;;;;
;; workflow registration
(comment)
(defn-workflow book-trip
  [n]
  (let [email-stub     (stub-function send-email)
        stub           (stub-protocol TripBookingActivities)
        cancel-car*    (stub-function cancel-car)
        cancel-hotel*  (stub-function cancel-hotel)
        cancel-flight* (stub-function cancel-flight)]
    (try
      (let [cid (reserve-car stub "carr")
            _   (println "[workflow fn] car id:" cid)
            _   (w/add-compensation #(cancel-car* stub cid n))

            hid (book-hotel stub "hotell")
            _   (println "[workflow fn] hotel id:" hid)
            _   (w/add-compensation #(cancel-hotel* stub cid n))
            fid (book-flight stub "flightt")
            _   (println "[workflow fn] flight id:" fid)
            _   (w/add-compensation #(cancel-flight* stub cid n))]

        (email-stub "user@user.com" "trip confirmed")
        :ok)
      ;; LOL this catch can catch stub exceptions such as "not running within a workflow"
      (catch #?(:clj Exception :cljs js/Error) e
        (w/compensate)
        (email-stub "user@user.com" "trip failed")
        (throw e)))))

(def mstore (s/make-memstore))
(def worker (w/start-worker! mstore {`TripBookingActivities example-impl}))

;; note that in cljs, this returns a promise
(def res (try
           (w/with-env {:store mstore}
             (book-trip 1))
           (catch Exception e :error)))

(defn pprint-table [table]
  (clojure.pprint/print-table table))

(defn print-tables []
  (let [tasks (vals @(::s/task-store @mstore))
        events (->> (vals @(::s/history-store @mstore))
                    (flatten)
                    (sort-by :id))]
    (pprint-table tasks)
    (pprint-table events)))

(print-tables)
