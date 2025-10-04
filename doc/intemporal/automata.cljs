(ns intemporal.automata
  (:require [intemporal.store :as s]
            [intemporal.workflow :as w]
            [promesa.core :as p]
            [intemporal.fsm :as fsm]
            [hiccups.runtime :as hiccupsrt])
  (:require-macros [intemporal.macros :refer [stub-function stub-protocol defn-workflow env-let]]
                   [hiccups.core :as hiccups :refer [html]]))

;;;;
;; main code

(def resource-rules
  {:state/init     [{::fsm/event :event/create ::fsm/to :state/creating ::fsm/actions [:action/create]}
                    {::fsm/event :event/kill ::fsm/to :state/killed}]
   :state/creating [{::fsm/event :event/created ::fsm/to :state/down}
                    {::fsm/event :event/error ::fsm/to :state/init}]
   :state/down     [{::fsm/event :event/start ::fsm/to :state/starting ::fsm/actions [:action/start]}
                    {::fsm/event :event/kill ::fsm/to :state/killing ::fsm/actions [:action/kill]}]
   :state/starting [{::fsm/event :event/started ::fsm/to :state/up}
                    {::fsm/event :event/error ::fsm/to :state/down}]
   :state/stopping [{::fsm/event :event/stopped ::fsm/to :state/down}
                    {::fsm/event :event/error ::fsm/to :state/up}]
   :state/up       [{::fsm/event :event/stop ::fsm/to :state/stopping ::fsm/actions [:action/stop]}
                    {::fsm/event :event/kill ::fsm/to :state/killing ::fsm/actions [:action/kill]}]
   :state/killing  [{::fsm/event :event/killed ::fsm/to :state/killed}
                    {::fsm/event :event/error ::fsm/to :state/killing}]
   :state/killed   []})

(defn process-event [event]
  (js/console.log "Going to process event" event)
  (let [nxt (condp = event
              :event/create :event/created
              :event/created :event/start
              :event/start :event/started
              :event/started :event/stop
              :event/stop :event/stopped
              :event/stopped :event/kill
              :event/kill :event/killed
              nil)]
    nxt))

;;;;
;; workflow registration

(defn-workflow run-fsm-workflow
  [rules init-state init-event]
  (let [stub      (stub-function process-event)
        initstate {::fsm/rules rules ::fsm/state init-state}
        ;; capture the env before chaining promises
        env       (w/current-env)]

    (p/loop [state initstate
             evt   init-event]
      (if evt
        (p/recur (fsm/transit state evt)
                 ;; because we may end up in another "thread" we may loose the dynamic *env*
                 ;; so we need to set it up again
                 (w/with-env env
                   (stub evt)))
        (::fsm/state state)))))

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
        thead  [:thead
                [:tr
                 (for [h header] [:td h])]]
        tbody  [:tbody
                (for [r rows]
                  [:tr {:class (name (get r :type))}
                   (for [h header]
                     [:td (pr-str (get r h))])])]
        tbl    (html
                 [:table {:role "grid"}
                  thead
                  tbody])]
    (set-html! id tbl)))


(defn render-tables! [the-store]
  (let [tasks  (s/list-tasks the-store)
        events (->> (s/list-events the-store)
                    (sort-by :id))]
    (render-table! "tasks" tasks)
    (render-table! "events" events)
    (js/console.table (clj->js tasks))
    (js/console.table (clj->js events))))

;;;;
;; bootstrap
(defn init []
  (let [mstore (s/make-store)
        stop   (w/start-worker! mstore)
        res    (w/with-env {:store mstore}
                 (run-fsm-workflow resource-rules :state/init :event/create))]

    ;; set-results!
    (-> res
        (p/then (fn [r]
                  (js/console.log "res" r)
                  (set-results! (prn-str r))
                  (render-tables! mstore)))

        (p/catch (fn [r]
                   (js/console.error "error" r)
                   (set-results! (prn-str r))))
        (p/finally (fn [_ _] (stop))))))

(comment
  (require '[shadow.cljs.devtools.api :as shadow])
  (require '[shadow.cljs.devtools.server :as server])
  (server/start!)
  (shadow/watch :doc)
  (shadow/browser-repl :doc)
  "")
