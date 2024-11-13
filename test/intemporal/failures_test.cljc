(ns intemporal.failures-test
  #?(:cljs (:require [cljs.test :as t :refer-macros [deftest is testing]]
                     [intemporal.store :as store]
                     [intemporal.store.internal :as si]
                     [intemporal.workflow :as w]
                     [intemporal.test-utils :as tu]
                     [promesa.core :as p])
     :clj  (:require [clojure.test :as t :refer [deftest is testing]]
                     [intemporal.store :as store]
                     [intemporal.store.internal :as si]
                     [intemporal.workflow :as w]
                     [intemporal.test-utils :as tu]))
  #?(:cljs (:require-macros [intemporal.macros :refer [stub-protocol defn-workflow]]
                            [intemporal.test-utils :refer [with-result]])
     :clj  (:require [intemporal.macros :refer [ stub-protocol defn-workflow]]
                     [intemporal.test-utils :refer [with-result]])))

(t/use-fixtures :once tu/with-trace-logging)

(defprotocol MyActivities
  (some-stuff [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (some-stuff [this a] [:proto a]))

(defn-workflow my-workflow [i]
  (let [stub (stub-protocol MyActivities {})
        prr  (some-stuff stub :pr)]

    ;; chain values: ensure tests work under cljs too
    #_:clj-kondo/ignore
    (#?(:clj let :cljs p/let) [res prr]
      res)))

;;;; test proper

(deftest basic-workflow
  (testing "failure: activity throws"
    (let [mstore      (store/make-store)
          stop-worker (w/start-worker! mstore {:protocols {`MyActivities (->MyActivitiesImpl)}})]

      (testing "store failure on save"
        (with-result [res (with-redefs [si/validate-task (fn [& args] (throw (ex-info "Failure on save" {})))]
                            (w/with-env {:store mstore}
                              (my-workflow 1)))]
          (is (instance? #?(:clj Exception :cljs js/Error) res)))
        (stop-worker)))))
