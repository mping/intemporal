(ns build
  (:require [clojure.tools.build.api :as b]))

(def class-dir "target/classes")
(def jar-dir "target/jar")
(def jar-file "target/intemporal.jar")

(defn compile-main [_]
  (b/delete {:path class-dir})
  ;; Copy source as well as compiled classes: .cljc/.cljs files are required by
  ;; downstream ClojureScript consumers, and resources contains store migrations.
  (b/copy-dir {:src-dirs ["src" "resources"]
               :target-dir class-dir})
  (b/compile-clj {:basis (b/create-basis {:aliases [:fdb :jdbc]})
                  :class-dir class-dir
                  :src-dirs ["src"]
                  :filter-nses ['intemporal]})
  nil)

(defn jar [opts]
  (compile-main opts)
  ;; Telemere intentionally generates implementation classes while its source
  ;; namespace loads. Shipping our AOT classes would make the JVM application
  ;; classloader resolve those generated dependency types too early. Keep AOT as
  ;; a build validation step and publish the portable source/resource artifact.
  (b/delete {:path jar-dir})
  (b/copy-dir {:src-dirs ["src" "resources"]
               :target-dir jar-dir})
  (b/jar {:class-dir jar-dir
          :jar-file jar-file})
  nil)
