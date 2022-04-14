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
    (cancel-car [this id name] (println "cancel car" id name))
    (cancel-hotel [this id name] (println "cancel hotel" id name))
    (cancel-flight [this id name] (println "cancel flight" id name))))

;; registration
(a/register-protocol TripBookingActivities example-impl)

;; functions don't need registration, they are registered on stub
(defn send-email [name]
  (println "sending email for " name)
  "email sent!")


(w/defn-workflow book-trip [n]
  (try
    (let [stub       (a/stub-protocol TripBookingActivities)
          email-stub (a/stub-function send-email)

          cid        (reserve-car stub n)
          _          (println "car id" cid)
          _          (w/add-compensation (fn [] (cancel-car stub cid n)))

          hid        (book-hotel stub n)
          _          (println "hotel id" hid)
          _          (w/add-compensation (fn [] (cancel-hotel stub cid n)))
          fid        (book-flight stub n)
          _          (println "flight id" fid)
          _          (w/add-compensation (fn [] (cancel-flight stub cid n)))]

      (email-stub "user@user.com")
      :ok)
    (catch Exception _
      (w/compensate)
      :failed+compensated)))

(s/clear s/memstore)
(book-trip "bla")


(-> (:workflow-events @s/memstore)
  (last)
  (last)
  (last)
  (last)
  (clojure.pprint/print-table))

(:workflow-events @s/memstore)

(s/lookup s/memstore "intemporal.example/book-trip" #uuid "cd4c141a-504c-4b28-b49b-12026b2d5e9c")