# intemporal Core Namespace Improvements

Based on analysis of `src/intemporal/core.clj` (948 lines)

---

## Critical Issues (Fix Immediately)

### 1. Concurrency bug in wake-fn (High Severity)
**Location:** [core.clj:807-816](src/intemporal/core.clj#L807-L816)

**Problem:** Multiple threads could call `wake-fn` simultaneously causing data corruption. The promise delivery is not thread-safe and could happen multiple times.

**Impact:** Race conditions when timers fire, workflow could resume multiple times concurrently.

**Fix:**
```clojure
;; Add thread-safe promise delivery
(let [delivered? (atom false)
      wake-fn (fn []
                (when (compare-and-set! delivered? false true)
                  (try
                    (when observer
                      (p/on-workflow-resumed observer wf-id))
                    (deliver resume-promise
                             (run-workflow-internal engine wf-id workflow-fn args
                                                   {:observer observer
                                                    :max-iterations max-iterations}))
                    (catch Exception e
                      (deliver resume-promise {:status :failed :error e})))))]
```

---

### 2. Race condition in signal consumption (High Severity)
**Location:** [core.clj:511, 530, 555](src/intemporal/core.clj#L511)

**Problem:** Signal is consumed in one operation but recorded in another. Between these steps, another thread could observe inconsistent state.

```clojure
;; Step 1: Consume
(if-let [signal-data (p/consume-signal store workflow-id signal-name)]
  ;; Step 2: Record (not atomic with step 1!)
  (do
    (p/save-event store workflow-id {:event-type :signal-wait-completed ...})
```

**Impact:** Concurrent workflow resumptions could see signal consumed but no event recorded.

**Fix:** Add atomic consume-and-record operation at the protocol level:
```clojure
(defprotocol IStore
  (consume-and-record-signal [store workflow-id signal-name event]
    "Atomically consume signal and record event"))
```

---

### 3. Lost activity seq & retry-policy in async completion (High Severity)
**Location:** [core.clj:438-443](src/intemporal/core.clj#L438-L443)

**Problem:** When building activities for parallel execution, the `:retry-policy` field is dropped:

```clojure
(let [activities (mapv (fn [{:keys [activity-name args timeout-ms]}]
                         {:activity-name activity-name
                          :args args
                          :timeout-ms timeout-ms})    ;; ❌ retry-policy LOST!
                       pending-asyncs)
```

**Impact:**
- Retry policies in async activities are silently ignored
- If executor returns results out-of-order, events get mismatched
- No protection against partial failures

**Fix:** Pass complete async-info to executor:
```clojure
;; In core.clj
(let [results (p/execute-activities-parallel executor pending-asyncs)]

;; In runtime.clj - update execute-activities-parallel to handle retry-policy
(execute-activities-parallel [_ activities]
  (let [futures (mapv (fn [{:keys [activity-name args timeout-ms retry-policy]}]
                        ;; Handle retry-policy in parallel execution
```

---

## High Priority

### 4. Remove dead commented code (Medium Severity)
**Locations:** Lines 30-32, 79-82, 150-152, 183-184, 221-222, 238-239, 264-265, 292-294

**Problem:** Multiple functions contain commented-out code that retrieves history from an atom:
```clojure
;history @(:history ctx)
;existing (ctx/find-event history :activity-completed seq-num)
```

**Impact:** Creates confusion about actual implementation, technical debt from incomplete refactoring.

**Fix:** Delete all commented code blocks. If history lookup from context is needed, implement proper caching.

---

### 5. Missing validation in resume-workflow (Medium Severity)
**Location:** [core.clj:836-859](src/intemporal/core.clj#L836-L859)

**Problem:** `resume-workflow` doesn't validate that workflow-fn/args match the original workflow. Users could call:
```clojure
(resume-workflow engine wf-id different-fn different-args)
```

**Impact:** Replay could execute wrong code with wrong arguments, leading to data corruption.

**Fix:**
```clojure
(defn resume-workflow [engine workflow-id workflow-fn args & opts]
  (let [history (p/load-history (:store engine) workflow-id)
        started-event (first (filter #(= :workflow-started (:event-type %)) history))]
    (when started-event
      (when (not= (vec args) (:args started-event))
        (throw (ex-info "Resume args don't match original workflow"
                        {:original (:args started-event)
                         :provided args}))))
    ;; Continue with resume...
```

---

### 6. Extract duplicate event lookup pattern (Low-Medium Severity)
**Locations:** Repeated 8+ times throughout file

**Problem:** Same pattern repeated everywhere:
```clojure
(let [store (ctx/current-store)
      workflow-id (ctx/current-workflow-id)
      existing (p/find-event store workflow-id event-type seq-num)]
```

**Impact:** Code duplication, harder to maintain.

**Fix:** Create helper function:
```clojure
(defn- get-existing-event [event-type seq-num]
  (p/find-event (ctx/current-store) (ctx/current-workflow-id) event-type seq-num))

;; Usage:
(let [existing (get-existing-event :activity-completed seq-num)]
```

---

### 7. Missing validation in join-any (Low-Medium Severity)
**Location:** [core.clj:175-208](src/intemporal/core.clj#L175-L208)

**Problem:** No validation that `handles` vector is non-empty. Empty vector causes NullPointerException:
```clojure
(let [completed-idx (first (keep-indexed ...))]  ;; returns nil
  (nth handles completed-idx))                    ;; NPE!
```

**Fix:**
```clojure
(defn join-any [handles]
  (when (empty? handles)
    (throw (ex-info "join-any requires at least one handle" {})))
  (ctx/check-cancelled!)
  ;; Continue...
```

---

## Medium Priority

### 8. Performance: Inefficient history loading (Medium Severity)
**Location:** [core.clj:648](src/intemporal/core.clj#L648)

**Problem:** History loaded from store on every iteration:
```clojure
(loop [iteration 0]
  ...
  (let [history (p/load-history store workflow-id)  ;; Every iteration!
```

**Impact:** For deep workflows with long histories, this loads entire history repeatedly.

**Fix:** Cache history and reload only when new events expected:
```clojure
(defn- run-workflow-internal [...]
  (let [history-cache (atom nil)]
    (loop [iteration 0]
      (let [history (or @history-cache
                        (reset! history-cache (p/load-history store workflow-id)))
```

---

### 9. Unhandled observer exceptions (Medium Severity)
**Location:** [core.clj:449-454](src/intemporal/core.clj#L449-L454)

**Problem:** Observer calls not wrapped in try-catch:
```clojure
(when observer
  (if (= :success (:status result))
    (p/on-async-completed observer ...)  ;; Could throw!
    (p/on-async-failed observer ...)))   ;; Could throw!
```

**Impact:** If observer throws, interrupts event creation and leaves workflow inconsistent.

**Fix:**
```clojure
(when observer
  (try
    (if (= :success (:status result))
      (p/on-async-completed observer ...)
      (p/on-async-failed observer ...))
    (catch Exception e
      (println "Observer error:" (.getMessage e)))))
```

---

### 10. Inconsistent return types (Low-Medium Severity)
**Location:** [core.clj:662-780](src/intemporal/core.clj#L662-L780)

**Problem:** Different status returns have different shaped maps:
- `:completed` → `{:status :completed :result ...}`
- `:cancelled` → `{:status :cancelled :workflow-id ...}`
- `:failed` → `{:status :failed :error ...}`
- `:waiting-timer` → `{:status :waiting-timer :workflow-id ...}`

**Impact:** Inconsistent API, harder to work with results.

**Fix:** Normalize all return maps:
```clojure
{:status :completed/:cancelled/:failed/:waiting-timer
 :workflow-id workflow-id           ;; Always present
 :result (when completed) result
 :error (when failed) error}
```

---

### 11. Missing error context in child workflow failures (Low-Medium Severity)
**Location:** [core.clj:617-621](src/intemporal/core.clj#L617-L621)

**Problem:** Error only contains status, not actual error details:
```clojure
:error {:status (:status result)}  ;; Only status!
```

Compare to actual exception handling at line 627:
```clojure
:error (error/throwable->map e)  ;; Full error context
```

**Fix:**
```clojure
:error (when-let [err (:error result)]
         (if (map? err) err (error/throwable->map err)))
```

---

## Architectural Improvements

### 12. Separate replay from execution logic (High Priority)
**Location:** [core.clj:631-780](src/intemporal/core.clj#L631-L780)

**Problem:** `run-workflow-internal` is 150+ lines mixing:
1. Workflow replaying logic (loading history, checking cached results)
2. Workflow execution logic (running function, handling suspension)
3. External service orchestration (processing asyncs, timers, signals)

**Impact:** Hard to understand, test, and maintain.

**Fix:** Separate concerns into focused functions:
```clojure
(defn- replay-workflow-fn [workflow-fn args history]
  ;; Determine execution path based on history
  )

(defn- handle-suspension [engine suspension-type suspension-data pending-events]
  ;; Dispatch to appropriate handler
  )

(defn- run-workflow-internal [engine workflow-id workflow-fn args options]
  ;; Orchestrate the above
  )
```

---

### 13. Extract retry logic (Medium Priority)
**Location:** [core.clj:348-401](src/intemporal/core.clj#L348-L401)

**Problem:** `execute-with-retry` is 50+ lines with nested loop. Retry logic tightly coupled to activity execution.

**Fix:** Extract into separate function:
```clojure
(defn- execute-with-retries [execute-fn retry-policy on-attempt on-failure]
  (loop [attempt 1]
    (let [result (try
                   {:status :success :value (execute-fn)}
                   (catch Exception e
                     {:status :error :exception e}))]
      (case (:status result)
        :success (:value result)
        :error (if (should-retry? retry-policy (:exception result) attempt)
                 (do (on-attempt attempt)
                     (Thread/sleep (calculate-backoff retry-policy attempt))
                     (recur (inc attempt)))
                 (do (on-failure attempt)
                     (throw (:exception result))))))))
```

---

### 14. Consolidate pending async processing (Medium Priority)
**Locations:** Lines 701-707, 742-747, 666-670

**Problem:** Pending asyncs processed in multiple places with duplicated logic:
```clojure
(when (seq pending-asyncs-list)
  (process-pending-asyncs-parallel store executor workflow-id
                                   pending-asyncs-list
                                   pending-events-list
                                   observer))
```

**Fix:** Extract helper:
```clojure
(defn- process-pending-asyncs-if-any [store executor workflow-id pending-asyncs pending-events observer]
  (when (seq pending-asyncs)
    (process-pending-asyncs-parallel store executor workflow-id
                                     pending-asyncs pending-events observer))
  :continue)

;; Usage everywhere:
(process-pending-asyncs-if-any store executor workflow-id ...)
```

---

### 15. Make state machine explicit (Low-Medium Priority)
**Location:** Throughout file

**Problem:** Workflow states (started → running/suspended → completed/failed/cancelled) not explicitly modeled. Current approach uses nested case statements and implicit state in event history.

**Fix:** Consider using explicit state machine:
```clojure
(defprotocol IWorkflowState
  (handle-completion [state result])
  (handle-suspension [state type data])
  (handle-cancellation [state]))

(defrecord RunningState [...]
  IWorkflowState
  (handle-completion [this result]
    (->CompletedState ...))
  (handle-suspension [this type data]
    (->SuspendedState ...)))
```

---

## Nice-to-Have

### 16. Improve docstrings (Low Priority)
**Locations:** `stub` (lines 14-64), `async` (lines 72-140)

**Problem:** Docstrings incomplete. For example, `async` doesn't explain:
- What happens if thunk completes synchronously vs. suspends
- Why handle is returned before thunk execution
- How seq-num tracking works

**Fix:** Expand docstrings with examples:
```clojure
(defn async
  "Execute a thunk asynchronously within a workflow.

   Returns an AsyncHandle immediately, before the thunk executes.

   Behavior:
   - First execution: Thunk starts, returns handle for later join
   - During replay: Returns same handle, thunk result cached

   Example:
     (let [h1 (async (fn [] (activity-1)))
           h2 (async (fn [] (activity-2)))]
       ;; Both activities run in parallel
       [(join h1) (join h2)])

   The thunk can:
   - Call activities (which will be batched)
   - Throw exceptions (captured in async-failed event)
   - Return values (captured in async-completed event)"
  [thunk]
  ...)
```

---

### 17. Add bounds to pending events (Low Priority)
**Locations:** Lines 649-650

**Problem:** Unbounded accumulation:
```clojure
pending-events (atom [])
pending-asyncs (atom [])
```

**Impact:** Very long-running workflows could accumulate large vectors.

**Fix:** Consider batching or size limits:
```clojure
(defn- add-pending-event! [event]
  (let [events (:pending-events (current-context))]
    (swap! events conj event)
    (when (> (count @events) 1000)
      (flush-pending-events!))))
```

---

### 18. Consider splitting the file (Low Priority)

**Problem:** At 948 lines, file is getting unwieldy.

**Recommendation:** Split into:
- `core_operations.clj` - stub, async, join, signals, timers, child-workflows (~200 lines)
- `core_internal.clj` - Internal execution engine (~300 lines)
- `core.clj` - Public API (~100 lines)
- `core_helpers.clj` - Convenience functions (~100 lines)

---

## Summary by Priority

### Critical (Fix First)
1. Concurrency bug in wake-fn delivery
2. Race condition in signal consumption
3. Lost activity seq & retry-policy in async completion

### High Priority
4. Remove dead commented code
5. Missing validation in resume-workflow
6. Extract duplicate event lookup helper
7. Missing validation in join-any

### Medium Priority
8. Cache history loading
9. Wrap observer calls in try-catch
10. Normalize return types
11. Include error context in child workflow failures
12. **Architectural:** Separate replay from execution logic
13. **Architectural:** Extract retry logic
14. **Architectural:** Consolidate pending async processing

### Nice-to-Have
15. Make state machine explicit
16. Improve docstrings
17. Add bounds to pending events
18. Split large file

---

## Estimated Impact

**Fixing Critical + High Priority issues:**
- Eliminates data corruption risks
- Makes retry policies work correctly in async contexts
- Improves code maintainability significantly
- Prevents silent failures

**Fixing Medium Priority issues:**
- Improves performance for deep workflows
- Makes codebase more robust to errors
- Improves API consistency

**Architectural improvements:**
- Makes codebase easier to understand and test
- Reduces complexity of core functions
- Enables easier future enhancements
