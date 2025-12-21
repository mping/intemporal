(ns ^:integration ^:fdb ^:sql intemporal.containers.start-runner
  (:gen-class)
  (:require [clojure.tools.logging :as log]
            [intemporal.store.foundationdb :as fdb]
            [intemporal.store.jdbc :as jdbc]
            [intemporal.workflow :as w])
  (:import (sun.misc Signal SignalHandler)))

(def stores {:fdb      (delay (fdb/make-store {:cluster-file-path (or (System/getenv "FDB_CLUSTERFILE")
                                                                      "docker/fdb.cluster")}))
             :postgres (delay (jdbc/make-store {:jdbcUrl       (or (System/getenv "JDBC_URL")
                                                                   "jdbc:postgresql://localhost:5432/root?user=root&password=root")
                                                :migration-dir "migrations/postgres"}))})

;; serves as an entrypoint for a docker container that can be killed
;; some other container will have to execute the poller/runner
;; clj -A:dev:jdbc:fdb -m intemporal.containers.start-runner postgres
(defn -main [& args]
  (let [store-type (-> args first keyword)
        store      (get stores store-type)]
    (when (nil? store)
      (throw (ex-info (format "Unknown store type: %s" store-type) {:store-type store-type})))
    (log/info "Starting poller for store" store-type)

    (let [ex (w/start-poller! @store {})]
      (log/info "Ready: poller started for store" store-type)
      (doto (Thread. (fn []
                       (Signal/handle (Signal. "TERM")
                                      (reify SignalHandler
                                        (handle [this sig]
                                          (log/info "Received SIGTERM, shutting down")
                                          (w/shutdown ex 0))))
                       (Signal/handle (Signal. "INT")
                                      (reify SignalHandler
                                        (handle [this sig]
                                          (log/info "Received INT, quitting")
                                          (System/exit 0))))
                       (log/info "Waiting for SIGTERM/SIGINT...")
                       (Thread/sleep Integer/MAX_VALUE)))

        (.setDaemon false)
        (.start)))))

(comment
  (-main "postgres"))