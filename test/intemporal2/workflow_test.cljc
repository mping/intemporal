(ns intemporal2.workflow-test
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal2.store :as store]
            [intemporal2.workflow :as w]
            [promesa.core :as p])
  #?(:cljs (:require-macros [intemporal2.macros :refer [stub-function stub-protocol defn-workflow]])
     :clj  (:require [intemporal2.macros :refer [stub-function stub-protocol defn-workflow]]
                     [intemporal2.test-utils :as tu])))


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

(deftest workflow-happy-path-test
  (testing "workflow"
    (let [mstore (store/make-memstore)
          worker (w/start-worker! mstore {`MyActivities (->MyActivitiesImpl)})

          ;; note that in cljs, this returns a promise
          res    (w/with-env {:store mstore}
                   (my-workflow 1))]

      (-> (p/timeout res 1000)
          (p/then (fn [v] (is (= v [:root [:sub :nested] [:proto :pr]]))))
          (p/catch (fn [e] (is false (pr-str e)))))

      (testing "stored tasks")
      (testing "stored events"))))
