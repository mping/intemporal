(ns intemporal.provision-saga
  (:require [promesa.core :as p]
            [intemporal.core :as intemporal]
            [hiccups.runtime :as hiccupsrt])
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [intemporal.internal.context :refer [bthen]]))

;;;;
;; Failure injection
;;
;; Set before start-workflow to simulate a specific step failing.

(def fail-at (atom nil))

(defn- maybe-fail! [step]
  (when (= @fail-at step)
    (throw (ex-info (str "Injected failure at " (name step)) {:step step}))))

;;;;
;; Activities

(defn provision-instance! []
  (maybe-fail! :provision)
  {:instance-id "i-demo"})

(defn attach-volume! [_inst-id]
  (maybe-fail! :attach)
  {:volume-id "vol-demo"})

(defn boot-vm! [_inst-id _vol-id]
  (maybe-fail! :boot)
  {:status :booted})

(defn halt-vm! [_inst-id]
  {:status :halted})

(defn detach-volume! [_vol-id]
  {:status :detached})

(defn deprovision! [_inst-id]
  {:status :deprovisioned})

;;;;
;; Workflow — sequential steps with LIFO compensation
;;
;; The happy path reads as a straight sequence of API calls.
;; After each destructive step succeeds, a compensation thunk is registered.
;; Any failure causes compensations to run in reverse (LIFO), undoing completed
;; steps. No state machine, no signals — the workflow is just code.

(def wf-id "provision-saga-wflow")

(defn run-provision-saga []
  (let [s         (intemporal/saga)
        provision (intemporal/stub #'provision-instance!)
        attach    (intemporal/stub #'attach-volume!)
        boot      (intemporal/stub #'boot-vm!)
        halt      (intemporal/stub #'halt-vm!)
        detach    (intemporal/stub #'detach-volume!)
        depr      (intemporal/stub #'deprovision!)]
    (try
      (let [inst (provision)
            _    (intemporal/add-compensation s #(depr (:instance-id inst)))
            vol  (attach (:instance-id inst))
            _    (intemporal/add-compensation s #(detach (:volume-id vol)))]
        (boot (:instance-id inst) (:volume-id vol))
        (halt (:instance-id inst))
        (detach (:volume-id vol))
        (depr (:instance-id inst))
        {:status :deprovisioned :instance-id (:instance-id inst)})
      (catch js/Error e
        (intemporal/compensate s)
        (throw e)))))

;;;;
;; UI state

(defonce app-state (atom {:engine nil}))

;;;;
;; Rendering helpers

(defn set-html! [id content]
  (-> js/document (.getElementById id) (.-innerHTML) (set! content)))

(defn set-results! [content]
  (set-html! "results" content))

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
;; Running the workflow

(defn run! []
  (let [scen   (-> js/document (.getElementById "scenario") .-value)
        fa     (case scen
                 "provision" :provision
                 "attach"    :attach
                 "boot"      :boot
                 nil)
        engine (intemporal/make-workflow-engine :threads 4 :enable-logging true)]
    (reset! fail-at fa)
    (swap! app-state assoc :engine engine)
    (set-results! "Running…")
    (set-html! "events" "")
    (-> (intemporal/start-workflow engine run-provision-saga [] :workflow-id wf-id)
        (bthen (fn [res]
                 (set-results! (prn-str res))
                 (render-tables! engine)))
        (p/catch (fn [err]
                   (set-results! (str "Error: " (ex-message err)))
                   (render-tables! engine))))))

;;;;
;; Bootstrap

(defn init []
  (.addEventListener (.getElementById js/document "run-btn") "click"
                     (fn [_] (run!))))


(comment
  (require '[shadow.cljs.devtools.api :as shadow])
  (require '[shadow.cljs.devtools.server :as server])
  (server/start!)
  (shadow/watch :doc)
  (shadow/browser-repl :doc)
  "")
