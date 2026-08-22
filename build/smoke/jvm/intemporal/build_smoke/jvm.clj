(ns intemporal.build-smoke.jvm
  (:require [intemporal.core :as intemporal]))

(defn double-value [x]
  (* 2 x))

(intemporal/defn-workflow packaged-workflow [x]
  (let [activity (intemporal/stub #'double-value)]
    (activity x)))

(defn -main [& _]
  (intemporal/with-workflow-engine [engine {:enable-logging false}]
    (let [result (intemporal/start-workflow engine #'packaged-workflow [21])]
      (when-not (= {:status :completed :result 42}
                   (dissoc result :workflow-id))
        (throw (ex-info "Packaged JVM workflow failed" {:result result}))))))
