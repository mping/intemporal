goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28784){
var map__28785 = p__28784;
var map__28785__$1 = cljs.core.__destructure_map(map__28785);
var m = map__28785__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28785__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28785__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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
var seq__28789_29036 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28790_29037 = null;
var count__28791_29038 = (0);
var i__28792_29039 = (0);
while(true){
if((i__28792_29039 < count__28791_29038)){
var f_29040 = chunk__28790_29037.cljs$core$IIndexed$_nth$arity$2(null, i__28792_29039);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29040], 0));


var G__29041 = seq__28789_29036;
var G__29042 = chunk__28790_29037;
var G__29043 = count__28791_29038;
var G__29044 = (i__28792_29039 + (1));
seq__28789_29036 = G__29041;
chunk__28790_29037 = G__29042;
count__28791_29038 = G__29043;
i__28792_29039 = G__29044;
continue;
} else {
var temp__5804__auto___29045 = cljs.core.seq(seq__28789_29036);
if(temp__5804__auto___29045){
var seq__28789_29046__$1 = temp__5804__auto___29045;
if(cljs.core.chunked_seq_QMARK_(seq__28789_29046__$1)){
var c__5525__auto___29047 = cljs.core.chunk_first(seq__28789_29046__$1);
var G__29048 = cljs.core.chunk_rest(seq__28789_29046__$1);
var G__29049 = c__5525__auto___29047;
var G__29050 = cljs.core.count(c__5525__auto___29047);
var G__29051 = (0);
seq__28789_29036 = G__29048;
chunk__28790_29037 = G__29049;
count__28791_29038 = G__29050;
i__28792_29039 = G__29051;
continue;
} else {
var f_29052 = cljs.core.first(seq__28789_29046__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29052], 0));


var G__29053 = cljs.core.next(seq__28789_29046__$1);
var G__29054 = null;
var G__29055 = (0);
var G__29056 = (0);
seq__28789_29036 = G__29053;
chunk__28790_29037 = G__29054;
count__28791_29038 = G__29055;
i__28792_29039 = G__29056;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29057 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_29057], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_29057)))?cljs.core.second(arglists_29057):arglists_29057)], 0));
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
var seq__28808_29058 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28809_29059 = null;
var count__28810_29060 = (0);
var i__28811_29061 = (0);
while(true){
if((i__28811_29061 < count__28810_29060)){
var vec__28829_29066 = chunk__28809_29059.cljs$core$IIndexed$_nth$arity$2(null, i__28811_29061);
var name_29067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28829_29066,(0),null);
var map__28832_29068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28829_29066,(1),null);
var map__28832_29069__$1 = cljs.core.__destructure_map(map__28832_29068);
var doc_29070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28832_29069__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28832_29069__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29067], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29071], 0));

if(cljs.core.truth_(doc_29070)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29070], 0));
} else {
}


var G__29073 = seq__28808_29058;
var G__29074 = chunk__28809_29059;
var G__29075 = count__28810_29060;
var G__29076 = (i__28811_29061 + (1));
seq__28808_29058 = G__29073;
chunk__28809_29059 = G__29074;
count__28810_29060 = G__29075;
i__28811_29061 = G__29076;
continue;
} else {
var temp__5804__auto___29077 = cljs.core.seq(seq__28808_29058);
if(temp__5804__auto___29077){
var seq__28808_29078__$1 = temp__5804__auto___29077;
if(cljs.core.chunked_seq_QMARK_(seq__28808_29078__$1)){
var c__5525__auto___29079 = cljs.core.chunk_first(seq__28808_29078__$1);
var G__29080 = cljs.core.chunk_rest(seq__28808_29078__$1);
var G__29081 = c__5525__auto___29079;
var G__29082 = cljs.core.count(c__5525__auto___29079);
var G__29083 = (0);
seq__28808_29058 = G__29080;
chunk__28809_29059 = G__29081;
count__28810_29060 = G__29082;
i__28811_29061 = G__29083;
continue;
} else {
var vec__28842_29084 = cljs.core.first(seq__28808_29078__$1);
var name_29085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28842_29084,(0),null);
var map__28845_29086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28842_29084,(1),null);
var map__28845_29087__$1 = cljs.core.__destructure_map(map__28845_29086);
var doc_29088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28845_29087__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28845_29087__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29085], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29089], 0));

if(cljs.core.truth_(doc_29088)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29088], 0));
} else {
}


var G__29092 = cljs.core.next(seq__28808_29078__$1);
var G__29093 = null;
var G__29094 = (0);
var G__29095 = (0);
seq__28808_29058 = G__29092;
chunk__28809_29059 = G__29093;
count__28810_29060 = G__29094;
i__28811_29061 = G__29095;
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

var seq__28858 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28859 = null;
var count__28860 = (0);
var i__28861 = (0);
while(true){
if((i__28861 < count__28860)){
var role = chunk__28859.cljs$core$IIndexed$_nth$arity$2(null, i__28861);
var temp__5804__auto___29097__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___29097__$1)){
var spec_29098 = temp__5804__auto___29097__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_29098)], 0));
} else {
}


var G__29099 = seq__28858;
var G__29100 = chunk__28859;
var G__29101 = count__28860;
var G__29102 = (i__28861 + (1));
seq__28858 = G__29099;
chunk__28859 = G__29100;
count__28860 = G__29101;
i__28861 = G__29102;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__28858);
if(temp__5804__auto____$1){
var seq__28858__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__28858__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28858__$1);
var G__29104 = cljs.core.chunk_rest(seq__28858__$1);
var G__29105 = c__5525__auto__;
var G__29106 = cljs.core.count(c__5525__auto__);
var G__29107 = (0);
seq__28858 = G__29104;
chunk__28859 = G__29105;
count__28860 = G__29106;
i__28861 = G__29107;
continue;
} else {
var role = cljs.core.first(seq__28858__$1);
var temp__5804__auto___29111__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___29111__$2)){
var spec_29112 = temp__5804__auto___29111__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_29112)], 0));
} else {
}


var G__29113 = cljs.core.next(seq__28858__$1);
var G__29114 = null;
var G__29115 = (0);
var G__29116 = (0);
seq__28858 = G__29113;
chunk__28859 = G__29114;
count__28860 = G__29115;
i__28861 = G__29116;
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
var map__28913 = datafied_throwable;
var map__28913__$1 = cljs.core.__destructure_map(map__28913);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28913__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28913__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28913__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28914 = cljs.core.last(via);
var map__28914__$1 = cljs.core.__destructure_map(map__28914);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28914__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28914__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28914__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28915 = data;
var map__28915__$1 = cljs.core.__destructure_map(map__28915);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28915__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28915__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28915__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28916 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__28916__$1 = cljs.core.__destructure_map(map__28916);
var top_data = map__28916__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28916__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__28917 = phase;
var G__28917__$1 = (((G__28917 instanceof cljs.core.Keyword))?G__28917.fqn:null);
switch (G__28917__$1) {
case "read-source":
var map__28919 = data;
var map__28919__$1 = cljs.core.__destructure_map(map__28919);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28919__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28919__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28920 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__28920__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28920,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28920);
var G__28920__$2 = (cljs.core.truth_((function (){var fexpr__28922 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28922.cljs$core$IFn$_invoke$arity$1 ? fexpr__28922.cljs$core$IFn$_invoke$arity$1(source) : fexpr__28922.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28920__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28920__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28920__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28920__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28924 = top_data;
var G__28924__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28924,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28924);
var G__28924__$2 = (cljs.core.truth_((function (){var fexpr__28925 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28925.cljs$core$IFn$_invoke$arity$1 ? fexpr__28925.cljs$core$IFn$_invoke$arity$1(source) : fexpr__28925.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28924__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28924__$1);
var G__28924__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28924__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28924__$2);
var G__28924__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28924__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28924__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28924__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28924__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28928 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28928,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28928,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28928,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28928,(3),null);
var G__28931 = top_data;
var G__28931__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28931,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28931);
var G__28931__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28931__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28931__$1);
var G__28931__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28931__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28931__$2);
var G__28931__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28931__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28931__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28931__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28931__$4;
}

break;
case "execution":
var vec__28933 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28933,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28933,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28933,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28933,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28903_SHARP_){
var or__5002__auto__ = (p1__28903_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__28937 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28937.cljs$core$IFn$_invoke$arity$1 ? fexpr__28937.cljs$core$IFn$_invoke$arity$1(p1__28903_SHARP_) : fexpr__28937.call(null, p1__28903_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__28939 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28939__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28939,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28939);
var G__28939__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28939__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28939__$1);
var G__28939__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28939__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28939__$2);
var G__28939__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28939__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28939__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28939__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28939__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28917__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28953){
var map__28954 = p__28953;
var map__28954__$1 = cljs.core.__destructure_map(map__28954);
var triage_data = map__28954__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28954__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28954__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28954__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28954__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28954__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28954__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28954__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28954__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28958 = phase;
var G__28958__$1 = (((G__28958 instanceof cljs.core.Keyword))?G__28958.fqn:null);
switch (G__28958__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__28959 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__28960 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28961 = loc;
var G__28962 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28964_29143 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28965_29144 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28966_29145 = true;
var _STAR_print_fn_STAR__temp_val__28967_29146 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28966_29145);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28967_29146);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28944_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28944_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28965_29144);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28964_29143);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28959,G__28960,G__28961,G__28962) : format.call(null, G__28959,G__28960,G__28961,G__28962));

break;
case "macroexpansion":
var G__28971 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__28972 = cause_type;
var G__28973 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28974 = loc;
var G__28975 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28971,G__28972,G__28973,G__28974,G__28975) : format.call(null, G__28971,G__28972,G__28973,G__28974,G__28975));

break;
case "compile-syntax-check":
var G__28976 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__28977 = cause_type;
var G__28978 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28979 = loc;
var G__28980 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28976,G__28977,G__28978,G__28979,G__28980) : format.call(null, G__28976,G__28977,G__28978,G__28979,G__28980));

break;
case "compilation":
var G__28982 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__28983 = cause_type;
var G__28984 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28985 = loc;
var G__28986 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28982,G__28983,G__28984,G__28985,G__28986) : format.call(null, G__28982,G__28983,G__28984,G__28985,G__28986));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__28988 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__28989 = symbol;
var G__28990 = loc;
var G__28991 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28992_29151 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28993_29152 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28994_29153 = true;
var _STAR_print_fn_STAR__temp_val__28995_29154 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28994_29153);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28995_29154);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28945_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28945_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28993_29152);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28992_29151);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28988,G__28989,G__28990,G__28991) : format.call(null, G__28988,G__28989,G__28990,G__28991));
} else {
var G__28999 = "Execution error%s at %s(%s).\n%s\n";
var G__29000 = cause_type;
var G__29001 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29002 = loc;
var G__29003 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28999,G__29000,G__29001,G__29002,G__29003) : format.call(null, G__28999,G__29000,G__29001,G__29002,G__29003));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28958__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
