(ns intemporal.spec
  "clojure.spec definitions for every data shape that crosses the `IStore`
   boundary (see `intemporal.protocol/IStore`), plus `check!` — an opt-in,
   dev/test-only assertion helper used inline by each store implementation.

   Enforcement is OFF by default. Enable it with `(s/check-asserts true)` or
   `-Dclojure.spec.check-asserts=true`; elide it entirely at compile time with
   `-Dclojure.spec.compile-asserts=false` (JVM) or `:elide-asserts true` (CLJS).

   Design rules, each driven by an observed behaviour of this codebase:

   1. Only `:event-type` and `:seq` are required on every event. Those are the
      invariants storage actually depends on (the JDBC NOT NULL columns and
      conflict target; the FDB tuple key `(seq, event-type)`).
   2. Every *optional* key spec is nilable. The `cond->` / `(when ...)` idiom
      leaves keys present-with-nil throughout the engine; with `s/keys` an
      absent key passes but a present-nil key is validated, so a non-nilable
      optional spec would reject correct data.
   3. User payloads (`:result`, `:args`, `:payload`, `:data`) are `any?` —
      genuinely arbitrary caller data, not a concession. Since bug #22 was fixed
      (the JDBC and FDB stores now serialize with EDN via
      `intemporal.internal.codec`), these values round-trip faithfully on every
      store, so the specs below can be strict about the fields intemporal itself
      controls. `intemporal.tests.store.value-fidelity-test` guards the payloads.
   4. `:seq` is `int?`, not `nat-int?` — `:workflow-started` uses a -1 sentinel.

   The InMemoryStore state atom is deliberately NOT spec'd because asserting it
   would put a full-map walk inside every `swap!`. The per-method specs below
   already cover every value that *leaves* it."
  ;; cljs.analyzer/rewrite-cljs-aliases rewrites clojure.spec.alpha ->
  ;; cljs.spec.alpha automatically, so no reader conditional is needed here.
  (:require
   [clojure.spec.alpha :as s]
   [intemporal.internal.domain :as domain]))

;; ============================================================================
;; Canonical event-type registry
;; ============================================================================

(def event-types domain/event-types)

(def exception-kinds
  "Stable exception classifications written by `intemporal.internal.error/exception-kind`."
  #{:cancelled :rejected :activity-timeout :activity-interrupted
    :activity-failed :async-failed :suspension})

(def workflow-statuses domain/workflow-statuses)

(def parent-close-policies domain/parent-close-policies)

;; ============================================================================
;; Scalars
;; ============================================================================

(s/def ::workflow-id       string?)
(s/def ::wake-version      nat-int?)

;; int?, NOT nat-int? — :workflow-started uses the -1 sentinel.
(s/def ::seq               int?)
(s/def ::last-seq          int?)
;; Integer on JDBC (INTEGER column), Long on FDB (JSON number). int? covers both.
(s/def ::parent-seq        int?)
(s/def ::index             nat-int?)
(s/def ::limit             pos-int?)

;; number?, not int?: CLJS timestamps come from js/Date.now.
(s/def ::timestamp         (s/nilable number?))
(s/def ::duration-ms       (s/nilable number?))
(s/def ::timeout-ms        (s/nilable number?))
(s/def ::fire-at           number?)
(s/def ::deadline          number?)
(s/def ::next-run-at-ms    (s/nilable number?))
(s/def ::attempts          (s/nilable pos-int?))
(s/def ::will-retry        boolean?)
;; number?, not int?, for the same reason as ::fire-at: CLJS clocks are doubles.
(s/def ::retry-at          (s/nilable number?))
(s/def ::received          boolean?)

(s/def ::activity-name     string?)
(s/def ::workflow-fn-name  (s/nilable string?))
(s/def ::child-workflow-id string?)
(s/def ::child-id          string?)
(s/def ::parent-id         string?)
(s/def ::signal-id         (s/nilable string?))
(s/def ::tracecontext      any?)

;; `core/send-signal` and `core/wait-for-signal` coerce with `str` at the API
;; boundary, so every store sees a string.
(s/def ::signal-name       string?)

;; User payloads: deliberately unconstrained. See rule 3.
(s/def ::result            any?)
(s/def ::payload           any?)
(s/def ::args              (s/nilable sequential?))

(s/def ::event-type        event-types)
(s/def ::policy            parent-close-policies)
(s/def ::status            workflow-statuses)
(s/def ::workflow-status   workflow-statuses)

;; ============================================================================
;; Retry policy
;; ============================================================================

;; Both inner keys are nilable: core.cljc builds the map literal
;; unconditionally, so either can be present-with-nil.
(s/def ::max-attempts (s/nilable pos-int?))
(s/def ::backoff-ms   (s/nilable number?))
(s/def ::retry-policy (s/nilable (s/keys :opt-un [::max-attempts ::backoff-ms])))

;; ============================================================================
;; Error maps
;; ============================================================================
;;
;; Three producers write into :error and they disagree on shape:
;;
;;   error/throwable->map      {:type :message :data :stack-trace :cause}
;;                             + optional :exception-kind
;;   finalize-cancelled        {:type :message :data}
;;   sync-child failure        {:status :message}   <- no :type at all
;;
;; Hence all-:opt-un. This still enforces map? and still type-checks whichever
;; keys are present, which is the real contract.

;; Sub-namespaced so the very generic key names below (:type, :message,
;; :status) cannot collide with anything else in the registry.
(s/def :intemporal.spec.error/type        (s/nilable string?))
(s/def :intemporal.spec.error/message     (s/nilable string?))
(s/def :intemporal.spec.error/status      any?)
(s/def :intemporal.spec.error/data        any?)
(s/def :intemporal.spec.error/stack-trace (s/nilable (s/coll-of string? :kind sequential?)))

;; Strict keyword since bug #22: the EDN codec round-trips it faithfully on
;; every store, so a string here would be a real defect rather than an artifact
;; of serialization. (`error/map->exception`'s defensive
;; `(some-> (:exception-kind m) keyword)` is now a no-op, but harmless.)
(s/def :intemporal.spec.error/exception-kind exception-kinds)

(s/def ::error
  (s/nilable
    (s/keys :opt-un [:intemporal.spec.error/type
                     :intemporal.spec.error/message
                     :intemporal.spec.error/status
                     :intemporal.spec.error/data
                     :intemporal.spec.error/stack-trace
                     :intemporal.spec.error/exception-kind
                     :intemporal.spec.error/cause])))

;; Declared after ::error so the recursive reference resolves; the spec
;; registry is late-bound, so ordering only matters for readability.
(s/def :intemporal.spec.error/cause (s/nilable ::error))

;; ============================================================================
;; Events
;; ============================================================================

(defmulti event-spec
  "Dispatches to the per-event-type `s/keys` spec. Extend this (and
   `event-types`) when adding a new event type."
  :event-type)

;; Totality guard: s/multi-spec THROWS (rather than reporting invalid) on an
;; unmatched dispatch value. Strictness lives in ::event-type, which is a set
;; predicate, so an unknown type is still rejected — just with a usable message.
(defmethod event-spec :default [_]
  (s/keys :req-un [::event-type ::seq]))

;; --- Activity lifecycle ---

(defmethod event-spec :activity-scheduled [_]
  (s/keys :req-un [::event-type ::seq ::activity-name]
          :opt-un [::args ::timeout-ms ::retry-policy ::timestamp]))

(defmethod event-spec :activity-completed [_]
  (s/keys :req-un [::event-type ::seq ::activity-name]
          :opt-un [::result ::duration-ms ::attempts ::timestamp]))

(defmethod event-spec :activity-failed [_]
  ;; The building cond-> seeds :result for both outcomes, so a failed event
  ;; carries a nil :result key.
  (s/keys :req-un [::event-type ::seq ::activity-name ::error]
          :opt-un [::result ::duration-ms ::attempts ::timestamp]))

(defmethod event-spec :activity-attempt-failed [_]
  ;; Durable retry state: one per consumed attempt, written before the
  ;; backoff. :attempts is the running total across drives — not a per-attempt
  ;; marker — and :will-retry records whether the policy granted another, which
  ;; is what lets a resume tell an exhausted budget from an interrupted one.
  ;; :retry-at is the durable backoff deadline — present iff :will-retry.
  (s/keys :req-un [::event-type ::seq ::activity-name ::attempts ::error ::will-retry]
          :opt-un [::duration-ms ::retry-at ::timestamp]))

;; --- Async handle lifecycle ---

(defmethod event-spec :async-started [_]
  ;; :last-seq present only when the thunk suspended.
  (s/keys :req-un [::event-type ::seq]
          :opt-un [::last-seq ::timestamp]))

(defmethod event-spec :async-completed [_]
  (s/keys :req-un [::event-type ::seq ::last-seq]
          :opt-un [::result ::timestamp]))

(defmethod event-spec :async-failed [_]
  (s/keys :req-un [::event-type ::seq ::last-seq ::error]
          :opt-un [::timestamp]))

(defmethod event-spec :join-any-completed [_]
  (s/keys :req-un [::event-type ::seq ::index]
          :opt-un [::result ::timestamp]))

;; --- Timer lifecycle ---

(defmethod event-spec :timer-scheduled [_]
  (s/keys :req-un [::event-type ::seq ::fire-at]
          :opt-un [::duration-ms ::timestamp]))

(defmethod event-spec :timer-fired [_]
  (s/keys :req-un [::event-type ::seq]
          :opt-un [::timestamp]))

;; --- Signal lifecycle ---

(defmethod event-spec :signal-wait-scheduled [_]
  (s/keys :req-un [::event-type ::seq ::signal-name ::deadline]
          :opt-un [::timestamp]))

(defmethod event-spec :signal-received [_]
  (s/keys :req-un [::event-type ::seq ::signal-name]
          :opt-un [::signal-id ::payload ::timestamp]))

(defmethod event-spec :signal-wait-completed [_]
  ;; :payload present only when :received is true.
  (s/keys :req-un [::event-type ::seq ::signal-name ::received]
          :opt-un [::payload ::timestamp]))

;; --- Child workflow lifecycle ---

(defmethod event-spec :child-workflow-scheduled [_]
  ;; :workflow-fn-name only on the Tier-2 independent-child path.
  (s/keys :req-un [::event-type ::seq ::child-workflow-id]
          :opt-un [::args ::workflow-fn-name ::timestamp]))

(defmethod event-spec :child-workflow-completed [_]
  (s/keys :req-un [::event-type ::seq ::child-workflow-id]
          :opt-un [::result ::timestamp]))

(defmethod event-spec :child-workflow-failed [_]
  (s/keys :req-un [::event-type ::seq ::child-workflow-id ::error]
          :opt-un [::timestamp]))

;; --- Workflow lifecycle ---

(defmethod event-spec :workflow-started [_]
  ;; :workflow-fn-name and :timestamp are :opt-un ONLY because several in-repo
  ;; test fixtures hand-build a minimal started event. Tightening either one
  ;; means fixing those fixtures first.
  (s/keys :req-un [::event-type ::seq ::workflow-id]
          :opt-un [::workflow-fn-name ::args ::timestamp ::tracecontext
                   ::parent-id ::parent-seq]))

(defmethod event-spec :workflow-completed [_]
  (s/keys :req-un [::event-type ::seq]
          :opt-un [::result ::timestamp]))

(defmethod event-spec :workflow-failed [_]
  ;; :workflow-id present only on the sync-child variant.
  (s/keys :req-un [::event-type ::seq ::error]
          :opt-un [::workflow-id ::timestamp]))

(defmethod event-spec :workflow-cancelled [_]
  (s/keys :req-un [::event-type ::seq ::error]
          :opt-un [::timestamp]))

(defmethod event-spec :workflow-cancelling [_]
  ;; Literally {:event-type :workflow-cancelling :seq cur} — no :timestamp.
  (s/keys :req-un [::event-type ::seq]))

(defmethod event-spec :workflow-terminated [_]
  (s/keys :req-un [::event-type ::seq]
          :opt-un [::workflow-id ::timestamp]))

(defmethod event-spec :run-once-completed [_]
  (s/keys :req-un [::event-type ::seq]
          :opt-un [::result ::timestamp]))

(s/def ::event (s/multi-spec event-spec :event-type))
(s/def ::maybe-event (s/nilable ::event))

;; Nilable, and `:kind sequential?` rather than vector?: save-events is called
;; with possibly-nil pending events and with lazy mapcat results. (s/coll-of
;; realizes a lazy seq, but every save-events implementation consumes it
;; eagerly anyway, so that is a no-op in practice.)
(s/def ::events (s/nilable (s/coll-of ::event :kind sequential?)))

;; ============================================================================
;; Other store return shapes
;; ============================================================================

;; `add-signal` accepts an arbitrary payload at the store boundary: only
;; core/send-signal applies the {:id :payload} envelope, and tests call
;; p/add-signal directly with bare maps.
(s/def ::signal-data any?)

;; Keys are signal names, normalized to strings at the API boundary (see
;; ::signal-name), so all three implementations agree.
(s/def ::pending-signals
  (s/map-of string? (s/coll-of ::signal-data :kind sequential?)))

(s/def ::child-entry (s/keys :req-un [::child-id ::parent-seq ::policy ::status]))
(s/def ::children    (s/coll-of ::child-entry :kind sequential?))

(s/def ::drive-claim (s/keys :req-un [::workflow-id ::wake-version]))
(s/def ::drive-claims (s/coll-of ::drive-claim :kind sequential?))
(s/def ::park-status #{:parked :wake-raced :not-running :terminal})
(s/def ::park-result
  (s/and (s/keys :req-un [::park-status]
                 :opt-un [::wake-version])
         #(if (= :wake-raced (:park-status %))
            (contains? % :wake-version)
            true)))
(s/def ::count-result nat-int?)

;; number?, not int? — the MAX(seq) numeric type is driver-specific and MariaDB
;; is not covered by the existing max-seq regression test.
(s/def ::max-seq-result (s/nilable number?))

(s/def ::boolean-result boolean?)

;; ============================================================================
;; Assertion helper
;; ============================================================================

(defn ^:no-doc asserts-on?
  "Single source of truth for the toggle: reuses spec's own flags so both
   `(s/check-asserts true)` and `-Dclojure.spec.check-asserts=true` work, on
   Clojure and ClojureScript alike."
  []
  (and s/*compile-asserts* (s/check-asserts?)))

(defn check!
  "Assert that `x` satisfies `spec`; returns `x` unchanged.

   The value comes last so a check reads as the final step of a `->>` pipeline,
   which is how the store implementations use it:

       (->> events
            (check! ::events))

   A no-op unless assertions are enabled — see the namespace docstring. On
   violation the thrown ex-info carries `s/explain-data` plus the spec keyword.
   Which store and method produced it is already in the stack trace, so it is
   not duplicated into the ex-data."
  [spec x]
  (when (asserts-on?)
    (when-not (s/valid? spec x)
      (throw (ex-info (str "intemporal store spec violation: " (pr-str spec))
                      (assoc (s/explain-data spec x) ::spec spec)))))
  x)
