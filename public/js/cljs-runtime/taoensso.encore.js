goog.provide('taoensso.encore');
goog.scope(function(){
  taoensso.encore.goog$module$goog$object = goog.module.get('goog.object');
  taoensso.encore.goog$module$goog$array = goog.module.get('goog.array');
});
/**
 * See `assert-min-encore-version`
 */
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(159),(0)], null);
/**
 * Private, don't use.
 *   Returns true if given a list or Cons (=> possible call form).
 */
taoensso.encore.list_form_QMARK_ = (function taoensso$encore$list_form_QMARK_(x){
return ((cljs.core.list_QMARK_(x)) || ((x instanceof cljs.core.Cons)));
});
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args> <attrs>]
 *   with support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__61892 = arguments.length;
switch (G__61892) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,args,null);
}));

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__61894 = ((((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61894,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61894,(1),null);
var vec__61897 = ((((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61897,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61897,(1),null);
var vec__61900 = ((((typeof cljs.core.first(args__$2) === 'string') && (cljs.core.next(args__$2))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$2),cljs.core.next(args__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_docstring,args__$2], null));
var _QMARK_docstring__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61900,(0),null);
var args__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61900,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring__$1):attrs);
var attrs__$2 = (function (){var b2__30441__auto__ = cljs.core.meta(sym);
if(cljs.core.truth_(b2__30441__auto__)){
var m = b2__30441__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,attrs__$1);
} else {
return attrs__$1;
}
})();
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),args__$3,attrs__$3], null);
}));

(taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3);

taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.react_native_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"react-native");
taoensso.encore.js__QMARK_window = (((((!(taoensso.encore.react_native_target_QMARK_))) && ((typeof window !== 'undefined'))))?window:null);
taoensso.encore.js__QMARK_process = (((typeof process !== 'undefined'))?process:null);
taoensso.encore.js__QMARK_crypto = ((taoensso.encore.react_native_target_QMARK_)?null:(function (){var or__5025__auto__ = (((typeof crypto !== 'undefined'))?crypto:null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if((typeof window !== 'undefined')){
return taoensso.encore.goog$module$goog$object.get(window,"crypto");
} else {
return null;
}
}
})());
/**
 * Returns human-readable type name for given arb value.
 */
taoensso.encore.type_name = (function taoensso$encore$type_name(x){
if((x == null)){
return "nil";
} else {
if((void 0 === x)){
return "undefined";
} else {
var ctor = cljs.core.type(x);
var or__5025__auto__ = ctor.name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = ctor.displayName;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = goog.typeOf(x);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = (function (){try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctor], 0));
}catch (e61947){var _ = e61947;
return null;
}})();
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return "unknown";
}
}
}
}
}
}
});
taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return ((typeof x === 'string') && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")))));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return ((x === true) || (x === false));
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.transient_QMARK_ = (function taoensso$encore$transient_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (8))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ITransientCollection$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.can_meta_QMARK_ = (function taoensso$encore$can_meta_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWithMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string'));
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});

taoensso.encore.nameable_QMARK_ = (function taoensso$encore$nameable_QMARK_(x){
return ((taoensso.encore.named_QMARK_(x)) || (typeof x === 'string'));
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
var and__5023__auto__ = taoensso.encore.ident_QMARK_(x);
if(cljs.core.truth_(and__5023__auto__)){
return (cljs.core.namespace(x) == null);
} else {
return and__5023__auto__;
}
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__5023__auto__ = taoensso.encore.ident_QMARK_(x);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5023__auto____$1)){
return true;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__5023__auto__ = (x instanceof cljs.core.Symbol);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5023__auto____$1)){
return true;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__5023__auto__ = (x instanceof cljs.core.Keyword);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5023__auto____$1)){
return true;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2))));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3))));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return ((typeof x === 'string') && ((!(clojure.string.blank_QMARK_(x)))));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return (!(clojure.string.blank_QMARK_(x)));
});
/**
 * Returns true iff given platform error (`Throwable` or `js/Error`).
 */
taoensso.encore.error_QMARK_ = taoensso.truss.error_QMARK_;
/**
 * Returns true iff given a `clojure.core.async` channel.
 */
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
/**
 * Like `force` for vars.
 */
taoensso.encore.force_var = (function taoensso$encore$force_var(x){
if(cljs.core.var_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   finite (excl. NaN and infinities).
 */
taoensso.encore.finite_num_QMARK_ = (function taoensso$encore$finite_num_QMARK_(x){
return Number.isFinite(x);
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   a fixed-precision integer.
 */
taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
var and__5023__auto__ = taoensso.encore.finite_num_QMARK_(x);
if(cljs.core.truth_(and__5023__auto__)){
return (parseFloat(x) === parseInt(x,(10)));
} else {
return and__5023__auto__;
}
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   a fixed-precision floating-point (incl. NaN and infinities).
 */
taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return ((typeof x === 'number') && ((!((parseFloat(x) === parseInt(x,(10)))))));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return (!((x < (0))));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return ((typeof x === 'number') && ((x === (0))));
});

taoensso.encore.nzero_num_QMARK_ = (function taoensso$encore$nzero_num_QMARK_(x){
return ((typeof x === 'number') && ((!((x === (0))))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return ((typeof x === 'number') && ((!((x < (0))))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return ((typeof x === 'number') && ((x > (0))));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return ((typeof x === 'number') && ((x < (0))));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
var and__5023__auto__ = taoensso.encore.int_QMARK_(x);
if(cljs.core.truth_(and__5023__auto__)){
return (!((x < (0))));
} else {
return and__5023__auto__;
}
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
var and__5023__auto__ = taoensso.encore.int_QMARK_(x);
if(cljs.core.truth_(and__5023__auto__)){
return (x > (0));
} else {
return and__5023__auto__;
}
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
var and__5023__auto__ = taoensso.encore.int_QMARK_(x);
if(cljs.core.truth_(and__5023__auto__)){
return (x < (0));
} else {
return and__5023__auto__;
}
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
var and__5023__auto__ = taoensso.encore.float_QMARK_(x);
if(cljs.core.truth_(and__5023__auto__)){
return (!((x < (0))));
} else {
return and__5023__auto__;
}
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
var and__5023__auto__ = taoensso.encore.float_QMARK_(x);
if(cljs.core.truth_(and__5023__auto__)){
return (x > (0));
} else {
return and__5023__auto__;
}
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
var and__5023__auto__ = taoensso.encore.float_QMARK_(x);
if(cljs.core.truth_(and__5023__auto__)){
return (x < (0));
} else {
return and__5023__auto__;
}
});
/**
 * Returns true iff given number in unsigned unit proportion interval ∈ℝ[0,1].
 */
taoensso.encore.pnum_QMARK_ = (function taoensso$encore$pnum_QMARK_(x){
var and__5023__auto__ = typeof x === 'number';
if(and__5023__auto__){
var n = x;
return (((n >= 0.0)) && ((n <= 1.0)));
} else {
return and__5023__auto__;
}
});
/**
 * Returns true iff given number in signed unit proportion interval ∈ℝ[-1,1].
 */
taoensso.encore.rnum_QMARK_ = (function taoensso$encore$rnum_QMARK_(x){
var and__5023__auto__ = typeof x === 'number';
if(and__5023__auto__){
var n = x;
return (((n >= -1.0)) && ((n <= 1.0)));
} else {
return and__5023__auto__;
}
});
taoensso.encore.max_long = Number.MAX_SAFE_INTEGER;
taoensso.encore.min_long = Number.MIN_SAFE_INTEGER;
taoensso.encore.int_str_QMARK_ = (function taoensso$encore$int_str_QMARK_(s){
return cljs.core.re_matches(/[+-]?\d+/,s);
});
taoensso.encore.parse_js_float = (function taoensso$encore$parse_js_float(s){
var x = parseFloat(s);
if(cljs.core.truth_(isNaN(x))){
return null;
} else {
return x;
}
});
taoensso.encore.parse_js_int = (function taoensso$encore$parse_js_int(s){
if(cljs.core.truth_(taoensso.encore.int_str_QMARK_(s))){
var x = parseInt(s,(10));
if(((cljs.core.not(isNaN(x))) && ((((x <= taoensso.encore.max_long)) && ((x >= taoensso.encore.min_long)))))){
return x;
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var b2__30441__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__30441__auto__)){
var ns = b2__30441__auto__;
return [ns,"/",n].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank_trim = (function taoensso$encore$as__QMARK_nblank_trim(x){
if(typeof x === 'string'){
var s = clojure.string.trim(x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return null;
} else {
return s;
}
} else {
return null;
}
});


taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
return taoensso.encore.parse_js_int(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
return taoensso.encore.parse_js_float(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__30441__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__30441__auto__)){
var n = b2__30441__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__30441__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__30441__auto__)){
var n = b2__30441__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__30441__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__30441__auto__)){
var n = b2__30441__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__30441__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__30441__auto__)){
var n = b2__30441__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pnum = (function taoensso$encore$as__QMARK_pnum(x){
var b2__30441__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__30441__auto__)){
var f = b2__30441__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_rnum = (function taoensso$encore$as__QMARK_rnum(x){
var b2__30441__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__30441__auto__)){
var f = b2__30441__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < -1.0)){
return -0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if(((x === true) || (((x === false) || ((x == null)))))){
return x;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")))))))){
return false;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1")))))))){
return true;
} else {
return null;
}
}
}
});

var regex_64872 = /^[^\s@]+@[^\s@]+\.\S*[^\.]$/;
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(var_args){
var G__62097 = arguments.length;
switch (G__62097) {
case 1:
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_s){
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2((320),_QMARK_s);
}));

(taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__30441__auto__ = (function (){var and__5023__auto__ = _QMARK_s;
if(cljs.core.truth_(and__5023__auto__)){
return clojure.string.trim(_QMARK_s);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(b2__30441__auto__)){
var s = b2__30441__auto__;
if((cljs.core.count(s) <= max_len)){
return cljs.core.re_find(regex_64872,s);
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_email.cljs$lang$maxFixedArity = 2);



taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(var_args){
var G__62107 = arguments.length;
switch (G__62107) {
case 1:
return taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_s){
var b2__30441__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1(_QMARK_s);
if(cljs.core.truth_(b2__30441__auto__)){
var email = b2__30441__auto__;
return clojure.string.lower_case((taoensso.encore.norm_str.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.norm_str.cljs$core$IFn$_invoke$arity$1(email) : taoensso.encore.norm_str.call(null,email)));
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__30441__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2(max_len,_QMARK_s);
if(cljs.core.truth_(b2__30441__auto__)){
var email = b2__30441__auto__;
return clojure.string.lower_case((taoensso.encore.norm_str.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.norm_str.cljs$core$IFn$_invoke$arity$1(email) : taoensso.encore.norm_str.call(null,email)));
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore._as_throw = (function taoensso$encore$_as_throw(kind,x){
throw taoensso.truss.ex_info_STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1026,3], null),["[encore/as-",cljs.core.name(kind),"] failed against arg: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-kind","pred-kind",138885083),kind,new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null)], null),null);
});
var _as_throw_64887 = taoensso.encore._as_throw;
taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nblank","nblank",626815585),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x));
}
});

taoensso.encore.as_nblank_trim = (function taoensso$encore$as_nblank_trim(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nblank_trim(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nblank-trim","nblank-trim",-1443525862),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"nblank-trim","nblank-trim",-1443525862),x));
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x));
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x));
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qname","qname",-1983612179),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x));
}
});

taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nzero","nzero",2053173656),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"nzero","nzero",2053173656),x));
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kw","kw",1158308175),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x));
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(var_args){
var G__62145 = arguments.length;
switch (G__62145) {
case 1:
return taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$1 = (function (x){
var or__5025__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email","email",1415816706),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x));
}
}));

(taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
var or__5025__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2(n,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email","email",1415816706),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x));
}
}));

(taoensso.encore.as_email.cljs$lang$maxFixedArity = 2);


taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(var_args){
var G__62155 = arguments.length;
switch (G__62155) {
case 1:
return taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$1 = (function (x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nemail","nemail",318708381),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x));
}
}));

(taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2(n,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nemail","nemail",318708381),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x));
}
}));

(taoensso.encore.as_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"int","int",-1741416922),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x));
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x));
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x));
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"float","float",-1732389368),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x));
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x));
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x));
}
});

taoensso.encore.as_pnum = (function taoensso$encore$as_pnum(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_pnum(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pnum","pnum",-602522434),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"pnum","pnum",-602522434),x));
}
});

taoensso.encore.as_rnum = (function taoensso$encore$as_rnum(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_rnum(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rnum","rnum",-783850724),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"rnum","rnum",-783850724),x));
}
});

taoensso.encore.as_pnum_BANG_ = (function taoensso$encore$as_pnum_BANG_(x){
if(cljs.core.truth_(taoensso.encore.pnum_QMARK_(x))){
return x;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pnum!","pnum!",837651383),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"pnum!","pnum!",837651383),x));
}
});

taoensso.encore.as_rnum_BANG_ = (function taoensso$encore$as_rnum_BANG_(x){
if(cljs.core.truth_(taoensso.encore.rnum_QMARK_(x))){
return x;
} else {
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rnum!","rnum!",-567516079),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"rnum!","rnum!",-567516079),x));
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
return (_as_throw_64887.cljs$core$IFn$_invoke$arity$2 ? _as_throw_64887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bool","bool",1444635321),x) : _as_throw_64887.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x));
} else {
return _QMARK_b;
}
});
taoensso.encore.convey_reduced = (function taoensso$encore$convey_reduced(x){
if(cljs.core.reduced_QMARK_(x)){
return cljs.core.reduced(x);
} else {
return x;
}
});
/**
 * Public version of `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__62198){
var vec__62199 = p__62198;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62199,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62199,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
/**
 * No longer useful with Clojure 1.7+, just use (reduce f init (range ...)).
 */
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(var_args){
var G__62205 = arguments.length;
switch (G__62205) {
case 3:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3 = (function (rf,init,end){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(end));
}));

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4 = (function (rf,init,start,end){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end));
}));

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$5 = (function (rf,init,start,end,step){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,end,step));
}));

(taoensso.encore.reduce_n.cljs$lang$maxFixedArity = 5);

/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 *  As `reduce-kv` against vector coll, but works on any seqable coll type.
 */
taoensso.encore.reduce_indexed = (function taoensso$encore$reduce_indexed(rf,init,coll){
var c = (taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.counter.call(null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var G__62222 = acc;
var G__62223 = (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));
var G__62224 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__62222,G__62223,G__62224) : rf.call(null,G__62222,G__62223,G__62224));
}),init,coll);
});
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__62231 = acc;
var G__62232 = k;
var G__62233 = taoensso.encore.goog$module$goog$object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__62231,G__62232,G__62233) : f.call(null,G__62231,G__62232,G__62233));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__62238_SHARP_,p2__62237_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__62237_SHARP_) : proc.call(null,p2__62237_SHARP_));
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__62241_SHARP_,p2__62239_SHARP_,p3__62240_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__62239_SHARP_,p3__62240_SHARP_) : proc.call(null,p2__62239_SHARP_,p3__62240_SHARP_));
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs((function (p1__62244_SHARP_,p2__62242_SHARP_,p3__62243_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__62242_SHARP_,p3__62243_SHARP_) : proc.call(null,p2__62242_SHARP_,p3__62243_SHARP_));
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj((function (p1__62247_SHARP_,p2__62245_SHARP_,p3__62246_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__62245_SHARP_,p3__62246_SHARP_) : proc.call(null,p2__62245_SHARP_,p3__62246_SHARP_));
}),null,obj);

return null;
});
var rf_64906 = (function (pred){
return (function (_acc,in$){
var b2__30441__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(b2__30441__auto__)){
var p = b2__30441__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
});
});
/**
 * Returns nil, or first truthy (pred x) for x in coll.
 *  Like `core/some` but faster and supports transducers.
 */
taoensso.encore.rsome = (function taoensso$encore$rsome(var_args){
var G__62255 = arguments.length;
switch (G__62255) {
case 2:
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf_64906(pred),null,coll);
}));

(taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf_64906(pred)),null,coll);
}));

(taoensso.encore.rsome.cljs$lang$maxFixedArity = 3);

var rf_64909 = (function (pred){
return (function (_acc,k,v){
var b2__30441__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__30441__auto__)){
var p = b2__30441__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
});
});
var tf_64910 = (function (pred){
return (function (_acc,p__62261){
var vec__62266 = p__62261;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62266,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62266,(1),null);
var b2__30441__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__30441__auto__)){
var p = b2__30441__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
});
});
/**
 * Returns nil, or first truthy (pred k v) for kv in associative coll.
 *  Like `core/some` but faster and takes kvs.
 */
taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv(rf_64909(pred),null,coll);
});
var rf_64914 = (function (pred){
return (function (_acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
});
});
/**
 * Returns nil, or first x in coll with truthy (pred x).
 */
taoensso.encore.rfirst = (function taoensso$encore$rfirst(var_args){
var G__62275 = arguments.length;
switch (G__62275) {
case 2:
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf_64914(pred),null,coll);
}));

(taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf_64914(pred)),null,coll);
}));

(taoensso.encore.rfirst.cljs$lang$maxFixedArity = 3);

var entry_64916 = (function (k,v){
return (new cljs.core.MapEntry(k,v,null));
});
var rf_64917 = (function (pred){
return (function (_acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(entry_64916(k,v));
} else {
return null;
}
});
});
var tf_64918 = (function (pred){
return (function (_acc,p__62290){
var vec__62291 = p__62290;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62291,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62291,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(entry_64916(k,v));
} else {
return null;
}
});
});
/**
 * Returns nil, or first [k v] entry in associative coll with truthy (pred k v).
 */
taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv(rf_64917(pred),null,coll);
});
var rf_64922 = (function (pred){
return (function (_acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(false);
}
});
});
/**
 * Returns true iff (pred x) is truthy for every x in coll.
 *  Like `core/every?` but faster and supports transducers.
 */
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(var_args){
var G__62306 = arguments.length;
switch (G__62306) {
case 2:
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf_64922(pred),true,coll);
}));

(taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf_64922(pred)),true,coll);
}));

(taoensso.encore.revery_QMARK_.cljs$lang$maxFixedArity = 3);

var rf_64925 = (function (pred){
return (function (_acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
});
});
var tf_64926 = (function (pred){
return (function (_acc,p__62324){
var vec__62325 = p__62324;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62325,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
});
});
/**
 * Returns true iff (pred k v) is truthy for every kv in associative coll.
 */
taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv(rf_64925(pred),true,coll);
});
/**
 * Reduces given sequential xs and ys as pairs (e.g. key-val pairs).
 *   Calls (rf acc x y) for each sequential pair.
 * 
 *   Useful, among other things, as a more flexible version of `zipmap`.
 */
taoensso.encore.reduce_zip = (function taoensso$encore$reduce_zip(var_args){
var G__62336 = arguments.length;
switch (G__62336) {
case 4:
return taoensso.encore.reduce_zip.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_zip.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_zip.cljs$core$IFn$_invoke$arity$4 = (function (rf,init,xs,ys){
return taoensso.encore.reduce_zip.cljs$core$IFn$_invoke$arity$5(rf,init,xs,ys,new cljs.core.Keyword("taoensso.encore","skip","taoensso.encore/skip",-726061459));
}));

(taoensso.encore.reduce_zip.cljs$core$IFn$_invoke$arity$5 = (function (rf,init,xs,ys,not_found){
if(((cljs.core.vector_QMARK_(xs)) && (cljs.core.vector_QMARK_(ys)))){
var n = ((cljs.core.keyword_identical_QMARK_(not_found,new cljs.core.Keyword("taoensso.encore","skip","taoensso.encore/skip",-726061459)))?(function (){var x__5113__auto__ = cljs.core.count(xs);
var y__5114__auto__ = cljs.core.count(ys);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})():(function (){var x__5110__auto__ = cljs.core.count(xs);
var y__5111__auto__ = cljs.core.count(ys);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})());
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
var G__62341 = acc;
var G__62342 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(xs,idx,not_found);
var G__62343 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ys,idx,not_found);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__62341,G__62342,G__62343) : rf.call(null,G__62341,G__62342,G__62343));
}),init,n);
} else {
var not_found_QMARK_ = (!(cljs.core.keyword_identical_QMARK_(not_found,new cljs.core.Keyword("taoensso.encore","skip","taoensso.encore/skip",-726061459))));
var acc = init;
var xs__$1 = cljs.core.seq(xs);
var ys__$1 = cljs.core.seq(ys);
while(true){
if(((not_found_QMARK_)?((xs__$1) || (ys__$1)):((xs__$1) && (ys__$1)))){
var result = (function (){var G__62350 = acc;
var G__62351 = cljs.core.first((function (){var or__5025__auto__ = xs__$1;
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [not_found], null);
}
})());
var G__62352 = cljs.core.first((function (){var or__5025__auto__ = ys__$1;
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [not_found], null);
}
})());
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__62350,G__62351,G__62352) : rf.call(null,G__62350,G__62351,G__62352));
})();
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.deref(result);
} else {
var G__64932 = result;
var G__64933 = cljs.core.next(xs__$1);
var G__64934 = cljs.core.next(ys__$1);
acc = G__64932;
xs__$1 = G__64933;
ys__$1 = G__64934;
continue;
}
} else {
return acc;
}
break;
}
}
}));

(taoensso.encore.reduce_zip.cljs$lang$maxFixedArity = 5);


/**
* @constructor
*/
taoensso.encore.Tup2 = (function (x,y){
this.x = x;
this.y = y;
});

(taoensso.encore.Tup2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(taoensso.encore.Tup2.cljs$lang$type = true);

(taoensso.encore.Tup2.cljs$lang$ctorStr = "taoensso.encore/Tup2");

(taoensso.encore.Tup2.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"taoensso.encore/Tup2");
}));

/**
 * Positional factory function for taoensso.encore/Tup2.
 */
taoensso.encore.__GT_Tup2 = (function taoensso$encore$__GT_Tup2(x,y){
return (new taoensso.encore.Tup2(x,y));
});



/**
* @constructor
*/
taoensso.encore.Tup3 = (function (x,y,z){
this.x = x;
this.y = y;
this.z = z;
});

(taoensso.encore.Tup3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null)], null);
}));

(taoensso.encore.Tup3.cljs$lang$type = true);

(taoensso.encore.Tup3.cljs$lang$ctorStr = "taoensso.encore/Tup3");

(taoensso.encore.Tup3.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"taoensso.encore/Tup3");
}));

/**
 * Positional factory function for taoensso.encore/Tup3.
 */
taoensso.encore.__GT_Tup3 = (function taoensso$encore$__GT_Tup3(x,y,z){
return (new taoensso.encore.Tup3(x,y,z));
});

/**
 * Like `reduce` but supports separate simultaneous accumulators
 *   as a micro-optimization when reducing a large collection multiple
 *   times.
 */
taoensso.encore.reduce_multi = (function taoensso$encore$reduce_multi(var_args){
var G__62362 = arguments.length;
switch (G__62362) {
case 3:
return taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$3 = (function (rf,init,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,coll);
}));

(taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$5 = (function (rf1,init1,rf2,init2,coll){
var tuple = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tuple,in$){
var x = tuple.x;
var y = tuple.y;
var rx_QMARK_ = cljs.core.reduced_QMARK_(x);
var ry_QMARK_ = cljs.core.reduced_QMARK_(y);
if(((rx_QMARK_) && (ry_QMARK_))){
return cljs.core.reduced(tuple);
} else {
var x__$1 = ((rx_QMARK_)?x:(rf1.cljs$core$IFn$_invoke$arity$2 ? rf1.cljs$core$IFn$_invoke$arity$2(x,in$) : rf1.call(null,x,in$)));
var y__$1 = ((ry_QMARK_)?y:(rf2.cljs$core$IFn$_invoke$arity$2 ? rf2.cljs$core$IFn$_invoke$arity$2(y,in$) : rf2.call(null,y,in$)));
return (new taoensso.encore.Tup2(x__$1,y__$1));
}
}),(new taoensso.encore.Tup2(init1,init2)),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.unreduced(tuple.x),cljs.core.unreduced(tuple.y)], null);
}));

(taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$7 = (function (rf1,init1,rf2,init2,rf3,init3,coll){
var tuple = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tuple,in$){
var x = tuple.x;
var y = tuple.y;
var z = tuple.z;
var rx_QMARK_ = cljs.core.reduced_QMARK_(x);
var ry_QMARK_ = cljs.core.reduced_QMARK_(y);
var rz_QMARK_ = cljs.core.reduced_QMARK_(z);
if(((rx_QMARK_) && (((ry_QMARK_) && (rz_QMARK_))))){
return cljs.core.reduced(tuple);
} else {
var x__$1 = ((rx_QMARK_)?x:(rf1.cljs$core$IFn$_invoke$arity$2 ? rf1.cljs$core$IFn$_invoke$arity$2(x,in$) : rf1.call(null,x,in$)));
var y__$1 = ((ry_QMARK_)?y:(rf2.cljs$core$IFn$_invoke$arity$2 ? rf2.cljs$core$IFn$_invoke$arity$2(y,in$) : rf2.call(null,y,in$)));
var z__$1 = ((rz_QMARK_)?z:(rf3.cljs$core$IFn$_invoke$arity$2 ? rf3.cljs$core$IFn$_invoke$arity$2(z,in$) : rf3.call(null,z,in$)));
return (new taoensso.encore.Tup3(x__$1,y__$1,z__$1));
}
}),(new taoensso.encore.Tup3(init1,init2,init3)),coll);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.unreduced(tuple.x),cljs.core.unreduced(tuple.y),cljs.core.unreduced(tuple.z)], null);
}));

(taoensso.encore.reduce_multi.cljs$lang$maxFixedArity = 7);

/**
 * Reduces sequence of elements interleaved from given `colls`.
 *   (reduce-interleave-all conj [] [[:a :b] [1 2 3]]) => [:a 1 :b 2 3]
 */
taoensso.encore.reduce_interleave_all = (function taoensso$encore$reduce_interleave_all(rf,init,colls){
if(cljs.core.empty_QMARK_(colls)){
return init;
} else {
var acc = init;
var colls__$1 = colls;
while(true){
var tuple = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (acc,colls__$1){
return (function (tuple,in$){
if(cljs.core.empty_QMARK_(in$)){
return tuple;
} else {
var vec__62377 = in$;
var seq__62378 = cljs.core.seq(vec__62377);
var first__62379 = cljs.core.first(seq__62378);
var seq__62378__$1 = cljs.core.next(seq__62378);
var in1 = first__62379;
var next_in = seq__62378__$1;
var acc__$1 = tuple.x;
var ncs = tuple.y;
var res = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc__$1,in1) : rf.call(null,acc__$1,in1));
if(cljs.core.reduced_QMARK_(res)){
return cljs.core.reduced((new taoensso.encore.Tup2(cljs.core.deref(res),null)));
} else {
return (new taoensso.encore.Tup2(res,((next_in)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = ncs;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),next_in):ncs)));
}
}
});})(acc,colls__$1))
,(new taoensso.encore.Tup2(acc,null)),colls__$1);
var acc__$1 = tuple.x;
var next_colls = tuple.y;
if(cljs.core.truth_(next_colls)){
var G__64937 = acc__$1;
var G__64938 = next_colls;
acc = G__64937;
colls__$1 = G__64938;
continue;
} else {
return acc__$1;
}
break;
}
}
});
var map_like_QMARK__64939 = (function (p1__62381_SHARP_){
return ((cljs.core.map_QMARK_(p1__62381_SHARP_)) || (cljs.core.record_QMARK_(p1__62381_SHARP_)));
});
/**
 * Private, don't use.
 *  Simpler, faster `clojure.walk/postwalk`.
 */
taoensso.encore.postwalk = (function taoensso$encore$postwalk(var_args){
var G__62385 = arguments.length;
switch (G__62385) {
case 2:
return taoensso.encore.postwalk.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.postwalk.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.postwalk.cljs$core$IFn$_invoke$arity$2 = (function (x,f){
return taoensso.encore.postwalk.cljs$core$IFn$_invoke$arity$3(false,x,f);
}));

(taoensso.encore.postwalk.cljs$core$IFn$_invoke$arity$3 = (function (preserve_seqs_QMARK_,x,f){
var ps = (cljs.core.truth_(preserve_seqs_QMARK_)?cljs.core.seq:cljs.core.identity);
var pw = (function (p1__62382_SHARP_,p2__62383_SHARP_){
return taoensso.encore.postwalk.cljs$core$IFn$_invoke$arity$3(preserve_seqs_QMARK_,p1__62382_SHARP_,p2__62383_SHARP_);
});
if(map_like_QMARK__64939(x)){
var G__62386 = cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,pw(k,f),pw(v,f));
}),cljs.core.PersistentArrayMap.EMPTY,x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__62386) : f.call(null,G__62386));
} else {
if(cljs.core.seq_QMARK_(x)){
var G__62395 = (function (){var G__62400 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,pw(in$,f));
}),cljs.core.PersistentVector.EMPTY,x);
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(G__62400) : ps.call(null,G__62400));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__62395) : f.call(null,G__62395));
} else {
if(cljs.core.coll_QMARK_(x)){
var G__62406 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,pw(in$,f));
}),cljs.core.empty(x),x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__62406) : f.call(null,G__62406));
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}
}
}
}));

(taoensso.encore.postwalk.cljs$lang$maxFixedArity = 3);

taoensso.encore.subfn = (function taoensso$encore$subfn(context,by_idx_fn){
return (function() {
var taoensso$encore$subfn_$_subfn_STAR_ = null;
var taoensso$encore$subfn_$_subfn_STAR___2 = (function (c,start_idx){
if(cljs.core.truth_(c)){
var max_idx = cljs.core.count(c);
var start_idx__$1 = cljs.core.long$(start_idx);
if((start_idx__$1 < max_idx)){
var G__62469 = c;
var G__62470 = (function (){var x__5110__auto__ = start_idx__$1;
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var G__62471 = max_idx;
return (by_idx_fn.cljs$core$IFn$_invoke$arity$3 ? by_idx_fn.cljs$core$IFn$_invoke$arity$3(G__62469,G__62470,G__62471) : by_idx_fn.call(null,G__62469,G__62470,G__62471));
} else {
return null;
}
} else {
return null;
}
});
var taoensso$encore$subfn_$_subfn_STAR___3 = (function (c,start_idx,end_idx){
if(cljs.core.truth_(c)){
var start_idx__$1 = (function (){var x__5110__auto__ = cljs.core.long$(start_idx);
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var end_idx__$1 = (function (){var x__5113__auto__ = cljs.core.long$(end_idx);
var y__5114__auto__ = cljs.core.count(c);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((start_idx__$1 < end_idx__$1)){
return (by_idx_fn.cljs$core$IFn$_invoke$arity$3 ? by_idx_fn.cljs$core$IFn$_invoke$arity$3(c,start_idx__$1,end_idx__$1) : by_idx_fn.call(null,c,start_idx__$1,end_idx__$1));
} else {
return null;
}
} else {
return null;
}
});
var taoensso$encore$subfn_$_subfn_STAR___4 = (function (c,kind,start,end){
if(cljs.core.truth_(c)){
var max_end = cljs.core.count(c);
var end__$1 = ((cljs.core.keyword_identical_QMARK_(end,new cljs.core.Keyword(null,"max","max",61366548)))?max_end:end);
var G__62502 = kind;
var G__62502__$1 = (((G__62502 instanceof cljs.core.Keyword))?G__62502.fqn:null);
switch (G__62502__$1) {
case "by-idx":
return taoensso$encore$subfn_$_subfn_STAR_.cljs$core$IFn$_invoke$arity$3(c,start,end__$1);

break;
case "by-len":
var len = cljs.core.long$(end__$1);
if((len <= (0))){
return null;
} else {
var start_idx = cljs.core.long$(start);
if((start_idx < (0))){
var start_idx__$1 = (function (){var x__5110__auto__ = (start_idx + max_end);
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var end_idx = (function (){var x__5113__auto__ = (start_idx__$1 + len);
var y__5114__auto__ = max_end;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((start_idx__$1 < end_idx)){
return (by_idx_fn.cljs$core$IFn$_invoke$arity$3 ? by_idx_fn.cljs$core$IFn$_invoke$arity$3(c,start_idx__$1,end_idx) : by_idx_fn.call(null,c,start_idx__$1,end_idx));
} else {
return null;
}
} else {
var end_idx = (function (){var x__5113__auto__ = (start_idx + len);
var y__5114__auto__ = max_end;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((start_idx < end_idx)){
return (by_idx_fn.cljs$core$IFn$_invoke$arity$3 ? by_idx_fn.cljs$core$IFn$_invoke$arity$3(c,start_idx,end_idx) : by_idx_fn.call(null,c,start_idx,end_idx));
} else {
return null;
}
}
}

break;
default:
return taoensso.truss.unexpected_arg_BANG__STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1388,12], null),kind,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"by-idx","by-idx",-1997587605),null,new cljs.core.Keyword(null,"by-len","by-len",587837753),null], null), null)], null));

}
} else {
return null;
}
});
taoensso$encore$subfn_$_subfn_STAR_ = function(c,kind,start,end){
switch(arguments.length){
case 2:
return taoensso$encore$subfn_$_subfn_STAR___2.call(this,c,kind);
case 3:
return taoensso$encore$subfn_$_subfn_STAR___3.call(this,c,kind,start);
case 4:
return taoensso$encore$subfn_$_subfn_STAR___4.call(this,c,kind,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$subfn_$_subfn_STAR_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$subfn_$_subfn_STAR___2;
taoensso$encore$subfn_$_subfn_STAR_.cljs$core$IFn$_invoke$arity$3 = taoensso$encore$subfn_$_subfn_STAR___3;
taoensso$encore$subfn_$_subfn_STAR_.cljs$core$IFn$_invoke$arity$4 = taoensso$encore$subfn_$_subfn_STAR___4;
return taoensso$encore$subfn_$_subfn_STAR_;
})()
});
/**
 * Returns a non-empty sub-vector, or nil.
 *   Like `core/subvec` but:
 *  - Doesn't throw when out-of-bounds (clips to bounds).
 *  - Returns nil rather than an empty vector.
 *  - When given `:by-len` kind (4-arity case):
 *    - `start` may be -ive (=> index from right of vector).
 *    - `end`   is desired vector length, or `:max`.
 */
taoensso.encore.subvec = taoensso.encore.subfn(new cljs.core.Symbol("taoensso.encore","subvec","taoensso.encore/subvec",-995330198,null),cljs.core.subvec);
/**
 * Returns a non-empty sub-string, or nil.
 *   Like `subs` but:
 *  - Doesn't throw when out-of-bounds (clips to bounds).
 *  - Returns nil rather than an empty string.
 *  - When given `:by-len` kind (4-arity case):
 *    - `start` may be -ive (=> index from right of string).
 *    - `end`   is desired string length, or `:max`.
 */
taoensso.encore.substr = taoensso.encore.subfn(new cljs.core.Symbol("taoensso.encore","substr","taoensso.encore/substr",852382831,null),(function (s,n1,n2){
return s.substring(n1,n2);
}));
/**
 * Returns a `MapEntry` with given key and value.
 */
taoensso.encore.map_entry = (function taoensso$encore$map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
/**
 * Returns true iff given a `PersistentQueue`.
 */
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a new `PersistentQueue`.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__62619 = arguments.length;
switch (G__62619) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
}));

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(taoensso.encore.queue.cljs$lang$maxFixedArity = 1);

/**
 * Returns a new `PersistentQueue` given items.
 */
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___64947 = arguments.length;
var i__5750__auto___64948 = (0);
while(true){
if((i__5750__auto___64948 < len__5749__auto___64947)){
args__5755__auto__.push((arguments[i__5750__auto___64948]));

var G__64949 = (i__5750__auto___64948 + (1));
i__5750__auto___64948 = G__64949;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
}));

(taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq62645){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62645));
}));

taoensso.encore.ensure_vec = (function taoensso$encore$ensure_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
return cljs.core.vec(x);
}
});
taoensso.encore.ensure_set = (function taoensso$encore$ensure_set(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.set(x);
}
});
/**
 * Like `assoc` for JS objects.
 */
taoensso.encore.oset = (function taoensso$encore$oset(o,k,v){
return taoensso.encore.goog$module$goog$object.set((((o == null))?({}):o),cljs.core.name(k),v);
});
var sentinel_64950 = ({});
/**
 * Experimental, subject to change without notice.
 *     Like `assoc-in` for JS objects.
 */
taoensso.encore.oset_in = (function taoensso$encore$oset_in(o,ks,v){
var o__$1 = (((o == null))?({}):o);
var b2__30441__auto__ = cljs.core.seq(ks);
if(b2__30441__auto__){
var ks__$1 = b2__30441__auto__;
var o_next = o__$1;
var ks_next = ks__$1;
while(true){
var k1 = cljs.core.name(cljs.core.first(ks_next));
var o_next__$1 = (function (){var o_next_STAR_ = taoensso.encore.goog$module$goog$object.get(o_next,k1,sentinel_64950);
if((o_next_STAR_ === sentinel_64950)){
var new_obj = ({});
taoensso.encore.goog$module$goog$object.set(o_next,k1,new_obj);

return new_obj;
} else {
return o_next_STAR_;
}
})();
var b2__30441__auto____$1 = cljs.core.next(ks_next);
if(b2__30441__auto____$1){
var ks_next__$1 = b2__30441__auto____$1;
var G__64957 = o_next__$1;
var G__64958 = ks_next__$1;
o_next = G__64957;
ks_next = G__64958;
continue;
} else {
taoensso.encore.goog$module$goog$object.set(o_next__$1,k1,v);

return o__$1;
}
break;
}
} else {
return o__$1;
}
});
/**
 * Like `get` for JS objects.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__62667 = arguments.length;
switch (G__62667) {
case 1:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$1 = (function (k){
var b2__30441__auto__ = taoensso.encore.js__QMARK_window;
if(cljs.core.truth_(b2__30441__auto__)){
var o = b2__30441__auto__;
return taoensso.encore.goog$module$goog$object.get(o,cljs.core.name(k));
} else {
return null;
}
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return taoensso.encore.goog$module$goog$object.get(o,cljs.core.name(k),null);
} else {
return null;
}
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
if(cljs.core.truth_(o)){
return taoensso.encore.goog$module$goog$object.get(o,cljs.core.name(k),not_found);
} else {
return not_found;
}
}));

(taoensso.encore.oget.cljs$lang$maxFixedArity = 3);

var sentinel_64961 = ({});
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = (function taoensso$encore$oget_in(var_args){
var G__62672 = arguments.length;
switch (G__62672) {
case 1:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(taoensso.encore.js__QMARK_window,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = (function (o,ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = (function (o,ks,not_found){
if(cljs.core.truth_(o)){
var o__$1 = o;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var o__$2 = taoensso.encore.goog$module$goog$object.get(o__$1,cljs.core.name(cljs.core.first(ks__$1)),sentinel_64961);
if((o__$2 === sentinel_64961)){
return not_found;
} else {
var G__64969 = o__$2;
var G__64970 = cljs.core.next(ks__$1);
o__$1 = G__64969;
ks__$1 = G__64970;
continue;
}
} else {
return o__$1;
}
break;
}
} else {
return not_found;
}
}));

(taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3);

/**
 * Like `get` but returns val for first key that exists in map.
 *   Useful for key aliases or fallbacks. See also `get*`.
 */
taoensso.encore.get1 = (function taoensso$encore$get1(var_args){
var G__62681 = arguments.length;
switch (G__62681) {
case 2:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
}));

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$3 = (function (m,k,not_found){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,not_found);
}));

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$4 = (function (m,k1,k2,not_found){
var b2__30441__auto__ = (function (){var and__5023__auto__ = m;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto__ = cljs.core.find(m,k1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.find(m,k2);
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(b2__30441__auto__)){
var e = b2__30441__auto__;
return cljs.core.val(e);
} else {
return not_found;
}
}));

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$5 = (function (m,k1,k2,k3,not_found){
var b2__30441__auto__ = (function (){var and__5023__auto__ = m;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto__ = cljs.core.find(m,k1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.find(m,k2);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.find(m,k3);
}
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(b2__30441__auto__)){
var e = b2__30441__auto__;
return cljs.core.val(e);
} else {
return not_found;
}
}));

(taoensso.encore.get1.cljs$lang$maxFixedArity = 5);

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__62699 = arguments.length;
switch (G__62699) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___64980 = arguments.length;
var i__5750__auto___64981 = (0);
while(true){
if((i__5750__auto___64981 < len__5749__auto___64980)){
args_arr__5774__auto__.push((arguments[i__5750__auto___64981]));

var G__64982 = (i__5750__auto___64981 + (1));
i__5750__auto___64981 = G__64982;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq62692){
var G__62693 = cljs.core.first(seq62692);
var seq62692__$1 = cljs.core.next(seq62692);
var G__62694 = cljs.core.first(seq62692__$1);
var seq62692__$2 = cljs.core.next(seq62692__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62693,G__62694,seq62692__$2);
}));

(taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2));


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__62715 = arguments.length;
switch (G__62715) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65000 = arguments.length;
var i__5750__auto___65001 = (0);
while(true){
if((i__5750__auto___65001 < len__5749__auto___65000)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65001]));

var G__65002 = (i__5750__auto___65001 + (1));
i__5750__auto___65001 = G__65002;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_when,taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq62710){
var G__62711 = cljs.core.first(seq62710);
var seq62710__$1 = cljs.core.next(seq62710);
var G__62712 = cljs.core.first(seq62710__$1);
var seq62710__$2 = cljs.core.next(seq62710__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62711,G__62712,seq62710__$2);
}));

(taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2));

/**
 * Assocs each kv to given ?map iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__62728 = arguments.length;
switch (G__62728) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65004 = arguments.length;
var i__5750__auto___65005 = (0);
while(true){
if((i__5750__auto___65005 < len__5749__auto___65004)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65005]));

var G__65006 = (i__5750__auto___65005 + (1));
i__5750__auto___65005 = G__65006;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,m_kvs){
return cljs.core.reduce_kv(taoensso.encore.assoc_some,m,m_kvs);
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_some,taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq62724){
var G__62725 = cljs.core.first(seq62724);
var seq62724__$1 = cljs.core.next(seq62724);
var G__62726 = cljs.core.first(seq62724__$1);
var seq62724__$2 = cljs.core.next(seq62724__$1);
var G__62727 = cljs.core.first(seq62724__$2);
var seq62724__$3 = cljs.core.next(seq62724__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62725,G__62726,G__62727,seq62724__$3);
}));

(taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3));

/**
 * Assocs each kv to given ?map iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__62750 = arguments.length;
switch (G__62750) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65008 = arguments.length;
var i__5750__auto___65009 = (0);
while(true){
if((i__5750__auto___65009 < len__5749__auto___65008)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65009]));

var G__65010 = (i__5750__auto___65009 + (1));
i__5750__auto___65009 = G__65010;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,m_kvs){
return cljs.core.reduce_kv(taoensso.encore.assoc_when,m,m_kvs);
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_when,taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq62746){
var G__62747 = cljs.core.first(seq62746);
var seq62746__$1 = cljs.core.next(seq62746);
var G__62748 = cljs.core.first(seq62746__$1);
var seq62746__$2 = cljs.core.next(seq62746__$1);
var G__62749 = cljs.core.first(seq62746__$2);
var seq62746__$3 = cljs.core.next(seq62746__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62747,G__62748,G__62749,seq62746__$3);
}));

(taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3));

/**
 * Assocs each kv to given ?map iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var G__62768 = arguments.length;
switch (G__62768) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65012 = arguments.length;
var i__5750__auto___65013 = (0);
while(true){
if((i__5750__auto___65013 < len__5749__auto___65012)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65013]));

var G__65014 = (i__5750__auto___65013 + (1));
i__5750__auto___65013 = G__65014;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_(m,k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,m_kvs){
return cljs.core.reduce_kv(taoensso.encore.assoc_nx,m,m_kvs);
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq62764){
var G__62765 = cljs.core.first(seq62764);
var seq62764__$1 = cljs.core.next(seq62764);
var G__62766 = cljs.core.first(seq62764__$1);
var seq62764__$2 = cljs.core.next(seq62764__$1);
var G__62767 = cljs.core.first(seq62764__$2);
var seq62764__$3 = cljs.core.next(seq62764__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62765,G__62766,G__62767,seq62764__$3);
}));

(taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3));

/**
 * Assocs each kv to given ?map if its value is nil, otherwise dissocs it.
 */
taoensso.encore.reassoc_some = (function taoensso$encore$reassoc_some(var_args){
var G__62780 = arguments.length;
switch (G__62780) {
case 3:
return taoensso.encore.reassoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.reassoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65016 = arguments.length;
var i__5750__auto___65017 = (0);
while(true){
if((i__5750__auto___65017 < len__5749__auto___65016)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65017]));

var G__65018 = (i__5750__auto___65017 + (1));
i__5750__auto___65017 = G__65018;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.reassoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.reassoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.reassoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,m_kvs){
return cljs.core.reduce_kv(taoensso.encore.reassoc_some,m,m_kvs);
}));

(taoensso.encore.reassoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.reassoc_some,taoensso.encore.reassoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.reassoc_some.cljs$lang$applyTo = (function (seq62776){
var G__62777 = cljs.core.first(seq62776);
var seq62776__$1 = cljs.core.next(seq62776);
var G__62778 = cljs.core.first(seq62776__$1);
var seq62776__$2 = cljs.core.next(seq62776__$1);
var G__62779 = cljs.core.first(seq62776__$2);
var seq62776__$3 = cljs.core.next(seq62776__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62777,G__62778,G__62779,seq62776__$3);
}));

(taoensso.encore.reassoc_some.cljs$lang$maxFixedArity = (3));

/**
 * Assocs each kv to given ?map if its value is truthy, otherwise dissocs it.
 */
taoensso.encore.reassoc_when = (function taoensso$encore$reassoc_when(var_args){
var G__62793 = arguments.length;
switch (G__62793) {
case 3:
return taoensso.encore.reassoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.reassoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65021 = arguments.length;
var i__5750__auto___65022 = (0);
while(true){
if((i__5750__auto___65022 < len__5749__auto___65021)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65022]));

var G__65023 = (i__5750__auto___65022 + (1));
i__5750__auto___65022 = G__65023;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.reassoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.reassoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
}));

(taoensso.encore.reassoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,m_kvs){
return cljs.core.reduce_kv(taoensso.encore.reassoc_when,m,m_kvs);
}));

(taoensso.encore.reassoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.reassoc_when,taoensso.encore.reassoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.reassoc_when.cljs$lang$applyTo = (function (seq62789){
var G__62790 = cljs.core.first(seq62789);
var seq62789__$1 = cljs.core.next(seq62789);
var G__62791 = cljs.core.first(seq62789__$1);
var seq62789__$2 = cljs.core.next(seq62789__$1);
var G__62792 = cljs.core.first(seq62789__$2);
var seq62789__$3 = cljs.core.next(seq62789__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62790,G__62791,G__62792,seq62789__$3);
}));

(taoensso.encore.reassoc_when.cljs$lang$maxFixedArity = (3));

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__62798 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62798,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.not_empty_coll = (function taoensso$encore$not_empty_coll(x){
if(cljs.core.truth_(x)){
if(cljs.core.coll_QMARK_(x)){
return cljs.core.not_empty(x);
} else {
return x;
}
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(xs,f){
if(cljs.core.vector_QMARK_(xs)){
var vec__62805 = taoensso.encore.vsplit_last(xs);
var vn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62805,(0),null);
var vl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62805,(1),null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(vn,vl) : f.call(null,vn,vl));
} else {
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__62811 = xs__$1;
var seq__62812 = cljs.core.seq(vec__62811);
var first__62813 = cljs.core.first(seq__62812);
var seq__62812__$1 = cljs.core.next(seq__62812);
var x1 = first__62813;
var xn = seq__62812__$1;
if(xn){
var G__65029 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__65030 = xn;
butlast = G__65029;
xs__$1 = G__65030;
continue;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(butlast,x1) : f.call(null,butlast,x1));
}
break;
}
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
var or__5025__auto__ = taoensso.encore.subvec(coll,new cljs.core.Keyword(null,"by-len","by-len",587837753),(0),n);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return ((cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(taoensso.encore.ensure_set(x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65032 = arguments.length;
var i__5750__auto___65033 = (0);
while(true){
if((i__5750__auto___65033 < len__5749__auto___65032)){
args__5755__auto__.push((arguments[i__5750__auto___65033]));

var G__65034 = (i__5750__auto___65033 + (1));
i__5750__auto___65033 = G__65034;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,taoensso.encore.fsplit_last(args,(function (xs,lx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,taoensso.encore.seq_kvs(lx));
})));
}));

(taoensso.encore.mapply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.mapply.cljs$lang$applyTo = (function (seq62823){
var G__62824 = cljs.core.first(seq62823);
var seq62823__$1 = cljs.core.next(seq62823);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62824,seq62823__$1);
}));

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__62835 = arguments.length;
switch (G__62835) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65037 = arguments.length;
var i__5750__auto___65038 = (0);
while(true){
if((i__5750__auto___65038 < len__5749__auto___65037)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65038]));

var G__65039 = (i__5750__auto___65038 + (1));
i__5750__auto___65038 = G__65039;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
}));

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$(to),cljs.core.cons(from,more)));
}));

/** @this {Function} */
(taoensso.encore.into_all.cljs$lang$applyTo = (function (seq62832){
var G__62833 = cljs.core.first(seq62832);
var seq62832__$1 = cljs.core.next(seq62832);
var G__62834 = cljs.core.first(seq62832__$1);
var seq62832__$2 = cljs.core.next(seq62832__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62833,G__62834,seq62832__$2);
}));

(taoensso.encore.into_all.cljs$lang$maxFixedArity = (2));

taoensso.encore.min_transient_card = (11);
/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((((n >= (11)))?taoensso.encore.editable_QMARK_(coll):false)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),coll,n);
}
});
taoensso.encore.update_BANG_ = (function taoensso$encore$update_BANG_(m,k,f){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__62840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__62840) : f.call(null,G__62840));
})());
});
/**
 * Like `into` but assumes `to!` is a transient, and doesn't call
 *   `persist!` when done. Useful as a performance optimization in some cases.
 */
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__62842 = arguments.length;
switch (G__62842) {
case 1:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (to_BANG_){
return to_BANG_;
}));

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to_BANG_,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to_BANG_,from);
}));

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to_BANG_,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to_BANG_,from);
}));

(taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns a stateful transducer like (core/distinct) that supports an optional
 *   key function. Retains only items with distinct (keyfn <item>).
 */
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__62845 = arguments.length;
switch (G__62845) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
}));

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY));
return (function() {
var G__65042 = null;
var G__65042__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__65042__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__65042__2 = (function (acc,in$){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_),k)){
return acc;
} else {
seen_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen_.cljs$core$IDeref$_deref$arity$1(null),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
}
});
G__65042 = function(acc,in$){
switch(arguments.length){
case 0:
return G__65042__0.call(this);
case 1:
return G__65042__1.call(this,acc);
case 2:
return G__65042__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65042.cljs$core$IFn$_invoke$arity$0 = G__65042__0;
G__65042.cljs$core$IFn$_invoke$arity$1 = G__65042__1;
G__65042.cljs$core$IFn$_invoke$arity$2 = G__65042__2;
return G__65042;
})()
});
}));

(taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1);

/**
 * Returns given ?map with keys and vals inverted, dropping non-unique vals!
 */
taoensso.encore.invert_map = (function taoensso$encore$invert_map(m){
if(cljs.core.truth_(m)){
if((cljs.core.count(m) > (11))){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
} else {
return null;
}
});
/**
 * Like `invert-map` but throws on non-unique vals.
 */
taoensso.encore.invert_map_BANG_ = (function taoensso$encore$invert_map_BANG_(m){
var b2__30441__auto__ = taoensso.encore.invert_map(m);
if(cljs.core.truth_(b2__30441__auto__)){
var im = b2__30441__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(im),cljs.core.count(m))){
return im;
} else {
throw taoensso.truss.ex_info_STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1710,7], null),"[encore/invert-map!] Non-unique map vals",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),m,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(m)], null)], null),null);
}
} else {
return null;
}
});
/**
 * Returns given ?map with (key-fn <key>) keys.
 */
taoensso.encore.map_keys = (function taoensso$encore$map_keys(key_fn,m){
if(cljs.core.truth_(m)){
if((cljs.core.count(m) > (11))){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(k) : key_fn.call(null,k)),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(k) : key_fn.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
} else {
return null;
}
});
/**
 * Returns given ?map with (val-fn <val>) vals.
 */
taoensso.encore.map_vals = (function taoensso$encore$map_vals(val_fn,m){
if(cljs.core.truth_(m)){
if(((taoensso.encore.editable_QMARK_(m))?(cljs.core.count(m) >= (11)):false)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,k,(val_fn.cljs$core$IFn$_invoke$arity$1 ? val_fn.cljs$core$IFn$_invoke$arity$1(v) : val_fn.call(null,v)));
}),cljs.core.transient$(m),m));
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(val_fn.cljs$core$IFn$_invoke$arity$1 ? val_fn.cljs$core$IFn$_invoke$arity$1(v) : val_fn.call(null,v)));
}),m,m);
}
} else {
return null;
}
});
/**
 * Returns given ?map, retaining only keys for which (key-pred <key>) is truthy.
 */
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(key_pred,m){
if(cljs.core.truth_(m)){
if(((taoensso.encore.editable_QMARK_(m))?(cljs.core.count(m) >= (11)):false)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,_){
if(cljs.core.truth_((key_pred.cljs$core$IFn$_invoke$arity$1 ? key_pred.cljs$core$IFn$_invoke$arity$1(k) : key_pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),cljs.core.transient$(m),m));
} else {
return cljs.core.reduce_kv((function (m__$1,k,_){
if(cljs.core.truth_((key_pred.cljs$core$IFn$_invoke$arity$1 ? key_pred.cljs$core$IFn$_invoke$arity$1(k) : key_pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
} else {
return null;
}
});
/**
 * Returns given ?map, retaining only keys for which (val-pred <val>) is truthy.
 */
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(val_pred,m){
if(cljs.core.truth_(m)){
if(((taoensso.encore.editable_QMARK_(m))?(cljs.core.count(m) >= (11)):false)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((val_pred.cljs$core$IFn$_invoke$arity$1 ? val_pred.cljs$core$IFn$_invoke$arity$1(v) : val_pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),cljs.core.transient$(m),m));
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((val_pred.cljs$core$IFn$_invoke$arity$1 ? val_pred.cljs$core$IFn$_invoke$arity$1(v) : val_pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
} else {
return null;
}
});
/**
 * Returns given ?map, removing keys for which (key-pred <key>) is truthy.
 */
taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(key_pred,m){
return taoensso.encore.filter_keys(cljs.core.complement(key_pred),m);
});
/**
 * Returns given ?map, removing keys for which (val-pred <val>) is truthy.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(val_pred,m){
return taoensso.encore.filter_vals(cljs.core.complement(val_pred),m);
});
/**
 * Returns a map like the one given, replacing keys using
 *   given {<old-new> <new-key>} replacements. O(min(n_replacements, n_m)).
 */
taoensso.encore.rename_keys = (function taoensso$encore$rename_keys(replacements,m){
if(cljs.core.empty_QMARK_(m)){
return m;
} else {
if(cljs.core.empty_QMARK_(replacements)){
return m;
} else {
if((cljs.core.count(m) > cljs.core.count(replacements))){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,old_k,new_k){
var b2__30441__auto__ = cljs.core.find(m,old_k);
if(cljs.core.truth_(b2__30441__auto__)){
var e = b2__30441__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,old_k),new_k,cljs.core.val(e));
} else {
return acc;
}
}),cljs.core.transient$(m),replacements));
} else {
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,old_k,v){
var b2__30441__auto__ = cljs.core.find(replacements,old_k);
if(cljs.core.truth_(b2__30441__auto__)){
var e = b2__30441__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,old_k),cljs.core.val(e),v);
} else {
return acc;
}
}),cljs.core.transient$(m),m));
}
}
}
});
/**
 * Returns {(f x) x} ?map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
if(cljs.core.empty_QMARK_(coll)){
return null;
} else {
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),x);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
}
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((function (p1__62863_SHARP_){
return (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__62863_SHARP_) == null)));
}),ks);
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
var and__5023__auto__ = (cljs.core.count(m) === cljs.core.count(ks));
if(and__5023__auto__){
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((function (p1__62864_SHARP_){
return cljs.core.contains_QMARK_(m,p1__62864_SHARP_);
}),ks);
} else {
return and__5023__auto__;
}
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
var and__5023__auto__ = (cljs.core.count(m) >= cljs.core.count(ks));
if(and__5023__auto__){
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((function (p1__62865_SHARP_){
return cljs.core.contains_QMARK_(m,p1__62865_SHARP_);
}),ks);
} else {
return and__5023__auto__;
}
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
var counted_ks = ((cljs.core.counted_QMARK_(ks))?ks:cljs.core.set(ks));
var and__5023__auto__ = (cljs.core.count(m) <= cljs.core.count(counted_ks));
if(and__5023__auto__){
var ks_set = taoensso.encore.ensure_set(counted_ks);
return cljs.core.reduce_kv((function (_,k,v){
if(cljs.core.contains_QMARK_(ks_set,k)){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,m);
} else {
return and__5023__auto__;
}
});
/**
 * Like `core/update-in` but:.
 *  - Empty ks will return (f m), not act like [nil] ks.
 *  - Adds support for `not-found`.
 *  - Adds support for special return vals: `:update/dissoc`, `:update/abort`.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__62885 = arguments.length;
switch (G__62885) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,f);
}));

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
if(cljs.core.empty_QMARK_(ks)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
} else {
var old = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,not_found);
var new$ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old) : f.call(null,old));
var G__62893 = new$;
var G__62893__$1 = (((G__62893 instanceof cljs.core.Keyword))?G__62893.fqn:null);
switch (G__62893__$1) {
case "update/abort":
case "swap/abort":
return m;

break;
case "update/dissoc":
case "swap/dissoc":
return taoensso.encore.fsplit_last(ks,(function (ks__$1,lk){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks__$1,null,(function (v){
if(cljs.core.truth_(v)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,lk);
} else {
return new cljs.core.Keyword("update","abort","update/abort",-250474569);
}
}));
}));

break;
default:
return cljs.core.assoc_in(m,ks,new$);

}
}
}));

(taoensso.encore.update_in.cljs$lang$maxFixedArity = 4);

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var G__62909 = arguments.length;
switch (G__62909) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,ks),k);
}));

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.empty_QMARK_(ks)){
return false;
} else {
return taoensso.encore.fsplit_last(ks,(function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3(coll,ks__$1,lk);
}));
}
}));

(taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3);

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__62922 = arguments.length;
switch (G__62922) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65049 = arguments.length;
var i__5750__auto___65050 = (0);
while(true){
if((i__5750__auto___65050 < len__5749__auto___65049)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65050]));

var G__65051 = (i__5750__auto___65050 + (1));
i__5750__auto___65050 = G__65051;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
if(cljs.core.truth_(m__$1)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
} else {
return new cljs.core.Keyword("update","abort","update/abort",-250474569);
}
}));
}));

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
if(cljs.core.truth_(m__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k),more);
} else {
return new cljs.core.Keyword("update","abort","update/abort",-250474569);
}
}));
}));

/** @this {Function} */
(taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq62918){
var G__62919 = cljs.core.first(seq62918);
var seq62918__$1 = cljs.core.next(seq62918);
var G__62920 = cljs.core.first(seq62918__$1);
var seq62918__$2 = cljs.core.next(seq62918__$1);
var G__62921 = cljs.core.first(seq62918__$2);
var seq62918__$3 = cljs.core.next(seq62918__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62919,G__62920,G__62921,seq62918__$3);
}));

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
if(cljs.core.empty_QMARK_(m)){
return m;
} else {
return taoensso.encore.fsplit_last(ks,(function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m,ks__$1,lk);
}));
}
}));

(taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3));

/**
 * Private, don't use.
 */
taoensso.encore.node_paths = (function taoensso$encore$node_paths(var_args){
var G__62933 = arguments.length;
switch (G__62933) {
case 1:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$1 = (function (m){
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(cljs.core.associative_QMARK_,m,null);
}));

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$2 = (function (node_pred,m){
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,m,null);
}));

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3 = (function (node_pred,m,basis){
var basis__$1 = (function (){var or__5025__auto__ = basis;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((node_pred.cljs$core$IFn$_invoke$arity$1 ? node_pred.cljs$core$IFn$_invoke$arity$1(v) : node_pred.call(null,v)))){
var paths_from_basis = taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(basis__$1,k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,in$){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,in$);
}),acc,paths_from_basis);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(basis__$1,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),m));
}));

(taoensso.encore.node_paths.cljs$lang$maxFixedArity = 3);

/**
 * Like `interleave` but includes all items (i.e. stops when the longest
 *   rather than shortest coll has been consumed).
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__62938 = arguments.length;
switch (G__62938) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65054 = arguments.length;
var i__5750__auto___65055 = (0);
while(true){
if((i__5750__auto___65055 < len__5749__auto___65054)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65055]));

var G__65057 = (i__5750__auto___65055 + (1));
i__5750__auto___65055 = G__65057;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(((s1) && (s2))){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
}));

/** @this {Function} */
(taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq62935){
var G__62936 = cljs.core.first(seq62935);
var seq62935__$1 = cljs.core.next(seq62935);
var G__62937 = cljs.core.first(seq62935__$1);
var seq62935__$2 = cljs.core.next(seq62935__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62936,G__62937,seq62935__$2);
}));

(taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2));

/**
 * Like `interleave`, but:
 *  - Returns a vector rather than lazy seq (=> greedy).
 *  - Includes all items (i.e. stops when the longest rather than
 *    shortest coll has been consumed).
 * 
 *   Single-arity version takes a coll of colls.
 */
taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(var_args){
var G__62947 = arguments.length;
switch (G__62947) {
case 1:
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65064 = arguments.length;
var i__5750__auto___65066 = (0);
while(true){
if((i__5750__auto___65066 < len__5749__auto___65064)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65066]));

var G__65068 = (i__5750__auto___65066 + (1));
i__5750__auto___65066 = G__65068;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$1 = (function (colls){
if(cljs.core.empty_QMARK_(colls)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.persistent_BANG_(taoensso.encore.reduce_interleave_all(cljs.core.conj_BANG_,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),colls));
}
}));

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if(((s1) && (s2))){
var G__65076 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__65077 = cljs.core.next(s1);
var G__65078 = cljs.core.next(s2);
v = G__65076;
s1 = G__65077;
s2 = G__65078;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
}));

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$3 = (function (c1,c2,c3){
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
}));

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,c3,colls){
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null),colls));
}));

/** @this {Function} */
(taoensso.encore.vinterleave_all.cljs$lang$applyTo = (function (seq62943){
var G__62944 = cljs.core.first(seq62943);
var seq62943__$1 = cljs.core.next(seq62943);
var G__62945 = cljs.core.first(seq62943__$1);
var seq62943__$2 = cljs.core.next(seq62943__$1);
var G__62946 = cljs.core.first(seq62943__$2);
var seq62943__$3 = cljs.core.next(seq62943__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62944,G__62945,G__62946,seq62943__$3);
}));

(taoensso.encore.vinterleave_all.cljs$lang$maxFixedArity = (3));

taoensso.encore.p_BANG_ = (function taoensso$encore$p_BANG_(m){
if(taoensso.encore.transient_QMARK_(m)){
return cljs.core.persistent_BANG_(m);
} else {
return m;
}
});
var nx_65082 = ({});
var min_transient_card_65083 = (64);
var dissoc_QMARK__65084 = (function (v){
var G__62957 = v;
var G__62957__$1 = (((G__62957 instanceof cljs.core.Keyword))?G__62957.fqn:null);
switch (G__62957__$1) {
case "merge/dissoc":
case "swap/dissoc":
return true;

break;
default:
return false;

}
});
var dissoc_STAR__65085 = (function (m,k){
if(taoensso.encore.transient_QMARK_(m)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
/**
 * Private, don't use. Flexible low-level merge util.
 *  Optimized for reasonable worst-case performance.
 */
taoensso.encore.merge_with_STAR_ = (function taoensso$encore$merge_with_STAR_(var_args){
var G__62959 = arguments.length;
switch (G__62959) {
case 3:
return taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(taoensso.encore.merge_with_STAR_,nest_QMARK_,f),null,maps);
}));

(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (nest_QMARK_,f,m1,m2){
var n2 = cljs.core.count(m2);
if((n2 === (0))){
var or__5025__auto__ = m1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(taoensso.encore.can_meta_QMARK_(m2)){
return cljs.core.with_meta(m2,null);
} else {
return null;
}
}
} else {
var b2__30441__auto__ = cljs.core.find(m2,new cljs.core.Keyword("merge","replace?","merge/replace?",-914523787));
if(cljs.core.truth_(b2__30441__auto__)){
var e = b2__30441__auto__;
var m2__$1 = dissoc_STAR__65085(m2,new cljs.core.Keyword("merge","replace?","merge/replace?",-914523787));
if(cljs.core.truth_(cljs.core.val(e))){
return m2__$1;
} else {
return taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(nest_QMARK_,f,m1,m2__$1);
}
} else {
var n1 = cljs.core.count(m1);
if((n1 >= n2)){
var m1_STAR_ = ((taoensso.encore.transient_QMARK_(m1))?m1:(((n1 >= min_transient_card_65083))?cljs.core.transient$(m1):m1));
var assoc_STAR_ = ((taoensso.encore.transient_QMARK_(m1_STAR_))?cljs.core.assoc_BANG_:cljs.core.assoc);
return cljs.core.reduce_kv((function (m1_STAR___$1,k2,v2){
var v1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m1,k2,nx_65082);
if(cljs.core.truth_((function (){var and__5023__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.map_QMARK_(v1)) && (cljs.core.map_QMARK_(v2)));
} else {
return and__5023__auto__;
}
})())){
var G__62968 = m1_STAR___$1;
var G__62969 = k2;
var G__62970 = taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,f,v1,v2));
return (assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_STAR_.cljs$core$IFn$_invoke$arity$3(G__62968,G__62969,G__62970) : assoc_STAR_.call(null,G__62968,G__62969,G__62970));
} else {
if((v1 === nx_65082)){
return (assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_STAR_.cljs$core$IFn$_invoke$arity$3(m1_STAR___$1,k2,v2) : assoc_STAR_.call(null,m1_STAR___$1,k2,v2));
} else {
if(cljs.core.truth_(dissoc_QMARK__65084(v2))){
return dissoc_STAR__65085(m1_STAR___$1,k2);
} else {
if(cljs.core.truth_(f)){
var v3 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v1,v2) : f.call(null,v1,v2));
if(cljs.core.truth_(dissoc_QMARK__65084(v3))){
return dissoc_STAR__65085(m1_STAR___$1,k2);
} else {
return (assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_STAR_.cljs$core$IFn$_invoke$arity$3(m1_STAR___$1,k2,v3) : assoc_STAR_.call(null,m1_STAR___$1,k2,v3));
}
} else {
return (assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_STAR_.cljs$core$IFn$_invoke$arity$3(m1_STAR___$1,k2,v2) : assoc_STAR_.call(null,m1_STAR___$1,k2,v2));
}
}
}
}
}),m1_STAR_,taoensso.encore.p_BANG_(m2));
} else {
var m2_STAR_ = ((taoensso.encore.transient_QMARK_(m2))?m2:(function (){var m2__$1 = cljs.core.with_meta(m2,cljs.core.meta(m1));
if((n2 >= min_transient_card_65083)){
return cljs.core.transient$(m2__$1);
} else {
return m2__$1;
}
})());
var assoc_STAR_ = ((taoensso.encore.transient_QMARK_(m2_STAR_))?cljs.core.assoc_BANG_:cljs.core.assoc);
return cljs.core.reduce_kv((function (m2_STAR___$1,k1,v1){
var v2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m2,k1,nx_65082);
if(cljs.core.truth_((function (){var and__5023__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.map_QMARK_(v1)) && (cljs.core.map_QMARK_(v2)));
} else {
return and__5023__auto__;
}
})())){
var G__62977 = m2_STAR___$1;
var G__62978 = k1;
var G__62979 = taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,f,v1,v2));
return (assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_STAR_.cljs$core$IFn$_invoke$arity$3(G__62977,G__62978,G__62979) : assoc_STAR_.call(null,G__62977,G__62978,G__62979));
} else {
if((v2 === nx_65082)){
return (assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_STAR_.cljs$core$IFn$_invoke$arity$3(m2_STAR___$1,k1,v1) : assoc_STAR_.call(null,m2_STAR___$1,k1,v1));
} else {
if(cljs.core.truth_(dissoc_QMARK__65084(v2))){
return dissoc_STAR__65085(m2_STAR___$1,k1);
} else {
if(cljs.core.truth_(f)){
var v3 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v1,v2) : f.call(null,v1,v2));
if(cljs.core.truth_(dissoc_QMARK__65084(v3))){
return dissoc_STAR__65085(m2_STAR___$1,k1);
} else {
return (assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_STAR_.cljs$core$IFn$_invoke$arity$3(m2_STAR___$1,k1,v3) : assoc_STAR_.call(null,m2_STAR___$1,k1,v3));
}
} else {
return m2_STAR___$1;
}
}
}
}
}),m2_STAR_,taoensso.encore.p_BANG_(m1));
}
}
}
}));

(taoensso.encore.merge_with_STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Like `core/merge` but:
 *  - Supports `:merge/dissoc` vals.
 *  - Often faster, with much better worst-case performance.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var G__62992 = arguments.length;
switch (G__62992) {
case 0:
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65094 = arguments.length;
var i__5750__auto___65095 = (0);
while(true){
if((i__5750__auto___65095 < len__5749__auto___65094)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65095]));

var G__65096 = (i__5750__auto___65095 + (1));
i__5750__auto___65095 = G__65096;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return taoensso.encore.p_BANG_(m1);
}));

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,null,m1,m2));
}));

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$3 = (function (m1,m2,m3){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,null,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,null,m1,m2),m3));
}));

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,m3,more){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$3(false,null,cljs.core.cons(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,null,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,null,m1,m2),m3),more)));
}));

/** @this {Function} */
(taoensso.encore.merge.cljs$lang$applyTo = (function (seq62987){
var G__62988 = cljs.core.first(seq62987);
var seq62987__$1 = cljs.core.next(seq62987);
var G__62989 = cljs.core.first(seq62987__$1);
var seq62987__$2 = cljs.core.next(seq62987__$1);
var G__62990 = cljs.core.first(seq62987__$2);
var seq62987__$3 = cljs.core.next(seq62987__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62988,G__62989,G__62990,seq62987__$3);
}));

(taoensso.encore.merge.cljs$lang$maxFixedArity = (3));

/**
 * Like `core/merge` but:
 *  - Recursively merges nested maps.
 *  - Supports `:merge/dissoc` vals.
 *  - Often faster, with much better worst-case performance.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var G__63016 = arguments.length;
switch (G__63016) {
case 0:
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65100 = arguments.length;
var i__5750__auto___65101 = (0);
while(true){
if((i__5750__auto___65101 < len__5749__auto___65100)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65101]));

var G__65102 = (i__5750__auto___65101 + (1));
i__5750__auto___65101 = G__65102;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return taoensso.encore.p_BANG_(m1);
}));

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,null,m1,m2));
}));

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$3 = (function (m1,m2,m3){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,null,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,null,m1,m2),m3));
}));

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,m3,more){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$3(true,null,cljs.core.cons(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,null,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,null,m1,m2),m3),more)));
}));

/** @this {Function} */
(taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq63012){
var G__63013 = cljs.core.first(seq63012);
var seq63012__$1 = cljs.core.next(seq63012);
var G__63014 = cljs.core.first(seq63012__$1);
var seq63012__$2 = cljs.core.next(seq63012__$1);
var G__63015 = cljs.core.first(seq63012__$2);
var seq63012__$3 = cljs.core.next(seq63012__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63013,G__63014,G__63015,seq63012__$3);
}));

(taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (3));

/**
 * Like `core/merge-with` but:
 *  - Supports `:merge/dissoc` vals.
 *  - Often faster, with much better worst-case performance.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var G__63038 = arguments.length;
switch (G__63038) {
case 1:
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65113 = arguments.length;
var i__5750__auto___65114 = (0);
while(true){
if((i__5750__auto___65114 < len__5749__auto___65113)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65114]));

var G__65115 = (i__5750__auto___65114 + (1));
i__5750__auto___65114 = G__65115;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((4) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((4)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5775__auto__);

}
});

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$1 = (function (f){
return null;
}));

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$2 = (function (f,m1){
return taoensso.encore.p_BANG_(m1);
}));

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$3 = (function (f,m1,m2){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,f,m1,m2));
}));

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$4 = (function (f,m1,m2,m3){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,f,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,f,m1,m2),m3));
}));

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,m1,m2,m3,more){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$3(false,f,cljs.core.cons(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,f,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,f,m1,m2),m3),more)));
}));

/** @this {Function} */
(taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq63033){
var G__63034 = cljs.core.first(seq63033);
var seq63033__$1 = cljs.core.next(seq63033);
var G__63035 = cljs.core.first(seq63033__$1);
var seq63033__$2 = cljs.core.next(seq63033__$1);
var G__63036 = cljs.core.first(seq63033__$2);
var seq63033__$3 = cljs.core.next(seq63033__$2);
var G__63037 = cljs.core.first(seq63033__$3);
var seq63033__$4 = cljs.core.next(seq63033__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63034,G__63035,G__63036,G__63037,seq63033__$4);
}));

(taoensso.encore.merge_with.cljs$lang$maxFixedArity = (4));

/**
 * Like `core/merge-with` but:
 *  - Recursively merges nested maps.
 *  - Supports `:merge/dissoc` vals.
 *  - Often faster, with much better worst-case performance.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var G__63071 = arguments.length;
switch (G__63071) {
case 1:
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65119 = arguments.length;
var i__5750__auto___65120 = (0);
while(true){
if((i__5750__auto___65120 < len__5749__auto___65119)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65120]));

var G__65121 = (i__5750__auto___65120 + (1));
i__5750__auto___65120 = G__65121;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((4) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((4)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5775__auto__);

}
});

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$1 = (function (f){
return null;
}));

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$2 = (function (f,m1){
return taoensso.encore.p_BANG_(m1);
}));

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$3 = (function (f,m1,m2){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,f,m1,m2));
}));

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$4 = (function (f,m1,m2,m3){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,f,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,f,m1,m2),m3));
}));

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,m1,m2,m3,more){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$3(true,f,cljs.core.cons(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,f,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,f,m1,m2),m3),more)));
}));

/** @this {Function} */
(taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq63066){
var G__63067 = cljs.core.first(seq63066);
var seq63066__$1 = cljs.core.next(seq63066);
var G__63068 = cljs.core.first(seq63066__$1);
var seq63066__$2 = cljs.core.next(seq63066__$1);
var G__63069 = cljs.core.first(seq63066__$2);
var seq63066__$3 = cljs.core.next(seq63066__$2);
var G__63070 = cljs.core.first(seq63066__$3);
var seq63066__$4 = cljs.core.next(seq63066__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63067,G__63068,G__63069,G__63070,seq63066__$4);
}));

(taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (4));

var mf_65124 = (function (x,y){
return x;
});
/**
 * Like `core/merge` but:
 *    - Preserves existing values, e.g. (merge-nx <user-opts> <defaults>).
 *    - Supports `:merge/dissoc` vals.
 *    - Often faster, with much better worst-case performance.
 */
taoensso.encore.merge_nx = (function taoensso$encore$merge_nx(var_args){
var G__63086 = arguments.length;
switch (G__63086) {
case 0:
return taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65127 = arguments.length;
var i__5750__auto___65128 = (0);
while(true){
if((i__5750__auto___65128 < len__5749__auto___65127)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65128]));

var G__65130 = (i__5750__auto___65128 + (1));
i__5750__auto___65128 = G__65130;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return taoensso.encore.p_BANG_(m1);
}));

(taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,mf_65124,m1,m2));
}));

(taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$3 = (function (m1,m2,m3){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,mf_65124,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,mf_65124,m1,m2),m3));
}));

(taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,m3,more){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$3(false,mf_65124,cljs.core.cons(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,mf_65124,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,mf_65124,m1,m2),m3),more)));
}));

/** @this {Function} */
(taoensso.encore.merge_nx.cljs$lang$applyTo = (function (seq63082){
var G__63083 = cljs.core.first(seq63082);
var seq63082__$1 = cljs.core.next(seq63082);
var G__63084 = cljs.core.first(seq63082__$1);
var seq63082__$2 = cljs.core.next(seq63082__$1);
var G__63085 = cljs.core.first(seq63082__$2);
var seq63082__$3 = cljs.core.next(seq63082__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63083,G__63084,G__63085,seq63082__$3);
}));

(taoensso.encore.merge_nx.cljs$lang$maxFixedArity = (3));

/**
 * Returns true iff `sub-map` is a (possibly nested) submap of `super-map`,
 *   i.e. iff every (nested) value in `sub-map` has the same (nested) value in `super-map`.
 * 
 *   `sub-map` may contain special values:
 *  `:submap/nx`     - Matches iff `super-map` does not contain key
 *  `:submap/ex`     - Matches iff `super-map` does     contain key (any     val)
 *  `:submap/some`   - Matches iff `super-map` does     contain key (non-nil val)
 *  (fn [super-val]) - Matches iff given unary predicate returns truthy
 * 
 *   Uses stack recursion so supports only limited nesting.
 */
taoensso.encore.submap_QMARK_ = taoensso.truss.submap_QMARK_;
/**
 * Experimental, subject to change without notice.
 *   Returns true iff `sub_i` is a (possibly nested) submap of `m_i`.
 *   Uses `submap?`.
 */
taoensso.encore.submaps_QMARK_ = (function taoensso$encore$submaps_QMARK_(maps,subs){
if((cljs.core.count(subs) > cljs.core.count(maps))){
return false;
} else {
return taoensso.encore.reduce_zip.cljs$core$IFn$_invoke$arity$5((function (acc,m,sub){
var or__5025__auto__ = (taoensso.encore.submap_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.submap_QMARK_.cljs$core$IFn$_invoke$arity$2(m,sub) : taoensso.encore.submap_QMARK_.call(null,m,sub));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.reduced(false);
}
}),true,maps,subs,null);
}
});
/**
 * Like `select-keys` but supports nested key spec:
 * 
 *  (select-nested-keys
 *    {:a :A :b :B :c {:c1 :C1 :c2 :C2} :d :D} ; `src-map`
 *    [:a {:c [:c1], :d [:d1 :d2]}]) ; `key-spec`
 * 
 *    => {:a :A, :c {:c1 :C1}, :d :D}
 * 
 *   Note that as with the `{:d [:d1 :d2]}` spec in the example above,
 *   if spec expects a nested map but the actual value is not a map,
 *   the actual value will be included in output as-is.
 * 
 *   Has the same behaviour as `select-keys` when `key-spec` is a
 *   simple vector of keys.
 */
taoensso.encore.select_nested_keys = (function taoensso$encore$select_nested_keys(src_map,key_spec){
if(((cljs.core.empty_QMARK_(src_map)) || (cljs.core.empty_QMARK_(key_spec)))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$select_nested_keys_$_rf(acc,spec_in){
if(cljs.core.map_QMARK_(spec_in)){
return cljs.core.reduce_kv((function (acc__$1,k,nested_spec_in){
if(cljs.core.contains_QMARK_(src_map,k)){
var src_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(src_map,k);
if(cljs.core.map_QMARK_(src_val)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,k,(taoensso.encore.select_nested_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.select_nested_keys.cljs$core$IFn$_invoke$arity$2(src_val,nested_spec_in) : taoensso.encore.select_nested_keys.call(null,src_val,nested_spec_in)));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,k,src_val);
}
} else {
return acc__$1;
}
}),acc,spec_in);
} else {
var k = spec_in;
if(cljs.core.contains_QMARK_(src_map,k)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(src_map,k));
} else {
return acc;
}
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),key_spec));
}
});
/**
 * Private, don't use.
 */
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
/**
 * Private, don't use.
 */
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__63119 = arguments.length;
switch (G__63119) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
}));

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq(ks)){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,acc,taoensso.encore.explode_keyword(in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2);

/**
 * Private, don't use.
 */
taoensso.encore.get_ctor = (function taoensso$encore$get_ctor(name){
if((typeof globalThis !== 'undefined')){
return (globalThis[name]);
} else {
return null;
}
});
var encoder_65143 = (function (){var b2__30441__auto__ = taoensso.encore.get_ctor("TextEncoder");
if(cljs.core.truth_(b2__30441__auto__)){
var ctor = b2__30441__auto__;
return (new ctor());
} else {
return null;
}
})();
/**
 * Returns UTF-8 encoded Uint8Array for given string.
 */
taoensso.encore.str__GT_utf8_ba = (cljs.core.truth_(encoder_65143)?(function (s){
return encoder_65143.encode(s);
}):(function (_){
throw taoensso.truss.ex_info_STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2146,20], null),"`js/TextEncoder` not available",null,null);
}));

var decoder_65146 = (function (){var b2__30441__auto__ = taoensso.encore.get_ctor("TextDecoder");
if(cljs.core.truth_(b2__30441__auto__)){
var ctor = b2__30441__auto__;
return (new ctor("utf-8"));
} else {
return null;
}
})();
/**
 * Returns string for given UTF-8 encoded Uint8Array.
 */
taoensso.encore.utf8_ba__GT_str = (cljs.core.truth_(decoder_65146)?(function (u8s){
return decoder_65146.decode(u8s);
}):(function (_){
throw taoensso.truss.ex_info_STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2153,20], null),"`js/TextDecoder` not available",null,null);
}));
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var G__63145 = arguments.length;
switch (G__63145) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (Math.abs((x - y)) < 0.001);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return (Math.abs((x - y)) < signf);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3);

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.clamp_int = (function taoensso$encore$clamp_int(nmin,nmax,n){
var nmin__$1 = cljs.core.long$(nmin);
var nmax__$1 = cljs.core.long$(nmax);
var n__$1 = cljs.core.long$(n);
if((n__$1 < nmin__$1)){
return nmin__$1;
} else {
if((n__$1 > nmax__$1)){
return nmax__$1;
} else {
return n__$1;
}
}
});
taoensso.encore.clamp_float = (function taoensso$encore$clamp_float(nmin,nmax,n){
var nmin__$1 = nmin;
var nmax__$1 = nmax;
var n__$1 = n;
if((n__$1 < nmin__$1)){
return nmin__$1;
} else {
if((n__$1 > nmax__$1)){
return nmax__$1;
} else {
return n__$1;
}
}
});
taoensso.encore.pnum_complement = (function taoensso$encore$pnum_complement(pnum){
return (1.0 - pnum);
});
taoensso.encore.as_pnum_complement = (function taoensso$encore$as_pnum_complement(x){
return (1.0 - taoensso.encore.as_pnum(x));
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
/**
 * General purpose rounding util.
 *   Returns given number `n` rounded according to given options:
 *  - `kind`      - ∈ #{:round :floor :ceil :trunc}     (default `:round`)
 *  - `precision` - Number of decimal places to include (default `nil` => none)
 */
taoensso.encore.round = (function taoensso$encore$round(var_args){
var G__63188 = arguments.length;
switch (G__63188) {
case 1:
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.round.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"round","round",2009433328),null,n);
}));

(taoensso.encore.round.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if((a2 instanceof cljs.core.Keyword)){
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$3(a2,null,a1);
} else {
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$3(a1,null,a2);
}
}));

(taoensso.encore.round.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if((a2 instanceof cljs.core.Keyword)){
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$3(a2,a3,a1);
} else {
var n = a3;
var modifier = (cljs.core.truth_(a2)?Math.pow(10.0,a2):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n * modifier):n);
var rounded = (function (){var kind = a1;
var G__63200 = kind;
var G__63200__$1 = (((G__63200 instanceof cljs.core.Keyword))?G__63200.fqn:null);
switch (G__63200__$1) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
return taoensso.truss.unexpected_arg_BANG__STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2306,16], null),kind,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","round","taoensso.encore/round",716371329,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ceil","ceil",-1824929952),null,new cljs.core.Keyword(null,"trunc","trunc",-256146097),null,new cljs.core.Keyword(null,"round","round",2009433328),null,new cljs.core.Keyword(null,"floor","floor",1882041021),null], null), null)], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
}
}));

(taoensso.encore.round.cljs$lang$maxFixedArity = 3);

taoensso.encore.perc = (function taoensso$encore$perc(n,divisor){
return Math.round(((n / divisor) * 100.0));
});

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});

taoensso.encore.round3 = (function taoensso$encore$round3(n){
return (Math.round((n * 1000.0)) / 1000.0);
});

taoensso.encore.round4 = (function taoensso$encore$round4(n){
return (Math.round((n * 10000.0)) / 10000.0);
});

taoensso.encore.roundn = (function taoensso$encore$roundn(precision,n){
var p = Math.pow(10.0,cljs.core.long$(precision));
return (Math.round((n * p)) / p);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__63224 = arguments.length;
switch (G__63224) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
}));

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__63229){
var map__63232 = p__63229;
var map__63232__$1 = cljs.core.__destructure_map(map__63232);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63232__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63232__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63232__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
}));

(taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2);

/**
 * Returns true with given probability ∈ ℝ[0,1].
 */
taoensso.encore.chance = (function taoensso$encore$chance(prob){
return (Math.random() < prob);
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta(x,taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(x),m));
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
/**
 * Returns true iff given args are equal AND non-nil.
 */
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__63248 = arguments.length;
switch (G__63248) {
case 1:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65154 = arguments.length;
var i__5750__auto___65155 = (0);
while(true){
if((i__5750__auto___65155 < len__5749__auto___65154)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65155]));

var G__65156 = (i__5750__auto___65155 + (1));
i__5750__auto___65155 = G__65156;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (!((x == null)));
}));

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (((!((x == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)));
}));

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__5023__auto__ = (!((x == null)));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__5023__auto____$1){
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((function (p1__63237_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__63237_SHARP_,x);
}),more);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}));

/** @this {Function} */
(taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq63244){
var G__63245 = cljs.core.first(seq63244);
var seq63244__$1 = cljs.core.next(seq63244);
var G__63246 = cljs.core.first(seq63244__$1);
var seq63244__$2 = cljs.core.next(seq63244__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63245,G__63246,seq63244__$2);
}));

(taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__63260 = arguments.length;
switch (G__63260) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65160 = arguments.length;
var i__5750__auto___65161 = (0);
while(true){
if((i__5750__auto___65161 < len__5749__auto___65160)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65161]));

var G__65162 = (i__5750__auto___65161 + (1));
i__5750__auto___65161 = G__65162;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
}));

/** @this {Function} */
(taoensso.encore.nnil.cljs$lang$applyTo = (function (seq63256){
var G__63257 = cljs.core.first(seq63256);
var seq63256__$1 = cljs.core.next(seq63256);
var G__63258 = cljs.core.first(seq63256__$1);
var seq63256__$2 = cljs.core.next(seq63256__$1);
var G__63259 = cljs.core.first(seq63256__$2);
var seq63256__$3 = cljs.core.next(seq63256__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63257,G__63258,G__63259,seq63256__$3);
}));

(taoensso.encore.nnil.cljs$lang$maxFixedArity = (3));

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__63272 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63272,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63272,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var b2__30441__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__30441__auto__)){
var s = b2__30441__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var b2__30441__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__30441__auto__)){
var s = b2__30441__auto__;
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * Is `clojure.core.async` present (not necessarily loaded)?
 */
taoensso.encore.have_core_async_QMARK_ = true;
/**
 * Returns true iff given platform instant (`java.time.Instant` or `js/Date`).
 */
taoensso.encore.inst_QMARK_ = (function taoensso$encore$inst_QMARK_(x){
return (x instanceof Date);
});
/**
 * Returns current system instant as `js/Date`.
 */
taoensso.encore.now_inst = (function taoensso$encore$now_inst(){
return (new Date());
});

/**
 * Returns current system instant as `js/Date`.
 */
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

/**
 * Returns current system insant as milliseconds since Unix epoch.
 */
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return Date.now();
});

/**
 * Returns current value of best-resolution time source as nanoseconds.
 */
taoensso.encore.now_nano = (function (){var b2__30441__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_window,"performance");
if(cljs.core.truth_(b2__30441__auto__)){
var perf = b2__30441__auto__;
var b2__30441__auto____$1 = (function (){var or__5025__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__30441__auto____$1)){
var pf = b2__30441__auto____$1;
return (function (){
return Math.floor((1000000.0 * pf.call(perf)));
});
} else {
return (function (){
return (1000000.0 * Date.now());
});
}
} else {
return (function (){
return (1000000.0 * Date.now());
});
}
})();

/**
 * Returns given `js/Date` as milliseconds since Unix epoch.
 */
taoensso.encore.inst__GT_udt = (function taoensso$encore$inst__GT_udt(inst){
return inst.getTime();
});

/**
 * Returns given milliseconds since Unix epoch as `js/Date`.
 */
taoensso.encore.udt__GT_inst = (function taoensso$encore$udt__GT_inst(msecs_since_epoch){
return (new Date(msecs_since_epoch));
});
taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return taoensso.encore.int_QMARK_(x);
});
/**
 * Returns given ?arg as platform instant (`java.time.Instant` or `js/Date`), or nil.
 */
taoensso.encore.as__QMARK_inst = (function taoensso$encore$as__QMARK_inst(x){
if((x instanceof Date)){
return x;
} else {
if(typeof x === 'number'){
return (new Date(x));
} else {
if(typeof x === 'string'){
var x__$1 = (new Date(x));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
/**
 * Returns given ?arg as (pos/neg) milliseconds since Unix epoch, or nil.
 */
taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
if((x instanceof Date)){
return x.getTime();
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var or__5025__auto__ = taoensso.encore.parse_js_int(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var x__$1 = Date.parse(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
}
} else {
return null;
}
}
}
});
taoensso.encore.as_inst = (function taoensso$encore$as_inst(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_inst(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"inst","inst",645962501),x);
}
});
taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});
/**
 * Experimental, subject to change without notice.
 * 
 *   Returns a (fn format [instant]) that:
 *  - Takes a platform instant (`java.time.Instant` or `js/Date`).
 *  - Returns a formatted human-readable instant string.
 * 
 *   Options:
 *  `:formatter`
 *    Clj:  `java.time.format.DateTimeFormatter`
 *    Cljs: `goog.i18n.DateTimeFormat`
 * 
 *    Defaults to `ISO8601` formatter (`YYYY-MM-DDTHH:mm:ss.sssZ`),
 *    e.g.: "2011-12-03T10:15:130Z".
 * 
 *  `:zone` (Clj only) `java.time.ZoneOffset` (defaults to UTC).
 *   Note that zone may be ignored by some `DateTimeFormatter`s,
 *   including the default (`DateTimeFormatter/ISO_INSTANT`)!
 */
taoensso.encore.format_inst_fn = (function taoensso$encore$format_inst_fn(var_args){
var G__63335 = arguments.length;
switch (G__63335) {
case 0:
return taoensso.encore.format_inst_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.format_inst_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.format_inst_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.format_inst_fn.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.encore.format_inst_fn.cljs$core$IFn$_invoke$arity$1 = (function (p__63341){
var map__63342 = p__63341;
var map__63342__$1 = cljs.core.__destructure_map(map__63342);
var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63342__$1,new cljs.core.Keyword(null,"formatter","formatter",-483008823));
if(cljs.core.truth_(formatter)){
return (function taoensso$encore$format_instant(instant){
return formatter.format(instant);
});
} else {
return (function taoensso$encore$format_instant(instant){
return instant.toISOString();
});
}
}));

(taoensso.encore.format_inst_fn.cljs$lang$maxFixedArity = 1);

var default_fn_65166 = taoensso.encore.format_inst_fn.cljs$core$IFn$_invoke$arity$0();
/**
 * Takes a platform instant (`java.time.Instant` or `js/Date`) and
 *  returns a formatted human-readable string in `ISO8601` format
 *  (`YYYY-MM-DDTHH:mm:ss.sssZ`), e.g. "2011-12-03T10:15:130Z".
 */
taoensso.encore.format_inst = (function taoensso$encore$format_inst(inst){
return (default_fn_65166.cljs$core$IFn$_invoke$arity$1 ? default_fn_65166.cljs$core$IFn$_invoke$arity$1(inst) : default_fn_65166.call(null,inst));
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var G__63392 = arguments.length;
switch (G__63392) {
case 1:
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65170 = arguments.length;
var i__5750__auto___65171 = (0);
while(true){
if((i__5750__auto___65171 < len__5749__auto___65170)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65171]));

var G__65173 = (i__5750__auto___65171 + (1));
i__5750__auto___65171 = G__65173;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((4) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((4)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5775__auto__);

}
});

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1 = (function (p__63397){
var map__63398 = p__63397;
var map__63398__$1 = cljs.core.__destructure_map(map__63398);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
return taoensso.encore.round0((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
}));

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2 = (function (k1,v1){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1]));
}));

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$4 = (function (k1,v1,k2,v2){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]));
}));

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (k1,v1,k2,v2,more){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(taoensso.encore.reduce_kvs(cljs.core.assoc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]),more));
}));

/** @this {Function} */
(taoensso.encore.ms.cljs$lang$applyTo = (function (seq63387){
var G__63388 = cljs.core.first(seq63387);
var seq63387__$1 = cljs.core.next(seq63387);
var G__63389 = cljs.core.first(seq63387__$1);
var seq63387__$2 = cljs.core.next(seq63387__$1);
var G__63390 = cljs.core.first(seq63387__$2);
var seq63387__$3 = cljs.core.next(seq63387__$2);
var G__63391 = cljs.core.first(seq63387__$3);
var seq63387__$4 = cljs.core.next(seq63387__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63388,G__63389,G__63390,G__63391,seq63387__$4);
}));

(taoensso.encore.ms.cljs$lang$maxFixedArity = (4));

/**
 * Returns ~number of seconds in period defined by given args.
 */
taoensso.encore.secs = (function taoensso$encore$secs(var_args){
var G__63432 = arguments.length;
switch (G__63432) {
case 1:
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65183 = arguments.length;
var i__5750__auto___65184 = (0);
while(true){
if((i__5750__auto___65184 < len__5749__auto___65183)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65184]));

var G__65185 = (i__5750__auto___65184 + (1));
i__5750__auto___65184 = G__65185;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((4) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((4)),(0),null)):null);
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5775__auto__);

}
});

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return taoensso.encore.ms__GT_secs(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(opts));
}));

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$2 = (function (k1,v1){
return taoensso.encore.ms__GT_secs(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1])));
}));

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$4 = (function (k1,v1,k2,v2){
return taoensso.encore.ms__GT_secs(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2])));
}));

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$variadic = (function (k1,v1,k2,v2,more){
return taoensso.encore.ms__GT_secs(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(taoensso.encore.reduce_kvs(cljs.core.assoc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]),more)));
}));

/** @this {Function} */
(taoensso.encore.secs.cljs$lang$applyTo = (function (seq63425){
var G__63427 = cljs.core.first(seq63425);
var seq63425__$1 = cljs.core.next(seq63425);
var G__63428 = cljs.core.first(seq63425__$1);
var seq63425__$2 = cljs.core.next(seq63425__$1);
var G__63429 = cljs.core.first(seq63425__$2);
var seq63425__$3 = cljs.core.next(seq63425__$2);
var G__63430 = cljs.core.first(seq63425__$3);
var seq63425__$4 = cljs.core.next(seq63425__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63427,G__63428,G__63429,G__63430,seq63425__$4);
}));

(taoensso.encore.secs.cljs$lang$maxFixedArity = (4));

/**
 * Example UTF-8 string for tests, etc.
 */
taoensso.encore.a_utf8_str = "Hi \u0CAC\u0CBE \u0C87\u0CB2\u0CCD\u0CB2\u0CBF \u0CB8\u0C82\u0CAD\u0CB5\u0CBF\u0CB8 10";
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * Returns a new stateful string builder:
 *  - `java.lang.StringBuilder`  for Clj
 *  - `goog.string.StringBuffer` for Cljs
 * 
 *   See also `sb-append`.
 */
taoensso.encore.str_builder = (function taoensso$encore$str_builder(var_args){
var G__63461 = arguments.length;
switch (G__63461) {
case 0:
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new goog.string.StringBuffer());
}));

(taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1 = (function (init){
if((init instanceof goog.string.StringBuffer)){
return init;
} else {
return (new goog.string.StringBuffer(cljs.core.str.cljs$core$IFn$_invoke$arity$1(init)));
}
}));

(taoensso.encore.str_builder.cljs$lang$maxFixedArity = 1);

/**
 * Returns given string builder's current length (character count).
 */
taoensso.encore.sb_length = (function taoensso$encore$sb_length(sb){
return sb.getLength();
});
/**
 * Appends given string/s to given string builder. See also `str-builder.`
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__63466 = arguments.length;
switch (G__63466) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___65188 = arguments.length;
var i__5750__auto___65189 = (0);
while(true){
if((i__5750__auto___65189 < len__5749__auto___65188)){
args_arr__5774__auto__.push((arguments[i__5750__auto___65189]));

var G__65190 = (i__5750__auto___65189 + (1));
i__5750__auto___65189 = G__65190;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,x){
if((x == null)){
return str_builder;
} else {
return str_builder.append(x.toString());
}
}));

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,x),more);
}));

/** @this {Function} */
(taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq63463){
var G__63464 = cljs.core.first(seq63463);
var seq63463__$1 = cljs.core.next(seq63463);
var G__63465 = cljs.core.first(seq63463__$1);
var seq63463__$2 = cljs.core.next(seq63463__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63464,G__63465,seq63463__$2);
}));

(taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2));

/**
 * Private, don't use.
 *   Returns a stateful string-building (fn [x & more]) that:
 *  - Appends non-nil xs to a string builder, starting with a separator IFF
 *    string building has started and at least one x is non-nil.
 *  - Returns the underlying string builder.
 */
taoensso.encore.sb_appender = (function taoensso$encore$sb_appender(var_args){
var G__63468 = arguments.length;
switch (G__63468) {
case 0:
return taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0()," ");
}));

(taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$1 = (function (separator){
return taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),separator);
}));

(taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$2 = (function (sb,separator){
var sep_BANG_ = (function (){var sep = cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator);
var started_QMARK__ = cljs.core.volatile_BANG_(false);
return (function (){
if(cljs.core.truth_(cljs.core.deref(started_QMARK__))){
sb.append(sep);

return true;
} else {
cljs.core.vreset_BANG_(started_QMARK__,true);

return false;
}
});
})();
return (function() {
var taoensso$encore$a_sb_appender = null;
var taoensso$encore$a_sb_appender__0 = (function (){
return sb;
});
var taoensso$encore$a_sb_appender__1 = (function (x){
if((x == null)){
return sb;
} else {
sep_BANG_();

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,x);
}
});
var taoensso$encore$a_sb_appender__2 = (function() { 
var G__65192__delegate = function (x,more){
if(cljs.core.truth_((function (){var and__5023__auto__ = (x == null);
if(and__5023__auto__){
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,more);
} else {
return and__5023__auto__;
}
})())){
return null;
} else {
sep_BANG_();

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,x),more);
}
};
var G__65192 = function (x,var_args){
var more = null;
if (arguments.length > 1) {
var G__65193__i = 0, G__65193__a = new Array(arguments.length -  1);
while (G__65193__i < G__65193__a.length) {G__65193__a[G__65193__i] = arguments[G__65193__i + 1]; ++G__65193__i;}
  more = new cljs.core.IndexedSeq(G__65193__a,0,null);
} 
return G__65192__delegate.call(this,x,more);};
G__65192.cljs$lang$maxFixedArity = 1;
G__65192.cljs$lang$applyTo = (function (arglist__65194){
var x = cljs.core.first(arglist__65194);
var more = cljs.core.rest(arglist__65194);
return G__65192__delegate(x,more);
});
G__65192.cljs$core$IFn$_invoke$arity$variadic = G__65192__delegate;
return G__65192;
})()
;
taoensso$encore$a_sb_appender = function(x,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return taoensso$encore$a_sb_appender__0.call(this);
case 1:
return taoensso$encore$a_sb_appender__1.call(this,x);
default:
var G__65195 = null;
if (arguments.length > 1) {
var G__65196__i = 0, G__65196__a = new Array(arguments.length -  1);
while (G__65196__i < G__65196__a.length) {G__65196__a[G__65196__i] = arguments[G__65196__i + 1]; ++G__65196__i;}
G__65195 = new cljs.core.IndexedSeq(G__65196__a,0,null);
}
return taoensso$encore$a_sb_appender__2.cljs$core$IFn$_invoke$arity$variadic(x, G__65195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$a_sb_appender.cljs$lang$maxFixedArity = 1;
taoensso$encore$a_sb_appender.cljs$lang$applyTo = taoensso$encore$a_sb_appender__2.cljs$lang$applyTo;
taoensso$encore$a_sb_appender.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$a_sb_appender__0;
taoensso$encore$a_sb_appender.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$a_sb_appender__1;
taoensso$encore$a_sb_appender.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$a_sb_appender__2.cljs$core$IFn$_invoke$arity$variadic;
return taoensso$encore$a_sb_appender;
})()
}));

(taoensso.encore.sb_appender.cljs$lang$maxFixedArity = 2);

/**
 * String builder reducing fn.
 */
taoensso.encore.str_rf = (function taoensso$encore$str_rf(var_args){
var G__63472 = arguments.length;
switch (G__63472) {
case 0:
return taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
}));

(taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc);
}));

(taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$2 = (function (acc,in$){
if((in$ == null)){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1(acc).append(in$.toString());
}
}));

(taoensso.encore.str_rf.cljs$lang$maxFixedArity = 2);

/**
 * Like `str-rf` but presumes string builder init value.
 */
taoensso.encore.sb_rf = (function taoensso$encore$sb_rf(var_args){
var G__63476 = arguments.length;
switch (G__63476) {
case 0:
return taoensso.encore.sb_rf.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.sb_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.sb_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.sb_rf.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
}));

(taoensso.encore.sb_rf.cljs$core$IFn$_invoke$arity$1 = (function (sb){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
}));

(taoensso.encore.sb_rf.cljs$core$IFn$_invoke$arity$2 = (function (sb,in$){
if((in$ == null)){
return sb;
} else {
return sb.append(in$.toString());
}
}));

(taoensso.encore.sb_rf.cljs$lang$maxFixedArity = 2);

/**
 * Faster generalization of `clojure.string/join` with transducer support.
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__63483 = arguments.length;
switch (G__63483) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,xs);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,xs){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,xs);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,xs){
if(cljs.core.truth_((function (){var and__5023__auto__ = separator;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__5023__auto__;
}
})())){
var separator__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator__$1)),taoensso.encore.sb_rf,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator__$1),taoensso.encore.sb_rf,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,taoensso.encore.sb_rf,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.sb_rf,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs));
}
}
}));

(taoensso.encore.str_join.cljs$lang$maxFixedArity = 3);

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
/**
 * Returns (first/last) ?index of substring if it exists within given string.
 */
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var G__63494 = arguments.length;
switch (G__63494) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
}));

(taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4);

/**
 * Returns true iff given strings are equal, ignoring case.
 */
taoensso.encore.case_insensitive_str_EQ_ = (function taoensso$encore$case_insensitive_str_EQ_(s1,s2){
var or__5025__auto__ = (s1 === s2);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var l1 = s1.length;
var l2 = s2.length;
var and__5023__auto__ = (l1 === l2);
if(and__5023__auto__){
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4((function (acc,idx){
var c1 = s1.charAt(idx).toLowerCase();
var c2 = s2.charAt(idx).toLowerCase();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c1,c2)){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,(0),l1);
} else {
return and__5023__auto__;
}
}
});
/**
 * Returns normalized form of given string.
 *  `norm-form` is ∈ #{:nfc :nfkc :nfd :nfkd} (default `:nfc` as per W3C).
 */
taoensso.encore.norm_str = (function taoensso$encore$norm_str(var_args){
var G__63521 = arguments.length;
switch (G__63521) {
case 1:
return taoensso.encore.norm_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.norm_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.norm_str.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.norm_str.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nfc","nfc",1898291461),s);
}));

(taoensso.encore.norm_str.cljs$core$IFn$_invoke$arity$2 = (function (norm_form,s){
var norm_form__$1 = (function (){var G__63524 = norm_form;
var G__63524__$1 = (((G__63524 instanceof cljs.core.Keyword))?G__63524.fqn:null);
switch (G__63524__$1) {
case "nfc":
return "NFC";

break;
case "nfkc":
return "NFKC";

break;
case "nfd":
return "NFD";

break;
case "nfkd":
return "NFKD";

break;
default:
return taoensso.truss.unexpected_arg_BANG__STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2939,14], null),norm_form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"norm-form","norm-form",-1587703891,null),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","norm-str","taoensso.encore/norm-str",-56716920,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nfc","nfc",1898291461),null,new cljs.core.Keyword(null,"nfkc","nfkc",1301302858),null,new cljs.core.Keyword(null,"nfkd","nfkd",-445525140),null,new cljs.core.Keyword(null,"nfd","nfd",-1770233195),null], null), null)], null));


}
})();
return s.normalize(norm_form__$1);
}));

(taoensso.encore.norm_str.cljs$lang$maxFixedArity = 2);

/**
 * Like `str/replace` but provides consistent Clj/s behaviour.
 * 
 *   Workaround for <http://dev.clojure.org/jira/browse/CLJS-794>,
 *               <http://dev.clojure.org/jira/browse/CLJS-911>.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",(cljs.core.truth_(match.ignoreCase)?"i":null),(cljs.core.truth_(match.multiline)?"m":null)].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:(function() { 
var G__65207__delegate = function (args){
var G__63529 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__63529) : replacement.call(null,G__63529));
};
var G__65207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65209__i = 0, G__65209__a = new Array(arguments.length -  0);
while (G__65209__i < G__65209__a.length) {G__65209__a[G__65209__i] = arguments[G__65209__i + 0]; ++G__65209__i;}
  args = new cljs.core.IndexedSeq(G__65209__a,0,null);
} 
return G__65207__delegate.call(this,args);};
G__65207.cljs$lang$maxFixedArity = 0;
G__65207.cljs$lang$applyTo = (function (arglist__65210){
var args = cljs.core.seq(arglist__65210);
return G__65207__delegate(args);
});
G__65207.cljs$core$IFn$_invoke$arity$variadic = G__65207__delegate;
return G__65207;
})()
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw taoensso.truss.ex_info_STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2977,14], null),["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''),null,null);
}
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if((x == null)){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(var_args){
var G__63537 = arguments.length;
switch (G__63537) {
case 2:
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (fmt,args){
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$3(taoensso.encore.nil__GT_str,fmt,args);
}));

(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (xform,fmt,args){
if((fmt == null)){
return "";
} else {
var args__$1 = (cljs.core.truth_(xform)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(xform,args):args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args__$1);
}
}));

(taoensso.encore.format_STAR_.cljs$lang$maxFixedArity = 3);


/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65218 = arguments.length;
var i__5750__auto___65219 = (0);
while(true){
if((i__5750__auto___65219 < len__5749__auto___65218)){
args__5755__auto__.push((arguments[i__5750__auto___65219]));

var G__65220 = (i__5750__auto___65219 + (1));
i__5750__auto___65219 = G__65220;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2(fmt,args);
}));

(taoensso.encore.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.format.cljs$lang$applyTo = (function (seq63547){
var G__63548 = cljs.core.first(seq63547);
var seq63547__$1 = cljs.core.next(seq63547);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63548,seq63547__$1);
}));

/**
 * Like `string/join` but skips nils and duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll));
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var in$__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$);
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref(acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref(acc_empty_QMARK__);
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll));
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65224 = arguments.length;
var i__5750__auto___65225 = (0);
while(true){
if((i__5750__auto___65225 < len__5749__auto___65224)){
args__5755__auto__.push((arguments[i__5750__auto___65225]));

var G__65226 = (i__5750__auto___65225 + (1));
i__5750__auto___65225 = G__65226;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
}));

(taoensso.encore.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.path.cljs$lang$applyTo = (function (seq63615){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63615));
}));

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65227 = arguments.length;
var i__5750__auto___65228 = (0);
while(true){
if((i__5750__auto___65228 < len__5749__auto___65227)){
args__5755__auto__.push((arguments[i__5750__auto___65228]));

var G__65229 = (i__5750__auto___65228 + (1));
i__5750__auto___65228 = G__65229;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_(in$)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs));
}));

(taoensso.encore.into_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.into_str.cljs$lang$applyTo = (function (seq63633){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63633));
}));

/**
 * Constant-time string equality checker.
 *   Useful to prevent timing attacks, etc.
 */
taoensso.encore.const_str_EQ_ = (function taoensso$encore$const_str_EQ_(s1,s2){
if(cljs.core.truth_((function (){var and__5023__auto__ = s1;
if(cljs.core.truth_(and__5023__auto__)){
return s2;
} else {
return and__5023__auto__;
}
})())){
var vx = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","1"], null);
var v1 = cljs.core.vec(s1);
var v2 = cljs.core.vec(s2);
var n1 = cljs.core.count(v1);
var n2 = cljs.core.count(v2);
var nmax = (function (){var x__5110__auto__ = n1;
var y__5111__auto__ = n2;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var nmin = (function (){var x__5113__auto__ = n1;
var y__5114__auto__ = n2;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
if((idx >= nmin)){
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vx,(0)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vx,(1)));
if(and__5023__auto__){
return acc;
} else {
return and__5023__auto__;
}
} else {
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v1,idx),cljs.core.get.cljs$core$IFn$_invoke$arity$2(v2,idx));
if(and__5023__auto__){
return acc;
} else {
return and__5023__auto__;
}
}
}),true,nmax);
} else {
return null;
}
});
/**
 * Private, don't use.
 */
taoensso.encore.format_num_fn = (function taoensso$encore$format_num_fn(n_min_fd,n_max_fd){
var nf = (new Intl.NumberFormat("en-US",({"minimumFractionDigits": n_min_fd, "maximumFractionDigits": n_max_fd, "useGrouping": true})));
return (function (n){
return nf.format(n);
});
});
var fmt0_65239 = taoensso.encore.format_num_fn((0),(0));
var fmt2_65240 = taoensso.encore.format_num_fn((2),(2));
/**
 * Returns given nanoseconds (long) as formatted human-readable string.
 *  Example outputs: "1.00m", "4.20s", "340ms", "822μs", etc.
 */
taoensso.encore.format_nsecs = (function taoensso$encore$format_nsecs(nanosecs){
var ns = nanosecs;
if((ns >= 6.0E10)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt2_65240((ns / 6.0E10))),"m"].join('');
} else {
if((ns >= 1.0E9)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt2_65240((ns / 1.0E9))),"s"].join('');
} else {
if((ns >= 1000000.0)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt0_65239((ns / 1000000.0))),"ms"].join('');
} else {
if((ns >= 1000.0)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt0_65239((ns / 1000.0))),"\u03BCs"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt0_65239(ns)),"ns"].join('');
}
}
}
}
});
/**
 * Give any nameable type (string, keyword, symbol), returns the same
 *   type with at most `n-full` (default 1) unabbreviated namespace parts.
 * 
 *   Example:
 *  (abbreviate-ns 2 :foo.bar/baz) => :foo.bar/baz
 *  (abbreviate-ns 1 :foo.bar/baz) =>   :f.bar/baz
 *  (abbreviate-ns 0 :foo.bar/baz) =>     :f.b/baz
 */
taoensso.encore.abbreviate_ns = (function taoensso$encore$abbreviate_ns(var_args){
var G__63672 = arguments.length;
switch (G__63672) {
case 1:
return taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$2((1),x);
}));

(taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$2 = (function (n_full,x){
var n_full__$1 = cljs.core.long$((function (){var error63681 = (function (){try{if(cljs.core.truth_(taoensso.encore.nat_int_QMARK_(n_full))){
return null;
} else {
return taoensso.truss.impl.FalsePredError;
}
}catch (e63683){var e = e63683;
return e;
}})();
if(cljs.core.truth_(error63681)){
return taoensso.truss.failed_assertion_BANG_("taoensso.encore",3156,23,new cljs.core.Symbol("taoensso.encore","nat-int?","taoensso.encore/nat-int?",2095181418,null),new cljs.core.Symbol(null,"n-full","n-full",797009712,null),n_full,null,error63681);
} else {
return n_full;
}
})());
var vec__63673 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(x),/\//);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63673,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63673,(1),null);
if(cljs.core.truth_(p2)){
var name_part = p2;
var ns_parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1,/\./);
var n_to_abbr = (cljs.core.count(ns_parts) - n_full__$1);
var sb = taoensso.encore.reduce_indexed((function (sb,idx,in$){
if((idx === (0))){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,".");
}

if((idx < n_to_abbr)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,in$.substring((0),(1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,in$);
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),ns_parts);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"/");

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,name_part);

var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
if((x instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
} else {
if((x instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(s);
} else {
return s;
}
}
} else {
return x;
}
}));

(taoensso.encore.abbreviate_ns.cljs$lang$maxFixedArity = 2);

var as__QMARK_qname_65243 = taoensso.encore.as__QMARK_qname;
var always_65244 = (function taoensso$encore$always(_in){
return true;
});
var never_65245 = (function taoensso$encore$never(_in){
return false;
});
var ns_QMARK__65246 = (function (x){
return (x instanceof cljs.core.Namespace);
});
var input_str_BANG__65247 = (function (x){
var or__5025__auto__ = (as__QMARK_qname_65243.cljs$core$IFn$_invoke$arity$1 ? as__QMARK_qname_65243.cljs$core$IFn$_invoke$arity$1(x) : as__QMARK_qname_65243.call(null,x));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if((x == null)){
return "";
} else {
if(ns_QMARK__65246(x)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
} else {
return taoensso.truss.unexpected_arg_BANG__STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3199,13], null),x,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","name-filter","taoensso.encore/name-filter",-2070485905,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"filter-input-arg","filter-input-arg",1147690060,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [null,"null",new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),"null",new cljs.core.Symbol(null,"symbol","symbol",601958831,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),"null"], null), null)], null));
}
}
}
});
var wild_str__GT__QMARK_re_pattern_65248 = (function (s){
if(cljs.core.truth_(taoensso.encore.str_contains_QMARK_(s,"*"))){
return cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join(''),"(.*)","__OR_CHILDREN__"),".","\\."),"*",".*"),"__OR_CHILDREN__","(\\..*)?"));
} else {
return null;
}
});
var compile__GT_match_fn_65249 = (function taoensso$encore$compile__GT_match_fn(spec,cache_QMARK_){
while(true){
if(cljs.core.truth_((function (){var fexpr__63712 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["*",null,new cljs.core.Keyword(null,"any","any",1705907423),null], null), null);
return (fexpr__63712.cljs$core$IFn$_invoke$arity$1 ? fexpr__63712.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__63712.call(null,spec));
})())){
return always_65244;
} else {
if(cljs.core.truth_((function (){var fexpr__63713 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"none","none",1333468478)]);
return (fexpr__63713.cljs$core$IFn$_invoke$arity$1 ? fexpr__63713.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__63713.call(null,spec));
})())){
return never_65245;
} else {
if(taoensso.encore.re_pattern_QMARK_(spec)){
return ((function (spec,cache_QMARK_,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
return cljs.core.re_find(spec,input_str_BANG__65247(in$));
});
;})(spec,cache_QMARK_,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248))
} else {
if(ns_QMARK__65246(spec)){
var G__65250 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var G__65251 = cache_QMARK_;
spec = G__65250;
cache_QMARK_ = G__65251;
continue;
} else {
var b2__30441__auto__ = (as__QMARK_qname_65243.cljs$core$IFn$_invoke$arity$1 ? as__QMARK_qname_65243.cljs$core$IFn$_invoke$arity$1(spec) : as__QMARK_qname_65243.call(null,spec));
if(cljs.core.truth_(b2__30441__auto__)){
var str_spec = b2__30441__auto__;
var b2__30441__auto____$1 = wild_str__GT__QMARK_re_pattern_65248(str_spec);
if(cljs.core.truth_(b2__30441__auto____$1)){
var re_pattern = b2__30441__auto____$1;
var G__65252 = re_pattern;
var G__65253 = cache_QMARK_;
spec = G__65252;
cache_QMARK_ = G__65253;
continue;
} else {
return ((function (spec,cache_QMARK_,b2__30441__auto____$1,str_spec,b2__30441__auto__,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(str_spec,input_str_BANG__65247(in$));
});
;})(spec,cache_QMARK_,b2__30441__auto____$1,str_spec,b2__30441__auto__,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248))
}
} else {
if(((cljs.core.vector_QMARK_(spec)) || (cljs.core.set_QMARK_(spec)))){
if(cljs.core.truth_((function (){var fexpr__63721 = cljs.core.set(spec);
return (fexpr__63721.cljs$core$IFn$_invoke$arity$1 ? fexpr__63721.cljs$core$IFn$_invoke$arity$1("*") : fexpr__63721.call(null,"*"));
})())){
return always_65244;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(spec),(1))){
var G__65254 = cljs.core.first(spec);
var G__65255 = cache_QMARK_;
spec = G__65254;
cache_QMARK_ = G__65255;
continue;
} else {
var vec__63723 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (spec,cache_QMARK_,b2__30441__auto__,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248){
return (function (p__63728,spec__$1){
var vec__63731 = p__63728;
var fixed_strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63731,(0),null);
var re_patterns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63731,(1),null);
var spec__$2 = ((ns_QMARK__65246(spec__$1))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1):taoensso.encore.as_qname(spec__$1));
var b2__30441__auto____$1 = ((taoensso.encore.re_pattern_QMARK_(spec__$2))?spec__$2:wild_str__GT__QMARK_re_pattern_65248(spec__$2));
if(cljs.core.truth_(b2__30441__auto____$1)){
var re_pattern = b2__30441__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fixed_strs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(re_patterns,re_pattern)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fixed_strs,spec__$2),re_patterns], null);
}
});})(spec,cache_QMARK_,b2__30441__auto__,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),spec);
var fixed_strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63723,(0),null);
var re_patterns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63723,(1),null);
var fx_match = cljs.core.not_empty(fixed_strs);
var re_match = (function (){var b2__30441__auto____$1 = cljs.core.not_empty(re_patterns);
if(cljs.core.truth_(b2__30441__auto____$1)){
var re_patterns__$1 = b2__30441__auto____$1;
var f = ((function (spec,cache_QMARK_,re_patterns__$1,b2__30441__auto____$1,vec__63723,fixed_strs,re_patterns,fx_match,b2__30441__auto__,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in_str){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2(((function (spec,cache_QMARK_,re_patterns__$1,b2__30441__auto____$1,vec__63723,fixed_strs,re_patterns,fx_match,b2__30441__auto__,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248){
return (function (p1__63702_SHARP_){
return cljs.core.re_find(p1__63702_SHARP_,in_str);
});})(spec,cache_QMARK_,re_patterns__$1,b2__30441__auto____$1,vec__63723,fixed_strs,re_patterns,fx_match,b2__30441__auto__,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248))
,re_patterns__$1);
});})(spec,cache_QMARK_,re_patterns__$1,b2__30441__auto____$1,vec__63723,fixed_strs,re_patterns,fx_match,b2__30441__auto__,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248))
;
if(cljs.core.truth_(cache_QMARK_)){
return (taoensso.encore.fmemoize.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.fmemoize.cljs$core$IFn$_invoke$arity$1(f) : taoensso.encore.fmemoize.call(null,f));
} else {
return f;
}
} else {
return null;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = fx_match;
if(cljs.core.truth_(and__5023__auto__)){
return re_match;
} else {
return and__5023__auto__;
}
})())){
return ((function (spec,cache_QMARK_,vec__63723,fixed_strs,re_patterns,fx_match,re_match,b2__30441__auto__,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
var in_str = input_str_BANG__65247(in$);
var or__5025__auto__ = (fx_match.cljs$core$IFn$_invoke$arity$1 ? fx_match.cljs$core$IFn$_invoke$arity$1(in_str) : fx_match.call(null,in_str));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (re_match.cljs$core$IFn$_invoke$arity$1 ? re_match.cljs$core$IFn$_invoke$arity$1(in_str) : re_match.call(null,in_str));
}
});
;})(spec,cache_QMARK_,vec__63723,fixed_strs,re_patterns,fx_match,re_match,b2__30441__auto__,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248))
} else {
if(cljs.core.truth_(fx_match)){
return ((function (spec,cache_QMARK_,vec__63723,fixed_strs,re_patterns,fx_match,re_match,b2__30441__auto__,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
var G__63739 = input_str_BANG__65247(in$);
return (fx_match.cljs$core$IFn$_invoke$arity$1 ? fx_match.cljs$core$IFn$_invoke$arity$1(G__63739) : fx_match.call(null,G__63739));
});
;})(spec,cache_QMARK_,vec__63723,fixed_strs,re_patterns,fx_match,re_match,b2__30441__auto__,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248))
} else {
if(cljs.core.truth_(re_match)){
return ((function (spec,cache_QMARK_,vec__63723,fixed_strs,re_patterns,fx_match,re_match,b2__30441__auto__,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
var G__63743 = input_str_BANG__65247(in$);
return (re_match.cljs$core$IFn$_invoke$arity$1 ? re_match.cljs$core$IFn$_invoke$arity$1(G__63743) : re_match.call(null,G__63743));
});
;})(spec,cache_QMARK_,vec__63723,fixed_strs,re_patterns,fx_match,re_match,b2__30441__auto__,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248))
} else {
throw taoensso.truss.ex_info_STAR_("taoensso.encore",null,"[encore/cond!] No matching clause",null,null);
}
}
}
}
}
} else {
return taoensso.truss.unexpected_arg_BANG__STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3262,11], null),spec,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","name-filter","taoensso.encore/name-filter",-2070485905,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"filter-spec","filter-spec",539212879,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"set","set",1945134081,null),"null",new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),"null",new cljs.core.Symbol(null,"symbol","symbol",601958831,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),"null",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Symbol(null,"<spec>","<spec>",1165019597,null),new cljs.core.Keyword(null,"disallow","disallow",-861898595),new cljs.core.Symbol(null,"<spec>","<spec>",1165019597,null)], null),"null",new cljs.core.Symbol(null,"regex","regex",-1714946913,null),"null"], null), null)], null));
}
}
}
}
}
}
break;
}
});
/**
 * Given filter `spec`, returns a compiled (fn match? [x]) that:
 *    - Takes a string, keyword, symbol, or namespace.
 *    - Returns true iff input matches spec.
 * 
 *  Useful for efficiently filtering namespaces, class names, id kws, etc.
 * 
 *  Spec may be:
 *    - A namespace     to match exactly
 *    - A regex pattern to match
 *    - A str/kw/sym    to match, with "*" and "(.*)" as wildcards:
 *      "foo.*"   will match "foo.bar"
 *      "foo(.*)" will match "foo.bar" and "foo"
 *      If you need literal "*"s, use #"\*" regex instead.
 * 
 *    - A set/vector of the above to match any
 *    - A map, {:allow <spec> :disallow <spec>} with specs as the above:
 *      If present,    `:allow` spec MUST     match, AND
 *      If present, `:disallow` spec MUST NOT match.
 * 
 *  Spec examples:
 *    *ns*, #{}, "*", "foo.bar", "foo.bar.*", "foo.bar(.*)",
 *    #{"foo" "bar.*"}, #"(foo1|foo2)\.bar",
 *    {:allow #{"foo" "bar.*"} :disallow #{"foo.*.bar.*"}}.
 */
taoensso.encore.name_filter = (function taoensso$encore$name_filter(spec){
while(true){
if(cljs.core.map_QMARK_(spec)){
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"cache?","cache?",-1601953949));
var allow_spec = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"whitelist","whitelist",-979294437));
}
})();
var disallow_spec = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"disallow","disallow",-861898595));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"blacklist","blacklist",1248093170));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"deny","deny",1589338523));
}
}
})();
var allow = (function (){var b2__30441__auto__ = allow_spec;
if(cljs.core.truth_(b2__30441__auto__)){
var as = b2__30441__auto__;
return compile__GT_match_fn_65249(as,cache_QMARK_);
} else {
return null;
}
})();
var disallow = (function (){var b2__30441__auto__ = disallow_spec;
if(cljs.core.truth_(b2__30441__auto__)){
var ds = b2__30441__auto__;
return compile__GT_match_fn_65249(ds,cache_QMARK_);
} else {
return null;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(disallow,always_65244)){
return never_65245;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow,never_65245)){
return never_65245;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = allow;
if(cljs.core.truth_(and__5023__auto__)){
return disallow;
} else {
return and__5023__auto__;
}
})())){
return ((function (spec,cache_QMARK_,allow_spec,disallow_spec,allow,disallow,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248,compile__GT_match_fn_65249){
return (function taoensso$encore$name_filter_$_match_QMARK_(in$){
if((allow.cljs$core$IFn$_invoke$arity$1 ? allow.cljs$core$IFn$_invoke$arity$1(in$) : allow.call(null,in$))){
if((disallow.cljs$core$IFn$_invoke$arity$1 ? disallow.cljs$core$IFn$_invoke$arity$1(in$) : disallow.call(null,in$))){
return false;
} else {
return true;
}
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,disallow_spec,allow,disallow,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248,compile__GT_match_fn_65249))
} else {
if(cljs.core.truth_(allow)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow,always_65244)){
return always_65244;
} else {
return ((function (spec,cache_QMARK_,allow_spec,disallow_spec,allow,disallow,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248,compile__GT_match_fn_65249){
return (function taoensso$encore$name_filter_$_match_QMARK_(in$){
if(allow(in$)){
return true;
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,disallow_spec,allow,disallow,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248,compile__GT_match_fn_65249))
}
} else {
if(cljs.core.truth_(disallow)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(disallow,never_65245)){
return always_65244;
} else {
return ((function (spec,cache_QMARK_,allow_spec,disallow_spec,allow,disallow,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248,compile__GT_match_fn_65249){
return (function taoensso$encore$name_filter_$_match_QMARK_(in$){
if(disallow(in$)){
return false;
} else {
return true;
}
});
;})(spec,cache_QMARK_,allow_spec,disallow_spec,allow,disallow,as__QMARK_qname_65243,always_65244,never_65245,ns_QMARK__65246,input_str_BANG__65247,wild_str__GT__QMARK_re_pattern_65248,compile__GT_match_fn_65249))
}
} else {
throw taoensso.truss.ex_info_STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3313,11], null),"[encore/name-filter] `allow-spec` and `disallow-spec` cannot both be nil",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow-spec","allow-spec",448749872),allow_spec,new cljs.core.Keyword(null,"disallow-spec","disallow-spec",-16464308),disallow_spec], null),null);
}
}
}
}
}
} else {
var G__65278 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),spec,new cljs.core.Keyword(null,"disallow","disallow",-861898595),null], null);
spec = G__65278;
continue;
}
break;
}
});
/**
 * Single system newline
 */
taoensso.encore.newline = "\n";
/**
 * Double system newline
 */
taoensso.encore.newlines = ["\n","\n"].join('');
/**
 * Private, don't use.
 */
taoensso.encore.x__GT_str = (function taoensso$encore$x__GT_str(allow_readably_QMARK_,allow_dup_QMARK_,add_newline_QMARK_,x){
if(cljs.core.truth_(allow_readably_QMARK_)){
if(cljs.core.truth_(add_newline_QMARK_)){
return cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}
} else {
if(cljs.core.truth_(add_newline_QMARK_)){
return cljs.core.println_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}
}
});
/**
 * Private, don't use.
 */
taoensso.encore.xs__GT_str = (function taoensso$encore$xs__GT_str(allow_readably_QMARK_,allow_dup_QMARK_,add_newline_QMARK_,xs){
if(cljs.core.truth_(allow_readably_QMARK_)){
if(cljs.core.truth_(add_newline_QMARK_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,xs);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,xs);
}
} else {
if(cljs.core.truth_(add_newline_QMARK_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,xs);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,xs);
}
}
});
/**
 * Identical to `core/pr`.
 */
taoensso.encore.pr = cljs.core.pr;

/**
 * Identical to `core/prn`.
 */
taoensso.encore.prn = cljs.core.prn;

/**
 * Identical to `core/print`.
 */
taoensso.encore.print = cljs.core.print;

/**
 * Identical to `core/println`.
 */
taoensso.encore.println = cljs.core.println;
/**
 * Prints given arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(x){
if(cljs.core.truth_((function (){var and__5023__auto__ = (cljs.core._STAR_print_level_STAR_ == null);
if(and__5023__auto__){
var and__5023__auto____$1 = (cljs.core._STAR_print_length_STAR_ == null);
if(and__5023__auto____$1){
return cljs.core._STAR_print_readably_STAR_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return taoensso.encore.x__GT_str(true,false,false,x);
} else {
var _STAR_print_level_STAR__orig_val__63760 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__63761 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_readably_STAR__orig_val__63762 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_level_STAR__temp_val__63763 = null;
var _STAR_print_length_STAR__temp_val__63764 = null;
var _STAR_print_readably_STAR__temp_val__63765 = true;
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__63763);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__63764);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__63765);

try{return taoensso.encore.x__GT_str(true,false,false,x);
}finally {(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__63762);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__63761);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__63760);
}}
});
/**
 * Private, don't use.
 */
taoensso.encore.pr_edn_STAR_ = (function taoensso$encore$pr_edn_STAR_(x){
return taoensso.encore.x__GT_str(true,false,false,x);
});
/**
 * Reads given edn string to return a Clj/s value.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__63767 = arguments.length;
switch (G__63767) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
}));

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if((((s == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = ((cljs.core.keyword_identical_QMARK_(readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?cljs.core.deref(cljs.reader._STAR_tag_table_STAR_):readers);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$__$1 = ((cljs.core.keyword_identical_QMARK_(default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw taoensso.truss.ex_info_STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3472,6], null),"[encore/read-edn] Unexpected arg type (expected string or nil)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(s)], null)], null),null);
}
}
}));

(taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2);

/**
 * Private, don't use.
 */
taoensso.encore.str_impl = (function taoensso$encore$str_impl(var_args){
var G__63770 = arguments.length;
switch (G__63770) {
case 2:
return taoensso.encore.str_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_impl.cljs$core$IFn$_invoke$arity$2 = (function (x,class_name){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name);
}));

(taoensso.encore.str_impl.cljs$core$IFn$_invoke$arity$3 = (function (x,class_name,data){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),"]"].join('');
}));

(taoensso.encore.str_impl.cljs$lang$maxFixedArity = 3);

/**
 * For Clj: returns a random `java.util.UUID`.
 *   For Cljs: returns a random UUID string.
 * 
 *   Uses strong randomness when possible.
 *   See also `uuid-str`, `nanoid`, `rand-id-fn`.
 */
taoensso.encore.uuid = (function taoensso$encore$uuid(){
var b2__30441__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_crypto,"randomUUID");
if(cljs.core.truth_(b2__30441__auto__)){
var f = b2__30441__auto__;
return f.call(taoensso.encore.js__QMARK_crypto);
} else {
var quad_hex = (function (){
var unpadded_hex = cljs.core.rand_int((65536)).toString((16));
var G__63771 = ((unpadded_hex).length);
switch (G__63771) {
case (1):
return ["000",unpadded_hex].join('');

break;
case (2):
return ["00",unpadded_hex].join('');

break;
case (3):
return ["0",unpadded_hex].join('');

break;
default:
return unpadded_hex;

}
});
var ver_trip_hex = ((16384) | ((4095) & cljs.core.rand_int((65536)))).toString((16));
var res_trip_hex = ((32768) | ((16383) & cljs.core.rand_int((65536)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),"-",ver_trip_hex,"-",res_trip_hex,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex())].join('');
}
});
/**
 * Returns a random UUID string of given length (max 36).
 *   Uses strong randomness when possible. See also `uuid`, `nanoid`, `rand-id-fn`.
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__63773 = arguments.length;
switch (G__63773) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_len){
var or__5025__auto__ = taoensso.encore.substr(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"by-len","by-len",587837753),(0),max_len);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
}));

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.uuid();
}));

(taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1);

/**
 * Returns a random byte array of given size.
 */
taoensso.encore.rand_bytes = (function taoensso$encore$rand_bytes(prefer_secure_QMARK_,size){
var ba = (new Uint8Array(size));
var b2__30441__auto___65308 = (function (){var and__5023__auto__ = prefer_secure_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return taoensso.encore.js__QMARK_crypto;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(b2__30441__auto___65308)){
var crypto_65309 = b2__30441__auto___65308;
crypto_65309.getRandomValues(ba);
} else {
var n__5616__auto___65310 = size;
var i_65311 = (0);
while(true){
if((i_65311 < n__5616__auto___65310)){
(ba[i_65311] = Math.floor(((256) * Math.random())));

var G__65312 = (i_65311 + (1));
i_65311 = G__65312;
continue;
} else {
}
break;
}
}

return ba;
});
/**
 * Returns a (fn rand-id []) that returns random id strings.
 *   Options include:
 *  `:chars`         - ∈ #{<string> :nanoid :alphanumeric :no-look-alikes ...}
 *  `:len`           - Length of id strings to generate
 *  `:rand-bytes-fn` - Optional (fn [size]) to return random byte array of given size
 * 
 *   See also `uuid-str`, `nano-id`.
 */
taoensso.encore.rand_id_fn = (function taoensso$encore$rand_id_fn(p__63782){
var map__63783 = p__63782;
var map__63783__$1 = cljs.core.__destructure_map(map__63783);
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63783__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.Keyword(null,"nanoid","nanoid",-90964628));
var len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63783__$1,new cljs.core.Keyword(null,"len","len",1423657078),(21));
var rand_bytes_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63783__$1,new cljs.core.Keyword(null,"rand-bytes-fn","rand-bytes-fn",501267911),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.encore.rand_bytes,true));
var chars__$1 = (function (){var G__63784 = chars;
var G__63784__$1 = (((G__63784 instanceof cljs.core.Keyword))?G__63784.fqn:null);
switch (G__63784__$1) {
case "alphanumeric":
return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

break;
case "nanoid":
return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

break;
case "nanoid-readable":
return "346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz";

break;
case "numbers":
return "0123456789";

break;
case "alpha-lowercase":
return "abcdefghijklmnopqrstuvwxyz";

break;
case "alpha-uppercase":
return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

break;
case "hex-lowercase":
return "0123456789abcdef";

break;
case "hex-uppercase":
return "0123456789ABCDEF";

break;
default:
if(typeof chars === 'string'){
return chars;
} else {
return taoensso.truss.failed_assertion_BANG_("taoensso.encore",3654,11,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol(null,"chars","chars",545901210,null),chars,null,null);
}

}
})();
var nchars = cljs.core.count(chars__$1);
var max_char_idx = (nchars - (1));
var chars__$2 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(chars__$1);
var mask = ((-1) & (((2) << (Math.floor((Math.log((nchars - (1))) / Math.log((2)))) | (0))) - (1)));
var exp_bytes = ((mask * len) / nchars);
var stepn = ((function (){var x__5110__auto__ = (2);
var y__5111__auto__ = Math.ceil((0.2 * exp_bytes));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})() | (0));
var step1 = (((((cljs.core.mod((256),nchars) | (0)) === (0)))?len:Math.ceil((1.2 * exp_bytes))) | (0));
return (function taoensso$encore$rand_id_fn_$_rand_id(){
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
var idx = (0);
var max_idx = (step1 - (1));
var rand_bytes = (rand_bytes_fn.cljs$core$IFn$_invoke$arity$1 ? rand_bytes_fn.cljs$core$IFn$_invoke$arity$1(step1) : rand_bytes_fn.call(null,step1));
while(true){
var possible_ch_idx_65314 = ((rand_bytes[idx]) & mask);
if((possible_ch_idx_65314 <= max_char_idx)){
sb.append((chars__$2[possible_ch_idx_65314]));
} else {
}

if((sb.length() === len)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if((idx === max_idx)){
var G__65315 = (0);
var G__65316 = (stepn - (1));
var G__65317 = (rand_bytes_fn.cljs$core$IFn$_invoke$arity$1 ? rand_bytes_fn.cljs$core$IFn$_invoke$arity$1(stepn) : rand_bytes_fn.call(null,stepn));
idx = G__65315;
max_idx = G__65316;
rand_bytes = G__65317;
continue;
} else {
var G__65318 = (idx + (1));
var G__65319 = max_idx;
var G__65320 = rand_bytes;
idx = G__65318;
max_idx = G__65319;
rand_bytes = G__65320;
continue;
}
}
break;
}
});
});
var chars_65321 = (function (){var s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
return cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(s);
})();
/**
 * Returns a random "Nano ID" of given length, Ref. <https://github.com/ai/nanoid>.
 *  Faster, variable-length version of (rand-id-fn {:chars :nanoid}).
 *  126 bits of entropy with default length (21).
 *  See also `uuid-str`, `rand-id-fn`.
 */
taoensso.encore.nanoid = (function taoensso$encore$nanoid(var_args){
var G__63800 = arguments.length;
switch (G__63800) {
case 0:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$2(true,(21));
}));

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1 = (function (len){
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$2(true,len);
}));

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$2 = (function (prefer_secure_QMARK_,len){
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
var ba = taoensso.encore.rand_bytes(prefer_secure_QMARK_,len);
var max_idx = (len - (1));
var idx_65323 = (0);
while(true){
sb.append((chars_65321[((ba[idx_65323]) & (63))]));

if((idx_65323 < max_idx)){
var G__65324 = (idx_65323 + (1));
idx_65323 = G__65324;
continue;
} else {
}
break;
}

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
}));

(taoensso.encore.nanoid.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.LightAtom = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 98304;
});
(taoensso.encore.LightAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new$){
var self__ = this;
var ___$1 = this;
(self__.state = new$);

return new$;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (t,swap_fn){
var self__ = this;
var t__$1 = this;
return (t__$1.cljs$core$IFn$_invoke$arity$1 ? t__$1.cljs$core$IFn$_invoke$arity$1(swap_fn) : t__$1.call(null,swap_fn));
}));

(taoensso.encore.LightAtom.prototype.call = (function (unused__11804__auto__){
var self__ = this;
var self__ = this;
var G__63821 = (arguments.length - (1));
switch (G__63821) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.encore.LightAtom.prototype.apply = (function (self__,args63814){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63814)));
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return self__.state;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IFn$_invoke$arity$1 = (function (swap_fn){
var self__ = this;
var _ = this;
var new$ = (swap_fn.cljs$core$IFn$_invoke$arity$1 ? swap_fn.cljs$core$IFn$_invoke$arity$1(self__.state) : swap_fn.call(null,self__.state));
(self__.state = new$);

return new$;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,swap_fn){
var self__ = this;
var _ = this;
var old_map = self__.state;
var new_val = (function (){var G__63831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_map,k);
return (swap_fn.cljs$core$IFn$_invoke$arity$1 ? swap_fn.cljs$core$IFn$_invoke$arity$1(G__63831) : swap_fn.call(null,G__63831));
})();
var new_map = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_map,k,new_val);
(self__.state = new_map);

return new_val;
}));

(taoensso.encore.LightAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(taoensso.encore.LightAtom.cljs$lang$type = true);

(taoensso.encore.LightAtom.cljs$lang$ctorStr = "taoensso.encore/LightAtom");

(taoensso.encore.LightAtom.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"taoensso.encore/LightAtom");
}));

/**
 * Positional factory function for taoensso.encore/LightAtom.
 */
taoensso.encore.__GT_LightAtom = (function taoensso$encore$__GT_LightAtom(state){
return (new taoensso.encore.LightAtom(state));
});

/**
 * Private, don't use. Micro-optimized lightweight `atom`.
 *   Up to 30% faster than standard atoms, with the same atomicity guarantees.
 */
taoensso.encore.latom = (function taoensso$encore$latom(init_state){
return (new taoensso.encore.LightAtom(init_state));
});
/**
 * Impln. for 0-key resets
 */
taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,m1){
while(true){
var m0 = cljs.core.deref(atom_);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,m0,m1,m1) : return$.call(null,m0,m0,m1,m1));
} else {
continue;
}
break;
}
});
/**
 * Impln. for 1-key resets
 */
taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
var G__63848 = m0;
var G__63849 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__63850 = m1;
var G__63851 = v1;
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__63848,G__63849,G__63850,G__63851) : return$.call(null,G__63848,G__63849,G__63850,G__63851));
} else {
continue;
}
break;
}
});
/**
 * Impln. for n-key resets
 */
taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__30441__auto__ = cljs.core.seq(ks);
if(b2__30441__auto__){
var ks_seq = b2__30441__auto__;
if(cljs.core.next(ks_seq)){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc_in(m0,ks,v1);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
var G__63854 = m0;
var G__63855 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__63856 = m1;
var G__63857 = v1;
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__63854,G__63855,G__63856,G__63857) : return$.call(null,G__63854,G__63855,G__63856,G__63857));
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_(return$,atom_,v1);
}
});
var return_65373 = (function (m0,v0,m1,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics, returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var G__63866 = arguments.length;
switch (G__63866) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_65373,atom_,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_65373,atom_,ks,null,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_65373,atom_,ks,not_found,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4);


/**
 * Like `reset-in!` but optimized for single-key case. Returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = (function taoensso$encore$reset_val_BANG_(var_args){
var G__63874 = arguments.length;
switch (G__63874) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_(return_65373,atom_,k,null,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_65373,atom_,k,not_found,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4);

var sentinel_65379 = ({});
var return_65381 = (function (m0,v0,m1,v1){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v0,v1);
});
/**
 * Like `reset-in!` but returns true iff the atom's value changed.
 */
taoensso.encore.reset_in_BANG__QMARK_ = (function taoensso$encore$reset_in_BANG__QMARK_(var_args){
var G__63878 = arguments.length;
switch (G__63878) {
case 2:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_65381,atom_,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_65381,atom_,ks,sentinel_65379,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_65381,atom_,ks,not_found,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$lang$maxFixedArity = 4);


/**
 * Like `reset-in!?` but optimized for single-key case.
 *  Returns true iff the atom's value changed.
 */
taoensso.encore.reset_val_BANG__QMARK_ = (function taoensso$encore$reset_val_BANG__QMARK_(var_args){
var G__63884 = arguments.length;
switch (G__63884) {
case 3:
return taoensso.encore.reset_val_BANG__QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG__QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_val_BANG__QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,sentinel_65379,new_val);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val);
}));

(taoensso.encore.reset_val_BANG__QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,new_val);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val);
}));

(taoensso.encore.reset_val_BANG__QMARK_.cljs$lang$maxFixedArity = 4);

/**
 * Atomically swaps value of `atom_` to `val` and returns
 *   true iff the atom's value changed. See also `reset-in!?`.
 */
taoensso.encore.reset_BANG__QMARK_ = (function taoensso$encore$reset_BANG__QMARK_(atom_,val){
while(true){
var old = cljs.core.deref(atom_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,val)){
return false;
} else {
if(cljs.core.compare_and_set_BANG_(atom_,old,val)){
return true;
} else {
continue;
}
}
break;
}
});

/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

(taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newv","newv",-238403387,null),new cljs.core.Symbol(null,"returnv","returnv",-1488668972,null)], null);
}));

(taoensso.encore.Swapped.cljs$lang$type = true);

(taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped");

(taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"taoensso.encore/Swapped");
}));

/**
 * Positional factory function for taoensso.encore/Swapped.
 */
taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


/**
 * For use within the swap functions of `swap-in!` and `swap-val!`.
 * 
 *  Allows the easy decoupling of new and returned values. Compare:
 *    (let [a (atom 0)] [(core/swap! a (fn [old]          (inc old)     )) @a]) [1 1] ; new=1, return=1
 *    (let [a (atom 0)] [(swap-in!   a (fn [old] (swapped (inc old) old))) @a]) [0 1] ; new=1, return=0
 * 
 *  Faster and much more flexible than `core/swap-vals!`, etc.
 *  Especially useful when combined with the `update-in` semantics of `swap-in!`, etc.
 */
taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

/**
 * Private, don't use.
 */
taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

/**
 * Returns true iff given `Swapped` argument.
 */
taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.return_swapped = (function taoensso$encore$return_swapped(sw,m0,m1){
var rv = sw.returnv;
var G__63914 = rv;
var G__63914__$1 = (((G__63914 instanceof cljs.core.Keyword))?G__63914.fqn:null);
switch (G__63914__$1) {
case "swap/changed?":
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m1,m0);

break;
case "swap/new":
return m1;

break;
case "swap/old":
return m0;

break;
default:
return rv;

}
});
/**
 * Impln. for 0-key swaps
 */
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var m0 = cljs.core.deref(atom_);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m0) : f.call(null,m0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var m1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.keyword_identical_QMARK_(m1,new cljs.core.Keyword("swap","abort","swap/abort",508048993))){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,m0,m0,m0) : return$.call(null,m0,m0,m0,m0));
}
} else {
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,m0,m1,m1) : return$.call(null,m0,m0,m1,m1));
}
} else {
continue;
}
}
break;
}
});
/**
 * Impln. for 1-key swaps
 */
taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.keyword_identical_QMARK_(f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
var G__63927 = m0;
var G__63928 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__63929 = m1;
var G__63930 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__63927,G__63928,G__63929,G__63930) : return$.call(null,G__63927,G__63928,G__63929,G__63930));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.keyword_identical_QMARK_(v1,new cljs.core.Keyword("swap","abort","swap/abort",508048993))){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m0);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m0,v0) : return$.call(null,m0,v0,m0,v0));
}
} else {
var m1 = ((cljs.core.keyword_identical_QMARK_(v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1));
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m1,v1) : return$.call(null,m0,v0,m1,v1));
}
} else {
continue;
}
}
break;
}
}
});
/**
 * Impln. for n-key swaps
 */
taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__30441__auto__ = cljs.core.seq(ks);
if(b2__30441__auto__){
var ks_seq = b2__30441__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.keyword_identical_QMARK_(f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2(m0,ks);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
var G__63935 = m0;
var G__63936 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__63937 = m1;
var G__63938 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__63935,G__63936,G__63937,G__63938) : return$.call(null,G__63935,G__63936,G__63937,G__63938));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.keyword_identical_QMARK_(v1,new cljs.core.Keyword("swap","abort","swap/abort",508048993))){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m0);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m0,v0) : return$.call(null,m0,v0,m0,v0));
}
} else {
var m1 = ((cljs.core.keyword_identical_QMARK_(v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2(m0,ks):cljs.core.assoc_in(m0,ks,v1));
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m1,v1) : return$.call(null,m0,v0,m1,v1));
}
} else {
continue;
}
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_(return$,atom_,f);
}
});
var return_65423 = (function (m0,v0,m1,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics and `swapped`.
 *  Returns <new-key-val> or <swapped-return-val>:
 *    (swap-in! (atom {:k1 {:k2 5}}) [:k1 :k2] inc) => 6
 *    (swap-in! (atom {:k1 {:k2 5}}) [:k1 :k2]
 *      (fn [old] (swapped (inc old) old))) => 5
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var G__63943 = arguments.length;
switch (G__63943) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_65423,atom_,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_65423,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_65423,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4);


/**
 * Like `swap-in!` but optimized for single-key case.
 *  Returns <new-key-val> or <swapped-return-val>:
 *    (swap-val! (atom {:k 5}) :k inc) => 6
 *    (swap-val! (atom {:k 5}) :k
 *      (fn [old] (swapped (inc old) old))) => 5
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(var_args){
var G__63947 = arguments.length;
switch (G__63947) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_65423,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_65423,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Removes and returns value mapped to key:
 *  (let [a (atom {:k :v})]
 *    [(pull-val! a :k) @a]) => [:v {}]
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__63951 = arguments.length;
switch (G__63951) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3(atom_,k,null);
}));

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500),(function (v0){
if(cljs.core.keyword_identical_QMARK_(v0,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500))){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","abort","swap/abort",508048993),not_found);
} else {
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),v0);
}
}));
}));

(taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Like `core/memoize` but only caches the given fn's latest input.
 *   Speeds repeated fn calls with the same arguments.
 *   Great for ReactJS render fn caching, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var sentinel = ({});
var call = (function (){var in_ = cljs.core.volatile_BANG_(({}));
var out_ = cljs.core.volatile_BANG_(null);
return (function (in_STAR_,f0){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_STAR_,cljs.core.deref(in_))){
return cljs.core.deref(out_);
} else {
var out = (f0.cljs$core$IFn$_invoke$arity$0 ? f0.cljs$core$IFn$_invoke$arity$0() : f0.call(null));
cljs.core.vreset_BANG_(in_,in_STAR_);

cljs.core.vreset_BANG_(out_,out);

return out;
}
break;
}
});
})();
return (function() {
var taoensso$encore$memoize_last_$_memoized_fn = null;
var taoensso$encore$memoize_last_$_memoized_fn__0 = (function (){
return call(sentinel,(function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}));
});
var taoensso$encore$memoize_last_$_memoized_fn__1 = (function (x){
return call(x,(function (){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}));
});
var taoensso$encore$memoize_last_$_memoized_fn__2 = (function (x,y){
return call(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sentinel,x,y], null),(function (){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
}));
});
var taoensso$encore$memoize_last_$_memoized_fn__3 = (function (x,y,z){
return call(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sentinel,x,y,z], null),(function (){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null,x,y,z));
}));
});
var taoensso$encore$memoize_last_$_memoized_fn__4 = (function() { 
var G__65430__delegate = function (x,y,z,more){
return call(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sentinel,x,y,z,more], null),(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,more);
}));
};
var G__65430 = function (x,y,z,var_args){
var more = null;
if (arguments.length > 3) {
var G__65431__i = 0, G__65431__a = new Array(arguments.length -  3);
while (G__65431__i < G__65431__a.length) {G__65431__a[G__65431__i] = arguments[G__65431__i + 3]; ++G__65431__i;}
  more = new cljs.core.IndexedSeq(G__65431__a,0,null);
} 
return G__65430__delegate.call(this,x,y,z,more);};
G__65430.cljs$lang$maxFixedArity = 3;
G__65430.cljs$lang$applyTo = (function (arglist__65432){
var x = cljs.core.first(arglist__65432);
arglist__65432 = cljs.core.next(arglist__65432);
var y = cljs.core.first(arglist__65432);
arglist__65432 = cljs.core.next(arglist__65432);
var z = cljs.core.first(arglist__65432);
var more = cljs.core.rest(arglist__65432);
return G__65430__delegate(x,y,z,more);
});
G__65430.cljs$core$IFn$_invoke$arity$variadic = G__65430__delegate;
return G__65430;
})()
;
taoensso$encore$memoize_last_$_memoized_fn = function(x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return taoensso$encore$memoize_last_$_memoized_fn__0.call(this);
case 1:
return taoensso$encore$memoize_last_$_memoized_fn__1.call(this,x);
case 2:
return taoensso$encore$memoize_last_$_memoized_fn__2.call(this,x,y);
case 3:
return taoensso$encore$memoize_last_$_memoized_fn__3.call(this,x,y,z);
default:
var G__65433 = null;
if (arguments.length > 3) {
var G__65434__i = 0, G__65434__a = new Array(arguments.length -  3);
while (G__65434__i < G__65434__a.length) {G__65434__a[G__65434__i] = arguments[G__65434__i + 3]; ++G__65434__i;}
G__65433 = new cljs.core.IndexedSeq(G__65434__a,0,null);
}
return taoensso$encore$memoize_last_$_memoized_fn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__65433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$memoize_last_$_memoized_fn.cljs$lang$maxFixedArity = 3;
taoensso$encore$memoize_last_$_memoized_fn.cljs$lang$applyTo = taoensso$encore$memoize_last_$_memoized_fn__4.cljs$lang$applyTo;
taoensso$encore$memoize_last_$_memoized_fn.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$memoize_last_$_memoized_fn__0;
taoensso$encore$memoize_last_$_memoized_fn.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$memoize_last_$_memoized_fn__1;
taoensso$encore$memoize_last_$_memoized_fn.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$memoize_last_$_memoized_fn__2;
taoensso$encore$memoize_last_$_memoized_fn.cljs$core$IFn$_invoke$arity$3 = taoensso$encore$memoize_last_$_memoized_fn__3;
taoensso$encore$memoize_last_$_memoized_fn.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$memoize_last_$_memoized_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return taoensso$encore$memoize_last_$_memoized_fn;
})()
});
/**
 * For Clj: fastest possible memoize. Non-racey, 0-7 arity only.
 *   For Cljs: same as `core/memoize`.
 */
taoensso.encore.fmemoize = (function taoensso$encore$fmemoize(f){
return cljs.core.memoize(f);
});
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(rate){
return (Math.random() <= rate);
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

(taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.SimpleCacheEntry.cljs$lang$type = true);

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry");

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"taoensso.encore/SimpleCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/SimpleCacheEntry.
 */
taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

(taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lru","tick-lru",1625824877,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lfu","tick-lfu",-1976905322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.TickedCacheEntry.cljs$lang$type = true);

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry");

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"taoensso.encore/TickedCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/TickedCacheEntry.
 */
taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Returns a cached version of given referentially transparent function `f`.
 * 
 *   Like `core/memoize` but:
 *  - Often faster, depending on options.
 *  - Prevents race conditions on writes.
 *  - Supports cache invalidation by prepending args with:
 *    - `:cache/del`   ; Delete cached item for subsequent args, returns nil.
 *    - `:cache/fresh` ; Renew  cached item for subsequent args, returns new val.
 * 
 *  - Supports options:
 *    - `ttl-ms` ; Expire cached items after <this> many msecs.
 *    - `size`   ; Restrict cache size to <this> many items at the next garbage
 *               ; collection (GC).
 * 
 *    - `gc-every` ; Run garbage collection (GC) approximately once every
 *                 ; <this> many calls to cached fn. If unspecified, GC rate
 *                 ; will be determined automatically based on `size`.
 * 
 *   See also `defn-cached`, `fmemoize`, `memoize-last`.
 */
taoensso.encore.cache = (function taoensso$encore$cache(var_args){
var G__63994 = arguments.length;
switch (G__63994) {
case 1:
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = ({});
return (function() { 
var taoensso$encore$cached__delegate = function (xs){
var x1 = cljs.core.first(xs);
var G__63998 = x1;
var G__63998__$1 = (((G__63998 instanceof cljs.core.Keyword))?G__63998.fqn:null);
switch (G__63998__$1) {
case "cache/del":
case "mem/del":
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.keyword_identical_QMARK_(x2,new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache_.cljs$core$IDeref$_deref$arity$1(null),xn));
}

return null;

break;
case "cache/fresh":
case "mem/fresh":
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache_.cljs$core$IDeref$_deref$arity$1(null),xn,v));

return v;

break;
default:
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache_.cljs$core$IDeref$_deref$arity$1(null),xs,v__$1));

return v__$1;
} else {
return v;
}

}
};
var taoensso$encore$cached = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__65466__i = 0, G__65466__a = new Array(arguments.length -  0);
while (G__65466__i < G__65466__a.length) {G__65466__a[G__65466__i] = arguments[G__65466__i + 0]; ++G__65466__i;}
  xs = new cljs.core.IndexedSeq(G__65466__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,xs);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__65467){
var xs = cljs.core.seq(arglist__65467);
return taoensso$encore$cached__delegate(xs);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
}));

(taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2 = (function (p__64007,f){
var map__64008 = p__64007;
var map__64008__$1 = cljs.core.__destructure_map(map__64008);
var opts = map__64008__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64008__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var ttl_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64008__$1,new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875));
var gc_every = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64008__$1,new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691));
var error64014_65468 = (function (){try{if(cljs.core.truth_((function (arg64009){
return taoensso.truss.impl.ks_LT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),null], null), null),arg64009);
})(opts))){
return null;
} else {
return taoensso.truss.impl.FalsePredError;
}
}catch (e64016){var e = e64016;
return e;
}})();
if(cljs.core.truth_(error64014_65468)){
taoensso.truss.failed_assertion_BANG_("taoensso.encore",4325,4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ks<=","ks<=",1664853833),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),"null",new cljs.core.Keyword(null,"size","size",1098693007),"null",new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),"null"], null), null)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),opts,null,error64014_65468);
} else {
}

var ps64018_65473 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-num?","pos-num?",976533390,null)], null);
var pf64019_65474 = (function (arg64017){
if((arg64017 == null)){
return true;
} else {
return taoensso.encore.pos_num_QMARK_(arg64017);
}
});
var df64020_65475 = null;
var error64022_65476 = (function (){try{if(cljs.core.truth_(pf64019_65474(size))){
return null;
} else {
return taoensso.truss.impl.FalsePredError;
}
}catch (e64024){var e = e64024;
return e;
}})();
if(cljs.core.truth_(error64022_65476)){
taoensso.truss.failed_assertion_BANG_("taoensso.encore",4326,4,ps64018_65473,new cljs.core.Symbol(null,"size","size",-1555742762,null),size,df64020_65475,error64022_65476);
} else {
}

var error64025_65477 = (function (){try{if(cljs.core.truth_(pf64019_65474(ttl_ms))){
return null;
} else {
return taoensso.truss.impl.FalsePredError;
}
}catch (e64027){var e = e64027;
return e;
}})();
if(cljs.core.truth_(error64025_65477)){
taoensso.truss.failed_assertion_BANG_("taoensso.encore",4326,4,ps64018_65473,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null),ttl_ms,df64020_65475,error64025_65477);
} else {
}

var error64028_65478 = (function (){try{if(cljs.core.truth_(pf64019_65474(gc_every))){
return null;
} else {
return taoensso.truss.impl.FalsePredError;
}
}catch (e64030){var e = e64030;
return e;
}})();
if(cljs.core.truth_(error64028_65478)){
taoensso.truss.failed_assertion_BANG_("taoensso.encore",4326,4,ps64018_65473,new cljs.core.Symbol(null,"gc-every","gc-every",-21013164,null),gc_every,df64020_65475,error64028_65478);
} else {
}


if(cljs.core.truth_(size)){
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var ticker = (taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.counter.call(null));
var cache_ = taoensso.encore.latom(null);
var latch_ = taoensso.encore.latom(null);
var ttl_ms__$1 = cljs.core.long$((function (){var or__5025__auto__ = ttl_ms;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})());
var ttl_QMARK_ = (!((ttl_ms__$1 === (0))));
var size__$1 = cljs.core.long$(size);
var gc_every__$1 = cljs.core.long$((function (){var or__5025__auto__ = gc_every;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return taoensso.encore.clamp_int((1000),(16000),size__$1);
}
})());
return (function() { 
var taoensso$encore$cached__delegate = function (args){
var a1 = cljs.core.first(args);
var G__64040 = a1;
var G__64040__$1 = (((G__64040 instanceof cljs.core.Keyword))?G__64040.fqn:null);
switch (G__64040__$1) {
case "cache/del":
case "mem/del":
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__64043 = a2;
var G__64043__$1 = (((G__64043 instanceof cljs.core.Keyword))?G__64043.fqn:null);
switch (G__64043__$1) {
case "cache/all":
case "mem/all":
return true;

break;
default:
return false;

}
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
var G__64044_65481 = (function (p1__63984_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__63984_SHARP_,argn);
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__64044_65481) : cache_.call(null,G__64044_65481));
}

return null;

break;
default:
var tick = (ticker.cljs$core$IFn$_invoke$arity$0 ? ticker.cljs$core$IFn$_invoke$arity$0() : ticker.call(null));
var instant = ((ttl_QMARK_)?taoensso.encore.now_udt():(0));
if((((cljs.core.rem(tick,gc_every__$1) === (0))) && ((cljs.core.count((cache_.cljs$core$IFn$_invoke$arity$0 ? cache_.cljs$core$IFn$_invoke$arity$0() : cache_.call(null))) >= (1.1 * size__$1))))){
var latch_65482 = null;
var udt_floor_65483 = (instant - ttl_ms__$1);
if(cljs.core.compare_and_set_BANG_(latch_,null,latch_65482)){
if(ttl_QMARK_){
var G__64045_65484 = (function taoensso$encore$cached_$_swap_fn(m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,e){
if((e.udt < udt_floor_65483)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$((function (){var or__5025__auto__ = m;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__64045_65484) : cache_.call(null,G__64045_65484));
} else {
}

var snapshot_65489 = (cache_.cljs$core$IFn$_invoke$arity$0 ? cache_.cljs$core$IFn$_invoke$arity$0() : cache_.call(null));
var n_to_gc_65490 = (cljs.core.count(snapshot_65489) - size__$1);
if((n_to_gc_65490 >= (0.1 * size__$1))){
var ks_to_gc_65495 = (function (){var G__64047 = n_to_gc_65490;
var G__64048 = (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_65489,k);
return (e.tick_lru + e.tick_lfu);
});
var G__64049 = cljs.core.keys(snapshot_65489);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__64047,G__64048,G__64049) : taoensso.encore.top.call(null,G__64047,G__64048,G__64049));
})();
var G__64050_65496 = (function taoensso$encore$cached_$_swap_fn(m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),cljs.core.transient$((function (){var or__5025__auto__ = m;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_65495));
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__64050_65496) : cache_.call(null,G__64050_65496));
} else {
}

} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__64054 = a1;
var G__64054__$1 = (((G__64054 instanceof cljs.core.Keyword))?G__64054.fqn:null);
switch (G__64054__$1) {
case "cache/fresh":
case "mem/fresh":
return true;

break;
default:
return false;

}
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var _ = null;
var e = (function (){var G__64055 = args__$1;
var G__64056 = (function taoensso$encore$cached_$_swap_fn(_QMARK_e){
if(cljs.core.truth_((function (){var or__5025__auto__ = (_QMARK_e == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}),null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});
return (cache_.cljs$core$IFn$_invoke$arity$2 ? cache_.cljs$core$IFn$_invoke$arity$2(G__64055,G__64056) : cache_.call(null,G__64055,G__64056));
})();
return cljs.core.deref(e.delay);

}
};
var taoensso$encore$cached = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65506__i = 0, G__65506__a = new Array(arguments.length -  0);
while (G__65506__i < G__65506__a.length) {G__65506__a[G__65506__i] = arguments[G__65506__i + 0]; ++G__65506__i;}
  args = new cljs.core.IndexedSeq(G__65506__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,args);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__65507){
var args = cljs.core.seq(arglist__65507);
return taoensso$encore$cached__delegate(args);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
} else {
if(cljs.core.truth_(ttl_ms)){
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var cache_ = taoensso.encore.latom(null);
var latch_ = taoensso.encore.latom(null);
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
var gc_rate = (function (){var gce = (function (){var or__5025__auto__ = gc_every;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return 8000.0;
}
})();
return (1.0 / cljs.core.long$(gce));
})();
return (function() { 
var taoensso$encore$cached__delegate = function (args){
var a1 = cljs.core.first(args);
var G__64058 = a1;
var G__64058__$1 = (((G__64058 instanceof cljs.core.Keyword))?G__64058.fqn:null);
switch (G__64058__$1) {
case "cache/del":
case "mem/del":
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__64059 = a2;
var G__64059__$1 = (((G__64059 instanceof cljs.core.Keyword))?G__64059.fqn:null);
switch (G__64059__$1) {
case "cache/all":
case "mem/all":
return true;

break;
default:
return false;

}
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
var G__64060_65521 = (function (p1__63988_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__63988_SHARP_,argn);
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__64060_65521) : cache_.call(null,G__64060_65521));
}

return null;

break;
default:
var instant = taoensso.encore.now_udt();
if(cljs.core.truth_((gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1 ? gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1(gc_rate) : gc_now_QMARK_.call(null,gc_rate)))){
var latch_65523 = null;
if(cljs.core.compare_and_set_BANG_(latch_,null,latch_65523)){
var G__64065_65524 = (function taoensso$encore$cached_$_swap_fn(m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$((function (){var or__5025__auto__ = m;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__64065_65524) : cache_.call(null,G__64065_65524));

} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__64068 = a1;
var G__64068__$1 = (((G__64068 instanceof cljs.core.Keyword))?G__64068.fqn:null);
switch (G__64068__$1) {
case "cache/fresh":
case "mem/fresh":
return true;

break;
default:
return false;

}
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var _ = null;
var e = (function (){var G__64070 = args__$1;
var G__64071 = (function taoensso$encore$cached_$_swap_fn(_QMARK_e){
if(cljs.core.truth_((function (){var or__5025__auto__ = (_QMARK_e == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}),null)),instant));
} else {
return _QMARK_e;
}
});
return (cache_.cljs$core$IFn$_invoke$arity$2 ? cache_.cljs$core$IFn$_invoke$arity$2(G__64070,G__64071) : cache_.call(null,G__64070,G__64071));
})();
return cljs.core.deref(e.delay);

}
};
var taoensso$encore$cached = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65531__i = 0, G__65531__a = new Array(arguments.length -  0);
while (G__65531__i < G__65531__a.length) {G__65531__a[G__65531__i] = arguments[G__65531__i + 0]; ++G__65531__i;}
  args = new cljs.core.IndexedSeq(G__65531__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,args);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__65532){
var args = cljs.core.seq(arglist__65532);
return taoensso$encore$cached__delegate(args);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
} else {
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1(f);
}
}
}));

(taoensso.encore.cache.cljs$lang$maxFixedArity = 2);

/**
 * Alternative way to call `cache`, provided mostly for back compatibility.
 *   See `cache` docstring for details.
 */
taoensso.encore.memoize = (function taoensso$encore$memoize(var_args){
var G__64075 = arguments.length;
switch (G__64075) {
case 1:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1(f);
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),ttl_ms], null),f);
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3 = (function (size,ttl_ms,f){
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),ttl_ms], null),f);
}));

(taoensso.encore.memoize.cljs$lang$maxFixedArity = 3);

/**
 * Private, don't use.
 *   Returns a basic rate limiter (fn []) that will return falsey (allow) at most once
 *   every given number of milliseconds.
 * 
 *   Similar to (rate-limiter [1 <msecs>]) but significantly faster to construct and run.
 *   Doesn't support request ids!
 */
taoensso.encore.rate_limiter_once_per = (function taoensso$encore$rate_limiter_once_per(msecs){
var last_ = cljs.core.volatile_BANG_((0));
var msecs__$1 = cljs.core.long$(msecs);
return (function() {
var taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per = null;
var taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per__0 = (function (){
var t1 = Date.now();
if(((t1 - cljs.core.deref(last_)) > msecs__$1)){
cljs.core.vreset_BANG_(last_,t1);

return null;
} else {
return true;
}
});
var taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per__1 = (function (req_id){
throw taoensso.truss.ex_info_STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4548,17], null),"[encore/rate-limiter] Basic rate limiters don't support request ids",cljs.core.PersistentArrayMap.EMPTY,null);
});
taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per = function(req_id){
switch(arguments.length){
case 0:
return taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per__0.call(this);
case 1:
return taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per__1.call(this,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per__0;
taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per__1;
return taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per;
})()
});

/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

(taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ms","ms",487821794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitSpec.cljs$lang$type = true);

(taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec");

(taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"taoensso.encore/LimitSpec");
}));

/**
 * Positional factory function for taoensso.encore/LimitSpec.
 */
taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

(taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"udt0","udt0",-969222777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitEntry.cljs$lang$type = true);

(taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry");

(taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"taoensso.encore/LimitEntry");
}));

/**
 * Positional factory function for taoensso.encore/LimitEntry.
 */
taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_lid,worst_ms){
this.m = m;
this.worst_lid = worst_lid;
this.worst_ms = worst_ms;
});

(taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"worst-lid","worst-lid",-2058001927,null),cljs.core.with_meta(new cljs.core.Symbol(null,"worst-ms","worst-ms",1541498579,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitHits.cljs$lang$type = true);

(taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits");

(taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"taoensso.encore/LimitHits");
}));

/**
 * Positional factory function for taoensso.encore/LimitHits.
 */
taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_lid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_lid,worst_ms));
});

var limit_spec_65540 = (function (n,ms){
var ps64080_65541 = new cljs.core.Symbol("taoensso.encore","pos-int?","taoensso.encore/pos-int?",186070635,null);
var pf64081_65542 = taoensso.encore.pos_int_QMARK_;
var df64082_65543 = null;
var error64084_65544 = (function (){try{if(cljs.core.truth_((pf64081_65542.cljs$core$IFn$_invoke$arity$1 ? pf64081_65542.cljs$core$IFn$_invoke$arity$1(n) : pf64081_65542.call(null,n)))){
return null;
} else {
return taoensso.truss.impl.FalsePredError;
}
}catch (e64086){var e = e64086;
return e;
}})();
if(cljs.core.truth_(error64084_65544)){
taoensso.truss.failed_assertion_BANG_("taoensso.encore",4558,29,ps64080_65541,new cljs.core.Symbol(null,"n","n",-2092305744,null),n,df64082_65543,error64084_65544);
} else {
}

var error64087_65545 = (function (){try{if(cljs.core.truth_((pf64081_65542.cljs$core$IFn$_invoke$arity$1 ? pf64081_65542.cljs$core$IFn$_invoke$arity$1(ms) : pf64081_65542.call(null,ms)))){
return null;
} else {
return taoensso.truss.impl.FalsePredError;
}
}catch (e64089){var e = e64089;
return e;
}})();
if(cljs.core.truth_(error64087_65545)){
taoensso.truss.failed_assertion_BANG_("taoensso.encore",4558,29,ps64080_65541,new cljs.core.Symbol(null,"ms","ms",487821794,null),ms,df64082_65543,error64087_65545);
} else {
}


return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_spec = (function taoensso$encore$coerce_limit_spec(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (acc,lid,p__64090){
var vec__64091 = p__64090;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64091,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64091,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,lid,limit_spec_65540(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__64094){
var vec__64095 = p__64094;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64095,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64095,(1),null);
var _QMARK_lid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64095,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__5025__auto__ = _QMARK_lid;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,ms], null);
}
})(),limit_spec_65540(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
return taoensso.truss.unexpected_arg_BANG__STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4570,7], null),x,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","rate-limiter","taoensso.encore/rate-limiter",1705152470,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"rate-limiter-spec","rate-limiter-spec",1678589253,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"map","map",-1282745308,null),"null",new cljs.core.Symbol(null,"vector","vector",-751469611,null),"null"], null), null)], null));
}
}
});
/**
 * Takes a spec of form
 *  [           [<n-max-reqs> <msecs-window>] ...] or ; Unnamed limits
 *  {<limit-id> [<n-max-reqs> <msecs-window>]}        ;   Named limits
 *   and returns stateful (fn a-rate-limiter [] [req-id] [command req-id]).
 * 
 *   Call the returned limiter fn with a request id (any Clojure value!) to
 *   enforce limits independently for each id.
 * 
 *   For example, (limiter-fn <ip-address-string>) will return:
 *  - Falsey when    allowed (all limits pass for given IP), or
 *  - Truthy when disallowed (any limits fail for given IP):
 *    [<worst-limit-id> <worst-backoff-msecs> {<limit-id> <backoff-msecs>}]
 * 
 *   Or call the returned limiter fn with an extra command argument:
 *  (limiter-fn :rl/peek  <req-id) - Check limits WITHOUT incrementing count
 *  (limiter-fn :rl/reset <req-id) - Reset all limits for given req-id
 */
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(var_args){
var G__64108 = arguments.length;
switch (G__64108) {
case 1:
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2(null,spec);
}));

(taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2 = (function (opts,spec){
var map__64113 = opts;
var map__64113__$1 = cljs.core.__destructure_map(map__64113);
var with_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64113__$1,new cljs.core.Keyword(null,"with-state?","with-state?",1044523183));
if(cljs.core.empty_QMARK_(spec)){
if(cljs.core.truth_(with_state_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly(null)], null);
} else {
return cljs.core.constantly(null);
}
} else {
var spec__$1 = taoensso.encore.coerce_limit_spec(spec);
var b2__30441__auto__ = (function (){var and__5023__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"allow-basic?","allow-basic?",-810481502));
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(spec__$1),(1));
if(and__5023__auto____$1){
var s = cljs.core.val(cljs.core.first(spec__$1));
if((s.n === (1))){
return s.ms;
} else {
return null;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(b2__30441__auto__)){
var once_per_msecs = b2__30441__auto__;
if(cljs.core.truth_(with_state_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,taoensso.encore.rate_limiter_once_per(once_per_msecs)], null);
} else {
return taoensso.encore.rate_limiter_once_per(once_per_msecs);
}
} else {
var latch_ = taoensso.encore.latom(null);
var reqs_ = taoensso.encore.latom(null);
var map__64122 = opts;
var map__64122__$1 = cljs.core.__destructure_map(map__64122);
var gc_every = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64122__$1,new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),16000.0);
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var gc_rate = (function (){var gce = cljs.core.long$(gc_every);
return (1.0 / gce);
})();
var f1 = (function (rid,delta,peek_QMARK_){
var instant = taoensso.encore.now_udt();
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(peek_QMARK_);
if(and__5023__auto__){
return (gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1 ? gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1(gc_rate) : gc_now_QMARK_.call(null,gc_rate));
} else {
return and__5023__auto__;
}
})())){
var latch_65553 = null;
if(cljs.core.compare_and_set_BANG_(latch_,null,latch_65553)){
var G__64130_65554 = (function taoensso$encore$swap_fn(reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv((function (acc__$1,lid,e){
var b2__30441__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec__$1,lid);
if(cljs.core.truth_(b2__30441__auto____$1)){
var s = b2__30441__auto____$1;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,lid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,lid);
}
}),entries,entries);
if(cljs.core.empty_QMARK_(new_entries)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,rid__$1,new_entries);
}
}),cljs.core.transient$((function (){var or__5025__auto__ = reqs;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
});
(reqs_.cljs$core$IFn$_invoke$arity$1 ? reqs_.cljs$core$IFn$_invoke$arity$1(G__64130_65554) : reqs_.call(null,G__64130_65554));

} else {
}
} else {
}

while(true){
var reqs = (reqs_.cljs$core$IFn$_invoke$arity$0 ? reqs_.cljs$core$IFn$_invoke$arity$0() : reqs_.call(null));
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reqs,rid);
var _QMARK_hits = (cljs.core.truth_(entries)?cljs.core.reduce_kv(((function (reqs,entries,instant,latch_,reqs_,map__64122,map__64122__$1,gc_every,gc_now_QMARK_,gc_rate,b2__30441__auto__,spec__$1,map__64113,map__64113__$1,with_state_QMARK_){
return (function (acc,lid,e){
var b2__30441__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec__$1,lid);
if(cljs.core.truth_(b2__30441__auto____$1)){
var s = b2__30441__auto____$1;
if(((e.n + delta) <= s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([lid,tdelta]),lid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,lid,tdelta),lid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,lid,tdelta),acc.worst_lid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,map__64122,map__64122__$1,gc_every,gc_now_QMARK_,gc_rate,b2__30441__auto__,spec__$1,map__64113,map__64113__$1,with_state_QMARK_))
,null,entries):null);
if(cljs.core.truth_((function (){var or__5025__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__30441__auto____$1 = _QMARK_hits;
if(cljs.core.truth_(b2__30441__auto____$1)){
var h = b2__30441__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_lid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__30441__auto____$1 = (latch_.cljs$core$IFn$_invoke$arity$0 ? latch_.cljs$core$IFn$_invoke$arity$0() : latch_.call(null));
if(cljs.core.truth_(b2__30441__auto____$1)){
var l = b2__30441__auto____$1;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__30441__auto____$1,reqs,entries,_QMARK_hits,instant,latch_,reqs_,map__64122,map__64122__$1,gc_every,gc_now_QMARK_,gc_rate,b2__30441__auto__,spec__$1,map__64113,map__64113__$1,with_state_QMARK_){
return (function (acc,lid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,lid,(function (){var b2__30441__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,lid);
if(cljs.core.truth_(b2__30441__auto____$2)){
var e = b2__30441__auto____$2;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry(delta,instant));
} else {
return (new taoensso.encore.LimitEntry((delta + e.n),udt0));
}
} else {
return (new taoensso.encore.LimitEntry(delta,instant));
}
})());
});})(b2__30441__auto____$1,reqs,entries,_QMARK_hits,instant,latch_,reqs_,map__64122,map__64122__$1,gc_every,gc_now_QMARK_,gc_rate,b2__30441__auto__,spec__$1,map__64113,map__64113__$1,with_state_QMARK_))
,entries,spec__$1);
if(cljs.core.compare_and_set_BANG_(reqs_,reqs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reqs,rid,new_entries))){
return null;
} else {
continue;
}
}
}
break;
}
});
var limiter_fn = (function() {
var taoensso$encore$a_rate_limiter = null;
var taoensso$encore$a_rate_limiter__0 = (function (){
return f1(null,(1),false);
});
var taoensso$encore$a_rate_limiter__1 = (function (req_id){
return f1(req_id,(1),false);
});
var taoensso$encore$a_rate_limiter__2 = (function (cmd,req_id){
var G__64149 = cmd;
var G__64149__$1 = (((G__64149 instanceof cljs.core.Keyword))?G__64149.fqn:null);
switch (G__64149__$1) {
case "rl/reset":
case "limiter/reset":
if(cljs.core.truth_((function (){var G__64150 = req_id;
var G__64150__$1 = (((G__64150 instanceof cljs.core.Keyword))?G__64150.fqn:null);
switch (G__64150__$1) {
case "rl/all":
case "limiter/all":
return true;

break;
default:
return false;

}
})())){
cljs.core.reset_BANG_(reqs_,null);
} else {
var G__64154_65562 = (function (p1__64103_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__64103_SHARP_,req_id);
});
(reqs_.cljs$core$IFn$_invoke$arity$1 ? reqs_.cljs$core$IFn$_invoke$arity$1(G__64154_65562) : reqs_.call(null,G__64154_65562));
}

return null;

break;
case "rl/peek":
case "limiter/peek":
return f1(req_id,(1),true);

break;
default:
if(typeof cmd === 'number'){
return f1(req_id,cljs.core.long$(cmd),false);
} else {
return taoensso.truss.unexpected_arg_BANG__STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4732,14], null),cmd,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","rate-limiter","taoensso.encore/rate-limiter",1705152470,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"rate-limiter-command","rate-limiter-command",1767414198,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rl","reset","rl/reset",-800926172),null,new cljs.core.Keyword("rl","peek","rl/peek",-291391771),null], null), null),new cljs.core.Keyword(null,"req-id","req-id",-471642231),req_id], null));
}

}
});
taoensso$encore$a_rate_limiter = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$a_rate_limiter__0.call(this);
case 1:
return taoensso$encore$a_rate_limiter__1.call(this,cmd);
case 2:
return taoensso$encore$a_rate_limiter__2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$a_rate_limiter.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$a_rate_limiter__0;
taoensso$encore$a_rate_limiter.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$a_rate_limiter__1;
taoensso$encore$a_rate_limiter.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$a_rate_limiter__2;
return taoensso$encore$a_rate_limiter;
})()
;
if(cljs.core.truth_(with_state_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,limiter_fn], null);
} else {
return limiter_fn;
}
}
}
}));

(taoensso.encore.rate_limiter.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.Counter = (function (c){
this.c = c;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.Counter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.c;
}));

(taoensso.encore.Counter.prototype.call = (function (unused__11804__auto__){
var self__ = this;
var self__ = this;
var G__64165 = (arguments.length - (1));
switch (G__64165) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.encore.Counter.prototype.apply = (function (self__,args64161){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args64161)));
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var o = self__.c;
(self__.c = (self__.c + (1)));

return o;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$1 = (function (add){
var self__ = this;
var _ = this;
var o = self__.c;
(self__.c = (self__.c + add));

return o;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$2 = (function (action,n){
var self__ = this;
var _ = this;
var G__64171 = action;
var G__64171__$1 = (((G__64171 instanceof cljs.core.Keyword))?G__64171.fqn:null);
switch (G__64171__$1) {
case "add":
(self__.c = (self__.c + n));

return null;

break;
case "set":
(self__.c = n);

return null;

break;
case "set=":
case "set-get":
(self__.c = n);

return n;

break;
case "=set":
case "get-set":
var o = self__.c;
(self__.c = n);

return o;

break;
case "=+":
case "get-add":
var o = self__.c;
(self__.c = (self__.c + n));

return o;

break;
case "+=":
case "add-get":
(self__.c = (self__.c + n));

return self__.c;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64171__$1)].join('')));

}
}));

(taoensso.encore.Counter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(taoensso.encore.Counter.cljs$lang$type = true);

(taoensso.encore.Counter.cljs$lang$ctorStr = "taoensso.encore/Counter");

(taoensso.encore.Counter.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"taoensso.encore/Counter");
}));

/**
 * Positional factory function for taoensso.encore/Counter.
 */
taoensso.encore.__GT_Counter = (function taoensso$encore$__GT_Counter(c){
return (new taoensso.encore.Counter(c));
});

/**
 * Returns a fast atomic `Counter` with `init` initial integer value with:
 *  - @counter           => Return current val
 *  - (counter)          => Add 1 and return old val
 *  - (counter n)        => Add n and return old val
 *  - (counter action n) => Experimental, action ∈
 *      {:add :set :set-get :get-set :get-add :add-get}.
 */
taoensso.encore.counter = (function taoensso$encore$counter(var_args){
var G__64175 = arguments.length;
switch (G__64175) {
case 0:
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1((0));
}));

(taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new taoensso.encore.Counter(cljs.core.long$(init)));
}));

(taoensso.encore.counter.cljs$lang$maxFixedArity = 1);

taoensso.encore.rc_deref = (function taoensso$encore$rc_deref(msecs,ts_,n_skip_,gc_fn){
var t1 = taoensso.encore.now_udt();
var n_skip0 = (n_skip_.cljs$core$IFn$_invoke$arity$0 ? n_skip_.cljs$core$IFn$_invoke$arity$0() : n_skip_.call(null));
var ts = (ts_.cljs$core$IFn$_invoke$arity$0 ? ts_.cljs$core$IFn$_invoke$arity$0() : ts_.call(null));
var n_total = cljs.core.count(ts);
var n_window = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,t0){
if(((t1 - t0) <= msecs)){
return (n + (1));
} else {
return n;
}
}),(0),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ts,n_skip0));
var n_skip1 = (n_total - n_window);
if((n_skip0 < n_skip1)){
if(cljs.core.compare_and_set_BANG_(n_skip_,n_skip0,n_skip1)){
if((n_skip1 > (10000))){
(gc_fn.cljs$core$IFn$_invoke$arity$1 ? gc_fn.cljs$core$IFn$_invoke$arity$1(n_skip1) : gc_fn.call(null,n_skip1));
} else {
}
} else {
}
} else {
}

return n_window;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.RollingCounter = (function (msecs,ts_,n_skip_){
this.msecs = msecs;
this.ts_ = ts_;
this.n_skip_ = n_skip_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.RollingCounter.prototype.call = (function (unused__11804__auto__){
var self__ = this;
var self__ = this;
var G__64186 = (arguments.length - (1));
switch (G__64186) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.encore.RollingCounter.prototype.apply = (function (self__,args64185){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args64185)));
}));

(taoensso.encore.RollingCounter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var t1_65581 = taoensso.encore.now_udt();
var G__64187_65582 = (function (p1__64179_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__64179_SHARP_,t1_65581);
});
(self__.ts_.cljs$core$IFn$_invoke$arity$1 ? self__.ts_.cljs$core$IFn$_invoke$arity$1(G__64187_65582) : self__.ts_.call(null,G__64187_65582));

return this$;
}));

(taoensso.encore.RollingCounter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.rc_deref(self__.msecs,self__.ts_,self__.n_skip_,(function taoensso$encore$gc(n_skip1){
var G__64188_65583 = (function (p1__64180_SHARP_){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(p1__64180_SHARP_,n_skip1);
});
(self__.ts_.cljs$core$IFn$_invoke$arity$1 ? self__.ts_.cljs$core$IFn$_invoke$arity$1(G__64188_65583) : self__.ts_.call(null,G__64188_65583));

return cljs.core.reset_BANG_(self__.n_skip_,(0));
}));
}));

(taoensso.encore.RollingCounter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"msecs","msecs",-942455216,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"ts_","ts_",775102722,null),new cljs.core.Symbol(null,"n-skip_","n-skip_",-1562682054,null)], null);
}));

(taoensso.encore.RollingCounter.cljs$lang$type = true);

(taoensso.encore.RollingCounter.cljs$lang$ctorStr = "taoensso.encore/RollingCounter");

(taoensso.encore.RollingCounter.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"taoensso.encore/RollingCounter");
}));

/**
 * Positional factory function for taoensso.encore/RollingCounter.
 */
taoensso.encore.__GT_RollingCounter = (function taoensso$encore$__GT_RollingCounter(msecs,ts_,n_skip_){
return (new taoensso.encore.RollingCounter(msecs,ts_,n_skip_));
});

/**
 * Experimental, subject to change without notice.
 *   Returns a RollingCounter that you can:
 *  - Invoke to increment count in last `msecs` window and return RollingCounter.
 *  - Deref  to return    count in last `msecs` window.
 */
taoensso.encore.rolling_counter = (function taoensso$encore$rolling_counter(msecs){
return (new taoensso.encore.RollingCounter(cljs.core.long$((function (){var error64193 = (function (){try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_(msecs))){
return null;
} else {
return taoensso.truss.impl.FalsePredError;
}
}catch (e64195){var e = e64195;
return e;
}})();
if(cljs.core.truth_(error64193)){
return taoensso.truss.failed_assertion_BANG_("taoensso.encore",4873,11,new cljs.core.Symbol("taoensso.encore","pos-int?","taoensso.encore/pos-int?",186070635,null),new cljs.core.Symbol(null,"msecs","msecs",-942455216,null),msecs,null,error64193);
} else {
return msecs;
}
})()),taoensso.encore.latom(cljs.core.PersistentVector.EMPTY),taoensso.encore.latom((0))));
});
/**
 * Returns a stateful fn of 2 arities:
 *  [ ] => Returns current sub/vector in O(1).
 *  [x] => Adds `x` to right of sub/vector, maintaining length <= `nmax`.
 *         Returns current sub/vector.
 * 
 *   Useful for maintaining limited-length histories, etc.
 *   See also `rolling-list` (Clj only).
 */
taoensso.encore.rolling_vector = (function taoensso$encore$rolling_vector(var_args){
var G__64202 = arguments.length;
switch (G__64202) {
case 1:
return taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$1 = (function (nmax){
return taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$2(nmax,null);
}));

(taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$2 = (function (nmax,p__64203){
var map__64204 = p__64203;
var map__64204__$1 = cljs.core.__destructure_map(map__64204);
var gc_every = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64204__$1,new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),16000.0);
var init_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64204__$1,new cljs.core.Keyword(null,"init-val","init-val",-70272968));
var nmax__$1 = cljs.core.long$(nmax);
var acc_ = taoensso.encore.latom(cljs.core.vec(init_val));
var gc_every__$1 = (cljs.core.truth_(gc_every)?cljs.core.long$(gc_every):null);
var ticker = (cljs.core.truth_(gc_every__$1)?taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0():null);
var latch_ = (cljs.core.truth_(gc_every__$1)?taoensso.encore.latom(null):null);
return (function() {
var taoensso$encore$rolling_vec_fn = null;
var taoensso$encore$rolling_vec_fn__0 = (function (){
return (acc_.cljs$core$IFn$_invoke$arity$0 ? acc_.cljs$core$IFn$_invoke$arity$0() : acc_.call(null));
});
var taoensso$encore$rolling_vec_fn__1 = (function (x){
if(cljs.core.truth_(gc_every__$1)){
var tick_65585 = (ticker.cljs$core$IFn$_invoke$arity$0 ? ticker.cljs$core$IFn$_invoke$arity$0() : ticker.call(null));
var b2__30441__auto___65586 = (cljs.core.rem(tick_65585,gc_every__$1) === (0));
if(b2__30441__auto___65586){
var gc_now_QMARK__65587 = b2__30441__auto___65586;
var G__64205_65588 = (function taoensso$encore$rolling_vec_fn_$_swap_fn(sv){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,sv);
});
(acc_.cljs$core$IFn$_invoke$arity$1 ? acc_.cljs$core$IFn$_invoke$arity$1(G__64205_65588) : acc_.call(null,G__64205_65588));
} else {
}
} else {
}

var G__64206 = (function taoensso$encore$rolling_vec_fn_$_swap_fn(acc){
var new$ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
if((cljs.core.count(new$) > nmax__$1)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(new$,(1));
} else {
return new$;
}
});
return (acc_.cljs$core$IFn$_invoke$arity$1 ? acc_.cljs$core$IFn$_invoke$arity$1(G__64206) : acc_.call(null,G__64206));
});
taoensso$encore$rolling_vec_fn = function(x){
switch(arguments.length){
case 0:
return taoensso$encore$rolling_vec_fn__0.call(this);
case 1:
return taoensso$encore$rolling_vec_fn__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$rolling_vec_fn.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$rolling_vec_fn__0;
taoensso$encore$rolling_vec_fn.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$rolling_vec_fn__1;
return taoensso$encore$rolling_vec_fn;
})()
}));

(taoensso.encore.rolling_vector.cljs$lang$maxFixedArity = 2);

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
/**
 * Like `core/sort` but:
 *  - Returns a vector.
 *  - `comparator` can be `:asc`, `:desc`, or an arbitrary comparator.
 *  - An optional `keyfn` may be provided, as in `core/sort-by`.
 */
taoensso.encore.sortv = (function taoensso$encore$sortv(var_args){
var G__64208 = arguments.length;
switch (G__64208) {
case 1:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3(null,new cljs.core.Keyword(null,"asc","asc",356854569),coll);
}));

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$2 = (function (comparator,coll){
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3(null,comparator,coll);
}));

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_keyfn,comparator,coll){
if(cljs.core.seq(coll)){
var comparator__$1 = (function (){var G__64219 = comparator;
var G__64219__$1 = (((G__64219 instanceof cljs.core.Keyword))?G__64219.fqn:null);
switch (G__64219__$1) {
case "asc":
return cljs.core.compare;

break;
case "dsc":
case "desc":
return (function (x,y){
return cljs.core.compare(y,x);
});

break;
default:
return comparator;

}
})();
var comparator__$2 = (function (){var b2__30441__auto__ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_keyfn,cljs.core.identity))?_QMARK_keyfn:null);
if(cljs.core.truth_(b2__30441__auto__)){
var kfn = b2__30441__auto__;
return (function (x,y){
var G__64220 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(x) : kfn.call(null,x));
var G__64221 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(y) : kfn.call(null,y));
return (comparator__$1.cljs$core$IFn$_invoke$arity$2 ? comparator__$1.cljs$core$IFn$_invoke$arity$2(G__64220,G__64221) : comparator__$1.call(null,G__64220,G__64221));
});
} else {
return comparator__$1;
}
})();
var a = cljs.core.to_array(coll);
taoensso.encore.goog$module$goog$array.stableSort(a,cljs.core.fn__GT_comparator(comparator__$2));

return cljs.core.with_meta(cljs.core.vec(a),cljs.core.meta(coll));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.sortv.cljs$lang$maxFixedArity = 3);

var sentinel_65593 = ({});
var nil__GT_sentinel_65594 = (function (x){
if((x == null)){
return sentinel_65593;
} else {
return x;
}
});
var sentinel__GT_nil_65595 = (function (x){
if((x === sentinel_65593)){
return null;
} else {
return x;
}
});
/**
 * Reduces the top `n` items from `coll` of N items.
 *  Clj impln is O(N.logn) vs O(N.logN) for (take n (sort-by ...)).
 */
taoensso.encore.reduce_top = (function taoensso$encore$reduce_top(var_args){
var G__64227 = arguments.length;
switch (G__64227) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = (function (n,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,cljs.core.identity,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count(coll);
var n__$1 = cljs.core.long$((function (){var x__5113__auto__ = coll_size;
var y__5114__auto__ = cljs.core.long$(n);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.take.cljs$core$IFn$_invoke$arity$1(n__$1),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf),init,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
} else {
return init;
}
}));

(taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6);

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var G__64235 = arguments.length;
switch (G__64235) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if((((n >= (11)))?taoensso.encore.editable_QMARK_(to):false)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$(to),coll));
} else {
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj,to,coll);
}
}));

(taoensso.encore.top_into.cljs$lang$maxFixedArity = 5);

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__64249 = arguments.length;
switch (G__64249) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
}));

(taoensso.encore.top.cljs$lang$maxFixedArity = 4);

/**
 * Private, don't use.
 *   For Clj:  same as `Thread/sleep`.
 *   For Cljs: hot loops until given number of msecs have elapsed.
 * 
 *   Useful for certain synchronous unit tests, etc.
 */
taoensso.encore.hot_sleep = (function taoensso$encore$hot_sleep(msecs){
var t0 = Date.now();
while(true){
if(((Date.now() - t0) < msecs)){
continue;
} else {
return null;
}
break;
}
});
taoensso.encore._valid_unstub_impl = (function taoensso$encore$_valid_unstub_impl(x){
if(cljs.core.fn_QMARK_(x)){
return x;
} else {
throw taoensso.truss.ex_info_STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [6078,5], null),"[encore/stubfn] Unexpected unstub implementation ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),null);
}
});
/**
 * Given a {:before ?(fn []) :after ?(fn [])} map, returns cross-platform
 *   test fixtures for use by both `clojure.test` and `cljs.test`:
 * 
 *  (let [f (test-fixtures {:before (fn [] (test-setup))})]
 *    (clojure.test/use-fixtures :once f)
 *       (cljs.test/use-fixtures :once f))
 */
taoensso.encore.test_fixtures = (function taoensso$encore$test_fixtures(fixtures_map){
var error64303_65604 = (function (){try{if(cljs.core.map_QMARK_(fixtures_map)){
return null;
} else {
return taoensso.truss.impl.FalsePredError;
}
}catch (e64305){var e = e64305;
return e;
}})();
if(cljs.core.truth_(error64303_65604)){
taoensso.truss.failed_assertion_BANG_("taoensso.encore",6141,3,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"fixtures-map","fixtures-map",732147048,null),fixtures_map,null,error64303_65604);
} else {
}

return fixtures_map;
});

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

var taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_65605 = (function (_,msecs,f){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__5374__auto__.call(null,_,msecs,f));
} else {
var m__5372__auto__ = (taoensso.encore._schedule_timeout["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__5372__auto__.call(null,_,msecs,f));
} else {
throw cljs.core.missing_protocol("ITimeoutImpl.-schedule-timeout",_);
}
}
});
taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
return taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_65605(_,msecs,f);
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return setTimeout(f,msecs);
}));

(taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true);

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl");

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"taoensso.encore/DefaultTimeoutImpl");
}));

/**
 * Positional factory function for taoensso.encore/DefaultTimeoutImpl.
 */
taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore.default_timeout_impl_ !== 'undefined')){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

var taoensso$encore$ITimeoutFuture$tf_state$dyn_65609 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (taoensso.encore.tf_state["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-state",_);
}
}
});
/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_state$dyn_65609(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_poll$dyn_65610 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (taoensso.encore.tf_poll["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-poll",_);
}
}
});
/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_poll$dyn_65610(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_65613 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (taoensso.encore.tf_done_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-done?",_);
}
}
});
/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_65613(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_65614 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (taoensso.encore.tf_pending_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-pending?",_);
}
}
});
/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_65614(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_65615 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancelled?",_);
}
}
});
/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_65615(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_65616 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (taoensso.encore.tf_cancel_BANG_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancel!",_);
}
}
});
/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_65616(_);
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.f,new cljs.core.Keyword(null,"udt","udt",2011712751),self__.udt], null);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.result__);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (!(cljs.core.keyword_identical_QMARK_(cljs.core.deref(self__.result__),new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352))));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.keyword_identical_QMARK_(cljs.core.deref(self__.result__),new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.keyword_identical_QMARK_(cljs.core.deref(self__.result__),new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_(self__.result__,new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352),new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279));
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(null);
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(null);
}));

(taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"result__","result__",1529131748,null),new cljs.core.Symbol(null,"udt","udt",-642723018,null)], null);
}));

(taoensso.encore.TimeoutFuture.cljs$lang$type = true);

(taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture");

(taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"taoensso.encore/TimeoutFuture");
}));

/**
 * Positional factory function for taoensso.encore/TimeoutFuture.
 */
taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var G__64365 = arguments.length;
switch (G__64365) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3(taoensso.encore.default_timeout_impl_,msecs,f);
}));

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$(msecs);
var udt = (taoensso.encore.now_udt() + msecs__$1);
var result__ = taoensso.encore.latom(new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352));
var cas_f = (function (){
var result_ = (new cljs.core.Delay((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),null));
if(cljs.core.compare_and_set_BANG_(result__,new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352),result_)){
return cljs.core.deref(result_);
} else {
return null;
}
});
var impl_65619 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_65619,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
}));

(taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3);

taoensso.encore.console_log = (((typeof console !== 'undefined'))?(function() { 
var G__65620__delegate = function (xs){
var b2__30441__auto__ = console.log;
if(cljs.core.truth_(b2__30441__auto__)){
var f = b2__30441__auto__;
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
} else {
return null;
}
};
var G__65620 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__65621__i = 0, G__65621__a = new Array(arguments.length -  0);
while (G__65621__i < G__65621__a.length) {G__65621__a[G__65621__i] = arguments[G__65621__i + 0]; ++G__65621__i;}
  xs = new cljs.core.IndexedSeq(G__65621__a,0,null);
} 
return G__65620__delegate.call(this,xs);};
G__65620.cljs$lang$maxFixedArity = 0;
G__65620.cljs$lang$applyTo = (function (arglist__65622){
var xs = cljs.core.seq(arglist__65622);
return G__65620__delegate(xs);
});
G__65620.cljs$core$IFn$_invoke$arity$variadic = G__65620__delegate;
return G__65620;
})()
:(function() { 
var G__65623__delegate = function (xs){
return null;
};
var G__65623 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__65624__i = 0, G__65624__a = new Array(arguments.length -  0);
while (G__65624__i < G__65624__a.length) {G__65624__a[G__65624__i] = arguments[G__65624__i + 0]; ++G__65624__i;}
  xs = new cljs.core.IndexedSeq(G__65624__a,0,null);
} 
return G__65623__delegate.call(this,xs);};
G__65623.cljs$lang$maxFixedArity = 0;
G__65623.cljs$lang$applyTo = (function (arglist__65625){
var xs = cljs.core.seq(arglist__65625);
return G__65623__delegate(xs);
});
G__65623.cljs$core$IFn$_invoke$arity$variadic = G__65623__delegate;
return G__65623;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65626 = arguments.length;
var i__5750__auto___65627 = (0);
while(true){
if((i__5750__auto___65627 < len__5749__auto___65626)){
args__5755__auto__.push((arguments[i__5750__auto___65627]));

var G__65628 = (i__5750__auto___65627 + (1));
i__5750__auto___65627 = G__65628;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs));
}));

(taoensso.encore.logp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.logp.cljs$lang$applyTo = (function (seq64374){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64374));
}));


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65629 = arguments.length;
var i__5750__auto___65630 = (0);
while(true){
if((i__5750__auto___65630 < len__5749__auto___65629)){
args__5755__auto__.push((arguments[i__5750__auto___65630]));

var G__65631 = (i__5750__auto___65630 + (1));
i__5750__auto___65630 = G__65631;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs));
}));

(taoensso.encore.sayp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.sayp.cljs$lang$applyTo = (function (seq64382){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64382));
}));


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65632 = arguments.length;
var i__5750__auto___65633 = (0);
while(true){
if((i__5750__auto___65633 < len__5749__auto___65632)){
args__5755__auto__.push((arguments[i__5750__auto___65633]));

var G__65634 = (i__5750__auto___65633 + (1));
i__5750__auto___65633 = G__65634;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2(fmt,xs));
}));

(taoensso.encore.logf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.logf.cljs$lang$applyTo = (function (seq64387){
var G__64388 = cljs.core.first(seq64387);
var seq64387__$1 = cljs.core.next(seq64387);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64388,seq64387__$1);
}));


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65635 = arguments.length;
var i__5750__auto___65636 = (0);
while(true){
if((i__5750__auto___65636 < len__5749__auto___65635)){
args__5755__auto__.push((arguments[i__5750__auto___65636]));

var G__65637 = (i__5750__auto___65636 + (1));
i__5750__auto___65636 = G__65637;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2(fmt,xs));
}));

(taoensso.encore.sayf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.sayf.cljs$lang$applyTo = (function (seq64397){
var G__64398 = cljs.core.first(seq64397);
var seq64397__$1 = cljs.core.next(seq64397);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64398,seq64397__$1);
}));

/**
 * Returns current window location as
 *   {:keys [href protocol hostname host pathname search hash]}.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__30441__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_window,"location");
if(cljs.core.truth_(b2__30441__auto__)){
var loc = b2__30441__auto__;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
});
taoensso.encore.default_xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Queues a lightweight Ajax call with Google Closure's `goog.net.XhrIo`
 *   and returns nil, or the resulting `goog.net.XhrIo` instance if one was
 *   immediately available from the XHR pool:
 * 
 *     (ajax-call
 *       "http://localhost:8080/my-post-route" ; Endpoint URL
 * 
 *       {:method     :post ; ∈ #{:get :post :put}
 *        :resp-type  :text ; ∈ #{:auto :text :edn :json :xml
 *                          ;     :bin/array-buffer :bin/blob}   ; Expected response type
 * 
 *        :headers {"Content-Type" "text/plain"}             ; Request headers
 *        :params  {:username "Rich Hickey" :type "Awesome"} ; Request params
 * 
 *        :timeout-ms        10000       ; Request timeout in msecs
 *        :with-credentials? false       ; Enable if using CORS
 *        :xhr-pool          my-xhr-pool ; Optional `goog.net.XhrIoPool` instance or delay
 *        :xhr-timeout-ms    2500        ; Optional max msecs to wait on pool for `XhrIo`
 *        :xhr-cb-fn         (fn [xhr])  ; Optional fn to call with `XhrIo` from pool when available
 *       }
 * 
 *       (fn callback [resp-map]
 *         (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *           ;; ?status ; ∈ #{nil 200 404 ...}, non-nil iff server responded
 *           ;; ?error  ; ∈ #{nil <http-error-status-code> <exception> :timeout
 *                            :abort :http-error :exception :xhr-pool-depleted :bad-edn}
 *           (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_call = (function taoensso$encore$ajax_call(url,p__64409,callback_fn){
var map__64410 = p__64409;
var map__64410__$1 = cljs.core.__destructure_map(map__64410);
var opts = map__64410__$1;
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64410__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var xhr_pool = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64410__$1,new cljs.core.Keyword(null,"xhr-pool","xhr-pool",1499305499),taoensso.encore.default_xhr_pool_);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64410__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64410__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var xhr_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64410__$1,new cljs.core.Keyword(null,"xhr-timeout-ms","xhr-timeout-ms",89157982),(2500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64410__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var xhr_cb_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64410__$1,new cljs.core.Keyword(null,"xhr-cb-fn","xhr-cb-fn",1569050954));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64410__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64410__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64410__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var error64418_65644 = (function (){try{if(cljs.core.truth_((function (arg64413){
if((arg64413 == null)){
return true;
} else {
return taoensso.encore.nat_int_QMARK_(arg64413);
}
})(timeout_ms))){
return null;
} else {
return taoensso.truss.impl.FalsePredError;
}
}catch (e64420){var e = e64420;
return e;
}})();
if(cljs.core.truth_(error64418_65644)){
taoensso.truss.failed_assertion_BANG_("taoensso.encore",6414,13,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null)], null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),timeout_ms,null,error64418_65644);
} else {
}

var xhr_pool__$1 = cljs.core.force(xhr_pool);
var with_xhr = (function (xhr){
try{var timeout_ms__$1 = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return timeout_ms;
}
})();
var map__64424 = (((function (){var G__64426 = method;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get","get",1683182755),G__64426)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"head","head",-771383919),G__64426)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),G__64426)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trace","trace",-1082747415),G__64426)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("GET",G__64426)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("HEAD",G__64426)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("OPTIONS",G__64426)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TRACE",G__64426)){
return true;
} else {
return false;

}
}
}
}
}
}
}
}
})())?((cljs.core.empty_QMARK_(params))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url+","url+",185078960),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js(params)))].join('')], null)):(cljs.core.truth_(body)?((cljs.core.empty_QMARK_(params))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),body], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),body,new cljs.core.Keyword(null,"url+","url+",185078960),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js(params)))].join('')], null)):(((((typeof FormData !== 'undefined')) && ((params instanceof FormData))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),params], null):(cljs.core.truth_((function (){var and__5023__auto__ = (typeof FormData !== 'undefined');
if(and__5023__auto__){
return taoensso.encore.rsome_kv((function (_,v){
return (v instanceof Blob);
}),params);
} else {
return and__5023__auto__;
}
})())?(function (){var form_data = (new FormData());
var seq__64433_65658 = cljs.core.seq(params);
var chunk__64434_65659 = null;
var count__64435_65660 = (0);
var i__64436_65661 = (0);
while(true){
if((i__64436_65661 < count__64435_65660)){
var vec__64450_65662 = chunk__64434_65659.cljs$core$IIndexed$_nth$arity$2(null,i__64436_65661);
var k_65663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64450_65662,(0),null);
var v_65664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64450_65662,(1),null);
form_data.append(cljs.core.name(k_65663),v_65664);


var G__65665 = seq__64433_65658;
var G__65666 = chunk__64434_65659;
var G__65667 = count__64435_65660;
var G__65668 = (i__64436_65661 + (1));
seq__64433_65658 = G__65665;
chunk__64434_65659 = G__65666;
count__64435_65660 = G__65667;
i__64436_65661 = G__65668;
continue;
} else {
var temp__5825__auto___65669 = cljs.core.seq(seq__64433_65658);
if(temp__5825__auto___65669){
var seq__64433_65670__$1 = temp__5825__auto___65669;
if(cljs.core.chunked_seq_QMARK_(seq__64433_65670__$1)){
var c__5548__auto___65671 = cljs.core.chunk_first(seq__64433_65670__$1);
var G__65672 = cljs.core.chunk_rest(seq__64433_65670__$1);
var G__65673 = c__5548__auto___65671;
var G__65674 = cljs.core.count(c__5548__auto___65671);
var G__65675 = (0);
seq__64433_65658 = G__65672;
chunk__64434_65659 = G__65673;
count__64435_65660 = G__65674;
i__64436_65661 = G__65675;
continue;
} else {
var vec__64453_65676 = cljs.core.first(seq__64433_65670__$1);
var k_65677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64453_65676,(0),null);
var v_65678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64453_65676,(1),null);
form_data.append(cljs.core.name(k_65677),v_65678);


var G__65681 = cljs.core.next(seq__64433_65670__$1);
var G__65682 = null;
var G__65683 = (0);
var G__65684 = (0);
seq__64433_65658 = G__65681;
chunk__64434_65659 = G__65682;
count__64435_65660 = G__65683;
i__64436_65661 = G__65684;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),form_data], null);
})():new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js(params))),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded;charset=UTF-8"], null)))));
var map__64424__$1 = cljs.core.__destructure_map(map__64424);
var url_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64424__$1,new cljs.core.Keyword(null,"url+","url+",185078960));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64424__$1,new cljs.core.Keyword(null,"content","content",15833224));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64424__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var headers__$1 = taoensso.encore.map_keys((function (p1__64408_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__64408_SHARP_));
}),headers);
var headers__$2 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
var headers__$3 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$2,"content-type",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$2,"content-type",content_type));
var progress_listener = (function (){var b2__30441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
if(cljs.core.truth_(b2__30441__auto__)){
var pf = b2__30441__auto__;
xhr.setProgressEventsEnabled(true);

return goog.events.listen(xhr,goog.net.EventType.PROGRESS,(function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__5023__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__5023__auto__;
}
})())?(loaded / total):null);
var G__64468 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null);
return (pf.cljs$core$IFn$_invoke$arity$1 ? pf.cljs$core$IFn$_invoke$arity$1(G__64468) : pf.call(null,G__64468));
}));
} else {
return null;
}
})();
goog.events.listenOnce(xhr,goog.net.EventType.READY,(function (_){
return xhr_pool__$1.releaseObject(xhr);
}));

goog.events.listenOnce(xhr,goog.net.EventType.COMPLETE,(function taoensso$encore$ajax_call_$_wrapped_callback(resp){
var success_QMARK_ = xhr.isSuccess();
var status = xhr.getStatus();
var vec__64469 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(status,(-1)))?(function (){var content_type__$1 = xhr.getResponseHeader("content-type");
var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?resp_type:(((content_type__$1 == null))?new cljs.core.Keyword(null,"text","text",-1790561697):(function (){var ct = clojure.string.lower_case(content_type__$1);
if(cljs.core.truth_(taoensso.encore.str_contains_QMARK_(ct,"/edn"))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(taoensso.encore.str_contains_QMARK_(ct,"/json"))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(taoensso.encore.str_contains_QMARK_(ct,"/xml"))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
})()));
var vec__64472 = (function (){var G__64476 = resp_type__$1;
var G__64476__$1 = (((G__64476 instanceof cljs.core.Keyword))?G__64476.fqn:null);
switch (G__64476__$1) {
case "text":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xhr.getResponseText()], null);

break;
case "json":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xhr.getResponseJson()], null);

break;
case "xml":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xhr.getResponseXml()], null);

break;
case "edn":
var b2__30441__auto__ = xhr.getResponseText();
if(cljs.core.truth_(b2__30441__auto__)){
var edn = b2__30441__auto__;
try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(edn)], null);
}catch (e64478){var _ = e64478;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn,new cljs.core.Keyword(null,"bad-edn","bad-edn",1465533855)], null);
}} else {
return null;
}

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xhr.getResponse()], null);

}
})();
var content__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64472,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64472,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,content_type__$1,content__$1,error], null);
})():null);
var status__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64469,(0),null);
var content_type__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64469,(1),null);
var content__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64469,(2),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64469,(3),null);
var success_QMARK___$1 = (function (){var and__5023__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(error);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(progress_listener)){
goog.events.unlistenByKey(progress_listener);
} else {
}

var G__64479 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK___$1,new cljs.core.Keyword(null,"?status","?status",938730360),status__$1,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),content_type__$1,new cljs.core.Keyword(null,"?content","?content",1697782054),content__$1,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(success_QMARK___$1)?null:(cljs.core.truth_(error)?error:(cljs.core.truth_(status__$1)?status__$1:(function (){var G__64480 = xhr.getLastErrorCode();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("goog.net.ErrorCode","NO_ERROR","goog.net.ErrorCode/NO_ERROR",-376372140,null),G__64480)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("goog.net.ErrorCode","EXCEPTION","goog.net.ErrorCode/EXCEPTION",-1644416342,null),G__64480)){
return new cljs.core.Keyword(null,"exception","exception",-335277064);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("goog.net.ErrorCode","HTTP_ERROR","goog.net.ErrorCode/HTTP_ERROR",1765210984,null),G__64480)){
return new cljs.core.Keyword(null,"http-error","http-error",-1040049553);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("goog.net.ErrorCode","ABORT","goog.net.ErrorCode/ABORT",-1128881702,null),G__64480)){
return new cljs.core.Keyword(null,"abort","abort",521193198);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("goog.net.ErrorCode","TIMEOUT","goog.net.ErrorCode/TIMEOUT",2036132238,null),G__64480)){
return new cljs.core.Keyword(null,"timeout","timeout",-318625318);
} else {
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);

}
}
}
}
}
})())))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__64479) : callback_fn.call(null,G__64479));
}));

xhr.setTimeoutInterval((function (){var or__5025__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})());

xhr.setWithCredentials(cljs.core.boolean$(with_credentials_QMARK_));

xhr.setResponseType((function (){var G__64482 = resp_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),G__64482)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__64482)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__64482)){
return "text";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"edn","edn",1317840885),G__64482)){
return "text";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),G__64482)){
return "json";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"xml","xml",-1170142052),G__64482)){
return "document";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bin","array-buffer","bin/array-buffer",519107969),G__64482)){
return "arraybuffer";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bin","blob","bin/blob",1636652666),G__64482)){
return "blob";
} else {
return resp_type;

}
}
}
}
}
}
}
}
})());

xhr.send((function (){var or__5025__auto__ = url_PLUS_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return url;
}
})(),cljs.core.name(method),content,cljs.core.clj__GT_js(headers__$3));

var b2__30441__auto___65691 = xhr_cb_fn;
if(cljs.core.truth_(b2__30441__auto___65691)){
var cb_65692 = b2__30441__auto___65691;
try{(cb_65692.cljs$core$IFn$_invoke$arity$1 ? cb_65692.cljs$core$IFn$_invoke$arity$1(xhr) : cb_65692.call(null,xhr));
}catch (e64487){var __65693 = e64487;
}} else {
}

return xhr;
}catch (e64422){var e = e64422;
xhr_pool__$1.releaseObject(xhr);

var G__64423_65694 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__64423_65694) : callback_fn.call(null,G__64423_65694));

return null;
}});
var b2__30441__auto__ = xhr_pool__$1.getObject();
if(cljs.core.truth_(b2__30441__auto__)){
var xhr = b2__30441__auto__;
return with_xhr(xhr);
} else {
if(((function (){var or__5025__auto__ = xhr_timeout_ms;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() === (0))){
var G__64489_65695 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__64489_65695) : callback_fn.call(null,G__64489_65695));

return null;
} else {
var done_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
setTimeout((function taoensso$encore$ajax_call_$_xhr_timeout(){
if(cljs.core.compare_and_set_BANG_(done_QMARK__,false,true)){
var G__64490 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-timeout","xhr-pool-timeout",-70669609)], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__64490) : callback_fn.call(null,G__64490));
} else {
return null;
}
}),xhr_timeout_ms);

xhr_pool__$1.getObject((function taoensso$encore$ajax_call_$_xhr_cb(xhr){
if(cljs.core.compare_and_set_BANG_(done_QMARK__,false,true)){
return with_xhr(xhr);
} else {
return xhr_pool__$1.releaseObject(xhr);
}
}));

return null;
}
}
});
/**
 * Based on <https://goo.gl/fBqy6e>.
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),s),"*","%2A");
} else {
return null;
}
});
/**
 * Stolen from <http://goo.gl/99NSR1>.
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65697 = arguments.length;
var i__5750__auto___65698 = (0);
while(true){
if((i__5750__auto___65698 < len__5749__auto___65697)){
args__5755__auto__.push((arguments[i__5750__auto___65698]));

var G__65699 = (i__5750__auto___65698 + (1));
i__5750__auto___65698 = G__65699;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__64502){
var vec__64503 = p__64502;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64503,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
}));

(taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq64500){
var G__64501 = cljs.core.first(seq64500);
var seq64500__$1 = cljs.core.next(seq64500);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64501,seq64500__$1);
}));

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [taoensso.encore.url_encode(taoensso.encore.as_qname(k)),"=",taoensso.encore.url_encode((function (){var or__5025__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
})())].join('');
});
var join = (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__5503__auto__ = (function taoensso$encore$format_query_string_$_iter__64509(s__64510){
return (new cljs.core.LazySeq(null,(function (){
var s__64510__$1 = s__64510;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__64510__$1);
if(temp__5825__auto__){
var s__64510__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64510__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__64510__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__64512 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__64511 = (0);
while(true){
if((i__64511 < size__5502__auto__)){
var vec__64513 = cljs.core._nth(c__5501__auto__,i__64511);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64513,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64513,(1),null);
if((!((v == null)))){
cljs.core.chunk_append(b__64512,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__5025__auto__ = cljs.core.seq(v);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__65707 = (i__64511 + (1));
i__64511 = G__65707;
continue;
} else {
var G__65708 = (i__64511 + (1));
i__64511 = G__65708;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64512),taoensso$encore$format_query_string_$_iter__64509(cljs.core.chunk_rest(s__64510__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64512),null);
}
} else {
var vec__64516 = cljs.core.first(s__64510__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64516,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64516,(1),null);
if((!((v == null)))){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__5025__auto__ = cljs.core.seq(v);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__64509(cljs.core.rest(s__64510__$2)));
} else {
var G__65711 = cljs.core.rest(s__64510__$2);
s__64510__$1 = G__65711;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__30441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__30441__auto__)){
var cur = b2__30441__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65712 = arguments.length;
var i__5750__auto___65713 = (0);
while(true){
if((i__5750__auto___65713 < len__5749__auto___65712)){
args__5755__auto__.push((arguments[i__5750__auto___65713]));

var G__65714 = (i__5750__auto___65713 + (1));
i__5750__auto___65713 = G__65714;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__64527){
var vec__64528 = p__64527;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64528,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64528,(1),null);
if(((clojure.string.blank_QMARK_(s)) || (cljs.core.not(taoensso.encore.str_contains_QMARK_(s,"="))))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,param){
var b2__30441__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__30441__auto__)){
var vec__64533 = b2__30441__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64533,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64533,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
}
}));

(taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq64525){
var G__64526 = cljs.core.first(seq64525);
var seq64525__$1 = cljs.core.next(seq64525);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64526,seq64525__$1);
}));

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__64540 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64540,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64540,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__30441__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__30441__auto__)){
var qstr = b2__30441__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",qstr].join('');
} else {
return url__$1;
}
});
/**
 * Returns given Cljs argument as JSON string.
 */
taoensso.encore.pr_json = (function taoensso$encore$pr_json(x){
return JSON.stringify(cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),taoensso.encore.as_qname], 0)));
});
/**
 * Reads given JSON string to return a Cljs value.
 */
taoensso.encore.read_json = (function taoensso$encore$read_json(var_args){
var G__64545 = arguments.length;
switch (G__64545) {
case 1:
return taoensso.encore.read_json.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.read_json.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_json.cljs$core$IFn$_invoke$arity$2(false,s);
}));

(taoensso.encore.read_json.cljs$core$IFn$_invoke$arity$2 = (function (kw_keys_QMARK_,s){
if((((s == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")))){
return null;
} else {
if(typeof s === 'string'){
if(cljs.core.truth_(kw_keys_QMARK_)){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(s),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(s));
}
} else {
throw taoensso.truss.ex_info_STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [6764,9], null),"[encore/read-json] Unexpected arg type (expected string or nil)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(s)], null)], null),null);
}
}
}));

(taoensso.encore.read_json.cljs$lang$maxFixedArity = 2);


/**
 * Prefer `latom`.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref(atom_);
var v1 = (function (){var G__64559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64559) : f.call(null,G__64559));
})();
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
return v1;
} else {
continue;
}
break;
}
});

taoensso.encore.js__QMARK_win = taoensso.encore.js__QMARK_window;

taoensso.encore.regular_num_QMARK_ = taoensso.encore.finite_num_QMARK_;

taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.memoize_STAR_ = taoensso.encore.memoize;

taoensso.encore.memoize_ = taoensso.encore.memoize;

taoensso.encore.nnil_QMARK_ = cljs.core.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.idx_fn = taoensso.encore.counter;

taoensso.encore.vec_STAR_ = taoensso.encore.ensure_vec;

taoensso.encore.set_STAR_ = taoensso.encore.ensure_set;

taoensso.encore.have_transducers_QMARK_ = true;

taoensso.encore.pval_QMARK_ = taoensso.encore.pnum_QMARK_;

taoensso.encore.as__QMARK_pval = taoensso.encore.as__QMARK_pnum;

taoensso.encore.as_pval = taoensso.encore.as_pnum;

var nolist_QMARK__65720 = (function (p1__64546_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]),p1__64546_SHARP_);
});
taoensso.encore.compile_ns_filter = (function taoensso$encore$compile_ns_filter(var_args){
var G__64564 = arguments.length;
switch (G__64564) {
case 1:
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1 = (function (ns_pattern){
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2(ns_pattern,null);
}));

(taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2 = (function (whitelist,blacklist){
if(((nolist_QMARK__65720(whitelist)) && (nolist_QMARK__65720(blacklist)))){
return (function (_){
return true;
});
} else {
return taoensso.encore.name_filter(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),whitelist,new cljs.core.Keyword(null,"disallow","disallow",-861898595),blacklist], null));
}
}));

(taoensso.encore.compile_ns_filter.cljs$lang$maxFixedArity = 2);


taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__64573 = arguments.length;
switch (G__64573) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}));

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3(signf,x,y);
}));

(taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3);


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65727 = arguments.length;
var i__5750__auto___65728 = (0);
while(true){
if((i__5750__auto___65728 < len__5749__auto___65727)){
args__5755__auto__.push((arguments[i__5750__auto___65728]));

var G__65729 = (i__5750__auto___65728 + (1));
i__5750__auto___65728 = G__65729;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
}));

(taoensso.encore.join_once.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.join_once.cljs$lang$applyTo = (function (seq64575){
var G__64576 = cljs.core.first(seq64575);
var seq64575__$1 = cljs.core.next(seq64575);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64576,seq64575__$1);
}));


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ensure_set(x),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

taoensso.encore.logging_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65738 = arguments.length;
var i__5750__auto___65739 = (0);
while(true){
if((i__5750__auto___65739 < len__5749__auto___65738)){
args__5755__auto__.push((arguments[i__5750__auto___65739]));

var G__65740 = (i__5750__auto___65739 + (1));
i__5750__auto___65739 = G__65740;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__64581){
var vec__64582 = p__64581;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64582,(0),null);
return setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = nattempt;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})()));
}));

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq64579){
var G__64580 = cljs.core.first(seq64579);
var seq64579__$1 = cljs.core.next(seq64579);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64580,seq64579__$1);
}));


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined')){
} else {
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65741 = arguments.length;
var i__5750__auto___65742 = (0);
while(true){
if((i__5750__auto___65742 < len__5749__auto___65741)){
args__5755__auto__.push((arguments[i__5750__auto___65742]));

var G__65743 = (i__5750__auto___65742 + (1));
i__5750__auto___65742 = G__65743;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.tracef.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.tracef.cljs$lang$applyTo = (function (seq64585){
var G__64586 = cljs.core.first(seq64585);
var seq64585__$1 = cljs.core.next(seq64585);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64586,seq64585__$1);
}));


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65744 = arguments.length;
var i__5750__auto___65745 = (0);
while(true){
if((i__5750__auto___65745 < len__5749__auto___65744)){
args__5755__auto__.push((arguments[i__5750__auto___65745]));

var G__65746 = (i__5750__auto___65745 + (1));
i__5750__auto___65745 = G__65746;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.debugf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.debugf.cljs$lang$applyTo = (function (seq64588){
var G__64589 = cljs.core.first(seq64588);
var seq64588__$1 = cljs.core.next(seq64588);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64589,seq64588__$1);
}));


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65752 = arguments.length;
var i__5750__auto___65753 = (0);
while(true){
if((i__5750__auto___65753 < len__5749__auto___65752)){
args__5755__auto__.push((arguments[i__5750__auto___65753]));

var G__65754 = (i__5750__auto___65753 + (1));
i__5750__auto___65753 = G__65754;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.infof.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.infof.cljs$lang$applyTo = (function (seq64590){
var G__64591 = cljs.core.first(seq64590);
var seq64590__$1 = cljs.core.next(seq64590);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64591,seq64590__$1);
}));


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65757 = arguments.length;
var i__5750__auto___65758 = (0);
while(true){
if((i__5750__auto___65758 < len__5749__auto___65757)){
args__5755__auto__.push((arguments[i__5750__auto___65758]));

var G__65759 = (i__5750__auto___65758 + (1));
i__5750__auto___65758 = G__65759;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.warnf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.warnf.cljs$lang$applyTo = (function (seq64592){
var G__64593 = cljs.core.first(seq64592);
var seq64592__$1 = cljs.core.next(seq64592);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64593,seq64592__$1);
}));


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65764 = arguments.length;
var i__5750__auto___65765 = (0);
while(true){
if((i__5750__auto___65765 < len__5749__auto___65764)){
args__5755__auto__.push((arguments[i__5750__auto___65765]));

var G__65766 = (i__5750__auto___65765 + (1));
i__5750__auto___65765 = G__65766;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.errorf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.errorf.cljs$lang$applyTo = (function (seq64598){
var G__64599 = cljs.core.first(seq64598);
var seq64598__$1 = cljs.core.next(seq64598);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64599,seq64598__$1);
}));


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65767 = arguments.length;
var i__5750__auto___65768 = (0);
while(true){
if((i__5750__auto___65768 < len__5749__auto___65767)){
args__5755__auto__.push((arguments[i__5750__auto___65768]));

var G__65770 = (i__5750__auto___65768 + (1));
i__5750__auto___65768 = G__65770;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq64601){
var G__64602 = cljs.core.first(seq64601);
var seq64601__$1 = cljs.core.next(seq64601);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64602,seq64601__$1);
}));


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65773 = arguments.length;
var i__5750__auto___65774 = (0);
while(true){
if((i__5750__auto___65774 < len__5749__auto___65773)){
args__5755__auto__.push((arguments[i__5750__auto___65774]));

var G__65775 = (i__5750__auto___65774 + (1));
i__5750__auto___65774 = G__65775;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.reportf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.reportf.cljs$lang$applyTo = (function (seq64606){
var G__64607 = cljs.core.first(seq64606);
var seq64606__$1 = cljs.core.next(seq64606);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64607,seq64606__$1);
}));


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65778 = arguments.length;
var i__5750__auto___65779 = (0);
while(true){
if((i__5750__auto___65779 < len__5749__auto___65778)){
args__5755__auto__.push((arguments[i__5750__auto___65779]));

var G__65780 = (i__5750__auto___65779 + (1));
i__5750__auto___65779 = G__65780;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__64612){
var vec__64613 = p__64612;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64613,(0),null);
var comparator = (function (){var or__5025__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__64548_SHARP_,p2__64549_SHARP_){
if((cljs.core.long$((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__64548_SHARP_,p2__64549_SHARP_) : comparator.call(null,p1__64548_SHARP_,p2__64549_SHARP_))) > (0))){
return p2__64549_SHARP_;
} else {
return p1__64548_SHARP_;
}
}),coll);
}));

(taoensso.encore.greatest.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.greatest.cljs$lang$applyTo = (function (seq64609){
var G__64610 = cljs.core.first(seq64609);
var seq64609__$1 = cljs.core.next(seq64609);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64610,seq64609__$1);
}));


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65782 = arguments.length;
var i__5750__auto___65789 = (0);
while(true){
if((i__5750__auto___65789 < len__5749__auto___65782)){
args__5755__auto__.push((arguments[i__5750__auto___65789]));

var G__65790 = (i__5750__auto___65789 + (1));
i__5750__auto___65789 = G__65790;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__64619){
var vec__64620 = p__64619;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64620,(0),null);
var comparator = (function (){var or__5025__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__64550_SHARP_,p2__64551_SHARP_){
if((cljs.core.long$((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__64550_SHARP_,p2__64551_SHARP_) : comparator.call(null,p1__64550_SHARP_,p2__64551_SHARP_))) < (0))){
return p2__64551_SHARP_;
} else {
return p1__64550_SHARP_;
}
}),coll);
}));

(taoensso.encore.least.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.least.cljs$lang$applyTo = (function (seq64616){
var G__64617 = cljs.core.first(seq64616);
var seq64616__$1 = cljs.core.next(seq64616);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64617,seq64616__$1);
}));


/**
 * Ref. <http://goo.gl/0GzRuz>
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__5025__auto__ = x;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Prefer `xdistinct`.
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__64625,seen__$1){
while(true){
var vec__64626 = p__64625;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64626,(0),null);
var xs__$1 = vec__64626;
var b2__30441__auto__ = cljs.core.seq(xs__$1);
if(b2__30441__auto__){
var s = b2__30441__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__65797 = cljs.core.rest(s);
var G__65798 = seen__$1;
p__64625 = G__65797;
seen__$1 = G__65798;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Prefer `xdistinct`.
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__64634 = arguments.length;
switch (G__64634) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
}));

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__64639,in$){
var vec__64640 = p__64639;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64640,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64640,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
}));

(taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2);


taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){

if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):((cljs.core.keyword_identical_QMARK_(kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?(function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
}):kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65803 = arguments.length;
var i__5750__auto___65804 = (0);
while(true){
if((i__5750__auto___65804 < len__5749__auto___65803)){
args__5755__auto__.push((arguments[i__5750__auto___65804]));

var G__65805 = (i__5750__auto___65804 + (1));
i__5750__auto___65804 = G__65805;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__64658){
var vec__64659 = p__64658;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64659,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64659,(1),null);

if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):((cljs.core.keyword_identical_QMARK_(kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?(function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
}):kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs((function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
}));

(taoensso.encore.as_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.as_map.cljs$lang$applyTo = (function (seq64653){
var G__64654 = cljs.core.first(seq64653);
var seq64653__$1 = cljs.core.next(seq64653);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64654,seq64653__$1);
}));


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n)));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65809 = arguments.length;
var i__5750__auto___65810 = (0);
while(true){
if((i__5750__auto___65810 < len__5749__auto___65809)){
args__5755__auto__.push((arguments[i__5750__auto___65810]));

var G__65811 = (i__5750__auto___65810 + (1));
i__5750__auto___65810 = G__65811;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref(taoensso.encore._swap_val_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
})));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
}));

(taoensso.encore.memoized.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.memoized.cljs$lang$applyTo = (function (seq64674){
var G__64675 = cljs.core.first(seq64674);
var seq64674__$1 = cljs.core.next(seq64674);
var G__64676 = cljs.core.first(seq64674__$1);
var seq64674__$2 = cljs.core.next(seq64674__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64675,G__64676,seq64674__$2);
}));


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__5113__auto__ = signed_idx;
var y__5114__auto__ = max_idx;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
} else {
var x__5110__auto__ = (0);
var y__5111__auto__ = (signed_idx + max_idx);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
}
});


taoensso.encore.sentinel = ({});

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(taoensso.encore.sentinel_QMARK_(x)){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(taoensso.encore.singleton_QMARK_(coll)){
var vec__64684 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64684,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if(((ks__$1) && (vs__$1))){
var G__65818 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__65819 = cljs.core.next(ks__$1);
var G__65820 = cljs.core.next(vs__$1);
m = G__65818;
ks__$1 = G__65819;
vs__$1 = G__65820;
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__5755__auto__ = [];
var len__5749__auto___65828 = arguments.length;
var i__5750__auto___65829 = (0);
while(true){
if((i__5750__auto___65829 < len__5749__auto___65828)){
args__5755__auto__.push((arguments[i__5750__auto___65829]));

var G__65830 = (i__5750__auto___65829 + (1));
i__5750__auto___65829 = G__65830;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__64696 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64696,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64696,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64696,(2),null);
var f = ((cljs.core.keyword_identical_QMARK_(type,new cljs.core.Keyword(null,"reset","reset",-800929946)))?(function (_){
return valf;
}):valf);
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
}));

(taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq64693){
var G__64694 = cljs.core.first(seq64693);
var seq64693__$1 = cljs.core.next(seq64693);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64694,seq64693__$1);
}));


var return_65840 = (function (m0,v0,m1,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Prefer `swap-in!` with `swapped` return value.
 */
taoensso.encore.swap_in_BANG__STAR_ = (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__64701 = arguments.length;
switch (G__64701) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_65840,atom_,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_65840,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_65840,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4);


/**
 * Prefer `swap-val!` with `swapped` return value.
 */
taoensso.encore.swap_val_BANG__STAR_ = (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__64705 = arguments.length;
switch (G__64705) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_65840,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_65840,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4);


taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

/**
 * Renamed to `name-filter`.
 */
taoensso.encore.compile_str_filter = taoensso.encore.name_filter;

/**
 * Prefer `identical-kw?` macro.
 */
taoensso.encore.kw_identical_QMARK_ = (function taoensso$encore$kw_identical_QMARK_(x,y){
return cljs.core.keyword_identical_QMARK_(x,y);
});

/**
 * Prefer `newline`.
 */
taoensso.encore.system_newline = "\n";

/**
 * Prefer `matching-error`.
 */
taoensso.encore._matching_error = taoensso.truss.matching_error;

/**
 * Prefer `rate-limiter`.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(var_args){
var G__64711 = arguments.length;
switch (G__64711) {
case 1:
return taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-state?","with-state?",1044523183),true], null),spec);
}));

(taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (opts,spec){
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"with-state?","with-state?",1044523183),true),spec);
}));

(taoensso.encore.rate_limiter_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Prefer `rate-limiter*`.
 */
taoensso.encore.limiter_STAR_ = taoensso.encore.rate_limiter_STAR_;

/**
 * Prefer `rate-limiter`.
 */
taoensso.encore.limiter = taoensso.encore.rate_limiter;

/**
 * Prefer `reassoc-some`.
 */
taoensso.encore.dis_assoc_some = taoensso.encore.reassoc_some;

/**
 * Prefer `println`.
 */
taoensso.encore.println_atomic = taoensso.encore.println;

/**
 * Prefer `merge-with*`.
 */
taoensso.encore._merge_with = taoensso.encore.merge_with_STAR_;

/**
 * Prefer `merge`.
 */
taoensso.encore.fast_merge = taoensso.encore.merge;

/**
 * Prefer `rand-bytes`.
 */
taoensso.encore.secure_rand_bytes = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.encore.rand_bytes,true);

/**
 * Prefer `round`.
 */
taoensso.encore.round_STAR_ = taoensso.encore.round;

/**
 * Prefer `ajax-call`.
 */
taoensso.encore.ajax_lite = taoensso.encore.ajax_call;

/**
 * Prefer `ex-map`.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__30441__auto__ = (function (){var and__5023__auto__ = x;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(b2__30441__auto__)){
var data_map = b2__30441__auto__;
var base_map = (function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type(err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_map,data_map);
} else {
return null;
}
});

/**
 * Prefer `is`.
 */
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_((function (){try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e64714){var _ = e64714;
return null;
}})())){
return x;
} else {
return null;
}
});

/**
 * Prefer `list-form`.
 */
taoensso.encore.call_form_QMARK_ = (function taoensso$encore$call_form_QMARK_(x){
return taoensso.encore.list_form_QMARK_(x);
});

/**
 * Prefer `subvec`.
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var G__64720 = arguments.length;
switch (G__64720) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var or__5025__auto__ = taoensso.encore.subvec(v,start);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var or__5025__auto__ = taoensso.encore.subvec(v,start,end);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `subvec`.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var G__64722 = arguments.length;
switch (G__64722) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var or__5025__auto__ = taoensso.encore.subvec(v,new cljs.core.Keyword(null,"by-len","by-len",587837753),start,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,len){
var or__5025__auto__ = taoensso.encore.subvec(v,new cljs.core.Keyword(null,"by-len","by-len",587837753),start,len);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `substr`.
 */
taoensso.encore.get_substr_by_idx = (function taoensso$encore$get_substr_by_idx(var_args){
var G__64725 = arguments.length;
switch (G__64725) {
case 2:
return taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3(s,start,null);
}));

(taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
var len = cljs.core.count(s);
var start__$1 = cljs.core.long$((function (){var or__5025__auto__ = start;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})());
var end__$1 = cljs.core.long$((function (){var or__5025__auto__ = end;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return len;
}
})());
var start__$2 = (((start__$1 < (0)))?(start__$1 + len):start__$1);
var end__$2 = (((end__$1 < (0)))?(end__$1 + len):end__$1);
return taoensso.encore.substr(s,new cljs.core.Keyword(null,"by-idx","by-idx",-1997587605),start__$2,end__$2);
}));

(taoensso.encore.get_substr_by_idx.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `substr`.
 */
taoensso.encore.get_substr_by_len = (function taoensso$encore$get_substr_by_len(var_args){
var G__64729 = arguments.length;
switch (G__64729) {
case 2:
return taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.substr(s,new cljs.core.Keyword(null,"by-len","by-len",587837753),(function (){var or__5025__auto__ = start;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max","max",61366548));
}));

(taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3 = (function (s,start,len){
return taoensso.encore.substr(s,new cljs.core.Keyword(null,"by-len","by-len",587837753),(function (){var or__5025__auto__ = start;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})(),(function (){var or__5025__auto__ = len;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"max","max",61366548);
}
})());
}));

(taoensso.encore.get_substr_by_len.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `substr`.
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var G__64739 = arguments.length;
switch (G__64739) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
var or__5025__auto__ = taoensso.encore.substr(s,start);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
}));

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
var or__5025__auto__ = taoensso.encore.substr(s,start,end);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
}));

(taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `substr`.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var G__64742 = arguments.length;
switch (G__64742) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.substr(s,new cljs.core.Keyword(null,"by-len","by-len",587837753),start,new cljs.core.Keyword(null,"max","max",61366548));
}));

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,len){
return taoensso.encore.substr(s,new cljs.core.Keyword(null,"by-len","by-len",587837753),start,len);
}));

(taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `subvec`.
 */
taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvec);

/**
 * Prefer `subvec`.
 */
taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvector);

/**
 * Prefer `subvec`.
 */
taoensso.encore.subvec_STAR_ = taoensso.encore.get_subvector;

/**
 * Prefer `substr`.
 */
taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

/**
 * Prefer `substr`.
 */
taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

/**
 * Private, don't use.
 *   Returns root cause of given platform error.
 */
taoensso.encore.ex_root = taoensso.truss.ex_root;

/**
 * Private, don't use.
 *   Returns class symbol of given platform error.
 */
taoensso.encore.ex_type = taoensso.truss.ex_type;

/**
 * Private, don't use.
 *   Returns ?{:keys [type msg data]} for given platform error.
 */
taoensso.encore.ex_map_STAR_ = taoensso.truss.ex_map_STAR_;

/**
 * Private, don't use.
 *   Returns ?{:keys [type msg data chain trace]} for given platform error.
 */
taoensso.encore.ex_map = taoensso.truss.ex_map;

/**
 * Private, don't use.
 *   Returns vector cause chain of given platform error.
 */
taoensso.encore.ex_chain = taoensso.truss.ex_chain;

/**
 * Given a platform error and criteria for matching, returns the error if it
 *   matches all criteria. Otherwise returns nil.
 * 
 *   `kind` may be:
 *  - A class (`ArithmeticException`, `AssertionError`, etc.)
 *  - A special keyword as given to `try*` (`:default`, `:common`, `:ex-info`, `:all`)
 *  - A set of `kind`s  as above, at least one of which must match
 *  - A predicate function, (fn match? [x]) -> bool
 * 
 *   `pattern` may be:
 *  - A string or Regex against which `ex-message` must match
 *  - A map             against which `ex-data`    must match using `submap?`
 *  - A set of `pattern`s as above, at least one of which must match
 * 
 *   When an error with (nested) causes doesn't match, a match will be attempted
 *   against its (nested) causes.
 * 
 *   This is a low-level util, see also `throws`, `throws?`.
 */
taoensso.encore.matching_error = taoensso.truss.matching_error;

/**
 * Returns wrapper around given reducing function `rf` so that if `rf`
 *  throws, (error-fn <thrown-error> <contextual-data>) will be called.
 * 
 *  The default `error-fn` will rethrow the original error, wrapped in
 *  extra contextual information to aid debugging.
 * 
 *  Helps make reducing fns easier to debug!
 *  See also `catching-xform`.
 */
taoensso.encore.catching_rf = taoensso.truss.catching_rf;

/**
 * Like `catching-rf`, but applies to a transducer (`xform`).
 * 
 *   Helps make transductions much easier to debug by greatly improving
 *   the info provided in any errors thrown by `xform` or the reducing fn:
 * 
 *  (transduce
 *    (catching-xform (comp (filter even?) (map inc))) ; Modified xform
 *    <reducing-fn>
 *    <...>)
 */
taoensso.encore.catching_xform = taoensso.truss.catching_xform;

/**
 * Prefer `*ctx*`
 */
taoensso.encore.get_truss_data = taoensso.truss.get_data;

taoensso.encore.ex_message = (function taoensso$encore$ex_message(x){
if((x instanceof Error)){
return x.message;
} else {
return null;
}
});

taoensso.encore.ex_data = (function taoensso$encore$ex_data(x){
if((x instanceof cljs.core.ExceptionInfo)){
return x.data;
} else {
return null;
}
});

taoensso.encore.ex_cause = (function taoensso$encore$ex_cause(x){
if((x instanceof cljs.core.ExceptionInfo)){
return x.cause;
} else {
return null;
}
});

/**
 * Returns true if x is not nil, false otherwise.
 */
taoensso.encore.some_QMARK_ = cljs.core.some_QMARK_;

taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__64750 = arguments.length;
switch (G__64750) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.some_QMARK_,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(pred,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,data){
if(cljs.core.truth_((function (){try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e64751){var _ = e64751;
return null;
}})())){
return x;
} else {
throw taoensso.truss.ex_info_STAR_("taoensso.encore",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [7362,8], null),["[encore/is!] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," failed against arg: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))].join(''),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),pred,new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data),null);
}
}));

(taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3);


taoensso.encore.pred = (function taoensso$encore$pred(pred_fn){
return pred_fn;
});

taoensso.encore.pred_fn = (function taoensso$encore$pred_fn(x){
if(cljs.core.fn_QMARK_(x)){
return x;
} else {
return null;
}
});

//# sourceMappingURL=taoensso.encore.js.map
