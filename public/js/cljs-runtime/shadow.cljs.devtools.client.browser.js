goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39841 = arguments.length;
var i__5770__auto___39842 = (0);
while(true){
if((i__5770__auto___39842 < len__5769__auto___39841)){
args__5775__auto__.push((arguments[i__5770__auto___39842]));

var G__39843 = (i__5770__auto___39842 + (1));
i__5770__auto___39842 = G__39843;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39410){
var G__39411 = cljs.core.first(seq39410);
var seq39410__$1 = cljs.core.next(seq39410);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39411,seq39410__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39420 = cljs.core.seq(sources);
var chunk__39421 = null;
var count__39422 = (0);
var i__39423 = (0);
while(true){
if((i__39423 < count__39422)){
var map__39437 = chunk__39421.cljs$core$IIndexed$_nth$arity$2(null,i__39423);
var map__39437__$1 = cljs.core.__destructure_map(map__39437);
var src = map__39437__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39437__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39437__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39437__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39437__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39438){var e_39844 = e39438;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39844);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39844.message)].join('')));
}

var G__39845 = seq__39420;
var G__39846 = chunk__39421;
var G__39847 = count__39422;
var G__39848 = (i__39423 + (1));
seq__39420 = G__39845;
chunk__39421 = G__39846;
count__39422 = G__39847;
i__39423 = G__39848;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39420);
if(temp__5804__auto__){
var seq__39420__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39420__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39420__$1);
var G__39849 = cljs.core.chunk_rest(seq__39420__$1);
var G__39850 = c__5568__auto__;
var G__39851 = cljs.core.count(c__5568__auto__);
var G__39852 = (0);
seq__39420 = G__39849;
chunk__39421 = G__39850;
count__39422 = G__39851;
i__39423 = G__39852;
continue;
} else {
var map__39439 = cljs.core.first(seq__39420__$1);
var map__39439__$1 = cljs.core.__destructure_map(map__39439);
var src = map__39439__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39439__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39439__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39439__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39439__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39440){var e_39853 = e39440;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39853);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39853.message)].join('')));
}

var G__39854 = cljs.core.next(seq__39420__$1);
var G__39855 = null;
var G__39856 = (0);
var G__39857 = (0);
seq__39420 = G__39854;
chunk__39421 = G__39855;
count__39422 = G__39856;
i__39423 = G__39857;
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
var seq__39449 = cljs.core.seq(js_requires);
var chunk__39450 = null;
var count__39451 = (0);
var i__39452 = (0);
while(true){
if((i__39452 < count__39451)){
var js_ns = chunk__39450.cljs$core$IIndexed$_nth$arity$2(null,i__39452);
var require_str_39859 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39859);


var G__39860 = seq__39449;
var G__39861 = chunk__39450;
var G__39862 = count__39451;
var G__39863 = (i__39452 + (1));
seq__39449 = G__39860;
chunk__39450 = G__39861;
count__39451 = G__39862;
i__39452 = G__39863;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39449);
if(temp__5804__auto__){
var seq__39449__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39449__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39449__$1);
var G__39864 = cljs.core.chunk_rest(seq__39449__$1);
var G__39865 = c__5568__auto__;
var G__39866 = cljs.core.count(c__5568__auto__);
var G__39867 = (0);
seq__39449 = G__39864;
chunk__39450 = G__39865;
count__39451 = G__39866;
i__39452 = G__39867;
continue;
} else {
var js_ns = cljs.core.first(seq__39449__$1);
var require_str_39868 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39868);


var G__39869 = cljs.core.next(seq__39449__$1);
var G__39870 = null;
var G__39871 = (0);
var G__39872 = (0);
seq__39449 = G__39869;
chunk__39450 = G__39870;
count__39451 = G__39871;
i__39452 = G__39872;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39457){
var map__39458 = p__39457;
var map__39458__$1 = cljs.core.__destructure_map(map__39458);
var msg = map__39458__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39458__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39458__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39459(s__39460){
return (new cljs.core.LazySeq(null,(function (){
var s__39460__$1 = s__39460;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__39460__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__39465 = cljs.core.first(xs__6360__auto__);
var map__39465__$1 = cljs.core.__destructure_map(map__39465);
var src = map__39465__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39465__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39465__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__39460__$1,map__39465,map__39465__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39458,map__39458__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39459_$_iter__39461(s__39462){
return (new cljs.core.LazySeq(null,((function (s__39460__$1,map__39465,map__39465__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39458,map__39458__$1,msg,info,reload_info){
return (function (){
var s__39462__$1 = s__39462;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__39462__$1);
if(temp__5804__auto____$1){
var s__39462__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39462__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39462__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39464 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39463 = (0);
while(true){
if((i__39463 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__39463);
cljs.core.chunk_append(b__39464,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39873 = (i__39463 + (1));
i__39463 = G__39873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39464),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39459_$_iter__39461(cljs.core.chunk_rest(s__39462__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39464),null);
}
} else {
var warning = cljs.core.first(s__39462__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39459_$_iter__39461(cljs.core.rest(s__39462__$2)));
}
} else {
return null;
}
break;
}
});})(s__39460__$1,map__39465,map__39465__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39458,map__39458__$1,msg,info,reload_info))
,null,null));
});})(s__39460__$1,map__39465,map__39465__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39458,map__39458__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39459(cljs.core.rest(s__39460__$1)));
} else {
var G__39875 = cljs.core.rest(s__39460__$1);
s__39460__$1 = G__39875;
continue;
}
} else {
var G__39876 = cljs.core.rest(s__39460__$1);
s__39460__$1 = G__39876;
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
var seq__39466_39877 = cljs.core.seq(warnings);
var chunk__39467_39878 = null;
var count__39468_39879 = (0);
var i__39469_39880 = (0);
while(true){
if((i__39469_39880 < count__39468_39879)){
var map__39472_39882 = chunk__39467_39878.cljs$core$IIndexed$_nth$arity$2(null,i__39469_39880);
var map__39472_39883__$1 = cljs.core.__destructure_map(map__39472_39882);
var w_39884 = map__39472_39883__$1;
var msg_39885__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472_39883__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472_39883__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472_39883__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472_39883__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39888)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39886),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39887),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39885__$1)].join(''));


var G__39889 = seq__39466_39877;
var G__39890 = chunk__39467_39878;
var G__39891 = count__39468_39879;
var G__39892 = (i__39469_39880 + (1));
seq__39466_39877 = G__39889;
chunk__39467_39878 = G__39890;
count__39468_39879 = G__39891;
i__39469_39880 = G__39892;
continue;
} else {
var temp__5804__auto___39893 = cljs.core.seq(seq__39466_39877);
if(temp__5804__auto___39893){
var seq__39466_39894__$1 = temp__5804__auto___39893;
if(cljs.core.chunked_seq_QMARK_(seq__39466_39894__$1)){
var c__5568__auto___39895 = cljs.core.chunk_first(seq__39466_39894__$1);
var G__39896 = cljs.core.chunk_rest(seq__39466_39894__$1);
var G__39897 = c__5568__auto___39895;
var G__39898 = cljs.core.count(c__5568__auto___39895);
var G__39899 = (0);
seq__39466_39877 = G__39896;
chunk__39467_39878 = G__39897;
count__39468_39879 = G__39898;
i__39469_39880 = G__39899;
continue;
} else {
var map__39473_39900 = cljs.core.first(seq__39466_39894__$1);
var map__39473_39901__$1 = cljs.core.__destructure_map(map__39473_39900);
var w_39902 = map__39473_39901__$1;
var msg_39903__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473_39901__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473_39901__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473_39901__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473_39901__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39906)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39904),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39905),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39903__$1)].join(''));


var G__39907 = cljs.core.next(seq__39466_39894__$1);
var G__39908 = null;
var G__39909 = (0);
var G__39910 = (0);
seq__39466_39877 = G__39907;
chunk__39467_39878 = G__39908;
count__39468_39879 = G__39909;
i__39469_39880 = G__39910;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39456_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39456_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39474){
var map__39475 = p__39474;
var map__39475__$1 = cljs.core.__destructure_map(map__39475);
var msg = map__39475__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39475__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39475__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__39476 = cljs.core.seq(updates);
var chunk__39478 = null;
var count__39479 = (0);
var i__39480 = (0);
while(true){
if((i__39480 < count__39479)){
var path = chunk__39478.cljs$core$IIndexed$_nth$arity$2(null,i__39480);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39642_39914 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39646_39915 = null;
var count__39647_39916 = (0);
var i__39648_39917 = (0);
while(true){
if((i__39648_39917 < count__39647_39916)){
var node_39918 = chunk__39646_39915.cljs$core$IIndexed$_nth$arity$2(null,i__39648_39917);
if(cljs.core.not(node_39918.shadow$old)){
var path_match_39919 = shadow.cljs.devtools.client.browser.match_paths(node_39918.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39919)){
var new_link_39920 = (function (){var G__39691 = node_39918.cloneNode(true);
G__39691.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39919),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39691;
})();
(node_39918.shadow$old = true);

(new_link_39920.onload = ((function (seq__39642_39914,chunk__39646_39915,count__39647_39916,i__39648_39917,seq__39476,chunk__39478,count__39479,i__39480,new_link_39920,path_match_39919,node_39918,path,map__39475,map__39475__$1,msg,updates,reload_info){
return (function (e){
var seq__39692_39921 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39694_39922 = null;
var count__39695_39923 = (0);
var i__39696_39924 = (0);
while(true){
if((i__39696_39924 < count__39695_39923)){
var map__39700_39925 = chunk__39694_39922.cljs$core$IIndexed$_nth$arity$2(null,i__39696_39924);
var map__39700_39926__$1 = cljs.core.__destructure_map(map__39700_39925);
var task_39927 = map__39700_39926__$1;
var fn_str_39928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39700_39926__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39700_39926__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39930 = goog.getObjectByName(fn_str_39928,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39929)].join(''));

(fn_obj_39930.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39930.cljs$core$IFn$_invoke$arity$2(path,new_link_39920) : fn_obj_39930.call(null,path,new_link_39920));


var G__39931 = seq__39692_39921;
var G__39932 = chunk__39694_39922;
var G__39933 = count__39695_39923;
var G__39934 = (i__39696_39924 + (1));
seq__39692_39921 = G__39931;
chunk__39694_39922 = G__39932;
count__39695_39923 = G__39933;
i__39696_39924 = G__39934;
continue;
} else {
var temp__5804__auto___39935 = cljs.core.seq(seq__39692_39921);
if(temp__5804__auto___39935){
var seq__39692_39936__$1 = temp__5804__auto___39935;
if(cljs.core.chunked_seq_QMARK_(seq__39692_39936__$1)){
var c__5568__auto___39937 = cljs.core.chunk_first(seq__39692_39936__$1);
var G__39938 = cljs.core.chunk_rest(seq__39692_39936__$1);
var G__39939 = c__5568__auto___39937;
var G__39940 = cljs.core.count(c__5568__auto___39937);
var G__39941 = (0);
seq__39692_39921 = G__39938;
chunk__39694_39922 = G__39939;
count__39695_39923 = G__39940;
i__39696_39924 = G__39941;
continue;
} else {
var map__39701_39944 = cljs.core.first(seq__39692_39936__$1);
var map__39701_39946__$1 = cljs.core.__destructure_map(map__39701_39944);
var task_39947 = map__39701_39946__$1;
var fn_str_39948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39701_39946__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39701_39946__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39952 = goog.getObjectByName(fn_str_39948,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39949)].join(''));

(fn_obj_39952.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39952.cljs$core$IFn$_invoke$arity$2(path,new_link_39920) : fn_obj_39952.call(null,path,new_link_39920));


var G__39954 = cljs.core.next(seq__39692_39936__$1);
var G__39955 = null;
var G__39956 = (0);
var G__39957 = (0);
seq__39692_39921 = G__39954;
chunk__39694_39922 = G__39955;
count__39695_39923 = G__39956;
i__39696_39924 = G__39957;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39918);
});})(seq__39642_39914,chunk__39646_39915,count__39647_39916,i__39648_39917,seq__39476,chunk__39478,count__39479,i__39480,new_link_39920,path_match_39919,node_39918,path,map__39475,map__39475__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39919], 0));

goog.dom.insertSiblingAfter(new_link_39920,node_39918);


var G__39958 = seq__39642_39914;
var G__39959 = chunk__39646_39915;
var G__39960 = count__39647_39916;
var G__39961 = (i__39648_39917 + (1));
seq__39642_39914 = G__39958;
chunk__39646_39915 = G__39959;
count__39647_39916 = G__39960;
i__39648_39917 = G__39961;
continue;
} else {
var G__39962 = seq__39642_39914;
var G__39963 = chunk__39646_39915;
var G__39964 = count__39647_39916;
var G__39965 = (i__39648_39917 + (1));
seq__39642_39914 = G__39962;
chunk__39646_39915 = G__39963;
count__39647_39916 = G__39964;
i__39648_39917 = G__39965;
continue;
}
} else {
var G__39966 = seq__39642_39914;
var G__39967 = chunk__39646_39915;
var G__39968 = count__39647_39916;
var G__39969 = (i__39648_39917 + (1));
seq__39642_39914 = G__39966;
chunk__39646_39915 = G__39967;
count__39647_39916 = G__39968;
i__39648_39917 = G__39969;
continue;
}
} else {
var temp__5804__auto___39970 = cljs.core.seq(seq__39642_39914);
if(temp__5804__auto___39970){
var seq__39642_39971__$1 = temp__5804__auto___39970;
if(cljs.core.chunked_seq_QMARK_(seq__39642_39971__$1)){
var c__5568__auto___39972 = cljs.core.chunk_first(seq__39642_39971__$1);
var G__39973 = cljs.core.chunk_rest(seq__39642_39971__$1);
var G__39974 = c__5568__auto___39972;
var G__39975 = cljs.core.count(c__5568__auto___39972);
var G__39976 = (0);
seq__39642_39914 = G__39973;
chunk__39646_39915 = G__39974;
count__39647_39916 = G__39975;
i__39648_39917 = G__39976;
continue;
} else {
var node_39977 = cljs.core.first(seq__39642_39971__$1);
if(cljs.core.not(node_39977.shadow$old)){
var path_match_39978 = shadow.cljs.devtools.client.browser.match_paths(node_39977.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39978)){
var new_link_39979 = (function (){var G__39708 = node_39977.cloneNode(true);
G__39708.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39978),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39708;
})();
(node_39977.shadow$old = true);

(new_link_39979.onload = ((function (seq__39642_39914,chunk__39646_39915,count__39647_39916,i__39648_39917,seq__39476,chunk__39478,count__39479,i__39480,new_link_39979,path_match_39978,node_39977,seq__39642_39971__$1,temp__5804__auto___39970,path,map__39475,map__39475__$1,msg,updates,reload_info){
return (function (e){
var seq__39709_39980 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39711_39981 = null;
var count__39712_39982 = (0);
var i__39713_39983 = (0);
while(true){
if((i__39713_39983 < count__39712_39982)){
var map__39717_39984 = chunk__39711_39981.cljs$core$IIndexed$_nth$arity$2(null,i__39713_39983);
var map__39717_39985__$1 = cljs.core.__destructure_map(map__39717_39984);
var task_39986 = map__39717_39985__$1;
var fn_str_39987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39717_39985__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39717_39985__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39989 = goog.getObjectByName(fn_str_39987,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39988)].join(''));

(fn_obj_39989.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39989.cljs$core$IFn$_invoke$arity$2(path,new_link_39979) : fn_obj_39989.call(null,path,new_link_39979));


var G__39990 = seq__39709_39980;
var G__39991 = chunk__39711_39981;
var G__39992 = count__39712_39982;
var G__39993 = (i__39713_39983 + (1));
seq__39709_39980 = G__39990;
chunk__39711_39981 = G__39991;
count__39712_39982 = G__39992;
i__39713_39983 = G__39993;
continue;
} else {
var temp__5804__auto___39994__$1 = cljs.core.seq(seq__39709_39980);
if(temp__5804__auto___39994__$1){
var seq__39709_39995__$1 = temp__5804__auto___39994__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39709_39995__$1)){
var c__5568__auto___39996 = cljs.core.chunk_first(seq__39709_39995__$1);
var G__39997 = cljs.core.chunk_rest(seq__39709_39995__$1);
var G__39998 = c__5568__auto___39996;
var G__39999 = cljs.core.count(c__5568__auto___39996);
var G__40000 = (0);
seq__39709_39980 = G__39997;
chunk__39711_39981 = G__39998;
count__39712_39982 = G__39999;
i__39713_39983 = G__40000;
continue;
} else {
var map__39724_40001 = cljs.core.first(seq__39709_39995__$1);
var map__39724_40002__$1 = cljs.core.__destructure_map(map__39724_40001);
var task_40003 = map__39724_40002__$1;
var fn_str_40004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39724_40002__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39724_40002__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40006 = goog.getObjectByName(fn_str_40004,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40005)].join(''));

(fn_obj_40006.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40006.cljs$core$IFn$_invoke$arity$2(path,new_link_39979) : fn_obj_40006.call(null,path,new_link_39979));


var G__40007 = cljs.core.next(seq__39709_39995__$1);
var G__40008 = null;
var G__40009 = (0);
var G__40010 = (0);
seq__39709_39980 = G__40007;
chunk__39711_39981 = G__40008;
count__39712_39982 = G__40009;
i__39713_39983 = G__40010;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39977);
});})(seq__39642_39914,chunk__39646_39915,count__39647_39916,i__39648_39917,seq__39476,chunk__39478,count__39479,i__39480,new_link_39979,path_match_39978,node_39977,seq__39642_39971__$1,temp__5804__auto___39970,path,map__39475,map__39475__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39978], 0));

goog.dom.insertSiblingAfter(new_link_39979,node_39977);


var G__40011 = cljs.core.next(seq__39642_39971__$1);
var G__40012 = null;
var G__40013 = (0);
var G__40014 = (0);
seq__39642_39914 = G__40011;
chunk__39646_39915 = G__40012;
count__39647_39916 = G__40013;
i__39648_39917 = G__40014;
continue;
} else {
var G__40015 = cljs.core.next(seq__39642_39971__$1);
var G__40016 = null;
var G__40017 = (0);
var G__40018 = (0);
seq__39642_39914 = G__40015;
chunk__39646_39915 = G__40016;
count__39647_39916 = G__40017;
i__39648_39917 = G__40018;
continue;
}
} else {
var G__40019 = cljs.core.next(seq__39642_39971__$1);
var G__40020 = null;
var G__40021 = (0);
var G__40022 = (0);
seq__39642_39914 = G__40019;
chunk__39646_39915 = G__40020;
count__39647_39916 = G__40021;
i__39648_39917 = G__40022;
continue;
}
}
} else {
}
}
break;
}


var G__40023 = seq__39476;
var G__40024 = chunk__39478;
var G__40025 = count__39479;
var G__40026 = (i__39480 + (1));
seq__39476 = G__40023;
chunk__39478 = G__40024;
count__39479 = G__40025;
i__39480 = G__40026;
continue;
} else {
var G__40027 = seq__39476;
var G__40028 = chunk__39478;
var G__40029 = count__39479;
var G__40030 = (i__39480 + (1));
seq__39476 = G__40027;
chunk__39478 = G__40028;
count__39479 = G__40029;
i__39480 = G__40030;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39476);
if(temp__5804__auto__){
var seq__39476__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39476__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39476__$1);
var G__40031 = cljs.core.chunk_rest(seq__39476__$1);
var G__40032 = c__5568__auto__;
var G__40033 = cljs.core.count(c__5568__auto__);
var G__40034 = (0);
seq__39476 = G__40031;
chunk__39478 = G__40032;
count__39479 = G__40033;
i__39480 = G__40034;
continue;
} else {
var path = cljs.core.first(seq__39476__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39725_40035 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39729_40036 = null;
var count__39730_40037 = (0);
var i__39731_40038 = (0);
while(true){
if((i__39731_40038 < count__39730_40037)){
var node_40039 = chunk__39729_40036.cljs$core$IIndexed$_nth$arity$2(null,i__39731_40038);
if(cljs.core.not(node_40039.shadow$old)){
var path_match_40040 = shadow.cljs.devtools.client.browser.match_paths(node_40039.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40040)){
var new_link_40041 = (function (){var G__39767 = node_40039.cloneNode(true);
G__39767.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40040),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39767;
})();
(node_40039.shadow$old = true);

(new_link_40041.onload = ((function (seq__39725_40035,chunk__39729_40036,count__39730_40037,i__39731_40038,seq__39476,chunk__39478,count__39479,i__39480,new_link_40041,path_match_40040,node_40039,path,seq__39476__$1,temp__5804__auto__,map__39475,map__39475__$1,msg,updates,reload_info){
return (function (e){
var seq__39768_40043 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39770_40044 = null;
var count__39771_40045 = (0);
var i__39772_40046 = (0);
while(true){
if((i__39772_40046 < count__39771_40045)){
var map__39776_40048 = chunk__39770_40044.cljs$core$IIndexed$_nth$arity$2(null,i__39772_40046);
var map__39776_40049__$1 = cljs.core.__destructure_map(map__39776_40048);
var task_40050 = map__39776_40049__$1;
var fn_str_40051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39776_40049__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39776_40049__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40053 = goog.getObjectByName(fn_str_40051,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40052)].join(''));

(fn_obj_40053.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40053.cljs$core$IFn$_invoke$arity$2(path,new_link_40041) : fn_obj_40053.call(null,path,new_link_40041));


var G__40054 = seq__39768_40043;
var G__40055 = chunk__39770_40044;
var G__40056 = count__39771_40045;
var G__40057 = (i__39772_40046 + (1));
seq__39768_40043 = G__40054;
chunk__39770_40044 = G__40055;
count__39771_40045 = G__40056;
i__39772_40046 = G__40057;
continue;
} else {
var temp__5804__auto___40058__$1 = cljs.core.seq(seq__39768_40043);
if(temp__5804__auto___40058__$1){
var seq__39768_40059__$1 = temp__5804__auto___40058__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39768_40059__$1)){
var c__5568__auto___40060 = cljs.core.chunk_first(seq__39768_40059__$1);
var G__40061 = cljs.core.chunk_rest(seq__39768_40059__$1);
var G__40062 = c__5568__auto___40060;
var G__40063 = cljs.core.count(c__5568__auto___40060);
var G__40064 = (0);
seq__39768_40043 = G__40061;
chunk__39770_40044 = G__40062;
count__39771_40045 = G__40063;
i__39772_40046 = G__40064;
continue;
} else {
var map__39777_40065 = cljs.core.first(seq__39768_40059__$1);
var map__39777_40066__$1 = cljs.core.__destructure_map(map__39777_40065);
var task_40067 = map__39777_40066__$1;
var fn_str_40068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39777_40066__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39777_40066__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40070 = goog.getObjectByName(fn_str_40068,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40069)].join(''));

(fn_obj_40070.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40070.cljs$core$IFn$_invoke$arity$2(path,new_link_40041) : fn_obj_40070.call(null,path,new_link_40041));


var G__40071 = cljs.core.next(seq__39768_40059__$1);
var G__40072 = null;
var G__40073 = (0);
var G__40074 = (0);
seq__39768_40043 = G__40071;
chunk__39770_40044 = G__40072;
count__39771_40045 = G__40073;
i__39772_40046 = G__40074;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40039);
});})(seq__39725_40035,chunk__39729_40036,count__39730_40037,i__39731_40038,seq__39476,chunk__39478,count__39479,i__39480,new_link_40041,path_match_40040,node_40039,path,seq__39476__$1,temp__5804__auto__,map__39475,map__39475__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40040], 0));

goog.dom.insertSiblingAfter(new_link_40041,node_40039);


var G__40075 = seq__39725_40035;
var G__40076 = chunk__39729_40036;
var G__40077 = count__39730_40037;
var G__40078 = (i__39731_40038 + (1));
seq__39725_40035 = G__40075;
chunk__39729_40036 = G__40076;
count__39730_40037 = G__40077;
i__39731_40038 = G__40078;
continue;
} else {
var G__40079 = seq__39725_40035;
var G__40080 = chunk__39729_40036;
var G__40081 = count__39730_40037;
var G__40082 = (i__39731_40038 + (1));
seq__39725_40035 = G__40079;
chunk__39729_40036 = G__40080;
count__39730_40037 = G__40081;
i__39731_40038 = G__40082;
continue;
}
} else {
var G__40083 = seq__39725_40035;
var G__40084 = chunk__39729_40036;
var G__40085 = count__39730_40037;
var G__40086 = (i__39731_40038 + (1));
seq__39725_40035 = G__40083;
chunk__39729_40036 = G__40084;
count__39730_40037 = G__40085;
i__39731_40038 = G__40086;
continue;
}
} else {
var temp__5804__auto___40087__$1 = cljs.core.seq(seq__39725_40035);
if(temp__5804__auto___40087__$1){
var seq__39725_40088__$1 = temp__5804__auto___40087__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39725_40088__$1)){
var c__5568__auto___40089 = cljs.core.chunk_first(seq__39725_40088__$1);
var G__40090 = cljs.core.chunk_rest(seq__39725_40088__$1);
var G__40091 = c__5568__auto___40089;
var G__40092 = cljs.core.count(c__5568__auto___40089);
var G__40093 = (0);
seq__39725_40035 = G__40090;
chunk__39729_40036 = G__40091;
count__39730_40037 = G__40092;
i__39731_40038 = G__40093;
continue;
} else {
var node_40094 = cljs.core.first(seq__39725_40088__$1);
if(cljs.core.not(node_40094.shadow$old)){
var path_match_40095 = shadow.cljs.devtools.client.browser.match_paths(node_40094.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40095)){
var new_link_40096 = (function (){var G__39781 = node_40094.cloneNode(true);
G__39781.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40095),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39781;
})();
(node_40094.shadow$old = true);

(new_link_40096.onload = ((function (seq__39725_40035,chunk__39729_40036,count__39730_40037,i__39731_40038,seq__39476,chunk__39478,count__39479,i__39480,new_link_40096,path_match_40095,node_40094,seq__39725_40088__$1,temp__5804__auto___40087__$1,path,seq__39476__$1,temp__5804__auto__,map__39475,map__39475__$1,msg,updates,reload_info){
return (function (e){
var seq__39785_40097 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39787_40098 = null;
var count__39788_40099 = (0);
var i__39789_40100 = (0);
while(true){
if((i__39789_40100 < count__39788_40099)){
var map__39799_40101 = chunk__39787_40098.cljs$core$IIndexed$_nth$arity$2(null,i__39789_40100);
var map__39799_40102__$1 = cljs.core.__destructure_map(map__39799_40101);
var task_40103 = map__39799_40102__$1;
var fn_str_40104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39799_40102__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39799_40102__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40106 = goog.getObjectByName(fn_str_40104,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40105)].join(''));

(fn_obj_40106.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40106.cljs$core$IFn$_invoke$arity$2(path,new_link_40096) : fn_obj_40106.call(null,path,new_link_40096));


var G__40107 = seq__39785_40097;
var G__40108 = chunk__39787_40098;
var G__40109 = count__39788_40099;
var G__40110 = (i__39789_40100 + (1));
seq__39785_40097 = G__40107;
chunk__39787_40098 = G__40108;
count__39788_40099 = G__40109;
i__39789_40100 = G__40110;
continue;
} else {
var temp__5804__auto___40111__$2 = cljs.core.seq(seq__39785_40097);
if(temp__5804__auto___40111__$2){
var seq__39785_40113__$1 = temp__5804__auto___40111__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39785_40113__$1)){
var c__5568__auto___40117 = cljs.core.chunk_first(seq__39785_40113__$1);
var G__40118 = cljs.core.chunk_rest(seq__39785_40113__$1);
var G__40119 = c__5568__auto___40117;
var G__40120 = cljs.core.count(c__5568__auto___40117);
var G__40121 = (0);
seq__39785_40097 = G__40118;
chunk__39787_40098 = G__40119;
count__39788_40099 = G__40120;
i__39789_40100 = G__40121;
continue;
} else {
var map__39802_40122 = cljs.core.first(seq__39785_40113__$1);
var map__39802_40123__$1 = cljs.core.__destructure_map(map__39802_40122);
var task_40124 = map__39802_40123__$1;
var fn_str_40125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39802_40123__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39802_40123__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40128 = goog.getObjectByName(fn_str_40125,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40126)].join(''));

(fn_obj_40128.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40128.cljs$core$IFn$_invoke$arity$2(path,new_link_40096) : fn_obj_40128.call(null,path,new_link_40096));


var G__40129 = cljs.core.next(seq__39785_40113__$1);
var G__40130 = null;
var G__40131 = (0);
var G__40132 = (0);
seq__39785_40097 = G__40129;
chunk__39787_40098 = G__40130;
count__39788_40099 = G__40131;
i__39789_40100 = G__40132;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40094);
});})(seq__39725_40035,chunk__39729_40036,count__39730_40037,i__39731_40038,seq__39476,chunk__39478,count__39479,i__39480,new_link_40096,path_match_40095,node_40094,seq__39725_40088__$1,temp__5804__auto___40087__$1,path,seq__39476__$1,temp__5804__auto__,map__39475,map__39475__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40095], 0));

goog.dom.insertSiblingAfter(new_link_40096,node_40094);


var G__40133 = cljs.core.next(seq__39725_40088__$1);
var G__40134 = null;
var G__40135 = (0);
var G__40136 = (0);
seq__39725_40035 = G__40133;
chunk__39729_40036 = G__40134;
count__39730_40037 = G__40135;
i__39731_40038 = G__40136;
continue;
} else {
var G__40137 = cljs.core.next(seq__39725_40088__$1);
var G__40138 = null;
var G__40139 = (0);
var G__40140 = (0);
seq__39725_40035 = G__40137;
chunk__39729_40036 = G__40138;
count__39730_40037 = G__40139;
i__39731_40038 = G__40140;
continue;
}
} else {
var G__40141 = cljs.core.next(seq__39725_40088__$1);
var G__40142 = null;
var G__40143 = (0);
var G__40144 = (0);
seq__39725_40035 = G__40141;
chunk__39729_40036 = G__40142;
count__39730_40037 = G__40143;
i__39731_40038 = G__40144;
continue;
}
}
} else {
}
}
break;
}


var G__40145 = cljs.core.next(seq__39476__$1);
var G__40146 = null;
var G__40147 = (0);
var G__40148 = (0);
seq__39476 = G__40145;
chunk__39478 = G__40146;
count__39479 = G__40147;
i__39480 = G__40148;
continue;
} else {
var G__40149 = cljs.core.next(seq__39476__$1);
var G__40150 = null;
var G__40151 = (0);
var G__40152 = (0);
seq__39476 = G__40149;
chunk__39478 = G__40150;
count__39479 = G__40151;
i__39480 = G__40152;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39803){
var map__39804 = p__39803;
var map__39804__$1 = cljs.core.__destructure_map(map__39804);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39804__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39810){
var map__39811 = p__39810;
var map__39811__$1 = cljs.core.__destructure_map(map__39811);
var _ = map__39811__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39811__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39814,done,error){
var map__39815 = p__39814;
var map__39815__$1 = cljs.core.__destructure_map(map__39815);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39815__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39817,done,error){
var map__39819 = p__39817;
var map__39819__$1 = cljs.core.__destructure_map(map__39819);
var msg = map__39819__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39819__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39819__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39819__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39820){
var map__39821 = p__39820;
var map__39821__$1 = cljs.core.__destructure_map(map__39821);
var src = map__39821__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39821__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39822 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39822) : done.call(null,G__39822));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39823){
var map__39824 = p__39823;
var map__39824__$1 = cljs.core.__destructure_map(map__39824);
var msg__$1 = map__39824__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39824__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39825){var ex = e39825;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39826){
var map__39827 = p__39826;
var map__39827__$1 = cljs.core.__destructure_map(map__39827);
var env = map__39827__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39827__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39834){
var map__39835 = p__39834;
var map__39835__$1 = cljs.core.__destructure_map(map__39835);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39835__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39835__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__39837){
var map__39838 = p__39837;
var map__39838__$1 = cljs.core.__destructure_map(map__39838);
var svc = map__39838__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39838__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
