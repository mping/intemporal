(defproject intemporal "0.1.0-SNAPSHOT"
  :description "workflow engine"
  :url "https://github.com/mping/intemporal"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url  "https://www.eclipse.org/legal/epl-2.0/"}
  :plugins [[lein-cloverage "1.2.3"]
            [migratus-lein "0.7.3"]]
  :migratus {:store :database
             :migration-dir "migrations"
             :db {:connection-uri "jdbc:sqlite:test/sqlstore.db"}}
  :cloverage {:ns-exclude-regex [#"intemporal.example.*"]}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/tools.logging "1.2.4"]
                 ;; sql store
                 [com.taoensso/nippy "3.2.0"]
                 [com.github.seancorfield/next.jdbc "1.3.828"]
                 [org.xerial/sqlite-jdbc "3.39.3.0"]
                 [migratus "1.4.4"]]
  :java-source-paths ["java"]
  :profiles {:dev {:source-paths ["dev"]
                   :dependencies [[ch.qos.logback/logback-classic "1.4.0"]
                                  [tortue/spy "2.13.0"]]}}
  :aliases {"coverage" ["with-profile" "+test," "cloverage"]}
  :repl-options {:init-ns intemporal.workflow})
