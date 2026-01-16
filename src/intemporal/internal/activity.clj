(ns intemporal.internal.activity)

;; ============================================================================
;; Activity Registry
;; ============================================================================

(defn make-registry
  "Create a new activity registry"
  []
  (atom {}))

(defn register-activity!
  "Register an activity function in a registry"
  [registry f & {:keys [name timeout-ms retry-policy]}]
  (let [activity-name (or name
                          (if (var? f)
                            (str (symbol f))
                            (str (gensym "activity-"))))
        resolved-fn (if (var? f) @f f)]
    (swap! registry assoc activity-name
           {:fn resolved-fn
            :timeout-ms timeout-ms
            :retry-policy retry-policy})
    activity-name))

(defn get-activity-info [registry activity-name]
  (get @registry activity-name))

(defn get-activity-fn [registry activity-name]
  (:fn (get-activity-info registry activity-name)))

(defn ensure-registered! [registry f]
  (let [activity-name (if (var? f)
                        (str (symbol f))
                        (str (symbol f)))]
    (when-not (contains? @registry activity-name)
      (register-activity! registry f :name activity-name))
    activity-name))

;; ============================================================================
;; Retry Policy
;; ============================================================================

(defrecord RetryPolicy [max-attempts
                        backoff-ms
                        max-backoff-ms
                        backoff-multiplier
                        retryable-fn])

(defn make-retry-policy
  "Create a retry policy"
  [& {:keys [max-attempts backoff-ms max-backoff-ms backoff-multiplier retryable-fn]
      :or {max-attempts 3
           backoff-ms 1000
           max-backoff-ms 60000
           backoff-multiplier 2.0
           retryable-fn (constantly true)}}]
  (->RetryPolicy max-attempts backoff-ms max-backoff-ms backoff-multiplier retryable-fn))

(defn calculate-backoff [policy attempt]
  (let [base (:backoff-ms policy)
        multiplier (:backoff-multiplier policy)
        max-backoff (:max-backoff-ms policy)
        backoff (* base (Math/pow multiplier (dec attempt)))]
    (long (min backoff max-backoff))))

(defn should-retry? [policy error attempt]
  (and (< attempt (:max-attempts policy))
       ((:retryable-fn policy) error)))

