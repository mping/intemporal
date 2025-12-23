(ns intemporal.error
  #?(:clj (:import [java.lang InterruptedException]
                   [java.util.concurrent RejectedExecutionException])))


(defn interrupted? [e]
  #?(:clj (instance? InterruptedException e)
     :cljs false))

(defn rejected? [e]
  #?(:clj (instance? RejectedExecutionException e)
     :cljs false))

(defn internal-error? [ex]
  (when-let [t (-> ex ex-data ::type)]
    (or (= :internal t)
        (= :panic t))))

(defn panic? [ex]
  (and (instance? #?(:clj Exception :cljs js/Error) ex)
       (= :panic (-> ex ex-data ::type))))

(defn internal-error [msg data]
  (ex-info msg (merge data {::type :internal})))

(defn panic [msg]
  (ex-info msg {::type :panic}))
