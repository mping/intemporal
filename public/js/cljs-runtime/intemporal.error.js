goog.provide('intemporal.error');
/**
 * Creates an WorkflowError to signal that a workflow error happened.
 *   Not meant to be caught.
 */
intemporal.error.workflow_error = (function intemporal$error$workflow_error(msg){
return (new Error(msg));
});

//# sourceMappingURL=intemporal.error.js.map
