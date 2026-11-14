(ns intemporal.benchmarks.store-bench
  "Store throughput benchmark.

   Each store runs two scenarios per concurrency level, 1000 workflows each:
   - one activity per workflow
   - ten concurrent async activities per workflow

   Run (needs: docker compose up -d postgresql mariadb foundation):
     bin/bench                    ; all stores
     bin/bench memory postgres    ; subset

   Unreachable stores are skipped. Ends with one comparison table."
  (:require
   [clojure.pprint :as pprint]
   [intemporal.core :as intemporal]
   [intemporal.store :as store]
   [intemporal.store.fdb :as fdb-store]
   [intemporal.store.jdbc :as jdbc-store]
   [me.vedang.clj-fdb.FDB :as cfdb]
   [taoensso.telemere :as telemere])
  (:import
   (ch.qos.logback.classic Level Logger)
   (java.lang AutoCloseable)
   (org.slf4j LoggerFactory)))

(def ^:private workflow-count 1000)
(def ^:private warmup-count 50)
(def ^:private fan-out 10)
(def ^:private await-timeout-ms (* 10 60 1000))
(def ^:private ns-per-ms 1e6)
(def ^:private ms-per-s 1000)

(def ^:private postgres-url "jdbc:postgresql://localhost:5432/root?user=root&password=root")
(def ^:private mariadb-url "jdbc:mariadb://localhost:3306/root?user=root&password=root")
(def ^:private fdb-cluster-file "docker/fdb.cluster")
(def ^:private fdb-api-version 710)

;; Fails FDB transactions instead of retrying forever when the cluster is down.
(def ^:private fdb-tx-timeout-ms 10000)

;; Identical engine settings for every store, so only the store varies.
(def ^:private engine-opts
  {:enable-telemetry false})

;; Swept :workflow-concurrency values: shows whether engine or store bounds throughput.
(def ^:private concurrency-levels [4 16 64])

;; ---------------------------------------------------------------------------
;; Workflows

;; Trivial on purpose: measures engine + store overhead, not activity work.
(defn- bench-activity [x] (inc x))

(defn- single-wf [x]
  (let [act (intemporal/stub #'bench-activity)]
    (act x)))

(defn- fan-out-wf [x]
  (let [act     (intemporal/stub #'bench-activity)
        handles (mapv (fn [i] (intemporal/async #(act (+ x i))))
                      (range fan-out))]
    (intemporal/join-all handles)))

(def ^:private scenarios
  [{:scenario "1 activity" :workflow #'single-wf :activities 1}
   {:scenario (str fan-out " async activities") :workflow #'fan-out-wf :activities fan-out}])

;; ---------------------------------------------------------------------------
;; Stores

(defn- fdb-store []
  (let [db (cfdb/open (cfdb/select-api-version fdb-api-version) fdb-cluster-file)]
    (.setTransactionTimeout (.options db) fdb-tx-timeout-ms)

    ;; Fresh subspace: no leftovers from previous runs.
    (fdb-store/create-store db (str "intemporal-bench-" (random-uuid)) :checked? false)))

;; [name constructor], in report order. Spec checks off: measure the store only.
(def ^:private stores
  [["memory" #(store/create-store :checked? false)]
   ["postgres" #(jdbc-store/create-store postgres-url :checked? false)]
   ["mariadb" #(jdbc-store/create-store mariadb-url :checked? false)]
   ["fdb" fdb-store]])

(defn- close! [st]
  (when (instance? AutoCloseable st)
    (.close ^AutoCloseable st)))

;; ---------------------------------------------------------------------------
;; Measurement

(defn- run-batch
  "Submit n workflows, then await all. Elapsed time covers both."
  [engine workflow n]
  (let [start   (System/nanoTime)
        ids     (mapv #(:workflow-id (intemporal/submit-workflow engine workflow [%]))
                      (range n))
        results (mapv #(intemporal/await-workflow engine % :timeout-ms await-timeout-ms)
                      ids)]
    {:elapsed-ms (/ (- (System/nanoTime) start) ns-per-ms)
     :failed     (count (remove #(= :completed (:status %)) results))}))

(defn- run-scenario [engine store-name {:keys [scenario workflow activities]}]
  ;; Warmup lets the JIT compile store code paths before timing.
  (run-batch engine workflow warmup-count)

  (let [{:keys [elapsed-ms failed]} (run-batch engine workflow workflow-count)]
    {:store      store-name
     :scenario   scenario
     :workflows  workflow-count
     :activities (* workflow-count activities)
     :failed     failed
     :elapsed-ms elapsed-ms}))

(defn- bench-engine
  "Run all scenarios on a fresh engine with the given concurrency."
  [st store-name concurrency]
  (let [engine (intemporal/start-engine
                 (assoc engine-opts
                        :store st
                        :workflow-concurrency concurrency
                        :owner-id (str "bench-" store-name "-" (random-uuid))))]
    (try
      (mapv #(assoc (run-scenario engine store-name %) :concurrency concurrency)
            scenarios)
      (finally
        (intemporal/shutdown-engine engine)))))

(defn- bench-store
  "Run every concurrency level on one store. Returns report rows."
  [[store-name make-store]]
  (println "Benchmarking" store-name "...")
  (try
    (let [st (make-store)]
      (try
        (into [] (mapcat #(bench-engine st store-name %)) concurrency-levels)
        (finally
          (close! st))))
    (catch Exception e
      (println "Skipping" store-name "-" (ex-message e))
      [])))

;; ---------------------------------------------------------------------------
;; Report

(defn- fmt [x] (format "%.2f" (double x)))

(defn- report-row
  "Throughput per workflow and per activity; vs-best is slowdown against the
   fastest store in the same scenario and concurrency (1.00 = fastest)."
  [best {:keys [scenario concurrency workflows activities elapsed-ms] :as row}]
  (let [secs (/ elapsed-ms ms-per-s)]
    (assoc row
           :total-ms (fmt elapsed-ms)
           :wf/s     (fmt (/ workflows secs))
           :act/s    (fmt (/ activities secs))
           :ms/act   (fmt (/ elapsed-ms activities))
           :vs-best  (fmt (/ elapsed-ms (best [scenario concurrency]))))))

(defn- print-report
  "One table, grouped by scenario; rows keep store, then concurrency order."
  [rows]
  (let [best (update-vals (group-by (juxt :scenario :concurrency) rows)
                          #(apply min (map :elapsed-ms %)))]
    (pprint/print-table
      [:scenario :store :concurrency :workflows :activities :failed
       :total-ms :wf/s :act/s :ms/act :vs-best]
      (map #(report-row best %)
           (sort-by :scenario rows)))))

(defn- quiet-logs!
  "Keep log I/O out of timings; test/logback.xml logs at TRACE."
  []
  (telemere/set-min-level! :warn)
  (.setLevel ^Logger (LoggerFactory/getLogger Logger/ROOT_LOGGER_NAME) Level/WARN))

(defn -main
  "Args: store names to run (default: all)."
  [& names]
  (quiet-logs!)
  (let [selected (if (seq names)
                   (filter #(some #{(first %)} names) stores)
                   stores)]
    (print-report (mapcat bench-store selected))

    ;; FDB network thread is non-daemon and would keep the JVM alive.
    (System/exit 0)))
