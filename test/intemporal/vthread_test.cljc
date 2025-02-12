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
                            [intemporal.test-utils :refer [with-result]])
     :clj  (:require [intemporal.macros :refer [stub-protocol defn-workflow vthread]]
                     [intemporal.test-utils :refer [with-result]])))

(t/use-fixtures :once tu/with-trace-logging)

(defprotocol ThreadActivity
  (sleep [this id ms]))

(defrecord ThreadActivityImpl []
  ThreadActivity
  (sleep [this id ms]
    #?(:clj (do
              (Thread/sleep (long ms))
              id)
       :cljs (p/then (p/delay ms id)
                     (fn [_] id)))))

(defn-workflow my-workflow [sleep-time]
  (let [pr    (stub-protocol ThreadActivity {})
        proms (-> (for [i (range 10)]
                    (vthread
                      (sleep pr i sleep-time)))
                  (doall))]
    #?(:clj (Thread/sleep (long sleep-time)))
    #?(:clj  (p/all proms)
       :cljs (p/all proms))))

(deftest workflow-with-vthread-test
  (let [sleep-time (+ 3000 (rand-int 500))]
    (testing "workflow"
      (let [mstore   (store/make-store)
            executor (w/start-poller! mstore {:protocols {`ThreadActivity (->ThreadActivityImpl)}})

            start    (store/now)]

        ;; cljs runtimes return promises
        ;; clj runtime will run synchronously
        (with-result [v (w/with-env {:store mstore}
                          (my-workflow sleep-time))]

          (testing "result"
            (is (= (range 10)
                   v)))
          (testing "ran every activity concurrently"
            (let [elapsed (- (store/now) start)]
              (is (>= elapsed sleep-time) "Should take at least `sleep-time` to run")
              (is (< elapsed (* sleep-time 2)) "Should not take more than 2x sleep time to run")))

          (testing "linear history"
            (testing "stored events"
              (let [evts  (->> (store/list-events mstore)
                               (filterv #(= (:type %) :intemporal.protocol/invoke))
                               (sort-by :id))
                    aargs (map :args evts)]

                (testing "sequential activity invocation args"
                  ;; even though each activity runs in a thread, they are started in order
                  ;; this ensures determinism

                  (is (= [[0 sleep-time] [1 sleep-time] [2 sleep-time] [3 sleep-time] [4 sleep-time] [5 sleep-time] [6 sleep-time] [7 sleep-time] [8 sleep-time] [9 sleep-time]]
                         aargs))))))

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
            (pprint-table events)))))))

#_:clj-kondo/ignore
(comment
  (cljs.test/run-tests *ns*))
