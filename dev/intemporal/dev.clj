(ns intemporal.dev
  (:require [missionary.core :as m]))

(def nap (m/sleep 1000))

(defn log [p]
  (-> (js/Promise. p)
      (.then (fn [r] (js/console.log "res" r))
             (fn [e] (js/console.warn "err" e)))))

(def slowmo-hello-world
  (m/sp (println "Hello")
        (m/? nap)
        (println "World")
        (m/? nap)
        (println "!")))

(time (m/? (m/join vector (m/via m/blk (+ 1 1)) (m/via m/blk (+ 1 1)))))

