goog.provide('intemporal.workflow.execution');

/**
 * @interface
 */
intemporal.workflow.execution.IWorkflowExecution = function(){};

var intemporal$workflow$execution$IWorkflowExecution$_workflow_id$dyn_42134 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.workflow.execution._workflow_id[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.workflow.execution._workflow_id["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWorkflowExecution.-workflow-id",this$);
}
}
});
/**
 * Returns the workflow id, shared among every run
 */
intemporal.workflow.execution._workflow_id = (function intemporal$workflow$execution$_workflow_id(this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$workflow$execution$IWorkflowExecution$_workflow_id$arity$1 == null)))))){
return this$.intemporal$workflow$execution$IWorkflowExecution$_workflow_id$arity$1(this$);
} else {
return intemporal$workflow$execution$IWorkflowExecution$_workflow_id$dyn_42134(this$);
}
});

var intemporal$workflow$execution$IWorkflowExecution$_workflow_runid$dyn_42135 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.workflow.execution._workflow_runid[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.workflow.execution._workflow_runid["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWorkflowExecution.-workflow-runid",this$);
}
}
});
/**
 * Returns the workflow run id, unique per run
 */
intemporal.workflow.execution._workflow_runid = (function intemporal$workflow$execution$_workflow_runid(this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$workflow$execution$IWorkflowExecution$_workflow_runid$arity$1 == null)))))){
return this$.intemporal$workflow$execution$IWorkflowExecution$_workflow_runid$arity$1(this$);
} else {
return intemporal$workflow$execution$IWorkflowExecution$_workflow_runid$dyn_42135(this$);
}
});

var intemporal$workflow$execution$IWorkflowExecution$_workflow_compensations$dyn_42136 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.workflow.execution._workflow_compensations[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.workflow.execution._workflow_compensations["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWorkflowExecution.-workflow-compensations",this$);
}
}
});
/**
 * Gets a coll of all compensation functions
 */
intemporal.workflow.execution._workflow_compensations = (function intemporal$workflow$execution$_workflow_compensations(this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$workflow$execution$IWorkflowExecution$_workflow_compensations$arity$1 == null)))))){
return this$.intemporal$workflow$execution$IWorkflowExecution$_workflow_compensations$arity$1(this$);
} else {
return intemporal$workflow$execution$IWorkflowExecution$_workflow_compensations$dyn_42136(this$);
}
});

var intemporal$workflow$execution$IWorkflowExecution$_add_compensation$dyn_42137 = (function (this$,compensation_fn){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.workflow.execution._add_compensation[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,compensation_fn) : m__5394__auto__.call(null,this$,compensation_fn));
} else {
var m__5392__auto__ = (intemporal.workflow.execution._add_compensation["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,compensation_fn) : m__5392__auto__.call(null,this$,compensation_fn));
} else {
throw cljs.core.missing_protocol("IWorkflowExecution.-add-compensation",this$);
}
}
});
/**
 * Adds a compensation function to the list of fns to call if the workflow fails
 */
intemporal.workflow.execution._add_compensation = (function intemporal$workflow$execution$_add_compensation(this$,compensation_fn){
if((((!((this$ == null)))) && ((!((this$.intemporal$workflow$execution$IWorkflowExecution$_add_compensation$arity$2 == null)))))){
return this$.intemporal$workflow$execution$IWorkflowExecution$_add_compensation$arity$2(this$,compensation_fn);
} else {
return intemporal$workflow$execution$IWorkflowExecution$_add_compensation$dyn_42137(this$,compensation_fn);
}
});

var intemporal$workflow$execution$IWorkflowExecution$_save_workflow_event_BANG_$dyn_42138 = (function (this$,event_type,payload){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.workflow.execution._save_workflow_event_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,event_type,payload) : m__5394__auto__.call(null,this$,event_type,payload));
} else {
var m__5392__auto__ = (intemporal.workflow.execution._save_workflow_event_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,event_type,payload) : m__5392__auto__.call(null,this$,event_type,payload));
} else {
throw cljs.core.missing_protocol("IWorkflowExecution.-save-workflow-event!",this$);
}
}
});
/**
 * Saves a workflow event
 */
intemporal.workflow.execution._save_workflow_event_BANG_ = (function intemporal$workflow$execution$_save_workflow_event_BANG_(this$,event_type,payload){
if((((!((this$ == null)))) && ((!((this$.intemporal$workflow$execution$IWorkflowExecution$_save_workflow_event_BANG_$arity$3 == null)))))){
return this$.intemporal$workflow$execution$IWorkflowExecution$_save_workflow_event_BANG_$arity$3(this$,event_type,payload);
} else {
return intemporal$workflow$execution$IWorkflowExecution$_save_workflow_event_BANG_$dyn_42138(this$,event_type,payload);
}
});

var intemporal$workflow$execution$IWorkflowExecution$_save_activity_event_BANG_$dyn_42139 = (function (this$,activity_id,event_type,payload){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.workflow.execution._save_activity_event_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(this$,activity_id,event_type,payload) : m__5394__auto__.call(null,this$,activity_id,event_type,payload));
} else {
var m__5392__auto__ = (intemporal.workflow.execution._save_activity_event_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(this$,activity_id,event_type,payload) : m__5392__auto__.call(null,this$,activity_id,event_type,payload));
} else {
throw cljs.core.missing_protocol("IWorkflowExecution.-save-activity-event!",this$);
}
}
});
/**
 * Saves an activity event
 */
intemporal.workflow.execution._save_activity_event_BANG_ = (function intemporal$workflow$execution$_save_activity_event_BANG_(this$,activity_id,event_type,payload){
if((((!((this$ == null)))) && ((!((this$.intemporal$workflow$execution$IWorkflowExecution$_save_activity_event_BANG_$arity$4 == null)))))){
return this$.intemporal$workflow$execution$IWorkflowExecution$_save_activity_event_BANG_$arity$4(this$,activity_id,event_type,payload);
} else {
return intemporal$workflow$execution$IWorkflowExecution$_save_activity_event_BANG_$dyn_42139(this$,activity_id,event_type,payload);
}
});

var intemporal$workflow$execution$IWorkflowExecution$_current_event$dyn_42140 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.workflow.execution._current_event[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.workflow.execution._current_event["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWorkflowExecution.-current-event",this$);
}
}
});
/**
 * Gets current event
 */
intemporal.workflow.execution._current_event = (function intemporal$workflow$execution$_current_event(this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$workflow$execution$IWorkflowExecution$_current_event$arity$1 == null)))))){
return this$.intemporal$workflow$execution$IWorkflowExecution$_current_event$arity$1(this$);
} else {
return intemporal$workflow$execution$IWorkflowExecution$_current_event$dyn_42140(this$);
}
});

var intemporal$workflow$execution$IWorkflowExecution$_next_event$dyn_42141 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.workflow.execution._next_event[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.workflow.execution._next_event["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWorkflowExecution.-next-event",this$);
}
}
});
/**
 * Gets next event
 */
intemporal.workflow.execution._next_event = (function intemporal$workflow$execution$_next_event(this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$workflow$execution$IWorkflowExecution$_next_event$arity$1 == null)))))){
return this$.intemporal$workflow$execution$IWorkflowExecution$_next_event$arity$1(this$);
} else {
return intemporal$workflow$execution$IWorkflowExecution$_next_event$dyn_42141(this$);
}
});

var intemporal$workflow$execution$IWorkflowExecution$_reset_history_cursor$dyn_42142 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.workflow.execution._reset_history_cursor[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.workflow.execution._reset_history_cursor["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWorkflowExecution.-reset-history-cursor",this$);
}
}
});
/**
 * Resets the events cursor
 */
intemporal.workflow.execution._reset_history_cursor = (function intemporal$workflow$execution$_reset_history_cursor(this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$workflow$execution$IWorkflowExecution$_reset_history_cursor$arity$1 == null)))))){
return this$.intemporal$workflow$execution$IWorkflowExecution$_reset_history_cursor$arity$1(this$);
} else {
return intemporal$workflow$execution$IWorkflowExecution$_reset_history_cursor$dyn_42142(this$);
}
});

var intemporal$workflow$execution$IWorkflowExecution$_advance_history_cursor$dyn_42143 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.workflow.execution._advance_history_cursor[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.workflow.execution._advance_history_cursor["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWorkflowExecution.-advance-history-cursor",this$);
}
}
});
/**
 * Advance-only cursor for the events of this workflow run
 */
intemporal.workflow.execution._advance_history_cursor = (function intemporal$workflow$execution$_advance_history_cursor(this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$workflow$execution$IWorkflowExecution$_advance_history_cursor$arity$1 == null)))))){
return this$.intemporal$workflow$execution$IWorkflowExecution$_advance_history_cursor$arity$1(this$);
} else {
return intemporal$workflow$execution$IWorkflowExecution$_advance_history_cursor$dyn_42143(this$);
}
});

var intemporal$workflow$execution$IWorkflowExecution$_delete_history_forward$dyn_42144 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.workflow.execution._delete_history_forward[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.workflow.execution._delete_history_forward["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWorkflowExecution.-delete-history-forward",this$);
}
}
});
/**
 * Deletes all susequent events
 */
intemporal.workflow.execution._delete_history_forward = (function intemporal$workflow$execution$_delete_history_forward(this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$workflow$execution$IWorkflowExecution$_delete_history_forward$arity$1 == null)))))){
return this$.intemporal$workflow$execution$IWorkflowExecution$_delete_history_forward$arity$1(this$);
} else {
return intemporal$workflow$execution$IWorkflowExecution$_delete_history_forward$dyn_42144(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {intemporal.workflow.execution.IWorkflowExecution}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
intemporal.workflow.execution.WorkflowExecution = (function (store,state,workflow_id,run_id,__meta,__extmap,__hash){
this.store = store;
this.state = state;
this.workflow_id = workflow_id;
this.run_id = run_id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k42095,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__42100 = k42095;
var G__42100__$1 = (((G__42100 instanceof cljs.core.Keyword))?G__42100.fqn:null);
switch (G__42100__$1) {
case "store":
return self__.store;

break;
case "state":
return self__.state;

break;
case "workflow-id":
return self__.workflow_id;

break;
case "run-id":
return self__.run_id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42095,else__5346__auto__);

}
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__42101){
var vec__42102 = p__42101;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42102,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42102,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#intemporal.workflow.execution.WorkflowExecution{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"store","store",1512230022),self__.store],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"workflow-id","workflow-id",-199003646),self__.workflow_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"run-id","run-id",-1745267908),self__.run_id],null))], null),self__.__extmap));
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42094){
var self__ = this;
var G__42094__$1 = this;
return (new cljs.core.RecordIter((0),G__42094__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"workflow-id","workflow-id",-199003646),new cljs.core.Keyword(null,"run-id","run-id",-1745267908)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new intemporal.workflow.execution.WorkflowExecution(self__.store,self__.state,self__.workflow_id,self__.run_id,self__.__meta,self__.__extmap,self__.__hash));
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.intemporal$workflow$execution$IWorkflowExecution$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.workflow.execution.WorkflowExecution.prototype.intemporal$workflow$execution$IWorkflowExecution$_workflow_runid$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.run_id;
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.intemporal$workflow$execution$IWorkflowExecution$_save_activity_event_BANG_$arity$4 = (function (_,activity_id,event_type,payload){
var self__ = this;
var ___$1 = this;
return intemporal.store.save_activity_event(self__.store,self__.workflow_id,self__.run_id,activity_id,event_type,payload);
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.intemporal$workflow$execution$IWorkflowExecution$_next_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var evt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),new cljs.core.Keyword(null,"events-cursor","events-cursor",1946628866));
var nxt = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(evt,new cljs.core.Keyword("intemporal.workflow.execution","none","intemporal.workflow.execution/none",-1526915186)))?null:(((!((evt == null))))?intemporal.store.next_event(self__.store,self__.workflow_id,self__.run_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(evt)):intemporal.store.next_event(self__.store,self__.workflow_id,self__.run_id)
));
return nxt;
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.intemporal$workflow$execution$IWorkflowExecution$_current_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),new cljs.core.Keyword(null,"events-cursor","events-cursor",1946628866));
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.intemporal$workflow$execution$IWorkflowExecution$_workflow_compensations$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"compensations","compensations",-2044076971).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.intemporal$workflow$execution$IWorkflowExecution$_reset_history_cursor$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"events-cursor","events-cursor",1946628866),null);
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.intemporal$workflow$execution$IWorkflowExecution$_workflow_id$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.workflow_id;
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.intemporal$workflow$execution$IWorkflowExecution$_advance_history_cursor$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var evt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),new cljs.core.Keyword(null,"events-cursor","events-cursor",1946628866));
var res = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(evt,new cljs.core.Keyword("intemporal.workflow.execution","none","intemporal.workflow.execution/none",-1526915186)))?null:(((!((evt == null))))?intemporal.store.next_event(self__.store,self__.workflow_id,self__.run_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(evt)):intemporal.store.next_event(self__.store,self__.workflow_id,self__.run_id)
));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"events-cursor","events-cursor",1946628866),(function (){var or__5045__auto__ = res;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("intemporal.workflow.execution","none","intemporal.workflow.execution/none",-1526915186);
}
})());

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"intemporal.workflow.execution",null,56,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[history] current event: %s",res], null);
}),null)),null,1713872956,null);

return res;
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.intemporal$workflow$execution$IWorkflowExecution$_save_workflow_event_BANG_$arity$3 = (function (_,event_type,payload){
var self__ = this;
var ___$1 = this;
return intemporal.store.save_workflow_event(self__.store,self__.workflow_id,self__.run_id,event_type,payload);
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.intemporal$workflow$execution$IWorkflowExecution$_delete_history_forward$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),new cljs.core.Keyword(null,"events-cursor","events-cursor",1946628866));
if(cljs.core.truth_(temp__5804__auto__)){
var evt = temp__5804__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"intemporal.workflow.execution",null,60,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[history] deleting all events starting from %s",evt], null);
}),null)),null,287259619,null);

return intemporal.store.expunge_events(self__.store,self__.workflow_id,self__.run_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(evt));
} else {
return null;
}
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.intemporal$workflow$execution$IWorkflowExecution$_add_compensation$arity$2 = (function (_,compensation_fn){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compensations","compensations",-2044076971)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([compensation_fn], 0));
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-842341532 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42096,other42097){
var self__ = this;
var this42096__$1 = this;
return (((!((other42097 == null)))) && ((((this42096__$1.constructor === other42097.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42096__$1.store,other42097.store)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42096__$1.state,other42097.state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42096__$1.workflow_id,other42097.workflow_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42096__$1.run_id,other42097.run_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42096__$1.__extmap,other42097.__extmap)))))))))))));
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"workflow-id","workflow-id",-199003646),null,new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"run-id","run-id",-1745267908),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new intemporal.workflow.execution.WorkflowExecution(self__.store,self__.state,self__.workflow_id,self__.run_id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k42095){
var self__ = this;
var this__5350__auto____$1 = this;
var G__42127 = k42095;
var G__42127__$1 = (((G__42127 instanceof cljs.core.Keyword))?G__42127.fqn:null);
switch (G__42127__$1) {
case "store":
case "state":
case "workflow-id":
case "run-id":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42095);

}
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__42094){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__42128 = cljs.core.keyword_identical_QMARK_;
var expr__42129 = k__5352__auto__;
if(cljs.core.truth_((pred__42128.cljs$core$IFn$_invoke$arity$2 ? pred__42128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"store","store",1512230022),expr__42129) : pred__42128.call(null,new cljs.core.Keyword(null,"store","store",1512230022),expr__42129)))){
return (new intemporal.workflow.execution.WorkflowExecution(G__42094,self__.state,self__.workflow_id,self__.run_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42128.cljs$core$IFn$_invoke$arity$2 ? pred__42128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__42129) : pred__42128.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__42129)))){
return (new intemporal.workflow.execution.WorkflowExecution(self__.store,G__42094,self__.workflow_id,self__.run_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42128.cljs$core$IFn$_invoke$arity$2 ? pred__42128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workflow-id","workflow-id",-199003646),expr__42129) : pred__42128.call(null,new cljs.core.Keyword(null,"workflow-id","workflow-id",-199003646),expr__42129)))){
return (new intemporal.workflow.execution.WorkflowExecution(self__.store,self__.state,G__42094,self__.run_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42128.cljs$core$IFn$_invoke$arity$2 ? pred__42128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"run-id","run-id",-1745267908),expr__42129) : pred__42128.call(null,new cljs.core.Keyword(null,"run-id","run-id",-1745267908),expr__42129)))){
return (new intemporal.workflow.execution.WorkflowExecution(self__.store,self__.state,self__.workflow_id,G__42094,self__.__meta,self__.__extmap,null));
} else {
return (new intemporal.workflow.execution.WorkflowExecution(self__.store,self__.state,self__.workflow_id,self__.run_id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__42094),null));
}
}
}
}
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"store","store",1512230022),self__.store,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"workflow-id","workflow-id",-199003646),self__.workflow_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"run-id","run-id",-1745267908),self__.run_id,null))], null),self__.__extmap));
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__42094){
var self__ = this;
var this__5342__auto____$1 = this;
return (new intemporal.workflow.execution.WorkflowExecution(self__.store,self__.state,self__.workflow_id,self__.run_id,G__42094,self__.__extmap,self__.__hash));
}));

(intemporal.workflow.execution.WorkflowExecution.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(intemporal.workflow.execution.WorkflowExecution.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"workflow-id","workflow-id",1441527881,null),new cljs.core.Symbol(null,"run-id","run-id",-104736381,null)], null);
}));

(intemporal.workflow.execution.WorkflowExecution.cljs$lang$type = true);

(intemporal.workflow.execution.WorkflowExecution.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"intemporal.workflow.execution/WorkflowExecution",null,(1),null));
}));

(intemporal.workflow.execution.WorkflowExecution.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"intemporal.workflow.execution/WorkflowExecution");
}));

/**
 * Positional factory function for intemporal.workflow.execution/WorkflowExecution.
 */
intemporal.workflow.execution.__GT_WorkflowExecution = (function intemporal$workflow$execution$__GT_WorkflowExecution(store,state,workflow_id,run_id){
return (new intemporal.workflow.execution.WorkflowExecution(store,state,workflow_id,run_id,null,null,null));
});

/**
 * Factory function for intemporal.workflow.execution/WorkflowExecution, taking a map of keywords to field values.
 */
intemporal.workflow.execution.map__GT_WorkflowExecution = (function intemporal$workflow$execution$map__GT_WorkflowExecution(G__42098){
var extmap__5385__auto__ = (function (){var G__42131 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42098,new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"workflow-id","workflow-id",-199003646),new cljs.core.Keyword(null,"run-id","run-id",-1745267908)], 0));
if(cljs.core.record_QMARK_(G__42098)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42131);
} else {
return G__42131;
}
})();
return (new intemporal.workflow.execution.WorkflowExecution(new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(G__42098),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__42098),new cljs.core.Keyword(null,"workflow-id","workflow-id",-199003646).cljs$core$IFn$_invoke$arity$1(G__42098),new cljs.core.Keyword(null,"run-id","run-id",-1745267908).cljs$core$IFn$_invoke$arity$1(G__42098),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * Makes a new workflow run for the given workflow id
 */
intemporal.workflow.execution.make_workflow_execution = (function intemporal$workflow$execution$make_workflow_execution(var_args){
var G__42133 = arguments.length;
switch (G__42133) {
case 2:
return intemporal.workflow.execution.make_workflow_execution.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return intemporal.workflow.execution.make_workflow_execution.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intemporal.workflow.execution.make_workflow_execution.cljs$core$IFn$_invoke$arity$2 = (function (store,wid){
return intemporal.workflow.execution.make_workflow_execution.cljs$core$IFn$_invoke$arity$3(store,wid,intemporal.store.randomUUID());
}));

(intemporal.workflow.execution.make_workflow_execution.cljs$core$IFn$_invoke$arity$3 = (function (store,wid,runid){
var runid__$1 = runid;
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events-cursor","events-cursor",1946628866),null,new cljs.core.Keyword(null,"compensations","compensations",-2044076971),cljs.core.PersistentVector.EMPTY], null));
return intemporal.workflow.execution.__GT_WorkflowExecution(store,state,wid,runid__$1);
}));

(intemporal.workflow.execution.make_workflow_execution.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=intemporal.workflow.execution.js.map
