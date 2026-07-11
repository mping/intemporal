goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35259){
var map__35261 = p__35259;
var map__35261__$1 = cljs.core.__destructure_map(map__35261);
var m = map__35261__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35261__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35261__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35268_35738 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35269_35739 = null;
var count__35270_35740 = (0);
var i__35271_35741 = (0);
while(true){
if((i__35271_35741 < count__35270_35740)){
var f_35742 = chunk__35269_35739.cljs$core$IIndexed$_nth$arity$2(null,i__35271_35741);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35742], 0));


var G__35746 = seq__35268_35738;
var G__35747 = chunk__35269_35739;
var G__35748 = count__35270_35740;
var G__35749 = (i__35271_35741 + (1));
seq__35268_35738 = G__35746;
chunk__35269_35739 = G__35747;
count__35270_35740 = G__35748;
i__35271_35741 = G__35749;
continue;
} else {
var temp__5825__auto___35754 = cljs.core.seq(seq__35268_35738);
if(temp__5825__auto___35754){
var seq__35268_35755__$1 = temp__5825__auto___35754;
if(cljs.core.chunked_seq_QMARK_(seq__35268_35755__$1)){
var c__5548__auto___35756 = cljs.core.chunk_first(seq__35268_35755__$1);
var G__35757 = cljs.core.chunk_rest(seq__35268_35755__$1);
var G__35758 = c__5548__auto___35756;
var G__35759 = cljs.core.count(c__5548__auto___35756);
var G__35760 = (0);
seq__35268_35738 = G__35757;
chunk__35269_35739 = G__35758;
count__35270_35740 = G__35759;
i__35271_35741 = G__35760;
continue;
} else {
var f_35761 = cljs.core.first(seq__35268_35755__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35761], 0));


var G__35762 = cljs.core.next(seq__35268_35755__$1);
var G__35763 = null;
var G__35764 = (0);
var G__35765 = (0);
seq__35268_35738 = G__35762;
chunk__35269_35739 = G__35763;
count__35270_35740 = G__35764;
i__35271_35741 = G__35765;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35766 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35766], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35766)))?cljs.core.second(arglists_35766):arglists_35766)], 0));
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
var seq__35277_35767 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35278_35768 = null;
var count__35279_35769 = (0);
var i__35280_35770 = (0);
while(true){
if((i__35280_35770 < count__35279_35769)){
var vec__35297_35771 = chunk__35278_35768.cljs$core$IIndexed$_nth$arity$2(null,i__35280_35770);
var name_35772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35297_35771,(0),null);
var map__35300_35773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35297_35771,(1),null);
var map__35300_35774__$1 = cljs.core.__destructure_map(map__35300_35773);
var doc_35775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35300_35774__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35300_35774__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35772], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35776], 0));

if(cljs.core.truth_(doc_35775)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35775], 0));
} else {
}


var G__35777 = seq__35277_35767;
var G__35778 = chunk__35278_35768;
var G__35779 = count__35279_35769;
var G__35780 = (i__35280_35770 + (1));
seq__35277_35767 = G__35777;
chunk__35278_35768 = G__35778;
count__35279_35769 = G__35779;
i__35280_35770 = G__35780;
continue;
} else {
var temp__5825__auto___35781 = cljs.core.seq(seq__35277_35767);
if(temp__5825__auto___35781){
var seq__35277_35782__$1 = temp__5825__auto___35781;
if(cljs.core.chunked_seq_QMARK_(seq__35277_35782__$1)){
var c__5548__auto___35783 = cljs.core.chunk_first(seq__35277_35782__$1);
var G__35784 = cljs.core.chunk_rest(seq__35277_35782__$1);
var G__35785 = c__5548__auto___35783;
var G__35786 = cljs.core.count(c__5548__auto___35783);
var G__35787 = (0);
seq__35277_35767 = G__35784;
chunk__35278_35768 = G__35785;
count__35279_35769 = G__35786;
i__35280_35770 = G__35787;
continue;
} else {
var vec__35303_35788 = cljs.core.first(seq__35277_35782__$1);
var name_35789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35303_35788,(0),null);
var map__35306_35790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35303_35788,(1),null);
var map__35306_35791__$1 = cljs.core.__destructure_map(map__35306_35790);
var doc_35792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35306_35791__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35306_35791__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35789], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35793], 0));

if(cljs.core.truth_(doc_35792)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35792], 0));
} else {
}


var G__35794 = cljs.core.next(seq__35277_35782__$1);
var G__35795 = null;
var G__35796 = (0);
var G__35797 = (0);
seq__35277_35767 = G__35794;
chunk__35278_35768 = G__35795;
count__35279_35769 = G__35796;
i__35280_35770 = G__35797;
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

var seq__35314 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35315 = null;
var count__35316 = (0);
var i__35317 = (0);
while(true){
if((i__35317 < count__35316)){
var role = chunk__35315.cljs$core$IIndexed$_nth$arity$2(null,i__35317);
var temp__5825__auto___35798__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___35798__$1)){
var spec_35799 = temp__5825__auto___35798__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35799)], 0));
} else {
}


var G__35800 = seq__35314;
var G__35801 = chunk__35315;
var G__35802 = count__35316;
var G__35803 = (i__35317 + (1));
seq__35314 = G__35800;
chunk__35315 = G__35801;
count__35316 = G__35802;
i__35317 = G__35803;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__35314);
if(temp__5825__auto____$1){
var seq__35314__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35314__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__35314__$1);
var G__35809 = cljs.core.chunk_rest(seq__35314__$1);
var G__35810 = c__5548__auto__;
var G__35811 = cljs.core.count(c__5548__auto__);
var G__35812 = (0);
seq__35314 = G__35809;
chunk__35315 = G__35810;
count__35316 = G__35811;
i__35317 = G__35812;
continue;
} else {
var role = cljs.core.first(seq__35314__$1);
var temp__5825__auto___35813__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___35813__$2)){
var spec_35814 = temp__5825__auto___35813__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35814)], 0));
} else {
}


var G__35815 = cljs.core.next(seq__35314__$1);
var G__35816 = null;
var G__35817 = (0);
var G__35818 = (0);
seq__35314 = G__35815;
chunk__35315 = G__35816;
count__35316 = G__35817;
i__35317 = G__35818;
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
var map__35331 = datafied_throwable;
var map__35331__$1 = cljs.core.__destructure_map(map__35331);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35331__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35331__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35331__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35332 = cljs.core.last(via);
var map__35332__$1 = cljs.core.__destructure_map(map__35332);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35332__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35332__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35332__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35333 = data;
var map__35333__$1 = cljs.core.__destructure_map(map__35333);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35334 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35334__$1 = cljs.core.__destructure_map(map__35334);
var top_data = map__35334__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35334__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35343 = phase;
var G__35343__$1 = (((G__35343 instanceof cljs.core.Keyword))?G__35343.fqn:null);
switch (G__35343__$1) {
case "read-source":
var map__35344 = data;
var map__35344__$1 = cljs.core.__destructure_map(map__35344);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35344__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35344__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35355 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35355__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35355,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35355);
var G__35355__$2 = (cljs.core.truth_((function (){var fexpr__35356 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35356.cljs$core$IFn$_invoke$arity$1 ? fexpr__35356.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35356.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35355__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35355__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35355__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35355__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35363 = top_data;
var G__35363__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35363,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35363);
var G__35363__$2 = (cljs.core.truth_((function (){var fexpr__35368 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35368.cljs$core$IFn$_invoke$arity$1 ? fexpr__35368.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35368.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35363__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35363__$1);
var G__35363__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35363__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35363__$2);
var G__35363__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35363__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35363__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35363__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35363__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35369 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35369,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35369,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35369,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35369,(3),null);
var G__35372 = top_data;
var G__35372__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35372,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35372);
var G__35372__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35372__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35372__$1);
var G__35372__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35372__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35372__$2);
var G__35372__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35372__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35372__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35372__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35372__$4;
}

break;
case "execution":
var vec__35385 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35385,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35385,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35385,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35385,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35330_SHARP_){
var or__5025__auto__ = (p1__35330_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__35388 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35388.cljs$core$IFn$_invoke$arity$1 ? fexpr__35388.cljs$core$IFn$_invoke$arity$1(p1__35330_SHARP_) : fexpr__35388.call(null,p1__35330_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__35389 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35389__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35389,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35389);
var G__35389__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35389__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35389__$1);
var G__35389__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35389__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35389__$2);
var G__35389__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35389__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35389__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35389__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35389__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35343__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35401){
var map__35402 = p__35401;
var map__35402__$1 = cljs.core.__destructure_map(map__35402);
var triage_data = map__35402__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35402__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35402__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35402__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35402__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35402__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35402__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35402__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35402__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35410 = phase;
var G__35410__$1 = (((G__35410 instanceof cljs.core.Keyword))?G__35410.fqn:null);
switch (G__35410__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35411 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35412 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35413 = loc;
var G__35414 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35460_35831 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35463_35832 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35465_35833 = true;
var _STAR_print_fn_STAR__temp_val__35466_35834 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35465_35833);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35466_35834);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35396_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35396_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35463_35832);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35460_35831);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35411,G__35412,G__35413,G__35414) : format.call(null,G__35411,G__35412,G__35413,G__35414));

break;
case "macroexpansion":
var G__35509 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35510 = cause_type;
var G__35511 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35513 = loc;
var G__35514 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35509,G__35510,G__35511,G__35513,G__35514) : format.call(null,G__35509,G__35510,G__35511,G__35513,G__35514));

break;
case "compile-syntax-check":
var G__35520 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35521 = cause_type;
var G__35523 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35524 = loc;
var G__35525 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35520,G__35521,G__35523,G__35524,G__35525) : format.call(null,G__35520,G__35521,G__35523,G__35524,G__35525));

break;
case "compilation":
var G__35539 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35540 = cause_type;
var G__35541 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35542 = loc;
var G__35543 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35539,G__35540,G__35541,G__35542,G__35543) : format.call(null,G__35539,G__35540,G__35541,G__35542,G__35543));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35551 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35552 = symbol;
var G__35553 = loc;
var G__35555 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35567_35840 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35568_35841 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35569_35842 = true;
var _STAR_print_fn_STAR__temp_val__35570_35843 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35569_35842);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35570_35843);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35400_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35400_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35568_35841);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35567_35840);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35551,G__35552,G__35553,G__35555) : format.call(null,G__35551,G__35552,G__35553,G__35555));
} else {
var G__35616 = "Execution error%s at %s(%s).\n%s\n";
var G__35617 = cause_type;
var G__35618 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35619 = loc;
var G__35620 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35616,G__35617,G__35618,G__35619,G__35620) : format.call(null,G__35616,G__35617,G__35618,G__35619,G__35620));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35410__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
