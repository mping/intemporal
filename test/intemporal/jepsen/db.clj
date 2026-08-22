(ns intemporal.jepsen.db
  "Subprocess lifecycle for forked worker JVMs.

  Each 'node' (owner-id) maps to a forked Process whose classpath is set by
  `-X:dev:jdbc:jepsen-worker`.  We use ProcessBuilder for real SIGKILL
  semantics: destroyForcibly() skips the JVM shutdown hook, exactly modelling
  a hard crash and leaving durable RUNNING ownership for restart recovery.

  Process model deviation: we don't use SSH/sshd containers (local-only).
  The jepsen library is not required here; we implement our own lightweight
  orchestrator."
  (:require
   [clojure.java.io :as io]
   [migratus.core :as migratus]
   [next.jdbc :as jdbc]
   [taoensso.telemere :as log])
  (:import
   (java.io BufferedReader InputStreamReader)
   (java.util.concurrent TimeUnit)))

(def ^:private registry (atom {}))

;; ---------------------------------------------------------------------------
;; I/O pumps

(defn- pump-stdout
  "Forwards child stdout to logger line-by-line.  Delivers :ready on the
  ready-promise the first time 'READY <owner>' appears."
  [^Process p owner ready-prom]
  (Thread/startVirtualThread
    (fn []
      (with-open [r (BufferedReader. (InputStreamReader. (.getInputStream p)))]
        (loop []
          (when-let [line (.readLine r)]
            (log/log! :info (str "[worker:" owner "] " line))
            (when (and (not (realized? ready-prom))
                       (.startsWith ^String line (str "READY " owner)))
              (deliver ready-prom :ready))
            (recur)))))))

(defn- pump-stderr [^Process p owner]
  (Thread/startVirtualThread
    (fn []
      (with-open [r (BufferedReader. (InputStreamReader. (.getErrorStream p)))]
        (loop []
          (when-let [line (.readLine r)]
            (log/log! :warn (str "[worker:" owner "/err] " line))
            (recur)))))))

;; ---------------------------------------------------------------------------
;; Lifecycle

(defn alive?
  "True iff a worker process is registered and alive."
  [owner]
  (boolean (some-> @registry (get owner) :process (.isAlive))))

(defn fork!
  "Forks a worker JVM via `clojure -X:dev:jdbc:jepsen-worker`.
  Blocks up to boot-timeout-ms waiting for the READY handshake on stdout."
  [{:keys [owner db-url test-run boot-timeout-ms repo-root]
    :or   {boot-timeout-ms 90000 repo-root "."}}]
  (when (alive? owner)
    (throw (ex-info "Worker already alive for this owner" {:owner owner})))
  (let [args ["clojure" "-X:dev:jdbc:jepsen-worker"
              "intemporal.jepsen.worker/run"
              ":owner"    (pr-str owner)
              ":db-url"   (pr-str db-url)
              ":test-run" (pr-str test-run)]
        pb   (doto (ProcessBuilder. ^java.util.List args)
               (.directory (io/file repo-root))
               (.redirectErrorStream false))
        proc (.start pb)
        ready (promise)]
    (pump-stdout proc owner ready)
    (pump-stderr proc owner)
    (let [v (deref ready boot-timeout-ms ::timeout)]
      (when (= v ::timeout)
        (.destroyForcibly proc)
        (throw (ex-info "Worker boot timed out"
                        {:owner owner :timeout-ms boot-timeout-ms}))))
    (let [entry {:process proc :owner owner}]
      (swap! registry assoc owner entry)
      (log/log! :info (str "Forked worker " owner " pid=" (.pid proc)))
      entry)))

(defn kill!
  "Sends a signal to the worker.
  :sigkill -> destroyForcibly (no shutdown hook, models hard crash)
  :sigterm -> destroy (shutdown hook fires, models graceful stop)"
  [owner signal]
  (when-let [{:keys [^Process process]} (get @registry owner)]
    (case signal
      :sigterm (.destroy process)
      :sigkill (.destroyForcibly process))
    (.waitFor process 30 TimeUnit/SECONDS)
    (swap! registry dissoc owner)
    (log/log! :info (str "Killed worker " owner " with " (name signal)
                         " exit=" (try (.exitValue process) (catch Exception _ "?"))))))

(defn kill-all! []
  (doseq [owner (keys @registry)]
    (try (kill! owner :sigkill)
         (catch Throwable t
           (log/log! :warn (str "kill-all failed for " owner ": " t))))))

;; ---------------------------------------------------------------------------
;; Schema setup

(defn migrate-all!
  "Runs intemporal migrations and Jepsen side-channel migrations against
  the given db-spec."
  [db-spec]
  (doseq [[dir table] [["migrations/postgres"       nil]
                       ["migrations/jepsen/postgres" "jepsen_migrations"]]]
    (migratus/migrate (cond-> {:store         :database
                               :migration-dir dir
                               :db            db-spec}
                        table (assoc :migration-table-name table)))))

(defn truncate-all!
  "Clears all intemporal and Jepsen tables between runs."
  [db-spec]
  (doseq [table ["jepsen_cancels_sent"
                 "jepsen_signals_sent"
                 "jepsen_invocations"
                 "jepsen_work_queue"
                 "intemporal_signals"
                 "intemporal_history"
                 "intemporal_workflows"]]
    (jdbc/execute! db-spec [(str "DELETE FROM " table)])))
