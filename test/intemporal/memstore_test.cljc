(ns intemporal.memstore-test
  #?(:clj  (:require [clojure.test :refer [deftest is testing use-fixtures]])
     :cljs (:require-macros [cljs.test :refer [deftest is testing use-fixtures]]))
  (:require [intemporal.store :as store]
            [intemporal.workflow :as w]
            [intemporal.activity :as a]
            [intemporal.test-utils :as u]
            [intemporal.store.memory :as m]
            [clojure.spec.alpha :as s])
  #?(:clj (:import [java.util UUID])))

(def impl (m/memory-store))

(use-fixtures :each (fn [f]
                      (store/clear impl)
                      (f)
                      (println (store/events->table impl))
                      (println (store/registrations->table impl))))

(defn workflow-fn [arg]
  arg)

(defn activity-fn [arg]
  arg)

(deftest store-operations-test
  (testing "Basic store operations"

    (testing "Saving workflow definitions"
      (store/save-workflow-definition impl 'workflow-fn #?(:clj #'workflow-fn :cljs workflow-fn))
      (store/save-activity-definition impl 'activity-fn #?(:clj #'activity-fn :cljs activity-fn)))

    (testing "Event persistence"
      (let [runid #?(:clj (UUID/randomUUID) :cljs (random-uuid))
            wid   'workflow-fn
            aid   'activity-fn]

        (store/save-workflow-event impl wid runid ::w/invoke "warg")
        (store/save-activity-event impl wid runid aid ::a/invoke "aarg")
        (store/save-activity-event impl wid runid aid ::a/success "ares")
        (store/save-workflow-event impl wid runid ::w/success "wres")

        (testing "list-workflow-runs"
          (testing "list all"
            (let [all-runs (store/list-workflow-runs impl)]
              (is (= all-runs [runid]))))

          (testing "list by workflow"
            (let [wflow-runs (store/list-workflow-runs impl 'workflow-fn)]
              (is (= wflow-runs [runid]))))

          (testing "list by non existing workflow"
            (let [wflow-runs (store/list-workflow-runs impl 'xxx)]
              (is (empty? wflow-runs)))))

        (testing "find-workflow-run"
          (let [run-data (store/find-workflow-run impl runid)
                wflow    (:workflow run-data)
                wevents  (:workflow-events run-data)]

            (testing "workflow var is correct"
              (is (= #?(:clj #'intemporal.memstore-test/workflow-fn
                        :cljs intemporal.memstore-test/workflow-fn) wflow)))

            (testing "workflow events"
              (let [[e1 e2 e3 e4] wevents]

                (testing "all events are valid"
                  (is (every? #(s/valid? ::store/event %) wevents)))

                (testing "workflow invoke"
                  (is (= ::w/invoke (:type e1)))
                  (is (= 'workflow-fn (:uid e1)))
                  (is (= "warg" (:payload e1)))
                  (is (nil? (:deleted e1))))

                (testing "activity invoke"
                  (is (= ::a/invoke (:type e2)))
                  (is (= 'activity-fn (:uid e2)))
                  (is (= "aarg" (:payload e2)))
                  (is (nil? (:deleted e2))))

                (testing "activity success"
                  (is (= ::a/success (:type e3)))
                  (is (= 'activity-fn (:uid e3)))
                  (is (= "ares" (:payload e3)))
                  (is (nil? (:deleted e3))))

                (testing "workflow success"
                  (is (= ::w/success (:type e4)))
                  (is (= 'workflow-fn (:uid e4)))
                  (is (= "wres" (:payload e4)))
                  (is (nil? (:deleted e4))))))

            (testing "Workflow event traversal"
              (let [nxt (store/next-event impl wid runid)
                    nxt2 (store/next-event impl wid runid (:id nxt))]

                #_#_ ;;TODO FIXME
                (is (u/alike? nxt {:type ::w/invoke :uid 'workflow-fn :deleted? nil}))
                (is (u/alike? nxt2 {:type ::a/invoke :uid 'activity-fn :deleted? nil}))

                (testing "Expunging events"
                  (store/expunge-events impl wid runid (:id nxt2))

                  (testing "Expunged events can be filtered out"
                    (is (= 2 (->> (store/find-workflow-run impl runid {:all? false})
                                  (:workflow-events)
                                  (count)))))
                  (testing "Expunged events will be shown by default"
                    (is (= 4 (->> (store/find-workflow-run impl runid)
                                  (:workflow-events)
                                  (count))))))))))))))
