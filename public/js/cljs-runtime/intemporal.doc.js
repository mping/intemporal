goog.provide('intemporal.doc');
intemporal.doc.nested_fn = (function intemporal$doc$nested_fn(a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"nested","nested",18943849)], null);
});
intemporal.doc.activity_fn = (function intemporal$doc$activity_fn(a){
return (1);
});

/**
 * @interface
 */
intemporal.doc.MyActivities = function(){};

var intemporal$doc$MyActivities$foo$dyn_51204 = (function (this$,a){
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
return intemporal$doc$MyActivities$foo$dyn_51204(this$,a);
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

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k51169,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__51173 = k51169;
switch (G__51173) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51169,else__5326__auto__);

}
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__51174){
var vec__51175 = p__51174;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51175,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51175,(1),null);
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

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51168){
var self__ = this;
var G__51168__$1 = this;
return (new cljs.core.RecordIter((0),G__51168__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51170,other51171){
var self__ = this;
var this51170__$1 = this;
return (((!((other51171 == null)))) && ((((this51170__$1.constructor === other51171.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51170__$1.__extmap,other51171.__extmap)))));
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

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k51169){
var self__ = this;
var this__5330__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k51169);
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__51168){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__51178 = cljs.core.keyword_identical_QMARK_;
var expr__51179 = k__5332__auto__;
return (new intemporal.doc.MyActivitiesImpl(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__51168),null));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(intemporal.doc.MyActivitiesImpl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__51168){
var self__ = this;
var this__5322__auto____$1 = this;
return (new intemporal.doc.MyActivitiesImpl(G__51168,self__.__extmap,self__.__hash));
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
intemporal.doc.map__GT_MyActivitiesImpl = (function intemporal$doc$map__GT_MyActivitiesImpl(G__51172){
var extmap__5365__auto__ = (function (){var G__51181 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__51172);
if(cljs.core.record_QMARK_(G__51172)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51181);
} else {
return G__51181;
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
intemporal.doc.t_intemporal$doc51185 = (function (i,sf,protocols51182,registry51183,meta51186){
this.i = i;
this.sf = sf;
this.protocols51182 = protocols51182;
this.registry51183 = registry51183;
this.meta51186 = meta51186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.doc.t_intemporal$doc51185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51187,meta51186__$1){
var self__ = this;
var _51187__$1 = this;
return (new intemporal.doc.t_intemporal$doc51185(self__.i,self__.sf,self__.protocols51182,self__.registry51183,meta51186__$1));
}));

(intemporal.doc.t_intemporal$doc51185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51187){
var self__ = this;
var _51187__$1 = this;
return self__.meta51186;
}));

(intemporal.doc.t_intemporal$doc51185.prototype.intemporal$doc$MyActivities$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.t_intemporal$doc51185.prototype.intemporal$doc$MyActivities$foo$arity$2 = (function (this__50906__auto__,a){
var self__ = this;
var this__50906__auto____$1 = this;
var f__50907__auto__ = intemporal.core.stub(new cljs.core.Var(function(){return intemporal.doc.foo;},new cljs.core.Symbol("intemporal.doc","foo","intemporal.doc/foo",778009994,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol("intemporal.doc","MyActivities","intemporal.doc/MyActivities",-1471127805,null),new cljs.core.Symbol(null,"intemporal.doc","intemporal.doc",-889985538,null),new cljs.core.Symbol(null,"foo","foo",-1385541733,null),"intemporal/doc.cljs",7,1,18,19,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"a","a",-482876059,null)], null)),null,(cljs.core.truth_(intemporal.doc.foo)?intemporal.doc.foo.cljs$lang$test:null)])));
return f__50907__auto__(a);
}));

(intemporal.doc.t_intemporal$doc51185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"sf","sf",-308960211,null),new cljs.core.Symbol(null,"protocols51182","protocols51182",-434579569,null),new cljs.core.Symbol(null,"registry51183","registry51183",-2083177811,null),new cljs.core.Symbol(null,"meta51186","meta51186",2123713693,null)], null);
}));

(intemporal.doc.t_intemporal$doc51185.cljs$lang$type = true);

(intemporal.doc.t_intemporal$doc51185.cljs$lang$ctorStr = "intemporal.doc/t_intemporal$doc51185");

(intemporal.doc.t_intemporal$doc51185.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"intemporal.doc/t_intemporal$doc51185");
}));

/**
 * Positional factory function for intemporal.doc/t_intemporal$doc51185.
 */
intemporal.doc.__GT_t_intemporal$doc51185 = (function intemporal$doc$__GT_t_intemporal$doc51185(i,sf,protocols51182,registry51183,meta51186){
return (new intemporal.doc.t_intemporal$doc51185(i,sf,protocols51182,registry51183,meta51186));
});


intemporal.doc.my_workflow = (function intemporal$doc$my_workflow(i){
var sf = intemporal.core.stub(intemporal.doc.activity_fn);
var pr = (function (){var protocols51182 = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(intemporal.internal.context.current_context());
var registry51183 = new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(intemporal.internal.context.current_context());
var temp__5825__auto___51206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(protocols51182,intemporal.doc.MyActivities);
if(cljs.core.truth_(temp__5825__auto___51206)){
var impl51184_51207 = temp__5825__auto___51206;
intemporal.internal.activity.register_activity_BANG_.cljs$core$IFn$_invoke$arity$variadic(registry51183,(function() { 
var G__51208__delegate = function (args__50905__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(intemporal.doc.foo,impl51184_51207,args__50905__auto__);
};
var G__51208 = function (var_args){
var args__50905__auto__ = null;
if (arguments.length > 0) {
var G__51209__i = 0, G__51209__a = new Array(arguments.length -  0);
while (G__51209__i < G__51209__a.length) {G__51209__a[G__51209__i] = arguments[G__51209__i + 0]; ++G__51209__i;}
  args__50905__auto__ = new cljs.core.IndexedSeq(G__51209__a,0,null);
} 
return G__51208__delegate.call(this,args__50905__auto__);};
G__51208.cljs$lang$maxFixedArity = 0;
G__51208.cljs$lang$applyTo = (function (arglist__51210){
var args__50905__auto__ = cljs.core.seq(arglist__51210);
return G__51208__delegate(args__50905__auto__);
});
G__51208.cljs$core$IFn$_invoke$arity$variadic = G__51208__delegate;
return G__51208;
})()
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"intemporal.doc/foo"], 0));
} else {
}

return (new intemporal.doc.t_intemporal$doc51185(i,sf,protocols51182,registry51183,null));
})();
var sres = sf(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
var pres = pr.intemporal$doc$MyActivities$foo$arity$2(null,new cljs.core.Keyword(null,"X","X",1705996313));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___30394__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(sres),(function (v1){
return promesa.protocols._mcat(promesa.protocols._promise(pres),(function (v2){
return promesa.protocols._promise(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null),v1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v2], 0)));
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
var header = cljs.core.keys(cljs.core.first(rows));
var thead = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = (function intemporal$doc$render_table_BANG__$_iter__51188(s__51189){
return (new cljs.core.LazySeq(null,(function (){
var s__51189__$1 = s__51189;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__51189__$1);
if(temp__5825__auto__){
var s__51189__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51189__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__51189__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__51191 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__51190 = (0);
while(true){
if((i__51190 < size__5502__auto__)){
var h = cljs.core._nth(c__5501__auto__,i__51190);
cljs.core.chunk_append(b__51191,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),h], null));

var G__51211 = (i__51190 + (1));
i__51190 = G__51211;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51191),intemporal$doc$render_table_BANG__$_iter__51188(cljs.core.chunk_rest(s__51189__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51191),null);
}
} else {
var h = cljs.core.first(s__51189__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),h], null),intemporal$doc$render_table_BANG__$_iter__51188(cljs.core.rest(s__51189__$2)));
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
var tbody = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function intemporal$doc$render_table_BANG__$_iter__51192(s__51193){
return (new cljs.core.LazySeq(null,(function (){
var s__51193__$1 = s__51193;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__51193__$1);
if(temp__5825__auto__){
var s__51193__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51193__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__51193__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__51195 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__51194 = (0);
while(true){
if((i__51194 < size__5502__auto__)){
var r = cljs.core._nth(c__5501__auto__,i__51194);
cljs.core.chunk_append(b__51195,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"type","type",1174270348)))], null),(function (){var iter__5503__auto__ = ((function (i__51194,r,c__5501__auto__,size__5502__auto__,b__51195,s__51193__$2,temp__5825__auto__,header,thead){
return (function intemporal$doc$render_table_BANG__$_iter__51192_$_iter__51196(s__51197){
return (new cljs.core.LazySeq(null,((function (i__51194,r,c__5501__auto__,size__5502__auto__,b__51195,s__51193__$2,temp__5825__auto__,header,thead){
return (function (){
var s__51197__$1 = s__51197;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__51197__$1);
if(temp__5825__auto____$1){
var s__51197__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51197__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__51197__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__51199 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__51198 = (0);
while(true){
if((i__51198 < size__5502__auto____$1)){
var h = cljs.core._nth(c__5501__auto____$1,i__51198);
cljs.core.chunk_append(b__51199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null));

var G__51212 = (i__51198 + (1));
i__51198 = G__51212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51199),intemporal$doc$render_table_BANG__$_iter__51192_$_iter__51196(cljs.core.chunk_rest(s__51197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51199),null);
}
} else {
var h = cljs.core.first(s__51197__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null),intemporal$doc$render_table_BANG__$_iter__51192_$_iter__51196(cljs.core.rest(s__51197__$2)));
}
} else {
return null;
}
break;
}
});})(i__51194,r,c__5501__auto__,size__5502__auto__,b__51195,s__51193__$2,temp__5825__auto__,header,thead))
,null,null));
});})(i__51194,r,c__5501__auto__,size__5502__auto__,b__51195,s__51193__$2,temp__5825__auto__,header,thead))
;
return iter__5503__auto__(header);
})()], null));

var G__51213 = (i__51194 + (1));
i__51194 = G__51213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51195),intemporal$doc$render_table_BANG__$_iter__51192(cljs.core.chunk_rest(s__51193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51195),null);
}
} else {
var r = cljs.core.first(s__51193__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"type","type",1174270348)))], null),(function (){var iter__5503__auto__ = ((function (r,s__51193__$2,temp__5825__auto__,header,thead){
return (function intemporal$doc$render_table_BANG__$_iter__51192_$_iter__51200(s__51201){
return (new cljs.core.LazySeq(null,(function (){
var s__51201__$1 = s__51201;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__51201__$1);
if(temp__5825__auto____$1){
var s__51201__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51201__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__51201__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__51203 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__51202 = (0);
while(true){
if((i__51202 < size__5502__auto__)){
var h = cljs.core._nth(c__5501__auto__,i__51202);
cljs.core.chunk_append(b__51203,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null));

var G__51214 = (i__51202 + (1));
i__51202 = G__51214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51203),intemporal$doc$render_table_BANG__$_iter__51192_$_iter__51200(cljs.core.chunk_rest(s__51201__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51203),null);
}
} else {
var h = cljs.core.first(s__51201__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], 0))], null),intemporal$doc$render_table_BANG__$_iter__51192_$_iter__51200(cljs.core.rest(s__51201__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(r,s__51193__$2,temp__5825__auto__,header,thead))
;
return iter__5503__auto__(header);
})()], null),intemporal$doc$render_table_BANG__$_iter__51192(cljs.core.rest(s__51193__$2)));
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
return null;
});
intemporal.doc.init = (function intemporal$doc$init(){
var engine = intemporal.core.make_workflow_engine.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"threads","threads",-1717798734),(4),new cljs.core.Keyword(null,"enable-logging","enable-logging",-1075137859),true], 0));
var res = intemporal.core.start_workflow.cljs$core$IFn$_invoke$arity$variadic(engine,intemporal.doc.my_workflow,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"workflow-id","workflow-id",-199003646),"my-wflow",new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentArrayMap.createAsIfByAssoc([intemporal.doc.MyActivities,intemporal.doc.__GT_MyActivitiesImpl()])], 0));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(res,(function (r){
console.log("res",cljs.core.clj__GT_js(r));

intemporal.doc.set_results_BANG_(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)));

return intemporal.doc.render_tables_BANG_(engine,"my-wflow");
})),(function (r){
console.error("error",r);

return intemporal.doc.set_results_BANG_(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)));
}));
});

//# sourceMappingURL=intemporal.doc.js.map
