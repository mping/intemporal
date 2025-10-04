(ns intemporal.workflow-test
  #?(:cljs (:require [cljs.test :as t :refer-macros [deftest is testing]]
                     [intemporal.store :as store]
                     [intemporal.workflow :as w]
                     [intemporal.test-utils :as tu]
                     [matcher-combinators.test :refer [match?]]
                     [promesa.core :as p])
     :clj  (:require [clojure.test :as t :refer [deftest is testing]]
                     [intemporal.store :as store]
                     [intemporal.workflow :as w]
                     [intemporal.test-utils :as tu]
                     [matcher-combinators.test :refer [match?]]))
  #?(:cljs (:require-macros [intemporal.macros :refer [env-let stub-function stub-protocol defn-workflow]]
                            [intemporal.test-utils :refer [with-result]])
     :clj  (:require [intemporal.macros :refer [stub-function stub-protocol defn-workflow]]
                     [intemporal.test-utils :refer [with-result]])))

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
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a] [:proto a]))

(defn-workflow my-workflow [atm]
  (reset! atm (w/workflow-id))

  (let [sf  (stub-function activity-fn)
        pr  (stub-protocol MyActivities {})
        sfr (sf 1)
        prr (foo pr :pr)]

    ;; chain values: ensure tests work under cljs too
    #_:clj-kondo/ignore
    (#?(:clj let :cljs p/let) [v1 sfr
                               v2 prr]

      [:root v1 v2])))

;;;; test proper

(deftest workflow-happy-path-test
  (testing "workflow"
    (let [mstore      (store/make-store)
          stop-worker (w/start-worker! mstore {:protocols {`MyActivities (->MyActivitiesImpl)}})
          uuid-store  (atom nil)
          workflow-id (str (random-uuid))]

      (with-result [v (w/with-env {:store mstore
                                   :id workflow-id}
                        (my-workflow uuid-store))]

        (testing "workflow result"
          (is (= [:root [:sub :nested] [:proto :pr]]
                 v)))

        (testing "stored events"
          (let [evts (store/list-events mstore)
                evts (sort-by :id evts)
                ;; cljs is promise based, so stubs dont run in lexical order
                ;; due to p/let
                #?(:clj  [w1 a1 n1 n2 a2 p1 p2 w2]
                   :cljs [w1 a1 p1 p2 n1 n2 a2 w2]) evts]

            (tu/print-tables mstore)

            (testing "workflow uuid"
              (is (every? #(= @uuid-store %) (map :root evts))))

            (testing "workflow events"
              (is (match? {:type :intemporal.workflow/invoke :sym 'intemporal.workflow-test/my-workflow- #_#_:args [uuid-store]} w1))
              (is (match? {:type :intemporal.workflow/success :sym 'intemporal.workflow-test/my-workflow-} w2)))

            (testing "activity events"
              (is (match? {:type :intemporal.activity/invoke :sym 'intemporal.workflow-test/activity-fn :args [1]} a1))
              (is (match? {:type :intemporal.activity/success :sym 'intemporal.workflow-test/activity-fn} a2)))

            (testing "nested activity events"
              (is (match? {:type :intemporal.activity/invoke :sym 'intemporal.workflow-test/nested-fn :args '(:sub)} n1))
              (is (match? {:type :intemporal.activity/success :sym 'intemporal.workflow-test/nested-fn} n2)))

            (testing "protocol activity events"
              (is (match? {:type :intemporal.protocol/invoke :sym 'intemporal.workflow-test/foo :args [:pr]} p1))
              (is (match? {:type :intemporal.protocol/success :sym 'intemporal.workflow-test/foo} p2)))))

        (testing "stored tasks"
          (let [tasks (store/list-tasks mstore)
                ;; due to promises,
                ;; the order of execution is not exactly the same between clj/cljs
                #?(:clj  [w1]
                   :cljs [w1]) tasks]
            (tu/print-tables mstore)

            (testing "workflow task"
              (is (match? {:type :workflow :sym 'intemporal.workflow-test/my-workflow- :state :success} w1)))

            (testing "workflow uuid"
              (is (every? #(= @uuid-store %) (map :id tasks)))
              (is (= @uuid-store workflow-id)))))

        (stop-worker)))))

#_:clj-kondo/ignore
(comment
  (cljs.test/run-tests *ns*))
