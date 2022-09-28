(ns intemporal.sqlstore-test
  (:require [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [intemporal.store :as store]
            [intemporal.workflow :as w]
            [intemporal.activity :as a]
            [intemporal.test-utils :as u]
            [intemporal.test-utils :as tu])
  (:import [java.util UUID]))

(def store (tu/make-sql-store))

(use-fixtures :each (fn [f]
                      (f)
                      (println (store/events->table store))
                      (println (store/registrations->table store))))

(defn workflow-fn [arg]
  arg)

(defn activity-fn [arg]
  arg)

(deftest store-operations-test
  (testing "Basic store operations"

    (testing "Saving workflow definitions"
      (store/save-workflow-definition store 'workflow-fn #'workflow-fn)
      (store/save-activity-definition store 'activity-fn #'activity-fn))

    (testing "Event persistence"
      (let [runid (UUID/randomUUID)
            wid   'workflow-fn
            aid   'activity-fn
            ex    (RuntimeException. "some error")]

        (store/save-workflow-event store wid runid ::w/invoke "warg")
        (store/save-activity-event store wid runid aid ::a/invoke "aarg")
        (store/save-activity-event store wid runid aid ::a/failure ex)
        (store/save-workflow-event store wid runid ::w/success "wres")

        (testing "list-workflow-runs"
          (testing "list all"
            (let [all-runs (store/list-workflow-runs store)]
              (is (= all-runs [runid]))))

          (testing "list by workflow"
            (let [wflow-runs (store/list-workflow-runs store 'workflow-fn)]
              (is (= wflow-runs [runid]))))

          (testing "list by non existing workflow"
            (let [wflow-runs (store/list-workflow-runs store 'xxx)]
              (is (empty? wflow-runs)))))

        (testing "find-workflow-run"
          (let [run-data (store/find-workflow-run store runid)
                wflow    (:workflow run-data)
                wevents  (:workflow-events run-data)]

            (testing "workflow var is correct"
              (is (= #'intemporal.sqlstore-test/workflow-fn wflow)))

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
                  (is (= ::a/failure (:type e3)))
                  (is (= 'activity-fn (:uid e3)))
                  (testing "Throwable serde"
                    (is (= (Throwable->map ex)
                           (Throwable->map (:payload e3)))))
                  (is (nil? (:deleted e3))))

                (testing "workflow success"
                  (is (= ::w/success (:type e4)))
                  (is (= 'workflow-fn (:uid e4)))
                  (is (= "wres" (:payload e4)))
                  (is (nil? (:deleted e4))))))

            (testing "Workflow event traversal"
              (let [nxt (store/next-event store wid runid)
                    nxt2 (store/next-event store wid runid (:id nxt))]

                (is (u/alike? nxt {:type ::w/invoke :uid 'workflow-fn :deleted? false}))
                (is (u/alike? nxt2 {:type ::a/invoke :uid 'activity-fn :deleted? false}))

                (testing "Expunging events"
                  (store/expunge-events store wid runid (:id nxt2))

                  (testing "Expunged events can be filtered out"
                    (is (= 2 (->> (store/find-workflow-run store runid {:all? false})
                                  (:workflow-events)
                                  (count)))))
                  (testing "Expunged events will be shown by default"
                    (is (= 4 (->> (store/find-workflow-run store runid)
                                  (:workflow-events)
                                  (count))))))))))))))
