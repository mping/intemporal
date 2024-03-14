(ns intemporal.workflow
  (:require [intemporal.store :as store]
            [intemporal.workflow.internal :as internal]
            [promesa.core :as p])
  #?(:cljs (:require-macros
             #_:clj-kondo/ignore
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
   (start-worker! store {}))
  ([store & {:keys [protocols polling-ms] :or {protocols {} polling-ms 100}}]
   ;; env is dynamically binded, we capture it early so we pass it into the callbacks
   (let [run? (atom true)]
     (p/vthread
       (p/loop []
         (-> (p/delay polling-ms)
             (p/chain (fn [_]
                        (when-let [{:keys [type id root] :as task} (store/dequeue-task store)]
                          (let [internal-env {:store  store
                                              :type   type
                                              :ref    id
                                              :root   (or root id)
                                              :protos protocols}]
                            ;; run in a new thread to avoid deadlocks
                            ;; also, exceptions will not bubble
                            (p/vthread
                              (with-env internal-env
                                (-> (internal/resume-task internal-env store protocols task)
                                    (p/then (fn [_v] #_"TODO: LOG"))
                                    (p/catch (fn [_e] #_"TODO: LOG")))))))
                        (when @run?
                          (p/recur)))))))
     (fn [] (reset! run? false)))))

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
  (let [thunks (-> internal/*env* :compensations)]
    (doseq [f @thunks]
      (swap! thunks pop)
      (f))))