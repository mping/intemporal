goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35553){
var map__35554 = p__35553;
var map__35554__$1 = cljs.core.__destructure_map(map__35554);
var m = map__35554__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35554__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35554__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35563_36051 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35564_36052 = null;
var count__35565_36053 = (0);
var i__35566_36054 = (0);
while(true){
if((i__35566_36054 < count__35565_36053)){
var f_36056 = chunk__35564_36052.cljs$core$IIndexed$_nth$arity$2(null,i__35566_36054);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36056], 0));


var G__36058 = seq__35563_36051;
var G__36059 = chunk__35564_36052;
var G__36060 = count__35565_36053;
var G__36061 = (i__35566_36054 + (1));
seq__35563_36051 = G__36058;
chunk__35564_36052 = G__36059;
count__35565_36053 = G__36060;
i__35566_36054 = G__36061;
continue;
} else {
var temp__5825__auto___36062 = cljs.core.seq(seq__35563_36051);
if(temp__5825__auto___36062){
var seq__35563_36065__$1 = temp__5825__auto___36062;
if(cljs.core.chunked_seq_QMARK_(seq__35563_36065__$1)){
var c__5548__auto___36066 = cljs.core.chunk_first(seq__35563_36065__$1);
var G__36067 = cljs.core.chunk_rest(seq__35563_36065__$1);
var G__36068 = c__5548__auto___36066;
var G__36069 = cljs.core.count(c__5548__auto___36066);
var G__36070 = (0);
seq__35563_36051 = G__36067;
chunk__35564_36052 = G__36068;
count__35565_36053 = G__36069;
i__35566_36054 = G__36070;
continue;
} else {
var f_36073 = cljs.core.first(seq__35563_36065__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36073], 0));


var G__36081 = cljs.core.next(seq__35563_36065__$1);
var G__36082 = null;
var G__36083 = (0);
var G__36084 = (0);
seq__35563_36051 = G__36081;
chunk__35564_36052 = G__36082;
count__35565_36053 = G__36083;
i__35566_36054 = G__36084;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36089 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36089], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36089)))?cljs.core.second(arglists_36089):arglists_36089)], 0));
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
var seq__35657_36104 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35658_36105 = null;
var count__35659_36106 = (0);
var i__35660_36107 = (0);
while(true){
if((i__35660_36107 < count__35659_36106)){
var vec__35715_36108 = chunk__35658_36105.cljs$core$IIndexed$_nth$arity$2(null,i__35660_36107);
var name_36109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35715_36108,(0),null);
var map__35718_36110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35715_36108,(1),null);
var map__35718_36111__$1 = cljs.core.__destructure_map(map__35718_36110);
var doc_36112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35718_36111__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35718_36111__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36109], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36113], 0));

if(cljs.core.truth_(doc_36112)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36112], 0));
} else {
}


var G__36117 = seq__35657_36104;
var G__36118 = chunk__35658_36105;
var G__36119 = count__35659_36106;
var G__36120 = (i__35660_36107 + (1));
seq__35657_36104 = G__36117;
chunk__35658_36105 = G__36118;
count__35659_36106 = G__36119;
i__35660_36107 = G__36120;
continue;
} else {
var temp__5825__auto___36122 = cljs.core.seq(seq__35657_36104);
if(temp__5825__auto___36122){
var seq__35657_36123__$1 = temp__5825__auto___36122;
if(cljs.core.chunked_seq_QMARK_(seq__35657_36123__$1)){
var c__5548__auto___36124 = cljs.core.chunk_first(seq__35657_36123__$1);
var G__36126 = cljs.core.chunk_rest(seq__35657_36123__$1);
var G__36127 = c__5548__auto___36124;
var G__36128 = cljs.core.count(c__5548__auto___36124);
var G__36129 = (0);
seq__35657_36104 = G__36126;
chunk__35658_36105 = G__36127;
count__35659_36106 = G__36128;
i__35660_36107 = G__36129;
continue;
} else {
var vec__35744_36130 = cljs.core.first(seq__35657_36123__$1);
var name_36131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35744_36130,(0),null);
var map__35747_36132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35744_36130,(1),null);
var map__35747_36133__$1 = cljs.core.__destructure_map(map__35747_36132);
var doc_36134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35747_36133__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35747_36133__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36131], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36135], 0));

if(cljs.core.truth_(doc_36134)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36134], 0));
} else {
}


var G__36140 = cljs.core.next(seq__35657_36123__$1);
var G__36141 = null;
var G__36142 = (0);
var G__36143 = (0);
seq__35657_36104 = G__36140;
chunk__35658_36105 = G__36141;
count__35659_36106 = G__36142;
i__35660_36107 = G__36143;
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

var seq__35762 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35763 = null;
var count__35764 = (0);
var i__35765 = (0);
while(true){
if((i__35765 < count__35764)){
var role = chunk__35763.cljs$core$IIndexed$_nth$arity$2(null,i__35765);
var temp__5825__auto___36152__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___36152__$1)){
var spec_36153 = temp__5825__auto___36152__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36153)], 0));
} else {
}


var G__36154 = seq__35762;
var G__36155 = chunk__35763;
var G__36156 = count__35764;
var G__36157 = (i__35765 + (1));
seq__35762 = G__36154;
chunk__35763 = G__36155;
count__35764 = G__36156;
i__35765 = G__36157;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__35762);
if(temp__5825__auto____$1){
var seq__35762__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35762__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__35762__$1);
var G__36160 = cljs.core.chunk_rest(seq__35762__$1);
var G__36161 = c__5548__auto__;
var G__36162 = cljs.core.count(c__5548__auto__);
var G__36164 = (0);
seq__35762 = G__36160;
chunk__35763 = G__36161;
count__35764 = G__36162;
i__35765 = G__36164;
continue;
} else {
var role = cljs.core.first(seq__35762__$1);
var temp__5825__auto___36172__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___36172__$2)){
var spec_36173 = temp__5825__auto___36172__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36173)], 0));
} else {
}


var G__36175 = cljs.core.next(seq__35762__$1);
var G__36176 = null;
var G__36177 = (0);
var G__36178 = (0);
seq__35762 = G__36175;
chunk__35763 = G__36176;
count__35764 = G__36177;
i__35765 = G__36178;
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
var map__35860 = datafied_throwable;
var map__35860__$1 = cljs.core.__destructure_map(map__35860);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35860__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35860__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35860__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35861 = cljs.core.last(via);
var map__35861__$1 = cljs.core.__destructure_map(map__35861);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35861__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35861__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35861__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35862 = data;
var map__35862__$1 = cljs.core.__destructure_map(map__35862);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35862__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35862__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35862__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35863 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35863__$1 = cljs.core.__destructure_map(map__35863);
var top_data = map__35863__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35863__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35868 = phase;
var G__35868__$1 = (((G__35868 instanceof cljs.core.Keyword))?G__35868.fqn:null);
switch (G__35868__$1) {
case "read-source":
var map__35871 = data;
var map__35871__$1 = cljs.core.__destructure_map(map__35871);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35871__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35871__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35872 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35872__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35872,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35872);
var G__35872__$2 = (cljs.core.truth_((function (){var fexpr__35879 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35879.cljs$core$IFn$_invoke$arity$1 ? fexpr__35879.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35879.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35872__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35872__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35872__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35872__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35886 = top_data;
var G__35886__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35886,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35886);
var G__35886__$2 = (cljs.core.truth_((function (){var fexpr__35887 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35887.cljs$core$IFn$_invoke$arity$1 ? fexpr__35887.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35887.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35886__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35886__$1);
var G__35886__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35886__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35886__$2);
var G__35886__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35886__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35886__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35886__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35886__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35888 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35888,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35888,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35888,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35888,(3),null);
var G__35891 = top_data;
var G__35891__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35891,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35891);
var G__35891__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35891__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35891__$1);
var G__35891__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35891__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35891__$2);
var G__35891__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35891__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35891__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35891__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35891__$4;
}

break;
case "execution":
var vec__35894 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35894,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35894,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35894,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35894,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35856_SHARP_){
var or__5025__auto__ = (p1__35856_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__35902 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35902.cljs$core$IFn$_invoke$arity$1 ? fexpr__35902.cljs$core$IFn$_invoke$arity$1(p1__35856_SHARP_) : fexpr__35902.call(null,p1__35856_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__35912 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35912__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35912,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35912);
var G__35912__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35912__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35912__$1);
var G__35912__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35912__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35912__$2);
var G__35912__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35912__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35912__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35912__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35912__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35868__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35936){
var map__35937 = p__35936;
var map__35937__$1 = cljs.core.__destructure_map(map__35937);
var triage_data = map__35937__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35966 = phase;
var G__35966__$1 = (((G__35966 instanceof cljs.core.Keyword))?G__35966.fqn:null);
switch (G__35966__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35973 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35974 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35975 = loc;
var G__35976 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35980_36276 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35981_36277 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35983_36278 = true;
var _STAR_print_fn_STAR__temp_val__35984_36279 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35983_36278);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35984_36279);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35927_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35927_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35981_36277);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35980_36276);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35973,G__35974,G__35975,G__35976) : format.call(null,G__35973,G__35974,G__35975,G__35976));

break;
case "macroexpansion":
var G__35990 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35991 = cause_type;
var G__35992 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35993 = loc;
var G__35994 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35990,G__35991,G__35992,G__35993,G__35994) : format.call(null,G__35990,G__35991,G__35992,G__35993,G__35994));

break;
case "compile-syntax-check":
var G__35995 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35996 = cause_type;
var G__35997 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35998 = loc;
var G__35999 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35995,G__35996,G__35997,G__35998,G__35999) : format.call(null,G__35995,G__35996,G__35997,G__35998,G__35999));

break;
case "compilation":
var G__36002 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36003 = cause_type;
var G__36004 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36005 = loc;
var G__36006 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36002,G__36003,G__36004,G__36005,G__36006) : format.call(null,G__36002,G__36003,G__36004,G__36005,G__36006));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36010 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36011 = symbol;
var G__36012 = loc;
var G__36013 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36017_36294 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36018_36295 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36019_36296 = true;
var _STAR_print_fn_STAR__temp_val__36020_36297 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36019_36296);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36020_36297);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35930_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35930_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36018_36295);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36017_36294);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36010,G__36011,G__36012,G__36013) : format.call(null,G__36010,G__36011,G__36012,G__36013));
} else {
var G__36025 = "Execution error%s at %s(%s).\n%s\n";
var G__36026 = cause_type;
var G__36027 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36028 = loc;
var G__36029 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36025,G__36026,G__36027,G__36028,G__36029) : format.call(null,G__36025,G__36026,G__36027,G__36028,G__36029));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35966__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
