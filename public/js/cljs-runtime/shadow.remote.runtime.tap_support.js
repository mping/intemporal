goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35798,p__35799){
var map__35800 = p__35798;
var map__35800__$1 = cljs.core.__destructure_map(map__35800);
var svc = map__35800__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35800__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35800__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35800__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35801 = p__35799;
var map__35801__$1 = cljs.core.__destructure_map(map__35801);
var msg = map__35801__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35801__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35801__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35801__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35801__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35809,p__35810){
var map__35812 = p__35809;
var map__35812__$1 = cljs.core.__destructure_map(map__35812);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35812__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35813 = p__35810;
var map__35813__$1 = cljs.core.__destructure_map(map__35813);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35813__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35840,p__35841){
var map__35842 = p__35840;
var map__35842__$1 = cljs.core.__destructure_map(map__35842);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35843 = p__35841;
var map__35843__$1 = cljs.core.__destructure_map(map__35843);
var msg = map__35843__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35843__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35867,tid){
var map__35869 = p__35867;
var map__35869__$1 = cljs.core.__destructure_map(map__35869);
var svc = map__35869__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35869__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35891 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35892 = null;
var count__35893 = (0);
var i__35894 = (0);
while(true){
if((i__35894 < count__35893)){
var vec__35908 = chunk__35892.cljs$core$IIndexed$_nth$arity$2(null,i__35894);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35908,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35908,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35951 = seq__35891;
var G__35952 = chunk__35892;
var G__35953 = count__35893;
var G__35954 = (i__35894 + (1));
seq__35891 = G__35951;
chunk__35892 = G__35952;
count__35893 = G__35953;
i__35894 = G__35954;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35891);
if(temp__5804__auto__){
var seq__35891__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35891__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35891__$1);
var G__35956 = cljs.core.chunk_rest(seq__35891__$1);
var G__35957 = c__5568__auto__;
var G__35958 = cljs.core.count(c__5568__auto__);
var G__35959 = (0);
seq__35891 = G__35956;
chunk__35892 = G__35957;
count__35893 = G__35958;
i__35894 = G__35959;
continue;
} else {
var vec__35925 = cljs.core.first(seq__35891__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35925,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35925,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35960 = cljs.core.next(seq__35891__$1);
var G__35961 = null;
var G__35962 = (0);
var G__35963 = (0);
seq__35891 = G__35960;
chunk__35892 = G__35961;
count__35893 = G__35962;
i__35894 = G__35963;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35876_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35876_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35878_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35878_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35879_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35879_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35880_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35880_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35933){
var map__35934 = p__35933;
var map__35934__$1 = cljs.core.__destructure_map(map__35934);
var svc = map__35934__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35934__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35934__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
