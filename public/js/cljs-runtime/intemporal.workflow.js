goog.provide('intemporal.workflow');
intemporal.workflow._STAR_env_STAR_ = null;
intemporal.workflow.default_env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compensations","compensations",-2044076971),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),Number.MAX_SAFE_INTEGER], null);
/**
 * Starts a worker thread.
 */
intemporal.workflow.start_worker_BANG_ = (function intemporal$workflow$start_worker_BANG_(var_args){
var G__32195 = arguments.length;
switch (G__32195) {
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
var task_ready_QMARK_ = (function (p1__32193_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(p1__32193_SHARP_));
});
var env = intemporal.workflow._STAR_env_STAR_;
return intemporal.store.watch_tasks(store,task_ready_QMARK_,(function (_){
var temp__5804__auto__ = intemporal.store.dequeue_task(store);
if(cljs.core.truth_(temp__5804__auto__)){
var map__32196 = temp__5804__auto__;
var map__32196__$1 = cljs.core.__destructure_map(map__32196);
var task = map__32196__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32196__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32196__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__32198 = env;
var map__32198__$1 = cljs.core.__destructure_map(map__32198);
var last_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32198__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var protos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32198__$1,new cljs.core.Keyword(null,"protos","protos",-804831293));
return promesa.core.vthread_call((function (){
var _STAR_env_STAR__orig_val__32199 = intemporal.workflow._STAR_env_STAR_;
var _STAR_env_STAR__temp_val__32200 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([intemporal.workflow.default_env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"store","store",1512230022),store,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"ref","ref",1289896967),id,new cljs.core.Keyword(null,"root","root",-448657453),(function (){var or__5045__auto__ = last_root;
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
(intemporal.workflow._STAR_env_STAR_ = _STAR_env_STAR__temp_val__32200);

try{return intemporal.workflow.internal.resume_task.cljs$core$IFn$_invoke$arity$3(store,worker_protos,task);
}finally {(intemporal.workflow._STAR_env_STAR_ = _STAR_env_STAR__orig_val__32199);
}}));
} else {
return null;
}
}));
}));
}));

(intemporal.workflow.start_worker_BANG_.cljs$lang$maxFixedArity = 2);

intemporal.workflow.enqueue_and_wait = (function intemporal$workflow$enqueue_and_wait(p__32201,task){
var map__32202 = p__32201;
var map__32202__$1 = cljs.core.__destructure_map(map__32202);
var opts = map__32202__$1;
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32202__$1,new cljs.core.Keyword(null,"store","store",1512230022));
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

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"compensations","compensations",-2044076971).cljs$core$IFn$_invoke$arity$1(intemporal.workflow._STAR_env_STAR_),cljs.core.conj,thunk);
});
/**
 * Runs compensation in program order. A failure of the compensation action will stop running other compensations.
 */
intemporal.workflow.compensate = (function intemporal$workflow$compensate(){
var thunks = cljs.core.deref(new cljs.core.Keyword(null,"compensations","compensations",-2044076971).cljs$core$IFn$_invoke$arity$1(intemporal.workflow._STAR_env_STAR_));
var seq__32204 = cljs.core.seq(thunks);
var chunk__32205 = null;
var count__32206 = (0);
var i__32207 = (0);
while(true){
if((i__32207 < count__32206)){
var f = chunk__32205.cljs$core$IIndexed$_nth$arity$2(null,i__32207);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__32210 = seq__32204;
var G__32211 = chunk__32205;
var G__32212 = count__32206;
var G__32213 = (i__32207 + (1));
seq__32204 = G__32210;
chunk__32205 = G__32211;
count__32206 = G__32212;
i__32207 = G__32213;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32204);
if(temp__5804__auto__){
var seq__32204__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32204__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32204__$1);
var G__32214 = cljs.core.chunk_rest(seq__32204__$1);
var G__32215 = c__5568__auto__;
var G__32216 = cljs.core.count(c__5568__auto__);
var G__32217 = (0);
seq__32204 = G__32214;
chunk__32205 = G__32215;
count__32206 = G__32216;
i__32207 = G__32217;
continue;
} else {
var f = cljs.core.first(seq__32204__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__32218 = cljs.core.next(seq__32204__$1);
var G__32219 = null;
var G__32220 = (0);
var G__32221 = (0);
seq__32204 = G__32218;
chunk__32205 = G__32219;
count__32206 = G__32220;
i__32207 = G__32221;
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
