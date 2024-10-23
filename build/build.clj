(ns build
  (:require [clojure.tools.build.api :as b]
            [clojure.pprint :as pprint]))

(def base-nses ['intemporal.workflow
                'intemporal.store.internal
                'intemporal.store.foundationdb
                'intemporal.store
                'intemporal.macros
                'intemporal.workflow.internal
                'intemporal.store.jdbc])

(def dev-nses ['intemporal.demo-parallelism
               'intemporal.demo-recovery
               'intemporal.demo-saga
               'intemporal.demo-vthread-recovery
               'intemporal.demo-workflow])

;; clj -T:build compile-main
(defn compile-main [opts]
  (b/delete {:path "target/classes"})
  (let [basis (b/create-basis {:aliases [:fdb :jdbc :doc :cljs :dev]})]
    ; (pprint/pprint basis)
    (b/compile-clj {:basis       basis
                    :class-dir   "target/classes"
                    :filter-nses ['intemporal]
                    :ns-compile base-nses})))

(defn compile-dev [opts]
  (b/delete {:path "target/dev-classes"})
  (let [basis (b/create-basis {:aliases [:fdb :jdbc :doc :cljs :dev]})]
    (b/compile-clj {:basis       basis
                    :class-dir   "target/dev-classes"
                    :filter-nses ['intemporal]
                    :ns-compile dev-nses})))
(defn jar [opts]
  (compile-main opts)
  (b/jar {:class-dir "target/classes"
          :jar-file "target/intemporal.jar"}))

