(ns intemporal2.workflow
  (:require [intemporal2.store :as store])
  (:import [java.util.concurrent ThreadFactory]))

(set! *warn-on-reflection* true)

;;;;
;; task definitions

(defn random-id []
  ;; TODO use (random-uuid), really
  (apply str (take 10 (repeatedly #(char (+ (rand 26) 65))))))

(defrecord WorkflowExecutionTask [type id ref sym args state result])
(defrecord ActivityExecutionTask [type id ref sym args state result])

(defn create-workflow-task [ref sym args]
  (->WorkflowExecutionTask :workflow (random-id) ref sym args :new nil))

(defn create-activity-task [ref sym args]
  (->ActivityExecutionTask :activity (random-id) ref sym args :new nil))

;;;;
;; runtime

(def ^:dynamic *env* nil)
(def default-env {:timeout-ms Long/MAX_VALUE})

(def ^ThreadFactory threadfactory (-> (Thread/ofVirtual)
                                      (.name "intemporal-vthread-", 0)
                                      (.factory)))

(defmacro virtual-thread [& body]
  `(-> threadfactory
       (.newThread (fn [] (do ~@body)))
       (.start)))

(defmacro with-env [m & body]
  `(with-bindings {#'*env* (merge default-env ~m)}
     (do ~@body)))

;;;;
;; task execution/replay

(ns-unmap *ns* 'resume-task)
(defmulti resume-task
          "Continues a task that has been queued for execution. Replays events if they exist."
          (fn [store ctx task]
            (:type task)))

(defmethod resume-task :workflow
  [store {:keys [ref root] :as ctx} {:keys [id sym args] :as task}]
  ;; todo: ensure history is saved/replayed
  (let [fn (requiring-resolve sym)]
    (try
      (store/transition-task store id {:ref ref :root root :type :intemporal.workflow/invoke :sym sym :args args})

      (let [r (apply fn args)]
        (store/transition-task store id {:ref ref :root root  :type :intemporal.workflow/success :sym sym :result r})
        r)

      (catch Exception e
        (store/transition-task store id {:ref ref :root root  :type :intemporal.workflow/failure :sym sym :error e})
        (throw e)))))

(defmethod resume-task :activity
  [store {:keys [ref root]} {:keys [id sym args] :as task}]
  ;; todo: ensure history is saved/replayed
  (let [fn (requiring-resolve sym)]
    (try
      (store/transition-task store id {:ref ref :root root :type :intemporal.activity/invoke :sym sym :args args})

      (let [r (apply fn args)]
        (store/transition-task store id {:ref ref :root root  :type :intemporal.activity/success :sym sym :result r})
        r)

      (catch Exception e
        (store/transition-task store id {:ref ref :root root :type :intemporal.activity/failure :sym sym :error e})
        (throw e)))))

;;;;
;; worker

(defn start-worker!
  "Starts a worker thread."
  ([store]
   (start-worker! store (constantly false)))
  ([store done?]
   (virtual-thread
     (let [task-ready? #(= :new (:state %))]
       ;; TODO check done?
       (store/watch-tasks store
                          task-ready?
                          (fn [_]
                            ;; should be the store to handle dequeing
                            (when-let [{:keys [type id] :as task} (store/dequeue-task store)]
                              (let [{last-root :root} *env*]
                                (virtual-thread
                                  (with-env {:store store
                                             :type  type
                                             :ref id
                                             :root (or last-root id)}
                                    (resume-task store {:type type :ref id :root (or last-root id)} task)))))))))))

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
         (enqueue-and-wait *env* (create-workflow-task (get *env* :ref) (symbol #'~wname) ~argv))))))

(defmacro stub-function [f]
  (let [fvar (resolve f)]
    `(fn [& argv#]
       (enqueue-and-wait *env* (create-activity-task (get *env* :ref) (symbol ~fvar) argv#)))))
