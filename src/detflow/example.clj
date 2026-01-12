(ns detflow.example
  (:require [detflow.workflow :as wf]
            [detflow.activity :as act]
            [detflow.engine :as engine]))

;; --- Define Activities ---

(act/defactivity fetch-order [id]
  (println ">> IO: Fetching order" id)
  {:id id :item "Book" :price 100})

(act/defactivity charge-card [amount]
  (println ">> IO: Charging card" amount)
  {:status :paid :tx-id (rand-int 9999)})

(act/defactivity send-email [email]
  (println ">> IO: Sending email to" email)
  :sent)

;; --- Define Workflow ---

(wf/defworkflow order-flow [order-id]
  (let [order        (wf/await (wf/activity `fetch-order [order-id]))

        ;; Async fork example
        payment-task (wf/async (fn []
                                 (wf/await (wf/activity `charge-card [(:price order)]))))

        ;; Do something else while payment processes
        _            (wf/await (wf/sleep 100))

        payment      (wf/await `payment-task)]

    (wf/await (wf/activity `send-email "user@example.com"))

    {:order order :payment payment}))

;; --- Run It ---

(let [eng (engine/create {:persistence (engine/in-memory-store)})]

  (println "--- Starting Workflow ---")
  (let [result (engine/start-workflow
                 eng
                 {:workflow order-flow
                  :id       "wf-1"
                  :args     [123]})]
    (println "--- Workflow Completed ---")
    (println "Result:" result)))