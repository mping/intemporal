goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33339 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33339(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33340 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33340(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32423 = coll;
var G__32424 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32423,G__32424) : shadow.dom.lazy_native_coll_seq.call(null,G__32423,G__32424));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32428 = arguments.length;
switch (G__32428) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32431 = arguments.length;
switch (G__32431) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32441 = arguments.length;
switch (G__32441) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32443 = arguments.length;
switch (G__32443) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32453 = arguments.length;
switch (G__32453) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32474 = arguments.length;
switch (G__32474) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32486){if((e32486 instanceof Object)){
var e = e32486;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32486;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32494 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32495 = null;
var count__32496 = (0);
var i__32497 = (0);
while(true){
if((i__32497 < count__32496)){
var el = chunk__32495.cljs$core$IIndexed$_nth$arity$2(null,i__32497);
var handler_33375__$1 = ((function (seq__32494,chunk__32495,count__32496,i__32497,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32494,chunk__32495,count__32496,i__32497,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33375__$1);


var G__33376 = seq__32494;
var G__33377 = chunk__32495;
var G__33378 = count__32496;
var G__33379 = (i__32497 + (1));
seq__32494 = G__33376;
chunk__32495 = G__33377;
count__32496 = G__33378;
i__32497 = G__33379;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32494);
if(temp__5804__auto__){
var seq__32494__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32494__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32494__$1);
var G__33383 = cljs.core.chunk_rest(seq__32494__$1);
var G__33384 = c__5568__auto__;
var G__33385 = cljs.core.count(c__5568__auto__);
var G__33386 = (0);
seq__32494 = G__33383;
chunk__32495 = G__33384;
count__32496 = G__33385;
i__32497 = G__33386;
continue;
} else {
var el = cljs.core.first(seq__32494__$1);
var handler_33387__$1 = ((function (seq__32494,chunk__32495,count__32496,i__32497,el,seq__32494__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32494,chunk__32495,count__32496,i__32497,el,seq__32494__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33387__$1);


var G__33389 = cljs.core.next(seq__32494__$1);
var G__33390 = null;
var G__33391 = (0);
var G__33392 = (0);
seq__32494 = G__33389;
chunk__32495 = G__33390;
count__32496 = G__33391;
i__32497 = G__33392;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32519 = arguments.length;
switch (G__32519) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32531 = cljs.core.seq(events);
var chunk__32532 = null;
var count__32533 = (0);
var i__32534 = (0);
while(true){
if((i__32534 < count__32533)){
var vec__32549 = chunk__32532.cljs$core$IIndexed$_nth$arity$2(null,i__32534);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32549,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33397 = seq__32531;
var G__33398 = chunk__32532;
var G__33399 = count__32533;
var G__33400 = (i__32534 + (1));
seq__32531 = G__33397;
chunk__32532 = G__33398;
count__32533 = G__33399;
i__32534 = G__33400;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32531);
if(temp__5804__auto__){
var seq__32531__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32531__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32531__$1);
var G__33404 = cljs.core.chunk_rest(seq__32531__$1);
var G__33405 = c__5568__auto__;
var G__33406 = cljs.core.count(c__5568__auto__);
var G__33407 = (0);
seq__32531 = G__33404;
chunk__32532 = G__33405;
count__32533 = G__33406;
i__32534 = G__33407;
continue;
} else {
var vec__32553 = cljs.core.first(seq__32531__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32553,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32553,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33413 = cljs.core.next(seq__32531__$1);
var G__33414 = null;
var G__33415 = (0);
var G__33416 = (0);
seq__32531 = G__33413;
chunk__32532 = G__33414;
count__32533 = G__33415;
i__32534 = G__33416;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32560 = cljs.core.seq(styles);
var chunk__32562 = null;
var count__32563 = (0);
var i__32564 = (0);
while(true){
if((i__32564 < count__32563)){
var vec__32582 = chunk__32562.cljs$core$IIndexed$_nth$arity$2(null,i__32564);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32582,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32582,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33419 = seq__32560;
var G__33420 = chunk__32562;
var G__33421 = count__32563;
var G__33422 = (i__32564 + (1));
seq__32560 = G__33419;
chunk__32562 = G__33420;
count__32563 = G__33421;
i__32564 = G__33422;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32560);
if(temp__5804__auto__){
var seq__32560__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32560__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32560__$1);
var G__33424 = cljs.core.chunk_rest(seq__32560__$1);
var G__33425 = c__5568__auto__;
var G__33426 = cljs.core.count(c__5568__auto__);
var G__33427 = (0);
seq__32560 = G__33424;
chunk__32562 = G__33425;
count__32563 = G__33426;
i__32564 = G__33427;
continue;
} else {
var vec__32595 = cljs.core.first(seq__32560__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32595,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32595,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33428 = cljs.core.next(seq__32560__$1);
var G__33429 = null;
var G__33430 = (0);
var G__33431 = (0);
seq__32560 = G__33428;
chunk__32562 = G__33429;
count__32563 = G__33430;
i__32564 = G__33431;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32606_33432 = key;
var G__32606_33433__$1 = (((G__32606_33432 instanceof cljs.core.Keyword))?G__32606_33432.fqn:null);
switch (G__32606_33433__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33435 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_33435,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_33435,"aria-");
}
})())){
el.setAttribute(ks_33435,value);
} else {
(el[ks_33435] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32625){
var map__32626 = p__32625;
var map__32626__$1 = cljs.core.__destructure_map(map__32626);
var props = map__32626__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32626__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32628 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32628,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32628,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32628,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32632 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32632,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32632;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32637 = arguments.length;
switch (G__32637) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32644){
var vec__32646 = p__32644;
var seq__32647 = cljs.core.seq(vec__32646);
var first__32648 = cljs.core.first(seq__32647);
var seq__32647__$1 = cljs.core.next(seq__32647);
var nn = first__32648;
var first__32648__$1 = cljs.core.first(seq__32647__$1);
var seq__32647__$2 = cljs.core.next(seq__32647__$1);
var np = first__32648__$1;
var nc = seq__32647__$2;
var node = vec__32646;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32650 = nn;
var G__32651 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32650,G__32651) : create_fn.call(null,G__32650,G__32651));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32653 = nn;
var G__32654 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32653,G__32654) : create_fn.call(null,G__32653,G__32654));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32657 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32657,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32657,(1),null);
var seq__32661_33453 = cljs.core.seq(node_children);
var chunk__32662_33454 = null;
var count__32663_33455 = (0);
var i__32664_33456 = (0);
while(true){
if((i__32664_33456 < count__32663_33455)){
var child_struct_33457 = chunk__32662_33454.cljs$core$IIndexed$_nth$arity$2(null,i__32664_33456);
var children_33458 = shadow.dom.dom_node(child_struct_33457);
if(cljs.core.seq_QMARK_(children_33458)){
var seq__32710_33459 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33458));
var chunk__32712_33460 = null;
var count__32713_33461 = (0);
var i__32714_33462 = (0);
while(true){
if((i__32714_33462 < count__32713_33461)){
var child_33463 = chunk__32712_33460.cljs$core$IIndexed$_nth$arity$2(null,i__32714_33462);
if(cljs.core.truth_(child_33463)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33463);


var G__33464 = seq__32710_33459;
var G__33465 = chunk__32712_33460;
var G__33466 = count__32713_33461;
var G__33467 = (i__32714_33462 + (1));
seq__32710_33459 = G__33464;
chunk__32712_33460 = G__33465;
count__32713_33461 = G__33466;
i__32714_33462 = G__33467;
continue;
} else {
var G__33468 = seq__32710_33459;
var G__33469 = chunk__32712_33460;
var G__33470 = count__32713_33461;
var G__33471 = (i__32714_33462 + (1));
seq__32710_33459 = G__33468;
chunk__32712_33460 = G__33469;
count__32713_33461 = G__33470;
i__32714_33462 = G__33471;
continue;
}
} else {
var temp__5804__auto___33474 = cljs.core.seq(seq__32710_33459);
if(temp__5804__auto___33474){
var seq__32710_33475__$1 = temp__5804__auto___33474;
if(cljs.core.chunked_seq_QMARK_(seq__32710_33475__$1)){
var c__5568__auto___33476 = cljs.core.chunk_first(seq__32710_33475__$1);
var G__33477 = cljs.core.chunk_rest(seq__32710_33475__$1);
var G__33479 = c__5568__auto___33476;
var G__33480 = cljs.core.count(c__5568__auto___33476);
var G__33481 = (0);
seq__32710_33459 = G__33477;
chunk__32712_33460 = G__33479;
count__32713_33461 = G__33480;
i__32714_33462 = G__33481;
continue;
} else {
var child_33483 = cljs.core.first(seq__32710_33475__$1);
if(cljs.core.truth_(child_33483)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33483);


var G__33484 = cljs.core.next(seq__32710_33475__$1);
var G__33485 = null;
var G__33486 = (0);
var G__33487 = (0);
seq__32710_33459 = G__33484;
chunk__32712_33460 = G__33485;
count__32713_33461 = G__33486;
i__32714_33462 = G__33487;
continue;
} else {
var G__33488 = cljs.core.next(seq__32710_33475__$1);
var G__33489 = null;
var G__33490 = (0);
var G__33491 = (0);
seq__32710_33459 = G__33488;
chunk__32712_33460 = G__33489;
count__32713_33461 = G__33490;
i__32714_33462 = G__33491;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33458);
}


var G__33492 = seq__32661_33453;
var G__33493 = chunk__32662_33454;
var G__33494 = count__32663_33455;
var G__33495 = (i__32664_33456 + (1));
seq__32661_33453 = G__33492;
chunk__32662_33454 = G__33493;
count__32663_33455 = G__33494;
i__32664_33456 = G__33495;
continue;
} else {
var temp__5804__auto___33496 = cljs.core.seq(seq__32661_33453);
if(temp__5804__auto___33496){
var seq__32661_33497__$1 = temp__5804__auto___33496;
if(cljs.core.chunked_seq_QMARK_(seq__32661_33497__$1)){
var c__5568__auto___33498 = cljs.core.chunk_first(seq__32661_33497__$1);
var G__33499 = cljs.core.chunk_rest(seq__32661_33497__$1);
var G__33500 = c__5568__auto___33498;
var G__33501 = cljs.core.count(c__5568__auto___33498);
var G__33502 = (0);
seq__32661_33453 = G__33499;
chunk__32662_33454 = G__33500;
count__32663_33455 = G__33501;
i__32664_33456 = G__33502;
continue;
} else {
var child_struct_33503 = cljs.core.first(seq__32661_33497__$1);
var children_33504 = shadow.dom.dom_node(child_struct_33503);
if(cljs.core.seq_QMARK_(children_33504)){
var seq__32725_33505 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33504));
var chunk__32727_33506 = null;
var count__32728_33507 = (0);
var i__32729_33508 = (0);
while(true){
if((i__32729_33508 < count__32728_33507)){
var child_33510 = chunk__32727_33506.cljs$core$IIndexed$_nth$arity$2(null,i__32729_33508);
if(cljs.core.truth_(child_33510)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33510);


var G__33511 = seq__32725_33505;
var G__33512 = chunk__32727_33506;
var G__33513 = count__32728_33507;
var G__33514 = (i__32729_33508 + (1));
seq__32725_33505 = G__33511;
chunk__32727_33506 = G__33512;
count__32728_33507 = G__33513;
i__32729_33508 = G__33514;
continue;
} else {
var G__33515 = seq__32725_33505;
var G__33516 = chunk__32727_33506;
var G__33517 = count__32728_33507;
var G__33518 = (i__32729_33508 + (1));
seq__32725_33505 = G__33515;
chunk__32727_33506 = G__33516;
count__32728_33507 = G__33517;
i__32729_33508 = G__33518;
continue;
}
} else {
var temp__5804__auto___33519__$1 = cljs.core.seq(seq__32725_33505);
if(temp__5804__auto___33519__$1){
var seq__32725_33520__$1 = temp__5804__auto___33519__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32725_33520__$1)){
var c__5568__auto___33521 = cljs.core.chunk_first(seq__32725_33520__$1);
var G__33524 = cljs.core.chunk_rest(seq__32725_33520__$1);
var G__33525 = c__5568__auto___33521;
var G__33526 = cljs.core.count(c__5568__auto___33521);
var G__33527 = (0);
seq__32725_33505 = G__33524;
chunk__32727_33506 = G__33525;
count__32728_33507 = G__33526;
i__32729_33508 = G__33527;
continue;
} else {
var child_33528 = cljs.core.first(seq__32725_33520__$1);
if(cljs.core.truth_(child_33528)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33528);


var G__33529 = cljs.core.next(seq__32725_33520__$1);
var G__33530 = null;
var G__33531 = (0);
var G__33532 = (0);
seq__32725_33505 = G__33529;
chunk__32727_33506 = G__33530;
count__32728_33507 = G__33531;
i__32729_33508 = G__33532;
continue;
} else {
var G__33535 = cljs.core.next(seq__32725_33520__$1);
var G__33536 = null;
var G__33537 = (0);
var G__33538 = (0);
seq__32725_33505 = G__33535;
chunk__32727_33506 = G__33536;
count__32728_33507 = G__33537;
i__32729_33508 = G__33538;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33504);
}


var G__33539 = cljs.core.next(seq__32661_33497__$1);
var G__33540 = null;
var G__33541 = (0);
var G__33542 = (0);
seq__32661_33453 = G__33539;
chunk__32662_33454 = G__33540;
count__32663_33455 = G__33541;
i__32664_33456 = G__33542;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32753 = cljs.core.seq(node);
var chunk__32754 = null;
var count__32755 = (0);
var i__32756 = (0);
while(true){
if((i__32756 < count__32755)){
var n = chunk__32754.cljs$core$IIndexed$_nth$arity$2(null,i__32756);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33548 = seq__32753;
var G__33549 = chunk__32754;
var G__33550 = count__32755;
var G__33551 = (i__32756 + (1));
seq__32753 = G__33548;
chunk__32754 = G__33549;
count__32755 = G__33550;
i__32756 = G__33551;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32753);
if(temp__5804__auto__){
var seq__32753__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32753__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32753__$1);
var G__33552 = cljs.core.chunk_rest(seq__32753__$1);
var G__33553 = c__5568__auto__;
var G__33554 = cljs.core.count(c__5568__auto__);
var G__33555 = (0);
seq__32753 = G__33552;
chunk__32754 = G__33553;
count__32755 = G__33554;
i__32756 = G__33555;
continue;
} else {
var n = cljs.core.first(seq__32753__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33557 = cljs.core.next(seq__32753__$1);
var G__33558 = null;
var G__33559 = (0);
var G__33560 = (0);
seq__32753 = G__33557;
chunk__32754 = G__33558;
count__32755 = G__33559;
i__32756 = G__33560;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32777 = arguments.length;
switch (G__32777) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32786 = arguments.length;
switch (G__32786) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32803 = arguments.length;
switch (G__32803) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33578 = arguments.length;
var i__5770__auto___33579 = (0);
while(true){
if((i__5770__auto___33579 < len__5769__auto___33578)){
args__5775__auto__.push((arguments[i__5770__auto___33579]));

var G__33580 = (i__5770__auto___33579 + (1));
i__5770__auto___33579 = G__33580;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32830_33581 = cljs.core.seq(nodes);
var chunk__32831_33582 = null;
var count__32832_33583 = (0);
var i__32833_33584 = (0);
while(true){
if((i__32833_33584 < count__32832_33583)){
var node_33586 = chunk__32831_33582.cljs$core$IIndexed$_nth$arity$2(null,i__32833_33584);
fragment.appendChild(shadow.dom._to_dom(node_33586));


var G__33587 = seq__32830_33581;
var G__33588 = chunk__32831_33582;
var G__33589 = count__32832_33583;
var G__33590 = (i__32833_33584 + (1));
seq__32830_33581 = G__33587;
chunk__32831_33582 = G__33588;
count__32832_33583 = G__33589;
i__32833_33584 = G__33590;
continue;
} else {
var temp__5804__auto___33591 = cljs.core.seq(seq__32830_33581);
if(temp__5804__auto___33591){
var seq__32830_33593__$1 = temp__5804__auto___33591;
if(cljs.core.chunked_seq_QMARK_(seq__32830_33593__$1)){
var c__5568__auto___33595 = cljs.core.chunk_first(seq__32830_33593__$1);
var G__33596 = cljs.core.chunk_rest(seq__32830_33593__$1);
var G__33597 = c__5568__auto___33595;
var G__33598 = cljs.core.count(c__5568__auto___33595);
var G__33599 = (0);
seq__32830_33581 = G__33596;
chunk__32831_33582 = G__33597;
count__32832_33583 = G__33598;
i__32833_33584 = G__33599;
continue;
} else {
var node_33600 = cljs.core.first(seq__32830_33593__$1);
fragment.appendChild(shadow.dom._to_dom(node_33600));


var G__33603 = cljs.core.next(seq__32830_33593__$1);
var G__33604 = null;
var G__33605 = (0);
var G__33606 = (0);
seq__32830_33581 = G__33603;
chunk__32831_33582 = G__33604;
count__32832_33583 = G__33605;
i__32833_33584 = G__33606;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32822){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32822));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32852_33607 = cljs.core.seq(scripts);
var chunk__32853_33608 = null;
var count__32854_33609 = (0);
var i__32855_33610 = (0);
while(true){
if((i__32855_33610 < count__32854_33609)){
var vec__32866_33612 = chunk__32853_33608.cljs$core$IIndexed$_nth$arity$2(null,i__32855_33610);
var script_tag_33613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32866_33612,(0),null);
var script_body_33614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32866_33612,(1),null);
eval(script_body_33614);


var G__33615 = seq__32852_33607;
var G__33616 = chunk__32853_33608;
var G__33617 = count__32854_33609;
var G__33618 = (i__32855_33610 + (1));
seq__32852_33607 = G__33615;
chunk__32853_33608 = G__33616;
count__32854_33609 = G__33617;
i__32855_33610 = G__33618;
continue;
} else {
var temp__5804__auto___33620 = cljs.core.seq(seq__32852_33607);
if(temp__5804__auto___33620){
var seq__32852_33622__$1 = temp__5804__auto___33620;
if(cljs.core.chunked_seq_QMARK_(seq__32852_33622__$1)){
var c__5568__auto___33623 = cljs.core.chunk_first(seq__32852_33622__$1);
var G__33624 = cljs.core.chunk_rest(seq__32852_33622__$1);
var G__33625 = c__5568__auto___33623;
var G__33626 = cljs.core.count(c__5568__auto___33623);
var G__33627 = (0);
seq__32852_33607 = G__33624;
chunk__32853_33608 = G__33625;
count__32854_33609 = G__33626;
i__32855_33610 = G__33627;
continue;
} else {
var vec__32872_33630 = cljs.core.first(seq__32852_33622__$1);
var script_tag_33631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32872_33630,(0),null);
var script_body_33632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32872_33630,(1),null);
eval(script_body_33632);


var G__33633 = cljs.core.next(seq__32852_33622__$1);
var G__33634 = null;
var G__33635 = (0);
var G__33636 = (0);
seq__32852_33607 = G__33633;
chunk__32853_33608 = G__33634;
count__32854_33609 = G__33635;
i__32855_33610 = G__33636;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32875){
var vec__32876 = p__32875;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32876,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32876,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32896 = arguments.length;
switch (G__32896) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32912 = cljs.core.seq(style_keys);
var chunk__32913 = null;
var count__32914 = (0);
var i__32915 = (0);
while(true){
if((i__32915 < count__32914)){
var it = chunk__32913.cljs$core$IIndexed$_nth$arity$2(null,i__32915);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33648 = seq__32912;
var G__33649 = chunk__32913;
var G__33650 = count__32914;
var G__33651 = (i__32915 + (1));
seq__32912 = G__33648;
chunk__32913 = G__33649;
count__32914 = G__33650;
i__32915 = G__33651;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32912);
if(temp__5804__auto__){
var seq__32912__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32912__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32912__$1);
var G__33652 = cljs.core.chunk_rest(seq__32912__$1);
var G__33653 = c__5568__auto__;
var G__33654 = cljs.core.count(c__5568__auto__);
var G__33655 = (0);
seq__32912 = G__33652;
chunk__32913 = G__33653;
count__32914 = G__33654;
i__32915 = G__33655;
continue;
} else {
var it = cljs.core.first(seq__32912__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33656 = cljs.core.next(seq__32912__$1);
var G__33657 = null;
var G__33658 = (0);
var G__33659 = (0);
seq__32912 = G__33656;
chunk__32913 = G__33657;
count__32914 = G__33658;
i__32915 = G__33659;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k32922,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__32930 = k32922;
var G__32930__$1 = (((G__32930 instanceof cljs.core.Keyword))?G__32930.fqn:null);
switch (G__32930__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32922,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__32935){
var vec__32936 = p__32935;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32936,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32936,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32921){
var self__ = this;
var G__32921__$1 = this;
return (new cljs.core.RecordIter((0),G__32921__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32923,other32924){
var self__ = this;
var this32923__$1 = this;
return (((!((other32924 == null)))) && ((((this32923__$1.constructor === other32924.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32923__$1.x,other32924.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32923__$1.y,other32924.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32923__$1.__extmap,other32924.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k32922){
var self__ = this;
var this__5350__auto____$1 = this;
var G__32968 = k32922;
var G__32968__$1 = (((G__32968 instanceof cljs.core.Keyword))?G__32968.fqn:null);
switch (G__32968__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32922);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__32921){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__32971 = cljs.core.keyword_identical_QMARK_;
var expr__32972 = k__5352__auto__;
if(cljs.core.truth_((pred__32971.cljs$core$IFn$_invoke$arity$2 ? pred__32971.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32972) : pred__32971.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32972)))){
return (new shadow.dom.Coordinate(G__32921,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32971.cljs$core$IFn$_invoke$arity$2 ? pred__32971.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32972) : pred__32971.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32972)))){
return (new shadow.dom.Coordinate(self__.x,G__32921,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__32921),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__32921){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32921,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32926){
var extmap__5385__auto__ = (function (){var G__32988 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32926,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32926)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32988);
} else {
return G__32988;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32926),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32926),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k33003,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__33011 = k33003;
var G__33011__$1 = (((G__33011 instanceof cljs.core.Keyword))?G__33011.fqn:null);
switch (G__33011__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33003,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__33013){
var vec__33014 = p__33013;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33014,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33014,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33002){
var self__ = this;
var G__33002__$1 = this;
return (new cljs.core.RecordIter((0),G__33002__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33004,other33005){
var self__ = this;
var this33004__$1 = this;
return (((!((other33005 == null)))) && ((((this33004__$1.constructor === other33005.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33004__$1.w,other33005.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33004__$1.h,other33005.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33004__$1.__extmap,other33005.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k33003){
var self__ = this;
var this__5350__auto____$1 = this;
var G__33034 = k33003;
var G__33034__$1 = (((G__33034 instanceof cljs.core.Keyword))?G__33034.fqn:null);
switch (G__33034__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33003);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__33002){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__33038 = cljs.core.keyword_identical_QMARK_;
var expr__33039 = k__5352__auto__;
if(cljs.core.truth_((pred__33038.cljs$core$IFn$_invoke$arity$2 ? pred__33038.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33039) : pred__33038.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33039)))){
return (new shadow.dom.Size(G__33002,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33038.cljs$core$IFn$_invoke$arity$2 ? pred__33038.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33039) : pred__33038.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33039)))){
return (new shadow.dom.Size(self__.w,G__33002,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__33002),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__33002){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33002,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33007){
var extmap__5385__auto__ = (function (){var G__33053 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33007,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33007)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33053);
} else {
return G__33053;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33007),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33007),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__33707 = (i + (1));
var G__33708 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33707;
ret = G__33708;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33095){
var vec__33097 = p__33095;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33104 = arguments.length;
switch (G__33104) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33719 = ps;
var G__33720 = (i + (1));
el__$1 = G__33719;
i = G__33720;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33146 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33146,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33146,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33146,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33153_33726 = cljs.core.seq(props);
var chunk__33154_33727 = null;
var count__33155_33728 = (0);
var i__33156_33729 = (0);
while(true){
if((i__33156_33729 < count__33155_33728)){
var vec__33180_33730 = chunk__33154_33727.cljs$core$IIndexed$_nth$arity$2(null,i__33156_33729);
var k_33731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33180_33730,(0),null);
var v_33732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33180_33730,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_33731);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33731),v_33732);


var G__33734 = seq__33153_33726;
var G__33735 = chunk__33154_33727;
var G__33736 = count__33155_33728;
var G__33737 = (i__33156_33729 + (1));
seq__33153_33726 = G__33734;
chunk__33154_33727 = G__33735;
count__33155_33728 = G__33736;
i__33156_33729 = G__33737;
continue;
} else {
var temp__5804__auto___33738 = cljs.core.seq(seq__33153_33726);
if(temp__5804__auto___33738){
var seq__33153_33739__$1 = temp__5804__auto___33738;
if(cljs.core.chunked_seq_QMARK_(seq__33153_33739__$1)){
var c__5568__auto___33740 = cljs.core.chunk_first(seq__33153_33739__$1);
var G__33742 = cljs.core.chunk_rest(seq__33153_33739__$1);
var G__33743 = c__5568__auto___33740;
var G__33744 = cljs.core.count(c__5568__auto___33740);
var G__33745 = (0);
seq__33153_33726 = G__33742;
chunk__33154_33727 = G__33743;
count__33155_33728 = G__33744;
i__33156_33729 = G__33745;
continue;
} else {
var vec__33185_33747 = cljs.core.first(seq__33153_33739__$1);
var k_33748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33185_33747,(0),null);
var v_33749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33185_33747,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_33748);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33748),v_33749);


var G__33752 = cljs.core.next(seq__33153_33739__$1);
var G__33753 = null;
var G__33754 = (0);
var G__33755 = (0);
seq__33153_33726 = G__33752;
chunk__33154_33727 = G__33753;
count__33155_33728 = G__33754;
i__33156_33729 = G__33755;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33201 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33201,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33201,(1),null);
var seq__33208_33757 = cljs.core.seq(node_children);
var chunk__33210_33758 = null;
var count__33211_33759 = (0);
var i__33212_33760 = (0);
while(true){
if((i__33212_33760 < count__33211_33759)){
var child_struct_33763 = chunk__33210_33758.cljs$core$IIndexed$_nth$arity$2(null,i__33212_33760);
if((!((child_struct_33763 == null)))){
if(typeof child_struct_33763 === 'string'){
var text_33764 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33764),child_struct_33763].join(''));
} else {
var children_33767 = shadow.dom.svg_node(child_struct_33763);
if(cljs.core.seq_QMARK_(children_33767)){
var seq__33247_33768 = cljs.core.seq(children_33767);
var chunk__33249_33769 = null;
var count__33250_33770 = (0);
var i__33251_33771 = (0);
while(true){
if((i__33251_33771 < count__33250_33770)){
var child_33772 = chunk__33249_33769.cljs$core$IIndexed$_nth$arity$2(null,i__33251_33771);
if(cljs.core.truth_(child_33772)){
node.appendChild(child_33772);


var G__33773 = seq__33247_33768;
var G__33774 = chunk__33249_33769;
var G__33775 = count__33250_33770;
var G__33776 = (i__33251_33771 + (1));
seq__33247_33768 = G__33773;
chunk__33249_33769 = G__33774;
count__33250_33770 = G__33775;
i__33251_33771 = G__33776;
continue;
} else {
var G__33777 = seq__33247_33768;
var G__33778 = chunk__33249_33769;
var G__33779 = count__33250_33770;
var G__33780 = (i__33251_33771 + (1));
seq__33247_33768 = G__33777;
chunk__33249_33769 = G__33778;
count__33250_33770 = G__33779;
i__33251_33771 = G__33780;
continue;
}
} else {
var temp__5804__auto___33781 = cljs.core.seq(seq__33247_33768);
if(temp__5804__auto___33781){
var seq__33247_33783__$1 = temp__5804__auto___33781;
if(cljs.core.chunked_seq_QMARK_(seq__33247_33783__$1)){
var c__5568__auto___33784 = cljs.core.chunk_first(seq__33247_33783__$1);
var G__33785 = cljs.core.chunk_rest(seq__33247_33783__$1);
var G__33786 = c__5568__auto___33784;
var G__33787 = cljs.core.count(c__5568__auto___33784);
var G__33788 = (0);
seq__33247_33768 = G__33785;
chunk__33249_33769 = G__33786;
count__33250_33770 = G__33787;
i__33251_33771 = G__33788;
continue;
} else {
var child_33789 = cljs.core.first(seq__33247_33783__$1);
if(cljs.core.truth_(child_33789)){
node.appendChild(child_33789);


var G__33790 = cljs.core.next(seq__33247_33783__$1);
var G__33791 = null;
var G__33792 = (0);
var G__33793 = (0);
seq__33247_33768 = G__33790;
chunk__33249_33769 = G__33791;
count__33250_33770 = G__33792;
i__33251_33771 = G__33793;
continue;
} else {
var G__33796 = cljs.core.next(seq__33247_33783__$1);
var G__33797 = null;
var G__33798 = (0);
var G__33799 = (0);
seq__33247_33768 = G__33796;
chunk__33249_33769 = G__33797;
count__33250_33770 = G__33798;
i__33251_33771 = G__33799;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33767);
}
}


var G__33800 = seq__33208_33757;
var G__33801 = chunk__33210_33758;
var G__33802 = count__33211_33759;
var G__33803 = (i__33212_33760 + (1));
seq__33208_33757 = G__33800;
chunk__33210_33758 = G__33801;
count__33211_33759 = G__33802;
i__33212_33760 = G__33803;
continue;
} else {
var G__33804 = seq__33208_33757;
var G__33805 = chunk__33210_33758;
var G__33806 = count__33211_33759;
var G__33807 = (i__33212_33760 + (1));
seq__33208_33757 = G__33804;
chunk__33210_33758 = G__33805;
count__33211_33759 = G__33806;
i__33212_33760 = G__33807;
continue;
}
} else {
var temp__5804__auto___33810 = cljs.core.seq(seq__33208_33757);
if(temp__5804__auto___33810){
var seq__33208_33811__$1 = temp__5804__auto___33810;
if(cljs.core.chunked_seq_QMARK_(seq__33208_33811__$1)){
var c__5568__auto___33812 = cljs.core.chunk_first(seq__33208_33811__$1);
var G__33813 = cljs.core.chunk_rest(seq__33208_33811__$1);
var G__33814 = c__5568__auto___33812;
var G__33815 = cljs.core.count(c__5568__auto___33812);
var G__33816 = (0);
seq__33208_33757 = G__33813;
chunk__33210_33758 = G__33814;
count__33211_33759 = G__33815;
i__33212_33760 = G__33816;
continue;
} else {
var child_struct_33817 = cljs.core.first(seq__33208_33811__$1);
if((!((child_struct_33817 == null)))){
if(typeof child_struct_33817 === 'string'){
var text_33818 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33818),child_struct_33817].join(''));
} else {
var children_33819 = shadow.dom.svg_node(child_struct_33817);
if(cljs.core.seq_QMARK_(children_33819)){
var seq__33267_33821 = cljs.core.seq(children_33819);
var chunk__33269_33822 = null;
var count__33270_33823 = (0);
var i__33271_33824 = (0);
while(true){
if((i__33271_33824 < count__33270_33823)){
var child_33825 = chunk__33269_33822.cljs$core$IIndexed$_nth$arity$2(null,i__33271_33824);
if(cljs.core.truth_(child_33825)){
node.appendChild(child_33825);


var G__33826 = seq__33267_33821;
var G__33827 = chunk__33269_33822;
var G__33828 = count__33270_33823;
var G__33829 = (i__33271_33824 + (1));
seq__33267_33821 = G__33826;
chunk__33269_33822 = G__33827;
count__33270_33823 = G__33828;
i__33271_33824 = G__33829;
continue;
} else {
var G__33832 = seq__33267_33821;
var G__33833 = chunk__33269_33822;
var G__33834 = count__33270_33823;
var G__33835 = (i__33271_33824 + (1));
seq__33267_33821 = G__33832;
chunk__33269_33822 = G__33833;
count__33270_33823 = G__33834;
i__33271_33824 = G__33835;
continue;
}
} else {
var temp__5804__auto___33836__$1 = cljs.core.seq(seq__33267_33821);
if(temp__5804__auto___33836__$1){
var seq__33267_33837__$1 = temp__5804__auto___33836__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33267_33837__$1)){
var c__5568__auto___33838 = cljs.core.chunk_first(seq__33267_33837__$1);
var G__33841 = cljs.core.chunk_rest(seq__33267_33837__$1);
var G__33842 = c__5568__auto___33838;
var G__33843 = cljs.core.count(c__5568__auto___33838);
var G__33844 = (0);
seq__33267_33821 = G__33841;
chunk__33269_33822 = G__33842;
count__33270_33823 = G__33843;
i__33271_33824 = G__33844;
continue;
} else {
var child_33845 = cljs.core.first(seq__33267_33837__$1);
if(cljs.core.truth_(child_33845)){
node.appendChild(child_33845);


var G__33846 = cljs.core.next(seq__33267_33837__$1);
var G__33847 = null;
var G__33848 = (0);
var G__33849 = (0);
seq__33267_33821 = G__33846;
chunk__33269_33822 = G__33847;
count__33270_33823 = G__33848;
i__33271_33824 = G__33849;
continue;
} else {
var G__33850 = cljs.core.next(seq__33267_33837__$1);
var G__33851 = null;
var G__33852 = (0);
var G__33853 = (0);
seq__33267_33821 = G__33850;
chunk__33269_33822 = G__33851;
count__33270_33823 = G__33852;
i__33271_33824 = G__33853;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33819);
}
}


var G__33854 = cljs.core.next(seq__33208_33811__$1);
var G__33855 = null;
var G__33856 = (0);
var G__33857 = (0);
seq__33208_33757 = G__33854;
chunk__33210_33758 = G__33855;
count__33211_33759 = G__33856;
i__33212_33760 = G__33857;
continue;
} else {
var G__33858 = cljs.core.next(seq__33208_33811__$1);
var G__33859 = null;
var G__33860 = (0);
var G__33861 = (0);
seq__33208_33757 = G__33858;
chunk__33210_33758 = G__33859;
count__33211_33759 = G__33860;
i__33212_33760 = G__33861;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33863 = arguments.length;
var i__5770__auto___33865 = (0);
while(true){
if((i__5770__auto___33865 < len__5769__auto___33863)){
args__5775__auto__.push((arguments[i__5770__auto___33865]));

var G__33866 = (i__5770__auto___33865 + (1));
i__5770__auto___33865 = G__33866;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33281){
var G__33282 = cljs.core.first(seq33281);
var seq33281__$1 = cljs.core.next(seq33281);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33282,seq33281__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33291 = arguments.length;
switch (G__33291) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__28047__auto___33872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_33302){
var state_val_33303 = (state_33302[(1)]);
if((state_val_33303 === (1))){
var state_33302__$1 = state_33302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33302__$1,(2),once_or_cleanup);
} else {
if((state_val_33303 === (2))){
var inst_33299 = (state_33302[(2)]);
var inst_33300 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33302__$1 = (function (){var statearr_33308 = state_33302;
(statearr_33308[(7)] = inst_33299);

return statearr_33308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33302__$1,inst_33300);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27338__auto__ = null;
var shadow$dom$state_machine__27338__auto____0 = (function (){
var statearr_33310 = [null,null,null,null,null,null,null,null];
(statearr_33310[(0)] = shadow$dom$state_machine__27338__auto__);

(statearr_33310[(1)] = (1));

return statearr_33310;
});
var shadow$dom$state_machine__27338__auto____1 = (function (state_33302){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_33302);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e33311){var ex__27341__auto__ = e33311;
var statearr_33312_33874 = state_33302;
(statearr_33312_33874[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_33302[(4)]))){
var statearr_33315_33875 = state_33302;
(statearr_33315_33875[(1)] = cljs.core.first((state_33302[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33876 = state_33302;
state_33302 = G__33876;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
shadow$dom$state_machine__27338__auto__ = function(state_33302){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27338__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27338__auto____1.call(this,state_33302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27338__auto____0;
shadow$dom$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27338__auto____1;
return shadow$dom$state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_33318 = f__28048__auto__();
(statearr_33318[(6)] = c__28047__auto___33872);

return statearr_33318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
