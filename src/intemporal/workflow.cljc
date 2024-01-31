(ns intemporal.workflow
  (:require [intemporal.store :as store]
            [intemporal.workflow.internal :as internal]
            [promesa.core :as promesa])
  #?(:cljs (:require-macros [intemporal.workflow :refer [with-env]])))

#?(:clj (set! *warn-on-reflection* true))

;;;;
;; runtime

(def ^:dynamic *env* nil)
(def default-env {:compensations (atom [])
                  :timeout-ms #?(:clj Long/MAX_VALUE
                                 :cljs (.-MAX_SAFE_INTEGER js/Number))})

(defmacro with-env [m & body]
  `(binding [*env* (merge default-env ~m)]
     (do ~@body)))


;;;;
;; worker

(defn start-worker!
  "Starts a worker thread."
  ([store]
   (start-worker! store (constantly false)))
  ([store worker-protos]
   (promesa/vthread
     (let [task-ready? #(= :new (:state %))
           env *env*]
       (store/watch-tasks store
                          task-ready?
                          (fn [_]
                            ;; the store should handle dequeing atomically
                            (when-let [{:keys [type id] :as task} (store/dequeue-task store)]
                              (let [{last-root :root protos :protos} env]
                                ;; run in a new thread to avoid deadlocks
                                (promesa/vthread
                                  (with-env {:store store
                                             :type  type
                                             :ref   id
                                             :root  (or last-root id)
                                             :protos (or protos worker-protos)}
                                    (internal/resume-task store worker-protos task)))))))))))

(defn enqueue-and-wait
  [{:keys [store] :as opts} task]
  (internal/enqueue-and-wait opts task))

(defn add-compensation
  "Adds a compensation action to the current workflow."
  [thunk]
  (assert (ifn? thunk) "Compensation action should implement IFn")
  (swap! (:compensations *env*) conj thunk))

(defn compensate
  "Runs compensation in program order. A failure of the compensation action will stop running other compensations."
  []
  (let [thunks (-> *env* :compensations deref)]
    (doseq [f thunks]
      (f))))