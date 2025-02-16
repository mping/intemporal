goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___44265 = arguments.length;
var i__5727__auto___44266 = (0);
while(true){
if((i__5727__auto___44266 < len__5726__auto___44265)){
args__5732__auto__.push((arguments[i__5727__auto___44266]));

var G__44267 = (i__5727__auto___44266 + (1));
i__5727__auto___44266 = G__44267;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq43829){
var G__43830 = cljs.core.first(seq43829);
var seq43829__$1 = cljs.core.next(seq43829);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43830,seq43829__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__43833 = cljs.core.seq(sources);
var chunk__43834 = null;
var count__43835 = (0);
var i__43836 = (0);
while(true){
if((i__43836 < count__43835)){
var map__43845 = chunk__43834.cljs$core$IIndexed$_nth$arity$2(null, i__43836);
var map__43845__$1 = cljs.core.__destructure_map(map__43845);
var src = map__43845__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43845__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43845__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43845__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43845__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43846){var e_44268 = e43846;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44268);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44268.message)].join('')));
}

var G__44269 = seq__43833;
var G__44270 = chunk__43834;
var G__44271 = count__43835;
var G__44272 = (i__43836 + (1));
seq__43833 = G__44269;
chunk__43834 = G__44270;
count__43835 = G__44271;
i__43836 = G__44272;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43833);
if(temp__5804__auto__){
var seq__43833__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43833__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__43833__$1);
var G__44273 = cljs.core.chunk_rest(seq__43833__$1);
var G__44274 = c__5525__auto__;
var G__44275 = cljs.core.count(c__5525__auto__);
var G__44276 = (0);
seq__43833 = G__44273;
chunk__43834 = G__44274;
count__43835 = G__44275;
i__43836 = G__44276;
continue;
} else {
var map__43849 = cljs.core.first(seq__43833__$1);
var map__43849__$1 = cljs.core.__destructure_map(map__43849);
var src = map__43849__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43849__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43849__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43849__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43849__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43850){var e_44277 = e43850;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44277);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44277.message)].join('')));
}

var G__44278 = cljs.core.next(seq__43833__$1);
var G__44279 = null;
var G__44280 = (0);
var G__44281 = (0);
seq__43833 = G__44278;
chunk__43834 = G__44279;
count__43835 = G__44280;
i__43836 = G__44281;
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
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__43852 = cljs.core.seq(js_requires);
var chunk__43853 = null;
var count__43854 = (0);
var i__43855 = (0);
while(true){
if((i__43855 < count__43854)){
var js_ns = chunk__43853.cljs$core$IIndexed$_nth$arity$2(null, i__43855);
var require_str_44282 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44282);


var G__44283 = seq__43852;
var G__44284 = chunk__43853;
var G__44285 = count__43854;
var G__44286 = (i__43855 + (1));
seq__43852 = G__44283;
chunk__43853 = G__44284;
count__43854 = G__44285;
i__43855 = G__44286;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43852);
if(temp__5804__auto__){
var seq__43852__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43852__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__43852__$1);
var G__44287 = cljs.core.chunk_rest(seq__43852__$1);
var G__44288 = c__5525__auto__;
var G__44289 = cljs.core.count(c__5525__auto__);
var G__44290 = (0);
seq__43852 = G__44287;
chunk__43853 = G__44288;
count__43854 = G__44289;
i__43855 = G__44290;
continue;
} else {
var js_ns = cljs.core.first(seq__43852__$1);
var require_str_44291 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44291);


var G__44292 = cljs.core.next(seq__43852__$1);
var G__44293 = null;
var G__44294 = (0);
var G__44295 = (0);
seq__43852 = G__44292;
chunk__43853 = G__44293;
count__43854 = G__44294;
i__43855 = G__44295;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__43863){
var map__43864 = p__43863;
var map__43864__$1 = cljs.core.__destructure_map(map__43864);
var msg = map__43864__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43864__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43864__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43867(s__43868){
return (new cljs.core.LazySeq(null,(function (){
var s__43868__$1 = s__43868;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__43868__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__43875 = cljs.core.first(xs__6360__auto__);
var map__43875__$1 = cljs.core.__destructure_map(map__43875);
var src = map__43875__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43875__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43875__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__43868__$1,map__43875,map__43875__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__43864,map__43864__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43867_$_iter__43869(s__43870){
return (new cljs.core.LazySeq(null,((function (s__43868__$1,map__43875,map__43875__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__43864,map__43864__$1,msg,info,reload_info){
return (function (){
var s__43870__$1 = s__43870;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__43870__$1);
if(temp__5804__auto____$1){
var s__43870__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43870__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__43870__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__43872 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__43871 = (0);
while(true){
if((i__43871 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__43871);
cljs.core.chunk_append(b__43872,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__44296 = (i__43871 + (1));
i__43871 = G__44296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43872),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43867_$_iter__43869(cljs.core.chunk_rest(s__43870__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43872),null);
}
} else {
var warning = cljs.core.first(s__43870__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43867_$_iter__43869(cljs.core.rest(s__43870__$2)));
}
} else {
return null;
}
break;
}
});})(s__43868__$1,map__43875,map__43875__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__43864,map__43864__$1,msg,info,reload_info))
,null,null));
});})(s__43868__$1,map__43875,map__43875__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__43864,map__43864__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43867(cljs.core.rest(s__43868__$1)));
} else {
var G__44297 = cljs.core.rest(s__43868__$1);
s__43868__$1 = G__44297;
continue;
}
} else {
var G__44298 = cljs.core.rest(s__43868__$1);
s__43868__$1 = G__44298;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__43878_44299 = cljs.core.seq(warnings);
var chunk__43879_44300 = null;
var count__43880_44301 = (0);
var i__43881_44302 = (0);
while(true){
if((i__43881_44302 < count__43880_44301)){
var map__43888_44303 = chunk__43879_44300.cljs$core$IIndexed$_nth$arity$2(null, i__43881_44302);
var map__43888_44304__$1 = cljs.core.__destructure_map(map__43888_44303);
var w_44305 = map__43888_44304__$1;
var msg_44306__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43888_44304__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43888_44304__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43888_44304__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43888_44304__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44309)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44307),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44308),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44306__$1)].join(''));


var G__44310 = seq__43878_44299;
var G__44311 = chunk__43879_44300;
var G__44312 = count__43880_44301;
var G__44313 = (i__43881_44302 + (1));
seq__43878_44299 = G__44310;
chunk__43879_44300 = G__44311;
count__43880_44301 = G__44312;
i__43881_44302 = G__44313;
continue;
} else {
var temp__5804__auto___44314 = cljs.core.seq(seq__43878_44299);
if(temp__5804__auto___44314){
var seq__43878_44316__$1 = temp__5804__auto___44314;
if(cljs.core.chunked_seq_QMARK_(seq__43878_44316__$1)){
var c__5525__auto___44317 = cljs.core.chunk_first(seq__43878_44316__$1);
var G__44318 = cljs.core.chunk_rest(seq__43878_44316__$1);
var G__44319 = c__5525__auto___44317;
var G__44320 = cljs.core.count(c__5525__auto___44317);
var G__44321 = (0);
seq__43878_44299 = G__44318;
chunk__43879_44300 = G__44319;
count__43880_44301 = G__44320;
i__43881_44302 = G__44321;
continue;
} else {
var map__43889_44322 = cljs.core.first(seq__43878_44316__$1);
var map__43889_44323__$1 = cljs.core.__destructure_map(map__43889_44322);
var w_44324 = map__43889_44323__$1;
var msg_44325__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43889_44323__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43889_44323__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43889_44323__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43889_44323__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44328)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44326),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44327),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44325__$1)].join(''));


var G__44329 = cljs.core.next(seq__43878_44316__$1);
var G__44330 = null;
var G__44331 = (0);
var G__44332 = (0);
seq__43878_44299 = G__44329;
chunk__43879_44300 = G__44330;
count__43880_44301 = G__44331;
i__43881_44302 = G__44332;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__43862_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__43862_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__43892){
var map__43893 = p__43892;
var map__43893__$1 = cljs.core.__destructure_map(map__43893);
var msg = map__43893__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43893__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43893__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__43894 = cljs.core.seq(updates);
var chunk__43896 = null;
var count__43897 = (0);
var i__43898 = (0);
while(true){
if((i__43898 < count__43897)){
var path = chunk__43896.cljs$core$IIndexed$_nth$arity$2(null, i__43898);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44071_44333 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44075_44334 = null;
var count__44076_44335 = (0);
var i__44077_44336 = (0);
while(true){
if((i__44077_44336 < count__44076_44335)){
var node_44337 = chunk__44075_44334.cljs$core$IIndexed$_nth$arity$2(null, i__44077_44336);
if(cljs.core.not(node_44337.shadow$old)){
var path_match_44338 = shadow.cljs.devtools.client.browser.match_paths(node_44337.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44338)){
var new_link_44339 = (function (){var G__44106 = node_44337.cloneNode(true);
G__44106.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44338),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44106;
})();
(node_44337.shadow$old = true);

(new_link_44339.onload = ((function (seq__44071_44333,chunk__44075_44334,count__44076_44335,i__44077_44336,seq__43894,chunk__43896,count__43897,i__43898,new_link_44339,path_match_44338,node_44337,path,map__43893,map__43893__$1,msg,updates,reload_info){
return (function (e){
var seq__44107_44340 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44109_44341 = null;
var count__44110_44342 = (0);
var i__44111_44343 = (0);
while(true){
if((i__44111_44343 < count__44110_44342)){
var map__44120_44344 = chunk__44109_44341.cljs$core$IIndexed$_nth$arity$2(null, i__44111_44343);
var map__44120_44345__$1 = cljs.core.__destructure_map(map__44120_44344);
var task_44346 = map__44120_44345__$1;
var fn_str_44347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44120_44345__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44120_44345__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44349 = goog.getObjectByName(fn_str_44347,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44348)].join(''));

(fn_obj_44349.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44349.cljs$core$IFn$_invoke$arity$2(path,new_link_44339) : fn_obj_44349.call(null, path,new_link_44339));


var G__44350 = seq__44107_44340;
var G__44351 = chunk__44109_44341;
var G__44352 = count__44110_44342;
var G__44353 = (i__44111_44343 + (1));
seq__44107_44340 = G__44350;
chunk__44109_44341 = G__44351;
count__44110_44342 = G__44352;
i__44111_44343 = G__44353;
continue;
} else {
var temp__5804__auto___44354 = cljs.core.seq(seq__44107_44340);
if(temp__5804__auto___44354){
var seq__44107_44355__$1 = temp__5804__auto___44354;
if(cljs.core.chunked_seq_QMARK_(seq__44107_44355__$1)){
var c__5525__auto___44356 = cljs.core.chunk_first(seq__44107_44355__$1);
var G__44357 = cljs.core.chunk_rest(seq__44107_44355__$1);
var G__44358 = c__5525__auto___44356;
var G__44359 = cljs.core.count(c__5525__auto___44356);
var G__44360 = (0);
seq__44107_44340 = G__44357;
chunk__44109_44341 = G__44358;
count__44110_44342 = G__44359;
i__44111_44343 = G__44360;
continue;
} else {
var map__44125_44361 = cljs.core.first(seq__44107_44355__$1);
var map__44125_44362__$1 = cljs.core.__destructure_map(map__44125_44361);
var task_44363 = map__44125_44362__$1;
var fn_str_44364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44125_44362__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44125_44362__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44366 = goog.getObjectByName(fn_str_44364,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44365)].join(''));

(fn_obj_44366.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44366.cljs$core$IFn$_invoke$arity$2(path,new_link_44339) : fn_obj_44366.call(null, path,new_link_44339));


var G__44367 = cljs.core.next(seq__44107_44355__$1);
var G__44368 = null;
var G__44369 = (0);
var G__44370 = (0);
seq__44107_44340 = G__44367;
chunk__44109_44341 = G__44368;
count__44110_44342 = G__44369;
i__44111_44343 = G__44370;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44337);
});})(seq__44071_44333,chunk__44075_44334,count__44076_44335,i__44077_44336,seq__43894,chunk__43896,count__43897,i__43898,new_link_44339,path_match_44338,node_44337,path,map__43893,map__43893__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44338], 0));

goog.dom.insertSiblingAfter(new_link_44339,node_44337);


var G__44371 = seq__44071_44333;
var G__44372 = chunk__44075_44334;
var G__44373 = count__44076_44335;
var G__44374 = (i__44077_44336 + (1));
seq__44071_44333 = G__44371;
chunk__44075_44334 = G__44372;
count__44076_44335 = G__44373;
i__44077_44336 = G__44374;
continue;
} else {
var G__44375 = seq__44071_44333;
var G__44376 = chunk__44075_44334;
var G__44377 = count__44076_44335;
var G__44378 = (i__44077_44336 + (1));
seq__44071_44333 = G__44375;
chunk__44075_44334 = G__44376;
count__44076_44335 = G__44377;
i__44077_44336 = G__44378;
continue;
}
} else {
var G__44379 = seq__44071_44333;
var G__44380 = chunk__44075_44334;
var G__44381 = count__44076_44335;
var G__44382 = (i__44077_44336 + (1));
seq__44071_44333 = G__44379;
chunk__44075_44334 = G__44380;
count__44076_44335 = G__44381;
i__44077_44336 = G__44382;
continue;
}
} else {
var temp__5804__auto___44383 = cljs.core.seq(seq__44071_44333);
if(temp__5804__auto___44383){
var seq__44071_44384__$1 = temp__5804__auto___44383;
if(cljs.core.chunked_seq_QMARK_(seq__44071_44384__$1)){
var c__5525__auto___44385 = cljs.core.chunk_first(seq__44071_44384__$1);
var G__44386 = cljs.core.chunk_rest(seq__44071_44384__$1);
var G__44387 = c__5525__auto___44385;
var G__44388 = cljs.core.count(c__5525__auto___44385);
var G__44389 = (0);
seq__44071_44333 = G__44386;
chunk__44075_44334 = G__44387;
count__44076_44335 = G__44388;
i__44077_44336 = G__44389;
continue;
} else {
var node_44390 = cljs.core.first(seq__44071_44384__$1);
if(cljs.core.not(node_44390.shadow$old)){
var path_match_44391 = shadow.cljs.devtools.client.browser.match_paths(node_44390.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44391)){
var new_link_44392 = (function (){var G__44126 = node_44390.cloneNode(true);
G__44126.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44391),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44126;
})();
(node_44390.shadow$old = true);

(new_link_44392.onload = ((function (seq__44071_44333,chunk__44075_44334,count__44076_44335,i__44077_44336,seq__43894,chunk__43896,count__43897,i__43898,new_link_44392,path_match_44391,node_44390,seq__44071_44384__$1,temp__5804__auto___44383,path,map__43893,map__43893__$1,msg,updates,reload_info){
return (function (e){
var seq__44127_44393 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44129_44394 = null;
var count__44130_44395 = (0);
var i__44131_44396 = (0);
while(true){
if((i__44131_44396 < count__44130_44395)){
var map__44137_44398 = chunk__44129_44394.cljs$core$IIndexed$_nth$arity$2(null, i__44131_44396);
var map__44137_44399__$1 = cljs.core.__destructure_map(map__44137_44398);
var task_44400 = map__44137_44399__$1;
var fn_str_44401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44137_44399__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44137_44399__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44403 = goog.getObjectByName(fn_str_44401,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44402)].join(''));

(fn_obj_44403.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44403.cljs$core$IFn$_invoke$arity$2(path,new_link_44392) : fn_obj_44403.call(null, path,new_link_44392));


var G__44404 = seq__44127_44393;
var G__44405 = chunk__44129_44394;
var G__44406 = count__44130_44395;
var G__44407 = (i__44131_44396 + (1));
seq__44127_44393 = G__44404;
chunk__44129_44394 = G__44405;
count__44130_44395 = G__44406;
i__44131_44396 = G__44407;
continue;
} else {
var temp__5804__auto___44408__$1 = cljs.core.seq(seq__44127_44393);
if(temp__5804__auto___44408__$1){
var seq__44127_44409__$1 = temp__5804__auto___44408__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44127_44409__$1)){
var c__5525__auto___44410 = cljs.core.chunk_first(seq__44127_44409__$1);
var G__44411 = cljs.core.chunk_rest(seq__44127_44409__$1);
var G__44412 = c__5525__auto___44410;
var G__44413 = cljs.core.count(c__5525__auto___44410);
var G__44414 = (0);
seq__44127_44393 = G__44411;
chunk__44129_44394 = G__44412;
count__44130_44395 = G__44413;
i__44131_44396 = G__44414;
continue;
} else {
var map__44138_44415 = cljs.core.first(seq__44127_44409__$1);
var map__44138_44416__$1 = cljs.core.__destructure_map(map__44138_44415);
var task_44417 = map__44138_44416__$1;
var fn_str_44418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44138_44416__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44138_44416__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44420 = goog.getObjectByName(fn_str_44418,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44419)].join(''));

(fn_obj_44420.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44420.cljs$core$IFn$_invoke$arity$2(path,new_link_44392) : fn_obj_44420.call(null, path,new_link_44392));


var G__44421 = cljs.core.next(seq__44127_44409__$1);
var G__44422 = null;
var G__44423 = (0);
var G__44424 = (0);
seq__44127_44393 = G__44421;
chunk__44129_44394 = G__44422;
count__44130_44395 = G__44423;
i__44131_44396 = G__44424;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44390);
});})(seq__44071_44333,chunk__44075_44334,count__44076_44335,i__44077_44336,seq__43894,chunk__43896,count__43897,i__43898,new_link_44392,path_match_44391,node_44390,seq__44071_44384__$1,temp__5804__auto___44383,path,map__43893,map__43893__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44391], 0));

goog.dom.insertSiblingAfter(new_link_44392,node_44390);


var G__44425 = cljs.core.next(seq__44071_44384__$1);
var G__44426 = null;
var G__44427 = (0);
var G__44428 = (0);
seq__44071_44333 = G__44425;
chunk__44075_44334 = G__44426;
count__44076_44335 = G__44427;
i__44077_44336 = G__44428;
continue;
} else {
var G__44429 = cljs.core.next(seq__44071_44384__$1);
var G__44430 = null;
var G__44431 = (0);
var G__44432 = (0);
seq__44071_44333 = G__44429;
chunk__44075_44334 = G__44430;
count__44076_44335 = G__44431;
i__44077_44336 = G__44432;
continue;
}
} else {
var G__44433 = cljs.core.next(seq__44071_44384__$1);
var G__44434 = null;
var G__44435 = (0);
var G__44436 = (0);
seq__44071_44333 = G__44433;
chunk__44075_44334 = G__44434;
count__44076_44335 = G__44435;
i__44077_44336 = G__44436;
continue;
}
}
} else {
}
}
break;
}


var G__44437 = seq__43894;
var G__44438 = chunk__43896;
var G__44439 = count__43897;
var G__44440 = (i__43898 + (1));
seq__43894 = G__44437;
chunk__43896 = G__44438;
count__43897 = G__44439;
i__43898 = G__44440;
continue;
} else {
var G__44441 = seq__43894;
var G__44442 = chunk__43896;
var G__44443 = count__43897;
var G__44444 = (i__43898 + (1));
seq__43894 = G__44441;
chunk__43896 = G__44442;
count__43897 = G__44443;
i__43898 = G__44444;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43894);
if(temp__5804__auto__){
var seq__43894__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43894__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__43894__$1);
var G__44445 = cljs.core.chunk_rest(seq__43894__$1);
var G__44446 = c__5525__auto__;
var G__44447 = cljs.core.count(c__5525__auto__);
var G__44448 = (0);
seq__43894 = G__44445;
chunk__43896 = G__44446;
count__43897 = G__44447;
i__43898 = G__44448;
continue;
} else {
var path = cljs.core.first(seq__43894__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44144_44449 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44148_44450 = null;
var count__44149_44451 = (0);
var i__44150_44452 = (0);
while(true){
if((i__44150_44452 < count__44149_44451)){
var node_44453 = chunk__44148_44450.cljs$core$IIndexed$_nth$arity$2(null, i__44150_44452);
if(cljs.core.not(node_44453.shadow$old)){
var path_match_44454 = shadow.cljs.devtools.client.browser.match_paths(node_44453.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44454)){
var new_link_44456 = (function (){var G__44185 = node_44453.cloneNode(true);
G__44185.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44454),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44185;
})();
(node_44453.shadow$old = true);

(new_link_44456.onload = ((function (seq__44144_44449,chunk__44148_44450,count__44149_44451,i__44150_44452,seq__43894,chunk__43896,count__43897,i__43898,new_link_44456,path_match_44454,node_44453,path,seq__43894__$1,temp__5804__auto__,map__43893,map__43893__$1,msg,updates,reload_info){
return (function (e){
var seq__44188_44457 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44190_44458 = null;
var count__44191_44459 = (0);
var i__44192_44460 = (0);
while(true){
if((i__44192_44460 < count__44191_44459)){
var map__44196_44461 = chunk__44190_44458.cljs$core$IIndexed$_nth$arity$2(null, i__44192_44460);
var map__44196_44462__$1 = cljs.core.__destructure_map(map__44196_44461);
var task_44463 = map__44196_44462__$1;
var fn_str_44464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44196_44462__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44196_44462__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44466 = goog.getObjectByName(fn_str_44464,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44465)].join(''));

(fn_obj_44466.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44466.cljs$core$IFn$_invoke$arity$2(path,new_link_44456) : fn_obj_44466.call(null, path,new_link_44456));


var G__44467 = seq__44188_44457;
var G__44468 = chunk__44190_44458;
var G__44469 = count__44191_44459;
var G__44470 = (i__44192_44460 + (1));
seq__44188_44457 = G__44467;
chunk__44190_44458 = G__44468;
count__44191_44459 = G__44469;
i__44192_44460 = G__44470;
continue;
} else {
var temp__5804__auto___44471__$1 = cljs.core.seq(seq__44188_44457);
if(temp__5804__auto___44471__$1){
var seq__44188_44472__$1 = temp__5804__auto___44471__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44188_44472__$1)){
var c__5525__auto___44473 = cljs.core.chunk_first(seq__44188_44472__$1);
var G__44474 = cljs.core.chunk_rest(seq__44188_44472__$1);
var G__44475 = c__5525__auto___44473;
var G__44476 = cljs.core.count(c__5525__auto___44473);
var G__44477 = (0);
seq__44188_44457 = G__44474;
chunk__44190_44458 = G__44475;
count__44191_44459 = G__44476;
i__44192_44460 = G__44477;
continue;
} else {
var map__44197_44478 = cljs.core.first(seq__44188_44472__$1);
var map__44197_44479__$1 = cljs.core.__destructure_map(map__44197_44478);
var task_44480 = map__44197_44479__$1;
var fn_str_44481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44197_44479__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44197_44479__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44483 = goog.getObjectByName(fn_str_44481,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44482)].join(''));

(fn_obj_44483.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44483.cljs$core$IFn$_invoke$arity$2(path,new_link_44456) : fn_obj_44483.call(null, path,new_link_44456));


var G__44484 = cljs.core.next(seq__44188_44472__$1);
var G__44485 = null;
var G__44486 = (0);
var G__44487 = (0);
seq__44188_44457 = G__44484;
chunk__44190_44458 = G__44485;
count__44191_44459 = G__44486;
i__44192_44460 = G__44487;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44453);
});})(seq__44144_44449,chunk__44148_44450,count__44149_44451,i__44150_44452,seq__43894,chunk__43896,count__43897,i__43898,new_link_44456,path_match_44454,node_44453,path,seq__43894__$1,temp__5804__auto__,map__43893,map__43893__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44454], 0));

goog.dom.insertSiblingAfter(new_link_44456,node_44453);


var G__44488 = seq__44144_44449;
var G__44489 = chunk__44148_44450;
var G__44490 = count__44149_44451;
var G__44491 = (i__44150_44452 + (1));
seq__44144_44449 = G__44488;
chunk__44148_44450 = G__44489;
count__44149_44451 = G__44490;
i__44150_44452 = G__44491;
continue;
} else {
var G__44492 = seq__44144_44449;
var G__44493 = chunk__44148_44450;
var G__44494 = count__44149_44451;
var G__44495 = (i__44150_44452 + (1));
seq__44144_44449 = G__44492;
chunk__44148_44450 = G__44493;
count__44149_44451 = G__44494;
i__44150_44452 = G__44495;
continue;
}
} else {
var G__44496 = seq__44144_44449;
var G__44497 = chunk__44148_44450;
var G__44498 = count__44149_44451;
var G__44499 = (i__44150_44452 + (1));
seq__44144_44449 = G__44496;
chunk__44148_44450 = G__44497;
count__44149_44451 = G__44498;
i__44150_44452 = G__44499;
continue;
}
} else {
var temp__5804__auto___44500__$1 = cljs.core.seq(seq__44144_44449);
if(temp__5804__auto___44500__$1){
var seq__44144_44501__$1 = temp__5804__auto___44500__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44144_44501__$1)){
var c__5525__auto___44502 = cljs.core.chunk_first(seq__44144_44501__$1);
var G__44503 = cljs.core.chunk_rest(seq__44144_44501__$1);
var G__44504 = c__5525__auto___44502;
var G__44505 = cljs.core.count(c__5525__auto___44502);
var G__44506 = (0);
seq__44144_44449 = G__44503;
chunk__44148_44450 = G__44504;
count__44149_44451 = G__44505;
i__44150_44452 = G__44506;
continue;
} else {
var node_44507 = cljs.core.first(seq__44144_44501__$1);
if(cljs.core.not(node_44507.shadow$old)){
var path_match_44509 = shadow.cljs.devtools.client.browser.match_paths(node_44507.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44509)){
var new_link_44510 = (function (){var G__44201 = node_44507.cloneNode(true);
G__44201.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44509),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44201;
})();
(node_44507.shadow$old = true);

(new_link_44510.onload = ((function (seq__44144_44449,chunk__44148_44450,count__44149_44451,i__44150_44452,seq__43894,chunk__43896,count__43897,i__43898,new_link_44510,path_match_44509,node_44507,seq__44144_44501__$1,temp__5804__auto___44500__$1,path,seq__43894__$1,temp__5804__auto__,map__43893,map__43893__$1,msg,updates,reload_info){
return (function (e){
var seq__44205_44511 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44207_44512 = null;
var count__44208_44513 = (0);
var i__44209_44514 = (0);
while(true){
if((i__44209_44514 < count__44208_44513)){
var map__44218_44515 = chunk__44207_44512.cljs$core$IIndexed$_nth$arity$2(null, i__44209_44514);
var map__44218_44516__$1 = cljs.core.__destructure_map(map__44218_44515);
var task_44517 = map__44218_44516__$1;
var fn_str_44518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44218_44516__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44218_44516__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44520 = goog.getObjectByName(fn_str_44518,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44519)].join(''));

(fn_obj_44520.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44520.cljs$core$IFn$_invoke$arity$2(path,new_link_44510) : fn_obj_44520.call(null, path,new_link_44510));


var G__44521 = seq__44205_44511;
var G__44522 = chunk__44207_44512;
var G__44523 = count__44208_44513;
var G__44524 = (i__44209_44514 + (1));
seq__44205_44511 = G__44521;
chunk__44207_44512 = G__44522;
count__44208_44513 = G__44523;
i__44209_44514 = G__44524;
continue;
} else {
var temp__5804__auto___44525__$2 = cljs.core.seq(seq__44205_44511);
if(temp__5804__auto___44525__$2){
var seq__44205_44526__$1 = temp__5804__auto___44525__$2;
if(cljs.core.chunked_seq_QMARK_(seq__44205_44526__$1)){
var c__5525__auto___44527 = cljs.core.chunk_first(seq__44205_44526__$1);
var G__44528 = cljs.core.chunk_rest(seq__44205_44526__$1);
var G__44529 = c__5525__auto___44527;
var G__44530 = cljs.core.count(c__5525__auto___44527);
var G__44531 = (0);
seq__44205_44511 = G__44528;
chunk__44207_44512 = G__44529;
count__44208_44513 = G__44530;
i__44209_44514 = G__44531;
continue;
} else {
var map__44220_44532 = cljs.core.first(seq__44205_44526__$1);
var map__44220_44533__$1 = cljs.core.__destructure_map(map__44220_44532);
var task_44534 = map__44220_44533__$1;
var fn_str_44535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44220_44533__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44220_44533__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44537 = goog.getObjectByName(fn_str_44535,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44536)].join(''));

(fn_obj_44537.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44537.cljs$core$IFn$_invoke$arity$2(path,new_link_44510) : fn_obj_44537.call(null, path,new_link_44510));


var G__44538 = cljs.core.next(seq__44205_44526__$1);
var G__44539 = null;
var G__44540 = (0);
var G__44541 = (0);
seq__44205_44511 = G__44538;
chunk__44207_44512 = G__44539;
count__44208_44513 = G__44540;
i__44209_44514 = G__44541;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44507);
});})(seq__44144_44449,chunk__44148_44450,count__44149_44451,i__44150_44452,seq__43894,chunk__43896,count__43897,i__43898,new_link_44510,path_match_44509,node_44507,seq__44144_44501__$1,temp__5804__auto___44500__$1,path,seq__43894__$1,temp__5804__auto__,map__43893,map__43893__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44509], 0));

goog.dom.insertSiblingAfter(new_link_44510,node_44507);


var G__44542 = cljs.core.next(seq__44144_44501__$1);
var G__44543 = null;
var G__44544 = (0);
var G__44545 = (0);
seq__44144_44449 = G__44542;
chunk__44148_44450 = G__44543;
count__44149_44451 = G__44544;
i__44150_44452 = G__44545;
continue;
} else {
var G__44546 = cljs.core.next(seq__44144_44501__$1);
var G__44547 = null;
var G__44548 = (0);
var G__44549 = (0);
seq__44144_44449 = G__44546;
chunk__44148_44450 = G__44547;
count__44149_44451 = G__44548;
i__44150_44452 = G__44549;
continue;
}
} else {
var G__44550 = cljs.core.next(seq__44144_44501__$1);
var G__44551 = null;
var G__44552 = (0);
var G__44553 = (0);
seq__44144_44449 = G__44550;
chunk__44148_44450 = G__44551;
count__44149_44451 = G__44552;
i__44150_44452 = G__44553;
continue;
}
}
} else {
}
}
break;
}


var G__44554 = cljs.core.next(seq__43894__$1);
var G__44555 = null;
var G__44556 = (0);
var G__44557 = (0);
seq__43894 = G__44554;
chunk__43896 = G__44555;
count__43897 = G__44556;
i__43898 = G__44557;
continue;
} else {
var G__44558 = cljs.core.next(seq__43894__$1);
var G__44559 = null;
var G__44560 = (0);
var G__44561 = (0);
seq__43894 = G__44558;
chunk__43896 = G__44559;
count__43897 = G__44560;
i__43898 = G__44561;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__44227){
var map__44228 = p__44227;
var map__44228__$1 = cljs.core.__destructure_map(map__44228);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44228__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__44229,done,error){
var map__44230 = p__44229;
var map__44230__$1 = cljs.core.__destructure_map(map__44230);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44230__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__44238,done,error){
var map__44239 = p__44238;
var map__44239__$1 = cljs.core.__destructure_map(map__44239);
var msg = map__44239__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44239__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44239__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44239__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44240){
var map__44241 = p__44240;
var map__44241__$1 = cljs.core.__destructure_map(map__44241);
var src = map__44241__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44241__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__44242 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__44242) : done.call(null, G__44242));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__44243){
var map__44244 = p__44243;
var map__44244__$1 = cljs.core.__destructure_map(map__44244);
var msg__$1 = map__44244__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44244__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e44245){var ex = e44245;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__44246){
var map__44247 = p__44246;
var map__44247__$1 = cljs.core.__destructure_map(map__44247);
var env = map__44247__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44247__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__44255){
var map__44256 = p__44255;
var map__44256__$1 = cljs.core.__destructure_map(map__44256);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44256__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44256__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__44257){
var map__44258 = p__44257;
var map__44258__$1 = cljs.core.__destructure_map(map__44258);
var svc = map__44258__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44258__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
