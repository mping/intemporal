(ns intemporal.stores-test
  (:require [clojure.test :refer [deftest is testing use-fixtures]]
            [intemporal.store :as store]
            [intemporal.store.foundationdb :as fdb]
            [intemporal.store.jdbc :as jdbc]
            [intemporal.test-utils :as tu]
            [intemporal.workflow.internal :as internal]
            [intemporal.matchers :refer [nilable?]]
            [matcher-combinators.test :refer [match?]]))

(use-fixtures :once tu/with-trace-logging)

(def stores  {:memory   (store/make-store)
              :fdb      (fdb/make-store {:cluster-file-path "docker/fdb.cluster"})
              :postgres (jdbc/make-store {:jdbcUrl       "jdbc:postgresql://localhost:5432/root?user=root&password=root"
                                          :migration-dir "migrations/postgres"})})

(deftest stores-test
  (doseq [[label store] stores]
    (testing (format "store: %s" label)
      (let [evt {:ref  "some-ref" :root "some-root"
                 :type :intemporal.activity/invoke
                 :sym  'clojure.core/+
                 :args [1 "a"]}]

        (testing "clear"
          (store/clear-events store)
          (store/clear-tasks store))

        (testing "event store"
          (testing "event save"

            (let [t1 (internal/create-workflow-task nil nil 'clojure.core/+ (var-get #'+) nil "1")
                  t1 (store/enqueue-task store t1)

                  t2 (internal/create-workflow-task (:id t1) (:id t1) 'clojure.core/+ (var-get #'+) nil "2")
                  t2 (store/enqueue-task store t2)

                  ev (store/save-event store 1 (assoc evt :ref (:id t2) :root (:id t2)))]

              (testing "events list"
                (is (match? [(assoc evt
                               :id (:id ev)
                               :root (:id t2)
                               :ref (:id t2)
                               :result nilable?)] (store/list-events store))))

              (testing "events clear"
                (store/clear-events store)
                (is (empty? (store/list-events store)))))))

        (testing "task store"
          (store/clear-events store)
          (store/clear-tasks store)
          (let [task (internal/create-workflow-task "self" "self" 'clojure.core/+ (var-get #'+) ["invoke" 333]
                                                    "self" nil :new
                                                    nil)]

            (testing "enqueue task"
              (is (= task
                     (store/enqueue-task store task))))

            (testing "list tasks"
              (is (match? [(dissoc task :fvar)]
                          (store/list-tasks store))))

            (testing "dequeue tasks"
              (is (match? {:args      ["invoke" 333],
                           :ref       "self",
                           :root      "self",
                           :type      :workflow,
                           :state     :pending,
                           :result    nil,
                           :id        string?,
                           :sym       'clojure.core/+,
                           :fvar      #(or (fn? %) (var? %))
                           :lease-end nil}
                          (store/dequeue-task store))))

            (testing "matching task"
              (is (nil? (store/find-task store "")))
              (is (match? (-> task
                              (assoc :state :pending)
                              (dissoc :fvar))
                          (store/find-task store (:id task)))))

            (testing "reenqueue pending"
              (let [args (atom nil)
                    cb   (fn [t] (reset! args t))]
                (store/reenqueue-pending-tasks store cb)

                (testing "callback"
                  (is (match? (-> task
                                  (assoc :state :pending)
                                  (dissoc :fvar))
                              @args)))

                (testing "result"
                  (is (match? [{:args   ["invoke" 333],
                                :ref    "self",
                                :root   "self",
                                :type   :workflow,
                                :state  :new,
                                :result nil,
                                :id     string?,
                                :sym    'clojure.core/+}]
                              (store/list-tasks store))))))

            (testing "task event handling"
              ;; move to pending
              (store/dequeue-task store)

              (let [[db-task] (store/list-tasks store)]

                (testing "invoke"
                  (let [ev-descr {:ref "self" :root "self" :type :intemporal.workflow/invoke :sym 'clojure.core/+ :args ["invoke" 333]}
                        ev       (store/task<-event store (:id db-task) ev-descr)
                        [task] (store/list-tasks store)]
                    (is (match? {:ref  "self"
                                 :root "self"
                                 :type :intemporal.workflow/invoke
                                 :sym  'clojure.core/+
                                 :args ["invoke" 333]}
                                ev))
                    (is (match? {:args   ["invoke" 333],
                                 :ref    "self",
                                 :root   "self",
                                 :type   :workflow,
                                 :state  :pending,
                                 :sym    'clojure.core/+,
                                 :result nil,
                                 :id     string?,}
                                task))))

                (testing "ok"
                  (let [ev-descr {:ref "self" :root "self" :type :intemporal.workflow/success :sym 'clojure.core/+ :result ["result"]}
                        ev       (store/task<-event store (:id db-task) ev-descr)
                        [task] (store/list-tasks store)]
                    (is (match? {:ref    "self"
                                 :root   "self"
                                 :type   :intemporal.workflow/success
                                 :sym    'clojure.core/+
                                 :result ["result"]}
                                ev))
                    (is (match? {:args   ["invoke" 333],
                                 :ref    "self",
                                 :root   "self",
                                 :type   :workflow,
                                 :state  :success,
                                 :sym    'clojure.core/+,
                                 :result ["result"],
                                 :id     string?}
                                task))))

                (testing "error"
                  (let [ex       {:some "exception" :data false}
                        ev-descr {:ref "self" :root "self" :type :intemporal.workflow/failure :sym 'clojure.core/+ :error ex}
                        ev       (store/task<-event store (:id db-task) ev-descr)
                        [task] (store/list-tasks store)]

                    (is (match? {:ref   "self"
                                 :root  "self"
                                 :type  :intemporal.workflow/failure
                                 :sym   'clojure.core/+
                                 :error ex}
                                ev))

                    (is (match? {:args   ["invoke" 333],
                                 :ref    "self",
                                 :root   "self",
                                 :type   :workflow,
                                 :state  :failure,
                                 :sym    'clojure.core/+,
                                 :result ex
                                 :id     string?}
                                task))))))))

        (testing "task await+watch"
          (let [task    (internal/create-workflow-task "self" "self" 'clojure.core/- (var-get #'-) ["invoke" 333] "4")
                task-id (:id task)
                storage (atom nil)]

            (store/enqueue-task store task)
            (store/watch-task store task-id (fn [t] (reset! storage t)))
            (store/dequeue-task store)

            ;; wait a bit so watchers can fire
            (Thread/sleep 1000)
            (is (match? {:args   ["invoke" 333]
                         :ref    "self"
                         :root   "self"
                         :type   :workflow
                         :state  :pending
                         :sym    'clojure.core/-
                         :result nil
                         :id     string?}
                        @storage))))))))

(comment
  (clojure.test/run-tests *ns*))

