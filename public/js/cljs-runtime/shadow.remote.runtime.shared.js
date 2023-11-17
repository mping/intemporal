goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__27394,res){
var map__27395 = p__27394;
var map__27395__$1 = cljs.core.__destructure_map(map__27395);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27395__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27395__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__27398 = res;
var G__27398__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27398,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__27398);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27398__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__27398__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__27401 = arguments.length;
switch (G__27401) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__27404,msg,handlers,timeout_after_ms){
var map__27406 = p__27404;
var map__27406__$1 = cljs.core.__destructure_map(map__27406);
var runtime = map__27406__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27406__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27599 = arguments.length;
var i__5770__auto___27603 = (0);
while(true){
if((i__5770__auto___27603 < len__5769__auto___27599)){
args__5775__auto__.push((arguments[i__5770__auto___27603]));

var G__27605 = (i__5770__auto___27603 + (1));
i__5770__auto___27603 = G__27605;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__27418,ev,args){
var map__27419 = p__27418;
var map__27419__$1 = cljs.core.__destructure_map(map__27419);
var runtime = map__27419__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27419__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__27420 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__27423 = null;
var count__27424 = (0);
var i__27425 = (0);
while(true){
if((i__27425 < count__27424)){
var ext = chunk__27423.cljs$core$IIndexed$_nth$arity$2(null,i__27425);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__27617 = seq__27420;
var G__27618 = chunk__27423;
var G__27619 = count__27424;
var G__27620 = (i__27425 + (1));
seq__27420 = G__27617;
chunk__27423 = G__27618;
count__27424 = G__27619;
i__27425 = G__27620;
continue;
} else {
var G__27621 = seq__27420;
var G__27622 = chunk__27423;
var G__27623 = count__27424;
var G__27624 = (i__27425 + (1));
seq__27420 = G__27621;
chunk__27423 = G__27622;
count__27424 = G__27623;
i__27425 = G__27624;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27420);
if(temp__5804__auto__){
var seq__27420__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27420__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27420__$1);
var G__27630 = cljs.core.chunk_rest(seq__27420__$1);
var G__27631 = c__5568__auto__;
var G__27632 = cljs.core.count(c__5568__auto__);
var G__27633 = (0);
seq__27420 = G__27630;
chunk__27423 = G__27631;
count__27424 = G__27632;
i__27425 = G__27633;
continue;
} else {
var ext = cljs.core.first(seq__27420__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__27634 = cljs.core.next(seq__27420__$1);
var G__27635 = null;
var G__27636 = (0);
var G__27637 = (0);
seq__27420 = G__27634;
chunk__27423 = G__27635;
count__27424 = G__27636;
i__27425 = G__27637;
continue;
} else {
var G__27639 = cljs.core.next(seq__27420__$1);
var G__27640 = null;
var G__27641 = (0);
var G__27642 = (0);
seq__27420 = G__27639;
chunk__27423 = G__27640;
count__27424 = G__27641;
i__27425 = G__27642;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq27409){
var G__27410 = cljs.core.first(seq27409);
var seq27409__$1 = cljs.core.next(seq27409);
var G__27411 = cljs.core.first(seq27409__$1);
var seq27409__$2 = cljs.core.next(seq27409__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27410,G__27411,seq27409__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__27438,p__27439){
var map__27440 = p__27438;
var map__27440__$1 = cljs.core.__destructure_map(map__27440);
var runtime = map__27440__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27440__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__27441 = p__27439;
var map__27441__$1 = cljs.core.__destructure_map(map__27441);
var msg = map__27441__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27441__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__27442 = cljs.core.deref(state_ref);
var map__27442__$1 = cljs.core.__destructure_map(map__27442);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27442__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27442__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__27446){
var map__27447 = p__27446;
var map__27447__$1 = cljs.core.__destructure_map(map__27447);
var runtime = map__27447__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27447__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__27452,msg){
var map__27453 = p__27452;
var map__27453__$1 = cljs.core.__destructure_map(map__27453);
var runtime = map__27453__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27453__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__27487,key,p__27488){
var map__27489 = p__27487;
var map__27489__$1 = cljs.core.__destructure_map(map__27489);
var state = map__27489__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27489__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__27490 = p__27488;
var map__27490__$1 = cljs.core.__destructure_map(map__27490);
var spec = map__27490__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27490__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__27496,key,spec){
var map__27497 = p__27496;
var map__27497__$1 = cljs.core.__destructure_map(map__27497);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27497__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__27507_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__27507_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__27508_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__27508_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__27509_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__27509_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__27510_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__27510_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__27511_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__27511_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__27519,key){
var map__27520 = p__27519;
var map__27520__$1 = cljs.core.__destructure_map(map__27520);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27520__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__27521,msg){
var map__27522 = p__27521;
var map__27522__$1 = cljs.core.__destructure_map(map__27522);
var runtime = map__27522__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27522__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__27523,p__27524){
var map__27528 = p__27523;
var map__27528__$1 = cljs.core.__destructure_map(map__27528);
var runtime = map__27528__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27528__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__27529 = p__27524;
var map__27529__$1 = cljs.core.__destructure_map(map__27529);
var msg = map__27529__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27529__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27529__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__27542 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__27544 = null;
var count__27545 = (0);
var i__27546 = (0);
while(true){
if((i__27546 < count__27545)){
var map__27558 = chunk__27544.cljs$core$IIndexed$_nth$arity$2(null,i__27546);
var map__27558__$1 = cljs.core.__destructure_map(map__27558);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27558__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__27723 = seq__27542;
var G__27724 = chunk__27544;
var G__27725 = count__27545;
var G__27726 = (i__27546 + (1));
seq__27542 = G__27723;
chunk__27544 = G__27724;
count__27545 = G__27725;
i__27546 = G__27726;
continue;
} else {
var G__27727 = seq__27542;
var G__27728 = chunk__27544;
var G__27729 = count__27545;
var G__27730 = (i__27546 + (1));
seq__27542 = G__27727;
chunk__27544 = G__27728;
count__27545 = G__27729;
i__27546 = G__27730;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27542);
if(temp__5804__auto__){
var seq__27542__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27542__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27542__$1);
var G__27731 = cljs.core.chunk_rest(seq__27542__$1);
var G__27732 = c__5568__auto__;
var G__27733 = cljs.core.count(c__5568__auto__);
var G__27734 = (0);
seq__27542 = G__27731;
chunk__27544 = G__27732;
count__27545 = G__27733;
i__27546 = G__27734;
continue;
} else {
var map__27563 = cljs.core.first(seq__27542__$1);
var map__27563__$1 = cljs.core.__destructure_map(map__27563);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27563__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__27744 = cljs.core.next(seq__27542__$1);
var G__27745 = null;
var G__27746 = (0);
var G__27747 = (0);
seq__27542 = G__27744;
chunk__27544 = G__27745;
count__27545 = G__27746;
i__27546 = G__27747;
continue;
} else {
var G__27748 = cljs.core.next(seq__27542__$1);
var G__27749 = null;
var G__27750 = (0);
var G__27751 = (0);
seq__27542 = G__27748;
chunk__27544 = G__27749;
count__27545 = G__27750;
i__27546 = G__27751;
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
