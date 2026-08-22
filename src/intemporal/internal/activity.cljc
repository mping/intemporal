(ns intemporal.internal.activity
  (:require
   [intemporal.internal.error :as error]
   [intemporal.internal.clock :as clock]
   #?(:cljs [clojure.string :as str])))

;; ============================================================================
;; Activity Registry
;; ============================================================================

(defn- fn-name
  "Get a stable, qualified name string from a function.
   On JVM: uses var metadata when available, otherwise class name.
   On CLJS: demangles the JS function .name property (e.g. ns$fn_name -> ns/fn-name)."
  [f]
  #?(:clj (str (symbol f))
     :cljs (let [raw (.-name f)]
             (if (and raw (not (str/blank? raw)))
               ;; JS mangled name: intemporal$tests$deleteme_test$noop_activity
               ;; Split on $ to get segments, last is fn name, rest is ns
               (let [parts (str/split raw #"\$")]
                 (if (> (count parts) 1)
                   (let [ns-parts (butlast parts)
                         fn-part (last parts)
                         ;; underscores in ns segments -> hyphens
                         ns-str (str/join "." (map #(str/replace % "_" "-") ns-parts))
                         fn-str (str/replace fn-part "_" "-")]
                     (str ns-str "/" fn-str))
                   ;; Single segment - no namespace
                   (str/replace raw "_" "-")))
               ;; Anonymous fn - generate a name
               (str (gensym "activity-"))))))

(defn make-registry
  "Create a new activity registry"
  []
  (atom {}))

(defn register-activity!
  "Register an activity function in a registry"
  [registry f & {:keys [name timeout-ms retry-policy]}]
  (let [activity-name (or name
                          (if (var? f)
                            (str (symbol f))
                            (fn-name f)))
        resolved-fn (if (var? f) @f f)]
    (swap! registry assoc activity-name
           {:fn resolved-fn
            :timeout-ms timeout-ms
            :retry-policy retry-policy})
    activity-name))

(defn register-protocol-activities!
  "Register all methods of a protocol as activities, using the provided implementation."
  [registry protocol implementation]
  #?(:clj
     (let [proto-map (if (var? protocol) @protocol protocol)
           pvar (:var proto-map)
           ;; #'ns/Name -> ns
           pns (namespace (symbol (subs (str pvar) 2)))
           sigs (:sigs proto-map)]
       (doseq [[msym _] sigs]
         (let [mname (name msym)
               fullname (str pns "/" mname)
               ;; Resolve the actual protocol method function
               mfn (requiring-resolve (symbol fullname))]
           (register-activity! registry
                               (fn [& args]
                                 (apply mfn implementation args))
                               :name fullname))))
     :cljs
     ;; In CLJS, protocol registration is handled by the stub-protocol macro
     ;; which has access to protocol metadata at compile time.
     (throw (ex-info "register-protocol-activities! not needed in CLJS. Use stub-protocol macro." {}))))

(defn get-activity-info [registry activity-name]
  (get @registry activity-name))

(defn ensure-registered! [registry f]
  (let [activity-name (if (var? f)
                        (str (symbol f))
                        (fn-name f))]
    (when-not (contains? @registry activity-name)
      (register-activity! registry f :name activity-name))
    activity-name))

;; ============================================================================
;; Retry Policy
;; ============================================================================

(defn make-retry-policy
  "Create a retry policy.
   Options:
   - :max-attempts       maximum number of attempts (default 3)
   - :backoff-ms         initial backoff in ms (default 1000); alias :initial-backoff-ms accepted
   - :initial-backoff-ms alias for :backoff-ms
   - :max-backoff-ms     backoff ceiling in ms (default 60000)
   - :backoff-multiplier exponential multiplier (default 2.0)
   - :retryable-fn       1-arg predicate on the exception, returning true to retry (default: always retry)"
  [& {:keys [max-attempts backoff-ms initial-backoff-ms max-backoff-ms backoff-multiplier retryable-fn]
      :or {max-attempts 3
           max-backoff-ms 60000
           backoff-multiplier 2.0
           retryable-fn (constantly true)}}]
  (let [effective-backoff (or initial-backoff-ms backoff-ms 1000)]
    {:max-attempts max-attempts
     :backoff-ms effective-backoff
     :max-backoff-ms max-backoff-ms
     :backoff-multiplier backoff-multiplier
     :retryable-fn retryable-fn}))

(defn calculate-backoff ^long [policy attempt]
  (let [base (:backoff-ms policy)
        multiplier (:backoff-multiplier policy)
        max-backoff (:max-backoff-ms policy)
        backoff (* base (Math/pow multiplier (dec attempt)))]
    (long (min backoff max-backoff))))

(defn should-retry? [policy error attempt]
  (and (< attempt (:max-attempts policy))
       ((:retryable-fn policy) error)))

;; ============================================================================
;; Durable retry state
;; ============================================================================
;;
;; The retry loop runs entirely inside one drive, so a crash between two attempts
;; used to lose the fact that ANY attempt had run: the resumed drive started over
;; at attempt 1, and an activity with side effects could run `max-attempts` times
;; PER DRIVE instead of `max-attempts` times in total.
;;
;; The engines close that by persisting one :activity-attempt-failed event per
;; consumed attempt — before the backoff, which is the window the crash lands in
;; — and by starting the loop from what history records (`stub` threads the
;; recovered state into the activity suspension).
;;
;; The event also carries the BACKOFF DEADLINE (`:retry-at`), which makes the
;; wait itself durable: an engine no longer sleeps on the drive thread between
;; attempts, it suspends until that instant. The deadline is stamped once, when
;; the attempt fails, and reused verbatim on every later pass — recomputing it
;; per replay would keep pushing a deadline forward so it might never fire.
;;
;; The pure parts live here so the CLJ and CLJS engines cannot drift on the wire
;; format or on the resume decision.

(defn attempt-failed-event
  "The durable record of one consumed attempt.

   `attempts` is the RUNNING TOTAL across every drive, not the count within this
   one, and `will-retry?` records whether the policy accepted a further attempt —
   which is what makes an exhausted (or non-retryable) failure recognisable on
   resume without re-running anything. `retry-at` is the instant the next attempt
   becomes due (nil when no retry was granted).

   Emitted repeatedly at the same replay sequence — one durable identity per
   attempt. Carrying the running total also lets replay select the latest state
   directly; see `intemporal.internal.context/attempt-state`."
  [seq-num activity-name attempts error-map duration-ms will-retry? retry-at]
  {:event-type    :activity-attempt-failed
   :seq           seq-num
   :activity-name activity-name
   :attempts      attempts
   :error         error-map
   :duration-ms   duration-ms
   :will-retry    will-retry?
   :retry-at      retry-at
   :timestamp     (clock/now-ms)})

(defn retry-at
  "The instant the attempt after `attempt` becomes due, or nil when the policy
   granted no further attempt. Stamped ONCE by the engine that ran the failing
   attempt; never recomputed on replay."
  [retry-policy attempt will-retry?]
  (when (and will-retry? retry-policy)
    (+ (clock/now-ms) (calculate-backoff retry-policy attempt))))

(defn retry-pending?
  "True when the recovered state grants another attempt that is NOT yet due, i.e.
   the activity is mid-backoff. The workflow body consults this to refuse an
   early attempt: a worker poll (or any other wake) can re-drive a workflow at
   any moment, and only the body can decline to run before the deadline."
  ([attempt-state] (retry-pending? attempt-state (clock/now-ms)))
  ([attempt-state now]
   (boolean (and attempt-state
                 (:will-retry attempt-state)
                 (when-let [due (:retry-at attempt-state)]
                   (> due now))))))

(defn next-attempt
  "The attempt number to run next given the recovered state — 1 when history
   records none."
  [attempt-state]
  (inc (or (:attempts attempt-state) 0)))

(defn retry-budget-spent?
  "True when history already holds an attempt the policy declined to follow
   (`:will-retry` false): the budget is exhausted, or the error was classified
   non-retryable. The activity must NOT run again — the recorded error IS the
   outcome, and re-running it would spend an attempt the policy never granted.
   No recorded attempt (nil) is not spent."
  [attempt-state]
  (boolean (and attempt-state (not (:will-retry attempt-state)))))

(defn infrastructure-failure?
  "True for failures that are not the activity's own fault: an interrupt from a
   engine shutdown, or a rejection from a saturated pool. `stub` and `async`
   re-execute these instead of replaying them as errors, so they must not consume
   the caller's retry budget either — an
   infrastructure stop that burned attempts would shrink the budget every time a
   pod restarted."
  [e]
  (boolean (and e (or (error/interruption? e)
                      (error/rejection? e)))))
