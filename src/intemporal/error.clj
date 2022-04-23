(ns intemporal.error
  (:import [intemporal.error ExceptionError]))

(defn workflow-error
  "Creates an ExceptionError to signal that a workflow error happened.
  Not meant to be caught."
  {:added "1.4"}
  ([msg map]
   (ExceptionError. msg map))
  ([msg map cause]
   (ExceptionError. msg map cause)))
