(ns intemporal.store
  (:require [intemporal.protocol :as p]))

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
    ;; Check if there's a callback registered for this signal
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

  (mark-cancelled [_ workflow-id]
    (swap! state assoc-in [:workflows workflow-id :cancelled] true))

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
                  :running))))))
