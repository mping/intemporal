(ns intemporal.store.internal
  #?(:clj  (:require [intemporal.error :as error]
                     [taoensso.nippy :as nippy]
                     [malli.core :as m])
     :cljs (:require [clojure.edn :as edn]
                     [intemporal.error :as error]
                     [malli.core :as m])))

(defn next-id []
  #?(:clj  (System/currentTimeMillis)
     :cljs (.getTime (js/Date.))))

;;;;
;; serialization

(defn resolve-fvar [{:keys [sym] :as task}]
  ;; TODO does it work in cljs?
  (assoc task :fvar #?(:clj (requiring-resolve sym) :cljs nil)))

(defn serializable?
  "Indicates if an object is serializable"
  [x]
  #?(:clj  (nippy/freezable? x {:allow-java-serializable? true?})
     :cljs true))

(defn serialize
  "Serializes an object"
  [x]
  (when x
    #?(:clj  (nippy/freeze x)
       :cljs (pr-str x))))

(defn deserialize
  "Deserializes an object"
  [x]
  (when x
    #?(:clj  (nippy/thaw x)
       :cljs (edn/read x))))

;;;;
;; validation

#_:clj-kondo/ignore
#?(:clj (when (= "true" (System/getenv "DEV"))
          ((requiring-resolve 'malli.dev/start!))))

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
   [:timeout-ms {:optional true} :int]
   [:telemetry-context {:optional true} [:maybe :map]]])

(def ^:private Task
  [:map {:closed true}
   [:id [:or :string :uuid]]
   [:owner [:maybe :string]]
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
           :intemporal.protocol/invoke :intemporal.protocol/success :intemporal.protocol/failure
           :intemporal.workflow.internal/failure]]
   [:sym :symbol]
   [:args {:optional true} [:maybe [:sequential :any]]]
   [:result {:optional true} :any]
   [:error {:optional true} :any]])

;; valid task states
(def valid-state-transitions {:new     #{:pending}
                              :pending #{:new :success :failure}})

(defn validate-transition!
  "Ensures that the task's new `:state`, if any, is allowed.
  Useful to implement compare-and-swap semantics"
  [{:keys [state id]} attrs]
  (let [next-states (get valid-state-transitions state)]
    ;; if we are updating state
    ;; and the new state is not allowed
    ;; error out
    (when (and (contains? attrs :state)
               (not= (:state attrs) state)
               (not (contains? next-states (:state attrs))))
      (throw (ex-info (str "Cannot update task with id " id " from state " state " to " (:state attrs)) {:task-id    id
                                                                                                         :state      state
                                                                                                         :next-state (:state attrs)})))))
(def validate-task!
  "Throws if the task is not valid"
  (m/coercer Task nil {:registry registry}))

(def validate-event!
  "Throws if the event is not valid"
  (m/coercer Event nil {:registry registry}))

(defn validate-serializable!
  "Throws if the object is not serializable"
  ([obj]
   (validate-serializable! obj "Object is not serializable"))
  ([obj msg]
   (when-not (serializable? obj)
     (throw (ex-info msg {:object obj})))))


(defn success? [{:keys [state] :as task}]
  (= :success state))

(defn failure? [{:keys [state result] :as task}]
  (or (= :failure state)
      (and (= :pending state)
           (error/panic? result))))

(defn terminal? [task]
  (or (success? task)
      (failure? task)))