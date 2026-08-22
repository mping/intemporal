(ns intemporal.store.checked
  "A composite IStore decorator that performs the intemporal.spec assertions
   every backend used to perform inline, one copy per implementation. Wrap any
   IStore with ->CheckedStore (or use a backend's create-store factory, which
   does this automatically) to validate every value crossing the IStore
   boundary against intemporal.spec; the concrete backends (InMemoryStore,
   JdbcStore, FDBStore) stay assertion-free so the checks aren't duplicated
   per-implementation.

   Enforcement is still gated by intemporal.spec/check! itself — a no-op
   unless clojure.spec.check-asserts is enabled. See intemporal.spec."
  (:require
   [intemporal.protocol :as p]
   [intemporal.spec :as spec]))

(defrecord CheckedStore [inner]
  p/IStore
  (load-history [_ workflow-id]
    (->> (p/load-history inner workflow-id)
         (spec/check! ::spec/events)))

  (save-event [_ workflow-id event]
    (spec/check! ::spec/event event)
    (p/save-event inner workflow-id event))

  (save-events [_ workflow-id events]
    (spec/check! ::spec/events events)
    (p/save-events inner workflow-id events))

  (save-events-and-wake! [_ workflow-id events]
    (spec/check! ::spec/events events)
    (->> (p/save-events-and-wake! inner workflow-id events)
         (spec/check! ::spec/boolean-result)))

  (find-event [_ workflow-id event-type seq-num]
    (spec/check! ::spec/event-type event-type)
    (spec/check! ::spec/seq seq-num)
    (->> (p/find-event inner workflow-id event-type seq-num)
         (spec/check! ::spec/maybe-event)))

  (max-seq [_ workflow-id]
    (->> (p/max-seq inner workflow-id)
         (spec/check! ::spec/max-seq-result)))

  (get-pending-signals [_ workflow-id]
    (->> (p/get-pending-signals inner workflow-id)
         (spec/check! ::spec/pending-signals)))

  (add-signal [_ workflow-id signal-name signal-data]
    (p/add-signal inner workflow-id signal-name signal-data))

  (consume-signal [_ workflow-id signal-name]
    (p/consume-signal inner workflow-id signal-name))

  (wake-workflow [_ workflow-id]
    (->> (p/wake-workflow inner workflow-id)
         (spec/check! ::spec/boolean-result)))

  (is-cancelled? [_ workflow-id]
    (->> (p/is-cancelled? inner workflow-id)
         (spec/check! ::spec/boolean-result)))

  (mark-cancelled [_ workflow-id]
    (p/mark-cancelled inner workflow-id))

  (get-workflow-status [_ workflow-id]
    (->> (p/get-workflow-status inner workflow-id)
         (spec/check! ::spec/workflow-status)))

  (claim-runnable! [_ owner-id limit now-ms]
    (spec/check! ::spec/limit limit)
    (spec/check! ::spec/timestamp now-ms)
    (->> (p/claim-runnable! inner owner-id limit now-ms)
         (spec/check! ::spec/drive-claims)))

  (park-workflow! [_ workflow-id expected-wake-version events next-run-at-ms]
    (spec/check! ::spec/wake-version expected-wake-version)
    (spec/check! ::spec/events events)
    (spec/check! ::spec/next-run-at-ms next-run-at-ms)
    (->> (p/park-workflow! inner workflow-id expected-wake-version events next-run-at-ms)
         (spec/check! ::spec/park-result)))

  (requeue-running! [_ workflow-id]
    (->> (p/requeue-running! inner workflow-id)
         (spec/check! ::spec/boolean-result)))

  (recover-running! [_ owner-id]
    (->> (p/recover-running! inner owner-id)
         (spec/check! ::spec/count-result)))

  (release-owner [_ owner-id]
    (p/release-owner inner owner-id))

  (link-child! [_ parent-id parent-seq child-id policy]
    (spec/check! ::spec/parent-seq parent-seq)
    (spec/check! ::spec/policy policy)
    (p/link-child! inner parent-id parent-seq child-id policy))

  (list-children [_ parent-id]
    (->> (p/list-children inner parent-id)
         (spec/check! ::spec/children)))

  #?@(:clj
      [java.lang.AutoCloseable
       (close [_]
         (when (instance? java.lang.AutoCloseable inner)
           (.close ^java.lang.AutoCloseable inner)))]))

(defn unwrap
  "Returns the concrete store `s` decorates, or `s` itself when it is not a
   CheckedStore. Use this when you need a backend-specific field that only the
   concrete record carries — e.g. a JdbcStore's :datasource — since those keys
   are not readable through the wrapper."
  [s]
  (if (instance? CheckedStore s) (:inner s) s))
