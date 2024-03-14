(ns intemporal.test-utils
  (:require [intemporal.workflow.internal :as in]))
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
