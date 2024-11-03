(ns intemporal.store.internal
  (:require [malli.core :as m]
            #?(:clj [taoensso.nippy :as nippy]
               :cljs [clojure.edn :as edn])))

(defn next-id []
  #?(:clj  (System/currentTimeMillis)
     :cljs (.getTime (js/Date.))))

;;;;
;; serialization

(defn- resolve-fvar [{:keys [sym] :as task}]
  ;; TODO does it work in cljs?
  (assoc task :fvar #?(:clj (requiring-resolve sym) :cljs nil)))

(defn serializable?
  "Indicates if an object is serializable"
  [x]
  #?(:clj (nippy/freezable? x {:allow-java-serializable? true?})
     :cljs true))

(defn serialize
  "Serializes an object"
  [x]
  (when x
    #?(:clj (nippy/freeze x)
       :cljs (pr-str x))))

(defn deserialize
  "Deserializes an object"
  [x]
  (when x
    #?(:clj (resolve-fvar (nippy/thaw x))
       :cljs (resolve-fvar (edn/read x)))))


;;;;
;; validation

#_:clj-kondo/ignore
(when #?(:clj  (= "true" (System/getenv "DEV"))
         :cljs false)
  ((requiring-resolve 'malli.dev/start!)))

;;;;
;; validation
(def registry
  (merge
    (m/class-schemas)
    (m/comparator-schemas)
    (m/base-schemas)
    (m/type-schemas)
    {:var (m/-simple-schema {:type :var, :pred #(or (fn? %) (var? %))})}))

(def ^:private RuntimeConfig
  [:map {:closed false}
   [:task-per-activity? {:optional true} :boolean]
   [:timeout-ms {:optional true} :int]])

(def ^:private Task
  [:map {:closed true}
   [:id [:or :string :uuid]]
   [:sym :symbol]
   [:ref [:maybe :string]]
   [:root [:maybe :string]]
   [:proto {:optional true} :symbol]
   [:fvar :var]
   [:args {:optional true} [:maybe [:sequential :any]]]
   [:result :any]
   [:state [:enum :new :pending :failure :success]]
   [:type [:enum :workflow :activity :proto-activity]]
   [:lease-end {:optional true} [:maybe :int]]
   [:order {:optional true} :int]
   [:runtime {:optional true} RuntimeConfig]])

(def ^:private Event
  [:map {:closed true}
   [:id :int]
   [:ref [:maybe :string]]
   [:root [:maybe :string]]
   [:type [:enum
           :intemporal.workflow/invoke :intemporal.workflow/success :intemporal.workflow/failure
           :intemporal.activity/invoke :intemporal.activity/success :intemporal.activity/failure
           :intemporal.protocol/invoke :intemporal.protocol/success :intemporal.protocol/failure]]
   [:sym :symbol]
   [:args {:optional true} [:maybe [:sequential :any]]]
   [:result {:optional true} :any]
   [:error {:optional true} :any]])

(def validate-task (m/coercer Task nil {:registry registry}))
(def validate-event (m/coercer Event nil {:registry registry}))
