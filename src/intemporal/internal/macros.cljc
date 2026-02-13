(ns intemporal.internal.macros
  (:require [cljs.analyzer.api :as api]
            [promesa.core :as p])
  ;[md5.core :as md5])
  #?(:clj  (:require [intemporal.internal.context :as ctx]
                     [net.cgrand.macrovich :as macros])
     ;[intemporal.workflow.internal :refer [trace! trace-async! add-event!]])
     :cljs (:require-macros [net.cgrand.macrovich :as macros])))
;[intemporal.workflow.internal :refer [trace! trace-async! add-event!]]
;[intemporal.macros :refer [env-let defn-workflow stub-function stub-protocol]])))

(def cljs-available?
  #?(:cljs
     false
     :clj
     (try
       (require '[cljs.analyzer])
       ;; Ensure clojurescript is recent enough:
       (-> 'cljs.analyzer/var-meta resolve boolean)
       (catch Exception _ false))))

;;;;
;; userland

(defmacro defn-workflow
  "Defines a workflow. Workflows are functions that are resillient to crashes, as
  long as side-effects are run via activities."
  [sym argv & body]
  (let [wname (symbol (str sym "-"))]
    ;sig   (md5/string->md5-hex (str body))]
    ;; TODO save signature
    `(do
       (defn- ~wname ~argv (do ~@body))
       (defn ~sym ~argv
         ;; TODO: fixme: task id generator must be deterministic for a given workflow
         (let [id#   (or (random-uuid))
               fvar# #'~wname
               ;; #'my-workflown-fn- => my-workflow-fn
               orig# (subs (str fvar#) 2 (dec (count (str fvar#))))])))))

(defmacro stub-function
  "Stubs `f`, wrapping it in an activity-aware function."
  [f]
  `(fn [& argv#]
     (let [fvar# (var ~f)]
       ;; TODO we can use &form to determine eg checksum of activity

       ;; prepare call
       (let []))))

(defmacro stub-protocol
  "Stub a protocol definition. Opts are currently unused.
  Example: `(stub-protocol EventHandler {:some-opts true})`"
  [proto & opts]
  (macros/case
    :cljs
    (when cljs-available?
      (let [resolved     (api/resolve &env proto)
            curr-ns      (:name (:ns &env))
            proto-ns     (:ns resolved)
            in-proto-ns? (= curr-ns proto-ns)
            sig+args     (-> (for [[sig val] (:sigs resolved)
                                   :let [arglist (:arglists val)
                                         qname   (str (name proto-ns) "/" (name sig))
                                         invname (if in-proto-ns?
                                                   (name sig)
                                                   (str (namespace proto) "/" (name sig)))]]
                               [(name sig) arglist (symbol invname) (symbol qname) (str (:name resolved))])
                             (doall))]
        ;; TODO we can use &form to determine eg checksum of proto def
        `(reify ~proto
           ~@(for [[mname arglist invname qname pname] sig+args
                   :let [sname (symbol mname)
                         args  (rest (first arglist))]]
               ;; implement ~sname
               `(~sname [this# ~@args]
                  (let [aid#      '~qname
                        act-opts# ~(first opts)
                        sym#      (symbol aid#)
                        ;aid# ;; >> doesn't work!
                        ;; protos are not reified like in clj https://clojurescript.org/about/differences#_protocols
                        ;; we create a "fake" fvar that can be invokeable just like the real thing
                        f#        (fn [& impl+args#] (apply ~qname impl+args#))
                        args#     [~@args]]))))))

    :clj
    #_{:clj-kondo/ignore [:unresolved-symbol]}
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
                (let [aid#      '~qname
                      act-opts# ~(first opts)
                      sym#      (symbol aid#)
                      f#        (var-get (requiring-resolve aid#))
                      args#     [~@args]])))))))
