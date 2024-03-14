goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41936){
var map__41938 = p__41936;
var map__41938__$1 = cljs.core.__destructure_map(map__41938);
var m = map__41938__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41938__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41938__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41961_42237 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41962_42238 = null;
var count__41963_42239 = (0);
var i__41964_42240 = (0);
while(true){
if((i__41964_42240 < count__41963_42239)){
var f_42241 = chunk__41962_42238.cljs$core$IIndexed$_nth$arity$2(null,i__41964_42240);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42241], 0));


var G__42243 = seq__41961_42237;
var G__42244 = chunk__41962_42238;
var G__42245 = count__41963_42239;
var G__42246 = (i__41964_42240 + (1));
seq__41961_42237 = G__42243;
chunk__41962_42238 = G__42244;
count__41963_42239 = G__42245;
i__41964_42240 = G__42246;
continue;
} else {
var temp__5804__auto___42247 = cljs.core.seq(seq__41961_42237);
if(temp__5804__auto___42247){
var seq__41961_42248__$1 = temp__5804__auto___42247;
if(cljs.core.chunked_seq_QMARK_(seq__41961_42248__$1)){
var c__5568__auto___42249 = cljs.core.chunk_first(seq__41961_42248__$1);
var G__42250 = cljs.core.chunk_rest(seq__41961_42248__$1);
var G__42251 = c__5568__auto___42249;
var G__42252 = cljs.core.count(c__5568__auto___42249);
var G__42253 = (0);
seq__41961_42237 = G__42250;
chunk__41962_42238 = G__42251;
count__41963_42239 = G__42252;
i__41964_42240 = G__42253;
continue;
} else {
var f_42254 = cljs.core.first(seq__41961_42248__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42254], 0));


var G__42256 = cljs.core.next(seq__41961_42248__$1);
var G__42257 = null;
var G__42258 = (0);
var G__42259 = (0);
seq__41961_42237 = G__42256;
chunk__41962_42238 = G__42257;
count__41963_42239 = G__42258;
i__41964_42240 = G__42259;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42260 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_42260], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_42260)))?cljs.core.second(arglists_42260):arglists_42260)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41999_42262 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42000_42263 = null;
var count__42001_42264 = (0);
var i__42002_42265 = (0);
while(true){
if((i__42002_42265 < count__42001_42264)){
var vec__42019_42267 = chunk__42000_42263.cljs$core$IIndexed$_nth$arity$2(null,i__42002_42265);
var name_42268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42019_42267,(0),null);
var map__42022_42269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42019_42267,(1),null);
var map__42022_42270__$1 = cljs.core.__destructure_map(map__42022_42269);
var doc_42271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42022_42270__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42022_42270__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42268], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42272], 0));

if(cljs.core.truth_(doc_42271)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42271], 0));
} else {
}


var G__42273 = seq__41999_42262;
var G__42274 = chunk__42000_42263;
var G__42275 = count__42001_42264;
var G__42276 = (i__42002_42265 + (1));
seq__41999_42262 = G__42273;
chunk__42000_42263 = G__42274;
count__42001_42264 = G__42275;
i__42002_42265 = G__42276;
continue;
} else {
var temp__5804__auto___42277 = cljs.core.seq(seq__41999_42262);
if(temp__5804__auto___42277){
var seq__41999_42278__$1 = temp__5804__auto___42277;
if(cljs.core.chunked_seq_QMARK_(seq__41999_42278__$1)){
var c__5568__auto___42279 = cljs.core.chunk_first(seq__41999_42278__$1);
var G__42281 = cljs.core.chunk_rest(seq__41999_42278__$1);
var G__42282 = c__5568__auto___42279;
var G__42283 = cljs.core.count(c__5568__auto___42279);
var G__42284 = (0);
seq__41999_42262 = G__42281;
chunk__42000_42263 = G__42282;
count__42001_42264 = G__42283;
i__42002_42265 = G__42284;
continue;
} else {
var vec__42024_42285 = cljs.core.first(seq__41999_42278__$1);
var name_42286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42024_42285,(0),null);
var map__42027_42287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42024_42285,(1),null);
var map__42027_42288__$1 = cljs.core.__destructure_map(map__42027_42287);
var doc_42289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42027_42288__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42027_42288__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42286], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42290], 0));

if(cljs.core.truth_(doc_42289)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42289], 0));
} else {
}


var G__42291 = cljs.core.next(seq__41999_42278__$1);
var G__42292 = null;
var G__42293 = (0);
var G__42294 = (0);
seq__41999_42262 = G__42291;
chunk__42000_42263 = G__42292;
count__42001_42264 = G__42293;
i__42002_42265 = G__42294;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__42028 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42029 = null;
var count__42030 = (0);
var i__42031 = (0);
while(true){
if((i__42031 < count__42030)){
var role = chunk__42029.cljs$core$IIndexed$_nth$arity$2(null,i__42031);
var temp__5804__auto___42295__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___42295__$1)){
var spec_42296 = temp__5804__auto___42295__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42296)], 0));
} else {
}


var G__42297 = seq__42028;
var G__42298 = chunk__42029;
var G__42300 = count__42030;
var G__42301 = (i__42031 + (1));
seq__42028 = G__42297;
chunk__42029 = G__42298;
count__42030 = G__42300;
i__42031 = G__42301;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__42028);
if(temp__5804__auto____$1){
var seq__42028__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42028__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42028__$1);
var G__42302 = cljs.core.chunk_rest(seq__42028__$1);
var G__42303 = c__5568__auto__;
var G__42304 = cljs.core.count(c__5568__auto__);
var G__42305 = (0);
seq__42028 = G__42302;
chunk__42029 = G__42303;
count__42030 = G__42304;
i__42031 = G__42305;
continue;
} else {
var role = cljs.core.first(seq__42028__$1);
var temp__5804__auto___42307__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___42307__$2)){
var spec_42309 = temp__5804__auto___42307__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42309)], 0));
} else {
}


var G__42310 = cljs.core.next(seq__42028__$1);
var G__42311 = null;
var G__42312 = (0);
var G__42313 = (0);
seq__42028 = G__42310;
chunk__42029 = G__42311;
count__42030 = G__42312;
i__42031 = G__42313;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__42324 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__42325 = cljs.core.ex_cause(t);
via = G__42324;
t = G__42325;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__42141 = datafied_throwable;
var map__42141__$1 = cljs.core.__destructure_map(map__42141);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42141__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42141__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42141__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42146 = cljs.core.last(via);
var map__42146__$1 = cljs.core.__destructure_map(map__42146);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42146__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42146__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42146__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42147 = data;
var map__42147__$1 = cljs.core.__destructure_map(map__42147);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42147__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42147__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42147__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42148 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__42148__$1 = cljs.core.__destructure_map(map__42148);
var top_data = map__42148__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42148__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__42150 = phase;
var G__42150__$1 = (((G__42150 instanceof cljs.core.Keyword))?G__42150.fqn:null);
switch (G__42150__$1) {
case "read-source":
var map__42153 = data;
var map__42153__$1 = cljs.core.__destructure_map(map__42153);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42153__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42153__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42155 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__42155__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42155,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42155);
var G__42155__$2 = (cljs.core.truth_((function (){var fexpr__42156 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42156.cljs$core$IFn$_invoke$arity$1 ? fexpr__42156.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42156.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42155__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42155__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42155__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42155__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42157 = top_data;
var G__42157__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42157,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42157);
var G__42157__$2 = (cljs.core.truth_((function (){var fexpr__42158 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42158.cljs$core$IFn$_invoke$arity$1 ? fexpr__42158.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42158.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42157__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42157__$1);
var G__42157__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42157__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42157__$2);
var G__42157__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42157__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42157__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42157__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42157__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42160 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42160,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42160,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42160,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42160,(3),null);
var G__42164 = top_data;
var G__42164__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42164,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42164);
var G__42164__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42164__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42164__$1);
var G__42164__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42164__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42164__$2);
var G__42164__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42164__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42164__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42164__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42164__$4;
}

break;
case "execution":
var vec__42172 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42172,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42172,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42172,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42172,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42116_SHARP_){
var or__5045__auto__ = (p1__42116_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__42176 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42176.cljs$core$IFn$_invoke$arity$1 ? fexpr__42176.cljs$core$IFn$_invoke$arity$1(p1__42116_SHARP_) : fexpr__42176.call(null,p1__42116_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__42178 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42178__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42178,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42178);
var G__42178__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42178__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42178__$1);
var G__42178__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42178__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42178__$2);
var G__42178__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42178__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42178__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42178__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42178__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42150__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42186){
var map__42187 = p__42186;
var map__42187__$1 = cljs.core.__destructure_map(map__42187);
var triage_data = map__42187__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42187__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42187__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42187__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42187__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42187__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42187__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42187__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42187__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__42192 = phase;
var G__42192__$1 = (((G__42192 instanceof cljs.core.Keyword))?G__42192.fqn:null);
switch (G__42192__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__42195 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__42196 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42197 = loc;
var G__42198 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42201_42391 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42202_42392 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42203_42393 = true;
var _STAR_print_fn_STAR__temp_val__42204_42394 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42203_42393);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42204_42394);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42184_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42184_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42202_42392);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42201_42391);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42195,G__42196,G__42197,G__42198) : format.call(null,G__42195,G__42196,G__42197,G__42198));

break;
case "macroexpansion":
var G__42205 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__42206 = cause_type;
var G__42207 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42208 = loc;
var G__42209 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42205,G__42206,G__42207,G__42208,G__42209) : format.call(null,G__42205,G__42206,G__42207,G__42208,G__42209));

break;
case "compile-syntax-check":
var G__42210 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__42211 = cause_type;
var G__42212 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42213 = loc;
var G__42214 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42210,G__42211,G__42212,G__42213,G__42214) : format.call(null,G__42210,G__42211,G__42212,G__42213,G__42214));

break;
case "compilation":
var G__42215 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__42216 = cause_type;
var G__42217 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42218 = loc;
var G__42219 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42215,G__42216,G__42217,G__42218,G__42219) : format.call(null,G__42215,G__42216,G__42217,G__42218,G__42219));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__42221 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__42222 = symbol;
var G__42223 = loc;
var G__42224 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42225_42404 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42226_42405 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42227_42406 = true;
var _STAR_print_fn_STAR__temp_val__42228_42407 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42227_42406);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42228_42407);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42185_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42185_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42226_42405);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42225_42404);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42221,G__42222,G__42223,G__42224) : format.call(null,G__42221,G__42222,G__42223,G__42224));
} else {
var G__42230 = "Execution error%s at %s(%s).\n%s\n";
var G__42231 = cause_type;
var G__42232 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42233 = loc;
var G__42234 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42230,G__42231,G__42232,G__42233,G__42234) : format.call(null,G__42230,G__42231,G__42232,G__42233,G__42234));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42192__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
