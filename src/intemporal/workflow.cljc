(ns intemporal.workflow
  (:require [intemporal.store :as store]
            [intemporal.workflow.internal :as internal]
            [promesa.core :as promesa])
  #?(:cljs (:require-macros
             #_ :clj-kondo/ignore
             [intemporal.workflow.internal :refer [with-env-internal]]
             [intemporal.workflow :refer [with-env]])))

#?(:clj (set! *warn-on-reflection* true))

;;;;
;; runtime

(defmacro with-env [m & body]
  `(internal/with-env-internal ~m ~@body))

(defn current-env []
  internal/*env*)

;;;;
;; worker

(defn start-worker!
  "Starts a worker thread."
  ([store]
   (start-worker! store (constantly false)))
  ([store worker-protos]
   (promesa/vthread
     (let [task-ready? #(= :new (:state %))
           env internal/*env*]
       (store/watch-tasks store
                          task-ready?
                          (fn [_]
                            ;; the store should handle dequeing atomically
                            ;; todo: dequeue with lease
                            (when-let [{:keys [type id] :as task} (store/dequeue-task store)]
                              (let [{last-root :root protos :protos} env
                                    internal-env {:store store
                                                  :type  type
                                                  :ref   id
                                                  :root  (or last-root id)
                                                  :protos (or protos worker-protos)}]
                                ;; run in a new thread to avoid deadlocks
                                (promesa/vthread
                                  (with-env internal-env
                                    (internal/resume-task internal-env store worker-protos task)))))))))))

(defn enqueue-and-wait
  [{:keys [store] :as opts} task]
  (internal/enqueue-and-wait opts task))

(defn add-compensation
  "Adds a compensation action to the current workflow."
  [thunk]
  (assert (ifn? thunk) "Compensation action should implement IFn")
  (swap! (:compensations internal/*env*) conj thunk))

(defn compensate
  "Runs compensation in program order. A failure of the compensation action will stop running other compensations."
  []
  (let [thunks (-> internal/*env* :compensations deref)]
    (doseq [f thunks]
      (f))))