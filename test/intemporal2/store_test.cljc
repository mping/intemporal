(ns intemporal2.store-test
  (:require [clojure.test :refer [deftest is testing]]
            [intemporal2.test-utils :as tu]
            [intemporal2.store :as s]
            [promesa.core :as p]))

(defn- is-promise-ok [prom]
  (-> prom
      (p/then (fn [_] (is true)))
      (p/catch (fn [err] (is false (prn-str err))))))

(deftest basic-store-tests

  (testing "enqueue/dequeue"
    (let [store (s/make-memstore)
          task  (tu/make-workflow-task)]
      (s/enqueue-task store task)

      (testing "dequeueing updates state"
        (is (= (assoc task :state :pending)
               (s/dequeue-task store))))))

  (testing "await task"
    (let [store (s/make-memstore)
          task  (tu/make-workflow-task)
          prom  (p/vthread
                  (s/await-task store (:id task) {:timeout-ms 1000}))]

      (is-promise-ok prom)
      (s/enqueue-task store task)))

  (testing "watch task"
    (let [store   (s/make-memstore)
          task    (tu/make-workflow-task)
          evt     {:ref 'ref :root 'root :type :invoke :args []}
          called? (p/deferred)]

      (is-promise-ok (p/timeout called? 1000))
      ;; if the watch doesnt happen, the test times out
      (s/watch-tasks store #(= (:id %) (:id task)) #(p/resolve! called? %))
      (s/enqueue-task store task)

      (testing "apply fn event"
        (s/apply-fn-event store (:id task) evt)

        (testing "task state updated"
          (let [db-task (s/matching-task store task)]
            (is (= (dissoc db-task :id)
                   {:type :workflow, :ref 'some-ref, :root 'some-root, :sym 'identity, :fvar #'clojure.core/identity, :args [], :result nil, :state :pending}))))))))

