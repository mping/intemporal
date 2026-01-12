# 1. High-level Architecture

**Date:** 2026-01-10
**Source:** [chat.openai.com](https://chatgpt.com/share/6961a32a-f1a4-800e-bd76-8ab69b7b5756)

---

### **You**

Describe the API for s high level clojure library in the style of temporal.io but runs embedded; in particular describe the API and implementation for a deterministic workflow runner, it should work for activities and for async calls too

---

### **ChatGPT**

Below is a high-level API and implementation design for an embedded, deterministic workflow engine in Clojure, inspired by Temporal.io, but running in-process (no external service). I’ll describe:

Core design goals

Public API (what users write)

Workflow semantics (determinism model)

Activities

Async / concurrency model

Signals, queries, timers

Implementation architecture

Deterministic runner internals

Comparison to Temporal concepts

I’ll keep it idiomatic Clojure, functional-first, but pragmatic.

1. Core Design Goals

Deterministic execution

Same workflow code + same history ⇒ same behavior

Embedded

No server, no RPC, no DB required (but pluggable persistence)

Replayable

Execution is driven by a recorded event log

Workflow ≠ Activities

Workflows are pure & deterministic

Activities may be impure, blocking, non-deterministic

Async-first

Native support for async workflows (no threads inside workflows)

Testable

Full replay and time-skipping in memory

2. Public API (User-Facing)
   Defining a Workflow

```clojure
(ns example.workflows
  (:require [detflow.workflow :as wf]))

(wf/defworkflow order-workflow
  [order-id]
  (let [order   (wf/await (wf/activity fetch-order order-id))
        payment (wf/await (wf/activity charge-card (:card order)))
        _       (wf/await (wf/activity ship-order order))]
    {:status :completed
     :payment payment}))
```

Key properties:

Workflow code looks synchronous

wf/await is deterministic suspension

No direct I/O allowed in workflow bodies

Defining Activities

```clojure
(ns example.activities
  (:require [detflow.activity :as act]))

(act/defactivity fetch-order [order-id]
  ;; arbitrary IO allowed
  (db/get-order order-id))

(act/defactivity charge-card [card]
  (payments/charge card))

(act/defactivity ship-order [order]
  (shipping/send order))
```

Activities:

Run outside deterministic runner

Can be retried, timed out, or mocked

Starting a Workflow

```clojure
(require '[detflow.engine :as engine])

(def engine
  (engine/create
    {:persistence (engine/in-memory-store)}))

(engine/start-workflow
  engine
  {:workflow example.workflows/order-workflow
   :id       "order-123"
   :args     ["order-123"]})
```

Querying Workflow State

```clojure
(engine/query engine "order-123" :status)
```

Sending Signals

```clojure
(engine/signal engine "order-123" :cancel)
```

3. Workflow Semantics (Determinism Model)
   Forbidden inside workflows

System time

Randomness

Threads, futures, core.async go blocks

I/O

Atoms, refs, agents (unless mediated by workflow runtime)

Allowed

Pure computation

Deterministic async primitives

wf/await, wf/all, wf/race

wf/sleep (virtual time)

Workflow-local state (managed by runtime)

4. Activities
   Scheduling an Activity

```clojure
(wf/activity fetch-order order-id)
```

Returns a deterministic promise-like handle.
Options:

```clojure
(wf/activity
  {:retry {:max-attempts 3}
   :timeout 5000}
  fetch-order
  order-id)
```

Execution model:

Workflow schedules activity → event recorded

Runner dispatches activity to executor

Result recorded as event

Replay reads event instead of re-running activity

5. Async & Concurrency Model
   Await

```clojure
(wf/await promise)
```

Parallel Execution

```clojure
(let [[a b c]
      (wf/await
        (wf/all
          (wf/activity a)
          (wf/activity b)
          (wf/activity c)))]
  ...)
```

Race

```clojure
(wf/await
  (wf/race
    (wf/activity slow)
    (wf/sleep 1000)))
```

Async Workflow Functions

```clojure
(wf/defworkflow async-example []
  (let [x (wf/await (wf/async (+ 1 2)))]
    x))
```

wf/async:

Forks a deterministic task

Not a thread

Scheduled via workflow interpreter

6. Signals, Queries, Timers
   Signals

```clojure
(wf/await-signal :cancel)
```

or

```clojure
(wf/on-signal :cancel
  (fn [_] (throw (ex-info "Cancelled" {}))))
```

Signals:

Appended to event log

Delivered deterministically during replay

Queries

```clojure
(wf/query-handler :status
  (fn [state] (:status state)))
```

Queries:

Read-only

Do not mutate workflow state

Not recorded in history

Timers / Sleep

```clojure
(wf/sleep 1000)
```

Logical time

Skips instantly during replay/testing

7. Implementation Architecture
   High-Level Components

```
powershell┌─────────────────────────┐
│ Workflow Engine         │
│                         │
│ ┌─────────────────────┐ │
│ │ Deterministic Runner │ │
│ └─────────────────────┘ │
│         │               │
│ ┌─────────────────────┐ │
│ │ Event History Store │ │
│ └─────────────────────┘ │
│         │               │
│ ┌─────────────────────┐ │
│ │ Activity Executor   │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

8. Deterministic Runner Internals
   Core Idea
   Workflow execution is an interpreter over events
   Event Types

```clojure
clojure{:type :workflow-start
 :args [...]}

{:type :activity-scheduled
 :id   42}

{:type :activity-completed
 :id     42
 :result ...}

{:type :timer-fired
 :id 17}

{:type :signal-received
 :name :cancel
 :payload ...}
```

Execution Loop (Simplified)

```clojure
(defn run-workflow [history workflow-fn]
  (binding [*runtime* (make-runtime history)]
    (try
      (workflow-fn)
      (catch Suspend e
        :suspended))))
```

Where:

Suspend is thrown by wf/await

Runtime records or consumes events

wf/await Implementation (Conceptual)

```clojure
(defn await [handle]
  (if (completed? handle)
    (result handle)
    (throw (->Suspend handle))))
```

On replay:

Handle completion is read from history

No actual blocking occurs

Activity Scheduling

```clojure
(defn activity [fn & args]
  (let [event (next-event!)]
    (if (:replay? *runtime*)
      (lookup-result event)
      (schedule-activity fn args))))
```

Deterministic State
Workflow-local state stored in runtime:

```clojure
clojure{:pc       42
 :futures  {...}
 :signals  [...]
 :timers   {...}}
```

All mutation is mediated and recorded.

9. Comparison to Temporal
   Temporal ConceptThis LibraryTemporal ServerEmbedded runtimeWorkflow HistoryPluggable event storeWorkflow TaskDeterministic interpreterActivity WorkerLocal executorPromisesDeterministic handlesReplayAlways-on

Summary
This design gives you:

Temporal-style workflows

Fully deterministic execution

Embedded, testable, REPL-friendly

Native async without threads

Clean separation between workflow logic and side effects

If you want, I can:

Sketch a minimal runnable prototype

Show a step-by-step replay example

Compare core.async vs interpreter-based async

Design the event store / persistence layer

Just tell me which direction you want next.

---

### **You**

How do you use the suspended exception to wait?

---

### **ChatGPT**

Great question — this is the core trick that makes a deterministic workflow runner work without blocking threads.
Below I’ll explain how a “suspended exception” is used to wait, step by step, and why this works.

The Core Idea (TL;DR)

Waiting is implemented by throwing, not blocking.

When a workflow reaches an operation that cannot complete yet (activity result, timer, async task), it:

Records what it’s waiting for

Throws a special Suspend exception

The runner catches it, persists state, and returns control

When new events arrive, the runner replays the workflow from the beginning

On replay, the “awaited” value is now available, so execution continues

No threads are parked. No blocking occurs.

Why an Exception?
Because Clojure:

Has no continuations

Does not allow stack capture / resumption

But does have cheap, controlled exceptions

The exception is a control-flow signal, not an error.

The Suspend Exception

```clojure
(defrecord Suspend [wait-id])
```

This identifies what the workflow is waiting on (activity, timer, signal, async task).

wf/await: The Key Primitive

```clojure
(defn await [handle]
  (if (completed? handle)
    (result handle)
    (throw (->Suspend (:id handle)))))
```

Meaning:

If the value is already known → return it

Otherwise → abort execution intentionally

Runner Execution Loop
The workflow runner expects suspension:

```clojure
(defn run-workflow [runtime workflow-fn]
  (try
    (workflow-fn)
    (catch Suspend s
      (record-wait runtime (:wait-id s))
      :suspended)))
```

At this point:

The workflow did not fail

It simply reached a point where it needs external input

What Happens After Suspension?
1. Workflow is paused
   The runner:

Persists the current history

Remembers what the workflow is waiting on

Returns control to the engine

No stack is kept. No thread is blocked.

2. External event arrives
   Examples:

Activity completes

Timer fires

Signal is sent

An event is appended:

```clojure
clojure{:type :activity-completed
 :id   42
 :result {:ok true}}
```

3. Workflow is replayed from the beginning
   This is the most important part.

```clojure
(run-workflow runtime workflow-fn)
```

But now:

Runtime is in replay mode

The activity result is already in the event history

So when the workflow reaches:

```clojure
(wf/await activity-handle)
```

This time:

```clojure
(completed? handle) ; => true
(result handle)     ; => returns recorded value
```

Execution continues past the await.

Why Replay Works
Because workflows are:
✔ Deterministic
✔ Side-effect-free
✔ Driven entirely by recorded events
So re-running from the top always reconstructs the same logical state.

Example Timeline
Workflow Code

```clojure
(let [x (wf/await (wf/activity fetch-order 123))]
  (wf/await (wf/activity ship-order x)))
```

First Run

fetch-order scheduled

wf/await → throws Suspend

Runner exits

Activity Completes

```clojure
clojure{:type :activity-completed
 :id 1
 :result {:item "book"}}
```

Replay Run

fetch-order result is replayed

x is now bound

ship-order scheduled

wf/await → throws Suspend again

Repeat Until Done
Each suspension:

Is intentional

Is deterministic

Advances workflow state

Why This Is Better Than Blocking
BlockingSuspend + ReplayUses threadsUses noneHard to serializeFully replayableCannot survive crashesCrash-safeTime-based waitsLogical time

Important Constraints
Because of this model:
❌ You cannot catch Suspend inside workflow code
❌ You must not swallow it
❌ Workflow code must be referentially transparent
The runner owns suspension.

Mental Model
Think of workflows as:

Pure functions evaluated incrementally by throwing themselves out of execution until more inputs arrive.

If You Want Next
I can:

Show real Clojure code for a minimal runner

Explain how async tasks work using the same mechanism

Show how to prevent users from catching Suspend

Compare this to core.async parking

Just tell me.

---

### **ChatGPT**

Async tasks are the same mechanism as activities and timers, just entirely internal to the workflow. The key insight is:

“Async” does NOT mean threads.
It means multiple logical continuations managed by the deterministic runner.

Below I’ll explain how async tasks work, starting from the mental model, then the API, then the internals.

Mental Model
Think of a workflow as:

A single-threaded, deterministic interpreter that can have multiple logical tasks.

Each async task is:

A forked execution branch

Identified by a task-id

Scheduled and resumed only via history events

Never executed concurrently on the CPU

So concurrency is logical, not physical.

Public API
Creating an Async Task

```clojure
(wf/async
  (fn []
    (wf/await (wf/activity a))
    (wf/await (wf/activity b))
    :done))
```

Returns a task handle.

Awaiting a Task

```clojure
(let [task (wf/async some-work)]
  (wf/await task))
```

Parallel Tasks

```clojure
(let [a (wf/async #(wf/await (wf/activity f1)))
      b (wf/async #(wf/await (wf/activity f2)))]
  [(wf/await a) (wf/await b)])
```

Unified Abstraction: Awaitable
Internally, everything awaited is an awaitable:

```clojure
clojure{:id 42
 :type :activity | :timer | :async-task
 :state :pending | :completed
 :result ...}
```

Async tasks fit into this model exactly.

How wf/async Works
Step 1: Schedule the Task

```clojure
(defn async [f]
  (let [id (next-id!)]
    (record-event!
      {:type :async-started
       :id id})
    (register-task!
      {:id id
       :fn f
       :pc 0})
    (->AsyncHandle id)))
```

This does NOT execute f yet.

Step 2: Runner Executes Tasks Incrementally
The runner maintains a task queue:

```clojure
clojure{:tasks
 {0 {:fn main-workflow}
  1 {:fn async-task-A}
  2 {:fn async-task-B}}}
```

Execution loop:

```clojure
(loop []
  (when-let [task (next-runnable-task)]
    (run-task task)
    (recur)))
```

Only one task runs at a time.

Step 3: Async Task Suspension
Async tasks suspend exactly like workflows.
Example async task:

```clojure
(fn []
  (wf/await (wf/activity x))
  (wf/await (wf/activity y)))
```

If x isn’t ready:

wf/await throws Suspend

Runner catches it

Task state is persisted

Control returns to scheduler

Step 4: Task Completion
When the async task reaches the end:

```clojure
(record-event!
  {:type :async-completed
   :id task-id
   :result result})
```

Now:

Awaiters can proceed

Replay sees the task as completed

Awaiting an Async Task

```clojure
(defn await [handle]
  (if (completed? handle)
    (:result handle)
    (throw (->Suspend (:id handle)))))
```

Same as activities.
No special logic.

Replay Behavior
On replay:

Async-start event is read

Task function is re-run from the beginning

Each await:

Consumes history

Either returns value or suspends

When async-completed event is reached:

Task returns immediately

Replay reconstructs the exact logical state.

Determinism Guarantees
To remain deterministic:
✔ Async task creation order must be deterministic
✔ Task scheduling order must be deterministic
✔ No shared mutable state between tasks
✔ All communication via awaitables/events
The runner enforces this.

Why Not Threads / Futures?
ThreadsDeterministic Async TasksNondeterministic schedulingFully deterministicHard to replayAlways replayableUses blockingNo blockingNot crash-safeCrash-safe

Relation to Temporal
TemporalThis LibraryWorkflow threadAsync taskPromiseAwaitableCoroutineDeterministic taskEvent historyEmbedded log

Key Insight

Async tasks are just nested workflows sharing the same event history.

They use:

The same suspension mechanism

The same replay logic

The same await semantics

If You Want More
I can:

Walk through a full execution trace

Show a minimal runnable async scheduler

Explain fairness and starvation

Show how to implement wf/all and wf/race using async tasks

Just say the word.

---

### **You**

What alternative is there to using exceptions? Can I use semaphores, promises or core.async?

---

### **ChatGPT**

Short answer: yes, there are alternatives—but none give you the same combination of determinism, replayability, and simplicity as the “suspend exception” model.
Long answer below, with concrete trade-offs.

What the exception is really doing
Before comparing alternatives, it helps to name the role clearly.
The Suspend exception is acting as a delimited continuation escape hatch:

It aborts execution without committing side effects

It returns control to the runner immediately

It does not park a thread

It allows the workflow to be re-executed from the beginning

So any alternative must satisfy all four.

Option 1: Semaphores / Locks ❌
Why it seems tempting
You could imagine:

```clojure
(.acquire semaphore)
```

and then releasing it when an activity completes.
Why it fails
ProblemExplanationBlocks threadsEven “lightweight” locks block a real threadNot replayableYou can’t serialize “where a thread was blocked”Crash-unsafeA crash loses waiting stateTime leaksReal wall-clock time passes
Verdict
❌ Not viable for deterministic workflows.

Option 2: Promises / Futures ❌ (by themselves)
The naive idea

```clojure
(let [p (promise)]
  (deliver p 42)
  @p)
```

Why it fails
ProblemExplanationDeref blocksSame issue as semaphoresFutures spawn threadsNon-deterministic schedulingNot replayableYou cannot rehydrate a promise’s wait pointHidden side effectsThread creation is observable
You can use promises inside the engine, but not inside workflow code.
Verdict
❌ Unsafe inside workflows

Option 3: core.async ❌ (for workflow code)
This is the most common question.
Why it looks attractive

Non-blocking

Parking instead of blocking

Structured concurrency

Why it still doesn’t work
1. go blocks are not replayable

```clojure
(go
  (<! ch)
  (println "resumed"))
```

The state machine is opaque

You cannot serialize its continuation

You cannot restart it after a crash

2. Scheduler nondeterminism
   core.async:

Schedules tasks nondeterministically

Order depends on timing, CPU, queue state

Replay would diverge.
3. Time & parking are real

timeout uses wall-clock time

Parking depends on real execution order

4. Channels are mutable state
   Channel buffers mutate invisibly to the workflow history.
   Verdict
   ❌ Not deterministic enough for workflow logic
   (Temporal explicitly forbids it for the same reason.)

Option 4: CPS / Explicit State Machines ✅ (but painful)
You can avoid exceptions by writing workflows as state machines.
Example

```clojure
clojure{:state :waiting-for-activity
 :on-complete (fn [result]
                {:state :next
                 :value result})}
```

Pros
✔ Fully deterministic
✔ Replayable
✔ No exceptions
Cons
❌ Terrible ergonomics
❌ Hard to read
❌ Hard to compose
❌ Users will hate it
This is what you’re implicitly doing anyway—exceptions just hide it.

Option 5: Delimited continuations ✅ (not in Clojure)
Languages with:

yield

await

call/cc

stack capture

…can suspend without exceptions.
But:

Clojure/JVM does not support this

Libraries can’t add it safely

Verdict
✅ Theoretical best
❌ Practically unavailable

Option 6: Algebraic effects ❌ (same reason)
If Clojure had native algebraic effects:

```clojure
(await activity)
```

could suspend naturally.
But again:

No JVM support

No portable implementation

Option 7: Hybrid — Exceptions + Engine Promises ✅ (Best Practice)
This is what mature engines do (including Temporal internally):

Workflow code uses:

wf/await

suspension via exception

Engine code uses:

promises

thread pools

core.async (optional)

Example:

```clojure
clojure;; inside engine, NOT workflow
(let [p (promise)]
  (execute-activity
    #(deliver p %))
  p)
```

Workflow never touches the promise directly.

Why Exceptions Are Actually the Cleanest Tool
RequirementExceptioncore.asyncPromisesNo thread blocking✅✅❌Replayable✅❌❌Serializable✅❌❌Deterministic✅❌❌Simple API✅❌❌
The exception is:

Local

Explicit

Zero runtime footprint

Pure control flow

Important Design Rule

Exceptions are never part of user logic.
They are an implementation detail of the runtime.

Users never:

Catch them

Throw them

See them

They only see wf/await.

Bottom Line

Semaphores → ❌

Promises/futures → ❌ (inside workflows)

core.async → ❌ (inside workflows)

CPS/state machines → ✅ but unusable

Exceptions → ✅ best available tool on the JVM

One-Sentence Summary

If you need deterministic suspension + replay on the JVM, exceptions are not a hack—they are the only practical substitute for continuations.

If you want, I can:

Show how to sandbox core.async behind activities

Show a minimal no-exception CPS runner for comparison

Show how to prevent users from catching Suspend

Compare with Temporal’s internal implementation

Just tell me.

---

### **You**

Compare with temporal deterministic runner

---

### **ChatGPT**

Below is a direct, concrete comparison between Temporal’s deterministic runner and the embedded Clojure runner we’ve been discussing. I’ll focus on mechanics, not marketing.

1. High-level Architecture
   AspectTemporalEmbedded Clojure RunnerDeploymentExternal service (Temporal Server)In-process libraryExecutionWorkflow Task replay loopDeterministic interpreterPersistenceServer-managed event historyPluggable (in-mem / DB / log)Language SDKJava, Go, TS, etc.Clojure (JVM)
   Key similarity
   Both execute workflows by replaying code from the beginning against an event history.

2. Core Execution Model
   Temporal
   Temporal runs workflows inside a Workflow Task:

Server sends workflow history

SDK replays workflow code from start

Workflow code blocks on a workflow thread

When blocked, task completes

New events arrive → new task → replay again

“Blocking” in Temporal is fake blocking.

Embedded Runner

Engine loads workflow history

Runner invokes workflow fn

wf/await throws Suspend

Runner catches it and stops

New events arrive → replay

Suspension is explicit, not thread-based.

Key Difference
TemporalEmbeddedSuspension mechanismVirtual threads / coroutinesException-basedUser mental modelBlockingExplicit awaitStack handlingSDK-managed fibersRestart from top

3. How Waiting Works
   Temporal (Java SDK example)

```java
javaString result = activity.doWork(); // blocks
```

Under the hood:

SDK parks a workflow thread

Thread state is serialized implicitly via replay

Key trick:

Temporal SDK rewrites blocking calls to be interpreter checkpoints.

Embedded Clojure

```clojure
(wf/await (wf/activity do-work))
```

Under the hood:

Throws Suspend

No stack preserved

Replay reconstructs state

Consequence
Temporal:

Appears imperative

Requires heavy bytecode / runtime machinery

Embedded:

Explicit suspension

Simpler implementation

Slightly more functional style

4. Activities
   AspectTemporalEmbeddedSchedulingCommand sent to serverEvent appended locallyExecutionWorker processLocal executorResult deliveryServer eventEvent historyReplaySDK substitutes resultRunner substitutes result
   Semantically identical.

5. Async / Concurrency
   Temporal
   Temporal uses:

Workflow threads

Promise<T>

Deterministic scheduler

```java
javaPromise<A> a = Async.function(this::f1);
Promise<B> b = Async.function(this::f2);
Promise.allOf(a, b).get();
```

Important:

These are not Java threads

They’re SDK-managed coroutines

Embedded Runner

```clojure
(let [a (wf/async #(wf/await (wf/activity f1)))
      b (wf/async #(wf/await (wf/activity f2)))]
  [(wf/await a) (wf/await b)])
```

Mechanically:

Both spawn logical tasks

Both suspend independently

Both resume via replay

6. Determinism Enforcement
   Temporal
   Temporal SDK:

Intercepts time

Intercepts randomness

Replaces blocking APIs

Throws NonDeterministicException on mismatch

Requires:

Special runtime

SDK constraints

Static analysis rules

Embedded Runner
Determinism is enforced by:

No I/O allowed in workflows

All waits go through wf/await

All side effects become events

Much simpler, but:

Less “magic”

More discipline required

7. Timers & Time
   TemporalEmbeddedTimer APIWorkflow.sleepwf/sleepClockVirtualVirtualReplayServer-drivenLocal history
   Identical semantics.

8. Signals & Queries
   FeatureTemporalEmbeddedSignalsAsynchronous eventsEventsQueriesRead-onlyRead-onlyReplay impactSignals replayedSignals replayedMutabilityRestrictedRestricted

9. Failure & Retry
   Temporal

Activity retries handled by server

Workflow retries are automatic

Failures recorded as events

Embedded

Activity retries implemented in executor

Workflow restarts are explicit

Failures appended to history

Semantics are the same; implementation surface is smaller.

10. Why Temporal Doesn’t Use Exceptions (But Effectively Does)
    Temporal does use exceptions internally—just not visible to users.

Workflow thread parking

Deterministic scheduler yield

SDK control flow

These are:

Runtime exceptions

Bytecode rewriting

Fiber state machines

Your embedded runner:

Makes this explicit

Avoids heavy SDK machinery

11. Trade-offs Summary
    Embedded Runner Advantages
    ✔ Much smaller codebase
    ✔ Easier to reason about
    ✔ No bytecode tricks
    ✔ REPL-friendly
    ✔ Easier testing
    Temporal Advantages
    ✔ Polished ecosystem
    ✔ Multi-language
    ✔ Durable server
    ✔ Production-hardened
    ✔ Transparent blocking API