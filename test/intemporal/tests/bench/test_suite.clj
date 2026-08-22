(ns intemporal.tests.bench.test-suite
  (:require
   [clojure.test :refer [is testing]]
   [intemporal.core :as intemporal])
  (:import
   (java.util.concurrent Executors)))

(defn test-activity [x]
  x)

(defn basic-workflow [initial-value]
  (let [activity-stub   (intemporal/stub #'test-activity)
        activity-result (activity-stub initial-value)]
    {:activity-result activity-result}))

(defn run-store-tests
  [store wf-count]
  (testing "Workflow execution with store"
    (with-open [exec (Executors/newVirtualThreadPerTaskExecutor)]
      (intemporal/with-workflow-engine [engine {:store store :threads (.availableProcessors (Runtime/getRuntime))}]

        (let [prefix  (str "bench-" (random-uuid) "-")
              tasks   (mapv (fn [i] (reify Callable (call [_] (intemporal/start-workflow engine basic-workflow [5] :workflow-id (str prefix i)))))
                            (range wf-count))
              futures (.invokeAll exec tasks)
              results (mapv #(.get %) futures)]
          (doseq [res results]
            (is (= :completed (:status res)))
            (is (= {:activity-result 5} (:result res))))
          nil)))))
