(ns intemporal.store-test
  (:require [clojure.test :as t :refer [deftest is testing]]
            [intemporal.test-utils :as tu]
            [intemporal.store :as s]
            [matcher-combinators.test :refer [match?]]
            [promesa.core :as p]))

(defn- is-promise-ok [prom]
  (-> prom
      (p/then (fn [_] (is true)))
      (p/catch (fn [err] (is false (prn-str err))))))

(defn- to-map [rec]
  (into {} rec))

(deftest basic-store-tests

  (testing "enqueue/dequeue"
    (let [store (s/make-memstore)
          task  (tu/make-workflow-task)]
      (s/enqueue-task store task)

      (testing "dequeueing updates state"
        (is (match? (to-map (assoc task :state :pending))
                    (to-map (s/dequeue-task store)))))))


  (testing "enqueue/dequeue with lease"
    (let [store (s/make-memstore)
          task  (tu/make-workflow-task)]
      (s/enqueue-task store task)

      (testing "dequeueing with lease"
        (is (match? (to-map (assoc task :state :pending))
                    (to-map (s/dequeue-task store {:lease-ms 100}))))
        ;; wait for expire
        #?(:clj
           (do
             @(p/delay 1000)
             (is (match?
                   (to-map (assoc task :state :pending))
                   (to-map (s/dequeue-task store)))))

           :cljs
           (t/async done
             (p/finally (p/delay 1000)
                        (fn [_ c]
                          (t/is (nil? c))
                          (is (match?
                                (to-map (assoc task :state :pending))
                                (to-map (s/dequeue-task store))))
                          (done))))))))

  (testing "await task"
    (let [store (s/make-memstore)
          task  (tu/make-workflow-task)
          prom  (p/vthread
                  (s/await-task store (:id task) {:timeout-ms 1000}))]

      (is-promise-ok prom)))

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
        (s/task<-event store (:id task) evt)

        (testing "task state updated"
          (let [db-task (s/matching-task store task)]
            (is (= (dissoc db-task :id)
                   {:type :workflow, :ref 'some-ref, :root 'some-root,
                    :sym 'identity, :fvar #'clojure.core/identity, :args [],
                    :result nil, :state :pending}))))))))

