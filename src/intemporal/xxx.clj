(ns intemporal.xxx
  (:import [clojure.lang IDeref]))

(set! *warn-on-reflection* true)

(defprotocol TaskStore
  (find-workflow [this wid])
  (update-workflow [this wid kvs])
  (enqueue-workflow [this workflow])
  (dequeue-workflow [this]))

(defprotocol HistoryStore
  (save-event [wid event])
  (next-event [wid] [wid last-event-id]))

(defn make-memstore []
  (let [storage (atom {})
        history (atom {})]
    (reify
      IDeref
      (deref [this] {::task-store    (deref storage)
                     ::history-store (deref history)})
      TaskStore
      (find-workflow [this id] (get @storage id))
      (update-workflow [this id kvs] (when-let [w (find-workflow this id)]
                                       (swap! storage assoc id (apply assoc w kvs))))
      (enqueue-workflow [this workflow] (swap! storage assoc (:id workflow) workflow))
      (dequeue-workflow [this]
        (let [first-new (fn [v] (->> (vals v)
                                     (filter #(= :new (:state %)))
                                     (first)))
              found? (atom nil)]
             (swap-vals! storage
               (fn [v]
                 (let [found (first-new v)]
                   (if found
                     (do (->> (assoc found :state :pending)
                              (reset! found?)
                              (assoc v (:id found))))
                     v))))
             @found?)))))

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
  ;; todo: ensure resolve is OK
  ;; todo: ensure history matches
  (let [fn (resolve sym)]
    (assert (symbol? sym) (format "'%s' is not a symbol: (type is %s)" sym (type sym)))
    (assert (var? fn) (format "Symbol '%s' could not be resolved" sym))
    (try
      (update-workflow store id [:state :pending])
      (let [r (apply fn args)]
        (update-workflow store id [:state :success :result r])
        r)
      (catch Exception e
        (update-workflow store id [:state :failure :result e])
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
               (when-let [w (dequeue-workflow store)]
                 (resume-workflow store w))
               (Thread/sleep 500)
               (recur))))))))

(defn enqueue-and-wait [{::keys [task-store polling-interval-ms]} sym args]
  (assert task-store "task-store cannot be nil")
  (assert (satisfies? TaskStore task-store) (format "task-store argument does not satisfy Store: %s" (type task-store)))
  (assert (number? polling-interval-ms) (format "polling interval is invalid:" polling-interval-ms))

  (let [w (make-workflow sym args)]
    (enqueue-workflow task-store w)
    ;; poor man polling
    (loop [curr w]
      (let [{:keys [state result id]} curr]
        (cond
          (nil? curr) (throw (ex-info "Could not find workflow" {:id id}))
          (= :success state) result
          (= :failure state) (throw result)
          :else (do
                  (Thread/sleep (long polling-interval-ms))
                  (recur (-> (find-workflow task-store id)))))))))

(defmacro defn-workflow [sym argv body]
  (let [wname (symbol (str sym "-"))]
    `(do (defn- ~wname ~argv ~body)
         (defn ~sym ~argv
           ;; workflow should be called within a with-env block:
           ;; (with-env {:store ..}
           ;;   (my-workflow ...
           (enqueue-and-wait *env* (symbol #'~wname) ~argv)))))

;;;;
;; demo

(defn-workflow my-workflow [i] (/ 1 i))

(def wstore (make-memstore))

(clojure.pprint/print-table (vals (::task-store @wstore)))

(start-workflow-worker! wstore)

(with-env {::task-store wstore}
  (my-workflow 1))

(clojure.pprint/print-table (vals (::task-store @wstore)))