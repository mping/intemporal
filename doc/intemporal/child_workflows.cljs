(ns intemporal.child-workflows
  "Demo: a parent workflow that orchestrates INDEPENDENT child workflows.

   `deploy-service` (parent) fans out one `deploy-region` child workflow per
   region with `run-child-workflow-async`, then `join-all`s them. Each child is a
   first-class persisted workflow with its own event history: it can `sleep`
   (suspend) without blocking the parent, and itself spawns a `warm-node`
   grandchild — orchestration nests arbitrarily.

   Every child is scheduled with a :parent-close-policy of :cascade-cancel, so
   cancelling the parent (the Cancel button) cancels its still-running children.

   Independent children are driven by the recovery worker (here, the CLJS
   promise/setTimeout worker), so the page seeds the parent and starts a worker
   rather than calling start-workflow directly."
  (:require [clojure.string :as str]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [intemporal.internal.workflow-registry :as wreg]
            [hiccups.runtime :as hiccupsrt])
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [intemporal.core :refer [defn-workflow]]))

;;;;
;; Activities (the side-effecting units of work)

(defn provision-node! [region]
  {:region region :node (str "node-" (name region))})

(defn health-check! [node]
  {:node node :healthy true})

(defn warm-cache! [node]
  {:node node :cache :warm})

;;;;
;; Grandchild workflow — warm a freshly provisioned node's cache.

(defn-workflow warm-node [node]
  (let [warm (intemporal/stub #'warm-cache!)]
    (:cache (warm node))))

;;;;
;; Child workflow — deploy one region. Sleeps to make the orchestration visible,
;; then runs the warm-node grandchild (also cascade-cancellable).

(defn-workflow deploy-region [region]
  (let [provision (intemporal/stub #'provision-node!)
        health    (intemporal/stub #'health-check!)
        node      (:node (provision region))]
    (intemporal/sleep 1000)                       ; visible work — the child suspends here
    (let [healthy (:healthy (health node))
          cache   (intemporal/join
                    (intemporal/run-child-workflow-async #'warm-node [node]
                                                         :parent-close-policy :cascade-cancel))]
      {:region region :node node :healthy healthy :cache cache})))

;;;;
;; Parent workflow — fan out an independent child per region, then join them all.

(def wf-id "child-workflows-wflow")

(defn-workflow deploy-service [service regions]
  (let [handles     (mapv (fn [region]
                            ;; if this workflow fails ,
                            (intemporal/run-child-workflow-async #'deploy-region [region]
                                                                :parent-close-policy :abandon))
                          regions)
        deployments (intemporal/join-all handles)]
    {:service      service
     :region-count (count regions)
     :deployments  deployments}))

;;;;
;; UI state

(defonce app-state (atom {:engine nil :store nil :stop nil}))

;;;;
;; Rendering helpers

(defn set-html! [id content]
  (-> js/document (.getElementById id) (.-innerHTML) (set! content)))

(defn set-results! [content]
  (set-html! "results" content))

(defn- history-table [rows]
  (let [header [:event-type :workflow-id :child-workflow-id :seq :activity-name :result]
        thead  [:thead [:tr (for [h header] [:td h])]]
        tbody  [:tbody
                (for [r rows]
                  [:tr (for [h header] [:td (pr-str (get r h))])])]]
    [:table {:role "grid"} thead tbody]))

(defn- child-ids
  "Child workflow ids scheduled by a workflow, read from its history markers."
  [history]
  (->> history
       (filter #(= :child-workflow-scheduled (:event-type %)))
       (map :child-workflow-id)))

(defn- collect-ids
  "Depth-first list of `root` and all of its descendant workflow ids."
  [store root]
  (loop [stack [root] acc []]
    (if (empty? stack)
      acc
      (let [wf   (peek stack)
            hist (intemporal/get-workflow-history store wf)]
        (recur (into (pop stack) (child-ids hist))
               (conj acc wf))))))

(defn render-trees!
  "Render the parent's history plus every descendant child/grandchild history,
   so the full orchestration tree is visible as it unfolds."
  [store root]
  (let [sections (for [id (collect-ids store root)
                       :let [hist   (intemporal/get-workflow-history store id)
                             status (p/get-workflow-status store id)]]
                   [:section
                    [:h5 [:code id] " — " (name status)]
                    (history-table hist)])]
    (set-html! "events" (html (into [:div] sections)))))

;;;;
;; Running the workflow

(def ^:private terminal? #{:completed :failed :cancelled})

(defn- stop-worker! []
  (when-let [stop (:stop @app-state)] (stop))
  (swap! app-state assoc :stop nil))

(defn- poll! [store root]
  (render-trees! store root)
  (let [status (p/get-workflow-status store root)]
    (set-results! (str "Status: " (name status)
                       (when (= status :completed)
                         (str "\n\n" (prn-str (intemporal/get-workflow-result store root))))))
    (if (terminal? status)
      (stop-worker!)
      (js/setTimeout #(poll! store root) 200))))

(defn run-demo! []
  (stop-worker!)
  (let [regions (->> (-> js/document (.getElementById "regions") .-value
                         (str/split #"[,\s]+"))
                     (remove str/blank?)
                     (mapv keyword))
        engine  (intemporal/make-workflow-engine :threads 4 :enable-logging true)
        store   (:store engine)]
    (reset! app-state {:engine engine
                       :store  store
                       ;; the worker drives the parent AND every descendant child
                       :stop   (intemporal/start-worker engine :poll-ms 30)})
    (set-results! "Running…")
    (set-html! "events" "")
    ;; Seed the parent's :workflow-started event so the worker picks it up and
    ;; drives it (deploy-service is registered at load by defn-workflow). We don't
    ;; call start-workflow because its blocking loop must not race the worker on
    ;; the same workflow.
    (p/save-event store wf-id {:event-type       :workflow-started
                               :workflow-id      wf-id
                               :workflow-fn-name (wreg/workflow-name #'deploy-service)
                               :args             ["billing-api" regions]
                               :timestamp        0})
    (poll! store wf-id)))

;;;;
;; Cancelling — demonstrates :cascade-cancel: the parent's still-running children
;; are cancelled too.

(defn cancel-demo! []
  (when-let [store (:store @app-state)]
    (intemporal/cancel-workflow store wf-id)))

;;;;
;; Bootstrap

(defn init []
  (.addEventListener (.getElementById js/document "run-btn") "click"
                     (fn [_] (run-demo!)))
  (.addEventListener (.getElementById js/document "cancel-btn") "click"
                     (fn [_] (cancel-demo!))))


(comment
  (require '[shadow.cljs.devtools.api :as shadow])
  (require '[shadow.cljs.devtools.server :as server])
  (server/start!)
  (shadow/watch :doc)
  (shadow/browser-repl :doc)
  "")
