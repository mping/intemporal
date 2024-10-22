(ns intemporal.workflow-test
  #?(:cljs (:require [cljs.test :as t :refer-macros [deftest is testing]]
                     [cljs.pprint :as pprint]
                     [intemporal.store :as store]
                     [intemporal.workflow :as w]
                     [intemporal.test-utils :as tu]
                     [matcher-combinators.test :refer [match?]]
                     [promesa.core :as p])
     :clj  (:require [clojure.test :as t :refer [deftest is testing]]
                     [clojure.pprint :as pprint]
                     [intemporal.store :as store]
                     [intemporal.workflow :as w]
                     [intemporal.test-utils :as tu]
                     [matcher-combinators.test :refer [match?]]))
  #?(:cljs (:require-macros [intemporal.macros :refer [env-let stub-function stub-protocol defn-workflow]]
                            [intemporal.test-utils :refer [with-promise?]])
     :clj  (:require [intemporal.macros :refer [stub-function stub-protocol defn-workflow]]
                     [intemporal.test-utils :refer [with-promise?]])))

(t/use-fixtures :once tu/with-trace-logging)

(defn nested-fn [a]
  [a :nested])

(defn activity-fn [a]
  #?(:clj
     (let [f (stub-function nested-fn)]
       (f :sub))

     :cljs
     (env-let [f (stub-function nested-fn)]
       (f :sub))))

(defprotocol MyActivities
  (some-stuff [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (some-stuff [this a] [:proto a]))

(defn-workflow my-workflow [i]
  (let [sf  (stub-function activity-fn)
        pr  (stub-protocol MyActivities {})
        sfr (sf 1)
        prr (some-stuff pr :pr)]

    ;; chain values: ensure tests work under cljs too
    #_:clj-kondo/ignore
    (#?(:clj let :cljs p/let) [v1 sfr
                               v2 prr]

      [:root v1 v2])))

;;;; test proper

(deftest workflow-happy-path-test
  (testing "workflow"
    (let [mstore       (store/make-store)
          stop-worker  (w/start-worker! mstore {:protocols {`MyActivities (->MyActivitiesImpl)}})

          v            (w/with-env {:store mstore}
                         (my-workflow 1))]

      ;; cljs runtimes return promises
      ;; clj runtime will run synchronously
      (with-promise? v
        (try
          (testing "workflow result"
            (is (= [:root [:sub :nested] [:proto :pr]]
                   v)))

          (testing "stored events"
            (let [evts (store/list-events mstore)
                  evts (sort-by :id evts)
                  ;; cljs is promise based, so stubs dont run in lexical order
                  ;; due to p/let
                  #?(:clj  [w1 a1 n1 n2 a2 p1 p2 w2]
                     :cljs [w1 a1 p1 n1 p2 n2 a2 w2]) evts]

              (pprint/print-table evts)

              (testing "workflow events"
                (is (match? {:type :intemporal.workflow/invoke :sym 'intemporal.workflow-test/my-workflow- :args [1]} w1))
                (is (match? {:type :intemporal.workflow/success :sym 'intemporal.workflow-test/my-workflow-} w2)))

              (testing "activity events"
                (is (match? {:type :intemporal.activity/invoke :sym 'intemporal.workflow-test/activity-fn :args [1]} a1))
                (is (match? {:type :intemporal.activity/success :sym 'intemporal.workflow-test/activity-fn} a2)))

              (testing "nested activity events"
                (is (match? {:type :intemporal.activity/invoke :sym 'intemporal.workflow-test/nested-fn :args '(:sub)} n1))
                (is (match? {:type :intemporal.activity/success :sym 'intemporal.workflow-test/nested-fn} n2)))

              (testing "protocol activity events"
                (is (match? {:type :intemporal.protocol/invoke :sym 'intemporal.workflow-test/some-stuff :args [:pr]} p1))
                (is (match? {:type :intemporal.protocol/success :sym 'intemporal.workflow-test/some-stuff} p2)))))

          (testing "stored tasks"
            (let [tasks (store/list-tasks mstore)
                  ;; due to promises,
                  ;; the order of execution is not exactly the same between clj/cljs
                  #?(:clj  [w1 #_#_#_a1 n1 p1]
                     :cljs [w1 #_#_#_a1 p1 n1]) tasks]
              (pprint/print-table tasks)

              (testing "workflow task"
                (is (match? {:type :workflow :sym 'intemporal.workflow-test/my-workflow- :state :success} w1)))))

              ;(testing "activity task"
              ;  (is (match? {:type :activity :sym 'intemporal.workflow-test/activity-fn :state :success :result [:sub :nested]} a1)))
              ;(testing "nested activty task"
              ;  (is (match? {:type :activity :sym 'intemporal.workflow-test/nested-fn :state :success :result [:sub :nested]} n1)))
              ;(testing "protocol activity task"
              ;  (is (match? {:type :proto-activity :sym 'intemporal.workflow-test/some-stuff :state :success :result [:proto :pr]} p1)))))
          (finally
            (stop-worker)))))))

