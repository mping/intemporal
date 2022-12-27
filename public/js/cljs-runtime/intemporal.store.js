goog.provide('intemporal.store');

/**
 * @interface
 */
intemporal.store.WorkflowStore = function(){};

var intemporal$store$WorkflowStore$id$dyn_36007 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.id[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.store.id["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("WorkflowStore.id",this$);
}
}
});
/**
 * Returns the id of the current store
 */
intemporal.store.id = (function intemporal$store$id(this$){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","id","intemporal.store/id",945016065,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$1(this$) : meta_impl__5395__auto__.call(null,this$));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$id$arity$1 == null)))))){
return this$.intemporal$store$WorkflowStore$id$arity$1(this$);
} else {
return intemporal$store$WorkflowStore$id$dyn_36007(this$);
}
}
});

var intemporal$store$WorkflowStore$clear$dyn_36014 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.clear[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.store.clear["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("WorkflowStore.clear",this$);
}
}
});
/**
 * Expunges EVERYTHING
 */
intemporal.store.clear = (function intemporal$store$clear(this$){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","clear","intemporal.store/clear",-545362916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$1(this$) : meta_impl__5395__auto__.call(null,this$));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$clear$arity$1 == null)))))){
return this$.intemporal$store$WorkflowStore$clear$arity$1(this$);
} else {
return intemporal$store$WorkflowStore$clear$dyn_36014(this$);
}
}
});

var intemporal$store$WorkflowStore$find_workflow$dyn_36017 = (function (this$,runid){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.find_workflow[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,runid) : m__5394__auto__.call(null,this$,runid));
} else {
var m__5392__auto__ = (intemporal.store.find_workflow["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,runid) : m__5392__auto__.call(null,this$,runid));
} else {
throw cljs.core.missing_protocol("WorkflowStore.find-workflow",this$);
}
}
});
/**
 * Gets the workflow associated with the runid. Returns a tuple `[symbol var]`, ie `['wflow #'wflow-var]`
 */
intemporal.store.find_workflow = (function intemporal$store$find_workflow(this$,runid){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","find-workflow","intemporal.store/find-workflow",-73700256,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$2(this$,runid) : meta_impl__5395__auto__.call(null,this$,runid));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$find_workflow$arity$2 == null)))))){
return this$.intemporal$store$WorkflowStore$find_workflow$arity$2(this$,runid);
} else {
return intemporal$store$WorkflowStore$find_workflow$dyn_36017(this$,runid);
}
}
});

var intemporal$store$WorkflowStore$find_workflow_run$dyn_36022 = (function() {
var G__36023 = null;
var G__36023__2 = (function (this$,runid){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.find_workflow_run[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,runid) : m__5394__auto__.call(null,this$,runid));
} else {
var m__5392__auto__ = (intemporal.store.find_workflow_run["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,runid) : m__5392__auto__.call(null,this$,runid));
} else {
throw cljs.core.missing_protocol("WorkflowStore.find-workflow-run",this$);
}
}
});
var G__36023__3 = (function (this$,runid,opts){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.find_workflow_run[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,runid,opts) : m__5394__auto__.call(null,this$,runid,opts));
} else {
var m__5392__auto__ = (intemporal.store.find_workflow_run["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,runid,opts) : m__5392__auto__.call(null,this$,runid,opts));
} else {
throw cljs.core.missing_protocol("WorkflowStore.find-workflow-run",this$);
}
}
});
G__36023 = function(this$,runid,opts){
switch(arguments.length){
case 2:
return G__36023__2.call(this,this$,runid);
case 3:
return G__36023__3.call(this,this$,runid,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36023.cljs$core$IFn$_invoke$arity$2 = G__36023__2;
G__36023.cljs$core$IFn$_invoke$arity$3 = G__36023__3;
return G__36023;
})()
;
/**
 * Gets data for a given run
 */
intemporal.store.find_workflow_run = (function intemporal$store$find_workflow_run(var_args){
var G__35779 = arguments.length;
switch (G__35779) {
case 2:
return intemporal.store.find_workflow_run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return intemporal.store.find_workflow_run.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intemporal.store.find_workflow_run.cljs$core$IFn$_invoke$arity$2 = (function (this$,runid){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","find-workflow-run","intemporal.store/find-workflow-run",-1325558529,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$2(this$,runid) : meta_impl__5395__auto__.call(null,this$,runid));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$find_workflow_run$arity$2 == null)))))){
return this$.intemporal$store$WorkflowStore$find_workflow_run$arity$2(this$,runid);
} else {
return intemporal$store$WorkflowStore$find_workflow_run$dyn_36022(this$,runid);
}
}
}));

(intemporal.store.find_workflow_run.cljs$core$IFn$_invoke$arity$3 = (function (this$,runid,opts){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","find-workflow-run","intemporal.store/find-workflow-run",-1325558529,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$3 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$3(this$,runid,opts) : meta_impl__5395__auto__.call(null,this$,runid,opts));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$find_workflow_run$arity$3 == null)))))){
return this$.intemporal$store$WorkflowStore$find_workflow_run$arity$3(this$,runid,opts);
} else {
return intemporal$store$WorkflowStore$find_workflow_run$dyn_36022(this$,runid,opts);
}
}
}));

(intemporal.store.find_workflow_run.cljs$lang$maxFixedArity = 3);


var intemporal$store$WorkflowStore$list_workflow_runs$dyn_36035 = (function() {
var G__36036 = null;
var G__36036__1 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.list_workflow_runs[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.store.list_workflow_runs["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("WorkflowStore.list-workflow-runs",this$);
}
}
});
var G__36036__2 = (function (this$,wid){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.list_workflow_runs[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,wid) : m__5394__auto__.call(null,this$,wid));
} else {
var m__5392__auto__ = (intemporal.store.list_workflow_runs["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,wid) : m__5392__auto__.call(null,this$,wid));
} else {
throw cljs.core.missing_protocol("WorkflowStore.list-workflow-runs",this$);
}
}
});
G__36036 = function(this$,wid){
switch(arguments.length){
case 1:
return G__36036__1.call(this,this$);
case 2:
return G__36036__2.call(this,this$,wid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36036.cljs$core$IFn$_invoke$arity$1 = G__36036__1;
G__36036.cljs$core$IFn$_invoke$arity$2 = G__36036__2;
return G__36036;
})()
;
/**
 * Lists workflow runs, optionally for a given workflow id
 */
intemporal.store.list_workflow_runs = (function intemporal$store$list_workflow_runs(var_args){
var G__35792 = arguments.length;
switch (G__35792) {
case 1:
return intemporal.store.list_workflow_runs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return intemporal.store.list_workflow_runs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intemporal.store.list_workflow_runs.cljs$core$IFn$_invoke$arity$1 = (function (this$){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","list-workflow-runs","intemporal.store/list-workflow-runs",-295958387,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$1(this$) : meta_impl__5395__auto__.call(null,this$));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$list_workflow_runs$arity$1 == null)))))){
return this$.intemporal$store$WorkflowStore$list_workflow_runs$arity$1(this$);
} else {
return intemporal$store$WorkflowStore$list_workflow_runs$dyn_36035(this$);
}
}
}));

(intemporal.store.list_workflow_runs.cljs$core$IFn$_invoke$arity$2 = (function (this$,wid){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","list-workflow-runs","intemporal.store/list-workflow-runs",-295958387,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$2(this$,wid) : meta_impl__5395__auto__.call(null,this$,wid));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$list_workflow_runs$arity$2 == null)))))){
return this$.intemporal$store$WorkflowStore$list_workflow_runs$arity$2(this$,wid);
} else {
return intemporal$store$WorkflowStore$list_workflow_runs$dyn_36035(this$,wid);
}
}
}));

(intemporal.store.list_workflow_runs.cljs$lang$maxFixedArity = 2);


var intemporal$store$WorkflowStore$clear_events$dyn_36044 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.clear_events[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.store.clear_events["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("WorkflowStore.clear-events",this$);
}
}
});
/**
 * Expunges ALL events
 */
intemporal.store.clear_events = (function intemporal$store$clear_events(this$){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","clear-events","intemporal.store/clear-events",670891409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$1(this$) : meta_impl__5395__auto__.call(null,this$));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$clear_events$arity$1 == null)))))){
return this$.intemporal$store$WorkflowStore$clear_events$arity$1(this$);
} else {
return intemporal$store$WorkflowStore$clear_events$dyn_36044(this$);
}
}
});

var intemporal$store$WorkflowStore$next_event$dyn_36054 = (function() {
var G__36055 = null;
var G__36055__3 = (function (this$,wid,runid){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.next_event[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,wid,runid) : m__5394__auto__.call(null,this$,wid,runid));
} else {
var m__5392__auto__ = (intemporal.store.next_event["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,wid,runid) : m__5392__auto__.call(null,this$,wid,runid));
} else {
throw cljs.core.missing_protocol("WorkflowStore.next-event",this$);
}
}
});
var G__36055__4 = (function (this$,wid,runid,evtid){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.next_event[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(this$,wid,runid,evtid) : m__5394__auto__.call(null,this$,wid,runid,evtid));
} else {
var m__5392__auto__ = (intemporal.store.next_event["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(this$,wid,runid,evtid) : m__5392__auto__.call(null,this$,wid,runid,evtid));
} else {
throw cljs.core.missing_protocol("WorkflowStore.next-event",this$);
}
}
});
G__36055 = function(this$,wid,runid,evtid){
switch(arguments.length){
case 3:
return G__36055__3.call(this,this$,wid,runid);
case 4:
return G__36055__4.call(this,this$,wid,runid,evtid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36055.cljs$core$IFn$_invoke$arity$3 = G__36055__3;
G__36055.cljs$core$IFn$_invoke$arity$4 = G__36055__4;
return G__36055;
})()
;
/**
 * Gets the first or next event for a give runid, and optional event id
 */
intemporal.store.next_event = (function intemporal$store$next_event(var_args){
var G__35817 = arguments.length;
switch (G__35817) {
case 3:
return intemporal.store.next_event.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return intemporal.store.next_event.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intemporal.store.next_event.cljs$core$IFn$_invoke$arity$3 = (function (this$,wid,runid){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","next-event","intemporal.store/next-event",890516071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$3 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$3(this$,wid,runid) : meta_impl__5395__auto__.call(null,this$,wid,runid));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$next_event$arity$3 == null)))))){
return this$.intemporal$store$WorkflowStore$next_event$arity$3(this$,wid,runid);
} else {
return intemporal$store$WorkflowStore$next_event$dyn_36054(this$,wid,runid);
}
}
}));

(intemporal.store.next_event.cljs$core$IFn$_invoke$arity$4 = (function (this$,wid,runid,evtid){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","next-event","intemporal.store/next-event",890516071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$4 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$4(this$,wid,runid,evtid) : meta_impl__5395__auto__.call(null,this$,wid,runid,evtid));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$next_event$arity$4 == null)))))){
return this$.intemporal$store$WorkflowStore$next_event$arity$4(this$,wid,runid,evtid);
} else {
return intemporal$store$WorkflowStore$next_event$dyn_36054(this$,wid,runid,evtid);
}
}
}));

(intemporal.store.next_event.cljs$lang$maxFixedArity = 4);


var intemporal$store$WorkflowStore$expunge_events$dyn_36079 = (function (this$,wid,runid,evtid){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.expunge_events[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(this$,wid,runid,evtid) : m__5394__auto__.call(null,this$,wid,runid,evtid));
} else {
var m__5392__auto__ = (intemporal.store.expunge_events["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(this$,wid,runid,evtid) : m__5392__auto__.call(null,this$,wid,runid,evtid));
} else {
throw cljs.core.missing_protocol("WorkflowStore.expunge-events",this$);
}
}
});
/**
 * Expunges all events after `evtid`
 */
intemporal.store.expunge_events = (function intemporal$store$expunge_events(this$,wid,runid,evtid){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","expunge-events","intemporal.store/expunge-events",1391984654,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$4 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$4(this$,wid,runid,evtid) : meta_impl__5395__auto__.call(null,this$,wid,runid,evtid));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$expunge_events$arity$4 == null)))))){
return this$.intemporal$store$WorkflowStore$expunge_events$arity$4(this$,wid,runid,evtid);
} else {
return intemporal$store$WorkflowStore$expunge_events$dyn_36079(this$,wid,runid,evtid);
}
}
});

var intemporal$store$WorkflowStore$events__GT_table$dyn_36083 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.events__GT_table[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.store.events__GT_table["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("WorkflowStore.events->table",this$);
}
}
});
/**
 * Returns a tabular form of workflow events
 */
intemporal.store.events__GT_table = (function intemporal$store$events__GT_table(this$){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","events->table","intemporal.store/events->table",1434195520,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$1(this$) : meta_impl__5395__auto__.call(null,this$));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$events__GT_table$arity$1 == null)))))){
return this$.intemporal$store$WorkflowStore$events__GT_table$arity$1(this$);
} else {
return intemporal$store$WorkflowStore$events__GT_table$dyn_36083(this$);
}
}
});

var intemporal$store$WorkflowStore$registrations__GT_table$dyn_36090 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.registrations__GT_table[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.store.registrations__GT_table["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("WorkflowStore.registrations->table",this$);
}
}
});
/**
 * Returns a tabular form of workflow events
 */
intemporal.store.registrations__GT_table = (function intemporal$store$registrations__GT_table(this$){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","registrations->table","intemporal.store/registrations->table",-2144124673,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$1(this$) : meta_impl__5395__auto__.call(null,this$));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$registrations__GT_table$arity$1 == null)))))){
return this$.intemporal$store$WorkflowStore$registrations__GT_table$arity$1(this$);
} else {
return intemporal$store$WorkflowStore$registrations__GT_table$dyn_36090(this$);
}
}
});

var intemporal$store$WorkflowStore$save_workflow_definition$dyn_36094 = (function (this$,wid,sym){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.save_workflow_definition[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,wid,sym) : m__5394__auto__.call(null,this$,wid,sym));
} else {
var m__5392__auto__ = (intemporal.store.save_workflow_definition["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,wid,sym) : m__5392__auto__.call(null,this$,wid,sym));
} else {
throw cljs.core.missing_protocol("WorkflowStore.save-workflow-definition",this$);
}
}
});
/**
 * Saves the workflow definition
 */
intemporal.store.save_workflow_definition = (function intemporal$store$save_workflow_definition(this$,wid,sym){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","save-workflow-definition","intemporal.store/save-workflow-definition",-563730929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$3 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$3(this$,wid,sym) : meta_impl__5395__auto__.call(null,this$,wid,sym));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$save_workflow_definition$arity$3 == null)))))){
return this$.intemporal$store$WorkflowStore$save_workflow_definition$arity$3(this$,wid,sym);
} else {
return intemporal$store$WorkflowStore$save_workflow_definition$dyn_36094(this$,wid,sym);
}
}
});

var intemporal$store$WorkflowStore$save_activity_definition$dyn_36099 = (function (this$,aid,sym){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.save_activity_definition[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,aid,sym) : m__5394__auto__.call(null,this$,aid,sym));
} else {
var m__5392__auto__ = (intemporal.store.save_activity_definition["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,aid,sym) : m__5392__auto__.call(null,this$,aid,sym));
} else {
throw cljs.core.missing_protocol("WorkflowStore.save-activity-definition",this$);
}
}
});
/**
 * Saves the activity definition
 */
intemporal.store.save_activity_definition = (function intemporal$store$save_activity_definition(this$,aid,sym){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","save-activity-definition","intemporal.store/save-activity-definition",-1172914052,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$3 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$3(this$,aid,sym) : meta_impl__5395__auto__.call(null,this$,aid,sym));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$save_activity_definition$arity$3 == null)))))){
return this$.intemporal$store$WorkflowStore$save_activity_definition$arity$3(this$,aid,sym);
} else {
return intemporal$store$WorkflowStore$save_activity_definition$dyn_36099(this$,aid,sym);
}
}
});

var intemporal$store$WorkflowStore$save_workflow_event$dyn_36105 = (function (this$,wid,runid,etype,data){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.save_workflow_event[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$5(this$,wid,runid,etype,data) : m__5394__auto__.call(null,this$,wid,runid,etype,data));
} else {
var m__5392__auto__ = (intemporal.store.save_workflow_event["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$5(this$,wid,runid,etype,data) : m__5392__auto__.call(null,this$,wid,runid,etype,data));
} else {
throw cljs.core.missing_protocol("WorkflowStore.save-workflow-event",this$);
}
}
});
/**
 * Saves an workflow event
 */
intemporal.store.save_workflow_event = (function intemporal$store$save_workflow_event(this$,wid,runid,etype,data){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","save-workflow-event","intemporal.store/save-workflow-event",164520308,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$5 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$5(this$,wid,runid,etype,data) : meta_impl__5395__auto__.call(null,this$,wid,runid,etype,data));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$save_workflow_event$arity$5 == null)))))){
return this$.intemporal$store$WorkflowStore$save_workflow_event$arity$5(this$,wid,runid,etype,data);
} else {
return intemporal$store$WorkflowStore$save_workflow_event$dyn_36105(this$,wid,runid,etype,data);
}
}
});

var intemporal$store$WorkflowStore$save_activity_event$dyn_36112 = (function (this$,wid,runid,aid,etype,data){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.save_activity_event[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$6 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$6(this$,wid,runid,aid,etype,data) : m__5394__auto__.call(null,this$,wid,runid,aid,etype,data));
} else {
var m__5392__auto__ = (intemporal.store.save_activity_event["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$6 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$6(this$,wid,runid,aid,etype,data) : m__5392__auto__.call(null,this$,wid,runid,aid,etype,data));
} else {
throw cljs.core.missing_protocol("WorkflowStore.save-activity-event",this$);
}
}
});
/**
 * Saves an activity event
 */
intemporal.store.save_activity_event = (function intemporal$store$save_activity_event(this$,wid,runid,aid,etype,data){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.store","save-activity-event","intemporal.store/save-activity-event",1717078225,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$6 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$6(this$,wid,runid,aid,etype,data) : meta_impl__5395__auto__.call(null,this$,wid,runid,aid,etype,data));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$store$WorkflowStore$save_activity_event$arity$6 == null)))))){
return this$.intemporal$store$WorkflowStore$save_activity_event$arity$6(this$,wid,runid,aid,etype,data);
} else {
return intemporal$store$WorkflowStore$save_activity_event$dyn_36112(this$,wid,runid,aid,etype,data);
}
}
});

intemporal.store.date_QMARK_ = (function intemporal$store$date_QMARK_(dt){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Date,cljs.core.type(dt));
});
intemporal.store.now = (function intemporal$store$now(){
return (new Date());
});
intemporal.store.randomUUID = (function intemporal$store$randomUUID(){
return cljs.core.random_uuid();
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("intemporal.store.event","type","intemporal.store.event/type",-45236286),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("intemporal.activity","success","intemporal.activity/success",1977785760),"null",new cljs.core.Keyword("intemporal.workflow","invoke","intemporal.workflow/invoke",-1395924883),"null",new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613),"null",new cljs.core.Keyword("intemporal.workflow","success","intemporal.workflow/success",-650952432),"null",new cljs.core.Keyword("intemporal.workflow","failure","intemporal.workflow/failure",39732733),"null",new cljs.core.Keyword("intemporal.activity","invoke","intemporal.activity/invoke",1074985885),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("intemporal.activity","success","intemporal.activity/success",1977785760),null,new cljs.core.Keyword("intemporal.workflow","invoke","intemporal.workflow/invoke",-1395924883),null,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613),null,new cljs.core.Keyword("intemporal.workflow","success","intemporal.workflow/success",-650952432),null,new cljs.core.Keyword("intemporal.workflow","failure","intemporal.workflow/failure",39732733),null,new cljs.core.Keyword("intemporal.activity","invoke","intemporal.activity/invoke",1074985885),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("intemporal.store.event","uid","intemporal.store.event/uid",25479178),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.symbol_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("intemporal.store.event","payload","intemporal.store.event/payload",1882940574),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("intemporal.store.event","id","intemporal.store.event/id",1435409198),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("intemporal.store.event","deleted?","intemporal.store.event/deleted?",2068780759),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("intemporal.store.event","timestamp","intemporal.store.event/timestamp",-1170598627),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("intemporal.store","date?","intemporal.store/date?",1734151179,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__35931_SHARP_){
return intemporal.store.date_QMARK_(p1__35931_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("intemporal.store","event","intemporal.store/event",187629472),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("intemporal.store.event","type","intemporal.store.event/type",-45236286),new cljs.core.Keyword("intemporal.store.event","uid","intemporal.store.event/uid",25479178),new cljs.core.Keyword("intemporal.store.event","payload","intemporal.store.event/payload",1882940574),new cljs.core.Keyword("intemporal.store.event","id","intemporal.store.event/id",1435409198),new cljs.core.Keyword("intemporal.store.event","timestamp","intemporal.store.event/timestamp",-1170598627)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("intemporal.store.event","deleted?","intemporal.store.event/deleted?",2068780759)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("intemporal.store.event","type","intemporal.store.event/type",-45236286),new cljs.core.Keyword("intemporal.store.event","uid","intemporal.store.event/uid",25479178),new cljs.core.Keyword("intemporal.store.event","payload","intemporal.store.event/payload",1882940574),new cljs.core.Keyword("intemporal.store.event","id","intemporal.store.event/id",1435409198),new cljs.core.Keyword("intemporal.store.event","timestamp","intemporal.store.event/timestamp",-1170598627)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("intemporal.store.event","deleted?","intemporal.store.event/deleted?",2068780759)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35933){
return cljs.core.map_QMARK_(G__35933);
}),(function (G__35933){
return cljs.core.contains_QMARK_(G__35933,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__35933){
return cljs.core.contains_QMARK_(G__35933,new cljs.core.Keyword(null,"uid","uid",-1447769400));
}),(function (G__35933){
return cljs.core.contains_QMARK_(G__35933,new cljs.core.Keyword(null,"payload","payload",-383036092));
}),(function (G__35933){
return cljs.core.contains_QMARK_(G__35933,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__35933){
return cljs.core.contains_QMARK_(G__35933,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
})], null),(function (G__35933){
return ((cljs.core.map_QMARK_(G__35933)) && (((cljs.core.contains_QMARK_(G__35933,new cljs.core.Keyword(null,"type","type",1174270348))) && (((cljs.core.contains_QMARK_(G__35933,new cljs.core.Keyword(null,"uid","uid",-1447769400))) && (((cljs.core.contains_QMARK_(G__35933,new cljs.core.Keyword(null,"payload","payload",-383036092))) && (((cljs.core.contains_QMARK_(G__35933,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__35933,new cljs.core.Keyword(null,"timestamp","timestamp",579478971))))))))))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deleted?","deleted?",-486602771)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("intemporal.store.event","type","intemporal.store.event/type",-45236286),new cljs.core.Keyword("intemporal.store.event","uid","intemporal.store.event/uid",25479178),new cljs.core.Keyword("intemporal.store.event","payload","intemporal.store.event/payload",1882940574),new cljs.core.Keyword("intemporal.store.event","id","intemporal.store.event/id",1435409198),new cljs.core.Keyword("intemporal.store.event","timestamp","intemporal.store.event/timestamp",-1170598627)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("intemporal.store.event","deleted?","intemporal.store.event/deleted?",2068780759)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"uid","uid",-1447769400))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"payload","payload",-383036092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("intemporal.store","worfklow","intemporal.store/worfklow",-1114921678),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol("cljs.core","var?","cljs.core/var?",1711182854,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol("cljs.core","var?","cljs.core/var?",1711182854,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.var_QMARK_], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("intemporal.store","activity","intemporal.store/activity",-2031937109),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol("cljs.core","var?","cljs.core/var?",1711182854,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol("cljs.core","var?","cljs.core/var?",1711182854,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.var_QMARK_], null)));

//# sourceMappingURL=intemporal.store.js.map
