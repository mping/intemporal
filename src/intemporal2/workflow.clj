(ns intemporal2.workflow
  (:require [intemporal2.store :as store]))

(set! *warn-on-reflection* true)

;;;;
;; task definitions

(defrecord WorkflowExecutionTask [type id sym args state result])
(defrecord ActivityExecutionTask [type id sym args state result])

(defn create-workflow-task [sym args]
  (->WorkflowExecutionTask :workflow (random-uuid) sym args :new nil))

(defn create-activity-task [sym args]
  (->ActivityExecutionTask :activity (random-uuid) sym args :new nil))

;;;;
;; runtime

(def ^:dynamic *env* nil)
(def default-env {:polling-interval-ms 1000
                  :timeout-ms          Long/MAX_VALUE})

(defmacro with-env [m & body]
  `(with-bindings {#'*env* (merge default-env ~m)}
     (do ~@body)))

;;;;
;; task execution/replay

(defmulti resume-task
          "Continues a task that has been queued for execution. Replays events if they exist."
          (fn [store task] (:type task)))

(defmethod resume-task :workflow
  [store {:keys [id sym args] :as task}]
  ;; todo: ensure history is saved/replayed
  (let [fn (requiring-resolve sym)]
    (try
      (store/transition-task store id {:type :intemporal.workflow/invoke :sym sym :args args})

      (let [r (apply fn args)]
        (store/transition-task store id {:type :intemporal.workflow/success :sym sym :result r})
        r)

      (catch Exception e
        (store/transition-task store id {:type :intemporal.workflow/failure :sym sym :error e})
        (throw e)))))

(defmethod resume-task :activity
  [store {:keys [id sym args] :as task}]
  (let [fn (requiring-resolve sym)]
    (try
      (store/transition-task store id {:type :intemporal.activity/invoke :sym sym :args args})

      (let [r (apply fn args)]
        (store/transition-task store id {:type :intemporal.activity/success :sym sym :result r})
        r)

      (catch Exception e
        (store/transition-task store id {:type :intemporal.activity/failure :sym sym :error e})
        (throw e)))))

(defmacro virtual-thread [& body]
  `(-> (Thread/ofVirtual)
       (.start (fn [] (do ~@body)))))

;;;;
;; worker

(defn start-worker!
  "Starts a worker thread that polls the store for tasks to be picked up."
  ([store]
   (start-worker! store (constantly false) 500))
  ([store done? poll-ms]
   (virtual-thread
     (loop []
       (when (and (not (Thread/interrupted))
                  (not (done?)))
         (when-let [task (store/dequeue-task store)]
           ;; run the resume in another thread so this dont get blocked
           (virtual-thread
             (with-env {:store store}
               (resume-task store task))))
         (Thread/sleep (long (+ poll-ms (rand-int (int (/ poll-ms 15))))))
         (recur))))))

(defn enqueue-and-wait
  [{:keys [store] :as env} task]
  ;(println ">>> enqueuing" task)
  (store/enqueue-task store task)
  (deref (store/await-task store (:id task) env)))

;;;;
;; userland

(defmacro defn-workflow
  [sym argv & body]
  (let [wname (symbol (str sym "-"))]
    ;; capture bindings to propagate it correctly for activities
    `(do
       (defn- ~wname ~argv (do ~@body))
       (defn ~sym ~argv
         ;; workflow should be called within a with-env block:
         ;; (with-env {:store ..}
         ;;   (my-workflow ...
         (enqueue-and-wait *env* (create-workflow-task (symbol #'~wname) ~argv))))))

(defmacro stub-function [f]
  (let [fvar (resolve f)]
    `(fn [& argv#]
       (enqueue-and-wait *env* (create-activity-task (symbol ~fvar) argv#)))))
