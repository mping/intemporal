(ns intemporal.child-workflows
  "Demo: a parent workflow that orchestrates INDEPENDENT child workflows.

   `deploy-service` (parent) fans out one `deploy-region` child workflow per
   region with `run-child-workflow-async`, then `join-all`s them. Each child is a
   first-class persisted workflow with its own event history: it can `sleep`
   (suspend) without blocking the parent, and itself spawns a `warm-node`
   grandchild — orchestration nests arbitrarily.

   Each child is scheduled with a :parent-close-policy (Temporal's ParentClosePolicy
   — :cascade-cancel / :abandon / :terminate, default :terminate), which decides its
   fate when the parent CLOSES (success, failure, or cancellation). Here children use
   :cascade-cancel, so cancelling the parent (the Cancel button) cancels them too.

   Independent children are driven by the engine-owned recovery loop (here, the
   CLJS promise/setTimeout implementation), so the page uses submit-workflow for
   non-blocking UI execution."
  (:require [clojure.string :as str]
            [promesa.core :as prom]
            [intemporal.core :as intemporal]
            [intemporal.protocol :as p]
            [hiccups.runtime :as hiccupsrt])
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [intemporal.core :refer [defn-workflow]]
                   [intemporal.internal.context :refer [blet]]))

;;;;
;; Activities (the side-effecting units of work)

;; These activities do real (simulated) I/O, so they return promises that resolve
;; after a delay. The CLJS activity executor awaits a promise-returning activity,
;; so the workflow suspends on the activity until it settles.

(defn provision-node! [region]
  (-> (prom/delay (+ 500 (rand-int 1000)))
      (prom/then (fn [_] {:region region :node (str "node-" (name region))}))))

(defn health-check! [node]
  (-> (prom/delay (+ 500 (rand-int 1000)))
      (prom/then (fn [_] {:node node :healthy true}))))

(defn warm-cache! [node]
  (-> (prom/delay (+ 500 (rand-int 1000)))
      (prom/then (fn [_] {:node node :cache :warm}))))

;;;;
;; Grandchild workflow — warm a freshly provisioned node's cache.

(defn-workflow warm-node [node]
  (let [warm (intemporal/stub #'warm-cache!)]
    (:cache (warm node))))

;;;;
;; Child workflow — deploy one region. Its activities take time (they return
;; delayed promises), making the orchestration visible; the child suspends on each
;; activity, then runs the warm-node grandchild (also cascade-cancellable).

(defn-workflow deploy-region [region]
  (let [provision (intemporal/stub #'provision-node!)
        health    (intemporal/stub #'health-check!)]
    ;; Stub calls to promise-returning activities yield promises in CLJS, so chain
    ;; them with blet (promesa/let that propagates *workflow-context* across each
    ;; step, so intemporal/join & run-child-workflow-async keep the workflow context).
    (blet [node    (:node (provision region))
           healthy (:healthy (health node))
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
                                                                :parent-close-policy :cascade-cancel))
                          regions)
        deployments (intemporal/join-all handles)]
    {:service      service
     :region-count (count regions)
     :deployments  deployments}))

;;;;
;; UI state

(defonce app-state (atom {:engine nil :store nil}))

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
;; SVG orchestration tree — a live picture of the parent → children → grandchildren
;; hierarchy, each node coloured by its current status.

(defn- workflow-started
  "The :workflow-started event from a workflow's history, if present."
  [history]
  (some #(when (= :workflow-started (:event-type %)) %) history))

(defn- workflow-fn-name
  "Short workflow function name (e.g. \"deploy-region\") from the :workflow-started
   event, falling back to the id if unavailable."
  [started id]
  (if-let [fq (:workflow-fn-name started)]
    (last (str/split fq #"/"))
    id))

(defn- args-label
  "Compact args string for the node, e.g. [:us-east] → \"us-east\". Truncated so
   deep args stay readable."
  [started]
  (let [args (:args started)]
    (when (seq args)
      (let [s (->> args (map pr-str) (str/join " "))]
        (if (< (count s) 20) s (str (subs s 0 18) "…"))))))

(defn- build-tree
  "Recursively build a node map {:id :name :args :status :children [...]} rooted at
   `id`, reading child links, fn name and args from history."
  [store id]
  (let [history (intemporal/get-workflow-history store id)
        started (workflow-started history)]
    {:id       id
     :name     (workflow-fn-name started id)
     :args     (args-label started)
     :status   (p/get-workflow-status store id)
     :children (mapv #(build-tree store %) (child-ids history))}))

(def ^:private status-fill
  {:completed "#b7e4c7" :failed "#ffbaad" :cancelled "#ffd8a8"
   :running   "#a5d8ff" :not-found "#e9ecef"})

(def ^:private node-w 150)
(def ^:private node-h 58)
(def ^:private h-gap 24)
(def ^:private v-gap 40)

(defn- layout
  "Assign each node an [x y] by a simple tidy layout: leaves are packed left to
   right, a parent is centred over its children. Returns [laid-out-node next-x]."
  [node depth x]
  (let [y (* depth (+ node-h v-gap))]
    (if (empty? (:children node))
      [(assoc node :x x :y y) (+ x node-w h-gap)]
      (let [[children next-x]
            (reduce (fn [[acc cx] child]
                      (let [[laid cx'] (layout child (inc depth) cx)]
                        [(conj acc laid) cx']))
                    [[] x] (:children node))
            first-c (first children)
            last-c  (last children)
            cx      (/ (+ (:x first-c) (:x last-c)) 2)]
        [(assoc node :x cx :y y :children children) next-x]))))

(defn- flatten-nodes [node]
  (cons node (mapcat flatten-nodes (:children node))))

(defn- node-svg [{node-name :name :keys [id args status x y]}]
  (let [cx (+ x (/ node-w 2))]
    (concat
      (list
        [:rect {:x x :y y :width node-w :height node-h :rx 6
                :fill (get status-fill status "#e9ecef")
                :stroke "#495057" :stroke-width 1}
         [:title id]]                              ; full id on hover
        [:text {:x cx :y (+ y 17) :text-anchor "middle"
                :font-size 12 :font-weight "bold" :fill "#212529"}
         node-name])
      (when args
        [[:text {:x cx :y (+ y 33) :text-anchor "middle"
                 :font-size 11 :font-family "monospace" :fill "#1864ab"}
          args]])
      (list
        [:text {:x cx :y (+ y 49) :text-anchor "middle"
                :font-size 11 :fill "#495057"}
         (name status)]))))

(defn- edge-svg [parent child]
  [:line {:x1 (+ (:x parent) (/ node-w 2)) :y1 (+ (:y parent) node-h)
          :x2 (+ (:x child) (/ node-w 2))  :y2 (:y child)
          :stroke "#adb5bd" :stroke-width 1.5}])

(defn- edges [node]
  (concat (for [c (:children node)] (edge-svg node c))
          (mapcat edges (:children node))))

(defn tree-svg [tree]
  (let [[laid _] (layout tree 0 10)
        nodes    (flatten-nodes laid)
        max-x    (+ 20 (apply max (map #(+ (:x %) node-w) nodes)))
        max-y    (+ 20 (apply max (map #(+ (:y %) node-h) nodes)))]
    (into [:svg {:width max-x :height max-y
                 :viewBox (str "0 0 " max-x " " max-y)
                 :style "max-width:100%;height:auto"}]
          (concat (edges laid)
                  (mapcat node-svg nodes)))))

(defn render-tree-svg! [store root]
  (set-html! "tree" (html (tree-svg (build-tree store root)))))

;;;;
;; Running the workflow

(def ^:private terminal? #{:completed :failed :cancelled})

(defn- stop-engine! []
  (when-let [engine (:engine @app-state)]
    (intemporal/shutdown-engine engine))
  (swap! app-state assoc :engine nil :store nil))

(defn- poll! [store root]
  (render-tree-svg! store root)
  (render-trees! store root)
  (let [status (p/get-workflow-status store root)]
    (set-results! (str "Status: " (name status)
                       (when (= status :completed)
                         (str "\n\n" (prn-str (intemporal/get-workflow-result store root))))))
    (if (terminal? status)
      (stop-engine!)
      (js/setTimeout #(poll! store root) 200))))

(defn run-demo! []
  (stop-engine!)
  (let [regions (->> (-> js/document (.getElementById "regions") .-value
                         (str/split #"[,\s]+"))
                     (remove str/blank?)
                     (mapv keyword))
        n-workers (inc (* 2 (max 1 (count regions))))
        engine  (intemporal/make-workflow-engine
                  :threads 4
                  :enable-logging true
                  :poll-ms 30
                  :workflow-concurrency n-workers)
        store   (:store engine)]
    (reset! app-state {:engine engine
                       :store  store})
    (set-results! "Running…")
    (set-html! "tree" "")
    (set-html! "events" "")
    ;; Submit without awaiting so the browser UI remains responsive. Both
    ;; submission styles use this same engine-owned recovery loop.
    (intemporal/submit-workflow engine #'deploy-service ["billing-api" regions]
                                :workflow-id wf-id)
    (poll! store wf-id)))

;;;;
;; Cancelling — demonstrates :cascade-cancel: the parent's still-running children
;; are cancelled too.

(defn cancel-demo! []
  (when-let [store (:store @app-state)]
    (intemporal/cancel-workflow store wf-id)
    (render-trees! store wf-id)))

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
