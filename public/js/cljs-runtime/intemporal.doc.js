goog.provide('intemporal.doc');
intemporal.doc.nested_fn = (function intemporal$doc$nested_fn(a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"nested","nested",18943849)], null);
});
intemporal.doc.activity_fn = (function intemporal$doc$activity_fn(a){
var f = (function() { 
var G__57429__delegate = function (argv__56956__auto__){
if((!((new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_) == null)))){
} else {
throw (new Error(["Assert failed: ","No next-id function, are you inside `defn-workflow`?","\n","(clojure.core/some? (:next-id intemporal.workflow.internal/*env*))"].join('')));
}

var ref__56957__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var root__56958__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var fvar__56959__auto__ = new cljs.core.Var(function(){return intemporal.doc.nested_fn;},new cljs.core.Symbol("intemporal.doc","nested-fn","intemporal.doc/nested-fn",-804060883,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"intemporal.doc","intemporal.doc",-889985538,null),new cljs.core.Symbol(null,"nested-fn","nested-fn",1357386556,null),"intemporal/doc.cljs",16,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null)),null,(cljs.core.truth_(intemporal.doc.nested_fn)?intemporal.doc.nested_fn.cljs$lang$test:null)]));
var store__56960__auto__ = new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var protos__56961__auto__ = new cljs.core.Keyword(null,"protos","protos",-804831293).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var id__56962__auto__ = (function (){var fexpr__57391 = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
return (fexpr__57391.cljs$core$IFn$_invoke$arity$0 ? fexpr__57391.cljs$core$IFn$_invoke$arity$0() : fexpr__57391.call(null));
})();
var ref__56957__auto____$1 = null;
var task__56963__auto__ = intemporal.workflow.internal.create_activity_task.cljs$core$IFn$_invoke$arity$6(ref__56957__auto____$1,root__56958__auto__,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(fvar__56959__auto__),fvar__56959__auto__,argv__56956__auto__,id__56962__auto__);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.doc";
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

var signal__52360__auto__ = (function (){var signal__52359__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,__ns,null,null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_data","_data",-1394265439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),task__56963__auto__,new cljs.core.Keyword(null,"env","env",-1815813235),intemporal.workflow.internal._STAR_env_STAR_], null)], null),(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invoking task with id ",id__56962__auto__], null));
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
})();


var res__56964__auto__ = intemporal.workflow.internal.resume_task.cljs$core$IFn$_invoke$arity$4(intemporal.workflow.internal._STAR_env_STAR_,store__56960__auto__,protos__56961__auto__,task__56963__auto__);
return res__56964__auto__;
};
var G__57429 = function (var_args){
var argv__56956__auto__ = null;
if (arguments.length > 0) {
var G__57430__i = 0, G__57430__a = new Array(arguments.length -  0);
while (G__57430__i < G__57430__a.length) {G__57430__a[G__57430__i] = arguments[G__57430__i + 0]; ++G__57430__i;}
  argv__56956__auto__ = new cljs.core.IndexedSeq(G__57430__a,0,null);
} 
return G__57429__delegate.call(this,argv__56956__auto__);};
G__57429.cljs$lang$maxFixedArity = 0;
G__57429.cljs$lang$applyTo = (function (arglist__57431){
var argv__56956__auto__ = cljs.core.seq(arglist__57431);
return G__57429__delegate(argv__56956__auto__);
});
G__57429.cljs$core$IFn$_invoke$arity$variadic = G__57429__delegate;
return G__57429;
})()
;
return f(new cljs.core.Keyword(null,"sub","sub",-2093760025));
});

/**
 * @interface
 */
intemporal.doc.MyActivities = function(){};

var intemporal$doc$MyActivities$foo$dyn_57432 = (function (this$,a){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (intemporal.doc.foo[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,a) : m__5374__auto__.call(null,this$,a));
} else {
var m__5372__auto__ = (intemporal.doc.foo["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,a) : m__5372__auto__.call(null,this$,a));
} else {
throw cljs.core.missing_protocol("MyActivities.foo",this$);
}
}
});
intemporal.doc.foo = (function intemporal$doc$foo(this$,a){
if((((!((this$ == null)))) && ((!((this$.intemporal$doc$MyActivities$foo$arity$2 == null)))))){
return this$.intemporal$doc$MyActivities$foo$arity$2(this$,a);
} else {
return intemporal$doc$MyActivities$foo$dyn_57432(this$,a);
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
(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k57393,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__57397 = k57393;
switch (G__57397) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57393,else__5326__auto__);

}
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__57398){
var vec__57399 = p__57398;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57399,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57399,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#intemporal.doc.MyActivitiesImpl{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57392){
var self__ = this;
var G__57392__$1 = this;
return (new cljs.core.RecordIter((0),G__57392__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new intemporal.doc.MyActivitiesImpl(self__.__meta,self__.__extmap,self__.__hash));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1767160363 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57394,other57395){
var self__ = this;
var this57394__$1 = this;
return (((!((other57395 == null)))) && ((((this57394__$1.constructor === other57395.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57394__$1.__extmap,other57395.__extmap)))));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new intemporal.doc.MyActivitiesImpl(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k57393){
var self__ = this;
var this__5330__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k57393);
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__57392){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__57402 = cljs.core.keyword_identical_QMARK_;
var expr__57403 = k__5332__auto__;
return (new intemporal.doc.MyActivitiesImpl(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__57392),null));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__57392){
var self__ = this;
var this__5322__auto____$1 = this;
return (new intemporal.doc.MyActivitiesImpl(G__57392,self__.__extmap,self__.__hash));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
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

(intemporal.doc.MyActivitiesImpl.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"intemporal.doc/MyActivitiesImpl",null,(1),null));
}));

(intemporal.doc.MyActivitiesImpl.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"intemporal.doc/MyActivitiesImpl");
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
intemporal.doc.map__GT_MyActivitiesImpl = (function intemporal$doc$map__GT_MyActivitiesImpl(G__57396){
var extmap__5365__auto__ = (function (){var G__57405 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__57396);
if(cljs.core.record_QMARK_(G__57396)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57405);
} else {
return G__57405;
}
})();
return (new intemporal.doc.MyActivitiesImpl(null,cljs.core.not_empty(extmap__5365__auto__),null));
});


/**
* @constructor
 * @implements {intemporal.doc.MyActivities}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
intemporal.doc.t_intemporal$doc57407 = (function (i,sf,meta57408){
this.i = i;
this.sf = sf;
this.meta57408 = meta57408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.doc.t_intemporal$doc57407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57409,meta57408__$1){
var self__ = this;
var _57409__$1 = this;
return (new intemporal.doc.t_intemporal$doc57407(self__.i,self__.sf,meta57408__$1));
}));

(intemporal.doc.t_intemporal$doc57407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57409){
var self__ = this;
var _57409__$1 = this;
return self__.meta57408;
}));

(intemporal.doc.t_intemporal$doc57407.prototype.intemporal$doc$MyActivities$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.t_intemporal$doc57407.prototype.intemporal$doc$MyActivities$foo$arity$2 = (function (this__56970__auto__,a){
var self__ = this;
var this__56970__auto____$1 = this;
var aid__56971__auto__ = new cljs.core.Symbol("intemporal.doc","foo","intemporal.doc/foo",778009994,null);
var act_opts__56972__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var ref__56973__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var root__56974__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var store__56975__auto__ = new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var protos__56976__auto__ = new cljs.core.Keyword(null,"protos","protos",-804831293).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var id__56977__auto__ = (function (){var fexpr__57410 = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
return (fexpr__57410.cljs$core$IFn$_invoke$arity$0 ? fexpr__57410.cljs$core$IFn$_invoke$arity$0() : fexpr__57410.call(null));
})();
var ref__56973__auto____$1 = null;
var task__56978__auto__ = intemporal.workflow.internal.create_proto_activity_task.cljs$core$IFn$_invoke$arity$7(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("intemporal.doc/MyActivities"),ref__56973__auto____$1,root__56974__auto__,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(aid__56971__auto__),(function() { 
var G__57434__delegate = function (impl_PLUS_args__56979__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(intemporal.doc.foo,impl_PLUS_args__56979__auto__);
};
var G__57434 = function (var_args){
var impl_PLUS_args__56979__auto__ = null;
if (arguments.length > 0) {
var G__57435__i = 0, G__57435__a = new Array(arguments.length -  0);
while (G__57435__i < G__57435__a.length) {G__57435__a[G__57435__i] = arguments[G__57435__i + 0]; ++G__57435__i;}
  impl_PLUS_args__56979__auto__ = new cljs.core.IndexedSeq(G__57435__a,0,null);
} 
return G__57434__delegate.call(this,impl_PLUS_args__56979__auto__);};
G__57434.cljs$lang$maxFixedArity = 0;
G__57434.cljs$lang$applyTo = (function (arglist__57436){
var impl_PLUS_args__56979__auto__ = cljs.core.seq(arglist__57436);
return G__57434__delegate(impl_PLUS_args__56979__auto__);
});
G__57434.cljs$core$IFn$_invoke$arity$variadic = G__57434__delegate;
return G__57434;
})()
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null),id__56977__auto__);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.doc";
var __id = null;
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
if(cljs.core.truth_((function (){var sf__$1 = taoensso.telemere.impl._STAR_rt_call_filter_STAR_;
if(cljs.core.truth_(sf__$1)){
return (sf__$1.cljs$core$IFn$_invoke$arity$4 ? sf__$1.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"log","log",-1595516004),__ns,__id,__level) : sf__$1.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),__ns,__id,__level));
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

var signal__52360__auto__ = (function (){var signal__52359__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,__ns,null,null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_data","_data",-1394265439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),task__56978__auto__,new cljs.core.Keyword(null,"env","env",-1815813235),intemporal.workflow.internal._STAR_env_STAR_], null)], null),(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invoking task with id",id__56977__auto__], null));
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
})();


return intemporal.workflow.internal.resume_task.cljs$core$IFn$_invoke$arity$4(intemporal.workflow.internal._STAR_env_STAR_,store__56975__auto__,protos__56976__auto__,task__56978__auto__);
}));

(intemporal.doc.t_intemporal$doc57407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"sf","sf",-308960211,null),new cljs.core.Symbol(null,"meta57408","meta57408",-2004347558,null)], null);
}));

(intemporal.doc.t_intemporal$doc57407.cljs$lang$type = true);

(intemporal.doc.t_intemporal$doc57407.cljs$lang$ctorStr = "intemporal.doc/t_intemporal$doc57407");

(intemporal.doc.t_intemporal$doc57407.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"intemporal.doc/t_intemporal$doc57407");
}));

/**
 * Positional factory function for intemporal.doc/t_intemporal$doc57407.
 */
intemporal.doc.__GT_t_intemporal$doc57407 = (function intemporal$doc$__GT_t_intemporal$doc57407(i,sf,meta57408){
return (new intemporal.doc.t_intemporal$doc57407(i,sf,meta57408));
});


intemporal.doc.my_workflow_ = (function intemporal$doc$my_workflow_(i){
var sf = (function() { 
var G__57437__delegate = function (argv__56956__auto__){
if((!((new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_) == null)))){
} else {
throw (new Error(["Assert failed: ","No next-id function, are you inside `defn-workflow`?","\n","(clojure.core/some? (:next-id intemporal.workflow.internal/*env*))"].join('')));
}

var ref__56957__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var root__56958__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var fvar__56959__auto__ = new cljs.core.Var(function(){return intemporal.doc.activity_fn;},new cljs.core.Symbol("intemporal.doc","activity-fn","intemporal.doc/activity-fn",1417063461,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"intemporal.doc","intemporal.doc",-889985538,null),new cljs.core.Symbol(null,"activity-fn","activity-fn",-716588492,null),"intemporal/doc.cljs",18,1,14,14,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null)),null,(cljs.core.truth_(intemporal.doc.activity_fn)?intemporal.doc.activity_fn.cljs$lang$test:null)]));
var store__56960__auto__ = new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var protos__56961__auto__ = new cljs.core.Keyword(null,"protos","protos",-804831293).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var id__56962__auto__ = (function (){var fexpr__57406 = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
return (fexpr__57406.cljs$core$IFn$_invoke$arity$0 ? fexpr__57406.cljs$core$IFn$_invoke$arity$0() : fexpr__57406.call(null));
})();
var ref__56957__auto____$1 = null;
var task__56963__auto__ = intemporal.workflow.internal.create_activity_task.cljs$core$IFn$_invoke$arity$6(ref__56957__auto____$1,root__56958__auto__,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(fvar__56959__auto__),fvar__56959__auto__,argv__56956__auto__,id__56962__auto__);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.doc";
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

var signal__52360__auto__ = (function (){var signal__52359__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,__ns,null,null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_data","_data",-1394265439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),task__56963__auto__,new cljs.core.Keyword(null,"env","env",-1815813235),intemporal.workflow.internal._STAR_env_STAR_], null)], null),(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invoking task with id ",id__56962__auto__], null));
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
})();


var res__56964__auto__ = intemporal.workflow.internal.resume_task.cljs$core$IFn$_invoke$arity$4(intemporal.workflow.internal._STAR_env_STAR_,store__56960__auto__,protos__56961__auto__,task__56963__auto__);
return res__56964__auto__;
};
var G__57437 = function (var_args){
var argv__56956__auto__ = null;
if (arguments.length > 0) {
var G__57438__i = 0, G__57438__a = new Array(arguments.length -  0);
while (G__57438__i < G__57438__a.length) {G__57438__a[G__57438__i] = arguments[G__57438__i + 0]; ++G__57438__i;}
  argv__56956__auto__ = new cljs.core.IndexedSeq(G__57438__a,0,null);
} 
return G__57437__delegate.call(this,argv__56956__auto__);};
G__57437.cljs$lang$maxFixedArity = 0;
G__57437.cljs$lang$applyTo = (function (arglist__57439){
var argv__56956__auto__ = cljs.core.seq(arglist__57439);
return G__57437__delegate(argv__56956__auto__);
});
G__57437.cljs$core$IFn$_invoke$arity$variadic = G__57437__delegate;
return G__57437;
})()
;
var pr = (new intemporal.doc.t_intemporal$doc57407(i,sf,null));
var sres = sf(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
var pres = pr.intemporal$doc$MyActivities$foo$arity$2(null,new cljs.core.Keyword(null,"X","X",1705996313));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___49992__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(sres),(function (v1){
return promesa.protocols._mcat(promesa.protocols._promise(pres),(function (v2){
return promesa.protocols._promise(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null),v1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v2], 0)));
}));
}));
}));
});

intemporal.doc.my_workflow = (function intemporal$doc$my_workflow(i){
var ref__56946__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var root__56947__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
var id__56948__auto__ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.internal._STAR_env_STAR_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return intemporal.workflow.internal.random_id();
}
})();
var fvar__56949__auto__ = new cljs.core.Var(function(){return intemporal.doc.my_workflow_;},new cljs.core.Symbol("intemporal.doc","my-workflow-","intemporal.doc/my-workflow-",-465347473,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"intemporal.doc","intemporal.doc",-889985538,null),new cljs.core.Symbol(null,"my-workflow-","my-workflow-",1668689560,null),"intemporal/doc.cljs",1,25,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null)),null,(cljs.core.truth_(intemporal.doc.my_workflow_)?intemporal.doc.my_workflow_.cljs$lang$test:null)]));
var task__56950__auto__ = intemporal.workflow.internal.create_workflow_task.cljs$core$IFn$_invoke$arity$6(ref__56946__auto__,root__56947__auto__,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(fvar__56949__auto__),fvar__56949__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),id__56948__auto__);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.doc";
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

var signal__52360__auto__ = (function (){var signal__52359__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,__ns,null,null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_data","_data",-1394265439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),task__56950__auto__,new cljs.core.Keyword(null,"env","env",-1815813235),intemporal.workflow.internal._STAR_env_STAR_], null)], null),(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invoking task with id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task__56950__auto__)], null));
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
})();


return intemporal.workflow.enqueue_and_wait(intemporal.workflow.internal._STAR_env_STAR_,task__56950__auto__);
});
intemporal.doc.mstore = intemporal.store.make_store.cljs$core$IFn$_invoke$arity$0();
intemporal.doc.stop_worker = intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic(intemporal.doc.mstore,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocols","protocols",-5615896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("intemporal.doc","MyActivities","intemporal.doc/MyActivities",-1471127805,null),intemporal.doc.__GT_MyActivitiesImpl()], null)], null)], 0));
intemporal.doc.set_html_BANG_ = (function intemporal$doc$set_html_BANG_(id,html){
return (document.getElementById(id).innerHTML = html);
});
intemporal.doc.set_results_BANG_ = (function intemporal$doc$set_results_BANG_(html){
return intemporal.doc.set_html_BANG_("results",html);
});
intemporal.doc.render_table_BANG_ = (function intemporal$doc$render_table_BANG_(id,rows){
var header = cljs.core.keys(cljs.core.first(rows));
var thead = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = (function intemporal$doc$render_table_BANG__$_iter__57411(s__57412){
return (new cljs.core.LazySeq(null,(function (){
var s__57412__$1 = s__57412;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57412__$1);
if(temp__5825__auto__){
var s__57412__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57412__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__57412__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__57414 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__57413 = (0);
while(true){
if((i__57413 < size__5502__auto__)){
var h = cljs.core._nth(c__5501__auto__,i__57413);
cljs.core.chunk_append(b__57414,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),h], null));

var G__57440 = (i__57413 + (1));
i__57413 = G__57440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57414),intemporal$doc$render_table_BANG__$_iter__57411(cljs.core.chunk_rest(s__57412__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57414),null);
}
} else {
var h = cljs.core.first(s__57412__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),h], null),intemporal$doc$render_table_BANG__$_iter__57411(cljs.core.rest(s__57412__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(header);
})()], null)], null);
var tbody = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function intemporal$doc$render_table_BANG__$_iter__57415(s__57416){
return (new cljs.core.LazySeq(null,(function (){
var s__57416__$1 = s__57416;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57416__$1);
if(temp__5825__auto__){
var s__57416__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57416__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__57416__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__57418 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__57417 = (0);
while(true){
if((i__57417 < size__5502__auto__)){
var r = cljs.core._nth(c__5501__auto__,i__57417);
cljs.core.chunk_append(b__57418,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"type","type",1174270348)))], null),(function (){var iter__5503__auto__ = ((function (i__57417,r,c__5501__auto__,size__5502__auto__,b__57418,s__57416__$2,temp__5825__auto__,header,thead){
return (function intemporal$doc$render_table_BANG__$_iter__57415_$_iter__57419(s__57420){
return (new cljs.core.LazySeq(null,((function (i__57417,r,c__5501__auto__,size__5502__auto__,b__57418,s__57416__$2,temp__5825__auto__,header,thead){
return (function (){
var s__57420__$1 = s__57420;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__57420__$1);
if(temp__5825__auto____$1){
var s__57420__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57420__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__57420__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__57422 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__57421 = (0);
while(true){
if((i__57421 < size__5502__auto____$1)){
var h = cljs.core._nth(c__5501__auto____$1,i__57421);
cljs.core.chunk_append(b__57422,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null));

var G__57441 = (i__57421 + (1));
i__57421 = G__57441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57422),intemporal$doc$render_table_BANG__$_iter__57415_$_iter__57419(cljs.core.chunk_rest(s__57420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57422),null);
}
} else {
var h = cljs.core.first(s__57420__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null),intemporal$doc$render_table_BANG__$_iter__57415_$_iter__57419(cljs.core.rest(s__57420__$2)));
}
} else {
return null;
}
break;
}
});})(i__57417,r,c__5501__auto__,size__5502__auto__,b__57418,s__57416__$2,temp__5825__auto__,header,thead))
,null,null));
});})(i__57417,r,c__5501__auto__,size__5502__auto__,b__57418,s__57416__$2,temp__5825__auto__,header,thead))
;
return iter__5503__auto__(header);
})()], null));

var G__57442 = (i__57417 + (1));
i__57417 = G__57442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57418),intemporal$doc$render_table_BANG__$_iter__57415(cljs.core.chunk_rest(s__57416__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57418),null);
}
} else {
var r = cljs.core.first(s__57416__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"type","type",1174270348)))], null),(function (){var iter__5503__auto__ = ((function (r,s__57416__$2,temp__5825__auto__,header,thead){
return (function intemporal$doc$render_table_BANG__$_iter__57415_$_iter__57423(s__57424){
return (new cljs.core.LazySeq(null,(function (){
var s__57424__$1 = s__57424;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__57424__$1);
if(temp__5825__auto____$1){
var s__57424__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57424__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__57424__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__57426 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__57425 = (0);
while(true){
if((i__57425 < size__5502__auto__)){
var h = cljs.core._nth(c__5501__auto__,i__57425);
cljs.core.chunk_append(b__57426,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null));

var G__57443 = (i__57425 + (1));
i__57425 = G__57443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57426),intemporal$doc$render_table_BANG__$_iter__57415_$_iter__57423(cljs.core.chunk_rest(s__57424__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57426),null);
}
} else {
var h = cljs.core.first(s__57424__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null),intemporal$doc$render_table_BANG__$_iter__57415_$_iter__57423(cljs.core.rest(s__57424__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(r,s__57416__$2,temp__5825__auto__,header,thead))
;
return iter__5503__auto__(header);
})()], null),intemporal$doc$render_table_BANG__$_iter__57415(cljs.core.rest(s__57416__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(rows);
})()], null);
var tbl = ["<table"," role=\"grid\"",">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(thead)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(tbody)),"</table>"].join('');
return intemporal.doc.set_html_BANG_(id,tbl);
});
intemporal.doc.render_tables_BANG_ = (function intemporal$doc$render_tables_BANG_(the_store){
var tasks = intemporal.store.list_tasks(intemporal.doc.mstore);
var events = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),intemporal.store.list_events(intemporal.doc.mstore));
intemporal.doc.render_table_BANG_("tasks",tasks);

intemporal.doc.render_table_BANG_("events",events);

console.table(cljs.core.clj__GT_js(tasks));

return console.table(cljs.core.clj__GT_js(events));
});
intemporal.doc.init = (function intemporal$doc$init(){
var res = (function (){var _STAR_env_STAR__orig_val__57427 = intemporal.workflow.internal._STAR_env_STAR_;
var _STAR_env_STAR__temp_val__57428 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([intemporal.workflow.internal.default_env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"store","store",1512230022),intemporal.doc.mstore], null)], 0));
(intemporal.workflow.internal._STAR_env_STAR_ = _STAR_env_STAR__temp_val__57428);

try{return intemporal.doc.my_workflow((1));
}finally {(intemporal.workflow.internal._STAR_env_STAR_ = _STAR_env_STAR__orig_val__57427);
}})();
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(res,(function (r){
console.log("res",r);

intemporal.doc.set_results_BANG_(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)));

return intemporal.doc.render_tables_BANG_(intemporal.doc.mstore);
})),(function (r){
console.error("error",r);

return intemporal.doc.set_results_BANG_(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)));
}));
});

//# sourceMappingURL=intemporal.doc.js.map
