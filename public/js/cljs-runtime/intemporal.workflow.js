goog.provide('intemporal.workflow');
/**
 * Starts a worker thread.
 */
intemporal.workflow.start_worker_BANG_ = (function intemporal$workflow$start_worker_BANG_(var_args){
var G__44755 = arguments.length;
switch (G__44755) {
case 1:
return intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (store){
return intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$2(store,cljs.core.constantly(false));
}));

(intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (store,worker_protos){
return promesa.core.vthread_call((function (){
var task_ready_QMARK_ = (function (p1__44753_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(p1__44753_SHARP_));
});
var env = intemporal.workflow.internal._STAR_env_STAR_;
return intemporal.store.watch_tasks(store,task_ready_QMARK_,(function (_){
var temp__5804__auto__ = intemporal.store.dequeue_task(store);
if(cljs.core.truth_(temp__5804__auto__)){
var map__44757 = temp__5804__auto__;
var map__44757__$1 = cljs.core.__destructure_map(map__44757);
var task = map__44757__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44757__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44757__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__44758 = env;
var map__44758__$1 = cljs.core.__destructure_map(map__44758);
var last_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44758__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var protos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44758__$1,new cljs.core.Keyword(null,"protos","protos",-804831293));
return promesa.core.vthread_call((function (){
var _STAR_env_STAR__orig_val__44759 = intemporal.workflow._STAR_env_STAR_;
var _STAR_env_STAR__temp_val__44760 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([intemporal.workflow.default_env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"store","store",1512230022),store,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"ref","ref",1289896967),id,new cljs.core.Keyword(null,"root","root",-448657453),(function (){var or__5045__auto__ = last_root;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return id;
}
})(),new cljs.core.Keyword(null,"protos","protos",-804831293),(function (){var or__5045__auto__ = protos;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return worker_protos;
}
})()], null)], 0));
(intemporal.workflow._STAR_env_STAR_ = _STAR_env_STAR__temp_val__44760);

try{return intemporal.workflow.internal.resume_task.cljs$core$IFn$_invoke$arity$3(store,worker_protos,task);
}finally {(intemporal.workflow._STAR_env_STAR_ = _STAR_env_STAR__orig_val__44759);
}}));
} else {
return null;
}
}));
}));
}));

(intemporal.workflow.start_worker_BANG_.cljs$lang$maxFixedArity = 2);

intemporal.workflow.enqueue_and_wait = (function intemporal$workflow$enqueue_and_wait(p__44762,task){
var map__44763 = p__44762;
var map__44763__$1 = cljs.core.__destructure_map(map__44763);
var opts = map__44763__$1;
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44763__$1,new cljs.core.Keyword(null,"store","store",1512230022));
return intemporal.workflow.internal.enqueue_and_wait(opts,task);
});
/**
 * Adds a compensation action to the current workflow.
 */
intemporal.workflow.add_compensation = (function intemporal$workflow$add_compensation(thunk){
if(cljs.core.ifn_QMARK_(thunk)){
} else {
throw (new Error(["Assert failed: ","Compensation action should implement IFn","\n","(ifn? thunk)"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"compensations","compensations",-2044076971).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_),cljs.core.conj,thunk);
});
/**
 * Runs compensation in program order. A failure of the compensation action will stop running other compensations.
 */
intemporal.workflow.compensate = (function intemporal$workflow$compensate(){
var thunks = cljs.core.deref(new cljs.core.Keyword(null,"compensations","compensations",-2044076971).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_));
var seq__44764 = cljs.core.seq(thunks);
var chunk__44765 = null;
var count__44766 = (0);
var i__44767 = (0);
while(true){
if((i__44767 < count__44766)){
var f = chunk__44765.cljs$core$IIndexed$_nth$arity$2(null,i__44767);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__44771 = seq__44764;
var G__44772 = chunk__44765;
var G__44773 = count__44766;
var G__44774 = (i__44767 + (1));
seq__44764 = G__44771;
chunk__44765 = G__44772;
count__44766 = G__44773;
i__44767 = G__44774;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44764);
if(temp__5804__auto__){
var seq__44764__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44764__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44764__$1);
var G__44775 = cljs.core.chunk_rest(seq__44764__$1);
var G__44776 = c__5568__auto__;
var G__44777 = cljs.core.count(c__5568__auto__);
var G__44778 = (0);
seq__44764 = G__44775;
chunk__44765 = G__44776;
count__44766 = G__44777;
i__44767 = G__44778;
continue;
} else {
var f = cljs.core.first(seq__44764__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__44779 = cljs.core.next(seq__44764__$1);
var G__44780 = null;
var G__44781 = (0);
var G__44782 = (0);
seq__44764 = G__44779;
chunk__44765 = G__44780;
count__44766 = G__44781;
i__44767 = G__44782;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=intemporal.workflow.js.map
