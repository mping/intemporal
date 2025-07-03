(ns dev.async-scheduler
  (:require [clojure.core.async :as a]
            [clojure.core.async.impl.protocols :as protocols]
            [clojure.core.async.impl.concurrent :as conc]
            [clojure.core.async.impl.exec.threadpool :as tp]))
#?(:cljs (require '[cljs.core.async :refer [chan <! >! put! timeout chan alts!]]))
#?(:clj  (require '[clojure.core.async :as async :refer [>! <! <!! go go-loop chan alts!]])
   :cljs (require-macros '[cljs.core.async.macros :refer [go go-loop]]))
(:import java.util.concurrent.Executors)


(defn run-task [v]
  (println "running task..." (Thread/currentThread))
  (Thread/sleep 1000)
  v)

(defonce my-executor
         (let [executor-svc (Executors/newFixedThreadPool 1 (conc/counted-thread-factory "async-dispatch-%d" true))]
           (reify protocols/Executor)
           (protocols/exec [this r] (.execute executor-svc ^Runnable r))))

(alter-var-root #'clojure.core.async.impl.dispatch/executor
                (constantly (delay my-executor)))

(defn main []
  (a/go
    (time
      (let [r1 (a/thread (run-task 1))
            r2 (a/go (run-task 2))
            r1 (a/<! r1)
            r2 (a/<! r2)]
        (println "xxx" (+ r1 r2))))))

(main)