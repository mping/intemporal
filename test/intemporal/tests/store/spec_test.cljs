(ns intemporal.tests.store.spec-test
  "ClojureScript twin of spec_test.clj.

  Two jobs. First, it proves `intemporal.spec` is genuinely portable — that the
  `clojure.spec.alpha` require really is rewritten to `cljs.spec.alpha`, and
  that the specs and `check!` behave identically on both platforms.

  Second, the `(s/check-asserts true)` below is deliberately global,
  load-time state: kaocha-cljs has no `:bindings` hook and loads every `-test$`
  namespace before running any of them, so this single call is what enables the
  inline InMemoryStore `check!` assertions for the whole :test-cljs suite."
  (:require
   [cljs.test :refer-macros [deftest is testing]]
   [clojure.spec.alpha :as s]
   [intemporal.spec :as spec]
   [intemporal.store :as store]
   [intemporal.store.checked :as checked]))

(s/check-asserts true)

(def ^:private ts 1700000000000)

(def ^:private an-error
  {:type "js/Error" :message "boom" :data {:some :data}
   :stack-trace ["at foo (bar.js:1:1)"] :cause nil})

(deftest spec-ns-loads-on-cljs
  (testing "the registry survived compilation to JS"
    (is (= 22 (count spec/event-types)))
    (is (contains? spec/event-types :workflow-cancelling))
    (is (contains? spec/event-types :signal-wait-scheduled))
    (is (contains? spec/event-types :activity-attempt-failed)))

  (testing "assertions are enabled for the whole cljs suite"
    (is (s/check-asserts?))))

(deftest events-validate-identically-to-jvm
  (testing "representative events conform"
    (is (s/valid? ::spec/event
                  {:event-type :workflow-started :seq -1 :workflow-id "wf-1"
                   :workflow-fn-name "user/wf" :args [1] :timestamp ts}))
    (is (s/valid? ::spec/event
                  {:event-type :activity-completed :seq 0 :activity-name "a"
                   :result [:processed 5] :duration-ms 12 :attempts 1 :timestamp ts}))
    (is (s/valid? ::spec/event {:event-type :workflow-cancelling :seq 3}))
    (is (s/valid? ::spec/event
                  {:event-type :activity-failed :seq 0 :activity-name "a"
                   :result nil :error an-error :timestamp ts})))

  (testing "the -1 sentinel and nil/lazy histories"
    (is (s/valid? ::spec/events nil))
    (is (s/valid? ::spec/events (map identity [{:event-type :timer-fired :seq 1}]))))

  (testing "invalid events are rejected"
    (is (not (s/valid? ::spec/event {:event-type :timer-fired})))
    (is (not (s/valid? ::spec/event {:event-type :bogus :seq 0})))
    (is (not (s/valid? ::spec/event {:event-type :workflow-started :seq -1})))))

(deftest check!-runs-on-cljs
  (testing "returns its argument unchanged when valid"
    (let [e {:event-type :timer-fired :seq 1 :timestamp ts}]
      (is (identical? e (spec/check! ::spec/event e)))))

  (testing "the value comes last, so it threads with ->>"
    (let [history [{:event-type :timer-fired :seq 1}]]
      (is (= history (->> history (spec/check! ::spec/events))))))

  (testing "throws carrying the spec and explain-data when invalid"
    (let [d (try
              (spec/check! ::spec/event {:event-type :bogus :seq 0})
              nil
              (catch js/Error e (ex-data e)))]
      (is (some? d) "check! must throw while assertions are enabled")
      (is (= ::spec/event (::spec/spec d)))
      (is (seq (::s/problems d)))
      (is (= {:event-type :bogus :seq 0} (::s/value d)))))

  (testing "is inert while assertions are disabled"
    (s/check-asserts false)
    (is (= {:bogus true} (spec/check! ::spec/event {:bogus true})))
    (s/check-asserts true)))

(deftest checked-store-construction-policy
  (s/check-asserts true)
  (is (checked/checked-store? (store/create-store)))
  (is (not (checked/checked-store? (store/create-store :checked? false))))
  (s/check-asserts false)
  (is (not (checked/checked-store? (store/create-store))))
  (is (checked/checked-store? (store/create-store :checked? true)))
  (s/check-asserts true))
