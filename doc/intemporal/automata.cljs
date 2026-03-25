(ns intemporal.automata
  (:require [promesa.core :as p]
            [intemporal.core :as intemporal]
            [intemporal.fsm :as fsm]
            [hiccups.runtime :as hiccupsrt])
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [intemporal.internal.context :refer [blet bthen bloop]]))

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

(defn run-fsm-workflow [rules init-state init-event]
  (let [stub      (intemporal/stub process-event)
        initstate {::fsm/rules rules ::fsm/state init-state}]

    (bloop [state initstate
            evt   init-event]
      (if evt
        (p/recur (fsm/transit state evt)
                 (stub evt))
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
  (let [header [:event-type :workflow-id :args :timestamp :seq :activity-name :result]
        thead [:thead
               [:tr
                (for [h header] [:td h])]]
        tbody [:tbody
               (for [r rows]
                 [:tr ;{:class (get r :type)}
                  (for [h header]
                    [:td (pr-str (get r h))])])]
        tbl   (html
                [:table {:role "grid"}
                 thead
                 tbody])]
    (set-html! id tbl)))

(defn render-tables! [engine wf-id]
  (let [history (intemporal/get-workflow-history (:store engine) wf-id)]
    (render-table! "events" history)
    (js/console.table (clj->js (mapv clj->js history)))))

;;;;
;; bootstrap
(defn init []
  (blet [engine (intemporal/make-workflow-engine :threads 4 :enable-logging true)
          res    (intemporal/start-workflow engine run-fsm-workflow [resource-rules :state/init :event/create]
                                            :workflow-id "my-wflow")]

    ;; set-results!
    (-> (:result res)
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
