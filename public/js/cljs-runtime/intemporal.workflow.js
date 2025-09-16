goog.provide('intemporal.workflow');
/**
 * Returns the workflow execution environment for the current thread
 */
intemporal.workflow.current_env = (function intemporal$workflow$current_env(){
if((!((intemporal.workflow.internal._STAR_env_STAR_ == null)))){
} else {
throw (new Error(["Assert failed: ","No workflow env detected, should only be called within a workflow function","\n","(some? internal/*env*)"].join('')));
}

return intemporal.workflow.internal._STAR_env_STAR_;
});
/**
 * Returns the current workflow uuid
 */
intemporal.workflow.workflow_id = (function intemporal$workflow$workflow_id(){
if((!((intemporal.workflow.internal._STAR_env_STAR_ == null)))){
} else {
throw (new Error(["Assert failed: ","No workflow env detected, should only be called within a workflow function","\n","(some? internal/*env*)"].join('')));
}

return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
});

/**
 * @interface
 */
intemporal.workflow.ITaskExecutor = function(){};

var intemporal$workflow$ITaskExecutor$submit$dyn_56829 = (function (this$,f){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (intemporal.workflow.submit[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__5374__auto__.call(null,this$,f));
} else {
var m__5372__auto__ = (intemporal.workflow.submit["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__5372__auto__.call(null,this$,f));
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
return intemporal$workflow$ITaskExecutor$submit$dyn_56829(this$,f);
}
});

var intemporal$workflow$ITaskExecutor$shutdown$dyn_56830 = (function (this$,grace_period_ms){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (intemporal.workflow.shutdown[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,grace_period_ms) : m__5374__auto__.call(null,this$,grace_period_ms));
} else {
var m__5372__auto__ = (intemporal.workflow.shutdown["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,grace_period_ms) : m__5372__auto__.call(null,this$,grace_period_ms));
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
return intemporal$workflow$ITaskExecutor$shutdown$dyn_56830(this$,grace_period_ms);
}
});

var intemporal$workflow$ITaskExecutor$running_QMARK_$dyn_56831 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (intemporal.workflow.running_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (intemporal.workflow.running_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
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
return intemporal$workflow$ITaskExecutor$running_QMARK_$dyn_56831(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {intemporal.workflow.ITaskExecutor}
 * @implements {cljs.core.IWithMeta}
*/
intemporal.workflow.t_intemporal$workflow56790 = (function (run_QMARK_,meta56791){
this.run_QMARK_ = run_QMARK_;
this.meta56791 = meta56791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.workflow.t_intemporal$workflow56790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56792,meta56791__$1){
var self__ = this;
var _56792__$1 = this;
return (new intemporal.workflow.t_intemporal$workflow56790(self__.run_QMARK_,meta56791__$1));
}));

(intemporal.workflow.t_intemporal$workflow56790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56792){
var self__ = this;
var _56792__$1 = this;
return self__.meta56791;
}));

(intemporal.workflow.t_intemporal$workflow56790.prototype.intemporal$workflow$ITaskExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.workflow.t_intemporal$workflow56790.prototype.intemporal$workflow$ITaskExecutor$submit$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.deref(self__.run_QMARK_))){
return promesa.core.vthread_call((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}));
} else {
return null;
}
}));

(intemporal.workflow.t_intemporal$workflow56790.prototype.intemporal$workflow$ITaskExecutor$shutdown$arity$2 = (function (_,grace_period_ms){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.run_QMARK_,false);
}));

(intemporal.workflow.t_intemporal$workflow56790.prototype.intemporal$workflow$ITaskExecutor$running_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.run_QMARK_);
}));

(intemporal.workflow.t_intemporal$workflow56790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"run?","run?",-1901812910,null),new cljs.core.Symbol(null,"meta56791","meta56791",-1147985458,null)], null);
}));

(intemporal.workflow.t_intemporal$workflow56790.cljs$lang$type = true);

(intemporal.workflow.t_intemporal$workflow56790.cljs$lang$ctorStr = "intemporal.workflow/t_intemporal$workflow56790");

(intemporal.workflow.t_intemporal$workflow56790.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"intemporal.workflow/t_intemporal$workflow56790");
}));

/**
 * Positional factory function for intemporal.workflow/t_intemporal$workflow56790.
 */
intemporal.workflow.__GT_t_intemporal$workflow56790 = (function intemporal$workflow$__GT_t_intemporal$workflow56790(run_QMARK_,meta56791){
return (new intemporal.workflow.t_intemporal$workflow56790(run_QMARK_,meta56791));
});


/**
 * Creates an object that satisfies `ITaskExecutor`.
 */
intemporal.workflow.make_task_executor = (function intemporal$workflow$make_task_executor(){
var run_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new intemporal.workflow.t_intemporal$workflow56790(run_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Executes a given protocol, activity or workflow `task`
 */
intemporal.workflow.worker_execute_fn = (function intemporal$workflow$worker_execute_fn(store,protocols,p__56793,task_counter,shutting_down_QMARK_){
var map__56794 = p__56793;
var map__56794__$1 = cljs.core.__destructure_map(map__56794);
var task = map__56794__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56794__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56794__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56794__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var runtime = new cljs.core.Keyword(null,"runtime","runtime",-1331573996).cljs$core$IFn$_invoke$arity$1(task);
var base_env = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"store","store",1512230022),store,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"ref","ref",1289896967),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"root","root",-448657453),(function (){var or__5025__auto__ = root;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return id;
}
})(),new cljs.core.Keyword(null,"protos","protos",-804831293),protocols,new cljs.core.Keyword(null,"next-id","next-id",-224240762),(function (){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = root;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return id;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(task_counter,cljs.core.inc))].join('');
}),new cljs.core.Keyword(null,"shutdown?","shutdown?",563347206),shutting_down_QMARK_], null);
var internal_env = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([intemporal.workflow.internal.default_env,base_env,runtime], 0));
var _STAR_env_STAR__orig_val__56795 = intemporal.workflow.internal._STAR_env_STAR_;
var _STAR_env_STAR__temp_val__56796 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([intemporal.workflow.internal.default_env,internal_env], 0));
(intemporal.workflow.internal._STAR_env_STAR_ = _STAR_env_STAR__temp_val__56796);

try{(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.workflow";
var __id = null;
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_call_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"log","log",-1595516004),__ns,__id,__level) : sf.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),__ns,__id,__level));
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
var signal__52369__auto__ = (new cljs.core.Delay((function (){

var signal__52360__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,__ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [90,7], null),null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"env","env",-1815813235),internal_env], null),null,(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Resuming task with id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null));
}),null)),null,null,null,null,null,null,null,null));
var temp__5823__auto__ = taoensso.telemere._STAR_xfn_STAR_;
if(cljs.core.truth_(temp__5823__auto__)){
var xfn__52361__auto__ = temp__5823__auto__;
return (xfn__52361__auto__.cljs$core$IFn$_invoke$arity$1 ? xfn__52361__auto__.cljs$core$IFn$_invoke$arity$1(signal__52360__auto__) : xfn__52361__auto__.call(null,signal__52360__auto__));
} else {
return signal__52360__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__52369__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__52369__auto__) : __run_result.call(null,signal__52369__auto__));
} else {
return true;
}
} else {
return null;
}
})();


return intemporal.workflow.internal.resume_task.cljs$core$IFn$_invoke$arity$4(internal_env,store,protocols,task);
}finally {(intemporal.workflow.internal._STAR_env_STAR_ = _STAR_env_STAR__orig_val__56795);
}});
/**
 * Continously polls for task while `task-executor` is active.
 */
intemporal.workflow.worker_poll_fn = (function intemporal$workflow$worker_poll_fn(store,protocols,task_executor,polling_ms){
var task_counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve_fn_56801,reject_fn_56800){
var loop_fn_56797 = (function intemporal$workflow$worker_poll_fn_$_loop_fn_56797(){
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (res_56798,err_56799){
if((!((err_56799 == null)))){
return (reject_fn_56800.cljs$core$IFn$_invoke$arity$1 ? reject_fn_56800.cljs$core$IFn$_invoke$arity$1(err_56799) : reject_fn_56800.call(null,err_56799));
} else {
if(promesa.core.recur_QMARK_(res_56798)){
promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings(intemporal$workflow$worker_poll_fn_$_loop_fn_56797));

return null;
} else {
return (resolve_fn_56801.cljs$core$IFn$_invoke$arity$1 ? resolve_fn_56801.cljs$core$IFn$_invoke$arity$1(res_56798) : resolve_fn_56801.call(null,res_56798));
}
}
}),promesa.protocols._mcat(promesa.protocols._promise(null),(function (___49963__auto__){
return promesa.protocols._promise(promesa.core.chain.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1(polling_ms),(function (_){
while(true){
var temp__5825__auto___56832 = intemporal.store.dequeue_task(store);
if(cljs.core.truth_(temp__5825__auto___56832)){
var task_56833 = temp__5825__auto___56832;
((function (task_56833,temp__5825__auto___56832,task_counter){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.workflow";
var __id = null;
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_call_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"log","log",-1595516004),__ns,__id,__level) : sf.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),__ns,__id,__level));
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
var signal__52369__auto__ = (new cljs.core.Delay((function (){

var signal__52360__auto__ = (function (){var signal__52359__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,__ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [103,26], null),null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_data","_data",-1394265439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),task_56833], null)], null),(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dequeued task with id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task_56833)], null));
}),null)),null,null,null,null,null,null,null,null));
return cljs.core.reduce_kv(cljs.core.assoc,signal__52359__auto__,signal__52359__auto__.kvs);
})();
var temp__5823__auto__ = taoensso.telemere._STAR_xfn_STAR_;
if(cljs.core.truth_(temp__5823__auto__)){
var xfn__52361__auto__ = temp__5823__auto__;
return (xfn__52361__auto__.cljs$core$IFn$_invoke$arity$1 ? xfn__52361__auto__.cljs$core$IFn$_invoke$arity$1(signal__52360__auto__) : xfn__52361__auto__.call(null,signal__52360__auto__));
} else {
return signal__52360__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__52369__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__52369__auto__) : __run_result.call(null,signal__52369__auto__));
} else {
return true;
}
} else {
return null;
}
});})(task_56833,temp__5825__auto___56832,task_counter))
();


intemporal.workflow.submit(task_executor,((function (task_56833,temp__5825__auto___56832,task_counter){
return (function (){
return intemporal.workflow.worker_execute_fn(store,protocols,task_56833,task_counter,(function (){
return cljs.core.not(intemporal.workflow.running_QMARK_(task_executor));
}));
});})(task_56833,temp__5825__auto___56832,task_counter))
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
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings(loop_fn_56797));
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
var G__56806 = arguments.length;
switch (G__56806) {
case 2:
return intemporal.workflow.start_poller_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___56835 = arguments.length;
var i__5750__auto___56837 = (0);
while(true){
if((i__5750__auto___56837 < len__5749__auto___56835)){
args_arr__5774__auto__.push((arguments[i__5750__auto___56837]));

var G__56839 = (i__5750__auto___56837 + (1));
i__5750__auto___56837 = G__56839;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return intemporal.workflow.start_poller_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(intemporal.workflow.start_poller_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (store,p__56807){
var map__56808 = p__56807;
var map__56808__$1 = cljs.core.__destructure_map(map__56808);
var opts = map__56808__$1;
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56808__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentArrayMap.EMPTY);
var polling_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56808__$1,new cljs.core.Keyword(null,"polling-ms","polling-ms",472249198),(100));
return intemporal.workflow.start_poller_BANG_.cljs$core$IFn$_invoke$arity$variadic(store,intemporal.workflow.make_task_executor(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
}));

(intemporal.workflow.start_poller_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (store,task_executor,p__56809){
var map__56810 = p__56809;
var map__56810__$1 = cljs.core.__destructure_map(map__56810);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56810__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentArrayMap.EMPTY);
var polling_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56810__$1,new cljs.core.Keyword(null,"polling-ms","polling-ms",472249198),(100));
if((((!((task_executor == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === task_executor.intemporal$workflow$ITaskExecutor$))))?true:(((!task_executor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(intemporal.workflow.ITaskExecutor,task_executor):false)):cljs.core.native_satisfies_QMARK_(intemporal.workflow.ITaskExecutor,task_executor))){
} else {
throw (new Error(["Assert failed: ","Supplied task executor does not satisfy ITaskExecutor","\n","(satisfies? ITaskExecutor task-executor)"].join('')));
}

var polling_fn_56842 = (function (){
return intemporal.workflow.worker_poll_fn(store,protocols,task_executor,polling_ms);
});
intemporal.workflow.submit(task_executor,polling_fn_56842);

return task_executor;
}));

/** @this {Function} */
(intemporal.workflow.start_poller_BANG_.cljs$lang$applyTo = (function (seq56803){
var G__56804 = cljs.core.first(seq56803);
var seq56803__$1 = cljs.core.next(seq56803);
var G__56805 = cljs.core.first(seq56803__$1);
var seq56803__$2 = cljs.core.next(seq56803__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56804,G__56805,seq56803__$2);
}));

(intemporal.workflow.start_poller_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Starts a single worker thread that periodically polls for tasks and executes them in a
 *   separate thread. Mostly used for testing purposes.
 */
intemporal.workflow.start_worker_BANG_ = (function intemporal$workflow$start_worker_BANG_(var_args){
var G__56815 = arguments.length;
switch (G__56815) {
case 1:
return intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___56846 = arguments.length;
var i__5750__auto___56847 = (0);
while(true){
if((i__5750__auto___56847 < len__5749__auto___56846)){
args_arr__5774__auto__.push((arguments[i__5750__auto___56847]));

var G__56848 = (i__5750__auto___56847 + (1));
i__5750__auto___56847 = G__56848;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((1)),(0),null)):null);
return intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);

}
});

(intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (store){
return intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic(store,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0));
}));

(intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (store,p__56816){
var map__56817 = p__56816;
var map__56817__$1 = cljs.core.__destructure_map(map__56817);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56817__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentArrayMap.EMPTY);
var polling_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56817__$1,new cljs.core.Keyword(null,"polling-ms","polling-ms",472249198),(100));
var run_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var task_counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
promesa.core.vthread_call((function (){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve_fn_56822,reject_fn_56821){
var loop_fn_56818 = (function intemporal$workflow$loop_fn_56818(){
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (res_56819,err_56820){
if((!((err_56820 == null)))){
return (reject_fn_56821.cljs$core$IFn$_invoke$arity$1 ? reject_fn_56821.cljs$core$IFn$_invoke$arity$1(err_56820) : reject_fn_56821.call(null,err_56820));
} else {
if(promesa.core.recur_QMARK_(res_56819)){
promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings(intemporal$workflow$loop_fn_56818));

return null;
} else {
return (resolve_fn_56822.cljs$core$IFn$_invoke$arity$1 ? resolve_fn_56822.cljs$core$IFn$_invoke$arity$1(res_56819) : resolve_fn_56822.call(null,res_56819));
}
}
}),promesa.protocols._mcat(promesa.protocols._promise(null),(function (___49963__auto__){
return promesa.protocols._promise(promesa.core.chain.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1(polling_ms),(function (_){
var temp__5825__auto___56849 = intemporal.store.dequeue_task(store);
if(cljs.core.truth_(temp__5825__auto___56849)){
var task_56850 = temp__5825__auto___56849;
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.workflow";
var __id = null;
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_call_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"log","log",-1595516004),__ns,__id,__level) : sf.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),__ns,__id,__level));
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
var signal__52369__auto__ = (new cljs.core.Delay((function (){

var signal__52360__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,__ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [137,27], null),null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(task_56850)], null),null,(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dequeued task with id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task_56850)], null));
}),null)),null,null,null,null,null,null,null,null));
var temp__5823__auto__ = taoensso.telemere._STAR_xfn_STAR_;
if(cljs.core.truth_(temp__5823__auto__)){
var xfn__52361__auto__ = temp__5823__auto__;
return (xfn__52361__auto__.cljs$core$IFn$_invoke$arity$1 ? xfn__52361__auto__.cljs$core$IFn$_invoke$arity$1(signal__52360__auto__) : xfn__52361__auto__.call(null,signal__52360__auto__));
} else {
return signal__52360__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__52369__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__52369__auto__) : __run_result.call(null,signal__52369__auto__));
} else {
return true;
}
} else {
return null;
}
})();


promesa.core.vthread_call((function (){
return intemporal.workflow.worker_execute_fn(store,protocols,task_56850,task_counter,(function (){
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
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings(loop_fn_56818));
}));
}));

return (function (){
return cljs.core.reset_BANG_(run_QMARK_,false);
});
}));

/** @this {Function} */
(intemporal.workflow.start_worker_BANG_.cljs$lang$applyTo = (function (seq56813){
var G__56814 = cljs.core.first(seq56813);
var seq56813__$1 = cljs.core.next(seq56813);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56814,seq56813__$1);
}));

(intemporal.workflow.start_worker_BANG_.cljs$lang$maxFixedArity = (1));

intemporal.workflow.enqueue_and_wait = (function intemporal$workflow$enqueue_and_wait(p__56823,task){
var map__56824 = p__56823;
var map__56824__$1 = cljs.core.__destructure_map(map__56824);
var opts = map__56824__$1;
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56824__$1,new cljs.core.Keyword(null,"store","store",1512230022));
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.workflow";
var __id = null;
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_call_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"log","log",-1595516004),__ns,__id,__level) : sf.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),__ns,__id,__level));
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
var signal__52369__auto__ = (new cljs.core.Delay((function (){

var signal__52360__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,__ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [146,3], null),null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(task)], null),null,(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Enqueuing task with id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null));
}),null)),null,null,null,null,null,null,null,null));
var temp__5823__auto__ = taoensso.telemere._STAR_xfn_STAR_;
if(cljs.core.truth_(temp__5823__auto__)){
var xfn__52361__auto__ = temp__5823__auto__;
return (xfn__52361__auto__.cljs$core$IFn$_invoke$arity$1 ? xfn__52361__auto__.cljs$core$IFn$_invoke$arity$1(signal__52360__auto__) : xfn__52361__auto__.call(null,signal__52360__auto__));
} else {
return signal__52360__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__52369__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__52369__auto__) : __run_result.call(null,signal__52369__auto__));
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
var seq__56825 = cljs.core.seq(cljs.core.deref(thunks));
var chunk__56826 = null;
var count__56827 = (0);
var i__56828 = (0);
while(true){
if((i__56828 < count__56827)){
var f = chunk__56826.cljs$core$IIndexed$_nth$arity$2(null,i__56828);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(thunks,cljs.core.pop);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__56857 = seq__56825;
var G__56858 = chunk__56826;
var G__56859 = count__56827;
var G__56860 = (i__56828 + (1));
seq__56825 = G__56857;
chunk__56826 = G__56858;
count__56827 = G__56859;
i__56828 = G__56860;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56825);
if(temp__5825__auto__){
var seq__56825__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56825__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__56825__$1);
var G__56861 = cljs.core.chunk_rest(seq__56825__$1);
var G__56862 = c__5548__auto__;
var G__56863 = cljs.core.count(c__5548__auto__);
var G__56864 = (0);
seq__56825 = G__56861;
chunk__56826 = G__56862;
count__56827 = G__56863;
i__56828 = G__56864;
continue;
} else {
var f = cljs.core.first(seq__56825__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(thunks,cljs.core.pop);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__56865 = cljs.core.next(seq__56825__$1);
var G__56866 = null;
var G__56867 = (0);
var G__56868 = (0);
seq__56825 = G__56865;
chunk__56826 = G__56866;
count__56827 = G__56867;
i__56828 = G__56868;
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
