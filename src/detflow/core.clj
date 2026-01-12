(ns detflow.core
  (:import [clojure.lang ExceptionInfo]))

;; =========================================================
;; 1. SUSPENSION
;; =========================================================

(def ^:private suspend-type ::suspend)

(defn suspend! [id]
  (throw (ex-info "Workflow Suspended"
                  {:type suspend-type :wait-id id})))

(defn suspend? [e]
  (and (instance? ExceptionInfo e)
       (= (:type (ex-data e)) suspend-type)))

;; =========================================================
;; 2. RUNTIME CONTEXT
;; =========================================================

(def ^:dynamic *ctx* nil)

(defn ctx []
  (or *ctx*
      (throw (ex-info "No active workflow context" {}))))

(defn next-id! []
  (swap! (:id-counter (ctx)) inc))

(defn record-event! [evt]
  (swap! (:events-out (ctx)) conj evt))

(defn peek-history []
  (get (:history (ctx)) @(:cursor (ctx))))

(defn consume-history! []
  (swap! (:cursor (ctx)) inc))

;; =========================================================
;; 3. UNIFIED EFFECT ABSTRACTION
;; =========================================================
;; This is the heart of determinism.
;; Every effect:
;;   1. Schedules exactly once
;;   2. Awaits exactly one matching completion
;;   3. Consumes exactly the events it observes

(defn effect!
  [{:keys [schedule complete-type result-xform]}]

  ;; ---- SCHEDULE PHASE (never suspends) ----
  (let [evt (peek-history)
        id  (if (and evt (= (:type evt) (:type schedule)))
              (:id evt)
              (let [id (next-id!)]
                (record-event! (assoc schedule :id id))
                id))]

    ;; consume schedule if replaying
    (when (and evt (= (:type evt) (:type schedule)))
      (consume-history!))

    ;; ---- AWAIT PHASE (may suspend) ----
    (let [evt2 (peek-history)]
      (if (and evt2
               (= (:type evt2) complete-type)
               (= (:id evt2) id))
        (do
          (consume-history!)
          ((or result-xform identity) (:result evt2)))
        (suspend! id)))))

;; =========================================================
;; 4. WORKFLOW API
;; =========================================================

(defn activity [name args]
  (effect!
   {:schedule      {:type :activity-scheduled
                    :name name
                    :args args}
    :complete-type :activity-completed
    :result-xform  :value}))

(defn sleep [ms]
  (effect!
   {:schedule      {:type :timer-scheduled
                    :duration ms}
    :complete-type :timer-fired
    :result-xform  :value}))

;; =========================================================
;; 5. ASYNC
;; =========================================================

(defrecord AsyncHandle [id])

(defn async [f]
  (let [evt (peek-history)]
    (if (and evt (= (:type evt) :async-started))
      ;; replay
      (do
        (consume-history!)
        (swap! (:tasks (ctx)) assoc (:id evt) f)
        (->AsyncHandle (:id evt)))

      ;; first execution
      (let [id (next-id!)]
        (record-event! {:type :async-started :id id})
        (swap! (:tasks (ctx)) assoc id f)
        ;; 🔑 IMPORTANT: block parent until replay aligns
        (suspend! id)))))


(defn await [^AsyncHandle handle]
  (let [evt (peek-history)]
    (if (and evt
             (= (:type evt) :async-completed)
             (= (:id evt) (:id handle)))
      (do
        (consume-history!)
        (:result evt))
      (suspend! (:id handle)))))

;; =========================================================
;; 6. ACTIVITY REGISTRY
;; =========================================================

(defonce activity-registry (atom {}))

(defmacro defactivity [aname args & body]
  `(swap! activity-registry
          assoc ~(keyword (str *ns*) (name aname))
          (fn ~args ~@body)))

(defmacro defworkflow [name args & body]
  `(defn ~name ~args ~@body))

;; =========================================================
;; 7. HISTORY STORE
;; =========================================================

(defprotocol IHistoryStore
  (append-event [this wf-id evt])
  (get-history [this wf-id]))

(defrecord InMemoryStore [store]
  IHistoryStore
  (append-event [_ id evt]
    (swap! store update id (fnil conj []) evt))
  (get-history [_ id]
    (get @store id [])))

;; =========================================================
;; 8. ACTIVITY EXECUTOR
;; =========================================================

(defprotocol IActivityExecutor
  (execute-activity [this name args]))

;; =========================================================
;; 9. INTERPRETER
;; =========================================================

(defn run-interpreter-pass [workflow runtime]
  (binding [*ctx* runtime]

    ;; register main task
    (when (empty? @(:tasks runtime))
      (swap! (:tasks runtime) assoc 0 workflow))

    (loop []
      (let [progress? (atom false)
            initial-task-count (count @(:tasks runtime))]

        (doseq [[tid task] @(:tasks runtime)]
          (when-not (contains? @(:results runtime) tid)
            (try
              (let [res (task)]
                (swap! (:results runtime) assoc tid res)
                (record-event! {:type :async-completed
                                :id tid
                                :result res})
                (reset! progress? true))
              (catch Exception e
                (when-not (suspend? e)
                  (throw e))))))

        (let [new-task-count (count @(:tasks runtime))]
          (cond
            (> new-task-count initial-task-count)
            (recur)

            @progress?
            (recur)

            (contains? @(:results runtime) 0)
            {:status :completed
             :result (get @(:results runtime) 0)}

            :else
            {:status :blocked}))))))

;; =========================================================
;; 10. SIDE EFFECT PROCESSING
;; =========================================================

(defn process-side-effects [executor events]
  (keep
   (fn [evt]
     (println "> processing side effect" evt)
     (case (:type evt)
       :activity-scheduled
       {:type :activity-completed
        :id   (:id evt)
        :result {:value
                 (execute-activity executor
                                   (:name evt)
                                   (:args evt))}}

       :timer-scheduled
       {:type :timer-fired
        :id   (:id evt)
        :result {:value :time-up}}

       nil))
   events))

;; =========================================================
;; 11. ENGINE
;; =========================================================

(defn start-workflow
  [{:keys [store executor]}
   {:keys [workflow args id]}]

  (when (empty? (get-history store id))
    (append-event store id {:type :workflow-start :args args}))

  (loop []
    (println "xxx workflow loop")
    (let [history (get-history store id)
          start-idx (if (= (:type (first history)) :workflow-start) 1 0)
          max-id (reduce #(max %1 (:id %2 0)) 0 history)

          runtime {:history    history
                   :cursor     (atom start-idx)
                   :events-out (atom [])
                   :id-counter (atom (inc max-id))
                   :tasks      (atom {})
                   :results    (atom {})}

          result (run-interpreter-pass #(apply workflow args) runtime)

          new-events @(:events-out runtime)
          commands   (filterv #(#{:activity-scheduled
                                  :timer-scheduled}
                                (:type %))
                             new-events)
          completions (doall (process-side-effects executor commands))]

      (doseq [e new-events]
        (println "TRACE new event" e)
        (append-event store id e))
      (doseq [e completions]
        (println "TRACE new completion event" e)
        (append-event store id e))

      (cond
        (= (:status result) :completed)
        (:result result)

        (or (seq new-events) (seq completions))
        (recur)

        :else
        (do
          (throw (ex-info "Deadlock"
                          {:history history})))))))

;; =========================================================
;; 12. EXAMPLE
;; =========================================================

(defactivity fetch-order [id]
  (println ">> Fetch order" id)
  {:id id :price 100})

(defactivity charge-card [amount]
  (println ">> Charge card" amount)
  :paid)

(defworkflow my-flow [id]
  (println "Workflow start")
  (let [order (activity :detflow.core/fetch-order [id])]
        ;task  (async #(activity :detflow.core/charge-card [(:price order)]))]
    ;(await task)
    {:status :shipped
     :order order}))

(defn -main []
  (let [engine {:store (->InMemoryStore (atom {}))
                :executor (reify IActivityExecutor
                            (execute-activity [_ n args]
                              (let [act (get @activity-registry n)]
                                (apply act args))))}]
    (println "RESULT:"
             (start-workflow engine
                             {:workflow my-flow
                              :id "wf-1"
                              :args [123]}))))

(comment)
(-main)
