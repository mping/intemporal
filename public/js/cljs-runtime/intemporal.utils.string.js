goog.provide('intemporal.utils.string');
intemporal.utils.string.fmt = (function intemporal$utils$string$fmt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36740 = arguments.length;
var i__5770__auto___36741 = (0);
while(true){
if((i__5770__auto___36741 < len__5769__auto___36740)){
args__5775__auto__.push((arguments[i__5770__auto___36741]));

var G__36742 = (i__5770__auto___36741 + (1));
i__5770__auto___36741 = G__36742;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(intemporal.utils.string.fmt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.string.format,args);
}));

(intemporal.utils.string.fmt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(intemporal.utils.string.fmt.cljs$lang$applyTo = (function (seq36738){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36738));
}));


//# sourceMappingURL=intemporal.utils.string.js.map
