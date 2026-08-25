(ns intemporal.store.cache
  "Opt-in, history-only cache for the FSM store boundary.

  The cache deliberately never caches workflow state, inboxes, cancellation, or
  ownership.  `load-snapshot` reads current state first and uses a cached
  history only when its :history-revision agrees with that live state.  This
  keeps cross-process writers correct without invalidation messages."
  (:require
   [intemporal.internal.domain :as domain]
   [intemporal.protocol :as p]))

(defn- cache-entry
  [cache workflow-id]
  (get-in @cache [:entries workflow-id]))

(defn- trim-order
  [order max-workflows]
  (vec (take-last max-workflows order)))

(defn- remember!
  [cache max-workflows workflow-id history-revision history]
  (swap! cache
         (fn [{:keys [entries order]}]
           (let [order   (->> order (remove #(= workflow-id %)) vec)
                 order   (trim-order (conj order workflow-id) max-workflows)
                 entries (assoc entries workflow-id
                                {:history-revision history-revision
                                 :history (vec history)})
                 entries (select-keys entries order)]
             {:entries entries :order order}))))

(defn- invalidate!
  [cache workflow-id]
  (swap! cache
         (fn [{:keys [entries order]}]
           {:entries (dissoc entries workflow-id)
            :order (vec (remove #(= workflow-id %) order))})))

(defn- merge-first-wins
  [history events]
  (let [seen (into #{} (map domain/event-identity) history)]
    (second
      (reduce (fn [[seen accepted] event]
                (let [identity (domain/event-identity event)]
                  (if (contains? seen identity)
                    [seen accepted]
                    [(conj seen identity) (conj accepted event)])))
              [seen (vec history)]
              events))))

(defn- transition-workflow-ids
  [{:keys [workflow-id create-workflows parent-notification close-actions]}]
  (into #{workflow-id}
        (concat (map :workflow-id create-workflows)
                (when parent-notification [(:workflow-id parent-notification)])
                (map :workflow-id close-actions))))

(defn- update-root-history!
  [cache max-workflows transition result]
  (let [{:keys [workflow-id events kind]} transition
        {:keys [state]} result
        prior (cache-entry cache workflow-id)]
    (cond
      (not= :committed (:commit-status result))
      nil

      ;; A terminal cache entry provides no useful continuation and retaining it
      ;; makes cache lifetime depend on a user polling the terminal result.
      (= :terminal kind)
      (invalidate! cache workflow-id)

      (and prior state (seq events)
           (= (inc (:history-revision prior)) (:history-revision state)))
      (remember! cache max-workflows workflow-id (:history-revision state)
                 (merge-first-wins (:history prior) events))

      ;; We cannot prove the old entry reflects the exact prior revision (e.g.
      ;; a concurrent process committed first), so correctness wins over a hit.
      :else
      (invalidate! cache workflow-id))))

(defrecord CachedStore [inner cache max-workflows]
  p/IEngineStore
  (load-history [_ workflow-id] (p/load-history inner workflow-id))
  (get-workflow-status [_ workflow-id] (p/get-workflow-status inner workflow-id))
  (claim-runnable! [_ owner-id limit now-ms]
    (p/claim-runnable! inner owner-id limit now-ms))
  (requeue-running! [_ workflow-id owner-id]
    (p/requeue-running! inner workflow-id owner-id))
  (recover-running! [_ owner-id] (p/recover-running! inner owner-id))

  p/IFsmStore
  (create-workflow! [_ creation]
    (let [result (p/create-workflow! inner creation)]
      (when (= :created (:create-status result))
        (remember! cache max-workflows (:workflow-id creation)
                   (get-in result [:state :history-revision])
                   [(:started-event creation)]))
      result))
  (load-workflow-state [_ workflow-id]
    (p/load-workflow-state inner workflow-id))
  (load-snapshot [_ workflow-id]
    (when-let [state (p/load-workflow-state inner workflow-id)]
      (if-let [{:keys [history-revision history] :as entry} (cache-entry cache workflow-id)]
        (if (= history-revision (:history-revision state))
          ;; Touch after validation so an out-of-process history write can never
          ;; promote stale data merely because it was read.
          (do (remember! cache max-workflows workflow-id history-revision history)
              (assoc state :history history))
          (let [snapshot (p/load-snapshot inner workflow-id)]
            (when snapshot
              (remember! cache max-workflows workflow-id (:history-revision snapshot)
                         (:history snapshot)))
            snapshot))
        (let [snapshot (p/load-snapshot inner workflow-id)]
          (when snapshot
            (remember! cache max-workflows workflow-id (:history-revision snapshot)
                       (:history snapshot)))
          snapshot))))
  (load-close-tree [_ workflow-id]
    (p/load-close-tree inner workflow-id))
  (add-signal! [_ workflow-id signal-name signal]
    (p/add-signal! inner workflow-id signal-name signal))
  (request-cancel! [_ workflow-id]
    (p/request-cancel! inner workflow-id))
  (wake! [_ workflow-id]
    (p/wake! inner workflow-id))
  (commit-transition! [_ transition]
    (let [result (p/commit-transition! inner transition)]
      (when (= :committed (:commit-status result))
        (update-root-history! cache max-workflows transition result)
        ;; Related transitions can append history or change terminal state.  The
        ;; root is handled above; every other affected workflow is invalidated.
        (doseq [workflow-id (disj (transition-workflow-ids transition)
                                  (:workflow-id transition))]
          (invalidate! cache workflow-id)))
      result))
  (release-owner! [_ owner-id] (p/release-owner! inner owner-id))

  #?@(:clj
      [java.lang.AutoCloseable
       (close [_]
         (when (instance? java.lang.AutoCloseable inner)
           (.close ^java.lang.AutoCloseable inner)))]))

(defn wrap
  "Wrap an IFsmStore with a bounded history cache.

  `config` is `{:max-workflows n}`. A nil config means no cache and returns the
  original store, which keeps caching opt-in at every factory boundary."
  [store config]
  (if (nil? config)
    store
    (let [max-workflows (or (:max-workflows config) 1024)]
      (when-not (pos-int? max-workflows)
        (throw (ex-info "Cache :max-workflows must be a positive integer"
                        {:cache config})))
      (->CachedStore store (atom {:entries {} :order []}) max-workflows))))

(defn cached-store?
  [store]
  (instance? CachedStore store))
