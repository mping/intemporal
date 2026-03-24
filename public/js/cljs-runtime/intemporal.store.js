goog.provide('intemporal.store');

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

(intemporal.store.InMemoryStore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k28969,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__28978 = k28969;
var G__28978__$1 = (((G__28978 instanceof cljs.core.Keyword))?G__28978.fqn:null);
switch (G__28978__$1) {
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28969,else__5326__auto__);

}
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__28980){
var vec__28983 = p__28980;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28983,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28983,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$ = cljs.core.PROTOCOL_SENTINEL);

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

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$find_event$arity$4 = (function (this$,worfklow_id,event_type,seq_num){
var self__ = this;
var this$__$1 = this;
var history__$1 = this$__$1.intemporal$protocol$IStore$load_history$arity$2(null,worfklow_id);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28966_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(p1__28966_SHARP_),event_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(p1__28966_SHARP_),seq_num)));
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

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$save_events$arity$3 = (function (_,workflow_id,events){
var self__ = this;
var ___$1 = this;
if(cljs.core.seq(events)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0));
} else {
}

return events;
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$add_signal$arity$4 = (function (this$,workflow_id,signal_name,signal_data){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"signals","signals",1732137021),signal_name], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([signal_data], 0));

var temp__5825__auto___29275 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"signal-callbacks","signal-callbacks",-89555556),signal_name], null));
if(cljs.core.truth_(temp__5825__auto___29275)){
var callback_29278 = temp__5825__auto___29275;
setTimeout(callback_29278,(0));
} else {
}

return signal_data;
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
if(cljs.core.truth_(new cljs.core.Keyword(null,"cancelled","cancelled",488726224).cljs$core$IFn$_invoke$arity$1(wf))){
return new cljs.core.Keyword(null,"cancelled","cancelled",488726224);
} else {
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(wf))){
return new cljs.core.Keyword(null,"not-found","not-found",-629079980);
} else {
var last_event = cljs.core.last(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(wf));
var G__29001 = new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(last_event);
var G__29001__$1 = (((G__29001 instanceof cljs.core.Keyword))?G__29001.fqn:null);
switch (G__29001__$1) {
case "workflow-completed":
return new cljs.core.Keyword(null,"completed","completed",-486056503);

break;
case "workflow-failed":
return new cljs.core.Keyword(null,"failed","failed",-1397425762);

break;
default:
return new cljs.core.Keyword(null,"running","running",1554969103);

}

}
}
}));

(intemporal.store.InMemoryStore.prototype.intemporal$protocol$IStore$save_event$arity$3 = (function (_,workflow_id,event){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workflows","workflows",1533711151),workflow_id,new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event], 0));

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

(intemporal.store.InMemoryStore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28968){
var self__ = this;
var G__28968__$1 = this;
return (new cljs.core.RecordIter((0),G__28968__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(intemporal.store.InMemoryStore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28970,other28971){
var self__ = this;
var this28970__$1 = this;
return (((!((other28971 == null)))) && ((((this28970__$1.constructor === other28971.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28970__$1.state,other28971.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28970__$1.__extmap,other28971.__extmap)))))));
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

(intemporal.store.InMemoryStore.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k28969){
var self__ = this;
var this__5330__auto____$1 = this;
var G__29104 = k28969;
var G__29104__$1 = (((G__29104 instanceof cljs.core.Keyword))?G__29104.fqn:null);
switch (G__29104__$1) {
case "state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28969);

}
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__28968){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__29126 = cljs.core.keyword_identical_QMARK_;
var expr__29127 = k__5332__auto__;
if(cljs.core.truth_((pred__29126.cljs$core$IFn$_invoke$arity$2 ? pred__29126.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__29127) : pred__29126.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__29127)))){
return (new intemporal.store.InMemoryStore(G__28968,self__.__meta,self__.__extmap,null));
} else {
return (new intemporal.store.InMemoryStore(self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__28968),null));
}
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null))], null),self__.__extmap));
}));

(intemporal.store.InMemoryStore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__28968){
var self__ = this;
var this__5322__auto____$1 = this;
return (new intemporal.store.InMemoryStore(self__.state,G__28968,self__.__extmap,self__.__hash));
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
intemporal.store.map__GT_InMemoryStore = (function intemporal$store$map__GT_InMemoryStore(G__28972){
var extmap__5365__auto__ = (function (){var G__29201 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28972,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.record_QMARK_(G__28972)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29201);
} else {
return G__29201;
}
})();
return (new intemporal.store.InMemoryStore(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__28972),null,cljs.core.not_empty(extmap__5365__auto__),null));
});


//# sourceMappingURL=intemporal.store.js.map
