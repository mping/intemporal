(ns intemporal.failures-test
  #?(:cljs (:require [cljs.test :as t :refer-macros [deftest is testing]]
                     [intemporal.store :as store]
                     [intemporal.workflow :as w]
                     [intemporal.test-utils :as tu]
                     [promesa.core :as p])
     :clj  (:require [clojure.test :as t :refer [deftest is testing]]
                     [intemporal.store :as store]
                     [intemporal.workflow :as w]
                     [intemporal.test-utils :as tu]))
  #?(:cljs (:require-macros [intemporal.macros :refer [stub-protocol defn-workflow]]
                            [intemporal.test-utils :refer [with-result]])
     :clj  (:require [intemporal.macros :refer [stub-protocol defn-workflow]]
                     [intemporal.test-utils :refer [with-result]])))

(t/use-fixtures :once tu/with-trace-logging)

(defprotocol MyActivities
  (foo [this a])
  (forced-failure [this]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a] [:proto a])
  (forced-failure [this] (throw (ex-info "Forced" {:a 1}))))

(defn-workflow my-workflow [k]
  (let [stub (stub-protocol MyActivities {})
        prr  (if (= :ok k)
               (foo stub :pr)
               (forced-failure stub))]

    ;; chain values: ensure tests work under cljs too
    #_:clj-kondo/ignore
    (#?(:clj let :cljs p/let) [res prr]
      res)))

;;;; test proper

(deftest activity-failure-test
  (testing "failure: activity throws"
    (let [mstore (store/make-store)
          ex     (w/start-poller! mstore {:protocols {`MyActivities (->MyActivitiesImpl)}})]
      (with-result [res (w/with-env {:store mstore}
                                    (my-workflow :nok))]
        (is (instance? #?(:clj Exception :cljs js/Error) res))
        (w/shutdown ex 1000)))))
