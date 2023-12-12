goog.provide('intemporal.workflow');
intemporal.workflow.current_workflow_run = null;
intemporal.workflow.current_workflow_id = (function intemporal$workflow$current_workflow_id(){
if((!((intemporal.workflow.current_workflow_run == null)))){
} else {
throw intemporal.error.workflow_error(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not running within a workflow function, did you call `register-workflow`?"], 0)));
}

return intemporal.workflow.execution._workflow_id(intemporal.workflow.current_workflow_run);
});
intemporal.workflow.current_workflow_runid = (function intemporal$workflow$current_workflow_runid(){
if((!((intemporal.workflow.current_workflow_run == null)))){
} else {
throw intemporal.error.workflow_error(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not running within a workflow function, did you call `register-workflow`?"], 0)));
}

return intemporal.workflow.execution._workflow_runid(intemporal.workflow.current_workflow_run);
});
intemporal.workflow.save_workflow_event = (function intemporal$workflow$save_workflow_event(event_type,payload){
if((!((intemporal.workflow.current_workflow_run == null)))){
} else {
throw intemporal.error.workflow_error(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not running within a workflow function, did you call `register-workflow`?"], 0)));
}

return intemporal.workflow.execution._save_workflow_event_BANG_(intemporal.workflow.current_workflow_run,event_type,payload);
});
intemporal.workflow.save_activity_event = (function intemporal$workflow$save_activity_event(activity_id,event_type,payload){
if((!((intemporal.workflow.current_workflow_run == null)))){
} else {
throw intemporal.error.workflow_error(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not running within a workflow function, did you call `register-workflow`?"], 0)));
}

return intemporal.workflow.execution._save_activity_event_BANG_(intemporal.workflow.current_workflow_run,activity_id,event_type,payload);
});
intemporal.workflow.next_event = (function intemporal$workflow$next_event(){
if((!((intemporal.workflow.current_workflow_run == null)))){
} else {
throw intemporal.error.workflow_error(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not running within a workflow function, did you call `register-workflow`?"], 0)));
}

var nxt = intemporal.workflow.execution._next_event(intemporal.workflow.current_workflow_run);
return nxt;
});
intemporal.workflow.current_event = (function intemporal$workflow$current_event(){
if((!((intemporal.workflow.current_workflow_run == null)))){
} else {
throw intemporal.error.workflow_error(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not running within a workflow function, did you call `register-workflow`?"], 0)));
}

var nxt = intemporal.workflow.execution._current_event(intemporal.workflow.current_workflow_run);
return nxt;
});
intemporal.workflow.event_matches_QMARK_ = (function intemporal$workflow$event_matches_QMARK_(nxt,uid,event_type){
if((!((intemporal.workflow.current_workflow_run == null)))){
} else {
throw intemporal.error.workflow_error(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not running within a workflow function, did you call `register-workflow`?"], 0)));
}

var match_QMARK_ = (((!((nxt == null)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(nxt)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(nxt)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid))))));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"intemporal.workflow",null,49,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[store] match? %s [%s %s]",match_QMARK_,event_type,uid], null);
}),null)),null,-1233845216,null);

return match_QMARK_;
});
intemporal.workflow.delete_history_forward = (function intemporal$workflow$delete_history_forward(){
if((!((intemporal.workflow.current_workflow_run == null)))){
} else {
throw intemporal.error.workflow_error(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not running within a workflow function, did you call `register-workflow`?"], 0)));
}

return intemporal.workflow.execution._delete_history_forward(intemporal.workflow.current_workflow_run);
});
intemporal.workflow.advance_history_cursor = (function intemporal$workflow$advance_history_cursor(){
if((!((intemporal.workflow.current_workflow_run == null)))){
} else {
throw intemporal.error.workflow_error(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not running within a workflow function, did you call `register-workflow`?"], 0)));
}

return intemporal.workflow.execution._advance_history_cursor(intemporal.workflow.current_workflow_run);
});
intemporal.workflow.add_compensation = (function intemporal$workflow$add_compensation(f){
if((!((intemporal.workflow.current_workflow_run == null)))){
} else {
throw intemporal.error.workflow_error(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not running within a workflow function, did you call `register-workflow`?"], 0)));
}

return intemporal.workflow.execution._add_compensation(intemporal.workflow.current_workflow_run,f);
});
intemporal.workflow.cljs_available_QMARK_ = false;
/**
 * Calls all compensation functions in order.
 *   If any compensation function fails, the remaining functions will NOT be called.
 */
intemporal.workflow.compensate = (function intemporal$workflow$compensate(){
if((!((intemporal.workflow.current_workflow_run == null)))){
} else {
throw intemporal.error.workflow_error(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not running within a workflow function, did you call `register-workflow`?"], 0)));
}

var actions = intemporal.workflow.execution._workflow_compensations(intemporal.workflow.current_workflow_run);
var seq__31196 = cljs.core.seq(actions);
var chunk__31197 = null;
var count__31198 = (0);
var i__31199 = (0);
while(true){
if((i__31199 < count__31198)){
var compensation = chunk__31197.cljs$core$IIndexed$_nth$arity$2(null,i__31199);
(compensation.cljs$core$IFn$_invoke$arity$0 ? compensation.cljs$core$IFn$_invoke$arity$0() : compensation.call(null));


var G__31212 = seq__31196;
var G__31213 = chunk__31197;
var G__31214 = count__31198;
var G__31215 = (i__31199 + (1));
seq__31196 = G__31212;
chunk__31197 = G__31213;
count__31198 = G__31214;
i__31199 = G__31215;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31196);
if(temp__5804__auto__){
var seq__31196__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31196__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31196__$1);
var G__31216 = cljs.core.chunk_rest(seq__31196__$1);
var G__31217 = c__5568__auto__;
var G__31218 = cljs.core.count(c__5568__auto__);
var G__31219 = (0);
seq__31196 = G__31216;
chunk__31197 = G__31217;
count__31198 = G__31218;
i__31199 = G__31219;
continue;
} else {
var compensation = cljs.core.first(seq__31196__$1);
(compensation.cljs$core$IFn$_invoke$arity$0 ? compensation.cljs$core$IFn$_invoke$arity$0() : compensation.call(null));


var G__31220 = cljs.core.next(seq__31196__$1);
var G__31221 = null;
var G__31222 = (0);
var G__31223 = (0);
seq__31196 = G__31220;
chunk__31197 = G__31221;
count__31198 = G__31222;
i__31199 = G__31223;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Retries `f` with given `runid`, possibly resuming execution if `f` didn't reach a terminal state.
 */
intemporal.workflow.retry = (function intemporal$workflow$retry(store,f,runid){
var vec__31200 = intemporal.store.find_workflow(store,runid);
var wid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31200,(0),null);
var _wvar = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31200,(1),null);
if((!((wid == null)))){
} else {
throw intemporal.error.workflow_error(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No workflow found for runid %s",runid], 0)));
}

var current_workflow_run_orig_val__31203 = intemporal.workflow.current_workflow_run;
var current_workflow_run_temp_val__31204 = intemporal.workflow.execution.make_workflow_execution.cljs$core$IFn$_invoke$arity$3(store,wid,runid);
(intemporal.workflow.current_workflow_run = current_workflow_run_temp_val__31204);

try{var invoke_evt = intemporal.workflow.execution._advance_history_cursor(intemporal.workflow.current_workflow_run);
if((!((invoke_evt == null)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["%s: runid %s not found",wid,runid], 0)),cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(invoke_evt),new cljs.core.Keyword("intemporal.workflow","invoke","intemporal.workflow/invoke",-1395924883))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["%s: event for run %s is %s, should be ::invoke",wid,invoke_evt,runid], 0)),cljs.core.PersistentArrayMap.EMPTY);
}

intemporal.workflow.execution._reset_history_cursor(intemporal.workflow.current_workflow_run);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(invoke_evt));
}finally {(intemporal.workflow.current_workflow_run = current_workflow_run_orig_val__31203);
}});
intemporal.workflow.sym__GT_workflow_id = (function intemporal$workflow$sym__GT_workflow_id(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(cljs.core._STAR_ns_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym));
});
intemporal.workflow.proxy_workflow_fn = (function intemporal$workflow$proxy_workflow_fn(astore,wid,f,args){
var current_workflow_run_orig_val__31205 = intemporal.workflow.current_workflow_run;
var current_workflow_run_temp_val__31206 = (function (){var or__5045__auto__ = intemporal.workflow.current_workflow_run;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return intemporal.workflow.execution.make_workflow_execution.cljs$core$IFn$_invoke$arity$2(astore,wid);
}
})();
(intemporal.workflow.current_workflow_run = current_workflow_run_temp_val__31206);

try{var vargs = ((intemporal.workflow.event_matches_QMARK_(intemporal.workflow.next_event(),wid,new cljs.core.Keyword("intemporal.workflow","invoke","intemporal.workflow/invoke",-1395924883)))?new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor()):(function (){
intemporal.workflow.save_workflow_event(new cljs.core.Keyword("intemporal.workflow","invoke","intemporal.workflow/invoke",-1395924883),args);

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,args);
})()
);
try{var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,vargs);
var nxt = intemporal.workflow.next_event();
if(intemporal.workflow.event_matches_QMARK_(nxt,wid,new cljs.core.Keyword("intemporal.workflow","success","intemporal.workflow/success",-650952432))){
return new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor());
} else {
if(intemporal.workflow.event_matches_QMARK_(nxt,wid,new cljs.core.Keyword("intemporal.workflow","failure","intemporal.workflow/failure",39732733))){
throw new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor());
} else {
intemporal.workflow.save_workflow_event(new cljs.core.Keyword("intemporal.workflow","success","intemporal.workflow/success",-650952432),result);

return result;

}
}
}catch (e31207){if((e31207 instanceof Error)){
var e = e31207;
if(intemporal.workflow.event_matches_QMARK_(intemporal.workflow.next_event(),wid,new cljs.core.Keyword("intemporal.workflow","failure","intemporal.workflow/failure",39732733))){
return new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor());
} else {
intemporal.workflow.save_workflow_event(new cljs.core.Keyword("intemporal.workflow","failure","intemporal.workflow/failure",39732733),e);

throw e;
}
} else {
throw e31207;

}
}}finally {(intemporal.workflow.current_workflow_run = current_workflow_run_orig_val__31205);
}});

//# sourceMappingURL=intemporal.workflow.js.map
