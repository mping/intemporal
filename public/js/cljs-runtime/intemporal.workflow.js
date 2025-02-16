goog.provide('intemporal.workflow');
intemporal.workflow.current_env = (function intemporal$workflow$current_env(){
return intemporal.workflow.internal._STAR_env_STAR_;
});

/**
 * @interface
 */
intemporal.workflow.ITaskExecutor = function(){};

var intemporal$workflow$ITaskExecutor$submit$dyn_44619 = (function (this$,f){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.workflow.submit[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__5351__auto__.call(null, this$,f));
} else {
var m__5349__auto__ = (intemporal.workflow.submit["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__5349__auto__.call(null, this$,f));
} else {
throw cljs.core.missing_protocol("ITaskExecutor.submit",this$);
}
}
});
/**
 * Submits the function `f` for execution
 */
intemporal.workflow.submit = (function intemporal$workflow$submit(this$,f){
if((((!((this$ == null)))) && ((!((this$.intemporal$workflow$ITaskExecutor$submit$arity$2 == null)))))){
return this$.intemporal$workflow$ITaskExecutor$submit$arity$2(this$,f);
} else {
return intemporal$workflow$ITaskExecutor$submit$dyn_44619(this$,f);
}
});

var intemporal$workflow$ITaskExecutor$shutdown$dyn_44620 = (function (this$,grace_period_ms){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.workflow.shutdown[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,grace_period_ms) : m__5351__auto__.call(null, this$,grace_period_ms));
} else {
var m__5349__auto__ = (intemporal.workflow.shutdown["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,grace_period_ms) : m__5349__auto__.call(null, this$,grace_period_ms));
} else {
throw cljs.core.missing_protocol("ITaskExecutor.shutdown",this$);
}
}
});
/**
 * Shuts down the task executor
 */
intemporal.workflow.shutdown = (function intemporal$workflow$shutdown(this$,grace_period_ms){
if((((!((this$ == null)))) && ((!((this$.intemporal$workflow$ITaskExecutor$shutdown$arity$2 == null)))))){
return this$.intemporal$workflow$ITaskExecutor$shutdown$arity$2(this$,grace_period_ms);
} else {
return intemporal$workflow$ITaskExecutor$shutdown$dyn_44620(this$,grace_period_ms);
}
});

var intemporal$workflow$ITaskExecutor$running_QMARK_$dyn_44621 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.workflow.running_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (intemporal.workflow.running_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("ITaskExecutor.running?",this$);
}
}
});
/**
 * Indicates if the executor is running
 */
intemporal.workflow.running_QMARK_ = (function intemporal$workflow$running_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$workflow$ITaskExecutor$running_QMARK_$arity$1 == null)))))){
return this$.intemporal$workflow$ITaskExecutor$running_QMARK_$arity$1(this$);
} else {
return intemporal$workflow$ITaskExecutor$running_QMARK_$dyn_44621(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {intemporal.workflow.ITaskExecutor}
 * @implements {cljs.core.IWithMeta}
*/
intemporal.workflow.t_intemporal$workflow44580 = (function (run_QMARK_,meta44581){
this.run_QMARK_ = run_QMARK_;
this.meta44581 = meta44581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.workflow.t_intemporal$workflow44580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44582,meta44581__$1){
var self__ = this;
var _44582__$1 = this;
return (new intemporal.workflow.t_intemporal$workflow44580(self__.run_QMARK_,meta44581__$1));
}));

(intemporal.workflow.t_intemporal$workflow44580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44582){
var self__ = this;
var _44582__$1 = this;
return self__.meta44581;
}));

(intemporal.workflow.t_intemporal$workflow44580.prototype.intemporal$workflow$ITaskExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.workflow.t_intemporal$workflow44580.prototype.intemporal$workflow$ITaskExecutor$submit$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.deref(self__.run_QMARK_))){
return promesa.core.vthread_call((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}));
} else {
return null;
}
}));

(intemporal.workflow.t_intemporal$workflow44580.prototype.intemporal$workflow$ITaskExecutor$shutdown$arity$2 = (function (_,grace_period_ms){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.run_QMARK_,false);
}));

(intemporal.workflow.t_intemporal$workflow44580.prototype.intemporal$workflow$ITaskExecutor$running_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.run_QMARK_);
}));

(intemporal.workflow.t_intemporal$workflow44580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"run?","run?",-1901812910,null),new cljs.core.Symbol(null,"meta44581","meta44581",1548815115,null)], null);
}));

(intemporal.workflow.t_intemporal$workflow44580.cljs$lang$type = true);

(intemporal.workflow.t_intemporal$workflow44580.cljs$lang$ctorStr = "intemporal.workflow/t_intemporal$workflow44580");

(intemporal.workflow.t_intemporal$workflow44580.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"intemporal.workflow/t_intemporal$workflow44580");
}));

/**
 * Positional factory function for intemporal.workflow/t_intemporal$workflow44580.
 */
intemporal.workflow.__GT_t_intemporal$workflow44580 = (function intemporal$workflow$__GT_t_intemporal$workflow44580(run_QMARK_,meta44581){
return (new intemporal.workflow.t_intemporal$workflow44580(run_QMARK_,meta44581));
});


/**
 * Creates an object that satisfies `ITaskExecutor`.
 */
intemporal.workflow.make_task_executor = (function intemporal$workflow$make_task_executor(){
var run_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new intemporal.workflow.t_intemporal$workflow44580(run_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Executes a given protocol, activity or workflow `task`
 */
intemporal.workflow.worker_execute_fn = (function intemporal$workflow$worker_execute_fn(store,protocols,p__44583,task_counter,shutting_down_QMARK_){
var map__44584 = p__44583;
var map__44584__$1 = cljs.core.__destructure_map(map__44584);
var task = map__44584__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44584__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44584__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44584__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var runtime = new cljs.core.Keyword(null,"runtime","runtime",-1331573996).cljs$core$IFn$_invoke$arity$1(task);
var base_env = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"store","store",1512230022),store,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"ref","ref",1289896967),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"root","root",-448657453),(function (){var or__5002__auto__ = root;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return id;
}
})(),new cljs.core.Keyword(null,"protos","protos",-804831293),protocols,new cljs.core.Keyword(null,"next-id","next-id",-224240762),(function (){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = root;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return id;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(task_counter,cljs.core.inc))].join('');
}),new cljs.core.Keyword(null,"shutdown?","shutdown?",563347206),shutting_down_QMARK_], null);
var internal_env = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([intemporal.workflow.internal.default_env,base_env,runtime], 0));
var _STAR_env_STAR__orig_val__44585 = intemporal.workflow.internal._STAR_env_STAR_;
var _STAR_env_STAR__temp_val__44586 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([intemporal.workflow.internal.default_env,internal_env], 0));
(intemporal.workflow.internal._STAR_env_STAR_ = _STAR_env_STAR__temp_val__44586);

try{(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.workflow";
var __id = null;
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf.call(null, __kind,__ns,__id,__level));
} else {
return true;
}
})())){
var __inst = (new Date());
var __thread = null;
var __root0 = taoensso.telemere.impl._STAR_trace_root_STAR_;
var __otel_context1 = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__40530__auto__ = (new cljs.core.Delay((function (){

var signal__40521__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"intemporal.workflow",new cljs.core.Keyword(null,"line","line",212345235),77,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/mping/Devel/workspace/exoscale/intemporal/src/intemporal/workflow.cljc"], null),__ns,77,7,"file:/home/mping/Devel/workspace/exoscale/intemporal/src/intemporal/workflow.cljc",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"env","env",-1815813235),internal_env], null),null,(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Resuming task with id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null));
}),null)),null,null,null,null,null,null,null,null));
var temp__5802__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5802__auto__)){
var sig_middleware__40522__auto__ = temp__5802__auto__;
return (sig_middleware__40522__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__40522__auto__.cljs$core$IFn$_invoke$arity$1(signal__40521__auto__) : sig_middleware__40522__auto__.call(null, signal__40521__auto__));
} else {
return signal__40521__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__ns,__kind,__id,__level,signal__40530__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__40530__auto__) : __run_result.call(null, signal__40530__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return intemporal.workflow.internal.resume_task.cljs$core$IFn$_invoke$arity$4(internal_env,store,protocols,task);
}finally {(intemporal.workflow.internal._STAR_env_STAR_ = _STAR_env_STAR__orig_val__44585);
}});
/**
 * Continously polls for task while `task-executor` is active.
 */
intemporal.workflow.worker_poll_fn = (function intemporal$workflow$worker_poll_fn(store,protocols,task_executor,polling_ms){
var task_counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve_fn_44591,reject_fn_44590){
var loop_fn_44587 = (function intemporal$workflow$worker_poll_fn_$_loop_fn_44587(){
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (res_44588,err_44589){
if((!((err_44589 == null)))){
return (reject_fn_44590.cljs$core$IFn$_invoke$arity$1 ? reject_fn_44590.cljs$core$IFn$_invoke$arity$1(err_44589) : reject_fn_44590.call(null, err_44589));
} else {
if(promesa.core.recur_QMARK_(res_44588)){
promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings(intemporal$workflow$worker_poll_fn_$_loop_fn_44587));

return null;
} else {
return (resolve_fn_44591.cljs$core$IFn$_invoke$arity$1 ? resolve_fn_44591.cljs$core$IFn$_invoke$arity$1(res_44588) : resolve_fn_44591.call(null, res_44588));
}
}
}),promesa.protocols._mcat(promesa.protocols._promise(null),(function (___29939__auto__){
return promesa.protocols._promise(promesa.core.chain.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1(polling_ms),(function (_){
while(true){
var temp__5804__auto___44622 = intemporal.store.dequeue_task(store);
if(cljs.core.truth_(temp__5804__auto___44622)){
var task_44623 = temp__5804__auto___44622;
((function (task_44623,temp__5804__auto___44622,task_counter){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.workflow";
var __id = null;
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf.call(null, __kind,__ns,__id,__level));
} else {
return true;
}
})())){
var __inst = (new Date());
var __thread = null;
var __root0 = taoensso.telemere.impl._STAR_trace_root_STAR_;
var __otel_context1 = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__40530__auto__ = (new cljs.core.Delay((function (){

var signal__40521__auto__ = (function (){var signal__40520__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"intemporal.workflow",new cljs.core.Keyword(null,"line","line",212345235),90,new cljs.core.Keyword(null,"column","column",2078222095),26,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/mping/Devel/workspace/exoscale/intemporal/src/intemporal/workflow.cljc"], null),__ns,90,26,"file:/home/mping/Devel/workspace/exoscale/intemporal/src/intemporal/workflow.cljc",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_data","_data",-1394265439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),task_44623], null)], null),(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dequeued task with id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task_44623)], null));
}),null)),null,null,null,null,null,null,null,null));
return cljs.core.reduce_kv(cljs.core.assoc,signal__40520__auto__,signal__40520__auto__.kvs);
})();
var temp__5802__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5802__auto__)){
var sig_middleware__40522__auto__ = temp__5802__auto__;
return (sig_middleware__40522__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__40522__auto__.cljs$core$IFn$_invoke$arity$1(signal__40521__auto__) : sig_middleware__40522__auto__.call(null, signal__40521__auto__));
} else {
return signal__40521__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__ns,__kind,__id,__level,signal__40530__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__40530__auto__) : __run_result.call(null, signal__40530__auto__));
} else {
return true;
}
} else {
return null;
}
});})(task_44623,temp__5804__auto___44622,task_counter))
();

intemporal.workflow.submit(task_executor,((function (task_44623,temp__5804__auto___44622,task_counter){
return (function (){
return intemporal.workflow.worker_execute_fn(store,protocols,task_44623,task_counter,(function (){
return cljs.core.not(intemporal.workflow.running_QMARK_(task_executor));
}));
});})(task_44623,temp__5804__auto___44622,task_counter))
);

continue;
} else {
}
break;
}

if(cljs.core.truth_(intemporal.workflow.running_QMARK_(task_executor))){
return promesa.core.__GT_Recur(cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
})));
})));
});
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings(loop_fn_44587));
}));
});
/**
 * Starts a poller that will submit tasks to the `task-executor`.
 *   Protocol implementations are resolved via a map of `:protocols {my.ns Impl}`
 *   Returns an `ITaskExecutor` that can be shutdown.
 *   For clj runtimes, task-executor should be `(Executors/newVirtualThreadPerTaskExecutor)`, as
 *   each execution will be blocked while they await for a given task dependencie's execution.
 */
intemporal.workflow.start_poller_BANG_ = (function intemporal$workflow$start_poller_BANG_(var_args){
var G__44596 = arguments.length;
switch (G__44596) {
case 2:
return intemporal.workflow.start_poller_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___44625 = arguments.length;
var i__5727__auto___44626 = (0);
while(true){
if((i__5727__auto___44626 < len__5726__auto___44625)){
args_arr__5751__auto__.push((arguments[i__5727__auto___44626]));

var G__44627 = (i__5727__auto___44626 + (1));
i__5727__auto___44626 = G__44627;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return intemporal.workflow.start_poller_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(intemporal.workflow.start_poller_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (store,p__44597){
var map__44598 = p__44597;
var map__44598__$1 = cljs.core.__destructure_map(map__44598);
var opts = map__44598__$1;
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44598__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentArrayMap.EMPTY);
var polling_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44598__$1,new cljs.core.Keyword(null,"polling-ms","polling-ms",472249198),(100));
return intemporal.workflow.start_poller_BANG_.cljs$core$IFn$_invoke$arity$variadic(store,intemporal.workflow.make_task_executor(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
}));

(intemporal.workflow.start_poller_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (store,task_executor,p__44599){
var map__44600 = p__44599;
var map__44600__$1 = cljs.core.__destructure_map(map__44600);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44600__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentArrayMap.EMPTY);
var polling_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44600__$1,new cljs.core.Keyword(null,"polling-ms","polling-ms",472249198),(100));
if((((!((task_executor == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === task_executor.intemporal$workflow$ITaskExecutor$))))?true:(((!task_executor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(intemporal.workflow.ITaskExecutor,task_executor):false)):cljs.core.native_satisfies_QMARK_(intemporal.workflow.ITaskExecutor,task_executor))){
} else {
throw (new Error(["Assert failed: ","Supplied task executor does not satisfy ITaskExecutor","\n","(satisfies? ITaskExecutor task-executor)"].join('')));
}

var polling_fn_44628 = (function (){
return intemporal.workflow.worker_poll_fn(store,protocols,task_executor,polling_ms);
});
intemporal.workflow.submit(task_executor,polling_fn_44628);

return task_executor;
}));

/** @this {Function} */
(intemporal.workflow.start_poller_BANG_.cljs$lang$applyTo = (function (seq44593){
var G__44594 = cljs.core.first(seq44593);
var seq44593__$1 = cljs.core.next(seq44593);
var G__44595 = cljs.core.first(seq44593__$1);
var seq44593__$2 = cljs.core.next(seq44593__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44594,G__44595,seq44593__$2);
}));

(intemporal.workflow.start_poller_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Starts a single worker thread that periodically polls for tasks and executes them in a
 *   separate thread. Mostly used for testing purposes.
 */
intemporal.workflow.start_worker_BANG_ = (function intemporal$workflow$start_worker_BANG_(var_args){
var G__44605 = arguments.length;
switch (G__44605) {
case 1:
return intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___44630 = arguments.length;
var i__5727__auto___44631 = (0);
while(true){
if((i__5727__auto___44631 < len__5726__auto___44630)){
args_arr__5751__auto__.push((arguments[i__5727__auto___44631]));

var G__44632 = (i__5727__auto___44631 + (1));
i__5727__auto___44631 = G__44632;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((1) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((1)),(0),null)):null);
return intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5752__auto__);

}
});

(intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (store){
return intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic(store,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0));
}));

(intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (store,p__44606){
var map__44607 = p__44606;
var map__44607__$1 = cljs.core.__destructure_map(map__44607);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44607__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentArrayMap.EMPTY);
var polling_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44607__$1,new cljs.core.Keyword(null,"polling-ms","polling-ms",472249198),(100));
var run_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var task_counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
promesa.core.vthread_call((function (){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve_fn_44612,reject_fn_44611){
var loop_fn_44608 = (function intemporal$workflow$loop_fn_44608(){
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (res_44609,err_44610){
if((!((err_44610 == null)))){
return (reject_fn_44611.cljs$core$IFn$_invoke$arity$1 ? reject_fn_44611.cljs$core$IFn$_invoke$arity$1(err_44610) : reject_fn_44611.call(null, err_44610));
} else {
if(promesa.core.recur_QMARK_(res_44609)){
promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings(intemporal$workflow$loop_fn_44608));

return null;
} else {
return (resolve_fn_44612.cljs$core$IFn$_invoke$arity$1 ? resolve_fn_44612.cljs$core$IFn$_invoke$arity$1(res_44609) : resolve_fn_44612.call(null, res_44609));
}
}
}),promesa.protocols._mcat(promesa.protocols._promise(null),(function (___29939__auto__){
return promesa.protocols._promise(promesa.core.chain.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1(polling_ms),(function (_){
var temp__5804__auto___44633 = intemporal.store.dequeue_task(store);
if(cljs.core.truth_(temp__5804__auto___44633)){
var task_44634 = temp__5804__auto___44633;
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.workflow";
var __id = null;
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf.call(null, __kind,__ns,__id,__level));
} else {
return true;
}
})())){
var __inst = (new Date());
var __thread = null;
var __root0 = taoensso.telemere.impl._STAR_trace_root_STAR_;
var __otel_context1 = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__40530__auto__ = (new cljs.core.Delay((function (){

var signal__40521__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"intemporal.workflow",new cljs.core.Keyword(null,"line","line",212345235),124,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/mping/Devel/workspace/exoscale/intemporal/src/intemporal/workflow.cljc"], null),__ns,124,27,"file:/home/mping/Devel/workspace/exoscale/intemporal/src/intemporal/workflow.cljc",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(task_44634)], null),null,(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dequeued task with id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task_44634)], null));
}),null)),null,null,null,null,null,null,null,null));
var temp__5802__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5802__auto__)){
var sig_middleware__40522__auto__ = temp__5802__auto__;
return (sig_middleware__40522__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__40522__auto__.cljs$core$IFn$_invoke$arity$1(signal__40521__auto__) : sig_middleware__40522__auto__.call(null, signal__40521__auto__));
} else {
return signal__40521__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__ns,__kind,__id,__level,signal__40530__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__40530__auto__) : __run_result.call(null, signal__40530__auto__));
} else {
return true;
}
} else {
return null;
}
})();

promesa.core.vthread_call((function (){
return intemporal.workflow.worker_execute_fn(store,protocols,task_44634,task_counter,(function (){
return cljs.core.not(cljs.core.deref(run_QMARK_));
}));
}));
} else {
}

if(cljs.core.truth_(cljs.core.deref(run_QMARK_))){
return promesa.core.__GT_Recur(cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
})));
})));
});
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings(loop_fn_44608));
}));
}));

return (function (){
return cljs.core.reset_BANG_(run_QMARK_,false);
});
}));

/** @this {Function} */
(intemporal.workflow.start_worker_BANG_.cljs$lang$applyTo = (function (seq44603){
var G__44604 = cljs.core.first(seq44603);
var seq44603__$1 = cljs.core.next(seq44603);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44604,seq44603__$1);
}));

(intemporal.workflow.start_worker_BANG_.cljs$lang$maxFixedArity = (1));

intemporal.workflow.enqueue_and_wait = (function intemporal$workflow$enqueue_and_wait(p__44613,task){
var map__44614 = p__44613;
var map__44614__$1 = cljs.core.__destructure_map(map__44614);
var opts = map__44614__$1;
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44614__$1,new cljs.core.Keyword(null,"store","store",1512230022));
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.workflow";
var __id = null;
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf.call(null, __kind,__ns,__id,__level));
} else {
return true;
}
})())){
var __inst = (new Date());
var __thread = null;
var __root0 = taoensso.telemere.impl._STAR_trace_root_STAR_;
var __otel_context1 = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__40530__auto__ = (new cljs.core.Delay((function (){

var signal__40521__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"intemporal.workflow",new cljs.core.Keyword(null,"line","line",212345235),133,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/mping/Devel/workspace/exoscale/intemporal/src/intemporal/workflow.cljc"], null),__ns,133,3,"file:/home/mping/Devel/workspace/exoscale/intemporal/src/intemporal/workflow.cljc",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(task)], null),null,(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Enqueuing task with id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null));
}),null)),null,null,null,null,null,null,null,null));
var temp__5802__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5802__auto__)){
var sig_middleware__40522__auto__ = temp__5802__auto__;
return (sig_middleware__40522__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__40522__auto__.cljs$core$IFn$_invoke$arity$1(signal__40521__auto__) : sig_middleware__40522__auto__.call(null, signal__40521__auto__));
} else {
return signal__40521__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__ns,__kind,__id,__level,signal__40530__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__40530__auto__) : __run_result.call(null, signal__40530__auto__));
} else {
return true;
}
} else {
return null;
}
})();

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
var thunks = new cljs.core.Keyword(null,"compensations","compensations",-2044076971).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var seq__44615 = cljs.core.seq(cljs.core.deref(thunks));
var chunk__44616 = null;
var count__44617 = (0);
var i__44618 = (0);
while(true){
if((i__44618 < count__44617)){
var f = chunk__44616.cljs$core$IIndexed$_nth$arity$2(null, i__44618);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(thunks,cljs.core.pop);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));


var G__44641 = seq__44615;
var G__44642 = chunk__44616;
var G__44643 = count__44617;
var G__44644 = (i__44618 + (1));
seq__44615 = G__44641;
chunk__44616 = G__44642;
count__44617 = G__44643;
i__44618 = G__44644;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44615);
if(temp__5804__auto__){
var seq__44615__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44615__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44615__$1);
var G__44645 = cljs.core.chunk_rest(seq__44615__$1);
var G__44646 = c__5525__auto__;
var G__44647 = cljs.core.count(c__5525__auto__);
var G__44648 = (0);
seq__44615 = G__44645;
chunk__44616 = G__44646;
count__44617 = G__44647;
i__44618 = G__44648;
continue;
} else {
var f = cljs.core.first(seq__44615__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(thunks,cljs.core.pop);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));


var G__44649 = cljs.core.next(seq__44615__$1);
var G__44650 = null;
var G__44651 = (0);
var G__44652 = (0);
seq__44615 = G__44649;
chunk__44616 = G__44650;
count__44617 = G__44651;
i__44618 = G__44652;
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
