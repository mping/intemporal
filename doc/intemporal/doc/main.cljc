(ns intemporal.doc.main
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require
   [intemporal.doc.sqlite :as sqlite]
   [intemporal.doc.sqlite-store :as sstore]
   [intemporal.store :as s]
   [intemporal.workflow :as w]
   [intemporal.activity :as a]
   [devtools.core :as devtools]
    ;;hiccupsrt required
   [hiccups.runtime :as hiccupsrt]))

(devtools/install!)

;;;;
;; main code

(defprotocol HttpClient
  :extend-via-metadata true
  (doHead [this id] "Can be called multiple times")
  (doPost [this id] "Should only be called once"))

(defn maybe [thunk]
  (let [r (rand-int 10)]
    (when (> r 5)
      (throw (js/Error. "Forced error (simulated failure)")))
    (thunk)))

;; basic protocol function
(def example-impl
  (reify HttpClient
    ;; doHead always goes through
    (doHead [_ _url] "200 OK")
    ;; doPost sometimes fails
    (doPost [_ _url] (maybe (fn [] "200 OK")))))

(defrecord MyHttpClient []
  HttpClient
  (doPost [_ id] (fn [] id))
  (doHead [_ id] (maybe (fn [] id))))

;;;;
;; workflow registration

(defn simpleflow
  [n]
  ;; (->MyHttpClient) would work too
  (let [stub (a/stub-protocol HttpClient example-impl {:idempotent true})]
    (doHead stub (str n "carr"))
    (doPost stub (str n "carr"))))

;;;;
;; bootstrap
(defn onready [db]

  (let [sqlitestore (sstore/make-sqlite-store db)]
    ;; main demo code
    (s/clear-events sqlitestore)
    (w/register-workflow sqlitestore simpleflow)
    ;; now invoke

    (let [el  (js/document.getElementById "runner")
          ret (js/document.getElementById "retry")
          toggle!     (fn [id b]
                        (set! (.-disabled (.getElementById js/document id)) b))
          set-html!   (fn [id html]
                        (-> js/document
                          (.getElementById id)
                          (.-innerHTML)
                          (set! html)))
          tbl (fn [rows header]
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
                runid    (:runid row)]
            (set-html! "results" (str "Retrying id: " runid))
            (try
              (let [res (w/retry sqlitestore #'simpleflow runid)]
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
            (let [res (simpleflow "foo")]
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
