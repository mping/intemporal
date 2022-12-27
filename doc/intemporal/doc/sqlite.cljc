(ns intemporal.doc.sqlite
  (:require [clojure.walk :as w]))

;; uses https://github.com/sql-js/sql.js

(defn run
  ([db stmt] (.run db stmt))
  ([db stmt argv] (.run db stmt (clj->js argv))))

(defn exec [db stmt]
  (.exec db stmt))

;; lets emulate jdbc api
(defn execute!
  [db stmt+params]
  (let [stmt   (first stmt+params)
        params (or (rest stmt+params) [])
        s      (.prepare db stmt)
        _      (.bind s (clj->js params))]
    (try
      (loop [res []]
        (if-let [_ (.step s)]
          (recur (conj res (-> (.getAsObject s)
                               (js->clj)
                               (w/keywordize-keys))))
          res))
      (finally
        (.free s)))))
(defn execute-one!
  [db stmt+params]
  (let [stmt (first stmt+params)
        params (or (rest stmt+params) [])
        s (.prepare db stmt)
        _ (.bind s (clj->js params))]
    (try
      (when-let [_ (.step s)]
        (-> (.getAsObject s)
            (js->clj)
            (w/keywordize-keys)))
      (finally
        (.free s)))))


(defn migrate [db scripts]
  (-> (js/Promise.all (clj->js (map #(.fetch js/window %) scripts)))
      (.then (fn [proms] (js/Promise.all (clj->js (map #(.text %) proms)))))
      (.then (fn [texts]
               (doseq [[resource script] (map vector scripts texts)]
                 (js/console.info "Running script" resource)
                 (run db script))))))

(defn bootstrap [SQL]
  (let [db (new (. SQL -Database))
        scripts ["resources/migrations/20220916152129-metadata.up.sql"
                 "resources/migrations/20220916152135-events.up.sql"]]
    (-> (migrate db scripts)
        (.then (fn [_] db)))))

(defn init [callback]
  (let [cfg (clj->js {"locateFile" (fn [f] (str "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/" f))})]
    (-> (.initSqlJs js/window cfg)
        (.then bootstrap)
        (.then callback))))
