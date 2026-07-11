goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38282 = arguments.length;
var i__5750__auto___38283 = (0);
while(true){
if((i__5750__auto___38283 < len__5749__auto___38282)){
args__5755__auto__.push((arguments[i__5750__auto___38283]));

var G__38284 = (i__5750__auto___38283 + (1));
i__5750__auto___38283 = G__38284;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37734){
var G__37735 = cljs.core.first(seq37734);
var seq37734__$1 = cljs.core.next(seq37734);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37735,seq37734__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37741 = cljs.core.seq(sources);
var chunk__37742 = null;
var count__37743 = (0);
var i__37744 = (0);
while(true){
if((i__37744 < count__37743)){
var map__37763 = chunk__37742.cljs$core$IIndexed$_nth$arity$2(null,i__37744);
var map__37763__$1 = cljs.core.__destructure_map(map__37763);
var src = map__37763__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37763__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37763__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37763__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37763__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37765){var e_38290 = e37765;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38290);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38290.message)].join('')));
}

var G__38291 = seq__37741;
var G__38292 = chunk__37742;
var G__38293 = count__37743;
var G__38294 = (i__37744 + (1));
seq__37741 = G__38291;
chunk__37742 = G__38292;
count__37743 = G__38293;
i__37744 = G__38294;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37741);
if(temp__5825__auto__){
var seq__37741__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37741__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37741__$1);
var G__38295 = cljs.core.chunk_rest(seq__37741__$1);
var G__38296 = c__5548__auto__;
var G__38297 = cljs.core.count(c__5548__auto__);
var G__38298 = (0);
seq__37741 = G__38295;
chunk__37742 = G__38296;
count__37743 = G__38297;
i__37744 = G__38298;
continue;
} else {
var map__37770 = cljs.core.first(seq__37741__$1);
var map__37770__$1 = cljs.core.__destructure_map(map__37770);
var src = map__37770__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37770__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37770__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37770__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37770__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37771){var e_38301 = e37771;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38301);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38301.message)].join('')));
}

var G__38302 = cljs.core.next(seq__37741__$1);
var G__38303 = null;
var G__38304 = (0);
var G__38305 = (0);
seq__37741 = G__38302;
chunk__37742 = G__38303;
count__37743 = G__38304;
i__37744 = G__38305;
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
var seq__37773 = cljs.core.seq(js_requires);
var chunk__37774 = null;
var count__37775 = (0);
var i__37776 = (0);
while(true){
if((i__37776 < count__37775)){
var js_ns = chunk__37774.cljs$core$IIndexed$_nth$arity$2(null,i__37776);
var require_str_38312 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38312);


var G__38313 = seq__37773;
var G__38314 = chunk__37774;
var G__38315 = count__37775;
var G__38316 = (i__37776 + (1));
seq__37773 = G__38313;
chunk__37774 = G__38314;
count__37775 = G__38315;
i__37776 = G__38316;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37773);
if(temp__5825__auto__){
var seq__37773__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37773__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37773__$1);
var G__38317 = cljs.core.chunk_rest(seq__37773__$1);
var G__38318 = c__5548__auto__;
var G__38319 = cljs.core.count(c__5548__auto__);
var G__38320 = (0);
seq__37773 = G__38317;
chunk__37774 = G__38318;
count__37775 = G__38319;
i__37776 = G__38320;
continue;
} else {
var js_ns = cljs.core.first(seq__37773__$1);
var require_str_38321 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38321);


var G__38322 = cljs.core.next(seq__37773__$1);
var G__38323 = null;
var G__38324 = (0);
var G__38325 = (0);
seq__37773 = G__38322;
chunk__37774 = G__38323;
count__37775 = G__38324;
i__37776 = G__38325;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37779){
var map__37780 = p__37779;
var map__37780__$1 = cljs.core.__destructure_map(map__37780);
var msg = map__37780__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37780__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37780__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37782(s__37783){
return (new cljs.core.LazySeq(null,(function (){
var s__37783__$1 = s__37783;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37783__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__37788 = cljs.core.first(xs__6385__auto__);
var map__37788__$1 = cljs.core.__destructure_map(map__37788);
var src = map__37788__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37788__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37788__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__37783__$1,map__37788,map__37788__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37780,map__37780__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37782_$_iter__37784(s__37785){
return (new cljs.core.LazySeq(null,((function (s__37783__$1,map__37788,map__37788__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37780,map__37780__$1,msg,info,reload_info){
return (function (){
var s__37785__$1 = s__37785;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37785__$1);
if(temp__5825__auto____$1){
var s__37785__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37785__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37785__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37787 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37786 = (0);
while(true){
if((i__37786 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__37786);
cljs.core.chunk_append(b__37787,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38326 = (i__37786 + (1));
i__37786 = G__38326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37787),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37782_$_iter__37784(cljs.core.chunk_rest(s__37785__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37787),null);
}
} else {
var warning = cljs.core.first(s__37785__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37782_$_iter__37784(cljs.core.rest(s__37785__$2)));
}
} else {
return null;
}
break;
}
});})(s__37783__$1,map__37788,map__37788__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37780,map__37780__$1,msg,info,reload_info))
,null,null));
});})(s__37783__$1,map__37788,map__37788__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37780,map__37780__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37782(cljs.core.rest(s__37783__$1)));
} else {
var G__38327 = cljs.core.rest(s__37783__$1);
s__37783__$1 = G__38327;
continue;
}
} else {
var G__38328 = cljs.core.rest(s__37783__$1);
s__37783__$1 = G__38328;
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
var seq__37789_38329 = cljs.core.seq(warnings);
var chunk__37790_38330 = null;
var count__37791_38331 = (0);
var i__37792_38332 = (0);
while(true){
if((i__37792_38332 < count__37791_38331)){
var map__37795_38333 = chunk__37790_38330.cljs$core$IIndexed$_nth$arity$2(null,i__37792_38332);
var map__37795_38334__$1 = cljs.core.__destructure_map(map__37795_38333);
var w_38335 = map__37795_38334__$1;
var msg_38336__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37795_38334__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37795_38334__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37795_38334__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37795_38334__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38339)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38337),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38338),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38336__$1)].join(''));


var G__38340 = seq__37789_38329;
var G__38341 = chunk__37790_38330;
var G__38342 = count__37791_38331;
var G__38343 = (i__37792_38332 + (1));
seq__37789_38329 = G__38340;
chunk__37790_38330 = G__38341;
count__37791_38331 = G__38342;
i__37792_38332 = G__38343;
continue;
} else {
var temp__5825__auto___38344 = cljs.core.seq(seq__37789_38329);
if(temp__5825__auto___38344){
var seq__37789_38345__$1 = temp__5825__auto___38344;
if(cljs.core.chunked_seq_QMARK_(seq__37789_38345__$1)){
var c__5548__auto___38346 = cljs.core.chunk_first(seq__37789_38345__$1);
var G__38347 = cljs.core.chunk_rest(seq__37789_38345__$1);
var G__38348 = c__5548__auto___38346;
var G__38349 = cljs.core.count(c__5548__auto___38346);
var G__38350 = (0);
seq__37789_38329 = G__38347;
chunk__37790_38330 = G__38348;
count__37791_38331 = G__38349;
i__37792_38332 = G__38350;
continue;
} else {
var map__37796_38351 = cljs.core.first(seq__37789_38345__$1);
var map__37796_38352__$1 = cljs.core.__destructure_map(map__37796_38351);
var w_38353 = map__37796_38352__$1;
var msg_38354__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796_38352__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796_38352__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796_38352__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796_38352__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38357)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38355),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38356),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38354__$1)].join(''));


var G__38358 = cljs.core.next(seq__37789_38345__$1);
var G__38359 = null;
var G__38360 = (0);
var G__38361 = (0);
seq__37789_38329 = G__38358;
chunk__37790_38330 = G__38359;
count__37791_38331 = G__38360;
i__37792_38332 = G__38361;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37778_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37778_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37799 = node_uri;
G__37799.setQuery(null);

G__37799.setPath(new$);

return G__37799;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37806){
var map__37807 = p__37806;
var map__37807__$1 = cljs.core.__destructure_map(map__37807);
var msg = map__37807__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37807__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37807__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37809 = cljs.core.seq(updates);
var chunk__37811 = null;
var count__37812 = (0);
var i__37813 = (0);
while(true){
if((i__37813 < count__37812)){
var path = chunk__37811.cljs$core$IIndexed$_nth$arity$2(null,i__37813);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38074_38362 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38078_38363 = null;
var count__38079_38364 = (0);
var i__38080_38365 = (0);
while(true){
if((i__38080_38365 < count__38079_38364)){
var node_38366 = chunk__38078_38363.cljs$core$IIndexed$_nth$arity$2(null,i__38080_38365);
if(cljs.core.not(node_38366.shadow$old)){
var path_match_38367 = shadow.cljs.devtools.client.browser.match_paths(node_38366.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38367)){
var new_link_38368 = (function (){var G__38108 = node_38366.cloneNode(true);
G__38108.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38367),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38108;
})();
(node_38366.shadow$old = true);

(new_link_38368.onload = ((function (seq__38074_38362,chunk__38078_38363,count__38079_38364,i__38080_38365,seq__37809,chunk__37811,count__37812,i__37813,new_link_38368,path_match_38367,node_38366,path,map__37807,map__37807__$1,msg,updates,reload_info){
return (function (e){
var seq__38109_38369 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38111_38370 = null;
var count__38112_38371 = (0);
var i__38113_38372 = (0);
while(true){
if((i__38113_38372 < count__38112_38371)){
var map__38117_38373 = chunk__38111_38370.cljs$core$IIndexed$_nth$arity$2(null,i__38113_38372);
var map__38117_38374__$1 = cljs.core.__destructure_map(map__38117_38373);
var task_38375 = map__38117_38374__$1;
var fn_str_38376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38117_38374__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38117_38374__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38390 = goog.getObjectByName(fn_str_38376,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38377)].join(''));

(fn_obj_38390.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38390.cljs$core$IFn$_invoke$arity$2(path,new_link_38368) : fn_obj_38390.call(null,path,new_link_38368));


var G__38391 = seq__38109_38369;
var G__38392 = chunk__38111_38370;
var G__38393 = count__38112_38371;
var G__38394 = (i__38113_38372 + (1));
seq__38109_38369 = G__38391;
chunk__38111_38370 = G__38392;
count__38112_38371 = G__38393;
i__38113_38372 = G__38394;
continue;
} else {
var temp__5825__auto___38395 = cljs.core.seq(seq__38109_38369);
if(temp__5825__auto___38395){
var seq__38109_38396__$1 = temp__5825__auto___38395;
if(cljs.core.chunked_seq_QMARK_(seq__38109_38396__$1)){
var c__5548__auto___38397 = cljs.core.chunk_first(seq__38109_38396__$1);
var G__38398 = cljs.core.chunk_rest(seq__38109_38396__$1);
var G__38399 = c__5548__auto___38397;
var G__38400 = cljs.core.count(c__5548__auto___38397);
var G__38401 = (0);
seq__38109_38369 = G__38398;
chunk__38111_38370 = G__38399;
count__38112_38371 = G__38400;
i__38113_38372 = G__38401;
continue;
} else {
var map__38119_38402 = cljs.core.first(seq__38109_38396__$1);
var map__38119_38403__$1 = cljs.core.__destructure_map(map__38119_38402);
var task_38404 = map__38119_38403__$1;
var fn_str_38405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38119_38403__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38119_38403__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38407 = goog.getObjectByName(fn_str_38405,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38406)].join(''));

(fn_obj_38407.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38407.cljs$core$IFn$_invoke$arity$2(path,new_link_38368) : fn_obj_38407.call(null,path,new_link_38368));


var G__38408 = cljs.core.next(seq__38109_38396__$1);
var G__38409 = null;
var G__38410 = (0);
var G__38411 = (0);
seq__38109_38369 = G__38408;
chunk__38111_38370 = G__38409;
count__38112_38371 = G__38410;
i__38113_38372 = G__38411;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38366);
});})(seq__38074_38362,chunk__38078_38363,count__38079_38364,i__38080_38365,seq__37809,chunk__37811,count__37812,i__37813,new_link_38368,path_match_38367,node_38366,path,map__37807,map__37807__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38367], 0));

goog.dom.insertSiblingAfter(new_link_38368,node_38366);


var G__38412 = seq__38074_38362;
var G__38413 = chunk__38078_38363;
var G__38414 = count__38079_38364;
var G__38415 = (i__38080_38365 + (1));
seq__38074_38362 = G__38412;
chunk__38078_38363 = G__38413;
count__38079_38364 = G__38414;
i__38080_38365 = G__38415;
continue;
} else {
var G__38416 = seq__38074_38362;
var G__38417 = chunk__38078_38363;
var G__38418 = count__38079_38364;
var G__38419 = (i__38080_38365 + (1));
seq__38074_38362 = G__38416;
chunk__38078_38363 = G__38417;
count__38079_38364 = G__38418;
i__38080_38365 = G__38419;
continue;
}
} else {
var G__38420 = seq__38074_38362;
var G__38421 = chunk__38078_38363;
var G__38422 = count__38079_38364;
var G__38423 = (i__38080_38365 + (1));
seq__38074_38362 = G__38420;
chunk__38078_38363 = G__38421;
count__38079_38364 = G__38422;
i__38080_38365 = G__38423;
continue;
}
} else {
var temp__5825__auto___38424 = cljs.core.seq(seq__38074_38362);
if(temp__5825__auto___38424){
var seq__38074_38425__$1 = temp__5825__auto___38424;
if(cljs.core.chunked_seq_QMARK_(seq__38074_38425__$1)){
var c__5548__auto___38426 = cljs.core.chunk_first(seq__38074_38425__$1);
var G__38427 = cljs.core.chunk_rest(seq__38074_38425__$1);
var G__38428 = c__5548__auto___38426;
var G__38429 = cljs.core.count(c__5548__auto___38426);
var G__38430 = (0);
seq__38074_38362 = G__38427;
chunk__38078_38363 = G__38428;
count__38079_38364 = G__38429;
i__38080_38365 = G__38430;
continue;
} else {
var node_38431 = cljs.core.first(seq__38074_38425__$1);
if(cljs.core.not(node_38431.shadow$old)){
var path_match_38432 = shadow.cljs.devtools.client.browser.match_paths(node_38431.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38432)){
var new_link_38433 = (function (){var G__38120 = node_38431.cloneNode(true);
G__38120.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38432),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38120;
})();
(node_38431.shadow$old = true);

(new_link_38433.onload = ((function (seq__38074_38362,chunk__38078_38363,count__38079_38364,i__38080_38365,seq__37809,chunk__37811,count__37812,i__37813,new_link_38433,path_match_38432,node_38431,seq__38074_38425__$1,temp__5825__auto___38424,path,map__37807,map__37807__$1,msg,updates,reload_info){
return (function (e){
var seq__38121_38434 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38123_38435 = null;
var count__38124_38436 = (0);
var i__38125_38437 = (0);
while(true){
if((i__38125_38437 < count__38124_38436)){
var map__38148_38438 = chunk__38123_38435.cljs$core$IIndexed$_nth$arity$2(null,i__38125_38437);
var map__38148_38439__$1 = cljs.core.__destructure_map(map__38148_38438);
var task_38440 = map__38148_38439__$1;
var fn_str_38441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38148_38439__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38148_38439__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38443 = goog.getObjectByName(fn_str_38441,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38442)].join(''));

(fn_obj_38443.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38443.cljs$core$IFn$_invoke$arity$2(path,new_link_38433) : fn_obj_38443.call(null,path,new_link_38433));


var G__38444 = seq__38121_38434;
var G__38445 = chunk__38123_38435;
var G__38446 = count__38124_38436;
var G__38447 = (i__38125_38437 + (1));
seq__38121_38434 = G__38444;
chunk__38123_38435 = G__38445;
count__38124_38436 = G__38446;
i__38125_38437 = G__38447;
continue;
} else {
var temp__5825__auto___38448__$1 = cljs.core.seq(seq__38121_38434);
if(temp__5825__auto___38448__$1){
var seq__38121_38449__$1 = temp__5825__auto___38448__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38121_38449__$1)){
var c__5548__auto___38450 = cljs.core.chunk_first(seq__38121_38449__$1);
var G__38451 = cljs.core.chunk_rest(seq__38121_38449__$1);
var G__38452 = c__5548__auto___38450;
var G__38453 = cljs.core.count(c__5548__auto___38450);
var G__38454 = (0);
seq__38121_38434 = G__38451;
chunk__38123_38435 = G__38452;
count__38124_38436 = G__38453;
i__38125_38437 = G__38454;
continue;
} else {
var map__38150_38455 = cljs.core.first(seq__38121_38449__$1);
var map__38150_38456__$1 = cljs.core.__destructure_map(map__38150_38455);
var task_38457 = map__38150_38456__$1;
var fn_str_38458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38150_38456__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38150_38456__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38460 = goog.getObjectByName(fn_str_38458,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38459)].join(''));

(fn_obj_38460.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38460.cljs$core$IFn$_invoke$arity$2(path,new_link_38433) : fn_obj_38460.call(null,path,new_link_38433));


var G__38461 = cljs.core.next(seq__38121_38449__$1);
var G__38462 = null;
var G__38463 = (0);
var G__38464 = (0);
seq__38121_38434 = G__38461;
chunk__38123_38435 = G__38462;
count__38124_38436 = G__38463;
i__38125_38437 = G__38464;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38431);
});})(seq__38074_38362,chunk__38078_38363,count__38079_38364,i__38080_38365,seq__37809,chunk__37811,count__37812,i__37813,new_link_38433,path_match_38432,node_38431,seq__38074_38425__$1,temp__5825__auto___38424,path,map__37807,map__37807__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38432], 0));

goog.dom.insertSiblingAfter(new_link_38433,node_38431);


var G__38467 = cljs.core.next(seq__38074_38425__$1);
var G__38468 = null;
var G__38469 = (0);
var G__38470 = (0);
seq__38074_38362 = G__38467;
chunk__38078_38363 = G__38468;
count__38079_38364 = G__38469;
i__38080_38365 = G__38470;
continue;
} else {
var G__38471 = cljs.core.next(seq__38074_38425__$1);
var G__38472 = null;
var G__38473 = (0);
var G__38474 = (0);
seq__38074_38362 = G__38471;
chunk__38078_38363 = G__38472;
count__38079_38364 = G__38473;
i__38080_38365 = G__38474;
continue;
}
} else {
var G__38475 = cljs.core.next(seq__38074_38425__$1);
var G__38476 = null;
var G__38477 = (0);
var G__38478 = (0);
seq__38074_38362 = G__38475;
chunk__38078_38363 = G__38476;
count__38079_38364 = G__38477;
i__38080_38365 = G__38478;
continue;
}
}
} else {
}
}
break;
}


var G__38479 = seq__37809;
var G__38480 = chunk__37811;
var G__38481 = count__37812;
var G__38482 = (i__37813 + (1));
seq__37809 = G__38479;
chunk__37811 = G__38480;
count__37812 = G__38481;
i__37813 = G__38482;
continue;
} else {
var G__38483 = seq__37809;
var G__38484 = chunk__37811;
var G__38485 = count__37812;
var G__38486 = (i__37813 + (1));
seq__37809 = G__38483;
chunk__37811 = G__38484;
count__37812 = G__38485;
i__37813 = G__38486;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37809);
if(temp__5825__auto__){
var seq__37809__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37809__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37809__$1);
var G__38487 = cljs.core.chunk_rest(seq__37809__$1);
var G__38488 = c__5548__auto__;
var G__38489 = cljs.core.count(c__5548__auto__);
var G__38490 = (0);
seq__37809 = G__38487;
chunk__37811 = G__38488;
count__37812 = G__38489;
i__37813 = G__38490;
continue;
} else {
var path = cljs.core.first(seq__37809__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38153_38491 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38157_38492 = null;
var count__38158_38493 = (0);
var i__38159_38494 = (0);
while(true){
if((i__38159_38494 < count__38158_38493)){
var node_38495 = chunk__38157_38492.cljs$core$IIndexed$_nth$arity$2(null,i__38159_38494);
if(cljs.core.not(node_38495.shadow$old)){
var path_match_38496 = shadow.cljs.devtools.client.browser.match_paths(node_38495.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38496)){
var new_link_38497 = (function (){var G__38196 = node_38495.cloneNode(true);
G__38196.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38496),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38196;
})();
(node_38495.shadow$old = true);

(new_link_38497.onload = ((function (seq__38153_38491,chunk__38157_38492,count__38158_38493,i__38159_38494,seq__37809,chunk__37811,count__37812,i__37813,new_link_38497,path_match_38496,node_38495,path,seq__37809__$1,temp__5825__auto__,map__37807,map__37807__$1,msg,updates,reload_info){
return (function (e){
var seq__38197_38500 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38199_38501 = null;
var count__38200_38502 = (0);
var i__38201_38503 = (0);
while(true){
if((i__38201_38503 < count__38200_38502)){
var map__38206_38504 = chunk__38199_38501.cljs$core$IIndexed$_nth$arity$2(null,i__38201_38503);
var map__38206_38505__$1 = cljs.core.__destructure_map(map__38206_38504);
var task_38506 = map__38206_38505__$1;
var fn_str_38507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38206_38505__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38206_38505__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38509 = goog.getObjectByName(fn_str_38507,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38508)].join(''));

(fn_obj_38509.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38509.cljs$core$IFn$_invoke$arity$2(path,new_link_38497) : fn_obj_38509.call(null,path,new_link_38497));


var G__38512 = seq__38197_38500;
var G__38513 = chunk__38199_38501;
var G__38514 = count__38200_38502;
var G__38515 = (i__38201_38503 + (1));
seq__38197_38500 = G__38512;
chunk__38199_38501 = G__38513;
count__38200_38502 = G__38514;
i__38201_38503 = G__38515;
continue;
} else {
var temp__5825__auto___38516__$1 = cljs.core.seq(seq__38197_38500);
if(temp__5825__auto___38516__$1){
var seq__38197_38517__$1 = temp__5825__auto___38516__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38197_38517__$1)){
var c__5548__auto___38518 = cljs.core.chunk_first(seq__38197_38517__$1);
var G__38519 = cljs.core.chunk_rest(seq__38197_38517__$1);
var G__38520 = c__5548__auto___38518;
var G__38521 = cljs.core.count(c__5548__auto___38518);
var G__38522 = (0);
seq__38197_38500 = G__38519;
chunk__38199_38501 = G__38520;
count__38200_38502 = G__38521;
i__38201_38503 = G__38522;
continue;
} else {
var map__38209_38523 = cljs.core.first(seq__38197_38517__$1);
var map__38209_38524__$1 = cljs.core.__destructure_map(map__38209_38523);
var task_38525 = map__38209_38524__$1;
var fn_str_38526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38209_38524__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38209_38524__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38529 = goog.getObjectByName(fn_str_38526,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38527)].join(''));

(fn_obj_38529.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38529.cljs$core$IFn$_invoke$arity$2(path,new_link_38497) : fn_obj_38529.call(null,path,new_link_38497));


var G__38530 = cljs.core.next(seq__38197_38517__$1);
var G__38531 = null;
var G__38532 = (0);
var G__38533 = (0);
seq__38197_38500 = G__38530;
chunk__38199_38501 = G__38531;
count__38200_38502 = G__38532;
i__38201_38503 = G__38533;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38495);
});})(seq__38153_38491,chunk__38157_38492,count__38158_38493,i__38159_38494,seq__37809,chunk__37811,count__37812,i__37813,new_link_38497,path_match_38496,node_38495,path,seq__37809__$1,temp__5825__auto__,map__37807,map__37807__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38496], 0));

goog.dom.insertSiblingAfter(new_link_38497,node_38495);


var G__38534 = seq__38153_38491;
var G__38535 = chunk__38157_38492;
var G__38536 = count__38158_38493;
var G__38537 = (i__38159_38494 + (1));
seq__38153_38491 = G__38534;
chunk__38157_38492 = G__38535;
count__38158_38493 = G__38536;
i__38159_38494 = G__38537;
continue;
} else {
var G__38538 = seq__38153_38491;
var G__38539 = chunk__38157_38492;
var G__38540 = count__38158_38493;
var G__38541 = (i__38159_38494 + (1));
seq__38153_38491 = G__38538;
chunk__38157_38492 = G__38539;
count__38158_38493 = G__38540;
i__38159_38494 = G__38541;
continue;
}
} else {
var G__38542 = seq__38153_38491;
var G__38543 = chunk__38157_38492;
var G__38544 = count__38158_38493;
var G__38545 = (i__38159_38494 + (1));
seq__38153_38491 = G__38542;
chunk__38157_38492 = G__38543;
count__38158_38493 = G__38544;
i__38159_38494 = G__38545;
continue;
}
} else {
var temp__5825__auto___38546__$1 = cljs.core.seq(seq__38153_38491);
if(temp__5825__auto___38546__$1){
var seq__38153_38547__$1 = temp__5825__auto___38546__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38153_38547__$1)){
var c__5548__auto___38548 = cljs.core.chunk_first(seq__38153_38547__$1);
var G__38549 = cljs.core.chunk_rest(seq__38153_38547__$1);
var G__38550 = c__5548__auto___38548;
var G__38551 = cljs.core.count(c__5548__auto___38548);
var G__38552 = (0);
seq__38153_38491 = G__38549;
chunk__38157_38492 = G__38550;
count__38158_38493 = G__38551;
i__38159_38494 = G__38552;
continue;
} else {
var node_38553 = cljs.core.first(seq__38153_38547__$1);
if(cljs.core.not(node_38553.shadow$old)){
var path_match_38554 = shadow.cljs.devtools.client.browser.match_paths(node_38553.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38554)){
var new_link_38555 = (function (){var G__38212 = node_38553.cloneNode(true);
G__38212.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38554),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38212;
})();
(node_38553.shadow$old = true);

(new_link_38555.onload = ((function (seq__38153_38491,chunk__38157_38492,count__38158_38493,i__38159_38494,seq__37809,chunk__37811,count__37812,i__37813,new_link_38555,path_match_38554,node_38553,seq__38153_38547__$1,temp__5825__auto___38546__$1,path,seq__37809__$1,temp__5825__auto__,map__37807,map__37807__$1,msg,updates,reload_info){
return (function (e){
var seq__38214_38560 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38216_38561 = null;
var count__38217_38562 = (0);
var i__38218_38563 = (0);
while(true){
if((i__38218_38563 < count__38217_38562)){
var map__38232_38568 = chunk__38216_38561.cljs$core$IIndexed$_nth$arity$2(null,i__38218_38563);
var map__38232_38569__$1 = cljs.core.__destructure_map(map__38232_38568);
var task_38570 = map__38232_38569__$1;
var fn_str_38571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38232_38569__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38232_38569__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38573 = goog.getObjectByName(fn_str_38571,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38572)].join(''));

(fn_obj_38573.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38573.cljs$core$IFn$_invoke$arity$2(path,new_link_38555) : fn_obj_38573.call(null,path,new_link_38555));


var G__38574 = seq__38214_38560;
var G__38575 = chunk__38216_38561;
var G__38576 = count__38217_38562;
var G__38577 = (i__38218_38563 + (1));
seq__38214_38560 = G__38574;
chunk__38216_38561 = G__38575;
count__38217_38562 = G__38576;
i__38218_38563 = G__38577;
continue;
} else {
var temp__5825__auto___38578__$2 = cljs.core.seq(seq__38214_38560);
if(temp__5825__auto___38578__$2){
var seq__38214_38579__$1 = temp__5825__auto___38578__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38214_38579__$1)){
var c__5548__auto___38580 = cljs.core.chunk_first(seq__38214_38579__$1);
var G__38581 = cljs.core.chunk_rest(seq__38214_38579__$1);
var G__38582 = c__5548__auto___38580;
var G__38583 = cljs.core.count(c__5548__auto___38580);
var G__38584 = (0);
seq__38214_38560 = G__38581;
chunk__38216_38561 = G__38582;
count__38217_38562 = G__38583;
i__38218_38563 = G__38584;
continue;
} else {
var map__38235_38585 = cljs.core.first(seq__38214_38579__$1);
var map__38235_38586__$1 = cljs.core.__destructure_map(map__38235_38585);
var task_38587 = map__38235_38586__$1;
var fn_str_38588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38235_38586__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38235_38586__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38590 = goog.getObjectByName(fn_str_38588,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38589)].join(''));

(fn_obj_38590.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38590.cljs$core$IFn$_invoke$arity$2(path,new_link_38555) : fn_obj_38590.call(null,path,new_link_38555));


var G__38592 = cljs.core.next(seq__38214_38579__$1);
var G__38593 = null;
var G__38594 = (0);
var G__38595 = (0);
seq__38214_38560 = G__38592;
chunk__38216_38561 = G__38593;
count__38217_38562 = G__38594;
i__38218_38563 = G__38595;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38553);
});})(seq__38153_38491,chunk__38157_38492,count__38158_38493,i__38159_38494,seq__37809,chunk__37811,count__37812,i__37813,new_link_38555,path_match_38554,node_38553,seq__38153_38547__$1,temp__5825__auto___38546__$1,path,seq__37809__$1,temp__5825__auto__,map__37807,map__37807__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38554], 0));

goog.dom.insertSiblingAfter(new_link_38555,node_38553);


var G__38596 = cljs.core.next(seq__38153_38547__$1);
var G__38597 = null;
var G__38598 = (0);
var G__38599 = (0);
seq__38153_38491 = G__38596;
chunk__38157_38492 = G__38597;
count__38158_38493 = G__38598;
i__38159_38494 = G__38599;
continue;
} else {
var G__38600 = cljs.core.next(seq__38153_38547__$1);
var G__38601 = null;
var G__38602 = (0);
var G__38603 = (0);
seq__38153_38491 = G__38600;
chunk__38157_38492 = G__38601;
count__38158_38493 = G__38602;
i__38159_38494 = G__38603;
continue;
}
} else {
var G__38604 = cljs.core.next(seq__38153_38547__$1);
var G__38605 = null;
var G__38606 = (0);
var G__38607 = (0);
seq__38153_38491 = G__38604;
chunk__38157_38492 = G__38605;
count__38158_38493 = G__38606;
i__38159_38494 = G__38607;
continue;
}
}
} else {
}
}
break;
}


var G__38608 = cljs.core.next(seq__37809__$1);
var G__38609 = null;
var G__38610 = (0);
var G__38611 = (0);
seq__37809 = G__38608;
chunk__37811 = G__38609;
count__37812 = G__38610;
i__37813 = G__38611;
continue;
} else {
var G__38612 = cljs.core.next(seq__37809__$1);
var G__38613 = null;
var G__38614 = (0);
var G__38615 = (0);
seq__37809 = G__38612;
chunk__37811 = G__38613;
count__37812 = G__38614;
i__37813 = G__38615;
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
try{var G__38240 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38240) : success.call(null,G__38240));
}catch (e38239){var e = e38239;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__38241,success,fail){
var map__38242 = p__38241;
var map__38242__$1 = cljs.core.__destructure_map(map__38242);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38242__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__38244 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38244) : success.call(null,G__38244));
}catch (e38243){var e = e38243;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38245,done,error){
var map__38246 = p__38245;
var map__38246__$1 = cljs.core.__destructure_map(map__38246);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38246__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38247,done,error){
var map__38248 = p__38247;
var map__38248__$1 = cljs.core.__destructure_map(map__38248);
var msg = map__38248__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38248__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38248__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38248__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38249){
var map__38250 = p__38249;
var map__38250__$1 = cljs.core.__destructure_map(map__38250);
var src = map__38250__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38250__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38251 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38251) : done.call(null,G__38251));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38252){
var map__38253 = p__38252;
var map__38253__$1 = cljs.core.__destructure_map(map__38253);
var msg__$1 = map__38253__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38253__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38254){var ex = e38254;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38255){
var map__38256 = p__38255;
var map__38256__$1 = cljs.core.__destructure_map(map__38256);
var env = map__38256__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38256__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38270){
var map__38271 = p__38270;
var map__38271__$1 = cljs.core.__destructure_map(map__38271);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38271__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38271__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__38273){
var map__38274 = p__38273;
var map__38274__$1 = cljs.core.__destructure_map(map__38274);
var svc = map__38274__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38274__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
