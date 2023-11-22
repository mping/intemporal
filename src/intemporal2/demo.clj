(ns intemporal2.demo
  (:require [intemporal2.store :as store]
            [intemporal2.workflow :as w]))

;;;;
;; demo

(defn nested-fn [a]
  (prn "activity was called" a)
  :nested)

(defn activity-fn [a]
  (let [n (w/stub-function nested-fn)]
    (conj a :activity (n :sub))))

(w/defn-workflow my-workflow [i]
  (let [s (w/stub-function activity-fn)]
    (conj [:root] (s [1]))))

(def mstore (store/make-memstore))

(w/start-worker! mstore)

(w/with-env {:store mstore}
  (my-workflow 1))

(clojure.pprint/print-table (vals (::store/task-store @mstore)))
(clojure.pprint/print-table (->> (vals (::store/history-store @mstore))
                                 (flatten)
                                 (sort-by :id)))
