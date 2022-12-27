(ns intemporal.doc
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require
    [intemporal.doc.sqlite :as sqlite]
    [intemporal.doc.sqlite-store :as sstore]
    [intemporal.store :as s]
    [intemporal.workflow :as w]
    [intemporal.activity :as a]
    [hiccups.runtime :as hiccupsrt]))

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
    (doPost [_ _url] (maybe (fn [] "200 OK")))
    (doHead [_ _url] (maybe (fn [] "200 OK")))))

(defrecord MyHttpClient []
  HttpClient
  (doPost [_ id] (maybe (fn [] id)))
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
  ;(sqlite/run db "CREATE TABLE test (col1, col2);")
  ;(sqlite/run db "INSERT INTO test VALUES (?,?), (?,?)", [1,111,2,222])
  ;(js/console.log (sqlite/execute-one! db ["insert into test values (?,?)" 21, 2]))
  ;(js/console.log (pr-str (sqlite/execute! db ["select * from test"])))

  (let [sqlitestore (sstore/make-sqlite-store db)]
    ;; main demo code
    (s/clear-events sqlitestore)
    (w/register-workflow sqlitestore simpleflow)
    ;; now invoke

    (let [el (js/document.getElementById "runner")
          tbl (fn [rows header]
                (html
                  [:table {:role "grid"}
                   [:thead
                    [:tr
                     (for [h header] [:td h])]]
                   [:tbody
                    (for [r rows]
                      [:tr
                       (for [h header]
                         [:td (get r h)])])]]))]

      (.addEventListener el "click"

        (fn [e]
          (try
            (simpleflow "foo")
            (catch js/Object err
              (js/console.error "Workflow failed!" err)))

          (let [mdata  (sqlite/execute! db ["select * from metadata"])
                events (sqlite/execute! db ["select * from events"])]

            (-> js/document
              (.getElementById "metadata")
              (.-innerHTML)
              (set! (tbl mdata (keys (first mdata)))))
            (-> js/document
              (.getElementById "events")
              (.-innerHTML)
              (set! (tbl events (keys (first events))))))

          (comment
            (let [mdata  (sqlite/execute! db ["select * from metadata"])
                  events (sqlite/execute! db ["select * from events"])]
              (js/console.log "Metadata:")
              (js/console.table (clj->js mdata)
                (clj->js (keys (first mdata))))
              (js/console.log "Events:")
              (js/console.table (clj->js events)
                (clj->js (keys (first events)))))))))))


(defn init []
  (sqlite/init onready))

(comment
  (require '[shadow.cljs.devtools.api :as shadow])
  (require '[shadow.cljs.devtools.server :as server])
  (server/start!)
  (shadow/watch :doc)
  (shadow/browser-repl :doc)
  "")
