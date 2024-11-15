(ns intemporal.doc
  (:require [intemporal.store :as s]
            [intemporal.workflow :as w]
            [promesa.core :as p]
            [hiccups.runtime :as hiccupsrt])
  (:require-macros [intemporal.macros :refer [stub-function stub-protocol defn-workflow]]
                   [hiccups.core :as hiccups :refer [html]]))
;;;;
;; main code

(defn nested-fn [a]
  [a :nested])

(defn activity-fn [a]
  (let [f (stub-function nested-fn)]
    (f :sub)))

(defprotocol MyActivities
  (foo [this a]))

(defrecord MyActivitiesImpl []
  MyActivities
  (foo [this a] (println "record was called:" ) [a :child]))

(defn-workflow my-workflow [i]
  (let [sf (stub-function activity-fn)
        pr (stub-protocol MyActivities {})

        sres (sf [1])
        pres (foo pr :X)]
    (p/let [v1 sres
            v2 pres]
      (conj [:root]
            v1
            v2))))

(def mstore (s/make-store))
(def worker (w/start-worker! mstore {:protocols {`MyActivities (->MyActivitiesImpl)}}))
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


(defn render-tables! [the-store]
  (let [tasks  (vals @(::s/task-store the-store))
        events (->> (vals @(::s/history-store the-store))
                    (flatten)
                    (sort-by :id))]
    (render-table! "tasks" tasks)
    (render-table! "events" events)
    (js/console.table (clj->js tasks))
    (js/console.table (clj->js events))))

;;;;
;; bootstrap
(defn init []
  (let [res (w/with-env {:store mstore}
               (my-workflow 1))]

    ;; set-results!
    (-> res
        (p/then (fn [r]
                  (js/console.log "res" r)
                  (set-results! (prn-str r))
                  (render-tables! @mstore)))

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
