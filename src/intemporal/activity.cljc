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
  ```
  "
  (:require [intemporal.utils.check :refer [check]]
            [intemporal.workflow :as w]
            [taoensso.timbre :as log :refer [log]])
  #?(:clj  (:require [net.cgrand.macrovich :as macros])
     :cljs (:require-macros [net.cgrand.macrovich :as macros]
                            [intemporal.activity :refer [with-traced-activity
                                                         stub-function stub-protocol]])))


(def cljs-available?
  #?(:cljs
     false
     :clj
     (try
       (require '[cljs.analyzer])
       ;; Ensure clojurescript is recent enough:
       (-> 'cljs.analyzer/var-meta resolve boolean)
       (catch Exception _ false))))

(defmacro with-traced-activity
  "Traces activity with given `aid` by executing `body`, persisting events for ::invoke, ::success or ::failure"
  ([aid args body]
   `(with-traced-activity ~aid ~args {} ~body))
  ([aid args opts body]
   `(try
      ;; mark activity pending
      (if (w/event-matches? (w/next-event) ~aid ::invoke)
        (:payload (w/advance-history-cursor))
        (do
          (w/save-activity-event ~aid ::invoke (vec ~args))
          (vec ~args)))

      (let [{:keys [~'idempotent]} ~opts
            curr-evt# (w/next-event)
            result#   (cond
                        ;; we're replaying
                        (w/event-matches? curr-evt# ~aid ::success)
                        (:payload (w/advance-history-cursor))

                        ;; failed but can't retry
                        (w/event-matches? curr-evt# ~aid ::failure)
                        (if-not ~'idempotent
                          (throw (:payload (w/advance-history-cursor)))
                          (do
                            (w/delete-history-forward)
                            (let [b# ~body]
                              ;; can jump to catch block
                              (w/save-activity-event ~aid ::success b#)
                              b#)))

                        ;; TODO handle divergence
                        :else
                        (do
                          (let [b# ~body]
                            ;; can jump to catch block if it throws
                            (w/save-activity-event ~aid ::success b#)
                            b#)))]
        result#)
      ;; mark activity success, store result
      (catch ~(macros/case :clj 'Exception :cljs 'js/Error) e#
        ;; save error, mark activity failed
        (throw
          (cond
            #_#_(w/event-matches? (w/next-event) ~aid ::failure)
                (:payload (w/advance-history-cursor))

            ;; are we catching because we threw something expected?
            (w/event-matches? (w/current-event) ~aid ::failure)
            e#

            :else
            (do
              (w/save-activity-event ~aid ::failure e#)
              e#)))))))

(defmacro stub-function
  "Stubs and registers a single function as an activity"
  [f & opts]
  (let [fid      (macros/case
                   :cljs
                   (when cljs-available?
                     (let [analyzer (find-ns 'cljs.analyzer)
                           resolved ((ns-resolve analyzer 'resolve-var) &env f)]
                       (-> resolved :name str)))

                   :clj
                   (let [resolved (resolve f)
                         cname    (symbol resolved)]
                     (str cname)))
        [act-opts] opts]

    ;; return the proxy fn
    `(fn [& args#]
       (let [aid# (symbol ~fid)]
         (with-traced-activity aid# args# ~act-opts
           (apply ~f args#))))))

(defmacro stub-protocol
  "Requires a stub for activity `proto`. To be used in worfklows"
  [proto impl & opts]
  (macros/case
    :cljs
    (when cljs-available?
      (let [analyzer (find-ns 'cljs.analyzer)
            resolved ((ns-resolve analyzer 'resolve-var) &env proto)
            ;resolved (cljs.analyzer/resolve-var &env proto) ;;compiler can't handle it
            curr-ns      (:name (:ns &env))
            proto-ns     (:ns resolved)
            in-proto-ns? (= curr-ns proto-ns)
            sig+args     (-> (for [[sig val] (:sigs resolved)
                                   :let [arglist (:arglists val)
                                         qname   (str (name proto-ns) "/" (name sig))
                                         invname (if in-proto-ns?
                                                   (name sig)
                                                   (str (namespace proto) "/" (name sig)))]]
                               [(name sig) arglist (symbol invname) (symbol qname)])
                           (doall))]
        `(reify ~proto
           ~@(for [[mname arglist invname qname] sig+args
                   :let [sname (symbol mname)
                         args  (rest (first arglist))]]
               ;; implement ~sname
               `(~sname [this# ~@args]
                 (let [impl#     ~impl                      ;(get-protocol-impl ~proto)
                       aid#      '~qname
                       act-opts# ~(first opts)]
                   (with-traced-activity aid# [~@args] act-opts#
                     (~invname impl# ~@args))))))))
    :clj
    (do
      (check (symbol? proto) "'%s': Protocol should be a symbol, use `(:require [...])` or a namespace-local protocol for the definition" proto)
      (let [proto-var    (var-get (resolve proto))
            curr-ns      (name (ns-name *ns*))
            proto-ns     (namespace (symbol (subs (str (:var proto-var)) 2)))
            in-proto-ns? (= curr-ns proto-ns)
            sig+args     (-> (for [[sig val] (:sigs proto-var)
                                   :let [arglist (:arglists val)
                                         qname   (str (name proto-ns) "/" (name sig))
                                         invname (if in-proto-ns?
                                                   (name sig)
                                                   (str (namespace proto) "/" (name sig)))]]
                               [(name sig) arglist (symbol invname) (symbol qname)])
                           (doall))]

        `(reify ~proto
           ~@(for [[mname arglist invname qname] sig+args
                   :let [sname (symbol mname)
                         args  (rest (first arglist))]]
               ;; implement ~sname
               `(~sname [this# ~@args]
                 (let [impl#     ~impl
                       aid#      '~qname
                       act-opts# ~(first opts)]
                   (with-traced-activity aid# [~@args] act-opts#
                     (~invname impl# ~@args))))))))))
