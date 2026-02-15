(ns intemporal.doc
  (:require [intemporal.core :as intemporal]
            [promesa.core :as p]
            [hiccups.runtime :as hiccupsrt])
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [intemporal.core :refer [stub-protocol]]
                   [intemporal.internal.context :refer [blet bthen]]))
;;;;
;; main code

(defn nested-fn [a]
  [a :nested])

(defn activity-fn [a]
  1
  #_(let [f (intemporal/stub nested-fn)]
     (f :sub)))

(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a] (println "record was called:" ) [a :child]))

(defn my-workflow [i]
  (let [sf (intemporal/stub activity-fn)
        pr (intemporal/stub-protocol MyActivities)

        sres (sf [1])
        pres (foo pr :X)]
    (blet [v1 sres
            v2 pres]
      (conj [:root]
            v1
            v2))))

;;;;
;; workflow registration

(defn set-html! [id html]
  (-> js/document
      (.getElementById id)
      (.-innerHTML)
      (set! html)))

(defn set-results! [html]
  (set-html! "results" html))

(defn render-table! [id rows]
  (let [header (keys (first rows))
        thead [:thead
               [:tr
                (for [h header] [:td h])]]
        tbody [:tbody
               (for [r rows]
                 [:tr {:class (name (get r :type))}
                  (for [h header]
                    [:td (pr-str (get r h))])])]
        tbl   (html
                [:table {:role "grid"}
                 thead
                 tbody])]
    (set-html! id tbl)))

(defn render-tables! [engine wf-id]
  (let [history (intemporal/get-workflow-history (:store engine) wf-id)]
    #_#_#_#_
    (render-table! "tasks" tasks)
    (render-table! "events" events)
    (js/console.table (clj->js tasks))
    (js/console.table (clj->js events))))

;;;;
;; bootstrap
(defn init []
  (let [engine (intemporal/make-workflow-engine :threads 4 :enable-logging true)
        res    (intemporal/start-workflow engine my-workflow [1] :workflow-id "my-wflow"
                                          :protocols {MyActivities (->MyActivitiesImpl)})]

    ;; set-results!
    (-> res
        (bthen (fn [r]
                  (js/console.log "res" (clj->js r))
                  (set-results! (prn-str r))
                  (render-tables! engine "my-wflow")))

        (p/catch (fn [r]
                   (js/console.error "error" r)
                   (set-results! (prn-str r)))))))

(comment
  (require '[shadow.cljs.devtools.api :as shadow])
  (require '[shadow.cljs.devtools.server :as server])
  (server/start!)
  (shadow/watch :doc)
  (shadow/browser-repl :doc)
  "")
