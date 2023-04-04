goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35966 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_35966(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35967 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_35967(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33823 = coll;
var G__33824 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33823,G__33824) : shadow.dom.lazy_native_coll_seq.call(null,G__33823,G__33824));
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
var G__33911 = arguments.length;
switch (G__33911) {
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
var G__33923 = arguments.length;
switch (G__33923) {
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
var G__33935 = arguments.length;
switch (G__33935) {
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
var G__33942 = arguments.length;
switch (G__33942) {
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
var G__33964 = arguments.length;
switch (G__33964) {
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
var G__34005 = arguments.length;
switch (G__34005) {
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
}catch (e34018){if((e34018 instanceof Object)){
var e = e34018;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34018;

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
var seq__34048 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34049 = null;
var count__34050 = (0);
var i__34051 = (0);
while(true){
if((i__34051 < count__34050)){
var el = chunk__34049.cljs$core$IIndexed$_nth$arity$2(null,i__34051);
var handler_35980__$1 = ((function (seq__34048,chunk__34049,count__34050,i__34051,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34048,chunk__34049,count__34050,i__34051,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35980__$1);


var G__35983 = seq__34048;
var G__35984 = chunk__34049;
var G__35985 = count__34050;
var G__35986 = (i__34051 + (1));
seq__34048 = G__35983;
chunk__34049 = G__35984;
count__34050 = G__35985;
i__34051 = G__35986;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34048);
if(temp__5804__auto__){
var seq__34048__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34048__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34048__$1);
var G__35987 = cljs.core.chunk_rest(seq__34048__$1);
var G__35988 = c__5568__auto__;
var G__35989 = cljs.core.count(c__5568__auto__);
var G__35990 = (0);
seq__34048 = G__35987;
chunk__34049 = G__35988;
count__34050 = G__35989;
i__34051 = G__35990;
continue;
} else {
var el = cljs.core.first(seq__34048__$1);
var handler_35991__$1 = ((function (seq__34048,chunk__34049,count__34050,i__34051,el,seq__34048__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34048,chunk__34049,count__34050,i__34051,el,seq__34048__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35991__$1);


var G__35992 = cljs.core.next(seq__34048__$1);
var G__35993 = null;
var G__35994 = (0);
var G__35995 = (0);
seq__34048 = G__35992;
chunk__34049 = G__35993;
count__34050 = G__35994;
i__34051 = G__35995;
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
var G__34082 = arguments.length;
switch (G__34082) {
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
var seq__34091 = cljs.core.seq(events);
var chunk__34092 = null;
var count__34093 = (0);
var i__34094 = (0);
while(true){
if((i__34094 < count__34093)){
var vec__34117 = chunk__34092.cljs$core$IIndexed$_nth$arity$2(null,i__34094);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34117,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34117,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35999 = seq__34091;
var G__36000 = chunk__34092;
var G__36001 = count__34093;
var G__36002 = (i__34094 + (1));
seq__34091 = G__35999;
chunk__34092 = G__36000;
count__34093 = G__36001;
i__34094 = G__36002;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34091);
if(temp__5804__auto__){
var seq__34091__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34091__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34091__$1);
var G__36004 = cljs.core.chunk_rest(seq__34091__$1);
var G__36005 = c__5568__auto__;
var G__36006 = cljs.core.count(c__5568__auto__);
var G__36007 = (0);
seq__34091 = G__36004;
chunk__34092 = G__36005;
count__34093 = G__36006;
i__34094 = G__36007;
continue;
} else {
var vec__34134 = cljs.core.first(seq__34091__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34134,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34134,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36008 = cljs.core.next(seq__34091__$1);
var G__36009 = null;
var G__36010 = (0);
var G__36011 = (0);
seq__34091 = G__36008;
chunk__34092 = G__36009;
count__34093 = G__36010;
i__34094 = G__36011;
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
var seq__34141 = cljs.core.seq(styles);
var chunk__34142 = null;
var count__34143 = (0);
var i__34144 = (0);
while(true){
if((i__34144 < count__34143)){
var vec__34166 = chunk__34142.cljs$core$IIndexed$_nth$arity$2(null,i__34144);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34166,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34166,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36012 = seq__34141;
var G__36013 = chunk__34142;
var G__36014 = count__34143;
var G__36015 = (i__34144 + (1));
seq__34141 = G__36012;
chunk__34142 = G__36013;
count__34143 = G__36014;
i__34144 = G__36015;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34141);
if(temp__5804__auto__){
var seq__34141__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34141__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34141__$1);
var G__36017 = cljs.core.chunk_rest(seq__34141__$1);
var G__36018 = c__5568__auto__;
var G__36019 = cljs.core.count(c__5568__auto__);
var G__36020 = (0);
seq__34141 = G__36017;
chunk__34142 = G__36018;
count__34143 = G__36019;
i__34144 = G__36020;
continue;
} else {
var vec__34172 = cljs.core.first(seq__34141__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34172,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34172,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36021 = cljs.core.next(seq__34141__$1);
var G__36022 = null;
var G__36023 = (0);
var G__36024 = (0);
seq__34141 = G__36021;
chunk__34142 = G__36022;
count__34143 = G__36023;
i__34144 = G__36024;
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
var G__34183_36026 = key;
var G__34183_36027__$1 = (((G__34183_36026 instanceof cljs.core.Keyword))?G__34183_36026.fqn:null);
switch (G__34183_36027__$1) {
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
var ks_36030 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_36030,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_36030,"aria-");
}
})())){
el.setAttribute(ks_36030,value);
} else {
(el[ks_36030] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34229){
var map__34230 = p__34229;
var map__34230__$1 = cljs.core.__destructure_map(map__34230);
var props = map__34230__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34230__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34233 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34233,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34233,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34233,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34240 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34240,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34240;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34247 = arguments.length;
switch (G__34247) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34257){
var vec__34258 = p__34257;
var seq__34259 = cljs.core.seq(vec__34258);
var first__34260 = cljs.core.first(seq__34259);
var seq__34259__$1 = cljs.core.next(seq__34259);
var nn = first__34260;
var first__34260__$1 = cljs.core.first(seq__34259__$1);
var seq__34259__$2 = cljs.core.next(seq__34259__$1);
var np = first__34260__$1;
var nc = seq__34259__$2;
var node = vec__34258;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34266 = nn;
var G__34267 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34266,G__34267) : create_fn.call(null,G__34266,G__34267));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34269 = nn;
var G__34270 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34269,G__34270) : create_fn.call(null,G__34269,G__34270));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34273 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34273,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34273,(1),null);
var seq__34276_36033 = cljs.core.seq(node_children);
var chunk__34277_36034 = null;
var count__34278_36035 = (0);
var i__34279_36036 = (0);
while(true){
if((i__34279_36036 < count__34278_36035)){
var child_struct_36037 = chunk__34277_36034.cljs$core$IIndexed$_nth$arity$2(null,i__34279_36036);
var children_36038 = shadow.dom.dom_node(child_struct_36037);
if(cljs.core.seq_QMARK_(children_36038)){
var seq__34343_36039 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36038));
var chunk__34345_36040 = null;
var count__34346_36041 = (0);
var i__34347_36042 = (0);
while(true){
if((i__34347_36042 < count__34346_36041)){
var child_36043 = chunk__34345_36040.cljs$core$IIndexed$_nth$arity$2(null,i__34347_36042);
if(cljs.core.truth_(child_36043)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36043);


var G__36044 = seq__34343_36039;
var G__36045 = chunk__34345_36040;
var G__36046 = count__34346_36041;
var G__36047 = (i__34347_36042 + (1));
seq__34343_36039 = G__36044;
chunk__34345_36040 = G__36045;
count__34346_36041 = G__36046;
i__34347_36042 = G__36047;
continue;
} else {
var G__36048 = seq__34343_36039;
var G__36049 = chunk__34345_36040;
var G__36050 = count__34346_36041;
var G__36051 = (i__34347_36042 + (1));
seq__34343_36039 = G__36048;
chunk__34345_36040 = G__36049;
count__34346_36041 = G__36050;
i__34347_36042 = G__36051;
continue;
}
} else {
var temp__5804__auto___36052 = cljs.core.seq(seq__34343_36039);
if(temp__5804__auto___36052){
var seq__34343_36053__$1 = temp__5804__auto___36052;
if(cljs.core.chunked_seq_QMARK_(seq__34343_36053__$1)){
var c__5568__auto___36054 = cljs.core.chunk_first(seq__34343_36053__$1);
var G__36055 = cljs.core.chunk_rest(seq__34343_36053__$1);
var G__36056 = c__5568__auto___36054;
var G__36057 = cljs.core.count(c__5568__auto___36054);
var G__36058 = (0);
seq__34343_36039 = G__36055;
chunk__34345_36040 = G__36056;
count__34346_36041 = G__36057;
i__34347_36042 = G__36058;
continue;
} else {
var child_36059 = cljs.core.first(seq__34343_36053__$1);
if(cljs.core.truth_(child_36059)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36059);


var G__36060 = cljs.core.next(seq__34343_36053__$1);
var G__36061 = null;
var G__36062 = (0);
var G__36063 = (0);
seq__34343_36039 = G__36060;
chunk__34345_36040 = G__36061;
count__34346_36041 = G__36062;
i__34347_36042 = G__36063;
continue;
} else {
var G__36064 = cljs.core.next(seq__34343_36053__$1);
var G__36065 = null;
var G__36066 = (0);
var G__36067 = (0);
seq__34343_36039 = G__36064;
chunk__34345_36040 = G__36065;
count__34346_36041 = G__36066;
i__34347_36042 = G__36067;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36038);
}


var G__36068 = seq__34276_36033;
var G__36069 = chunk__34277_36034;
var G__36070 = count__34278_36035;
var G__36071 = (i__34279_36036 + (1));
seq__34276_36033 = G__36068;
chunk__34277_36034 = G__36069;
count__34278_36035 = G__36070;
i__34279_36036 = G__36071;
continue;
} else {
var temp__5804__auto___36072 = cljs.core.seq(seq__34276_36033);
if(temp__5804__auto___36072){
var seq__34276_36073__$1 = temp__5804__auto___36072;
if(cljs.core.chunked_seq_QMARK_(seq__34276_36073__$1)){
var c__5568__auto___36074 = cljs.core.chunk_first(seq__34276_36073__$1);
var G__36075 = cljs.core.chunk_rest(seq__34276_36073__$1);
var G__36076 = c__5568__auto___36074;
var G__36077 = cljs.core.count(c__5568__auto___36074);
var G__36078 = (0);
seq__34276_36033 = G__36075;
chunk__34277_36034 = G__36076;
count__34278_36035 = G__36077;
i__34279_36036 = G__36078;
continue;
} else {
var child_struct_36079 = cljs.core.first(seq__34276_36073__$1);
var children_36080 = shadow.dom.dom_node(child_struct_36079);
if(cljs.core.seq_QMARK_(children_36080)){
var seq__34387_36081 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36080));
var chunk__34389_36082 = null;
var count__34390_36083 = (0);
var i__34391_36084 = (0);
while(true){
if((i__34391_36084 < count__34390_36083)){
var child_36086 = chunk__34389_36082.cljs$core$IIndexed$_nth$arity$2(null,i__34391_36084);
if(cljs.core.truth_(child_36086)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36086);


var G__36088 = seq__34387_36081;
var G__36089 = chunk__34389_36082;
var G__36090 = count__34390_36083;
var G__36091 = (i__34391_36084 + (1));
seq__34387_36081 = G__36088;
chunk__34389_36082 = G__36089;
count__34390_36083 = G__36090;
i__34391_36084 = G__36091;
continue;
} else {
var G__36092 = seq__34387_36081;
var G__36093 = chunk__34389_36082;
var G__36094 = count__34390_36083;
var G__36095 = (i__34391_36084 + (1));
seq__34387_36081 = G__36092;
chunk__34389_36082 = G__36093;
count__34390_36083 = G__36094;
i__34391_36084 = G__36095;
continue;
}
} else {
var temp__5804__auto___36096__$1 = cljs.core.seq(seq__34387_36081);
if(temp__5804__auto___36096__$1){
var seq__34387_36098__$1 = temp__5804__auto___36096__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34387_36098__$1)){
var c__5568__auto___36100 = cljs.core.chunk_first(seq__34387_36098__$1);
var G__36103 = cljs.core.chunk_rest(seq__34387_36098__$1);
var G__36104 = c__5568__auto___36100;
var G__36105 = cljs.core.count(c__5568__auto___36100);
var G__36106 = (0);
seq__34387_36081 = G__36103;
chunk__34389_36082 = G__36104;
count__34390_36083 = G__36105;
i__34391_36084 = G__36106;
continue;
} else {
var child_36108 = cljs.core.first(seq__34387_36098__$1);
if(cljs.core.truth_(child_36108)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36108);


var G__36109 = cljs.core.next(seq__34387_36098__$1);
var G__36110 = null;
var G__36111 = (0);
var G__36112 = (0);
seq__34387_36081 = G__36109;
chunk__34389_36082 = G__36110;
count__34390_36083 = G__36111;
i__34391_36084 = G__36112;
continue;
} else {
var G__36113 = cljs.core.next(seq__34387_36098__$1);
var G__36114 = null;
var G__36115 = (0);
var G__36116 = (0);
seq__34387_36081 = G__36113;
chunk__34389_36082 = G__36114;
count__34390_36083 = G__36115;
i__34391_36084 = G__36116;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36080);
}


var G__36118 = cljs.core.next(seq__34276_36073__$1);
var G__36119 = null;
var G__36120 = (0);
var G__36121 = (0);
seq__34276_36033 = G__36118;
chunk__34277_36034 = G__36119;
count__34278_36035 = G__36120;
i__34279_36036 = G__36121;
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
var seq__34518 = cljs.core.seq(node);
var chunk__34520 = null;
var count__34521 = (0);
var i__34522 = (0);
while(true){
if((i__34522 < count__34521)){
var n = chunk__34520.cljs$core$IIndexed$_nth$arity$2(null,i__34522);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36128 = seq__34518;
var G__36129 = chunk__34520;
var G__36130 = count__34521;
var G__36131 = (i__34522 + (1));
seq__34518 = G__36128;
chunk__34520 = G__36129;
count__34521 = G__36130;
i__34522 = G__36131;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34518);
if(temp__5804__auto__){
var seq__34518__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34518__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34518__$1);
var G__36132 = cljs.core.chunk_rest(seq__34518__$1);
var G__36133 = c__5568__auto__;
var G__36134 = cljs.core.count(c__5568__auto__);
var G__36135 = (0);
seq__34518 = G__36132;
chunk__34520 = G__36133;
count__34521 = G__36134;
i__34522 = G__36135;
continue;
} else {
var n = cljs.core.first(seq__34518__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36137 = cljs.core.next(seq__34518__$1);
var G__36138 = null;
var G__36139 = (0);
var G__36140 = (0);
seq__34518 = G__36137;
chunk__34520 = G__36138;
count__34521 = G__36139;
i__34522 = G__36140;
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
var G__34621 = arguments.length;
switch (G__34621) {
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
var G__34633 = arguments.length;
switch (G__34633) {
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
var G__34684 = arguments.length;
switch (G__34684) {
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
var len__5769__auto___36160 = arguments.length;
var i__5770__auto___36161 = (0);
while(true){
if((i__5770__auto___36161 < len__5769__auto___36160)){
args__5775__auto__.push((arguments[i__5770__auto___36161]));

var G__36164 = (i__5770__auto___36161 + (1));
i__5770__auto___36161 = G__36164;
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
var seq__34792_36165 = cljs.core.seq(nodes);
var chunk__34793_36166 = null;
var count__34794_36167 = (0);
var i__34795_36168 = (0);
while(true){
if((i__34795_36168 < count__34794_36167)){
var node_36169 = chunk__34793_36166.cljs$core$IIndexed$_nth$arity$2(null,i__34795_36168);
fragment.appendChild(shadow.dom._to_dom(node_36169));


var G__36172 = seq__34792_36165;
var G__36173 = chunk__34793_36166;
var G__36174 = count__34794_36167;
var G__36175 = (i__34795_36168 + (1));
seq__34792_36165 = G__36172;
chunk__34793_36166 = G__36173;
count__34794_36167 = G__36174;
i__34795_36168 = G__36175;
continue;
} else {
var temp__5804__auto___36176 = cljs.core.seq(seq__34792_36165);
if(temp__5804__auto___36176){
var seq__34792_36177__$1 = temp__5804__auto___36176;
if(cljs.core.chunked_seq_QMARK_(seq__34792_36177__$1)){
var c__5568__auto___36179 = cljs.core.chunk_first(seq__34792_36177__$1);
var G__36180 = cljs.core.chunk_rest(seq__34792_36177__$1);
var G__36181 = c__5568__auto___36179;
var G__36182 = cljs.core.count(c__5568__auto___36179);
var G__36183 = (0);
seq__34792_36165 = G__36180;
chunk__34793_36166 = G__36181;
count__34794_36167 = G__36182;
i__34795_36168 = G__36183;
continue;
} else {
var node_36184 = cljs.core.first(seq__34792_36177__$1);
fragment.appendChild(shadow.dom._to_dom(node_36184));


var G__36186 = cljs.core.next(seq__34792_36177__$1);
var G__36187 = null;
var G__36188 = (0);
var G__36189 = (0);
seq__34792_36165 = G__36186;
chunk__34793_36166 = G__36187;
count__34794_36167 = G__36188;
i__34795_36168 = G__36189;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34781){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34781));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34850_36191 = cljs.core.seq(scripts);
var chunk__34851_36192 = null;
var count__34852_36193 = (0);
var i__34853_36194 = (0);
while(true){
if((i__34853_36194 < count__34852_36193)){
var vec__34895_36195 = chunk__34851_36192.cljs$core$IIndexed$_nth$arity$2(null,i__34853_36194);
var script_tag_36196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34895_36195,(0),null);
var script_body_36197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34895_36195,(1),null);
eval(script_body_36197);


var G__36198 = seq__34850_36191;
var G__36199 = chunk__34851_36192;
var G__36200 = count__34852_36193;
var G__36201 = (i__34853_36194 + (1));
seq__34850_36191 = G__36198;
chunk__34851_36192 = G__36199;
count__34852_36193 = G__36200;
i__34853_36194 = G__36201;
continue;
} else {
var temp__5804__auto___36202 = cljs.core.seq(seq__34850_36191);
if(temp__5804__auto___36202){
var seq__34850_36203__$1 = temp__5804__auto___36202;
if(cljs.core.chunked_seq_QMARK_(seq__34850_36203__$1)){
var c__5568__auto___36204 = cljs.core.chunk_first(seq__34850_36203__$1);
var G__36205 = cljs.core.chunk_rest(seq__34850_36203__$1);
var G__36206 = c__5568__auto___36204;
var G__36207 = cljs.core.count(c__5568__auto___36204);
var G__36208 = (0);
seq__34850_36191 = G__36205;
chunk__34851_36192 = G__36206;
count__34852_36193 = G__36207;
i__34853_36194 = G__36208;
continue;
} else {
var vec__34924_36209 = cljs.core.first(seq__34850_36203__$1);
var script_tag_36210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34924_36209,(0),null);
var script_body_36211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34924_36209,(1),null);
eval(script_body_36211);


var G__36216 = cljs.core.next(seq__34850_36203__$1);
var G__36217 = null;
var G__36218 = (0);
var G__36219 = (0);
seq__34850_36191 = G__36216;
chunk__34851_36192 = G__36217;
count__34852_36193 = G__36218;
i__34853_36194 = G__36219;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34939){
var vec__34943 = p__34939;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34943,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34943,(1),null);
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
var G__35003 = arguments.length;
switch (G__35003) {
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
var seq__35136 = cljs.core.seq(style_keys);
var chunk__35137 = null;
var count__35138 = (0);
var i__35139 = (0);
while(true){
if((i__35139 < count__35138)){
var it = chunk__35137.cljs$core$IIndexed$_nth$arity$2(null,i__35139);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36227 = seq__35136;
var G__36228 = chunk__35137;
var G__36229 = count__35138;
var G__36230 = (i__35139 + (1));
seq__35136 = G__36227;
chunk__35137 = G__36228;
count__35138 = G__36229;
i__35139 = G__36230;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35136);
if(temp__5804__auto__){
var seq__35136__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35136__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35136__$1);
var G__36231 = cljs.core.chunk_rest(seq__35136__$1);
var G__36232 = c__5568__auto__;
var G__36233 = cljs.core.count(c__5568__auto__);
var G__36234 = (0);
seq__35136 = G__36231;
chunk__35137 = G__36232;
count__35138 = G__36233;
i__35139 = G__36234;
continue;
} else {
var it = cljs.core.first(seq__35136__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36236 = cljs.core.next(seq__35136__$1);
var G__36237 = null;
var G__36238 = (0);
var G__36239 = (0);
seq__35136 = G__36236;
chunk__35137 = G__36237;
count__35138 = G__36238;
i__35139 = G__36239;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35165,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35185 = k35165;
var G__35185__$1 = (((G__35185 instanceof cljs.core.Keyword))?G__35185.fqn:null);
switch (G__35185__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35165,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35195){
var vec__35196 = p__35195;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35196,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35196,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35164){
var self__ = this;
var G__35164__$1 = this;
return (new cljs.core.RecordIter((0),G__35164__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35166,other35167){
var self__ = this;
var this35166__$1 = this;
return (((!((other35167 == null)))) && ((((this35166__$1.constructor === other35167.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35166__$1.x,other35167.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35166__$1.y,other35167.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35166__$1.__extmap,other35167.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35165){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35250 = k35165;
var G__35250__$1 = (((G__35250 instanceof cljs.core.Keyword))?G__35250.fqn:null);
switch (G__35250__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35165);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35164){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35255 = cljs.core.keyword_identical_QMARK_;
var expr__35256 = k__5352__auto__;
if(cljs.core.truth_((pred__35255.cljs$core$IFn$_invoke$arity$2 ? pred__35255.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35256) : pred__35255.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35256)))){
return (new shadow.dom.Coordinate(G__35164,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35255.cljs$core$IFn$_invoke$arity$2 ? pred__35255.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35256) : pred__35255.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35256)))){
return (new shadow.dom.Coordinate(self__.x,G__35164,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35164),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35164){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35164,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35172){
var extmap__5385__auto__ = (function (){var G__35279 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35172,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35172)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35279);
} else {
return G__35279;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35172),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35172),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35317,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35343 = k35317;
var G__35343__$1 = (((G__35343 instanceof cljs.core.Keyword))?G__35343.fqn:null);
switch (G__35343__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35317,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35347){
var vec__35348 = p__35347;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35348,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35348,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35316){
var self__ = this;
var G__35316__$1 = this;
return (new cljs.core.RecordIter((0),G__35316__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35318,other35319){
var self__ = this;
var this35318__$1 = this;
return (((!((other35319 == null)))) && ((((this35318__$1.constructor === other35319.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35318__$1.w,other35319.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35318__$1.h,other35319.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35318__$1.__extmap,other35319.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35317){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35405 = k35317;
var G__35405__$1 = (((G__35405 instanceof cljs.core.Keyword))?G__35405.fqn:null);
switch (G__35405__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35317);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35316){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35421 = cljs.core.keyword_identical_QMARK_;
var expr__35422 = k__5352__auto__;
if(cljs.core.truth_((pred__35421.cljs$core$IFn$_invoke$arity$2 ? pred__35421.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35422) : pred__35421.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35422)))){
return (new shadow.dom.Size(G__35316,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35421.cljs$core$IFn$_invoke$arity$2 ? pred__35421.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35422) : pred__35421.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35422)))){
return (new shadow.dom.Size(self__.w,G__35316,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35316),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35316){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35316,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35328){
var extmap__5385__auto__ = (function (){var G__35447 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35328,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35328)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35447);
} else {
return G__35447;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35328),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35328),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__36304 = (i + (1));
var G__36305 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36304;
ret = G__36305;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35515){
var vec__35516 = p__35515;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35547 = arguments.length;
switch (G__35547) {
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
var G__36320 = ps;
var G__36321 = (i + (1));
el__$1 = G__36320;
i = G__36321;
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
var vec__35630 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35636_36332 = cljs.core.seq(props);
var chunk__35637_36333 = null;
var count__35638_36334 = (0);
var i__35639_36335 = (0);
while(true){
if((i__35639_36335 < count__35638_36334)){
var vec__35658_36337 = chunk__35637_36333.cljs$core$IIndexed$_nth$arity$2(null,i__35639_36335);
var k_36338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35658_36337,(0),null);
var v_36339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35658_36337,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_36338);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36338),v_36339);


var G__36340 = seq__35636_36332;
var G__36341 = chunk__35637_36333;
var G__36342 = count__35638_36334;
var G__36343 = (i__35639_36335 + (1));
seq__35636_36332 = G__36340;
chunk__35637_36333 = G__36341;
count__35638_36334 = G__36342;
i__35639_36335 = G__36343;
continue;
} else {
var temp__5804__auto___36345 = cljs.core.seq(seq__35636_36332);
if(temp__5804__auto___36345){
var seq__35636_36347__$1 = temp__5804__auto___36345;
if(cljs.core.chunked_seq_QMARK_(seq__35636_36347__$1)){
var c__5568__auto___36348 = cljs.core.chunk_first(seq__35636_36347__$1);
var G__36349 = cljs.core.chunk_rest(seq__35636_36347__$1);
var G__36350 = c__5568__auto___36348;
var G__36351 = cljs.core.count(c__5568__auto___36348);
var G__36352 = (0);
seq__35636_36332 = G__36349;
chunk__35637_36333 = G__36350;
count__35638_36334 = G__36351;
i__35639_36335 = G__36352;
continue;
} else {
var vec__35667_36353 = cljs.core.first(seq__35636_36347__$1);
var k_36354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35667_36353,(0),null);
var v_36355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35667_36353,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_36354);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36354),v_36355);


var G__36356 = cljs.core.next(seq__35636_36347__$1);
var G__36357 = null;
var G__36358 = (0);
var G__36359 = (0);
seq__35636_36332 = G__36356;
chunk__35637_36333 = G__36357;
count__35638_36334 = G__36358;
i__35639_36335 = G__36359;
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
var vec__35686 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35686,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35686,(1),null);
var seq__35690_36360 = cljs.core.seq(node_children);
var chunk__35692_36361 = null;
var count__35693_36362 = (0);
var i__35694_36363 = (0);
while(true){
if((i__35694_36363 < count__35693_36362)){
var child_struct_36364 = chunk__35692_36361.cljs$core$IIndexed$_nth$arity$2(null,i__35694_36363);
if((!((child_struct_36364 == null)))){
if(typeof child_struct_36364 === 'string'){
var text_36365 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36365),child_struct_36364].join(''));
} else {
var children_36366 = shadow.dom.svg_node(child_struct_36364);
if(cljs.core.seq_QMARK_(children_36366)){
var seq__35758_36367 = cljs.core.seq(children_36366);
var chunk__35760_36368 = null;
var count__35761_36369 = (0);
var i__35762_36370 = (0);
while(true){
if((i__35762_36370 < count__35761_36369)){
var child_36371 = chunk__35760_36368.cljs$core$IIndexed$_nth$arity$2(null,i__35762_36370);
if(cljs.core.truth_(child_36371)){
node.appendChild(child_36371);


var G__36373 = seq__35758_36367;
var G__36374 = chunk__35760_36368;
var G__36375 = count__35761_36369;
var G__36376 = (i__35762_36370 + (1));
seq__35758_36367 = G__36373;
chunk__35760_36368 = G__36374;
count__35761_36369 = G__36375;
i__35762_36370 = G__36376;
continue;
} else {
var G__36377 = seq__35758_36367;
var G__36378 = chunk__35760_36368;
var G__36379 = count__35761_36369;
var G__36380 = (i__35762_36370 + (1));
seq__35758_36367 = G__36377;
chunk__35760_36368 = G__36378;
count__35761_36369 = G__36379;
i__35762_36370 = G__36380;
continue;
}
} else {
var temp__5804__auto___36381 = cljs.core.seq(seq__35758_36367);
if(temp__5804__auto___36381){
var seq__35758_36382__$1 = temp__5804__auto___36381;
if(cljs.core.chunked_seq_QMARK_(seq__35758_36382__$1)){
var c__5568__auto___36383 = cljs.core.chunk_first(seq__35758_36382__$1);
var G__36384 = cljs.core.chunk_rest(seq__35758_36382__$1);
var G__36385 = c__5568__auto___36383;
var G__36386 = cljs.core.count(c__5568__auto___36383);
var G__36387 = (0);
seq__35758_36367 = G__36384;
chunk__35760_36368 = G__36385;
count__35761_36369 = G__36386;
i__35762_36370 = G__36387;
continue;
} else {
var child_36388 = cljs.core.first(seq__35758_36382__$1);
if(cljs.core.truth_(child_36388)){
node.appendChild(child_36388);


var G__36389 = cljs.core.next(seq__35758_36382__$1);
var G__36390 = null;
var G__36391 = (0);
var G__36392 = (0);
seq__35758_36367 = G__36389;
chunk__35760_36368 = G__36390;
count__35761_36369 = G__36391;
i__35762_36370 = G__36392;
continue;
} else {
var G__36393 = cljs.core.next(seq__35758_36382__$1);
var G__36394 = null;
var G__36395 = (0);
var G__36396 = (0);
seq__35758_36367 = G__36393;
chunk__35760_36368 = G__36394;
count__35761_36369 = G__36395;
i__35762_36370 = G__36396;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36366);
}
}


var G__36403 = seq__35690_36360;
var G__36404 = chunk__35692_36361;
var G__36405 = count__35693_36362;
var G__36406 = (i__35694_36363 + (1));
seq__35690_36360 = G__36403;
chunk__35692_36361 = G__36404;
count__35693_36362 = G__36405;
i__35694_36363 = G__36406;
continue;
} else {
var G__36413 = seq__35690_36360;
var G__36414 = chunk__35692_36361;
var G__36415 = count__35693_36362;
var G__36416 = (i__35694_36363 + (1));
seq__35690_36360 = G__36413;
chunk__35692_36361 = G__36414;
count__35693_36362 = G__36415;
i__35694_36363 = G__36416;
continue;
}
} else {
var temp__5804__auto___36418 = cljs.core.seq(seq__35690_36360);
if(temp__5804__auto___36418){
var seq__35690_36420__$1 = temp__5804__auto___36418;
if(cljs.core.chunked_seq_QMARK_(seq__35690_36420__$1)){
var c__5568__auto___36421 = cljs.core.chunk_first(seq__35690_36420__$1);
var G__36422 = cljs.core.chunk_rest(seq__35690_36420__$1);
var G__36423 = c__5568__auto___36421;
var G__36424 = cljs.core.count(c__5568__auto___36421);
var G__36425 = (0);
seq__35690_36360 = G__36422;
chunk__35692_36361 = G__36423;
count__35693_36362 = G__36424;
i__35694_36363 = G__36425;
continue;
} else {
var child_struct_36427 = cljs.core.first(seq__35690_36420__$1);
if((!((child_struct_36427 == null)))){
if(typeof child_struct_36427 === 'string'){
var text_36428 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36428),child_struct_36427].join(''));
} else {
var children_36429 = shadow.dom.svg_node(child_struct_36427);
if(cljs.core.seq_QMARK_(children_36429)){
var seq__35777_36430 = cljs.core.seq(children_36429);
var chunk__35779_36431 = null;
var count__35780_36432 = (0);
var i__35781_36433 = (0);
while(true){
if((i__35781_36433 < count__35780_36432)){
var child_36434 = chunk__35779_36431.cljs$core$IIndexed$_nth$arity$2(null,i__35781_36433);
if(cljs.core.truth_(child_36434)){
node.appendChild(child_36434);


var G__36435 = seq__35777_36430;
var G__36436 = chunk__35779_36431;
var G__36437 = count__35780_36432;
var G__36438 = (i__35781_36433 + (1));
seq__35777_36430 = G__36435;
chunk__35779_36431 = G__36436;
count__35780_36432 = G__36437;
i__35781_36433 = G__36438;
continue;
} else {
var G__36439 = seq__35777_36430;
var G__36440 = chunk__35779_36431;
var G__36441 = count__35780_36432;
var G__36442 = (i__35781_36433 + (1));
seq__35777_36430 = G__36439;
chunk__35779_36431 = G__36440;
count__35780_36432 = G__36441;
i__35781_36433 = G__36442;
continue;
}
} else {
var temp__5804__auto___36444__$1 = cljs.core.seq(seq__35777_36430);
if(temp__5804__auto___36444__$1){
var seq__35777_36447__$1 = temp__5804__auto___36444__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35777_36447__$1)){
var c__5568__auto___36449 = cljs.core.chunk_first(seq__35777_36447__$1);
var G__36450 = cljs.core.chunk_rest(seq__35777_36447__$1);
var G__36451 = c__5568__auto___36449;
var G__36452 = cljs.core.count(c__5568__auto___36449);
var G__36453 = (0);
seq__35777_36430 = G__36450;
chunk__35779_36431 = G__36451;
count__35780_36432 = G__36452;
i__35781_36433 = G__36453;
continue;
} else {
var child_36455 = cljs.core.first(seq__35777_36447__$1);
if(cljs.core.truth_(child_36455)){
node.appendChild(child_36455);


var G__36456 = cljs.core.next(seq__35777_36447__$1);
var G__36457 = null;
var G__36458 = (0);
var G__36459 = (0);
seq__35777_36430 = G__36456;
chunk__35779_36431 = G__36457;
count__35780_36432 = G__36458;
i__35781_36433 = G__36459;
continue;
} else {
var G__36460 = cljs.core.next(seq__35777_36447__$1);
var G__36461 = null;
var G__36462 = (0);
var G__36463 = (0);
seq__35777_36430 = G__36460;
chunk__35779_36431 = G__36461;
count__35780_36432 = G__36462;
i__35781_36433 = G__36463;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36429);
}
}


var G__36464 = cljs.core.next(seq__35690_36420__$1);
var G__36465 = null;
var G__36466 = (0);
var G__36467 = (0);
seq__35690_36360 = G__36464;
chunk__35692_36361 = G__36465;
count__35693_36362 = G__36466;
i__35694_36363 = G__36467;
continue;
} else {
var G__36468 = cljs.core.next(seq__35690_36420__$1);
var G__36469 = null;
var G__36470 = (0);
var G__36471 = (0);
seq__35690_36360 = G__36468;
chunk__35692_36361 = G__36469;
count__35693_36362 = G__36470;
i__35694_36363 = G__36471;
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
var len__5769__auto___36474 = arguments.length;
var i__5770__auto___36475 = (0);
while(true){
if((i__5770__auto___36475 < len__5769__auto___36474)){
args__5775__auto__.push((arguments[i__5770__auto___36475]));

var G__36477 = (i__5770__auto___36475 + (1));
i__5770__auto___36475 = G__36477;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35823){
var G__35824 = cljs.core.first(seq35823);
var seq35823__$1 = cljs.core.next(seq35823);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35824,seq35823__$1);
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
var G__35884 = arguments.length;
switch (G__35884) {
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
var c__29727__auto___36493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_35923){
var state_val_35924 = (state_35923[(1)]);
if((state_val_35924 === (1))){
var state_35923__$1 = state_35923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35923__$1,(2),once_or_cleanup);
} else {
if((state_val_35924 === (2))){
var inst_35919 = (state_35923[(2)]);
var inst_35920 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35923__$1 = (function (){var statearr_35931 = state_35923;
(statearr_35931[(7)] = inst_35919);

return statearr_35931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35923__$1,inst_35920);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29270__auto__ = null;
var shadow$dom$state_machine__29270__auto____0 = (function (){
var statearr_35935 = [null,null,null,null,null,null,null,null];
(statearr_35935[(0)] = shadow$dom$state_machine__29270__auto__);

(statearr_35935[(1)] = (1));

return statearr_35935;
});
var shadow$dom$state_machine__29270__auto____1 = (function (state_35923){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_35923);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e35936){var ex__29273__auto__ = e35936;
var statearr_35937_36498 = state_35923;
(statearr_35937_36498[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_35923[(4)]))){
var statearr_35938_36499 = state_35923;
(statearr_35938_36499[(1)] = cljs.core.first((state_35923[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36501 = state_35923;
state_35923 = G__36501;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
shadow$dom$state_machine__29270__auto__ = function(state_35923){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29270__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29270__auto____1.call(this,state_35923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29270__auto____0;
shadow$dom$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29270__auto____1;
return shadow$dom$state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_35942 = f__29728__auto__();
(statearr_35942[(6)] = c__29727__auto___36493);

return statearr_35942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
