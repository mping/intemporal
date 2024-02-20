goog.provide('intemporal.doc');
intemporal.doc.nested_fn = (function intemporal$doc$nested_fn(a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"nested","nested",18943849)], null);
});
intemporal.doc.activity_fn = (function intemporal$doc$activity_fn(a){
var f = (function() { 
var G__30135__delegate = function (argv__29777__auto__){
var ref__29778__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(intemporal.workflow._STAR_env_STAR_);
var root__29779__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(intemporal.workflow._STAR_env_STAR_);
var fvar__29780__auto__ = new cljs.core.Var(function(){return intemporal.doc.nested_fn;},new cljs.core.Symbol("intemporal.doc","nested-fn","intemporal.doc/nested-fn",-804060883,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"intemporal.doc","intemporal.doc",-889985538,null),new cljs.core.Symbol(null,"nested-fn","nested-fn",1357386556,null),"intemporal/doc.cljc",16,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null)),null,(cljs.core.truth_(intemporal.doc.nested_fn)?intemporal.doc.nested_fn.cljs$lang$test:null)]));
return intemporal.workflow.enqueue_and_wait(intemporal.workflow._STAR_env_STAR_,intemporal.workflow.internal.create_activity_task(ref__29778__auto__,root__29779__auto__,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(fvar__29780__auto__),fvar__29780__auto__,argv__29777__auto__));
};
var G__30135 = function (var_args){
var argv__29777__auto__ = null;
if (arguments.length > 0) {
var G__30136__i = 0, G__30136__a = new Array(arguments.length -  0);
while (G__30136__i < G__30136__a.length) {G__30136__a[G__30136__i] = arguments[G__30136__i + 0]; ++G__30136__i;}
  argv__29777__auto__ = new cljs.core.IndexedSeq(G__30136__a,0,null);
} 
return G__30135__delegate.call(this,argv__29777__auto__);};
G__30135.cljs$lang$maxFixedArity = 0;
G__30135.cljs$lang$applyTo = (function (arglist__30137){
var argv__29777__auto__ = cljs.core.seq(arglist__30137);
return G__30135__delegate(argv__29777__auto__);
});
G__30135.cljs$core$IFn$_invoke$arity$variadic = G__30135__delegate;
return G__30135;
})()
;
return f(new cljs.core.Keyword(null,"sub","sub",-2093760025));
});

/**
 * @interface
 */
intemporal.doc.MyActivities = function(){};

var intemporal$doc$MyActivities$some_stuff$dyn_30138 = (function (this$,a){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.doc.some_stuff[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,a) : m__5394__auto__.call(null,this$,a));
} else {
var m__5392__auto__ = (intemporal.doc.some_stuff["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,a) : m__5392__auto__.call(null,this$,a));
} else {
throw cljs.core.missing_protocol("MyActivities.some-stuff",this$);
}
}
});
intemporal.doc.some_stuff = (function intemporal$doc$some_stuff(this$,a){
if((((!((this$ == null)))) && ((!((this$.intemporal$doc$MyActivities$some_stuff$arity$2 == null)))))){
return this$.intemporal$doc$MyActivities$some_stuff$arity$2(this$,a);
} else {
return intemporal$doc$MyActivities$some_stuff$dyn_30138(this$,a);
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
(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k30101,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__30105 = k30101;
switch (G__30105) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30101,else__5346__auto__);

}
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__30106){
var vec__30107 = p__30106;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30107,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30107,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#intemporal.doc.MyActivitiesImpl{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30100){
var self__ = this;
var G__30100__$1 = this;
return (new cljs.core.RecordIter((0),G__30100__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new intemporal.doc.MyActivitiesImpl(self__.__meta,self__.__extmap,self__.__hash));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1767160363 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30102,other30103){
var self__ = this;
var this30102__$1 = this;
return (((!((other30103 == null)))) && ((((this30102__$1.constructor === other30103.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30102__$1.__extmap,other30103.__extmap)))));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new intemporal.doc.MyActivitiesImpl(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k30101){
var self__ = this;
var this__5350__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k30101);
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__30100){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__30110 = cljs.core.keyword_identical_QMARK_;
var expr__30111 = k__5352__auto__;
return (new intemporal.doc.MyActivitiesImpl(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__30100),null));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__30100){
var self__ = this;
var this__5342__auto____$1 = this;
return (new intemporal.doc.MyActivitiesImpl(G__30100,self__.__extmap,self__.__hash));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(intemporal.doc.MyActivitiesImpl.prototype.intemporal$doc$MyActivities$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.MyActivitiesImpl.prototype.intemporal$doc$MyActivities$some_stuff$arity$2 = (function (this$,a){
var self__ = this;
var this$__$1 = this;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["record was called:"], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"child","child",623967545)], null);
}));

(intemporal.doc.MyActivitiesImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(intemporal.doc.MyActivitiesImpl.cljs$lang$type = true);

(intemporal.doc.MyActivitiesImpl.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"intemporal.doc/MyActivitiesImpl",null,(1),null));
}));

(intemporal.doc.MyActivitiesImpl.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"intemporal.doc/MyActivitiesImpl");
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
intemporal.doc.map__GT_MyActivitiesImpl = (function intemporal$doc$map__GT_MyActivitiesImpl(G__30104){
var extmap__5385__auto__ = (function (){var G__30113 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__30104);
if(cljs.core.record_QMARK_(G__30104)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30113);
} else {
return G__30113;
}
})();
return (new intemporal.doc.MyActivitiesImpl(null,cljs.core.not_empty(extmap__5385__auto__),null));
});

intemporal.doc.my_workflow_ = (function intemporal$doc$my_workflow_(i){
var sf = (function() { 
var G__30140__delegate = function (argv__29777__auto__){
var ref__29778__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(intemporal.workflow._STAR_env_STAR_);
var root__29779__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(intemporal.workflow._STAR_env_STAR_);
var fvar__29780__auto__ = new cljs.core.Var(function(){return intemporal.doc.activity_fn;},new cljs.core.Symbol("intemporal.doc","activity-fn","intemporal.doc/activity-fn",1417063461,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"intemporal.doc","intemporal.doc",-889985538,null),new cljs.core.Symbol(null,"activity-fn","activity-fn",-716588492,null),"intemporal/doc.cljc",18,1,14,14,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null)),null,(cljs.core.truth_(intemporal.doc.activity_fn)?intemporal.doc.activity_fn.cljs$lang$test:null)]));
return intemporal.workflow.enqueue_and_wait(intemporal.workflow._STAR_env_STAR_,intemporal.workflow.internal.create_activity_task(ref__29778__auto__,root__29779__auto__,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(fvar__29780__auto__),fvar__29780__auto__,argv__29777__auto__));
};
var G__30140 = function (var_args){
var argv__29777__auto__ = null;
if (arguments.length > 0) {
var G__30141__i = 0, G__30141__a = new Array(arguments.length -  0);
while (G__30141__i < G__30141__a.length) {G__30141__a[G__30141__i] = arguments[G__30141__i + 0]; ++G__30141__i;}
  argv__29777__auto__ = new cljs.core.IndexedSeq(G__30141__a,0,null);
} 
return G__30140__delegate.call(this,argv__29777__auto__);};
G__30140.cljs$lang$maxFixedArity = 0;
G__30140.cljs$lang$applyTo = (function (arglist__30142){
var argv__29777__auto__ = cljs.core.seq(arglist__30142);
return G__30140__delegate(argv__29777__auto__);
});
G__30140.cljs$core$IFn$_invoke$arity$variadic = G__30140__delegate;
return G__30140;
})()
;
var pr = (function (){
if((typeof intemporal !== 'undefined') && (typeof intemporal.doc !== 'undefined') && (typeof intemporal.doc.t_intemporal$doc30114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {intemporal.doc.MyActivities}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
intemporal.doc.t_intemporal$doc30114 = (function (i,sf,meta30115){
this.i = i;
this.sf = sf;
this.meta30115 = meta30115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.doc.t_intemporal$doc30114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30116,meta30115__$1){
var self__ = this;
var _30116__$1 = this;
return (new intemporal.doc.t_intemporal$doc30114(self__.i,self__.sf,meta30115__$1));
}));

(intemporal.doc.t_intemporal$doc30114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30116){
var self__ = this;
var _30116__$1 = this;
return self__.meta30115;
}));

(intemporal.doc.t_intemporal$doc30114.prototype.intemporal$doc$MyActivities$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.t_intemporal$doc30114.prototype.intemporal$doc$MyActivities$some_stuff$arity$2 = (function (this__29786__auto__,a){
var self__ = this;
var this__29786__auto____$1 = this;
var aid__29787__auto__ = new cljs.core.Symbol("intemporal.doc","some-stuff","intemporal.doc/some-stuff",-1949006420,null);
var act_opts__29788__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var ref__29789__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(intemporal.workflow._STAR_env_STAR_);
var root__29790__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(intemporal.workflow._STAR_env_STAR_);
return intemporal.workflow.enqueue_and_wait(intemporal.workflow._STAR_env_STAR_,intemporal.workflow.internal.create_proto_activity_task(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("intemporal.doc/MyActivities"),ref__29789__auto__,root__29790__auto__,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(aid__29787__auto__),(function() { 
var G__30143__delegate = function (impl_PLUS_args__29791__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(intemporal.doc.some_stuff,impl_PLUS_args__29791__auto__);
};
var G__30143 = function (var_args){
var impl_PLUS_args__29791__auto__ = null;
if (arguments.length > 0) {
var G__30144__i = 0, G__30144__a = new Array(arguments.length -  0);
while (G__30144__i < G__30144__a.length) {G__30144__a[G__30144__i] = arguments[G__30144__i + 0]; ++G__30144__i;}
  impl_PLUS_args__29791__auto__ = new cljs.core.IndexedSeq(G__30144__a,0,null);
} 
return G__30143__delegate.call(this,impl_PLUS_args__29791__auto__);};
G__30143.cljs$lang$maxFixedArity = 0;
G__30143.cljs$lang$applyTo = (function (arglist__30145){
var impl_PLUS_args__29791__auto__ = cljs.core.seq(arglist__30145);
return G__30143__delegate(impl_PLUS_args__29791__auto__);
});
G__30143.cljs$core$IFn$_invoke$arity$variadic = G__30143__delegate;
return G__30143;
})()
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null)));
}));

(intemporal.doc.t_intemporal$doc30114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"sf","sf",-308960211,null),new cljs.core.Symbol(null,"meta30115","meta30115",282928346,null)], null);
}));

(intemporal.doc.t_intemporal$doc30114.cljs$lang$type = true);

(intemporal.doc.t_intemporal$doc30114.cljs$lang$ctorStr = "intemporal.doc/t_intemporal$doc30114");

(intemporal.doc.t_intemporal$doc30114.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"intemporal.doc/t_intemporal$doc30114");
}));

/**
 * Positional factory function for intemporal.doc/t_intemporal$doc30114.
 */
intemporal.doc.__GT_t_intemporal$doc30114 = (function intemporal$doc$my_workflow__$___GT_t_intemporal$doc30114(i__$1,sf__$1,meta30115){
return (new intemporal.doc.t_intemporal$doc30114(i__$1,sf__$1,meta30115));
});

}

return (new intemporal.doc.t_intemporal$doc30114(i,sf,null));
})()
;
var sres = sf(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
var pres = pr.intemporal$doc$MyActivities$some_stuff$arity$2(null,new cljs.core.Keyword(null,"X","X",1705996313));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___28829__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(sres),(function (v1){
return promesa.protocols._mcat(promesa.protocols._promise(pres),(function (v2){
return promesa.protocols._promise(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null),v1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v2], 0)));
}));
}));
}));
});

intemporal.doc.my_workflow = (function intemporal$doc$my_workflow(i){
var ref__29769__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(intemporal.workflow._STAR_env_STAR_);
var root__29770__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(intemporal.workflow._STAR_env_STAR_);
var fvar__29771__auto__ = new cljs.core.Var(function(){return intemporal.doc.my_workflow_;},new cljs.core.Symbol("intemporal.doc","my-workflow-","intemporal.doc/my-workflow-",-465347473,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"intemporal.doc","intemporal.doc",-889985538,null),new cljs.core.Symbol(null,"my-workflow-","my-workflow-",1668689560,null),"intemporal/doc.cljc",1,25,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null)),null,(cljs.core.truth_(intemporal.doc.my_workflow_)?intemporal.doc.my_workflow_.cljs$lang$test:null)]));
return intemporal.workflow.enqueue_and_wait(intemporal.workflow._STAR_env_STAR_,intemporal.workflow.internal.create_workflow_task(ref__29769__auto__,root__29770__auto__,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(fvar__29771__auto__),fvar__29771__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null)));
});
intemporal.doc.mstore = intemporal.store.make_memstore.cljs$core$IFn$_invoke$arity$0();
intemporal.doc.worker = intemporal.workflow.start_worker_BANG_.cljs$core$IFn$_invoke$arity$2(intemporal.doc.mstore,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("intemporal.doc","MyActivities","intemporal.doc/MyActivities",-1471127805,null),intemporal.doc.__GT_MyActivitiesImpl()], null));
intemporal.doc.set_html_BANG_ = (function intemporal$doc$set_html_BANG_(id,html){
return (document.getElementById(id).innerHTML = html);
});
intemporal.doc.set_results_BANG_ = (function intemporal$doc$set_results_BANG_(html){
return intemporal.doc.set_html_BANG_("results",html);
});
intemporal.doc.render_table_BANG_ = (function intemporal$doc$render_table_BANG_(id,rows){
var header = cljs.core.keys(cljs.core.first(rows));
var thead = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5523__auto__ = (function intemporal$doc$render_table_BANG__$_iter__30117(s__30118){
return (new cljs.core.LazySeq(null,(function (){
var s__30118__$1 = s__30118;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30118__$1);
if(temp__5804__auto__){
var s__30118__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30118__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30118__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30120 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30119 = (0);
while(true){
if((i__30119 < size__5522__auto__)){
var h = cljs.core._nth(c__5521__auto__,i__30119);
cljs.core.chunk_append(b__30120,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),h], null));

var G__30146 = (i__30119 + (1));
i__30119 = G__30146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30120),intemporal$doc$render_table_BANG__$_iter__30117(cljs.core.chunk_rest(s__30118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30120),null);
}
} else {
var h = cljs.core.first(s__30118__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),h], null),intemporal$doc$render_table_BANG__$_iter__30117(cljs.core.rest(s__30118__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(header);
})()], null)], null);
var tbody = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function intemporal$doc$render_table_BANG__$_iter__30121(s__30122){
return (new cljs.core.LazySeq(null,(function (){
var s__30122__$1 = s__30122;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30122__$1);
if(temp__5804__auto__){
var s__30122__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30122__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30122__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30124 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30123 = (0);
while(true){
if((i__30123 < size__5522__auto__)){
var r = cljs.core._nth(c__5521__auto__,i__30123);
cljs.core.chunk_append(b__30124,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"type","type",1174270348)))], null),(function (){var iter__5523__auto__ = ((function (i__30123,r,c__5521__auto__,size__5522__auto__,b__30124,s__30122__$2,temp__5804__auto__,header,thead){
return (function intemporal$doc$render_table_BANG__$_iter__30121_$_iter__30125(s__30126){
return (new cljs.core.LazySeq(null,((function (i__30123,r,c__5521__auto__,size__5522__auto__,b__30124,s__30122__$2,temp__5804__auto__,header,thead){
return (function (){
var s__30126__$1 = s__30126;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__30126__$1);
if(temp__5804__auto____$1){
var s__30126__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30126__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__30126__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__30128 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__30127 = (0);
while(true){
if((i__30127 < size__5522__auto____$1)){
var h = cljs.core._nth(c__5521__auto____$1,i__30127);
cljs.core.chunk_append(b__30128,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null));

var G__30147 = (i__30127 + (1));
i__30127 = G__30147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30128),intemporal$doc$render_table_BANG__$_iter__30121_$_iter__30125(cljs.core.chunk_rest(s__30126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30128),null);
}
} else {
var h = cljs.core.first(s__30126__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null),intemporal$doc$render_table_BANG__$_iter__30121_$_iter__30125(cljs.core.rest(s__30126__$2)));
}
} else {
return null;
}
break;
}
});})(i__30123,r,c__5521__auto__,size__5522__auto__,b__30124,s__30122__$2,temp__5804__auto__,header,thead))
,null,null));
});})(i__30123,r,c__5521__auto__,size__5522__auto__,b__30124,s__30122__$2,temp__5804__auto__,header,thead))
;
return iter__5523__auto__(header);
})()], null));

var G__30148 = (i__30123 + (1));
i__30123 = G__30148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30124),intemporal$doc$render_table_BANG__$_iter__30121(cljs.core.chunk_rest(s__30122__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30124),null);
}
} else {
var r = cljs.core.first(s__30122__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"type","type",1174270348)))], null),(function (){var iter__5523__auto__ = ((function (r,s__30122__$2,temp__5804__auto__,header,thead){
return (function intemporal$doc$render_table_BANG__$_iter__30121_$_iter__30129(s__30130){
return (new cljs.core.LazySeq(null,(function (){
var s__30130__$1 = s__30130;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__30130__$1);
if(temp__5804__auto____$1){
var s__30130__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30130__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30130__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30132 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30131 = (0);
while(true){
if((i__30131 < size__5522__auto__)){
var h = cljs.core._nth(c__5521__auto__,i__30131);
cljs.core.chunk_append(b__30132,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null));

var G__30149 = (i__30131 + (1));
i__30131 = G__30149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30132),intemporal$doc$render_table_BANG__$_iter__30121_$_iter__30129(cljs.core.chunk_rest(s__30130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30132),null);
}
} else {
var h = cljs.core.first(s__30130__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null),intemporal$doc$render_table_BANG__$_iter__30121_$_iter__30129(cljs.core.rest(s__30130__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(r,s__30122__$2,temp__5804__auto__,header,thead))
;
return iter__5523__auto__(header);
})()], null),intemporal$doc$render_table_BANG__$_iter__30121(cljs.core.rest(s__30122__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(rows);
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
var res = (function (){var _STAR_env_STAR__orig_val__30133 = intemporal.workflow._STAR_env_STAR_;
var _STAR_env_STAR__temp_val__30134 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([intemporal.workflow.default_env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"store","store",1512230022),intemporal.doc.mstore], null)], 0));
(intemporal.workflow._STAR_env_STAR_ = _STAR_env_STAR__temp_val__30134);

try{return intemporal.doc.my_workflow((1));
}finally {(intemporal.workflow._STAR_env_STAR_ = _STAR_env_STAR__orig_val__30133);
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
