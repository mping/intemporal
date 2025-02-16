goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_27818 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_27818(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_27825 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_27825(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__26395 = coll;
var G__26396 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__26395,G__26396) : shadow.dom.lazy_native_coll_seq.call(null, G__26395,G__26396));
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
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
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
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
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
var G__26406 = arguments.length;
switch (G__26406) {
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
var G__26409 = arguments.length;
switch (G__26409) {
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
var G__26419 = arguments.length;
switch (G__26419) {
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
var G__26424 = arguments.length;
switch (G__26424) {
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
var G__26430 = arguments.length;
switch (G__26430) {
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
var G__26448 = arguments.length;
switch (G__26448) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e26458){if((e26458 instanceof Object)){
var e = e26458;
return console.log("didnt support attachEvent",el,e);
} else {
throw e26458;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__26475 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__26476 = null;
var count__26477 = (0);
var i__26478 = (0);
while(true){
if((i__26478 < count__26477)){
var el = chunk__26476.cljs$core$IIndexed$_nth$arity$2(null, i__26478);
var handler_27971__$1 = ((function (seq__26475,chunk__26476,count__26477,i__26478,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__26475,chunk__26476,count__26477,i__26478,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_27971__$1);


var G__27973 = seq__26475;
var G__27974 = chunk__26476;
var G__27975 = count__26477;
var G__27976 = (i__26478 + (1));
seq__26475 = G__27973;
chunk__26476 = G__27974;
count__26477 = G__27975;
i__26478 = G__27976;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26475);
if(temp__5804__auto__){
var seq__26475__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26475__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26475__$1);
var G__27981 = cljs.core.chunk_rest(seq__26475__$1);
var G__27982 = c__5525__auto__;
var G__27983 = cljs.core.count(c__5525__auto__);
var G__27984 = (0);
seq__26475 = G__27981;
chunk__26476 = G__27982;
count__26477 = G__27983;
i__26478 = G__27984;
continue;
} else {
var el = cljs.core.first(seq__26475__$1);
var handler_27986__$1 = ((function (seq__26475,chunk__26476,count__26477,i__26478,el,seq__26475__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__26475,chunk__26476,count__26477,i__26478,el,seq__26475__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_27986__$1);


var G__27987 = cljs.core.next(seq__26475__$1);
var G__27988 = null;
var G__27989 = (0);
var G__27990 = (0);
seq__26475 = G__27987;
chunk__26476 = G__27988;
count__26477 = G__27989;
i__26478 = G__27990;
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
var G__26527 = arguments.length;
switch (G__26527) {
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
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__26579 = cljs.core.seq(events);
var chunk__26580 = null;
var count__26581 = (0);
var i__26582 = (0);
while(true){
if((i__26582 < count__26581)){
var vec__26609 = chunk__26580.cljs$core$IIndexed$_nth$arity$2(null, i__26582);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26609,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26609,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__28021 = seq__26579;
var G__28022 = chunk__26580;
var G__28023 = count__26581;
var G__28024 = (i__26582 + (1));
seq__26579 = G__28021;
chunk__26580 = G__28022;
count__26581 = G__28023;
i__26582 = G__28024;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26579);
if(temp__5804__auto__){
var seq__26579__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26579__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26579__$1);
var G__28030 = cljs.core.chunk_rest(seq__26579__$1);
var G__28031 = c__5525__auto__;
var G__28032 = cljs.core.count(c__5525__auto__);
var G__28033 = (0);
seq__26579 = G__28030;
chunk__26580 = G__28031;
count__26581 = G__28032;
i__26582 = G__28033;
continue;
} else {
var vec__26617 = cljs.core.first(seq__26579__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26617,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26617,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__28049 = cljs.core.next(seq__26579__$1);
var G__28050 = null;
var G__28051 = (0);
var G__28054 = (0);
seq__26579 = G__28049;
chunk__26580 = G__28050;
count__26581 = G__28051;
i__26582 = G__28054;
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
var seq__26626 = cljs.core.seq(styles);
var chunk__26627 = null;
var count__26628 = (0);
var i__26629 = (0);
while(true){
if((i__26629 < count__26628)){
var vec__26660 = chunk__26627.cljs$core$IIndexed$_nth$arity$2(null, i__26629);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26660,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26660,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__28066 = seq__26626;
var G__28067 = chunk__26627;
var G__28068 = count__26628;
var G__28069 = (i__26629 + (1));
seq__26626 = G__28066;
chunk__26627 = G__28067;
count__26628 = G__28068;
i__26629 = G__28069;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26626);
if(temp__5804__auto__){
var seq__26626__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26626__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26626__$1);
var G__28073 = cljs.core.chunk_rest(seq__26626__$1);
var G__28074 = c__5525__auto__;
var G__28075 = cljs.core.count(c__5525__auto__);
var G__28076 = (0);
seq__26626 = G__28073;
chunk__26627 = G__28074;
count__26628 = G__28075;
i__26629 = G__28076;
continue;
} else {
var vec__26679 = cljs.core.first(seq__26626__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26679,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26679,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__28079 = cljs.core.next(seq__26626__$1);
var G__28080 = null;
var G__28081 = (0);
var G__28082 = (0);
seq__26626 = G__28079;
chunk__26627 = G__28080;
count__26628 = G__28081;
i__26629 = G__28082;
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
var G__26697_28083 = key;
var G__26697_28084__$1 = (((G__26697_28083 instanceof cljs.core.Keyword))?G__26697_28083.fqn:null);
switch (G__26697_28084__$1) {
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
var ks_28090 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_28090,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_28090,"aria-");
}
})())){
el.setAttribute(ks_28090,value);
} else {
(el[ks_28090] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__26751){
var map__26752 = p__26751;
var map__26752__$1 = cljs.core.__destructure_map(map__26752);
var props = map__26752__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26752__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__26755 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26755,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26755,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26755,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__26761 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__26761,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__26761;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__26768 = arguments.length;
switch (G__26768) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__26791){
var vec__26792 = p__26791;
var seq__26793 = cljs.core.seq(vec__26792);
var first__26794 = cljs.core.first(seq__26793);
var seq__26793__$1 = cljs.core.next(seq__26793);
var nn = first__26794;
var first__26794__$1 = cljs.core.first(seq__26793__$1);
var seq__26793__$2 = cljs.core.next(seq__26793__$1);
var np = first__26794__$1;
var nc = seq__26793__$2;
var node = vec__26792;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26804 = nn;
var G__26805 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__26804,G__26805) : create_fn.call(null, G__26804,G__26805));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26806 = nn;
var G__26807 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__26806,G__26807) : create_fn.call(null, G__26806,G__26807));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__26809 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26809,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26809,(1),null);
var seq__26814_28173 = cljs.core.seq(node_children);
var chunk__26815_28174 = null;
var count__26816_28175 = (0);
var i__26817_28176 = (0);
while(true){
if((i__26817_28176 < count__26816_28175)){
var child_struct_28178 = chunk__26815_28174.cljs$core$IIndexed$_nth$arity$2(null, i__26817_28176);
var children_28179 = shadow.dom.dom_node(child_struct_28178);
if(cljs.core.seq_QMARK_(children_28179)){
var seq__26878_28180 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_28179));
var chunk__26880_28181 = null;
var count__26881_28182 = (0);
var i__26882_28183 = (0);
while(true){
if((i__26882_28183 < count__26881_28182)){
var child_28184 = chunk__26880_28181.cljs$core$IIndexed$_nth$arity$2(null, i__26882_28183);
if(cljs.core.truth_(child_28184)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28184);


var G__28187 = seq__26878_28180;
var G__28188 = chunk__26880_28181;
var G__28189 = count__26881_28182;
var G__28190 = (i__26882_28183 + (1));
seq__26878_28180 = G__28187;
chunk__26880_28181 = G__28188;
count__26881_28182 = G__28189;
i__26882_28183 = G__28190;
continue;
} else {
var G__28194 = seq__26878_28180;
var G__28195 = chunk__26880_28181;
var G__28196 = count__26881_28182;
var G__28197 = (i__26882_28183 + (1));
seq__26878_28180 = G__28194;
chunk__26880_28181 = G__28195;
count__26881_28182 = G__28196;
i__26882_28183 = G__28197;
continue;
}
} else {
var temp__5804__auto___28199 = cljs.core.seq(seq__26878_28180);
if(temp__5804__auto___28199){
var seq__26878_28200__$1 = temp__5804__auto___28199;
if(cljs.core.chunked_seq_QMARK_(seq__26878_28200__$1)){
var c__5525__auto___28201 = cljs.core.chunk_first(seq__26878_28200__$1);
var G__28202 = cljs.core.chunk_rest(seq__26878_28200__$1);
var G__28203 = c__5525__auto___28201;
var G__28204 = cljs.core.count(c__5525__auto___28201);
var G__28205 = (0);
seq__26878_28180 = G__28202;
chunk__26880_28181 = G__28203;
count__26881_28182 = G__28204;
i__26882_28183 = G__28205;
continue;
} else {
var child_28207 = cljs.core.first(seq__26878_28200__$1);
if(cljs.core.truth_(child_28207)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28207);


var G__28208 = cljs.core.next(seq__26878_28200__$1);
var G__28209 = null;
var G__28210 = (0);
var G__28211 = (0);
seq__26878_28180 = G__28208;
chunk__26880_28181 = G__28209;
count__26881_28182 = G__28210;
i__26882_28183 = G__28211;
continue;
} else {
var G__28213 = cljs.core.next(seq__26878_28200__$1);
var G__28214 = null;
var G__28215 = (0);
var G__28216 = (0);
seq__26878_28180 = G__28213;
chunk__26880_28181 = G__28214;
count__26881_28182 = G__28215;
i__26882_28183 = G__28216;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_28179);
}


var G__28218 = seq__26814_28173;
var G__28219 = chunk__26815_28174;
var G__28220 = count__26816_28175;
var G__28221 = (i__26817_28176 + (1));
seq__26814_28173 = G__28218;
chunk__26815_28174 = G__28219;
count__26816_28175 = G__28220;
i__26817_28176 = G__28221;
continue;
} else {
var temp__5804__auto___28222 = cljs.core.seq(seq__26814_28173);
if(temp__5804__auto___28222){
var seq__26814_28223__$1 = temp__5804__auto___28222;
if(cljs.core.chunked_seq_QMARK_(seq__26814_28223__$1)){
var c__5525__auto___28224 = cljs.core.chunk_first(seq__26814_28223__$1);
var G__28226 = cljs.core.chunk_rest(seq__26814_28223__$1);
var G__28227 = c__5525__auto___28224;
var G__28228 = cljs.core.count(c__5525__auto___28224);
var G__28229 = (0);
seq__26814_28173 = G__28226;
chunk__26815_28174 = G__28227;
count__26816_28175 = G__28228;
i__26817_28176 = G__28229;
continue;
} else {
var child_struct_28230 = cljs.core.first(seq__26814_28223__$1);
var children_28231 = shadow.dom.dom_node(child_struct_28230);
if(cljs.core.seq_QMARK_(children_28231)){
var seq__26919_28232 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_28231));
var chunk__26921_28233 = null;
var count__26922_28234 = (0);
var i__26923_28235 = (0);
while(true){
if((i__26923_28235 < count__26922_28234)){
var child_28239 = chunk__26921_28233.cljs$core$IIndexed$_nth$arity$2(null, i__26923_28235);
if(cljs.core.truth_(child_28239)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28239);


var G__28246 = seq__26919_28232;
var G__28247 = chunk__26921_28233;
var G__28248 = count__26922_28234;
var G__28249 = (i__26923_28235 + (1));
seq__26919_28232 = G__28246;
chunk__26921_28233 = G__28247;
count__26922_28234 = G__28248;
i__26923_28235 = G__28249;
continue;
} else {
var G__28251 = seq__26919_28232;
var G__28252 = chunk__26921_28233;
var G__28253 = count__26922_28234;
var G__28254 = (i__26923_28235 + (1));
seq__26919_28232 = G__28251;
chunk__26921_28233 = G__28252;
count__26922_28234 = G__28253;
i__26923_28235 = G__28254;
continue;
}
} else {
var temp__5804__auto___28255__$1 = cljs.core.seq(seq__26919_28232);
if(temp__5804__auto___28255__$1){
var seq__26919_28257__$1 = temp__5804__auto___28255__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26919_28257__$1)){
var c__5525__auto___28259 = cljs.core.chunk_first(seq__26919_28257__$1);
var G__28260 = cljs.core.chunk_rest(seq__26919_28257__$1);
var G__28261 = c__5525__auto___28259;
var G__28262 = cljs.core.count(c__5525__auto___28259);
var G__28263 = (0);
seq__26919_28232 = G__28260;
chunk__26921_28233 = G__28261;
count__26922_28234 = G__28262;
i__26923_28235 = G__28263;
continue;
} else {
var child_28264 = cljs.core.first(seq__26919_28257__$1);
if(cljs.core.truth_(child_28264)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28264);


var G__28265 = cljs.core.next(seq__26919_28257__$1);
var G__28266 = null;
var G__28267 = (0);
var G__28268 = (0);
seq__26919_28232 = G__28265;
chunk__26921_28233 = G__28266;
count__26922_28234 = G__28267;
i__26923_28235 = G__28268;
continue;
} else {
var G__28269 = cljs.core.next(seq__26919_28257__$1);
var G__28270 = null;
var G__28271 = (0);
var G__28272 = (0);
seq__26919_28232 = G__28269;
chunk__26921_28233 = G__28270;
count__26922_28234 = G__28271;
i__26923_28235 = G__28272;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_28231);
}


var G__28276 = cljs.core.next(seq__26814_28223__$1);
var G__28277 = null;
var G__28278 = (0);
var G__28279 = (0);
seq__26814_28173 = G__28276;
chunk__26815_28174 = G__28277;
count__26816_28175 = G__28278;
i__26817_28176 = G__28279;
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
var seq__26960 = cljs.core.seq(node);
var chunk__26961 = null;
var count__26962 = (0);
var i__26963 = (0);
while(true){
if((i__26963 < count__26962)){
var n = chunk__26961.cljs$core$IIndexed$_nth$arity$2(null, i__26963);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__28301 = seq__26960;
var G__28302 = chunk__26961;
var G__28303 = count__26962;
var G__28304 = (i__26963 + (1));
seq__26960 = G__28301;
chunk__26961 = G__28302;
count__26962 = G__28303;
i__26963 = G__28304;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26960);
if(temp__5804__auto__){
var seq__26960__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26960__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26960__$1);
var G__28305 = cljs.core.chunk_rest(seq__26960__$1);
var G__28306 = c__5525__auto__;
var G__28307 = cljs.core.count(c__5525__auto__);
var G__28308 = (0);
seq__26960 = G__28305;
chunk__26961 = G__28306;
count__26962 = G__28307;
i__26963 = G__28308;
continue;
} else {
var n = cljs.core.first(seq__26960__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__28312 = cljs.core.next(seq__26960__$1);
var G__28313 = null;
var G__28314 = (0);
var G__28315 = (0);
seq__26960 = G__28312;
chunk__26961 = G__28313;
count__26962 = G__28314;
i__26963 = G__28315;
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
var G__26976 = arguments.length;
switch (G__26976) {
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
var G__26984 = arguments.length;
switch (G__26984) {
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
var G__27005 = arguments.length;
switch (G__27005) {
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
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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
var args__5732__auto__ = [];
var len__5726__auto___28344 = arguments.length;
var i__5727__auto___28345 = (0);
while(true){
if((i__5727__auto___28345 < len__5726__auto___28344)){
args__5732__auto__.push((arguments[i__5727__auto___28345]));

var G__28347 = (i__5727__auto___28345 + (1));
i__5727__auto___28345 = G__28347;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__27046_28357 = cljs.core.seq(nodes);
var chunk__27047_28358 = null;
var count__27048_28359 = (0);
var i__27049_28360 = (0);
while(true){
if((i__27049_28360 < count__27048_28359)){
var node_28363 = chunk__27047_28358.cljs$core$IIndexed$_nth$arity$2(null, i__27049_28360);
fragment.appendChild(shadow.dom._to_dom(node_28363));


var G__28366 = seq__27046_28357;
var G__28367 = chunk__27047_28358;
var G__28368 = count__27048_28359;
var G__28369 = (i__27049_28360 + (1));
seq__27046_28357 = G__28366;
chunk__27047_28358 = G__28367;
count__27048_28359 = G__28368;
i__27049_28360 = G__28369;
continue;
} else {
var temp__5804__auto___28370 = cljs.core.seq(seq__27046_28357);
if(temp__5804__auto___28370){
var seq__27046_28372__$1 = temp__5804__auto___28370;
if(cljs.core.chunked_seq_QMARK_(seq__27046_28372__$1)){
var c__5525__auto___28373 = cljs.core.chunk_first(seq__27046_28372__$1);
var G__28375 = cljs.core.chunk_rest(seq__27046_28372__$1);
var G__28376 = c__5525__auto___28373;
var G__28377 = cljs.core.count(c__5525__auto___28373);
var G__28378 = (0);
seq__27046_28357 = G__28375;
chunk__27047_28358 = G__28376;
count__27048_28359 = G__28377;
i__27049_28360 = G__28378;
continue;
} else {
var node_28380 = cljs.core.first(seq__27046_28372__$1);
fragment.appendChild(shadow.dom._to_dom(node_28380));


var G__28381 = cljs.core.next(seq__27046_28372__$1);
var G__28382 = null;
var G__28383 = (0);
var G__28384 = (0);
seq__27046_28357 = G__28381;
chunk__27047_28358 = G__28382;
count__27048_28359 = G__28383;
i__27049_28360 = G__28384;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq27023){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27023));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__27069_28389 = cljs.core.seq(scripts);
var chunk__27070_28390 = null;
var count__27071_28391 = (0);
var i__27072_28392 = (0);
while(true){
if((i__27072_28392 < count__27071_28391)){
var vec__27092_28393 = chunk__27070_28390.cljs$core$IIndexed$_nth$arity$2(null, i__27072_28392);
var script_tag_28394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27092_28393,(0),null);
var script_body_28395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27092_28393,(1),null);
eval(script_body_28395);


var G__28397 = seq__27069_28389;
var G__28398 = chunk__27070_28390;
var G__28399 = count__27071_28391;
var G__28400 = (i__27072_28392 + (1));
seq__27069_28389 = G__28397;
chunk__27070_28390 = G__28398;
count__27071_28391 = G__28399;
i__27072_28392 = G__28400;
continue;
} else {
var temp__5804__auto___28402 = cljs.core.seq(seq__27069_28389);
if(temp__5804__auto___28402){
var seq__27069_28404__$1 = temp__5804__auto___28402;
if(cljs.core.chunked_seq_QMARK_(seq__27069_28404__$1)){
var c__5525__auto___28405 = cljs.core.chunk_first(seq__27069_28404__$1);
var G__28407 = cljs.core.chunk_rest(seq__27069_28404__$1);
var G__28408 = c__5525__auto___28405;
var G__28409 = cljs.core.count(c__5525__auto___28405);
var G__28410 = (0);
seq__27069_28389 = G__28407;
chunk__27070_28390 = G__28408;
count__27071_28391 = G__28409;
i__27072_28392 = G__28410;
continue;
} else {
var vec__27097_28411 = cljs.core.first(seq__27069_28404__$1);
var script_tag_28412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27097_28411,(0),null);
var script_body_28413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27097_28411,(1),null);
eval(script_body_28413);


var G__28414 = cljs.core.next(seq__27069_28404__$1);
var G__28415 = null;
var G__28416 = (0);
var G__28417 = (0);
seq__27069_28389 = G__28414;
chunk__27070_28390 = G__28415;
count__27071_28391 = G__28416;
i__27072_28392 = G__28417;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__27100){
var vec__27102 = p__27100;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27102,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27102,(1),null);
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
var G__27133 = arguments.length;
switch (G__27133) {
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
var seq__27185 = cljs.core.seq(style_keys);
var chunk__27186 = null;
var count__27187 = (0);
var i__27188 = (0);
while(true){
if((i__27188 < count__27187)){
var it = chunk__27186.cljs$core$IIndexed$_nth$arity$2(null, i__27188);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__28435 = seq__27185;
var G__28436 = chunk__27186;
var G__28437 = count__27187;
var G__28438 = (i__27188 + (1));
seq__27185 = G__28435;
chunk__27186 = G__28436;
count__27187 = G__28437;
i__27188 = G__28438;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27185);
if(temp__5804__auto__){
var seq__27185__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27185__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27185__$1);
var G__28469 = cljs.core.chunk_rest(seq__27185__$1);
var G__28470 = c__5525__auto__;
var G__28471 = cljs.core.count(c__5525__auto__);
var G__28472 = (0);
seq__27185 = G__28469;
chunk__27186 = G__28470;
count__27187 = G__28471;
i__27188 = G__28472;
continue;
} else {
var it = cljs.core.first(seq__27185__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__28473 = cljs.core.next(seq__27185__$1);
var G__28474 = null;
var G__28475 = (0);
var G__28476 = (0);
seq__27185 = G__28473;
chunk__27186 = G__28474;
count__27187 = G__28475;
i__27188 = G__28476;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k27208,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__27228 = k27208;
var G__27228__$1 = (((G__27228 instanceof cljs.core.Keyword))?G__27228.fqn:null);
switch (G__27228__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27208,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__27234){
var vec__27235 = p__27234;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27235,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27235,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27207){
var self__ = this;
var G__27207__$1 = this;
return (new cljs.core.RecordIter((0),G__27207__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27211,other27212){
var self__ = this;
var this27211__$1 = this;
return (((!((other27212 == null)))) && ((((this27211__$1.constructor === other27212.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27211__$1.x,other27212.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27211__$1.y,other27212.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27211__$1.__extmap,other27212.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k27208){
var self__ = this;
var this__5307__auto____$1 = this;
var G__27272 = k27208;
var G__27272__$1 = (((G__27272 instanceof cljs.core.Keyword))?G__27272.fqn:null);
switch (G__27272__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27208);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__27207){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__27277 = cljs.core.keyword_identical_QMARK_;
var expr__27278 = k__5309__auto__;
if(cljs.core.truth_((pred__27277.cljs$core$IFn$_invoke$arity$2 ? pred__27277.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__27278) : pred__27277.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__27278)))){
return (new shadow.dom.Coordinate(G__27207,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27277.cljs$core$IFn$_invoke$arity$2 ? pred__27277.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__27278) : pred__27277.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__27278)))){
return (new shadow.dom.Coordinate(self__.x,G__27207,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__27207),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__27207){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__27207,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__27216){
var extmap__5342__auto__ = (function (){var G__27290 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27216,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__27216)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27290);
} else {
return G__27290;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__27216),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__27216),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k27305,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__27314 = k27305;
var G__27314__$1 = (((G__27314 instanceof cljs.core.Keyword))?G__27314.fqn:null);
switch (G__27314__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27305,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__27317){
var vec__27319 = p__27317;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27319,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27319,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27304){
var self__ = this;
var G__27304__$1 = this;
return (new cljs.core.RecordIter((0),G__27304__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27306,other27307){
var self__ = this;
var this27306__$1 = this;
return (((!((other27307 == null)))) && ((((this27306__$1.constructor === other27307.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27306__$1.w,other27307.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27306__$1.h,other27307.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27306__$1.__extmap,other27307.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k27305){
var self__ = this;
var this__5307__auto____$1 = this;
var G__27345 = k27305;
var G__27345__$1 = (((G__27345 instanceof cljs.core.Keyword))?G__27345.fqn:null);
switch (G__27345__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27305);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__27304){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__27347 = cljs.core.keyword_identical_QMARK_;
var expr__27348 = k__5309__auto__;
if(cljs.core.truth_((pred__27347.cljs$core$IFn$_invoke$arity$2 ? pred__27347.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__27348) : pred__27347.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__27348)))){
return (new shadow.dom.Size(G__27304,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27347.cljs$core$IFn$_invoke$arity$2 ? pred__27347.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__27348) : pred__27347.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__27348)))){
return (new shadow.dom.Size(self__.w,G__27304,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__27304),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__27304){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__27304,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__27311){
var extmap__5342__auto__ = (function (){var G__27358 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27311,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__27311)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27358);
} else {
return G__27358;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__27311),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__27311),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__28520 = (i + (1));
var G__28521 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__28520;
ret = G__28521;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27386){
var vec__27388 = p__27386;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27388,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27388,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__27401 = arguments.length;
switch (G__27401) {
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
var G__28525 = ps;
var G__28526 = (i + (1));
el__$1 = G__28525;
i = G__28526;
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
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
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
var vec__27440 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27440,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27440,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27440,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__27450_28534 = cljs.core.seq(props);
var chunk__27451_28535 = null;
var count__27452_28536 = (0);
var i__27453_28537 = (0);
while(true){
if((i__27453_28537 < count__27452_28536)){
var vec__27481_28538 = chunk__27451_28535.cljs$core$IIndexed$_nth$arity$2(null, i__27453_28537);
var k_28539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27481_28538,(0),null);
var v_28540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27481_28538,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_28539);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_28539),v_28540);


var G__28541 = seq__27450_28534;
var G__28542 = chunk__27451_28535;
var G__28543 = count__27452_28536;
var G__28544 = (i__27453_28537 + (1));
seq__27450_28534 = G__28541;
chunk__27451_28535 = G__28542;
count__27452_28536 = G__28543;
i__27453_28537 = G__28544;
continue;
} else {
var temp__5804__auto___28545 = cljs.core.seq(seq__27450_28534);
if(temp__5804__auto___28545){
var seq__27450_28547__$1 = temp__5804__auto___28545;
if(cljs.core.chunked_seq_QMARK_(seq__27450_28547__$1)){
var c__5525__auto___28548 = cljs.core.chunk_first(seq__27450_28547__$1);
var G__28549 = cljs.core.chunk_rest(seq__27450_28547__$1);
var G__28550 = c__5525__auto___28548;
var G__28551 = cljs.core.count(c__5525__auto___28548);
var G__28552 = (0);
seq__27450_28534 = G__28549;
chunk__27451_28535 = G__28550;
count__27452_28536 = G__28551;
i__27453_28537 = G__28552;
continue;
} else {
var vec__27488_28555 = cljs.core.first(seq__27450_28547__$1);
var k_28556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27488_28555,(0),null);
var v_28557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27488_28555,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_28556);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_28556),v_28557);


var G__28559 = cljs.core.next(seq__27450_28547__$1);
var G__28560 = null;
var G__28561 = (0);
var G__28562 = (0);
seq__27450_28534 = G__28559;
chunk__27451_28535 = G__28560;
count__27452_28536 = G__28561;
i__27453_28537 = G__28562;
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
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__27500 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27500,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27500,(1),null);
var seq__27503_28565 = cljs.core.seq(node_children);
var chunk__27505_28566 = null;
var count__27506_28567 = (0);
var i__27507_28568 = (0);
while(true){
if((i__27507_28568 < count__27506_28567)){
var child_struct_28569 = chunk__27505_28566.cljs$core$IIndexed$_nth$arity$2(null, i__27507_28568);
if((!((child_struct_28569 == null)))){
if(typeof child_struct_28569 === 'string'){
var text_28570 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_28570),child_struct_28569].join(''));
} else {
var children_28571 = shadow.dom.svg_node(child_struct_28569);
if(cljs.core.seq_QMARK_(children_28571)){
var seq__27587_28572 = cljs.core.seq(children_28571);
var chunk__27590_28573 = null;
var count__27591_28574 = (0);
var i__27592_28575 = (0);
while(true){
if((i__27592_28575 < count__27591_28574)){
var child_28577 = chunk__27590_28573.cljs$core$IIndexed$_nth$arity$2(null, i__27592_28575);
if(cljs.core.truth_(child_28577)){
node.appendChild(child_28577);


var G__28578 = seq__27587_28572;
var G__28579 = chunk__27590_28573;
var G__28580 = count__27591_28574;
var G__28581 = (i__27592_28575 + (1));
seq__27587_28572 = G__28578;
chunk__27590_28573 = G__28579;
count__27591_28574 = G__28580;
i__27592_28575 = G__28581;
continue;
} else {
var G__28582 = seq__27587_28572;
var G__28583 = chunk__27590_28573;
var G__28584 = count__27591_28574;
var G__28585 = (i__27592_28575 + (1));
seq__27587_28572 = G__28582;
chunk__27590_28573 = G__28583;
count__27591_28574 = G__28584;
i__27592_28575 = G__28585;
continue;
}
} else {
var temp__5804__auto___28586 = cljs.core.seq(seq__27587_28572);
if(temp__5804__auto___28586){
var seq__27587_28587__$1 = temp__5804__auto___28586;
if(cljs.core.chunked_seq_QMARK_(seq__27587_28587__$1)){
var c__5525__auto___28588 = cljs.core.chunk_first(seq__27587_28587__$1);
var G__28589 = cljs.core.chunk_rest(seq__27587_28587__$1);
var G__28590 = c__5525__auto___28588;
var G__28591 = cljs.core.count(c__5525__auto___28588);
var G__28592 = (0);
seq__27587_28572 = G__28589;
chunk__27590_28573 = G__28590;
count__27591_28574 = G__28591;
i__27592_28575 = G__28592;
continue;
} else {
var child_28593 = cljs.core.first(seq__27587_28587__$1);
if(cljs.core.truth_(child_28593)){
node.appendChild(child_28593);


var G__28596 = cljs.core.next(seq__27587_28587__$1);
var G__28597 = null;
var G__28598 = (0);
var G__28599 = (0);
seq__27587_28572 = G__28596;
chunk__27590_28573 = G__28597;
count__27591_28574 = G__28598;
i__27592_28575 = G__28599;
continue;
} else {
var G__28600 = cljs.core.next(seq__27587_28587__$1);
var G__28601 = null;
var G__28602 = (0);
var G__28603 = (0);
seq__27587_28572 = G__28600;
chunk__27590_28573 = G__28601;
count__27591_28574 = G__28602;
i__27592_28575 = G__28603;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_28571);
}
}


var G__28604 = seq__27503_28565;
var G__28605 = chunk__27505_28566;
var G__28606 = count__27506_28567;
var G__28607 = (i__27507_28568 + (1));
seq__27503_28565 = G__28604;
chunk__27505_28566 = G__28605;
count__27506_28567 = G__28606;
i__27507_28568 = G__28607;
continue;
} else {
var G__28610 = seq__27503_28565;
var G__28611 = chunk__27505_28566;
var G__28612 = count__27506_28567;
var G__28613 = (i__27507_28568 + (1));
seq__27503_28565 = G__28610;
chunk__27505_28566 = G__28611;
count__27506_28567 = G__28612;
i__27507_28568 = G__28613;
continue;
}
} else {
var temp__5804__auto___28614 = cljs.core.seq(seq__27503_28565);
if(temp__5804__auto___28614){
var seq__27503_28615__$1 = temp__5804__auto___28614;
if(cljs.core.chunked_seq_QMARK_(seq__27503_28615__$1)){
var c__5525__auto___28617 = cljs.core.chunk_first(seq__27503_28615__$1);
var G__28618 = cljs.core.chunk_rest(seq__27503_28615__$1);
var G__28619 = c__5525__auto___28617;
var G__28620 = cljs.core.count(c__5525__auto___28617);
var G__28621 = (0);
seq__27503_28565 = G__28618;
chunk__27505_28566 = G__28619;
count__27506_28567 = G__28620;
i__27507_28568 = G__28621;
continue;
} else {
var child_struct_28622 = cljs.core.first(seq__27503_28615__$1);
if((!((child_struct_28622 == null)))){
if(typeof child_struct_28622 === 'string'){
var text_28623 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_28623),child_struct_28622].join(''));
} else {
var children_28624 = shadow.dom.svg_node(child_struct_28622);
if(cljs.core.seq_QMARK_(children_28624)){
var seq__27622_28625 = cljs.core.seq(children_28624);
var chunk__27624_28626 = null;
var count__27625_28627 = (0);
var i__27626_28628 = (0);
while(true){
if((i__27626_28628 < count__27625_28627)){
var child_28630 = chunk__27624_28626.cljs$core$IIndexed$_nth$arity$2(null, i__27626_28628);
if(cljs.core.truth_(child_28630)){
node.appendChild(child_28630);


var G__28631 = seq__27622_28625;
var G__28632 = chunk__27624_28626;
var G__28633 = count__27625_28627;
var G__28634 = (i__27626_28628 + (1));
seq__27622_28625 = G__28631;
chunk__27624_28626 = G__28632;
count__27625_28627 = G__28633;
i__27626_28628 = G__28634;
continue;
} else {
var G__28635 = seq__27622_28625;
var G__28636 = chunk__27624_28626;
var G__28637 = count__27625_28627;
var G__28638 = (i__27626_28628 + (1));
seq__27622_28625 = G__28635;
chunk__27624_28626 = G__28636;
count__27625_28627 = G__28637;
i__27626_28628 = G__28638;
continue;
}
} else {
var temp__5804__auto___28640__$1 = cljs.core.seq(seq__27622_28625);
if(temp__5804__auto___28640__$1){
var seq__27622_28642__$1 = temp__5804__auto___28640__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27622_28642__$1)){
var c__5525__auto___28643 = cljs.core.chunk_first(seq__27622_28642__$1);
var G__28644 = cljs.core.chunk_rest(seq__27622_28642__$1);
var G__28645 = c__5525__auto___28643;
var G__28646 = cljs.core.count(c__5525__auto___28643);
var G__28647 = (0);
seq__27622_28625 = G__28644;
chunk__27624_28626 = G__28645;
count__27625_28627 = G__28646;
i__27626_28628 = G__28647;
continue;
} else {
var child_28650 = cljs.core.first(seq__27622_28642__$1);
if(cljs.core.truth_(child_28650)){
node.appendChild(child_28650);


var G__28652 = cljs.core.next(seq__27622_28642__$1);
var G__28653 = null;
var G__28654 = (0);
var G__28655 = (0);
seq__27622_28625 = G__28652;
chunk__27624_28626 = G__28653;
count__27625_28627 = G__28654;
i__27626_28628 = G__28655;
continue;
} else {
var G__28656 = cljs.core.next(seq__27622_28642__$1);
var G__28657 = null;
var G__28658 = (0);
var G__28659 = (0);
seq__27622_28625 = G__28656;
chunk__27624_28626 = G__28657;
count__27625_28627 = G__28658;
i__27626_28628 = G__28659;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_28624);
}
}


var G__28660 = cljs.core.next(seq__27503_28615__$1);
var G__28661 = null;
var G__28662 = (0);
var G__28663 = (0);
seq__27503_28565 = G__28660;
chunk__27505_28566 = G__28661;
count__27506_28567 = G__28662;
i__27507_28568 = G__28663;
continue;
} else {
var G__28664 = cljs.core.next(seq__27503_28615__$1);
var G__28665 = null;
var G__28666 = (0);
var G__28667 = (0);
seq__27503_28565 = G__28664;
chunk__27505_28566 = G__28665;
count__27506_28567 = G__28666;
i__27507_28568 = G__28667;
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
var args__5732__auto__ = [];
var len__5726__auto___28673 = arguments.length;
var i__5727__auto___28674 = (0);
while(true){
if((i__5727__auto___28674 < len__5726__auto___28673)){
args__5732__auto__.push((arguments[i__5727__auto___28674]));

var G__28675 = (i__5727__auto___28674 + (1));
i__5727__auto___28674 = G__28675;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq27716){
var G__27729 = cljs.core.first(seq27716);
var seq27716__$1 = cljs.core.next(seq27716);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27729,seq27716__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
