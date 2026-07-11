goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31159){
var map__31160 = p__31159;
var map__31160__$1 = cljs.core.__destructure_map(map__31160);
var runtime = map__31160__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31160__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_31373 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_31373)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__31173 = runtime;
var G__31174 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_31373);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__31173,G__31174) : shadow.remote.runtime.shared.process.call(null,G__31173,G__31174));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31178,res){
var map__31179 = p__31178;
var map__31179__$1 = cljs.core.__destructure_map(map__31179);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31179__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31179__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31182 = res;
var G__31182__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31182,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31182);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31182__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31182__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31188 = arguments.length;
switch (G__31188) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31190,msg,handlers,timeout_after_ms){
var map__31191 = p__31190;
var map__31191__$1 = cljs.core.__destructure_map(map__31191);
var runtime = map__31191__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31191__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5749__auto___31388 = arguments.length;
var i__5750__auto___31389 = (0);
while(true){
if((i__5750__auto___31389 < len__5749__auto___31388)){
args__5755__auto__.push((arguments[i__5750__auto___31389]));

var G__31390 = (i__5750__auto___31389 + (1));
i__5750__auto___31389 = G__31390;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31202,ev,args){
var map__31203 = p__31202;
var map__31203__$1 = cljs.core.__destructure_map(map__31203);
var runtime = map__31203__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31203__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31204 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31207 = null;
var count__31208 = (0);
var i__31209 = (0);
while(true){
if((i__31209 < count__31208)){
var ext = chunk__31207.cljs$core$IIndexed$_nth$arity$2(null,i__31209);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31391 = seq__31204;
var G__31392 = chunk__31207;
var G__31393 = count__31208;
var G__31394 = (i__31209 + (1));
seq__31204 = G__31391;
chunk__31207 = G__31392;
count__31208 = G__31393;
i__31209 = G__31394;
continue;
} else {
var G__31395 = seq__31204;
var G__31396 = chunk__31207;
var G__31397 = count__31208;
var G__31398 = (i__31209 + (1));
seq__31204 = G__31395;
chunk__31207 = G__31396;
count__31208 = G__31397;
i__31209 = G__31398;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__31204);
if(temp__5825__auto__){
var seq__31204__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31204__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__31204__$1);
var G__31399 = cljs.core.chunk_rest(seq__31204__$1);
var G__31400 = c__5548__auto__;
var G__31401 = cljs.core.count(c__5548__auto__);
var G__31402 = (0);
seq__31204 = G__31399;
chunk__31207 = G__31400;
count__31208 = G__31401;
i__31209 = G__31402;
continue;
} else {
var ext = cljs.core.first(seq__31204__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31403 = cljs.core.next(seq__31204__$1);
var G__31404 = null;
var G__31405 = (0);
var G__31406 = (0);
seq__31204 = G__31403;
chunk__31207 = G__31404;
count__31208 = G__31405;
i__31209 = G__31406;
continue;
} else {
var G__31407 = cljs.core.next(seq__31204__$1);
var G__31408 = null;
var G__31409 = (0);
var G__31410 = (0);
seq__31204 = G__31407;
chunk__31207 = G__31408;
count__31208 = G__31409;
i__31209 = G__31410;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31198){
var G__31199 = cljs.core.first(seq31198);
var seq31198__$1 = cljs.core.next(seq31198);
var G__31200 = cljs.core.first(seq31198__$1);
var seq31198__$2 = cljs.core.next(seq31198__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31199,G__31200,seq31198__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31223,p__31224){
var map__31226 = p__31223;
var map__31226__$1 = cljs.core.__destructure_map(map__31226);
var runtime = map__31226__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31226__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31227 = p__31224;
var map__31227__$1 = cljs.core.__destructure_map(map__31227);
var msg = map__31227__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31227__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__31229 = cljs.core.deref(state_ref);
var map__31229__$1 = cljs.core.__destructure_map(map__31229);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31230,msg){
var map__31231 = p__31230;
var map__31231__$1 = cljs.core.__destructure_map(map__31231);
var runtime = map__31231__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31231__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31343,key,p__31344){
var map__31345 = p__31343;
var map__31345__$1 = cljs.core.__destructure_map(map__31345);
var state = map__31345__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31345__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31346 = p__31344;
var map__31346__$1 = cljs.core.__destructure_map(map__31346);
var spec = map__31346__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31346__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31346__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31347,key,spec){
var map__31348 = p__31347;
var map__31348__$1 = cljs.core.__destructure_map(map__31348);
var runtime = map__31348__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31348__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___31438 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___31438 == null)){
} else {
var on_welcome_31439 = temp__5829__auto___31438;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_31439.cljs$core$IFn$_invoke$arity$0 ? on_welcome_31439.cljs$core$IFn$_invoke$arity$0() : on_welcome_31439.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31349_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31349_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31350_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31350_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31351_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31351_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31352_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31352_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31353_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31353_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31355,key){
var map__31356 = p__31355;
var map__31356__$1 = cljs.core.__destructure_map(map__31356);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31356__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31357,msg){
var map__31358 = p__31357;
var map__31358__$1 = cljs.core.__destructure_map(map__31358);
var runtime = map__31358__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31358__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31359,p__31360){
var map__31361 = p__31359;
var map__31361__$1 = cljs.core.__destructure_map(map__31361);
var runtime = map__31361__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31361__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31362 = p__31360;
var map__31362__$1 = cljs.core.__destructure_map(map__31362);
var msg = map__31362__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31362__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31362__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__31363 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31365 = null;
var count__31366 = (0);
var i__31367 = (0);
while(true){
if((i__31367 < count__31366)){
var map__31371 = chunk__31365.cljs$core$IIndexed$_nth$arity$2(null,i__31367);
var map__31371__$1 = cljs.core.__destructure_map(map__31371);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31371__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31486 = seq__31363;
var G__31487 = chunk__31365;
var G__31488 = count__31366;
var G__31489 = (i__31367 + (1));
seq__31363 = G__31486;
chunk__31365 = G__31487;
count__31366 = G__31488;
i__31367 = G__31489;
continue;
} else {
var G__31490 = seq__31363;
var G__31491 = chunk__31365;
var G__31492 = count__31366;
var G__31493 = (i__31367 + (1));
seq__31363 = G__31490;
chunk__31365 = G__31491;
count__31366 = G__31492;
i__31367 = G__31493;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__31363);
if(temp__5825__auto__){
var seq__31363__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31363__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__31363__$1);
var G__31497 = cljs.core.chunk_rest(seq__31363__$1);
var G__31498 = c__5548__auto__;
var G__31499 = cljs.core.count(c__5548__auto__);
var G__31500 = (0);
seq__31363 = G__31497;
chunk__31365 = G__31498;
count__31366 = G__31499;
i__31367 = G__31500;
continue;
} else {
var map__31372 = cljs.core.first(seq__31363__$1);
var map__31372__$1 = cljs.core.__destructure_map(map__31372);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31372__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31502 = cljs.core.next(seq__31363__$1);
var G__31503 = null;
var G__31504 = (0);
var G__31505 = (0);
seq__31363 = G__31502;
chunk__31365 = G__31503;
count__31366 = G__31504;
i__31367 = G__31505;
continue;
} else {
var G__31506 = cljs.core.next(seq__31363__$1);
var G__31507 = null;
var G__31508 = (0);
var G__31509 = (0);
seq__31363 = G__31506;
chunk__31365 = G__31507;
count__31366 = G__31508;
i__31367 = G__31509;
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
