(ns intemporal.store
  (:require [intemporal.protocol :as p]
            [intemporal.utils :as utils]
            [intemporal.internal.logging :as log])
  ;; logging fns (warnf, …) are macros — load them as macros for CLJS too
  #?(:cljs (:require-macros [intemporal.internal.logging :as log])))

(def ^:private terminal-status? #{:completed :failed :cancelled :terminated})

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
                 :workflow-completed  (assoc-in s [:workflows workflow-id :status] :completed)
                 :workflow-failed     (assoc-in s [:workflows workflow-id :status] :failed)
                 :workflow-cancelled  (assoc-in s [:workflows workflow-id :status] :cancelled)
                 :workflow-terminated (assoc-in s [:workflows workflow-id :status] :terminated)
                 s))))
    event)

  (save-events [_ workflow-id events]
    (when (seq events)
      (swap! state
             (fn [s]
               (let [s    (update-in s [:workflows workflow-id :history] (fnil into []) events)
                     ;; Phase B2: cache terminal status for O(1) reads.
                     term (some #(case (:event-type %)
                                   :workflow-completed  :completed
                                   :workflow-failed     :failed
                                   :workflow-cancelled  :cancelled
                                   :workflow-terminated :terminated
                                   nil)
                                events)]
                 (if term
                   (assoc-in s [:workflows workflow-id :status] term)
                   s)))))
    events)

  (find-event [this workflow-id event-type seq-num]
    (let [history (p/load-history this workflow-id)]
      (->> history
           (filter #(and (= (:event-type %) event-type)
                         (= (:seq %) seq-num)))
           first)))

  (get-pending-signals [_ workflow-id]
    (get-in @state [:workflows workflow-id :signals] {}))

  (add-signal [_ workflow-id signal-name signal-data]
    (swap! state update-in [:workflows workflow-id :signals signal-name]
           (fnil conj []) signal-data)
    ;; Atomically remove the callback before firing it so rapid successive signals
    ;; for the same name don't re-fire the same callback multiple times, which
    ;; would consume later signals at the wrong seq-num.
    (let [[old-state] (swap-vals! state update-in [:workflows workflow-id :signal-callbacks] dissoc signal-name)]
      (when-let [callback (get-in old-state [:workflows workflow-id :signal-callbacks signal-name])]
        #?(:clj (future
                  (try (callback)
                       (catch Throwable t
                         (log/warnf t "Signal callback threw for workflow %s signal %s" workflow-id signal-name))))
           :cljs (js/setTimeout (fn []
                                  (try (callback)
                                       (catch js/Error e
                                         (log/warnf e "Signal callback threw for workflow %s signal %s" workflow-id signal-name))))
                                0))))
    signal-data)

  (consume-signal [_ workflow-id signal-name]
    ;; swap-vals! applies the (pure, retry-safe) update atomically and returns
    ;; [old new]; read the consumed signal from `old`. Avoids the previous
    ;; reset!-into-an-external-atom side effect inside the swap fn, which re-fires
    ;; on every CAS retry under contention (deepseek code §5).
    (let [path    [:workflows workflow-id :signals signal-name]
          [old _] (swap-vals! state
                              (fn [s]
                                (if (seq (get-in s path))
                                  (update-in s path (comp vec rest))
                                  s)))]
      (first (get-in old path))))

  (register-signal-callback [_ workflow-id signal-name callback]
    (swap! state assoc-in [:workflows workflow-id :signal-callbacks signal-name] callback))

  (unregister-signal-callback [_ workflow-id signal-name]
    (swap! state update-in [:workflows workflow-id :signal-callbacks] dissoc signal-name))

  (register-wake-callback [_ workflow-id callback]
    (swap! state assoc-in [:workflows workflow-id :wake-callback] callback))

  (wake-workflow [_ workflow-id]
    (when-let [callback (get-in @state [:workflows workflow-id :wake-callback])]
      #?(:clj (future
                (try (callback)
                     (catch Throwable t
                       (log/warnf t "Wake callback threw for workflow %s" workflow-id))))
         :cljs (js/setTimeout (fn []
                                (try (callback)
                                     (catch js/Error e
                                       (log/warnf e "Wake callback threw for workflow %s" workflow-id))))
                              0))))

  (is-cancelled? [_ workflow-id]
    (get-in @state [:workflows workflow-id :cancelled] false))

  (mark-cancelled [_ workflow-id]
    (swap! state assoc-in [:workflows workflow-id :cancelled] true))

  (get-workflow-status [_ workflow-id]
    (let [wf (get-in @state [:workflows workflow-id])]
      (cond
        ;; Check terminal status first: a late mark-cancelled must not override
        ;; a workflow that already completed or failed.
        (terminal-status? (:status wf)) (:status wf)   ; Phase B2 O(1) fast path
        (:cancelled wf) :cancelled
        (empty? (:history wf)) :not-found
        :else (let [last-event (last (:history wf))]
                (case (:event-type last-event)
                  :workflow-completed :completed
                  :workflow-failed :failed
                  :workflow-cancelled :cancelled
                  :workflow-terminated :terminated
                  :running)))))

  ;; --- Phase C: ownership-based recovery ---
  (claim-owner [_ workflow-id owner-id]
    ;; swap-vals! applies the (pure, retry-safe) update atomically and returns
    ;; [old new]; derive the outcome from `old`. A side-effect atom inside the
    ;; swap fn would re-fire on CAS retries: a losing claimant could still see
    ;; its `ok` flag set by an earlier, rolled-back attempt — double ownership
    ;; (same failure mode as consume-signal, deepseek code §5).
    (let [path     [:workflows workflow-id]
          [old _]  (swap-vals! state
                               (fn [s]
                                 (let [wf  (get-in s path)
                                       cur (:owner wf)]
                                   ;; Never claim a terminal workflow (mirrors the JDBC store's
                                   ;; status predicate): a claim racing a finalization must lose.
                                   (if (and (not (terminal-status? (:status wf)))
                                            (or (nil? cur) (= cur owner-id)))
                                     (assoc-in s [:workflows workflow-id :owner] owner-id)
                                     s))))
          wf       (get-in old path)
          cur      (:owner wf)]
      (boolean (and (not (terminal-status? (:status wf)))
                    (or (nil? cur) (= cur owner-id))))))

  ;; A4: cancelled-but-not-finalized workflows MUST stay listed so a worker can
  ;; re-drive them (body observes the cancel flag, saga compensation runs, the
  ;; terminal :workflow-cancelled event is written — which then excludes them).
  (list-pending [_ owner-id limit]
    (let [now (utils/current-time-ms)]
      (->> (:workflows @state)
           (filter (fn [[_ wf]]
                     (and (seq (:history wf))
                          (not (terminal-status? (:status wf)))
                          ;; C2: skip workflows not yet due to wake
                          (let [wa (:wake-at wf)] (or (nil? wa) (<= wa now)))
                          (let [o (:owner wf)] (or (nil? o) (= o owner-id))))))
           ;; Sort by wake-at ascending (nil = always eligible = priority 0)
           ;; so the earliest-due workflows are scheduled first; prevents starvation.
           (sort-by (fn [[_ wf]] (or (:wake-at wf) 0)))
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
    nil)

  ;; --- Tier 2: independent child workflows ---
  (link-child! [_ parent-id parent-seq child-id policy]
    ;; Idempotent: re-linking the same child (parent replay / crash) is a no-op.
    (swap! state update-in [:workflows parent-id :children]
           (fn [children]
             (if (contains? children child-id)
               children
               (assoc children child-id {:parent-seq parent-seq :policy policy}))))
    nil)

  (list-children [this parent-id]
    (->> (get-in @state [:workflows parent-id :children])
         (mapv (fn [[child-id {:keys [parent-seq policy]}]]
                 {:child-id   child-id
                  :parent-seq parent-seq
                  :policy     policy
                  :status     (p/get-workflow-status this child-id)})))))
