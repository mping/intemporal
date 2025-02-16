goog.provide('intemporal.doc');
intemporal.doc.nested_fn = (function intemporal$doc$nested_fn(a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"nested","nested",18943849)], null);
});
intemporal.doc.activity_fn = (function intemporal$doc$activity_fn(a){
var f = (function() { 
var G__49844__delegate = function (argv__49642__auto__){
if((!((new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_) == null)))){
} else {
throw (new Error(["Assert failed: ","no next-id function, are you inside `defn-workflow`?","\n","(clojure.core/some? (:next-id intemporal.workflow.internal/*env*))"].join('')));
}

var ref__49643__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var root__49644__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var fvar__49645__auto__ = new cljs.core.Var(function(){return intemporal.doc.nested_fn;},new cljs.core.Symbol("intemporal.doc","nested-fn","intemporal.doc/nested-fn",-804060883,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"intemporal.doc","intemporal.doc",-889985538,null),new cljs.core.Symbol(null,"nested-fn","nested-fn",1357386556,null),"intemporal/doc.cljs",16,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null)),null,(cljs.core.truth_(intemporal.doc.nested_fn)?intemporal.doc.nested_fn.cljs$lang$test:null)]));
var store__49646__auto__ = new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var protos__49647__auto__ = new cljs.core.Keyword(null,"protos","protos",-804831293).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var id__49648__auto__ = (function (){var fexpr__49773 = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
return (fexpr__49773.cljs$core$IFn$_invoke$arity$0 ? fexpr__49773.cljs$core$IFn$_invoke$arity$0() : fexpr__49773.call(null, ));
})();
var ref__49643__auto____$1 = null;
var task__49649__auto__ = intemporal.workflow.internal.create_activity_task.cljs$core$IFn$_invoke$arity$6(ref__49643__auto____$1,root__49644__auto__,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(fvar__49645__auto__),fvar__49645__auto__,argv__49642__auto__,id__49648__auto__);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.doc";
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

var signal__40521__auto__ = (function (){var signal__40520__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),"intemporal.doc"], null),__ns,null,null,null,null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_data","_data",-1394265439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),task__49649__auto__,new cljs.core.Keyword(null,"env","env",-1815813235),intemporal.workflow.internal._STAR_env_STAR_], null)], null),(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invoking task with id ",id__49648__auto__], null));
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
})();

var res__49650__auto__ = intemporal.workflow.internal.resume_task.cljs$core$IFn$_invoke$arity$4(intemporal.workflow.internal._STAR_env_STAR_,store__49646__auto__,protos__49647__auto__,task__49649__auto__);
return res__49650__auto__;
};
var G__49844 = function (var_args){
var argv__49642__auto__ = null;
if (arguments.length > 0) {
var G__49847__i = 0, G__49847__a = new Array(arguments.length -  0);
while (G__49847__i < G__49847__a.length) {G__49847__a[G__49847__i] = arguments[G__49847__i + 0]; ++G__49847__i;}
  argv__49642__auto__ = new cljs.core.IndexedSeq(G__49847__a,0,null);
} 
return G__49844__delegate.call(this,argv__49642__auto__);};
G__49844.cljs$lang$maxFixedArity = 0;
G__49844.cljs$lang$applyTo = (function (arglist__49848){
var argv__49642__auto__ = cljs.core.seq(arglist__49848);
return G__49844__delegate(argv__49642__auto__);
});
G__49844.cljs$core$IFn$_invoke$arity$variadic = G__49844__delegate;
return G__49844;
})()
;
return f(new cljs.core.Keyword(null,"sub","sub",-2093760025));
});

/**
 * @interface
 */
intemporal.doc.MyActivities = function(){};

var intemporal$doc$MyActivities$foo$dyn_49849 = (function (this$,a){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.doc.foo[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,a) : m__5351__auto__.call(null, this$,a));
} else {
var m__5349__auto__ = (intemporal.doc.foo["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,a) : m__5349__auto__.call(null, this$,a));
} else {
throw cljs.core.missing_protocol("MyActivities.foo",this$);
}
}
});
intemporal.doc.foo = (function intemporal$doc$foo(this$,a){
if((((!((this$ == null)))) && ((!((this$.intemporal$doc$MyActivities$foo$arity$2 == null)))))){
return this$.intemporal$doc$MyActivities$foo$arity$2(this$,a);
} else {
return intemporal$doc$MyActivities$foo$dyn_49849(this$,a);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {intemporal.doc.MyActivities}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
intemporal.doc.MyActivitiesImpl = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k49776,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__49780 = k49776;
switch (G__49780) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49776,else__5303__auto__);

}
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__49786){
var vec__49787 = p__49786;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49787,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49787,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#intemporal.doc.MyActivitiesImpl{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49775){
var self__ = this;
var G__49775__$1 = this;
return (new cljs.core.RecordIter((0),G__49775__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new intemporal.doc.MyActivitiesImpl(self__.__meta,self__.__extmap,self__.__hash));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1767160363 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49777,other49778){
var self__ = this;
var this49777__$1 = this;
return (((!((other49778 == null)))) && ((((this49777__$1.constructor === other49778.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49777__$1.__extmap,other49778.__extmap)))));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new intemporal.doc.MyActivitiesImpl(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k49776){
var self__ = this;
var this__5307__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k49776);
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__49775){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__49795 = cljs.core.keyword_identical_QMARK_;
var expr__49796 = k__5309__auto__;
return (new intemporal.doc.MyActivitiesImpl(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__49775),null));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__49775){
var self__ = this;
var this__5299__auto____$1 = this;
return (new intemporal.doc.MyActivitiesImpl(G__49775,self__.__extmap,self__.__hash));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(intemporal.doc.MyActivitiesImpl.prototype.intemporal$doc$MyActivities$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.MyActivitiesImpl.prototype.intemporal$doc$MyActivities$foo$arity$2 = (function (this$,a){
var self__ = this;
var this$__$1 = this;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["record was called:"], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"child","child",623967545)], null);
}));

(intemporal.doc.MyActivitiesImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(intemporal.doc.MyActivitiesImpl.cljs$lang$type = true);

(intemporal.doc.MyActivitiesImpl.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"intemporal.doc/MyActivitiesImpl",null,(1),null));
}));

(intemporal.doc.MyActivitiesImpl.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"intemporal.doc/MyActivitiesImpl");
}));

/**
 * Positional factory function for intemporal.doc/MyActivitiesImpl.
 */
intemporal.doc.__GT_MyActivitiesImpl = (function intemporal$doc$__GT_MyActivitiesImpl(){
return (new intemporal.doc.MyActivitiesImpl(null,null,null));
});

/**
 * Factory function for intemporal.doc/MyActivitiesImpl, taking a map of keywords to field values.
 */
intemporal.doc.map__GT_MyActivitiesImpl = (function intemporal$doc$map__GT_MyActivitiesImpl(G__49779){
var extmap__5342__auto__ = (function (){var G__49798 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__49779);
if(cljs.core.record_QMARK_(G__49779)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49798);
} else {
return G__49798;
}
})();
return (new intemporal.doc.MyActivitiesImpl(null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {intemporal.doc.MyActivities}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
intemporal.doc.t_intemporal$doc49812 = (function (i,sf,meta49813){
this.i = i;
this.sf = sf;
this.meta49813 = meta49813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.doc.t_intemporal$doc49812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49814,meta49813__$1){
var self__ = this;
var _49814__$1 = this;
return (new intemporal.doc.t_intemporal$doc49812(self__.i,self__.sf,meta49813__$1));
}));

(intemporal.doc.t_intemporal$doc49812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49814){
var self__ = this;
var _49814__$1 = this;
return self__.meta49813;
}));

(intemporal.doc.t_intemporal$doc49812.prototype.intemporal$doc$MyActivities$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.t_intemporal$doc49812.prototype.intemporal$doc$MyActivities$foo$arity$2 = (function (this__49656__auto__,a){
var self__ = this;
var this__49656__auto____$1 = this;
var aid__49657__auto__ = new cljs.core.Symbol("intemporal.doc","foo","intemporal.doc/foo",778009994,null);
var act_opts__49658__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var ref__49659__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var root__49660__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var store__49661__auto__ = new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var protos__49662__auto__ = new cljs.core.Keyword(null,"protos","protos",-804831293).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var id__49663__auto__ = (function (){var fexpr__49815 = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
return (fexpr__49815.cljs$core$IFn$_invoke$arity$0 ? fexpr__49815.cljs$core$IFn$_invoke$arity$0() : fexpr__49815.call(null, ));
})();
var ref__49659__auto____$1 = null;
var task__49664__auto__ = intemporal.workflow.internal.create_proto_activity_task.cljs$core$IFn$_invoke$arity$7(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("intemporal.doc/MyActivities"),ref__49659__auto____$1,root__49660__auto__,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(aid__49657__auto__),(function() { 
var G__49852__delegate = function (impl_PLUS_args__49665__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(intemporal.doc.foo,impl_PLUS_args__49665__auto__);
};
var G__49852 = function (var_args){
var impl_PLUS_args__49665__auto__ = null;
if (arguments.length > 0) {
var G__49853__i = 0, G__49853__a = new Array(arguments.length -  0);
while (G__49853__i < G__49853__a.length) {G__49853__a[G__49853__i] = arguments[G__49853__i + 0]; ++G__49853__i;}
  impl_PLUS_args__49665__auto__ = new cljs.core.IndexedSeq(G__49853__a,0,null);
} 
return G__49852__delegate.call(this,impl_PLUS_args__49665__auto__);};
G__49852.cljs$lang$maxFixedArity = 0;
G__49852.cljs$lang$applyTo = (function (arglist__49854){
var impl_PLUS_args__49665__auto__ = cljs.core.seq(arglist__49854);
return G__49852__delegate(impl_PLUS_args__49665__auto__);
});
G__49852.cljs$core$IFn$_invoke$arity$variadic = G__49852__delegate;
return G__49852;
})()
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null),id__49663__auto__);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.doc";
var __id = null;
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
if(cljs.core.truth_((function (){var sf__$1 = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf__$1)){
return (sf__$1.cljs$core$IFn$_invoke$arity$4 ? sf__$1.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf__$1.call(null, __kind,__ns,__id,__level));
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

var signal__40521__auto__ = (function (){var signal__40520__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),"intemporal.doc"], null),__ns,null,null,null,null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_data","_data",-1394265439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),task__49664__auto__,new cljs.core.Keyword(null,"env","env",-1815813235),intemporal.workflow.internal._STAR_env_STAR_], null)], null),(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invoking task with id",id__49663__auto__], null));
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
})();

return intemporal.workflow.internal.resume_task.cljs$core$IFn$_invoke$arity$4(intemporal.workflow.internal._STAR_env_STAR_,store__49661__auto__,protos__49662__auto__,task__49664__auto__);
}));

(intemporal.doc.t_intemporal$doc49812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"sf","sf",-308960211,null),new cljs.core.Symbol(null,"meta49813","meta49813",-176268941,null)], null);
}));

(intemporal.doc.t_intemporal$doc49812.cljs$lang$type = true);

(intemporal.doc.t_intemporal$doc49812.cljs$lang$ctorStr = "intemporal.doc/t_intemporal$doc49812");

(intemporal.doc.t_intemporal$doc49812.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"intemporal.doc/t_intemporal$doc49812");
}));

/**
 * Positional factory function for intemporal.doc/t_intemporal$doc49812.
 */
intemporal.doc.__GT_t_intemporal$doc49812 = (function intemporal$doc$__GT_t_intemporal$doc49812(i,sf,meta49813){
return (new intemporal.doc.t_intemporal$doc49812(i,sf,meta49813));
});


intemporal.doc.my_workflow_ = (function intemporal$doc$my_workflow_(i){
var sf = (function() { 
var G__49855__delegate = function (argv__49642__auto__){
if((!((new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_) == null)))){
} else {
throw (new Error(["Assert failed: ","no next-id function, are you inside `defn-workflow`?","\n","(clojure.core/some? (:next-id intemporal.workflow.internal/*env*))"].join('')));
}

var ref__49643__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var root__49644__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var fvar__49645__auto__ = new cljs.core.Var(function(){return intemporal.doc.activity_fn;},new cljs.core.Symbol("intemporal.doc","activity-fn","intemporal.doc/activity-fn",1417063461,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"intemporal.doc","intemporal.doc",-889985538,null),new cljs.core.Symbol(null,"activity-fn","activity-fn",-716588492,null),"intemporal/doc.cljs",18,1,14,14,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null)),null,(cljs.core.truth_(intemporal.doc.activity_fn)?intemporal.doc.activity_fn.cljs$lang$test:null)]));
var store__49646__auto__ = new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var protos__49647__auto__ = new cljs.core.Keyword(null,"protos","protos",-804831293).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var id__49648__auto__ = (function (){var fexpr__49799 = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
return (fexpr__49799.cljs$core$IFn$_invoke$arity$0 ? fexpr__49799.cljs$core$IFn$_invoke$arity$0() : fexpr__49799.call(null, ));
})();
var ref__49643__auto____$1 = null;
var task__49649__auto__ = intemporal.workflow.internal.create_activity_task.cljs$core$IFn$_invoke$arity$6(ref__49643__auto____$1,root__49644__auto__,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(fvar__49645__auto__),fvar__49645__auto__,argv__49642__auto__,id__49648__auto__);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.doc";
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

var signal__40521__auto__ = (function (){var signal__40520__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),"intemporal.doc"], null),__ns,null,null,null,null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_data","_data",-1394265439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),task__49649__auto__,new cljs.core.Keyword(null,"env","env",-1815813235),intemporal.workflow.internal._STAR_env_STAR_], null)], null),(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invoking task with id ",id__49648__auto__], null));
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
})();

var res__49650__auto__ = intemporal.workflow.internal.resume_task.cljs$core$IFn$_invoke$arity$4(intemporal.workflow.internal._STAR_env_STAR_,store__49646__auto__,protos__49647__auto__,task__49649__auto__);
return res__49650__auto__;
};
var G__49855 = function (var_args){
var argv__49642__auto__ = null;
if (arguments.length > 0) {
var G__49856__i = 0, G__49856__a = new Array(arguments.length -  0);
while (G__49856__i < G__49856__a.length) {G__49856__a[G__49856__i] = arguments[G__49856__i + 0]; ++G__49856__i;}
  argv__49642__auto__ = new cljs.core.IndexedSeq(G__49856__a,0,null);
} 
return G__49855__delegate.call(this,argv__49642__auto__);};
G__49855.cljs$lang$maxFixedArity = 0;
G__49855.cljs$lang$applyTo = (function (arglist__49857){
var argv__49642__auto__ = cljs.core.seq(arglist__49857);
return G__49855__delegate(argv__49642__auto__);
});
G__49855.cljs$core$IFn$_invoke$arity$variadic = G__49855__delegate;
return G__49855;
})()
;
var pr = (new intemporal.doc.t_intemporal$doc49812(i,sf,null));
var sres = sf(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
var pres = pr.intemporal$doc$MyActivities$foo$arity$2(null, new cljs.core.Keyword(null,"X","X",1705996313));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___29962__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(sres),(function (v1){
return promesa.protocols._mcat(promesa.protocols._promise(pres),(function (v2){
return promesa.protocols._promise(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null),v1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v2], 0)));
}));
}));
}));
});

intemporal.doc.my_workflow = (function intemporal$doc$my_workflow(i){
var ref__49632__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var root__49633__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var id__49634__auto__ = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return intemporal.workflow.internal.random_id();
}
})();
var fvar__49635__auto__ = new cljs.core.Var(function(){return intemporal.doc.my_workflow_;},new cljs.core.Symbol("intemporal.doc","my-workflow-","intemporal.doc/my-workflow-",-465347473,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"intemporal.doc","intemporal.doc",-889985538,null),new cljs.core.Symbol(null,"my-workflow-","my-workflow-",1668689560,null),"intemporal/doc.cljs",1,25,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null)),null,(cljs.core.truth_(intemporal.doc.my_workflow_)?intemporal.doc.my_workflow_.cljs$lang$test:null)]));
var task__49636__auto__ = intemporal.workflow.internal.create_workflow_task.cljs$core$IFn$_invoke$arity$6(ref__49632__auto__,root__49633__auto__,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(fvar__49635__auto__),fvar__49635__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),id__49634__auto__);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.doc";
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

var signal__40521__auto__ = (function (){var signal__40520__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),"intemporal.doc"], null),__ns,null,null,null,null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_data","_data",-1394265439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),task__49636__auto__,new cljs.core.Keyword(null,"env","env",-1815813235),intemporal.workflow.internal._STAR_env_STAR_], null)], null),(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invoking task with id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task__49636__auto__)], null));
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
})();

return intemporal.workflow.enqueue_and_wait(intemporal.workflow.internal._STAR_env_STAR_,task__49636__auto__);
});
intemporal.doc.mstore = intemporal.store.make_store.cljs$core$IFn$_invoke$arity$0();
intemporal.doc.worker = intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic(intemporal.doc.mstore,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocols","protocols",-5615896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("intemporal.doc","MyActivities","intemporal.doc/MyActivities",-1471127805,null),intemporal.doc.__GT_MyActivitiesImpl()], null)], null)], 0));
intemporal.doc.set_html_BANG_ = (function intemporal$doc$set_html_BANG_(id,html){
return (document.getElementById(id).innerHTML = html);
});
intemporal.doc.set_results_BANG_ = (function intemporal$doc$set_results_BANG_(html){
return intemporal.doc.set_html_BANG_("results",html);
});
intemporal.doc.render_table_BANG_ = (function intemporal$doc$render_table_BANG_(id,rows){
var header = cljs.core.keys(cljs.core.first(rows));
var thead = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5480__auto__ = (function intemporal$doc$render_table_BANG__$_iter__49822(s__49823){
return (new cljs.core.LazySeq(null,(function (){
var s__49823__$1 = s__49823;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__49823__$1);
if(temp__5804__auto__){
var s__49823__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49823__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__49823__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__49825 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__49824 = (0);
while(true){
if((i__49824 < size__5479__auto__)){
var h = cljs.core._nth(c__5478__auto__,i__49824);
cljs.core.chunk_append(b__49825,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),h], null));

var G__49858 = (i__49824 + (1));
i__49824 = G__49858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49825),intemporal$doc$render_table_BANG__$_iter__49822(cljs.core.chunk_rest(s__49823__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49825),null);
}
} else {
var h = cljs.core.first(s__49823__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),h], null),intemporal$doc$render_table_BANG__$_iter__49822(cljs.core.rest(s__49823__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(header);
})()], null)], null);
var tbody = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5480__auto__ = (function intemporal$doc$render_table_BANG__$_iter__49826(s__49827){
return (new cljs.core.LazySeq(null,(function (){
var s__49827__$1 = s__49827;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__49827__$1);
if(temp__5804__auto__){
var s__49827__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49827__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__49827__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__49829 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__49828 = (0);
while(true){
if((i__49828 < size__5479__auto__)){
var r = cljs.core._nth(c__5478__auto__,i__49828);
cljs.core.chunk_append(b__49829,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"type","type",1174270348)))], null),(function (){var iter__5480__auto__ = ((function (i__49828,r,c__5478__auto__,size__5479__auto__,b__49829,s__49827__$2,temp__5804__auto__,header,thead){
return (function intemporal$doc$render_table_BANG__$_iter__49826_$_iter__49831(s__49832){
return (new cljs.core.LazySeq(null,((function (i__49828,r,c__5478__auto__,size__5479__auto__,b__49829,s__49827__$2,temp__5804__auto__,header,thead){
return (function (){
var s__49832__$1 = s__49832;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__49832__$1);
if(temp__5804__auto____$1){
var s__49832__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49832__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__49832__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__49834 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__49833 = (0);
while(true){
if((i__49833 < size__5479__auto____$1)){
var h = cljs.core._nth(c__5478__auto____$1,i__49833);
cljs.core.chunk_append(b__49834,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null));

var G__49859 = (i__49833 + (1));
i__49833 = G__49859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49834),intemporal$doc$render_table_BANG__$_iter__49826_$_iter__49831(cljs.core.chunk_rest(s__49832__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49834),null);
}
} else {
var h = cljs.core.first(s__49832__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null),intemporal$doc$render_table_BANG__$_iter__49826_$_iter__49831(cljs.core.rest(s__49832__$2)));
}
} else {
return null;
}
break;
}
});})(i__49828,r,c__5478__auto__,size__5479__auto__,b__49829,s__49827__$2,temp__5804__auto__,header,thead))
,null,null));
});})(i__49828,r,c__5478__auto__,size__5479__auto__,b__49829,s__49827__$2,temp__5804__auto__,header,thead))
;
return iter__5480__auto__(header);
})()], null));

var G__49860 = (i__49828 + (1));
i__49828 = G__49860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49829),intemporal$doc$render_table_BANG__$_iter__49826(cljs.core.chunk_rest(s__49827__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49829),null);
}
} else {
var r = cljs.core.first(s__49827__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"type","type",1174270348)))], null),(function (){var iter__5480__auto__ = ((function (r,s__49827__$2,temp__5804__auto__,header,thead){
return (function intemporal$doc$render_table_BANG__$_iter__49826_$_iter__49837(s__49838){
return (new cljs.core.LazySeq(null,(function (){
var s__49838__$1 = s__49838;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__49838__$1);
if(temp__5804__auto____$1){
var s__49838__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49838__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__49838__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__49840 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__49839 = (0);
while(true){
if((i__49839 < size__5479__auto__)){
var h = cljs.core._nth(c__5478__auto__,i__49839);
cljs.core.chunk_append(b__49840,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null));

var G__49861 = (i__49839 + (1));
i__49839 = G__49861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49840),intemporal$doc$render_table_BANG__$_iter__49826_$_iter__49837(cljs.core.chunk_rest(s__49838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49840),null);
}
} else {
var h = cljs.core.first(s__49838__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null),intemporal$doc$render_table_BANG__$_iter__49826_$_iter__49837(cljs.core.rest(s__49838__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(r,s__49827__$2,temp__5804__auto__,header,thead))
;
return iter__5480__auto__(header);
})()], null),intemporal$doc$render_table_BANG__$_iter__49826(cljs.core.rest(s__49827__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(rows);
})()], null);
var tbl = ["<table"," role=\"grid\"",">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(thead)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(tbody)),"</table>"].join('');
return intemporal.doc.set_html_BANG_(id,tbl);
});
intemporal.doc.render_tables_BANG_ = (function intemporal$doc$render_tables_BANG_(the_store){
var tasks = cljs.core.vals(cljs.core.deref(new cljs.core.Keyword("intemporal.store","task-store","intemporal.store/task-store",1271552970).cljs$core$IFn$_invoke$arity$1(the_store)));
var events = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.flatten(cljs.core.vals(cljs.core.deref(new cljs.core.Keyword("intemporal.store","history-store","intemporal.store/history-store",-916561061).cljs$core$IFn$_invoke$arity$1(the_store)))));
intemporal.doc.render_table_BANG_("tasks",tasks);

intemporal.doc.render_table_BANG_("events",events);

console.table(cljs.core.clj__GT_js(tasks));

return console.table(cljs.core.clj__GT_js(events));
});
intemporal.doc.init = (function intemporal$doc$init(){
var res = (function (){var _STAR_env_STAR__orig_val__49841 = intemporal.workflow.internal._STAR_env_STAR_;
var _STAR_env_STAR__temp_val__49842 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([intemporal.workflow.internal.default_env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"store","store",1512230022),intemporal.doc.mstore], null)], 0));
(intemporal.workflow.internal._STAR_env_STAR_ = _STAR_env_STAR__temp_val__49842);

try{return intemporal.doc.my_workflow((1));
}finally {(intemporal.workflow.internal._STAR_env_STAR_ = _STAR_env_STAR__orig_val__49841);
}})();
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(res,(function (r){
console.log("res",r);

intemporal.doc.set_results_BANG_(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)));

return intemporal.doc.render_tables_BANG_(cljs.core.deref(intemporal.doc.mstore));
})),(function (r){
console.error("error",r);

return intemporal.doc.set_results_BANG_(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)));
}));
});

//# sourceMappingURL=intemporal.doc.js.map
