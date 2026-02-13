(ns intemporal.internal.activity
  #?(:cljs (:require [clojure.string :as str])))

;; ============================================================================
;; Activity Registry
;; ============================================================================

(defn- fn-name
  "Get a stable, qualified name string from a function.
   On JVM: uses var metadata when available, otherwise class name.
   On CLJS: demangles the JS function .name property (e.g. ns$fn_name -> ns/fn-name)."
  [f]
  #?(:clj  (str (symbol f))
     :cljs (let [raw (.-name f)]
             (if (and raw (not (str/blank? raw)))
               ;; JS mangled name: intemporal$tests$deleteme_test$noop_activity
               ;; Split on $ to get segments, last is fn name, rest is ns
               (let [parts (str/split raw #"\$")]
                 (if (> (count parts) 1)
                   (let [ns-parts (butlast parts)
                         fn-part  (last parts)
                         ;; underscores in ns segments -> hyphens
                         ns-str   (str/join "." (map #(str/replace % "_" "-") ns-parts))
                         fn-str   (str/replace fn-part "_" "-")]
                     (str ns-str "/" fn-str))
                   ;; Single segment - no namespace
                   (str/replace raw "_" "-")))
               ;; Anonymous fn - generate a name
               (str (gensym "activity-"))))))

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
                            (fn-name f)))
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
                        (fn-name f))]
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

