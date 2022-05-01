(ns intemporal.error
  (:import [intemporal.error WorkflowError]))

(defn workflow-error
  "Creates an WorkflowError to signal that a workflow error happened.
  Not meant to be caught."
  {:added "1.4"}
  ([msg map]
   (WorkflowError. msg map))
  ([msg map cause]
   (WorkflowError. msg map cause)))
