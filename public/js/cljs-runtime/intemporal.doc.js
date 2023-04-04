goog.provide('intemporal.doc');

/**
 * @interface
 */
intemporal.doc.HttpClient = function(){};

var intemporal$doc$HttpClient$doHead$dyn_42405 = (function (this$,id){
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
return intemporal$doc$HttpClient$doHead$dyn_42405(this$,id);
}
}
});

var intemporal$doc$HttpClient$doPost$dyn_42406 = (function (this$,id){
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
return intemporal$doc$HttpClient$doPost$dyn_42406(this$,id);
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
if((typeof intemporal !== 'undefined') && (typeof intemporal.doc !== 'undefined') && (typeof intemporal.doc.t_intemporal$doc42303 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {intemporal.doc.HttpClient}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
intemporal.doc.t_intemporal$doc42303 = (function (meta42304){
this.meta42304 = meta42304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.doc.t_intemporal$doc42303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42305,meta42304__$1){
var self__ = this;
var _42305__$1 = this;
return (new intemporal.doc.t_intemporal$doc42303(meta42304__$1));
}));

(intemporal.doc.t_intemporal$doc42303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42305){
var self__ = this;
var _42305__$1 = this;
return self__.meta42304;
}));

(intemporal.doc.t_intemporal$doc42303.prototype.intemporal$doc$HttpClient$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.t_intemporal$doc42303.prototype.intemporal$doc$HttpClient$doHead$arity$2 = (function (_,_url){
var self__ = this;
var ___$1 = this;
return "200 OK";
}));

(intemporal.doc.t_intemporal$doc42303.prototype.intemporal$doc$HttpClient$doPost$arity$2 = (function (_,_url){
var self__ = this;
var ___$1 = this;
return intemporal.doc.maybe((function (){
return "200 OK";
}));
}));

(intemporal.doc.t_intemporal$doc42303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42304","meta42304",538078109,null)], null);
}));

(intemporal.doc.t_intemporal$doc42303.cljs$lang$type = true);

(intemporal.doc.t_intemporal$doc42303.cljs$lang$ctorStr = "intemporal.doc/t_intemporal$doc42303");

(intemporal.doc.t_intemporal$doc42303.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"intemporal.doc/t_intemporal$doc42303");
}));

/**
 * Positional factory function for intemporal.doc/t_intemporal$doc42303.
 */
intemporal.doc.__GT_t_intemporal$doc42303 = (function intemporal$doc$__GT_t_intemporal$doc42303(meta42304){
return (new intemporal.doc.t_intemporal$doc42303(meta42304));
});

}

return (new intemporal.doc.t_intemporal$doc42303(cljs.core.PersistentArrayMap.EMPTY));
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

(intemporal.doc.MyHttpClient.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k42311,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__42315 = k42311;
switch (G__42315) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42311,else__5346__auto__);

}
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__42316){
var vec__42317 = p__42316;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42317,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42317,(1),null);
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

(intemporal.doc.MyHttpClient.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42310){
var self__ = this;
var G__42310__$1 = this;
return (new cljs.core.RecordIter((0),G__42310__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(intemporal.doc.MyHttpClient.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42312,other42313){
var self__ = this;
var this42312__$1 = this;
return (((!((other42313 == null)))) && ((((this42312__$1.constructor === other42313.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42312__$1.__extmap,other42313.__extmap)))));
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

(intemporal.doc.MyHttpClient.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k42311){
var self__ = this;
var this__5350__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k42311);
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__42310){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__42320 = cljs.core.keyword_identical_QMARK_;
var expr__42321 = k__5352__auto__;
return (new intemporal.doc.MyHttpClient(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__42310),null));
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__42310){
var self__ = this;
var this__5342__auto____$1 = this;
return (new intemporal.doc.MyHttpClient(G__42310,self__.__extmap,self__.__hash));
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
intemporal.doc.map__GT_MyHttpClient = (function intemporal$doc$map__GT_MyHttpClient(G__42314){
var extmap__5385__auto__ = (function (){var G__42323 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__42314);
if(cljs.core.record_QMARK_(G__42314)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42323);
} else {
return G__42323;
}
})();
return (new intemporal.doc.MyHttpClient(null,cljs.core.not_empty(extmap__5385__auto__),null));
});

intemporal.doc.simpleflow = (function intemporal$doc$simpleflow(n){
var stub = (function (){
if((typeof intemporal !== 'undefined') && (typeof intemporal.doc !== 'undefined') && (typeof intemporal.doc.t_intemporal$doc42324 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {intemporal.doc.HttpClient}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
intemporal.doc.t_intemporal$doc42324 = (function (n,meta42325){
this.n = n;
this.meta42325 = meta42325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.doc.t_intemporal$doc42324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42326,meta42325__$1){
var self__ = this;
var _42326__$1 = this;
return (new intemporal.doc.t_intemporal$doc42324(self__.n,meta42325__$1));
}));

(intemporal.doc.t_intemporal$doc42324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42326){
var self__ = this;
var _42326__$1 = this;
return self__.meta42325;
}));

(intemporal.doc.t_intemporal$doc42324.prototype.intemporal$doc$HttpClient$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.t_intemporal$doc42324.prototype.intemporal$doc$HttpClient$doHead$arity$2 = (function (this__31192__auto__,id){
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

var map__42328 = act_opts__31195__auto__;
var map__42328__$1 = cljs.core.__destructure_map(map__42328);
var idempotent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42328__$1,new cljs.core.Keyword(null,"idempotent","idempotent",-1860592338));
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
}catch (e42327){if((e42327 instanceof Error)){
var e__31176__auto__ = e42327;
throw ((intemporal.workflow.event_matches_QMARK_(intemporal.workflow.current_event(),aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613)))?e__31176__auto__:(function (){
intemporal.workflow.save_activity_event(aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613),e__31176__auto__);

return e__31176__auto__;
})()

);
} else {
throw e42327;

}
}}));

(intemporal.doc.t_intemporal$doc42324.prototype.intemporal$doc$HttpClient$doPost$arity$2 = (function (this__31192__auto__,id){
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

var map__42330 = act_opts__31195__auto__;
var map__42330__$1 = cljs.core.__destructure_map(map__42330);
var idempotent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42330__$1,new cljs.core.Keyword(null,"idempotent","idempotent",-1860592338));
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
}catch (e42329){if((e42329 instanceof Error)){
var e__31176__auto__ = e42329;
throw ((intemporal.workflow.event_matches_QMARK_(intemporal.workflow.current_event(),aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613)))?e__31176__auto__:(function (){
intemporal.workflow.save_activity_event(aid__31194__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613),e__31176__auto__);

return e__31176__auto__;
})()

);
} else {
throw e42329;

}
}}));

(intemporal.doc.t_intemporal$doc42324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"meta42325","meta42325",-1276802413,null)], null);
}));

(intemporal.doc.t_intemporal$doc42324.cljs$lang$type = true);

(intemporal.doc.t_intemporal$doc42324.cljs$lang$ctorStr = "intemporal.doc/t_intemporal$doc42324");

(intemporal.doc.t_intemporal$doc42324.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"intemporal.doc/t_intemporal$doc42324");
}));

/**
 * Positional factory function for intemporal.doc/t_intemporal$doc42324.
 */
intemporal.doc.__GT_t_intemporal$doc42324 = (function intemporal$doc$simpleflow_$___GT_t_intemporal$doc42324(n__$1,meta42325){
return (new intemporal.doc.t_intemporal$doc42324(n__$1,meta42325));
});

}

return (new intemporal.doc.t_intemporal$doc42324(n,null));
})()
;
stub.intemporal$doc$HttpClient$doHead$arity$2(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"carr"].join(''));

return stub.intemporal$doc$HttpClient$doPost$arity$2(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"carr"].join(''));
});
intemporal.doc.onready = (function intemporal$doc$onready(db){
var sqlitestore = intemporal.doc.sqlite_store.make_sqlite_store(db);
sqlitestore.intemporal$store$WorkflowStore$clear_events$arity$1(null);

var f__35760__auto___42408 = intemporal.doc.simpleflow;
var proxied__35761__auto___42409 = (function() { 
var intemporal$doc$onready_$_proxy_workflow__35762__auto____delegate = function (args__35763__auto__){
return intemporal.workflow.proxy_workflow_fn(sqlitestore,"intemporal.doc/simpleflow",f__35760__auto___42408,args__35763__auto__);
};
var intemporal$doc$onready_$_proxy_workflow__35762__auto__ = function (var_args){
var args__35763__auto__ = null;
if (arguments.length > 0) {
var G__42410__i = 0, G__42410__a = new Array(arguments.length -  0);
while (G__42410__i < G__42410__a.length) {G__42410__a[G__42410__i] = arguments[G__42410__i + 0]; ++G__42410__i;}
  args__35763__auto__ = new cljs.core.IndexedSeq(G__42410__a,0,null);
} 
return intemporal$doc$onready_$_proxy_workflow__35762__auto____delegate.call(this,args__35763__auto__);};
intemporal$doc$onready_$_proxy_workflow__35762__auto__.cljs$lang$maxFixedArity = 0;
intemporal$doc$onready_$_proxy_workflow__35762__auto__.cljs$lang$applyTo = (function (arglist__42411){
var args__35763__auto__ = cljs.core.seq(arglist__42411);
return intemporal$doc$onready_$_proxy_workflow__35762__auto____delegate(args__35763__auto__);
});
intemporal$doc$onready_$_proxy_workflow__35762__auto__.cljs$core$IFn$_invoke$arity$variadic = intemporal$doc$onready_$_proxy_workflow__35762__auto____delegate;
return intemporal$doc$onready_$_proxy_workflow__35762__auto__;
})()
;
(intemporal.doc.simpleflow = proxied__35761__auto___42409);

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
return ["<table"," role=\"grid\"",">","<thead","",">","<tr","",">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5523__auto__ = (function intemporal$doc$onready_$_iter__42366(s__42367){
return (new cljs.core.LazySeq(null,(function (){
var s__42367__$1 = s__42367;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42367__$1);
if(temp__5804__auto__){
var s__42367__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42367__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__42367__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__42369 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__42368 = (0);
while(true){
if((i__42368 < size__5522__auto__)){
var h = cljs.core._nth(c__5521__auto__,i__42368);
cljs.core.chunk_append(b__42369,(function (){var attrs42370 = h;
if(cljs.core.map_QMARK_(attrs42370)){
return ["<td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs42370], 0))))," />"].join('');
} else {
return ["<td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs42370)),"</td>"].join('');
}
})());

var G__42412 = (i__42368 + (1));
i__42368 = G__42412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42369),intemporal$doc$onready_$_iter__42366(cljs.core.chunk_rest(s__42367__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42369),null);
}
} else {
var h = cljs.core.first(s__42367__$2);
return cljs.core.cons((function (){var attrs42371 = h;
if(cljs.core.map_QMARK_(attrs42371)){
return ["<td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs42371], 0))))," />"].join('');
} else {
return ["<td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs42371)),"</td>"].join('');
}
})(),intemporal$doc$onready_$_iter__42366(cljs.core.rest(s__42367__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(header);
})())),"</tr>","</thead>","<tbody","",">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5523__auto__ = (function intemporal$doc$onready_$_iter__42372(s__42373){
return (new cljs.core.LazySeq(null,(function (){
var s__42373__$1 = s__42373;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42373__$1);
if(temp__5804__auto__){
var s__42373__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42373__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__42373__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__42375 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__42374 = (0);
while(true){
if((i__42374 < size__5522__auto__)){
var r = cljs.core._nth(c__5521__auto__,i__42374);
cljs.core.chunk_append(b__42375,["<tr","",">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5523__auto__ = ((function (i__42374,r,c__5521__auto__,size__5522__auto__,b__42375,s__42373__$2,temp__5804__auto__,el,ret,toggle_BANG_,set_html_BANG_,sqlitestore){
return (function intemporal$doc$onready_$_iter__42372_$_iter__42382(s__42383){
return (new cljs.core.LazySeq(null,((function (i__42374,r,c__5521__auto__,size__5522__auto__,b__42375,s__42373__$2,temp__5804__auto__,el,ret,toggle_BANG_,set_html_BANG_,sqlitestore){
return (function (){
var s__42383__$1 = s__42383;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__42383__$1);
if(temp__5804__auto____$1){
var s__42383__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42383__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__42383__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__42385 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__42384 = (0);
while(true){
if((i__42384 < size__5522__auto____$1)){
var h = cljs.core._nth(c__5521__auto____$1,i__42384);
cljs.core.chunk_append(b__42385,(function (){var attrs42386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h);
if(cljs.core.map_QMARK_(attrs42386)){
return ["<td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs42386], 0))))," />"].join('');
} else {
return ["<td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs42386)),"</td>"].join('');
}
})());

var G__42413 = (i__42384 + (1));
i__42384 = G__42413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42385),intemporal$doc$onready_$_iter__42372_$_iter__42382(cljs.core.chunk_rest(s__42383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42385),null);
}
} else {
var h = cljs.core.first(s__42383__$2);
return cljs.core.cons((function (){var attrs42387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h);
if(cljs.core.map_QMARK_(attrs42387)){
return ["<td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs42387], 0))))," />"].join('');
} else {
return ["<td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs42387)),"</td>"].join('');
}
})(),intemporal$doc$onready_$_iter__42372_$_iter__42382(cljs.core.rest(s__42383__$2)));
}
} else {
return null;
}
break;
}
});})(i__42374,r,c__5521__auto__,size__5522__auto__,b__42375,s__42373__$2,temp__5804__auto__,el,ret,toggle_BANG_,set_html_BANG_,sqlitestore))
,null,null));
});})(i__42374,r,c__5521__auto__,size__5522__auto__,b__42375,s__42373__$2,temp__5804__auto__,el,ret,toggle_BANG_,set_html_BANG_,sqlitestore))
;
return iter__5523__auto__(header);
})())),"</tr>"].join(''));

var G__42414 = (i__42374 + (1));
i__42374 = G__42414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42375),intemporal$doc$onready_$_iter__42372(cljs.core.chunk_rest(s__42373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42375),null);
}
} else {
var r = cljs.core.first(s__42373__$2);
return cljs.core.cons(["<tr","",">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5523__auto__ = ((function (r,s__42373__$2,temp__5804__auto__,el,ret,toggle_BANG_,set_html_BANG_,sqlitestore){
return (function intemporal$doc$onready_$_iter__42372_$_iter__42394(s__42395){
return (new cljs.core.LazySeq(null,(function (){
var s__42395__$1 = s__42395;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__42395__$1);
if(temp__5804__auto____$1){
var s__42395__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42395__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__42395__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__42397 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__42396 = (0);
while(true){
if((i__42396 < size__5522__auto__)){
var h = cljs.core._nth(c__5521__auto__,i__42396);
cljs.core.chunk_append(b__42397,(function (){var attrs42398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h);
if(cljs.core.map_QMARK_(attrs42398)){
return ["<td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs42398], 0))))," />"].join('');
} else {
return ["<td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs42398)),"</td>"].join('');
}
})());

var G__42415 = (i__42396 + (1));
i__42396 = G__42415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42397),intemporal$doc$onready_$_iter__42372_$_iter__42394(cljs.core.chunk_rest(s__42395__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42397),null);
}
} else {
var h = cljs.core.first(s__42395__$2);
return cljs.core.cons((function (){var attrs42399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h);
if(cljs.core.map_QMARK_(attrs42399)){
return ["<td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs42399], 0))))," />"].join('');
} else {
return ["<td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs42399)),"</td>"].join('');
}
})(),intemporal$doc$onready_$_iter__42372_$_iter__42394(cljs.core.rest(s__42395__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(r,s__42373__$2,temp__5804__auto__,el,ret,toggle_BANG_,set_html_BANG_,sqlitestore))
;
return iter__5523__auto__(header);
})())),"</tr>"].join(''),intemporal$doc$onready_$_iter__42372(cljs.core.rest(s__42373__$2)));
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
var vec__42400 = intemporal.doc.sqlite.execute_BANG_(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select runid from events order by timestamp asc limit 1"], null));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42400,(0),null);
var runid = new cljs.core.Keyword(null,"runid","runid",715714469).cljs$core$IFn$_invoke$arity$1(row);
set_html_BANG_("results",["Retrying id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(runid)].join(''));

try{var res_42416 = intemporal.workflow.retry(sqlitestore,new cljs.core.Var(function(){return intemporal.doc.simpleflow;},new cljs.core.Symbol("intemporal.doc","simpleflow","intemporal.doc/simpleflow",-1292323793,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"intemporal.doc","intemporal.doc",-889985538,null),new cljs.core.Symbol(null,"simpleflow","simpleflow",835946044,null),"intemporal/doc.cljc",17,1,42,42,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null)], null)),null,(cljs.core.truth_(intemporal.doc.simpleflow)?intemporal.doc.simpleflow.cljs$lang$test:null)])),runid);
set_html_BANG_("results",res_42416);

toggle_BANG_("retry",true);
}catch (e42403){if((e42403 instanceof Object)){
var err_42417 = e42403;
console.error("Workflow failed!",err_42417);

set_html_BANG_("results",err_42417);

toggle_BANG_("retry",false);
} else {
throw e42403;

}
}
return update_html_events();
}));

return el.addEventListener("click",(function (e){
try{var res_42418 = intemporal.doc.simpleflow("foo");
set_html_BANG_("results",res_42418);

toggle_BANG_("retry",true);
}catch (e42404){if((e42404 instanceof Object)){
var err_42419 = e42404;
console.error("Workflow failed!",err_42419);

set_html_BANG_("results",err_42419);

toggle_BANG_("retry",false);
} else {
throw e42404;

}
}
return update_html_events();
}));
});
intemporal.doc.init = (function intemporal$doc$init(){
return intemporal.doc.sqlite.init(intemporal.doc.onready);
});

//# sourceMappingURL=intemporal.doc.js.map
