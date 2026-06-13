(ns intemporal.automata
  (:require [clojure.string :as str]
            [promesa.core :as p]
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

(def init-state :state/init)
(def wf-id "my-wflow")

;;;;
;; workflow definition
;;
;; apply-transition is an activity (stub) that returns the next event keyword.
;; For states with exactly one outgoing transition the event auto-fires via a
;; resolved Promise — no user interaction needed. For states with multiple
;; transitions it returns a pending Promise and stores the resolve function so
;; the UI can fulfill it when the user clicks a button.
;;
;; The FSM state transition (fsm/transit) happens inside the workflow body, so
;; it is fully deterministic and does not need to be wrapped in an activity.
;; On replay the stub returns the cached event keyword, fsm/transit is called
;; again with the same arguments, and the workflow advances without re-executing
;; the activity function itself.

(defonce app-state (atom {:engine nil :state init-state}))
(defonce pending-resolve (atom nil))

(defn apply-transition [rules current-state]
  (let [transitions (get rules current-state)]
    (if (= 1 (count transitions))
      (p/resolved (::fsm/event (first transitions)))
      (do
        (swap! app-state assoc :state current-state)
        (render-all!)
        (js/Promise. (fn [resolve _]
                       (reset! pending-resolve resolve)))))))

(defn run-fsm-workflow [rules init-state]
  (let [get-next-event (intemporal/stub #'apply-transition)]
    (bloop [current init-state]
      (let [transitions (get rules current)]
        (if (empty? transitions)
          current
          (let [evt (get-next-event rules current)]
            (p/recur (-> (fsm/transit {::fsm/rules rules ::fsm/state current} evt)
                         ::fsm/state))))))))

;;;;
;; rendering helpers

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
                 [:tr
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
;; state machine diagram (rendered with mermaid)

(defn- state-name [kw] (name kw))

(defn diagram-source
  [rules current]
  (let [edges    (for [[st transitions] rules
                       t               transitions]
                   (str "  " (state-name st) " --> " (state-name (::fsm/to t))
                        " : " (name (::fsm/event t))))
        finals   (for [[st transitions] rules
                       :when (empty? transitions)]
                   (str "  " (state-name st) " --> [*]"))
        lines    (concat ["stateDiagram-v2"
                          "  direction LR"
                          (str "  [*] --> " (state-name init-state))]
                         edges
                         finals
                         ["  classDef current fill:#f9c74f,stroke:#f08c00,stroke-width:3px,color:#000"
                          (str "  class " (state-name current) " current")])]
    (str/join "\n" lines)))

(defn render-diagram! [rules current]
  (if (exists? js/mermaid)
    (-> (js/mermaid.render "fsmGraph" (diagram-source rules current))
        (.then (fn [res] (set-html! "diagram" (.-svg res))))
        (.catch (fn [e] (js/console.error "mermaid render failed" e))))
    (set-html! "diagram" (html [:pre (diagram-source rules current)]))))

;;;;
;; event buttons

(defn render-controls! [rules current]
  (let [transitions (get rules current)]
    (if (empty? transitions)
      (set-html! "controls"
                 (html [:p [:strong "Workflow complete — reached terminal state "]
                        [:code (str current)]]))
      (set-html! "controls"
                 (html (into [:div {:class "grid"}]
                             (for [t transitions]
                               (let [evt (::fsm/event t)]
                                 [:button {:data-event (name evt)}
                                  (str "emit " (name evt) " → " (name (::fsm/to t)))]))))))))

(defn render-all! []
  (let [{:keys [state]} @app-state]
    (render-diagram! resource-rules state)
    (render-controls! resource-rules state)))

;;;;
;; fulfilling the pending Promise (previously: send-signal)

(defn fulfill-pending!
  "Resolve the pending Promise with the event keyword matching `ename`."
  [ename]
  (when-let [resolve @pending-resolve]
    (let [{:keys [state]} @app-state
          transitions (get resource-rules state)
          t   (some #(when (= (name (::fsm/event %)) ename) %) transitions)
          evt (::fsm/event t)]
      (when evt
        (reset! pending-resolve nil)
        (resolve evt)
        (js/setTimeout #(render-tables! (:engine @app-state) wf-id) 0)))))

(defn setup-controls-listener! []
  (.addEventListener (.getElementById js/document "controls") "click"
                     (fn [e]
                       (when-let [btn (.closest (.-target e) "button[data-event]")]
                         (fulfill-pending! (.getAttribute btn "data-event"))))))

;;;;
;; bootstrap
(defn init []
  (when (exists? js/mermaid)
    (js/mermaid.initialize (clj->js {:startOnLoad false})))
  (let [engine (intemporal/make-workflow-engine :threads 4 :enable-logging true
                                                :default-timeout-ms nil)]
    (reset! app-state {:engine engine :state init-state})
    (setup-controls-listener!)
    (render-all!)
    (-> (intemporal/start-workflow engine run-fsm-workflow [resource-rules init-state]
                                   :workflow-id wf-id)
        (bthen (fn [res]
                 (swap! app-state assoc :state res)
                 (render-all!)
                 (js/console.log "workflow finished" (clj->js res))
                 (set-results! (prn-str res))
                 (render-tables! engine wf-id)))
        (p/catch (fn [err]
                   (js/console.error "error" err)
                   (set-results! (prn-str err)))))
    (js/setTimeout #(render-tables! engine wf-id) 0)))


(comment
  (require '[shadow.cljs.devtools.api :as shadow])
  (require '[shadow.cljs.devtools.server :as server])
  (server/start!)
  (shadow/watch :doc)
  (shadow/browser-repl :doc)
  "")
