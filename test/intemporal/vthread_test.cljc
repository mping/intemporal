(ns intemporal.vthread-test
  #?(:cljs (:require [cljs.test :as t :refer-macros [deftest is testing]]
                     [cljs.pprint :as pprint]
                     [intemporal.store :as store]
                     [intemporal.workflow :as w]
                     [promesa.core :as p])
     :clj  (:require [clojure.test :as t :refer [deftest is testing]]
                     [clojure.pprint :as pprint]
                     [intemporal.store :as store]
                     [intemporal.workflow :as w]
                     [promesa.core :as p]))
  #?(:cljs (:require-macros [intemporal.macros :refer [stub-protocol defn-workflow vthread]]
                            [intemporal.test-utils :refer [with-promise?]])
     :clj  (:require [intemporal.macros :refer [stub-protocol defn-workflow vthread]]
                     [intemporal.test-utils :refer [with-promise?]])))

;;;;
;; demo

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
  (let [pr   (stub-protocol ThreadActivity {})
        proms (for [i (range 10)]
                (vthread
                  (sleep pr i 1000)))]

    ;; at this point, all of `with-thread` calls are queued, so
    ;; this code is deterministic up to here
    #?(:clj @(p/all proms)
       :cljs (p/all proms))))

(deftest workflow-happy-path-test
  (testing "workflow"
    (let [mstore       (store/make-store)
          stop-worker  (w/start-worker! mstore {:protocols {`ThreadActivity (->ThreadActivityImpl)}})

          start        (store/now)
          v            (w/with-env {:store mstore}
                         (my-workflow))]

      ;; cljs runtimes return promises
      ;; clj runtime will run synchronously
      (with-promise? v
        (try
          (testing "ran every activity concurrently"
            (let [elapsed (- (store/now) start)]
              (is (>= elapsed 1000) "Should take at least 1s to run")
              (is (< elapsed 2000) "Should not take more than 2s to run")))
          (finally
            (stop-worker)

            (let [tasks (store/list-tasks mstore)
                  events (->> (store/list-events mstore)
                              (sort-by :id))
                  pprint-table (fn [table]
                                 (->> table
                                      (map (fn [r]
                                             (cond-> r
                                               (contains? r :fvar) (assoc :fvar "<fn...>"))))
                                      (pprint/print-table)))]
              (pprint-table tasks)
              (pprint-table events))))))))
