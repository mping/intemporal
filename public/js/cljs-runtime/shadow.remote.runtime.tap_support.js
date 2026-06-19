goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37624,p__37625){
var map__37626 = p__37624;
var map__37626__$1 = cljs.core.__destructure_map(map__37626);
var svc = map__37626__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37626__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37626__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37626__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37627 = p__37625;
var map__37627__$1 = cljs.core.__destructure_map(map__37627);
var msg = map__37627__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37627__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37627__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37627__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37627__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37636,p__37637){
var map__37639 = p__37636;
var map__37639__$1 = cljs.core.__destructure_map(map__37639);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37639__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37640 = p__37637;
var map__37640__$1 = cljs.core.__destructure_map(map__37640);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37640__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37645,p__37646){
var map__37647 = p__37645;
var map__37647__$1 = cljs.core.__destructure_map(map__37647);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37647__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37647__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37649 = p__37646;
var map__37649__$1 = cljs.core.__destructure_map(map__37649);
var msg = map__37649__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37649__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37656,tid){
var map__37657 = p__37656;
var map__37657__$1 = cljs.core.__destructure_map(map__37657);
var svc = map__37657__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37657__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37674 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37675 = null;
var count__37676 = (0);
var i__37677 = (0);
while(true){
if((i__37677 < count__37676)){
var vec__37688 = chunk__37675.cljs$core$IIndexed$_nth$arity$2(null,i__37677);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37688,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37688,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37721 = seq__37674;
var G__37722 = chunk__37675;
var G__37723 = count__37676;
var G__37724 = (i__37677 + (1));
seq__37674 = G__37721;
chunk__37675 = G__37722;
count__37676 = G__37723;
i__37677 = G__37724;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37674);
if(temp__5825__auto__){
var seq__37674__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37674__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37674__$1);
var G__37725 = cljs.core.chunk_rest(seq__37674__$1);
var G__37726 = c__5548__auto__;
var G__37727 = cljs.core.count(c__5548__auto__);
var G__37728 = (0);
seq__37674 = G__37725;
chunk__37675 = G__37726;
count__37676 = G__37727;
i__37677 = G__37728;
continue;
} else {
var vec__37693 = cljs.core.first(seq__37674__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37693,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37693,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37729 = cljs.core.next(seq__37674__$1);
var G__37730 = null;
var G__37731 = (0);
var G__37732 = (0);
seq__37674 = G__37729;
chunk__37675 = G__37730;
count__37676 = G__37731;
i__37677 = G__37732;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37661_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37661_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37663_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37663_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37664_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37664_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37665_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37665_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37703){
var map__37705 = p__37703;
var map__37705__$1 = cljs.core.__destructure_map(map__37705);
var svc = map__37705__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37705__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37705__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
