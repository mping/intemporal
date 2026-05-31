(ns intemporal.internal.lease
  "Shared dynamic binding for the worker that currently owns an executing
   workflow. The worker binds *owner* around resume-workflow; stores read it in
   save-events to validate the lease in the same transaction. When *owner* is
   nil (plain single-process start-workflow, no worker) lease validation is
   skipped entirely, so existing single-process behaviour is unchanged.")

(def ^:dynamic *owner*
  "Owner-id of the worker executing the current workflow, or nil."
  nil)
