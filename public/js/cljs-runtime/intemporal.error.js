goog.provide('intemporal.error');
intemporal.error.internal_error_QMARK_ = (function intemporal$error$internal_error_QMARK_(ex){
var temp__5825__auto__ = new cljs.core.Keyword("intemporal.error","type","intemporal.error/type",1880380717).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(ex));
if(cljs.core.truth_(temp__5825__auto__)){
var t = temp__5825__auto__;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"internal","internal",-854870097),t)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panic","panic",-1043312570),t)));
} else {
return null;
}
});
intemporal.error.panic_QMARK_ = (function intemporal$error$panic_QMARK_(ex){
return (((ex instanceof Error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panic","panic",-1043312570),new cljs.core.Keyword("intemporal.error","type","intemporal.error/type",1880380717).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(ex)))));
});
intemporal.error.internal_error = (function intemporal$error$internal_error(msg,data){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("intemporal.error","type","intemporal.error/type",1880380717),new cljs.core.Keyword(null,"internal","internal",-854870097)], null)], 0)));
});
intemporal.error.panic = (function intemporal$error$panic(msg){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("intemporal.error","type","intemporal.error/type",1880380717),new cljs.core.Keyword(null,"panic","panic",-1043312570)], null));
});

//# sourceMappingURL=intemporal.error.js.map
