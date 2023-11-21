(ns intemporal2.workflow
  (:require [intemporal2.store :as store]))

(set! *warn-on-reflection* true)

(defrecord WorkflowRun [id sym args state result])

(defn make-workflow [sym args]
  (->WorkflowRun (random-uuid) sym args :new nil))

;;;;
;;

(def ^:dynamic *env* nil)
(def default-env {::polling-interval-ms 100})

(defmacro with-env [m & body]
  `(with-bindings {#'*env* (merge default-env ~m)}
     (do ~@body)))


(defn resume-workflow [store {:keys [id sym args] :as workflow}]
  ;; todo: ensure history matches
  (let [fn (requiring-resolve sym)]
    (try
      ;; TODO transactions? join the two stores?
      (store/transition-workflow store id {:sym sym :args args})
      ;(store/save-event store id {:type ::invoke :sym sym :args args})

      (let [r (apply fn args)]
        (store/transition-workflow store id {:sym sym :result r})
        #_#_
        (store/update-workflow store id [:state :success :result r])
        (store/save-event store id {:type ::success :sym sym :result r})
        r)
      (catch Exception e
        (store/transition-workflow store id {:sym sym :error e})
        #_#_
        (store/update-workflow store id [:state :failure :result e])
        (store/save-event store id {:type ::failure :sym sym :result e})
        (throw e)))))

;; start a worker
(defn start-workflow-worker!
  ([store]
   (start-workflow-worker! store (constantly false)))
  ([store done?]
   (-> (Thread/ofVirtual)
       (.start
         (fn []
           (loop []
             (when (and (not (Thread/interrupted))
                        (not (done?)))
               (when-let [w (store/dequeue-workflow store)]
                 (resume-workflow store w))
               (Thread/sleep 500)
               (recur))))))))

(defn enqueue-and-wait [{::keys [workflow-store polling-interval-ms]} sym args]
  (let [w (make-workflow sym args)]
    (store/enqueue-workflow workflow-store w)
    (deref (store/await-workflow workflow-store (:id w)))))

(defmacro defn-workflow [sym argv body]
  (let [wname (symbol (str sym "-"))]
    `(do (defn- ~wname ~argv ~body)
         (defn ~sym ~argv
           ;; workflow should be called within a with-env block:
           ;; (with-env {:store ..}
           ;;   (my-workflow ...
           (enqueue-and-wait *env* (symbol #'~wname) ~argv)))))

