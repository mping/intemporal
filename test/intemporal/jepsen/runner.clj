(ns intemporal.jepsen.runner
  "Top-level orchestrator for the intemporal chaos test.

  Phases:
    1. setup    — migrate schema, truncate state, fork N worker JVMs
    2. active   — generator submits/cancels/signals workflows;
                  nemesis kills & restarts workers;
                  nemesis also fires signals at dead workers (bug 1.1 probe)
    3. quiesce  — nemesis stops; all workers restarted (proves bug 1.3: no
                  auto-resume on restart); grace period elapses
    4. check    — run all four invariant checkers against final DB state
    5. teardown — kill all workers

  Run:
    clojure -X:dev:jdbc:jepsen intemporal.jepsen.runner/run \\
      :workers 4 :duration 120

  No-kill baseline (useful to confirm happy-path correctness):
    clojure -X:dev:jdbc:jepsen intemporal.jepsen.runner/run \\
      :workers 4 :duration 60 :no-kill true

  Expected outcome with the current (unfixed) codebase:
    checker liveness              -> FAIL  (bug 1.1 / 1.3)
    checker signal-consumed       -> FAIL  (bug 2.1, intermittent)
    checker history-integrity     -> FAIL  (bug 1.2, if concurrent-start runs)
    checker cancellation-liveness -> FAIL  (bug 2.3)

  After the Phase A + B + C fixes from improvements.md, all four should PASS."
  (:require [intemporal.jepsen.db      :as db]
            [intemporal.jepsen.client  :as client]
            [intemporal.jepsen.nemesis :as nemesis]
            [intemporal.jepsen.checker :as checker]
            [next.jdbc :as jdbc]
            [clojure.pprint :as pp]
            [taoensso.telemere :as log])
  (:import [java.util.concurrent Executors TimeUnit]))

;; ---------------------------------------------------------------------------
;; Defaults

(def ^:private default-db-url
  (or (System/getenv "POSTGRES_JDBC_URI")
      "jdbc:postgresql://localhost:5432/root?user=root&password=root"))

(defn- jdbc-spec [db-url]
  {:dbtype "postgresql" :connection-uri db-url :jdbcUrl db-url})

;; ---------------------------------------------------------------------------
;; Generator

(defn- start-generator!
  "Launches 3 submit threads + 1 cancel thread + 1 observe thread.
  Returns a 0-arity stop fn."
  [{:keys [db-spec history test-run submit-rps]
    :or   {submit-rps 5}}]
  (let [pool          (Executors/newFixedThreadPool 5)
        running?      (atom true)
        submit-period (long (/ 1000 (max 1 submit-rps)))]

    ;; 3 submit threads
    (dotimes [i 3]
      (.submit pool ^Runnable
        (fn []
          (while @running?
            (try
              (let [op (client/invoke-submit db-spec test-run)]
                (client/record-op! history (assoc op :process i :f :submit)))
              (catch Throwable t (log/log! :warn (str "submit failed: " t))))
            (Thread/sleep submit-period)))))

    ;; 1 cancel thread — cancels a recently-submitted workflow every ~3s
    (.submit pool ^Runnable
      (fn []
        (while @running?
          (try
            (let [candidates (->> @history
                                  (filter #(and (= :submit (:f %))
                                                (= :ok (:type %))
                                                (= :cancel-sleep
                                                   (get-in % [:value :wf-type]))))
                                  (keep #(get-in % [:value :workflow-id]))
                                  seq)]
              (when candidates
                (let [wf-id (rand-nth candidates)
                      op    (client/invoke-cancel db-spec test-run wf-id)]
                  (client/record-op! history (assoc op :process 98 :f :cancel)))))
            (catch Throwable t (log/log! :warn (str "cancel failed: " t))))
          (Thread/sleep 3000))))

    ;; 1 rapid-signal thread — immediately signals rapid-signal workflows
    (.submit pool ^Runnable
      (fn []
        (while @running?
          (try
            (let [candidates (->> @history
                                  (filter #(and (= :submit (:f %))
                                                (= :ok (:type %))
                                                (= :rapid-signal
                                                   (get-in % [:value :wf-type]))))
                                  (keep #(get-in % [:value :workflow-id]))
                                  seq)]
              (when candidates
                (let [wf-id (rand-nth candidates)
                      op    (client/invoke-signal db-spec test-run wf-id "immediate")]
                  (client/record-op! history (assoc op :process 97 :f :signal)))))
            (catch Throwable t (log/log! :warn (str "rapid-signal failed: " t))))
          ;; Very short sleep to maximise chance of hitting the race window.
          (Thread/sleep 50))))

    (fn stop-gen []
      (reset! running? false)
      (.shutdown pool)
      (.awaitTermination pool 10 TimeUnit/SECONDS)
      (.shutdownNow pool))))

;; ---------------------------------------------------------------------------
;; Nemesis loop

(defn- start-nemesis!
  [{:keys [owners history db-url db-spec test-run repo-root no-kill?
           nemesis-min-ms nemesis-jitter-ms min-alive]
    :or   {nemesis-min-ms 3000 nemesis-jitter-ms 6000 min-alive 2}}]
  (let [running? (atom (not no-kill?))
        thread   (Thread/startVirtualThread
                   (fn []
                     (while @running?
                       (try
                         (Thread/sleep (long (+ nemesis-min-ms
                                                (rand-int nemesis-jitter-ms))))
                         (when @running?
                           ;; Occasionally inject a concurrent-start to probe bug 1.2.
                           (when (< (rand) 0.15)
                             (let [op (client/invoke-concurrent-start db-spec test-run)]
                               (client/record-op! history
                                 (assoc op :process :nemesis :f :concurrent-start))))
                           ;; Main kill/restart fault.
                           (nemesis/step! {:owners       owners
                                           :history      history
                                           :db-url       db-url
                                           :test-run     test-run
                                           :repo-root    repo-root
                                           :min-alive    min-alive})
                           ;; After any kill, signal the dead workflows (bug 1.1 probe).
                           (nemesis/signal-dead-workflows! {:db-spec  db-spec
                                                            :test-run test-run
                                                            :owners   owners
                                                            :history  history}))
                         (catch InterruptedException _ (reset! running? false))
                         (catch Throwable t
                           (log/log! :warn (str "nemesis step error: " t)))))))]
    (fn stop-nem []
      (reset! running? false)
      (.join thread 5000))))

;; ---------------------------------------------------------------------------
;; Entry point

(defn run
  "Top-level entry.  Options (all optional):
    :workers           number of forked worker JVMs (default 4)
    :duration          active phase length in seconds (default 120)
    :db-url            JDBC url (default from POSTGRES_JDBC_URI or localhost)
    :no-kill           disable nemesis (baseline mode)
    :submit-rps        submit rate per thread (3 threads, default 5 → 15 RPS)
    :nemesis-min-ms    minimum gap between nemesis ticks (default 3000)
    :nemesis-jitter-ms random extra gap per tick (default 6000)
    :min-alive         floor on simultaneously-alive workers (default 2)
    :grace-s           quiesce drain time before checks (default 90)
    :repo-root         working directory for forked workers (default \".\")"
  [{:keys [workers duration db-url no-kill repo-root submit-rps
           nemesis-min-ms nemesis-jitter-ms min-alive grace-s]
    :or   {workers 4 duration 120 db-url default-db-url
           repo-root "." submit-rps 5
           nemesis-min-ms 3000 nemesis-jitter-ms 6000
           min-alive 2 grace-s 90}}]
  (let [test-run (str "run-" (System/currentTimeMillis))
        owners   (mapv #(format "jepsen-%02d-%s" % test-run) (range workers))
        db-spec  (jdbc-spec db-url)
        history  (atom [])]

    (println "\n=== intemporal Jepsen run" test-run "===")
    (println (format "workers=%d  duration=%ds  no-kill=%s  grace=%ds"
                     workers duration (boolean no-kill) grace-s))

    ;; --- 1. setup ---
    (println "[setup] migrating + truncating")
    (db/migrate-all! db-spec)
    (db/truncate-all! db-spec)
    (println "[setup] forking workers")
    (doseq [owner owners]
      (db/fork! {:owner owner :db-url db-url :test-run test-run
                 :repo-root repo-root}))

    (try
      ;; --- 2. active phase ---
      (println (format "[active] running %ds with chaos=%s" duration (not no-kill)))
      (let [stop-gen (start-generator! {:db-spec    db-spec
                                        :history    history
                                        :test-run   test-run
                                        :submit-rps submit-rps})
            stop-nem (start-nemesis!   {:owners          owners
                                        :history         history
                                        :db-url          db-url
                                        :db-spec         db-spec
                                        :test-run        test-run
                                        :repo-root       repo-root
                                        :no-kill?        no-kill
                                        :nemesis-min-ms  nemesis-min-ms
                                        :nemesis-jitter-ms nemesis-jitter-ms
                                        :min-alive       min-alive})]
        (Thread/sleep (* 1000 duration))
        (println "[active->quiesce] stopping generator and nemesis")
        (stop-gen)
        (stop-nem))

      ;; --- 3. quiesce ---
      ;; Restart every worker.  This proves bug 1.3: restarting does NOT
      ;; auto-resume workflows — no recovery poller exists.
      (println "[quiesce] restarting all workers (proves no auto-resume on restart)")
      (nemesis/ensure-all-alive! {:owners owners :db-url db-url
                                  :test-run test-run :repo-root repo-root})
      (println (format "[quiesce] grace period: %ds" grace-s))
      (Thread/sleep (* 1000 grace-s))

      ;; --- 4. check ---
      (println "[check] running invariants")
      (let [result (checker/check-all {:db-spec  db-spec
                                       :history  history
                                       :test-run test-run})]
        (println "\n=== RESULTS ===")
        (pp/pprint result)
        (println "===============\n")
        (println (format "Ops in history: %d" (count @history)))
        (println (format "Submitted: %d"
                         (count (filter #(and (= :submit (:f %))
                                              (= :ok (:type %)))
                                        @history))))
        (if (:valid? result)
          (println "ALL INVARIANTS PASSED")
          (println "INVARIANTS VIOLATED — see results above"))
        result)

      (finally
        ;; --- 5. teardown ---
        (println "[teardown] killing workers")
        (db/kill-all!)))))

(defn -main [& args]
  (let [opts (when (seq args) (read-string (first args)))]
    (let [r (run (or opts {}))]
      (System/exit (if (:valid? r) 0 1)))))
