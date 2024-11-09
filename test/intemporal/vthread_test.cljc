(ns intemporal.vthread-test
  #?(:cljs (:require [cljs.test :as t :refer-macros [deftest is testing]]
                     [cljs.pprint :as pprint]
                     [intemporal.store :as store]
                     [intemporal.workflow :as w]
                     [intemporal.test-utils :as tu]
                     [promesa.core :as p])
     :clj  (:require [clojure.test :as t :refer [deftest is testing]]
                     [clojure.pprint :as pprint]
                     [intemporal.store :as store]
                     [intemporal.workflow :as w]
                     [intemporal.test-utils :as tu]
                     [promesa.core :as p]))
  #?(:cljs (:require-macros [intemporal.macros :refer [stub-protocol defn-workflow vthread]]
                            [intemporal.test-utils :refer [with-promise?]])
     :clj  (:require [intemporal.macros :refer [stub-protocol defn-workflow vthread]]
                     [intemporal.test-utils :refer [with-promise?]])))

(t/use-fixtures :once tu/with-trace-logging)

(defprotocol ThreadActivity
  (sleep [this id ms]))

(defrecord ThreadActivityImpl []
  ThreadActivity
  (sleep [this id ms]
    #?(:clj (do
              (Thread/sleep (long ms))
              id)
       :cljs (p/then (p/delay ms)
                     (fn [_] id)))))

(def test-sleep-time 100)

(defn-workflow my-workflow []
  (let [pr    (stub-protocol ThreadActivity {})
        proms (for [i (range 10)]
                (vthread
                  (sleep pr i test-sleep-time)))]

    ;; at this point, all of `with-thread` calls are queued, so
    ;; this code is deterministic up to here
    #?(:clj  @(p/all proms)
       :cljs (p/all proms))))

(def debug false)
(def iterations 100)

(deftest workflow-with-vthread-test
  (dotimes [_ iterations]
    (testing "workflow"
      (let [mstore   (store/make-store)
            executor (w/start-poller! mstore {:protocols {`ThreadActivity (->ThreadActivityImpl)}})

            start    (store/now)
            v        (w/with-env {:store mstore}
                       (my-workflow))
            error    (atom false)]

        ;; cljs runtimes return promises
        ;; clj runtime will run synchronously
        (with-promise? v
          (try
            (testing "ran every activity concurrently"
              (let [elapsed (- (store/now) start)]
                (is (>= elapsed 1000) "Should take at least 1s to run")
                (is (< elapsed 3000) "Should not take more than 3s to run")))

            (testing "linear history"
              (testing "stored events"
                (let [evts  (store/list-events mstore)
                      evts  (sort-by :id evts)
                      aargs (map :args evts)]

                  (testing "sequential activity invocation args"
                    ;; even though each activity runs in a thread, they are started in order
                    ;; this ensures determinism
                    (when-not
                      (is (= [[] [0 test-sleep-time] [1 test-sleep-time] [2 test-sleep-time] [3 test-sleep-time] [4 test-sleep-time] [5 test-sleep-time] [6 test-sleep-time] [7 test-sleep-time] [8 test-sleep-time] [9 test-sleep-time]]
                             (->> aargs
                                  (filter identity))))
                      (println "XXX" (->> aargs
                                          (filter identity)))
                      (reset! error true))))))
            (finally
              (w/shutdown executor 0)

              ;; debugging
              (let [tasks        (sort-by :order (store/list-tasks mstore))
                    events       (->> (store/list-events mstore)
                                      (sort-by :id))
                    pprint-table (fn [table]
                                   (->> table
                                        (map (fn [r]
                                               (cond-> r
                                                       (contains? r :fvar) (assoc :fvar "<fn...>"))))
                                        (pprint/print-table)))]
                (pprint-table tasks)
                (pprint-table events)
                (when debug
                  (dotimes [_ 50]
                    (println ""))
                  #?(:clj
                     (when @error
                       (System/exit 1))))))))))))
