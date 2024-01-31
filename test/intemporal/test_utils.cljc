(ns intemporal.test-utils
  (:require [intemporal.workflow.internal :as in]))

;;;;
;; general

;; comparison of similar objects (lenient with extra keys)
(defmulti -alike? (fn [a _] (type a)))
(defmethod -alike? #?(:clj Exception :cljs js/Error) [a b]
  (= (type a)
     (if (= #?(:clj Class :cljs js/Function) (type b))
       b
       (type b))))

(defmethod -alike? #?(:clj java.util.Date :cljs js/Date) [a b]
  (= (type a)
     (if (= #?(:clj Class :cljs js/Function) (type b))
       b
       (type b))))

(defmethod -alike? nil [a b]
  (and (nil? a) (nil? b)))

(defmethod -alike? :default [a b]
  (= a b))

(defn alike?
  "Is every kv in `expected` present in `m`?"
  [m expected]
  (reduce (fn [acc [k v]]
            (and acc (-alike? (get m k) v)))
          true
          expected))

;;;;
;; helpers

(defn- make-task [& {:keys [proto type id ref root sym fvar args result state]
                     :or   {proto nil
                            type   :workflow
                            id     (in/random-id)
                            ref    'some-ref
                            root   'some-root
                            sym    'identity
                            fvar   #'identity
                            args   []
                            result nil
                            state  :new}}]
  (cond
    (= type :workflow)
    (in/->WorkflowExecutionTask type id ref root sym fvar args result state)
    (= type :activity)
    (in/->ActivityExecutionTask type id ref root sym fvar args result state)
    (= type :proto-activity)
    (in/->ProtoActivityExecutionTask proto type id ref root sym fvar args result state)))

(defn make-workflow-task [& {:keys [] :as args}]
  (make-task (assoc args :type :workflow)))

(defn make-activity-task [& {:keys [] :as args}]
  (make-task (assoc args :type :activity)))

(defn make-protocol-task [& {:keys [] :as args}]
  (make-task (assoc args :type :proto-activity)))

(make-protocol-task :proto 'IDeref)

