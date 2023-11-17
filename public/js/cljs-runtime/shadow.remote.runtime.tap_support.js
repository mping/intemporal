goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__28397,p__28398){
var map__28400 = p__28397;
var map__28400__$1 = cljs.core.__destructure_map(map__28400);
var svc = map__28400__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28400__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28400__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28400__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__28401 = p__28398;
var map__28401__$1 = cljs.core.__destructure_map(map__28401);
var msg = map__28401__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28401__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28401__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28401__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28401__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__28410,p__28411){
var map__28412 = p__28410;
var map__28412__$1 = cljs.core.__destructure_map(map__28412);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28412__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__28413 = p__28411;
var map__28413__$1 = cljs.core.__destructure_map(map__28413);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28413__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__28421,p__28422){
var map__28423 = p__28421;
var map__28423__$1 = cljs.core.__destructure_map(map__28423);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28423__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28423__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__28424 = p__28422;
var map__28424__$1 = cljs.core.__destructure_map(map__28424);
var msg = map__28424__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28424__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__28434,tid){
var map__28435 = p__28434;
var map__28435__$1 = cljs.core.__destructure_map(map__28435);
var svc = map__28435__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28435__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__28448 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__28449 = null;
var count__28450 = (0);
var i__28451 = (0);
while(true){
if((i__28451 < count__28450)){
var vec__28479 = chunk__28449.cljs$core$IIndexed$_nth$arity$2(null,i__28451);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28479,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28479,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__28549 = seq__28448;
var G__28550 = chunk__28449;
var G__28551 = count__28450;
var G__28552 = (i__28451 + (1));
seq__28448 = G__28549;
chunk__28449 = G__28550;
count__28450 = G__28551;
i__28451 = G__28552;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28448);
if(temp__5804__auto__){
var seq__28448__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28448__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28448__$1);
var G__28553 = cljs.core.chunk_rest(seq__28448__$1);
var G__28554 = c__5568__auto__;
var G__28555 = cljs.core.count(c__5568__auto__);
var G__28556 = (0);
seq__28448 = G__28553;
chunk__28449 = G__28554;
count__28450 = G__28555;
i__28451 = G__28556;
continue;
} else {
var vec__28483 = cljs.core.first(seq__28448__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28483,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28483,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__28557 = cljs.core.next(seq__28448__$1);
var G__28559 = null;
var G__28560 = (0);
var G__28561 = (0);
seq__28448 = G__28557;
chunk__28449 = G__28559;
count__28450 = G__28560;
i__28451 = G__28561;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__28439_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__28439_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__28440_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__28440_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__28441_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__28441_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__28442_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__28442_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__28498){
var map__28501 = p__28498;
var map__28501__$1 = cljs.core.__destructure_map(map__28501);
var svc = map__28501__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28501__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28501__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
