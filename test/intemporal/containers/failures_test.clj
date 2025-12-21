(ns ^:integration ^:fdb ^:sql intemporal.containers.failures-test
  (:require [clojure.string :as str]
            [clojure.test :refer [deftest is testing]]
            [clojure.tools.logging :as log]
            [intemporal.containers.start-runner]
            [intemporal.containers.execute-workflow])
  (:import (org.testcontainers.containers BindMode GenericContainer)
           (org.testcontainers.containers.startupcheck IndefiniteWaitOneShotStartupCheckStrategy)
           (org.testcontainers.containers.wait.strategy Wait)))

;; assumes docker-compose is running
(def default-network "intemporal_default")

(defn make-container ^GenericContainer
  ^GenericContainer [clj-main {:keys [aliases args env] :or {env     {"JDBC_URL" "jdbc:postgresql://postgresql:5432/root?user=root&password=root"}
                                                             aliases "dev:jdbc:fdb"}}]
  ;; docker run --name workflow --network=intemporal_default -ti --rm
  ;; -e JDBC_URL="jdbc:postgresql://postgresql:5432/root?user=root&password=root"
  ;; -v "$(pwd)":/tmp clojure:temurin-25-tools-deps-noble clj
  ;; -A:dev:jdbc:fdb -m intemporal.containers.execute-workflow postgres intemporal.containers.execute-workflow/test-workflow
  (let [cmd       (format "clj -A:%s -m %s %s" aliases clj-main (str/join " " args))
        img       "clojure:temurin-25-tools-deps-noble"
        container (doto (GenericContainer. img)
                    (.withEnv env)
                    (.withNetworkMode default-network)
                    (.withCommand cmd)
                    ;; will wait until the work is finished, but no exit
                    (.waitingFor (Wait/forLogMessage ".*Ready.*\n", 1))
                    (.withFileSystemBind (System/getProperty "user.dir") "/tmp" BindMode/READ_ONLY))]
    (log/infof "Creating container with image %s and command %s" img cmd)
    container))

(defn container-exit-code [^GenericContainer container]
  (-> (.inspectContainerCmd (.getDockerClient container) (.getContainerId container))
      (.exec)
      (.getState)
      (.getExitCodeLong)))

(defn var->ns [v]
  (:ns (meta v)))

(defn var->str [v]
  (str (symbol v)))

(deftest postgres-test
  (testing "failure via crash"
    (let [runner      (make-container (var->ns #'intemporal.containers.start-runner/-main) {:args ["postgres"]})
          workflow-fn #'intemporal.containers.execute-workflow/test-workflow
          workflow    (make-container (var->ns workflow-fn) {:args ["postgres" (var->str workflow-fn)]})]
      (try
        (.start runner)
        (.start workflow)

        (testing "containers eventually exit"
          (is (zero? (container-exit-code runner)))
          (is (zero? (container-exit-code workflow))))

        (finally
          (.stop runner)
          (.stop workflow))))))
