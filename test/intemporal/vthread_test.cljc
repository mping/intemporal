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
    #?(:clj (do (Thread/sleep (long ms))
                id)
       :cljs (p/then (p/delay ms)
                     (fn [_] id)))))

(defn-workflow my-workflow []
  (let [pr    (stub-protocol ThreadActivity {})
        proms (for [i (range 10)]
                (vthread
                  (sleep pr i 1000)))]

    ;; at this point, all of `with-thread` calls are queued, so
    ;; this code is deterministic up to here
    #?(:clj  @(p/all proms)
       :cljs (p/all proms))))

(deftest workflow-happy-path-test
  (testing "workflow"
    (let [mstore      (store/make-store)
          stop-worker (w/start-worker! mstore {:protocols {`ThreadActivity (->ThreadActivityImpl)}})

          start       (store/now)
          v           (w/with-env {:task-per-activity? false ;; TODO fixme
                                   :store              mstore}
                        (my-workflow))]

      ;; cljs runtimes return promises
      ;; clj runtime will run synchronously
      (with-promise? v
        (try
          (testing "ran every activity concurrently"
            (let [elapsed (- (store/now) start)]
              (is (>= elapsed 1000) "Should take at least 1s to run")
              (is (< elapsed 2000) "Should not take more than 2s to run")))

          (testing "linear history"
            (testing "stored events"
              (let [evts  (store/list-events mstore)
                    evts  (sort-by :id evts)
                    aargs (map :args evts)]

                (testing "sequential activity invocation args"
                  ;; even though each activity runs in a thread, they are started in order
                  ;; this ensures determinism
                  (is (= [[] [0 1000] [1 1000] [2 1000] [3 1000] [4 1000] [5 1000] [6 1000] [7 1000] [8 1000] [9 1000]]
                         (take 11 aargs)))))))
          (finally
            (stop-worker)

            ;; debugging
            (let [tasks        (store/list-tasks mstore)
                  events       (->> (store/list-events mstore)
                                    (sort-by :id))
                  pprint-table (fn [table]
                                 (->> table
                                      (map (fn [r]
                                             (cond-> r
                                                     (contains? r :fvar) (assoc :fvar "<fn...>"))))
                                      (pprint/print-table)))]
              (pprint-table tasks)
              (pprint-table events))))))))
