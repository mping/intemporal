(ns intemporal.workflow
  (:require [intemporal.store :as store]
            [intemporal.workflow.internal :as internal]
            [promesa.core :as p]
            [taoensso.telemere :as t])
  #?(:cljs (:require-macros
             #_:clj-kondo/ignore
             [intemporal.workflow.internal :refer [with-env-internal trace! trace-async!]]
             [intemporal.workflow :refer [with-env]]))
  #?(:clj (:require [intemporal.workflow.internal :refer [trace! trace-async! add-event!]]
                    [steffan-westcott.clj-otel.context :as otctx]))
  #?(:clj (:import [java.util.concurrent ExecutorService Executors TimeUnit]
                   [java.lang AutoCloseable])))

#?(:clj (set! *warn-on-reflection* true))

;;;;
;; runtime

(defmacro with-env
  "Creates a new environment for workflow execution. Options:
  - `:store`: the underlying store to persist workflow metadata
  - `:id`: optional workflow id
  - `:timeout-ms`: optional timeout for workflow execution
  "
  [m & body]
  `(internal/with-env-internal ~m (do ~@body)))

(defn current-env
  "Returns the workflow execution environment for the current thread"
  []
  (assert (some? internal/*env*) "No workflow env detected, should only be called within a workflow function")
  internal/*env*)

(defn workflow-id
  "Returns the current workflow uuid"
  []
  (assert (some? internal/*env*) "No workflow env detected, should only be called within a workflow function")
  (-> internal/*env* :root))

;;;;
;; worker
(defprotocol ITaskExecutor
  (submit [this f] "Submits the function `f` for execution")
  (shutdown [this grace-period-ms] "Shuts down the task executor")
  (running? [this] "Indicates if the executor is running"))

;; allow expressions like (with-open [executor (w/start-poller ....

#?(:clj #_:clj-kondo/ignore (extend-protocol ITaskExecutor
                              AutoCloseable
                              (close [this] (shutdown this 0))))

;; make sure that any given executor service can implement ITaskExecutor
#?(:clj (extend-type ExecutorService
          ITaskExecutor
          (submit [executor f]
            (.submit ^ExecutorService executor ^Runnable f))
          (shutdown [executor grace-period-ms]
            ;; todo: release tasks
            (.shutdown ^ExecutorService executor)
            (t/log! {:level :debug} ["Executor shutdown"])
            (when-not (.awaitTermination ^ExecutorService executor grace-period-ms TimeUnit/MILLISECONDS)
              (t/log! {:level :debug} ["Executor shutdown grace period over, shutting down NOW"])
              (.shutdownNow ^ExecutorService executor)))
          (running? [executor]
            (not (.isShutdown ^ExecutorService executor)))))

(defn make-task-executor
  "Creates an object that satisfies `ITaskExecutor`."
  []
  (let [run? (atom true)]
    #?(:cljs
       (reify ITaskExecutor
         (submit [_ f]
           (when @run?
             (p/vthread (f))))
         (shutdown [_ grace-period-ms]
           (t/log! {:level :debug} ["Executor shutdown"])
           (reset! run? false))
         (running? [_] @run?))
       :clj
       (let [factory (-> (Thread/ofVirtual)
                         (.name "Task Thread")
                         (.factory))]
         (Executors/newThreadPerTaskExecutor factory)))))   ;]))))

(defn- worker-execute-fn
  "Executes a given protocol, activity or workflow `task`"
  [store protocols {:keys [type id root runtime fvar] :as task} task-counter shutting-down?]
  (let [runtime      (:runtime task)
        base-env     {:store     store
                      :type      type
                      :ref       id
                      :id        id
                      :root      (or root id)
                      :protos    protocols
                      :next-id   (fn [] (str (or root id) "-" (swap! task-counter inc)))
                      :shutdown? shutting-down?}
        internal-env (merge internal/default-env base-env runtime)]
    ;; root task: we only enqueue workflows
    (with-env internal-env
      (t/log! {:level :debug :data {:sym (:sym task) :env internal-env}} ["Resuming task with id" (:id task)])
      ;; this span creation is required in order for
      ;; subsequent workflow traces to have a "parent" span, otherwise
      ;; they won't show up correctly in jaeger
      ;; TODO test with eg loki
      (trace-async! {:name ::worker-execute-fn :attributes {:task-id (:id task)}}
        #?(:cljs (internal/resume-task internal-env store protocols task)
           :clj (otctx/bind-context! (otctx/headers->merged-context (:telemetry-context runtime))
                  (internal/resume-task internal-env store protocols task)))))))

(defn- worker-poll-fn
  "Continously polls for task while `task-executor` is active."
  [store protocols task-executor polling-ms]
  (let [task-counter   (atom 0)
        uid            (random-uuid)
        shutting-down? (fn [] (not (running? task-executor)))]
    #_{:clj-kondo/ignore [:loop-without-recur :invalid-arity]}

    @(p/loop []
       (-> (p/delay polling-ms)
           (p/chain (fn [_]
                      (loop []
                        (t/log! {:level :debug} ["Polling for tasks"])
                        (when-let [task (store/dequeue-task store)]
                          (t/log! {:level :debug :_data {:task task}} ["Dequeued task with id" (:id task)])
                          (submit task-executor (fn []
                                                  (worker-execute-fn store protocols task task-counter shutting-down?)))))))
           (p/catch (fn [e]
                      (t/log! {:level :warn :data {:exception e}} ["Caught error during task polling, continuing"])))
           (p/finally (fn [_ _]
                        (when (running? task-executor)
                          (p/recur))))))))

(defn start-poller!
  "Starts a poller that will submit tasks to the `task-executor`.
  Protocol implementations are resolved via a map of `:protocols {my.ns Impl}`
  Returns an `ITaskExecutor` that can be shutdown.
  For clj runtimes, task-executor should be `(Executors/newVirtualThreadPerTaskExecutor)`, as
  each execution will be blocked while they await for a given task dependencie's execution."
  ([store {:keys [protocols polling-ms] :or {protocols {} polling-ms 100} :as opts}]
   (start-poller! store (make-task-executor) opts))
  ([store task-executor & {:keys [protocols polling-ms] :or {protocols {} polling-ms 100}}]
   (assert (satisfies? ITaskExecutor task-executor) "Supplied task executor does not satisfy ITaskExecutor")
   (let [polling-fn (fn [] (worker-poll-fn store protocols task-executor polling-ms))]
     (submit task-executor polling-fn))
   task-executor))

(defn start-worker!
  "Starts a single worker thread that periodically polls for tasks and executes them in a
  separate thread. Mostly used for testing purposes."
  ([store]
   (start-worker! store {}))
  ([store & {:keys [protocols polling-ms] :or {protocols {} polling-ms 100}}]
   (let [run?         (atom true)
         task-counter (atom 0)
         uid          (random-uuid)]
     (internal/libthread "Worker"
       #_{:clj-kondo/ignore [:loop-without-recur :invalid-arity]}
       @(p/loop []
          (-> (p/delay polling-ms)
              (p/chain (fn [_]
                         (when-let [task (store/dequeue-task store)]
                           (t/log! {:level :debug :data {:sym (:sym task)}} ["Dequeued task with id" (:id task)])
                           (internal/libthread (str "Worker-" (:id task))
                             (worker-execute-fn store protocols task task-counter (fn [] (not @run?)))))

                         (when @run?
                           (p/recur)))))))
     (fn []
       (t/log! {:level :info} ["Stopping worker"])
       (reset! run? false)))))

(defn enqueue-and-wait
  "Adds the task to the internal queue, awaits for its execution.
  Task might be fulfilled by other threads"
  [{:keys [store] :as opts} task]
  (t/log! {:level :debug :data {:sym (:sym task)}} ["Enqueuing task with id" (:id task)])
  (internal/enqueue-and-wait opts task))

(defn add-compensation
  "Adds a compensation action to the current workflow."
  [thunk]
  (assert (ifn? thunk) "Compensation action should implement IFn")
  (swap! (:compensations internal/*env*) conj thunk))

(defn compensate
  "Runs compensation in program order. A failure of the compensation action will stop running other compensations."
  []
  (let [thunks (-> internal/*env* :compensations)]
    (trace! {:name "compensations" :attributes {:fn-count (count @thunks)}}
      (doseq [f @thunks]
        (swap! thunks pop)
        (f)))))
