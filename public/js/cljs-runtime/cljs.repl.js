goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34884){
var map__34885 = p__34884;
var map__34885__$1 = cljs.core.__destructure_map(map__34885);
var m = map__34885__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34885__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34885__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34891_35379 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34892_35380 = null;
var count__34893_35381 = (0);
var i__34894_35382 = (0);
while(true){
if((i__34894_35382 < count__34893_35381)){
var f_35385 = chunk__34892_35380.cljs$core$IIndexed$_nth$arity$2(null,i__34894_35382);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35385], 0));


var G__35386 = seq__34891_35379;
var G__35387 = chunk__34892_35380;
var G__35388 = count__34893_35381;
var G__35389 = (i__34894_35382 + (1));
seq__34891_35379 = G__35386;
chunk__34892_35380 = G__35387;
count__34893_35381 = G__35388;
i__34894_35382 = G__35389;
continue;
} else {
var temp__5804__auto___35390 = cljs.core.seq(seq__34891_35379);
if(temp__5804__auto___35390){
var seq__34891_35392__$1 = temp__5804__auto___35390;
if(cljs.core.chunked_seq_QMARK_(seq__34891_35392__$1)){
var c__5568__auto___35393 = cljs.core.chunk_first(seq__34891_35392__$1);
var G__35394 = cljs.core.chunk_rest(seq__34891_35392__$1);
var G__35395 = c__5568__auto___35393;
var G__35396 = cljs.core.count(c__5568__auto___35393);
var G__35397 = (0);
seq__34891_35379 = G__35394;
chunk__34892_35380 = G__35395;
count__34893_35381 = G__35396;
i__34894_35382 = G__35397;
continue;
} else {
var f_35398 = cljs.core.first(seq__34891_35392__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35398], 0));


var G__35400 = cljs.core.next(seq__34891_35392__$1);
var G__35401 = null;
var G__35402 = (0);
var G__35403 = (0);
seq__34891_35379 = G__35400;
chunk__34892_35380 = G__35401;
count__34893_35381 = G__35402;
i__34894_35382 = G__35403;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35405 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35405], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35405)))?cljs.core.second(arglists_35405):arglists_35405)], 0));
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
var seq__34913_35410 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34914_35411 = null;
var count__34915_35412 = (0);
var i__34916_35413 = (0);
while(true){
if((i__34916_35413 < count__34915_35412)){
var vec__34950_35414 = chunk__34914_35411.cljs$core$IIndexed$_nth$arity$2(null,i__34916_35413);
var name_35415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34950_35414,(0),null);
var map__34953_35416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34950_35414,(1),null);
var map__34953_35417__$1 = cljs.core.__destructure_map(map__34953_35416);
var doc_35418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34953_35417__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34953_35417__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35415], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35419], 0));

if(cljs.core.truth_(doc_35418)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35418], 0));
} else {
}


var G__35425 = seq__34913_35410;
var G__35426 = chunk__34914_35411;
var G__35427 = count__34915_35412;
var G__35428 = (i__34916_35413 + (1));
seq__34913_35410 = G__35425;
chunk__34914_35411 = G__35426;
count__34915_35412 = G__35427;
i__34916_35413 = G__35428;
continue;
} else {
var temp__5804__auto___35429 = cljs.core.seq(seq__34913_35410);
if(temp__5804__auto___35429){
var seq__34913_35430__$1 = temp__5804__auto___35429;
if(cljs.core.chunked_seq_QMARK_(seq__34913_35430__$1)){
var c__5568__auto___35432 = cljs.core.chunk_first(seq__34913_35430__$1);
var G__35433 = cljs.core.chunk_rest(seq__34913_35430__$1);
var G__35434 = c__5568__auto___35432;
var G__35435 = cljs.core.count(c__5568__auto___35432);
var G__35436 = (0);
seq__34913_35410 = G__35433;
chunk__34914_35411 = G__35434;
count__34915_35412 = G__35435;
i__34916_35413 = G__35436;
continue;
} else {
var vec__34965_35437 = cljs.core.first(seq__34913_35430__$1);
var name_35438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34965_35437,(0),null);
var map__34968_35439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34965_35437,(1),null);
var map__34968_35440__$1 = cljs.core.__destructure_map(map__34968_35439);
var doc_35441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34968_35440__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34968_35440__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35438], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35442], 0));

if(cljs.core.truth_(doc_35441)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35441], 0));
} else {
}


var G__35444 = cljs.core.next(seq__34913_35430__$1);
var G__35445 = null;
var G__35446 = (0);
var G__35447 = (0);
seq__34913_35410 = G__35444;
chunk__34914_35411 = G__35445;
count__34915_35412 = G__35446;
i__34916_35413 = G__35447;
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

var seq__34992 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34993 = null;
var count__34994 = (0);
var i__34995 = (0);
while(true){
if((i__34995 < count__34994)){
var role = chunk__34993.cljs$core$IIndexed$_nth$arity$2(null,i__34995);
var temp__5804__auto___35449__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35449__$1)){
var spec_35450 = temp__5804__auto___35449__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35450)], 0));
} else {
}


var G__35451 = seq__34992;
var G__35452 = chunk__34993;
var G__35453 = count__34994;
var G__35454 = (i__34995 + (1));
seq__34992 = G__35451;
chunk__34993 = G__35452;
count__34994 = G__35453;
i__34995 = G__35454;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__34992);
if(temp__5804__auto____$1){
var seq__34992__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34992__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34992__$1);
var G__35457 = cljs.core.chunk_rest(seq__34992__$1);
var G__35458 = c__5568__auto__;
var G__35459 = cljs.core.count(c__5568__auto__);
var G__35460 = (0);
seq__34992 = G__35457;
chunk__34993 = G__35458;
count__34994 = G__35459;
i__34995 = G__35460;
continue;
} else {
var role = cljs.core.first(seq__34992__$1);
var temp__5804__auto___35461__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35461__$2)){
var spec_35462 = temp__5804__auto___35461__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35462)], 0));
} else {
}


var G__35464 = cljs.core.next(seq__34992__$1);
var G__35465 = null;
var G__35466 = (0);
var G__35467 = (0);
seq__34992 = G__35464;
chunk__34993 = G__35465;
count__34994 = G__35466;
i__34995 = G__35467;
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
var G__35476 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35477 = cljs.core.ex_cause(t);
via = G__35476;
t = G__35477;
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
var map__35099 = datafied_throwable;
var map__35099__$1 = cljs.core.__destructure_map(map__35099);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35099__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35099__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35099__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35100 = cljs.core.last(via);
var map__35100__$1 = cljs.core.__destructure_map(map__35100);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35100__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35100__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35100__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35101 = data;
var map__35101__$1 = cljs.core.__destructure_map(map__35101);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35101__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35101__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35101__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35102 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35102__$1 = cljs.core.__destructure_map(map__35102);
var top_data = map__35102__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35102__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35129 = phase;
var G__35129__$1 = (((G__35129 instanceof cljs.core.Keyword))?G__35129.fqn:null);
switch (G__35129__$1) {
case "read-source":
var map__35150 = data;
var map__35150__$1 = cljs.core.__destructure_map(map__35150);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35150__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35150__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35151 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35151__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35151,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35151);
var G__35151__$2 = (cljs.core.truth_((function (){var fexpr__35157 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35157.cljs$core$IFn$_invoke$arity$1 ? fexpr__35157.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35157.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35151__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35151__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35151__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35151__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35163 = top_data;
var G__35163__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35163,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35163);
var G__35163__$2 = (cljs.core.truth_((function (){var fexpr__35167 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35167.cljs$core$IFn$_invoke$arity$1 ? fexpr__35167.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35167.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35163__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35163__$1);
var G__35163__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35163__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35163__$2);
var G__35163__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35163__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35163__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35163__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35163__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35186 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35186,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35186,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35186,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35186,(3),null);
var G__35199 = top_data;
var G__35199__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35199,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35199);
var G__35199__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35199__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35199__$1);
var G__35199__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35199__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35199__$2);
var G__35199__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35199__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35199__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35199__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35199__$4;
}

break;
case "execution":
var vec__35212 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35212,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35212,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35212,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35212,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35098_SHARP_){
var or__5045__auto__ = (p1__35098_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__35220 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35220.cljs$core$IFn$_invoke$arity$1 ? fexpr__35220.cljs$core$IFn$_invoke$arity$1(p1__35098_SHARP_) : fexpr__35220.call(null,p1__35098_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__35225 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35225__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35225,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35225);
var G__35225__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35225__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35225__$1);
var G__35225__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35225__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35225__$2);
var G__35225__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35225__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35225__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35225__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35225__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35129__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35247){
var map__35248 = p__35247;
var map__35248__$1 = cljs.core.__destructure_map(map__35248);
var triage_data = map__35248__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35248__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35248__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35248__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35248__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35248__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35248__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35248__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35248__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35255 = phase;
var G__35255__$1 = (((G__35255 instanceof cljs.core.Keyword))?G__35255.fqn:null);
switch (G__35255__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35257 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35258 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35259 = loc;
var G__35260 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35262_35530 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35263_35531 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35264_35532 = true;
var _STAR_print_fn_STAR__temp_val__35265_35533 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35264_35532);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35265_35533);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35238_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35238_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35263_35531);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35262_35530);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35257,G__35258,G__35259,G__35260) : format.call(null,G__35257,G__35258,G__35259,G__35260));

break;
case "macroexpansion":
var G__35269 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35270 = cause_type;
var G__35271 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35272 = loc;
var G__35273 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35269,G__35270,G__35271,G__35272,G__35273) : format.call(null,G__35269,G__35270,G__35271,G__35272,G__35273));

break;
case "compile-syntax-check":
var G__35276 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35277 = cause_type;
var G__35278 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35279 = loc;
var G__35280 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35276,G__35277,G__35278,G__35279,G__35280) : format.call(null,G__35276,G__35277,G__35278,G__35279,G__35280));

break;
case "compilation":
var G__35283 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35284 = cause_type;
var G__35285 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35286 = loc;
var G__35287 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35283,G__35284,G__35285,G__35286,G__35287) : format.call(null,G__35283,G__35284,G__35285,G__35286,G__35287));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35291 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35292 = symbol;
var G__35293 = loc;
var G__35294 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35296_35552 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35297_35553 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35298_35554 = true;
var _STAR_print_fn_STAR__temp_val__35299_35555 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35298_35554);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35299_35555);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35241_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35241_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35297_35553);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35296_35552);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35291,G__35292,G__35293,G__35294) : format.call(null,G__35291,G__35292,G__35293,G__35294));
} else {
var G__35315 = "Execution error%s at %s(%s).\n%s\n";
var G__35316 = cause_type;
var G__35317 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35318 = loc;
var G__35319 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35315,G__35316,G__35317,G__35318,G__35319) : format.call(null,G__35315,G__35316,G__35317,G__35318,G__35319));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35255__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
