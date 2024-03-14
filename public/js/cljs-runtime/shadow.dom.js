goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_42220 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_42220(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_42229 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_42229(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__40819 = coll;
var G__40820 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__40819,G__40820) : shadow.dom.lazy_native_coll_seq.call(null,G__40819,G__40820));
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
var G__40848 = arguments.length;
switch (G__40848) {
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
var G__40853 = arguments.length;
switch (G__40853) {
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
var G__40873 = arguments.length;
switch (G__40873) {
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
var G__40912 = arguments.length;
switch (G__40912) {
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
var G__40945 = arguments.length;
switch (G__40945) {
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
var G__40967 = arguments.length;
switch (G__40967) {
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
}catch (e40984){if((e40984 instanceof Object)){
var e = e40984;
return console.log("didnt support attachEvent",el,e);
} else {
throw e40984;

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
var seq__40999 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__41001 = null;
var count__41002 = (0);
var i__41003 = (0);
while(true){
if((i__41003 < count__41002)){
var el = chunk__41001.cljs$core$IIndexed$_nth$arity$2(null,i__41003);
var handler_42314__$1 = ((function (seq__40999,chunk__41001,count__41002,i__41003,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40999,chunk__41001,count__41002,i__41003,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42314__$1);


var G__42315 = seq__40999;
var G__42316 = chunk__41001;
var G__42317 = count__41002;
var G__42318 = (i__41003 + (1));
seq__40999 = G__42315;
chunk__41001 = G__42316;
count__41002 = G__42317;
i__41003 = G__42318;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40999);
if(temp__5804__auto__){
var seq__40999__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40999__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40999__$1);
var G__42319 = cljs.core.chunk_rest(seq__40999__$1);
var G__42320 = c__5568__auto__;
var G__42321 = cljs.core.count(c__5568__auto__);
var G__42322 = (0);
seq__40999 = G__42319;
chunk__41001 = G__42320;
count__41002 = G__42321;
i__41003 = G__42322;
continue;
} else {
var el = cljs.core.first(seq__40999__$1);
var handler_42323__$1 = ((function (seq__40999,chunk__41001,count__41002,i__41003,el,seq__40999__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40999,chunk__41001,count__41002,i__41003,el,seq__40999__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42323__$1);


var G__42326 = cljs.core.next(seq__40999__$1);
var G__42327 = null;
var G__42328 = (0);
var G__42329 = (0);
seq__40999 = G__42326;
chunk__41001 = G__42327;
count__41002 = G__42328;
i__41003 = G__42329;
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
var G__41041 = arguments.length;
switch (G__41041) {
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
var seq__41059 = cljs.core.seq(events);
var chunk__41060 = null;
var count__41061 = (0);
var i__41062 = (0);
while(true){
if((i__41062 < count__41061)){
var vec__41077 = chunk__41060.cljs$core$IIndexed$_nth$arity$2(null,i__41062);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41077,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42344 = seq__41059;
var G__42345 = chunk__41060;
var G__42346 = count__41061;
var G__42347 = (i__41062 + (1));
seq__41059 = G__42344;
chunk__41060 = G__42345;
count__41061 = G__42346;
i__41062 = G__42347;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41059);
if(temp__5804__auto__){
var seq__41059__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41059__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41059__$1);
var G__42349 = cljs.core.chunk_rest(seq__41059__$1);
var G__42350 = c__5568__auto__;
var G__42351 = cljs.core.count(c__5568__auto__);
var G__42352 = (0);
seq__41059 = G__42349;
chunk__41060 = G__42350;
count__41061 = G__42351;
i__41062 = G__42352;
continue;
} else {
var vec__41084 = cljs.core.first(seq__41059__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41084,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41084,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42353 = cljs.core.next(seq__41059__$1);
var G__42354 = null;
var G__42355 = (0);
var G__42356 = (0);
seq__41059 = G__42353;
chunk__41060 = G__42354;
count__41061 = G__42355;
i__41062 = G__42356;
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
var seq__41107 = cljs.core.seq(styles);
var chunk__41108 = null;
var count__41109 = (0);
var i__41110 = (0);
while(true){
if((i__41110 < count__41109)){
var vec__41140 = chunk__41108.cljs$core$IIndexed$_nth$arity$2(null,i__41110);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41140,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41140,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42358 = seq__41107;
var G__42359 = chunk__41108;
var G__42360 = count__41109;
var G__42361 = (i__41110 + (1));
seq__41107 = G__42358;
chunk__41108 = G__42359;
count__41109 = G__42360;
i__41110 = G__42361;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41107);
if(temp__5804__auto__){
var seq__41107__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41107__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41107__$1);
var G__42365 = cljs.core.chunk_rest(seq__41107__$1);
var G__42366 = c__5568__auto__;
var G__42367 = cljs.core.count(c__5568__auto__);
var G__42368 = (0);
seq__41107 = G__42365;
chunk__41108 = G__42366;
count__41109 = G__42367;
i__41110 = G__42368;
continue;
} else {
var vec__41148 = cljs.core.first(seq__41107__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41148,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42369 = cljs.core.next(seq__41107__$1);
var G__42370 = null;
var G__42371 = (0);
var G__42372 = (0);
seq__41107 = G__42369;
chunk__41108 = G__42370;
count__41109 = G__42371;
i__41110 = G__42372;
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
var G__41177_42373 = key;
var G__41177_42374__$1 = (((G__41177_42373 instanceof cljs.core.Keyword))?G__41177_42373.fqn:null);
switch (G__41177_42374__$1) {
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
var ks_42378 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_42378,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_42378,"aria-");
}
})())){
el.setAttribute(ks_42378,value);
} else {
(el[ks_42378] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__41200){
var map__41201 = p__41200;
var map__41201__$1 = cljs.core.__destructure_map(map__41201);
var props = map__41201__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41201__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__41211 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41211,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41211,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41211,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__41217 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__41217,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__41217;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__41223 = arguments.length;
switch (G__41223) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__41235){
var vec__41236 = p__41235;
var seq__41237 = cljs.core.seq(vec__41236);
var first__41238 = cljs.core.first(seq__41237);
var seq__41237__$1 = cljs.core.next(seq__41237);
var nn = first__41238;
var first__41238__$1 = cljs.core.first(seq__41237__$1);
var seq__41237__$2 = cljs.core.next(seq__41237__$1);
var np = first__41238__$1;
var nc = seq__41237__$2;
var node = vec__41236;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41245 = nn;
var G__41246 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41245,G__41246) : create_fn.call(null,G__41245,G__41246));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41247 = nn;
var G__41249 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41247,G__41249) : create_fn.call(null,G__41247,G__41249));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__41265 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41265,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41265,(1),null);
var seq__41269_42416 = cljs.core.seq(node_children);
var chunk__41270_42417 = null;
var count__41271_42418 = (0);
var i__41272_42419 = (0);
while(true){
if((i__41272_42419 < count__41271_42418)){
var child_struct_42422 = chunk__41270_42417.cljs$core$IIndexed$_nth$arity$2(null,i__41272_42419);
var children_42423 = shadow.dom.dom_node(child_struct_42422);
if(cljs.core.seq_QMARK_(children_42423)){
var seq__41339_42424 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42423));
var chunk__41341_42425 = null;
var count__41342_42426 = (0);
var i__41343_42427 = (0);
while(true){
if((i__41343_42427 < count__41342_42426)){
var child_42428 = chunk__41341_42425.cljs$core$IIndexed$_nth$arity$2(null,i__41343_42427);
if(cljs.core.truth_(child_42428)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42428);


var G__42429 = seq__41339_42424;
var G__42430 = chunk__41341_42425;
var G__42431 = count__41342_42426;
var G__42432 = (i__41343_42427 + (1));
seq__41339_42424 = G__42429;
chunk__41341_42425 = G__42430;
count__41342_42426 = G__42431;
i__41343_42427 = G__42432;
continue;
} else {
var G__42433 = seq__41339_42424;
var G__42434 = chunk__41341_42425;
var G__42435 = count__41342_42426;
var G__42436 = (i__41343_42427 + (1));
seq__41339_42424 = G__42433;
chunk__41341_42425 = G__42434;
count__41342_42426 = G__42435;
i__41343_42427 = G__42436;
continue;
}
} else {
var temp__5804__auto___42437 = cljs.core.seq(seq__41339_42424);
if(temp__5804__auto___42437){
var seq__41339_42438__$1 = temp__5804__auto___42437;
if(cljs.core.chunked_seq_QMARK_(seq__41339_42438__$1)){
var c__5568__auto___42440 = cljs.core.chunk_first(seq__41339_42438__$1);
var G__42442 = cljs.core.chunk_rest(seq__41339_42438__$1);
var G__42443 = c__5568__auto___42440;
var G__42444 = cljs.core.count(c__5568__auto___42440);
var G__42445 = (0);
seq__41339_42424 = G__42442;
chunk__41341_42425 = G__42443;
count__41342_42426 = G__42444;
i__41343_42427 = G__42445;
continue;
} else {
var child_42446 = cljs.core.first(seq__41339_42438__$1);
if(cljs.core.truth_(child_42446)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42446);


var G__42447 = cljs.core.next(seq__41339_42438__$1);
var G__42448 = null;
var G__42449 = (0);
var G__42450 = (0);
seq__41339_42424 = G__42447;
chunk__41341_42425 = G__42448;
count__41342_42426 = G__42449;
i__41343_42427 = G__42450;
continue;
} else {
var G__42451 = cljs.core.next(seq__41339_42438__$1);
var G__42452 = null;
var G__42453 = (0);
var G__42454 = (0);
seq__41339_42424 = G__42451;
chunk__41341_42425 = G__42452;
count__41342_42426 = G__42453;
i__41343_42427 = G__42454;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42423);
}


var G__42457 = seq__41269_42416;
var G__42458 = chunk__41270_42417;
var G__42459 = count__41271_42418;
var G__42460 = (i__41272_42419 + (1));
seq__41269_42416 = G__42457;
chunk__41270_42417 = G__42458;
count__41271_42418 = G__42459;
i__41272_42419 = G__42460;
continue;
} else {
var temp__5804__auto___42464 = cljs.core.seq(seq__41269_42416);
if(temp__5804__auto___42464){
var seq__41269_42465__$1 = temp__5804__auto___42464;
if(cljs.core.chunked_seq_QMARK_(seq__41269_42465__$1)){
var c__5568__auto___42466 = cljs.core.chunk_first(seq__41269_42465__$1);
var G__42467 = cljs.core.chunk_rest(seq__41269_42465__$1);
var G__42468 = c__5568__auto___42466;
var G__42469 = cljs.core.count(c__5568__auto___42466);
var G__42470 = (0);
seq__41269_42416 = G__42467;
chunk__41270_42417 = G__42468;
count__41271_42418 = G__42469;
i__41272_42419 = G__42470;
continue;
} else {
var child_struct_42471 = cljs.core.first(seq__41269_42465__$1);
var children_42472 = shadow.dom.dom_node(child_struct_42471);
if(cljs.core.seq_QMARK_(children_42472)){
var seq__41366_42473 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42472));
var chunk__41368_42474 = null;
var count__41369_42475 = (0);
var i__41370_42476 = (0);
while(true){
if((i__41370_42476 < count__41369_42475)){
var child_42481 = chunk__41368_42474.cljs$core$IIndexed$_nth$arity$2(null,i__41370_42476);
if(cljs.core.truth_(child_42481)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42481);


var G__42482 = seq__41366_42473;
var G__42483 = chunk__41368_42474;
var G__42484 = count__41369_42475;
var G__42485 = (i__41370_42476 + (1));
seq__41366_42473 = G__42482;
chunk__41368_42474 = G__42483;
count__41369_42475 = G__42484;
i__41370_42476 = G__42485;
continue;
} else {
var G__42486 = seq__41366_42473;
var G__42487 = chunk__41368_42474;
var G__42488 = count__41369_42475;
var G__42489 = (i__41370_42476 + (1));
seq__41366_42473 = G__42486;
chunk__41368_42474 = G__42487;
count__41369_42475 = G__42488;
i__41370_42476 = G__42489;
continue;
}
} else {
var temp__5804__auto___42490__$1 = cljs.core.seq(seq__41366_42473);
if(temp__5804__auto___42490__$1){
var seq__41366_42491__$1 = temp__5804__auto___42490__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41366_42491__$1)){
var c__5568__auto___42492 = cljs.core.chunk_first(seq__41366_42491__$1);
var G__42493 = cljs.core.chunk_rest(seq__41366_42491__$1);
var G__42494 = c__5568__auto___42492;
var G__42495 = cljs.core.count(c__5568__auto___42492);
var G__42496 = (0);
seq__41366_42473 = G__42493;
chunk__41368_42474 = G__42494;
count__41369_42475 = G__42495;
i__41370_42476 = G__42496;
continue;
} else {
var child_42497 = cljs.core.first(seq__41366_42491__$1);
if(cljs.core.truth_(child_42497)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42497);


var G__42498 = cljs.core.next(seq__41366_42491__$1);
var G__42499 = null;
var G__42500 = (0);
var G__42501 = (0);
seq__41366_42473 = G__42498;
chunk__41368_42474 = G__42499;
count__41369_42475 = G__42500;
i__41370_42476 = G__42501;
continue;
} else {
var G__42502 = cljs.core.next(seq__41366_42491__$1);
var G__42503 = null;
var G__42504 = (0);
var G__42505 = (0);
seq__41366_42473 = G__42502;
chunk__41368_42474 = G__42503;
count__41369_42475 = G__42504;
i__41370_42476 = G__42505;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42472);
}


var G__42506 = cljs.core.next(seq__41269_42465__$1);
var G__42507 = null;
var G__42508 = (0);
var G__42509 = (0);
seq__41269_42416 = G__42506;
chunk__41270_42417 = G__42507;
count__41271_42418 = G__42508;
i__41272_42419 = G__42509;
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
var seq__41401 = cljs.core.seq(node);
var chunk__41402 = null;
var count__41403 = (0);
var i__41404 = (0);
while(true){
if((i__41404 < count__41403)){
var n = chunk__41402.cljs$core$IIndexed$_nth$arity$2(null,i__41404);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42511 = seq__41401;
var G__42512 = chunk__41402;
var G__42513 = count__41403;
var G__42514 = (i__41404 + (1));
seq__41401 = G__42511;
chunk__41402 = G__42512;
count__41403 = G__42513;
i__41404 = G__42514;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41401);
if(temp__5804__auto__){
var seq__41401__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41401__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41401__$1);
var G__42515 = cljs.core.chunk_rest(seq__41401__$1);
var G__42516 = c__5568__auto__;
var G__42517 = cljs.core.count(c__5568__auto__);
var G__42518 = (0);
seq__41401 = G__42515;
chunk__41402 = G__42516;
count__41403 = G__42517;
i__41404 = G__42518;
continue;
} else {
var n = cljs.core.first(seq__41401__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42519 = cljs.core.next(seq__41401__$1);
var G__42520 = null;
var G__42521 = (0);
var G__42522 = (0);
seq__41401 = G__42519;
chunk__41402 = G__42520;
count__41403 = G__42521;
i__41404 = G__42522;
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
var G__41414 = arguments.length;
switch (G__41414) {
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
var G__41420 = arguments.length;
switch (G__41420) {
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
var G__41438 = arguments.length;
switch (G__41438) {
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
var len__5769__auto___42530 = arguments.length;
var i__5770__auto___42531 = (0);
while(true){
if((i__5770__auto___42531 < len__5769__auto___42530)){
args__5775__auto__.push((arguments[i__5770__auto___42531]));

var G__42532 = (i__5770__auto___42531 + (1));
i__5770__auto___42531 = G__42532;
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
var seq__41484_42533 = cljs.core.seq(nodes);
var chunk__41485_42534 = null;
var count__41486_42535 = (0);
var i__41487_42536 = (0);
while(true){
if((i__41487_42536 < count__41486_42535)){
var node_42537 = chunk__41485_42534.cljs$core$IIndexed$_nth$arity$2(null,i__41487_42536);
fragment.appendChild(shadow.dom._to_dom(node_42537));


var G__42538 = seq__41484_42533;
var G__42539 = chunk__41485_42534;
var G__42540 = count__41486_42535;
var G__42541 = (i__41487_42536 + (1));
seq__41484_42533 = G__42538;
chunk__41485_42534 = G__42539;
count__41486_42535 = G__42540;
i__41487_42536 = G__42541;
continue;
} else {
var temp__5804__auto___42542 = cljs.core.seq(seq__41484_42533);
if(temp__5804__auto___42542){
var seq__41484_42544__$1 = temp__5804__auto___42542;
if(cljs.core.chunked_seq_QMARK_(seq__41484_42544__$1)){
var c__5568__auto___42545 = cljs.core.chunk_first(seq__41484_42544__$1);
var G__42546 = cljs.core.chunk_rest(seq__41484_42544__$1);
var G__42547 = c__5568__auto___42545;
var G__42548 = cljs.core.count(c__5568__auto___42545);
var G__42549 = (0);
seq__41484_42533 = G__42546;
chunk__41485_42534 = G__42547;
count__41486_42535 = G__42548;
i__41487_42536 = G__42549;
continue;
} else {
var node_42550 = cljs.core.first(seq__41484_42544__$1);
fragment.appendChild(shadow.dom._to_dom(node_42550));


var G__42554 = cljs.core.next(seq__41484_42544__$1);
var G__42555 = null;
var G__42556 = (0);
var G__42557 = (0);
seq__41484_42533 = G__42554;
chunk__41485_42534 = G__42555;
count__41486_42535 = G__42556;
i__41487_42536 = G__42557;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq41479){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41479));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__41521_42561 = cljs.core.seq(scripts);
var chunk__41523_42562 = null;
var count__41524_42563 = (0);
var i__41525_42564 = (0);
while(true){
if((i__41525_42564 < count__41524_42563)){
var vec__41557_42565 = chunk__41523_42562.cljs$core$IIndexed$_nth$arity$2(null,i__41525_42564);
var script_tag_42566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41557_42565,(0),null);
var script_body_42567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41557_42565,(1),null);
eval(script_body_42567);


var G__42568 = seq__41521_42561;
var G__42569 = chunk__41523_42562;
var G__42570 = count__41524_42563;
var G__42571 = (i__41525_42564 + (1));
seq__41521_42561 = G__42568;
chunk__41523_42562 = G__42569;
count__41524_42563 = G__42570;
i__41525_42564 = G__42571;
continue;
} else {
var temp__5804__auto___42572 = cljs.core.seq(seq__41521_42561);
if(temp__5804__auto___42572){
var seq__41521_42573__$1 = temp__5804__auto___42572;
if(cljs.core.chunked_seq_QMARK_(seq__41521_42573__$1)){
var c__5568__auto___42574 = cljs.core.chunk_first(seq__41521_42573__$1);
var G__42575 = cljs.core.chunk_rest(seq__41521_42573__$1);
var G__42576 = c__5568__auto___42574;
var G__42577 = cljs.core.count(c__5568__auto___42574);
var G__42578 = (0);
seq__41521_42561 = G__42575;
chunk__41523_42562 = G__42576;
count__41524_42563 = G__42577;
i__41525_42564 = G__42578;
continue;
} else {
var vec__41569_42579 = cljs.core.first(seq__41521_42573__$1);
var script_tag_42580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41569_42579,(0),null);
var script_body_42581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41569_42579,(1),null);
eval(script_body_42581);


var G__42582 = cljs.core.next(seq__41521_42573__$1);
var G__42583 = null;
var G__42584 = (0);
var G__42585 = (0);
seq__41521_42561 = G__42582;
chunk__41523_42562 = G__42583;
count__41524_42563 = G__42584;
i__41525_42564 = G__42585;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__41577){
var vec__41578 = p__41577;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41578,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41578,(1),null);
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
var G__41609 = arguments.length;
switch (G__41609) {
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
var seq__41661 = cljs.core.seq(style_keys);
var chunk__41662 = null;
var count__41663 = (0);
var i__41664 = (0);
while(true){
if((i__41664 < count__41663)){
var it = chunk__41662.cljs$core$IIndexed$_nth$arity$2(null,i__41664);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42594 = seq__41661;
var G__42595 = chunk__41662;
var G__42596 = count__41663;
var G__42597 = (i__41664 + (1));
seq__41661 = G__42594;
chunk__41662 = G__42595;
count__41663 = G__42596;
i__41664 = G__42597;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41661);
if(temp__5804__auto__){
var seq__41661__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41661__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41661__$1);
var G__42598 = cljs.core.chunk_rest(seq__41661__$1);
var G__42599 = c__5568__auto__;
var G__42600 = cljs.core.count(c__5568__auto__);
var G__42601 = (0);
seq__41661 = G__42598;
chunk__41662 = G__42599;
count__41663 = G__42600;
i__41664 = G__42601;
continue;
} else {
var it = cljs.core.first(seq__41661__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42602 = cljs.core.next(seq__41661__$1);
var G__42603 = null;
var G__42604 = (0);
var G__42605 = (0);
seq__41661 = G__42602;
chunk__41662 = G__42603;
count__41663 = G__42604;
i__41664 = G__42605;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k41687,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__41708 = k41687;
var G__41708__$1 = (((G__41708 instanceof cljs.core.Keyword))?G__41708.fqn:null);
switch (G__41708__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41687,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__41715){
var vec__41716 = p__41715;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41716,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41716,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41686){
var self__ = this;
var G__41686__$1 = this;
return (new cljs.core.RecordIter((0),G__41686__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41688,other41689){
var self__ = this;
var this41688__$1 = this;
return (((!((other41689 == null)))) && ((((this41688__$1.constructor === other41689.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41688__$1.x,other41689.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41688__$1.y,other41689.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41688__$1.__extmap,other41689.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k41687){
var self__ = this;
var this__5350__auto____$1 = this;
var G__41761 = k41687;
var G__41761__$1 = (((G__41761 instanceof cljs.core.Keyword))?G__41761.fqn:null);
switch (G__41761__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41687);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__41686){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__41769 = cljs.core.keyword_identical_QMARK_;
var expr__41770 = k__5352__auto__;
if(cljs.core.truth_((pred__41769.cljs$core$IFn$_invoke$arity$2 ? pred__41769.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__41770) : pred__41769.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__41770)))){
return (new shadow.dom.Coordinate(G__41686,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41769.cljs$core$IFn$_invoke$arity$2 ? pred__41769.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__41770) : pred__41769.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__41770)))){
return (new shadow.dom.Coordinate(self__.x,G__41686,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__41686),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__41686){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__41686,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__41697){
var extmap__5385__auto__ = (function (){var G__41787 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41697,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__41697)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41787);
} else {
return G__41787;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__41697),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__41697),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k41797,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__41802 = k41797;
var G__41802__$1 = (((G__41802 instanceof cljs.core.Keyword))?G__41802.fqn:null);
switch (G__41802__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41797,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__41804){
var vec__41805 = p__41804;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41805,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41805,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41796){
var self__ = this;
var G__41796__$1 = this;
return (new cljs.core.RecordIter((0),G__41796__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41798,other41799){
var self__ = this;
var this41798__$1 = this;
return (((!((other41799 == null)))) && ((((this41798__$1.constructor === other41799.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41798__$1.w,other41799.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41798__$1.h,other41799.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41798__$1.__extmap,other41799.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k41797){
var self__ = this;
var this__5350__auto____$1 = this;
var G__41831 = k41797;
var G__41831__$1 = (((G__41831 instanceof cljs.core.Keyword))?G__41831.fqn:null);
switch (G__41831__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41797);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__41796){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__41834 = cljs.core.keyword_identical_QMARK_;
var expr__41835 = k__5352__auto__;
if(cljs.core.truth_((pred__41834.cljs$core$IFn$_invoke$arity$2 ? pred__41834.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__41835) : pred__41834.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__41835)))){
return (new shadow.dom.Size(G__41796,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41834.cljs$core$IFn$_invoke$arity$2 ? pred__41834.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__41835) : pred__41834.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__41835)))){
return (new shadow.dom.Size(self__.w,G__41796,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__41796),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__41796){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__41796,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__41800){
var extmap__5385__auto__ = (function (){var G__41848 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41800,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__41800)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41848);
} else {
return G__41848;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__41800),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__41800),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__42637 = (i + (1));
var G__42638 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__42637;
ret = G__42638;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41878){
var vec__41879 = p__41878;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41879,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41879,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__41885 = arguments.length;
switch (G__41885) {
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
var G__42648 = ps;
var G__42649 = (i + (1));
el__$1 = G__42648;
i = G__42649;
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
var vec__41928 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41928,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41928,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41928,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__41940_42655 = cljs.core.seq(props);
var chunk__41941_42656 = null;
var count__41942_42657 = (0);
var i__41943_42658 = (0);
while(true){
if((i__41943_42658 < count__41942_42657)){
var vec__41965_42659 = chunk__41941_42656.cljs$core$IIndexed$_nth$arity$2(null,i__41943_42658);
var k_42660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41965_42659,(0),null);
var v_42661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41965_42659,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_42660);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42660),v_42661);


var G__42664 = seq__41940_42655;
var G__42665 = chunk__41941_42656;
var G__42666 = count__41942_42657;
var G__42667 = (i__41943_42658 + (1));
seq__41940_42655 = G__42664;
chunk__41941_42656 = G__42665;
count__41942_42657 = G__42666;
i__41943_42658 = G__42667;
continue;
} else {
var temp__5804__auto___42668 = cljs.core.seq(seq__41940_42655);
if(temp__5804__auto___42668){
var seq__41940_42669__$1 = temp__5804__auto___42668;
if(cljs.core.chunked_seq_QMARK_(seq__41940_42669__$1)){
var c__5568__auto___42674 = cljs.core.chunk_first(seq__41940_42669__$1);
var G__42675 = cljs.core.chunk_rest(seq__41940_42669__$1);
var G__42676 = c__5568__auto___42674;
var G__42677 = cljs.core.count(c__5568__auto___42674);
var G__42678 = (0);
seq__41940_42655 = G__42675;
chunk__41941_42656 = G__42676;
count__41942_42657 = G__42677;
i__41943_42658 = G__42678;
continue;
} else {
var vec__41974_42679 = cljs.core.first(seq__41940_42669__$1);
var k_42680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41974_42679,(0),null);
var v_42681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41974_42679,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_42680);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42680),v_42681);


var G__42682 = cljs.core.next(seq__41940_42669__$1);
var G__42683 = null;
var G__42684 = (0);
var G__42685 = (0);
seq__41940_42655 = G__42682;
chunk__41941_42656 = G__42683;
count__41942_42657 = G__42684;
i__41943_42658 = G__42685;
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
var vec__41981 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41981,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41981,(1),null);
var seq__41985_42686 = cljs.core.seq(node_children);
var chunk__41987_42687 = null;
var count__41988_42688 = (0);
var i__41989_42689 = (0);
while(true){
if((i__41989_42689 < count__41988_42688)){
var child_struct_42690 = chunk__41987_42687.cljs$core$IIndexed$_nth$arity$2(null,i__41989_42689);
if((!((child_struct_42690 == null)))){
if(typeof child_struct_42690 === 'string'){
var text_42691 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42691),child_struct_42690].join(''));
} else {
var children_42696 = shadow.dom.svg_node(child_struct_42690);
if(cljs.core.seq_QMARK_(children_42696)){
var seq__42033_42697 = cljs.core.seq(children_42696);
var chunk__42035_42698 = null;
var count__42036_42699 = (0);
var i__42037_42700 = (0);
while(true){
if((i__42037_42700 < count__42036_42699)){
var child_42701 = chunk__42035_42698.cljs$core$IIndexed$_nth$arity$2(null,i__42037_42700);
if(cljs.core.truth_(child_42701)){
node.appendChild(child_42701);


var G__42702 = seq__42033_42697;
var G__42703 = chunk__42035_42698;
var G__42704 = count__42036_42699;
var G__42705 = (i__42037_42700 + (1));
seq__42033_42697 = G__42702;
chunk__42035_42698 = G__42703;
count__42036_42699 = G__42704;
i__42037_42700 = G__42705;
continue;
} else {
var G__42706 = seq__42033_42697;
var G__42707 = chunk__42035_42698;
var G__42708 = count__42036_42699;
var G__42709 = (i__42037_42700 + (1));
seq__42033_42697 = G__42706;
chunk__42035_42698 = G__42707;
count__42036_42699 = G__42708;
i__42037_42700 = G__42709;
continue;
}
} else {
var temp__5804__auto___42710 = cljs.core.seq(seq__42033_42697);
if(temp__5804__auto___42710){
var seq__42033_42711__$1 = temp__5804__auto___42710;
if(cljs.core.chunked_seq_QMARK_(seq__42033_42711__$1)){
var c__5568__auto___42712 = cljs.core.chunk_first(seq__42033_42711__$1);
var G__42713 = cljs.core.chunk_rest(seq__42033_42711__$1);
var G__42714 = c__5568__auto___42712;
var G__42715 = cljs.core.count(c__5568__auto___42712);
var G__42716 = (0);
seq__42033_42697 = G__42713;
chunk__42035_42698 = G__42714;
count__42036_42699 = G__42715;
i__42037_42700 = G__42716;
continue;
} else {
var child_42717 = cljs.core.first(seq__42033_42711__$1);
if(cljs.core.truth_(child_42717)){
node.appendChild(child_42717);


var G__42718 = cljs.core.next(seq__42033_42711__$1);
var G__42719 = null;
var G__42720 = (0);
var G__42721 = (0);
seq__42033_42697 = G__42718;
chunk__42035_42698 = G__42719;
count__42036_42699 = G__42720;
i__42037_42700 = G__42721;
continue;
} else {
var G__42722 = cljs.core.next(seq__42033_42711__$1);
var G__42723 = null;
var G__42724 = (0);
var G__42725 = (0);
seq__42033_42697 = G__42722;
chunk__42035_42698 = G__42723;
count__42036_42699 = G__42724;
i__42037_42700 = G__42725;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42696);
}
}


var G__42726 = seq__41985_42686;
var G__42727 = chunk__41987_42687;
var G__42728 = count__41988_42688;
var G__42729 = (i__41989_42689 + (1));
seq__41985_42686 = G__42726;
chunk__41987_42687 = G__42727;
count__41988_42688 = G__42728;
i__41989_42689 = G__42729;
continue;
} else {
var G__42733 = seq__41985_42686;
var G__42734 = chunk__41987_42687;
var G__42735 = count__41988_42688;
var G__42736 = (i__41989_42689 + (1));
seq__41985_42686 = G__42733;
chunk__41987_42687 = G__42734;
count__41988_42688 = G__42735;
i__41989_42689 = G__42736;
continue;
}
} else {
var temp__5804__auto___42737 = cljs.core.seq(seq__41985_42686);
if(temp__5804__auto___42737){
var seq__41985_42738__$1 = temp__5804__auto___42737;
if(cljs.core.chunked_seq_QMARK_(seq__41985_42738__$1)){
var c__5568__auto___42739 = cljs.core.chunk_first(seq__41985_42738__$1);
var G__42740 = cljs.core.chunk_rest(seq__41985_42738__$1);
var G__42741 = c__5568__auto___42739;
var G__42742 = cljs.core.count(c__5568__auto___42739);
var G__42743 = (0);
seq__41985_42686 = G__42740;
chunk__41987_42687 = G__42741;
count__41988_42688 = G__42742;
i__41989_42689 = G__42743;
continue;
} else {
var child_struct_42744 = cljs.core.first(seq__41985_42738__$1);
if((!((child_struct_42744 == null)))){
if(typeof child_struct_42744 === 'string'){
var text_42745 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42745),child_struct_42744].join(''));
} else {
var children_42746 = shadow.dom.svg_node(child_struct_42744);
if(cljs.core.seq_QMARK_(children_42746)){
var seq__42040_42747 = cljs.core.seq(children_42746);
var chunk__42042_42748 = null;
var count__42043_42749 = (0);
var i__42044_42750 = (0);
while(true){
if((i__42044_42750 < count__42043_42749)){
var child_42751 = chunk__42042_42748.cljs$core$IIndexed$_nth$arity$2(null,i__42044_42750);
if(cljs.core.truth_(child_42751)){
node.appendChild(child_42751);


var G__42752 = seq__42040_42747;
var G__42753 = chunk__42042_42748;
var G__42754 = count__42043_42749;
var G__42755 = (i__42044_42750 + (1));
seq__42040_42747 = G__42752;
chunk__42042_42748 = G__42753;
count__42043_42749 = G__42754;
i__42044_42750 = G__42755;
continue;
} else {
var G__42756 = seq__42040_42747;
var G__42757 = chunk__42042_42748;
var G__42758 = count__42043_42749;
var G__42759 = (i__42044_42750 + (1));
seq__42040_42747 = G__42756;
chunk__42042_42748 = G__42757;
count__42043_42749 = G__42758;
i__42044_42750 = G__42759;
continue;
}
} else {
var temp__5804__auto___42760__$1 = cljs.core.seq(seq__42040_42747);
if(temp__5804__auto___42760__$1){
var seq__42040_42764__$1 = temp__5804__auto___42760__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42040_42764__$1)){
var c__5568__auto___42766 = cljs.core.chunk_first(seq__42040_42764__$1);
var G__42768 = cljs.core.chunk_rest(seq__42040_42764__$1);
var G__42769 = c__5568__auto___42766;
var G__42770 = cljs.core.count(c__5568__auto___42766);
var G__42771 = (0);
seq__42040_42747 = G__42768;
chunk__42042_42748 = G__42769;
count__42043_42749 = G__42770;
i__42044_42750 = G__42771;
continue;
} else {
var child_42773 = cljs.core.first(seq__42040_42764__$1);
if(cljs.core.truth_(child_42773)){
node.appendChild(child_42773);


var G__42774 = cljs.core.next(seq__42040_42764__$1);
var G__42775 = null;
var G__42776 = (0);
var G__42777 = (0);
seq__42040_42747 = G__42774;
chunk__42042_42748 = G__42775;
count__42043_42749 = G__42776;
i__42044_42750 = G__42777;
continue;
} else {
var G__42778 = cljs.core.next(seq__42040_42764__$1);
var G__42781 = null;
var G__42783 = (0);
var G__42784 = (0);
seq__42040_42747 = G__42778;
chunk__42042_42748 = G__42781;
count__42043_42749 = G__42783;
i__42044_42750 = G__42784;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42746);
}
}


var G__42785 = cljs.core.next(seq__41985_42738__$1);
var G__42786 = null;
var G__42787 = (0);
var G__42788 = (0);
seq__41985_42686 = G__42785;
chunk__41987_42687 = G__42786;
count__41988_42688 = G__42787;
i__41989_42689 = G__42788;
continue;
} else {
var G__42789 = cljs.core.next(seq__41985_42738__$1);
var G__42790 = null;
var G__42791 = (0);
var G__42792 = (0);
seq__41985_42686 = G__42789;
chunk__41987_42687 = G__42790;
count__41988_42688 = G__42791;
i__41989_42689 = G__42792;
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
var len__5769__auto___42803 = arguments.length;
var i__5770__auto___42804 = (0);
while(true){
if((i__5770__auto___42804 < len__5769__auto___42803)){
args__5775__auto__.push((arguments[i__5770__auto___42804]));

var G__42805 = (i__5770__auto___42804 + (1));
i__5770__auto___42804 = G__42805;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq42131){
var G__42132 = cljs.core.first(seq42131);
var seq42131__$1 = cljs.core.next(seq42131);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42132,seq42131__$1);
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
var G__42152 = arguments.length;
switch (G__42152) {
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
var c__27317__auto___42811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_42169){
var state_val_42170 = (state_42169[(1)]);
if((state_val_42170 === (1))){
var state_42169__$1 = state_42169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42169__$1,(2),once_or_cleanup);
} else {
if((state_val_42170 === (2))){
var inst_42166 = (state_42169[(2)]);
var inst_42167 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_42169__$1 = (function (){var statearr_42175 = state_42169;
(statearr_42175[(7)] = inst_42166);

return statearr_42175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42169__$1,inst_42167);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27139__auto__ = null;
var shadow$dom$state_machine__27139__auto____0 = (function (){
var statearr_42177 = [null,null,null,null,null,null,null,null];
(statearr_42177[(0)] = shadow$dom$state_machine__27139__auto__);

(statearr_42177[(1)] = (1));

return statearr_42177;
});
var shadow$dom$state_machine__27139__auto____1 = (function (state_42169){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_42169);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e42179){var ex__27142__auto__ = e42179;
var statearr_42181_42827 = state_42169;
(statearr_42181_42827[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_42169[(4)]))){
var statearr_42182_42828 = state_42169;
(statearr_42182_42828[(1)] = cljs.core.first((state_42169[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42829 = state_42169;
state_42169 = G__42829;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
shadow$dom$state_machine__27139__auto__ = function(state_42169){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27139__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27139__auto____1.call(this,state_42169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27139__auto____0;
shadow$dom$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27139__auto____1;
return shadow$dom$state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_42183 = f__27318__auto__();
(statearr_42183[(6)] = c__27317__auto___42811);

return statearr_42183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
