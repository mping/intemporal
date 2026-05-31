(ns intemporal.store
  (:require [intemporal.protocol :as p]
            [intemporal.utils :as utils]
            [intemporal.internal.lease :as lease]
            [intemporal.internal.error :as error]))

;; ============================================================================
;; In-Memory Store Implementation
;; ============================================================================

(defrecord InMemoryStore [state]
  p/IStore
  (load-history [_ workflow-id]
    (get-in @state [:workflows workflow-id :history] []))

  (save-event [_ workflow-id event]
    (swap! state
           (fn [s]
             (let [s (update-in s [:workflows workflow-id :history] (fnil conj []) event)]
               (case (:event-type event)
                 :workflow-completed (assoc-in s [:workflows workflow-id :status] :completed)
                 :workflow-failed    (assoc-in s [:workflows workflow-id :status] :failed)
                 s))))
    event)

  (save-events [_ workflow-id events]
    (when (seq events)
      ;; Phase C: when running under a worker lease, refuse to write if this
      ;; owner no longer holds a valid lease (another worker took over / expired).
      (when-let [owner lease/*owner*]
        (let [s   @state
              cur (get-in s [:workflows workflow-id :owner])
              lu  (get-in s [:workflows workflow-id :lease-until] 0)]
          (when (or (not= cur owner) (< lu (utils/current-time-ms)))
            (throw (error/lease-lost-exception workflow-id owner)))))
      (swap! state
             (fn [s]
               (let [s    (update-in s [:workflows workflow-id :history] (fnil into []) events)
                     ;; Phase B2: cache terminal status for O(1) reads.
                     term (some #(case (:event-type %)
                                   :workflow-completed :completed
                                   :workflow-failed    :failed
                                   nil)
                                events)]
                 (if term
                   (assoc-in s [:workflows workflow-id :status] term)
                   s)))))
    events)

  (find-event [this worfklow-id event-type seq-num]
    (let [history (p/load-history this worfklow-id)]
      (->> history
           (filter #(and (= (:event-type %) event-type)
                         (= (:seq %) seq-num)))
           first)))

  (get-pending-signals [_ workflow-id]
    (get-in @state [:workflows workflow-id :signals] {}))

  (add-signal [this workflow-id signal-name signal-data]
    (swap! state update-in [:workflows workflow-id :signals signal-name]
           (fnil conj []) signal-data)
    ;; Phase C: durable wake marker so a worker (possibly another pod) resumes it.
    (p/add-runnable this workflow-id :signal)
    ;; Check if there's a callback registered for this signal (single-process path)
    (when-let [callback (get-in @state [:workflows workflow-id :signal-callbacks signal-name])]
      ;; Invoke callback asynchronously
      #?(:clj (future (callback))
         :cljs (js/setTimeout callback 0)))
    signal-data)

  (consume-signal [_ workflow-id signal-name]
    (let [result (atom nil)]
      (swap! state
             (fn [s]
               (let [signals (get-in s [:workflows workflow-id :signals signal-name])]
                 (if (seq signals)
                   (do
                     (reset! result (first signals))
                     (update-in s [:workflows workflow-id :signals signal-name]
                                (comp vec rest)))
                   s))))
      @result))

  (register-signal-callback [_ workflow-id signal-name callback]
    (swap! state assoc-in [:workflows workflow-id :signal-callbacks signal-name] callback))

  (unregister-signal-callback [_ workflow-id signal-name]
    (swap! state update-in [:workflows workflow-id :signal-callbacks] dissoc signal-name))

  (register-wake-callback [_ workflow-id callback]
    (swap! state assoc-in [:workflows workflow-id :wake-callback] callback))

  (wake-workflow [_ workflow-id]
    (when-let [callback (get-in @state [:workflows workflow-id :wake-callback])]
      #?(:clj (future (callback))
         :cljs (js/setTimeout callback 0))))

  (is-cancelled? [_ workflow-id]
    (get-in @state [:workflows workflow-id :cancelled] false))

  (mark-cancelled [this workflow-id]
    (swap! state assoc-in [:workflows workflow-id :cancelled] true)
    ;; Phase C: wake a sleeper via a durable marker too (worker path).
    (p/add-runnable this workflow-id :cancel))

  (get-workflow-status [_ workflow-id]
    (let [wf (get-in @state [:workflows workflow-id])]
      (cond
        (:cancelled wf) :cancelled
        (#{:completed :failed} (:status wf)) (:status wf)   ; Phase B2 O(1) fast path
        (empty? (:history wf)) :not-found
        :else (let [last-event (last (:history wf))]
                (case (:event-type last-event)
                  :workflow-completed :completed
                  :workflow-failed :failed
                  :running)))))

  ;; --- Phase C: lease / ownership ---
  (claim-workflow [_ workflow-id owner-id lease-ms]
    (let [ok (atom false)]
      (swap! state
             (fn [s]
               (let [cur (get-in s [:workflows workflow-id :owner])
                     lu  (get-in s [:workflows workflow-id :lease-until] 0)
                     now (utils/current-time-ms)]
                 (if (or (nil? cur) (= cur owner-id) (< lu now))
                   (do (reset! ok true)
                       (-> s
                           (assoc-in [:workflows workflow-id :owner] owner-id)
                           (assoc-in [:workflows workflow-id :lease-until] (+ now lease-ms))))
                   s))))
      @ok))

  (renew-lease [_ workflow-id owner-id lease-ms]
    (let [ok (atom false)]
      (swap! state
             (fn [s]
               (if (= owner-id (get-in s [:workflows workflow-id :owner]))
                 (do (reset! ok true)
                     (assoc-in s [:workflows workflow-id :lease-until]
                               (+ (utils/current-time-ms) lease-ms)))
                 s)))
      @ok))

  (release-lease [_ workflow-id owner-id]
    (swap! state
           (fn [s]
             (if (= owner-id (get-in s [:workflows workflow-id :owner]))
               (update-in s [:workflows workflow-id] dissoc :owner :lease-until)
               s)))
    nil)

  ;; --- Phase C: runnable markers ---
  (add-runnable [_ workflow-id reason]
    (swap! state update-in [:runnable workflow-id]
           (fn [m] (assoc (or m {}) :reason reason
                          :enqueued-at (utils/current-time-ms)
                          :claimed-until (get m :claimed-until 0))))
    nil)

  (claim-runnable [_ _owner-id batch-size claim-ms]
    (let [claimed (atom [])]
      (swap! state
             (fn [s]
               (let [now (utils/current-time-ms)
                     due (->> (:runnable s)
                              (filter (fn [[_ m]] (< (:claimed-until m 0) now)))
                              (map first)
                              (take batch-size)
                              vec)]
                 (reset! claimed due)
                 (reduce (fn [s wid]
                           (assoc-in s [:runnable wid :claimed-until] (+ now claim-ms)))
                         s due))))
      @claimed))

  (delete-runnable [_ workflow-id]
    (swap! state update :runnable dissoc workflow-id)
    nil))
