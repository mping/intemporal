(ns intemporal.example.dev
  (:require [intemporal.store :as s]
            [intemporal.store.memory :as mem])
  #?(:clj (:require [intemporal.workflow :as w]
                    [intemporal.activity :as a])
     :cljs (:require-macros [intemporal.workflow :as w]
                            [intemporal.activity :as a])))

(comment
  (require '[shadow.cljs.devtools.api :as shadow])
  (require '[shadow.cljs.devtools.server :as server])
  (shadow/watch :dev)
  (shadow/browser-repl :dev)

  "")

(def memstore (mem/memory-store))

(defn foo [] :foo)

(defn bar []
  (let [stubbed foo]
    (stubbed)))

(w/register-workflow memstore bar)


(defprotocol HttpClient
  (doHead [this id] "Can be called multiple times")
  (doPost [this id] "Should only be called once"))

(defrecord DummyHttpClient []
  HttpClient
  (doHead [this id] "head")
  (doPost [this id] "post"))

(macroexpand-1 '(a/stub-protocol HttpClient (->DummyHttpClient)))

