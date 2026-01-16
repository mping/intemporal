(ns intemporal.test-executor
  (:require [intemporal.workflow :as w]
            [taoensso.telemere :as t])
  (:import (java.lang AutoCloseable)
           (java.util.concurrent Executors TimeUnit)))

(defn make-test-executor [shutdown-fn? terminated-fn?]
  (let [factory (-> (Thread/ofVirtual)
                    (.name "Task Thread")
                    (.factory))
        exec    (Executors/newThreadPerTaskExecutor factory)
        shutdown? (atom false)
        terminated? (atom false)]
    (reify
      w/ITaskExecutor
      (submit [_ f]
        (.submit exec ^Runnable f))
      (shutdown [_ grace-period-ms]
        (try
          ;; reject tasks
          (.shutdown exec)
          (when (ifn? shutdown-fn?)
            (shutdown-fn?))
          (reset! shutdown? true)
          (t/log! {:level :debug} ["Executor shutdown"])
          ;; await ongoing tasks
          (when-not (.awaitTermination exec grace-period-ms TimeUnit/MILLISECONDS)
            (t/log! {:level :debug} ["Executor shutdown grace period over, shutting down NOW"])
            (.shutdownNow exec))
          ;; in case we got interrupted exception, make sure to set the flag
          ;; so ongoing ops fail
          (finally
            (when (ifn? terminated-fn?)
              (terminated-fn?))
            (reset! terminated? true))))
      (terminated? [_]
        @terminated?)
      (shutting-down? [_]
        @shutdown?)
      AutoCloseable
      (close [this]
        (w/shutdown this 0)))))