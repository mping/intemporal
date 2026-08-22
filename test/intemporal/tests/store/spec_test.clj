(ns intemporal.tests.store.spec-test
  "Pins `intemporal.spec` — the declared shape of every value crossing the
  `IStore` boundary — against the shapes the engine actually constructs.

  Deliberately store-free: it needs no database, no FDB cluster and no engine,
  so it runs in milliseconds and is where spec typos die. It also covers the
  three event types a happy-path workflow never produces
  (:workflow-cancelling, :workflow-terminated, and :run-once-completed) and the
  ragged variants (a nil :result on a failed activity, an :activity-completed
  with no :attempts, the minimal hand-built :workflow-started fixtures, and all
  three mutually incompatible :error shapes).

  The negative tests are the load-bearing half: they prove the assertions are
  actually WIRED, not merely compiled. Without them a misconfigured toggle
  would leave the whole validation layer silently inert."
  (:require
   [clojure.spec.alpha :as s]
   [clojure.test :refer [deftest is testing use-fixtures]]
   [intemporal.protocol :as p]
   [intemporal.spec :as spec]
   [intemporal.store :as store]
   [intemporal.store.checked :as checked]))

;; Captured at namespace load, BEFORE the fixture below flips the flag, so
;; `toggle-is-enabled-in-ci` can see how the JVM was actually launched.
(def ^:private asserts-on-at-load? (s/check-asserts?))

;; Enable assertions for this namespace regardless of how it was launched, so
;; the file is meaningful without the :test alias' -Dclojure.spec.check-asserts
;; flag. Restores the previous setting afterwards.
(use-fixtures :once
  (fn [f]
    (let [prev (s/check-asserts?)]
      (s/check-asserts true)
      (try (f) (finally (s/check-asserts prev))))))

(deftest toggle-is-enabled-in-ci
  ;; Guards the one failure mode that would silently void this entire layer:
  ;; the inline check! calls in the three IStore implementations are no-ops
  ;; unless clojure.spec.check-asserts is set. If someone drops
  ;; -Dclojure.spec.check-asserts=true from the :test alias in deps.edn, every
  ;; store spec stops being enforced and every suite still passes. This test is
  ;; what turns that into a build failure.
  (is asserts-on-at-load?
      (str "spec assertions are OFF — the inline store checks are inert. "
           "bin/kaocha runs -M:test, whose :jvm-opts must contain "
           "-Dclojure.spec.check-asserts=true.")))

(def ^:private ts 1700000000000)

(def ^:private an-error
  "The standard error/throwable->map shape."
  {:type        "clojure.lang.ExceptionInfo"
   :message     "boom"
   :data        {:some :data}
   :stack-trace ["a.b.C.run(C.java:1)"]
   :cause       nil})

;; ---------------------------------------------------------------------------
;; One representative sample per event type, copied from its construction site
;; ---------------------------------------------------------------------------

(def ^:private samples
  {:activity-scheduled
   {:event-type :activity-scheduled :seq 0 :activity-name "user/charge"
    :args [1 2] :timeout-ms 5000
    :retry-policy {:max-attempts 3 :backoff-ms 100} :timestamp ts}

   :activity-completed
   {:event-type :activity-completed :seq 0 :activity-name "user/charge"
    :result [:processed 5] :duration-ms 12 :attempts 1 :timestamp ts}

   :activity-failed
   {:event-type :activity-failed :seq 0 :activity-name "user/charge"
    :result nil :error an-error :duration-ms 12 :attempts 2 :timestamp ts}

   :activity-attempt-failed
   {:event-type :activity-attempt-failed :seq 0 :activity-name "user/charge"
    :attempts 1 :error an-error :duration-ms 12 :will-retry true
    :retry-at (+ ts 1000) :timestamp ts}

   :async-started
   {:event-type :async-started :seq 5 :timestamp ts}

   :async-completed
   {:event-type :async-completed :seq 5 :last-seq 6 :result 42 :timestamp ts}

   :async-failed
   {:event-type :async-failed :seq 5 :last-seq 6 :error an-error :timestamp ts}

   :join-any-completed
   {:event-type :join-any-completed :seq 7 :index 0 :result :ok :timestamp ts}

   :timer-scheduled
   {:event-type :timer-scheduled :seq 2 :fire-at (+ ts 1000)
    :duration-ms 1000 :timestamp ts}

   :timer-fired
   {:event-type :timer-fired :seq 2 :timestamp ts}

   :signal-wait-scheduled
   {:event-type :signal-wait-scheduled :seq 3 :signal-name "approve"
    :deadline (+ ts 30000) :timestamp ts}

   :signal-received
   {:event-type :signal-received :seq 3 :signal-name "approve"
    :signal-id "6f1c-signal" :payload {:approved true} :timestamp ts}

   :signal-wait-completed
   {:event-type :signal-wait-completed :seq 3 :signal-name "approve"
    :received true :payload {:approved true} :timestamp ts}

   :child-workflow-scheduled
   {:event-type :child-workflow-scheduled :seq 4 :child-workflow-id "child-1"
    :args [:a] :timestamp ts}

   :child-workflow-completed
   {:event-type :child-workflow-completed :seq 4 :child-workflow-id "child-1"
    :result {:done true} :timestamp ts}

   :child-workflow-failed
   {:event-type :child-workflow-failed :seq 4 :child-workflow-id "child-1"
    :error an-error :timestamp ts}

   :workflow-started
   {:event-type :workflow-started :seq -1 :workflow-id "wf-1"
    :workflow-fn-name "user/my-workflow" :args [1] :timestamp ts}

   :workflow-completed
   {:event-type :workflow-completed :seq 8 :result {:status :ok} :timestamp ts}

   :workflow-failed
   {:event-type :workflow-failed :seq 8 :error an-error :timestamp ts}

   :workflow-cancelled
   {:event-type :workflow-cancelled :seq 8 :error an-error :timestamp ts}

   :workflow-cancelling
   {:event-type :workflow-cancelling :seq 8}

   :workflow-terminated
   {:event-type :workflow-terminated :seq 8 :workflow-id "wf-1" :timestamp ts}

   :run-once-completed
   {:event-type :run-once-completed :seq 9 :result :done :timestamp ts}})

(deftest every-event-type-has-a-sample-and-a-spec
  (testing "the sample table covers the canonical registry exactly"
    (is (= spec/event-types (set (keys samples)))
        "add a sample here (and a defmethod in intemporal.spec) for each new event type"))

  (testing "every sample conforms to ::spec/event"
    (doseq [[event-type event] (sort-by key samples)]
      (is (s/valid? ::spec/event event)
          (str event-type " sample invalid: " (s/explain-str ::spec/event event)))))

  (testing "the whole table validates as a history"
    (is (s/valid? ::spec/events (vec (vals samples))))))

;; ---------------------------------------------------------------------------
;; Ragged variants that a happy path never exercises
;; ---------------------------------------------------------------------------

(deftest event-variants
  (testing ":activity-completed from the parallel-async path omits :attempts"
    (is (s/valid? ::spec/event
                  {:event-type :activity-completed :seq 1 :activity-name "a"
                   :result 1 :duration-ms 5 :timestamp ts})))

  (testing ":async-started carries :last-seq only when the thunk suspended"
    (is (s/valid? ::spec/event {:event-type :async-started :seq 5 :timestamp ts}))
    (is (s/valid? ::spec/event {:event-type :async-started :seq 5 :last-seq 6 :timestamp ts})))

  (testing ":signal-wait-completed carries :payload only when :received"
    (is (s/valid? ::spec/event
                  {:event-type :signal-wait-completed :seq 3 :signal-name "s"
                   :received false :timestamp ts})))

  (testing ":child-workflow-scheduled adds :workflow-fn-name on the Tier-2 path"
    (is (s/valid? ::spec/event
                  {:event-type :child-workflow-scheduled :seq 4
                   :child-workflow-id "c" :workflow-fn-name "user/child"
                   :args [] :timestamp ts})))

  (testing ":workflow-started child variant carries :parent-id/:parent-seq"
    (is (s/valid? ::spec/event
                  {:event-type :workflow-started :seq -1 :workflow-id "c"
                   :workflow-fn-name "user/child" :args [] :timestamp ts
                   :parent-id "wf-1" :parent-seq 4})))

  (testing "minimal hand-built :workflow-started fixtures (no :timestamp, no fn-name)"
    ;; worker_test.clj, timer_recovery_test.clj, claim_owner_cas_test.clj and
    ;; jepsen/bug_1_2_test.clj all save exactly this. Tightening either key
    ;; means fixing those fixtures first.
    (is (s/valid? ::spec/event
                  {:event-type :workflow-started :seq -1 :workflow-id "wf-1" :args []})))

  (testing ":workflow-failed sync-child variant carries :workflow-id"
    (is (s/valid? ::spec/event
                  {:event-type :workflow-failed :seq 8 :workflow-id "wf-1"
                   :error {:type "X" :message "m" :data nil} :timestamp ts})))

  (testing "present-with-nil optional keys are tolerated"
    (is (s/valid? ::spec/event
                  {:event-type :activity-scheduled :seq 0 :activity-name "a"
                   :args nil :timeout-ms nil :retry-policy nil :timestamp nil}))
    (is (s/valid? ::spec/event
                  {:event-type :activity-scheduled :seq 0 :activity-name "a"
                   :retry-policy {:max-attempts nil :backoff-ms nil}}))))

(deftest error-map-has-three-producer-shapes
  (testing "error/throwable->map"
    (is (s/valid? ::spec/error an-error)))

  (testing "finalize-cancelled — no :stack-trace, no :cause"
    (is (s/valid? ::spec/error {:type "X" :message "cancelled" :data nil})))

  (testing "sync-child failure — no :type at all"
    (is (s/valid? ::spec/error {:status :failed :message "child failed"})))

  (testing "nested :cause recurses"
    (is (s/valid? ::spec/error (assoc an-error :cause an-error))))

  (testing ":exception-kind round-trips as a keyword on every store"
    ;; Since bug #22 was fixed (EDN codec), a string here would be a real defect
    ;; rather than a serialization artifact — so the spec rejects it.
    (doseq [k spec/exception-kinds]
      (is (s/valid? ::spec/error (assoc an-error :exception-kind k)))
      (is (not (s/valid? ::spec/error (assoc an-error :exception-kind (name k))))
          (str (name k) " must not validate as a string")))))

(deftest non-event-return-shapes
  (testing "::events tolerates nil and lazy seqs"
    ;; finalize-cancelled passes unguarded pending-events; the parallel-async
    ;; path passes a mapcat LazySeq. :kind vector? would reject both.
    (is (s/valid? ::spec/events nil))
    (is (s/valid? ::spec/events []))
    (is (s/valid? ::spec/events (map identity [(:timer-fired samples)]))))

  (testing "::workflow-status enum"
    (doseq [st spec/workflow-statuses]
      (is (s/valid? ::spec/workflow-status st)))
    (is (not (s/valid? ::spec/workflow-status :bogus))))

  (testing "::pending-signals keys are strings on every implementation"
    ;; core/send-signal and core/wait-for-signal coerce the name with `str`.
    (is (s/valid? ::spec/pending-signals {}))
    (is (s/valid? ::spec/pending-signals {"approve" [{:id "1" :payload {:a 1}}]}))
    (is (not (s/valid? ::spec/pending-signals {:approve [{:id "1" :payload {:a 1}}]}))
        "a keyword key means a signal name escaped normalization")
    (is (not (s/valid? ::spec/pending-signals {"approve" {:not "a collection"}}))))

  (testing "::children"
    (is (s/valid? ::spec/children []))
    (is (s/valid? ::spec/children [{:child-id "c" :parent-seq 4
                                    :policy :cascade-cancel :status :running}]))
    ;; a just-linked child is :running on JDBC and :not-found elsewhere; both legal
    (is (s/valid? ::spec/children [{:child-id "c" :parent-seq 4
                                    :policy :terminate :status :not-found}]))
    (is (not (s/valid? ::spec/children [{:child-id "c" :parent-seq 4
                                         :policy :bogus :status :running}]))))

  (testing "::max-seq-result"
    (is (s/valid? ::spec/max-seq-result nil))
    (is (s/valid? ::spec/max-seq-result 7))
    ;; MariaDB's MAX(seq) numeric type is not covered by mandatory_seq_test
    (is (s/valid? ::spec/max-seq-result 7M))))

;; ---------------------------------------------------------------------------
;; Negative tests — these prove the specs reject, and that check! is wired
;; ---------------------------------------------------------------------------

(deftest invalid-events-are-rejected
  (testing "every event needs a :seq"
    (is (not (s/valid? ::spec/event {:event-type :timer-fired :timestamp ts}))))

  (testing "every event needs a registered :event-type"
    (is (not (s/valid? ::spec/event {:event-type :bogus :seq 0})))
    (is (not (s/valid? ::spec/event {:seq 0}))))

  (testing "type-specific required keys are enforced"
    (is (not (s/valid? ::spec/event {:event-type :activity-scheduled :seq 0})))
    (is (not (s/valid? ::spec/event {:event-type :child-workflow-failed :seq 0
                                     :child-workflow-id "c"})))
    (is (not (s/valid? ::spec/event {:event-type :workflow-started :seq -1}))))

  (testing "an unregistered :exception-kind is caught"
    (is (not (s/valid? ::spec/error (assoc an-error :exception-kind "not-a-kind")))))

  (testing "a bad event anywhere in a history invalidates it"
    (is (not (s/valid? ::spec/events [(:timer-fired samples)
                                      {:event-type :timer-fired}])))))

(deftest check!-is-wired
  (testing "returns its argument unchanged when valid"
    (let [e (:timer-fired samples)]
      (is (identical? e (spec/check! ::spec/event e)))))

  (testing "the value comes last, so it threads with ->>"
    (let [history (vec (vals samples))]
      (is (= history (->> history (spec/check! ::spec/events))))))

  (testing "throws carrying the spec and explain-data when invalid"
    (let [ex (is (thrown? clojure.lang.ExceptionInfo
                          (spec/check! ::spec/event {:event-type :bogus :seq 0})))
          d  (ex-data ex)]
      (is (= ::spec/event (::spec/spec d)))
      (is (seq (::s/problems d)) "spec explain-data must be merged into ex-data")
      (is (= {:event-type :bogus :seq 0} (::s/value d)))))

  (testing "is inert while assertions are disabled"
    (let [prev (s/check-asserts?)]
      (try
        (s/check-asserts false)
        (is (= {:bogus true} (spec/check! ::spec/event {:bogus true})))
        (finally (s/check-asserts prev))))))

(deftest checked-store-construction-policy
  (testing ":auto follows the assertion flag at construction"
    (let [prev (s/check-asserts?)]
      (try
        (s/check-asserts true)
        (let [checked-store (store/create-store)]
          (is (checked/checked-store? checked-store))
          (is (thrown? clojure.lang.ExceptionInfo
                       (p/save-event checked-store "wf" {:event-type :bogus :seq 0}))))
        (s/check-asserts false)
        (is (not (checked/checked-store? (store/create-store))))
        (finally (s/check-asserts prev)))))

  (testing "explicit modes override construction-time wrapping"
    (let [prev (s/check-asserts?)]
      (try
        (s/check-asserts false)
        (is (checked/checked-store? (store/create-store :checked? true)))
        (s/check-asserts true)
        (is (not (checked/checked-store? (store/create-store :checked? false))))
        (finally (s/check-asserts prev)))))

  (testing "CheckedStore closes a closeable inner store"
    (let [closed? (atom false)
          inner   (reify java.lang.AutoCloseable
                    (close [_] (reset! closed? true)))]
      (.close ^java.lang.AutoCloseable (checked/->CheckedStore inner))
      (is @closed?))))
