(ns ^:integration ^:fdb ^:sql intemporal.containers.execute-workflow
  (:gen-class)
  (:require [clojure.string :as str]
            [clojure.tools.logging :as log]
            [intemporal.workflow :as w]
            [intemporal.macros :refer [stub-function defn-workflow]]
            [intemporal.containers.start-runner :as runner]))

(defn foo [ a]
  (Thread/sleep (long (rand-int 100)))
  [:fun a])

(defn-workflow test-workflow []
  (let [pr  (stub-function foo)
        prr (pr :pr)]
    prr))

;; serves as an entrypoint for a docker container that can be killed
;; some other container will have to execute the poller/runner
(defn -main [& args]
  (let [store-type   (-> args first keyword)
        workflow-sym (or (-> args second) 'my-workflow)
        workflow-fn  (requiring-resolve (symbol (str/trim workflow-sym)))
        store        (get runner/stores store-type)]
    (prn args)
    (when (nil? store)
      (throw (ex-info (format "Unknown store type: %s" store-type) {:store-type store-type})))

    (when (nil? workflow-fn)
      (throw (ex-info (format "Unknown worfklow fn : %s" workflow-sym) {:workflow workflow-sym})))


    (w/with-env {:store @store}
      (try
        (let [res (workflow-fn)]
          (println "Response: " res))
        (finally
          (log/info "Ready"))))))

(comment
  ;; clj -A:dev:jdbc:fdb -m intemporal.containers.execute-workflow postgres intemporal.containers.execute-workflow/test-workflow
  (-main "postgres" "intemporal.containers.execute-workflow/test-workflow"))