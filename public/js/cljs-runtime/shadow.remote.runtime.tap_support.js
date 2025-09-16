goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37572,p__37573){
var map__37574 = p__37572;
var map__37574__$1 = cljs.core.__destructure_map(map__37574);
var svc = map__37574__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37575 = p__37573;
var map__37575__$1 = cljs.core.__destructure_map(map__37575);
var msg = map__37575__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37575__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37575__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37575__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37575__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37593,p__37594){
var map__37595 = p__37593;
var map__37595__$1 = cljs.core.__destructure_map(map__37595);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37595__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37596 = p__37594;
var map__37596__$1 = cljs.core.__destructure_map(map__37596);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37596__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37625,p__37626){
var map__37627 = p__37625;
var map__37627__$1 = cljs.core.__destructure_map(map__37627);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37627__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37627__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37630 = p__37626;
var map__37630__$1 = cljs.core.__destructure_map(map__37630);
var msg = map__37630__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37630__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37639,tid){
var map__37641 = p__37639;
var map__37641__$1 = cljs.core.__destructure_map(map__37641);
var svc = map__37641__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37641__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37650 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37651 = null;
var count__37652 = (0);
var i__37653 = (0);
while(true){
if((i__37653 < count__37652)){
var vec__37737 = chunk__37651.cljs$core$IIndexed$_nth$arity$2(null,i__37653);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37737,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37737,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37833 = seq__37650;
var G__37834 = chunk__37651;
var G__37835 = count__37652;
var G__37836 = (i__37653 + (1));
seq__37650 = G__37833;
chunk__37651 = G__37834;
count__37652 = G__37835;
i__37653 = G__37836;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37650);
if(temp__5825__auto__){
var seq__37650__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37650__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37650__$1);
var G__37837 = cljs.core.chunk_rest(seq__37650__$1);
var G__37838 = c__5548__auto__;
var G__37839 = cljs.core.count(c__5548__auto__);
var G__37840 = (0);
seq__37650 = G__37837;
chunk__37651 = G__37838;
count__37652 = G__37839;
i__37653 = G__37840;
continue;
} else {
var vec__37742 = cljs.core.first(seq__37650__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37742,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37742,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37842 = cljs.core.next(seq__37650__$1);
var G__37843 = null;
var G__37844 = (0);
var G__37845 = (0);
seq__37650 = G__37842;
chunk__37651 = G__37843;
count__37652 = G__37844;
i__37653 = G__37845;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37644_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37644_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37645_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37645_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37646_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37646_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37647_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37647_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37785){
var map__37788 = p__37785;
var map__37788__$1 = cljs.core.__destructure_map(map__37788);
var svc = map__37788__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37788__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37788__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
