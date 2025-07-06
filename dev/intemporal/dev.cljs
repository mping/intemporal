(ns intemporal.dev
  (:require [missionary.core :as m]))

(def nap (m/sleep 1000))

(defn log [p]
  (let [start (.getTime (js/Date.))]
    (-> (js/Promise. p)
        (.then (fn [r]
                 (let [end (- (.getTime (js/Date.)) start)]
                   (js/console.log "res " end "ms:" r)))
               (fn [e]
                 (let [end (- (.getTime (js/Date.)) start)]
                   (js/console.warn "err " end "ms: " e)))))))

(def slowmo-hello-world
  (m/sp (println "Hello")
        (m/? nap)
        (println "World")
        (m/? nap)
        (println "!")))

(log (m/join vector (m/sp (+ 1 1)) (m/sp (+ 1 1))))

