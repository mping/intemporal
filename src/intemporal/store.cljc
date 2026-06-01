(ns intemporal.store
  (:require [intemporal.protocol :as p]
            [intemporal.utils :as utils]))

(def ^:private terminal-status? #{:completed :failed})

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

  (add-signal [_ workflow-id signal-name signal-data]
    (swap! state update-in [:workflows workflow-id :signals signal-name]
           (fnil conj []) signal-data)
    ;; In-process wake for an embedded (no-worker) engine in THIS process.
    ;; Worker mode picks the workflow up via the ownership scan (list-pending).
    (when-let [callback (get-in @state [:workflows workflow-id :signal-callbacks signal-name])]
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
                  :running)))))

  ;; --- Phase C: ownership-based recovery ---
  (claim-owner [_ workflow-id owner-id]
    (let [ok (atom false)]
      (swap! state
             (fn [s]
               (let [cur (get-in s [:workflows workflow-id :owner])]
                 (if (or (nil? cur) (= cur owner-id))
                   (do (reset! ok true)
                       (assoc-in s [:workflows workflow-id :owner] owner-id))
                   s))))
      @ok))

  (list-pending [_ owner-id limit]
    (let [now (utils/current-time-ms)]
      (->> (:workflows @state)
           (filter (fn [[_ wf]]
                     (and (seq (:history wf))
                          (not (terminal-status? (:status wf)))
                          ;; C2: skip workflows not yet due to wake
                          (let [wa (:wake-at wf)] (or (nil? wa) (<= wa now)))
                          (let [o (:owner wf)] (or (nil? o) (= o owner-id))))))
           (map first)
           (take limit)
           vec)))

  (release-owner [_ owner-id]
    (swap! state
           (fn [s]
             (reduce (fn [s [wid wf]]
                       (if (and (= owner-id (:owner wf))
                                (not (terminal-status? (:status wf))))
                         (update-in s [:workflows wid] dissoc :owner)
                         s))
                     s
                     (:workflows s))))
    nil)

  (set-wake-at [_ workflow-id wake-at-ms]
    (swap! state assoc-in [:workflows workflow-id :wake-at] wake-at-ms)
    nil))
