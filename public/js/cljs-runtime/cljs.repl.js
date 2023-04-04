goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34342){
var map__34350 = p__34342;
var map__34350__$1 = cljs.core.__destructure_map(map__34350);
var m = map__34350__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34350__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34362_35015 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34363_35016 = null;
var count__34364_35017 = (0);
var i__34365_35018 = (0);
while(true){
if((i__34365_35018 < count__34364_35017)){
var f_35024 = chunk__34363_35016.cljs$core$IIndexed$_nth$arity$2(null,i__34365_35018);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35024], 0));


var G__35025 = seq__34362_35015;
var G__35026 = chunk__34363_35016;
var G__35028 = count__34364_35017;
var G__35029 = (i__34365_35018 + (1));
seq__34362_35015 = G__35025;
chunk__34363_35016 = G__35026;
count__34364_35017 = G__35028;
i__34365_35018 = G__35029;
continue;
} else {
var temp__5804__auto___35031 = cljs.core.seq(seq__34362_35015);
if(temp__5804__auto___35031){
var seq__34362_35034__$1 = temp__5804__auto___35031;
if(cljs.core.chunked_seq_QMARK_(seq__34362_35034__$1)){
var c__5568__auto___35036 = cljs.core.chunk_first(seq__34362_35034__$1);
var G__35039 = cljs.core.chunk_rest(seq__34362_35034__$1);
var G__35040 = c__5568__auto___35036;
var G__35041 = cljs.core.count(c__5568__auto___35036);
var G__35042 = (0);
seq__34362_35015 = G__35039;
chunk__34363_35016 = G__35040;
count__34364_35017 = G__35041;
i__34365_35018 = G__35042;
continue;
} else {
var f_35043 = cljs.core.first(seq__34362_35034__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35043], 0));


var G__35044 = cljs.core.next(seq__34362_35034__$1);
var G__35045 = null;
var G__35046 = (0);
var G__35047 = (0);
seq__34362_35015 = G__35044;
chunk__34363_35016 = G__35045;
count__34364_35017 = G__35046;
i__34365_35018 = G__35047;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35053 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35053], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35053)))?cljs.core.second(arglists_35053):arglists_35053)], 0));
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
var seq__34413_35066 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34415_35067 = null;
var count__34416_35068 = (0);
var i__34417_35069 = (0);
while(true){
if((i__34417_35069 < count__34416_35068)){
var vec__34453_35070 = chunk__34415_35067.cljs$core$IIndexed$_nth$arity$2(null,i__34417_35069);
var name_35071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34453_35070,(0),null);
var map__34456_35072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34453_35070,(1),null);
var map__34456_35073__$1 = cljs.core.__destructure_map(map__34456_35072);
var doc_35074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34456_35073__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34456_35073__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35071], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35075], 0));

if(cljs.core.truth_(doc_35074)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35074], 0));
} else {
}


var G__35077 = seq__34413_35066;
var G__35078 = chunk__34415_35067;
var G__35079 = count__34416_35068;
var G__35080 = (i__34417_35069 + (1));
seq__34413_35066 = G__35077;
chunk__34415_35067 = G__35078;
count__34416_35068 = G__35079;
i__34417_35069 = G__35080;
continue;
} else {
var temp__5804__auto___35081 = cljs.core.seq(seq__34413_35066);
if(temp__5804__auto___35081){
var seq__34413_35083__$1 = temp__5804__auto___35081;
if(cljs.core.chunked_seq_QMARK_(seq__34413_35083__$1)){
var c__5568__auto___35084 = cljs.core.chunk_first(seq__34413_35083__$1);
var G__35086 = cljs.core.chunk_rest(seq__34413_35083__$1);
var G__35087 = c__5568__auto___35084;
var G__35088 = cljs.core.count(c__5568__auto___35084);
var G__35089 = (0);
seq__34413_35066 = G__35086;
chunk__34415_35067 = G__35087;
count__34416_35068 = G__35088;
i__34417_35069 = G__35089;
continue;
} else {
var vec__34462_35090 = cljs.core.first(seq__34413_35083__$1);
var name_35091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34462_35090,(0),null);
var map__34465_35092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34462_35090,(1),null);
var map__34465_35093__$1 = cljs.core.__destructure_map(map__34465_35092);
var doc_35094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34465_35093__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34465_35093__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35091], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35095], 0));

if(cljs.core.truth_(doc_35094)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35094], 0));
} else {
}


var G__35106 = cljs.core.next(seq__34413_35083__$1);
var G__35107 = null;
var G__35108 = (0);
var G__35109 = (0);
seq__34413_35066 = G__35106;
chunk__34415_35067 = G__35107;
count__34416_35068 = G__35108;
i__34417_35069 = G__35109;
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

var seq__34492 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34493 = null;
var count__34494 = (0);
var i__34495 = (0);
while(true){
if((i__34495 < count__34494)){
var role = chunk__34493.cljs$core$IIndexed$_nth$arity$2(null,i__34495);
var temp__5804__auto___35114__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35114__$1)){
var spec_35115 = temp__5804__auto___35114__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35115)], 0));
} else {
}


var G__35119 = seq__34492;
var G__35120 = chunk__34493;
var G__35121 = count__34494;
var G__35122 = (i__34495 + (1));
seq__34492 = G__35119;
chunk__34493 = G__35120;
count__34494 = G__35121;
i__34495 = G__35122;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__34492);
if(temp__5804__auto____$1){
var seq__34492__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34492__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34492__$1);
var G__35124 = cljs.core.chunk_rest(seq__34492__$1);
var G__35125 = c__5568__auto__;
var G__35126 = cljs.core.count(c__5568__auto__);
var G__35127 = (0);
seq__34492 = G__35124;
chunk__34493 = G__35125;
count__34494 = G__35126;
i__34495 = G__35127;
continue;
} else {
var role = cljs.core.first(seq__34492__$1);
var temp__5804__auto___35129__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35129__$2)){
var spec_35130 = temp__5804__auto___35129__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35130)], 0));
} else {
}


var G__35131 = cljs.core.next(seq__34492__$1);
var G__35132 = null;
var G__35133 = (0);
var G__35134 = (0);
seq__34492 = G__35131;
chunk__34493 = G__35132;
count__34494 = G__35133;
i__34495 = G__35134;
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
var G__35141 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35142 = cljs.core.ex_cause(t);
via = G__35141;
t = G__35142;
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
var map__34662 = datafied_throwable;
var map__34662__$1 = cljs.core.__destructure_map(map__34662);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34662__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34662__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34662__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34664 = cljs.core.last(via);
var map__34664__$1 = cljs.core.__destructure_map(map__34664);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34664__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34664__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34664__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34665 = data;
var map__34665__$1 = cljs.core.__destructure_map(map__34665);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34665__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34665__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34665__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34667 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34667__$1 = cljs.core.__destructure_map(map__34667);
var top_data = map__34667__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34667__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34683 = phase;
var G__34683__$1 = (((G__34683 instanceof cljs.core.Keyword))?G__34683.fqn:null);
switch (G__34683__$1) {
case "read-source":
var map__34696 = data;
var map__34696__$1 = cljs.core.__destructure_map(map__34696);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34696__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34696__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34704 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34704__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34704,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34704);
var G__34704__$2 = (cljs.core.truth_((function (){var fexpr__34713 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34713.cljs$core$IFn$_invoke$arity$1 ? fexpr__34713.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34713.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34704__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34704__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34704__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34704__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34715 = top_data;
var G__34715__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34715,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34715);
var G__34715__$2 = (cljs.core.truth_((function (){var fexpr__34722 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34722.cljs$core$IFn$_invoke$arity$1 ? fexpr__34722.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34722.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34715__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34715__$1);
var G__34715__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34715__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34715__$2);
var G__34715__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34715__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34715__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34715__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34715__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34733 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34733,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34733,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34733,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34733,(3),null);
var G__34740 = top_data;
var G__34740__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34740,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34740);
var G__34740__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34740__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34740__$1);
var G__34740__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34740__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34740__$2);
var G__34740__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34740__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34740__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34740__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34740__$4;
}

break;
case "execution":
var vec__34756 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34756,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34756,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34756,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34756,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34658_SHARP_){
var or__5045__auto__ = (p1__34658_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__34776 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34776.cljs$core$IFn$_invoke$arity$1 ? fexpr__34776.cljs$core$IFn$_invoke$arity$1(p1__34658_SHARP_) : fexpr__34776.call(null,p1__34658_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__34780 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34780__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34780,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34780);
var G__34780__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34780__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34780__$1);
var G__34780__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34780__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34780__$2);
var G__34780__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34780__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34780__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34780__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34780__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34683__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34811){
var map__34812 = p__34811;
var map__34812__$1 = cljs.core.__destructure_map(map__34812);
var triage_data = map__34812__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34812__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34812__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34812__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34812__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34812__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34812__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34812__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34812__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__34838 = phase;
var G__34838__$1 = (((G__34838 instanceof cljs.core.Keyword))?G__34838.fqn:null);
switch (G__34838__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34842 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34843 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34844 = loc;
var G__34845 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34854_35222 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34855_35223 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34856_35224 = true;
var _STAR_print_fn_STAR__temp_val__34857_35225 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34856_35224);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34857_35225);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34799_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34799_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34855_35223);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34854_35222);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34842,G__34843,G__34844,G__34845) : format.call(null,G__34842,G__34843,G__34844,G__34845));

break;
case "macroexpansion":
var G__34876 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34877 = cause_type;
var G__34878 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34879 = loc;
var G__34880 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34876,G__34877,G__34878,G__34879,G__34880) : format.call(null,G__34876,G__34877,G__34878,G__34879,G__34880));

break;
case "compile-syntax-check":
var G__34884 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34885 = cause_type;
var G__34886 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34887 = loc;
var G__34888 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34884,G__34885,G__34886,G__34887,G__34888) : format.call(null,G__34884,G__34885,G__34886,G__34887,G__34888));

break;
case "compilation":
var G__34890 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34891 = cause_type;
var G__34892 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34893 = loc;
var G__34894 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34890,G__34891,G__34892,G__34893,G__34894) : format.call(null,G__34890,G__34891,G__34892,G__34893,G__34894));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34905 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34906 = symbol;
var G__34907 = loc;
var G__34908 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34917_35231 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34918_35232 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34919_35233 = true;
var _STAR_print_fn_STAR__temp_val__34920_35234 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34919_35233);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34920_35234);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34802_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34802_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34918_35232);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34917_35231);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34905,G__34906,G__34907,G__34908) : format.call(null,G__34905,G__34906,G__34907,G__34908));
} else {
var G__34950 = "Execution error%s at %s(%s).\n%s\n";
var G__34951 = cause_type;
var G__34952 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34953 = loc;
var G__34954 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34950,G__34951,G__34952,G__34953,G__34954) : format.call(null,G__34950,G__34951,G__34952,G__34953,G__34954));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34838__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
