goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___42470 = arguments.length;
var i__5750__auto___42471 = (0);
while(true){
if((i__5750__auto___42471 < len__5749__auto___42470)){
args__5755__auto__.push((arguments[i__5750__auto___42471]));

var G__42472 = (i__5750__auto___42471 + (1));
i__5750__auto___42471 = G__42472;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41560){
var G__41561 = cljs.core.first(seq41560);
var seq41560__$1 = cljs.core.next(seq41560);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41561,seq41560__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41562 = cljs.core.seq(sources);
var chunk__41563 = null;
var count__41564 = (0);
var i__41565 = (0);
while(true){
if((i__41565 < count__41564)){
var map__41570 = chunk__41563.cljs$core$IIndexed$_nth$arity$2(null,i__41565);
var map__41570__$1 = cljs.core.__destructure_map(map__41570);
var src = map__41570__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41570__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41570__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41570__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41570__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41571){var e_42488 = e41571;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42488);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42488.message)].join('')));
}

var G__42489 = seq__41562;
var G__42490 = chunk__41563;
var G__42491 = count__41564;
var G__42492 = (i__41565 + (1));
seq__41562 = G__42489;
chunk__41563 = G__42490;
count__41564 = G__42491;
i__41565 = G__42492;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41562);
if(temp__5825__auto__){
var seq__41562__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41562__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__41562__$1);
var G__42493 = cljs.core.chunk_rest(seq__41562__$1);
var G__42494 = c__5548__auto__;
var G__42495 = cljs.core.count(c__5548__auto__);
var G__42496 = (0);
seq__41562 = G__42493;
chunk__41563 = G__42494;
count__41564 = G__42495;
i__41565 = G__42496;
continue;
} else {
var map__41572 = cljs.core.first(seq__41562__$1);
var map__41572__$1 = cljs.core.__destructure_map(map__41572);
var src = map__41572__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41572__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41572__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41572__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41572__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41573){var e_42499 = e41573;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42499);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42499.message)].join('')));
}

var G__42502 = cljs.core.next(seq__41562__$1);
var G__42503 = null;
var G__42504 = (0);
var G__42505 = (0);
seq__41562 = G__42502;
chunk__41563 = G__42503;
count__41564 = G__42504;
i__41565 = G__42505;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__41574 = cljs.core.seq(js_requires);
var chunk__41575 = null;
var count__41576 = (0);
var i__41577 = (0);
while(true){
if((i__41577 < count__41576)){
var js_ns = chunk__41575.cljs$core$IIndexed$_nth$arity$2(null,i__41577);
var require_str_42512 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42512);


var G__42514 = seq__41574;
var G__42515 = chunk__41575;
var G__42516 = count__41576;
var G__42517 = (i__41577 + (1));
seq__41574 = G__42514;
chunk__41575 = G__42515;
count__41576 = G__42516;
i__41577 = G__42517;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41574);
if(temp__5825__auto__){
var seq__41574__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41574__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__41574__$1);
var G__42522 = cljs.core.chunk_rest(seq__41574__$1);
var G__42523 = c__5548__auto__;
var G__42524 = cljs.core.count(c__5548__auto__);
var G__42525 = (0);
seq__41574 = G__42522;
chunk__41575 = G__42523;
count__41576 = G__42524;
i__41577 = G__42525;
continue;
} else {
var js_ns = cljs.core.first(seq__41574__$1);
var require_str_42526 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42526);


var G__42530 = cljs.core.next(seq__41574__$1);
var G__42531 = null;
var G__42532 = (0);
var G__42533 = (0);
seq__41574 = G__42530;
chunk__41575 = G__42531;
count__41576 = G__42532;
i__41577 = G__42533;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__41585){
var map__41586 = p__41585;
var map__41586__$1 = cljs.core.__destructure_map(map__41586);
var msg = map__41586__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41587(s__41588){
return (new cljs.core.LazySeq(null,(function (){
var s__41588__$1 = s__41588;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41588__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__41596 = cljs.core.first(xs__6385__auto__);
var map__41596__$1 = cljs.core.__destructure_map(map__41596);
var src = map__41596__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41596__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41596__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__41588__$1,map__41596,map__41596__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__41586,map__41586__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41587_$_iter__41589(s__41590){
return (new cljs.core.LazySeq(null,((function (s__41588__$1,map__41596,map__41596__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__41586,map__41586__$1,msg,info,reload_info){
return (function (){
var s__41590__$1 = s__41590;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__41590__$1);
if(temp__5825__auto____$1){
var s__41590__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41590__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__41590__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__41592 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__41591 = (0);
while(true){
if((i__41591 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__41591);
cljs.core.chunk_append(b__41592,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42556 = (i__41591 + (1));
i__41591 = G__42556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41592),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41587_$_iter__41589(cljs.core.chunk_rest(s__41590__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41592),null);
}
} else {
var warning = cljs.core.first(s__41590__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41587_$_iter__41589(cljs.core.rest(s__41590__$2)));
}
} else {
return null;
}
break;
}
});})(s__41588__$1,map__41596,map__41596__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__41586,map__41586__$1,msg,info,reload_info))
,null,null));
});})(s__41588__$1,map__41596,map__41596__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__41586,map__41586__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41587(cljs.core.rest(s__41588__$1)));
} else {
var G__42562 = cljs.core.rest(s__41588__$1);
s__41588__$1 = G__42562;
continue;
}
} else {
var G__42564 = cljs.core.rest(s__41588__$1);
s__41588__$1 = G__42564;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__41602_42567 = cljs.core.seq(warnings);
var chunk__41603_42568 = null;
var count__41604_42569 = (0);
var i__41605_42570 = (0);
while(true){
if((i__41605_42570 < count__41604_42569)){
var map__41615_42573 = chunk__41603_42568.cljs$core$IIndexed$_nth$arity$2(null,i__41605_42570);
var map__41615_42574__$1 = cljs.core.__destructure_map(map__41615_42573);
var w_42575 = map__41615_42574__$1;
var msg_42576__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41615_42574__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41615_42574__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41615_42574__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41615_42574__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42579)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42577),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42578),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42576__$1)].join(''));


var G__42587 = seq__41602_42567;
var G__42588 = chunk__41603_42568;
var G__42589 = count__41604_42569;
var G__42590 = (i__41605_42570 + (1));
seq__41602_42567 = G__42587;
chunk__41603_42568 = G__42588;
count__41604_42569 = G__42589;
i__41605_42570 = G__42590;
continue;
} else {
var temp__5825__auto___42591 = cljs.core.seq(seq__41602_42567);
if(temp__5825__auto___42591){
var seq__41602_42593__$1 = temp__5825__auto___42591;
if(cljs.core.chunked_seq_QMARK_(seq__41602_42593__$1)){
var c__5548__auto___42594 = cljs.core.chunk_first(seq__41602_42593__$1);
var G__42596 = cljs.core.chunk_rest(seq__41602_42593__$1);
var G__42597 = c__5548__auto___42594;
var G__42598 = cljs.core.count(c__5548__auto___42594);
var G__42599 = (0);
seq__41602_42567 = G__42596;
chunk__41603_42568 = G__42597;
count__41604_42569 = G__42598;
i__41605_42570 = G__42599;
continue;
} else {
var map__41617_42602 = cljs.core.first(seq__41602_42593__$1);
var map__41617_42603__$1 = cljs.core.__destructure_map(map__41617_42602);
var w_42604 = map__41617_42603__$1;
var msg_42605__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41617_42603__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41617_42603__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41617_42603__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41617_42603__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42608)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42606),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42607),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42605__$1)].join(''));


var G__42612 = cljs.core.next(seq__41602_42593__$1);
var G__42613 = null;
var G__42614 = (0);
var G__42615 = (0);
seq__41602_42567 = G__42612;
chunk__41603_42568 = G__42613;
count__41604_42569 = G__42614;
i__41605_42570 = G__42615;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__41584_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41584_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5023__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__41633 = node_uri;
G__41633.setQuery(null);

G__41633.setPath(new$);

return G__41633;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41638){
var map__41639 = p__41638;
var map__41639__$1 = cljs.core.__destructure_map(map__41639);
var msg = map__41639__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41639__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41639__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__41640 = cljs.core.seq(updates);
var chunk__41642 = null;
var count__41643 = (0);
var i__41644 = (0);
while(true){
if((i__41644 < count__41643)){
var path = chunk__41642.cljs$core$IIndexed$_nth$arity$2(null,i__41644);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41879_42618 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41883_42619 = null;
var count__41884_42620 = (0);
var i__41885_42621 = (0);
while(true){
if((i__41885_42621 < count__41884_42620)){
var node_42622 = chunk__41883_42619.cljs$core$IIndexed$_nth$arity$2(null,i__41885_42621);
if(cljs.core.not(node_42622.shadow$old)){
var path_match_42623 = shadow.cljs.devtools.client.browser.match_paths(node_42622.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42623)){
var new_link_42624 = (function (){var G__41926 = node_42622.cloneNode(true);
G__41926.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42623),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41926;
})();
(node_42622.shadow$old = true);

(new_link_42624.onload = ((function (seq__41879_42618,chunk__41883_42619,count__41884_42620,i__41885_42621,seq__41640,chunk__41642,count__41643,i__41644,new_link_42624,path_match_42623,node_42622,path,map__41639,map__41639__$1,msg,updates,reload_info){
return (function (e){
var seq__41927_42627 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41929_42628 = null;
var count__41930_42629 = (0);
var i__41931_42630 = (0);
while(true){
if((i__41931_42630 < count__41930_42629)){
var map__41937_42631 = chunk__41929_42628.cljs$core$IIndexed$_nth$arity$2(null,i__41931_42630);
var map__41937_42632__$1 = cljs.core.__destructure_map(map__41937_42631);
var task_42633 = map__41937_42632__$1;
var fn_str_42634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41937_42632__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41937_42632__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42636 = goog.getObjectByName(fn_str_42634,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42635)].join(''));

(fn_obj_42636.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42636.cljs$core$IFn$_invoke$arity$2(path,new_link_42624) : fn_obj_42636.call(null,path,new_link_42624));


var G__42637 = seq__41927_42627;
var G__42638 = chunk__41929_42628;
var G__42639 = count__41930_42629;
var G__42640 = (i__41931_42630 + (1));
seq__41927_42627 = G__42637;
chunk__41929_42628 = G__42638;
count__41930_42629 = G__42639;
i__41931_42630 = G__42640;
continue;
} else {
var temp__5825__auto___42647 = cljs.core.seq(seq__41927_42627);
if(temp__5825__auto___42647){
var seq__41927_42652__$1 = temp__5825__auto___42647;
if(cljs.core.chunked_seq_QMARK_(seq__41927_42652__$1)){
var c__5548__auto___42659 = cljs.core.chunk_first(seq__41927_42652__$1);
var G__42662 = cljs.core.chunk_rest(seq__41927_42652__$1);
var G__42663 = c__5548__auto___42659;
var G__42664 = cljs.core.count(c__5548__auto___42659);
var G__42666 = (0);
seq__41927_42627 = G__42662;
chunk__41929_42628 = G__42663;
count__41930_42629 = G__42664;
i__41931_42630 = G__42666;
continue;
} else {
var map__41941_42674 = cljs.core.first(seq__41927_42652__$1);
var map__41941_42675__$1 = cljs.core.__destructure_map(map__41941_42674);
var task_42676 = map__41941_42675__$1;
var fn_str_42677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41941_42675__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41941_42675__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42691 = goog.getObjectByName(fn_str_42677,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42678)].join(''));

(fn_obj_42691.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42691.cljs$core$IFn$_invoke$arity$2(path,new_link_42624) : fn_obj_42691.call(null,path,new_link_42624));


var G__42694 = cljs.core.next(seq__41927_42652__$1);
var G__42695 = null;
var G__42696 = (0);
var G__42697 = (0);
seq__41927_42627 = G__42694;
chunk__41929_42628 = G__42695;
count__41930_42629 = G__42696;
i__41931_42630 = G__42697;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42622);
});})(seq__41879_42618,chunk__41883_42619,count__41884_42620,i__41885_42621,seq__41640,chunk__41642,count__41643,i__41644,new_link_42624,path_match_42623,node_42622,path,map__41639,map__41639__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42623], 0));

goog.dom.insertSiblingAfter(new_link_42624,node_42622);


var G__42699 = seq__41879_42618;
var G__42700 = chunk__41883_42619;
var G__42701 = count__41884_42620;
var G__42702 = (i__41885_42621 + (1));
seq__41879_42618 = G__42699;
chunk__41883_42619 = G__42700;
count__41884_42620 = G__42701;
i__41885_42621 = G__42702;
continue;
} else {
var G__42703 = seq__41879_42618;
var G__42704 = chunk__41883_42619;
var G__42705 = count__41884_42620;
var G__42706 = (i__41885_42621 + (1));
seq__41879_42618 = G__42703;
chunk__41883_42619 = G__42704;
count__41884_42620 = G__42705;
i__41885_42621 = G__42706;
continue;
}
} else {
var G__42707 = seq__41879_42618;
var G__42708 = chunk__41883_42619;
var G__42709 = count__41884_42620;
var G__42710 = (i__41885_42621 + (1));
seq__41879_42618 = G__42707;
chunk__41883_42619 = G__42708;
count__41884_42620 = G__42709;
i__41885_42621 = G__42710;
continue;
}
} else {
var temp__5825__auto___42711 = cljs.core.seq(seq__41879_42618);
if(temp__5825__auto___42711){
var seq__41879_42712__$1 = temp__5825__auto___42711;
if(cljs.core.chunked_seq_QMARK_(seq__41879_42712__$1)){
var c__5548__auto___42713 = cljs.core.chunk_first(seq__41879_42712__$1);
var G__42714 = cljs.core.chunk_rest(seq__41879_42712__$1);
var G__42715 = c__5548__auto___42713;
var G__42716 = cljs.core.count(c__5548__auto___42713);
var G__42717 = (0);
seq__41879_42618 = G__42714;
chunk__41883_42619 = G__42715;
count__41884_42620 = G__42716;
i__41885_42621 = G__42717;
continue;
} else {
var node_42718 = cljs.core.first(seq__41879_42712__$1);
if(cljs.core.not(node_42718.shadow$old)){
var path_match_42719 = shadow.cljs.devtools.client.browser.match_paths(node_42718.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42719)){
var new_link_42720 = (function (){var G__41944 = node_42718.cloneNode(true);
G__41944.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42719),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41944;
})();
(node_42718.shadow$old = true);

(new_link_42720.onload = ((function (seq__41879_42618,chunk__41883_42619,count__41884_42620,i__41885_42621,seq__41640,chunk__41642,count__41643,i__41644,new_link_42720,path_match_42719,node_42718,seq__41879_42712__$1,temp__5825__auto___42711,path,map__41639,map__41639__$1,msg,updates,reload_info){
return (function (e){
var seq__41946_42723 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41949_42724 = null;
var count__41950_42725 = (0);
var i__41951_42726 = (0);
while(true){
if((i__41951_42726 < count__41950_42725)){
var map__41960_42727 = chunk__41949_42724.cljs$core$IIndexed$_nth$arity$2(null,i__41951_42726);
var map__41960_42728__$1 = cljs.core.__destructure_map(map__41960_42727);
var task_42729 = map__41960_42728__$1;
var fn_str_42730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41960_42728__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41960_42728__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42734 = goog.getObjectByName(fn_str_42730,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42731)].join(''));

(fn_obj_42734.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42734.cljs$core$IFn$_invoke$arity$2(path,new_link_42720) : fn_obj_42734.call(null,path,new_link_42720));


var G__42735 = seq__41946_42723;
var G__42736 = chunk__41949_42724;
var G__42737 = count__41950_42725;
var G__42738 = (i__41951_42726 + (1));
seq__41946_42723 = G__42735;
chunk__41949_42724 = G__42736;
count__41950_42725 = G__42737;
i__41951_42726 = G__42738;
continue;
} else {
var temp__5825__auto___42739__$1 = cljs.core.seq(seq__41946_42723);
if(temp__5825__auto___42739__$1){
var seq__41946_42740__$1 = temp__5825__auto___42739__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41946_42740__$1)){
var c__5548__auto___42741 = cljs.core.chunk_first(seq__41946_42740__$1);
var G__42742 = cljs.core.chunk_rest(seq__41946_42740__$1);
var G__42743 = c__5548__auto___42741;
var G__42744 = cljs.core.count(c__5548__auto___42741);
var G__42745 = (0);
seq__41946_42723 = G__42742;
chunk__41949_42724 = G__42743;
count__41950_42725 = G__42744;
i__41951_42726 = G__42745;
continue;
} else {
var map__41965_42746 = cljs.core.first(seq__41946_42740__$1);
var map__41965_42747__$1 = cljs.core.__destructure_map(map__41965_42746);
var task_42748 = map__41965_42747__$1;
var fn_str_42749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41965_42747__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41965_42747__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42751 = goog.getObjectByName(fn_str_42749,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42750)].join(''));

(fn_obj_42751.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42751.cljs$core$IFn$_invoke$arity$2(path,new_link_42720) : fn_obj_42751.call(null,path,new_link_42720));


var G__42752 = cljs.core.next(seq__41946_42740__$1);
var G__42753 = null;
var G__42754 = (0);
var G__42755 = (0);
seq__41946_42723 = G__42752;
chunk__41949_42724 = G__42753;
count__41950_42725 = G__42754;
i__41951_42726 = G__42755;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42718);
});})(seq__41879_42618,chunk__41883_42619,count__41884_42620,i__41885_42621,seq__41640,chunk__41642,count__41643,i__41644,new_link_42720,path_match_42719,node_42718,seq__41879_42712__$1,temp__5825__auto___42711,path,map__41639,map__41639__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42719], 0));

goog.dom.insertSiblingAfter(new_link_42720,node_42718);


var G__42756 = cljs.core.next(seq__41879_42712__$1);
var G__42757 = null;
var G__42758 = (0);
var G__42759 = (0);
seq__41879_42618 = G__42756;
chunk__41883_42619 = G__42757;
count__41884_42620 = G__42758;
i__41885_42621 = G__42759;
continue;
} else {
var G__42760 = cljs.core.next(seq__41879_42712__$1);
var G__42761 = null;
var G__42762 = (0);
var G__42763 = (0);
seq__41879_42618 = G__42760;
chunk__41883_42619 = G__42761;
count__41884_42620 = G__42762;
i__41885_42621 = G__42763;
continue;
}
} else {
var G__42764 = cljs.core.next(seq__41879_42712__$1);
var G__42765 = null;
var G__42766 = (0);
var G__42767 = (0);
seq__41879_42618 = G__42764;
chunk__41883_42619 = G__42765;
count__41884_42620 = G__42766;
i__41885_42621 = G__42767;
continue;
}
}
} else {
}
}
break;
}


var G__42768 = seq__41640;
var G__42769 = chunk__41642;
var G__42770 = count__41643;
var G__42771 = (i__41644 + (1));
seq__41640 = G__42768;
chunk__41642 = G__42769;
count__41643 = G__42770;
i__41644 = G__42771;
continue;
} else {
var G__42772 = seq__41640;
var G__42773 = chunk__41642;
var G__42774 = count__41643;
var G__42775 = (i__41644 + (1));
seq__41640 = G__42772;
chunk__41642 = G__42773;
count__41643 = G__42774;
i__41644 = G__42775;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41640);
if(temp__5825__auto__){
var seq__41640__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41640__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__41640__$1);
var G__42777 = cljs.core.chunk_rest(seq__41640__$1);
var G__42778 = c__5548__auto__;
var G__42779 = cljs.core.count(c__5548__auto__);
var G__42780 = (0);
seq__41640 = G__42777;
chunk__41642 = G__42778;
count__41643 = G__42779;
i__41644 = G__42780;
continue;
} else {
var path = cljs.core.first(seq__41640__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41967_42781 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41972_42782 = null;
var count__41973_42783 = (0);
var i__41974_42784 = (0);
while(true){
if((i__41974_42784 < count__41973_42783)){
var node_42786 = chunk__41972_42782.cljs$core$IIndexed$_nth$arity$2(null,i__41974_42784);
if(cljs.core.not(node_42786.shadow$old)){
var path_match_42791 = shadow.cljs.devtools.client.browser.match_paths(node_42786.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42791)){
var new_link_42793 = (function (){var G__42125 = node_42786.cloneNode(true);
G__42125.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42791),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42125;
})();
(node_42786.shadow$old = true);

(new_link_42793.onload = ((function (seq__41967_42781,chunk__41972_42782,count__41973_42783,i__41974_42784,seq__41640,chunk__41642,count__41643,i__41644,new_link_42793,path_match_42791,node_42786,path,seq__41640__$1,temp__5825__auto__,map__41639,map__41639__$1,msg,updates,reload_info){
return (function (e){
var seq__42132_42799 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42134_42800 = null;
var count__42135_42801 = (0);
var i__42136_42802 = (0);
while(true){
if((i__42136_42802 < count__42135_42801)){
var map__42173_42804 = chunk__42134_42800.cljs$core$IIndexed$_nth$arity$2(null,i__42136_42802);
var map__42173_42805__$1 = cljs.core.__destructure_map(map__42173_42804);
var task_42806 = map__42173_42805__$1;
var fn_str_42807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42173_42805__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42173_42805__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42812 = goog.getObjectByName(fn_str_42807,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42808)].join(''));

(fn_obj_42812.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42812.cljs$core$IFn$_invoke$arity$2(path,new_link_42793) : fn_obj_42812.call(null,path,new_link_42793));


var G__42813 = seq__42132_42799;
var G__42814 = chunk__42134_42800;
var G__42815 = count__42135_42801;
var G__42816 = (i__42136_42802 + (1));
seq__42132_42799 = G__42813;
chunk__42134_42800 = G__42814;
count__42135_42801 = G__42815;
i__42136_42802 = G__42816;
continue;
} else {
var temp__5825__auto___42818__$1 = cljs.core.seq(seq__42132_42799);
if(temp__5825__auto___42818__$1){
var seq__42132_42820__$1 = temp__5825__auto___42818__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42132_42820__$1)){
var c__5548__auto___42821 = cljs.core.chunk_first(seq__42132_42820__$1);
var G__42822 = cljs.core.chunk_rest(seq__42132_42820__$1);
var G__42823 = c__5548__auto___42821;
var G__42824 = cljs.core.count(c__5548__auto___42821);
var G__42825 = (0);
seq__42132_42799 = G__42822;
chunk__42134_42800 = G__42823;
count__42135_42801 = G__42824;
i__42136_42802 = G__42825;
continue;
} else {
var map__42189_42826 = cljs.core.first(seq__42132_42820__$1);
var map__42189_42827__$1 = cljs.core.__destructure_map(map__42189_42826);
var task_42828 = map__42189_42827__$1;
var fn_str_42829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42189_42827__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42189_42827__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42838 = goog.getObjectByName(fn_str_42829,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42830)].join(''));

(fn_obj_42838.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42838.cljs$core$IFn$_invoke$arity$2(path,new_link_42793) : fn_obj_42838.call(null,path,new_link_42793));


var G__42840 = cljs.core.next(seq__42132_42820__$1);
var G__42841 = null;
var G__42842 = (0);
var G__42843 = (0);
seq__42132_42799 = G__42840;
chunk__42134_42800 = G__42841;
count__42135_42801 = G__42842;
i__42136_42802 = G__42843;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42786);
});})(seq__41967_42781,chunk__41972_42782,count__41973_42783,i__41974_42784,seq__41640,chunk__41642,count__41643,i__41644,new_link_42793,path_match_42791,node_42786,path,seq__41640__$1,temp__5825__auto__,map__41639,map__41639__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42791], 0));

goog.dom.insertSiblingAfter(new_link_42793,node_42786);


var G__42851 = seq__41967_42781;
var G__42852 = chunk__41972_42782;
var G__42853 = count__41973_42783;
var G__42854 = (i__41974_42784 + (1));
seq__41967_42781 = G__42851;
chunk__41972_42782 = G__42852;
count__41973_42783 = G__42853;
i__41974_42784 = G__42854;
continue;
} else {
var G__42855 = seq__41967_42781;
var G__42856 = chunk__41972_42782;
var G__42857 = count__41973_42783;
var G__42858 = (i__41974_42784 + (1));
seq__41967_42781 = G__42855;
chunk__41972_42782 = G__42856;
count__41973_42783 = G__42857;
i__41974_42784 = G__42858;
continue;
}
} else {
var G__42859 = seq__41967_42781;
var G__42860 = chunk__41972_42782;
var G__42861 = count__41973_42783;
var G__42862 = (i__41974_42784 + (1));
seq__41967_42781 = G__42859;
chunk__41972_42782 = G__42860;
count__41973_42783 = G__42861;
i__41974_42784 = G__42862;
continue;
}
} else {
var temp__5825__auto___42864__$1 = cljs.core.seq(seq__41967_42781);
if(temp__5825__auto___42864__$1){
var seq__41967_42865__$1 = temp__5825__auto___42864__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41967_42865__$1)){
var c__5548__auto___42866 = cljs.core.chunk_first(seq__41967_42865__$1);
var G__42867 = cljs.core.chunk_rest(seq__41967_42865__$1);
var G__42868 = c__5548__auto___42866;
var G__42869 = cljs.core.count(c__5548__auto___42866);
var G__42870 = (0);
seq__41967_42781 = G__42867;
chunk__41972_42782 = G__42868;
count__41973_42783 = G__42869;
i__41974_42784 = G__42870;
continue;
} else {
var node_42872 = cljs.core.first(seq__41967_42865__$1);
if(cljs.core.not(node_42872.shadow$old)){
var path_match_42875 = shadow.cljs.devtools.client.browser.match_paths(node_42872.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42875)){
var new_link_42876 = (function (){var G__42217 = node_42872.cloneNode(true);
G__42217.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42875),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42217;
})();
(node_42872.shadow$old = true);

(new_link_42876.onload = ((function (seq__41967_42781,chunk__41972_42782,count__41973_42783,i__41974_42784,seq__41640,chunk__41642,count__41643,i__41644,new_link_42876,path_match_42875,node_42872,seq__41967_42865__$1,temp__5825__auto___42864__$1,path,seq__41640__$1,temp__5825__auto__,map__41639,map__41639__$1,msg,updates,reload_info){
return (function (e){
var seq__42227_42879 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42229_42880 = null;
var count__42230_42881 = (0);
var i__42231_42882 = (0);
while(true){
if((i__42231_42882 < count__42230_42881)){
var map__42269_42887 = chunk__42229_42880.cljs$core$IIndexed$_nth$arity$2(null,i__42231_42882);
var map__42269_42888__$1 = cljs.core.__destructure_map(map__42269_42887);
var task_42889 = map__42269_42888__$1;
var fn_str_42890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42269_42888__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42269_42888__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42894 = goog.getObjectByName(fn_str_42890,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42891)].join(''));

(fn_obj_42894.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42894.cljs$core$IFn$_invoke$arity$2(path,new_link_42876) : fn_obj_42894.call(null,path,new_link_42876));


var G__42898 = seq__42227_42879;
var G__42899 = chunk__42229_42880;
var G__42900 = count__42230_42881;
var G__42901 = (i__42231_42882 + (1));
seq__42227_42879 = G__42898;
chunk__42229_42880 = G__42899;
count__42230_42881 = G__42900;
i__42231_42882 = G__42901;
continue;
} else {
var temp__5825__auto___42902__$2 = cljs.core.seq(seq__42227_42879);
if(temp__5825__auto___42902__$2){
var seq__42227_42903__$1 = temp__5825__auto___42902__$2;
if(cljs.core.chunked_seq_QMARK_(seq__42227_42903__$1)){
var c__5548__auto___42905 = cljs.core.chunk_first(seq__42227_42903__$1);
var G__42906 = cljs.core.chunk_rest(seq__42227_42903__$1);
var G__42907 = c__5548__auto___42905;
var G__42908 = cljs.core.count(c__5548__auto___42905);
var G__42909 = (0);
seq__42227_42879 = G__42906;
chunk__42229_42880 = G__42907;
count__42230_42881 = G__42908;
i__42231_42882 = G__42909;
continue;
} else {
var map__42286_42910 = cljs.core.first(seq__42227_42903__$1);
var map__42286_42911__$1 = cljs.core.__destructure_map(map__42286_42910);
var task_42912 = map__42286_42911__$1;
var fn_str_42913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42286_42911__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42286_42911__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42918 = goog.getObjectByName(fn_str_42913,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42914)].join(''));

(fn_obj_42918.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42918.cljs$core$IFn$_invoke$arity$2(path,new_link_42876) : fn_obj_42918.call(null,path,new_link_42876));


var G__42920 = cljs.core.next(seq__42227_42903__$1);
var G__42921 = null;
var G__42922 = (0);
var G__42923 = (0);
seq__42227_42879 = G__42920;
chunk__42229_42880 = G__42921;
count__42230_42881 = G__42922;
i__42231_42882 = G__42923;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42872);
});})(seq__41967_42781,chunk__41972_42782,count__41973_42783,i__41974_42784,seq__41640,chunk__41642,count__41643,i__41644,new_link_42876,path_match_42875,node_42872,seq__41967_42865__$1,temp__5825__auto___42864__$1,path,seq__41640__$1,temp__5825__auto__,map__41639,map__41639__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42875], 0));

goog.dom.insertSiblingAfter(new_link_42876,node_42872);


var G__42925 = cljs.core.next(seq__41967_42865__$1);
var G__42926 = null;
var G__42927 = (0);
var G__42928 = (0);
seq__41967_42781 = G__42925;
chunk__41972_42782 = G__42926;
count__41973_42783 = G__42927;
i__41974_42784 = G__42928;
continue;
} else {
var G__42930 = cljs.core.next(seq__41967_42865__$1);
var G__42931 = null;
var G__42932 = (0);
var G__42933 = (0);
seq__41967_42781 = G__42930;
chunk__41972_42782 = G__42931;
count__41973_42783 = G__42932;
i__41974_42784 = G__42933;
continue;
}
} else {
var G__42937 = cljs.core.next(seq__41967_42865__$1);
var G__42939 = null;
var G__42940 = (0);
var G__42941 = (0);
seq__41967_42781 = G__42937;
chunk__41972_42782 = G__42939;
count__41973_42783 = G__42940;
i__41974_42784 = G__42941;
continue;
}
}
} else {
}
}
break;
}


var G__42942 = cljs.core.next(seq__41640__$1);
var G__42943 = null;
var G__42944 = (0);
var G__42945 = (0);
seq__41640 = G__42942;
chunk__41642 = G__42943;
count__41643 = G__42944;
i__41644 = G__42945;
continue;
} else {
var G__42946 = cljs.core.next(seq__41640__$1);
var G__42947 = null;
var G__42948 = (0);
var G__42949 = (0);
seq__41640 = G__42946;
chunk__41642 = G__42947;
count__41643 = G__42948;
i__41644 = G__42949;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__42374 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__42374) : success.call(null,G__42374));
}catch (e42373){var e = e42373;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__42375,success,fail){
var map__42376 = p__42375;
var map__42376__$1 = cljs.core.__destructure_map(map__42376);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42376__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__42378 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__42378) : success.call(null,G__42378));
}catch (e42377){var e = e42377;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__42379,done,error){
var map__42380 = p__42379;
var map__42380__$1 = cljs.core.__destructure_map(map__42380);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42380__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__42381,done,error){
var map__42382 = p__42381;
var map__42382__$1 = cljs.core.__destructure_map(map__42382);
var msg = map__42382__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42382__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42382__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42382__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42384){
var map__42386 = p__42384;
var map__42386__$1 = cljs.core.__destructure_map(map__42386);
var src = map__42386__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42386__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__42387 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42387) : done.call(null,G__42387));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__42388){
var map__42389 = p__42388;
var map__42389__$1 = cljs.core.__destructure_map(map__42389);
var msg__$1 = map__42389__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42389__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e42390){var ex = e42390;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__42393){
var map__42394 = p__42393;
var map__42394__$1 = cljs.core.__destructure_map(map__42394);
var env = map__42394__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42394__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__42421){
var map__42423 = p__42421;
var map__42423__$1 = cljs.core.__destructure_map(map__42423);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42423__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42423__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__42441){
var map__42442 = p__42441;
var map__42442__$1 = cljs.core.__destructure_map(map__42442);
var svc = map__42442__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42442__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
