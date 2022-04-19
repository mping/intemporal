(ns intemporal.example
  (:require [intemporal.workflow :as w]
            [intemporal.activity :as a]
            [intemporal.store :as s]))

(defprotocol TripBookingActivities
  (reserve-car [this name])
  (book-hotel [this name])
  (book-flight [this name])
  (cancel-car [this id name])
  (cancel-hotel [this id name])
  (cancel-flight [this id name]))

(defn- maybe
  ([val]
   (maybe val 5))
  ([val ok-chance-0-10]
   (let [r (rand-int 10)]
     (when (> r ok-chance-0-10)
       (throw (RuntimeException. "Spurious error")))
     val)))

(def example-impl
  (reify TripBookingActivities
    (reserve-car [this name] (maybe "car-xxx" 9))
    (book-hotel [this name] (maybe "hotel-yyy" 5))
    (book-flight [this name] (maybe "flight-zzz" 4))
    (cancel-car [this id name] (println "!cancel car" id name))
    (cancel-hotel [this id name] (println "!cancel hotel" id name))
    (cancel-flight [this id name] (println "!cancel flight" id name))))

;; functions don't need registration, they are registered on stub
(defn send-email [name body]
  (println "sending email for " name "body:" body)
  "email sent!")


;; registration
(a/register-protocol TripBookingActivities example-impl)
(a/register-function send-email)

(defn book-trip
  [n]
  (let [email-stub (a/stub-function send-email)
        stub       (a/stub-protocol TripBookingActivities)]
    (try
      (let [cid (reserve-car stub n)
            _   (println "car id:" cid)
            _   (w/add-compensation (fn [] (cancel-car stub cid n)))

            hid (book-hotel stub n)
            _   (println "hotel id:" hid)
            _   (w/add-compensation (fn [] (cancel-hotel stub cid n)))
            fid (book-flight stub n)
            _   (println "flight id:" fid)
            _   (w/add-compensation (fn [] (cancel-flight stub cid n)))]

        (email-stub "user@user.com" "trip confirmed")
        :ok)
      ;; LOL this catch can catch stub exceptions such as "not running within a workflow"
      (catch Exception _
        (w/compensate)
        (email-stub "user@user.com" "trip failed")
        :failed+compensated))))

;; should actually register
(w/register-workflow s/memstore book-trip)

(s/clear-events s/memstore)
(book-trip "bla")

(-> (:workflow-events @s/memstore)
  (last)
  (last)
  (last)
  (last)
  (clojure.pprint/print-table))

(let [wevs (-> s/memstore (deref) :workflow-events)
      [wname kvs] (first wevs)
      rid  (-> kvs keys first)]
  (s/query-run s/memstore wname rid))
