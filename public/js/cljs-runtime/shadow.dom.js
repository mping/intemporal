goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29203 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_29203(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29204 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_29204(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28335 = coll;
var G__28336 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28335,G__28336) : shadow.dom.lazy_native_coll_seq.call(null,G__28335,G__28336));
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
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
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
var G__28344 = arguments.length;
switch (G__28344) {
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
var G__28346 = arguments.length;
switch (G__28346) {
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
var G__28348 = arguments.length;
switch (G__28348) {
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
var G__28355 = arguments.length;
switch (G__28355) {
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
var G__28376 = arguments.length;
switch (G__28376) {
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
var G__28406 = arguments.length;
switch (G__28406) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e28408){if((e28408 instanceof Object)){
var e = e28408;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28408;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28409 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28410 = null;
var count__28411 = (0);
var i__28412 = (0);
while(true){
if((i__28412 < count__28411)){
var el = chunk__28410.cljs$core$IIndexed$_nth$arity$2(null,i__28412);
var handler_29267__$1 = ((function (seq__28409,chunk__28410,count__28411,i__28412,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28409,chunk__28410,count__28411,i__28412,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29267__$1);


var G__29268 = seq__28409;
var G__29269 = chunk__28410;
var G__29270 = count__28411;
var G__29271 = (i__28412 + (1));
seq__28409 = G__29268;
chunk__28410 = G__29269;
count__28411 = G__29270;
i__28412 = G__29271;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28409);
if(temp__5825__auto__){
var seq__28409__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28409__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28409__$1);
var G__29273 = cljs.core.chunk_rest(seq__28409__$1);
var G__29274 = c__5548__auto__;
var G__29275 = cljs.core.count(c__5548__auto__);
var G__29276 = (0);
seq__28409 = G__29273;
chunk__28410 = G__29274;
count__28411 = G__29275;
i__28412 = G__29276;
continue;
} else {
var el = cljs.core.first(seq__28409__$1);
var handler_29277__$1 = ((function (seq__28409,chunk__28410,count__28411,i__28412,el,seq__28409__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28409,chunk__28410,count__28411,i__28412,el,seq__28409__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29277__$1);


var G__29279 = cljs.core.next(seq__28409__$1);
var G__29280 = null;
var G__29281 = (0);
var G__29282 = (0);
seq__28409 = G__29279;
chunk__28410 = G__29280;
count__28411 = G__29281;
i__28412 = G__29282;
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
var G__28421 = arguments.length;
switch (G__28421) {
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
var seq__28440 = cljs.core.seq(events);
var chunk__28441 = null;
var count__28442 = (0);
var i__28443 = (0);
while(true){
if((i__28443 < count__28442)){
var vec__28452 = chunk__28441.cljs$core$IIndexed$_nth$arity$2(null,i__28443);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28452,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28452,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29287 = seq__28440;
var G__29288 = chunk__28441;
var G__29289 = count__28442;
var G__29290 = (i__28443 + (1));
seq__28440 = G__29287;
chunk__28441 = G__29288;
count__28442 = G__29289;
i__28443 = G__29290;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28440);
if(temp__5825__auto__){
var seq__28440__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28440__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28440__$1);
var G__29293 = cljs.core.chunk_rest(seq__28440__$1);
var G__29294 = c__5548__auto__;
var G__29295 = cljs.core.count(c__5548__auto__);
var G__29296 = (0);
seq__28440 = G__29293;
chunk__28441 = G__29294;
count__28442 = G__29295;
i__28443 = G__29296;
continue;
} else {
var vec__28455 = cljs.core.first(seq__28440__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28455,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28455,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29297 = cljs.core.next(seq__28440__$1);
var G__29298 = null;
var G__29299 = (0);
var G__29300 = (0);
seq__28440 = G__29297;
chunk__28441 = G__29298;
count__28442 = G__29299;
i__28443 = G__29300;
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
var seq__28464 = cljs.core.seq(styles);
var chunk__28465 = null;
var count__28466 = (0);
var i__28467 = (0);
while(true){
if((i__28467 < count__28466)){
var vec__28477 = chunk__28465.cljs$core$IIndexed$_nth$arity$2(null,i__28467);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28477,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28477,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29303 = seq__28464;
var G__29304 = chunk__28465;
var G__29305 = count__28466;
var G__29306 = (i__28467 + (1));
seq__28464 = G__29303;
chunk__28465 = G__29304;
count__28466 = G__29305;
i__28467 = G__29306;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28464);
if(temp__5825__auto__){
var seq__28464__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28464__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28464__$1);
var G__29307 = cljs.core.chunk_rest(seq__28464__$1);
var G__29308 = c__5548__auto__;
var G__29309 = cljs.core.count(c__5548__auto__);
var G__29310 = (0);
seq__28464 = G__29307;
chunk__28465 = G__29308;
count__28466 = G__29309;
i__28467 = G__29310;
continue;
} else {
var vec__28487 = cljs.core.first(seq__28464__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28487,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28487,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29311 = cljs.core.next(seq__28464__$1);
var G__29312 = null;
var G__29313 = (0);
var G__29314 = (0);
seq__28464 = G__29311;
chunk__28465 = G__29312;
count__28466 = G__29313;
i__28467 = G__29314;
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
var G__28530_29315 = key;
var G__28530_29316__$1 = (((G__28530_29315 instanceof cljs.core.Keyword))?G__28530_29315.fqn:null);
switch (G__28530_29316__$1) {
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
var ks_29318 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_29318,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_29318,"aria-");
}
})())){
el.setAttribute(ks_29318,value);
} else {
(el[ks_29318] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28536){
var map__28537 = p__28536;
var map__28537__$1 = cljs.core.__destructure_map(map__28537);
var props = map__28537__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28537__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28538 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28538,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28538,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28538,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28541 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28541,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28541;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28544 = arguments.length;
switch (G__28544) {
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
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
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
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28570){
var vec__28571 = p__28570;
var seq__28572 = cljs.core.seq(vec__28571);
var first__28573 = cljs.core.first(seq__28572);
var seq__28572__$1 = cljs.core.next(seq__28572);
var nn = first__28573;
var first__28573__$1 = cljs.core.first(seq__28572__$1);
var seq__28572__$2 = cljs.core.next(seq__28572__$1);
var np = first__28573__$1;
var nc = seq__28572__$2;
var node = vec__28571;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28574 = nn;
var G__28575 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28574,G__28575) : create_fn.call(null,G__28574,G__28575));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28576 = nn;
var G__28577 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28576,G__28577) : create_fn.call(null,G__28576,G__28577));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28578 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28578,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28578,(1),null);
var seq__28581_29346 = cljs.core.seq(node_children);
var chunk__28582_29347 = null;
var count__28583_29348 = (0);
var i__28584_29349 = (0);
while(true){
if((i__28584_29349 < count__28583_29348)){
var child_struct_29350 = chunk__28582_29347.cljs$core$IIndexed$_nth$arity$2(null,i__28584_29349);
var children_29351 = shadow.dom.dom_node(child_struct_29350);
if(cljs.core.seq_QMARK_(children_29351)){
var seq__28616_29352 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29351));
var chunk__28618_29353 = null;
var count__28619_29354 = (0);
var i__28620_29355 = (0);
while(true){
if((i__28620_29355 < count__28619_29354)){
var child_29357 = chunk__28618_29353.cljs$core$IIndexed$_nth$arity$2(null,i__28620_29355);
if(cljs.core.truth_(child_29357)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29357);


var G__29358 = seq__28616_29352;
var G__29359 = chunk__28618_29353;
var G__29360 = count__28619_29354;
var G__29361 = (i__28620_29355 + (1));
seq__28616_29352 = G__29358;
chunk__28618_29353 = G__29359;
count__28619_29354 = G__29360;
i__28620_29355 = G__29361;
continue;
} else {
var G__29362 = seq__28616_29352;
var G__29363 = chunk__28618_29353;
var G__29364 = count__28619_29354;
var G__29365 = (i__28620_29355 + (1));
seq__28616_29352 = G__29362;
chunk__28618_29353 = G__29363;
count__28619_29354 = G__29364;
i__28620_29355 = G__29365;
continue;
}
} else {
var temp__5825__auto___29367 = cljs.core.seq(seq__28616_29352);
if(temp__5825__auto___29367){
var seq__28616_29368__$1 = temp__5825__auto___29367;
if(cljs.core.chunked_seq_QMARK_(seq__28616_29368__$1)){
var c__5548__auto___29369 = cljs.core.chunk_first(seq__28616_29368__$1);
var G__29370 = cljs.core.chunk_rest(seq__28616_29368__$1);
var G__29371 = c__5548__auto___29369;
var G__29372 = cljs.core.count(c__5548__auto___29369);
var G__29373 = (0);
seq__28616_29352 = G__29370;
chunk__28618_29353 = G__29371;
count__28619_29354 = G__29372;
i__28620_29355 = G__29373;
continue;
} else {
var child_29374 = cljs.core.first(seq__28616_29368__$1);
if(cljs.core.truth_(child_29374)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29374);


var G__29376 = cljs.core.next(seq__28616_29368__$1);
var G__29377 = null;
var G__29378 = (0);
var G__29379 = (0);
seq__28616_29352 = G__29376;
chunk__28618_29353 = G__29377;
count__28619_29354 = G__29378;
i__28620_29355 = G__29379;
continue;
} else {
var G__29380 = cljs.core.next(seq__28616_29368__$1);
var G__29381 = null;
var G__29382 = (0);
var G__29383 = (0);
seq__28616_29352 = G__29380;
chunk__28618_29353 = G__29381;
count__28619_29354 = G__29382;
i__28620_29355 = G__29383;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29351);
}


var G__29384 = seq__28581_29346;
var G__29385 = chunk__28582_29347;
var G__29386 = count__28583_29348;
var G__29387 = (i__28584_29349 + (1));
seq__28581_29346 = G__29384;
chunk__28582_29347 = G__29385;
count__28583_29348 = G__29386;
i__28584_29349 = G__29387;
continue;
} else {
var temp__5825__auto___29388 = cljs.core.seq(seq__28581_29346);
if(temp__5825__auto___29388){
var seq__28581_29389__$1 = temp__5825__auto___29388;
if(cljs.core.chunked_seq_QMARK_(seq__28581_29389__$1)){
var c__5548__auto___29390 = cljs.core.chunk_first(seq__28581_29389__$1);
var G__29391 = cljs.core.chunk_rest(seq__28581_29389__$1);
var G__29392 = c__5548__auto___29390;
var G__29393 = cljs.core.count(c__5548__auto___29390);
var G__29394 = (0);
seq__28581_29346 = G__29391;
chunk__28582_29347 = G__29392;
count__28583_29348 = G__29393;
i__28584_29349 = G__29394;
continue;
} else {
var child_struct_29396 = cljs.core.first(seq__28581_29389__$1);
var children_29397 = shadow.dom.dom_node(child_struct_29396);
if(cljs.core.seq_QMARK_(children_29397)){
var seq__28627_29398 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29397));
var chunk__28629_29399 = null;
var count__28630_29400 = (0);
var i__28631_29401 = (0);
while(true){
if((i__28631_29401 < count__28630_29400)){
var child_29402 = chunk__28629_29399.cljs$core$IIndexed$_nth$arity$2(null,i__28631_29401);
if(cljs.core.truth_(child_29402)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29402);


var G__29406 = seq__28627_29398;
var G__29407 = chunk__28629_29399;
var G__29408 = count__28630_29400;
var G__29409 = (i__28631_29401 + (1));
seq__28627_29398 = G__29406;
chunk__28629_29399 = G__29407;
count__28630_29400 = G__29408;
i__28631_29401 = G__29409;
continue;
} else {
var G__29410 = seq__28627_29398;
var G__29411 = chunk__28629_29399;
var G__29412 = count__28630_29400;
var G__29413 = (i__28631_29401 + (1));
seq__28627_29398 = G__29410;
chunk__28629_29399 = G__29411;
count__28630_29400 = G__29412;
i__28631_29401 = G__29413;
continue;
}
} else {
var temp__5825__auto___29416__$1 = cljs.core.seq(seq__28627_29398);
if(temp__5825__auto___29416__$1){
var seq__28627_29417__$1 = temp__5825__auto___29416__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28627_29417__$1)){
var c__5548__auto___29418 = cljs.core.chunk_first(seq__28627_29417__$1);
var G__29419 = cljs.core.chunk_rest(seq__28627_29417__$1);
var G__29420 = c__5548__auto___29418;
var G__29421 = cljs.core.count(c__5548__auto___29418);
var G__29422 = (0);
seq__28627_29398 = G__29419;
chunk__28629_29399 = G__29420;
count__28630_29400 = G__29421;
i__28631_29401 = G__29422;
continue;
} else {
var child_29423 = cljs.core.first(seq__28627_29417__$1);
if(cljs.core.truth_(child_29423)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29423);


var G__29425 = cljs.core.next(seq__28627_29417__$1);
var G__29426 = null;
var G__29427 = (0);
var G__29428 = (0);
seq__28627_29398 = G__29425;
chunk__28629_29399 = G__29426;
count__28630_29400 = G__29427;
i__28631_29401 = G__29428;
continue;
} else {
var G__29430 = cljs.core.next(seq__28627_29417__$1);
var G__29431 = null;
var G__29432 = (0);
var G__29433 = (0);
seq__28627_29398 = G__29430;
chunk__28629_29399 = G__29431;
count__28630_29400 = G__29432;
i__28631_29401 = G__29433;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29397);
}


var G__29434 = cljs.core.next(seq__28581_29389__$1);
var G__29435 = null;
var G__29436 = (0);
var G__29437 = (0);
seq__28581_29346 = G__29434;
chunk__28582_29347 = G__29435;
count__28583_29348 = G__29436;
i__28584_29349 = G__29437;
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
var seq__28655 = cljs.core.seq(node);
var chunk__28656 = null;
var count__28657 = (0);
var i__28658 = (0);
while(true){
if((i__28658 < count__28657)){
var n = chunk__28656.cljs$core$IIndexed$_nth$arity$2(null,i__28658);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29443 = seq__28655;
var G__29444 = chunk__28656;
var G__29445 = count__28657;
var G__29446 = (i__28658 + (1));
seq__28655 = G__29443;
chunk__28656 = G__29444;
count__28657 = G__29445;
i__28658 = G__29446;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28655);
if(temp__5825__auto__){
var seq__28655__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28655__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28655__$1);
var G__29448 = cljs.core.chunk_rest(seq__28655__$1);
var G__29449 = c__5548__auto__;
var G__29450 = cljs.core.count(c__5548__auto__);
var G__29451 = (0);
seq__28655 = G__29448;
chunk__28656 = G__29449;
count__28657 = G__29450;
i__28658 = G__29451;
continue;
} else {
var n = cljs.core.first(seq__28655__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29452 = cljs.core.next(seq__28655__$1);
var G__29453 = null;
var G__29454 = (0);
var G__29455 = (0);
seq__28655 = G__29452;
chunk__28656 = G__29453;
count__28657 = G__29454;
i__28658 = G__29455;
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
var G__28661 = arguments.length;
switch (G__28661) {
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
var G__28663 = arguments.length;
switch (G__28663) {
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
var G__28684 = arguments.length;
switch (G__28684) {
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
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
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
var args__5755__auto__ = [];
var len__5749__auto___29475 = arguments.length;
var i__5750__auto___29476 = (0);
while(true){
if((i__5750__auto___29476 < len__5749__auto___29475)){
args__5755__auto__.push((arguments[i__5750__auto___29476]));

var G__29477 = (i__5750__auto___29476 + (1));
i__5750__auto___29476 = G__29477;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__28687_29478 = cljs.core.seq(nodes);
var chunk__28688_29479 = null;
var count__28689_29480 = (0);
var i__28690_29481 = (0);
while(true){
if((i__28690_29481 < count__28689_29480)){
var node_29482 = chunk__28688_29479.cljs$core$IIndexed$_nth$arity$2(null,i__28690_29481);
fragment.appendChild(shadow.dom._to_dom(node_29482));


var G__29484 = seq__28687_29478;
var G__29485 = chunk__28688_29479;
var G__29486 = count__28689_29480;
var G__29487 = (i__28690_29481 + (1));
seq__28687_29478 = G__29484;
chunk__28688_29479 = G__29485;
count__28689_29480 = G__29486;
i__28690_29481 = G__29487;
continue;
} else {
var temp__5825__auto___29488 = cljs.core.seq(seq__28687_29478);
if(temp__5825__auto___29488){
var seq__28687_29489__$1 = temp__5825__auto___29488;
if(cljs.core.chunked_seq_QMARK_(seq__28687_29489__$1)){
var c__5548__auto___29490 = cljs.core.chunk_first(seq__28687_29489__$1);
var G__29491 = cljs.core.chunk_rest(seq__28687_29489__$1);
var G__29492 = c__5548__auto___29490;
var G__29493 = cljs.core.count(c__5548__auto___29490);
var G__29494 = (0);
seq__28687_29478 = G__29491;
chunk__28688_29479 = G__29492;
count__28689_29480 = G__29493;
i__28690_29481 = G__29494;
continue;
} else {
var node_29498 = cljs.core.first(seq__28687_29489__$1);
fragment.appendChild(shadow.dom._to_dom(node_29498));


var G__29499 = cljs.core.next(seq__28687_29489__$1);
var G__29500 = null;
var G__29501 = (0);
var G__29502 = (0);
seq__28687_29478 = G__29499;
chunk__28688_29479 = G__29500;
count__28689_29480 = G__29501;
i__28690_29481 = G__29502;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq28686){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28686));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__28702_29504 = cljs.core.seq(scripts);
var chunk__28703_29505 = null;
var count__28704_29506 = (0);
var i__28705_29507 = (0);
while(true){
if((i__28705_29507 < count__28704_29506)){
var vec__28716_29508 = chunk__28703_29505.cljs$core$IIndexed$_nth$arity$2(null,i__28705_29507);
var script_tag_29509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28716_29508,(0),null);
var script_body_29510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28716_29508,(1),null);
eval(script_body_29510);


var G__29511 = seq__28702_29504;
var G__29512 = chunk__28703_29505;
var G__29513 = count__28704_29506;
var G__29514 = (i__28705_29507 + (1));
seq__28702_29504 = G__29511;
chunk__28703_29505 = G__29512;
count__28704_29506 = G__29513;
i__28705_29507 = G__29514;
continue;
} else {
var temp__5825__auto___29515 = cljs.core.seq(seq__28702_29504);
if(temp__5825__auto___29515){
var seq__28702_29516__$1 = temp__5825__auto___29515;
if(cljs.core.chunked_seq_QMARK_(seq__28702_29516__$1)){
var c__5548__auto___29517 = cljs.core.chunk_first(seq__28702_29516__$1);
var G__29518 = cljs.core.chunk_rest(seq__28702_29516__$1);
var G__29519 = c__5548__auto___29517;
var G__29520 = cljs.core.count(c__5548__auto___29517);
var G__29521 = (0);
seq__28702_29504 = G__29518;
chunk__28703_29505 = G__29519;
count__28704_29506 = G__29520;
i__28705_29507 = G__29521;
continue;
} else {
var vec__28719_29522 = cljs.core.first(seq__28702_29516__$1);
var script_tag_29523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28719_29522,(0),null);
var script_body_29524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28719_29522,(1),null);
eval(script_body_29524);


var G__29525 = cljs.core.next(seq__28702_29516__$1);
var G__29526 = null;
var G__29527 = (0);
var G__29528 = (0);
seq__28702_29504 = G__29525;
chunk__28703_29505 = G__29526;
count__28704_29506 = G__29527;
i__28705_29507 = G__29528;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__28722){
var vec__28723 = p__28722;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28723,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28723,(1),null);
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
var G__28734 = arguments.length;
switch (G__28734) {
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
var seq__28743 = cljs.core.seq(style_keys);
var chunk__28744 = null;
var count__28745 = (0);
var i__28746 = (0);
while(true){
if((i__28746 < count__28745)){
var it = chunk__28744.cljs$core$IIndexed$_nth$arity$2(null,i__28746);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29543 = seq__28743;
var G__29544 = chunk__28744;
var G__29545 = count__28745;
var G__29546 = (i__28746 + (1));
seq__28743 = G__29543;
chunk__28744 = G__29544;
count__28745 = G__29545;
i__28746 = G__29546;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28743);
if(temp__5825__auto__){
var seq__28743__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28743__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28743__$1);
var G__29547 = cljs.core.chunk_rest(seq__28743__$1);
var G__29548 = c__5548__auto__;
var G__29549 = cljs.core.count(c__5548__auto__);
var G__29550 = (0);
seq__28743 = G__29547;
chunk__28744 = G__29548;
count__28745 = G__29549;
i__28746 = G__29550;
continue;
} else {
var it = cljs.core.first(seq__28743__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29551 = cljs.core.next(seq__28743__$1);
var G__29552 = null;
var G__29553 = (0);
var G__29554 = (0);
seq__28743 = G__29551;
chunk__28744 = G__29552;
count__28745 = G__29553;
i__28746 = G__29554;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k28775,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__28799 = k28775;
var G__28799__$1 = (((G__28799 instanceof cljs.core.Keyword))?G__28799.fqn:null);
switch (G__28799__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28775,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__28800){
var vec__28802 = p__28800;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28802,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28802,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28774){
var self__ = this;
var G__28774__$1 = this;
return (new cljs.core.RecordIter((0),G__28774__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28779,other28780){
var self__ = this;
var this28779__$1 = this;
return (((!((other28780 == null)))) && ((((this28779__$1.constructor === other28780.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28779__$1.x,other28780.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28779__$1.y,other28780.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28779__$1.__extmap,other28780.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k28775){
var self__ = this;
var this__5330__auto____$1 = this;
var G__28827 = k28775;
var G__28827__$1 = (((G__28827 instanceof cljs.core.Keyword))?G__28827.fqn:null);
switch (G__28827__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28775);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__28774){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__28830 = cljs.core.keyword_identical_QMARK_;
var expr__28831 = k__5332__auto__;
if(cljs.core.truth_((pred__28830.cljs$core$IFn$_invoke$arity$2 ? pred__28830.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__28831) : pred__28830.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__28831)))){
return (new shadow.dom.Coordinate(G__28774,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28830.cljs$core$IFn$_invoke$arity$2 ? pred__28830.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__28831) : pred__28830.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__28831)))){
return (new shadow.dom.Coordinate(self__.x,G__28774,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__28774),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__28774){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__28774,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__28794){
var extmap__5365__auto__ = (function (){var G__28834 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28794,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__28794)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28834);
} else {
return G__28834;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28794),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28794),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k28846,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__28859 = k28846;
var G__28859__$1 = (((G__28859 instanceof cljs.core.Keyword))?G__28859.fqn:null);
switch (G__28859__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28846,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__28860){
var vec__28861 = p__28860;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28861,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28861,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28845){
var self__ = this;
var G__28845__$1 = this;
return (new cljs.core.RecordIter((0),G__28845__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28847,other28848){
var self__ = this;
var this28847__$1 = this;
return (((!((other28848 == null)))) && ((((this28847__$1.constructor === other28848.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28847__$1.w,other28848.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28847__$1.h,other28848.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28847__$1.__extmap,other28848.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k28846){
var self__ = this;
var this__5330__auto____$1 = this;
var G__28877 = k28846;
var G__28877__$1 = (((G__28877 instanceof cljs.core.Keyword))?G__28877.fqn:null);
switch (G__28877__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28846);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__28845){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__28881 = cljs.core.keyword_identical_QMARK_;
var expr__28882 = k__5332__auto__;
if(cljs.core.truth_((pred__28881.cljs$core$IFn$_invoke$arity$2 ? pred__28881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__28882) : pred__28881.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__28882)))){
return (new shadow.dom.Size(G__28845,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28881.cljs$core$IFn$_invoke$arity$2 ? pred__28881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__28882) : pred__28881.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__28882)))){
return (new shadow.dom.Size(self__.w,G__28845,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__28845),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__28845){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__28845,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__28849){
var extmap__5365__auto__ = (function (){var G__28897 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28849,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__28849)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28897);
} else {
return G__28897;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__28849),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__28849),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__29609 = (i + (1));
var G__29610 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29609;
ret = G__29610;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28933){
var vec__28936 = p__28933;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28936,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28936,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__28949 = arguments.length;
switch (G__28949) {
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
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
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
var G__29615 = ps;
var G__29616 = (i + (1));
el__$1 = G__29615;
i = G__29616;
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
var vec__28980 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28980,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28980,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28980,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__28985_29617 = cljs.core.seq(props);
var chunk__28986_29618 = null;
var count__28987_29619 = (0);
var i__28988_29620 = (0);
while(true){
if((i__28988_29620 < count__28987_29619)){
var vec__29024_29622 = chunk__28986_29618.cljs$core$IIndexed$_nth$arity$2(null,i__28988_29620);
var k_29623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29024_29622,(0),null);
var v_29624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29024_29622,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_29623);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29623),v_29624);


var G__29627 = seq__28985_29617;
var G__29628 = chunk__28986_29618;
var G__29629 = count__28987_29619;
var G__29630 = (i__28988_29620 + (1));
seq__28985_29617 = G__29627;
chunk__28986_29618 = G__29628;
count__28987_29619 = G__29629;
i__28988_29620 = G__29630;
continue;
} else {
var temp__5825__auto___29631 = cljs.core.seq(seq__28985_29617);
if(temp__5825__auto___29631){
var seq__28985_29632__$1 = temp__5825__auto___29631;
if(cljs.core.chunked_seq_QMARK_(seq__28985_29632__$1)){
var c__5548__auto___29633 = cljs.core.chunk_first(seq__28985_29632__$1);
var G__29634 = cljs.core.chunk_rest(seq__28985_29632__$1);
var G__29635 = c__5548__auto___29633;
var G__29636 = cljs.core.count(c__5548__auto___29633);
var G__29637 = (0);
seq__28985_29617 = G__29634;
chunk__28986_29618 = G__29635;
count__28987_29619 = G__29636;
i__28988_29620 = G__29637;
continue;
} else {
var vec__29031_29638 = cljs.core.first(seq__28985_29632__$1);
var k_29639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29031_29638,(0),null);
var v_29640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29031_29638,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_29639);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29639),v_29640);


var G__29642 = cljs.core.next(seq__28985_29632__$1);
var G__29643 = null;
var G__29644 = (0);
var G__29645 = (0);
seq__28985_29617 = G__29642;
chunk__28986_29618 = G__29643;
count__28987_29619 = G__29644;
i__28988_29620 = G__29645;
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
var vec__29041 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29041,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29041,(1),null);
var seq__29044_29647 = cljs.core.seq(node_children);
var chunk__29046_29648 = null;
var count__29047_29649 = (0);
var i__29048_29650 = (0);
while(true){
if((i__29048_29650 < count__29047_29649)){
var child_struct_29651 = chunk__29046_29648.cljs$core$IIndexed$_nth$arity$2(null,i__29048_29650);
if((!((child_struct_29651 == null)))){
if(typeof child_struct_29651 === 'string'){
var text_29652 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29652),child_struct_29651].join(''));
} else {
var children_29653 = shadow.dom.svg_node(child_struct_29651);
if(cljs.core.seq_QMARK_(children_29653)){
var seq__29084_29654 = cljs.core.seq(children_29653);
var chunk__29086_29655 = null;
var count__29087_29656 = (0);
var i__29088_29657 = (0);
while(true){
if((i__29088_29657 < count__29087_29656)){
var child_29658 = chunk__29086_29655.cljs$core$IIndexed$_nth$arity$2(null,i__29088_29657);
if(cljs.core.truth_(child_29658)){
node.appendChild(child_29658);


var G__29661 = seq__29084_29654;
var G__29662 = chunk__29086_29655;
var G__29663 = count__29087_29656;
var G__29664 = (i__29088_29657 + (1));
seq__29084_29654 = G__29661;
chunk__29086_29655 = G__29662;
count__29087_29656 = G__29663;
i__29088_29657 = G__29664;
continue;
} else {
var G__29666 = seq__29084_29654;
var G__29667 = chunk__29086_29655;
var G__29668 = count__29087_29656;
var G__29669 = (i__29088_29657 + (1));
seq__29084_29654 = G__29666;
chunk__29086_29655 = G__29667;
count__29087_29656 = G__29668;
i__29088_29657 = G__29669;
continue;
}
} else {
var temp__5825__auto___29671 = cljs.core.seq(seq__29084_29654);
if(temp__5825__auto___29671){
var seq__29084_29672__$1 = temp__5825__auto___29671;
if(cljs.core.chunked_seq_QMARK_(seq__29084_29672__$1)){
var c__5548__auto___29673 = cljs.core.chunk_first(seq__29084_29672__$1);
var G__29674 = cljs.core.chunk_rest(seq__29084_29672__$1);
var G__29675 = c__5548__auto___29673;
var G__29676 = cljs.core.count(c__5548__auto___29673);
var G__29677 = (0);
seq__29084_29654 = G__29674;
chunk__29086_29655 = G__29675;
count__29087_29656 = G__29676;
i__29088_29657 = G__29677;
continue;
} else {
var child_29678 = cljs.core.first(seq__29084_29672__$1);
if(cljs.core.truth_(child_29678)){
node.appendChild(child_29678);


var G__29679 = cljs.core.next(seq__29084_29672__$1);
var G__29680 = null;
var G__29681 = (0);
var G__29682 = (0);
seq__29084_29654 = G__29679;
chunk__29086_29655 = G__29680;
count__29087_29656 = G__29681;
i__29088_29657 = G__29682;
continue;
} else {
var G__29683 = cljs.core.next(seq__29084_29672__$1);
var G__29684 = null;
var G__29685 = (0);
var G__29686 = (0);
seq__29084_29654 = G__29683;
chunk__29086_29655 = G__29684;
count__29087_29656 = G__29685;
i__29088_29657 = G__29686;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29653);
}
}


var G__29687 = seq__29044_29647;
var G__29688 = chunk__29046_29648;
var G__29689 = count__29047_29649;
var G__29690 = (i__29048_29650 + (1));
seq__29044_29647 = G__29687;
chunk__29046_29648 = G__29688;
count__29047_29649 = G__29689;
i__29048_29650 = G__29690;
continue;
} else {
var G__29692 = seq__29044_29647;
var G__29693 = chunk__29046_29648;
var G__29694 = count__29047_29649;
var G__29695 = (i__29048_29650 + (1));
seq__29044_29647 = G__29692;
chunk__29046_29648 = G__29693;
count__29047_29649 = G__29694;
i__29048_29650 = G__29695;
continue;
}
} else {
var temp__5825__auto___29700 = cljs.core.seq(seq__29044_29647);
if(temp__5825__auto___29700){
var seq__29044_29706__$1 = temp__5825__auto___29700;
if(cljs.core.chunked_seq_QMARK_(seq__29044_29706__$1)){
var c__5548__auto___29708 = cljs.core.chunk_first(seq__29044_29706__$1);
var G__29709 = cljs.core.chunk_rest(seq__29044_29706__$1);
var G__29710 = c__5548__auto___29708;
var G__29711 = cljs.core.count(c__5548__auto___29708);
var G__29712 = (0);
seq__29044_29647 = G__29709;
chunk__29046_29648 = G__29710;
count__29047_29649 = G__29711;
i__29048_29650 = G__29712;
continue;
} else {
var child_struct_29717 = cljs.core.first(seq__29044_29706__$1);
if((!((child_struct_29717 == null)))){
if(typeof child_struct_29717 === 'string'){
var text_29719 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29719),child_struct_29717].join(''));
} else {
var children_29720 = shadow.dom.svg_node(child_struct_29717);
if(cljs.core.seq_QMARK_(children_29720)){
var seq__29100_29721 = cljs.core.seq(children_29720);
var chunk__29102_29722 = null;
var count__29103_29723 = (0);
var i__29104_29724 = (0);
while(true){
if((i__29104_29724 < count__29103_29723)){
var child_29725 = chunk__29102_29722.cljs$core$IIndexed$_nth$arity$2(null,i__29104_29724);
if(cljs.core.truth_(child_29725)){
node.appendChild(child_29725);


var G__29726 = seq__29100_29721;
var G__29727 = chunk__29102_29722;
var G__29728 = count__29103_29723;
var G__29729 = (i__29104_29724 + (1));
seq__29100_29721 = G__29726;
chunk__29102_29722 = G__29727;
count__29103_29723 = G__29728;
i__29104_29724 = G__29729;
continue;
} else {
var G__29730 = seq__29100_29721;
var G__29731 = chunk__29102_29722;
var G__29732 = count__29103_29723;
var G__29733 = (i__29104_29724 + (1));
seq__29100_29721 = G__29730;
chunk__29102_29722 = G__29731;
count__29103_29723 = G__29732;
i__29104_29724 = G__29733;
continue;
}
} else {
var temp__5825__auto___29736__$1 = cljs.core.seq(seq__29100_29721);
if(temp__5825__auto___29736__$1){
var seq__29100_29738__$1 = temp__5825__auto___29736__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29100_29738__$1)){
var c__5548__auto___29739 = cljs.core.chunk_first(seq__29100_29738__$1);
var G__29740 = cljs.core.chunk_rest(seq__29100_29738__$1);
var G__29741 = c__5548__auto___29739;
var G__29742 = cljs.core.count(c__5548__auto___29739);
var G__29743 = (0);
seq__29100_29721 = G__29740;
chunk__29102_29722 = G__29741;
count__29103_29723 = G__29742;
i__29104_29724 = G__29743;
continue;
} else {
var child_29747 = cljs.core.first(seq__29100_29738__$1);
if(cljs.core.truth_(child_29747)){
node.appendChild(child_29747);


var G__29748 = cljs.core.next(seq__29100_29738__$1);
var G__29749 = null;
var G__29750 = (0);
var G__29751 = (0);
seq__29100_29721 = G__29748;
chunk__29102_29722 = G__29749;
count__29103_29723 = G__29750;
i__29104_29724 = G__29751;
continue;
} else {
var G__29752 = cljs.core.next(seq__29100_29738__$1);
var G__29753 = null;
var G__29754 = (0);
var G__29755 = (0);
seq__29100_29721 = G__29752;
chunk__29102_29722 = G__29753;
count__29103_29723 = G__29754;
i__29104_29724 = G__29755;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29720);
}
}


var G__29757 = cljs.core.next(seq__29044_29706__$1);
var G__29758 = null;
var G__29759 = (0);
var G__29760 = (0);
seq__29044_29647 = G__29757;
chunk__29046_29648 = G__29758;
count__29047_29649 = G__29759;
i__29048_29650 = G__29760;
continue;
} else {
var G__29761 = cljs.core.next(seq__29044_29706__$1);
var G__29762 = null;
var G__29763 = (0);
var G__29764 = (0);
seq__29044_29647 = G__29761;
chunk__29046_29648 = G__29762;
count__29047_29649 = G__29763;
i__29048_29650 = G__29764;
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
var args__5755__auto__ = [];
var len__5749__auto___29767 = arguments.length;
var i__5750__auto___29769 = (0);
while(true){
if((i__5750__auto___29769 < len__5749__auto___29767)){
args__5755__auto__.push((arguments[i__5750__auto___29769]));

var G__29770 = (i__5750__auto___29769 + (1));
i__5750__auto___29769 = G__29770;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29151){
var G__29152 = cljs.core.first(seq29151);
var seq29151__$1 = cljs.core.next(seq29151);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29152,seq29151__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
