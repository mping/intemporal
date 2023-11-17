goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36088 = arguments.length;
var i__5770__auto___36089 = (0);
while(true){
if((i__5770__auto___36089 < len__5769__auto___36088)){
args__5775__auto__.push((arguments[i__5770__auto___36089]));

var G__36090 = (i__5770__auto___36089 + (1));
i__5770__auto___36089 = G__36090;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35806){
var G__35807 = cljs.core.first(seq35806);
var seq35806__$1 = cljs.core.next(seq35806);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35807,seq35806__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35808 = cljs.core.seq(sources);
var chunk__35810 = null;
var count__35811 = (0);
var i__35812 = (0);
while(true){
if((i__35812 < count__35811)){
var map__35818 = chunk__35810.cljs$core$IIndexed$_nth$arity$2(null,i__35812);
var map__35818__$1 = cljs.core.__destructure_map(map__35818);
var src = map__35818__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35819){var e_36091 = e35819;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36091);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36091.message)].join('')));
}

var G__36092 = seq__35808;
var G__36093 = chunk__35810;
var G__36094 = count__35811;
var G__36095 = (i__35812 + (1));
seq__35808 = G__36092;
chunk__35810 = G__36093;
count__35811 = G__36094;
i__35812 = G__36095;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35808);
if(temp__5804__auto__){
var seq__35808__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35808__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35808__$1);
var G__36096 = cljs.core.chunk_rest(seq__35808__$1);
var G__36097 = c__5568__auto__;
var G__36098 = cljs.core.count(c__5568__auto__);
var G__36099 = (0);
seq__35808 = G__36096;
chunk__35810 = G__36097;
count__35811 = G__36098;
i__35812 = G__36099;
continue;
} else {
var map__35820 = cljs.core.first(seq__35808__$1);
var map__35820__$1 = cljs.core.__destructure_map(map__35820);
var src = map__35820__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35820__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35820__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35820__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35820__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35821){var e_36100 = e35821;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36100);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36100.message)].join('')));
}

var G__36101 = cljs.core.next(seq__35808__$1);
var G__36102 = null;
var G__36103 = (0);
var G__36104 = (0);
seq__35808 = G__36101;
chunk__35810 = G__36102;
count__35811 = G__36103;
i__35812 = G__36104;
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
var seq__35822 = cljs.core.seq(js_requires);
var chunk__35823 = null;
var count__35824 = (0);
var i__35825 = (0);
while(true){
if((i__35825 < count__35824)){
var js_ns = chunk__35823.cljs$core$IIndexed$_nth$arity$2(null,i__35825);
var require_str_36105 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36105);


var G__36106 = seq__35822;
var G__36107 = chunk__35823;
var G__36108 = count__35824;
var G__36109 = (i__35825 + (1));
seq__35822 = G__36106;
chunk__35823 = G__36107;
count__35824 = G__36108;
i__35825 = G__36109;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35822);
if(temp__5804__auto__){
var seq__35822__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35822__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35822__$1);
var G__36110 = cljs.core.chunk_rest(seq__35822__$1);
var G__36111 = c__5568__auto__;
var G__36112 = cljs.core.count(c__5568__auto__);
var G__36113 = (0);
seq__35822 = G__36110;
chunk__35823 = G__36111;
count__35824 = G__36112;
i__35825 = G__36113;
continue;
} else {
var js_ns = cljs.core.first(seq__35822__$1);
var require_str_36114 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36114);


var G__36115 = cljs.core.next(seq__35822__$1);
var G__36116 = null;
var G__36117 = (0);
var G__36118 = (0);
seq__35822 = G__36115;
chunk__35823 = G__36116;
count__35824 = G__36117;
i__35825 = G__36118;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35827){
var map__35828 = p__35827;
var map__35828__$1 = cljs.core.__destructure_map(map__35828);
var msg = map__35828__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35828__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35828__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35829(s__35830){
return (new cljs.core.LazySeq(null,(function (){
var s__35830__$1 = s__35830;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__35830__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__35835 = cljs.core.first(xs__6360__auto__);
var map__35835__$1 = cljs.core.__destructure_map(map__35835);
var src = map__35835__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35835__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35835__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__35830__$1,map__35835,map__35835__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__35828,map__35828__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35829_$_iter__35831(s__35832){
return (new cljs.core.LazySeq(null,((function (s__35830__$1,map__35835,map__35835__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__35828,map__35828__$1,msg,info,reload_info){
return (function (){
var s__35832__$1 = s__35832;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__35832__$1);
if(temp__5804__auto____$1){
var s__35832__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35832__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35832__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35834 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35833 = (0);
while(true){
if((i__35833 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__35833);
cljs.core.chunk_append(b__35834,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36119 = (i__35833 + (1));
i__35833 = G__36119;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35834),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35829_$_iter__35831(cljs.core.chunk_rest(s__35832__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35834),null);
}
} else {
var warning = cljs.core.first(s__35832__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35829_$_iter__35831(cljs.core.rest(s__35832__$2)));
}
} else {
return null;
}
break;
}
});})(s__35830__$1,map__35835,map__35835__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__35828,map__35828__$1,msg,info,reload_info))
,null,null));
});})(s__35830__$1,map__35835,map__35835__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__35828,map__35828__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35829(cljs.core.rest(s__35830__$1)));
} else {
var G__36120 = cljs.core.rest(s__35830__$1);
s__35830__$1 = G__36120;
continue;
}
} else {
var G__36121 = cljs.core.rest(s__35830__$1);
s__35830__$1 = G__36121;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35836_36122 = cljs.core.seq(warnings);
var chunk__35837_36123 = null;
var count__35838_36124 = (0);
var i__35839_36125 = (0);
while(true){
if((i__35839_36125 < count__35838_36124)){
var map__35842_36126 = chunk__35837_36123.cljs$core$IIndexed$_nth$arity$2(null,i__35839_36125);
var map__35842_36127__$1 = cljs.core.__destructure_map(map__35842_36126);
var w_36128 = map__35842_36127__$1;
var msg_36129__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842_36127__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842_36127__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842_36127__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842_36127__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36132)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36130),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36131),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36129__$1)].join(''));


var G__36133 = seq__35836_36122;
var G__36134 = chunk__35837_36123;
var G__36135 = count__35838_36124;
var G__36136 = (i__35839_36125 + (1));
seq__35836_36122 = G__36133;
chunk__35837_36123 = G__36134;
count__35838_36124 = G__36135;
i__35839_36125 = G__36136;
continue;
} else {
var temp__5804__auto___36137 = cljs.core.seq(seq__35836_36122);
if(temp__5804__auto___36137){
var seq__35836_36138__$1 = temp__5804__auto___36137;
if(cljs.core.chunked_seq_QMARK_(seq__35836_36138__$1)){
var c__5568__auto___36139 = cljs.core.chunk_first(seq__35836_36138__$1);
var G__36140 = cljs.core.chunk_rest(seq__35836_36138__$1);
var G__36141 = c__5568__auto___36139;
var G__36142 = cljs.core.count(c__5568__auto___36139);
var G__36143 = (0);
seq__35836_36122 = G__36140;
chunk__35837_36123 = G__36141;
count__35838_36124 = G__36142;
i__35839_36125 = G__36143;
continue;
} else {
var map__35843_36144 = cljs.core.first(seq__35836_36138__$1);
var map__35843_36145__$1 = cljs.core.__destructure_map(map__35843_36144);
var w_36146 = map__35843_36145__$1;
var msg_36147__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35843_36145__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35843_36145__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35843_36145__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35843_36145__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36150)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36148),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36149),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36147__$1)].join(''));


var G__36151 = cljs.core.next(seq__35836_36138__$1);
var G__36152 = null;
var G__36153 = (0);
var G__36154 = (0);
seq__35836_36122 = G__36151;
chunk__35837_36123 = G__36152;
count__35838_36124 = G__36153;
i__35839_36125 = G__36154;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35826_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35826_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35844){
var map__35845 = p__35844;
var map__35845__$1 = cljs.core.__destructure_map(map__35845);
var msg = map__35845__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35845__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35845__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__35846 = cljs.core.seq(updates);
var chunk__35848 = null;
var count__35849 = (0);
var i__35850 = (0);
while(true){
if((i__35850 < count__35849)){
var path = chunk__35848.cljs$core$IIndexed$_nth$arity$2(null,i__35850);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35960_36155 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35964_36156 = null;
var count__35965_36157 = (0);
var i__35966_36158 = (0);
while(true){
if((i__35966_36158 < count__35965_36157)){
var node_36159 = chunk__35964_36156.cljs$core$IIndexed$_nth$arity$2(null,i__35966_36158);
if(cljs.core.not(node_36159.shadow$old)){
var path_match_36160 = shadow.cljs.devtools.client.browser.match_paths(node_36159.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36160)){
var new_link_36161 = (function (){var G__35992 = node_36159.cloneNode(true);
G__35992.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36160),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35992;
})();
(node_36159.shadow$old = true);

(new_link_36161.onload = ((function (seq__35960_36155,chunk__35964_36156,count__35965_36157,i__35966_36158,seq__35846,chunk__35848,count__35849,i__35850,new_link_36161,path_match_36160,node_36159,path,map__35845,map__35845__$1,msg,updates,reload_info){
return (function (e){
var seq__35993_36162 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__35995_36163 = null;
var count__35996_36164 = (0);
var i__35997_36165 = (0);
while(true){
if((i__35997_36165 < count__35996_36164)){
var map__36001_36166 = chunk__35995_36163.cljs$core$IIndexed$_nth$arity$2(null,i__35997_36165);
var map__36001_36167__$1 = cljs.core.__destructure_map(map__36001_36166);
var task_36168 = map__36001_36167__$1;
var fn_str_36169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36001_36167__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36001_36167__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36171 = goog.getObjectByName(fn_str_36169,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36170)].join(''));

(fn_obj_36171.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36171.cljs$core$IFn$_invoke$arity$2(path,new_link_36161) : fn_obj_36171.call(null,path,new_link_36161));


var G__36172 = seq__35993_36162;
var G__36173 = chunk__35995_36163;
var G__36174 = count__35996_36164;
var G__36175 = (i__35997_36165 + (1));
seq__35993_36162 = G__36172;
chunk__35995_36163 = G__36173;
count__35996_36164 = G__36174;
i__35997_36165 = G__36175;
continue;
} else {
var temp__5804__auto___36176 = cljs.core.seq(seq__35993_36162);
if(temp__5804__auto___36176){
var seq__35993_36177__$1 = temp__5804__auto___36176;
if(cljs.core.chunked_seq_QMARK_(seq__35993_36177__$1)){
var c__5568__auto___36178 = cljs.core.chunk_first(seq__35993_36177__$1);
var G__36179 = cljs.core.chunk_rest(seq__35993_36177__$1);
var G__36180 = c__5568__auto___36178;
var G__36181 = cljs.core.count(c__5568__auto___36178);
var G__36182 = (0);
seq__35993_36162 = G__36179;
chunk__35995_36163 = G__36180;
count__35996_36164 = G__36181;
i__35997_36165 = G__36182;
continue;
} else {
var map__36002_36183 = cljs.core.first(seq__35993_36177__$1);
var map__36002_36184__$1 = cljs.core.__destructure_map(map__36002_36183);
var task_36185 = map__36002_36184__$1;
var fn_str_36186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36002_36184__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36002_36184__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36188 = goog.getObjectByName(fn_str_36186,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36187)].join(''));

(fn_obj_36188.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36188.cljs$core$IFn$_invoke$arity$2(path,new_link_36161) : fn_obj_36188.call(null,path,new_link_36161));


var G__36189 = cljs.core.next(seq__35993_36177__$1);
var G__36190 = null;
var G__36191 = (0);
var G__36192 = (0);
seq__35993_36162 = G__36189;
chunk__35995_36163 = G__36190;
count__35996_36164 = G__36191;
i__35997_36165 = G__36192;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36159);
});})(seq__35960_36155,chunk__35964_36156,count__35965_36157,i__35966_36158,seq__35846,chunk__35848,count__35849,i__35850,new_link_36161,path_match_36160,node_36159,path,map__35845,map__35845__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36160], 0));

goog.dom.insertSiblingAfter(new_link_36161,node_36159);


var G__36193 = seq__35960_36155;
var G__36194 = chunk__35964_36156;
var G__36195 = count__35965_36157;
var G__36196 = (i__35966_36158 + (1));
seq__35960_36155 = G__36193;
chunk__35964_36156 = G__36194;
count__35965_36157 = G__36195;
i__35966_36158 = G__36196;
continue;
} else {
var G__36197 = seq__35960_36155;
var G__36198 = chunk__35964_36156;
var G__36199 = count__35965_36157;
var G__36200 = (i__35966_36158 + (1));
seq__35960_36155 = G__36197;
chunk__35964_36156 = G__36198;
count__35965_36157 = G__36199;
i__35966_36158 = G__36200;
continue;
}
} else {
var G__36201 = seq__35960_36155;
var G__36202 = chunk__35964_36156;
var G__36203 = count__35965_36157;
var G__36204 = (i__35966_36158 + (1));
seq__35960_36155 = G__36201;
chunk__35964_36156 = G__36202;
count__35965_36157 = G__36203;
i__35966_36158 = G__36204;
continue;
}
} else {
var temp__5804__auto___36205 = cljs.core.seq(seq__35960_36155);
if(temp__5804__auto___36205){
var seq__35960_36206__$1 = temp__5804__auto___36205;
if(cljs.core.chunked_seq_QMARK_(seq__35960_36206__$1)){
var c__5568__auto___36207 = cljs.core.chunk_first(seq__35960_36206__$1);
var G__36208 = cljs.core.chunk_rest(seq__35960_36206__$1);
var G__36209 = c__5568__auto___36207;
var G__36210 = cljs.core.count(c__5568__auto___36207);
var G__36211 = (0);
seq__35960_36155 = G__36208;
chunk__35964_36156 = G__36209;
count__35965_36157 = G__36210;
i__35966_36158 = G__36211;
continue;
} else {
var node_36212 = cljs.core.first(seq__35960_36206__$1);
if(cljs.core.not(node_36212.shadow$old)){
var path_match_36213 = shadow.cljs.devtools.client.browser.match_paths(node_36212.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36213)){
var new_link_36214 = (function (){var G__36003 = node_36212.cloneNode(true);
G__36003.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36213),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36003;
})();
(node_36212.shadow$old = true);

(new_link_36214.onload = ((function (seq__35960_36155,chunk__35964_36156,count__35965_36157,i__35966_36158,seq__35846,chunk__35848,count__35849,i__35850,new_link_36214,path_match_36213,node_36212,seq__35960_36206__$1,temp__5804__auto___36205,path,map__35845,map__35845__$1,msg,updates,reload_info){
return (function (e){
var seq__36004_36215 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36006_36216 = null;
var count__36007_36217 = (0);
var i__36008_36218 = (0);
while(true){
if((i__36008_36218 < count__36007_36217)){
var map__36012_36219 = chunk__36006_36216.cljs$core$IIndexed$_nth$arity$2(null,i__36008_36218);
var map__36012_36220__$1 = cljs.core.__destructure_map(map__36012_36219);
var task_36221 = map__36012_36220__$1;
var fn_str_36222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36012_36220__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36012_36220__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36224 = goog.getObjectByName(fn_str_36222,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36223)].join(''));

(fn_obj_36224.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36224.cljs$core$IFn$_invoke$arity$2(path,new_link_36214) : fn_obj_36224.call(null,path,new_link_36214));


var G__36225 = seq__36004_36215;
var G__36226 = chunk__36006_36216;
var G__36227 = count__36007_36217;
var G__36228 = (i__36008_36218 + (1));
seq__36004_36215 = G__36225;
chunk__36006_36216 = G__36226;
count__36007_36217 = G__36227;
i__36008_36218 = G__36228;
continue;
} else {
var temp__5804__auto___36229__$1 = cljs.core.seq(seq__36004_36215);
if(temp__5804__auto___36229__$1){
var seq__36004_36230__$1 = temp__5804__auto___36229__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36004_36230__$1)){
var c__5568__auto___36231 = cljs.core.chunk_first(seq__36004_36230__$1);
var G__36232 = cljs.core.chunk_rest(seq__36004_36230__$1);
var G__36233 = c__5568__auto___36231;
var G__36234 = cljs.core.count(c__5568__auto___36231);
var G__36235 = (0);
seq__36004_36215 = G__36232;
chunk__36006_36216 = G__36233;
count__36007_36217 = G__36234;
i__36008_36218 = G__36235;
continue;
} else {
var map__36013_36236 = cljs.core.first(seq__36004_36230__$1);
var map__36013_36237__$1 = cljs.core.__destructure_map(map__36013_36236);
var task_36238 = map__36013_36237__$1;
var fn_str_36239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36013_36237__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36013_36237__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36241 = goog.getObjectByName(fn_str_36239,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36240)].join(''));

(fn_obj_36241.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36241.cljs$core$IFn$_invoke$arity$2(path,new_link_36214) : fn_obj_36241.call(null,path,new_link_36214));


var G__36242 = cljs.core.next(seq__36004_36230__$1);
var G__36243 = null;
var G__36244 = (0);
var G__36245 = (0);
seq__36004_36215 = G__36242;
chunk__36006_36216 = G__36243;
count__36007_36217 = G__36244;
i__36008_36218 = G__36245;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36212);
});})(seq__35960_36155,chunk__35964_36156,count__35965_36157,i__35966_36158,seq__35846,chunk__35848,count__35849,i__35850,new_link_36214,path_match_36213,node_36212,seq__35960_36206__$1,temp__5804__auto___36205,path,map__35845,map__35845__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36213], 0));

goog.dom.insertSiblingAfter(new_link_36214,node_36212);


var G__36246 = cljs.core.next(seq__35960_36206__$1);
var G__36247 = null;
var G__36248 = (0);
var G__36249 = (0);
seq__35960_36155 = G__36246;
chunk__35964_36156 = G__36247;
count__35965_36157 = G__36248;
i__35966_36158 = G__36249;
continue;
} else {
var G__36250 = cljs.core.next(seq__35960_36206__$1);
var G__36251 = null;
var G__36252 = (0);
var G__36253 = (0);
seq__35960_36155 = G__36250;
chunk__35964_36156 = G__36251;
count__35965_36157 = G__36252;
i__35966_36158 = G__36253;
continue;
}
} else {
var G__36254 = cljs.core.next(seq__35960_36206__$1);
var G__36255 = null;
var G__36256 = (0);
var G__36257 = (0);
seq__35960_36155 = G__36254;
chunk__35964_36156 = G__36255;
count__35965_36157 = G__36256;
i__35966_36158 = G__36257;
continue;
}
}
} else {
}
}
break;
}


var G__36258 = seq__35846;
var G__36259 = chunk__35848;
var G__36260 = count__35849;
var G__36261 = (i__35850 + (1));
seq__35846 = G__36258;
chunk__35848 = G__36259;
count__35849 = G__36260;
i__35850 = G__36261;
continue;
} else {
var G__36262 = seq__35846;
var G__36263 = chunk__35848;
var G__36264 = count__35849;
var G__36265 = (i__35850 + (1));
seq__35846 = G__36262;
chunk__35848 = G__36263;
count__35849 = G__36264;
i__35850 = G__36265;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35846);
if(temp__5804__auto__){
var seq__35846__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35846__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35846__$1);
var G__36266 = cljs.core.chunk_rest(seq__35846__$1);
var G__36267 = c__5568__auto__;
var G__36268 = cljs.core.count(c__5568__auto__);
var G__36269 = (0);
seq__35846 = G__36266;
chunk__35848 = G__36267;
count__35849 = G__36268;
i__35850 = G__36269;
continue;
} else {
var path = cljs.core.first(seq__35846__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36014_36270 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36018_36271 = null;
var count__36019_36272 = (0);
var i__36020_36273 = (0);
while(true){
if((i__36020_36273 < count__36019_36272)){
var node_36274 = chunk__36018_36271.cljs$core$IIndexed$_nth$arity$2(null,i__36020_36273);
if(cljs.core.not(node_36274.shadow$old)){
var path_match_36275 = shadow.cljs.devtools.client.browser.match_paths(node_36274.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36275)){
var new_link_36276 = (function (){var G__36046 = node_36274.cloneNode(true);
G__36046.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36275),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36046;
})();
(node_36274.shadow$old = true);

(new_link_36276.onload = ((function (seq__36014_36270,chunk__36018_36271,count__36019_36272,i__36020_36273,seq__35846,chunk__35848,count__35849,i__35850,new_link_36276,path_match_36275,node_36274,path,seq__35846__$1,temp__5804__auto__,map__35845,map__35845__$1,msg,updates,reload_info){
return (function (e){
var seq__36047_36277 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36049_36278 = null;
var count__36050_36279 = (0);
var i__36051_36280 = (0);
while(true){
if((i__36051_36280 < count__36050_36279)){
var map__36055_36281 = chunk__36049_36278.cljs$core$IIndexed$_nth$arity$2(null,i__36051_36280);
var map__36055_36282__$1 = cljs.core.__destructure_map(map__36055_36281);
var task_36283 = map__36055_36282__$1;
var fn_str_36284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36055_36282__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36055_36282__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36286 = goog.getObjectByName(fn_str_36284,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36285)].join(''));

(fn_obj_36286.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36286.cljs$core$IFn$_invoke$arity$2(path,new_link_36276) : fn_obj_36286.call(null,path,new_link_36276));


var G__36287 = seq__36047_36277;
var G__36288 = chunk__36049_36278;
var G__36289 = count__36050_36279;
var G__36290 = (i__36051_36280 + (1));
seq__36047_36277 = G__36287;
chunk__36049_36278 = G__36288;
count__36050_36279 = G__36289;
i__36051_36280 = G__36290;
continue;
} else {
var temp__5804__auto___36291__$1 = cljs.core.seq(seq__36047_36277);
if(temp__5804__auto___36291__$1){
var seq__36047_36292__$1 = temp__5804__auto___36291__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36047_36292__$1)){
var c__5568__auto___36293 = cljs.core.chunk_first(seq__36047_36292__$1);
var G__36294 = cljs.core.chunk_rest(seq__36047_36292__$1);
var G__36295 = c__5568__auto___36293;
var G__36296 = cljs.core.count(c__5568__auto___36293);
var G__36297 = (0);
seq__36047_36277 = G__36294;
chunk__36049_36278 = G__36295;
count__36050_36279 = G__36296;
i__36051_36280 = G__36297;
continue;
} else {
var map__36056_36298 = cljs.core.first(seq__36047_36292__$1);
var map__36056_36299__$1 = cljs.core.__destructure_map(map__36056_36298);
var task_36300 = map__36056_36299__$1;
var fn_str_36301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36056_36299__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36056_36299__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36303 = goog.getObjectByName(fn_str_36301,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36302)].join(''));

(fn_obj_36303.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36303.cljs$core$IFn$_invoke$arity$2(path,new_link_36276) : fn_obj_36303.call(null,path,new_link_36276));


var G__36304 = cljs.core.next(seq__36047_36292__$1);
var G__36305 = null;
var G__36306 = (0);
var G__36307 = (0);
seq__36047_36277 = G__36304;
chunk__36049_36278 = G__36305;
count__36050_36279 = G__36306;
i__36051_36280 = G__36307;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36274);
});})(seq__36014_36270,chunk__36018_36271,count__36019_36272,i__36020_36273,seq__35846,chunk__35848,count__35849,i__35850,new_link_36276,path_match_36275,node_36274,path,seq__35846__$1,temp__5804__auto__,map__35845,map__35845__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36275], 0));

goog.dom.insertSiblingAfter(new_link_36276,node_36274);


var G__36308 = seq__36014_36270;
var G__36309 = chunk__36018_36271;
var G__36310 = count__36019_36272;
var G__36311 = (i__36020_36273 + (1));
seq__36014_36270 = G__36308;
chunk__36018_36271 = G__36309;
count__36019_36272 = G__36310;
i__36020_36273 = G__36311;
continue;
} else {
var G__36312 = seq__36014_36270;
var G__36313 = chunk__36018_36271;
var G__36314 = count__36019_36272;
var G__36315 = (i__36020_36273 + (1));
seq__36014_36270 = G__36312;
chunk__36018_36271 = G__36313;
count__36019_36272 = G__36314;
i__36020_36273 = G__36315;
continue;
}
} else {
var G__36316 = seq__36014_36270;
var G__36317 = chunk__36018_36271;
var G__36318 = count__36019_36272;
var G__36319 = (i__36020_36273 + (1));
seq__36014_36270 = G__36316;
chunk__36018_36271 = G__36317;
count__36019_36272 = G__36318;
i__36020_36273 = G__36319;
continue;
}
} else {
var temp__5804__auto___36320__$1 = cljs.core.seq(seq__36014_36270);
if(temp__5804__auto___36320__$1){
var seq__36014_36321__$1 = temp__5804__auto___36320__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36014_36321__$1)){
var c__5568__auto___36322 = cljs.core.chunk_first(seq__36014_36321__$1);
var G__36323 = cljs.core.chunk_rest(seq__36014_36321__$1);
var G__36324 = c__5568__auto___36322;
var G__36325 = cljs.core.count(c__5568__auto___36322);
var G__36326 = (0);
seq__36014_36270 = G__36323;
chunk__36018_36271 = G__36324;
count__36019_36272 = G__36325;
i__36020_36273 = G__36326;
continue;
} else {
var node_36327 = cljs.core.first(seq__36014_36321__$1);
if(cljs.core.not(node_36327.shadow$old)){
var path_match_36328 = shadow.cljs.devtools.client.browser.match_paths(node_36327.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36328)){
var new_link_36329 = (function (){var G__36057 = node_36327.cloneNode(true);
G__36057.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36328),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36057;
})();
(node_36327.shadow$old = true);

(new_link_36329.onload = ((function (seq__36014_36270,chunk__36018_36271,count__36019_36272,i__36020_36273,seq__35846,chunk__35848,count__35849,i__35850,new_link_36329,path_match_36328,node_36327,seq__36014_36321__$1,temp__5804__auto___36320__$1,path,seq__35846__$1,temp__5804__auto__,map__35845,map__35845__$1,msg,updates,reload_info){
return (function (e){
var seq__36058_36330 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36060_36331 = null;
var count__36061_36332 = (0);
var i__36062_36333 = (0);
while(true){
if((i__36062_36333 < count__36061_36332)){
var map__36066_36334 = chunk__36060_36331.cljs$core$IIndexed$_nth$arity$2(null,i__36062_36333);
var map__36066_36335__$1 = cljs.core.__destructure_map(map__36066_36334);
var task_36336 = map__36066_36335__$1;
var fn_str_36337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36066_36335__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36066_36335__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36339 = goog.getObjectByName(fn_str_36337,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36338)].join(''));

(fn_obj_36339.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36339.cljs$core$IFn$_invoke$arity$2(path,new_link_36329) : fn_obj_36339.call(null,path,new_link_36329));


var G__36340 = seq__36058_36330;
var G__36341 = chunk__36060_36331;
var G__36342 = count__36061_36332;
var G__36343 = (i__36062_36333 + (1));
seq__36058_36330 = G__36340;
chunk__36060_36331 = G__36341;
count__36061_36332 = G__36342;
i__36062_36333 = G__36343;
continue;
} else {
var temp__5804__auto___36344__$2 = cljs.core.seq(seq__36058_36330);
if(temp__5804__auto___36344__$2){
var seq__36058_36345__$1 = temp__5804__auto___36344__$2;
if(cljs.core.chunked_seq_QMARK_(seq__36058_36345__$1)){
var c__5568__auto___36346 = cljs.core.chunk_first(seq__36058_36345__$1);
var G__36347 = cljs.core.chunk_rest(seq__36058_36345__$1);
var G__36348 = c__5568__auto___36346;
var G__36349 = cljs.core.count(c__5568__auto___36346);
var G__36350 = (0);
seq__36058_36330 = G__36347;
chunk__36060_36331 = G__36348;
count__36061_36332 = G__36349;
i__36062_36333 = G__36350;
continue;
} else {
var map__36067_36351 = cljs.core.first(seq__36058_36345__$1);
var map__36067_36352__$1 = cljs.core.__destructure_map(map__36067_36351);
var task_36353 = map__36067_36352__$1;
var fn_str_36354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36067_36352__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36067_36352__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36356 = goog.getObjectByName(fn_str_36354,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36355)].join(''));

(fn_obj_36356.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36356.cljs$core$IFn$_invoke$arity$2(path,new_link_36329) : fn_obj_36356.call(null,path,new_link_36329));


var G__36357 = cljs.core.next(seq__36058_36345__$1);
var G__36358 = null;
var G__36359 = (0);
var G__36360 = (0);
seq__36058_36330 = G__36357;
chunk__36060_36331 = G__36358;
count__36061_36332 = G__36359;
i__36062_36333 = G__36360;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36327);
});})(seq__36014_36270,chunk__36018_36271,count__36019_36272,i__36020_36273,seq__35846,chunk__35848,count__35849,i__35850,new_link_36329,path_match_36328,node_36327,seq__36014_36321__$1,temp__5804__auto___36320__$1,path,seq__35846__$1,temp__5804__auto__,map__35845,map__35845__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36328], 0));

goog.dom.insertSiblingAfter(new_link_36329,node_36327);


var G__36361 = cljs.core.next(seq__36014_36321__$1);
var G__36362 = null;
var G__36363 = (0);
var G__36364 = (0);
seq__36014_36270 = G__36361;
chunk__36018_36271 = G__36362;
count__36019_36272 = G__36363;
i__36020_36273 = G__36364;
continue;
} else {
var G__36365 = cljs.core.next(seq__36014_36321__$1);
var G__36366 = null;
var G__36367 = (0);
var G__36368 = (0);
seq__36014_36270 = G__36365;
chunk__36018_36271 = G__36366;
count__36019_36272 = G__36367;
i__36020_36273 = G__36368;
continue;
}
} else {
var G__36369 = cljs.core.next(seq__36014_36321__$1);
var G__36370 = null;
var G__36371 = (0);
var G__36372 = (0);
seq__36014_36270 = G__36369;
chunk__36018_36271 = G__36370;
count__36019_36272 = G__36371;
i__36020_36273 = G__36372;
continue;
}
}
} else {
}
}
break;
}


var G__36373 = cljs.core.next(seq__35846__$1);
var G__36374 = null;
var G__36375 = (0);
var G__36376 = (0);
seq__35846 = G__36373;
chunk__35848 = G__36374;
count__35849 = G__36375;
i__35850 = G__36376;
continue;
} else {
var G__36377 = cljs.core.next(seq__35846__$1);
var G__36378 = null;
var G__36379 = (0);
var G__36380 = (0);
seq__35846 = G__36377;
chunk__35848 = G__36378;
count__35849 = G__36379;
i__35850 = G__36380;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36068){
var map__36069 = p__36068;
var map__36069__$1 = cljs.core.__destructure_map(map__36069);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36069__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36070){
var map__36071 = p__36070;
var map__36071__$1 = cljs.core.__destructure_map(map__36071);
var _ = map__36071__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36071__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36072,done,error){
var map__36073 = p__36072;
var map__36073__$1 = cljs.core.__destructure_map(map__36073);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36073__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36074,done,error){
var map__36075 = p__36074;
var map__36075__$1 = cljs.core.__destructure_map(map__36075);
var msg = map__36075__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36075__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36075__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36075__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36076){
var map__36077 = p__36076;
var map__36077__$1 = cljs.core.__destructure_map(map__36077);
var src = map__36077__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36077__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36078 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36078) : done.call(null,G__36078));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36079){
var map__36080 = p__36079;
var map__36080__$1 = cljs.core.__destructure_map(map__36080);
var msg__$1 = map__36080__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36080__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36081){var ex = e36081;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36082){
var map__36083 = p__36082;
var map__36083__$1 = cljs.core.__destructure_map(map__36083);
var env = map__36083__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36084){
var map__36085 = p__36084;
var map__36085__$1 = cljs.core.__destructure_map(map__36085);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36085__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36085__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__36086){
var map__36087 = p__36086;
var map__36087__$1 = cljs.core.__destructure_map(map__36087);
var svc = map__36087__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
