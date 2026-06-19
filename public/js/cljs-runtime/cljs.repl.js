goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29149){
var map__29150 = p__29149;
var map__29150__$1 = cljs.core.__destructure_map(map__29150);
var m = map__29150__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29150__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29150__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
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
var seq__29151_29487 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29152_29488 = null;
var count__29153_29489 = (0);
var i__29154_29490 = (0);
while(true){
if((i__29154_29490 < count__29153_29489)){
var f_29495 = chunk__29152_29488.cljs$core$IIndexed$_nth$arity$2(null,i__29154_29490);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29495], 0));


var G__29497 = seq__29151_29487;
var G__29498 = chunk__29152_29488;
var G__29499 = count__29153_29489;
var G__29500 = (i__29154_29490 + (1));
seq__29151_29487 = G__29497;
chunk__29152_29488 = G__29498;
count__29153_29489 = G__29499;
i__29154_29490 = G__29500;
continue;
} else {
var temp__5825__auto___29503 = cljs.core.seq(seq__29151_29487);
if(temp__5825__auto___29503){
var seq__29151_29504__$1 = temp__5825__auto___29503;
if(cljs.core.chunked_seq_QMARK_(seq__29151_29504__$1)){
var c__5548__auto___29507 = cljs.core.chunk_first(seq__29151_29504__$1);
var G__29508 = cljs.core.chunk_rest(seq__29151_29504__$1);
var G__29509 = c__5548__auto___29507;
var G__29510 = cljs.core.count(c__5548__auto___29507);
var G__29511 = (0);
seq__29151_29487 = G__29508;
chunk__29152_29488 = G__29509;
count__29153_29489 = G__29510;
i__29154_29490 = G__29511;
continue;
} else {
var f_29512 = cljs.core.first(seq__29151_29504__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29512], 0));


var G__29513 = cljs.core.next(seq__29151_29504__$1);
var G__29514 = null;
var G__29515 = (0);
var G__29516 = (0);
seq__29151_29487 = G__29513;
chunk__29152_29488 = G__29514;
count__29153_29489 = G__29515;
i__29154_29490 = G__29516;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29517 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_29517], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_29517)))?cljs.core.second(arglists_29517):arglists_29517)], 0));
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
var seq__29158_29521 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29159_29522 = null;
var count__29160_29523 = (0);
var i__29161_29524 = (0);
while(true){
if((i__29161_29524 < count__29160_29523)){
var vec__29247_29526 = chunk__29159_29522.cljs$core$IIndexed$_nth$arity$2(null,i__29161_29524);
var name_29527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29247_29526,(0),null);
var map__29254_29528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29247_29526,(1),null);
var map__29254_29529__$1 = cljs.core.__destructure_map(map__29254_29528);
var doc_29530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29254_29529__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29254_29529__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29527], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29531], 0));

if(cljs.core.truth_(doc_29530)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29530], 0));
} else {
}


var G__29536 = seq__29158_29521;
var G__29537 = chunk__29159_29522;
var G__29538 = count__29160_29523;
var G__29539 = (i__29161_29524 + (1));
seq__29158_29521 = G__29536;
chunk__29159_29522 = G__29537;
count__29160_29523 = G__29538;
i__29161_29524 = G__29539;
continue;
} else {
var temp__5825__auto___29541 = cljs.core.seq(seq__29158_29521);
if(temp__5825__auto___29541){
var seq__29158_29542__$1 = temp__5825__auto___29541;
if(cljs.core.chunked_seq_QMARK_(seq__29158_29542__$1)){
var c__5548__auto___29543 = cljs.core.chunk_first(seq__29158_29542__$1);
var G__29545 = cljs.core.chunk_rest(seq__29158_29542__$1);
var G__29546 = c__5548__auto___29543;
var G__29547 = cljs.core.count(c__5548__auto___29543);
var G__29548 = (0);
seq__29158_29521 = G__29545;
chunk__29159_29522 = G__29546;
count__29160_29523 = G__29547;
i__29161_29524 = G__29548;
continue;
} else {
var vec__29304_29550 = cljs.core.first(seq__29158_29542__$1);
var name_29551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29304_29550,(0),null);
var map__29307_29552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29304_29550,(1),null);
var map__29307_29553__$1 = cljs.core.__destructure_map(map__29307_29552);
var doc_29554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29307_29553__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29307_29553__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29551], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29555], 0));

if(cljs.core.truth_(doc_29554)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29554], 0));
} else {
}


var G__29559 = cljs.core.next(seq__29158_29542__$1);
var G__29560 = null;
var G__29561 = (0);
var G__29562 = (0);
seq__29158_29521 = G__29559;
chunk__29159_29522 = G__29560;
count__29160_29523 = G__29561;
i__29161_29524 = G__29562;
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
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__29365 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29366 = null;
var count__29367 = (0);
var i__29368 = (0);
while(true){
if((i__29368 < count__29367)){
var role = chunk__29366.cljs$core$IIndexed$_nth$arity$2(null,i__29368);
var temp__5825__auto___29565__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___29565__$1)){
var spec_29566 = temp__5825__auto___29565__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_29566)], 0));
} else {
}


var G__29567 = seq__29365;
var G__29568 = chunk__29366;
var G__29569 = count__29367;
var G__29570 = (i__29368 + (1));
seq__29365 = G__29567;
chunk__29366 = G__29568;
count__29367 = G__29569;
i__29368 = G__29570;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__29365);
if(temp__5825__auto____$1){
var seq__29365__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__29365__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__29365__$1);
var G__29571 = cljs.core.chunk_rest(seq__29365__$1);
var G__29572 = c__5548__auto__;
var G__29573 = cljs.core.count(c__5548__auto__);
var G__29574 = (0);
seq__29365 = G__29571;
chunk__29366 = G__29572;
count__29367 = G__29573;
i__29368 = G__29574;
continue;
} else {
var role = cljs.core.first(seq__29365__$1);
var temp__5825__auto___29575__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___29575__$2)){
var spec_29576 = temp__5825__auto___29575__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_29576)], 0));
} else {
}


var G__29577 = cljs.core.next(seq__29365__$1);
var G__29578 = null;
var G__29579 = (0);
var G__29580 = (0);
seq__29365 = G__29577;
chunk__29366 = G__29578;
count__29367 = G__29579;
i__29368 = G__29580;
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
return cljs.core.Throwable__GT_map(o);
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
var map__29388 = datafied_throwable;
var map__29388__$1 = cljs.core.__destructure_map(map__29388);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29388__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29388__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29388__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29389 = cljs.core.last(via);
var map__29389__$1 = cljs.core.__destructure_map(map__29389);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29389__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29389__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29389__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29390 = data;
var map__29390__$1 = cljs.core.__destructure_map(map__29390);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29390__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29390__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29390__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29391 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__29391__$1 = cljs.core.__destructure_map(map__29391);
var top_data = map__29391__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29391__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__29392 = phase;
var G__29392__$1 = (((G__29392 instanceof cljs.core.Keyword))?G__29392.fqn:null);
switch (G__29392__$1) {
case "read-source":
var map__29394 = data;
var map__29394__$1 = cljs.core.__destructure_map(map__29394);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29394__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29394__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29395 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__29395__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29395,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29395);
var G__29395__$2 = (cljs.core.truth_((function (){var fexpr__29396 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29396.cljs$core$IFn$_invoke$arity$1 ? fexpr__29396.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29396.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29395__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29395__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29395__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29395__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29397 = top_data;
var G__29397__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29397,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29397);
var G__29397__$2 = (cljs.core.truth_((function (){var fexpr__29398 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29398.cljs$core$IFn$_invoke$arity$1 ? fexpr__29398.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29398.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29397__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29397__$1);
var G__29397__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29397__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29397__$2);
var G__29397__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29397__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29397__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29397__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29397__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29399 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29399,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29399,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29399,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29399,(3),null);
var G__29402 = top_data;
var G__29402__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29402,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29402);
var G__29402__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29402__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29402__$1);
var G__29402__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29402__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29402__$2);
var G__29402__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29402__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29402__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29402__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29402__$4;
}

break;
case "execution":
var vec__29407 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29407,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29407,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29407,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29407,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29387_SHARP_){
var or__5025__auto__ = (p1__29387_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__29410 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29410.cljs$core$IFn$_invoke$arity$1 ? fexpr__29410.cljs$core$IFn$_invoke$arity$1(p1__29387_SHARP_) : fexpr__29410.call(null,p1__29387_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__29411 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29411__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29411,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29411);
var G__29411__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29411__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29411__$1);
var G__29411__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29411__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29411__$2);
var G__29411__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29411__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29411__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29411__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29411__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29392__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29418){
var map__29420 = p__29418;
var map__29420__$1 = cljs.core.__destructure_map(map__29420);
var triage_data = map__29420__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29420__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29420__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29420__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29420__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29420__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29420__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29420__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29420__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = source;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = line;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__29423 = phase;
var G__29423__$1 = (((G__29423 instanceof cljs.core.Keyword))?G__29423.fqn:null);
switch (G__29423__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__29427 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__29428 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29429 = loc;
var G__29430 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29431_29677 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29432_29678 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29433_29679 = true;
var _STAR_print_fn_STAR__temp_val__29434_29680 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29433_29679);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29434_29680);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29416_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29416_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29432_29678);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29431_29677);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29427,G__29428,G__29429,G__29430) : format.call(null,G__29427,G__29428,G__29429,G__29430));

break;
case "macroexpansion":
var G__29438 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__29439 = cause_type;
var G__29440 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29441 = loc;
var G__29442 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29438,G__29439,G__29440,G__29441,G__29442) : format.call(null,G__29438,G__29439,G__29440,G__29441,G__29442));

break;
case "compile-syntax-check":
var G__29443 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__29444 = cause_type;
var G__29445 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29446 = loc;
var G__29447 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29443,G__29444,G__29445,G__29446,G__29447) : format.call(null,G__29443,G__29444,G__29445,G__29446,G__29447));

break;
case "compilation":
var G__29448 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__29449 = cause_type;
var G__29450 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29451 = loc;
var G__29452 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29448,G__29449,G__29450,G__29451,G__29452) : format.call(null,G__29448,G__29449,G__29450,G__29451,G__29452));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__29453 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__29454 = symbol;
var G__29455 = loc;
var G__29456 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29457_29687 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29458_29688 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29459_29689 = true;
var _STAR_print_fn_STAR__temp_val__29460_29690 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29459_29689);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29460_29690);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29417_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29417_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29458_29688);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29457_29687);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29453,G__29454,G__29455,G__29456) : format.call(null,G__29453,G__29454,G__29455,G__29456));
} else {
var G__29463 = "Execution error%s at %s(%s).\n%s\n";
var G__29464 = cause_type;
var G__29465 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29466 = loc;
var G__29467 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29463,G__29464,G__29465,G__29466,G__29467) : format.call(null,G__29463,G__29464,G__29465,G__29466,G__29467));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29423__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
