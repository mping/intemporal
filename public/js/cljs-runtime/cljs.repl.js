goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27432){
var map__27433 = p__27432;
var map__27433__$1 = cljs.core.__destructure_map(map__27433);
var m = map__27433__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27433__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27433__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__27434_27735 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27435_27736 = null;
var count__27436_27737 = (0);
var i__27437_27738 = (0);
while(true){
if((i__27437_27738 < count__27436_27737)){
var f_27739 = chunk__27435_27736.cljs$core$IIndexed$_nth$arity$2(null,i__27437_27738);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27739], 0));


var G__27740 = seq__27434_27735;
var G__27741 = chunk__27435_27736;
var G__27742 = count__27436_27737;
var G__27743 = (i__27437_27738 + (1));
seq__27434_27735 = G__27740;
chunk__27435_27736 = G__27741;
count__27436_27737 = G__27742;
i__27437_27738 = G__27743;
continue;
} else {
var temp__5804__auto___27752 = cljs.core.seq(seq__27434_27735);
if(temp__5804__auto___27752){
var seq__27434_27754__$1 = temp__5804__auto___27752;
if(cljs.core.chunked_seq_QMARK_(seq__27434_27754__$1)){
var c__5568__auto___27755 = cljs.core.chunk_first(seq__27434_27754__$1);
var G__27756 = cljs.core.chunk_rest(seq__27434_27754__$1);
var G__27757 = c__5568__auto___27755;
var G__27758 = cljs.core.count(c__5568__auto___27755);
var G__27759 = (0);
seq__27434_27735 = G__27756;
chunk__27435_27736 = G__27757;
count__27436_27737 = G__27758;
i__27437_27738 = G__27759;
continue;
} else {
var f_27762 = cljs.core.first(seq__27434_27754__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27762], 0));


var G__27763 = cljs.core.next(seq__27434_27754__$1);
var G__27764 = null;
var G__27765 = (0);
var G__27766 = (0);
seq__27434_27735 = G__27763;
chunk__27435_27736 = G__27764;
count__27436_27737 = G__27765;
i__27437_27738 = G__27766;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27771 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27771], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27771)))?cljs.core.second(arglists_27771):arglists_27771)], 0));
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
var seq__27458_27789 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27459_27790 = null;
var count__27460_27791 = (0);
var i__27461_27792 = (0);
while(true){
if((i__27461_27792 < count__27460_27791)){
var vec__27471_27797 = chunk__27459_27790.cljs$core$IIndexed$_nth$arity$2(null,i__27461_27792);
var name_27798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27471_27797,(0),null);
var map__27474_27799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27471_27797,(1),null);
var map__27474_27800__$1 = cljs.core.__destructure_map(map__27474_27799);
var doc_27801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27474_27800__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27474_27800__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27798], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27802], 0));

if(cljs.core.truth_(doc_27801)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27801], 0));
} else {
}


var G__27803 = seq__27458_27789;
var G__27804 = chunk__27459_27790;
var G__27805 = count__27460_27791;
var G__27806 = (i__27461_27792 + (1));
seq__27458_27789 = G__27803;
chunk__27459_27790 = G__27804;
count__27460_27791 = G__27805;
i__27461_27792 = G__27806;
continue;
} else {
var temp__5804__auto___27808 = cljs.core.seq(seq__27458_27789);
if(temp__5804__auto___27808){
var seq__27458_27809__$1 = temp__5804__auto___27808;
if(cljs.core.chunked_seq_QMARK_(seq__27458_27809__$1)){
var c__5568__auto___27811 = cljs.core.chunk_first(seq__27458_27809__$1);
var G__27812 = cljs.core.chunk_rest(seq__27458_27809__$1);
var G__27813 = c__5568__auto___27811;
var G__27814 = cljs.core.count(c__5568__auto___27811);
var G__27815 = (0);
seq__27458_27789 = G__27812;
chunk__27459_27790 = G__27813;
count__27460_27791 = G__27814;
i__27461_27792 = G__27815;
continue;
} else {
var vec__27479_27817 = cljs.core.first(seq__27458_27809__$1);
var name_27818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27479_27817,(0),null);
var map__27482_27819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27479_27817,(1),null);
var map__27482_27820__$1 = cljs.core.__destructure_map(map__27482_27819);
var doc_27821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27482_27820__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27482_27820__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27818], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27822], 0));

if(cljs.core.truth_(doc_27821)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27821], 0));
} else {
}


var G__27824 = cljs.core.next(seq__27458_27809__$1);
var G__27825 = null;
var G__27826 = (0);
var G__27827 = (0);
seq__27458_27789 = G__27824;
chunk__27459_27790 = G__27825;
count__27460_27791 = G__27826;
i__27461_27792 = G__27827;
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

var seq__27483 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27484 = null;
var count__27485 = (0);
var i__27486 = (0);
while(true){
if((i__27486 < count__27485)){
var role = chunk__27484.cljs$core$IIndexed$_nth$arity$2(null,i__27486);
var temp__5804__auto___27834__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___27834__$1)){
var spec_27837 = temp__5804__auto___27834__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27837)], 0));
} else {
}


var G__27838 = seq__27483;
var G__27839 = chunk__27484;
var G__27840 = count__27485;
var G__27841 = (i__27486 + (1));
seq__27483 = G__27838;
chunk__27484 = G__27839;
count__27485 = G__27840;
i__27486 = G__27841;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__27483);
if(temp__5804__auto____$1){
var seq__27483__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27483__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27483__$1);
var G__27844 = cljs.core.chunk_rest(seq__27483__$1);
var G__27845 = c__5568__auto__;
var G__27846 = cljs.core.count(c__5568__auto__);
var G__27847 = (0);
seq__27483 = G__27844;
chunk__27484 = G__27845;
count__27485 = G__27846;
i__27486 = G__27847;
continue;
} else {
var role = cljs.core.first(seq__27483__$1);
var temp__5804__auto___27848__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___27848__$2)){
var spec_27849 = temp__5804__auto___27848__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27849)], 0));
} else {
}


var G__27850 = cljs.core.next(seq__27483__$1);
var G__27851 = null;
var G__27852 = (0);
var G__27853 = (0);
seq__27483 = G__27850;
chunk__27484 = G__27851;
count__27485 = G__27852;
i__27486 = G__27853;
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
var G__27856 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27857 = cljs.core.ex_cause(t);
via = G__27856;
t = G__27857;
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
var map__27538 = datafied_throwable;
var map__27538__$1 = cljs.core.__destructure_map(map__27538);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27538__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27538__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27538__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27539 = cljs.core.last(via);
var map__27539__$1 = cljs.core.__destructure_map(map__27539);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27539__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27539__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27539__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27540 = data;
var map__27540__$1 = cljs.core.__destructure_map(map__27540);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27540__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27540__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27540__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27541 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27541__$1 = cljs.core.__destructure_map(map__27541);
var top_data = map__27541__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27541__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27556 = phase;
var G__27556__$1 = (((G__27556 instanceof cljs.core.Keyword))?G__27556.fqn:null);
switch (G__27556__$1) {
case "read-source":
var map__27557 = data;
var map__27557__$1 = cljs.core.__destructure_map(map__27557);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27557__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27557__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27560 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27560__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27560,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27560);
var G__27560__$2 = (cljs.core.truth_((function (){var fexpr__27562 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27562.cljs$core$IFn$_invoke$arity$1 ? fexpr__27562.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27562.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27560__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27560__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27560__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27560__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27564 = top_data;
var G__27564__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27564,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27564);
var G__27564__$2 = (cljs.core.truth_((function (){var fexpr__27565 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27565.cljs$core$IFn$_invoke$arity$1 ? fexpr__27565.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27565.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27564__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27564__$1);
var G__27564__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27564__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27564__$2);
var G__27564__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27564__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27564__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27564__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27564__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27569 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27569,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27569,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27569,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27569,(3),null);
var G__27575 = top_data;
var G__27575__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27575,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27575);
var G__27575__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27575__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27575__$1);
var G__27575__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27575__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27575__$2);
var G__27575__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27575__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27575__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27575__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27575__$4;
}

break;
case "execution":
var vec__27585 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27585,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27585,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27585,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27585,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27537_SHARP_){
var or__5045__auto__ = (p1__27537_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__27593 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27593.cljs$core$IFn$_invoke$arity$1 ? fexpr__27593.cljs$core$IFn$_invoke$arity$1(p1__27537_SHARP_) : fexpr__27593.call(null,p1__27537_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__27595 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27595__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27595,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27595);
var G__27595__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27595__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27595__$1);
var G__27595__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27595__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27595__$2);
var G__27595__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27595__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27595__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27595__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27595__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27556__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27625){
var map__27626 = p__27625;
var map__27626__$1 = cljs.core.__destructure_map(map__27626);
var triage_data = map__27626__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27626__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27626__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27626__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27626__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27626__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27626__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27626__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27626__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__27645 = phase;
var G__27645__$1 = (((G__27645 instanceof cljs.core.Keyword))?G__27645.fqn:null);
switch (G__27645__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27647 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27648 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27649 = loc;
var G__27650 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27658_27939 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27659_27940 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27660_27941 = true;
var _STAR_print_fn_STAR__temp_val__27661_27942 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27660_27941);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27661_27942);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27610_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27610_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27659_27940);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27658_27939);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27647,G__27648,G__27649,G__27650) : format.call(null,G__27647,G__27648,G__27649,G__27650));

break;
case "macroexpansion":
var G__27665 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27666 = cause_type;
var G__27667 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27668 = loc;
var G__27669 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27665,G__27666,G__27667,G__27668,G__27669) : format.call(null,G__27665,G__27666,G__27667,G__27668,G__27669));

break;
case "compile-syntax-check":
var G__27670 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27671 = cause_type;
var G__27672 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27673 = loc;
var G__27674 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27670,G__27671,G__27672,G__27673,G__27674) : format.call(null,G__27670,G__27671,G__27672,G__27673,G__27674));

break;
case "compilation":
var G__27675 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27676 = cause_type;
var G__27677 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27678 = loc;
var G__27679 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27675,G__27676,G__27677,G__27678,G__27679) : format.call(null,G__27675,G__27676,G__27677,G__27678,G__27679));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27680 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27681 = symbol;
var G__27682 = loc;
var G__27683 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27685_27969 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27686_27970 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27687_27971 = true;
var _STAR_print_fn_STAR__temp_val__27688_27972 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27687_27971);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27688_27972);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27612_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27612_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27686_27970);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27685_27969);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27680,G__27681,G__27682,G__27683) : format.call(null,G__27680,G__27681,G__27682,G__27683));
} else {
var G__27693 = "Execution error%s at %s(%s).\n%s\n";
var G__27694 = cause_type;
var G__27695 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27696 = loc;
var G__27697 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27693,G__27694,G__27695,G__27696,G__27697) : format.call(null,G__27693,G__27694,G__27695,G__27696,G__27697));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27645__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
