goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37008,p__37009){
var map__37010 = p__37008;
var map__37010__$1 = cljs.core.__destructure_map(map__37010);
var svc = map__37010__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37010__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37010__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37010__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37011 = p__37009;
var map__37011__$1 = cljs.core.__destructure_map(map__37011);
var msg = map__37011__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37011__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37011__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37011__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37011__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37025,p__37026){
var map__37027 = p__37025;
var map__37027__$1 = cljs.core.__destructure_map(map__37027);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37027__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37028 = p__37026;
var map__37028__$1 = cljs.core.__destructure_map(map__37028);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37028__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37029,p__37030){
var map__37031 = p__37029;
var map__37031__$1 = cljs.core.__destructure_map(map__37031);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37031__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37031__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37032 = p__37030;
var map__37032__$1 = cljs.core.__destructure_map(map__37032);
var msg = map__37032__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37032__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37033,tid){
var map__37034 = p__37033;
var map__37034__$1 = cljs.core.__destructure_map(map__37034);
var svc = map__37034__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37034__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37039 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37040 = null;
var count__37041 = (0);
var i__37042 = (0);
while(true){
if((i__37042 < count__37041)){
var vec__37049 = chunk__37040.cljs$core$IIndexed$_nth$arity$2(null,i__37042);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37049,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37049,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37059 = seq__37039;
var G__37060 = chunk__37040;
var G__37061 = count__37041;
var G__37062 = (i__37042 + (1));
seq__37039 = G__37059;
chunk__37040 = G__37060;
count__37041 = G__37061;
i__37042 = G__37062;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37039);
if(temp__5825__auto__){
var seq__37039__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37039__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37039__$1);
var G__37064 = cljs.core.chunk_rest(seq__37039__$1);
var G__37065 = c__5548__auto__;
var G__37066 = cljs.core.count(c__5548__auto__);
var G__37067 = (0);
seq__37039 = G__37064;
chunk__37040 = G__37065;
count__37041 = G__37066;
i__37042 = G__37067;
continue;
} else {
var vec__37052 = cljs.core.first(seq__37039__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37052,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37052,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37068 = cljs.core.next(seq__37039__$1);
var G__37069 = null;
var G__37070 = (0);
var G__37071 = (0);
seq__37039 = G__37068;
chunk__37040 = G__37069;
count__37041 = G__37070;
i__37042 = G__37071;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37035_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37035_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37036_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37036_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37037_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37037_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37038_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37038_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37055){
var map__37056 = p__37055;
var map__37056__$1 = cljs.core.__destructure_map(map__37056);
var svc = map__37056__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37056__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37056__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
