goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_21984 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._header[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5394__auto__.call(null,value));
} else {
var m__5392__auto__ = (devtools.format._header["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5392__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_21984(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_21989 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._has_body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5394__auto__.call(null,value));
} else {
var m__5392__auto__ = (devtools.format._has_body["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5392__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_21989(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_21995 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5394__auto__.call(null,value));
} else {
var m__5392__auto__ = (devtools.format._body["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5392__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_21995(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o21759 = temp__5802__auto__;
var temp__5802__auto____$1 = (o21759["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o21760 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o21760["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o21761 = temp__5802__auto____$2;
return (o21761["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o21762 = temp__5802__auto__;
var temp__5802__auto____$1 = (o21762["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o21763 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o21763["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o21764 = temp__5802__auto____$2;
return (o21764["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o21766 = temp__5802__auto__;
var temp__5802__auto____$1 = (o21766["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o21767 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o21767["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o21768 = temp__5802__auto____$2;
return (o21768["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o21770 = temp__5802__auto__;
var temp__5802__auto____$1 = (o21770["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o21771 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o21771["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o21772 = temp__5802__auto____$2;
return (o21772["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o21779 = temp__5802__auto__;
var temp__5802__auto____$1 = (o21779["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o21780 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o21780["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o21781 = temp__5802__auto____$2;
return (o21781["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o21784 = temp__5802__auto__;
var temp__5802__auto____$1 = (o21784["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o21785 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o21785["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o21786 = temp__5802__auto____$2;
return (o21786["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o21789 = temp__5802__auto__;
var temp__5802__auto____$1 = (o21789["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o21790 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o21790["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o21791 = temp__5802__auto____$2;
return (o21791["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22037 = arguments.length;
var i__5770__auto___22038 = (0);
while(true){
if((i__5770__auto___22038 < len__5769__auto___22037)){
args__5775__auto__.push((arguments[i__5770__auto___22038]));

var G__22039 = (i__5770__auto___22038 + (1));
i__5770__auto___22038 = G__22039;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq21810){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21810));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22045 = arguments.length;
var i__5770__auto___22046 = (0);
while(true){
if((i__5770__auto___22046 < len__5769__auto___22045)){
args__5775__auto__.push((arguments[i__5770__auto___22046]));

var G__22047 = (i__5770__auto___22046 + (1));
i__5770__auto___22046 = G__22047;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq21817){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21817));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22051 = arguments.length;
var i__5770__auto___22052 = (0);
while(true){
if((i__5770__auto___22052 < len__5769__auto___22051)){
args__5775__auto__.push((arguments[i__5770__auto___22052]));

var G__22053 = (i__5770__auto___22052 + (1));
i__5770__auto___22052 = G__22053;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq21827){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21827));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22057 = arguments.length;
var i__5770__auto___22058 = (0);
while(true){
if((i__5770__auto___22058 < len__5769__auto___22057)){
args__5775__auto__.push((arguments[i__5770__auto___22058]));

var G__22059 = (i__5770__auto___22058 + (1));
i__5770__auto___22058 = G__22059;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq21838){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21838));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22061 = arguments.length;
var i__5770__auto___22062 = (0);
while(true){
if((i__5770__auto___22062 < len__5769__auto___22061)){
args__5775__auto__.push((arguments[i__5770__auto___22062]));

var G__22064 = (i__5770__auto___22062 + (1));
i__5770__auto___22062 = G__22064;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq21843){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21843));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22070 = arguments.length;
var i__5770__auto___22071 = (0);
while(true){
if((i__5770__auto___22071 < len__5769__auto___22070)){
args__5775__auto__.push((arguments[i__5770__auto___22071]));

var G__22076 = (i__5770__auto___22071 + (1));
i__5770__auto___22071 = G__22076;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq21865){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21865));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22082 = arguments.length;
var i__5770__auto___22083 = (0);
while(true){
if((i__5770__auto___22083 < len__5769__auto___22082)){
args__5775__auto__.push((arguments[i__5770__auto___22083]));

var G__22084 = (i__5770__auto___22083 + (1));
i__5770__auto___22083 = G__22084;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq21888){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21888));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22092 = arguments.length;
var i__5770__auto___22093 = (0);
while(true){
if((i__5770__auto___22093 < len__5769__auto___22092)){
args__5775__auto__.push((arguments[i__5770__auto___22093]));

var G__22096 = (i__5770__auto___22093 + (1));
i__5770__auto___22093 = G__22096;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__21907){
var vec__21909 = p__21907;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21909,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__21896_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__21896_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq21898){
var G__21900 = cljs.core.first(seq21898);
var seq21898__$1 = cljs.core.next(seq21898);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21900,seq21898__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__21923 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__21924 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__21925 = (function (){var G__21927 = new cljs.core.Keyword(null,"li","li",723558921);
var G__21928 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__21929 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__21927,G__21928,G__21929) : devtools.format.make_template_fn.call(null,G__21927,G__21928,G__21929));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__21923,G__21924,G__21925) : devtools.format.make_template_fn.call(null,G__21923,G__21924,G__21925));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22108 = arguments.length;
var i__5770__auto___22110 = (0);
while(true){
if((i__5770__auto___22110 < len__5769__auto___22108)){
args__5775__auto__.push((arguments[i__5770__auto___22110]));

var G__22111 = (i__5770__auto___22110 + (1));
i__5770__auto___22110 = G__22111;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq21932){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21932));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22119 = arguments.length;
var i__5770__auto___22120 = (0);
while(true){
if((i__5770__auto___22120 < len__5769__auto___22119)){
args__5775__auto__.push((arguments[i__5770__auto___22120]));

var G__22121 = (i__5770__auto___22120 + (1));
i__5770__auto___22120 = G__22121;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq21947){
var G__21948 = cljs.core.first(seq21947);
var seq21947__$1 = cljs.core.next(seq21947);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21948,seq21947__$1);
}));


//# sourceMappingURL=devtools.format.js.map
