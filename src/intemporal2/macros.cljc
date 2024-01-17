(ns intemporal2.macros
  (:require [intemporal2.workflow :as w]
            [cljs.analyzer.api :as api])
  #?(:clj  (:require [net.cgrand.macrovich :as macros])
     :cljs (:require-macros [net.cgrand.macrovich :as macros]
                            [intemporal2.macros :refer [defn-workflow stub-function stub-protocol]])))

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
  [sym argv & body]
  (let [wname (symbol (str sym "-"))]
    ;; capture bindings to propagate it correctly for activities
    `(do
       (defn- ~wname ~argv (do ~@body))
       (defn ~sym ~argv
         ;; workflow should be called within a with-env block:
         ;; (with-env {:store ..}
         ;;   (my-workflow ...
         (let [ref#  (:ref w/*env*)
               root# (:root w/*env*)
               fvar# #'~wname]
           (w/enqueue-and-wait w/*env* (w/create-workflow-task ref# root# (symbol fvar#) (macros/case :cljs fvar# :clj (var-get fvar#)) ~argv)))))))

(defmacro stub-function [f]
  `(fn [& argv#]
     (let [ref#  (:ref w/*env*)
           root# (:root w/*env*)
           fvar# (var ~f)]
       (w/enqueue-and-wait w/*env* (w/create-activity-task ref# root# (symbol fvar#) (macros/case :cljs fvar# :clj (var-get fvar#)) argv#)))))

(defmacro stub-protocol
  "Stub a protocol definition. Opts are currently unused.
  Example: `(stub-protocol EventHandler {:idempotent true})`"
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
        `(reify ~proto
           ~@(for [[mname arglist invname qname pname] sig+args
                   :let [sname (symbol mname)
                         args  (rest (first arglist))]]
               ;; implement ~sname
               `(~sname [this# ~@args]
                  (let [aid#      '~qname
                        act-opts# ~(first opts)
                        ref#      (:ref w/*env*)
                        root#     (:root w/*env*)]
                    (w/enqueue-and-wait w/*env* (w/create-proto-activity-task
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
                      ref#      (:ref w/*env*)
                      root#     (:root w/*env*)]
                  (w/enqueue-and-wait w/*env* (w/create-proto-activity-task
                                                (-> ~proto :var symbol)
                                                ref#
                                                root#
                                                (symbol aid#)
                                                (var-get (requiring-resolve aid#))
                                                [~@args])))))))))
