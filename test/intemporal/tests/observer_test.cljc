(ns intemporal.tests.observer-test
  (:require
   [intemporal.core :as intemporal]
   [intemporal.observer :as observer]
   [intemporal.protocol :as p]
   #?(:clj [clojure.test :refer [deftest is]]
      :cljs [cljs.test :refer-macros [deftest is]])))

(defn- collecting-observer [events]
  (reify p/IWorkflowObserver
    (on-event [_ event]
      (swap! events conj event))))

(deftest every-emitter-produces-the-base-event-shape
  (let [events (atom [])
        sink   (collecting-observer events)
        emitters
        [#(observer/on-workflow-started sink "wf" "example/wf" [1])
         #(observer/on-workflow-suspended sink "wf" :timer)
         #(observer/on-workflow-resumed sink "wf")
         #(observer/on-child-workflow-scheduled sink "wf" 1 "child" "example/child" [])
         #(observer/on-activity-scheduled sink "wf" 1 "example/activity" [1])
         #(observer/on-activity-started sink "wf" 1 "example/activity")
         #(observer/on-activity-completed sink "wf" 1 "example/activity" :ok 2)
         #(observer/on-activity-failed sink "wf" 1 "example/activity" {:message "no"} 2)
         #(observer/on-async-started sink "wf" 2)
         #(observer/on-async-completed sink "wf" 2 :ok)
         #(observer/on-async-failed sink "wf" 2 {:message "no"})
         #(observer/on-timer-scheduled sink "wf" 3 100)
         #(observer/on-timer-fired sink "wf" 3)
         #(observer/on-signal-received sink "wf" "go" {:yes true})
         #(observer/on-workflow-completed sink "wf" :ok)
         #(observer/on-workflow-failed sink "wf" {:message "no"})
         #(observer/on-workflow-cancelled sink "wf")
         #(observer/on-compensation-started sink "wf")
         #(observer/on-compensation-failed sink "wf" {:message "no"})
         #(observer/on-compensation-completed sink "wf")]]
    (doseq [emit! emitters] (emit!))
    (is (= 20 (count @events)))
    (is (every? #(and (keyword? (:event %))
                      (= "wf" (:workflow-id %))
                      (number? (:timestamp %)))
                @events))))

(deftest composite-isolates-failures-and-reuses-one-event
  (let [left   (atom [])
        right  (atom [])
        broken (reify p/IWorkflowObserver
                 (on-event [_ _]
                   (throw (ex-info "observer failed" {}))))
        sink   (observer/make-composite-observer
                 [(collecting-observer left) broken (collecting-observer right)])]
    (observer/notify! sink {:event :test-event :workflow-id "wf"})
    (is (= 1 (count @left)))
    (is (= @left @right))
    (is (identical? (first @left) (first @right)))))

(deftest logging-is-explicit
  (let [quiet (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)))
        noisy (intemporal/start-engine :owner-id (str "migrated-test-" (random-uuid)) :enable-logging true)]
    (try
      (is (nil? (:log quiet)))
      (is (some? (:log noisy)))
      (finally
        (intemporal/shutdown-engine quiet)
        (intemporal/shutdown-engine noisy)))))
