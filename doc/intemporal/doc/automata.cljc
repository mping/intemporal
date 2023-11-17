(ns intemporal.doc.automata
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require
    [intemporal.doc.sqlite :as sqlite]
    [intemporal.doc.sqlite-store :as sstore]
    [intemporal.store :as s]
    [intemporal.workflow :as w]
    [intemporal.activity :as a]
    [intemporal.doc.fsm :as fsm]
    [devtools.core :as devtools]
    ;;hiccupsrt required
    [hiccups.runtime :as hiccupsrt]))

(devtools/install!)

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

;; event producer
(defprotocol EventHandler
  (process-event [this event] "Processes the event, returns the next event"))

(defn make-event-handler []
  (reify EventHandler
    (process-event [this event]
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
        nxt))))
;;;;
;; workflow registration

(defn run-fsm-workflow
  [rules init-state init-event]
  (let [stub      (a/stub-protocol EventHandler (make-event-handler) {:idempotent true})
        initstate {::fsm/rules rules ::fsm/state init-state}]

    (loop [state initstate
           evt   init-event]
      (if evt
        (recur (fsm/transit state evt) (process-event stub evt))
        (::fsm/state state)))))

;;;;
;; bootstrap
(defn onready [db]

  (let [sqlitestore (sstore/make-sqlite-store db)]
    ;; main demo code
    (s/clear-events sqlitestore)
    (w/register-workflow sqlitestore run-fsm-workflow)
    ;; now invoke

    (let [el                 (js/document.getElementById "runner")
          ret                (js/document.getElementById "retry")
          toggle!            (fn [id b]
                               (set! (.-disabled (.getElementById js/document id)) b))
          set-html!          (fn [id html]
                               (-> js/document
                                   (.getElementById id)
                                   (.-innerHTML)
                                   (set! html)))
          tbl                (fn [rows header]
                               (html
                                 [:table {:role "grid"}
                                  [:thead
                                   [:tr
                                    (for [h header] [:td h])]]
                                  [:tbody
                                   (for [r rows]
                                     (do
                                       [:tr {:class (name (get r :type))}
                                        (for [h header]
                                          [:td (get r h)])]))]]))

          update-html-events (fn []
                               (let [mdata  (sqlite/execute! db ["select * from metadata"])
                                     events (sqlite/execute! db ["select * from events"])]
                                 (set-html! "metadata" (tbl mdata (keys (first mdata))))
                                 (set-html! "events" (tbl events (keys (first events))))))]

      (.addEventListener ret "click"
                         (fn [e]
                           (let [[row] (sqlite/execute! db ["select runid from events order by timestamp asc limit 1"])
                                 runid (:runid row)]
                             (set-html! "results" (str "Retrying id: " runid))
                             (try
                               (let [res (w/retry sqlitestore #'run-fsm-workflow runid)]
                                 (set-html! "results" res)
                                 (toggle! "retry" true))
                               (catch js/Object err
                                 (js/console.error "Workflow failed!" err)
                                 (set-html! "results" err)
                                 (toggle! "retry" false)))
                             (update-html-events))))

      (.addEventListener el "click"
                         (fn [e]
                           (try
                             (let [res (run-fsm-workflow resource-rules :state/init :event/create)]
                               (set-html! "results" res)
                               (toggle! "retry" true))
                             (catch js/Object err
                               (js/console.error "Workflow failed!" err)
                               (set-html! "results" err)
                               (toggle! "retry" false)))

                           (update-html-events))))))


(defn init []
  (sqlite/init onready))

(comment
  (require '[shadow.cljs.devtools.api :as shadow])
  (require '[shadow.cljs.devtools.server :as server])
  (server/start!)
  (shadow/watch :doc)
  (shadow/browser-repl :doc)
  "")
