(ns intemporal.internal.macros
  #?(:cljs
     (:require-macros
      [net.cgrand.macrovich :as macros]))
  (:require
   #_{:clj-kondo/ignore [:unused-namespace]}
   [intemporal.internal.activity :as act]
   #_{:clj-kondo/ignore [:unused-namespace]}
   [intemporal.internal.context :as ctx]
   [intemporal.internal.workflow-registry :as wreg]
   #?(:clj [net.cgrand.macrovich :as macros])))

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
  "Like `defn`, but also registers the function in the workflow registry under its
   qualified name at load time, so it can be resumed by id (by the recovery worker
   or a restarted/other process) without a manual `register-workflow!` call.

   Accepts the same forms as `defn` (docstring, attr-map, multi-arity). Works in
   both Clojure and ClojureScript. Registration delegates to `register-workflow!`,
   so the name matches what `start-workflow` records and `resolve-workflow` looks
   up; re-registration (e.g. by a later `start-workflow`) is idempotent.

   Use it for workflow entry-points. Activities don't need it — they auto-register
   when stubbed."
  [name & fdecl]
  `(do
     (~'defn ~name ~@fdecl)
     (wreg/register-workflow! ~(macros/case :clj  `(var ~name)
                                            :cljs name))
     (var ~name)))

(defmacro stub-protocol
  "Stub a protocol definition. Opts are currently unused.
  Example: `(stub-protocol EventHandler {:some-opts true})`"
  [proto & opts]
  (macros/case
    :cljs
    #?(:clj
       (when cljs-available?
         (let [resolve-cljs (requiring-resolve 'cljs.analyzer.api/resolve)
            resolved     (resolve-cljs &env proto)
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
       :cljs nil)

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
