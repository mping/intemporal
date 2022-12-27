goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35858,p__35859){
var map__35860 = p__35858;
var map__35860__$1 = cljs.core.__destructure_map(map__35860);
var svc = map__35860__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35860__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35860__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35860__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35861 = p__35859;
var map__35861__$1 = cljs.core.__destructure_map(map__35861);
var msg = map__35861__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35861__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35861__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35861__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35861__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35862,p__35863){
var map__35864 = p__35862;
var map__35864__$1 = cljs.core.__destructure_map(map__35864);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35864__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35865 = p__35863;
var map__35865__$1 = cljs.core.__destructure_map(map__35865);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35865__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35868,p__35869){
var map__35870 = p__35868;
var map__35870__$1 = cljs.core.__destructure_map(map__35870);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35870__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35870__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35871 = p__35869;
var map__35871__$1 = cljs.core.__destructure_map(map__35871);
var msg = map__35871__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35871__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35873,tid){
var map__35874 = p__35873;
var map__35874__$1 = cljs.core.__destructure_map(map__35874);
var svc = map__35874__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35874__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35894 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35895 = null;
var count__35896 = (0);
var i__35897 = (0);
while(true){
if((i__35897 < count__35896)){
var vec__35914 = chunk__35895.cljs$core$IIndexed$_nth$arity$2(null,i__35897);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35914,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35914,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35952 = seq__35894;
var G__35953 = chunk__35895;
var G__35954 = count__35896;
var G__35955 = (i__35897 + (1));
seq__35894 = G__35952;
chunk__35895 = G__35953;
count__35896 = G__35954;
i__35897 = G__35955;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35894);
if(temp__5804__auto__){
var seq__35894__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35894__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35894__$1);
var G__35956 = cljs.core.chunk_rest(seq__35894__$1);
var G__35957 = c__5568__auto__;
var G__35958 = cljs.core.count(c__5568__auto__);
var G__35959 = (0);
seq__35894 = G__35956;
chunk__35895 = G__35957;
count__35896 = G__35958;
i__35897 = G__35959;
continue;
} else {
var vec__35922 = cljs.core.first(seq__35894__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35922,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35922,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35960 = cljs.core.next(seq__35894__$1);
var G__35961 = null;
var G__35962 = (0);
var G__35963 = (0);
seq__35894 = G__35960;
chunk__35895 = G__35961;
count__35896 = G__35962;
i__35897 = G__35963;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35878_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35878_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35879_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35879_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35880_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35880_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35881_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35881_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35928){
var map__35929 = p__35928;
var map__35929__$1 = cljs.core.__destructure_map(map__35929);
var svc = map__35929__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35929__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35929__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
