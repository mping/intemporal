goog.provide('intemporal.doc');

/**
 * @interface
 */
intemporal.doc.HttpClient = function(){};

var intemporal$doc$HttpClient$doHead$dyn_32995 = (function (this$,id){
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
return intemporal$doc$HttpClient$doHead$dyn_32995(this$,id);
}
}
});

var intemporal$doc$HttpClient$doPost$dyn_32996 = (function (this$,id){
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
return intemporal$doc$HttpClient$doPost$dyn_32996(this$,id);
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
if((typeof intemporal !== 'undefined') && (typeof intemporal.doc !== 'undefined') && (typeof intemporal.doc.t_intemporal$doc32901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {intemporal.doc.HttpClient}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
intemporal.doc.t_intemporal$doc32901 = (function (meta32902){
this.meta32902 = meta32902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.doc.t_intemporal$doc32901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32903,meta32902__$1){
var self__ = this;
var _32903__$1 = this;
return (new intemporal.doc.t_intemporal$doc32901(meta32902__$1));
}));

(intemporal.doc.t_intemporal$doc32901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32903){
var self__ = this;
var _32903__$1 = this;
return self__.meta32902;
}));

(intemporal.doc.t_intemporal$doc32901.prototype.intemporal$doc$HttpClient$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.t_intemporal$doc32901.prototype.intemporal$doc$HttpClient$doPost$arity$2 = (function (_,_url){
var self__ = this;
var ___$1 = this;
return intemporal.doc.maybe((function (){
return "200 OK";
}));
}));

(intemporal.doc.t_intemporal$doc32901.prototype.intemporal$doc$HttpClient$doHead$arity$2 = (function (_,_url){
var self__ = this;
var ___$1 = this;
return intemporal.doc.maybe((function (){
return "200 OK";
}));
}));

(intemporal.doc.t_intemporal$doc32901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta32902","meta32902",-1550556985,null)], null);
}));

(intemporal.doc.t_intemporal$doc32901.cljs$lang$type = true);

(intemporal.doc.t_intemporal$doc32901.cljs$lang$ctorStr = "intemporal.doc/t_intemporal$doc32901");

(intemporal.doc.t_intemporal$doc32901.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"intemporal.doc/t_intemporal$doc32901");
}));

/**
 * Positional factory function for intemporal.doc/t_intemporal$doc32901.
 */
intemporal.doc.__GT_t_intemporal$doc32901 = (function intemporal$doc$__GT_t_intemporal$doc32901(meta32902){
return (new intemporal.doc.t_intemporal$doc32901(meta32902));
});

}

return (new intemporal.doc.t_intemporal$doc32901(cljs.core.PersistentArrayMap.EMPTY));
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

(intemporal.doc.MyHttpClient.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k32905,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__32909 = k32905;
switch (G__32909) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32905,else__5346__auto__);

}
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__32910){
var vec__32911 = p__32910;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32911,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32911,(1),null);
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

(intemporal.doc.MyHttpClient.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32904){
var self__ = this;
var G__32904__$1 = this;
return (new cljs.core.RecordIter((0),G__32904__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(intemporal.doc.MyHttpClient.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32906,other32907){
var self__ = this;
var this32906__$1 = this;
return (((!((other32907 == null)))) && ((((this32906__$1.constructor === other32907.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32906__$1.__extmap,other32907.__extmap)))));
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

(intemporal.doc.MyHttpClient.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k32905){
var self__ = this;
var this__5350__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k32905);
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__32904){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__32914 = cljs.core.keyword_identical_QMARK_;
var expr__32915 = k__5352__auto__;
return (new intemporal.doc.MyHttpClient(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__32904),null));
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(intemporal.doc.MyHttpClient.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__32904){
var self__ = this;
var this__5342__auto____$1 = this;
return (new intemporal.doc.MyHttpClient(G__32904,self__.__extmap,self__.__hash));
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
return intemporal.doc.maybe((function (){
return id;
}));
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
intemporal.doc.map__GT_MyHttpClient = (function intemporal$doc$map__GT_MyHttpClient(G__32908){
var extmap__5385__auto__ = (function (){var G__32917 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__32908);
if(cljs.core.record_QMARK_(G__32908)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32917);
} else {
return G__32917;
}
})();
return (new intemporal.doc.MyHttpClient(null,cljs.core.not_empty(extmap__5385__auto__),null));
});

intemporal.doc.simpleflow = (function intemporal$doc$simpleflow(n){
var stub = (function (){
if((typeof intemporal !== 'undefined') && (typeof intemporal.doc !== 'undefined') && (typeof intemporal.doc.t_intemporal$doc32918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {intemporal.doc.HttpClient}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
intemporal.doc.t_intemporal$doc32918 = (function (n,meta32919){
this.n = n;
this.meta32919 = meta32919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.doc.t_intemporal$doc32918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32920,meta32919__$1){
var self__ = this;
var _32920__$1 = this;
return (new intemporal.doc.t_intemporal$doc32918(self__.n,meta32919__$1));
}));

(intemporal.doc.t_intemporal$doc32918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32920){
var self__ = this;
var _32920__$1 = this;
return self__.meta32919;
}));

(intemporal.doc.t_intemporal$doc32918.prototype.intemporal$doc$HttpClient$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.t_intemporal$doc32918.prototype.intemporal$doc$HttpClient$doHead$arity$2 = (function (this__31208__auto__,id){
var self__ = this;
var this__31208__auto____$1 = this;
var impl__31209__auto__ = intemporal.doc.example_impl;
var aid__31210__auto__ = new cljs.core.Symbol("intemporal.doc","doHead","intemporal.doc/doHead",1831838080,null);
var act_opts__31211__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idempotent","idempotent",-1860592338),true], null);
try{if(intemporal.workflow.event_matches_QMARK_(intemporal.workflow.next_event(),aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","invoke","intemporal.activity/invoke",1074985885))){
new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor());
} else {
intemporal.workflow.save_activity_event(aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","invoke","intemporal.activity/invoke",1074985885),cljs.core.vec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)));

cljs.core.vec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
}

var map__32922 = act_opts__31211__auto__;
var map__32922__$1 = cljs.core.__destructure_map(map__32922);
var idempotent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32922__$1,new cljs.core.Keyword(null,"idempotent","idempotent",-1860592338));
var curr_evt__31189__auto__ = intemporal.workflow.next_event();
var result__31190__auto__ = ((intemporal.workflow.event_matches_QMARK_(curr_evt__31189__auto__,aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","success","intemporal.activity/success",1977785760)))?new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor()):((intemporal.workflow.event_matches_QMARK_(curr_evt__31189__auto__,aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613)))?((cljs.core.not(idempotent))?(function(){throw new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor())})():(function (){
intemporal.workflow.delete_history_forward();

var b__31191__auto__ = impl__31209__auto__.intemporal$doc$HttpClient$doHead$arity$2(null,id);
intemporal.workflow.save_activity_event(aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","success","intemporal.activity/success",1977785760),b__31191__auto__);

return b__31191__auto__;
})()
):(function (){var b__31191__auto__ = impl__31209__auto__.intemporal$doc$HttpClient$doHead$arity$2(null,id);
intemporal.workflow.save_activity_event(aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","success","intemporal.activity/success",1977785760),b__31191__auto__);

return b__31191__auto__;
})()
));
return result__31190__auto__;
}catch (e32921){if((e32921 instanceof Error)){
var e__31192__auto__ = e32921;
throw ((intemporal.workflow.event_matches_QMARK_(intemporal.workflow.current_event(),aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613)))?e__31192__auto__:(function (){
intemporal.workflow.save_activity_event(aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613),e__31192__auto__);

return e__31192__auto__;
})()

);
} else {
throw e32921;

}
}}));

(intemporal.doc.t_intemporal$doc32918.prototype.intemporal$doc$HttpClient$doPost$arity$2 = (function (this__31208__auto__,id){
var self__ = this;
var this__31208__auto____$1 = this;
var impl__31209__auto__ = intemporal.doc.example_impl;
var aid__31210__auto__ = new cljs.core.Symbol("intemporal.doc","doPost","intemporal.doc/doPost",-2017484295,null);
var act_opts__31211__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idempotent","idempotent",-1860592338),true], null);
try{if(intemporal.workflow.event_matches_QMARK_(intemporal.workflow.next_event(),aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","invoke","intemporal.activity/invoke",1074985885))){
new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor());
} else {
intemporal.workflow.save_activity_event(aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","invoke","intemporal.activity/invoke",1074985885),cljs.core.vec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)));

cljs.core.vec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
}

var map__32924 = act_opts__31211__auto__;
var map__32924__$1 = cljs.core.__destructure_map(map__32924);
var idempotent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32924__$1,new cljs.core.Keyword(null,"idempotent","idempotent",-1860592338));
var curr_evt__31189__auto__ = intemporal.workflow.next_event();
var result__31190__auto__ = ((intemporal.workflow.event_matches_QMARK_(curr_evt__31189__auto__,aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","success","intemporal.activity/success",1977785760)))?new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor()):((intemporal.workflow.event_matches_QMARK_(curr_evt__31189__auto__,aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613)))?((cljs.core.not(idempotent))?(function(){throw new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(intemporal.workflow.advance_history_cursor())})():(function (){
intemporal.workflow.delete_history_forward();

var b__31191__auto__ = impl__31209__auto__.intemporal$doc$HttpClient$doPost$arity$2(null,id);
intemporal.workflow.save_activity_event(aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","success","intemporal.activity/success",1977785760),b__31191__auto__);

return b__31191__auto__;
})()
):(function (){var b__31191__auto__ = impl__31209__auto__.intemporal$doc$HttpClient$doPost$arity$2(null,id);
intemporal.workflow.save_activity_event(aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","success","intemporal.activity/success",1977785760),b__31191__auto__);

return b__31191__auto__;
})()
));
return result__31190__auto__;
}catch (e32923){if((e32923 instanceof Error)){
var e__31192__auto__ = e32923;
throw ((intemporal.workflow.event_matches_QMARK_(intemporal.workflow.current_event(),aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613)))?e__31192__auto__:(function (){
intemporal.workflow.save_activity_event(aid__31210__auto__,new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613),e__31192__auto__);

return e__31192__auto__;
})()

);
} else {
throw e32923;

}
}}));

(intemporal.doc.t_intemporal$doc32918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"meta32919","meta32919",-1338951583,null)], null);
}));

(intemporal.doc.t_intemporal$doc32918.cljs$lang$type = true);

(intemporal.doc.t_intemporal$doc32918.cljs$lang$ctorStr = "intemporal.doc/t_intemporal$doc32918");

(intemporal.doc.t_intemporal$doc32918.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"intemporal.doc/t_intemporal$doc32918");
}));

/**
 * Positional factory function for intemporal.doc/t_intemporal$doc32918.
 */
intemporal.doc.__GT_t_intemporal$doc32918 = (function intemporal$doc$simpleflow_$___GT_t_intemporal$doc32918(n__$1,meta32919){
return (new intemporal.doc.t_intemporal$doc32918(n__$1,meta32919));
});

}

return (new intemporal.doc.t_intemporal$doc32918(n,null));
})()
;
stub.intemporal$doc$HttpClient$doHead$arity$2(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"carr"].join(''));

return stub.intemporal$doc$HttpClient$doPost$arity$2(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"carr"].join(''));
});
intemporal.doc.onready = (function intemporal$doc$onready(db){
var sqlitestore = intemporal.doc.sqlite_store.make_sqlite_store(db);
sqlitestore.intemporal$store$WorkflowStore$clear_events$arity$1(null);

var f__31162__auto___32998 = intemporal.doc.simpleflow;
var proxied__31163__auto___32999 = (function() { 
var intemporal$doc$onready_$_proxy_workflow__31164__auto____delegate = function (args__31165__auto__){
return intemporal.workflow.proxy_workflow_fn(sqlitestore,"intemporal.doc/simpleflow",f__31162__auto___32998,args__31165__auto__);
};
var intemporal$doc$onready_$_proxy_workflow__31164__auto__ = function (var_args){
var args__31165__auto__ = null;
if (arguments.length > 0) {
var G__33000__i = 0, G__33000__a = new Array(arguments.length -  0);
while (G__33000__i < G__33000__a.length) {G__33000__a[G__33000__i] = arguments[G__33000__i + 0]; ++G__33000__i;}
  args__31165__auto__ = new cljs.core.IndexedSeq(G__33000__a,0,null);
} 
return intemporal$doc$onready_$_proxy_workflow__31164__auto____delegate.call(this,args__31165__auto__);};
intemporal$doc$onready_$_proxy_workflow__31164__auto__.cljs$lang$maxFixedArity = 0;
intemporal$doc$onready_$_proxy_workflow__31164__auto__.cljs$lang$applyTo = (function (arglist__33001){
var args__31165__auto__ = cljs.core.seq(arglist__33001);
return intemporal$doc$onready_$_proxy_workflow__31164__auto____delegate(args__31165__auto__);
});
intemporal$doc$onready_$_proxy_workflow__31164__auto__.cljs$core$IFn$_invoke$arity$variadic = intemporal$doc$onready_$_proxy_workflow__31164__auto____delegate;
return intemporal$doc$onready_$_proxy_workflow__31164__auto__;
})()
;
(intemporal.doc.simpleflow = proxied__31163__auto___32999);

if((((!((sqlitestore == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === sqlitestore.intemporal$store$WorkflowStore$))))?true:(((!sqlitestore.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(intemporal.store.WorkflowStore,sqlitestore):false)):cljs.core.native_satisfies_QMARK_(intemporal.store.WorkflowStore,sqlitestore))){
} else {
throw intemporal.error.workflow_error(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["store %s does not implement WorkflowStore",sqlitestore.intemporal$store$WorkflowStore$id$arity$1(null)], 0)));
}

sqlitestore.intemporal$store$WorkflowStore$save_workflow_definition$arity$3(null,"intemporal.doc/simpleflow","intemporal.doc/simpleflow");


var el = document.getElementById("runner");
var tbl = (function (rows,header){
return ["<table"," role=\"grid\"",">","<thead","",">","<tr","",">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5523__auto__ = (function intemporal$doc$onready_$_iter__32960(s__32961){
return (new cljs.core.LazySeq(null,(function (){
var s__32961__$1 = s__32961;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32961__$1);
if(temp__5804__auto__){
var s__32961__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32961__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__32961__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__32963 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__32962 = (0);
while(true){
if((i__32962 < size__5522__auto__)){
var h = cljs.core._nth(c__5521__auto__,i__32962);
cljs.core.chunk_append(b__32963,(function (){var attrs32964 = h;
if(cljs.core.map_QMARK_(attrs32964)){
return ["<td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32964], 0))))," />"].join('');
} else {
return ["<td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs32964)),"</td>"].join('');
}
})());

var G__33002 = (i__32962 + (1));
i__32962 = G__33002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32963),intemporal$doc$onready_$_iter__32960(cljs.core.chunk_rest(s__32961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32963),null);
}
} else {
var h = cljs.core.first(s__32961__$2);
return cljs.core.cons((function (){var attrs32965 = h;
if(cljs.core.map_QMARK_(attrs32965)){
return ["<td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32965], 0))))," />"].join('');
} else {
return ["<td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs32965)),"</td>"].join('');
}
})(),intemporal$doc$onready_$_iter__32960(cljs.core.rest(s__32961__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(header);
})())),"</tr>","</thead>","<tbody","",">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5523__auto__ = (function intemporal$doc$onready_$_iter__32966(s__32967){
return (new cljs.core.LazySeq(null,(function (){
var s__32967__$1 = s__32967;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32967__$1);
if(temp__5804__auto__){
var s__32967__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32967__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__32967__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__32969 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__32968 = (0);
while(true){
if((i__32968 < size__5522__auto__)){
var r = cljs.core._nth(c__5521__auto__,i__32968);
cljs.core.chunk_append(b__32969,["<tr","",">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5523__auto__ = ((function (i__32968,r,c__5521__auto__,size__5522__auto__,b__32969,s__32967__$2,temp__5804__auto__,el,sqlitestore){
return (function intemporal$doc$onready_$_iter__32966_$_iter__32976(s__32977){
return (new cljs.core.LazySeq(null,((function (i__32968,r,c__5521__auto__,size__5522__auto__,b__32969,s__32967__$2,temp__5804__auto__,el,sqlitestore){
return (function (){
var s__32977__$1 = s__32977;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__32977__$1);
if(temp__5804__auto____$1){
var s__32977__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32977__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__32977__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__32979 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__32978 = (0);
while(true){
if((i__32978 < size__5522__auto____$1)){
var h = cljs.core._nth(c__5521__auto____$1,i__32978);
cljs.core.chunk_append(b__32979,(function (){var attrs32980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h);
if(cljs.core.map_QMARK_(attrs32980)){
return ["<td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32980], 0))))," />"].join('');
} else {
return ["<td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs32980)),"</td>"].join('');
}
})());

var G__33003 = (i__32978 + (1));
i__32978 = G__33003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32979),intemporal$doc$onready_$_iter__32966_$_iter__32976(cljs.core.chunk_rest(s__32977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32979),null);
}
} else {
var h = cljs.core.first(s__32977__$2);
return cljs.core.cons((function (){var attrs32981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h);
if(cljs.core.map_QMARK_(attrs32981)){
return ["<td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32981], 0))))," />"].join('');
} else {
return ["<td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs32981)),"</td>"].join('');
}
})(),intemporal$doc$onready_$_iter__32966_$_iter__32976(cljs.core.rest(s__32977__$2)));
}
} else {
return null;
}
break;
}
});})(i__32968,r,c__5521__auto__,size__5522__auto__,b__32969,s__32967__$2,temp__5804__auto__,el,sqlitestore))
,null,null));
});})(i__32968,r,c__5521__auto__,size__5522__auto__,b__32969,s__32967__$2,temp__5804__auto__,el,sqlitestore))
;
return iter__5523__auto__(header);
})())),"</tr>"].join(''));

var G__33004 = (i__32968 + (1));
i__32968 = G__33004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32969),intemporal$doc$onready_$_iter__32966(cljs.core.chunk_rest(s__32967__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32969),null);
}
} else {
var r = cljs.core.first(s__32967__$2);
return cljs.core.cons(["<tr","",">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5523__auto__ = ((function (r,s__32967__$2,temp__5804__auto__,el,sqlitestore){
return (function intemporal$doc$onready_$_iter__32966_$_iter__32988(s__32989){
return (new cljs.core.LazySeq(null,(function (){
var s__32989__$1 = s__32989;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__32989__$1);
if(temp__5804__auto____$1){
var s__32989__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32989__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__32989__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__32991 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__32990 = (0);
while(true){
if((i__32990 < size__5522__auto__)){
var h = cljs.core._nth(c__5521__auto__,i__32990);
cljs.core.chunk_append(b__32991,(function (){var attrs32992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h);
if(cljs.core.map_QMARK_(attrs32992)){
return ["<td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32992], 0))))," />"].join('');
} else {
return ["<td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs32992)),"</td>"].join('');
}
})());

var G__33005 = (i__32990 + (1));
i__32990 = G__33005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32991),intemporal$doc$onready_$_iter__32966_$_iter__32988(cljs.core.chunk_rest(s__32989__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32991),null);
}
} else {
var h = cljs.core.first(s__32989__$2);
return cljs.core.cons((function (){var attrs32993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,h);
if(cljs.core.map_QMARK_(attrs32993)){
return ["<td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32993], 0))))," />"].join('');
} else {
return ["<td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs32993)),"</td>"].join('');
}
})(),intemporal$doc$onready_$_iter__32966_$_iter__32988(cljs.core.rest(s__32989__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(r,s__32967__$2,temp__5804__auto__,el,sqlitestore))
;
return iter__5523__auto__(header);
})())),"</tr>"].join(''),intemporal$doc$onready_$_iter__32966(cljs.core.rest(s__32967__$2)));
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
return el.addEventListener("click",(function (e){
try{intemporal.doc.simpleflow("foo");
}catch (e32994){if((e32994 instanceof Object)){
var err_33006 = e32994;
console.error("Workflow failed!",err_33006);
} else {
throw e32994;

}
}
var mdata_33007 = intemporal.doc.sqlite.execute_BANG_(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select * from metadata"], null));
var events_33008 = intemporal.doc.sqlite.execute_BANG_(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select * from events"], null));
(document.getElementById("metadata").innerHTML = tbl(mdata_33007,cljs.core.keys(cljs.core.first(mdata_33007))));

(document.getElementById("events").innerHTML = tbl(events_33008,cljs.core.keys(cljs.core.first(events_33008))));

return null;
}));
});
intemporal.doc.init = (function intemporal$doc$init(){
return intemporal.doc.sqlite.init(intemporal.doc.onready);
});

//# sourceMappingURL=intemporal.doc.js.map
