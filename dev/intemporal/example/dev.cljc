(ns intemporal.example.dev
  (:require [intemporal.store :as s]
            [intemporal.store.memory :as mem]
            [intemporal.workflow :as w]
            [intemporal.activity :as a]))
(comment
  (require '[shadow.cljs.devtools.api :as shadow])
  (require '[shadow.cljs.devtools.server :as server])
  (shadow/watch :dev)
  (shadow/browser-repl :dev)

  "")

(def memstore (mem/memory-store))

(defn foo [] :foo)

(defprotocol HttpClient
  (doHead [this id] "Can be called multiple times")
  (doPost [this id] "Should only be called once"))

(defrecord DummyHttpClient []
  HttpClient
  (doHead [this id] "head")
  (doPost [this id] "post"))

(defn bar []
  (let [s (a/stub-function foo)
        sp (a/stub-protocol HttpClient (->DummyHttpClient))]
    [(s) (doHead sp 1)]))

(w/register-workflow memstore bar)

(bar)


