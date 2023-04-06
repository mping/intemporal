goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39915 = arguments.length;
var i__5770__auto___39916 = (0);
while(true){
if((i__5770__auto___39916 < len__5769__auto___39915)){
args__5775__auto__.push((arguments[i__5770__auto___39916]));

var G__39917 = (i__5770__auto___39916 + (1));
i__5770__auto___39916 = G__39917;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39465){
var G__39466 = cljs.core.first(seq39465);
var seq39465__$1 = cljs.core.next(seq39465);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39466,seq39465__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39476 = cljs.core.seq(sources);
var chunk__39478 = null;
var count__39479 = (0);
var i__39480 = (0);
while(true){
if((i__39480 < count__39479)){
var map__39488 = chunk__39478.cljs$core$IIndexed$_nth$arity$2(null,i__39480);
var map__39488__$1 = cljs.core.__destructure_map(map__39488);
var src = map__39488__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39488__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39488__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39488__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39488__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39489){var e_39918 = e39489;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39918);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39918.message)].join('')));
}

var G__39919 = seq__39476;
var G__39920 = chunk__39478;
var G__39921 = count__39479;
var G__39922 = (i__39480 + (1));
seq__39476 = G__39919;
chunk__39478 = G__39920;
count__39479 = G__39921;
i__39480 = G__39922;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39476);
if(temp__5804__auto__){
var seq__39476__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39476__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39476__$1);
var G__39923 = cljs.core.chunk_rest(seq__39476__$1);
var G__39924 = c__5568__auto__;
var G__39925 = cljs.core.count(c__5568__auto__);
var G__39926 = (0);
seq__39476 = G__39923;
chunk__39478 = G__39924;
count__39479 = G__39925;
i__39480 = G__39926;
continue;
} else {
var map__39491 = cljs.core.first(seq__39476__$1);
var map__39491__$1 = cljs.core.__destructure_map(map__39491);
var src = map__39491__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39491__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39491__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39491__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39491__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39501){var e_39927 = e39501;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39927);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39927.message)].join('')));
}

var G__39928 = cljs.core.next(seq__39476__$1);
var G__39929 = null;
var G__39930 = (0);
var G__39931 = (0);
seq__39476 = G__39928;
chunk__39478 = G__39929;
count__39479 = G__39930;
i__39480 = G__39931;
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
var seq__39505 = cljs.core.seq(js_requires);
var chunk__39506 = null;
var count__39507 = (0);
var i__39508 = (0);
while(true){
if((i__39508 < count__39507)){
var js_ns = chunk__39506.cljs$core$IIndexed$_nth$arity$2(null,i__39508);
var require_str_39932 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39932);


var G__39933 = seq__39505;
var G__39934 = chunk__39506;
var G__39935 = count__39507;
var G__39936 = (i__39508 + (1));
seq__39505 = G__39933;
chunk__39506 = G__39934;
count__39507 = G__39935;
i__39508 = G__39936;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39505);
if(temp__5804__auto__){
var seq__39505__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39505__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39505__$1);
var G__39937 = cljs.core.chunk_rest(seq__39505__$1);
var G__39938 = c__5568__auto__;
var G__39939 = cljs.core.count(c__5568__auto__);
var G__39940 = (0);
seq__39505 = G__39937;
chunk__39506 = G__39938;
count__39507 = G__39939;
i__39508 = G__39940;
continue;
} else {
var js_ns = cljs.core.first(seq__39505__$1);
var require_str_39941 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39941);


var G__39942 = cljs.core.next(seq__39505__$1);
var G__39943 = null;
var G__39944 = (0);
var G__39945 = (0);
seq__39505 = G__39942;
chunk__39506 = G__39943;
count__39507 = G__39944;
i__39508 = G__39945;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39518){
var map__39519 = p__39518;
var map__39519__$1 = cljs.core.__destructure_map(map__39519);
var msg = map__39519__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39519__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39519__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39522(s__39523){
return (new cljs.core.LazySeq(null,(function (){
var s__39523__$1 = s__39523;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__39523__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__39530 = cljs.core.first(xs__6360__auto__);
var map__39530__$1 = cljs.core.__destructure_map(map__39530);
var src = map__39530__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39530__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39530__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__39523__$1,map__39530,map__39530__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39519,map__39519__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39522_$_iter__39524(s__39525){
return (new cljs.core.LazySeq(null,((function (s__39523__$1,map__39530,map__39530__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39519,map__39519__$1,msg,info,reload_info){
return (function (){
var s__39525__$1 = s__39525;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__39525__$1);
if(temp__5804__auto____$1){
var s__39525__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39525__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39525__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39527 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39526 = (0);
while(true){
if((i__39526 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__39526);
cljs.core.chunk_append(b__39527,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39946 = (i__39526 + (1));
i__39526 = G__39946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39527),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39522_$_iter__39524(cljs.core.chunk_rest(s__39525__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39527),null);
}
} else {
var warning = cljs.core.first(s__39525__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39522_$_iter__39524(cljs.core.rest(s__39525__$2)));
}
} else {
return null;
}
break;
}
});})(s__39523__$1,map__39530,map__39530__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39519,map__39519__$1,msg,info,reload_info))
,null,null));
});})(s__39523__$1,map__39530,map__39530__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39519,map__39519__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39522(cljs.core.rest(s__39523__$1)));
} else {
var G__39947 = cljs.core.rest(s__39523__$1);
s__39523__$1 = G__39947;
continue;
}
} else {
var G__39948 = cljs.core.rest(s__39523__$1);
s__39523__$1 = G__39948;
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
var seq__39535_39949 = cljs.core.seq(warnings);
var chunk__39536_39950 = null;
var count__39537_39951 = (0);
var i__39538_39952 = (0);
while(true){
if((i__39538_39952 < count__39537_39951)){
var map__39546_39953 = chunk__39536_39950.cljs$core$IIndexed$_nth$arity$2(null,i__39538_39952);
var map__39546_39954__$1 = cljs.core.__destructure_map(map__39546_39953);
var w_39955 = map__39546_39954__$1;
var msg_39956__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39546_39954__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39546_39954__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39546_39954__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39546_39954__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39959)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39957),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39958),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39956__$1)].join(''));


var G__39960 = seq__39535_39949;
var G__39961 = chunk__39536_39950;
var G__39962 = count__39537_39951;
var G__39963 = (i__39538_39952 + (1));
seq__39535_39949 = G__39960;
chunk__39536_39950 = G__39961;
count__39537_39951 = G__39962;
i__39538_39952 = G__39963;
continue;
} else {
var temp__5804__auto___39964 = cljs.core.seq(seq__39535_39949);
if(temp__5804__auto___39964){
var seq__39535_39965__$1 = temp__5804__auto___39964;
if(cljs.core.chunked_seq_QMARK_(seq__39535_39965__$1)){
var c__5568__auto___39966 = cljs.core.chunk_first(seq__39535_39965__$1);
var G__39967 = cljs.core.chunk_rest(seq__39535_39965__$1);
var G__39968 = c__5568__auto___39966;
var G__39969 = cljs.core.count(c__5568__auto___39966);
var G__39970 = (0);
seq__39535_39949 = G__39967;
chunk__39536_39950 = G__39968;
count__39537_39951 = G__39969;
i__39538_39952 = G__39970;
continue;
} else {
var map__39551_39971 = cljs.core.first(seq__39535_39965__$1);
var map__39551_39972__$1 = cljs.core.__destructure_map(map__39551_39971);
var w_39973 = map__39551_39972__$1;
var msg_39974__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39551_39972__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39551_39972__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39551_39972__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39551_39972__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39977)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39975),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39976),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39974__$1)].join(''));


var G__39978 = cljs.core.next(seq__39535_39965__$1);
var G__39979 = null;
var G__39980 = (0);
var G__39981 = (0);
seq__39535_39949 = G__39978;
chunk__39536_39950 = G__39979;
count__39537_39951 = G__39980;
i__39538_39952 = G__39981;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39515_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39515_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39559){
var map__39560 = p__39559;
var map__39560__$1 = cljs.core.__destructure_map(map__39560);
var msg = map__39560__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39560__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39560__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__39561 = cljs.core.seq(updates);
var chunk__39563 = null;
var count__39564 = (0);
var i__39565 = (0);
while(true){
if((i__39565 < count__39564)){
var path = chunk__39563.cljs$core$IIndexed$_nth$arity$2(null,i__39565);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39735_39983 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39739_39984 = null;
var count__39740_39985 = (0);
var i__39741_39986 = (0);
while(true){
if((i__39741_39986 < count__39740_39985)){
var node_39987 = chunk__39739_39984.cljs$core$IIndexed$_nth$arity$2(null,i__39741_39986);
if(cljs.core.not(node_39987.shadow$old)){
var path_match_39988 = shadow.cljs.devtools.client.browser.match_paths(node_39987.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39988)){
var new_link_39989 = (function (){var G__39780 = node_39987.cloneNode(true);
G__39780.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39988),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39780;
})();
(node_39987.shadow$old = true);

(new_link_39989.onload = ((function (seq__39735_39983,chunk__39739_39984,count__39740_39985,i__39741_39986,seq__39561,chunk__39563,count__39564,i__39565,new_link_39989,path_match_39988,node_39987,path,map__39560,map__39560__$1,msg,updates,reload_info){
return (function (e){
var seq__39781_39990 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39783_39991 = null;
var count__39784_39992 = (0);
var i__39785_39993 = (0);
while(true){
if((i__39785_39993 < count__39784_39992)){
var map__39789_39994 = chunk__39783_39991.cljs$core$IIndexed$_nth$arity$2(null,i__39785_39993);
var map__39789_39995__$1 = cljs.core.__destructure_map(map__39789_39994);
var task_39996 = map__39789_39995__$1;
var fn_str_39997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39789_39995__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39789_39995__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39999 = goog.getObjectByName(fn_str_39997,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39998)].join(''));

(fn_obj_39999.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39999.cljs$core$IFn$_invoke$arity$2(path,new_link_39989) : fn_obj_39999.call(null,path,new_link_39989));


var G__40000 = seq__39781_39990;
var G__40001 = chunk__39783_39991;
var G__40002 = count__39784_39992;
var G__40003 = (i__39785_39993 + (1));
seq__39781_39990 = G__40000;
chunk__39783_39991 = G__40001;
count__39784_39992 = G__40002;
i__39785_39993 = G__40003;
continue;
} else {
var temp__5804__auto___40004 = cljs.core.seq(seq__39781_39990);
if(temp__5804__auto___40004){
var seq__39781_40005__$1 = temp__5804__auto___40004;
if(cljs.core.chunked_seq_QMARK_(seq__39781_40005__$1)){
var c__5568__auto___40006 = cljs.core.chunk_first(seq__39781_40005__$1);
var G__40007 = cljs.core.chunk_rest(seq__39781_40005__$1);
var G__40008 = c__5568__auto___40006;
var G__40009 = cljs.core.count(c__5568__auto___40006);
var G__40010 = (0);
seq__39781_39990 = G__40007;
chunk__39783_39991 = G__40008;
count__39784_39992 = G__40009;
i__39785_39993 = G__40010;
continue;
} else {
var map__39790_40011 = cljs.core.first(seq__39781_40005__$1);
var map__39790_40012__$1 = cljs.core.__destructure_map(map__39790_40011);
var task_40013 = map__39790_40012__$1;
var fn_str_40014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39790_40012__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39790_40012__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40017 = goog.getObjectByName(fn_str_40014,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40015)].join(''));

(fn_obj_40017.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40017.cljs$core$IFn$_invoke$arity$2(path,new_link_39989) : fn_obj_40017.call(null,path,new_link_39989));


var G__40019 = cljs.core.next(seq__39781_40005__$1);
var G__40020 = null;
var G__40021 = (0);
var G__40022 = (0);
seq__39781_39990 = G__40019;
chunk__39783_39991 = G__40020;
count__39784_39992 = G__40021;
i__39785_39993 = G__40022;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39987);
});})(seq__39735_39983,chunk__39739_39984,count__39740_39985,i__39741_39986,seq__39561,chunk__39563,count__39564,i__39565,new_link_39989,path_match_39988,node_39987,path,map__39560,map__39560__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39988], 0));

goog.dom.insertSiblingAfter(new_link_39989,node_39987);


var G__40023 = seq__39735_39983;
var G__40024 = chunk__39739_39984;
var G__40025 = count__39740_39985;
var G__40026 = (i__39741_39986 + (1));
seq__39735_39983 = G__40023;
chunk__39739_39984 = G__40024;
count__39740_39985 = G__40025;
i__39741_39986 = G__40026;
continue;
} else {
var G__40027 = seq__39735_39983;
var G__40028 = chunk__39739_39984;
var G__40029 = count__39740_39985;
var G__40030 = (i__39741_39986 + (1));
seq__39735_39983 = G__40027;
chunk__39739_39984 = G__40028;
count__39740_39985 = G__40029;
i__39741_39986 = G__40030;
continue;
}
} else {
var G__40031 = seq__39735_39983;
var G__40032 = chunk__39739_39984;
var G__40033 = count__39740_39985;
var G__40034 = (i__39741_39986 + (1));
seq__39735_39983 = G__40031;
chunk__39739_39984 = G__40032;
count__39740_39985 = G__40033;
i__39741_39986 = G__40034;
continue;
}
} else {
var temp__5804__auto___40035 = cljs.core.seq(seq__39735_39983);
if(temp__5804__auto___40035){
var seq__39735_40036__$1 = temp__5804__auto___40035;
if(cljs.core.chunked_seq_QMARK_(seq__39735_40036__$1)){
var c__5568__auto___40037 = cljs.core.chunk_first(seq__39735_40036__$1);
var G__40038 = cljs.core.chunk_rest(seq__39735_40036__$1);
var G__40039 = c__5568__auto___40037;
var G__40040 = cljs.core.count(c__5568__auto___40037);
var G__40041 = (0);
seq__39735_39983 = G__40038;
chunk__39739_39984 = G__40039;
count__39740_39985 = G__40040;
i__39741_39986 = G__40041;
continue;
} else {
var node_40042 = cljs.core.first(seq__39735_40036__$1);
if(cljs.core.not(node_40042.shadow$old)){
var path_match_40043 = shadow.cljs.devtools.client.browser.match_paths(node_40042.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40043)){
var new_link_40044 = (function (){var G__39793 = node_40042.cloneNode(true);
G__39793.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40043),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39793;
})();
(node_40042.shadow$old = true);

(new_link_40044.onload = ((function (seq__39735_39983,chunk__39739_39984,count__39740_39985,i__39741_39986,seq__39561,chunk__39563,count__39564,i__39565,new_link_40044,path_match_40043,node_40042,seq__39735_40036__$1,temp__5804__auto___40035,path,map__39560,map__39560__$1,msg,updates,reload_info){
return (function (e){
var seq__39794_40047 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39796_40048 = null;
var count__39797_40049 = (0);
var i__39798_40050 = (0);
while(true){
if((i__39798_40050 < count__39797_40049)){
var map__39803_40051 = chunk__39796_40048.cljs$core$IIndexed$_nth$arity$2(null,i__39798_40050);
var map__39803_40052__$1 = cljs.core.__destructure_map(map__39803_40051);
var task_40053 = map__39803_40052__$1;
var fn_str_40054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39803_40052__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39803_40052__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40056 = goog.getObjectByName(fn_str_40054,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40055)].join(''));

(fn_obj_40056.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40056.cljs$core$IFn$_invoke$arity$2(path,new_link_40044) : fn_obj_40056.call(null,path,new_link_40044));


var G__40057 = seq__39794_40047;
var G__40058 = chunk__39796_40048;
var G__40059 = count__39797_40049;
var G__40060 = (i__39798_40050 + (1));
seq__39794_40047 = G__40057;
chunk__39796_40048 = G__40058;
count__39797_40049 = G__40059;
i__39798_40050 = G__40060;
continue;
} else {
var temp__5804__auto___40061__$1 = cljs.core.seq(seq__39794_40047);
if(temp__5804__auto___40061__$1){
var seq__39794_40062__$1 = temp__5804__auto___40061__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39794_40062__$1)){
var c__5568__auto___40063 = cljs.core.chunk_first(seq__39794_40062__$1);
var G__40064 = cljs.core.chunk_rest(seq__39794_40062__$1);
var G__40065 = c__5568__auto___40063;
var G__40066 = cljs.core.count(c__5568__auto___40063);
var G__40067 = (0);
seq__39794_40047 = G__40064;
chunk__39796_40048 = G__40065;
count__39797_40049 = G__40066;
i__39798_40050 = G__40067;
continue;
} else {
var map__39806_40068 = cljs.core.first(seq__39794_40062__$1);
var map__39806_40069__$1 = cljs.core.__destructure_map(map__39806_40068);
var task_40070 = map__39806_40069__$1;
var fn_str_40071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39806_40069__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39806_40069__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40073 = goog.getObjectByName(fn_str_40071,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40072)].join(''));

(fn_obj_40073.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40073.cljs$core$IFn$_invoke$arity$2(path,new_link_40044) : fn_obj_40073.call(null,path,new_link_40044));


var G__40074 = cljs.core.next(seq__39794_40062__$1);
var G__40075 = null;
var G__40076 = (0);
var G__40077 = (0);
seq__39794_40047 = G__40074;
chunk__39796_40048 = G__40075;
count__39797_40049 = G__40076;
i__39798_40050 = G__40077;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40042);
});})(seq__39735_39983,chunk__39739_39984,count__39740_39985,i__39741_39986,seq__39561,chunk__39563,count__39564,i__39565,new_link_40044,path_match_40043,node_40042,seq__39735_40036__$1,temp__5804__auto___40035,path,map__39560,map__39560__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40043], 0));

goog.dom.insertSiblingAfter(new_link_40044,node_40042);


var G__40078 = cljs.core.next(seq__39735_40036__$1);
var G__40079 = null;
var G__40080 = (0);
var G__40081 = (0);
seq__39735_39983 = G__40078;
chunk__39739_39984 = G__40079;
count__39740_39985 = G__40080;
i__39741_39986 = G__40081;
continue;
} else {
var G__40082 = cljs.core.next(seq__39735_40036__$1);
var G__40083 = null;
var G__40084 = (0);
var G__40085 = (0);
seq__39735_39983 = G__40082;
chunk__39739_39984 = G__40083;
count__39740_39985 = G__40084;
i__39741_39986 = G__40085;
continue;
}
} else {
var G__40086 = cljs.core.next(seq__39735_40036__$1);
var G__40087 = null;
var G__40088 = (0);
var G__40089 = (0);
seq__39735_39983 = G__40086;
chunk__39739_39984 = G__40087;
count__39740_39985 = G__40088;
i__39741_39986 = G__40089;
continue;
}
}
} else {
}
}
break;
}


var G__40090 = seq__39561;
var G__40091 = chunk__39563;
var G__40092 = count__39564;
var G__40093 = (i__39565 + (1));
seq__39561 = G__40090;
chunk__39563 = G__40091;
count__39564 = G__40092;
i__39565 = G__40093;
continue;
} else {
var G__40094 = seq__39561;
var G__40095 = chunk__39563;
var G__40096 = count__39564;
var G__40097 = (i__39565 + (1));
seq__39561 = G__40094;
chunk__39563 = G__40095;
count__39564 = G__40096;
i__39565 = G__40097;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39561);
if(temp__5804__auto__){
var seq__39561__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39561__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39561__$1);
var G__40098 = cljs.core.chunk_rest(seq__39561__$1);
var G__40099 = c__5568__auto__;
var G__40100 = cljs.core.count(c__5568__auto__);
var G__40101 = (0);
seq__39561 = G__40098;
chunk__39563 = G__40099;
count__39564 = G__40100;
i__39565 = G__40101;
continue;
} else {
var path = cljs.core.first(seq__39561__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39808_40103 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39812_40104 = null;
var count__39813_40105 = (0);
var i__39814_40106 = (0);
while(true){
if((i__39814_40106 < count__39813_40105)){
var node_40107 = chunk__39812_40104.cljs$core$IIndexed$_nth$arity$2(null,i__39814_40106);
if(cljs.core.not(node_40107.shadow$old)){
var path_match_40108 = shadow.cljs.devtools.client.browser.match_paths(node_40107.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40108)){
var new_link_40109 = (function (){var G__39852 = node_40107.cloneNode(true);
G__39852.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40108),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39852;
})();
(node_40107.shadow$old = true);

(new_link_40109.onload = ((function (seq__39808_40103,chunk__39812_40104,count__39813_40105,i__39814_40106,seq__39561,chunk__39563,count__39564,i__39565,new_link_40109,path_match_40108,node_40107,path,seq__39561__$1,temp__5804__auto__,map__39560,map__39560__$1,msg,updates,reload_info){
return (function (e){
var seq__39853_40110 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39855_40111 = null;
var count__39856_40112 = (0);
var i__39857_40113 = (0);
while(true){
if((i__39857_40113 < count__39856_40112)){
var map__39863_40114 = chunk__39855_40111.cljs$core$IIndexed$_nth$arity$2(null,i__39857_40113);
var map__39863_40115__$1 = cljs.core.__destructure_map(map__39863_40114);
var task_40116 = map__39863_40115__$1;
var fn_str_40117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39863_40115__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39863_40115__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40119 = goog.getObjectByName(fn_str_40117,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40118)].join(''));

(fn_obj_40119.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40119.cljs$core$IFn$_invoke$arity$2(path,new_link_40109) : fn_obj_40119.call(null,path,new_link_40109));


var G__40120 = seq__39853_40110;
var G__40121 = chunk__39855_40111;
var G__40122 = count__39856_40112;
var G__40123 = (i__39857_40113 + (1));
seq__39853_40110 = G__40120;
chunk__39855_40111 = G__40121;
count__39856_40112 = G__40122;
i__39857_40113 = G__40123;
continue;
} else {
var temp__5804__auto___40124__$1 = cljs.core.seq(seq__39853_40110);
if(temp__5804__auto___40124__$1){
var seq__39853_40125__$1 = temp__5804__auto___40124__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39853_40125__$1)){
var c__5568__auto___40126 = cljs.core.chunk_first(seq__39853_40125__$1);
var G__40127 = cljs.core.chunk_rest(seq__39853_40125__$1);
var G__40128 = c__5568__auto___40126;
var G__40129 = cljs.core.count(c__5568__auto___40126);
var G__40130 = (0);
seq__39853_40110 = G__40127;
chunk__39855_40111 = G__40128;
count__39856_40112 = G__40129;
i__39857_40113 = G__40130;
continue;
} else {
var map__39866_40131 = cljs.core.first(seq__39853_40125__$1);
var map__39866_40132__$1 = cljs.core.__destructure_map(map__39866_40131);
var task_40133 = map__39866_40132__$1;
var fn_str_40134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39866_40132__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39866_40132__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40136 = goog.getObjectByName(fn_str_40134,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40135)].join(''));

(fn_obj_40136.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40136.cljs$core$IFn$_invoke$arity$2(path,new_link_40109) : fn_obj_40136.call(null,path,new_link_40109));


var G__40137 = cljs.core.next(seq__39853_40125__$1);
var G__40138 = null;
var G__40139 = (0);
var G__40140 = (0);
seq__39853_40110 = G__40137;
chunk__39855_40111 = G__40138;
count__39856_40112 = G__40139;
i__39857_40113 = G__40140;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40107);
});})(seq__39808_40103,chunk__39812_40104,count__39813_40105,i__39814_40106,seq__39561,chunk__39563,count__39564,i__39565,new_link_40109,path_match_40108,node_40107,path,seq__39561__$1,temp__5804__auto__,map__39560,map__39560__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40108], 0));

goog.dom.insertSiblingAfter(new_link_40109,node_40107);


var G__40141 = seq__39808_40103;
var G__40142 = chunk__39812_40104;
var G__40143 = count__39813_40105;
var G__40144 = (i__39814_40106 + (1));
seq__39808_40103 = G__40141;
chunk__39812_40104 = G__40142;
count__39813_40105 = G__40143;
i__39814_40106 = G__40144;
continue;
} else {
var G__40145 = seq__39808_40103;
var G__40146 = chunk__39812_40104;
var G__40147 = count__39813_40105;
var G__40148 = (i__39814_40106 + (1));
seq__39808_40103 = G__40145;
chunk__39812_40104 = G__40146;
count__39813_40105 = G__40147;
i__39814_40106 = G__40148;
continue;
}
} else {
var G__40149 = seq__39808_40103;
var G__40150 = chunk__39812_40104;
var G__40151 = count__39813_40105;
var G__40152 = (i__39814_40106 + (1));
seq__39808_40103 = G__40149;
chunk__39812_40104 = G__40150;
count__39813_40105 = G__40151;
i__39814_40106 = G__40152;
continue;
}
} else {
var temp__5804__auto___40153__$1 = cljs.core.seq(seq__39808_40103);
if(temp__5804__auto___40153__$1){
var seq__39808_40154__$1 = temp__5804__auto___40153__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39808_40154__$1)){
var c__5568__auto___40155 = cljs.core.chunk_first(seq__39808_40154__$1);
var G__40156 = cljs.core.chunk_rest(seq__39808_40154__$1);
var G__40157 = c__5568__auto___40155;
var G__40158 = cljs.core.count(c__5568__auto___40155);
var G__40159 = (0);
seq__39808_40103 = G__40156;
chunk__39812_40104 = G__40157;
count__39813_40105 = G__40158;
i__39814_40106 = G__40159;
continue;
} else {
var node_40160 = cljs.core.first(seq__39808_40154__$1);
if(cljs.core.not(node_40160.shadow$old)){
var path_match_40161 = shadow.cljs.devtools.client.browser.match_paths(node_40160.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40161)){
var new_link_40162 = (function (){var G__39869 = node_40160.cloneNode(true);
G__39869.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40161),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39869;
})();
(node_40160.shadow$old = true);

(new_link_40162.onload = ((function (seq__39808_40103,chunk__39812_40104,count__39813_40105,i__39814_40106,seq__39561,chunk__39563,count__39564,i__39565,new_link_40162,path_match_40161,node_40160,seq__39808_40154__$1,temp__5804__auto___40153__$1,path,seq__39561__$1,temp__5804__auto__,map__39560,map__39560__$1,msg,updates,reload_info){
return (function (e){
var seq__39870_40163 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39872_40164 = null;
var count__39873_40165 = (0);
var i__39874_40166 = (0);
while(true){
if((i__39874_40166 < count__39873_40165)){
var map__39878_40167 = chunk__39872_40164.cljs$core$IIndexed$_nth$arity$2(null,i__39874_40166);
var map__39878_40168__$1 = cljs.core.__destructure_map(map__39878_40167);
var task_40169 = map__39878_40168__$1;
var fn_str_40170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39878_40168__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39878_40168__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40172 = goog.getObjectByName(fn_str_40170,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40171)].join(''));

(fn_obj_40172.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40172.cljs$core$IFn$_invoke$arity$2(path,new_link_40162) : fn_obj_40172.call(null,path,new_link_40162));


var G__40173 = seq__39870_40163;
var G__40174 = chunk__39872_40164;
var G__40175 = count__39873_40165;
var G__40176 = (i__39874_40166 + (1));
seq__39870_40163 = G__40173;
chunk__39872_40164 = G__40174;
count__39873_40165 = G__40175;
i__39874_40166 = G__40176;
continue;
} else {
var temp__5804__auto___40177__$2 = cljs.core.seq(seq__39870_40163);
if(temp__5804__auto___40177__$2){
var seq__39870_40178__$1 = temp__5804__auto___40177__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39870_40178__$1)){
var c__5568__auto___40179 = cljs.core.chunk_first(seq__39870_40178__$1);
var G__40180 = cljs.core.chunk_rest(seq__39870_40178__$1);
var G__40181 = c__5568__auto___40179;
var G__40182 = cljs.core.count(c__5568__auto___40179);
var G__40183 = (0);
seq__39870_40163 = G__40180;
chunk__39872_40164 = G__40181;
count__39873_40165 = G__40182;
i__39874_40166 = G__40183;
continue;
} else {
var map__39879_40184 = cljs.core.first(seq__39870_40178__$1);
var map__39879_40185__$1 = cljs.core.__destructure_map(map__39879_40184);
var task_40186 = map__39879_40185__$1;
var fn_str_40187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39879_40185__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39879_40185__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40189 = goog.getObjectByName(fn_str_40187,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40188)].join(''));

(fn_obj_40189.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40189.cljs$core$IFn$_invoke$arity$2(path,new_link_40162) : fn_obj_40189.call(null,path,new_link_40162));


var G__40190 = cljs.core.next(seq__39870_40178__$1);
var G__40191 = null;
var G__40192 = (0);
var G__40193 = (0);
seq__39870_40163 = G__40190;
chunk__39872_40164 = G__40191;
count__39873_40165 = G__40192;
i__39874_40166 = G__40193;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40160);
});})(seq__39808_40103,chunk__39812_40104,count__39813_40105,i__39814_40106,seq__39561,chunk__39563,count__39564,i__39565,new_link_40162,path_match_40161,node_40160,seq__39808_40154__$1,temp__5804__auto___40153__$1,path,seq__39561__$1,temp__5804__auto__,map__39560,map__39560__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40161], 0));

goog.dom.insertSiblingAfter(new_link_40162,node_40160);


var G__40194 = cljs.core.next(seq__39808_40154__$1);
var G__40195 = null;
var G__40196 = (0);
var G__40197 = (0);
seq__39808_40103 = G__40194;
chunk__39812_40104 = G__40195;
count__39813_40105 = G__40196;
i__39814_40106 = G__40197;
continue;
} else {
var G__40198 = cljs.core.next(seq__39808_40154__$1);
var G__40199 = null;
var G__40200 = (0);
var G__40201 = (0);
seq__39808_40103 = G__40198;
chunk__39812_40104 = G__40199;
count__39813_40105 = G__40200;
i__39814_40106 = G__40201;
continue;
}
} else {
var G__40202 = cljs.core.next(seq__39808_40154__$1);
var G__40203 = null;
var G__40204 = (0);
var G__40205 = (0);
seq__39808_40103 = G__40202;
chunk__39812_40104 = G__40203;
count__39813_40105 = G__40204;
i__39814_40106 = G__40205;
continue;
}
}
} else {
}
}
break;
}


var G__40207 = cljs.core.next(seq__39561__$1);
var G__40208 = null;
var G__40209 = (0);
var G__40210 = (0);
seq__39561 = G__40207;
chunk__39563 = G__40208;
count__39564 = G__40209;
i__39565 = G__40210;
continue;
} else {
var G__40211 = cljs.core.next(seq__39561__$1);
var G__40212 = null;
var G__40213 = (0);
var G__40214 = (0);
seq__39561 = G__40211;
chunk__39563 = G__40212;
count__39564 = G__40213;
i__39565 = G__40214;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39881){
var map__39882 = p__39881;
var map__39882__$1 = cljs.core.__destructure_map(map__39882);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39882__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39891){
var map__39892 = p__39891;
var map__39892__$1 = cljs.core.__destructure_map(map__39892);
var _ = map__39892__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39892__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39893,done,error){
var map__39894 = p__39893;
var map__39894__$1 = cljs.core.__destructure_map(map__39894);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39894__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39895,done,error){
var map__39896 = p__39895;
var map__39896__$1 = cljs.core.__destructure_map(map__39896);
var msg = map__39896__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39896__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39896__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39896__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39899){
var map__39900 = p__39899;
var map__39900__$1 = cljs.core.__destructure_map(map__39900);
var src = map__39900__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39900__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39901 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39901) : done.call(null,G__39901));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39902){
var map__39903 = p__39902;
var map__39903__$1 = cljs.core.__destructure_map(map__39903);
var msg__$1 = map__39903__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39903__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39904){var ex = e39904;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39907){
var map__39908 = p__39907;
var map__39908__$1 = cljs.core.__destructure_map(map__39908);
var env = map__39908__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39908__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39911){
var map__39912 = p__39911;
var map__39912__$1 = cljs.core.__destructure_map(map__39912);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39912__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39912__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__39913){
var map__39914 = p__39913;
var map__39914__$1 = cljs.core.__destructure_map(map__39914);
var svc = map__39914__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39914__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
