(ns intemporal.error)

(defn workflow-error
  "Creates an WorkflowError to signal that a workflow error happened.
  Not meant to be caught."
  ([^String msg]
   #?(:clj (Error. msg)
      :cljs (js/Error. msg))))