goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___42472 = arguments.length;
var i__5750__auto___42473 = (0);
while(true){
if((i__5750__auto___42473 < len__5749__auto___42472)){
args__5755__auto__.push((arguments[i__5750__auto___42473]));

var G__42474 = (i__5750__auto___42473 + (1));
i__5750__auto___42473 = G__42474;
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

var G__42491 = seq__41562;
var G__42492 = chunk__41563;
var G__42493 = count__41564;
var G__42494 = (i__41565 + (1));
seq__41562 = G__42491;
chunk__41563 = G__42492;
count__41564 = G__42493;
i__41565 = G__42494;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41562);
if(temp__5825__auto__){
var seq__41562__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41562__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__41562__$1);
var G__42495 = cljs.core.chunk_rest(seq__41562__$1);
var G__42496 = c__5548__auto__;
var G__42497 = cljs.core.count(c__5548__auto__);
var G__42498 = (0);
seq__41562 = G__42495;
chunk__41563 = G__42496;
count__41564 = G__42497;
i__41565 = G__42498;
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
}catch (e41573){var e_42501 = e41573;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42501);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42501.message)].join('')));
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
var require_str_42516 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42516);


var G__42518 = seq__41574;
var G__42519 = chunk__41575;
var G__42520 = count__41576;
var G__42521 = (i__41577 + (1));
seq__41574 = G__42518;
chunk__41575 = G__42519;
count__41576 = G__42520;
i__41577 = G__42521;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41574);
if(temp__5825__auto__){
var seq__41574__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41574__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__41574__$1);
var G__42525 = cljs.core.chunk_rest(seq__41574__$1);
var G__42526 = c__5548__auto__;
var G__42527 = cljs.core.count(c__5548__auto__);
var G__42528 = (0);
seq__41574 = G__42525;
chunk__41575 = G__42526;
count__41576 = G__42527;
i__41577 = G__42528;
continue;
} else {
var js_ns = cljs.core.first(seq__41574__$1);
var require_str_42529 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42529);


var G__42532 = cljs.core.next(seq__41574__$1);
var G__42533 = null;
var G__42534 = (0);
var G__42535 = (0);
seq__41574 = G__42532;
chunk__41575 = G__42533;
count__41576 = G__42534;
i__41577 = G__42535;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__41579){
var map__41580 = p__41579;
var map__41580__$1 = cljs.core.__destructure_map(map__41580);
var msg = map__41580__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41580__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41580__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41581(s__41582){
return (new cljs.core.LazySeq(null,(function (){
var s__41582__$1 = s__41582;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41582__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__41587 = cljs.core.first(xs__6385__auto__);
var map__41587__$1 = cljs.core.__destructure_map(map__41587);
var src = map__41587__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41587__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41587__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__41582__$1,map__41587,map__41587__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__41580,map__41580__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41581_$_iter__41583(s__41584){
return (new cljs.core.LazySeq(null,((function (s__41582__$1,map__41587,map__41587__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__41580,map__41580__$1,msg,info,reload_info){
return (function (){
var s__41584__$1 = s__41584;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__41584__$1);
if(temp__5825__auto____$1){
var s__41584__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41584__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__41584__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__41586 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__41585 = (0);
while(true){
if((i__41585 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__41585);
cljs.core.chunk_append(b__41586,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42559 = (i__41585 + (1));
i__41585 = G__42559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41586),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41581_$_iter__41583(cljs.core.chunk_rest(s__41584__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41586),null);
}
} else {
var warning = cljs.core.first(s__41584__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41581_$_iter__41583(cljs.core.rest(s__41584__$2)));
}
} else {
return null;
}
break;
}
});})(s__41582__$1,map__41587,map__41587__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__41580,map__41580__$1,msg,info,reload_info))
,null,null));
});})(s__41582__$1,map__41587,map__41587__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__41580,map__41580__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41581(cljs.core.rest(s__41582__$1)));
} else {
var G__42565 = cljs.core.rest(s__41582__$1);
s__41582__$1 = G__42565;
continue;
}
} else {
var G__42566 = cljs.core.rest(s__41582__$1);
s__41582__$1 = G__42566;
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
var seq__41588_42569 = cljs.core.seq(warnings);
var chunk__41589_42570 = null;
var count__41590_42571 = (0);
var i__41591_42572 = (0);
while(true){
if((i__41591_42572 < count__41590_42571)){
var map__41600_42574 = chunk__41589_42570.cljs$core$IIndexed$_nth$arity$2(null,i__41591_42572);
var map__41600_42575__$1 = cljs.core.__destructure_map(map__41600_42574);
var w_42576 = map__41600_42575__$1;
var msg_42577__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41600_42575__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41600_42575__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41600_42575__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41600_42575__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42580)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42578),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42579),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42577__$1)].join(''));


var G__42588 = seq__41588_42569;
var G__42589 = chunk__41589_42570;
var G__42590 = count__41590_42571;
var G__42591 = (i__41591_42572 + (1));
seq__41588_42569 = G__42588;
chunk__41589_42570 = G__42589;
count__41590_42571 = G__42590;
i__41591_42572 = G__42591;
continue;
} else {
var temp__5825__auto___42592 = cljs.core.seq(seq__41588_42569);
if(temp__5825__auto___42592){
var seq__41588_42594__$1 = temp__5825__auto___42592;
if(cljs.core.chunked_seq_QMARK_(seq__41588_42594__$1)){
var c__5548__auto___42597 = cljs.core.chunk_first(seq__41588_42594__$1);
var G__42598 = cljs.core.chunk_rest(seq__41588_42594__$1);
var G__42599 = c__5548__auto___42597;
var G__42600 = cljs.core.count(c__5548__auto___42597);
var G__42601 = (0);
seq__41588_42569 = G__42598;
chunk__41589_42570 = G__42599;
count__41590_42571 = G__42600;
i__41591_42572 = G__42601;
continue;
} else {
var map__41605_42602 = cljs.core.first(seq__41588_42594__$1);
var map__41605_42603__$1 = cljs.core.__destructure_map(map__41605_42602);
var w_42604 = map__41605_42603__$1;
var msg_42605__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41605_42603__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41605_42603__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41605_42603__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41605_42603__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42609)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42607),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42608),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42605__$1)].join(''));


var G__42612 = cljs.core.next(seq__41588_42594__$1);
var G__42613 = null;
var G__42614 = (0);
var G__42615 = (0);
seq__41588_42569 = G__42612;
chunk__41589_42570 = G__42613;
count__41590_42571 = G__42614;
i__41591_42572 = G__42615;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__41578_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41578_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__41623 = node_uri;
G__41623.setQuery(null);

G__41623.setPath(new$);

return G__41623;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41628){
var map__41630 = p__41628;
var map__41630__$1 = cljs.core.__destructure_map(map__41630);
var msg = map__41630__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41630__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41630__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__41631 = cljs.core.seq(updates);
var chunk__41633 = null;
var count__41634 = (0);
var i__41635 = (0);
while(true){
if((i__41635 < count__41634)){
var path = chunk__41633.cljs$core$IIndexed$_nth$arity$2(null,i__41635);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41869_42618 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41873_42619 = null;
var count__41874_42620 = (0);
var i__41875_42621 = (0);
while(true){
if((i__41875_42621 < count__41874_42620)){
var node_42624 = chunk__41873_42619.cljs$core$IIndexed$_nth$arity$2(null,i__41875_42621);
if(cljs.core.not(node_42624.shadow$old)){
var path_match_42625 = shadow.cljs.devtools.client.browser.match_paths(node_42624.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42625)){
var new_link_42626 = (function (){var G__41917 = node_42624.cloneNode(true);
G__41917.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42625),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41917;
})();
(node_42624.shadow$old = true);

(new_link_42626.onload = ((function (seq__41869_42618,chunk__41873_42619,count__41874_42620,i__41875_42621,seq__41631,chunk__41633,count__41634,i__41635,new_link_42626,path_match_42625,node_42624,path,map__41630,map__41630__$1,msg,updates,reload_info){
return (function (e){
var seq__41919_42627 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41921_42628 = null;
var count__41922_42629 = (0);
var i__41923_42630 = (0);
while(true){
if((i__41923_42630 < count__41922_42629)){
var map__41939_42631 = chunk__41921_42628.cljs$core$IIndexed$_nth$arity$2(null,i__41923_42630);
var map__41939_42634__$1 = cljs.core.__destructure_map(map__41939_42631);
var task_42635 = map__41939_42634__$1;
var fn_str_42636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41939_42634__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41939_42634__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42652 = goog.getObjectByName(fn_str_42636,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42637)].join(''));

(fn_obj_42652.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42652.cljs$core$IFn$_invoke$arity$2(path,new_link_42626) : fn_obj_42652.call(null,path,new_link_42626));


var G__42668 = seq__41919_42627;
var G__42670 = chunk__41921_42628;
var G__42671 = count__41922_42629;
var G__42672 = (i__41923_42630 + (1));
seq__41919_42627 = G__42668;
chunk__41921_42628 = G__42670;
count__41922_42629 = G__42671;
i__41923_42630 = G__42672;
continue;
} else {
var temp__5825__auto___42679 = cljs.core.seq(seq__41919_42627);
if(temp__5825__auto___42679){
var seq__41919_42680__$1 = temp__5825__auto___42679;
if(cljs.core.chunked_seq_QMARK_(seq__41919_42680__$1)){
var c__5548__auto___42682 = cljs.core.chunk_first(seq__41919_42680__$1);
var G__42683 = cljs.core.chunk_rest(seq__41919_42680__$1);
var G__42684 = c__5548__auto___42682;
var G__42685 = cljs.core.count(c__5548__auto___42682);
var G__42686 = (0);
seq__41919_42627 = G__42683;
chunk__41921_42628 = G__42684;
count__41922_42629 = G__42685;
i__41923_42630 = G__42686;
continue;
} else {
var map__41942_42689 = cljs.core.first(seq__41919_42680__$1);
var map__41942_42690__$1 = cljs.core.__destructure_map(map__41942_42689);
var task_42691 = map__41942_42690__$1;
var fn_str_42692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41942_42690__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41942_42690__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42694 = goog.getObjectByName(fn_str_42692,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42693)].join(''));

(fn_obj_42694.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42694.cljs$core$IFn$_invoke$arity$2(path,new_link_42626) : fn_obj_42694.call(null,path,new_link_42626));


var G__42695 = cljs.core.next(seq__41919_42680__$1);
var G__42696 = null;
var G__42697 = (0);
var G__42698 = (0);
seq__41919_42627 = G__42695;
chunk__41921_42628 = G__42696;
count__41922_42629 = G__42697;
i__41923_42630 = G__42698;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42624);
});})(seq__41869_42618,chunk__41873_42619,count__41874_42620,i__41875_42621,seq__41631,chunk__41633,count__41634,i__41635,new_link_42626,path_match_42625,node_42624,path,map__41630,map__41630__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42625], 0));

goog.dom.insertSiblingAfter(new_link_42626,node_42624);


var G__42699 = seq__41869_42618;
var G__42700 = chunk__41873_42619;
var G__42701 = count__41874_42620;
var G__42702 = (i__41875_42621 + (1));
seq__41869_42618 = G__42699;
chunk__41873_42619 = G__42700;
count__41874_42620 = G__42701;
i__41875_42621 = G__42702;
continue;
} else {
var G__42703 = seq__41869_42618;
var G__42704 = chunk__41873_42619;
var G__42705 = count__41874_42620;
var G__42706 = (i__41875_42621 + (1));
seq__41869_42618 = G__42703;
chunk__41873_42619 = G__42704;
count__41874_42620 = G__42705;
i__41875_42621 = G__42706;
continue;
}
} else {
var G__42707 = seq__41869_42618;
var G__42708 = chunk__41873_42619;
var G__42709 = count__41874_42620;
var G__42710 = (i__41875_42621 + (1));
seq__41869_42618 = G__42707;
chunk__41873_42619 = G__42708;
count__41874_42620 = G__42709;
i__41875_42621 = G__42710;
continue;
}
} else {
var temp__5825__auto___42711 = cljs.core.seq(seq__41869_42618);
if(temp__5825__auto___42711){
var seq__41869_42712__$1 = temp__5825__auto___42711;
if(cljs.core.chunked_seq_QMARK_(seq__41869_42712__$1)){
var c__5548__auto___42715 = cljs.core.chunk_first(seq__41869_42712__$1);
var G__42716 = cljs.core.chunk_rest(seq__41869_42712__$1);
var G__42717 = c__5548__auto___42715;
var G__42718 = cljs.core.count(c__5548__auto___42715);
var G__42719 = (0);
seq__41869_42618 = G__42716;
chunk__41873_42619 = G__42717;
count__41874_42620 = G__42718;
i__41875_42621 = G__42719;
continue;
} else {
var node_42720 = cljs.core.first(seq__41869_42712__$1);
if(cljs.core.not(node_42720.shadow$old)){
var path_match_42721 = shadow.cljs.devtools.client.browser.match_paths(node_42720.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42721)){
var new_link_42722 = (function (){var G__41947 = node_42720.cloneNode(true);
G__41947.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42721),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41947;
})();
(node_42720.shadow$old = true);

(new_link_42722.onload = ((function (seq__41869_42618,chunk__41873_42619,count__41874_42620,i__41875_42621,seq__41631,chunk__41633,count__41634,i__41635,new_link_42722,path_match_42721,node_42720,seq__41869_42712__$1,temp__5825__auto___42711,path,map__41630,map__41630__$1,msg,updates,reload_info){
return (function (e){
var seq__41949_42725 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41951_42726 = null;
var count__41952_42727 = (0);
var i__41953_42728 = (0);
while(true){
if((i__41953_42728 < count__41952_42727)){
var map__41964_42729 = chunk__41951_42726.cljs$core$IIndexed$_nth$arity$2(null,i__41953_42728);
var map__41964_42730__$1 = cljs.core.__destructure_map(map__41964_42729);
var task_42731 = map__41964_42730__$1;
var fn_str_42732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41964_42730__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41964_42730__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42734 = goog.getObjectByName(fn_str_42732,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42733)].join(''));

(fn_obj_42734.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42734.cljs$core$IFn$_invoke$arity$2(path,new_link_42722) : fn_obj_42734.call(null,path,new_link_42722));


var G__42735 = seq__41949_42725;
var G__42736 = chunk__41951_42726;
var G__42737 = count__41952_42727;
var G__42738 = (i__41953_42728 + (1));
seq__41949_42725 = G__42735;
chunk__41951_42726 = G__42736;
count__41952_42727 = G__42737;
i__41953_42728 = G__42738;
continue;
} else {
var temp__5825__auto___42739__$1 = cljs.core.seq(seq__41949_42725);
if(temp__5825__auto___42739__$1){
var seq__41949_42740__$1 = temp__5825__auto___42739__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41949_42740__$1)){
var c__5548__auto___42741 = cljs.core.chunk_first(seq__41949_42740__$1);
var G__42742 = cljs.core.chunk_rest(seq__41949_42740__$1);
var G__42743 = c__5548__auto___42741;
var G__42744 = cljs.core.count(c__5548__auto___42741);
var G__42745 = (0);
seq__41949_42725 = G__42742;
chunk__41951_42726 = G__42743;
count__41952_42727 = G__42744;
i__41953_42728 = G__42745;
continue;
} else {
var map__41965_42746 = cljs.core.first(seq__41949_42740__$1);
var map__41965_42747__$1 = cljs.core.__destructure_map(map__41965_42746);
var task_42748 = map__41965_42747__$1;
var fn_str_42749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41965_42747__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41965_42747__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42752 = goog.getObjectByName(fn_str_42749,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42750)].join(''));

(fn_obj_42752.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42752.cljs$core$IFn$_invoke$arity$2(path,new_link_42722) : fn_obj_42752.call(null,path,new_link_42722));


var G__42753 = cljs.core.next(seq__41949_42740__$1);
var G__42754 = null;
var G__42755 = (0);
var G__42756 = (0);
seq__41949_42725 = G__42753;
chunk__41951_42726 = G__42754;
count__41952_42727 = G__42755;
i__41953_42728 = G__42756;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42720);
});})(seq__41869_42618,chunk__41873_42619,count__41874_42620,i__41875_42621,seq__41631,chunk__41633,count__41634,i__41635,new_link_42722,path_match_42721,node_42720,seq__41869_42712__$1,temp__5825__auto___42711,path,map__41630,map__41630__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42721], 0));

goog.dom.insertSiblingAfter(new_link_42722,node_42720);


var G__42762 = cljs.core.next(seq__41869_42712__$1);
var G__42763 = null;
var G__42764 = (0);
var G__42765 = (0);
seq__41869_42618 = G__42762;
chunk__41873_42619 = G__42763;
count__41874_42620 = G__42764;
i__41875_42621 = G__42765;
continue;
} else {
var G__42767 = cljs.core.next(seq__41869_42712__$1);
var G__42768 = null;
var G__42769 = (0);
var G__42770 = (0);
seq__41869_42618 = G__42767;
chunk__41873_42619 = G__42768;
count__41874_42620 = G__42769;
i__41875_42621 = G__42770;
continue;
}
} else {
var G__42771 = cljs.core.next(seq__41869_42712__$1);
var G__42772 = null;
var G__42773 = (0);
var G__42774 = (0);
seq__41869_42618 = G__42771;
chunk__41873_42619 = G__42772;
count__41874_42620 = G__42773;
i__41875_42621 = G__42774;
continue;
}
}
} else {
}
}
break;
}


var G__42776 = seq__41631;
var G__42777 = chunk__41633;
var G__42778 = count__41634;
var G__42779 = (i__41635 + (1));
seq__41631 = G__42776;
chunk__41633 = G__42777;
count__41634 = G__42778;
i__41635 = G__42779;
continue;
} else {
var G__42780 = seq__41631;
var G__42781 = chunk__41633;
var G__42782 = count__41634;
var G__42783 = (i__41635 + (1));
seq__41631 = G__42780;
chunk__41633 = G__42781;
count__41634 = G__42782;
i__41635 = G__42783;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41631);
if(temp__5825__auto__){
var seq__41631__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41631__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__41631__$1);
var G__42789 = cljs.core.chunk_rest(seq__41631__$1);
var G__42790 = c__5548__auto__;
var G__42791 = cljs.core.count(c__5548__auto__);
var G__42792 = (0);
seq__41631 = G__42789;
chunk__41633 = G__42790;
count__41634 = G__42791;
i__41635 = G__42792;
continue;
} else {
var path = cljs.core.first(seq__41631__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41973_42793 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41979_42794 = null;
var count__41980_42795 = (0);
var i__41981_42796 = (0);
while(true){
if((i__41981_42796 < count__41980_42795)){
var node_42800 = chunk__41979_42794.cljs$core$IIndexed$_nth$arity$2(null,i__41981_42796);
if(cljs.core.not(node_42800.shadow$old)){
var path_match_42801 = shadow.cljs.devtools.client.browser.match_paths(node_42800.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42801)){
var new_link_42804 = (function (){var G__42153 = node_42800.cloneNode(true);
G__42153.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42801),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42153;
})();
(node_42800.shadow$old = true);

(new_link_42804.onload = ((function (seq__41973_42793,chunk__41979_42794,count__41980_42795,i__41981_42796,seq__41631,chunk__41633,count__41634,i__41635,new_link_42804,path_match_42801,node_42800,path,seq__41631__$1,temp__5825__auto__,map__41630,map__41630__$1,msg,updates,reload_info){
return (function (e){
var seq__42163_42812 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42165_42813 = null;
var count__42166_42814 = (0);
var i__42167_42815 = (0);
while(true){
if((i__42167_42815 < count__42166_42814)){
var map__42196_42818 = chunk__42165_42813.cljs$core$IIndexed$_nth$arity$2(null,i__42167_42815);
var map__42196_42819__$1 = cljs.core.__destructure_map(map__42196_42818);
var task_42820 = map__42196_42819__$1;
var fn_str_42821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42196_42819__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42196_42819__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42830 = goog.getObjectByName(fn_str_42821,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42824)].join(''));

(fn_obj_42830.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42830.cljs$core$IFn$_invoke$arity$2(path,new_link_42804) : fn_obj_42830.call(null,path,new_link_42804));


var G__42832 = seq__42163_42812;
var G__42833 = chunk__42165_42813;
var G__42834 = count__42166_42814;
var G__42835 = (i__42167_42815 + (1));
seq__42163_42812 = G__42832;
chunk__42165_42813 = G__42833;
count__42166_42814 = G__42834;
i__42167_42815 = G__42835;
continue;
} else {
var temp__5825__auto___42836__$1 = cljs.core.seq(seq__42163_42812);
if(temp__5825__auto___42836__$1){
var seq__42163_42839__$1 = temp__5825__auto___42836__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42163_42839__$1)){
var c__5548__auto___42840 = cljs.core.chunk_first(seq__42163_42839__$1);
var G__42841 = cljs.core.chunk_rest(seq__42163_42839__$1);
var G__42842 = c__5548__auto___42840;
var G__42843 = cljs.core.count(c__5548__auto___42840);
var G__42844 = (0);
seq__42163_42812 = G__42841;
chunk__42165_42813 = G__42842;
count__42166_42814 = G__42843;
i__42167_42815 = G__42844;
continue;
} else {
var map__42211_42847 = cljs.core.first(seq__42163_42839__$1);
var map__42211_42848__$1 = cljs.core.__destructure_map(map__42211_42847);
var task_42849 = map__42211_42848__$1;
var fn_str_42850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42211_42848__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42211_42848__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42852 = goog.getObjectByName(fn_str_42850,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42851)].join(''));

(fn_obj_42852.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42852.cljs$core$IFn$_invoke$arity$2(path,new_link_42804) : fn_obj_42852.call(null,path,new_link_42804));


var G__42857 = cljs.core.next(seq__42163_42839__$1);
var G__42858 = null;
var G__42859 = (0);
var G__42860 = (0);
seq__42163_42812 = G__42857;
chunk__42165_42813 = G__42858;
count__42166_42814 = G__42859;
i__42167_42815 = G__42860;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42800);
});})(seq__41973_42793,chunk__41979_42794,count__41980_42795,i__41981_42796,seq__41631,chunk__41633,count__41634,i__41635,new_link_42804,path_match_42801,node_42800,path,seq__41631__$1,temp__5825__auto__,map__41630,map__41630__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42801], 0));

goog.dom.insertSiblingAfter(new_link_42804,node_42800);


var G__42866 = seq__41973_42793;
var G__42867 = chunk__41979_42794;
var G__42868 = count__41980_42795;
var G__42869 = (i__41981_42796 + (1));
seq__41973_42793 = G__42866;
chunk__41979_42794 = G__42867;
count__41980_42795 = G__42868;
i__41981_42796 = G__42869;
continue;
} else {
var G__42870 = seq__41973_42793;
var G__42871 = chunk__41979_42794;
var G__42872 = count__41980_42795;
var G__42873 = (i__41981_42796 + (1));
seq__41973_42793 = G__42870;
chunk__41979_42794 = G__42871;
count__41980_42795 = G__42872;
i__41981_42796 = G__42873;
continue;
}
} else {
var G__42875 = seq__41973_42793;
var G__42876 = chunk__41979_42794;
var G__42877 = count__41980_42795;
var G__42878 = (i__41981_42796 + (1));
seq__41973_42793 = G__42875;
chunk__41979_42794 = G__42876;
count__41980_42795 = G__42877;
i__41981_42796 = G__42878;
continue;
}
} else {
var temp__5825__auto___42879__$1 = cljs.core.seq(seq__41973_42793);
if(temp__5825__auto___42879__$1){
var seq__41973_42881__$1 = temp__5825__auto___42879__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41973_42881__$1)){
var c__5548__auto___42884 = cljs.core.chunk_first(seq__41973_42881__$1);
var G__42885 = cljs.core.chunk_rest(seq__41973_42881__$1);
var G__42886 = c__5548__auto___42884;
var G__42887 = cljs.core.count(c__5548__auto___42884);
var G__42888 = (0);
seq__41973_42793 = G__42885;
chunk__41979_42794 = G__42886;
count__41980_42795 = G__42887;
i__41981_42796 = G__42888;
continue;
} else {
var node_42889 = cljs.core.first(seq__41973_42881__$1);
if(cljs.core.not(node_42889.shadow$old)){
var path_match_42892 = shadow.cljs.devtools.client.browser.match_paths(node_42889.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42892)){
var new_link_42893 = (function (){var G__42244 = node_42889.cloneNode(true);
G__42244.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42892),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42244;
})();
(node_42889.shadow$old = true);

(new_link_42893.onload = ((function (seq__41973_42793,chunk__41979_42794,count__41980_42795,i__41981_42796,seq__41631,chunk__41633,count__41634,i__41635,new_link_42893,path_match_42892,node_42889,seq__41973_42881__$1,temp__5825__auto___42879__$1,path,seq__41631__$1,temp__5825__auto__,map__41630,map__41630__$1,msg,updates,reload_info){
return (function (e){
var seq__42255_42901 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42257_42902 = null;
var count__42258_42903 = (0);
var i__42259_42904 = (0);
while(true){
if((i__42259_42904 < count__42258_42903)){
var map__42295_42910 = chunk__42257_42902.cljs$core$IIndexed$_nth$arity$2(null,i__42259_42904);
var map__42295_42911__$1 = cljs.core.__destructure_map(map__42295_42910);
var task_42912 = map__42295_42911__$1;
var fn_str_42913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42295_42911__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42295_42911__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42918 = goog.getObjectByName(fn_str_42913,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42914)].join(''));

(fn_obj_42918.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42918.cljs$core$IFn$_invoke$arity$2(path,new_link_42893) : fn_obj_42918.call(null,path,new_link_42893));


var G__42920 = seq__42255_42901;
var G__42921 = chunk__42257_42902;
var G__42922 = count__42258_42903;
var G__42923 = (i__42259_42904 + (1));
seq__42255_42901 = G__42920;
chunk__42257_42902 = G__42921;
count__42258_42903 = G__42922;
i__42259_42904 = G__42923;
continue;
} else {
var temp__5825__auto___42925__$2 = cljs.core.seq(seq__42255_42901);
if(temp__5825__auto___42925__$2){
var seq__42255_42926__$1 = temp__5825__auto___42925__$2;
if(cljs.core.chunked_seq_QMARK_(seq__42255_42926__$1)){
var c__5548__auto___42928 = cljs.core.chunk_first(seq__42255_42926__$1);
var G__42929 = cljs.core.chunk_rest(seq__42255_42926__$1);
var G__42930 = c__5548__auto___42928;
var G__42931 = cljs.core.count(c__5548__auto___42928);
var G__42932 = (0);
seq__42255_42901 = G__42929;
chunk__42257_42902 = G__42930;
count__42258_42903 = G__42931;
i__42259_42904 = G__42932;
continue;
} else {
var map__42313_42939 = cljs.core.first(seq__42255_42926__$1);
var map__42313_42940__$1 = cljs.core.__destructure_map(map__42313_42939);
var task_42941 = map__42313_42940__$1;
var fn_str_42942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42313_42940__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42313_42940__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42946 = goog.getObjectByName(fn_str_42942,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42943)].join(''));

(fn_obj_42946.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42946.cljs$core$IFn$_invoke$arity$2(path,new_link_42893) : fn_obj_42946.call(null,path,new_link_42893));


var G__42953 = cljs.core.next(seq__42255_42926__$1);
var G__42954 = null;
var G__42955 = (0);
var G__42956 = (0);
seq__42255_42901 = G__42953;
chunk__42257_42902 = G__42954;
count__42258_42903 = G__42955;
i__42259_42904 = G__42956;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42889);
});})(seq__41973_42793,chunk__41979_42794,count__41980_42795,i__41981_42796,seq__41631,chunk__41633,count__41634,i__41635,new_link_42893,path_match_42892,node_42889,seq__41973_42881__$1,temp__5825__auto___42879__$1,path,seq__41631__$1,temp__5825__auto__,map__41630,map__41630__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42892], 0));

goog.dom.insertSiblingAfter(new_link_42893,node_42889);


var G__42959 = cljs.core.next(seq__41973_42881__$1);
var G__42960 = null;
var G__42961 = (0);
var G__42962 = (0);
seq__41973_42793 = G__42959;
chunk__41979_42794 = G__42960;
count__41980_42795 = G__42961;
i__41981_42796 = G__42962;
continue;
} else {
var G__42963 = cljs.core.next(seq__41973_42881__$1);
var G__42965 = null;
var G__42966 = (0);
var G__42968 = (0);
seq__41973_42793 = G__42963;
chunk__41979_42794 = G__42965;
count__41980_42795 = G__42966;
i__41981_42796 = G__42968;
continue;
}
} else {
var G__42969 = cljs.core.next(seq__41973_42881__$1);
var G__42970 = null;
var G__42971 = (0);
var G__42972 = (0);
seq__41973_42793 = G__42969;
chunk__41979_42794 = G__42970;
count__41980_42795 = G__42971;
i__41981_42796 = G__42972;
continue;
}
}
} else {
}
}
break;
}


var G__42973 = cljs.core.next(seq__41631__$1);
var G__42974 = null;
var G__42975 = (0);
var G__42976 = (0);
seq__41631 = G__42973;
chunk__41633 = G__42974;
count__41634 = G__42975;
i__41635 = G__42976;
continue;
} else {
var G__42979 = cljs.core.next(seq__41631__$1);
var G__42980 = null;
var G__42981 = (0);
var G__42982 = (0);
seq__41631 = G__42979;
chunk__41633 = G__42980;
count__41634 = G__42981;
i__41635 = G__42982;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__42383,done,error){
var map__42384 = p__42383;
var map__42384__$1 = cljs.core.__destructure_map(map__42384);
var msg = map__42384__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42384__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42384__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42384__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42385){
var map__42386 = p__42385;
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
var G__42389 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42389) : done.call(null,G__42389));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__42392){
var map__42399 = p__42392;
var map__42399__$1 = cljs.core.__destructure_map(map__42399);
var msg__$1 = map__42399__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42399__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e42403){var ex = e42403;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__42404){
var map__42405 = p__42404;
var map__42405__$1 = cljs.core.__destructure_map(map__42405);
var env = map__42405__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42405__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__42437){
var map__42439 = p__42437;
var map__42439__$1 = cljs.core.__destructure_map(map__42439);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42439__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42439__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__42453){
var map__42455 = p__42453;
var map__42455__$1 = cljs.core.__destructure_map(map__42455);
var svc = map__42455__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42455__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
