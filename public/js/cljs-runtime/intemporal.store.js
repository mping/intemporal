goog.provide('intemporal.store');
intemporal.store.terminal_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"completed","completed",-486056503),null,new cljs.core.Keyword(null,"cancelled","cancelled",488726224),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {intemporal.protocol.IStore}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
intemporal.store.InMemoryStore = (function (state,__meta,__extmap,__hash){
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(intemporal.store.InMemoryStore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k36825,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__36832 = k36825;
var G__36832__$1 = (((G__36832 instanceof cljs.core.Keyword))?G__36832.fqn:null);
switch (G__36832__$1) {
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36825,else__5326__auto__);

}
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__36837){
var vec__36838 = p__36837;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36838,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36838,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$wake_workflow$arity$2 = (function (_,workflow_id){
var self__ = this;
var ___$1 = this;
var temp__5825__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"wake-callback","wake-callback",1792645159)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var callback = temp__5825__auto__;
return setTimeout((function (){
try{return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
}catch (e36845){if((e36845 instanceof Error)){
var e = e36845;
var args__36687__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Wake callback threw for workflow %s",workflow_id], null);
var vec__36846 = (((cljs.core.first(args__36687__auto__) instanceof Error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__36687__auto__),cljs.core.second(args__36687__auto__),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),args__36687__auto__)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(args__36687__auto__),cljs.core.rest(args__36687__auto__)], null));
var err__36688__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36846,(0),null);
var fmt__36689__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36846,(1),null);
var fmt_args__36690__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36846,(2),null);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.store";
var __id = null;
var __level = new cljs.core.Keyword(null,"warn","warn",-436710552);
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
var __otel_context = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__34973__auto__ = (new cljs.core.Delay((function (){

var signal__34964__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,__ns,null,null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,intemporal.internal.logging.fmat(fmt__36689__auto__,fmt_args__36690__auto__),err__36688__auto__,null,null,null,null,null,null,null));
var temp__5823__auto__ = taoensso.telemere._STAR_xfn_STAR_;
if(cljs.core.truth_(temp__5823__auto__)){
var xfn__34965__auto__ = temp__5823__auto__;
return (xfn__34965__auto__.cljs$core$IFn$_invoke$arity$1 ? xfn__34965__auto__.cljs$core$IFn$_invoke$arity$1(signal__34964__auto__) : xfn__34965__auto__.call(null,signal__34964__auto__));
} else {
return signal__34964__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__34973__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__34973__auto__) : __run_result.call(null,signal__34973__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return null;
} else {
throw e36845;

}
}}),(0));
} else {
return null;
}
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$load_history$arity$2 = (function (_,workflow_id){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.PersistentVector.EMPTY);
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$unregister_signal_callback$arity$3 = (function (_,workflow_id,signal_name){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"signal-callbacks","signal-callbacks",-89555556)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([signal_name], 0));
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$is_cancelled_QMARK_$arity$2 = (function (_,workflow_id){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], null),false);
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$consume_signal$arity$3 = (function (_,workflow_id,signal_name){
var self__ = this;
var ___$1 = this;
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,(function (s){
var signals = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"signals","signals",1732137021),signal_name], null));
if(cljs.core.seq(signals)){
cljs.core.reset_BANG_(result,cljs.core.first(signals));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"signals","signals",1732137021),signal_name], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest));
} else {
return s;
}
}));

return cljs.core.deref(result);
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$find_event$arity$4 = (function (this$,workflow_id,event_type,seq_num){
var self__ = this;
var this$__$1 = this;
var history__$1 = this$__$1.intemporal$protocol$IStore$load_history$arity$2(null,workflow_id);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36822_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(p1__36822_SHARP_),event_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(p1__36822_SHARP_),seq_num)));
}),history__$1));
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$register_signal_callback$arity$4 = (function (_,workflow_id,signal_name,callback){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"signal-callbacks","signal-callbacks",-89555556),signal_name], null),callback);
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$get_pending_signals$arity$2 = (function (_,workflow_id){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"signals","signals",1732137021)], null),cljs.core.PersistentArrayMap.EMPTY);
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$release_owner$arity$2 = (function (_,owner_id){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,(function (s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36876){
var vec__36877 = p__36876;
var wid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36877,(0),null);
var wf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36877,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(owner_id,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(wf))) && (cljs.core.not((function (){var G__36880 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(wf);
return (intemporal.store.terminal_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? intemporal.store.terminal_status_QMARK_.cljs$core$IFn$_invoke$arity$1(G__36880) : intemporal.store.terminal_status_QMARK_.call(null,G__36880));
})())))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(s__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),wid], null),cljs.core.dissoc,new cljs.core.Keyword(null,"owner","owner",-392611939));
} else {
return s__$1;
}
}),s,new cljs.core.Keyword(null,"workflows","workflows",1533711151).cljs$core$IFn$_invoke$arity$1(s));
}));

return null;
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$list_pending$arity$3 = (function (_,owner_id,limit){
var self__ = this;
var ___$1 = this;
var now = intemporal.utils.current_time_ms();
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__36882){
var vec__36883 = p__36882;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36883,(0),null);
var wf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36883,(1),null);
var or__5025__auto__ = new cljs.core.Keyword(null,"wake-at","wake-at",-834638823).cljs$core$IFn$_invoke$arity$1(wf);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__36888){
var vec__36889 = p__36888;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36889,(0),null);
var wf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36889,(1),null);
var and__5023__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(wf));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.not((function (){var G__36892 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(wf);
return (intemporal.store.terminal_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? intemporal.store.terminal_status_QMARK_.cljs$core$IFn$_invoke$arity$1(G__36892) : intemporal.store.terminal_status_QMARK_.call(null,G__36892));
})());
if(and__5023__auto____$1){
var and__5023__auto____$2 = cljs.core.not(new cljs.core.Keyword(null,"cancelled","cancelled",488726224).cljs$core$IFn$_invoke$arity$1(wf));
if(and__5023__auto____$2){
var and__5023__auto____$3 = (function (){var wa = new cljs.core.Keyword(null,"wake-at","wake-at",-834638823).cljs$core$IFn$_invoke$arity$1(wf);
return (((wa == null)) || ((wa <= now)));
})();
if(and__5023__auto____$3){
var o = new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(wf);
return (((o == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o,owner_id)));
} else {
return and__5023__auto____$3;
}
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}),new cljs.core.Keyword(null,"workflows","workflows",1533711151).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state)))))));
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$save_events$arity$3 = (function (_,workflow_id,events){
var self__ = this;
var ___$1 = this;
if(cljs.core.seq(events)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,(function (s){
var s__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),events);
var term = cljs.core.some((function (p1__36821_SHARP_){
var G__36896 = new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(p1__36821_SHARP_);
var G__36896__$1 = (((G__36896 instanceof cljs.core.Keyword))?G__36896.fqn:null);
switch (G__36896__$1) {
case "workflow-completed":
return new cljs.core.Keyword(null,"completed","completed",-486056503);

break;
case "workflow-failed":
return new cljs.core.Keyword(null,"failed","failed",-1397425762);

break;
case "workflow-cancelled":
return new cljs.core.Keyword(null,"cancelled","cancelled",488726224);

break;
default:
return null;

}
}),events);
if(cljs.core.truth_(term)){
return cljs.core.assoc_in(s__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"status","status",-1997798413)], null),term);
} else {
return s__$1;
}
}));
} else {
}

return events;
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$register_wake_callback$arity$3 = (function (_,workflow_id,callback){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"wake-callback","wake-callback",1792645159)], null),callback);
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$set_wake_at$arity$3 = (function (_,workflow_id,wake_at_ms){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"wake-at","wake-at",-834638823)], null),wake_at_ms);

return null;
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$add_signal$arity$4 = (function (_,workflow_id,signal_name,signal_data){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"signals","signals",1732137021),signal_name], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([signal_data], 0));

var vec__36899_37013 = cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"signal-callbacks","signal-callbacks",-89555556)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([signal_name], 0));
var old_state_37014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36899_37013,(0),null);
var temp__5825__auto___37035 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state_37014,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"signal-callbacks","signal-callbacks",-89555556),signal_name], null));
if(cljs.core.truth_(temp__5825__auto___37035)){
var callback_37046 = temp__5825__auto___37035;
setTimeout((function (){
try{return (callback_37046.cljs$core$IFn$_invoke$arity$0 ? callback_37046.cljs$core$IFn$_invoke$arity$0() : callback_37046.call(null));
}catch (e36902){if((e36902 instanceof Error)){
var e = e36902;
var args__36687__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Signal callback threw for workflow %s signal %s",workflow_id,signal_name], null);
var vec__36906 = (((cljs.core.first(args__36687__auto__) instanceof Error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__36687__auto__),cljs.core.second(args__36687__auto__),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),args__36687__auto__)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(args__36687__auto__),cljs.core.rest(args__36687__auto__)], null));
var err__36688__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36906,(0),null);
var fmt__36689__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36906,(1),null);
var fmt_args__36690__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36906,(2),null);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.store";
var __id = null;
var __level = new cljs.core.Keyword(null,"warn","warn",-436710552);
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
var __otel_context = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__34973__auto__ = (new cljs.core.Delay((function (){

var signal__34964__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,__ns,null,null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,intemporal.internal.logging.fmat(fmt__36689__auto__,fmt_args__36690__auto__),err__36688__auto__,null,null,null,null,null,null,null));
var temp__5823__auto__ = taoensso.telemere._STAR_xfn_STAR_;
if(cljs.core.truth_(temp__5823__auto__)){
var xfn__34965__auto__ = temp__5823__auto__;
return (xfn__34965__auto__.cljs$core$IFn$_invoke$arity$1 ? xfn__34965__auto__.cljs$core$IFn$_invoke$arity$1(signal__34964__auto__) : xfn__34965__auto__.call(null,signal__34964__auto__));
} else {
return signal__34964__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__34973__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__34973__auto__) : __run_result.call(null,signal__34973__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return null;
} else {
throw e36902;

}
}}),(0));
} else {
}

return signal_data;
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$claim_owner$arity$3 = (function (_,workflow_id,owner_id){
var self__ = this;
var ___$1 = this;
var ok = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,(function (s){
var cur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"owner","owner",-392611939)], null));
if((((cur == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur,owner_id)))){
cljs.core.reset_BANG_(ok,true);

return cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"owner","owner",-392611939)], null),owner_id);
} else {
return s;
}
}));

return cljs.core.deref(ok);
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$mark_cancelled$arity$2 = (function (_,workflow_id){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], null),true);
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$get_workflow_status$arity$2 = (function (_,workflow_id){
var self__ = this;
var ___$1 = this;
var wf = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id], null));
if(cljs.core.truth_((function (){var G__36921 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(wf);
var fexpr__36920 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"completed","completed",-486056503),null,new cljs.core.Keyword(null,"cancelled","cancelled",488726224),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null);
return (fexpr__36920.cljs$core$IFn$_invoke$arity$1 ? fexpr__36920.cljs$core$IFn$_invoke$arity$1(G__36921) : fexpr__36920.call(null,G__36921));
})())){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(wf);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"cancelled","cancelled",488726224).cljs$core$IFn$_invoke$arity$1(wf))){
return new cljs.core.Keyword(null,"cancelled","cancelled",488726224);
} else {
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(wf))){
return new cljs.core.Keyword(null,"not-found","not-found",-629079980);
} else {
var last_event = cljs.core.last(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(wf));
var G__36924 = new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(last_event);
var G__36924__$1 = (((G__36924 instanceof cljs.core.Keyword))?G__36924.fqn:null);
switch (G__36924__$1) {
case "workflow-completed":
return new cljs.core.Keyword(null,"completed","completed",-486056503);

break;
case "workflow-failed":
return new cljs.core.Keyword(null,"failed","failed",-1397425762);

break;
case "workflow-cancelled":
return new cljs.core.Keyword(null,"cancelled","cancelled",488726224);

break;
default:
return new cljs.core.Keyword(null,"running","running",1554969103);

}

}
}
}
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$save_event$arity$3 = (function (_,workflow_id,event){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,(function (s){
var s__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),event);
var G__36927 = new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(event);
var G__36927__$1 = (((G__36927 instanceof cljs.core.Keyword))?G__36927.fqn:null);
switch (G__36927__$1) {
case "workflow-completed":
return cljs.core.assoc_in(s__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"completed","completed",-486056503));

break;
case "workflow-failed":
return cljs.core.assoc_in(s__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762));

break;
case "workflow-cancelled":
return cljs.core.assoc_in(s__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"cancelled","cancelled",488726224));

break;
default:
return s__$1;

}
}));

return event;
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#intemporal.store.InMemoryStore{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36824){
var self__ = this;
var G__36824__$1 = this;
return (new cljs.core.RecordIter((0),G__36824__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new intemporal.store.InMemoryStore(self__.state,self__.__meta,self__.__extmap,self__.__hash));
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1391424603 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36826,other36827){
var self__ = this;
var this36826__$1 = this;
return (((!((other36827 == null)))) && ((((this36826__$1.constructor === other36827.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36826__$1.state,other36827.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36826__$1.__extmap,other36827.__extmap)))))));
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new intemporal.store.InMemoryStore(self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k36825){
var self__ = this;
var this__5330__auto____$1 = this;
var G__36949 = k36825;
var G__36949__$1 = (((G__36949 instanceof cljs.core.Keyword))?G__36949.fqn:null);
switch (G__36949__$1) {
case "state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36825);

}
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__36824){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__36950 = cljs.core.keyword_identical_QMARK_;
var expr__36951 = k__5332__auto__;
if(cljs.core.truth_((pred__36950.cljs$core$IFn$_invoke$arity$2 ? pred__36950.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__36951) : pred__36950.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__36951)))){
return (new intemporal.store.InMemoryStore(G__36824,self__.__meta,self__.__extmap,null));
} else {
return (new intemporal.store.InMemoryStore(self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__36824),null));
}
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null))], null),self__.__extmap));
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__36824){
var self__ = this;
var this__5322__auto____$1 = this;
return (new intemporal.store.InMemoryStore(self__.state,G__36824,self__.__extmap,self__.__hash));
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(intemporal.store.InMemoryStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(intemporal.store.InMemoryStore.cljs$lang$type = true);

(intemporal.store.InMemoryStore.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"intemporal.store/InMemoryStore",null,(1),null));
}));

(intemporal.store.InMemoryStore.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"intemporal.store/InMemoryStore");
}));

/**
 * Positional factory function for intemporal.store/InMemoryStore.
 */
intemporal.store.__GT_InMemoryStore = (function intemporal$store$__GT_InMemoryStore(state){
return (new intemporal.store.InMemoryStore(state,null,null,null));
});

/**
 * Factory function for intemporal.store/InMemoryStore, taking a map of keywords to field values.
 */
intemporal.store.map__GT_InMemoryStore = (function intemporal$store$map__GT_InMemoryStore(G__36829){
var extmap__5365__auto__ = (function (){var G__36971 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36829,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.record_QMARK_(G__36829)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36971);
} else {
return G__36971;
}
})();
return (new intemporal.store.InMemoryStore(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__36829),null,cljs.core.not_empty(extmap__5365__auto__),null));
});


//# sourceMappingURL=intemporal.store.js.map
