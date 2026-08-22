(ns intemporal.internal.context
  #?(:cljs
     (:require-macros
      [intemporal.internal.logging :as log]
      [net.cgrand.macrovich :as macros]))
  (:require
   [intemporal.internal.error :as error]
   [intemporal.internal.logging :as log]
   [intemporal.protocol :as p]
   [promesa.core]
   #?(:clj [net.cgrand.macrovich :as macros])))

;; ============================================================================
;; Dynamic Context
;; ============================================================================

(def ^:dynamic *workflow-context* nil)

(defn current-context
  "Has the following keys:

    :history (atom history)
    :history-index {[event-type seq] event}   ;; see `history-event`
    :workflow-id workflow-id
    :seq-counter (atom 0)
    :pending-events pending-events
    :pending-asyncs pending-asyncs
    :compensating? (atom false)
    :store store
    :registry registry
    :observer observer
  "
  []
  (or *workflow-context*
      (throw (ex-info "Not in workflow context" {}))))

(defn current-workflow-id []
  (:workflow-id (current-context)))

(defn current-store []
  (:store (current-context)))

(defn compensating?
  "True while the workflow is inside intemporal/compensate. Used to suppress the
   cancellation check so compensating activities can run even though the workflow
   is being cancelled (the cancel exception was already caught by the user)."
  []
  (boolean (some-> (:compensating? (current-context)) deref)))

(defn set-compensating! [v]
  (some-> (:compensating? (current-context)) (reset! v)))

(defn find-event [history event-type seq-num]
  (->> history
       (filter #(and (= (:event-type %) event-type)
                     (= (:seq %) seq-num)))
       first))

(defn index-history
  "Pass-local replay index: {[event-type seq] event}. FIRST occurrence wins,
   exactly like `find-event`'s `first`.

   History may legitimately contain DUPLICATE (seq, event-type) entries —
   :activity-scheduled is re-emitted on every pass that reaches it before
   completion, and check-then-act writes double-write on InMemory/FDB (kimi.md
   P4) — and replay must keep resolving each seq to the same, earliest one. A
   plain (into {} ...) silently flips this to last-wins and makes replay depend
   on append order."
  [history]
  (reduce (fn [m e]
            (let [k [(:event-type e) (:seq e)]]
              (if (contains? m k) m (assoc m k e))))
          {}
          history))

(defn history-event
  "Find the event of `event-type` at `seq-num` in the CURRENT PASS's history
   snapshot — the vector drive-workflow! loaded once, before the body
   started replaying (`:history`, written once per iteration, never mutated).

   Replay reads THIS, never the live store: an event written by another thread
   while the pass is in flight (for example, a concurrent signal writer)
   belongs to the NEXT pass. Reading the store per op mixes two snapshots inside
   one pass (kimi.md X9) and costs a round-trip per replayed step (A16).

   Deliberately does NOT consult :pending-events — the store cannot see them
   mid-pass either, so snapshot-only is an exact substitution for the store read.
   `seq-has-event?` unions them on purpose; that is a different question."
  ([event-type seq-num]
   (history-event (current-context) event-type seq-num))
  ([ctx event-type seq-num]
   (if-let [idx (:history-index ctx)]
     (get idx [event-type seq-num])
     (find-event @(:history ctx) event-type seq-num))))

(defn attempt-state
  "Durable retry state (kimi.md X8) for the activity at `seq-num`: the recorded
   :activity-attempt-failed carrying the HIGHEST :attempts, or nil when no
   attempt has been consumed yet. `stub` threads it into the activity suspension
   so the engine's retry loop resumes where a crashed drive left off instead of
   restarting at attempt 1.

   Deliberately NOT `history-event`: attempt events legitimately repeat at one
   (seq, event-type) — one per attempt — and the pass index is first-wins, so a
   lookup there would keep answering \"attempt 1\" on InMemory, which appends every
   copy (JDBC and FDB keep only the latest). Max over the running total is the one
   reading that agrees across all three stores (see
   `intemporal.internal.activity/attempt-failed-event`).

   Scans the snapshot rather than the index, but only where an activity is about
   to be SCHEDULED — at most once per pass, since scheduling throws — so this
   does not reintroduce the per-op cost A16 removed."
  ([seq-num] (attempt-state (current-context) seq-num))
  ([ctx seq-num]
   (let [matching (filterv #(and (= :activity-attempt-failed (:event-type %))
                                 (= seq-num (:seq %)))
                           @(:history ctx))]
     (when (seq matching)
       (apply max-key #(or (:attempts %) 0) matching)))))

(defn add-pending-event! [event]
  (let [ctx (current-context)]
    (swap! (:pending-events ctx) conj event)))

(def ^:private pending-wait-marker?
  "Event types that RECORD a wait without resolving the op that threw it. `sleep`
   persists :timer-scheduled up front so its deadline can't drift across resumes,
   and `wait-for-signal-with-timeout` persists :signal-wait-scheduled for the same
   reason; each op only resolves when :timer-fired / :signal-wait-completed lands
   at the same seq."
  #{:timer-scheduled :signal-wait-scheduled})

(defn- seq-resolved?
  "True if history (or pending events) holds an event at sequence `s` that
   RESOLVES the op there, so replay returns its recorded value and moves on.

   The pending-events scan is load-bearing: it lets a :workflow-cancelling marker
   added earlier in the *current* pass count as present, so the frontier op does
   not record a second marker / throw twice at the same seq within one pass.

   A bare `pending-wait-marker?` does NOT count. Treating one as resolved made
   cancellation permanently undeliverable to a workflow parked on `sleep`: its own
   :timer-scheduled deferred the check at that seq on every later re-drive, and
   with no op after the sleep there was no further frontier to reach, so a
   cascade-cancelled sleeper only ever unblocked when its original timer fired."
  [ctx s]
  (letfn [(resolves? [e] (and (= (:seq e) s)
                              (not (pending-wait-marker? (:event-type e)))))]
    (or (some resolves? @(:history ctx))
        (some resolves? @(:pending-events ctx)))))

(defn replaying?
  "True when the operation about to run at the current sequence position is
   already resolved by history (it is being replayed, not executed for the first
   time). Used to defer the cancellation check to the frontier - the first
   un-resolved operation - so that a saga's compensation registrations (which
   re-run during replay) are rebuilt before cancellation surfaces into the user's
   catch. Per-seq equality (not max-seq) so that compensation events, which take
   higher seq numbers, don't make a not-yet-reached forward op look replayed."
  []
  (seq-resolved? (current-context) @(:seq-counter (current-context))))

(defn- surface-cancellation!
  "Decide where a cancellation surfaces into the workflow body, then throw.

   Cancellation must surface deterministically so that a saga's compensations
   (registered as the body re-runs) are rebuilt before the user's catch runs, and
   so the compensation seq space stays stable across crashes/resumes. We anchor it
   to a single frontier sequence number, recorded once as a :workflow-cancelling
   marker and re-thrown at that same seq on every later pass (like a recorded
   :activity-failed):

   - marker already at `cur`  -> re-throw (deterministic replay frontier);
   - still replaying cached steps -> return nil so the body advances toward the
     frontier (re-registering compensations along the way);
   - frontier (first un-cached op) -> record the marker, then throw."
  [ctx cur]
  (cond
    (history-event ctx :workflow-cancelling cur)
    (throw (error/workflow-cancelled-exception))

    (replaying?)
    nil

    :else
    (do
      (add-pending-event! {:event-type :workflow-cancelling :seq cur})
      (throw (error/workflow-cancelled-exception)))))

(defn check-cancelled! []
  (let [ctx (current-context)]
    ;; Suppress while compensating: the cancel exception was already caught by
    ;; the user and the compensating activities must run.
    (when (and (not (compensating?))
               (p/is-cancelled? (:store ctx) (:workflow-id ctx)))
      (surface-cancellation! ctx @(:seq-counter ctx)))))

(defn next-seq! []
  (check-cancelled!)
  (let [ctx (current-context)
        seq @(:seq-counter ctx)]
    (swap! (:seq-counter ctx) inc)
    seq))

(defn update-seq! [event]
  (when-let [last-seq (:last-seq event)]
    (let [current-seq (dec @(:seq-counter (current-context)))]
      (when (> last-seq current-seq)
        (dotimes [_ (- last-seq current-seq)]
          (next-seq!))))))

(defn add-pending-async! [async-info]
  (let [ctx (current-context)]
    (swap! (:pending-asyncs ctx) conj async-info)))

(defn notify-observer [event-fn & args]
  (when-let [observer (:observer (current-context))]
    (try
      (apply event-fn observer args)
      (catch #?(:clj Exception :cljs js/Error) e
        ;; Don't let observer errors break workflow
        (log/warnf e "Observer error: %s" (ex-message e))))))

;; ============================================================================
;; Context-Aware Macros, cljs only
;; ============================================================================

(defmacro blet
  "Like p/let, but automatically propagates *workflow-context*."
  [bindings & body]
  #_{:clj-kondo/ignore [:unresolved-symbol]}
  (macros/case
    :clj (throw (IllegalArgumentException. "CLJS only"))
    :cljs
    (let [ctx-sym (gensym "workflow-ctx")]
      `(let [~ctx-sym *workflow-context*] ;; 1. Capture outside
         (promesa.core/let
           ~(vec (interleave
                   (take-nth 2 bindings)
                   (map (fn [expr]
                          ;; 2. Restore inside every binding step (Right-Hand Side)
                          `(binding [*workflow-context* ~ctx-sym]
                             ~expr))
                        (take-nth 2 (rest bindings)))))
           ;; 3. Restore inside the final body
           (binding [*workflow-context* ~ctx-sym]
             ~@body))))))

(defmacro bthen
  "Like p/then, but automatically propagates *workflow-context*."
  [promise f]
  (macros/case
    :clj (throw (IllegalArgumentException. "CLJS only"))
    :cljs (let [ctx-sym (gensym "workflow-ctx")]
            `(let [~ctx-sym *workflow-context*]
               (promesa.core/then ~promise
                 (fn [res#]
                   (binding [*workflow-context* ~ctx-sym]
                     (~f res#))))))))

(defmacro bfinally
  "Like p/finally, but automatically propagates *workflow-context*."
  [promise f]
  (macros/case
    :clj (throw (IllegalArgumentException. "CLJS only"))
    :cljs (let [ctx-sym (gensym "workflow-ctx")]
            `(let [~ctx-sym *workflow-context*]
               (promesa.core/finally ~promise
                 (fn [& args#]
                   (binding [*workflow-context* ~ctx-sym]
                     (apply ~f args#))))))))

(defmacro bloop
  "Like p/loop, but automatically propagates *workflow-context*.
   Use p/recur inside the body as normal."
  [bindings & body]
  (macros/case
    :clj (throw (IllegalArgumentException. "CLJS only"))
    :cljs
    (let [ctx-sym (gensym "workflow-ctx")]
      `(let [~ctx-sym *workflow-context*]
         (promesa.core/loop ~bindings
           (binding [*workflow-context* ~ctx-sym]
             ~@body))))))
