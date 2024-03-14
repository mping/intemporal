(ns intemporal.demo-saga
  (:require [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-function stub-protocol defn-workflow with-failure]]
            [intemporal.store :as s]))

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

(defn-workflow book-trip
  [n]
  (let [email-stub     (stub-function send-email)
        stub           (stub-protocol TripBookingActivities)]
    (try
      (let [cid (with-failure [v (reserve-car stub "car")]
                  (cancel-car stub v n))
            _   (println "[workflow fn] car id:" cid)

            hid (with-failure [v (book-hotel stub "hotel")]
                  (cancel-hotel stub v n))
            _   (println "[workflow fn] hotel id:" hid)

            fid (with-failure [v (book-flight stub "flight")]
                  (cancel-flight stub v n))
            _   (println "[workflow fn] flight id:" fid)]

        (email-stub "user@user.com" "trip confirmed")
        :ok)
      ;; LOL this catch can catch stub exceptions such as "not running within a workflow"
      (catch #?(:clj Exception :cljs js/Error) e
        (w/compensate)
        (email-stub "user@user.com" "trip failed")
        (throw e)))))


(def mstore (s/make-store))
(def worker (w/start-worker! mstore {:protocols {`TripBookingActivities example-impl}}))

;; note that in cljs, this returns a promise
(def res (try
           (w/with-env {:store mstore}
             (book-trip 1))
           (catch #?(:clj Exception :cljs js/Error) e :error)))

(defn pprint-table [table]
  (clojure.pprint/print-table table))

(defn print-tables []
  (let [tasks  (->> (s/list-tasks mstore)
                    (map #(dissoc %  :ref :root  :fvar)))
        events (->> (s/list-events mstore)
                    (sort-by :id))]
    (pprint-table tasks)
    (pprint-table events)))

(print-tables)

