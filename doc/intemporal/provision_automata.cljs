(ns intemporal.provision-automata
  (:require [clojure.string :as str]
            [promesa.core :as p]
            [intemporal.core :as intemporal]
            [intemporal.store :as store]
            [intemporal.fsm :as fsm]
            [hiccups.runtime :as hiccupsrt])
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [intemporal.core :refer [defn-workflow]]
                   [intemporal.internal.context :refer [blet bthen bloop]]))

;;;;
;; State machine — VM provisioning lifecycle
;;
;; Two kinds of states:
;;   User-driven  — workflow waits for a button click (apply-transition stub)
;;   I/O states   — workflow calls an activity that runs I/O and emits the next event
;;
;;   :state/init          user clicks "provision"
;;   :state/provisioning  provision-vm!    → {:event :event/provisioned :instance-id ...} | {:event :event/error}
;;   :state/attaching     attach-volume!   → {:event :event/attached    :volume-id ...}   | {:event :event/error}
;;   :state/booting       boot-vm!         → {:event :event/booted}                       | {:event :event/error}
;;   :state/running       user clicks "halt"
;;   :state/halting       halt-vm!         → {:event :event/halted}                       | {:event :event/error}
;;   :state/detaching     detach-volume!   → {:event :event/detached}
;;   :state/deprovisioning deprovision!    → {:event :event/deprovisioned}
;;   :state/done / :state/failed → terminal

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
   :state/done          []
   :state/failed        []})

(def init-state :state/init)
(def wf-id "provision-automata-wflow")

;;;;
;; Failure injection

(def fail-at (atom nil))

(defn- maybe-fail! [step]
  (when (= @fail-at step)
    (throw (ex-info (str "Injected failure at " (name step)) {:step step}))))

;;;;
;; I/O Activities
;;
;; Each activity handles its own try/catch and returns a map with :event (the
;; next FSM event keyword) plus any data produced (e.g. :instance-id, :volume-id).
;; On failure the returned map has :event :event/error; upstream context is left
;; intact so cleanup states (detaching, deprovisioning) can still use the ids.

(defn provision-vm! []
  (try
    (maybe-fail! :provision)
    {:event :event/provisioned :instance-id "i-demo"}
    (catch js/Error _
      {:event :event/error})))

(defn attach-volume! [instance-id]
  (try
    (maybe-fail! :attach)
    {:event :event/attached :volume-id "vol-demo"}
    (catch js/Error _
      {:event :event/error})))

(defn boot-vm! [instance-id volume-id]
  (try
    (maybe-fail! :boot)
    {:event :event/booted}
    (catch js/Error _
      {:event :event/error})))

(defn halt-vm! [instance-id]
  (try
    {:event :event/halted}
    (catch js/Error _
      {:event :event/error})))

(defn detach-volume! [volume-id]
  (try
    {:event :event/detached}
    (catch js/Error _
      {:event :event/error})))

(defn deprovision! [instance-id]
  (try
    {:event :event/deprovisioned}
    (catch js/Error _
      {:event :event/error})))

;;;;
;; User-input activity
;;
;; Called for :state/init and :state/running — the only states where the user
;; decides what happens. Updates the UI, saves history (all preceding I/O has
;; finished by the time the workflow pauses here), and returns a Promise that
;; fulfills with the chosen event keyword when the user clicks a button.

(defonce app-state (atom {:engine nil :state init-state}))
(defonce pending-resolve (atom nil))

(declare render-all! render-tables! save-history!)

(defn apply-transition [rules current-state]
  (swap! app-state assoc :state current-state)
  (render-all!)
  (js/setTimeout
    (fn []
      (when-let [engine (:engine @app-state)]
        (save-history! engine)
        (render-tables! engine)))
    0)
  (js/Promise. (fn [resolve _]
                 (reset! pending-resolve resolve))))

;;;;
;; Workflow
;;
;; I/O stubs are created once and called inside the bloop. Each returns
;; {:event <keyword> & data}; the event drives fsm/transit and the data merges
;; into ctx so downstream activities receive ids from upstream ones.
;; No try/catch here — error handling lives inside each activity function.

(defn-workflow run-fsm-workflow [rules init-state]
  (let [get-next-event (intemporal/stub #'apply-transition)
        provision-vm   (intemporal/stub #'provision-vm!)
        attach-vol     (intemporal/stub #'attach-volume!)
        boot-vm        (intemporal/stub #'boot-vm!)
        halt-vm        (intemporal/stub #'halt-vm!)
        detach-vol     (intemporal/stub #'detach-volume!)
        deprovision    (intemporal/stub #'deprovision!)]
    (bloop [current init-state ctx {}]
      (let [transitions (get rules current)]
        (if (empty? transitions)
          current
          (let [[evt ctx']
                (case current
                  :state/provisioning
                  (let [r (provision-vm)]
                    [(:event r) (merge ctx (dissoc r :event))])

                  :state/attaching
                  (let [r (attach-vol (:instance-id ctx))]
                    [(:event r) (merge ctx (dissoc r :event))])

                  :state/booting
                  (let [r (boot-vm (:instance-id ctx) (:volume-id ctx))]
                    [(:event r) ctx])

                  :state/halting
                  (let [r (halt-vm (:instance-id ctx))]
                    [(:event r) ctx])

                  :state/detaching
                  (let [r (detach-vol (:volume-id ctx))]
                    [(:event r) ctx])

                  :state/deprovisioning
                  (let [r (deprovision (:instance-id ctx))]
                    [(:event r) ctx])

                  ;; :state/init and :state/running: user picks via button
                  [(get-next-event rules current) ctx])]

            (p/recur (-> (fsm/transit {::fsm/rules rules ::fsm/state current} evt)
                         ::fsm/state)
                     ctx')))))))

;;;;
;; localStorage persistence

(def storage-key "provision-automata-history")

(defn save-history! [engine]
  (let [history (intemporal/get-workflow-history (:store engine) wf-id)]
    (.setItem js/localStorage storage-key (pr-str history))))

(defn load-history []
  (try
    (when-let [s (.getItem js/localStorage storage-key)]
      (cljs.reader/read-string s))
    (catch :default e
      (js/console.warn "Failed to parse saved history, clearing storage:" (.-message e))
      (.removeItem js/localStorage storage-key)
      nil)))

(defn clear-storage! []
  (.removeItem js/localStorage storage-key)
  (.reload js/location))

(defn state-from-history
  "Replay activity-completed events to derive the current FSM state.
   I/O activity results are maps {:event <kw> ...}; the :event field drives transit.
   User-input activity results are plain keywords.

   Returns the derived state keyword, or nil if the history is incompatible with
   the current rules (e.g. from a previous version of the FSM). When nil is
   returned, localStorage has already been cleared."
  [rules starting-state history]
  (try
    (reduce
      (fn [s event]
        (if (= :activity-completed (:event-type event))
          (let [result (:result event)
                evt    (if (map? result) (:event result) result)]
            (-> (fsm/transit {::fsm/rules rules ::fsm/state s} evt)
                ::fsm/state))
          s))
      starting-state
      history)
    (catch :default e
      (js/console.warn "Failed to derive state from saved history, clearing storage:"
                       (.-message e))
      (.removeItem js/localStorage storage-key)
      nil)))

;;;;
;; Rendering helpers

(defn set-html! [id h]
  (-> js/document (.getElementById id) (.-innerHTML) (set! h)))

(defn set-results! [h]
  (set-html! "results" h))

(defn render-table! [id rows]
  (let [header [:event-type :workflow-id :args :timestamp :seq :activity-name :result]
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
;; Fulfilling user-input Promises

(defn fulfill-pending! [ename]
  (when-let [resolve @pending-resolve]
    (let [{:keys [state]} @app-state
          transitions (get provision-rules state)
          t   (some #(when (= (name (::fsm/event %)) ename) %) transitions)
          evt (::fsm/event t)]
      (when evt
        (reset! pending-resolve nil)
        (resolve evt)))))

(defn setup-controls-listener! []
  (.addEventListener (.getElementById js/document "controls") "click"
                     (fn [e]
                       (when-let [btn (.closest (.-target e) "button[data-event]")]
                         (fulfill-pending! (.getAttribute btn "data-event"))))))

(defn setup-clear-listener! []
  (.addEventListener (.getElementById js/document "clear-btn") "click"
                     (fn [_] (clear-storage!))))

;;;;
;; Bootstrap

(defn init []
  (when (exists? js/mermaid)
    (js/mermaid.initialize (clj->js {:startOnLoad false})))

  (let [saved-history (load-history)
        derived-state  (when (seq saved-history)
                         (state-from-history provision-rules init-state saved-history))
        ;; nil means the saved history was incompatible and has been cleared
        current-state  (or derived-state init-state)
        engine         (if derived-state
                         ;; Valid saved history: create store with it so the workflow can replay
                         (let [store (store/create-store
                                       :state (atom {:workflows {wf-id {:history saved-history}}}))]
                           (intemporal/make-workflow-engine
                             :store store :threads 4 :enable-logging true
                             :default-timeout-ms nil))
                         ;; No (compatible) saved history: fresh engine
                         (intemporal/make-workflow-engine :threads 4 :enable-logging true
                                                          :default-timeout-ms nil))]

    (reset! app-state {:engine engine :state current-state})
    (setup-controls-listener!)
    (setup-clear-listener!)
    (render-all!)

    (-> (intemporal/start-workflow engine run-fsm-workflow
                                   [provision-rules init-state] :workflow-id wf-id)
        (bthen (fn [res]
                 (swap! app-state assoc :state (:result res))
                 (render-all!)
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
