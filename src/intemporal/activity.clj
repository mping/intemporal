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
            [intemporal.store :as s]))

;;;;
;; activity stubbing

(def ^:private registry (atom {}))

(defn- resolve-protocol
  [sym]
  (let [proto (-> sym resolve var-get :on-interface)]
    (check (some? proto) "Activity should be implemented via a valid `defprotocol`, but is `nil`")
    (check (.isInterface ^Class proto) "activity should be implemented via a valid `defprotocol`, but it is not an interface: '%s'" proto)
    proto))

(defn register-protocol
  "Registers an activity implementation for `proto` via `object`"
  [proto object]
  (let [protocol (:on-interface proto)]
    (check (some? protocol) "'%s' Should be a protocol" proto)
    (check (.isInterface ^Class protocol) "'%s' Should be a protocol")
    (check (instance? protocol object) "%s should implement `proto` but doesn't" object)
    (check (or (nil? (get @registry protocol))
             (= object (get @registry protocol))) "An implemention is already registered for the `proto`")

    (swap! registry assoc (.getCanonicalName protocol) object)))

(defn get-impl
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

(defmacro stub-function
  "Stubs and registers a single function as an activity"
  [f]
  (check (symbol? f) "'%s' should be a symbol" f)
  (check (bound? (resolve f)) "'%s' should be bounded" f)
  (let [resolved (resolve f)
        cname    (symbol resolved)
        fname    (gensym (str "stub-" (or (:name (meta resolved)) "fn") "-"))
        qname    (subs (str resolved) 2)] ;; poor man quoting
    (swap! registry assoc (str cname) f)
    ;; return the proxy fn
    `(fn ~fname [& args#]
       (let [wid#  (w/current-workflow-id)
             rid#  (w/current-workflow-runid)
             aid#  ~qname]
         (try
           ;; mark activity pending
           (s/save-activity-event s/memstore rid# ::invoke wid# aid# args#)
           (let [result# (apply ~f args#)]
             ;; save result, mark activity success
             (try
               result#
               (finally
                 (s/save-activity-event s/memstore rid# ::success wid# aid# result#))))
           ;; mark activity success, store result
           (catch Exception e#
             ;; save error, mark activity failed
             (s/save-activity-event s/memstore rid# ::failure wid# aid# e#)
             (throw (ex-info {:run-id rid# :workflow-id wid# :activity-id aid#} e#))))))))

(defmacro stub-protocol
  "Requires a stub for activity `proto`. To be used in worfklows"
  [proto]
  (check (symbol? proto) "Protocol should be a symbol, use `(:require [...])` or a namespace-local protocol for the definition")
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
           `(~sname [this# ~@args]
             (let [real# (get-impl ~resolved)
                   wid#  (w/current-workflow-id)
                   rid#  (w/current-workflow-runid)
                   aid#  '~qname]
               (try
                 ;; mark activity pending
                 (s/save-activity-event s/memstore rid# ::invoke wid# aid# [~@args])
                 (let [result# (~qname real# ~@args)]
                   ;; save result, mark activity success
                   (try
                     result#
                     (finally
                       (s/save-activity-event s/memstore rid# ::success wid# aid# result#))))
                 ;; mark activity success, store result
                 (catch Exception e#
                   ;; save error, mark activity failed
                   (s/save-activity-event s/memstore rid# ::failure wid# aid# e#)
                   (throw (ex-info {:run-id rid# :workflow-id wid# :activity-id aid#} e#))))))))))
