goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__30288){
var map__30289 = p__30288;
var map__30289__$1 = cljs.core.__destructure_map(map__30289);
var runtime = map__30289__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30289__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_30799 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_30799)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__30310 = runtime;
var G__30311 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_30799);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__30310,G__30311) : shadow.remote.runtime.shared.process.call(null,G__30310,G__30311));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__30314,res){
var map__30315 = p__30314;
var map__30315__$1 = cljs.core.__destructure_map(map__30315);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30315__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30315__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__30316 = res;
var G__30316__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30316,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__30316);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30316__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__30316__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__30338 = arguments.length;
switch (G__30338) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__30343,msg,handlers,timeout_after_ms){
var map__30344 = p__30343;
var map__30344__$1 = cljs.core.__destructure_map(map__30344);
var runtime = map__30344__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30344__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5749__auto___30839 = arguments.length;
var i__5750__auto___30840 = (0);
while(true){
if((i__5750__auto___30840 < len__5749__auto___30839)){
args__5755__auto__.push((arguments[i__5750__auto___30840]));

var G__30841 = (i__5750__auto___30840 + (1));
i__5750__auto___30840 = G__30841;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30411,ev,args){
var map__30417 = p__30411;
var map__30417__$1 = cljs.core.__destructure_map(map__30417);
var runtime = map__30417__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30417__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__30425 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30428 = null;
var count__30429 = (0);
var i__30430 = (0);
while(true){
if((i__30430 < count__30429)){
var ext = chunk__30428.cljs$core$IIndexed$_nth$arity$2(null,i__30430);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30848 = seq__30425;
var G__30849 = chunk__30428;
var G__30850 = count__30429;
var G__30851 = (i__30430 + (1));
seq__30425 = G__30848;
chunk__30428 = G__30849;
count__30429 = G__30850;
i__30430 = G__30851;
continue;
} else {
var G__30854 = seq__30425;
var G__30855 = chunk__30428;
var G__30856 = count__30429;
var G__30857 = (i__30430 + (1));
seq__30425 = G__30854;
chunk__30428 = G__30855;
count__30429 = G__30856;
i__30430 = G__30857;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30425);
if(temp__5825__auto__){
var seq__30425__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30425__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__30425__$1);
var G__30867 = cljs.core.chunk_rest(seq__30425__$1);
var G__30868 = c__5548__auto__;
var G__30869 = cljs.core.count(c__5548__auto__);
var G__30870 = (0);
seq__30425 = G__30867;
chunk__30428 = G__30868;
count__30429 = G__30869;
i__30430 = G__30870;
continue;
} else {
var ext = cljs.core.first(seq__30425__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30877 = cljs.core.next(seq__30425__$1);
var G__30878 = null;
var G__30879 = (0);
var G__30880 = (0);
seq__30425 = G__30877;
chunk__30428 = G__30878;
count__30429 = G__30879;
i__30430 = G__30880;
continue;
} else {
var G__30881 = cljs.core.next(seq__30425__$1);
var G__30882 = null;
var G__30883 = (0);
var G__30884 = (0);
seq__30425 = G__30881;
chunk__30428 = G__30882;
count__30429 = G__30883;
i__30430 = G__30884;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq30386){
var G__30387 = cljs.core.first(seq30386);
var seq30386__$1 = cljs.core.next(seq30386);
var G__30388 = cljs.core.first(seq30386__$1);
var seq30386__$2 = cljs.core.next(seq30386__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30387,G__30388,seq30386__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__30512,p__30513){
var map__30514 = p__30512;
var map__30514__$1 = cljs.core.__destructure_map(map__30514);
var runtime = map__30514__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30514__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30515 = p__30513;
var map__30515__$1 = cljs.core.__destructure_map(map__30515);
var msg = map__30515__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30515__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__30520 = cljs.core.deref(state_ref);
var map__30520__$1 = cljs.core.__destructure_map(map__30520);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30520__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30520__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__30537,msg){
var map__30538 = p__30537;
var map__30538__$1 = cljs.core.__destructure_map(map__30538);
var runtime = map__30538__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30538__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__30570,key,p__30571){
var map__30572 = p__30570;
var map__30572__$1 = cljs.core.__destructure_map(map__30572);
var state = map__30572__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30572__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__30573 = p__30571;
var map__30573__$1 = cljs.core.__destructure_map(map__30573);
var spec = map__30573__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30573__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30573__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__30593,key,spec){
var map__30594 = p__30593;
var map__30594__$1 = cljs.core.__destructure_map(map__30594);
var runtime = map__30594__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30594__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___30949 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___30949 == null)){
} else {
var on_welcome_30950 = temp__5829__auto___30949;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_30950.cljs$core$IFn$_invoke$arity$0 ? on_welcome_30950.cljs$core$IFn$_invoke$arity$0() : on_welcome_30950.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__30604_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__30604_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__30605_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__30605_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__30607_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__30607_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__30608_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__30608_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__30609_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__30609_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__30631,key){
var map__30633 = p__30631;
var map__30633__$1 = cljs.core.__destructure_map(map__30633);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30633__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__30648,msg){
var map__30652 = p__30648;
var map__30652__$1 = cljs.core.__destructure_map(map__30652);
var runtime = map__30652__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30652__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__30689,p__30690){
var map__30692 = p__30689;
var map__30692__$1 = cljs.core.__destructure_map(map__30692);
var runtime = map__30692__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30692__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30693 = p__30690;
var map__30693__$1 = cljs.core.__destructure_map(map__30693);
var msg = map__30693__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30693__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30693__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__30709 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30711 = null;
var count__30712 = (0);
var i__30713 = (0);
while(true){
if((i__30713 < count__30712)){
var map__30738 = chunk__30711.cljs$core$IIndexed$_nth$arity$2(null,i__30713);
var map__30738__$1 = cljs.core.__destructure_map(map__30738);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30738__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__30999 = seq__30709;
var G__31000 = chunk__30711;
var G__31001 = count__30712;
var G__31002 = (i__30713 + (1));
seq__30709 = G__30999;
chunk__30711 = G__31000;
count__30712 = G__31001;
i__30713 = G__31002;
continue;
} else {
var G__31003 = seq__30709;
var G__31004 = chunk__30711;
var G__31005 = count__30712;
var G__31006 = (i__30713 + (1));
seq__30709 = G__31003;
chunk__30711 = G__31004;
count__30712 = G__31005;
i__30713 = G__31006;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30709);
if(temp__5825__auto__){
var seq__30709__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30709__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__30709__$1);
var G__31016 = cljs.core.chunk_rest(seq__30709__$1);
var G__31017 = c__5548__auto__;
var G__31018 = cljs.core.count(c__5548__auto__);
var G__31019 = (0);
seq__30709 = G__31016;
chunk__30711 = G__31017;
count__30712 = G__31018;
i__30713 = G__31019;
continue;
} else {
var map__30761 = cljs.core.first(seq__30709__$1);
var map__30761__$1 = cljs.core.__destructure_map(map__30761);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30761__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31028 = cljs.core.next(seq__30709__$1);
var G__31029 = null;
var G__31030 = (0);
var G__31031 = (0);
seq__30709 = G__31028;
chunk__30711 = G__31029;
count__30712 = G__31030;
i__30713 = G__31031;
continue;
} else {
var G__31033 = cljs.core.next(seq__30709__$1);
var G__31034 = null;
var G__31035 = (0);
var G__31036 = (0);
seq__30709 = G__31033;
chunk__30711 = G__31034;
count__30712 = G__31035;
i__30713 = G__31036;
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
