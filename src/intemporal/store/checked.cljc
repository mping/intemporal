(ns intemporal.store.checked
  "A composite workflow-store decorator that performs the intemporal.spec assertions
   every backend used to perform inline, one copy per implementation. Wrap any
   store with ->CheckedStore (or use a backend's create-store factory, which
   does this automatically) to validate every value crossing the store
   boundary against intemporal.spec; the concrete backends (InMemoryStore,
   JdbcStore, FDBStore) stay assertion-free so the checks aren't duplicated
   per-implementation.

   Enforcement is still gated by intemporal.spec/check! itself — a no-op
   unless clojure.spec.check-asserts is enabled. See intemporal.spec."
  (:require
   [clojure.spec.alpha :as s]
   [intemporal.protocol :as p]
   [intemporal.spec :as spec]))

(defrecord CheckedStore [inner]
  p/IEngineStore
  (load-history [_ workflow-id]
    (->> (p/load-history inner workflow-id)
         (spec/check! ::spec/events)))

  (get-workflow-status [_ workflow-id]
    (->> (p/get-workflow-status inner workflow-id)
         (spec/check! ::spec/workflow-status)))

  (claim-runnable! [_ owner-id limit now-ms]
    (spec/check! ::spec/limit limit)
    (spec/check! ::spec/timestamp now-ms)
    (->> (p/claim-runnable! inner owner-id limit now-ms)
         (spec/check! ::spec/drive-claims)))

  (requeue-running! [_ workflow-id owner-id]
    (->> (p/requeue-running! inner workflow-id owner-id)
         (spec/check! ::spec/boolean-result)))

  (recover-running! [_ owner-id]
    (->> (p/recover-running! inner owner-id)
         (spec/check! ::spec/count-result)))

  p/IFsmStore

  (create-workflow! [_ creation]
    (spec/check! ::spec/workflow-creation creation)
    (->> (p/create-workflow! inner creation)
         (spec/check! ::spec/create-result)))

  (load-workflow-state [_ workflow-id]
    (->> (p/load-workflow-state inner workflow-id)
         (spec/check! ::spec/maybe-workflow-state)))

  (load-snapshot [_ workflow-id]
    (->> (p/load-snapshot inner workflow-id)
         (spec/check! ::spec/maybe-snapshot)))

  (load-close-tree [_ workflow-id]
    (->> (p/load-close-tree inner workflow-id)
         (spec/check! ::spec/close-tree)))

  (add-signal! [_ workflow-id signal-name signal]
    (spec/check! ::spec/signal-name signal-name)
    (->> (p/add-signal! inner workflow-id signal-name signal)
         (spec/check! ::spec/signal-result)))

  (request-cancel! [_ workflow-id]
    (->> (p/request-cancel! inner workflow-id)
         (spec/check! ::spec/cancel-result)))

  (wake! [_ workflow-id]
    (->> (p/wake! inner workflow-id)
         (spec/check! ::spec/wake-result)))

  (commit-transition! [_ transition]
    (spec/check! ::spec/transition transition)
    (->> (p/commit-transition! inner transition)
         (spec/check! ::spec/commit-result)))

  (release-owner! [_ owner-id]
    (p/release-owner! inner owner-id))

  #?@(:clj
      [java.lang.AutoCloseable
       (close [_]
         (when (instance? java.lang.AutoCloseable inner)
           (.close ^java.lang.AutoCloseable inner)))]))

(defn checked-store? [store]
  (instance? CheckedStore store))

(defn unwrap
  "Returns the concrete store `s` decorates, or `s` itself when it is not a
   CheckedStore. Use this when you need a backend-specific field that only the
   concrete record carries — e.g. a JdbcStore's :datasource — since those keys
   are not readable through the wrapper."
  [s]
  (if (checked-store? s) (:inner s) s))

(defn wrap
  "Apply the store validation construction policy.

   :auto  wraps only when clojure.spec/check-asserts is currently enabled
   true   always installs CheckedStore (individual checks remain dynamically gated)
   false  returns the concrete store unchanged"
  [store checked?]
  (case checked?
    :auto (if (s/check-asserts?) (->CheckedStore store) store)
    true  (->CheckedStore store)
    false store
    (throw (ex-info "Invalid :checked? policy"
                    {:checked? checked? :allowed #{:auto true false}}))))
