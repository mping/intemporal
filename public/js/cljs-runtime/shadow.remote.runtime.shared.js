goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__28753){
var map__28754 = p__28753;
var map__28754__$1 = cljs.core.__destructure_map(map__28754);
var runtime = map__28754__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28754__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_28981 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_28981)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__28756 = runtime;
var G__28757 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_28981);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__28756,G__28757) : shadow.remote.runtime.shared.process.call(null, G__28756,G__28757));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__28769,res){
var map__28772 = p__28769;
var map__28772__$1 = cljs.core.__destructure_map(map__28772);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28772__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28772__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__28775 = res;
var G__28775__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28775,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__28775);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28775__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__28775__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__28783 = arguments.length;
switch (G__28783) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__28786,msg,handlers,timeout_after_ms){
var map__28787 = p__28786;
var map__28787__$1 = cljs.core.__destructure_map(map__28787);
var runtime = map__28787__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28787__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var args__5732__auto__ = [];
var len__5726__auto___29007 = arguments.length;
var i__5727__auto___29008 = (0);
while(true){
if((i__5727__auto___29008 < len__5726__auto___29007)){
args__5732__auto__.push((arguments[i__5727__auto___29008]));

var G__29009 = (i__5727__auto___29008 + (1));
i__5727__auto___29008 = G__29009;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28797,ev,args){
var map__28798 = p__28797;
var map__28798__$1 = cljs.core.__destructure_map(map__28798);
var runtime = map__28798__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28798__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__28800 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28803 = null;
var count__28804 = (0);
var i__28805 = (0);
while(true){
if((i__28805 < count__28804)){
var ext = chunk__28803.cljs$core$IIndexed$_nth$arity$2(null, i__28805);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29010 = seq__28800;
var G__29011 = chunk__28803;
var G__29012 = count__28804;
var G__29013 = (i__28805 + (1));
seq__28800 = G__29010;
chunk__28803 = G__29011;
count__28804 = G__29012;
i__28805 = G__29013;
continue;
} else {
var G__29014 = seq__28800;
var G__29015 = chunk__28803;
var G__29016 = count__28804;
var G__29017 = (i__28805 + (1));
seq__28800 = G__29014;
chunk__28803 = G__29015;
count__28804 = G__29016;
i__28805 = G__29017;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28800);
if(temp__5804__auto__){
var seq__28800__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28800__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28800__$1);
var G__29018 = cljs.core.chunk_rest(seq__28800__$1);
var G__29019 = c__5525__auto__;
var G__29020 = cljs.core.count(c__5525__auto__);
var G__29021 = (0);
seq__28800 = G__29018;
chunk__28803 = G__29019;
count__28804 = G__29020;
i__28805 = G__29021;
continue;
} else {
var ext = cljs.core.first(seq__28800__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29028 = cljs.core.next(seq__28800__$1);
var G__29029 = null;
var G__29030 = (0);
var G__29031 = (0);
seq__28800 = G__29028;
chunk__28803 = G__29029;
count__28804 = G__29030;
i__28805 = G__29031;
continue;
} else {
var G__29032 = cljs.core.next(seq__28800__$1);
var G__29033 = null;
var G__29034 = (0);
var G__29035 = (0);
seq__28800 = G__29032;
chunk__28803 = G__29033;
count__28804 = G__29034;
i__28805 = G__29035;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq28794){
var G__28795 = cljs.core.first(seq28794);
var seq28794__$1 = cljs.core.next(seq28794);
var G__28796 = cljs.core.first(seq28794__$1);
var seq28794__$2 = cljs.core.next(seq28794__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28795,G__28796,seq28794__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__28833,p__28834){
var map__28838 = p__28833;
var map__28838__$1 = cljs.core.__destructure_map(map__28838);
var runtime = map__28838__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28838__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28839 = p__28834;
var map__28839__$1 = cljs.core.__destructure_map(map__28839);
var msg = map__28839__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28839__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__28841 = cljs.core.deref(state_ref);
var map__28841__$1 = cljs.core.__destructure_map(map__28841);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28841__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28841__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__28856,msg){
var map__28857 = p__28856;
var map__28857__$1 = cljs.core.__destructure_map(map__28857);
var runtime = map__28857__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28857__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__28874,key,p__28875){
var map__28880 = p__28874;
var map__28880__$1 = cljs.core.__destructure_map(map__28880);
var state = map__28880__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28880__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__28881 = p__28875;
var map__28881__$1 = cljs.core.__destructure_map(map__28881);
var spec = map__28881__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28881__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28881__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__28894,key,spec){
var map__28895 = p__28894;
var map__28895__$1 = cljs.core.__destructure_map(map__28895);
var runtime = map__28895__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28895__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___29090 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___29090 == null)){
} else {
var on_welcome_29091 = temp__5808__auto___29090;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_29091.cljs$core$IFn$_invoke$arity$0 ? on_welcome_29091.cljs$core$IFn$_invoke$arity$0() : on_welcome_29091.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__28900_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__28900_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__28902_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__28902_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__28904_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__28904_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__28905_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__28905_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__28906_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__28906_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__28921,key){
var map__28923 = p__28921;
var map__28923__$1 = cljs.core.__destructure_map(map__28923);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28923__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__28932,msg){
var map__28936 = p__28932;
var map__28936__$1 = cljs.core.__destructure_map(map__28936);
var runtime = map__28936__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28936__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__28940,p__28941){
var map__28942 = p__28940;
var map__28942__$1 = cljs.core.__destructure_map(map__28942);
var runtime = map__28942__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28942__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28943 = p__28941;
var map__28943__$1 = cljs.core.__destructure_map(map__28943);
var msg = map__28943__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28943__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28943__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
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
var seq__28946 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28948 = null;
var count__28949 = (0);
var i__28950 = (0);
while(true){
if((i__28950 < count__28949)){
var map__28957 = chunk__28948.cljs$core$IIndexed$_nth$arity$2(null, i__28950);
var map__28957__$1 = cljs.core.__destructure_map(map__28957);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28957__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__29117 = seq__28946;
var G__29118 = chunk__28948;
var G__29119 = count__28949;
var G__29120 = (i__28950 + (1));
seq__28946 = G__29117;
chunk__28948 = G__29118;
count__28949 = G__29119;
i__28950 = G__29120;
continue;
} else {
var G__29121 = seq__28946;
var G__29122 = chunk__28948;
var G__29123 = count__28949;
var G__29124 = (i__28950 + (1));
seq__28946 = G__29121;
chunk__28948 = G__29122;
count__28949 = G__29123;
i__28950 = G__29124;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28946);
if(temp__5804__auto__){
var seq__28946__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28946__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28946__$1);
var G__29125 = cljs.core.chunk_rest(seq__28946__$1);
var G__29126 = c__5525__auto__;
var G__29127 = cljs.core.count(c__5525__auto__);
var G__29128 = (0);
seq__28946 = G__29125;
chunk__28948 = G__29126;
count__28949 = G__29127;
i__28950 = G__29128;
continue;
} else {
var map__28963 = cljs.core.first(seq__28946__$1);
var map__28963__$1 = cljs.core.__destructure_map(map__28963);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28963__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__29130 = cljs.core.next(seq__28946__$1);
var G__29131 = null;
var G__29132 = (0);
var G__29133 = (0);
seq__28946 = G__29130;
chunk__28948 = G__29131;
count__28949 = G__29132;
i__28950 = G__29133;
continue;
} else {
var G__29134 = cljs.core.next(seq__28946__$1);
var G__29135 = null;
var G__29136 = (0);
var G__29137 = (0);
seq__28946 = G__29134;
chunk__28948 = G__29135;
count__28949 = G__29136;
i__28950 = G__29137;
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
