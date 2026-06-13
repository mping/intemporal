(ns intemporal.provision-automata
  (:require [clojure.string :as str]
            [promesa.core :as p]
            [intemporal.core :as intemporal]
            [intemporal.store :as store]
            [intemporal.fsm :as fsm]
            [hiccups.runtime :as hiccupsrt])
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [intemporal.internal.context :refer [blet bthen bloop]]))

;;;;
;; State machine — VM provisioning lifecycle
;;
;; Each event corresponds to a step in the provisioning saga:
;;   provision → provisioned (instance created)
;;   attach → attached (volume attached)
;;   boot → booted (VM running)
;;   halt → halted (VM stopped)
;;   detach → detached (volume detached)
;;   deprovision → deprovisioned (instance removed)
;;
;; Error transitions lead to a cleanup cascade or immediate failure.

(def provision-rules
  {:state/init          [{::fsm/event :event/provision      ::fsm/to :state/provisioning}]
   :state/provisioning  [{::fsm/event :event/provisioned    ::fsm/to :state/attaching}
                         {::fsm/event :event/error          ::fsm/to :state/failed}]
   :state/attaching     [{::fsm/event :event/attached       ::fsm/to :state/booting}
                         {::fsm/event :event/error          ::fsm/to :state/deprovisioning}]
   :state/booting       [{::fsm/event :event/booted         ::fsm/to :state/running}
                         {::fsm/event :event/error          ::fsm/to :state/detaching}]
   :state/running       [{::fsm/event :event/halt           ::fsm/to :state/halting}]
   :state/halting       [{::fsm/event :event/halted         ::fsm/to :state/detaching}
                         {::fsm/event :event/error          ::fsm/to :state/detaching}]
   :state/detaching     [{::fsm/event :event/detached       ::fsm/to :state/deprovisioning}]
   :state/deprovisioning [{::fsm/event :event/deprovisioned ::fsm/to :state/done}]
   :state/done          []   ;; terminal — fully deprovisioned
   :state/failed        []}) ;; terminal — unrecoverable failure

(def init-state :state/init)
(def wf-id "provision-automata-wflow")
(def signal-name "fsm-event")

;;;;
;; Workflow definition (identical pattern to automata.cljs)

(defn run-fsm-workflow [rules current-state]
  (bloop [state {::fsm/rules rules ::fsm/state current-state}]
    (let [current     (::fsm/state state)
          transitions (get rules current)]
      (if (empty? transitions)
        current
        (let [evt (intemporal/wait-for-signal signal-name)]
          (p/recur (fsm/transit state evt)))))))

;;;;
;; localStorage persistence
;;
;; Saves the full workflow event history on every signal so the page can
;; restore the exact intemporal state after a browser refresh. On reload:
;;  1. Pre-seed InMemoryStore with the saved history.
;;  2. Call start-workflow — the engine replays the stored signal events,
;;     fast-forwarding bloop iterations without blocking, and lands back in
;;     the wait-for-signal state at the current position.
;;  3. Derive the UI state (current FSM node) from the history by replaying
;;     the signal payloads through fsm/transit.

(def storage-key "provision-automata-history")

(defn save-history! [engine]
  (let [history (intemporal/get-workflow-history (:store engine) wf-id)]
    (.setItem js/localStorage storage-key (pr-str history))))

(defn load-history []
  (when-let [s (.getItem js/localStorage storage-key)]
    (cljs.reader/read-string s)))

(defn clear-storage! []
  (.removeItem js/localStorage storage-key)
  (.reload js/location))

(defn state-from-history
  "Replay signal-received events to derive the current FSM state."
  [rules starting-state history]
  (reduce
    (fn [s event]
      (if (= :signal-received (:event-type event))
        (-> (fsm/transit {::fsm/rules rules ::fsm/state s} (:payload event))
            ::fsm/state)
        s))
    starting-state
    history))

;;;;
;; UI state

(defonce app-state (atom {:engine nil :state init-state}))

;;;;
;; Rendering helpers

(defn set-html! [id h]
  (-> js/document (.getElementById id) (.-innerHTML) (set! h)))

(defn set-results! [h]
  (set-html! "results" h))

(defn render-table! [id rows]
  (let [header [:event-type :workflow-id :args :timestamp :seq :signal-name :payload]
        thead  [:thead [:tr (for [h header] [:td h])]]
        tbody  [:tbody
                (for [r rows]
                  [:tr (for [h header] [:td (pr-str (get r h))])])]
        tbl    (html [:table {:role "grid"} thead tbody])]
    (set-html! id tbl)))

(defn render-tables! [engine]
  (let [history (intemporal/get-workflow-history (:store engine) wf-id)]
    (render-table! "events" history)
    (js/console.table (clj->js (mapv clj->js history)))))

;;;;
;; State machine diagram

(defn- state-name [kw]
  (str/replace (name kw) "-" "_"))

(defn diagram-source [rules current]
  (let [edges  (for [[st ts] rules t ts]
                 (str "  " (state-name st) " --> " (state-name (::fsm/to t))
                      " : " (name (::fsm/event t))))
        finals (for [[st ts] rules :when (empty? ts)]
                 (str "  " (state-name st) " --> [*]"))
        lines  (concat ["stateDiagram-v2"
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
;; Event buttons

(defn render-controls! [rules current]
  (let [transitions (get rules current)]
    (if (empty? transitions)
      (set-html! "controls"
                 (html [:p [:strong "Workflow complete — terminal state "]
                        [:code (str current)]]))
      (set-html! "controls"
                 (html (into [:div {:class "grid"}]
                             (for [t transitions]
                               (let [evt (::fsm/event t)]
                                 [:button {:data-event (name evt)}
                                  (str "emit " (name evt) " → " (name (::fsm/to t)))]))))))))

(defn render-all! []
  (let [{:keys [state]} @app-state]
    (render-diagram! provision-rules state)
    (render-controls! provision-rules state)))

;;;;
;; Emitting events

(defn emit-event! [ename]
  (let [{:keys [engine state]} @app-state
        transitions (get provision-rules state)
        t   (some #(when (= (name (::fsm/event %)) ename) %) transitions)
        evt (::fsm/event t)]
    (when evt
      (intemporal/send-signal (:store engine) wf-id signal-name evt)
      (let [nxt (-> (fsm/transit {::fsm/rules provision-rules ::fsm/state state} evt)
                    ::fsm/state)]
        (swap! app-state assoc :state nxt)
        (render-all!)
        (js/setTimeout
          (fn []
            (save-history! engine)
            (render-tables! engine))
          0)))))

(defn setup-controls-listener! []
  (.addEventListener (.getElementById js/document "controls") "click"
                     (fn [e]
                       (when-let [btn (.closest (.-target e) "button[data-event]")]
                         (emit-event! (.getAttribute btn "data-event"))))))

(defn setup-clear-listener! []
  (.addEventListener (.getElementById js/document "clear-btn") "click"
                     (fn [_] (clear-storage!))))

;;;;
;; Bootstrap

(defn init []
  (when (exists? js/mermaid)
    (js/mermaid.initialize (clj->js {:startOnLoad false})))

  (let [saved-history (load-history)
        [current-state engine]
        (if (seq saved-history)
          (let [store  (store/->InMemoryStore
                         (atom {:workflows {wf-id {:history saved-history}}}))
                engine (intemporal/make-workflow-engine
                         :store store :threads 4 :enable-logging true)
                state  (state-from-history provision-rules init-state saved-history)]
            [state engine])
          [init-state (intemporal/make-workflow-engine :threads 4 :enable-logging true)])]

    (reset! app-state {:engine engine :state current-state})
    (setup-controls-listener!)
    (setup-clear-listener!)
    (render-all!)

    (-> (intemporal/start-workflow engine run-fsm-workflow
                                   [provision-rules init-state] :workflow-id wf-id)
        (bthen (fn [res]
                 (js/console.log "workflow finished" (clj->js res))
                 (set-results! (prn-str res))
                 (render-tables! engine)))
        (p/catch (fn [err]
                   (js/console.error "error" err)
                   (set-results! (prn-str err)))))

    (js/setTimeout #(render-tables! engine) 0)))


(comment
  (require '[shadow.cljs.devtools.api :as shadow])
  (require '[shadow.cljs.devtools.server :as server])
  (server/start!)
  (shadow/watch :doc)
  (shadow/browser-repl :doc)
  "")
