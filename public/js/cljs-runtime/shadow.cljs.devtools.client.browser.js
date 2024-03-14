goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44132 = arguments.length;
var i__5770__auto___44133 = (0);
while(true){
if((i__5770__auto___44133 < len__5769__auto___44132)){
args__5775__auto__.push((arguments[i__5770__auto___44133]));

var G__44134 = (i__5770__auto___44133 + (1));
i__5770__auto___44133 = G__44134;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq43685){
var G__43687 = cljs.core.first(seq43685);
var seq43685__$1 = cljs.core.next(seq43685);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43687,seq43685__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__43695 = cljs.core.seq(sources);
var chunk__43696 = null;
var count__43697 = (0);
var i__43698 = (0);
while(true){
if((i__43698 < count__43697)){
var map__43709 = chunk__43696.cljs$core$IIndexed$_nth$arity$2(null,i__43698);
var map__43709__$1 = cljs.core.__destructure_map(map__43709);
var src = map__43709__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43709__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43709__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43709__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43709__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43710){var e_44139 = e43710;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44139);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44139.message)].join('')));
}

var G__44142 = seq__43695;
var G__44143 = chunk__43696;
var G__44144 = count__43697;
var G__44145 = (i__43698 + (1));
seq__43695 = G__44142;
chunk__43696 = G__44143;
count__43697 = G__44144;
i__43698 = G__44145;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43695);
if(temp__5804__auto__){
var seq__43695__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43695__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43695__$1);
var G__44146 = cljs.core.chunk_rest(seq__43695__$1);
var G__44147 = c__5568__auto__;
var G__44148 = cljs.core.count(c__5568__auto__);
var G__44149 = (0);
seq__43695 = G__44146;
chunk__43696 = G__44147;
count__43697 = G__44148;
i__43698 = G__44149;
continue;
} else {
var map__43711 = cljs.core.first(seq__43695__$1);
var map__43711__$1 = cljs.core.__destructure_map(map__43711);
var src = map__43711__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43711__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43711__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43711__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43711__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43712){var e_44150 = e43712;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44150);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44150.message)].join('')));
}

var G__44151 = cljs.core.next(seq__43695__$1);
var G__44152 = null;
var G__44153 = (0);
var G__44154 = (0);
seq__43695 = G__44151;
chunk__43696 = G__44152;
count__43697 = G__44153;
i__43698 = G__44154;
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
var seq__43713 = cljs.core.seq(js_requires);
var chunk__43714 = null;
var count__43715 = (0);
var i__43716 = (0);
while(true){
if((i__43716 < count__43715)){
var js_ns = chunk__43714.cljs$core$IIndexed$_nth$arity$2(null,i__43716);
var require_str_44155 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44155);


var G__44156 = seq__43713;
var G__44157 = chunk__43714;
var G__44158 = count__43715;
var G__44159 = (i__43716 + (1));
seq__43713 = G__44156;
chunk__43714 = G__44157;
count__43715 = G__44158;
i__43716 = G__44159;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43713);
if(temp__5804__auto__){
var seq__43713__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43713__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43713__$1);
var G__44160 = cljs.core.chunk_rest(seq__43713__$1);
var G__44161 = c__5568__auto__;
var G__44162 = cljs.core.count(c__5568__auto__);
var G__44163 = (0);
seq__43713 = G__44160;
chunk__43714 = G__44161;
count__43715 = G__44162;
i__43716 = G__44163;
continue;
} else {
var js_ns = cljs.core.first(seq__43713__$1);
var require_str_44164 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44164);


var G__44165 = cljs.core.next(seq__43713__$1);
var G__44166 = null;
var G__44167 = (0);
var G__44168 = (0);
seq__43713 = G__44165;
chunk__43714 = G__44166;
count__43715 = G__44167;
i__43716 = G__44168;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__43720){
var map__43721 = p__43720;
var map__43721__$1 = cljs.core.__destructure_map(map__43721);
var msg = map__43721__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43721__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43721__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43722(s__43723){
return (new cljs.core.LazySeq(null,(function (){
var s__43723__$1 = s__43723;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__43723__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__43728 = cljs.core.first(xs__6360__auto__);
var map__43728__$1 = cljs.core.__destructure_map(map__43728);
var src = map__43728__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43728__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43728__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__43723__$1,map__43728,map__43728__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__43721,map__43721__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43722_$_iter__43724(s__43725){
return (new cljs.core.LazySeq(null,((function (s__43723__$1,map__43728,map__43728__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__43721,map__43721__$1,msg,info,reload_info){
return (function (){
var s__43725__$1 = s__43725;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__43725__$1);
if(temp__5804__auto____$1){
var s__43725__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43725__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43725__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43727 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43726 = (0);
while(true){
if((i__43726 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__43726);
cljs.core.chunk_append(b__43727,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__44169 = (i__43726 + (1));
i__43726 = G__44169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43727),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43722_$_iter__43724(cljs.core.chunk_rest(s__43725__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43727),null);
}
} else {
var warning = cljs.core.first(s__43725__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43722_$_iter__43724(cljs.core.rest(s__43725__$2)));
}
} else {
return null;
}
break;
}
});})(s__43723__$1,map__43728,map__43728__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__43721,map__43721__$1,msg,info,reload_info))
,null,null));
});})(s__43723__$1,map__43728,map__43728__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__43721,map__43721__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43722(cljs.core.rest(s__43723__$1)));
} else {
var G__44170 = cljs.core.rest(s__43723__$1);
s__43723__$1 = G__44170;
continue;
}
} else {
var G__44171 = cljs.core.rest(s__43723__$1);
s__43723__$1 = G__44171;
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
var seq__43729_44172 = cljs.core.seq(warnings);
var chunk__43730_44173 = null;
var count__43731_44174 = (0);
var i__43732_44175 = (0);
while(true){
if((i__43732_44175 < count__43731_44174)){
var map__43735_44176 = chunk__43730_44173.cljs$core$IIndexed$_nth$arity$2(null,i__43732_44175);
var map__43735_44177__$1 = cljs.core.__destructure_map(map__43735_44176);
var w_44178 = map__43735_44177__$1;
var msg_44179__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43735_44177__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43735_44177__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43735_44177__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43735_44177__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44182)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44180),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44181),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44179__$1)].join(''));


var G__44183 = seq__43729_44172;
var G__44184 = chunk__43730_44173;
var G__44185 = count__43731_44174;
var G__44186 = (i__43732_44175 + (1));
seq__43729_44172 = G__44183;
chunk__43730_44173 = G__44184;
count__43731_44174 = G__44185;
i__43732_44175 = G__44186;
continue;
} else {
var temp__5804__auto___44187 = cljs.core.seq(seq__43729_44172);
if(temp__5804__auto___44187){
var seq__43729_44188__$1 = temp__5804__auto___44187;
if(cljs.core.chunked_seq_QMARK_(seq__43729_44188__$1)){
var c__5568__auto___44189 = cljs.core.chunk_first(seq__43729_44188__$1);
var G__44190 = cljs.core.chunk_rest(seq__43729_44188__$1);
var G__44191 = c__5568__auto___44189;
var G__44192 = cljs.core.count(c__5568__auto___44189);
var G__44193 = (0);
seq__43729_44172 = G__44190;
chunk__43730_44173 = G__44191;
count__43731_44174 = G__44192;
i__43732_44175 = G__44193;
continue;
} else {
var map__43737_44194 = cljs.core.first(seq__43729_44188__$1);
var map__43737_44195__$1 = cljs.core.__destructure_map(map__43737_44194);
var w_44196 = map__43737_44195__$1;
var msg_44197__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43737_44195__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43737_44195__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43737_44195__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43737_44195__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44200)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44198),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44199),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44197__$1)].join(''));


var G__44201 = cljs.core.next(seq__43729_44188__$1);
var G__44202 = null;
var G__44203 = (0);
var G__44204 = (0);
seq__43729_44172 = G__44201;
chunk__43730_44173 = G__44202;
count__43731_44174 = G__44203;
i__43732_44175 = G__44204;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__43719_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__43719_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__43739){
var map__43740 = p__43739;
var map__43740__$1 = cljs.core.__destructure_map(map__43740);
var msg = map__43740__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43740__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43740__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__43741 = cljs.core.seq(updates);
var chunk__43743 = null;
var count__43744 = (0);
var i__43745 = (0);
while(true){
if((i__43745 < count__43744)){
var path = chunk__43743.cljs$core$IIndexed$_nth$arity$2(null,i__43745);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43946_44205 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43950_44206 = null;
var count__43951_44207 = (0);
var i__43952_44208 = (0);
while(true){
if((i__43952_44208 < count__43951_44207)){
var node_44210 = chunk__43950_44206.cljs$core$IIndexed$_nth$arity$2(null,i__43952_44208);
if(cljs.core.not(node_44210.shadow$old)){
var path_match_44212 = shadow.cljs.devtools.client.browser.match_paths(node_44210.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44212)){
var new_link_44213 = (function (){var G__43990 = node_44210.cloneNode(true);
G__43990.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44212),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43990;
})();
(node_44210.shadow$old = true);

(new_link_44213.onload = ((function (seq__43946_44205,chunk__43950_44206,count__43951_44207,i__43952_44208,seq__43741,chunk__43743,count__43744,i__43745,new_link_44213,path_match_44212,node_44210,path,map__43740,map__43740__$1,msg,updates,reload_info){
return (function (e){
var seq__43991_44214 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43993_44215 = null;
var count__43994_44216 = (0);
var i__43995_44217 = (0);
while(true){
if((i__43995_44217 < count__43994_44216)){
var map__44006_44218 = chunk__43993_44215.cljs$core$IIndexed$_nth$arity$2(null,i__43995_44217);
var map__44006_44219__$1 = cljs.core.__destructure_map(map__44006_44218);
var task_44220 = map__44006_44219__$1;
var fn_str_44221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44006_44219__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44006_44219__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44223 = goog.getObjectByName(fn_str_44221,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44222)].join(''));

(fn_obj_44223.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44223.cljs$core$IFn$_invoke$arity$2(path,new_link_44213) : fn_obj_44223.call(null,path,new_link_44213));


var G__44224 = seq__43991_44214;
var G__44225 = chunk__43993_44215;
var G__44226 = count__43994_44216;
var G__44227 = (i__43995_44217 + (1));
seq__43991_44214 = G__44224;
chunk__43993_44215 = G__44225;
count__43994_44216 = G__44226;
i__43995_44217 = G__44227;
continue;
} else {
var temp__5804__auto___44228 = cljs.core.seq(seq__43991_44214);
if(temp__5804__auto___44228){
var seq__43991_44229__$1 = temp__5804__auto___44228;
if(cljs.core.chunked_seq_QMARK_(seq__43991_44229__$1)){
var c__5568__auto___44230 = cljs.core.chunk_first(seq__43991_44229__$1);
var G__44231 = cljs.core.chunk_rest(seq__43991_44229__$1);
var G__44232 = c__5568__auto___44230;
var G__44233 = cljs.core.count(c__5568__auto___44230);
var G__44234 = (0);
seq__43991_44214 = G__44231;
chunk__43993_44215 = G__44232;
count__43994_44216 = G__44233;
i__43995_44217 = G__44234;
continue;
} else {
var map__44007_44235 = cljs.core.first(seq__43991_44229__$1);
var map__44007_44236__$1 = cljs.core.__destructure_map(map__44007_44235);
var task_44237 = map__44007_44236__$1;
var fn_str_44238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44007_44236__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44007_44236__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44240 = goog.getObjectByName(fn_str_44238,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44239)].join(''));

(fn_obj_44240.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44240.cljs$core$IFn$_invoke$arity$2(path,new_link_44213) : fn_obj_44240.call(null,path,new_link_44213));


var G__44241 = cljs.core.next(seq__43991_44229__$1);
var G__44242 = null;
var G__44243 = (0);
var G__44244 = (0);
seq__43991_44214 = G__44241;
chunk__43993_44215 = G__44242;
count__43994_44216 = G__44243;
i__43995_44217 = G__44244;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44210);
});})(seq__43946_44205,chunk__43950_44206,count__43951_44207,i__43952_44208,seq__43741,chunk__43743,count__43744,i__43745,new_link_44213,path_match_44212,node_44210,path,map__43740,map__43740__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44212], 0));

goog.dom.insertSiblingAfter(new_link_44213,node_44210);


var G__44245 = seq__43946_44205;
var G__44246 = chunk__43950_44206;
var G__44247 = count__43951_44207;
var G__44248 = (i__43952_44208 + (1));
seq__43946_44205 = G__44245;
chunk__43950_44206 = G__44246;
count__43951_44207 = G__44247;
i__43952_44208 = G__44248;
continue;
} else {
var G__44250 = seq__43946_44205;
var G__44251 = chunk__43950_44206;
var G__44252 = count__43951_44207;
var G__44253 = (i__43952_44208 + (1));
seq__43946_44205 = G__44250;
chunk__43950_44206 = G__44251;
count__43951_44207 = G__44252;
i__43952_44208 = G__44253;
continue;
}
} else {
var G__44254 = seq__43946_44205;
var G__44255 = chunk__43950_44206;
var G__44256 = count__43951_44207;
var G__44257 = (i__43952_44208 + (1));
seq__43946_44205 = G__44254;
chunk__43950_44206 = G__44255;
count__43951_44207 = G__44256;
i__43952_44208 = G__44257;
continue;
}
} else {
var temp__5804__auto___44258 = cljs.core.seq(seq__43946_44205);
if(temp__5804__auto___44258){
var seq__43946_44260__$1 = temp__5804__auto___44258;
if(cljs.core.chunked_seq_QMARK_(seq__43946_44260__$1)){
var c__5568__auto___44261 = cljs.core.chunk_first(seq__43946_44260__$1);
var G__44262 = cljs.core.chunk_rest(seq__43946_44260__$1);
var G__44263 = c__5568__auto___44261;
var G__44264 = cljs.core.count(c__5568__auto___44261);
var G__44265 = (0);
seq__43946_44205 = G__44262;
chunk__43950_44206 = G__44263;
count__43951_44207 = G__44264;
i__43952_44208 = G__44265;
continue;
} else {
var node_44266 = cljs.core.first(seq__43946_44260__$1);
if(cljs.core.not(node_44266.shadow$old)){
var path_match_44267 = shadow.cljs.devtools.client.browser.match_paths(node_44266.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44267)){
var new_link_44268 = (function (){var G__44012 = node_44266.cloneNode(true);
G__44012.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44267),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44012;
})();
(node_44266.shadow$old = true);

(new_link_44268.onload = ((function (seq__43946_44205,chunk__43950_44206,count__43951_44207,i__43952_44208,seq__43741,chunk__43743,count__43744,i__43745,new_link_44268,path_match_44267,node_44266,seq__43946_44260__$1,temp__5804__auto___44258,path,map__43740,map__43740__$1,msg,updates,reload_info){
return (function (e){
var seq__44016_44269 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44018_44270 = null;
var count__44019_44271 = (0);
var i__44020_44272 = (0);
while(true){
if((i__44020_44272 < count__44019_44271)){
var map__44027_44273 = chunk__44018_44270.cljs$core$IIndexed$_nth$arity$2(null,i__44020_44272);
var map__44027_44274__$1 = cljs.core.__destructure_map(map__44027_44273);
var task_44275 = map__44027_44274__$1;
var fn_str_44276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44027_44274__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44027_44274__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44278 = goog.getObjectByName(fn_str_44276,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44277)].join(''));

(fn_obj_44278.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44278.cljs$core$IFn$_invoke$arity$2(path,new_link_44268) : fn_obj_44278.call(null,path,new_link_44268));


var G__44279 = seq__44016_44269;
var G__44280 = chunk__44018_44270;
var G__44281 = count__44019_44271;
var G__44282 = (i__44020_44272 + (1));
seq__44016_44269 = G__44279;
chunk__44018_44270 = G__44280;
count__44019_44271 = G__44281;
i__44020_44272 = G__44282;
continue;
} else {
var temp__5804__auto___44283__$1 = cljs.core.seq(seq__44016_44269);
if(temp__5804__auto___44283__$1){
var seq__44016_44284__$1 = temp__5804__auto___44283__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44016_44284__$1)){
var c__5568__auto___44286 = cljs.core.chunk_first(seq__44016_44284__$1);
var G__44287 = cljs.core.chunk_rest(seq__44016_44284__$1);
var G__44288 = c__5568__auto___44286;
var G__44289 = cljs.core.count(c__5568__auto___44286);
var G__44290 = (0);
seq__44016_44269 = G__44287;
chunk__44018_44270 = G__44288;
count__44019_44271 = G__44289;
i__44020_44272 = G__44290;
continue;
} else {
var map__44028_44291 = cljs.core.first(seq__44016_44284__$1);
var map__44028_44292__$1 = cljs.core.__destructure_map(map__44028_44291);
var task_44293 = map__44028_44292__$1;
var fn_str_44294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44028_44292__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44028_44292__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44297 = goog.getObjectByName(fn_str_44294,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44295)].join(''));

(fn_obj_44297.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44297.cljs$core$IFn$_invoke$arity$2(path,new_link_44268) : fn_obj_44297.call(null,path,new_link_44268));


var G__44298 = cljs.core.next(seq__44016_44284__$1);
var G__44299 = null;
var G__44300 = (0);
var G__44301 = (0);
seq__44016_44269 = G__44298;
chunk__44018_44270 = G__44299;
count__44019_44271 = G__44300;
i__44020_44272 = G__44301;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44266);
});})(seq__43946_44205,chunk__43950_44206,count__43951_44207,i__43952_44208,seq__43741,chunk__43743,count__43744,i__43745,new_link_44268,path_match_44267,node_44266,seq__43946_44260__$1,temp__5804__auto___44258,path,map__43740,map__43740__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44267], 0));

goog.dom.insertSiblingAfter(new_link_44268,node_44266);


var G__44302 = cljs.core.next(seq__43946_44260__$1);
var G__44303 = null;
var G__44304 = (0);
var G__44305 = (0);
seq__43946_44205 = G__44302;
chunk__43950_44206 = G__44303;
count__43951_44207 = G__44304;
i__43952_44208 = G__44305;
continue;
} else {
var G__44306 = cljs.core.next(seq__43946_44260__$1);
var G__44307 = null;
var G__44308 = (0);
var G__44309 = (0);
seq__43946_44205 = G__44306;
chunk__43950_44206 = G__44307;
count__43951_44207 = G__44308;
i__43952_44208 = G__44309;
continue;
}
} else {
var G__44310 = cljs.core.next(seq__43946_44260__$1);
var G__44311 = null;
var G__44312 = (0);
var G__44313 = (0);
seq__43946_44205 = G__44310;
chunk__43950_44206 = G__44311;
count__43951_44207 = G__44312;
i__43952_44208 = G__44313;
continue;
}
}
} else {
}
}
break;
}


var G__44314 = seq__43741;
var G__44315 = chunk__43743;
var G__44316 = count__43744;
var G__44317 = (i__43745 + (1));
seq__43741 = G__44314;
chunk__43743 = G__44315;
count__43744 = G__44316;
i__43745 = G__44317;
continue;
} else {
var G__44318 = seq__43741;
var G__44319 = chunk__43743;
var G__44320 = count__43744;
var G__44321 = (i__43745 + (1));
seq__43741 = G__44318;
chunk__43743 = G__44319;
count__43744 = G__44320;
i__43745 = G__44321;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43741);
if(temp__5804__auto__){
var seq__43741__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43741__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43741__$1);
var G__44322 = cljs.core.chunk_rest(seq__43741__$1);
var G__44323 = c__5568__auto__;
var G__44324 = cljs.core.count(c__5568__auto__);
var G__44325 = (0);
seq__43741 = G__44322;
chunk__43743 = G__44323;
count__43744 = G__44324;
i__43745 = G__44325;
continue;
} else {
var path = cljs.core.first(seq__43741__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44030_44326 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44034_44327 = null;
var count__44035_44328 = (0);
var i__44036_44329 = (0);
while(true){
if((i__44036_44329 < count__44035_44328)){
var node_44330 = chunk__44034_44327.cljs$core$IIndexed$_nth$arity$2(null,i__44036_44329);
if(cljs.core.not(node_44330.shadow$old)){
var path_match_44331 = shadow.cljs.devtools.client.browser.match_paths(node_44330.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44331)){
var new_link_44333 = (function (){var G__44075 = node_44330.cloneNode(true);
G__44075.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44331),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44075;
})();
(node_44330.shadow$old = true);

(new_link_44333.onload = ((function (seq__44030_44326,chunk__44034_44327,count__44035_44328,i__44036_44329,seq__43741,chunk__43743,count__43744,i__43745,new_link_44333,path_match_44331,node_44330,path,seq__43741__$1,temp__5804__auto__,map__43740,map__43740__$1,msg,updates,reload_info){
return (function (e){
var seq__44076_44335 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44078_44336 = null;
var count__44079_44337 = (0);
var i__44080_44338 = (0);
while(true){
if((i__44080_44338 < count__44079_44337)){
var map__44084_44339 = chunk__44078_44336.cljs$core$IIndexed$_nth$arity$2(null,i__44080_44338);
var map__44084_44340__$1 = cljs.core.__destructure_map(map__44084_44339);
var task_44341 = map__44084_44340__$1;
var fn_str_44342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44084_44340__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44084_44340__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44344 = goog.getObjectByName(fn_str_44342,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44343)].join(''));

(fn_obj_44344.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44344.cljs$core$IFn$_invoke$arity$2(path,new_link_44333) : fn_obj_44344.call(null,path,new_link_44333));


var G__44345 = seq__44076_44335;
var G__44346 = chunk__44078_44336;
var G__44347 = count__44079_44337;
var G__44348 = (i__44080_44338 + (1));
seq__44076_44335 = G__44345;
chunk__44078_44336 = G__44346;
count__44079_44337 = G__44347;
i__44080_44338 = G__44348;
continue;
} else {
var temp__5804__auto___44349__$1 = cljs.core.seq(seq__44076_44335);
if(temp__5804__auto___44349__$1){
var seq__44076_44350__$1 = temp__5804__auto___44349__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44076_44350__$1)){
var c__5568__auto___44351 = cljs.core.chunk_first(seq__44076_44350__$1);
var G__44352 = cljs.core.chunk_rest(seq__44076_44350__$1);
var G__44353 = c__5568__auto___44351;
var G__44354 = cljs.core.count(c__5568__auto___44351);
var G__44355 = (0);
seq__44076_44335 = G__44352;
chunk__44078_44336 = G__44353;
count__44079_44337 = G__44354;
i__44080_44338 = G__44355;
continue;
} else {
var map__44085_44356 = cljs.core.first(seq__44076_44350__$1);
var map__44085_44357__$1 = cljs.core.__destructure_map(map__44085_44356);
var task_44358 = map__44085_44357__$1;
var fn_str_44359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44085_44357__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44085_44357__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44361 = goog.getObjectByName(fn_str_44359,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44360)].join(''));

(fn_obj_44361.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44361.cljs$core$IFn$_invoke$arity$2(path,new_link_44333) : fn_obj_44361.call(null,path,new_link_44333));


var G__44364 = cljs.core.next(seq__44076_44350__$1);
var G__44365 = null;
var G__44366 = (0);
var G__44367 = (0);
seq__44076_44335 = G__44364;
chunk__44078_44336 = G__44365;
count__44079_44337 = G__44366;
i__44080_44338 = G__44367;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44330);
});})(seq__44030_44326,chunk__44034_44327,count__44035_44328,i__44036_44329,seq__43741,chunk__43743,count__43744,i__43745,new_link_44333,path_match_44331,node_44330,path,seq__43741__$1,temp__5804__auto__,map__43740,map__43740__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44331], 0));

goog.dom.insertSiblingAfter(new_link_44333,node_44330);


var G__44368 = seq__44030_44326;
var G__44369 = chunk__44034_44327;
var G__44370 = count__44035_44328;
var G__44371 = (i__44036_44329 + (1));
seq__44030_44326 = G__44368;
chunk__44034_44327 = G__44369;
count__44035_44328 = G__44370;
i__44036_44329 = G__44371;
continue;
} else {
var G__44372 = seq__44030_44326;
var G__44373 = chunk__44034_44327;
var G__44374 = count__44035_44328;
var G__44375 = (i__44036_44329 + (1));
seq__44030_44326 = G__44372;
chunk__44034_44327 = G__44373;
count__44035_44328 = G__44374;
i__44036_44329 = G__44375;
continue;
}
} else {
var G__44376 = seq__44030_44326;
var G__44377 = chunk__44034_44327;
var G__44378 = count__44035_44328;
var G__44379 = (i__44036_44329 + (1));
seq__44030_44326 = G__44376;
chunk__44034_44327 = G__44377;
count__44035_44328 = G__44378;
i__44036_44329 = G__44379;
continue;
}
} else {
var temp__5804__auto___44380__$1 = cljs.core.seq(seq__44030_44326);
if(temp__5804__auto___44380__$1){
var seq__44030_44381__$1 = temp__5804__auto___44380__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44030_44381__$1)){
var c__5568__auto___44382 = cljs.core.chunk_first(seq__44030_44381__$1);
var G__44383 = cljs.core.chunk_rest(seq__44030_44381__$1);
var G__44384 = c__5568__auto___44382;
var G__44385 = cljs.core.count(c__5568__auto___44382);
var G__44386 = (0);
seq__44030_44326 = G__44383;
chunk__44034_44327 = G__44384;
count__44035_44328 = G__44385;
i__44036_44329 = G__44386;
continue;
} else {
var node_44387 = cljs.core.first(seq__44030_44381__$1);
if(cljs.core.not(node_44387.shadow$old)){
var path_match_44388 = shadow.cljs.devtools.client.browser.match_paths(node_44387.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44388)){
var new_link_44390 = (function (){var G__44088 = node_44387.cloneNode(true);
G__44088.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44388),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44088;
})();
(node_44387.shadow$old = true);

(new_link_44390.onload = ((function (seq__44030_44326,chunk__44034_44327,count__44035_44328,i__44036_44329,seq__43741,chunk__43743,count__43744,i__43745,new_link_44390,path_match_44388,node_44387,seq__44030_44381__$1,temp__5804__auto___44380__$1,path,seq__43741__$1,temp__5804__auto__,map__43740,map__43740__$1,msg,updates,reload_info){
return (function (e){
var seq__44089_44392 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44091_44393 = null;
var count__44092_44394 = (0);
var i__44093_44395 = (0);
while(true){
if((i__44093_44395 < count__44092_44394)){
var map__44101_44396 = chunk__44091_44393.cljs$core$IIndexed$_nth$arity$2(null,i__44093_44395);
var map__44101_44397__$1 = cljs.core.__destructure_map(map__44101_44396);
var task_44398 = map__44101_44397__$1;
var fn_str_44399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44101_44397__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44101_44397__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44401 = goog.getObjectByName(fn_str_44399,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44400)].join(''));

(fn_obj_44401.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44401.cljs$core$IFn$_invoke$arity$2(path,new_link_44390) : fn_obj_44401.call(null,path,new_link_44390));


var G__44402 = seq__44089_44392;
var G__44403 = chunk__44091_44393;
var G__44404 = count__44092_44394;
var G__44405 = (i__44093_44395 + (1));
seq__44089_44392 = G__44402;
chunk__44091_44393 = G__44403;
count__44092_44394 = G__44404;
i__44093_44395 = G__44405;
continue;
} else {
var temp__5804__auto___44406__$2 = cljs.core.seq(seq__44089_44392);
if(temp__5804__auto___44406__$2){
var seq__44089_44407__$1 = temp__5804__auto___44406__$2;
if(cljs.core.chunked_seq_QMARK_(seq__44089_44407__$1)){
var c__5568__auto___44408 = cljs.core.chunk_first(seq__44089_44407__$1);
var G__44409 = cljs.core.chunk_rest(seq__44089_44407__$1);
var G__44410 = c__5568__auto___44408;
var G__44411 = cljs.core.count(c__5568__auto___44408);
var G__44412 = (0);
seq__44089_44392 = G__44409;
chunk__44091_44393 = G__44410;
count__44092_44394 = G__44411;
i__44093_44395 = G__44412;
continue;
} else {
var map__44102_44413 = cljs.core.first(seq__44089_44407__$1);
var map__44102_44414__$1 = cljs.core.__destructure_map(map__44102_44413);
var task_44415 = map__44102_44414__$1;
var fn_str_44416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44102_44414__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44102_44414__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44418 = goog.getObjectByName(fn_str_44416,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44417)].join(''));

(fn_obj_44418.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44418.cljs$core$IFn$_invoke$arity$2(path,new_link_44390) : fn_obj_44418.call(null,path,new_link_44390));


var G__44420 = cljs.core.next(seq__44089_44407__$1);
var G__44421 = null;
var G__44422 = (0);
var G__44423 = (0);
seq__44089_44392 = G__44420;
chunk__44091_44393 = G__44421;
count__44092_44394 = G__44422;
i__44093_44395 = G__44423;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44387);
});})(seq__44030_44326,chunk__44034_44327,count__44035_44328,i__44036_44329,seq__43741,chunk__43743,count__43744,i__43745,new_link_44390,path_match_44388,node_44387,seq__44030_44381__$1,temp__5804__auto___44380__$1,path,seq__43741__$1,temp__5804__auto__,map__43740,map__43740__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44388], 0));

goog.dom.insertSiblingAfter(new_link_44390,node_44387);


var G__44425 = cljs.core.next(seq__44030_44381__$1);
var G__44426 = null;
var G__44427 = (0);
var G__44428 = (0);
seq__44030_44326 = G__44425;
chunk__44034_44327 = G__44426;
count__44035_44328 = G__44427;
i__44036_44329 = G__44428;
continue;
} else {
var G__44429 = cljs.core.next(seq__44030_44381__$1);
var G__44430 = null;
var G__44431 = (0);
var G__44432 = (0);
seq__44030_44326 = G__44429;
chunk__44034_44327 = G__44430;
count__44035_44328 = G__44431;
i__44036_44329 = G__44432;
continue;
}
} else {
var G__44433 = cljs.core.next(seq__44030_44381__$1);
var G__44434 = null;
var G__44435 = (0);
var G__44436 = (0);
seq__44030_44326 = G__44433;
chunk__44034_44327 = G__44434;
count__44035_44328 = G__44435;
i__44036_44329 = G__44436;
continue;
}
}
} else {
}
}
break;
}


var G__44437 = cljs.core.next(seq__43741__$1);
var G__44438 = null;
var G__44439 = (0);
var G__44440 = (0);
seq__43741 = G__44437;
chunk__43743 = G__44438;
count__43744 = G__44439;
i__43745 = G__44440;
continue;
} else {
var G__44442 = cljs.core.next(seq__43741__$1);
var G__44443 = null;
var G__44444 = (0);
var G__44445 = (0);
seq__43741 = G__44442;
chunk__43743 = G__44443;
count__43744 = G__44444;
i__43745 = G__44445;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__44103){
var map__44104 = p__44103;
var map__44104__$1 = cljs.core.__destructure_map(map__44104);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44104__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__44105){
var map__44106 = p__44105;
var map__44106__$1 = cljs.core.__destructure_map(map__44106);
var _ = map__44106__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44106__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__44107,done,error){
var map__44108 = p__44107;
var map__44108__$1 = cljs.core.__destructure_map(map__44108);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44108__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__44109,done,error){
var map__44110 = p__44109;
var map__44110__$1 = cljs.core.__destructure_map(map__44110);
var msg = map__44110__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44110__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44110__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44110__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44112){
var map__44113 = p__44112;
var map__44113__$1 = cljs.core.__destructure_map(map__44113);
var src = map__44113__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44113__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__44116 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__44116) : done.call(null,G__44116));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__44117){
var map__44118 = p__44117;
var map__44118__$1 = cljs.core.__destructure_map(map__44118);
var msg__$1 = map__44118__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44118__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e44119){var ex = e44119;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__44120){
var map__44121 = p__44120;
var map__44121__$1 = cljs.core.__destructure_map(map__44121);
var env = map__44121__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44121__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__44122){
var map__44123 = p__44122;
var map__44123__$1 = cljs.core.__destructure_map(map__44123);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44123__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44123__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__44124){
var map__44125 = p__44124;
var map__44125__$1 = cljs.core.__destructure_map(map__44125);
var svc = map__44125__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44125__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
