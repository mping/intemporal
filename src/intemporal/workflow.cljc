(ns intemporal.workflow
  (:require [intemporal.store :as store]
            [intemporal.workflow.internal :as internal]
            [promesa.core :as p]
            [taoensso.telemere :as t])
  #?(:cljs (:require-macros
             #_:clj-kondo/ignore
             [intemporal.workflow.internal :refer [with-env-internal]]
             [intemporal.workflow :refer [with-env]]))
  #?(:clj (:import [java.util.concurrent ExecutorService Executors TimeUnit])))

#?(:clj (set! *warn-on-reflection* true))

;;;;
;; runtime

(defmacro with-env
  "Creates a new environment for workflow execution. Options:
  - :task-per-activity?
  - :timeout-ms "
  [m & body]
  `(internal/with-env-internal ~m ~@body))

(defn current-env []
  internal/*env*)

;;;;
;; worker
(defprotocol ITaskExecutor
  (submit [this f] "Submits the function `f` for execution")
  (shutdown [this grace-period-ms] "Shuts down the task executor")
  (running? [this] "Indicates if the executor is running"))

;; make sure that any given executor service can implement ITaskExecutor
#?(:clj (extend-type ExecutorService
          ITaskExecutor
          (submit [executor f]
            (.submit ^ExecutorService executor ^Runnable f))
          (shutdown [executor grace-period-ms]
            (.shutdown ^ExecutorService executor)
            (when-not (.awaitTermination ^ExecutorService executor grace-period-ms TimeUnit/MILLISECONDS)
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
         (shutdown [_ grace-period-ms] (reset! run? false))
         (running? [_] @run?))
       :clj
       (Executors/newVirtualThreadPerTaskExecutor))))

(defn- worker-execute-fn
  "Executes a given protocol, activity or workflow `task`"
  [store protocols {:keys [type id root] :as task}]
  ;; TODO: env: read env from task?
  (println "XXX" (:runtime task))
  (let [root-counter (atom 0)
        runtime      (:runtime task)
        base-env     {:store   store
                      :type    type
                      :ref     id
                      :id      id
                      :root    (or root id)
                      :protos  protocols
                      :next-id (fn [] (str (or root id) "-" (swap! root-counter inc)))}
        internal-env (merge runtime base-env)]
    ;; root task: we only enqueue workflows
    (with-env internal-env
      (t/log! {:level :trace :_data {:task task :env internal-env}} ["Resuming workflow task with id" (:id task)])
      (try
        (internal/resume-task internal-env store protocols task)
        (finally
          (t/log! {:level :trace} ["Workflow task resumed"]))))))

(defn- worker-poll-fn
  "Continously polls for task while `task-executor` is active."
  [store protocols task-executor polling-ms]
  (p/loop []
    (-> (p/delay polling-ms)
        (p/chain (fn [_]
                   (loop []
                     (when-let [task (store/dequeue-task store)]
                       (t/log! {:level :debug :_data {:task task}} ["Dequeued task with id" (:id task)])
                       (submit task-executor (fn [] (worker-execute-fn store protocols task)))
                       (recur)))
                   (when (running? task-executor)
                     (p/recur)))))))

(defn poll+submit!
  "Starts a poller that will submit tasks to the `task-executor`.
  For clj runtimes, task-executor should be `(Executors/newVirtualThreadPerTaskExecutor)`, as
  each execution will be blocked while they await for a given task dependencie's execution."
  ([store {:keys [protocols polling-ms] :or {protocols {} polling-ms 100} :as opts}]
   (poll+submit! store (make-task-executor) opts))
  ([store task-executor & {:keys [protocols polling-ms] :or {protocols {} polling-ms 100}}]
   (let [polling-fn (fn [] (worker-poll-fn store protocols task-executor polling-ms))]
     (submit task-executor polling-fn))
   task-executor))

(defn start-worker!
  "Starts a single worker thread that periodically polls for tasks and executes them in a
  separate thread. Mostly used for testing purposes."
  ([store]
   (start-worker! store {}))
  ([store & {:keys [protocols polling-ms] :or {protocols {} polling-ms 100}}]
   ;; env is dynamically binded, we capture it early so we pass it into the callbacks
   (let [run? (atom true)]
     (p/vthread
       (p/loop []
         (-> (p/delay polling-ms)
             (p/chain (fn [_]
                        (when-let [task (store/dequeue-task store)]
                          (t/log! {:level :debug :_data {:task task}} ["Dequeued task with id" (:id task)])
                          (p/vthread
                            (worker-execute-fn store protocols task)))
                        (when @run?
                          (p/recur)))))))
     (fn [] (reset! run? false)))))

(defn enqueue-and-wait
  [{:keys [store] :as opts} task]
  (t/log! :debug ["Enqueuing task with id" (:id task)])
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
    (doseq [f @thunks]
      (swap! thunks pop)
      (f))))