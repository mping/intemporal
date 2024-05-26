(ns intemporal.macros
  (:require [cljs.analyzer.api :as api]
            [intemporal.workflow :as w]
            [intemporal.workflow.internal :as i]
            [md5.core :as md5]
            [promesa.core :as p])
  #?(:clj  (:require [net.cgrand.macrovich :as macros])
     :cljs (:require-macros [net.cgrand.macrovich :as macros]
                            [intemporal.macros :refer [env-let defn-workflow stub-function stub-protocol]])))

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


;; utility function: since stubs return promises,
;; we want to use p/let
;; but p/let runs a thunk that is not env-aware so we fix that
;; actually, since js promises can't block, we need a new fn
;; to chain the value, hence we will always need to wrap any thunk
;; in a `(with-env...)
(defmacro env-let
  "Only useful for clojurescript. Wraps the `body` and each `bindings` val with a `(with-env current-env val)`), ensuring
  that if the binding value is function stub, its value will be unrapped
  with the same environment at the callsite.

  Uses `(promesa.core/let ...` under the hood so promises are resolved via
  a thunk with the current environment."
  [bindings & body]
  (let [env-sym   (gensym)
        wrap-vals (fn [i b]
                    (if (even? i)
                      b
                      `(w/with-env ~env-sym ~b)))
        wrapped   (map-indexed wrap-vals bindings)]

    `(let [~env-sym (w/current-env)]
       (p/let ~wrapped
         (w/with-env ~env-sym
           ~@body)))))

(defmacro defn-workflow
  "Defines a workflow. Workflows are functions that are resillient to crashes, as
  long as side-effects are run via activities."
  [sym argv & body]
  (let [wname (symbol (str sym "-"))
        sig   (md5/string->md5-hex (str body))]
    ;; TODO save signature
    `(do
       (defn- ~wname ~argv (do ~@body))
       (defn ~sym ~argv
         ;; workflow should be called within a with-env block:
         ;; (with-env {:store ..}
         ;;   (my-workflow ...
         (let [ref#  (:ref i/*env*)
               root# (:root i/*env*)
               fvar# #'~wname]
           (w/enqueue-and-wait i/*env* (i/create-workflow-task ref# root# (symbol fvar#) (macros/case :cljs fvar# :clj (var-get fvar#)) ~argv)))))))

(defmacro stub-function
  "Stubs `f`, wrapping it in an activity-aware function."
  [f]
  `(fn [& argv#]
     (let [ref#  (:ref i/*env*)
           root# (:root i/*env*)
           fvar# (var ~f)]
       ;; TODO we can use &form to determine eg checksum of activity
       (w/enqueue-and-wait i/*env* (i/create-activity-task ref# root# (symbol fvar#) (macros/case :cljs fvar# :clj (var-get fvar#)) argv#)))))

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
                        ref#      (:ref i/*env*)
                        root#     (:root i/*env*)]
                    (w/enqueue-and-wait i/*env* (i/create-proto-activity-task
                                                  (symbol ~pname)
                                                  ref#
                                                  root#
                                                  (symbol aid#)
                                                  ;aid# ;; >> doesn't work!
                                                  ;; protos are not reified like in clj https://clojurescript.org/about/differences#_protocols
                                                  ;; we create a "fake" fvar that can be invokeable just like the real thing
                                                  (fn [& impl+args#] (apply ~qname impl+args#))
                                                  [~@args]))))))))

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
                      ref#      (:ref i/*env*)
                      root#     (:root i/*env*)]
                  (w/enqueue-and-wait i/*env* (i/create-proto-activity-task
                                                (-> ~proto :var symbol)
                                                ref#
                                                root#
                                                (symbol aid#)
                                                (var-get (requiring-resolve aid#))
                                                [~@args])))))))))

(defmacro with-failure
  "Call `fcall` in a way that compensation always runs.
  - if `fcall` fails, `binding` will have the value `intemporal.activity/failure`.
  - if `fcall` succeeds, `binding` will have its return value

  (with-failure [v (book-hotel stub \"hotel\")]
    (cancel-hotel stub v n))
  "
  [[binding fcall] comp-fn]
  `(let [val# (atom :intemporal.activity/failure)]
     (w/add-compensation (fn [] (let [~binding @val#] (do ~comp-fn))))
     (reset! val# (do ~fcall))))