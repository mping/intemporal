(ns intemporal.activity
  "Define activities through protocols.
  Protocols have advantage over functions because it's simpler to pass an object with eg: a db connection;
  With functions, some kind of closures are necessary wich hurts legibility.
  Example:

  ```
  (defprotocol HttpActivity
    (do-req [url] ...))

  (defrecord MyHttpActivity [my-conn-pool]
    p/HttpActivity
    (do-req [url] (http/get url {:pool my-conn-pool}))

  (e/register-protocol HttpActivity (->MyHttpActivity (get-pool))
  ```
  "
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [intemporal.utils.check :refer [check]]
            [intemporal.workflow :as w]
            [intemporal.error :refer [workflow-error]]))

;;;;
;; activity stubbing

(def ^:private registry (atom {}))

(defn- fn->fnid [f]
  (check (symbol? f) "'%s' should be a symbol" f)
  (check (bound? (resolve f)) "'%s' should be bounded" f)
  (let [resolved (resolve f)
        cname    (symbol resolved)]
    (str cname)))


(defn- resolve-protocol
  [sym]
  (let [proto (-> sym resolve var-get :on-interface)]
    (check (some? proto) "'%s': Activity should be implemented via a valid `defprotocol`, but is `nil`" sym)
    (check (.isInterface ^Class proto) " '%s': Activity should be implemented via a valid `defprotocol`, but it is not an interface" proto)
    proto))

(defn- satisfies-via-meta? [proto object]
  (when (:extend-via-metadata proto)
    (let [signames  (->> proto :sigs keys (map name) (into #{}))
          metanames (into #{} (for [[k _] (meta object)]
                                (name k)))]
      (set/subset? signames metanames))))

(defn- get-registered-protocol
  "Gets the registered class protocol object"
  [klass]
  (get @registry klass))

(defn register-protocol
  "Registers an activity implementation for `proto` via `object`"
  [proto object]
  (let [klass (:on-interface proto)]
    (check (some? klass) "'%s' Should be a protocol" proto)
    (check (.isInterface ^Class klass) "'%s' Should be a protocol")
    (check (or (satisfies-via-meta? proto object)
             (satisfies? proto object)) "Object '%s' should implement protocol '%s' but doesn't" object klass)
    (check (or (nil? (get-registered-protocol klass))
             (= object (get-registered-protocol klass))) "'%s': An implemention for is already registered for the protocol" klass)

    ;; TODO read fn metadatas if exist
    (swap! registry assoc (.getCanonicalName klass) object)
    nil))

(defn get-protocol-impl
  "Gets an implementation for `proto`"
  [^Class proto]
  (let [impl (get @registry (.getCanonicalName proto))]
    (check (some? impl)
      "No activity registered for '%s', known protocols: %s" proto (type proto) (keys @registry))
    impl))

(defmacro with-traced-activity
  "Traces activity with given `aid` by executing `body`, persisting events for ::invoke, ::success or ::failure"
  [aid args body]
  `(try
     ;; mark activity pending
     (if (w/next-event-matches? ~aid ::invoke)
       (:payload (w/advance-history-cursor))
       (do
         (w/save-activity-event ~aid ::invoke (vec ~args))
         (vec ~args)))

     (let [result# (cond
                     (w/next-event-matches? ~aid ::success)
                     (:payload (w/advance-history-cursor))

                     (w/next-event-matches? ~aid ::failure)
                     (throw (:payload (w/advance-history-cursor)))

                     :else
                     (do
                       (let [b# ~body]
                         (w/save-activity-event ~aid ::success b#) ;; can call ~body twice!
                         b#)))]
       result#)
     ;; mark activity success, store result
     (catch Exception e#
       ;; save error, mark activity failed
       (throw
         (if (w/next-event-matches? ~aid ::failure)
           (:payload (w/advance-history-cursor))
           (do
             (w/save-activity-event ~aid ::failure e#)
             e#))))))

(defn- get-registered-function
  "Gets the registered function for `fid`"
  [fid]
  (get @registry fid))

(defmacro register-function
  "Registers a function implementation for `f`"
  [f]
  (let [fid (fn->fnid f)]
    (swap! registry assoc fid f)
    ;; don't return the swap! result to prevent print-dup issues:
    ;; Syntax error compiling fn* at (src/intemporal/example.clj:40:1).
    ;; Can't embed object in code, maybe print-dup not defined: intemporal.example$reify__10664@32878806
    true))

(defmacro stub-function
  "Stubs and registers a single function as an activity"
  [f]
  (let [fid      (fn->fnid f)
        resolved (resolve f)
        qname    (subs (str resolved) 2)                    ;; poor mans' removing the var #'
        fname    (gensym (str "stub-" (or (:name (meta resolved)) "fn") "-"))]

    (check (or
             (nil? (get-registered-function fid))
             (= (get-registered-function fid) f))
      "Stubbed function '%s' doesn't match registered function '%s'" (get-registered-function fid) f)
    (swap! registry assoc fid f)

    ;; return the proxy fn
    `(fn ~fname [& args#]
       (let [aid# (symbol ~qname)]
         (with-traced-activity aid# args#
           (apply ~f args#))))))

(defmacro stub-protocol
  "Requires a stub for activity `proto`. To be used in worfklows"
  [proto]
  (check (symbol? proto) "'%s': Protocol should be a symbol, use `(:require [...])` or a namespace-local protocol for the definition" proto)
  (let [resolved     (resolve-protocol proto)
        proto-var    (var-get (resolve proto))
        curr-ns      (name (ns-name *ns*))
        proto-ns     (namespace (symbol (subs (str (:var proto-var)) 2)))
        in-proto-ns? (= curr-ns proto-ns)
        sig+args     (-> (for [[sig val] (:sigs proto-var)
                               :let [arglist (:arglists val)
                                     qname   (if in-proto-ns?
                                               (name sig)
                                               (str (namespace proto) "/" (name sig)))]]
                           [(name sig) arglist (symbol qname)])
                       (doall))]
    `(reify ~proto
       ~@(for [[mname arglist qname] sig+args
               :let [sname (symbol mname)
                     args  (rest (first arglist))]]
           ;; implement ~sname
           `(~sname [this# ~@args]
             (let [impl# (get-protocol-impl ~resolved)
                   aid#  '~qname]
               (with-traced-activity aid# [~@args]
                 (~qname impl# ~@args))))))))
