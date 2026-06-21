goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__28755){
var map__28757 = p__28755;
var map__28757__$1 = cljs.core.__destructure_map(map__28757);
var runtime = map__28757__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28757__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_29183 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_29183)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__28769 = runtime;
var G__28770 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_29183);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__28769,G__28770) : shadow.remote.runtime.shared.process.call(null,G__28769,G__28770));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__28774,res){
var map__28775 = p__28774;
var map__28775__$1 = cljs.core.__destructure_map(map__28775);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28775__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28775__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__28777 = res;
var G__28777__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28777,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__28777);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28777__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__28777__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__28784 = arguments.length;
switch (G__28784) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__28792,msg,handlers,timeout_after_ms){
var map__28793 = p__28792;
var map__28793__$1 = cljs.core.__destructure_map(map__28793);
var runtime = map__28793__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28793__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___29189 = arguments.length;
var i__5750__auto___29190 = (0);
while(true){
if((i__5750__auto___29190 < len__5749__auto___29189)){
args__5755__auto__.push((arguments[i__5750__auto___29190]));

var G__29191 = (i__5750__auto___29190 + (1));
i__5750__auto___29190 = G__29191;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28823,ev,args){
var map__28828 = p__28823;
var map__28828__$1 = cljs.core.__destructure_map(map__28828);
var runtime = map__28828__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28828__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__28837 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28840 = null;
var count__28841 = (0);
var i__28842 = (0);
while(true){
if((i__28842 < count__28841)){
var ext = chunk__28840.cljs$core$IIndexed$_nth$arity$2(null,i__28842);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29197 = seq__28837;
var G__29198 = chunk__28840;
var G__29199 = count__28841;
var G__29200 = (i__28842 + (1));
seq__28837 = G__29197;
chunk__28840 = G__29198;
count__28841 = G__29199;
i__28842 = G__29200;
continue;
} else {
var G__29201 = seq__28837;
var G__29202 = chunk__28840;
var G__29203 = count__28841;
var G__29204 = (i__28842 + (1));
seq__28837 = G__29201;
chunk__28840 = G__29202;
count__28841 = G__29203;
i__28842 = G__29204;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28837);
if(temp__5825__auto__){
var seq__28837__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28837__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28837__$1);
var G__29216 = cljs.core.chunk_rest(seq__28837__$1);
var G__29217 = c__5548__auto__;
var G__29218 = cljs.core.count(c__5548__auto__);
var G__29219 = (0);
seq__28837 = G__29216;
chunk__28840 = G__29217;
count__28841 = G__29218;
i__28842 = G__29219;
continue;
} else {
var ext = cljs.core.first(seq__28837__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29223 = cljs.core.next(seq__28837__$1);
var G__29224 = null;
var G__29225 = (0);
var G__29226 = (0);
seq__28837 = G__29223;
chunk__28840 = G__29224;
count__28841 = G__29225;
i__28842 = G__29226;
continue;
} else {
var G__29231 = cljs.core.next(seq__28837__$1);
var G__29232 = null;
var G__29233 = (0);
var G__29234 = (0);
seq__28837 = G__29231;
chunk__28840 = G__29232;
count__28841 = G__29233;
i__28842 = G__29234;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq28802){
var G__28803 = cljs.core.first(seq28802);
var seq28802__$1 = cljs.core.next(seq28802);
var G__28804 = cljs.core.first(seq28802__$1);
var seq28802__$2 = cljs.core.next(seq28802__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28803,G__28804,seq28802__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__28930,p__28931){
var map__28932 = p__28930;
var map__28932__$1 = cljs.core.__destructure_map(map__28932);
var runtime = map__28932__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28932__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28933 = p__28931;
var map__28933__$1 = cljs.core.__destructure_map(map__28933);
var msg = map__28933__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28933__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__28937 = cljs.core.deref(state_ref);
var map__28937__$1 = cljs.core.__destructure_map(map__28937);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28937__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28937__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__28972,msg){
var map__28974 = p__28972;
var map__28974__$1 = cljs.core.__destructure_map(map__28974);
var runtime = map__28974__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28974__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__28991,key,p__28992){
var map__28993 = p__28991;
var map__28993__$1 = cljs.core.__destructure_map(map__28993);
var state = map__28993__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28993__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__28994 = p__28992;
var map__28994__$1 = cljs.core.__destructure_map(map__28994);
var spec = map__28994__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28994__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28994__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__29024,key,spec){
var map__29028 = p__29024;
var map__29028__$1 = cljs.core.__destructure_map(map__29028);
var runtime = map__29028__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29028__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___29355 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___29355 == null)){
} else {
var on_welcome_29357 = temp__5829__auto___29355;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_29357.cljs$core$IFn$_invoke$arity$0 ? on_welcome_29357.cljs$core$IFn$_invoke$arity$0() : on_welcome_29357.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__29048_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__29048_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__29049_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__29049_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__29050_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__29050_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__29051_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__29051_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__29052_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__29052_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__29089,key){
var map__29090 = p__29089;
var map__29090__$1 = cljs.core.__destructure_map(map__29090);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29090__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__29094,msg){
var map__29095 = p__29094;
var map__29095__$1 = cljs.core.__destructure_map(map__29095);
var runtime = map__29095__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29095__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__29099,p__29100){
var map__29104 = p__29099;
var map__29104__$1 = cljs.core.__destructure_map(map__29104);
var runtime = map__29104__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29104__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29105 = p__29100;
var map__29105__$1 = cljs.core.__destructure_map(map__29105);
var msg = map__29105__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29105__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29105__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__29128 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29130 = null;
var count__29131 = (0);
var i__29132 = (0);
while(true){
if((i__29132 < count__29131)){
var map__29163 = chunk__29130.cljs$core$IIndexed$_nth$arity$2(null,i__29132);
var map__29163__$1 = cljs.core.__destructure_map(map__29163);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29163__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29392 = seq__29128;
var G__29393 = chunk__29130;
var G__29394 = count__29131;
var G__29395 = (i__29132 + (1));
seq__29128 = G__29392;
chunk__29130 = G__29393;
count__29131 = G__29394;
i__29132 = G__29395;
continue;
} else {
var G__29396 = seq__29128;
var G__29397 = chunk__29130;
var G__29398 = count__29131;
var G__29399 = (i__29132 + (1));
seq__29128 = G__29396;
chunk__29130 = G__29397;
count__29131 = G__29398;
i__29132 = G__29399;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29128);
if(temp__5825__auto__){
var seq__29128__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29128__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__29128__$1);
var G__29403 = cljs.core.chunk_rest(seq__29128__$1);
var G__29404 = c__5548__auto__;
var G__29405 = cljs.core.count(c__5548__auto__);
var G__29406 = (0);
seq__29128 = G__29403;
chunk__29130 = G__29404;
count__29131 = G__29405;
i__29132 = G__29406;
continue;
} else {
var map__29170 = cljs.core.first(seq__29128__$1);
var map__29170__$1 = cljs.core.__destructure_map(map__29170);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29170__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29411 = cljs.core.next(seq__29128__$1);
var G__29412 = null;
var G__29413 = (0);
var G__29414 = (0);
seq__29128 = G__29411;
chunk__29130 = G__29412;
count__29131 = G__29413;
i__29132 = G__29414;
continue;
} else {
var G__29416 = cljs.core.next(seq__29128__$1);
var G__29417 = null;
var G__29418 = (0);
var G__29419 = (0);
seq__29128 = G__29416;
chunk__29130 = G__29417;
count__29131 = G__29418;
i__29132 = G__29419;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
