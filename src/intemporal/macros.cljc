(ns intemporal.macros
  (:require [cljs.analyzer.api :as api]
            [intemporal.workflow :as w]
            [intemporal.workflow.internal :as i]
            [md5.core :as md5]
            [promesa.core :as p]
            [taoensso.telemere :as t])
  #?(:clj  (:require [net.cgrand.macrovich :as macros]
                     [intemporal.telemetry :refer [trace!]]
                     [steffan-westcott.clj-otel.context :as otctx])
     :cljs (:require-macros [net.cgrand.macrovich :as macros]
                            [intemporal.telemetry :refer [trace!]]
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

(defmacro vthread
  "Runs `body` within a virtual thread, returning a promise."
  [& body]
  `(binding [i/*env* (assoc i/*env* :vthread? true)]
     ~@body))

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
         ;; TODO: fixme: task id generator must be deterministic for a given workflow
         (assert (some? (:store i/*env*)) "Environment does not have a `:store`, did you call `\n(with-env {:store ..}\n\t(my-workflow ...` ?")
         (let [id#   (or (:id i/*env*) (i/random-id))
               fvar# #'~wname
               orig# (subs (str fvar#) 2 (dec (count (str fvar#))))]
           (trace! {:name (format "workflow: %s" orig#) :attributes {:id id#}}
             (let [ref#  (:ref i/*env*)
                   root# (:root i/*env*)
                   ;; id can be passed by env if we're dequeuing a task from store
                   ctx#   (otctx/->headers)]
               (let [task# (i/with-env-internal (merge i/*env* {:telemetry-context ctx#})
                             (i/create-workflow-task ref# root# (symbol fvar#) (macros/case :cljs fvar# :clj (var-get fvar#)) ~argv id#))]
                 (t/log! {:level :debug :_data {:env i/*env* :task task#}} ["Invoking task with id" (:id task#)])

                 (i/with-env-internal (merge i/*env* {:telemetry-context ctx#})
                   (w/enqueue-and-wait i/*env* task#))))))))))


(defmacro stub-function
  "Stubs `f`, wrapping it in an activity-aware function."
  [f]
  `(fn [& argv#]
     (assert (some? (:next-id i/*env*)) "No next-id function, are you inside `defn-workflow`?")
     (let [ref#  (:ref i/*env*)
           root# (:root i/*env*)
           fvar# (var ~f)]
       ;; TODO we can use &form to determine eg checksum of activity

       ;; prepare call
       (let [store#  (:store i/*env*)
             protos# (:protos i/*env*)
             id#     ((:next-id i/*env*))
             ref#    nil                                    ;; no enqueued task => no ref
             task#   (i/create-activity-task ref# root# (symbol fvar#) (macros/case :cljs fvar# :clj (var-get fvar#)) argv# id#)]

         ;; an embedded workflow engine doesn't need to have a task per invocation
         (t/log! {:level :debug :_data {:env i/*env* :task task#}} ["Invoking task with id " id#])
         (trace! {:name (format "activity: %s" (symbol fvar#)) :attributes {:id id#}}
           (let [res# (i/resume-task i/*env* store# protos# task#)]
             (macros/case
               :cljs res#
               :clj (deref res#))))))))
;(w/enqueue-and-wait i/*env* task#)))))

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

                    ;; prepare call
                    (let [store#  (:store i/*env*)
                          protos# (:protos i/*env*)
                          id#     ((:next-id i/*env*))
                          ref#    nil                       ;; no task => no ref
                          task#   (i/create-proto-activity-task
                                    (symbol ~pname)
                                    ref#
                                    root#
                                    (symbol aid#)
                                    ;aid# ;; >> doesn't work!
                                    ;; protos are not reified like in clj https://clojurescript.org/about/differences#_protocols
                                    ;; we create a "fake" fvar that can be invokeable just like the real thing
                                    (fn [& impl+args#] (apply ~qname impl+args#))
                                    [~@args]
                                    id#)]

                      (t/log! {:level :debug :_data {:env i/*env* :task task#}} ["Invoking task with id" id#])
                      (i/resume-task i/*env* store# protos# task#))))))))
    ;(w/enqueue-and-wait i/*env* task#))))))))

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

                  ;; prepare call
                  (let [store#  (:store i/*env*)
                        protos# (:protos i/*env*)
                        id#     ((:next-id i/*env*))
                        ref#    nil                         ;; no task => no ref
                        task#   (i/create-proto-activity-task
                                  (-> ~proto :var symbol)
                                  ref#
                                  root#
                                  (symbol aid#)
                                  (var-get (requiring-resolve aid#))
                                  [~@args]
                                  id#)]

                    (t/log! {:level :debug :_data {:env i/*env* :task task#}} ["Invoking task with id" id#])
                    (trace! {:name (format "activity: %s" aid#) :attributes {:id id#}}
                      @(i/resume-task i/*env* store# protos# task#))))))))))
;(w/enqueue-and-wait i/*env* task#)))))))))

(defmacro with-failure
  "Runs `fcall`, ensuring that if it fails, compensation will always run.
  - if `fcall` fails, `binding` will have the value `intemporal.activity/failure`.
  - if `fcall` succeeds, but compensation is invoked later (eg other activity failure), `binding` will have its return value

  (with-failure [v (book-hotel stub \"hotel\")]
    (cancel-hotel stub v n))
  "
  [[binding fcall] comp-fn]
  `(let [val# (atom :intemporal.activity/failure)]
     (w/add-compensation (fn [] (let [~binding @val#] (do ~comp-fn))))
     (reset! val# (do ~fcall))))