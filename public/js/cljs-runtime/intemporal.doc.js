goog.provide('intemporal.doc');

/**
 * @interface
 */
intemporal.doc.HttpClient = function(){};

var intemporal$doc$HttpClient$doHead$dyn_43811 = (function (this$,id){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.doc.doHead[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5394__auto__.call(null,this$,id));
} else {
var m__5392__auto__ = (intemporal.doc.doHead["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5392__auto__.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("HttpClient.doHead",this$);
}
}
});
/**
 * Can be called multiple times
 */
intemporal.doc.doHead = (function intemporal$doc$doHead(this$,id){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.doc","doHead","intemporal.doc/doHead",1831838080,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : meta_impl__5395__auto__.call(null,this$,id));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$doc$HttpClient$doHead$arity$2 == null)))))){
return this$.intemporal$doc$HttpClient$doHead$arity$2(this$,id);
} else {
return intemporal$doc$HttpClient$doHead$dyn_43811(this$,id);
}
}
});

var intemporal$doc$HttpClient$doPost$dyn_43812 = (function (this$,id){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.doc.doPost[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5394__auto__.call(null,this$,id));
} else {
var m__5392__auto__ = (intemporal.doc.doPost["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5392__auto__.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("HttpClient.doPost",this$);
}
}
});
/**
 * Should only be called once
 */
intemporal.doc.doPost = (function intemporal$doc$doPost(this$,id){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("intemporal.doc","doPost","intemporal.doc/doPost",-2017484295,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : meta_impl__5395__auto__.call(null,this$,id));
} else {
if((((!((this$ == null)))) && ((!((this$.intemporal$doc$HttpClient$doPost$arity$2 == null)))))){
return this$.intemporal$doc$HttpClient$doPost$arity$2(this$,id);
} else {
return intemporal$doc$HttpClient$doPost$dyn_43812(this$,id);
}
}
});

intemporal.doc.maybe = (function intemporal$doc$maybe(thunk){
var r = cljs.core.rand_int((10));
if((r > (5))){
throw (new Error("Forced error (simulated failure)"));
} else {
}

return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
});
intemporal.doc.example_impl = (function (){
if((typeof intemporal !== 'undefined') && (typeof intemporal.doc !== 'undefined') && (typeof intemporal.doc.t_intemporal$doc43729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {intemporal.doc.HttpClient}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
intemporal.doc.t_intemporal$doc43729 = (function (meta43730){
this.meta43730 = meta43730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.doc.t_intemporal$doc43729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43731,meta43730__$1){
var self__ = this;
var _43731__$1 = this;
return (new intemporal.doc.t_intemporal$doc43729(meta43730__$1));
}));

(intemporal.doc.t_intemporal$doc43729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43731){
var self__ = this;
var _43731__$1 = this;
return self__.meta43730;
}));

(intemporal.doc.t_intemporal$doc43729.prototype.intemporal$doc$HttpClient$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.t_intemporal$doc43729.prototype.intemporal$doc$HttpClient$doHead$arity$2 = (function (_,_url){
var self__ = this;
var ___$1 = this;
return "200 OK";
}));

(intemporal.doc.t_intemporal$doc43729.prototype.intemporal$doc$HttpClient$doPost$arity$2 = (function (_,_url){
var self__ = this;
var ___$1 = this;
return intemporal.doc.maybe((function (){
return "200 OK";
}));
}));

(intemporal.doc.t_intemporal$doc43729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta43730","meta43730",-192806325,null)], null);
}));

(intemporal.doc.t_intemporal$doc43729.cljs$lang$type = true);

(intemporal.doc.t_intemporal$doc43729.cljs$lang$ctorStr = "intemporal.doc/t_intemporal$doc43729");

(intemporal.doc.t_intemporal$doc43729.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"intemporal.doc/t_intemporal$doc43729");
}));

/**
 * Positional factory function for intemporal.doc/t_intemporal$doc43729.
 */
intemporal.doc.__GT_t_intemporal$doc43729 = (function intemporal$doc$__GT_t_intemporal$doc43729(meta43730){
return (new intemporal.doc.t_intemporal$doc43729(meta43730));
});

}

return (new intemporal.doc.t_intemporal$doc43729(cljs.core.PersistentArrayMap.EMPTY));
})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {intemporal.doc.HttpClient}
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
intemporal.doc.MyHttpClient = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(intemporal.doc.MyHttpClient.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k43733,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__43737 = k43733;
switch (G__43737) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43733,else__5346__auto__);

}
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__43738){
var vec__43739 = p__43738;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43739,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43739,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#intemporal.doc.MyHttpClient{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43732){
var self__ = this;
var G__43732__$1 = this;
return (new cljs.core.RecordIter((0),G__43732__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new intemporal.doc.MyHttpClient(self__.__meta,self__.__extmap,self__.__hash));
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (950254841 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43734,other43735){
var self__ = this;
var this43734__$1 = this;
return (((!((other43735 == null)))) && ((((this43734__$1.constructor === other43735.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43734__$1.__extmap,other43735.__extmap)))));
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new intemporal.doc.MyHttpClient(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k43733){
var self__ = this;
var this__5350__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k43733);
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__43732){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__43742 = cljs.core.keyword_identical_QMARK_;
var expr__43743 = k__5352__auto__;
return (new intemporal.doc.MyHttpClient(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__43732),null));
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__43732){
var self__ = this;
var this__5342__auto____$1 = this;
return (new intemporal.doc.MyHttpClient(G__43732,self__.__extmap,self__.__hash));
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(intemporal.doc.MyHttpClient.prototype.intemporal$doc$HttpClient$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.MyHttpClient.prototype.intemporal$doc$HttpClient$doPost$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
return (function (){
return id;
});
}));

(intemporal.doc.MyHttpClient.prototype.intemporal$doc$HttpClient$doHead$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
return intemporal.doc.maybe((function (){
return id;
}));
}));

(intemporal.doc.MyHttpClient.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(intemporal.doc.MyHttpClient.cljs$lang$type = true);

(intemporal.doc.MyHttpClient.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"intemporal.doc/MyHttpClient",null,(1),null));
}));

(intemporal.doc.MyHttpClient.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"intemporal.doc/MyHttpClient");
}));

/**
 * Positional factory function for intemporal.doc/MyHttpClient.
 */
intemporal.doc.__GT_MyHttpClient = (function intemporal$doc$__GT_MyHttpClient(){
return (new intemporal.doc.MyHttpClient(null,null,null));
});

/**
 * Factory function for intemporal.doc/MyHttpClient, taking a map of keywords to field values.
 */
intemporal.doc.map__GT_MyHttpClient = (function intemporal$doc$map__GT_MyHttpClient(G__43736){
var extmap__5385__auto__ = (function (){var G__43745 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__43736);
if(cljs.core.record_QMARK_(G__43736)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43745);
} else {
return G__43745;
}
})();
return (new intemporal.doc.MyHttpClient(null,cljs.core.not_empty(extmap__5385__auto__),null));
});

intemporal.doc.simpleflow = (function intemporal$doc$simpleflow(n){
var stub = (function (){
if((typeof intemporal !== 'undefined') && (typeof intemporal.doc !== 'undefined') && (typeof intemporal.doc.t_intemporal$doc43746 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {intemporal.doc.HttpClient}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
intemporal.doc.t_intemporal$doc43746 = (function (n,meta43747){
this.n = n;
this.meta43747 = meta43747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.doc.t_intemporal$doc43746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43748,meta43747__$1){
var self__ = this;
var _43748__$1 = this;
return (new intemporal.doc.t_intemporal$doc43746(self__.n,meta43747__$1));
}));

(intemporal.doc.t_intemporal$doc43746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43748){
var self__ = this;
var _43748__$1 = this;
return self__.meta43747;
}));

(intemporal.doc.t_intemporal$doc43746.prototype.intemporal$doc$HttpClient$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.t_intemporal$doc43746.prototype.intemporal$doc$HttpClient$doHead$arity$2 = (function (this__31192__auto__,id){
var self__ = this;
var this__31192__auto____$1 = this;
var impl__31193__auto__ = intemporal.doc.example_impl;
var aid__31194__auto__ = new cljs.core.Symbol("intemporal.doc","doHead","intemporal.doc/doHead",1831838080,null);
var act_opts__31195__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idempotent","idempotent",-1860592338),true], null);
try{if(intemporal.workflow.event_matches_QMARK_(intemporal.workflow.next_event(),aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","invoke","intemporal.activity/invoke",1074985885))){
new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor());
} else {
intemporal.workflow.save_activity_event(aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","invoke","intemporal.activity/invoke",1074985885),cljs.core.vec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)));

cljs.core.vec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
}

var map__43750 = act_opts__31195__auto__;
var map__43750__$1 = cljs.core.__destructure_map(map__43750);
var idempotent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43750__$1,new cljs.core.Keyword(null,"idempotent","idempotent",-1860592338));
var curr_evt__31173__auto__ = intemporal.workflow.next_event();
var result__31174__auto__ = ((intemporal.workflow.event_matches_QMARK_(curr_evt__31173__auto__,aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","success","intemporal.activity/success",1977785760)))?new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor()):((intemporal.workflow.event_matches_QMARK_(curr_evt__31173__auto__,aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613)))?((cljs.core.not(idempotent))?(function(){throw new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor())})():(function (){
intemporal.workflow.delete_history_forward();

var b__31175__auto__ = impl__31193__auto__.intemporal$doc$HttpClient$doHead$arity$2(null,id);
intemporal.workflow.save_activity_event(aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","success","intemporal.activity/success",1977785760),b__31175__auto__);

return b__31175__auto__;
})()
):(function (){var b__31175__auto__ = impl__31193__auto__.intemporal$doc$HttpClient$doHead$arity$2(null,id);
intemporal.workflow.save_activity_event(aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","success","intemporal.activity/success",1977785760),b__31175__auto__);

return b__31175__auto__;
})()
));
return result__31174__auto__;
}catch (e43749){if((e43749 instanceof Error)){
var e__31176__auto__ = e43749;
throw ((intemporal.workflow.event_matches_QMARK_(intemporal.workflow.current_event(),aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613)))?e__31176__auto__:(function (){
intemporal.workflow.save_activity_event(aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613),e__31176__auto__);

return e__31176__auto__;
})()

);
} else {
throw e43749;

}
}}));

(intemporal.doc.t_intemporal$doc43746.prototype.intemporal$doc$HttpClient$doPost$arity$2 = (function (this__31192__auto__,id){
var self__ = this;
var this__31192__auto____$1 = this;
var impl__31193__auto__ = intemporal.doc.example_impl;
var aid__31194__auto__ = new cljs.core.Symbol("intemporal.doc","doPost","intemporal.doc/doPost",-2017484295,null);
var act_opts__31195__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idempotent","idempotent",-1860592338),true], null);
try{if(intemporal.workflow.event_matches_QMARK_(intemporal.workflow.next_event(),aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","invoke","intemporal.activity/invoke",1074985885))){
new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor());
} else {
intemporal.workflow.save_activity_event(aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","invoke","intemporal.activity/invoke",1074985885),cljs.core.vec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)));

cljs.core.vec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
}

var map__43752 = act_opts__31195__auto__;
var map__43752__$1 = cljs.core.__destructure_map(map__43752);
var idempotent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43752__$1,new cljs.core.Keyword(null,"idempotent","idempotent",-1860592338));
var curr_evt__31173__auto__ = intemporal.workflow.next_event();
var result__31174__auto__ = ((intemporal.workflow.event_matches_QMARK_(curr_evt__31173__auto__,aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","success","intemporal.activity/success",1977785760)))?new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor()):((intemporal.workflow.event_matches_QMARK_(curr_evt__31173__auto__,aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613)))?((cljs.core.not(idempotent))?(function(){throw new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor())})():(function (){
intemporal.workflow.delete_history_forward();

var b__31175__auto__ = impl__31193__auto__.intemporal$doc$HttpClient$doPost$arity$2(null,id);
intemporal.workflow.save_activity_event(aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","success","intemporal.activity/success",1977785760),b__31175__auto__);

return b__31175__auto__;
})()
):(function (){var b__31175__auto__ = impl__31193__auto__.intemporal$doc$HttpClient$doPost$arity$2(null,id);
intemporal.workflow.save_activity_event(aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","success","intemporal.activity/success",1977785760),b__31175__auto__);

return b__31175__auto__;
})()
));
return result__31174__auto__;
}catch (e43751){if((e43751 instanceof Error)){
var e__31176__auto__ = e43751;
throw ((intemporal.workflow.event_matches_QMARK_(intemporal.workflow.current_event(),aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613)))?e__31176__auto__:(function (){
intemporal.workflow.save_activity_event(aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613),e__31176__auto__);

return e__31176__auto__;
})()

);
} else {
throw e43751;

}
}}));

(intemporal.doc.t_intemporal$doc43746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"meta43747","meta43747",1630762862,null)], null);
}));

(intemporal.doc.t_intemporal$doc43746.cljs$lang$type = true);

(intemporal.doc.t_intemporal$doc43746.cljs$lang$ctorStr = "intemporal.doc/t_intemporal$doc43746");

(intemporal.doc.t_intemporal$doc43746.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"intemporal.doc/t_intemporal$doc43746");
}));

/**
 * Positional factory function for intemporal.doc/t_intemporal$doc43746.
 */
intemporal.doc.__GT_t_intemporal$doc43746 = (function intemporal$doc$simpleflow_$___GT_t_intemporal$doc43746(n__$1,meta43747){
return (new intemporal.doc.t_intemporal$doc43746(n__$1,meta43747));
});

}

return (new intemporal.doc.t_intemporal$doc43746(n,null));
})()
;
stub.intemporal$doc$HttpClient$doHead$arity$2(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"carr"].join(''));

return stub.intemporal$doc$HttpClient$doPost$arity$2(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"carr"].join(''));
});
intemporal.doc.onready = (function intemporal$doc$onready(db){
var sqlitestore = intemporal.doc.sqlite_store.make_sqlite_store(db);
sqlitestore.intemporal$store$WorkflowStore$clear_events$arity$1(null);

var f__35760__auto___43814 = intemporal.doc.simpleflow;
var proxied__35761__auto___43815 = (function() { 
var intemporal$doc$onready_$_proxy_workflow__35762__auto____delegate = function (args__35763__auto__){
return intemporal.workflow.proxy_workflow_fn(sqlitestore,"intemporal.doc/simpleflow",f__35760__auto___43814,args__35763__auto__);
};
var intemporal$doc$onready_$_proxy_workflow__35762__auto__ = function (var_args){
var args__35763__auto__ = null;
if (arguments.length > 0) {
var G__43816__i = 0, G__43816__a = new Array(arguments.length -  0);
while (G__43816__i < G__43816__a.length) {G__43816__a[G__43816__i] = arguments[G__43816__i + 0]; ++G__43816__i;}
  args__35763__auto__ = new cljs.core.IndexedSeq(G__43816__a,0,null);
} 
return intemporal$doc$onready_$_proxy_workflow__35762__auto____delegate.call(this,args__35763__auto__);};
intemporal$doc$onready_$_proxy_workflow__35762__auto__.cljs$lang$maxFixedArity = 0;
intemporal$doc$onready_$_proxy_workflow__35762__auto__.cljs$lang$applyTo = (function (arglist__43817){
var args__35763__auto__ = cljs.core.seq(arglist__43817);
return intemporal$doc$onready_$_proxy_workflow__35762__auto____delegate(args__35763__auto__);
});
intemporal$doc$onready_$_proxy_workflow__35762__auto__.cljs$core$IFn$_invoke$arity$variadic = intemporal$doc$onready_$_proxy_workflow__35762__auto____delegate;
return intemporal$doc$onready_$_proxy_workflow__35762__auto__;
})()
;
(intemporal.doc.simpleflow = proxied__35761__auto___43815);

if((((!((sqlitestore == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === sqlitestore.intemporal$store$WorkflowStore$))))?true:(((!sqlitestore.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(intemporal.store.WorkflowStore,sqlitestore):false)):cljs.core.native_satisfies_QMARK_(intemporal.store.WorkflowStore,sqlitestore))){
} else {
throw intemporal.error.workflow_error(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["store %s does not implement WorkflowStore",sqlitestore.intemporal$store$WorkflowStore$id$arity$1(null)], 0)));
}

sqlitestore.intemporal$store$WorkflowStore$save_workflow_definition$arity$3(null,"intemporal.doc/simpleflow","intemporal.doc/simpleflow");


var el = document.getElementById("runner");
var ret = document.getElementById("retry");
var toggle_BANG_ = (function (id,b){
return (document.getElementById(id).disabled = b);
});
var set_html_BANG_ = (function (id,html){
return (document.getElementById(id).innerHTML = html);
});
var tbl = (function (rows,header){
return ["<table"," role=\"grid\"",">","<thead","",">","<tr","",">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5523__auto__ = (function intemporal$doc$onready_$_iter__43780(s__43781){
return (new cljs.core.LazySeq(null,(function (){
var s__43781__$1 = s__43781;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__43781__$1);
if(temp__5804__auto__){
var s__43781__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43781__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43781__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43783 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43782 = (0);
while(true){
if((i__43782 < size__5522__auto__)){
var h = cljs.core._nth(c__5521__auto__,i__43782);
cljs.core.chunk_append(b__43783,(function (){var attrs43784 = h;
if(cljs.core.map_QMARK_(attrs43784)){
return ["<td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs43784], 0))))," />"].join('');
} else {
return ["<td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs43784)),"</td>"].join('');
}
})());

var G__43818 = (i__43782 + (1));
i__43782 = G__43818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43783),intemporal$doc$onready_$_iter__43780(cljs.core.chunk_rest(s__43781__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43783),null);
}
} else {
var h = cljs.core.first(s__43781__$2);
return cljs.core.cons((function (){var attrs43785 = h;
if(cljs.core.map_QMARK_(attrs43785)){
return ["<td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs43785], 0))))," />"].join('');
} else {
return ["<td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs43785)),"</td>"].join('');
}
})(),intemporal$doc$onready_$_iter__43780(cljs.core.rest(s__43781__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(header);
})())),"</tr>","</thead>","<tbody","",">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5523__auto__ = (function intemporal$doc$onready_$_iter__43786(s__43787){
return (new cljs.core.LazySeq(null,(function (){
var s__43787__$1 = s__43787;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__43787__$1);
if(temp__5804__auto__){
var s__43787__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43787__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43787__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43789 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43788 = (0);
while(true){
if((i__43788 < size__5522__auto__)){
var r = cljs.core._nth(c__5521__auto__,i__43788);
cljs.core.chunk_append(b__43789,cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html((function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"type","type",1174270348))], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"type","type",1174270348)))], null),(function (){var iter__5523__auto__ = ((function (i__43788,r,c__5521__auto__,size__5522__auto__,b__43789,s__43787__$2,temp__5804__auto__,el,ret,toggle_BANG_,set_html_BANG_,sqlitestore){
return (function intemporal$doc$onready_$_iter__43786_$_iter__43794(s__43795){
return (new cljs.core.LazySeq(null,((function (i__43788,r,c__5521__auto__,size__5522__auto__,b__43789,s__43787__$2,temp__5804__auto__,el,ret,toggle_BANG_,set_html_BANG_,sqlitestore){
return (function (){
var s__43795__$1 = s__43795;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__43795__$1);
if(temp__5804__auto____$1){
var s__43795__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43795__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__43795__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__43797 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__43796 = (0);
while(true){
if((i__43796 < size__5522__auto____$1)){
var h = cljs.core._nth(c__5521__auto____$1,i__43796);
cljs.core.chunk_append(b__43797,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], null));

var G__43819 = (i__43796 + (1));
i__43796 = G__43819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43797),intemporal$doc$onready_$_iter__43786_$_iter__43794(cljs.core.chunk_rest(s__43795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43797),null);
}
} else {
var h = cljs.core.first(s__43795__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], null),intemporal$doc$onready_$_iter__43786_$_iter__43794(cljs.core.rest(s__43795__$2)));
}
} else {
return null;
}
break;
}
});})(i__43788,r,c__5521__auto__,size__5522__auto__,b__43789,s__43787__$2,temp__5804__auto__,el,ret,toggle_BANG_,set_html_BANG_,sqlitestore))
,null,null));
});})(i__43788,r,c__5521__auto__,size__5522__auto__,b__43789,s__43787__$2,temp__5804__auto__,el,ret,toggle_BANG_,set_html_BANG_,sqlitestore))
;
return iter__5523__auto__(header);
})()], null);
})()
)));

var G__43820 = (i__43788 + (1));
i__43788 = G__43820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43789),intemporal$doc$onready_$_iter__43786(cljs.core.chunk_rest(s__43787__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43789),null);
}
} else {
var r = cljs.core.first(s__43787__$2);
return cljs.core.cons(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html((function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"type","type",1174270348))], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"type","type",1174270348)))], null),(function (){var iter__5523__auto__ = ((function (r,s__43787__$2,temp__5804__auto__,el,ret,toggle_BANG_,set_html_BANG_,sqlitestore){
return (function intemporal$doc$onready_$_iter__43786_$_iter__43802(s__43803){
return (new cljs.core.LazySeq(null,(function (){
var s__43803__$1 = s__43803;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__43803__$1);
if(temp__5804__auto____$1){
var s__43803__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43803__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43803__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43805 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43804 = (0);
while(true){
if((i__43804 < size__5522__auto__)){
var h = cljs.core._nth(c__5521__auto__,i__43804);
cljs.core.chunk_append(b__43805,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], null));

var G__43821 = (i__43804 + (1));
i__43804 = G__43821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43805),intemporal$doc$onready_$_iter__43786_$_iter__43802(cljs.core.chunk_rest(s__43803__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43805),null);
}
} else {
var h = cljs.core.first(s__43803__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h)], null),intemporal$doc$onready_$_iter__43786_$_iter__43802(cljs.core.rest(s__43803__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(r,s__43787__$2,temp__5804__auto__,el,ret,toggle_BANG_,set_html_BANG_,sqlitestore))
;
return iter__5523__auto__(header);
})()], null);
})()
)),intemporal$doc$onready_$_iter__43786(cljs.core.rest(s__43787__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(rows);
})())),"</tbody>","</table>"].join('');
});
var update_html_events = (function (){
var mdata = intemporal.doc.sqlite.execute_BANG_(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select * from metadata"], null));
var events = intemporal.doc.sqlite.execute_BANG_(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select * from events"], null));
set_html_BANG_("metadata",tbl(mdata,cljs.core.keys(cljs.core.first(mdata))));

return set_html_BANG_("events",tbl(events,cljs.core.keys(cljs.core.first(events))));
});
ret.addEventListener("click",(function (e){
var vec__43806 = intemporal.doc.sqlite.execute_BANG_(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select runid from events order by timestamp asc limit 1"], null));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43806,(0),null);
var runid = new cljs.core.Keyword(null,"runid","runid",715714469).cljs$core$IFn$_invoke$arity$1(row);
set_html_BANG_("results",["Retrying id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(runid)].join(''));

try{var res_43822 = intemporal.workflow.retry(sqlitestore,new cljs.core.Var(function(){return intemporal.doc.simpleflow;},new cljs.core.Symbol("intemporal.doc","simpleflow","intemporal.doc/simpleflow",-1292323793,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"intemporal.doc","intemporal.doc",-889985538,null),new cljs.core.Symbol(null,"simpleflow","simpleflow",835946044,null),"intemporal/doc.cljc",17,1,43,43,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null)], null)),null,(cljs.core.truth_(intemporal.doc.simpleflow)?intemporal.doc.simpleflow.cljs$lang$test:null)])),runid);
set_html_BANG_("results",res_43822);

toggle_BANG_("retry",true);
}catch (e43809){if((e43809 instanceof Object)){
var err_43823 = e43809;
console.error("Workflow failed!",err_43823);

set_html_BANG_("results",err_43823);

toggle_BANG_("retry",false);
} else {
throw e43809;

}
}
return update_html_events();
}));

return el.addEventListener("click",(function (e){
try{var res_43824 = intemporal.doc.simpleflow("foo");
set_html_BANG_("results",res_43824);

toggle_BANG_("retry",true);
}catch (e43810){if((e43810 instanceof Object)){
var err_43825 = e43810;
console.error("Workflow failed!",err_43825);

set_html_BANG_("results",err_43825);

toggle_BANG_("retry",false);
} else {
throw e43810;

}
}
return update_html_events();
}));
});
intemporal.doc.init = (function intemporal$doc$init(){
return intemporal.doc.sqlite.init(intemporal.doc.onready);
});

//# sourceMappingURL=intemporal.doc.js.map
