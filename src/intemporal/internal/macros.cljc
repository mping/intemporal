(ns intemporal.internal.macros
  (:require [cljs.analyzer.api :as api]
            [intemporal.internal.context :as ctx]
            [intemporal.internal.activity :as act])
  #?(:clj  (:require [net.cgrand.macrovich :as macros])
     :cljs (:require-macros [net.cgrand.macrovich :as macros])))

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
                             (doall))

            protocols-sym (gensym "protocols")
            registry-sym (gensym "registry")
            impl-sym     (gensym "impl")]
        `(let [~protocols-sym (:protocols (ctx/current-context))
               ~registry-sym (:registry (ctx/current-context))]
           ;; Register protocol methods with impl wrapper before stub can register raw dispatch fns
           ~@(for [[mname arglist invname qname pname] sig+args]
               `(when-let [~impl-sym (get ~protocols-sym ~proto)]
                  (act/register-activity!
                    ~registry-sym
                    (fn [& args#] (apply ~invname ~impl-sym args#))
                    :name ~(str qname))))
           (reify ~proto
             ~@(for [[mname arglist invname qname pname] sig+args
                     :let [sname (symbol mname)
                           args  (rest (first arglist))]]
                 ;; implement ~sname
                 `(~sname [this# ~@args]
                    (let [f# (intemporal.core/stub (var ~qname))]
                      (f# ~@args))))))))

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
                (let [f# (intemporal.core/stub (var ~qname))]
                  (f# ~@args))))))))


;;;;
;; ctx-aware macros