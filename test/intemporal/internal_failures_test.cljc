(ns intemporal.internal-failures-test
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
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a] [:proto a]))

(defn-workflow my-workflow [k]
  (let [stub (stub-protocol MyActivities {})
        prr  (foo stub :pr)]

    ;; chain values: ensure tests work under cljs too
    #_:clj-kondo/ignore
    (#?(:clj let :cljs p/let) [res prr]
      res)))

;;;; test proper

(deftest store-failure-test
  (testing "failure: task validation fails"
    (let [mstore      (store/make-store {:validation-fail-rate 1.0})
          stop-worker (w/start-worker! mstore {:protocols {`MyActivities (->MyActivitiesImpl)}})]

      (with-result [res (w/with-env {:store mstore}
                          (my-workflow :ok))]
        (is (instance? #?(:clj Exception :cljs js/Error) res))
        (is (= {:intemporal.workflow.internal/type :internal} (ex-data res)))
        (stop-worker)))))

;(cljs.test/run-tests *ns*)