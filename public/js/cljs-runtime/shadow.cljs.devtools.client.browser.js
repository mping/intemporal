goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44171 = arguments.length;
var i__5750__auto___44172 = (0);
while(true){
if((i__5750__auto___44172 < len__5749__auto___44171)){
args__5755__auto__.push((arguments[i__5750__auto___44172]));

var G__44173 = (i__5750__auto___44172 + (1));
i__5750__auto___44172 = G__44173;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq43292){
var G__43293 = cljs.core.first(seq43292);
var seq43292__$1 = cljs.core.next(seq43292);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43293,seq43292__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__43305 = cljs.core.seq(sources);
var chunk__43306 = null;
var count__43307 = (0);
var i__43308 = (0);
while(true){
if((i__43308 < count__43307)){
var map__43318 = chunk__43306.cljs$core$IIndexed$_nth$arity$2(null,i__43308);
var map__43318__$1 = cljs.core.__destructure_map(map__43318);
var src = map__43318__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43318__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43318__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43318__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43318__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43320){var e_44176 = e43320;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44176);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44176.message)].join('')));
}

var G__44179 = seq__43305;
var G__44180 = chunk__43306;
var G__44181 = count__43307;
var G__44182 = (i__43308 + (1));
seq__43305 = G__44179;
chunk__43306 = G__44180;
count__43307 = G__44181;
i__43308 = G__44182;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__43305);
if(temp__5825__auto__){
var seq__43305__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43305__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__43305__$1);
var G__44183 = cljs.core.chunk_rest(seq__43305__$1);
var G__44184 = c__5548__auto__;
var G__44185 = cljs.core.count(c__5548__auto__);
var G__44186 = (0);
seq__43305 = G__44183;
chunk__43306 = G__44184;
count__43307 = G__44185;
i__43308 = G__44186;
continue;
} else {
var map__43324 = cljs.core.first(seq__43305__$1);
var map__43324__$1 = cljs.core.__destructure_map(map__43324);
var src = map__43324__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43324__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43324__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43324__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43324__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43325){var e_44188 = e43325;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44188);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44188.message)].join('')));
}

var G__44190 = cljs.core.next(seq__43305__$1);
var G__44191 = null;
var G__44192 = (0);
var G__44193 = (0);
seq__43305 = G__44190;
chunk__43306 = G__44191;
count__43307 = G__44192;
i__43308 = G__44193;
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
var seq__43333 = cljs.core.seq(js_requires);
var chunk__43334 = null;
var count__43335 = (0);
var i__43336 = (0);
while(true){
if((i__43336 < count__43335)){
var js_ns = chunk__43334.cljs$core$IIndexed$_nth$arity$2(null,i__43336);
var require_str_44197 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44197);


var G__44201 = seq__43333;
var G__44202 = chunk__43334;
var G__44203 = count__43335;
var G__44204 = (i__43336 + (1));
seq__43333 = G__44201;
chunk__43334 = G__44202;
count__43335 = G__44203;
i__43336 = G__44204;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__43333);
if(temp__5825__auto__){
var seq__43333__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43333__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__43333__$1);
var G__44206 = cljs.core.chunk_rest(seq__43333__$1);
var G__44207 = c__5548__auto__;
var G__44208 = cljs.core.count(c__5548__auto__);
var G__44209 = (0);
seq__43333 = G__44206;
chunk__43334 = G__44207;
count__43335 = G__44208;
i__43336 = G__44209;
continue;
} else {
var js_ns = cljs.core.first(seq__43333__$1);
var require_str_44210 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44210);


var G__44211 = cljs.core.next(seq__43333__$1);
var G__44212 = null;
var G__44213 = (0);
var G__44214 = (0);
seq__43333 = G__44211;
chunk__43334 = G__44212;
count__43335 = G__44213;
i__43336 = G__44214;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__43350){
var map__43351 = p__43350;
var map__43351__$1 = cljs.core.__destructure_map(map__43351);
var msg = map__43351__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43351__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43351__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43353(s__43354){
return (new cljs.core.LazySeq(null,(function (){
var s__43354__$1 = s__43354;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43354__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__43363 = cljs.core.first(xs__6385__auto__);
var map__43363__$1 = cljs.core.__destructure_map(map__43363);
var src = map__43363__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43363__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43363__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__43354__$1,map__43363,map__43363__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__43351,map__43351__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43353_$_iter__43355(s__43356){
return (new cljs.core.LazySeq(null,((function (s__43354__$1,map__43363,map__43363__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__43351,map__43351__$1,msg,info,reload_info){
return (function (){
var s__43356__$1 = s__43356;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__43356__$1);
if(temp__5825__auto____$1){
var s__43356__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43356__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43356__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43358 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43357 = (0);
while(true){
if((i__43357 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__43357);
cljs.core.chunk_append(b__43358,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__44220 = (i__43357 + (1));
i__43357 = G__44220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43358),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43353_$_iter__43355(cljs.core.chunk_rest(s__43356__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43358),null);
}
} else {
var warning = cljs.core.first(s__43356__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43353_$_iter__43355(cljs.core.rest(s__43356__$2)));
}
} else {
return null;
}
break;
}
});})(s__43354__$1,map__43363,map__43363__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__43351,map__43351__$1,msg,info,reload_info))
,null,null));
});})(s__43354__$1,map__43363,map__43363__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__43351,map__43351__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43353(cljs.core.rest(s__43354__$1)));
} else {
var G__44221 = cljs.core.rest(s__43354__$1);
s__43354__$1 = G__44221;
continue;
}
} else {
var G__44222 = cljs.core.rest(s__43354__$1);
s__43354__$1 = G__44222;
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
var seq__43368_44223 = cljs.core.seq(warnings);
var chunk__43369_44224 = null;
var count__43370_44225 = (0);
var i__43371_44226 = (0);
while(true){
if((i__43371_44226 < count__43370_44225)){
var map__43400_44229 = chunk__43369_44224.cljs$core$IIndexed$_nth$arity$2(null,i__43371_44226);
var map__43400_44230__$1 = cljs.core.__destructure_map(map__43400_44229);
var w_44231 = map__43400_44230__$1;
var msg_44232__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43400_44230__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43400_44230__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43400_44230__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43400_44230__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44235)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44233),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44234),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44232__$1)].join(''));


var G__44238 = seq__43368_44223;
var G__44239 = chunk__43369_44224;
var G__44240 = count__43370_44225;
var G__44241 = (i__43371_44226 + (1));
seq__43368_44223 = G__44238;
chunk__43369_44224 = G__44239;
count__43370_44225 = G__44240;
i__43371_44226 = G__44241;
continue;
} else {
var temp__5825__auto___44242 = cljs.core.seq(seq__43368_44223);
if(temp__5825__auto___44242){
var seq__43368_44243__$1 = temp__5825__auto___44242;
if(cljs.core.chunked_seq_QMARK_(seq__43368_44243__$1)){
var c__5548__auto___44245 = cljs.core.chunk_first(seq__43368_44243__$1);
var G__44246 = cljs.core.chunk_rest(seq__43368_44243__$1);
var G__44247 = c__5548__auto___44245;
var G__44248 = cljs.core.count(c__5548__auto___44245);
var G__44249 = (0);
seq__43368_44223 = G__44246;
chunk__43369_44224 = G__44247;
count__43370_44225 = G__44248;
i__43371_44226 = G__44249;
continue;
} else {
var map__43414_44250 = cljs.core.first(seq__43368_44243__$1);
var map__43414_44251__$1 = cljs.core.__destructure_map(map__43414_44250);
var w_44252 = map__43414_44251__$1;
var msg_44253__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43414_44251__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43414_44251__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43414_44251__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43414_44251__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44256)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44254),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44255),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44253__$1)].join(''));


var G__44258 = cljs.core.next(seq__43368_44243__$1);
var G__44259 = null;
var G__44260 = (0);
var G__44261 = (0);
seq__43368_44223 = G__44258;
chunk__43369_44224 = G__44259;
count__43370_44225 = G__44260;
i__43371_44226 = G__44261;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__43348_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__43348_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__43435 = node_uri;
G__43435.setQuery(null);

G__43435.setPath(new$);

return G__43435;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__43443){
var map__43444 = p__43443;
var map__43444__$1 = cljs.core.__destructure_map(map__43444);
var msg = map__43444__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43444__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43444__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__43446 = cljs.core.seq(updates);
var chunk__43448 = null;
var count__43449 = (0);
var i__43450 = (0);
while(true){
if((i__43450 < count__43449)){
var path = chunk__43448.cljs$core$IIndexed$_nth$arity$2(null,i__43450);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43728_44266 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43732_44267 = null;
var count__43733_44268 = (0);
var i__43734_44269 = (0);
while(true){
if((i__43734_44269 < count__43733_44268)){
var node_44270 = chunk__43732_44267.cljs$core$IIndexed$_nth$arity$2(null,i__43734_44269);
if(cljs.core.not(node_44270.shadow$old)){
var path_match_44271 = shadow.cljs.devtools.client.browser.match_paths(node_44270.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44271)){
var new_link_44272 = (function (){var G__43814 = node_44270.cloneNode(true);
G__43814.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44271),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43814;
})();
(node_44270.shadow$old = true);

(new_link_44272.onload = ((function (seq__43728_44266,chunk__43732_44267,count__43733_44268,i__43734_44269,seq__43446,chunk__43448,count__43449,i__43450,new_link_44272,path_match_44271,node_44270,path,map__43444,map__43444__$1,msg,updates,reload_info){
return (function (e){
var seq__43816_44273 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43818_44274 = null;
var count__43819_44275 = (0);
var i__43820_44276 = (0);
while(true){
if((i__43820_44276 < count__43819_44275)){
var map__43828_44279 = chunk__43818_44274.cljs$core$IIndexed$_nth$arity$2(null,i__43820_44276);
var map__43828_44280__$1 = cljs.core.__destructure_map(map__43828_44279);
var task_44281 = map__43828_44280__$1;
var fn_str_44282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43828_44280__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43828_44280__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44284 = goog.getObjectByName(fn_str_44282,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44283)].join(''));

(fn_obj_44284.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44284.cljs$core$IFn$_invoke$arity$2(path,new_link_44272) : fn_obj_44284.call(null,path,new_link_44272));


var G__44287 = seq__43816_44273;
var G__44288 = chunk__43818_44274;
var G__44289 = count__43819_44275;
var G__44290 = (i__43820_44276 + (1));
seq__43816_44273 = G__44287;
chunk__43818_44274 = G__44288;
count__43819_44275 = G__44289;
i__43820_44276 = G__44290;
continue;
} else {
var temp__5825__auto___44291 = cljs.core.seq(seq__43816_44273);
if(temp__5825__auto___44291){
var seq__43816_44292__$1 = temp__5825__auto___44291;
if(cljs.core.chunked_seq_QMARK_(seq__43816_44292__$1)){
var c__5548__auto___44293 = cljs.core.chunk_first(seq__43816_44292__$1);
var G__44294 = cljs.core.chunk_rest(seq__43816_44292__$1);
var G__44295 = c__5548__auto___44293;
var G__44296 = cljs.core.count(c__5548__auto___44293);
var G__44297 = (0);
seq__43816_44273 = G__44294;
chunk__43818_44274 = G__44295;
count__43819_44275 = G__44296;
i__43820_44276 = G__44297;
continue;
} else {
var map__43833_44299 = cljs.core.first(seq__43816_44292__$1);
var map__43833_44300__$1 = cljs.core.__destructure_map(map__43833_44299);
var task_44301 = map__43833_44300__$1;
var fn_str_44302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43833_44300__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43833_44300__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44304 = goog.getObjectByName(fn_str_44302,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44303)].join(''));

(fn_obj_44304.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44304.cljs$core$IFn$_invoke$arity$2(path,new_link_44272) : fn_obj_44304.call(null,path,new_link_44272));


var G__44305 = cljs.core.next(seq__43816_44292__$1);
var G__44306 = null;
var G__44307 = (0);
var G__44308 = (0);
seq__43816_44273 = G__44305;
chunk__43818_44274 = G__44306;
count__43819_44275 = G__44307;
i__43820_44276 = G__44308;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44270);
});})(seq__43728_44266,chunk__43732_44267,count__43733_44268,i__43734_44269,seq__43446,chunk__43448,count__43449,i__43450,new_link_44272,path_match_44271,node_44270,path,map__43444,map__43444__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44271], 0));

goog.dom.insertSiblingAfter(new_link_44272,node_44270);


var G__44309 = seq__43728_44266;
var G__44310 = chunk__43732_44267;
var G__44311 = count__43733_44268;
var G__44312 = (i__43734_44269 + (1));
seq__43728_44266 = G__44309;
chunk__43732_44267 = G__44310;
count__43733_44268 = G__44311;
i__43734_44269 = G__44312;
continue;
} else {
var G__44313 = seq__43728_44266;
var G__44314 = chunk__43732_44267;
var G__44315 = count__43733_44268;
var G__44316 = (i__43734_44269 + (1));
seq__43728_44266 = G__44313;
chunk__43732_44267 = G__44314;
count__43733_44268 = G__44315;
i__43734_44269 = G__44316;
continue;
}
} else {
var G__44317 = seq__43728_44266;
var G__44318 = chunk__43732_44267;
var G__44319 = count__43733_44268;
var G__44320 = (i__43734_44269 + (1));
seq__43728_44266 = G__44317;
chunk__43732_44267 = G__44318;
count__43733_44268 = G__44319;
i__43734_44269 = G__44320;
continue;
}
} else {
var temp__5825__auto___44321 = cljs.core.seq(seq__43728_44266);
if(temp__5825__auto___44321){
var seq__43728_44322__$1 = temp__5825__auto___44321;
if(cljs.core.chunked_seq_QMARK_(seq__43728_44322__$1)){
var c__5548__auto___44323 = cljs.core.chunk_first(seq__43728_44322__$1);
var G__44324 = cljs.core.chunk_rest(seq__43728_44322__$1);
var G__44325 = c__5548__auto___44323;
var G__44326 = cljs.core.count(c__5548__auto___44323);
var G__44327 = (0);
seq__43728_44266 = G__44324;
chunk__43732_44267 = G__44325;
count__43733_44268 = G__44326;
i__43734_44269 = G__44327;
continue;
} else {
var node_44328 = cljs.core.first(seq__43728_44322__$1);
if(cljs.core.not(node_44328.shadow$old)){
var path_match_44329 = shadow.cljs.devtools.client.browser.match_paths(node_44328.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44329)){
var new_link_44331 = (function (){var G__43844 = node_44328.cloneNode(true);
G__43844.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44329),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43844;
})();
(node_44328.shadow$old = true);

(new_link_44331.onload = ((function (seq__43728_44266,chunk__43732_44267,count__43733_44268,i__43734_44269,seq__43446,chunk__43448,count__43449,i__43450,new_link_44331,path_match_44329,node_44328,seq__43728_44322__$1,temp__5825__auto___44321,path,map__43444,map__43444__$1,msg,updates,reload_info){
return (function (e){
var seq__43849_44332 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43851_44333 = null;
var count__43852_44334 = (0);
var i__43853_44335 = (0);
while(true){
if((i__43853_44335 < count__43852_44334)){
var map__43869_44336 = chunk__43851_44333.cljs$core$IIndexed$_nth$arity$2(null,i__43853_44335);
var map__43869_44337__$1 = cljs.core.__destructure_map(map__43869_44336);
var task_44338 = map__43869_44337__$1;
var fn_str_44339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43869_44337__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43869_44337__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44341 = goog.getObjectByName(fn_str_44339,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44340)].join(''));

(fn_obj_44341.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44341.cljs$core$IFn$_invoke$arity$2(path,new_link_44331) : fn_obj_44341.call(null,path,new_link_44331));


var G__44344 = seq__43849_44332;
var G__44345 = chunk__43851_44333;
var G__44346 = count__43852_44334;
var G__44347 = (i__43853_44335 + (1));
seq__43849_44332 = G__44344;
chunk__43851_44333 = G__44345;
count__43852_44334 = G__44346;
i__43853_44335 = G__44347;
continue;
} else {
var temp__5825__auto___44348__$1 = cljs.core.seq(seq__43849_44332);
if(temp__5825__auto___44348__$1){
var seq__43849_44349__$1 = temp__5825__auto___44348__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43849_44349__$1)){
var c__5548__auto___44352 = cljs.core.chunk_first(seq__43849_44349__$1);
var G__44353 = cljs.core.chunk_rest(seq__43849_44349__$1);
var G__44354 = c__5548__auto___44352;
var G__44355 = cljs.core.count(c__5548__auto___44352);
var G__44356 = (0);
seq__43849_44332 = G__44353;
chunk__43851_44333 = G__44354;
count__43852_44334 = G__44355;
i__43853_44335 = G__44356;
continue;
} else {
var map__43872_44357 = cljs.core.first(seq__43849_44349__$1);
var map__43872_44358__$1 = cljs.core.__destructure_map(map__43872_44357);
var task_44359 = map__43872_44358__$1;
var fn_str_44360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43872_44358__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43872_44358__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44362 = goog.getObjectByName(fn_str_44360,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44361)].join(''));

(fn_obj_44362.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44362.cljs$core$IFn$_invoke$arity$2(path,new_link_44331) : fn_obj_44362.call(null,path,new_link_44331));


var G__44363 = cljs.core.next(seq__43849_44349__$1);
var G__44364 = null;
var G__44365 = (0);
var G__44366 = (0);
seq__43849_44332 = G__44363;
chunk__43851_44333 = G__44364;
count__43852_44334 = G__44365;
i__43853_44335 = G__44366;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44328);
});})(seq__43728_44266,chunk__43732_44267,count__43733_44268,i__43734_44269,seq__43446,chunk__43448,count__43449,i__43450,new_link_44331,path_match_44329,node_44328,seq__43728_44322__$1,temp__5825__auto___44321,path,map__43444,map__43444__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44329], 0));

goog.dom.insertSiblingAfter(new_link_44331,node_44328);


var G__44367 = cljs.core.next(seq__43728_44322__$1);
var G__44368 = null;
var G__44369 = (0);
var G__44370 = (0);
seq__43728_44266 = G__44367;
chunk__43732_44267 = G__44368;
count__43733_44268 = G__44369;
i__43734_44269 = G__44370;
continue;
} else {
var G__44371 = cljs.core.next(seq__43728_44322__$1);
var G__44372 = null;
var G__44373 = (0);
var G__44374 = (0);
seq__43728_44266 = G__44371;
chunk__43732_44267 = G__44372;
count__43733_44268 = G__44373;
i__43734_44269 = G__44374;
continue;
}
} else {
var G__44375 = cljs.core.next(seq__43728_44322__$1);
var G__44376 = null;
var G__44377 = (0);
var G__44378 = (0);
seq__43728_44266 = G__44375;
chunk__43732_44267 = G__44376;
count__43733_44268 = G__44377;
i__43734_44269 = G__44378;
continue;
}
}
} else {
}
}
break;
}


var G__44379 = seq__43446;
var G__44380 = chunk__43448;
var G__44381 = count__43449;
var G__44382 = (i__43450 + (1));
seq__43446 = G__44379;
chunk__43448 = G__44380;
count__43449 = G__44381;
i__43450 = G__44382;
continue;
} else {
var G__44383 = seq__43446;
var G__44384 = chunk__43448;
var G__44385 = count__43449;
var G__44386 = (i__43450 + (1));
seq__43446 = G__44383;
chunk__43448 = G__44384;
count__43449 = G__44385;
i__43450 = G__44386;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__43446);
if(temp__5825__auto__){
var seq__43446__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43446__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__43446__$1);
var G__44387 = cljs.core.chunk_rest(seq__43446__$1);
var G__44388 = c__5548__auto__;
var G__44389 = cljs.core.count(c__5548__auto__);
var G__44390 = (0);
seq__43446 = G__44387;
chunk__43448 = G__44388;
count__43449 = G__44389;
i__43450 = G__44390;
continue;
} else {
var path = cljs.core.first(seq__43446__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43880_44393 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43884_44394 = null;
var count__43885_44395 = (0);
var i__43886_44396 = (0);
while(true){
if((i__43886_44396 < count__43885_44395)){
var node_44397 = chunk__43884_44394.cljs$core$IIndexed$_nth$arity$2(null,i__43886_44396);
if(cljs.core.not(node_44397.shadow$old)){
var path_match_44398 = shadow.cljs.devtools.client.browser.match_paths(node_44397.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44398)){
var new_link_44399 = (function (){var G__43984 = node_44397.cloneNode(true);
G__43984.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44398),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43984;
})();
(node_44397.shadow$old = true);

(new_link_44399.onload = ((function (seq__43880_44393,chunk__43884_44394,count__43885_44395,i__43886_44396,seq__43446,chunk__43448,count__43449,i__43450,new_link_44399,path_match_44398,node_44397,path,seq__43446__$1,temp__5825__auto__,map__43444,map__43444__$1,msg,updates,reload_info){
return (function (e){
var seq__43987_44401 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43989_44402 = null;
var count__43990_44403 = (0);
var i__43991_44404 = (0);
while(true){
if((i__43991_44404 < count__43990_44403)){
var map__44007_44406 = chunk__43989_44402.cljs$core$IIndexed$_nth$arity$2(null,i__43991_44404);
var map__44007_44407__$1 = cljs.core.__destructure_map(map__44007_44406);
var task_44408 = map__44007_44407__$1;
var fn_str_44409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44007_44407__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44007_44407__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44411 = goog.getObjectByName(fn_str_44409,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44410)].join(''));

(fn_obj_44411.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44411.cljs$core$IFn$_invoke$arity$2(path,new_link_44399) : fn_obj_44411.call(null,path,new_link_44399));


var G__44413 = seq__43987_44401;
var G__44414 = chunk__43989_44402;
var G__44415 = count__43990_44403;
var G__44416 = (i__43991_44404 + (1));
seq__43987_44401 = G__44413;
chunk__43989_44402 = G__44414;
count__43990_44403 = G__44415;
i__43991_44404 = G__44416;
continue;
} else {
var temp__5825__auto___44417__$1 = cljs.core.seq(seq__43987_44401);
if(temp__5825__auto___44417__$1){
var seq__43987_44418__$1 = temp__5825__auto___44417__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43987_44418__$1)){
var c__5548__auto___44419 = cljs.core.chunk_first(seq__43987_44418__$1);
var G__44420 = cljs.core.chunk_rest(seq__43987_44418__$1);
var G__44421 = c__5548__auto___44419;
var G__44422 = cljs.core.count(c__5548__auto___44419);
var G__44423 = (0);
seq__43987_44401 = G__44420;
chunk__43989_44402 = G__44421;
count__43990_44403 = G__44422;
i__43991_44404 = G__44423;
continue;
} else {
var map__44014_44424 = cljs.core.first(seq__43987_44418__$1);
var map__44014_44425__$1 = cljs.core.__destructure_map(map__44014_44424);
var task_44426 = map__44014_44425__$1;
var fn_str_44427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44014_44425__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44014_44425__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44430 = goog.getObjectByName(fn_str_44427,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44428)].join(''));

(fn_obj_44430.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44430.cljs$core$IFn$_invoke$arity$2(path,new_link_44399) : fn_obj_44430.call(null,path,new_link_44399));


var G__44431 = cljs.core.next(seq__43987_44418__$1);
var G__44432 = null;
var G__44433 = (0);
var G__44434 = (0);
seq__43987_44401 = G__44431;
chunk__43989_44402 = G__44432;
count__43990_44403 = G__44433;
i__43991_44404 = G__44434;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44397);
});})(seq__43880_44393,chunk__43884_44394,count__43885_44395,i__43886_44396,seq__43446,chunk__43448,count__43449,i__43450,new_link_44399,path_match_44398,node_44397,path,seq__43446__$1,temp__5825__auto__,map__43444,map__43444__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44398], 0));

goog.dom.insertSiblingAfter(new_link_44399,node_44397);


var G__44436 = seq__43880_44393;
var G__44437 = chunk__43884_44394;
var G__44438 = count__43885_44395;
var G__44439 = (i__43886_44396 + (1));
seq__43880_44393 = G__44436;
chunk__43884_44394 = G__44437;
count__43885_44395 = G__44438;
i__43886_44396 = G__44439;
continue;
} else {
var G__44440 = seq__43880_44393;
var G__44441 = chunk__43884_44394;
var G__44442 = count__43885_44395;
var G__44443 = (i__43886_44396 + (1));
seq__43880_44393 = G__44440;
chunk__43884_44394 = G__44441;
count__43885_44395 = G__44442;
i__43886_44396 = G__44443;
continue;
}
} else {
var G__44444 = seq__43880_44393;
var G__44445 = chunk__43884_44394;
var G__44446 = count__43885_44395;
var G__44447 = (i__43886_44396 + (1));
seq__43880_44393 = G__44444;
chunk__43884_44394 = G__44445;
count__43885_44395 = G__44446;
i__43886_44396 = G__44447;
continue;
}
} else {
var temp__5825__auto___44448__$1 = cljs.core.seq(seq__43880_44393);
if(temp__5825__auto___44448__$1){
var seq__43880_44449__$1 = temp__5825__auto___44448__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43880_44449__$1)){
var c__5548__auto___44450 = cljs.core.chunk_first(seq__43880_44449__$1);
var G__44451 = cljs.core.chunk_rest(seq__43880_44449__$1);
var G__44452 = c__5548__auto___44450;
var G__44453 = cljs.core.count(c__5548__auto___44450);
var G__44454 = (0);
seq__43880_44393 = G__44451;
chunk__43884_44394 = G__44452;
count__43885_44395 = G__44453;
i__43886_44396 = G__44454;
continue;
} else {
var node_44456 = cljs.core.first(seq__43880_44449__$1);
if(cljs.core.not(node_44456.shadow$old)){
var path_match_44457 = shadow.cljs.devtools.client.browser.match_paths(node_44456.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44457)){
var new_link_44458 = (function (){var G__44034 = node_44456.cloneNode(true);
G__44034.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44457),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44034;
})();
(node_44456.shadow$old = true);

(new_link_44458.onload = ((function (seq__43880_44393,chunk__43884_44394,count__43885_44395,i__43886_44396,seq__43446,chunk__43448,count__43449,i__43450,new_link_44458,path_match_44457,node_44456,seq__43880_44449__$1,temp__5825__auto___44448__$1,path,seq__43446__$1,temp__5825__auto__,map__43444,map__43444__$1,msg,updates,reload_info){
return (function (e){
var seq__44038_44460 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44040_44461 = null;
var count__44041_44462 = (0);
var i__44042_44463 = (0);
while(true){
if((i__44042_44463 < count__44041_44462)){
var map__44059_44464 = chunk__44040_44461.cljs$core$IIndexed$_nth$arity$2(null,i__44042_44463);
var map__44059_44465__$1 = cljs.core.__destructure_map(map__44059_44464);
var task_44466 = map__44059_44465__$1;
var fn_str_44467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44059_44465__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44059_44465__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44470 = goog.getObjectByName(fn_str_44467,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44468)].join(''));

(fn_obj_44470.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44470.cljs$core$IFn$_invoke$arity$2(path,new_link_44458) : fn_obj_44470.call(null,path,new_link_44458));


var G__44471 = seq__44038_44460;
var G__44472 = chunk__44040_44461;
var G__44473 = count__44041_44462;
var G__44474 = (i__44042_44463 + (1));
seq__44038_44460 = G__44471;
chunk__44040_44461 = G__44472;
count__44041_44462 = G__44473;
i__44042_44463 = G__44474;
continue;
} else {
var temp__5825__auto___44475__$2 = cljs.core.seq(seq__44038_44460);
if(temp__5825__auto___44475__$2){
var seq__44038_44477__$1 = temp__5825__auto___44475__$2;
if(cljs.core.chunked_seq_QMARK_(seq__44038_44477__$1)){
var c__5548__auto___44478 = cljs.core.chunk_first(seq__44038_44477__$1);
var G__44479 = cljs.core.chunk_rest(seq__44038_44477__$1);
var G__44480 = c__5548__auto___44478;
var G__44481 = cljs.core.count(c__5548__auto___44478);
var G__44482 = (0);
seq__44038_44460 = G__44479;
chunk__44040_44461 = G__44480;
count__44041_44462 = G__44481;
i__44042_44463 = G__44482;
continue;
} else {
var map__44066_44483 = cljs.core.first(seq__44038_44477__$1);
var map__44066_44484__$1 = cljs.core.__destructure_map(map__44066_44483);
var task_44485 = map__44066_44484__$1;
var fn_str_44486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44066_44484__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44066_44484__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44488 = goog.getObjectByName(fn_str_44486,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44487)].join(''));

(fn_obj_44488.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44488.cljs$core$IFn$_invoke$arity$2(path,new_link_44458) : fn_obj_44488.call(null,path,new_link_44458));


var G__44489 = cljs.core.next(seq__44038_44477__$1);
var G__44490 = null;
var G__44491 = (0);
var G__44492 = (0);
seq__44038_44460 = G__44489;
chunk__44040_44461 = G__44490;
count__44041_44462 = G__44491;
i__44042_44463 = G__44492;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44456);
});})(seq__43880_44393,chunk__43884_44394,count__43885_44395,i__43886_44396,seq__43446,chunk__43448,count__43449,i__43450,new_link_44458,path_match_44457,node_44456,seq__43880_44449__$1,temp__5825__auto___44448__$1,path,seq__43446__$1,temp__5825__auto__,map__43444,map__43444__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44457], 0));

goog.dom.insertSiblingAfter(new_link_44458,node_44456);


var G__44494 = cljs.core.next(seq__43880_44449__$1);
var G__44495 = null;
var G__44496 = (0);
var G__44497 = (0);
seq__43880_44393 = G__44494;
chunk__43884_44394 = G__44495;
count__43885_44395 = G__44496;
i__43886_44396 = G__44497;
continue;
} else {
var G__44498 = cljs.core.next(seq__43880_44449__$1);
var G__44499 = null;
var G__44500 = (0);
var G__44501 = (0);
seq__43880_44393 = G__44498;
chunk__43884_44394 = G__44499;
count__43885_44395 = G__44500;
i__43886_44396 = G__44501;
continue;
}
} else {
var G__44502 = cljs.core.next(seq__43880_44449__$1);
var G__44503 = null;
var G__44504 = (0);
var G__44505 = (0);
seq__43880_44393 = G__44502;
chunk__43884_44394 = G__44503;
count__43885_44395 = G__44504;
i__43886_44396 = G__44505;
continue;
}
}
} else {
}
}
break;
}


var G__44506 = cljs.core.next(seq__43446__$1);
var G__44507 = null;
var G__44508 = (0);
var G__44509 = (0);
seq__43446 = G__44506;
chunk__43448 = G__44507;
count__43449 = G__44508;
i__43450 = G__44509;
continue;
} else {
var G__44510 = cljs.core.next(seq__43446__$1);
var G__44511 = null;
var G__44512 = (0);
var G__44513 = (0);
seq__43446 = G__44510;
chunk__43448 = G__44511;
count__43449 = G__44512;
i__43450 = G__44513;
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
try{var G__44103 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__44103) : success.call(null,G__44103));
}catch (e44100){var e = e44100;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__44106,success,fail){
var map__44109 = p__44106;
var map__44109__$1 = cljs.core.__destructure_map(map__44109);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44109__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__44112 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__44112) : success.call(null,G__44112));
}catch (e44111){var e = e44111;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__44113,done,error){
var map__44115 = p__44113;
var map__44115__$1 = cljs.core.__destructure_map(map__44115);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44115__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__44121,done,error){
var map__44122 = p__44121;
var map__44122__$1 = cljs.core.__destructure_map(map__44122);
var msg = map__44122__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44122__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44122__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44122__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44123){
var map__44124 = p__44123;
var map__44124__$1 = cljs.core.__destructure_map(map__44124);
var src = map__44124__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44124__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__44126 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__44126) : done.call(null,G__44126));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__44130){
var map__44131 = p__44130;
var map__44131__$1 = cljs.core.__destructure_map(map__44131);
var msg__$1 = map__44131__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44131__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e44132){var ex = e44132;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__44134){
var map__44136 = p__44134;
var map__44136__$1 = cljs.core.__destructure_map(map__44136);
var env = map__44136__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44136__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__44146){
var map__44147 = p__44146;
var map__44147__$1 = cljs.core.__destructure_map(map__44147);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44147__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44147__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__44149){
var map__44150 = p__44149;
var map__44150__$1 = cljs.core.__destructure_map(map__44150);
var svc = map__44150__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44150__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
