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

(defn register-protocol
  "Registers an activity implementation for `proto` via `object`"
  [proto object]
  (let [protocol (:on-interface proto)]
    (check (some? protocol) "'%s' Should be a protocol" proto)
    (check (.isInterface ^Class protocol) "'%s' Should be a protocol")
    (check (instance? protocol object) "'%s' Should implement `proto` but doesn't" object)
    (check (or (nil? (get @registry protocol))
             (= object (get @registry protocol))) "'%s': An implemention for is already registered for the protocol" protocol)

    (swap! registry assoc (.getCanonicalName protocol) object)
    nil))

(defmacro register-function
  "Registers a function implementation for `f`"
  [f]
  (let [cname (fn->fnid f)]
    (swap! registry assoc cname f)
    ;; don't return the swap! result to prevent print-dup issues
    ;; Syntax error compiling fn* at (src/intemporal/example.clj:40:1).
    ;; Can't embed object in code, maybe print-dup not defined: intemporal.example$reify__10664@32878806
    true))

(defn get-protocol-impl
  "Gets an implementation for `proto`"
  [^Class proto]
  (let [impl (get @registry (.getCanonicalName proto))]
    (check (some? impl) "No activity registered for '%s', known protocols: %s" proto (type proto) (keys @registry))
    impl))

(defn- qualify
  "Maps a Class and a name to a namespace-like string (eg: \"my.ns\""
  [klass n]
  (-> (str klass)
    (subs 0 (.lastIndexOf (str klass) "."))
    (symbol (str n))))

(defn- class->var
  "Maps a Class to a var-like string (eg \"#'my.ns/Class)\""
  [^Class klass]
  (let [parts (str/split (.getCanonicalName klass) #"\.")]
    (str "#'" (str/join "." (butlast parts)) "/" (last parts))))

(defmacro with-traced-activity
  "Traces activity with given `aid` by executing `body`, persisting events for ::invoke, ::success or ::failure"
  [aid args body]
  `(let [wid#   (w/current-workflow-id)
         rid#   (w/current-workflow-runid)]
     (try
       ;; mark activity pending
       (w/save-activity-event ~aid ::invoke (vec ~args))

       (let [result# ~body]
         (w/save-activity-event ~aid ::success result#)
         result#)
       ;; mark activity success, store result
       (catch Exception e#
         ;; save error, mark activity failed
         (w/save-activity-event ~aid ::failure e#)
         (throw (workflow-error {:workflow-id wid# :run-id rid# :activity-id ~aid} e#))))))

(defmacro stub-function
  "Stubs and registers a single function as an activity"
  [f]
  (let [fid      (fn->fnid f)
        resolved (resolve f)
        qname    (subs (str resolved) 2)                    ;; poor mans' removing the var #'
        fname    (gensym (str "stub-" (or (:name (meta resolved)) "fn") "-"))]

    (check (or
             (nil? (get @registry fid))
             (= (get @registry fid) f))
      "Stubbed function '%s' doesn't match registered function '%s'" (get @registry fid) f)
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
  (let [resolved  (resolve-protocol proto)
        proto-var (var-get (eval (read-string (class->var resolved))))
        on-klass  (:on proto-var)
        sig+args  (for [[sig val] (:sigs proto-var)
                        :let [arglist (:arglists val)]]
                    [(name sig) arglist (qualify on-klass (name sig))])]

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
