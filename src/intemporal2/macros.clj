(ns intemporal2.macros
  (:require [intemporal2.workflow :as w]))

(defmacro with-env [m & body]
  `(w/with-env ~m ~@body))

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
           (w/enqueue-and-wait w/*env* (w/create-workflow-task ref# root# (symbol fvar#) (var-get fvar#) ~argv)))))))

(defmacro stub-function [f]
  (let [fvar (resolve f)]
    `(fn [& argv#]
       (let [ref#  (:ref w/*env*)
             root# (:root w/*env*)]
         (w/enqueue-and-wait w/*env* (w/create-activity-task ref# root# (symbol ~fvar) (var-get ~fvar) argv#))))))


(defmacro stub-protocol
  "Requires a stub for activity `proto`. To be used in worfklows"
  [proto & opts]
  (assert (symbol? proto) (format "'%s': Protocol should be a symbol, use `(:require [...])` or a namespace-local protocol for the definition" proto))
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
                    act-opts# ~(first opts)]
                ;; TODO check if (-> ~proto :var symbol) exists in (:protos *env*)
                (let [ref#  (:ref w/*env*)
                      root# (:root w/*env*)]
                  ;; TODO (var-get (requiring-resolve aid#))
                  (w/enqueue-and-wait w/*env* (w/create-proto-activity-task (-> ~proto :var symbol) ref# root# (symbol aid#) (var-get (requiring-resolve aid#)) [~@args])))))))))
