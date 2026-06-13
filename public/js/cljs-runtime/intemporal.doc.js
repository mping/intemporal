goog.provide('intemporal.doc');
intemporal.doc.activity_fn = (function intemporal$doc$activity_fn(a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"some","some",-1951079573),a], null);
});

/**
 * @interface
 */
intemporal.doc.MyActivities = function(){};

var intemporal$doc$MyActivities$foo$dyn_50138 = (function (this$,a){
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
return intemporal$doc$MyActivities$foo$dyn_50138(this$,a);
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

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k49888,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__49902 = k49888;
switch (G__49902) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49888,else__5326__auto__);

}
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__49912){
var vec__49913 = p__49912;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49913,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49913,(1),null);
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

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49887){
var self__ = this;
var G__49887__$1 = this;
return (new cljs.core.RecordIter((0),G__49887__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49889,other49890){
var self__ = this;
var this49889__$1 = this;
return (((!((other49890 == null)))) && ((((this49889__$1.constructor === other49890.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49889__$1.__extmap,other49890.__extmap)))));
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

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k49888){
var self__ = this;
var this__5330__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k49888);
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__49887){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__49954 = cljs.core.keyword_identical_QMARK_;
var expr__49955 = k__5332__auto__;
return (new intemporal.doc.MyActivitiesImpl(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__49887),null));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__49887){
var self__ = this;
var this__5322__auto____$1 = this;
return (new intemporal.doc.MyActivitiesImpl(G__49887,self__.__extmap,self__.__hash));
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
intemporal.doc.map__GT_MyActivitiesImpl = (function intemporal$doc$map__GT_MyActivitiesImpl(G__49891){
var extmap__5365__auto__ = (function (){var G__49981 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__49891);
if(cljs.core.record_QMARK_(G__49891)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49981);
} else {
return G__49981;
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
intemporal.doc.t_intemporal$doc50007 = (function (i,sf,protocols49999,registry50000,meta50008){
this.i = i;
this.sf = sf;
this.protocols49999 = protocols49999;
this.registry50000 = registry50000;
this.meta50008 = meta50008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.doc.t_intemporal$doc50007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50009,meta50008__$1){
var self__ = this;
var _50009__$1 = this;
return (new intemporal.doc.t_intemporal$doc50007(self__.i,self__.sf,self__.protocols49999,self__.registry50000,meta50008__$1));
}));

(intemporal.doc.t_intemporal$doc50007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50009){
var self__ = this;
var _50009__$1 = this;
return self__.meta50008;
}));

(intemporal.doc.t_intemporal$doc50007.prototype.intemporal$doc$MyActivities$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.t_intemporal$doc50007.prototype.intemporal$doc$MyActivities$foo$arity$2 = (function (this__39930__auto__,a){
var self__ = this;
var this__39930__auto____$1 = this;
var f__39931__auto__ = intemporal.core.stub(new cljs.core.Var(function(){return intemporal.doc.foo;},new cljs.core.Symbol("intemporal.doc","foo","intemporal.doc/foo",778009994,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol("intemporal.doc","MyActivities","intemporal.doc/MyActivities",-1471127805,null),new cljs.core.Symbol(null,"intemporal.doc","intemporal.doc",-889985538,null),new cljs.core.Symbol(null,"foo","foo",-1385541733,null),"intemporal/doc.cljs",7,1,13,14,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"a","a",-482876059,null)], null)),null,(cljs.core.truth_(intemporal.doc.foo)?intemporal.doc.foo.cljs$lang$test:null)])));
return f__39931__auto__(a);
}));

(intemporal.doc.t_intemporal$doc50007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"sf","sf",-308960211,null),new cljs.core.Symbol(null,"protocols49999","protocols49999",1749705394,null),new cljs.core.Symbol(null,"registry50000","registry50000",-1825053425,null),new cljs.core.Symbol(null,"meta50008","meta50008",-525211632,null)], null);
}));

(intemporal.doc.t_intemporal$doc50007.cljs$lang$type = true);

(intemporal.doc.t_intemporal$doc50007.cljs$lang$ctorStr = "intemporal.doc/t_intemporal$doc50007");

(intemporal.doc.t_intemporal$doc50007.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"intemporal.doc/t_intemporal$doc50007");
}));

/**
 * Positional factory function for intemporal.doc/t_intemporal$doc50007.
 */
intemporal.doc.__GT_t_intemporal$doc50007 = (function intemporal$doc$__GT_t_intemporal$doc50007(i,sf,protocols49999,registry50000,meta50008){
return (new intemporal.doc.t_intemporal$doc50007(i,sf,protocols49999,registry50000,meta50008));
});


intemporal.doc.my_workflow = (function intemporal$doc$my_workflow(i){
var sf = intemporal.core.stub(intemporal.doc.activity_fn);
var pr = (function (){var protocols49999 = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(intemporal.internal.context.current_context());
var registry50000 = new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(intemporal.internal.context.current_context());
var temp__5825__auto___50141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(protocols49999,intemporal.doc.MyActivities);
if(cljs.core.truth_(temp__5825__auto___50141)){
var impl50001_50142 = temp__5825__auto___50141;
intemporal.internal.activity.register_activity_BANG_.cljs$core$IFn$_invoke$arity$variadic(registry50000,(function() { 
var G__50143__delegate = function (args__39929__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(intemporal.doc.foo,impl50001_50142,args__39929__auto__);
};
var G__50143 = function (var_args){
var args__39929__auto__ = null;
if (arguments.length > 0) {
var G__50144__i = 0, G__50144__a = new Array(arguments.length -  0);
while (G__50144__i < G__50144__a.length) {G__50144__a[G__50144__i] = arguments[G__50144__i + 0]; ++G__50144__i;}
  args__39929__auto__ = new cljs.core.IndexedSeq(G__50144__a,0,null);
} 
return G__50143__delegate.call(this,args__39929__auto__);};
G__50143.cljs$lang$maxFixedArity = 0;
G__50143.cljs$lang$applyTo = (function (arglist__50145){
var args__39929__auto__ = cljs.core.seq(arglist__50145);
return G__50143__delegate(args__39929__auto__);
});
G__50143.cljs$core$IFn$_invoke$arity$variadic = G__50143__delegate;
return G__50143;
})()
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"intemporal.doc/foo"], 0));
} else {
}

return (new intemporal.doc.t_intemporal$doc50007(i,sf,protocols49999,registry50000,null));
})();
var sres = sf(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
var pres = pr.intemporal$doc$MyActivities$foo$arity$2(null,new cljs.core.Keyword(null,"X","X",1705996313));
var workflow_ctx50038 = intemporal.internal.context._STAR_workflow_context_STAR_;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___30381__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var _STAR_workflow_context_STAR__orig_val__50042 = intemporal.internal.context._STAR_workflow_context_STAR_;
var _STAR_workflow_context_STAR__temp_val__50043 = workflow_ctx50038;
(intemporal.internal.context._STAR_workflow_context_STAR_ = _STAR_workflow_context_STAR__temp_val__50043);

try{return sres;
}finally {(intemporal.internal.context._STAR_workflow_context_STAR_ = _STAR_workflow_context_STAR__orig_val__50042);
}})()),(function (v1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var _STAR_workflow_context_STAR__orig_val__50049 = intemporal.internal.context._STAR_workflow_context_STAR_;
var _STAR_workflow_context_STAR__temp_val__50050 = workflow_ctx50038;
(intemporal.internal.context._STAR_workflow_context_STAR_ = _STAR_workflow_context_STAR__temp_val__50050);

try{return pres;
}finally {(intemporal.internal.context._STAR_workflow_context_STAR_ = _STAR_workflow_context_STAR__orig_val__50049);
}})()),(function (v2){
return promesa.protocols._promise((function (){var _STAR_workflow_context_STAR__orig_val__50055 = intemporal.internal.context._STAR_workflow_context_STAR_;
var _STAR_workflow_context_STAR__temp_val__50056 = workflow_ctx50038;
(intemporal.internal.context._STAR_workflow_context_STAR_ = _STAR_workflow_context_STAR__temp_val__50056);

try{return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null),v1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v2], 0));
}finally {(intemporal.internal.context._STAR_workflow_context_STAR_ = _STAR_workflow_context_STAR__orig_val__50055);
}})());
}));
}));
}));
});
intemporal.doc.set_html_BANG_ = (function intemporal$doc$set_html_BANG_(id,html){
return (document.getElementById(id).innerHTML = html);
});
intemporal.doc.set_results_BANG_ = (function intemporal$doc$set_results_BANG_(html){
return intemporal.doc.set_html_BANG_("results",html);
});
intemporal.doc.render_table_BANG_ = (function intemporal$doc$render_table_BANG_(id,rows){
var header = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"workflow-id","workflow-id",-199003646),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"activity-name","activity-name",-294600638),new cljs.core.Keyword(null,"result","result",1415092211)], null);
var thead = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = (function intemporal$doc$render_table_BANG__$_iter__50070(s__50071){
return (new cljs.core.LazySeq(null,(function (){
var s__50071__$1 = s__50071;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50071__$1);
if(temp__5825__auto__){
var s__50071__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50071__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__50071__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__50073 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__50072 = (0);
while(true){
if((i__50072 < size__5502__auto__)){
var h = cljs.core._nth(c__5501__auto__,i__50072);
cljs.core.chunk_append(b__50073,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),h], null));

var G__50146 = (i__50072 + (1));
i__50072 = G__50146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50073),intemporal$doc$render_table_BANG__$_iter__50070(cljs.core.chunk_rest(s__50071__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50073),null);
}
} else {
var h = cljs.core.first(s__50071__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),h], null),intemporal$doc$render_table_BANG__$_iter__50070(cljs.core.rest(s__50071__$2)));
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
var tbody = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function intemporal$doc$render_table_BANG__$_iter__50097(s__50098){
return (new cljs.core.LazySeq(null,(function (){
var s__50098__$1 = s__50098;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50098__$1);
if(temp__5825__auto__){
var s__50098__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50098__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__50098__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__50100 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__50099 = (0);
while(true){
if((i__50099 < size__5502__auto__)){
var r = cljs.core._nth(c__5501__auto__,i__50099);
cljs.core.chunk_append(b__50100,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = ((function (i__50099,r,c__5501__auto__,size__5502__auto__,b__50100,s__50098__$2,temp__5825__auto__,header,thead){
return (function intemporal$doc$render_table_BANG__$_iter__50097_$_iter__50107(s__50108){
return (new cljs.core.LazySeq(null,((function (i__50099,r,c__5501__auto__,size__5502__auto__,b__50100,s__50098__$2,temp__5825__auto__,header,thead){
return (function (){
var s__50108__$1 = s__50108;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__50108__$1);
if(temp__5825__auto____$1){
var s__50108__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50108__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__50108__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__50110 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__50109 = (0);
while(true){
if((i__50109 < size__5502__auto____$1)){
var h = cljs.core._nth(c__5501__auto____$1,i__50109);
cljs.core.chunk_append(b__50110,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null));

var G__50147 = (i__50109 + (1));
i__50109 = G__50147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50110),intemporal$doc$render_table_BANG__$_iter__50097_$_iter__50107(cljs.core.chunk_rest(s__50108__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50110),null);
}
} else {
var h = cljs.core.first(s__50108__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null),intemporal$doc$render_table_BANG__$_iter__50097_$_iter__50107(cljs.core.rest(s__50108__$2)));
}
} else {
return null;
}
break;
}
});})(i__50099,r,c__5501__auto__,size__5502__auto__,b__50100,s__50098__$2,temp__5825__auto__,header,thead))
,null,null));
});})(i__50099,r,c__5501__auto__,size__5502__auto__,b__50100,s__50098__$2,temp__5825__auto__,header,thead))
;
return iter__5503__auto__(header);
})()], null));

var G__50148 = (i__50099 + (1));
i__50099 = G__50148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50100),intemporal$doc$render_table_BANG__$_iter__50097(cljs.core.chunk_rest(s__50098__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50100),null);
}
} else {
var r = cljs.core.first(s__50098__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = ((function (r,s__50098__$2,temp__5825__auto__,header,thead){
return (function intemporal$doc$render_table_BANG__$_iter__50097_$_iter__50117(s__50118){
return (new cljs.core.LazySeq(null,(function (){
var s__50118__$1 = s__50118;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__50118__$1);
if(temp__5825__auto____$1){
var s__50118__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50118__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__50118__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__50120 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__50119 = (0);
while(true){
if((i__50119 < size__5502__auto__)){
var h = cljs.core._nth(c__5501__auto__,i__50119);
cljs.core.chunk_append(b__50120,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null));

var G__50149 = (i__50119 + (1));
i__50119 = G__50149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50120),intemporal$doc$render_table_BANG__$_iter__50097_$_iter__50117(cljs.core.chunk_rest(s__50118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50120),null);
}
} else {
var h = cljs.core.first(s__50118__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null),intemporal$doc$render_table_BANG__$_iter__50097_$_iter__50117(cljs.core.rest(s__50118__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(r,s__50098__$2,temp__5825__auto__,header,thead))
;
return iter__5503__auto__(header);
})()], null),intemporal$doc$render_table_BANG__$_iter__50097(cljs.core.rest(s__50098__$2)));
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
intemporal.doc.render_tables_BANG_ = (function intemporal$doc$render_tables_BANG_(engine,wf_id){
var history__$1 = intemporal.core.get_workflow_history(new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(engine),wf_id);
intemporal.doc.render_table_BANG_("events",history__$1);

return console.table(cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,history__$1)));
});
intemporal.doc.init = (function intemporal$doc$init(){
var engine = intemporal.core.make_workflow_engine.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"threads","threads",-1717798734),(4),new cljs.core.Keyword(null,"enable-logging","enable-logging",-1075137859),true], 0));
var res = intemporal.core.start_workflow.cljs$core$IFn$_invoke$arity$variadic(engine,intemporal.doc.my_workflow,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"workflow-id","workflow-id",-199003646),"my-wflow",new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentArrayMap.createAsIfByAssoc([intemporal.doc.MyActivities,intemporal.doc.__GT_MyActivitiesImpl()])], 0));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){var workflow_ctx50130 = intemporal.internal.context._STAR_workflow_context_STAR_;
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(res,(function (res__37950__auto__){
var _STAR_workflow_context_STAR__orig_val__50132 = intemporal.internal.context._STAR_workflow_context_STAR_;
var _STAR_workflow_context_STAR__temp_val__50133 = workflow_ctx50130;
(intemporal.internal.context._STAR_workflow_context_STAR_ = _STAR_workflow_context_STAR__temp_val__50133);

try{return (function (r){
console.log("res",cljs.core.clj__GT_js(r));

intemporal.doc.set_results_BANG_(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)));

return intemporal.doc.render_tables_BANG_(engine,"my-wflow");
})(res__37950__auto__);
}finally {(intemporal.internal.context._STAR_workflow_context_STAR_ = _STAR_workflow_context_STAR__orig_val__50132);
}}));
})(),(function (r){
console.error("error",r);

return intemporal.doc.set_results_BANG_(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)));
}));
});

//# sourceMappingURL=intemporal.doc.js.map
