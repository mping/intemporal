(ns intemporal2.demo
  (:require [intemporal2.store :as store]
            [intemporal2.workflow :as w]))


;;;;
;; demo

(defn activity-fn [a]
  (prn "activity was called")
  :ok)

(w/defn-workflow my-workflow [i]
  (let [s (w/stub-function activity-fn)]
    [(/ 1 i) (s 1)]))

(def wstore (store/make-memstore))

(w/start-worker! wstore)

(w/with-env {:store wstore}
  (my-workflow 1))

(clojure.pprint/print-table (vals (::store/task-store @wstore)))
(clojure.pprint/print-table (->> (vals (::store/history-store @wstore))
                                 (flatten)))

