(ns intemporal2.demo
  (:require [intemporal2.store :as store]
            [intemporal2.workflow :as w]))


;;;;
;; demo

(w/defn-workflow my-workflow [i]
  (/ 1 i))

(def wstore (store/make-memstore))

(clojure.pprint/print-table (vals (::store/workflow-store @wstore)))

(w/start-workflow-worker! wstore)

(w/with-env {::w/workflow-store wstore}
  (my-workflow 1))

(clojure.pprint/print-table (vals (::store/workflow-store @wstore)))
(clojure.pprint/print-table (->> (vals (::store/history-store @wstore))
                                 (flatten)))
