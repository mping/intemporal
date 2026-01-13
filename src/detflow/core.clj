(ns detflow.core
  (:import [clojure.lang ExceptionInfo]))

;; =========================================================
;; 1. SUSPENSION
;; =========================================================

(def ^:private suspend-type ::suspend)

(defn suspend! [id]
  (println "XXX =-======= suspending ======")
  (throw (ex-info "Workflow Suspended"
                  {:type suspend-type :wait-id id})))

(defn suspend? [e]
  (and (instance? ExceptionInfo e)
       (= (:type (ex-data e)) suspend-type)))

;; =========================================================
;; 2. RUNTIME CONTEXT
;; =========================================================

(def ^:dynamic *ctx* nil)

(defn ctx [] *ctx*)

(defn next-id! []
  (swap! (:id-counter (ctx)) inc))

(defn peek-history []
  (get (:history (ctx)) @(:cursor (ctx))))

(defn consume-history! []
  (swap! (:cursor (ctx)) inc))

(defn record! [evt]
  (swap! (:events-out (ctx)) conj evt))

;; =========================================================
;; 3. UNIFIED EFFECT ABSTRACTION
;; =========================================================
;; This is the heart of determinism.
;; Every effect:
;;   1. Schedules exactly once
;;   2. Awaits exactly one matching completion
;;   3. Consumes exactly the events it observes

(defn effect!
  [{:keys [schedule-type schedule-body complete-type result-xform]}]

  ;; scheduling (never suspends)
  (let [evt (peek-history)
        id  (if (= (:type evt) schedule-type)
              (:id evt)
              (let [id (next-id!)]
                (record! (assoc schedule-body
                           :type schedule-type
                           :id id))
                id))]

    (when (= (:type evt) schedule-type)
      (consume-history!))

    ;; awaiting (may suspend)
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
    {:schedule-type :activity-scheduled
     :schedule-body {:name name :args args}
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
(defrecord TaskHandle [id])

(defn fork [f]
  (let [evt (peek-history)]
    (if (= (:type evt) :task-forked)
      (do
        (consume-history!)
        (->TaskHandle (:id evt)))
      (let [id (next-id!)]
        (record! {:type :task-forked :id id})
        (swap! (:tasks (ctx)) assoc id f)
        (->TaskHandle id)))))

(defn join [^TaskHandle h]
  (let [evt (peek-history)]
    (if (and evt
             (= (:type evt) :task-completed)
             (= (:id evt) (:id h)))
      (do
        (consume-history!)
        (:result evt))
      (suspend! (:id h)))))

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

(defn run-pass [workflow runtime]
  (binding [*ctx* runtime]

    ;; register main task once
    (when-not (contains? @(:tasks runtime) 0)
      (swap! (:tasks runtime) assoc 0 workflow))

    (loop []
      (println "YYY run pass")
      (clojure.pprint/pprint (ctx))
      (let [progress? (atom false)]

        (doseq [[tid task] @(:tasks runtime)]
          (when-not (contains? @(:results runtime) tid)
            (try
              (let [res (task)] ;; (task) may suspend execution!
                (swap! (:results runtime) assoc tid res)
                (record! {:type :task-completed
                          :id tid
                          :result res})
                (reset! progress? true))
              (catch Exception e
                (when-not (suspend? e)
                  (throw e))))))

        (cond
          @progress? (recur)
          (contains? @(:results runtime) 0)
          {:status :done :result (get @(:results runtime) 0)}
          :else
          {:status :blocked})))))

;; =========================================================
;; 10. SIDE EFFECT PROCESSING
;; =========================================================

(defn process-activity
  "Executes a scheduled activity and returns a completion event.
   Pure function from schedule-event → completion-event."
  [executor {:keys [id name args]}]
  [{:type   :activity-completed
    :id     id
    :result {:value (execute-activity executor name args)}}])

;; =========================================================
;; 11. ENGINE
;; =========================================================

(defn start-workflow [store executor workflow args id]
  (when (empty? (get-history store id))
    (append-event store id {:type :workflow-start :args args}))

  (let [history (atom (get-history store id))
        start-idx (if (= (:type (first @history)) :workflow-start) 1 0)
        max-id (reduce #(max %1 (:id %2 0)) 0 @history)

        runtime {:history    history
                 :cursor     (atom start-idx)
                 :events-out (atom [])
                 :id-counter (atom (inc max-id))
                 :tasks      (atom {})
                 :results    (atom {})}]

    (loop []
      (println "XXX run wf")
      (reset! (:history runtime) (get-history store id))
      (reset! (:cursor runtime) start-idx)
      (reset! (:events-out runtime) [])

      (let [res (run-pass #(apply workflow args) runtime)
            evts @(:events-out runtime)
            cmds (filterv #(= (:type %) :activity-scheduled) evts)
            done (doall (mapcat #(process-activity executor %) cmds))]

        (doseq [e (concat evts done)]
          (append-event store id e))

        (cond
          (= (:status res) :done) (:result res)
          (or (seq evts) (seq done)) (recur)
          :else (throw (ex-info "Deadlock" {:history @history})))))))

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
  (let [
        ;order (activity :detflow.core.cljc/fetch-order [id])
        order {:price 1}
        act   (activity :detflow.core/charge-card [(:price order)])
        task  (fork (fn call-activity [] act))
        tres  (join task)]

    {:status :shipped
     :task  tres
     :order order}))

(defn -main []
  (println "RESULT:"
           (start-workflow (->InMemoryStore (atom {}))
                           (reify IActivityExecutor
                             (execute-activity [_ actname args]
                               (let [act (get @activity-registry actname)]
                                 (apply act args))))
                           my-flow
                           [123]
                           "my-flow")))

(comment)
(-main)
