(ns intemporal2.workflow-test
  #?(:cljs (:require [cljs.test :refer-macros [deftest is testing]]
                     [cljs.pprint :as pprint]
                     [intemporal2.store :as store]
                     [intemporal2.workflow :as w]
                     [promesa.core :as p])
     :clj  (:require [clojure.test :refer [deftest is testing]]
                     [clojure.pprint :as pprint]
                     [intemporal2.store :as store]
                     [intemporal2.workflow :as w]
                     [promesa.core :as p]))
  #?(:cljs (:require-macros [intemporal2.macros :refer [stub-function stub-protocol defn-workflow]])
     :clj  (:require [intemporal2.macros :refer [stub-function stub-protocol defn-workflow]])))

(defn nested-fn [a]
  [a :nested])

(defn activity-fn [a]
  (let [f (stub-function nested-fn)]
    (f :sub)))

(defprotocol MyActivities
  (some-stuff [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (some-stuff [this a] [:proto a]))

(defn-workflow my-workflow [i]
  (let [sf (stub-function activity-fn)
        pr (stub-protocol MyActivities {})
        sfr (sf 1)
        prr (some-stuff pr :pr)]
    ;; chain values: ensure tests work under cljs too
    (p/let [v1 sfr
            v2 prr]
      [:root v1 v2])))

(defn resolve?
  "Resolves `p?`. If it is a promise, tries to deref for 1s.
  Throws in case of timeout."
  [p?]
  (if (p/deferred? p?)
    (deref (p/timeout p? 1000))
    p?))

(defn same? [a b]
  (if (symbol? a)
    (is (= (-> a #?(:clj identity :cljs str))
           (-> b #?(:clj identity :cljs str))))
    (is (= a b))))

(defn map-contains?
  "Indicates if `m2` contains all the KVs in `m1`"
  [m1 m2]
  (reduce-kv (fn [acc k v]
               (and acc
                    (contains? m2 k)
                    (is (same? (resolve? v)
                               (resolve? (get m2 k))))))
             true
             m1))

(deftest workflow-happy-path-test
  (testing "workflow"
    (let [mstore (store/make-memstore)
          worker (w/start-worker! mstore {`MyActivities (->MyActivitiesImpl)})

          ;; note that in cljs, this returns a promise
          res    (w/with-env {:store mstore}
                   (my-workflow 1))
          res? (p/timeout res 1000)]

      (p/let [v res?]
        (testing "workflow result"
          (is (= v [:root [:sub :nested] [:proto :pr]])))

        (testing "stored events"

          (let [evts (store/list-events mstore)
                [w1 w2 a1 a2 n1 n2 s1 s2] (sort-by evts :id)]
            (pprint/print-table evts)

            (testing "workflow events"
              (is (map-contains? {:type :intemporal.workflow/invoke :sym 'intemporal2.workflow-test/my-workflow- :args [1]} w1))
              (is (map-contains? {:type :intemporal.workflow/success :sym 'intemporal2.workflow-test/my-workflow- } w2)))

            (testing "activity events"
              (is (map-contains? {:type :intemporal.activity/invoke :sym 'intemporal2.workflow-test/activity-fn :args [1]} a1))
              (is (map-contains? {:type :intemporal.activity/success :sym 'intemporal2.workflow-test/activity-fn } a2)))

            (testing "activity events"
              (is (map-contains? {:type :intemporal.activity/invoke :sym 'intemporal2.workflow-test/nested-fn :args '(:sub)} n1))
              (is (map-contains? {:type :intemporal.activity/success :sym 'intemporal2.workflow-test/nested-fn } n2)))

            (testing "protocol activity events"
              (is (map-contains? {:type :intemporal.protocol/invoke :sym 'intemporal2.workflow-test/some-stuff :args [:pr]} s1))
              (is (map-contains? {:type :intemporal.protocol/success :sym 'intemporal2.workflow-test/some-stuff } s2)))))

        (testing "stored tasks"
          (let [tasks (store/list-tasks mstore)
                [w1 a1 n1 s1] tasks]
            (pprint/print-table tasks)

            (testing "workflow task"
              (is (map-contains? {:type :workflow :sym 'intemporal2.workflow-test/my-workflow- :state :success} w1)))
            (testing "activity task"
              (is (map-contains? {:type :activity :sym 'intemporal2.workflow-test/activity-fn :state :success :result [:sub :nested]} a1)))
            (testing "nested activty task"
              (is (map-contains? {:type :activity :sym 'intemporal2.workflow-test/nested-fn :state :success :result [:sub :nested]} n1)))
            (testing "protocol activity task"
              (is (map-contains? {:type :proto-activity :sym 'intemporal2.workflow-test/some-stuff :state :success :result [:proto :pr]} s1)))))))))